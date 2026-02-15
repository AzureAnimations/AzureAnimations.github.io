---
title: Reusable Workflows
---

# 🔄 Reusable Workflows

Reusable workflows are a powerful way to avoid duplication and standardize your CI/CD processes across repositories. Create workflows once and call them from other workflows, making your automation more maintainable and consistent.

## Why Reusable Workflows?

### Benefits
- **DRY Principle** - Don't Repeat Yourself
- **Centralized Updates** - Fix once, apply everywhere
- **Standardization** - Enforce best practices
- **Simplified Maintenance** - Single source of truth
- **Cross-Repository** - Share across organization

## Creating a Reusable Workflow

### Basic Structure

`.github/workflows/reusable-build.yml`:

```yaml
name: Reusable Build Workflow

on:
  workflow_call:
    inputs:
      node-version:
        description: 'Node.js version to use'
        required: false
        type: string
        default: '20'
      
      environment:
        description: 'Deployment environment'
        required: true
        type: string
    
    outputs:
      build-artifact:
        description: 'Name of the build artifact'
        value: ${{ jobs.build.outputs.artifact-name }}
    
    secrets:
      api-key:
        required: true
      database-url:
        required: false

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      artifact-name: ${{ steps.build.outputs.name }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        id: build
        env:
          API_KEY: ${{ secrets.api-key }}
          ENV: ${{ inputs.environment }}
        run: |
          npm run build
          echo "name=build-${{ inputs.environment }}" >> $GITHUB_OUTPUT
      
      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: ${{ steps.build.outputs.name }}
          path: dist/
```

## Calling a Reusable Workflow

### From Same Repository

```yaml
name: Deploy Application

on:
  push:
    branches: [ main ]

jobs:
  build:
    uses: ./.github/workflows/reusable-build.yml
    with:
      node-version: '20'
      environment: 'production'
    secrets:
      api-key: ${{ secrets.PROD_API_KEY }}
      database-url: ${{ secrets.PROD_DATABASE_URL }}
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: ${{ needs.build.outputs.build-artifact }}
      
      - name: Deploy
        run: |
          echo "Deploying artifact: ${{ needs.build.outputs.build-artifact }}"
```

### From Another Repository

```yaml
jobs:
  build:
    uses: my-org/shared-workflows/.github/workflows/reusable-build.yml@v1
    with:
      node-version: '20'
      environment: 'production'
    secrets:
      api-key: ${{ secrets.API_KEY }}
```

### From Public Repository

```yaml
jobs:
  security-scan:
    uses: github/super-linter/.github/workflows/reusable-linter.yml@v5
    with:
      languages: 'javascript,typescript'
```

## Workflow Inputs

### String Input
```yaml
inputs:
  deployment-target:
    description: 'Where to deploy'
    required: true
    type: string
```

### Boolean Input
```yaml
inputs:
  run-tests:
    description: 'Whether to run tests'
    required: false
    type: boolean
    default: true
```

### Number Input
```yaml
inputs:
  timeout-minutes:
    description: 'Timeout in minutes'
    required: false
    type: number
    default: 30
```

### Choice Input
```yaml
inputs:
  log-level:
    description: 'Logging level'
    required: false
    type: choice
    options:
      - debug
      - info
      - warning
      - error
    default: 'info'
```

## Advanced Patterns

### Matrix Strategy in Reusable Workflow

```yaml
# reusable-test.yml
name: Reusable Test Suite

on:
  workflow_call:
    inputs:
      test-strategy:
        required: true
        type: string  # JSON string

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix: ${{ fromJSON(inputs.test-strategy) }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      
      - name: Test
        run: npm test
```

```yaml
# Calling workflow
jobs:
  test:
    uses: ./.github/workflows/reusable-test.yml
    with:
      test-strategy: |
        {
          "os": ["ubuntu-latest", "windows-latest", "macos-latest"],
          "node-version": ["18", "20", "21"]
        }
```

### Conditional Steps

```yaml
# reusable-deploy.yml
on:
  workflow_call:
    inputs:
      deploy-to-cdn:
        type: boolean
        default: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to server
        run: ./deploy-server.sh
      
      - name: Deploy to CDN
        if: ${{ inputs.deploy-to-cdn }}
        run: ./deploy-cdn.sh
```

### Nested Reusable Workflows

```yaml
# parent-workflow.yml
jobs:
  security-scan:
    uses: ./.github/workflows/security.yml
  
  build:
    needs: security-scan
    uses: ./.github/workflows/build.yml
  
  deploy:
    needs: build
    uses: ./.github/workflows/deploy.yml
```

