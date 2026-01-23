---
sidebar_position: 2
title: Managed Identities Part 1
---

# Managed Identities in Azure: Enhancing Security Part 1

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Security/Managed-Identities-Part1.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-480thumbnails/Azure_Managed-Identities-Part1_thumbnail.gif" alt="Managed Identities Part 1" />
  </a>
  <p>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Security/Managed-Identities-Part1-Vdo.mp4&amp;animationTitle=Managed%20Identities%20in%20Azure:%20Enhancing%20Security%20Part%201" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#0078d4', borderRadius:'5px', textDecoration:'none'}}> Present Animation</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Security/Managed-Identities-Part1.gif" target="_blank">Download HD</a>
  </p>
</div>

Above illustrates the process of using Managed Identities, comparing the traditional old-school way of using shared credentials to the modern approach of managed identities in Azure, highlighting enhanced security and simplified access management

1. **Traditional Approach: Shared Secrets and Credentials 🔑**

   Using shared secrets or credentials to access Azure resources has several drawbacks:
   - **Security Risks**: Potential exposure and misuse. ⚠️
   - **Maintenance Overhead**: Regularly rotating secrets is cumbersome. 🔄
   - **Complexity**: Securely distributing secrets adds complexity. 🧩

2. **Modern Approach: Managed Identities in Azure 🌐**

   Managed identities provide a secure and streamlined way to access Azure resources without managing secrets.

3. **Key Benefits 🌟**

   1. **No Secret Management**: Reduces risk of exposure. 🚫🔑
   2. **Simplified Access Control**: Integrated with Azure Active Directory (AAD). 🔐
   3. **Automatic Credential Management**: Azure handles credential rotation. 🔄🔒
   4. **Enhanced Security**: Aligns with the principle of least privilege. 🛡️

4. **Example Use Case 💡**

   Azure AI Services need to access Azure Blob Storage:
   - Assigned a managed identity. 🆔
   - Granted access (RBAC) to the Blob Storage. 🔐
   - Authenticates and accesses data without managing credentials. 🔑

5. **Conclusion 📈**

   Adopting managed identities enhances security, reduces overhead, and simplifies access management. This approach aligns with best practices for secure application development in Azure.

:::tip[🎬 Video Explanation]
Click the video below for recorded explanations by [Bob Reinsch](https://www.linkedin.com/in/thebobster/).

<a href="https://www.youtube.com/watch?v=FpX40R14iLM" target="_blank"><img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-explained/Managed%20Identity%20Part%201%20Explained.png" alt="Azure Managed Identity Part 1" width="300"/></a>
::: 

