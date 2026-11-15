# Azure Networking Journey — hub walkthrough narration

Pairs 1:1 with the `TOUR` steps in `static/v2/Network/index.html`.
Step 1 plays on the intro screen; steps 2–11 spotlight stops 01–10 on the board; step 12 is the recap.
Kept deliberately SHORT — roughly 12–16 s per clip, so the spotlight keeps moving.
Delivery cues in `[square brackets]`; `[NNNms]` becomes an SSML break.

## Step 1 · Welcome

[confident] Welcome to the Azure Networking Journey.
[300ms]
[calm] This is the network almost every serious Azure workload ends up with. Ten short animations take it apart, in the order you would actually build it.

## Step 2 · Virtual Network

[confident] Stop one. The virtual network.
[300ms]
[calm] Your own private slice of Azure, carved into subnets. Subnets are what you route traffic to, and what you secure.

## Step 3 · NSG and ASG

[confident] Stop two. Network and application security groups.
[300ms]
[calm] The NSG guards the subnet. The ASG names the workload, so you write "allow the app tier to reach the database" instead of a rule full of IP addresses.

## Step 4 · VNet peering and Bastion

[confident] Stop three. Peering, and Bastion.
[300ms]
[calm] Peering joins virtual networks privately over the Azure backbone. Bastion gives you RDP and SSH from the portal, so no virtual machine needs a public IP.

## Step 5 · DNS and Private Link

[confident] Stop four. DNS, and Private Link.
[300ms]
[calm] First you resolve the name, then you reach it privately. A private endpoint pulls a platform service into your own subnet as an ordinary private address.

## Step 6 · Load balancing

[confident] Stop five. Load balancing.
[300ms]
[calm] Front Door, Traffic Manager, Application Gateway, Load Balancer. Global or regional, HTTP or not — answer those two questions and the choice makes itself.

## Step 7 · WAF and Azure Firewall

[confident] Stop six. Web application firewall, and Azure Firewall.
[300ms]
[calm] The WAF inspects the web request. Azure Firewall gates everything else — and it only protects what your route tables actually send through it.

## Step 8 · VPN Gateway and ExpressRoute

[confident] Stop seven. VPN Gateway, and ExpressRoute.
[300ms]
[calm] Two ways in from your own datacentre. An encrypted tunnel across the internet, or a private circuit that never touches it. Plenty of organisations run both.

## Step 9 · Azure Virtual WAN

[confident] Stop eight. Azure Virtual WAN.
[300ms]
[calm] The managed alternative to running the hub yourself, with global transit built in. Branches, VPN users, circuits and spokes all meet in one place.

## Step 10 · Network monitoring

[confident] Stop nine. Monitoring.
[300ms]
[calm] Network Watcher tells you why a packet was dropped right now. Azure Monitor and flow logs tell you what happened last Tuesday.

## Step 11 · Naming convention

[confident] Stop ten. The naming convention.
[300ms]
[calm] The least technical stop, and the one that decides whether the other nine stay maintainable. Agree it early — renaming a resource usually means recreating it.

## Step 12 · The whole picture

[confident] That is the whole journey.
[300ms]
[calm] Build it, secure it, connect it, operate it. Pick any stop on the board to dive in — or start at number one, the virtual network.