## Passing Secrets

### Individual Secrets
```yaml
jobs:
  deploy:
    uses: ./.github/workflows/reusable-deploy.yml
    secrets:
      api-key: ${{ secrets.API_KEY }}
      deploy-token: ${{ secrets.DEPLOY_TOKEN }}
```

### All Secrets (Inherit)
```yaml
jobs:
  deploy:
    uses: ./.github/workflows/reusable-deploy.yml
    secrets: inherit  # Pass all repository secrets
```

## Workflow Outputs

### Define Outputs in Reusable Workflow

```yaml
on:
  workflow_call:
    outputs:
      version:
        description: 'Application version'
        value: ${{ jobs.build.outputs.app-version }}
      
      docker-image:
        description: 'Docker image tag'
        value: ${{ jobs.build.outputs.image-tag }}

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      app-version: ${{ steps.version.outputs.version }}
      image-tag: ${{ steps.docker.outputs.tag }}
    
    steps:
      - id: version
        run: echo "version=1.2.3" >> $GITHUB_OUTPUT
      
      - id: docker
        run: echo "tag=myapp:1.2.3" >> $GITHUB_OUTPUT
```

### Use Outputs in Calling Workflow

```yaml
jobs:
  build:
    uses: ./.github/workflows/build.yml
  
  notify:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Send notification
        run: |
          echo "Built version: ${{ needs.build.outputs.version }}"
          echo "Docker image: ${{ needs.build.outputs.docker-image }}"
```

## Best Practices

### 1. Version Your Workflows

```yaml
# Use specific version/tag
uses: my-org/workflows/.github/workflows/build.yml@v2.1.0

# Or use branch for latest
uses: my-org/workflows/.github/workflows/build.yml@main

# Or use commit SHA for immutability
uses: my-org/workflows/.github/workflows/build.yml@abc123
```

### 2. Document Inputs and Outputs

```yaml
on:
  workflow_call:
    inputs:
      environment:
        description: |
          Target environment for deployment.
          Valid values: dev, staging, production
          Example: 'production'
        required: true
        type: string
```

### 3. Validate Inputs

```yaml
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Validate environment
        run: |
          if [[ "${{ inputs.environment }}" != "dev" ]] && \
             [[ "${{ inputs.environment }}" != "staging" ]] && \
             [[ "${{ inputs.environment }}" != "production" ]]; then
            echo "Invalid environment: ${{ inputs.environment }}"
            exit 1
          fi
```

### 4. Use Semantic Versioning

```
v1.0.0 - Initial release
v1.1.0 - Add new features (backward compatible)
v2.0.0 - Breaking changes
```

### 5. Centralize Common Workflows

```
my-org/shared-workflows/
  .github/workflows/
    build-node.yml
    build-python.yml
    deploy-aws.yml
    deploy-azure.yml
    security-scan.yml
    test-suite.yml
```

## Real-World Examples

### Multi-Language Build Workflow

```yaml
# build-multi-lang.yml
on:
  workflow_call:
    inputs:
      language:
        required: true
        type: string
      version:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        if: inputs.language == 'node'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.version }}
      
      - name: Setup Python
        if: inputs.language == 'python'
        uses: actions/setup-python@v5
        with:
          python-version: ${{ inputs.version }}
      
      - name: Setup Go
        if: inputs.language == 'go'
        uses: actions/setup-go@v5
        with:
          go-version: ${{ inputs.version }}
      
      - name: Build
        run: ./build.sh
```

### Deployment Approval Workflow

```yaml
# deploy-with-approval.yml
on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: 
      name: ${{ inputs.environment }}
      url: https://${{ inputs.environment }}.example.com
    
    steps:
      - name: Deploy
        run: |
          echo "Deploying to ${{ inputs.environment }}"
          ./deploy.sh
```

## Troubleshooting

### Common Issues

**Workflow not found**
```yaml
# ❌ Wrong
uses: .github/workflows/build.yml

# ✅ Correct
uses: ./.github/workflows/build.yml
```

**Missing permissions**
```yaml
# Add to reusable workflow
permissions:
  contents: read
  packages: write
```

**Secret not available**
```yaml
# Secrets must be explicitly passed
secrets:
  my-secret: ${{ secrets.MY_SECRET }}
```

## Resources

- [Reusable Workflows Documentation](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Sharing Workflows](https://docs.github.com/en/actions/using-workflows/sharing-workflows-secrets-and-runners-with-your-organization)
