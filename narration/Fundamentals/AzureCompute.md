# Narrator Script - Azure Compute

**Source animation:** journeys/Fundamentals/AzureCompute.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/virtual-machines/availability-set-overview -->

## Step 1 · How much do you want to manage?

[calm] Contoso needs to run a website, process order events, and give employees access to work applications. Compute means the processing capacity that runs this work.
[600ms]
[confident] These jobs don't all need the same service. The team chooses according to what each job needs and how much it wants to manage.

## Step 2 · Take the whole machine

[calm] The inventory backend needs control of its operating system, so Contoso chooses a virtual machine. Processing and memory run the work; disks hold the operating system and data; a network interface provides connectivity.
[600ms]
[confident] Microsoft runs the physical hardware. Contoso still configures and maintains this virtual machine and its guest operating system.

## Step 3 · Prepare the VM workload

[calm] One virtual machine can fail. Availability sets distribute machines across groups that separate certain hardware failures and maintenance updates. Scale sets help manage and scale a fleet of machines.
[600ms]
[confident] Neither option designs the whole shop's recovery for Contoso. The application, its data, and traffic handling must also be prepared.

## Step 4 · Package the app instead

[calm] A container packages application code with the dependencies it needs. Contoso can move that package from test to a compatible production environment with fewer differences in the software setup.
[600ms]
[confident] Packaging isn't the same as hosting. The container still needs somewhere to run, plus configuration, connectivity, and appropriate security.

## Step 5 · Let the platform run it

[calm] For the customer-facing website, Contoso chooses App Service. It supplies managed hosting for web applications and interfaces that other software can call.
[600ms]
[confident] The team deploys its code and configures the app instead of maintaining the underlying operating system. The inventory backend remains on its virtual machine because its needs are different.

## Step 6 · React to an order

[calm] An order arriving is an event: something happened that should trigger a piece of work. Azure Functions can run Contoso's code in response on managed infrastructure.
[600ms]
[confident] Serverless doesn't mean there are no servers. It means the service handles that infrastructure; scaling behavior and billing still depend on the hosting plan.

## Step 7 · Deliver desktops, not servers

[calm] Warehouse employees need access to their work desktops and applications. Azure Virtual Desktop delivers those experiences remotely, rather than making every employee use a machine beside the cloud servers.
[600ms]
[confident] This solves an employee workspace need. It isn't the service Contoso uses to host the public shopping website.

## Step 8 · Compute Options - All in One

[calm] Match the service to the work: a virtual machine for operating-system control, a container for packaging, App Service for the website, Functions for events, and Virtual Desktop for staff.
[600ms]
[confident] Contoso has chosen where its code runs. Next, the inventory backend needs an approved connection to the stock database.