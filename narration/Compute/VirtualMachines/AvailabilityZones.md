# Narrator Script - VMs Across Availability Zones

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · What if a whole zone fails?

[calm] What if a whole zone fails?
[600ms]
Contoso needs separation beyond a shared datacenter infrastructure boundary.
[600ms]
[serious] A new zonal design, not an in-place availability-set migration.

## Step 2 · Place one VM in a zone

[calm] Place one VM in a zone.
[600ms]
A zonal VM runs in one selected zone. That choice does not create a second VM.
[600ms]
[serious] Selecting a zone does not create another application instance.

## Step 3 · Prepare VMs across zones

[calm] Prepare VMs across zones.
[600ms]
Deploy separate VM and disk pairs in separate zones, with the application ready on each.
[600ms]
[serious] Application replicas and load balancing are configured separately.

## Step 4 · Configure resilient routing

[calm] Configure resilient routing.
[600ms]
A Standard Load Balancer with a zone-redundant frontend sends new connections to healthy backends.
[600ms]
[serious] Zone-redundant frontend

## Step 5 · Do not forget the data

[calm] Do not forget the data.
[600ms]
VMs need a separately resilient data dependency. Their ordinary disks do not replicate the application state.
[600ms]
[serious] Resilience configured separately

## Step 6 · A zone goes unavailable

[calm] A zone goes unavailable.
[600ms]
With spare capacity and healthy data, new connections use the healthy zone after detection.
[600ms]
[serious] Assumes spare capacity, healthy data dependencies, and configured health probes.

## Step 7 · Zonal VMs - All in One

[calm] Zonal VMs - All in One.
[600ms]
Separate placement, prepared applications, resilient routing, and a data plan work together.
[600ms]
[serious] Application, data and failover must be prepared.
