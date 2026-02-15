---
title: CI/CD Pipelines
---

# 🚀 CI/CD Pipelines with GitHub Actions

Continuous Integration and Continuous Deployment (CI/CD) automate the process of testing and deploying your code. With GitHub Actions, you can build robust pipelines that ensure code quality and accelerate delivery.

## CI/CD Fundamentals

### Continuous Integration (CI)
Automatically build and test code changes:
- Run tests on every commit
- Validate code quality
- Check for breaking changes
- Build artifacts

### Continuous Deployment (CD)
Automatically deploy validated changes:
- Deploy to staging/production
- Rollback on failures
- Gradual rollouts
- Environment-specific configs

## Complete CI/CD Pipeline

```yaml
name: Complete CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '20'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # CI Jobs
  lint:
    name: Code Linting
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Run Prettier
        run: npm run format:check

  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: true

  security:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'CRITICAL,HIGH'
      
      - name: Dependency Review
        uses: actions/dependency-review-action@v3
        if: github.event_name == 'pull_request'

  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: [lint, test, security]
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-artifacts
          path: dist/
          retention-days: 7

  # CD Jobs
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    environment:
      name: staging
      url: https://staging.example.com
    steps:
      - uses: actions/checkout@v4
      
      - name: Download artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-artifacts
          path: dist/
      
      - name: Deploy to staging
        run: |
          echo "Deploying to staging environment..."
          # Add deployment commands

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://www.example.com
    steps:
      - uses: actions/checkout@v4
      
      - name: Download artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-artifacts
          path: dist/
      
      - name: Deploy to production
        run: |
          echo "Deploying to production environment..."
          # Add deployment commands
      
      - name: Create release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ github.run_number }}
          release_name: Release v${{ github.run_number }}
          draft: false
          prerelease: false
```

## Docker CI/CD Pipeline

```yaml
name: Docker Build and Deploy

on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha,prefix={{branch}}-
      
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
      
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/myapp \
            myapp=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
```

## Multi-Environment Deployment

```yaml
name: Multi-Environment Deploy

on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        type: choice
        options:
          - dev
          - staging
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.event.inputs.environment }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to ${{ github.event.inputs.environment }}
        run: |
          echo "Deploying to ${{ github.event.inputs.environment }}"
          # Deployment commands based on environment
```

## Blue-Green Deployment

```yaml
name: Blue-Green Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Green
        id: deploy-green
        run: |
          # Deploy to green environment
          echo "Deployed to green environment"
      
      - name: Health Check
        run: |
          curl -f https://green.example.com/health || exit 1
      
      - name: Run Smoke Tests
        run: |
          npm run test:smoke -- --env=green
      
      - name: Switch Traffic to Green
        run: |
          # Switch load balancer to green
          echo "Traffic switched to green"
      
      - name: Cleanup Blue
        if: success()
        run: |
          # Remove blue deployment
          echo "Blue environment cleaned up"
      
      - name: Rollback
        if: failure()
        run: |
          # Keep blue environment active
          echo "Deployment failed, staying on blue"
```

## Deployment Strategies

### 1. Rolling Deployment
Gradually replace old instances with new ones
```yaml
strategy:
  rolling-update:
    max-surge: 1
    max-unavailable: 0
```

### 2. Canary Deployment
Deploy to subset of users first
```yaml
steps:
  - Deploy to 10% traffic
  - Monitor metrics
  - If successful, deploy to 50%
  - Monitor metrics
  - Deploy to 100%
```

### 3. Feature Flags
Use feature flags for gradual rollout
```yaml
- name: Deploy with feature flags
  env:
    FEATURE_NEW_UI: ${{ secrets.FEATURE_NEW_UI }}
```

## Best Practices

1. **Environment Separation** - Use GitHub Environments for staging/production
2. **Manual Approvals** - Require approval for production deployments
3. **Rollback Strategy** - Always have a rollback plan
4. **Health Checks** - Verify deployment health before completing
5. **Monitoring** - Track deployment metrics and errors
6. **Secrets Management** - Use GitHub Secrets for credentials
7. **Immutable Artifacts** - Build once, deploy many times
8. **Version Tagging** - Tag releases for traceability

## Monitoring and Notifications

```yaml
- name: Notify on deployment
  if: always()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: |
      Deployment to ${{ github.event.inputs.environment }}
      Status: ${{ job.status }}
      Commit: ${{ github.sha }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}

- name: Track deployment
  uses: chrnorm/deployment-action@v2
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    environment: production
    state: ${{ job.status }}
```

## Resources

- [GitHub Actions for CI/CD](https://docs.github.com/en/actions/deployment)
- [Environment Protection Rules](https://docs.github.com/en/actions/deployment/targeting-different-environments)
- [Deployment Best Practices](https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider)
