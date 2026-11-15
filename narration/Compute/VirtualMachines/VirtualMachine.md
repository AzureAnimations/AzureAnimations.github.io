# Narrator Script - Build Your First VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The shop needs OS control

[curious] Contoso Retail wants to run its online shop on its own terms.
[600ms]
[confident] A virtual machine gives the team a whole operating system to install, tune and patch exactly the way the application expects.
[600ms]
[serious] That control comes with a deal: Azure looks after the physical hosts, and everything inside the guest is yours to manage.

## Step 2 · Start with an image

[calm] Every machine starts from an image.
[600ms]
[confident] The image supplies the operating system and the first layer of software, and it lands on the OS disk when the machine is created.
[600ms]
[reassuring] We picked Linux for the shop, and Windows would have been an equally ordinary choice here.

## Step 3 · Choose a size

[calm] Next comes the size, and the size is a completely separate decision from the image.
[600ms]
[confident] It sets how much processor and memory the machine gets, so it has to match what the shop actually needs to serve.
[600ms]
[serious] Pick it from measurements, from what the region offers, and from the budget. Not from a hunch.

## Step 4 · Give data a durable home

[calm] Now the storage, and the three disks here do genuinely different jobs.
[600ms]
[confident] The OS disk boots the machine, data disks keep the catalogue and the orders, and both are managed disks that survive a restart.
[600ms]
[serious] The temporary disk is scratch space. When it exists at all, treat it as something you can lose without noticing.

## Step 5 · Connect the private network

[calm] The machine still needs to be reachable.
[600ms]
[confident] A network interface gives it a private address inside a subnet of the virtual network, which is where the shop talks to the rest of Contoso.
[600ms]
[reassuring] No public address is needed for this design, and the network security rules apply either way.

## Step 6 · Connect, then authenticate

[curious] So how does an administrator actually get in?
[800ms]
[confident] Azure Bastion sits in its own subnet and opens a session straight from the portal, so the machine never needs an address on the internet.
[600ms]
[serious] Bastion gets you to the door. The SSH key proves who you are. Reaching a machine and being allowed in are two different things.

## Step 7 · Stopped is not deallocated

[serious] Here is the one that shows up on the invoice.
[600ms]
[confident] Shutting down from inside the guest leaves the machine stopped but still allocated on a host, and compute is still billed.
[600ms]
[reassuring] Deallocating it from Azure releases that hardware and the compute charge stops, though the disks and other resources you kept are still there, and still billed.

## Step 8 · Your VM - All in One

[reflective] Step back, and one virtual machine is really five decisions that hold together.
[600ms]
[confident] An image, a size, disks, a network path, and a way to authenticate.
[600ms]
[determined] It runs the shop, but it is still one machine on one host. Availability is the next thing to design.
