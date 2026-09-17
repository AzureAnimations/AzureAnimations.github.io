# Narrator Script - Build Your First VM

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · The shop needs OS control

[calm] The shop needs OS control.
[600ms]
Contoso chooses a virtual machine to install and manage its own application stack.
[600ms]
[serious] You manage the guest OS and application. Azure manages the underlying hosts.

## Step 2 · Start with an image

[calm] Start with an image.
[600ms]
The image supplies the operating system and the initial software on the OS disk.
[600ms]
[serious] Linux in this example; Windows is another image choice.

## Step 3 · Choose a size

[calm] Choose a size.
[600ms]
CPU and memory capacity must match the workload; size is separate from the OS image.
[600ms]
[serious] Choose size from workload measurements, regional availability, and budget.

## Step 4 · Give data a durable home

[calm] Give data a durable home.
[600ms]
Managed OS and data disks have different jobs. Temporary storage is not a durable copy.
[600ms]
[serious] Temporary storage, when provided, is not durable storage.

## Step 5 · Connect the private network

[calm] Connect the private network.
[600ms]
A NIC gives the VM a private IP in a subnet of a virtual network.
[600ms]
[serious] No public IP is required on this VM. Network security rules still apply.

## Step 6 · Connect, then authenticate

[calm] Connect, then authenticate.
[600ms]
Bastion provides a management path. An SSH key authenticates the administrator to Linux.
[600ms]
[serious] Bastion Basic in its own subnet; SSH key authenticates to Linux. Connectivity is not permission.

## Step 7 · Stopped is not deallocated

[calm] Stopped is not deallocated.
[600ms]
The power state changes compute billing. Disks and other provisioned resources remain.
[600ms]
[serious] Pay-as-you-go: compute and disks are billed.

## Step 8 · Your VM - All in One

[calm] Your VM - All in One.
[600ms]
Image, size, disks, network, and access form one VM deployment. Availability comes next.
[600ms]
[serious] A working VM is not a complete high-availability design.
