---
title: Git Version Control & Git Workflows
---

# 🌳 Git Version Control & Workflows

Git is the foundation of modern software development. Understanding version control and establishing effective Git workflows is essential for individual developers and teams alike. Master Git to collaborate seamlessly, maintain code history, and ship with confidence!

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Github/github_version_control_git_workflow.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/github_version_control_git_workflow_thumbnail.gif" alt="Microsoft Foundry Hub - Projects" />
  </a>
  <p style={{fontStyle: 'italic'}}>
  <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Github/github_version_control_git_workflow.mp4&amp;animationTitle=Github,%20Azure%20DevOps%20-%20Version%20Control,%20Branches%20and%20Git%20Workflow&amp;pauseTimes=28,60" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#007bff', border:'none', borderRadius:'5px', textDecoration:'none', cursor:'pointer'}}>Present Animation</a>
    {' '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Github/github_version_control_git_workflow.gif" target="_blank">Download HD GIF</a>
  </p>
</div>


## 🎬 (Left Handside) Two Developers, One Codebase — No Version Control

### 👥 Same Codebase, Different Tasks
- Developer A is working on a **new feature**  
- Developer B is fixing a **bug**  
- Both are editing the **same codebase** at the same time

### ⚠️ No Version Control = Collision
Without any version control system, their changes start to **conflict**.

### 🏁 Race Condition Happens
- Developer A finishes first and checks in the feature  
- Later, Developer B checks in the bug fix  
- B’s update **overwrites** A’s work because nothing tracks or merges changes

### 💥 The Result
**Work is lost. Code gets overwritten.  
All because version control wasn’t used from the start.**

## 🎬 (Right Handside) Branches + Git Workflow — No More Overwritten Code

### 🌿 Two New Branches from Main
- We create **two branches** from the main branch  
  - `feature` branch for Developer A  
  - `bug-fix` branch for Developer B  
- Both developers can start working **immediately** without touching the main branch

### 🧑‍💻 Independent Workflows
- Developer A works safely on the **feature branch**  
- Developer B works safely on the **bug-fix branch**  
- The **main branch stays clean** and unchanged during development

### 🔄 Git Workflow in Action
#### Developer A
- Commit changes  
- Open a **pull request**  
- Review → Approve → **Merge** into main  
- Feature is now safely added

#### Developer B
- Commit changes  
- Open a **pull request**  
- Review → Conflict detected → **Resolve** → Merge into main  
- Bug fix is added without overwriting anything

### 🎉 Final Result
Both developers’ changes end up in the **main branch** —  
**no code is lost, nothing gets overwritten, and everyone stays in sync.**  
All thanks to **version control** and the **Git workflow**.
