# Narrator Script — Network · Managed Networking — Virtual Network Manager and Route Server

**Source animation:** [ManagedNetworking.html](../../journeys/Network/ManagedNetworking.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network-manager/overview>
- <https://learn.microsoft.com/azure/virtual-network-manager/concept-security-admins>
- <https://learn.microsoft.com/azure/route-server/overview>
- <https://learn.microsoft.com/azure/route-server/route-server-faq>

---

## Step 1 · Many VNets, Managed by Hand

[calm] Contoso keeps adding virtual networks. Each one needs its own peerings and its own copy of the security rules.
[600ms]
[concerned] Peerings get created one by one, in every region, and the NSG copies slowly drift apart.
[600ms]
[serious] And every new VNet repeats all of that work again.

## Step 2 · One Manager, One Scope

[calm] Azure Virtual Network Manager groups, configures and deploys your virtual networks from one place.
[600ms]
[confident] Its scope is a management group or a list of subscriptions, and that's the boundary of what it can see and change.
[600ms]
[curious] A VNet outside the scope isn't managed. The workflow runs in order: scope, network groups, configurations, deploy.

## Step 3 · Network Groups Choose Who Gets What

[calm] A network group is a container of virtual networks. Configurations target the group, so every member receives them.
[600ms]
[curious] Static membership means you pick individual VNets yourself. Dynamic means an Azure Policy condition, such as a tag, picks them for you.
[600ms]
[confident] And a VNet can sit in several groups at once.

## Step 4 · Connectivity, Defined Once

[calm] A connectivity configuration chooses the topology for each group.
[600ms]
[curious] Hub-and-spoke peers each spoke with the hub. Mesh connects every VNet in the group to every other one.
[600ms]
[confident] Direct connectivity adds a mesh between the spokes of one group, so they reach each other without the hub hop. Here, Production has it and Test does not.

## Step 5 · Security Admin Rules Go First

[calm] Admin rules are global rules owned by the central network team. They're evaluated before NSG rules, which stay with the app teams.
[600ms]
[confident] They can allow, deny, or always allow, and that's what decides the traffic.
[600ms]
[serious] An Allow rule still lets NSGs decide. But a Deny or Always allow rule ends the evaluation, so an NSG can't override it.

## Step 6 · Nothing Applies Until You Deploy

[serious] Until you deploy, a configuration is only a plan.
[600ms]
[calm] Commit the configurations to the regions you choose. Roll out gradually, one region at a time, and only the regions you deploy to change.
[600ms]
[reassuring] The goal state is the deployed configurations plus group membership. To remove everything from a region, deploy none to it.

## Step 7 · Change the Group, the Rules Follow

[curious] Try it. Add or remove a virtual network from a group.
[600ms]
[impressed] Once configurations are deployed, a new member picks them up with no redeploy, and a removed one loses them. Peering, direct links and the admin rule all follow the membership.
[600ms]
[reassuring] Static membership updates immediately. Dynamic waits for Azure Policy, which can take a few minutes.

## Step 8 · Routes by Hand Go Stale

[calm] A network virtual appliance, or NVA, learns routes from branches. It might be an SD-WAN device or a firewall.
[600ms]
[concerned] To use those routes, someone must edit the route tables, the UDRs, every time a route changes.
[600ms]
[serious] A new prefix has no route until someone adds it. That's the gap.

## Step 9 · Azure Route Server in Its Own Subnet

[calm] Route Server is a managed service in a dedicated subnet named RouteServerSubnet, slash twenty-six or larger.
[600ms]
[confident] Your NVA peers with it over BGP, and you peer with both of its instances. Any NVA that supports BGP can do this.
[600ms]
[impressed] The benefit is no UDR upkeep for the routes the NVA learns.

## Step 10 · Routes Flow In and Out Automatically

[curious] The NVA advertises the prefixes it knows. Route Server programs those routes into the virtual network, and the VNet's prefixes flow back.
[600ms]
[confident] It only exchanges routes.
[600ms]
[reassuring] Data never passes through Route Server. Traffic goes straight between the VM and the NVA.

## Step 11 · Gateways and Branch-to-Branch

[calm] By default, each component exchanges routes only with Route Server.
[600ms]
[curious] Turn on route exchange, and Route Server passes routes between your NVA, VPN gateway and ExpressRoute gateway. On-premises sites can then reach each other through Azure.
[600ms]
[serious] The gateways must be in the same VNet as Route Server. Circuit-to-circuit isn't carried, so use Global Reach for that.

## Step 12 · Which Tool for Which Job?

[curious] The same networks, but different jobs. Match the question you're asking to the service that answers it.
[600ms]
[confident] Many VNets you own point to Virtual Network Manager, with Azure Policy for tag-based groups. A managed hub points to Virtual WAN.
[600ms]
[calm] For routes, use UDRs for fixed paths and Route Server for BGP learning.

## Step 13 · Managed Networking, All in One

[calm] Virtual Network Manager runs many VNets consistently, with scope, groups, connectivity, admin rules and deploy.
[600ms]
[confident] Azure Route Server lets NVAs and gateways learn routes without hand-edited tables, using RouteServerSubnet, BGP peering and route exchange.
[600ms]
[proud] These are the A Z seven hundred topics, plus network design for A Z three oh five. The study guides are the next stop.
