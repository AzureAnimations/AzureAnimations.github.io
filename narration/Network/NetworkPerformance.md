# Narrator Script — Network · Design for network performance: latency, throughput and the path

**Source animation:** [NetworkPerformance.html](../../journeys/Network/NetworkPerformance.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview>
- <https://learn.microsoft.com/azure/frontdoor/front-door-traffic-acceleration>
- <https://learn.microsoft.com/azure/expressroute/about-fastpath>

---

## Step 1 · Is It Slow, or Is It Far?

[calm] Contoso's online shop feels slow for customers far from its hosting region.
[600ms]
[curious] Latency is the round-trip time between two points. Throughput is how much data moves each second. Packet loss is the share of packets that never arrive.
[600ms]
[confident] Each one has a different fix, so name the symptom before you pick a solution.

## Step 2 · Measure First

[calm] Connection Monitor tests latency and packet loss along the path, and shows it hop by hop.
[600ms]
[confident] Network Insights shows topology, health and metrics for your network resources, with no setup.
[600ms]
[curious] For VM-to-VM latency, use Latte on Windows or SockPerf on Linux. Plain ping uses ICMP, so it is not the same test as TCP or UDP.

## Step 3 · Keep Chatty VMs Close

[curious] Chatty VMs pay for every round trip. A region is close, and a zone is closer.
[600ms]
[reflective] But one zone can span several datacenters, so machines in the same zone can still be a few hops apart.
[600ms]
[serious] A proximity placement group keeps them in one datacenter, with the lowest latency. The trade-off is that allocation can fail, and you give up some resilience.

## Step 4 · Accelerated Networking

[calm] Normally, every packet crosses the host's virtual switch.
[600ms]
[impressed] Accelerated Networking lets the network card send traffic straight to the VM, and applies policies like network security groups in hardware.
[600ms]
[confident] You get lower latency, less jitter and lower CPU use. Enable it on both VMs in the same virtual network, on a supported size that's stopped and deallocated.

## Step 5 · VM Size Sets the Ceiling

[calm] Each VM size has its own outbound bandwidth limit.
[600ms]
[serious] It counts all traffic leaving the VM, to any destination, and it's shared across all network cards. Extra cards and Accelerated Networking don't raise it.
[600ms]
[encouraging] If you're hitting the ceiling, choose a size with more network bandwidth.

## Step 6 · Edge Acceleration

[curious] Front Door and CDN edge locations sit near your users, and serve cached files from there.
[600ms]
[confident] For dynamic traffic, split TCP ends the user's connection at a nearby edge and reuses a longer-lived connection to the origin.
[600ms]
[serious] Cache static files, never personal data. And start new designs on Front Door, because the classic Azure CDN is retiring.

## Step 7 · Pick Routing for Speed

[calm] Several services can send users to the fastest place, but they work at different layers.
[600ms]
[confident] Traffic Manager answers DNS with the lowest-latency endpoint. Front Door brings HTTP and HTTPS users in at a nearby edge.
[600ms]
[curious] A cross-region load balancer gives TCP and UDP apps one static global IP. Pick a tab to compare them.

## Step 8 · Private Path to On-Premises

[calm] A private circuit has fixed bandwidth, so size it for the peak traffic. Oversubscribing drops packets.
[600ms]
[confident] FastPath lets data skip the gateway, which still exchanges routes, and it needs a high-performance gateway SKU.
[600ms]
[reassuring] Global Reach links your on-premises sites to each other through Microsoft's network.

## Step 9 · Where Inspection Adds Latency

[concerned] Sending traffic through a firewall in the hub adds a hop.
[600ms]
[confident] Peering latency-sensitive spokes directly adds no extra hop, and is recommended to minimize latency.
[600ms]
[reflective] Virtual WAN adds a Microsoft-managed hub router, and routing intent can add inspection back where you need it.

## Step 10 · All in One

[calm] Name the symptom: latency, throughput or packet loss. Then measure it with Connection Monitor and Network Insights.
[600ms]
[confident] Then fix it with placement, the network card, VM size, the edge, routing, or a private path, changing one thing at a time.
[600ms]
[proud] Match each symptom to its fix, and you can recommend a solution that optimizes network performance, an A Z three oh five skill.
