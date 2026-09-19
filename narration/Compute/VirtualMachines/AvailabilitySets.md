# Narrator Script - Availability Sets

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · One host, one point of failure

[serious] The shop works, and it runs on exactly one virtual machine.
[600ms]
[curious] So what happens when the host underneath it fails, or the platform needs to take that host down for maintenance?
[800ms]
[calm] The shop goes with it. One machine is one point of failure, however carefully it was built.

## Step 2 · Prepare another application instance

[confident] The first move is a second machine running the same application.
[600ms]
[serious] Azure will not copy the shop for you. The team deploys the second VM, installs the application, and puts a load balancer in front of the pair.
[600ms]
[reassuring] Two prepared instances are what every idea in this lesson is built on.

## Step 3 · Separate fault domains

[calm] Now we tell Azure to keep those two machines apart.
[600ms]
[confident] An availability set spreads them across fault domains, and a fault domain is a group of hardware that shares a power source and a network switch.
[600ms]
[reassuring] When a rack fails it takes one fault domain with it, and the other instance keeps serving.

## Step 4 · Separate update domains

[calm] The same set also arranges the machines into update domains.
[600ms]
[confident] Planned platform maintenance works through those groups one at a time, so a reboot never lands on every instance at once.
[600ms]
[serious] Neither of these is an availability zone. Fault and update domains sit inside a single datacenter boundary.

## Step 5 · A hardware failure unfolds

[curious] Step the scenario through and watch the order of events.
[600ms]
[serious] First the instance goes down, and only then do the health probes notice and take it out of rotation.
[600ms]
[calm] New connections go to the healthy machine. The ones already in flight are simply gone, so the application needs to expect a retry.

## Step 6 · Know the boundary

[reflective] It is worth being honest about what this does not cover.
[600ms]
[serious] An availability set protects against hardware faults and planned maintenance inside one datacenter boundary. It does nothing for a whole zone going dark, and it will not fix a broken application.
[600ms]
[confident] Microsoft now recommends a Flexible scale set for wider availability options. Availability sets still work and are not deprecated.

## Step 7 · Availability Sets - All in One

[reflective] Put the pieces together.
[600ms]
[confident] Fault domains separate the hardware risk, update domains separate the planned maintenance, and the load balancer sends traffic to whatever is healthy.
[600ms]
[determined] The application, its replicas and its data are still your side of the bargain. Zones come next.
