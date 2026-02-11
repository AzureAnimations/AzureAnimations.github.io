---
title: Redundancy Options
---

# Redundancy Options in Azure Storage Account

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Storage/Azure_Storage_Redundancy.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/Azure_Storage_Redundancy_thumbnail.gif" alt="Storage Redundancy" />
  </a>
  <p>
    <a href="/player/animationPlayer.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Storage/Azure_Storage_Redundancy_Vdo.mp4&amp;animationTitle=Redundancy%20Options%20In%20Azure%20Storage%20Account" target="_blank" style={{display:'inline-block', padding:'10px 20px', fontSize:'16px', color:'white', backgroundColor:'#0078d4', borderRadius:'5px', textDecoration:'none'}}> Present Animation</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Storage/Azure_Storage_Redundancy.gif" target="_blank">Download HD</a>
    {' | '}
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/Storage/Azure_Storage_Redundancy_Vdo.mp4" target="_blank">HD Video</a>
  </p>
</div>

Azure Storage offers various redundancy options to ensure data durability and high availability. Here's a quick guide to get started:

1. **Locally Redundant Storage (LRS)**: LRS replicates your data three times within a single data center in a region, providing protection against hardware failures.
2. **Zone-Redundant Storage (ZRS)**: ZRS replicates your data across three availability zones within a region, offering higher durability and availability by protecting against data center failures.
3. **Geo-Redundant Storage (GRS) and Read-Access Geo-Redundant Storage (RA-GRS)**: GRS replicates your data to a secondary region, hundreds of miles away from the primary location, ensuring data durability even in the event of a regional outage. RA-GRS provides read access to the secondary region.
4. **Geo-Zone-Redundant Storage (GZRS) and Read-Access Geo-Zone-Redundant Storage (RA-GZRS)**: GZRS combines the benefits of ZRS and GRS by replicating your data across availability zones and to a secondary region. RA-GZRS offers read access to the secondary region.

These redundancy options help you choose the right level of data protection and availability based on your specific needs.

## Comparison Table

| Option | Replicas | Protection Level |
|--------|----------|-----------------|
| LRS | 3 copies in one datacenter | Hardware failures |
| ZRS | 3 copies across zones | Datacenter failures |
| GRS | 6 copies (3 primary + 3 secondary) | Regional failures |
| GZRS | 6 copies (3 zones + 3 secondary) | Zone + Regional failures |

:::tip[🎬 Video Explanation]
Click the video below for recorded explanations by [Neeraj Kumar](https://www.linkedin.com/in/neerajtrainer/).

<a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7340974852037648384?collapsed=1" target="_blank"><img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-explained/Storage%20Account%20Redundancy%20Explained.png" alt="Azure Storage Account Redundancy Options" width="300"/></a>
:::

