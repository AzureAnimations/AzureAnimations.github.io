---
title: VNet Peering & Bastion
---

# VNet Peering and Azure Bastion

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Infra/Azure-Vnet-Part3.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/Azure-Vnet-Part3_thumbnail.gif" alt="VNet Peering and Bastion" />
  </a>
  <p>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Infra/Azure-Vnet-Part3-Vdo.mp4&amp;animationTitle=VNET%20Peering%20and%20Azure%20Bastion" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#0078d4', borderRadius:'5px', textDecoration:'none'}}> Present Animation</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Infra/Azure-Vnet-Part3.gif" target="_blank">Download HD</a>
  </p>
</div>

## VNet Peering

- **Private Connectivity**: Connects virtual networks privately.
- **High Bandwidth & Low Latency**: Ensures fast communication.
- **Global Peering**: Supports peering within and across regions.
- **No Downtime**: No interruptions during setup.
- **Resource Sharing**: Enables resource sharing between networks.
- **Non-Overlapping Address Spaces**: Requires unique address spaces.

## Azure Bastion

- **Public IP Address**: Requires a Standard SKU public IP with static allocation.
- **Dedicated Subnet**: Needs `AzureBastionSubnet` in the same virtual network.
- **Subnet Size**: Must be /26 or larger.
- **Secure Connectivity**: Secure connections to VMs over HTTPS via Azure portal.
- **Centralized Security**: Protects VMs from malicious activities.
- **Ease of Use**: Connect via Azure portal or native SSH/RDP client.
- **No Public IP Required**: VMs do not need a public IP.
- **Regulatory Compliance**: Meets regulatory requirements.

