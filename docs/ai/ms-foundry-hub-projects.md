---
title: Microsoft Foundry Hub & Project
---

# Microsoft AI Foundry – Hub & Project

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/ms-foundry-hub-project.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/ms-foundry-hub-project_thumbnail.gif" alt="Microsoft Foundry Hub - Projects" />
  </a>
  <p style={{fontStyle: 'italic'}}>
  <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/AI/ms-foundry-hub-project-Vdo.mp4&amp;animationTitle=Microsoft%20Foundry%20Hub%20-%20Projects&amp;pauseTimes=28,60" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#007bff', border:'none', borderRadius:'5px', textDecoration:'none', cursor:'pointer'}}>Present Animation</a>
    {' '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/ms-foundry-hub-project.gif" target="_blank">Download HD GIF</a>
  </p>
</div>

Microsoft AI Foundry uses a **Hub and Project** model to organize AI workloads with centralized governance and shared infrastructure, while allowing teams to work independently.

## Hub

A **Hub** is the top-level environment that provides shared configuration and governance across multiple projects. It is typically aligned to an organization, platform team, or AI center of excellence.

The Hub is where common controls and resources are defined once and reused everywhere.

## Project

A **Project** is a workspace within a Hub where teams build and operate AI solutions. Projects inherit Hub-level configurations while remaining isolated from each other.

Projects are usually aligned to applications, teams, or specific AI use cases.

## Shared Resources & Centralized Configuration

The Hub provides shared resources and centralized configuration that apply across all projects.

**Shared resources** commonly include:
- 🗄️ **Storage Accounts**
- 🔐 **Key Vault**
- 🤖 **Azure AI Services** (Microsoft AI Foundry resources)
- 🖥️ **Compute**
- 📊 **Application Insights**

**Centralized configuration** at the Hub level enables:
- 🌐 **Networking**: VNet integration, private endpoints
- 🔒 **Encryption** and security controls
- 👤 **User management**: IAM and RBAC
- 🔗 **Service integration**: Fabric, Azure AI Search, and other connected resources
- 📈 **Quota, usage, and capacity management**

This approach ensures consistent governance, security, and operational visibility across all AI projects.


## Summary

The Hub & Project model in Microsoft AI Foundry enables scalable AI adoption by separating **platform governance** from **project execution**, allowing teams to move fast while staying compliant and secure.
