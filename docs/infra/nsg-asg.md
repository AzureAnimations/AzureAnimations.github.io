---
sidebar_position: 3
title: NSG and ASG
---

# Network Security Groups (NSG) and Application Security Groups (ASG) - 3 animations

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-480thumbnails/Azure-Vnet-Part2_thumbnail.gif" alt="Azure networking part 2" />
  </a>
  <p style={{textAlign: 'center', fontStyle: 'italic'}}>
    <a href="https://azureanimations.github.io/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Infra/Azure-Vnet-Part2-Vdo.mp4&animationTitle=Network%20Security%20Groups%20(NSG)%20and%20Application%20Security%20Groups%20(ASG)" target="_blank" style={{display:'inline-block',padding:'10px 20px',fontSize:'16px',color:'white',backgroundColor:'#007bff',border:'none',borderRadius:'5px',textDecoration:'none',cursor:'pointer'}}>🎬 Present Animation</a> <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2.gif" target="_blank">Click to download in HD size</a> or <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2-Vdo.mp4" target="_blank">view the HD video</a>
  </p>
</div>

**Network Security Groups (NSG)** 🔒
NSGs are used to filter network traffic to and from Azure resources within a Virtual Network (VNet). They contain security rules that allow or deny inbound and outbound traffic based on IP addresses, ports, and protocols. NSGs can be associated with subnets or individual network interfaces (NICs), providing granular control over network security.

**Application Security Groups (ASG)** 🏷️
ASGs simplify the management of NSGs by allowing you to group VMs and define network security policies based on these groups. Instead of manually inputting private IP addresses into the NSG, you can create an ASG as a label. The app team can then apply this ASG to their VMs, streamlining the process.

**Scenario: Simplifying NSG Management with ASG**
Imagine a DB VM in Azure sitting privately in one VNet. Four app VMs from other VNets need to connect to this DB VM. Instead of inputting all the private IP addresses into the NSG, the DB team can create an ASG. The app team applies this ASG to their VMs. Finally, the DB team configures the NSG to allow communication from the ASG, eliminating the need for IP addresses and simplifying future workload management.

By using ASGs, you can efficiently manage network security and reduce the complexity of maintaining NSG rules.

**Implementing NSG Rules with ASG**

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Implementing-NSG-Rules-with-ASG.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-480thumbnails/Implementing-NSG-Rules-with-ASG_thumbnail.gif" alt="Implementing NSG Rules with ASG" />
  </a>
  <p style={{textAlign: 'center', fontStyle: 'italic'}}>
    <a href="https://azureanimations.github.io/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Infra/Implementing-NSG-Rules-with-ASG.mp4&animationTitle=Implementing%20NSG%20Rules%20with%20ASG" target="_blank" style={{display:'inline-block',padding:'10px 20px',fontSize:'16px',color:'white',backgroundColor:'#007bff',border:'none',borderRadius:'5px',textDecoration:'none',cursor:'pointer'}}>🎬 Present Animation</a> <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Implementing-NSG-Rules-with-ASG.gif" target="_blank">Click to download in HD size</a> or <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Implementing-NSG-Rules-with-ASG.mp4" target="_blank">view the HD video</a>
  </p>
</div>

**Scenario: 1 DB VM and 4 App VMs**

**📂 ASGs**
- **DbASG**: Group for the database VM.
- **AppASG**: Group for the four application VMs.

**🔒 NSG Rules**
1. **Allow HTTP traffic to `AppASG`**:
   - **NSG**: Add this rule to the NSG associated with the **application VMs' subnet or network interfaces**.
   - **Purpose**: It allows inbound HTTP traffic to the VMs in the `AppASG`.

2. **Allow SQL traffic from `AppASG` to `DbASG`**:
   - **NSG**: Add this rule to the NSG associated with the **database VM's subnet or network interface**.
   - **Purpose**: It allows inbound SQL traffic from the VMs in the `AppASG` to the VM in the `DbASG`.

This setup ensures that your application VMs can receive HTTP traffic and communicate with the database VM over SQL.

**The final implementation of the inbound rules based in the above scenario will be illustrated in the animation below**

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2_2.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-480thumbnails/Azure-Vnet-Part2_2_thumbnail.gif" alt="Implementing NSG Rules with ASG" />
  </a>
  <p style={{textAlign: 'center', fontStyle: 'italic'}}>
    <a href="https://azureanimations.github.io/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Infra/Azure-Vnet-Part2_2-For-Vdo.mp4&animationTitle=Implementing%20the%20inbound%20rules%20(NSG-ASG)" target="_blank" style={{display:'inline-block',padding:'10px 20px',fontSize:'16px',color:'white',backgroundColor:'#007bff',border:'none',borderRadius:'5px',textDecoration:'none',cursor:'pointer'}}>🎬 Present Animation</a> <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2_2.gif" target="_blank">Click to download in HD size</a> or <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/images/animations-high-resolutions/Infra/Azure-Vnet-Part2_2-For-Vdo.mp4" target="_blank">view the HD video</a>
  </p>
</div>

