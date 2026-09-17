# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · Demand changes

[calm] Demand changes.
[600ms]
Contoso needs capacity that can grow with demand, without assuming one large VM is always enough.
[600ms]
[serious] Illustrative policy; evaluation, cooldown, provisioning and readiness take time.

## Step 2 · Manage a group of VMs

[calm] Manage a group of VMs.
[600ms]
A scale set manages VM instances. Application configuration and the load balancer are separate concerns.
[600ms]
[serious] Application replicas and load balancing are configured separately.

## Step 3 · Choose an orchestration mode

[calm] Choose an orchestration mode.
[600ms]
Flexible uses standard VM resources; Uniform uses scale-set-specific VM resources. We continue with Flexible.
[600ms]
[serious] Choose orchestration mode at creation; it cannot be changed later. This journey follows Flexible.

## Step 4 · Configure a bounded scaling policy

[calm] Configure a bounded scaling policy.
[600ms]
This example targets 2 to 4 VMs after policy evaluation. New instances serve traffic only when ready.
[600ms]
[serious] Illustrative policy; evaluation, cooldown, provisioning and readiness take time.

## Step 5 · Combine scaling with zone placement

[calm] Combine scaling with zone placement.
[600ms]
A scale set can span availability zones when configured that way. Capacity and placement are different decisions.
[600ms]
[serious] Zone spread is configured; a nonzonal scale set does not guarantee it.

## Step 6 · Separate routing health from repair

[calm] Separate routing health from repair.
[600ms]
Load-balancer probes guide traffic. Flexible automatic repairs use the Application Health extension and a repair policy.
[600ms]
[serious] Flexible repairs require the Application Health extension and an enabled repair policy with a grace period.

## Step 7 · Scale in with the application in mind

[calm] Scale in with the application in mind.
[600ms]
Before removing excess capacity, design for draining, termination, and durable state outside the VM.
[600ms]
[serious] Design for termination, drain work, and keep durable state outside disposable VMs.

## Step 8 · VM Scale Sets - All in One

[calm] VM Scale Sets - All in One.
[600ms]
VM configuration, orchestration, scaling, zone placement, health, and data form one operating design.
[600ms]
[serious] Application, data and failover must be prepared.
