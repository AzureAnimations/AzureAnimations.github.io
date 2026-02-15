---
title: Secrets Management
---

# 🔐 Secrets Management in GitHub

Properly managing secrets is critical for security. GitHub provides multiple levels of secrets management to keep your credentials, API keys, and sensitive data safe while making them accessible to your workflows.

## Types of Secrets

### 1. Repository Secrets
- Scoped to a single repository
- Available in workflows for that repository
- Best for repository-specific credentials

### 2. Environment Secrets
- Scoped to specific environments (staging, production)
- Require environment protection rules
- Can require manual approval

### 3. Organization Secrets
- Shared across multiple repositories
- Centralized secret management
- Available to selected repositories

### 4. Dependabot Secrets
- Specifically for Dependabot workflows
- Isolated from other workflows
- Used for private registry access

## Creating Secrets

### Via Web Interface

```
Repository Settings → Secrets and variables → Actions → New repository secret

Organization Settings → Secrets and variables → Actions → New organization secret
```

### Using GitHub CLI

```bash
# Add repository secret
gh secret set SECRET_NAME

# Add from file
gh secret set SECRET_NAME < secret.txt

# Add organization secret
gh secret set SECRET_NAME --org organization-name

# List secrets
gh secret list
```

## Using Secrets in Workflows

### Basic Usage

```yaml
name: Deploy Application

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to server
        env:
          API_KEY: ${{ secrets.API_KEY }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: |
          ./deploy.sh
```

### Environment Secrets

```yaml
jobs:
  deploy-production:
    runs-on: ubuntu-latest
    environment: production  # Uses production environment secrets
    steps:
      - name: Deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
        run: |
          echo "Deploying with production credentials"
```

### Conditional Secrets

```yaml
- name: Deploy
  env:
    # Use different secrets based on branch
    API_KEY: ${{ github.ref == 'refs/heads/main' && secrets.PROD_API_KEY || secrets.DEV_API_KEY }}
  run: ./deploy.sh
```

## Secret Security Best Practices

### 1. Least Privilege Access
```yaml
# ✅ Good: Minimal permissions
permissions:
  contents: read
  
# ❌ Bad: Excessive permissions
permissions: write-all
```

### 2. Never Log Secrets
```yaml
# ✅ Good: Masked output
- name: Safe logging
  run: echo "Deployment started"

# ❌ Bad: Exposing secrets
- name: Dangerous logging
  run: echo "API key is ${{ secrets.API_KEY }}"
```

### 3. Use Environment Protection
```yaml
# Require approval for production
environment:
  name: production
  protection_rules:
    - required_reviewers: 2
    - wait_timer: 30  # 30 minute wait
```

### 4. Rotate Secrets Regularly
```bash
# Create new secret
gh secret set DATABASE_PASSWORD

# Update applications
# Delete old secret after migration
gh secret remove OLD_DATABASE_PASSWORD
```

## Advanced Patterns

### Multi-Cloud Credentials

```yaml
name: Multi-Cloud Deploy

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Configure AWS
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Configure Azure
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      
      - name: Configure GCP
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_CREDENTIALS }}
```

### Dynamic Secret Generation

```yaml
- name: Generate temporary credentials
  id: temp-creds
  run: |
    # Generate temporary token
    TOKEN=$(curl -X POST ... | jq -r '.token')
    echo "::add-mask::$TOKEN"
    echo "token=$TOKEN" >> $GITHUB_OUTPUT

- name: Use temporary credentials
  env:
    TEMP_TOKEN: ${{ steps.temp-creds.outputs.token }}
  run: ./deploy.sh
```

### Secret Inheritance

```yaml
# Parent workflow
jobs:
  call-reusable:
    uses: ./.github/workflows/reusable.yml
    secrets:
      api-key: ${{ secrets.API_KEY }}
      database-url: ${{ secrets.DATABASE_URL }}

# Reusable workflow
on:
  workflow_call:
    secrets:
      api-key:
        required: true
      database-url:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Use secrets
        env:
          API_KEY: ${{ secrets.api-key }}
          DB_URL: ${{ secrets.database-url }}
        run: ./deploy.sh
```

## External Secret Management

### HashiCorp Vault Integration

```yaml
- name: Import Secrets from Vault
  uses: hashicorp/vault-action@v2
  with:
    url: https://vault.example.com
    token: ${{ secrets.VAULT_TOKEN }}
    secrets: |
      secret/data/production/api | API_KEY ;
      secret/data/production/db | DATABASE_URL

- name: Use Vault secrets
  env:
    API_KEY: ${{ env.API_KEY }}
    DATABASE_URL: ${{ env.DATABASE_URL }}
  run: ./deploy.sh
```

### AWS Secrets Manager

```yaml
- name: Get secrets from AWS
  uses: aws-actions/aws-secretsmanager-get-secrets@v1
  with:
    secret-ids: |
      prod/api-key
      prod/database-url
    parse-json-secrets: true

- name: Use AWS secrets
  env:
    API_KEY: ${{ env.PROD_API_KEY }}
  run: ./deploy.sh
```

### Azure Key Vault

```yaml
- name: Get secrets from Key Vault
  uses: Azure/get-keyvault-secrets@v1
  with:
    keyvault: "my-keyvault"
    secrets: 'api-key, database-url'
  id: keyvault-secrets

- name: Use Key Vault secrets
  env:
    API_KEY: ${{ steps.keyvault-secrets.outputs.api-key }}
  run: ./deploy.sh
```

## OIDC Authentication (Recommended)

### Configure OIDC for AWS

```yaml
permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/GitHubActionsRole
          aws-region: us-east-1
      
      # No need for static AWS credentials!
      - name: Deploy to AWS
        run: aws s3 sync ./build s3://my-bucket
```

### Configure OIDC for Azure

```yaml
permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Azure Login
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
      
      # No need for Azure credentials secret!
      - name: Deploy to Azure
        run: az webapp deploy ...
```

## Secret Scanning

### Enable Secret Scanning

```
Repository Settings → Security → Code security and analysis
→ Enable secret scanning
→ Enable push protection
```

### Custom Patterns

```yaml
# .github/secret-scanning.yml
patterns:
  - name: Company API Key
    regex: 'COMPANY_[A-Z0-9]{32}'
    
  - name: Internal Token
    regex: 'internal_tk_[a-f0-9]{40}'
```

### Handle Leaked Secrets

```bash
# If a secret is exposed:
1. Immediately revoke the secret
2. Remove from code history
3. Rotate to new secret
4. Update all services
5. Review access logs
```

## Compliance and Auditing

### Audit Secret Usage

```bash
# View workflow runs
gh run list --limit 50

# Check specific run
gh run view RUN_ID --log

# List secrets (names only, values never exposed)
gh secret list
```

### Secret Policy Enforcement

```yaml
# Required secret checks
- name: Validate secrets exist
  run: |
    if [ -z "${{ secrets.API_KEY }}" ]; then
      echo "Error: API_KEY secret not set"
      exit 1
    fi
```

## Secrets Checklist

- ✅ Never commit secrets to repository
- ✅ Use environment-specific secrets
- ✅ Enable secret scanning and push protection
- ✅ Rotate secrets regularly (90 days)
- ✅ Use OIDC when possible (no long-lived credentials)
- ✅ Apply least privilege to secret access
- ✅ Monitor secret usage via audit logs
- ✅ Document secret requirements
- ✅ Use external secret managers for sensitive data
- ✅ Implement approval workflows for production

## Resources

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [OIDC Authentication](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
