# Narrator Script — Virtual Machines · Site Recovery and Backup Reports

**Source animation:** [SiteRecoveryAndBackupReports.html](../../../journeys/Compute/VirtualMachines/SiteRecoveryAndBackupReports.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-architecture>
- <https://learn.microsoft.com/azure/site-recovery/azure-to-azure-tutorial-failover-failback>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>

---

## Step 1 · A region goes down

[calm] Contoso's shop VM runs in a single Azure region. Now imagine that whole region has an outage.
[600ms]
[concerned] Where does the VM come back, and how fast?
[600ms]
[confident] We'll follow Azure-to-Azure disaster recovery with Site Recovery, then Azure Backup reports and alerts. Everything here is fictional, and it lines up with A Z one oh four and A Z three oh five.

## Step 2 · Set up the recovery

[calm] It starts in a Recovery Services vault. You choose the source and target regions, the target resource group and network, and a replication policy.
[600ms]
[curious] Site Recovery can create the target resource group and virtual network for you, or you can pick your own.
[600ms]
[confident] Create the vault in any region except the source region.

## Step 3 · Replicate every write

[calm] Once replication is on, a Mobility service extension installs on the VM automatically.
[600ms]
[curious] It sends each disk write to a cache storage account, and then on to replica managed disks in the target region. The cache keeps replication from slowing the production VM.
[600ms]
[reassuring] Site Recovery only needs outbound connectivity from the VM, never inbound.

## Step 4 · Recovery points

[calm] The snapshots become recovery points. Crash-consistent points are the default.
[600ms]
[curious] A crash-consistent one holds what was on disk, like pulling the power cord. An app-consistent one also captures memory and transactions in progress, and it needs a frequency in the replication policy.
[600ms]
[confident] Retention is set in the same policy.

## Step 5 · Recovery plans

[calm] A recovery plan sorts your VMs into groups. Groups start in order, and the VMs inside a group start together.
[600ms]
[curious] Between groups you can run scripts, which are Azure Automation runbooks, or add a manual action that pauses the plan until someone confirms.
[600ms]
[confident] One plan can run a test failover, a failover and a failback.

## Step 6 · Test failover: the safe drill

[calm] A test failover is the safe drill. It builds a copy of the VM in an isolated test network.
[600ms]
[reassuring] Production keeps running and replication keeps going, so nothing in production is touched. Use a non-production network for the drill.
[600ms]
[confident] When you're satisfied, choose Cleanup test failover to delete the test VM.

## Step 7 · Failover and commit

[serious] In a real outage, failover creates the VM in the target resource group and network, from the recovery point you chose.
[600ms]
[curious] Until you commit, you can still choose Change recovery point.
[600ms]
[confident] Commit finishes the job. It deletes all the recovery points for that VM in Site Recovery, so you can no longer change your mind.

## Step 8 · Reprotect and fail back

[calm] After the commit, you reprotect the VM so it replicates back toward the original region.
[600ms]
[curious] When the primary region is healthy again, you fail back. The source VM must be shut down so changes can sync to the original disks.
[600ms]
[confident] Then you reprotect again. For managed disks, Site Recovery cleans up the VM in the secondary region.

## Step 9 · Run a failover drill

[curious] Now try it yourself. Choose a failover type and watch which stages change.
[600ms]
[confident] Pay attention to what the choice means for data loss, your RPO, and for time to recover, your RTO.
[600ms]
[reassuring] In the portal, an Azure VM offers Test failover and Failover. Shutting the machine down first gives you the planned flavour.

## Step 10 · Backup or Site Recovery?

[curious] People often ask whether they need Backup or Site Recovery. The two answer different kinds of failure.
[600ms]
[confident] Backup restores a copy from the past. Site Recovery runs the VM somewhere else, so the workload keeps going through an outage.
[600ms]
[reassuring] Both belong in a business continuity and disaster recovery strategy, so most designs use both.

## Step 11 · Where reports come from

[calm] Backup reports are built on Azure Monitor logs. You send your vaults' diagnostics to a Log Analytics workspace, and workbooks turn that data into reports.
[600ms]
[curious] The workspace can sit in a different subscription or location, and a built-in Azure Policy can set diagnostic settings on many vaults at once.
[600ms]
[serious] The workspace keeps data for a limited time by default, so raise retention if you want long-term trends.

## Step 12 · Reading the report

[calm] The report covers jobs, instances, usage, policies, policy adherence and optimization. These numbers are fictional.
[600ms]
[curious] Look first for what's red or missing, then drill into it.
[600ms]
[confident] There are ready-made reports too, like Backup Job History and Backup Configuration Status. Site Recovery has Job History and Replication History reports.

## Step 13 · Backup alerts

[calm] Azure Backup raises built-in Azure Monitor alerts for critical events, and they fire by default.
[600ms]
[serious] They include backup failures, restore failures, deletion of backup data and disabling of soft delete.
[600ms]
[confident] You see them in Resiliency. What you decide is who hears about them, using an alert processing rule and an action group that route to email, a webhook, a logic app or a runbook.

## Step 14 · All in one

[calm] Here's the full path: replicate, plan, test, fail over and reprotect. Then report and alert, so you know the backups are healthy.
[600ms]
[confident] A Z one oh four covers configuring Site Recovery, failing over to a secondary region, and interpreting backup reports and alerts. A Z three oh five covers designing backup and disaster recovery.
[600ms]
[proud] Skills measured change, so check yourself against the current study guides.
