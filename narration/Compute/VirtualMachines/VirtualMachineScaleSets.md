# Narrator Script - Virtual Machine Scale Sets

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Demand changes

[curious] Contoso's traffic is not a flat line. Quiet mornings, a busy sale, a slow week after it.
[800ms]
[serious] Sizing one big machine for the worst hour means paying for that hour all month, and still guessing wrong.
[600ms]
[confident] What the shop needs is capacity that follows demand instead of predicting it.

## Step 2 · Manage a group of VMs

[calm] A scale set changes the unit you work with.
[600ms]
[confident] Instead of building machines one at a time, you describe the machine once and the scale set creates and manages instances from that configuration.
[600ms]
[serious] It manages the instances. The application on them, and the load balancer in front of them, are still separate pieces you configure.

## Step 3 · Choose an orchestration mode

[curious] The first real decision is the orchestration mode.
[800ms]
[confident] Flexible instances are ordinary virtual machine resources you can inspect and manage individually. Uniform instances are scale-set specific and managed strictly as a group.
[600ms]
[serious] You choose this at creation and cannot change it afterwards, so it matters. We follow Flexible, which is the recommended mode.

## Step 4 · Configure a bounded scaling policy

[calm] Now give the set a rule to follow.
[600ms]
[confident] This example holds between two and four machines, and the policy adds or removes instances as demand moves.
[600ms]
[serious] None of it is instant. Evaluating the rule, waiting out the cooldown, provisioning a machine and passing readiness all take real minutes, so scale ahead of the rush.

## Step 5 · Combine scaling with zone placement

[calm] Capacity and placement are different questions, and a scale set can answer both.
[600ms]
[confident] Configure the set to span availability zones, and the instances are spread across them as they are created.
[600ms]
[serious] It only happens if you ask for it. A scale set that was not made zonal gives you no zone spread at all.

## Step 6 · Separate routing health from repair

[curious] Two health mechanisms sit here, and they do different jobs.
[600ms]
[confident] Load balancer probes decide where new traffic goes. Automatic instance repairs decide when a sick machine gets replaced.
[600ms]
[serious] With Flexible, repairs need the Application Health extension and a repair policy that is switched on, with a grace period so a slow start is not mistaken for a failure. Switch between the states to watch both react.

## Step 7 · Scale in with the application in mind

[serious] Scaling in is the half people forget.
[600ms]
[calm] When the rule removes an instance, whatever that machine was holding goes with it, including sessions and anything written only to its local disk.
[600ms]
[determined] Design for it: drain the work first, handle the termination signal, and keep durable state off the machine entirely.

## Step 8 · VM Scale Sets - All in One

[reflective] Six decisions, one operating design.
[600ms]
[confident] The VM configuration, the orchestration mode, the scaling policy, zone placement, health and repair, and where the data lives.
[600ms]
[proud] Together they give Contoso a shop that grows for the sale and shrinks afterwards, without anybody watching a graph at midnight.
