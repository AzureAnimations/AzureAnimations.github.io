# Narrator Script — Network · DNS Private Resolver and Hybrid DNS

**Source animation:** [DnsPrivateResolver.html](../../journeys/Network/DnsPrivateResolver.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/dns/dns-private-resolver-overview>
- <https://learn.microsoft.com/azure/dns/private-resolver-endpoints-rulesets>
- <https://learn.microsoft.com/azure/dns/private-resolver-hybrid-dns>
- <https://learn.microsoft.com/azure/dns/private-resolver-architecture>

---

## Step 1 · The network works. The names don't.

[calm] Contoso's datacentre is connected to Azure by VPN or ExpressRoute, and the link is up.
[600ms]
[concerned] Yet each side runs its own DNS. On-premises can't see Azure's private names, and Azure can't see corp dot contoso dot local.
[600ms]
[curious] The connection carries the packets, but something still has to carry the questions.

## Step 2 · The old answer: DNS servers you run

[calm] The old answer was DNS forwarder virtual machines in Azure. On-premises forwards Azure names to them.
[600ms]
[curious] Virtual networks then point their custom DNS at those machines, and the gap is bridged.
[600ms]
[serious] It works, but now you run servers. That means patching, availability, licences, and manual changes for every DNS update.

## Step 3 · Swap the servers for a service

[calm] Azure DNS Private Resolver is a fully managed, highly available service.
[600ms]
[confident] There are no DNS machines to deploy, patch, or scale, and no DNS client settings to change on your VMs.
[600ms]
[reassuring] It needs a virtual network, plus ExpressRoute or a VPN. Everything else is configuration, through endpoints and rules.

## Step 4 · Inbound endpoint: the door into Azure

[calm] An inbound endpoint is a private IP address in your virtual network, in its own dedicated subnet.
[600ms]
[confident] On-premises DNS forwards Azure private names to it, and Azure DNS answers from the private zones linked to that network.
[600ms]
[curious] On-premises, you create a conditional forwarder for the zone that points at this address.

## Step 5 · Outbound endpoint: the door out of Azure

[calm] An outbound endpoint sends queries from Azure to on-premises, to another cloud, or to any external DNS server.
[600ms]
[curious] It has its own dedicated subnet, but it has no IP address of its own, and that is by design.
[600ms]
[confident] It doesn't decide where a query goes, though. That's the job of a forwarding ruleset.

## Step 6 · Forwarding rulesets: which domain goes where

[calm] A DNS forwarding ruleset is a list of rules. Each rule says, for this domain, ask these DNS servers.
[600ms]
[confident] For example, corp dot contoso dot local goes to your on-premises DNS server on port fifty-three.
[600ms]
[serious] When several rules match a name, the longest suffix wins. The ruleset attaches to an outbound endpoint, which sends the query on its way.

## Step 7 · Ruleset links: put the rules to work

[calm] Link a ruleset to a virtual network, and the VMs there use its rules. You change no DNS settings.
[600ms]
[curious] A rule that points at the inbound endpoint even lets a spoke resolve private zones that live in the hub.
[600ms]
[reassuring] Linked networks don't have to peer with the resolver's network, although in hub-and-spoke they usually do.

## Step 8 · Where the resolver sits in hub-and-spoke

[calm] Put the resolver in the hub. Spokes can then reach it in one of two ways.
[600ms]
[confident] Distributed keeps each spoke on Azure-provided DNS and uses ruleset links. Centralized sets each spoke's custom DNS to the inbound endpoint.
[600ms]
[serious] Both designs need the hub network linked to the private zone.

## Step 9 · Private endpoints across the tunnel

[calm] On-premises clients reach a private endpoint by the normal name, such as contosodata dot blob dot core dot windows dot net.
[600ms]
[serious] Forward the public zone name, blob dot core dot windows dot net, not the privatelink version.
[600ms]
[impressed] Azure adds a CNAME to the privatelink name, and the hub's private zone answers with the endpoint's private IP.

## Step 10 · Trace a query through the resolver

[excited] Pick a query and watch where it goes. Then select any numbered hop to see what happens there.
[600ms]
[calm] Azure VM names go through Azure DNS and the ruleset links. On-premises names come in through the inbound endpoint.
[600ms]
[impressed] And the resolver is the one part you didn't have to build.

## Step 11 · Resolver, private zones, Firewall DNS proxy

[calm] These three sound alike, and they overlap, but each does a different job.
[600ms]
[curious] A private zone holds the records. The resolver forwards queries between networks, in both directions. A firewall DNS proxy handles filtering and forwarding.
[600ms]
[confident] They combine well, with the firewall adding filtering by domain name in its rules.

## Step 12 · Hybrid DNS, nothing to patch

[calm] A managed resolver replaces your DNS virtual machines.
[600ms]
[confident] The inbound endpoint answers on-premises queries. The outbound endpoint and rulesets handle Azure queries, and links apply the rules to your networks.
[600ms]
[proud] For the exam, know which endpoint serves which direction, and where the resolver sits in hub-and-spoke.
