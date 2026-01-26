---
sidebar_position: 3
title: Managed Identities Part 2
---

# Managed Identities in Azure: Enhancing Security Part 2

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Security/Managed-Identities-Part2.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/Azure_Managed-Identities-Part2_thumbnail.gif" alt="Managed Identities Part 2" />
  </a>
  <p>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Security/Managed-Identities-Part2-Vdo.mp4&amp;animationTitle=Managed%20Identities%20in%20Azure:%20Enhancing%20Security%20Part%202%20(System-Assigned,%20User-Assigned%20Managed%20Identities)" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#0078d4', borderRadius:'5px', textDecoration:'none'}}> Present Animation</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Security/Managed-Identities-Part2.gif" target="_blank">Download HD</a>
  </p>
</div>

The animation on the left illustrates the use of system-assigned managed identities in various scenarios:

1. **Application Running in a VM** 🖥️
   - A system-assigned managed identity is created and tied to the VM.
   - This identity is used to securely access Azure resources like Azure Blob Storage.

2. **PaaS Compute Services** ☁️
   - PaaS compute services, such as Azure App Service or Azure Functions, each have their own system-assigned managed identity.
   - These identities are automatically managed by Azure and can be used to access other Azure resources securely.

3. **Document Intelligence** 📄
   - Document intelligence services also utilize system-assigned managed identities.
   - Each service has its own identity, ensuring secure and streamlined access to necessary resources.

The animation on the right illustrates the use of user-assigned managed identities:

4. **Shared Identity Across Multiple Resources** 🔄
   - A user-assigned managed identity can be created and assigned to multiple Azure resources.
   - This identity can be shared among different services, such as VMs, PaaS compute services, and Document Intelligence.

5. **Centralized Identity Management** 🛠️
   - User-assigned managed identities provide a centralized way to manage identities.
   - This approach simplifies the management of permissions and access controls across multiple resources.

6. **Flexible and Reusable** 🔄
   - User-assigned managed identities are flexible and can be reused across different resources.
   - This reduces the need to create multiple identities for different services, streamlining identity management.

7. **Key Points**

   - **Automatic Identity Management**: Each Azure resource (VM, PaaS compute, Document Intelligence) gets its own system-assigned managed identity.
   - **Secure Resource Access**: These identities can be used to connect to Azure Blob Storage without managing credentials.
   - **Isolation and Security**: Each identity is tied to a specific resource, enhancing security and isolation.

8. **Example Use Case** 💡

   - **Azure Blob Storage Access**:
      - The application in the VM, PaaS compute services, and Document Intelligence services each use their respective system-assigned managed identities.
      - These identities are granted the necessary permissions (RBAC) to access Azure Blob Storage.
      - This setup ensures secure and seamless access to storage without the need for managing secrets.

   - **Shared Identity for Multiple Resources**:
      - A user-assigned managed identity is created and assigned to the VM, PaaS compute services, and Document Intelligence services.
      - This shared identity is granted the necessary permissions (RBAC) to access Azure Blob Storage.
      - This approach simplifies identity management and provides a flexible way to manage access across multiple resources.

9. **Conclusion** 📈

   System-assigned managed identities simplify identity management and enhance security by providing each Azure resource with its own identity. User-assigned managed identities offer flexibility and centralized management by allowing a single identity to be shared across multiple resources. Both approaches align with best practices for secure application development in Azure.

:::tip[🎬 Video Explanation]
Click the video below for recorded explanations by [Ilan Nyska](https://www.linkedin.com/in/ilan-nyska/).

<a href="https://www.linkedin.com/videos/urn:li:ugcPost:7298569623547875328/?entryPoint=FEED" target="_blank"><img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-explained/Managed%20Identity%20Part%202%20Explained.png" alt="Azure Managed Identity Part 2" width="300"/></a>
:::

