---
title: GitHub Advanced Security
---

# 🔒 GitHub Advanced Security (GHAS)

GitHub Advanced Security helps you identify and fix security vulnerabilities in your code before they reach production. With automated scanning, dependency management, and secret detection, GHAS is your security co-pilot.

## Core Features

### 1. Code Scanning
Automatically scan code for security vulnerabilities and coding errors using CodeQL or third-party tools.

**Key Benefits:**
- Detects common security issues (SQL injection, XSS, etc.)
- Custom queries for your specific requirements
- Integrates with pull requests
- Supports multiple languages

### 2. Secret Scanning
Prevents secrets (API keys, tokens, passwords) from being committed to your repository.

**Features:**
- Scans for known secret formats
- Partner patterns (AWS, Azure, Google Cloud, etc.)
- Custom patterns for proprietary secrets
- Push protection to block commits

### 3. Dependency Review
Understand the security impact of dependencies before merging changes.

**Capabilities:**
- Identifies vulnerable dependencies
- License compliance checking
- Visualizes dependency changes in PRs
- Suggests version updates

### 4. Dependabot
Automated dependency updates and security alerts.

**What it does:**
- Opens PRs for dependency updates
- Security patches for known vulnerabilities
- Version updates to keep dependencies current
- Configurable update frequency

## Setting Up GHAS

### Enable Code Scanning

```yaml
name: CodeQL Analysis

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * 1'  # Weekly on Monday

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      
    strategy:
      matrix:
        language: [ 'javascript', 'python' ]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: ${{ matrix.language }}
    
    - name: Autobuild
      uses: github/codeql-action/autobuild@v3
    
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
```

### Configure Dependabot

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
```

## Best Practices

1. **Enable push protection** - Block secrets from being committed
2. **Review security alerts promptly** - Don't let vulnerabilities pile up
3. **Use branch protection** - Require security checks before merging
4. **Custom CodeQL queries** - Tailor scanning to your codebase
5. **Security policies** - Document your security practices with SECURITY.md
6. **Regular audits** - Review security dashboard weekly

## Security Hardening Checklist

- ✅ Enable secret scanning and push protection
- ✅ Configure code scanning for all critical branches
- ✅ Set up Dependabot for all package ecosystems
- ✅ Require security checks in branch protection rules
- ✅ Add SECURITY.md with vulnerability reporting process
- ✅ Regular security training for team members
- ✅ Monitor security advisories dashboard

## Compliance & Reporting

- Generate compliance reports for audits
- Export security findings to SIEM systems
- Track security metrics over time
- Integrate with security management platforms

## Resources

- [GHAS Documentation](https://docs.github.com/en/code-security)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Security Best Practices](https://docs.github.com/en/code-security/guides)
