# Narrator Script — Network · VPN gateway SKUs and policies

**Source animation:** [GatewaySkusAndPolicies.html](../../journeys/Network/GatewaySkusAndPolicies.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings>
- <https://learn.microsoft.com/azure/vpn-gateway/about-gateway-skus>
- <https://learn.microsoft.com/azure/vpn-gateway/design>
- <https://learn.microsoft.com/azure/vpn-gateway/point-to-site-about>

---

## Step 1 · Which gateway, which settings?

[calm] Contoso Retail has a branch office and a team of remote workers, and both need to reach Azure.
[600ms]
[curious] The branch connects with a site-to-site tunnel from its VPN device. The remote workers use point-to-site, with a client tunnel and a sign-in.
[600ms]
[confident] Four choices on one VPN gateway decide how well this goes. We'll make them one at a time.

## Step 2 · Route-based or policy-based?

[calm] The VPN type decides how traffic is matched to a tunnel, and which features exist at all. Settle it before you pick a SKU.
[600ms]
[confident] Route-based is the one that unlocks point-to-site, BGP and active-active.
[600ms]
[serious] Policy-based exists only on the Basic SKU, with one tunnel and no point-to-site. You can't convert it. You delete it and create a route-based gateway.

## Step 3 · What a bigger SKU buys you

[curious] A higher tier gets more CPU and bandwidth. That raises four ceilings: site-to-site tunnels, point-to-site connections, throughput class, and the VMs behind the gateway.
[600ms]
[serious] Every tier above Basic also adds production features that Basic leaves out, like BGP, active-active, zone redundancy, RADIUS, custom policies and IPv6.
[600ms]
[reassuring] Throughput figures are benchmarks, not guarantees, so read the current table when you size a real gateway.

## Step 4 · Generation and the AZ suffix

[calm] Read a SKU name in two parts: its generation, and whether it ends in AZ.
[600ms]
[confident] Generation two gives more throughput at the same tier and adds the largest tiers. AZ means zone-redundant, where the region has availability zones.
[600ms]
[serious] Zone-redundant AZ SKUs are the ones you create today. Basic isn't retiring, but it's meant for dev and test.

## Step 5 · Active-standby or active-active?

[calm] Every VPN gateway is two instances. By default one works and one waits, and that's active-standby.
[600ms]
[confident] Active-active puts both to work, each with its own public IP. It needs a route-based gateway that isn't Basic, plus Standard static public IPs.
[600ms]
[serious] After a standby takes over, expect a brief interruption, and point-to-site users have to reconnect.

## Step 6 · Dual redundancy and BGP failover

[curious] Pair an active-active gateway with two on-premises devices, and you get four tunnels, all active.
[600ms]
[impressed] BGP withdraws the routes of a failed tunnel, so traffic moves to the rest by itself.
[600ms]
[serious] You need two local network gateways, two connections, and BGP so both connections can carry the same prefixes. Check that both devices support BGP.

## Step 7 · How the tunnel is built: IKE, then IPsec

[calm] The two devices agree on their rules in two phases.
[600ms]
[curious] In phase one, IKE, they agree how to talk: encryption, integrity and a DH group. In phase two, IPsec, they agree how to protect the data, with a PFS group.
[600ms]
[reassuring] Ask for nothing special and Azure offers a default set of proposals chosen to work with most devices.

## Step 8 · When the partner device dictates

[calm] Sometimes a compliance rule or an older firewall accepts only one combination.
[600ms]
[confident] A custom IPsec and IKE policy on the connection names exactly which. It's one policy per connection, and it isn't available on Basic.
[600ms]
[reflective] The values shown are an example, not a recommendation. Policy-based selectors also let a route-based gateway talk to policy-based firewalls, with no transit.

## Step 9 · Point-to-site tunnel types

[calm] A remote worker starts the tunnel from a laptop. The tunnel type decides which devices can connect, and which firewalls let it through.
[600ms]
[confident] OpenVPN is TLS-based over port four four three, so it passes most firewalls and has the widest client range. IKEv2 is standards-based, but some networks block its UDP ports.
[600ms]
[serious] SSTP is Windows-only and retiring. It can't be enabled from August thirty-first, twenty twenty-six, and stops working on March thirty-first, twenty twenty-seven.

## Step 10 · Who gets in: three sign-in methods

[calm] Before the gateway accepts a tunnel, it must authenticate the user. Match the method to the identity system you already run.
[600ms]
[confident] Microsoft Entra ID brings Conditional Access and MFA, but works only with OpenVPN and the Azure VPN Client. RADIUS uses AD credentials, adds MFA through NPS, and isn't on Basic.
[600ms]
[reassuring] You can enable several methods at once, as long as each client supports at least one.

## Step 11 · ExpressRoute gateway, with VPN beside it

[calm] ExpressRoute has its own gateway type and its own SKUs: ErGw1Az, ErGw2Az, ErGw3Az and ErGwScale. A higher SKU means more CPU and bandwidth.
[600ms]
[curious] A site-to-site VPN gateway beside it can be the backup if the circuit fails.
[600ms]
[serious] That needs a route-based VPN gateway that isn't Basic, and a gateway subnet of slash twenty-seven or larger. Prefer the ExpressRoute routes on-premises.

## Step 12 · Try your own requirements

[curious] Now it's your turn. Set the requirements on the left: branches, throughput class, resilience, branch device and remote workers.
[600ms]
[impressed] The four settings on the right light up with what to choose, and why.
[600ms]
[reassuring] It's a teaching model that follows Learn guidance, not a sizing tool. Confirm limits and pricing on the current pages before you deploy.

## Step 13 · One gateway, four decisions

[calm] Here's the recap: route-based and zone-redundant, active-active with BGP where it matters.
[600ms]
[confident] Add a custom policy only when a partner demands it, and choose a sign-in that matches your identity system.
[600ms]
[proud] A Z seven hundred and A Z three oh five both expect you to pick these settings from requirements. The Learn study guides are the next stop.
