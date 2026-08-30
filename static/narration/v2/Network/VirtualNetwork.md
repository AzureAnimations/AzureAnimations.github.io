# Virtual Network — narration

Pairs 1:1 with the STEPS array in `static/v2/Network/VirtualNetwork.html`.
Delivery cues in `[square brackets]`; `[NNNms]` becomes an SSML break.

## Step 1 · Start With a Virtual Network

[confident] Everything in Azure networking starts here, with a virtual network.
[500ms]
[calm] A VNet is your own private, isolated slice of the Azure network. You give it an address space in CIDR notation — here, ten dot zero dot zero dot zero slash sixteen.
[400ms]
[helpful] Stick to the private RFC 1918 ranges, and if you need it, Azure will happily run dual-stack IPv4 and IPv6.

## Step 2 · Segment It Into Subnets

[calm] One big network isn't much of a design. So you carve the VNet into subnets — smaller ranges, like ten dot zero dot one dot zero slash twenty-four.
[500ms]
[confident] Subnets are where the real work happens. They group related resources, they give you somewhere to route traffic, and they give you a boundary to apply security at.
[400ms]
[helpful] Remember this one: every resource you place in Azure lives inside a subnet.

## Step 3 · Place a Virtual Machine

[calm] Now let's put something in it. Drop a virtual machine into the subnet.
[400ms]
[confident] To speak on the network at all, that VM needs at least one private IP address. A public IP is optional — and most of the time, you don't want one.
[500ms]
[curious] But here's the catch, and it trips up almost everyone: an IP address is never assigned to the virtual machine itself.

## Step 4 · The NIC Holds the IPs

[confident] That's what the network interface is for. The NIC.
[400ms]
[calm] The NIC is what actually carries the private IP, and the optional public IP — and it can hold more than one IP configuration if you need it to.
[500ms]
[helpful] A NIC attaches to exactly one virtual machine. One to one. That attachment is what gives the VM its place on the subnet.

## Step 5 · Filter Traffic With an NSG

[curious] So how do you control what's actually allowed to reach that VM?
[400ms]
[confident] You attach a network security group. An NSG is a list of allow and deny rules — by port, by protocol, and by direction, both inbound and outbound.
[500ms]
[calm] The rules are evaluated in priority order, lowest number first. Attach it to the NIC, and you're filtering traffic for that one virtual machine.

## Step 6 · One NSG for the Whole Subnet

[curious] Now add a second VM. And a third. Are you really going to attach the same NSG to every single NIC by hand?
[500ms]
[confident] Of course not. Associate the NSG with the subnet instead.
[400ms]
[calm] Now every NIC in that subnet inherits the same rules automatically — and it keeps working no matter how many virtual machines you add.

## Step 7 · The Whole Picture

[confident] So let's put the whole thing together.
[500ms]
[calm] A VNet gives you an address space. Subnets segment it. Virtual machines sit inside those subnets, and their IP addresses live on a NIC — never on the VM directly.
[400ms]
[calm] And NSGs filter the traffic, attached either to a single NIC, or to the whole subnet when you want it to scale.
[600ms]
[encouraging] That's the core of Azure networking. Every other service you'll meet builds on exactly this.
