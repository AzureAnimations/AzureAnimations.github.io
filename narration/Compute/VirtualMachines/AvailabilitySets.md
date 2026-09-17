# Narrator Script - Availability Sets

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · One host, one point of failure

[calm] One host, one point of failure.
[600ms]
The shop depends on a single VM. A host failure can interrupt the application.
[600ms]
[serious] A working VM is not a complete high-availability design.

## Step 2 · Prepare another application instance

[calm] Prepare another application instance.
[600ms]
Contoso deploys a second VM and configures the application and load balancing separately.
[600ms]
[serious] Application replicas and load balancing are configured separately.

## Step 3 · Separate fault domains

[calm] Separate fault domains.
[600ms]
An availability set distributes VMs across groups of shared hardware dependencies.
[600ms]
[serious] Fault and update domains are not availability zones.

## Step 4 · Separate update domains

[calm] Separate update domains.
[600ms]
Update domains group VMs for planned platform maintenance; they are not geographic zones.
[600ms]
[serious] Fault and update domains are not availability zones.

## Step 5 · A hardware failure unfolds

[calm] A hardware failure unfolds.
[600ms]
First the VM fails, then probes detect it. New connections use the remaining healthy instance.
[600ms]
[serious] Health detection takes time. Existing connections do not transfer intact.

## Step 6 · Know the boundary

[calm] Know the boundary.
[600ms]
Availability sets do not protect against a whole zone outage or fix the guest application.
[600ms]
[serious] Microsoft recommends VMSS Flexible for broader availability capabilities. Availability sets are not deprecated.

## Step 7 · Availability Sets - All in One

[calm] Availability Sets - All in One.
[600ms]
Fault domains separate hardware risk; update domains separate planned maintenance. The app still needs preparation.
[600ms]
[serious] Application replicas and load balancing are configured separately.
