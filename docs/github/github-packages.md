---
title: GitHub Packages
---

# 📦 GitHub Packages

GitHub Packages is a package hosting service fully integrated with GitHub. Host your npm, Docker, Maven, NuGet, and other packages alongside your source code. Share packages privately within your organization or publicly with the open-source community.

## Supported Package Types

- **npm** - JavaScript/Node.js packages
- **Docker** - Container images
- **Maven** - Java packages
- **Gradle** - Java/Kotlin packages
- **NuGet** - .NET packages
- **RubyGems** - Ruby packages
- **Containers** - OCI container images

## Publishing npm Packages

### Setup Authentication

Create `.npmrc` in your repository:

```
@YOUR-USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

### Package Configuration

Update `package.json`:

```json
{
  "name": "@your-username/package-name",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/repo-name.git"
  },
  "publishConfig": {
    "@your-username:registry": "https://npm.pkg.github.com"
  }
}
```

### GitHub Actions Workflow

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com'
          scope: '@your-username'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build package
        run: npm run build
      
      - name: Publish package
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Publishing Docker Images

### Dockerfile Example

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Push Workflow

```yaml
name: Publish Docker Image

on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]
  release:
    types: [published]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    
    steps:
      - uses: actions/checkout@v4
      
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
            type=ref,event=pr
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha,prefix={{branch}}-
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```

## Consuming Packages

### Install npm Package

```bash
# Authenticate
npm login --scope=@username --registry=https://npm.pkg.github.com

# Install package
npm install @username/package-name
```

### Pull Docker Image

```bash
# Login to GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull image
docker pull ghcr.io/username/image-name:tag
```

### In GitHub Actions

```yaml
- name: Login to GitHub Container Registry
  uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}

- name: Pull and run image
  run: |
    docker pull ghcr.io/${{ github.repository }}:latest
    docker run ghcr.io/${{ github.repository }}:latest
```

## Package Visibility

### Public Packages
- Available to everyone
- Free for public repositories
- No authentication needed to download

### Private Packages
- Restricted to organization/user
- Requires authentication
- Included in GitHub billing

### Changing Visibility

```bash
# Using GitHub CLI
gh api \
  --method PATCH \
  /user/packages/container/PACKAGE_NAME \
  -f visibility=public
```

## Package Permissions

### Repository Permissions
Link packages to repositories for automatic permission inheritance:

```yaml
# In workflow
- name: Link package to repo
  run: |
    gh api \
      --method POST \
      /user/packages/container/PACKAGE_NAME/versions/VERSION_ID/repositories/REPO_ID
```

### Team Permissions
Grant specific teams access:
- Read - Download packages
- Write - Upload new versions
- Admin - Manage package settings

## Multi-Architecture Images

```yaml
- name: Set up QEMU
  uses: docker/setup-qemu-action@v3

- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build multi-arch image
  uses: docker/build-push-action@v5
  with:
    context: .
    platforms: linux/amd64,linux/arm64,linux/arm/v7
    push: true
    tags: |
      ghcr.io/${{ github.repository }}:latest
      ghcr.io/${{ github.repository }}:${{ github.sha }}
```

## Package Retention

### Retention Policies
Configure automatic cleanup:

```yaml
name: Cleanup old packages

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly

jobs:
  cleanup:
    runs-on: ubuntu-latest
    steps:
      - name: Delete old container versions
        uses: actions/delete-package-versions@v4
        with:
          package-name: 'my-package'
          package-type: 'container'
          min-versions-to-keep: 10
          delete-only-untagged-versions: 'true'
```

## Best Practices

1. **Version Semantically** - Use semantic versioning (semver)
2. **Tag Images** - Use multiple tags (latest, version, sha)
3. **Scan for Vulnerabilities** - Integrate security scanning
4. **Document Packages** - Include README and usage examples
5. **Automate Publishing** - Use CI/CD for consistent releases
6. **Cleanup Old Versions** - Implement retention policies
7. **Use GitHub Token** - Leverage `GITHUB_TOKEN` for authentication
8. **Provenance** - Enable build provenance for supply chain security

## Package Metadata

### npm package.json
```json
{
  "name": "@org/package",
  "version": "1.0.0",
  "description": "Package description",
  "keywords": ["keyword1", "keyword2"],
  "author": "Your Name",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/org/repo/issues"
  },
  "homepage": "https://github.com/org/repo#readme"
}
```

### Docker Labels
```dockerfile
LABEL org.opencontainers.image.source="https://github.com/org/repo"
LABEL org.opencontainers.image.description="Image description"
LABEL org.opencontainers.image.licenses="MIT"
```

## Troubleshooting

### Common Issues

**Authentication Failed**
```bash
# Ensure token has correct scopes
# Token needs: write:packages, read:packages

# Test authentication
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```

**Package Not Found**
```bash
# Check visibility settings
# Verify package name format
# Ensure correct registry URL
```

**Rate Limiting**
```bash
# Authenticate to increase limits
# Use GitHub Actions for higher limits
# Implement caching strategies
```

## Resources

- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [Working with Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Publishing npm Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
