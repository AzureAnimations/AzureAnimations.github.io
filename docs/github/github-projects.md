---
title: GitHub Projects
---

# 📋 GitHub Projects

GitHub Projects provides flexible, powerful project management tools built right into your repository. Plan, track, and manage your work with customizable boards, tables, and roadmaps—all integrated with your issues and pull requests.

## What are GitHub Projects?

GitHub Projects is an adaptable, flexible tool for planning and tracking work on GitHub. With Projects (previously called Projects Beta or Projects V2), you can:

- Create custom views with tables, boards, and roadmaps
- Filter, sort, and group issues and PRs
- Automate workflows with built-in automation
- Track progress with custom fields and insights
- Collaborate across multiple repositories

## Project Views

### Board View
Kanban-style boards for visual workflow management:
- **Todo** → **In Progress** → **Review** → **Done**
- Drag and drop items between columns
- Customize column names and automation

### Table View
Spreadsheet-like view for detailed tracking:
- Sortable and filterable columns
- Custom fields (text, number, date, select)
- Bulk editing capabilities
- Export to CSV

### Roadmap View
Timeline visualization for planning:
- See work scheduled over time
- Identify dependencies and blockers
- Plan sprints and releases
- Visualize team capacity

## Custom Fields

Enhance items with custom metadata:

| Field Type | Use Case |
|------------|----------|
| **Text** | Additional notes, links |
| **Number** | Story points, priority |
| **Date** | Due dates, sprint dates |
| **Single Select** | Status, priority, team |
| **Iteration** | Sprints, milestones |

## Automation

Built-in workflows automate common tasks:

### Auto-add Items
```yaml
When:
  - New issue is created with label "feature"
Then:
  - Add to project
  - Set status to "Todo"
  - Set priority based on labels
```

### Auto-archive
```yaml
When:
  - Issue is closed
  - PR is merged
Then:
  - Move to "Done"
  - Archive after 7 days
```

### Status Sync
```yaml
When:
  - Item moved to "In Progress"
Then:
  - Add "in-progress" label
  - Assign to team member
```

## Setting Up a Project

### 1. Create a Project

```bash
# From repository
Settings → Projects → New Project

# Or from profile
Your Profile → Projects → New Project
```

### 2. Choose Template
- Team backlog
- Sprint planning
- Feature roadmap
- Bug tracker
- Custom (blank)

### 3. Configure Views

**Board View:**
```
Columns:
  - 📋 Backlog (Status: Todo)
  - 🚀 Ready (Priority: High)
  - 💻 In Progress (Status: In Progress)
  - 👀 In Review (linked to PR)
  - ✅ Done (Status: Done)
```

**Table View:**
```
Columns:
  - Title
  - Assignees
  - Status
  - Priority
  - Sprint
  - Estimate
  - Labels
```

### 4. Add Items
- Link existing issues and PRs
- Create draft issues
- Convert drafts to issues
- Add notes

## Project Workflows

### Agile Sprint Planning

```
1. Backlog grooming
   - Review and prioritize issues
   - Add estimates (story points)
   - Define acceptance criteria

2. Sprint planning
   - Select items for sprint
   - Assign to iteration field
   - Estimate capacity

3. Daily standups
   - Review board view
   - Update item status
   - Identify blockers

4. Sprint review/retro
   - Close completed items
   - Review velocity
   - Plan improvements
```

### Feature Development

```
1. Idea → Draft issue in backlog
2. Refinement → Convert to issue
3. Planning → Add details, assign
4. Development → Move to "In Progress"
5. Review → Link PR, move to "Review"
6. Testing → Add test results
7. Done → Close and archive
```

## Insights and Reporting

### Charts Available
- **Burndown charts** - Track sprint progress
- **Velocity** - Measure team output
- **Cycle time** - Time from start to done
- **Cumulative flow** - Work distribution

### Custom Insights

```yaml
Chart: Sprint Burndown
  X-axis: Days in sprint
  Y-axis: Story points remaining
  Filter: Current iteration
  
Chart: Team Velocity
  X-axis: Sprints
  Y-axis: Story points completed
  Grouping: By assignee
```

## Integration with GitHub Actions

Automate project updates from workflows:

```yaml
name: Update Project

on:
  issues:
    types: [opened, labeled]

jobs:
  add-to-project:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@v0.4.0
        with:
          project-url: https://github.com/orgs/my-org/projects/1
          github-token: ${{ secrets.PROJECT_TOKEN }}
          labeled: bug, enhancement
          label-operator: OR
```

## Best Practices

1. **Keep it simple** - Start with basic views, add complexity as needed
2. **Consistent labeling** - Use labels for automation and filtering
3. **Regular updates** - Keep status current for accurate insights
4. **Clear ownership** - Assign issues to team members
5. **Milestone planning** - Use iterations for time-boxed work
6. **Archive completed work** - Keep active project clean
7. **Cross-repo projects** - Track work across multiple repositories
8. **Custom fields** - Add only fields you'll actually use

## Project Templates

### Bug Tracker
```
Views:
  - 🐛 All Bugs (Table)
  - 🔥 Critical (Filter: Priority = Critical)
  - 📊 By Component (Group by: Component)
  
Fields:
  - Severity (High/Medium/Low)
  - Component
  - Affected Version
  - Fixed Version
```

### Product Roadmap
```
Views:
  - 🗺️ Roadmap (Timeline)
  - 📋 Features (Table)
  - 🎯 This Quarter (Filter: Date range)
  
Fields:
  - Quarter
  - Theme
  - Status
  - Owner
```

## Resources

- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [Project Automation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project)
- [Project Insights](https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project)
