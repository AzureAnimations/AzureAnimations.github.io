# Narrator Script - VMs Across Availability Zones

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · What if a whole zone fails?

[curious] Fault domains handled a rack. But what if the problem is bigger than a rack?
[800ms]
[serious] Power, cooling or networking can take out an entire datacenter location.
[600ms]
[confident] Availability zones give Contoso separation at that level, and reaching for them means designing the shop again, not converting the availability set in place.

## Step 2 · Place one VM in a zone

[calm] Start with a single zonal machine.
[600ms]
[confident] Pinning a VM to a zone tells Azure which physically separate location inside the region to run it in.
[600ms]
[serious] That is placement, and placement alone. Choosing a zone does not create a second copy of anything.

## Step 3 · Prepare VMs across zones

[determined] So Contoso builds the second one deliberately.
[600ms]
[confident] A machine and its disks in one zone, another machine with its own disks in a second zone, and the application installed and ready on both.
[600ms]
[reassuring] Disks are zonal too, which is why each instance gets its own rather than sharing.

## Step 4 · Configure resilient routing

[curious] Two prepared machines still need traffic to find them.
[800ms]
[confident] A Standard Load Balancer with a zone-redundant frontend survives the loss of any one zone, and keeps sending new connections to backends that pass their health probe.
[600ms]
[reassuring] The frontend is the part that has to be zone-redundant, or you have simply moved the single point of failure.

## Step 5 · Do not forget the data

[serious] This is the step people skip.
[600ms]
[calm] The shop's data lives on ordinary managed disks, and those disks do not replicate the application's state from one zone to the other.
[600ms]
[confident] Whatever holds the orders, a database or shared storage, needs its own resilience decision, made separately and on purpose.

## Step 6 · A zone goes unavailable

[curious] Now take the zone away and follow what happens.
[600ms]
[calm] Probes detect the loss, the frontend stops sending work to that zone, and new connections land on the healthy one.
[600ms]
[serious] That only holds if there is spare capacity to absorb the traffic, the data dependency is still healthy, and the probes were configured properly.

## Step 7 · Zonal VMs - All in One

[reflective] Four things carry this design, and they only work together.
[600ms]
[confident] Separate placement, prepared application instances, zone-redundant routing, and a data plan.
[600ms]
[proud] Get all four right and a lost zone becomes a quiet event for Contoso, instead of a closed shop.
