---
sidebar_position: 4
title: "Single vs Multi-Service (Classic)"
---

# Understanding Azure AI: Single Service vs. Multi-Service Account (Classic)

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/AI-Single-vs-Multi-Service.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/AI-Single-vs-Multi-Service_thumbnail.gif" alt="Azure AI Single vs Multi-Service" />
  </a>
  <p style={{fontStyle: 'italic'}}>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/AI/AI-Single-vs-Multi-Service-Vdo.mp4&amp;animationTitle=Understanding%20Azure%20AI%3A%20Single%20Service%20vs.%20Multi-Service%20Account&amp;pauseTimes=6.55,17.3,30.7" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#007bff', border:'none', borderRadius:'5px', textDecoration:'none', cursor:'pointer'}}>Present Animation</a>
    {' '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/AI-Single-vs-Multi-Service.gif" target="_blank">Download HD</a>
  </p>
</div>

## Azure AI Single Service Account

- **Purpose**: Designed for accessing a single Azure AI service
- **Credentials**: Each service has its own unique set of credentials (keys and endpoints)
- **Use Case**: Ideal for projects that require only one specific AI capability
- **Example**: If you need to use only the Computer Vision service for image analysis

## Azure AI Multi-Service Account

- **Purpose**: Allows access to multiple Azure AI services with a single set of credentials
- **Credentials**: One set of credentials works for all the services under this account
- **Use Case**: Perfect for projects that need several AI capabilities
- **Example**: If your project requires both Text Analytics and Speech services

## Key Takeaways

| Type | Characteristics |
|------|----------------|
| **Single Service** | Focused on one AI service, Separate credentials for each service, Best for specific needs |
| **Multi-Service** | Access multiple AI services with one account, Simplifies credential management, Ideal for complex projects |

## Summary

- **Single Service**: One service, one key
- **Multi-Service**: One account access all

