---
sidebar_position: 3
title: Azure Functions
---

# Azure Functions Hosting Options

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Compute/Azure-Functions-Hosting-Options.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/Azure-Functions-Hosting-Options-thumb.gif" alt="Azure Functions" />
  </a>
  <p>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Compute/Azure-Functions-Hosting-Options-Vdo.mp4&amp;animationTitle=Azure%20Functions%20Hosting%20Options%20Overview" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#0078d4', borderRadius:'5px', textDecoration:'none'}}> Present Animation</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Compute/Azure-Functions-Hosting-Options.gif" target="_blank">Download HD</a>
  </p>
</div>

⚡ Azure Functions is a serverless computing service that enables you to run event-driven code without managing infrastructure.
It offers various hosting plans, each designed for different workloads.
All plans support auto-scaling, but they differ in scaling limits, pricing💰, and features🛠️.

* **❤️ Flex Consumption Plan**: Supports up to 1000 instances and always-ready instances⚡.
  * Linux (code-only). Windows not supported.
  * ✅ VNet integration.

* **💛 Consumption Plan**: Supports up to 200 instances but may experience cold starts.
  * Linux (code-only)/ Windows (code-only).
  * ❌ No VNet integration.

* **💜 Premium Plan**: Supports up to 100 instances and always-ready instances⚡.
  * Linux (code & container). Windows (code-only).
  * ✅ VNet integration.

* **🩵 Dedicated Plan**: Supports up to 10-30 instances and always-on functionality⚡.
  * Linux (code & container). Windows (code-only).
  * ✅ VNet integration.

* **🧡 Container Apps**: Supports up to 1000 instances and avoids cold starts if replicas ≥ 1⚡.
  * Linux (container-only). Windows not supported.
  * ✅ VNet integration.

For more details, check the official documentation 👉 [Azure Functions scale and hosting | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)

