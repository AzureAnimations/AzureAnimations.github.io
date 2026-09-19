# Narrator Script - Back It Up, Prove the Restore

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineBackup.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Someone deletes the orders folder

[serious] It is an ordinary Tuesday, and somebody deletes the orders folder.
[600ms]
[calm] Storage redundancy did exactly what it promised. It copied the deletion to every replica, instantly and perfectly.
[600ms]
[confident] Redundancy protects you from hardware failing. Only a backup protects you from a person, and that is a separate decision you have to make.

## Step 2 · Create the vault

[calm] So Contoso starts with somewhere safe to keep recovery points.
[600ms]
[confident] A Recovery Services vault lives outside the virtual machine, holding the recovery points and the rules that govern them.
[600ms]
[reassuring] Because it sits apart from the machine, deleting the VM does not take its recovery points with it.

## Step 3 · Write the policy

[curious] How often, and for how long?
[800ms]
[confident] The backup policy answers both: the schedule that decides when a run happens, and the retention that decides how long each recovery point survives.
[600ms]
[serious] Retention is where cost and comfort meet. Keep what the business would genuinely need to recover, and be able to say why.

## Step 4 · One run, two phases

[calm] A backup run is not one single moment.
[600ms]
[confident] Azure takes a snapshot first, which is quick, and then transfers the data into the vault, which takes longer.
[600ms]
[reassuring] That is why a run can look finished inside the machine while the vault is still catching up. Both phases matter, and they end at different times.

## Step 5 · Restore only what you need

[curious] Something has gone wrong. How much do you actually need back? Step through the options and see.
[600ms]
[confident] You can restore the whole machine, swap a single disk back into it, or mount a recovery point and pull out one file.
[600ms]
[determined] Match the restore to the damage. A deleted folder does not deserve a whole rebuild of the shop.

## Step 6 · Deleting a backup is a separate risk

[serious] Now think about the backup itself being attacked or deleted.
[600ms]
[confident] Soft delete holds on to deleted backup data for a retention window, so an accidental or malicious delete can still be undone.
[600ms]
[calm] It guards what you already have. It can do nothing for a machine that was never protected in the first place.

## Step 7 · VM Backup - All in One

[reflective] Four parts turn a disaster into a bad afternoon.
[600ms]
[confident] A vault outside the machine, a policy that matches the business, recovery points you can prove exist, and a restore somebody has actually rehearsed.
[600ms]
[proud] The rehearsal is the part that counts. An untested backup is a hope, not a plan.
