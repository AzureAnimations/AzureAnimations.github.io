---
title: Pull Requests & Code Review
---

# 🔄 Pull Requests & Code Review

Pull Requests (PRs) are the heart of collaboration on GitHub. They enable team members to review, discuss, and improve code before it's merged into the main branch. Master the art of PRs and elevate your team's code quality!

## Creating Effective Pull Requests

### PR Best Practices

1. **Keep it focused** - One feature/fix per PR
2. **Write clear titles** - Use conventional commit format
3. **Provide context** - Explain the why, not just the what
4. **Add screenshots** - Visual changes need visual proof
5. **Link issues** - Use keywords like "Fixes #123"
6. **Self-review first** - Review your own changes before requesting review

### PR Template Example

```markdown
## Description
Brief description of changes made

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally

Fixes #(issue number)
```

## Code Review Process

### For Reviewers

**What to Look For:**
- ✅ Code correctness and logic
- ✅ Test coverage
- ✅ Performance implications
- ✅ Security vulnerabilities
- ✅ Code style and consistency
- ✅ Documentation updates

**Review Comments:**
- Be constructive and respectful
- Explain the "why" behind suggestions
- Offer alternatives when requesting changes
- Acknowledge good code practices
- Use suggestions for minor changes

```markdown
<!-- Good review comment -->
Consider using a Map here instead of an object for O(1) lookups:
```suggestion
const userMap = new Map(users.map(u => [u.id, u]));
```
This would improve performance when dealing with large datasets.

<!-- Bad review comment -->
This is wrong. Fix it.
```

### For Authors

**Responding to Reviews:**
- Address all comments
- Ask questions if unclear
- Don't take feedback personally
- Request re-review after changes
- Thank reviewers for their time

## Branch Protection Rules

Enforce quality with branch protection:

```yaml
Required checks:
  ✅ All tests must pass
  ✅ Code review approval (1-2 reviewers)
  ✅ Status checks must pass
  ✅ Branches must be up to date
  ✅ Require signed commits
  ✅ No force pushes
  ✅ Linear history
```

## Draft Pull Requests

Use draft PRs for work in progress:
- Signal that code is not ready for review
- Get early feedback on direction
- Run CI/CD checks
- Share progress with team

## Advanced PR Features

### Code Suggestions
Reviewers can make inline code suggestions that authors can apply with one click.

### PR Labels
Organize and prioritize with labels:
- `bug` - Bug fixes
- `enhancement` - New features
- `documentation` - Documentation updates
- `breaking-change` - Breaking changes
- `needs-review` - Awaiting review
- `work-in-progress` - Not ready to merge

### Auto-merge
Enable auto-merge to automatically merge when:
- All required reviews are approved
- All status checks pass
- No merge conflicts

### Review Assignment
Automatically assign reviewers using CODEOWNERS:

```
# CODEOWNERS file
*.js @frontend-team
*.py @backend-team
/docs/ @documentation-team
*.yml @devops-team
```

## PR Workflow Example

```yaml
name: PR Validation

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Check PR title
        uses: amannn/action-semantic-pull-request@v5
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Run linting
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Check code coverage
        run: npm run coverage
```

## Common PR Anti-Patterns

❌ **Avoid:**
- Monster PRs with 1000+ lines changed
- Mixing multiple unrelated changes
- Making changes without discussion on large features
- Ignoring review comments
- Force pushing after reviews started
- "LGTM" without actually reviewing

✅ **Instead:**
- Break large changes into smaller PRs
- One concern per PR
- Discuss design in issues first
- Address all feedback
- Add commits after initial review
- Provide meaningful feedback

## Resources

- [About Pull Requests](https://docs.github.com/en/pull-requests)
- [Code Review Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
