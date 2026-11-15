# Narrator Script - Move It Without Breaking It

**Source animation:** journeys/Compute/VirtualMachines/MoveVirtualMachines.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · It landed in the wrong place

[curious] The shop was built in a sandbox resource group, back when it was an experiment.
[600ms]
[serious] Now it takes real orders, and it needs to sit with the production resources, under production rules and production billing.
[600ms]
[calm] Worth being clear first: a resource group is a management boundary, not a location. Moving between groups does not move the data anywhere.

## Step 2 · Move between resource groups

[calm] The simplest move is the one that changes ownership only.
[600ms]
[confident] Azure changes which group the machine belongs to while it keeps running, so customers see nothing at all.
[600ms]
[serious] Both groups are locked for writes while the move runs, so nobody should be deploying into either one at the time.

## Step 3 · Move between subscriptions

[calm] A subscription move is the same idea, one level up.
[600ms]
[confident] The machine and everything it depends on, its disks, its network interface, its public address, travel together as one set into the target subscription.
[600ms]
[serious] Check the destination first. If the target subscription lacks the quota for those machines, the move fails.

## Step 4 · Changing region is a rebuild

[serious] Changing region is a different animal entirely.
[600ms]
[confident] Azure Resource Mover copies the workload and recreates the resources in the new region, which means new resources with new identifiers and new addresses.
[600ms]
[calm] Call it a rebuild, not a move, and plan it that way: cut-over, DNS, and anything that hard-coded the old addresses.

## Step 5 · Check before you commit

[curious] One habit saves most of the pain. Run the checks and see what the validation says.
[600ms]
[confident] Not every resource type supports every kind of move, so validate the whole set before starting and read the move support reference for the ones in your list.
[600ms]
[reassuring] Finding an unsupported resource in the validation step costs minutes. Finding it halfway through costs an evening.

## Step 6 · Moving - All in One

[reflective] Three kinds of move, and it helps to name them properly.
[600ms]
[confident] Group and subscription moves change who owns the resource. A region change builds the resource somewhere new.
[600ms]
[proud] And with that, Contoso's shop is built, made resilient, scaled, right-sized, backed up, watched, and living exactly where it belongs.
