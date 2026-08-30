# Peering & Bastion — narration

## Step 1 · Two problems, one afternoon

[calm] Two problems today, and they turn out to share a shortcut.
[400ms]
[confident] Your app sits in one virtual network, your database in another, and they cannot see each other. And when you need to open a session on a VM, the fastest fix is also the worst one — a public IP.
[500ms]
[helpful] Both problems have the same tempting answer. Both have a better one that takes about ten minutes to set up.

## Step 2 · Peering joins two networks privately

[confident] Peering links two virtual networks so their resources talk as if they were on one network.
[500ms]
[calm] The traffic stays on the Microsoft backbone. No public internet, no gateway, and no encryption for you to configure.
[400ms]
[helpful] Latency between peered VNets in the same region is the same as inside a single VNet — and peering itself adds no bandwidth cap. The VM size is the limit.

## Step 3 · What peering asks of you

[calm] The list of requirements is short, and honestly only the first one is likely to bite you.
[500ms]
[confident] The address spaces must not overlap. Address planning done badly is the single reason most peerings can't be created later on.
[400ms]
[helpful] You can resize the address space of a peered VNet without downtime — but both peerings then need re-syncing. Planning non-overlapping ranges up front is still far cheaper.

## Step 4 · Peering is not transitive

[curious] Here's the trap. Peer A to B, then B to C. Can A reach C?
[500ms]
[confident] No. Every pair that needs to talk needs its own peering — or a router in the middle that you put there deliberately.
[400ms]
[helpful] This is exactly why hub-and-spoke designs put Azure Firewall or a network virtual appliance in the hub. It gives spoke-to-spoke traffic something to route through, because the hub won't forward it by itself.

## Step 5 · Now, how do you get in?

[calm] So the network is private. That was the point.
[400ms]
[curious] But somebody still has to open a session on a VM — and the two traditional answers both make the estate less safe.
[500ms]
[concerned] Every public IP you attach for management is a permanent door. And a jump box is a server you now have to patch, monitor and defend.

## Step 6 · Azure Bastion is the managed front door

[confident] Azure Bastion is a fully managed service that opens RDP and SSH sessions to your VMs over TLS, on port 443.
[500ms]
[calm] You connect from the Azure portal or a native client. Your VMs keep their private IPs, and nothing else about them changes.
[400ms]
[helpful] The connection is made to the private IP of the VM. That's why the VM needs no public IP, no agent, and no extra client software.

## Step 7 · Four SKUs, four different answers

[calm] There are four tiers, and they answer genuinely different questions.
[500ms]
[confident] Developer is free and needs no subnet at all — but it handles one VM at a time and can't cross a peering. Everything above that is about scale and features.
[400ms]
[helpful] Two things to know before you pick. You can't downgrade a SKU — you delete and recreate. And only Standard and Premium support the native SSH or RDP client.

## Step 8 · One bastion, every peered network

[confident] Now watch the two ideas meet.
[400ms]
[calm] Put Bastion in the hub, and peer the spokes to it. From that single host you can open a session on any VM in any peered virtual network — and none of them needs a public IP.
[500ms]
[helpful] Access is still governed by role assignments, not just by network reachability. The user needs Reader on the VM, on its NIC, on the Bastion resource, and on the target network.

## Step 9 · Private reach, and a door you did not build

[confident] So, the takeaway.
[400ms]
[calm] Peering gives your networks a private path to each other. Bastion gives you a private path in.
[600ms]
[encouraging] And if a design still needs a public IP on a VM just for management, that's the thing worth revisiting first.
