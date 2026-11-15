# Narrator Script — Network · Outbound Connectivity: Public IPs, SNAT and NAT Gateway

**Source animation:** [OutboundConnectivity.html](../../journeys/Network/OutboundConnectivity.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/nat-gateway/nat-overview>
- <https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource>
- <https://learn.microsoft.com/azure/virtual-network/ip-services/default-outbound-access>

---

## Step 1 · Which Address Do My VMs Call From?

[calm] Contoso's app VMs only have private addresses, and a private address can't be reached from the internet.
[600ms]
[curious] Their partner, Fabrikam, only accepts API calls from an allowlisted public address. So what will Fabrikam actually see?
[600ms]
[confident] Three questions guide this lesson: which address the calls come from, how many connections the VMs can hold open, and what changed with default outbound access.

## Step 2 · Default Outbound Access

[calm] If you configure nothing, Azure quietly gives each VM an implicit outbound public IP.
[600ms]
[serious] It isn't a resource you own. Microsoft owns the address and can change it without notice, and it doesn't support ping or fragmented packets.
[600ms]
[concerned] That's a real risk, because the moment the address changes, Fabrikam's allowlist stops matching and the calls fail.

## Step 3 · What Changed: Private Subnets

[curious] Here's the big change. New virtual networks now default to private subnets, which means no default outbound IP at all.
[600ms]
[calm] Existing networks aren't touched. Their VMs keep default outbound until you make the subnet private and deallocate the VMs.
[600ms]
[confident] Either way, the direction is clear: plan an explicit outbound method, such as a NAT gateway, for anything new.

## Step 4 · Public IPs: Standard, Static, Zone-Aware

[calm] An explicit outbound method starts with a public IP, and the one to use is Standard.
[600ms]
[confident] It's static, it can be zone-redundant or zonal, and it stays closed to inbound traffic until you allow it. Standard v2 is always zone-redundant.
[600ms]
[serious] The Basic SKU was retired on September thirtieth, twenty twenty-five, so upgrade any that remain.

## Step 5 · SNAT: When Ports Run Out

[calm] Many VMs share one public IP through SNAT, which swaps each private source address and port for a public one.
[600ms]
[curious] Every active connection to the same destination address and port needs its own source port, so the pool is finite.
[600ms]
[concerned] When the ports run out, new connections to that destination fail. Reuse connections, add addresses, or use a NAT gateway.

## Step 6 · Attach a NAT Gateway

[confident] The fix is to attach one NAT gateway to the subnet. Every VM in that subnet now leaves through the gateway's static public IP.
[600ms]
[calm] There are no routes to edit and no public IPs on the VMs, and it's outbound only, so unsolicited inbound connections are blocked.
[600ms]
[impressed] Ports are handed out on demand across all the VMs, which makes exhaustion much less likely.

## Step 7 · More Addresses: IPs and Prefixes

[curious] Each public IP you add to the NAT gateway adds more ports to the shared pool.
[600ms]
[confident] A public IP prefix is a contiguous range of Standard public IPs, so Fabrikam can allowlist one range instead of many single addresses.
[600ms]
[reflective] Choose the prefix size carefully, because you can't resize it later.

## Step 8 · Bring Your Own IP Range

[calm] Contoso may already own a range of public addresses, and it can bring that range to Azure.
[600ms]
[confident] You register it with a regional internet registry, validate it, provision it, and commission it. You can't attach the custom prefix directly, so you derive public IPs and prefixes from it.
[600ms]
[proud] The payoff is that Contoso keeps its address reputation and its existing allowlists.

## Step 9 · Which Outbound Method Wins?

[curious] What happens when a subnet has several outbound methods at once? There's a clear order.
[600ms]
[calm] A route to an appliance or gateway wins first. Then the NAT gateway, then an instance-level IP, then load balancer outbound rules, and last the default route.
[600ms]
[serious] Existing flows keep their old method, only new connections move, and Basic SKU resources don't work with a NAT gateway.

## Step 10 · NAT Gateway: Zones and Idle Timeout

[calm] A Standard NAT gateway lives in one zone. You pick the zone, or choose no zone and Azure places it, and you can't change it later.
[600ms]
[confident] StandardV2 is zone-redundant across all zones, and it needs StandardV2 public IPs.
[600ms]
[curious] Idle flows are dropped after a timeout you can adjust for TCP. Any activity, like a keepalive, resets the timer, but the UDP timeout is fixed.

## Step 11 · Pick Your Outbound Method

[curious] Instead of starting from the product, start from the need. Select one and the diagram shows the method, its path and what to watch for.
[600ms]
[confident] For most scenarios, Microsoft recommends a NAT gateway. A firewall adds inspection, and you reach it with a route.
[600ms]
[serious] Default outbound access is not recommended for production.

## Step 12 · Outbound Connectivity, All in One

[calm] Contoso's private VMs now leave through a private subnet and a NAT gateway, using Standard static IPs.
[600ms]
[confident] The three answers: the address is a Standard static IP, a prefix, or your own range. Connections use SNAT ports, allocated on demand. And new virtual networks default to private subnets.
[600ms]
[proud] Fabrikam allowlists one range, and Contoso's calls always arrive from a known address.
