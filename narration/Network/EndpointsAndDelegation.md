# Narrator Script — Network · Service Endpoints, Private Endpoints and Delegation

**Source animation:** [EndpointsAndDelegation.html](../../journeys/Network/EndpointsAndDelegation.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoints-overview>
- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoint-policies-overview>
- <https://learn.microsoft.com/azure/virtual-network/subnet-delegation-overview>
- <https://learn.microsoft.com/azure/virtual-network/vnet-integration-for-azure-services>

---

## Step 1 · PaaS answers on a public address

[calm] Contoso has a VM in vnet-app, and it needs Storage, SQL and Key Vault.
[600ms]
[curious] Those services answer on a public endpoint. Your VM can use it, but so can any other network until you add rules.
[600ms]
[serious] The addresses here are documentation ranges, not real ones. The point is that public by default means open until you say otherwise.

## Step 2 · Three doors to the same service

[curious] There are three ways to reach the same service. Keep the public address and filter it, give a subnet a shortcut to it, or put a private IP in front of it.
[600ms]
[confident] Each door answers a different need, so none of them is simply better.
[600ms]
[calm] Subnet delegation is a separate job. It lets a service live inside your subnet, and we'll get to it later.

## Step 3 · Service endpoint: switch it on for a subnet

[calm] A service endpoint is switched on per subnet. Traffic from that subnet then travels to the service over the Azure backbone.
[600ms]
[impressed] The service now sees the subnet's private address, so a VNet rule can allow exactly that subnet.
[600ms]
[serious] The service keeps its public IP and public DNS name. And enabling or removing the endpoint briefly resets open connections on that subnet.

## Step 4 · A service endpoint stops at the subnet

[calm] Service endpoints only help traffic that starts in a subnet.
[600ms]
[concerned] Traffic from on-premises arrives from public NAT addresses, so the endpoint never sees it. You need an IP rule or a private endpoint instead.
[600ms]
[reassuring] With ExpressRoute Microsoft peering, allow the NAT addresses you use in the resource's IP firewall.

## Step 5 · Endpoint policies narrow it to your accounts

[curious] A service endpoint reaches the whole service, including every other customer's accounts. That's wider than most people expect.
[600ms]
[confident] A service endpoint policy lists the Storage accounts your subnet may reach, and denies the rest.
[600ms]
[serious] It's an allow list, so include every account the app depends on. It applies to Azure Storage, and not to classic accounts.

## Step 6 · Private endpoint: a private IP for one resource

[calm] A private endpoint puts a network interface with a private IP into your subnet, and maps it to one named resource.
[600ms]
[confident] Private Link carries the traffic. But DNS must return that private IP, or clients keep going to the public address.
[600ms]
[reassuring] This is only a recap. The DNS and Private Link lesson covers the private DNS zone and the VNet link in detail.

## Step 7 · Service endpoint or private endpoint?

[curious] Put the two side by side and the differences that decide the choice stand out.
[600ms]
[calm] Both keep Azure-to-Azure traffic on the Azure backbone.
[600ms]
[confident] Microsoft recommends Private Link where you can use it. Service endpoints stay useful when you want the simple option with no extra charge.

## Step 8 · Which door should the VNet use?

[curious] Pick the need closest to yours, and the matching door appears, with a picture and the questions that decide it.
[600ms]
[calm] Do you need on-premises access? Only one account? A private address?
[600ms]
[reflective] Real designs often combine them: private endpoints for production data, and service endpoints for a low-risk dev subnet.

## Step 9 · Subnet delegation: let a service live in your subnet

[calm] Endpoints let your VNet reach a service. Delegation goes the other way, and lets a service set up inside your subnet.
[600ms]
[confident] You designate the subnet, and the service creates its own resources there.
[600ms]
[serious] Each service sets its own rules. Some need a dedicated subnet, and some set a minimum size, so check its doc before you plan the address space.

## Step 10 · Three ways this goes wrong

[concerned] Most of the "it should work" tickets come down to three causes.
[600ms]
[curious] Check the subnet, the rule type, and the DNS answer. Is the traffic coming from the right subnet? Did you use a VNet rule where an IP rule was needed? Does the name resolve privately?
[600ms]
[serious] Enabling or disabling a service endpoint closes open TCP connections on that subnet, so do it outside critical work.

## Step 11 · Reaching PaaS privately, at a glance

[calm] Here's the whole picture. Pick the door from the need: a service endpoint, a service endpoint policy, or a private endpoint.
[600ms]
[confident] Then add delegation when a service has to live in your subnet.
[600ms]
[reassuring] Next, DNS and Private Link shows the DNS half of private endpoints.
