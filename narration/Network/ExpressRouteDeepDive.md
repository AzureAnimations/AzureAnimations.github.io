# Narrator Script — Network · ExpressRoute: models, SKUs, peerings and resilience

**Source animation:** [ExpressRouteDeepDive.html](../../journeys/Network/ExpressRouteDeepDive.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/expressroute/expressroute-introduction>

---

## Step 1 · What a Circuit Really Is

[calm] Contoso orders an ExpressRoute circuit. It's a pair of links that a connectivity provider delivers to Microsoft.
[600ms]
[curious] The circuit is identified by a service key, a G U I D that isn't a secret.
[600ms]
[confident] Its bandwidth is fixed, and every peering on the circuit shares it.

## Step 2 · Connectivity Models

[curious] Contoso can reach the same circuit in three provider-based ways: a cloud exchange, a point-to-point Ethernet link, or an any-to-any I P VPN.
[600ms]
[confident] The model decides what the path looks like and who runs the routing.
[600ms]
[reflective] With a Layer two provider you manage the routing yourself. With managed Layer three, the provider does it for you.

## Step 3 · SKU and Tier

[calm] Contoso picks the circuit SKU by how far it must reach.
[600ms]
[confident] Local reaches the regions near the peering location. Standard reaches every region in the geopolitical area. Premium reaches every region worldwide, with higher limits.
[600ms]
[reassuring] Then choose a data plan, metered or unlimited. You can move from metered to unlimited, but not back.

## Step 4 · Private Peering

[calm] Private peering links Contoso's network to the private addresses of a virtual network.
[600ms]
[confident] You reserve two small subnets, one for each link, then pick a VLAN and your A S N. Microsoft's side uses its own A S N.
[600ms]
[serious] The peering subnets must not overlap your virtual network. To reach it, add a gateway in the gateway subnet and a connection to the circuit.

## Step 5 · Microsoft Peering and Route Filters

[curious] Microsoft peering reaches public endpoints, such as Microsoft three sixty-five and Azure platform services.
[600ms]
[confident] Each service's prefixes carry BGP communities, and a route filter is an allow list of those communities.
[600ms]
[serious] Until a filter is attached, a new circuit advertises no prefixes at all.

## Step 6 · Route Advertisement and BGP Communities

[calm] Contoso advertises prefixes over BGP. Microsoft tags the routes it sends back with communities, and ignores any tags you add.
[600ms]
[curious] When one prefix arrives on two circuits, Azure prefers the more specific route.
[600ms]
[confident] You can also steer with connection weight, or by prepending the A S path on the other circuit. With identical routes, Azure load-balances across both.

## Step 7 · Resilience Design

[serious] Contoso removes the single points of failure, one layer at a time.
[600ms]
[confident] Each circuit has two links running active-active, so end them on different devices. Add a second circuit at a different peering location to survive a location outage.
[600ms]
[reassuring] Finish with a zone-redundant ExpressRoute gateway, so the gateway doesn't become the weak link.

## Step 8 · Global Reach and FastPath

[curious] Global Reach joins Contoso's offices through their circuits, so the sites exchange data over Microsoft's global network.
[600ms]
[confident] FastPath lets data skip the gateway and go straight to the virtual machines. The gateway still exchanges routes.
[600ms]
[reflective] FastPath needs a high-end gateway SKU, and Global Reach across regions needs Premium.

## Step 9 · ExpressRoute Direct and Encryption

[calm] ExpressRoute Direct connects Contoso's routers straight to Microsoft, with dual ports, for large data ingestion or physical isolation.
[600ms]
[serious] Traffic isn't encrypted by default.
[600ms]
[confident] MACsec protects the physical link and works only on Direct, with your key in Key Vault. IPsec protects the whole path end to end. You can use both together.

## Step 10 · Bidirectional Forwarding Detection

[concerned] When a link fails, BGP alone can take up to about three minutes to notice.
[600ms]
[impressed] Bidirectional Forwarding Detection checks the link constantly and detects the failure in under a second.
[600ms]
[reflective] Microsoft's side has it on by default for new peerings, but you configure it on your own devices. Detection is faster, though full failover still takes time.

## Step 11 · Diagnose a Circuit

[serious] Azure can't reach a Contoso subnet. Work from the bottom up.
[600ms]
[confident] Start with the circuit: it must be Enabled, and the provider status Provisioned. Then check that the peering values match on both sides, and look at the A R P table on both paths.
[600ms]
[determined] Finish with the BGP state and the route table. A state of Active or Idle points to a mismatch in subnets, VLAN, A S Ns or the M D five key.
