# VPN & ExpressRoute — narration

## Step 1 · Two networks that cannot talk

[calm] Your datacentre is here. Your Azure virtual network is there.
[400ms]
[confident] They both use private addresses, and the only thing between them is the public internet — which you do not want to simply trust.
[500ms]
[helpful] Azure gives you two ways across, and they aren't really rivals. One is encryption over the internet you already have. The other is a private circuit you have to order.

## Step 2 · Site-to-site VPN

[confident] A VPN gateway in Azure builds an IPsec tunnel to the VPN device in your datacentre.
[500ms]
[calm] The internet still carries the packets. They're just encrypted for the whole journey.
[400ms]
[helpful] It needs three things on your side: a public IP, a supported VPN device, and address ranges that don't overlap with the VNet — or NAT on the gateway to fix the overlap.

## Step 3 · Point-to-site VPN

[calm] The same gateway can also accept connections from individual machines.
[500ms]
[confident] A developer or an administrator installs a client, authenticates, and lands inside the virtual network.
[400ms]
[helpful] The difference from site-to-site is what sits at the far end. Site-to-site joins a network. Point-to-site admits a person, on a device, from anywhere — with no VPN hardware at all.

## Step 4 · ExpressRoute

[confident] ExpressRoute is a private connection into Microsoft through a connectivity provider.
[500ms]
[calm] There's no tunnel, because there's no public internet in the path to protect against.
[400ms]
[helpful] This is the sentence that matters: with ExpressRoute, traffic never traverses the public internet. That's what buys the predictable latency — and what satisfies the compliance question.

## Step 5 · Three edges make the circuit

[calm] An ExpressRoute circuit is not one cable.
[500ms]
[confident] It's a chain of three routers — yours, your provider's, and Microsoft's — each peering with the next over BGP, until your network reaches Microsoft's.
[400ms]
[helpful] Your provider builds redundant connections between all three. Azure advertises your VNet prefixes to your router, your router advertises the on-premises routes back — and that two-way exchange is what makes traffic flow.

## Step 6 · One circuit, two peerings

[curious] A circuit doesn't automatically reach everything.
[500ms]
[calm] You enable peerings on it, and each peering opens a different part of Microsoft to you. Private peering reaches your virtual networks. Microsoft peering reaches the public services.
[400ms]
[concerned] A common mistake is assuming the circuit alone gets you to Microsoft 365. It doesn't — that needs Microsoft peering, and route filters to choose which service prefixes you actually want.

## Step 7 · Five questions settle it

[calm] Microsoft's own comparison comes down to five considerations.
[500ms]
[confident] Read down whichever column your answers keep landing in.
[400ms]
[helpful] And notice that only one row is really about the network. The other four are about money, time and compliance — which is why this decision so often isn't the network team's alone.

## Step 8 · Run both, on purpose

[confident] These two can terminate in the same virtual network, and often should.
[500ms]
[calm] ExpressRoute carries the traffic. The VPN sits underneath it, ready to take over if the circuit drops.
[400ms]
[helpful] When the same prefixes are advertised over both, Azure prefers ExpressRoute automatically. Your side has to reciprocate — otherwise traffic leaves one way and comes back the other, and asymmetric routing breaks the session.

## Step 9 · Encrypt the internet, or avoid it

[confident] So, the takeaway — and it genuinely is the whole choice.
[400ms]
[calm] A VPN makes the public internet safe enough to use. ExpressRoute takes the public internet out of the path entirely.
[600ms]
[encouraging] If you're unsure, start with a VPN. It's running this week, and it becomes the failover path on the day the circuit is finally delivered. So the work is never wasted.
