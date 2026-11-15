# Narrator Script - Disks That Hold the Data

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineDisks.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The catalogue outgrows its disk

[curious] The shop keeps growing, and so does its product photography.
[600ms]
[serious] Those images are filling the same disk the operating system arrived on, which is the disk least suited to holding them.
[600ms]
[calm] Redundancy will not save Contoso here either. It copies every write faithfully, including the ones you wish you could take back.

## Step 2 · Three disks, three jobs

[calm] A virtual machine can carry three kinds of disk, and mixing them up is the usual mistake.
[600ms]
[confident] The OS disk boots the machine. Data disks hold your files, and they are where the catalogue belongs. The temporary disk is scratch space.
[600ms]
[serious] Temporary means temporary. Maintenance, a redeploy or a stop can empty it, so keep only what you can afford to lose there.

## Step 3 · Match the disk to the work

[curious] Managed disks come in several types, and the difference is real money and real speed.
[600ms]
[confident] Standard hard drives through to Ultra Disk change the operations per second, the throughput, and the price.
[600ms]
[serious] Performance follows the type and the size of the disk together, and the VM size caps whatever the disk can offer.

## Step 4 · Grow it, never shrink it

[calm] Disks are not fixed once you pick them. Try the control and watch the capacity move.
[600ms]
[confident] A managed disk can expand when the numbers say so, which is why it pays to start modest.
[600ms]
[serious] It only goes one way. A disk cannot shrink, and after expanding it the file system inside the guest still has to be extended to use the new space.

## Step 5 · Freeze a point in time

[calm] Before any risky change, take a snapshot.
[600ms]
[confident] A snapshot copies the disk exactly as it is at that moment, which makes an upgrade or a schema change far less frightening.
[600ms]
[serious] It is a copy of one disk, taken when you remembered. It is not a schedule, and it is not a restore plan. That comes next lesson.

## Step 6 · Encrypt at the host

[calm] Data at rest should be encrypted, and there is a neat way to do it.
[600ms]
[confident] Encryption at host protects the OS disk, the data disks, the temporary disk and the host caches, end to end.
[600ms]
[reassuring] It runs on the host rather than inside the guest, so it costs the shop no processor time at all.

## Step 7 · VM Disks - All in One

[reflective] Five choices decide how fast and how safe Contoso's data is.
[600ms]
[confident] The role each disk plays, the type you pick, room to grow, a snapshot before risk, and encryption underneath all of it.
[600ms]
[determined] Storage that is right for the job is quiet. That is exactly what you want it to be.
