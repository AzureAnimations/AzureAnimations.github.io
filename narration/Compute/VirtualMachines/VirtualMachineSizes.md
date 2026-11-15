# Narrator Script - Right-Size the Machine

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineSizes.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The invoice arrives

[serious] The sale went well. Then the bill for the month arrived.
[600ms]
[curious] Contoso paid full price for a machine whose processor averaged nine percent.
[800ms]
[confident] Right-sizing starts here, with a measurement of what the workload actually used. Not with a guess about what it might need.

## Step 2 · Pick the family first

[calm] Before any size, choose the family.
[600ms]
[confident] Series group hardware around a purpose: burstable machines for quiet workloads, general purpose for balance, memory optimized for large data sets, compute optimized for heavy processing.
[600ms]
[reassuring] Get the family right and the size becomes a small adjustment instead of a gamble.

## Step 3 · The size sets the ceiling

[curious] A size is more than processor and memory. Try the slider and watch what else moves.
[600ms]
[confident] It also caps how many data disks you can attach, how many network interfaces the machine gets, and how much network bandwidth it can push.
[600ms]
[serious] Those ceilings are the ones that surprise people. The shop can hit a disk or bandwidth limit long before the processor looks busy.

## Step 4 · Resizing restarts the machine

[calm] Sizes are not permanent, and changing one is not free.
[600ms]
[serious] Azure has to move the machine to hardware that offers the new size, so the VM restarts and the shop is briefly down.
[600ms]
[confident] If the size is not available on the current host cluster you deallocate first, which releases any dynamic addresses. Plan the window, and tell people before the sale, not during it.

## Step 5 · Quota limits what you can deploy

[curious] One more thing stands between a plan and a running machine.
[800ms]
[confident] Quota is granted per region and per family, and it is a completely separate thing from your budget.
[600ms]
[serious] You can have money approved and still be refused the deployment. Check the headroom and request an increase well before launch day.

## Step 6 · Right-Sizing - All in One

[reflective] Four habits, and they work in this order.
[600ms]
[confident] Measure the real workload, match the family to its shape, respect the ceilings that come with the size, and schedule the restart a resize will cost you.
[600ms]
[proud] Do that and Contoso pays for the shop it runs, not the shop it once imagined.
