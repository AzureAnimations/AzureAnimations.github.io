# Virtual WAN — narration

## Step 1 · The hub you built by hand

[calm] A self-managed hub works beautifully with three spokes.
[500ms]
[concerned] At thirty spokes, two regions and forty branch offices, you're maintaining peerings, route tables and gateways as a full-time job.
[400ms]
[confident] Nothing here is wrong — hub-and-spoke is the right shape. The question is who operates the hub. Virtual WAN is Microsoft offering to run that part for you.

## Step 2 · Azure Virtual WAN

[confident] Virtual WAN is a networking service that bundles connectivity, routing and security into one Microsoft-managed hub.
[500ms]
[calm] You attach things to it. Microsoft owns what happens inside.
[400ms]
[helpful] The shape you get is still hub and spoke. What changes is that Microsoft manages the peerings and the routing inside the hub — including the connections between hubs in different regions.

## Step 3 · What may live in the hub

[calm] A virtual hub is a virtual network that Microsoft creates and controls.
[500ms]
[confident] And that's the whole trade. You get the routing for free, and you give up the ability to put arbitrary things inside it.
[400ms]
[concerned] This catches teams out. You cannot drop a VM, a domain controller, or Azure Bastion into a virtual hub. Those go in a spoke — what Microsoft calls the virtual hub extension pattern.

## Step 4 · One network, two regions, every branch

[calm] Contoso attaches branch VPNs, an ExpressRoute circuit and its remote users to hubs in two regions.
[500ms]
[confident] Microsoft joins those hubs together, and every spoke behind them can reach every other.
[400ms]
[helpful] The line between the two hubs is the one you never have to build. Microsoft creates and maintains it — and it's what turns two regional hubs into a single global transit network.

## Step 5 · Four paths you get for nothing

[confident] Standard Virtual WAN is a full mesh.
[500ms]
[calm] Once two things are attached to the same Virtual WAN, they can reach each other — in the same region, or across regions.
[400ms]
[helpful] Compare that with plain peering, which is not transitive. Two spokes peered to the same hub still can't talk without a route table pointing at something in the middle. In Virtual WAN, that path already exists.

## Step 6 · Secured virtual hub

[confident] Turn a hub into a secured hub, and Firewall Manager deploys Azure Firewall into it.
[500ms]
[calm] Every spoke and every branch attached to that hub is then inspected by one shared firewall.
[400ms]
[helpful] And here's the part worth knowing: a secured hub has built-in routing. You don't write user-defined routes to force traffic through it, the way you would in a hub you built yourself.

## Step 7 · Basic buys almost nothing

[calm] Virtual WAN comes in two SKUs, and the gap between them is not subtle.
[500ms]
[confident] Basic exists for one narrow case. Nearly every design that reaches for Virtual WAN needs Standard.
[400ms]
[helpful] If you want more than one hub, or ExpressRoute, or point-to-site, or transit between spokes — that's Standard. Basic gives you site-to-site VPN into a single hub, and stops there.

## Step 8 · Managed hub, or one you own

[calm] Both options give you hub and spoke.
[500ms]
[confident] The choice is about how much control you need inside the hub, weighed against how much of it you want to operate.
[400ms]
[helpful] The honest deciding question isn't scale — it's whether you need to put something of your own inside the hub. If you do, Virtual WAN is the wrong answer regardless of how many spokes you have.

## Step 9 · The same shape, someone else's problem

[confident] So, the takeaway.
[400ms]
[calm] Virtual WAN doesn't invent a topology. It takes the hub you would have built anyway, and hands the operating of it to Microsoft — with transit and cross-region links included.
[600ms]
[encouraging] Decide it on one question. Is there anything of your own that must live inside the hub? If no, take the managed one. If yes, build it yourself and keep the control.
