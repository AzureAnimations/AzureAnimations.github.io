---
sidebar_position: 11
title: Azure OpenAI Provisioning
---

# Azure OpenAI - Provisioning and Deployment

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/AI/Azure%20OpenAI%20-%20AI%20Foundry%20Provisioning%20and%20Deployment%20Creation.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-480thumbnails/Azure%20OpenAI%20-%20AI%20Foundry%20Studio_Provisioning_and_Deployment_Creation_-_thumbnail.gif" alt="OpenAI Provisioning" />
  </a>
  <p style={{fontStyle: 'italic'}}>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/AI/Azure%20OpenAI%20-%20AI%20Foundry%20Provisioning%20and%20Deployment%20Creation.mp4&amp;animationTitle=Azure%20OpenAI%20-%20Provisioning%20and%20Deployment%20Creation&amp;pauseTimes=23.7,32,63.9,68" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#007bff', border:'none', borderRadius:'5px', textDecoration:'none', cursor:'pointer'}}>🎬 Present Animation</a>
    {' '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/AI/Azure%20OpenAI%20-%20AI%20Foundry%20Provisioning%20and%20Deployment%20Creation.gif" target="_blank">Download HD GIF</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/AI/Azure%20OpenAI%20-%20AI%20Foundry%20Provisioning%20and%20Deployment%20Creation.mp4" target="_blank">View HD Video</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/presentations/AI/Azure%20OpenAI%20-%20AI%20Foundry%20Provisioning%20and%20Deployment%20Creation.pptx" target="_blank">Presentation Slide (pptx)</a>
  </p>
</div>

Above illustrates the process of provisioning Azure OpenAI, we start by using the Azure Portal. First, navigate to the Azure AI Foundry where you can select the appropriate model for your needs, such as GPT-4, GPT-4o, etc. Before users can consume the model, they need to select the model and create a deployment. There are several types of deployments available:

## Deployment Types

- **Azure Portal**: Start by using the Azure Portal to navigate to Azure AI Foundry.
- **Select Model**: Choose the right model (e.g., GPT-4, GPT-4o) 🧠.
- **Create Deployment**:
  - **Global-Batch**: For offline scoring 🕒.
  - **Global-Standard**: Recommended starting point 🌍.
  - **Global-Provisioned**: For real-time scoring with high volume 📈.
  - **Standard**: General-purpose deployment.
  - **Provisioned**: For high-volume workloads.
  - **Data Zone Standard**: Leverages Azure global infrastructure for best availability and higher default quotas.
  - **Data Zone Provisioned**: Global infrastructure, best availability, reserved capacity for high and predictable throughput.
- **Deploy**: Once deployed, the application calls the Azure OpenAI endpoint using the deployment ID 🔗, using the SDK REST API.

:::tip[🎬 Video Explanation]
Click the video below for recorded explanations by [Lachlan Matthew-Dickinson](https://www.linkedin.com/in/lachlanmd/).

<a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338063771422048261?collapsed=1" target="_blank"><img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-explained/Azure%20AI%20Foundry%20Deployments%20Explained.png" alt="Azure AI Foundry Deployments Explained" width="300"/></a>
:::

