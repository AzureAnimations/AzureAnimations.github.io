# Narrator Script — Architect · Design for recovery: RTO, RPO and the right tool

**Source animation:** [RecoveryObjectives.html](../../journeys/Architect/RecoveryObjectives.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/well-architected/reliability/metrics>
- <https://learn.microsoft.com/azure/reliability/concept-service-level-agreements>
- <https://learn.microsoft.com/azure/backup/backup-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-backup-faq>
- <https://learn.microsoft.com/azure/backup/backup-azure-recovery-services-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-immutable-vault-concept>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>
- <https://learn.microsoft.com/azure/backup/backup-architecture>

---

## Step 1 · Recovery objectives: RTO, RPO and SLA

[calm] The recovery timeline asks two different business questions, not one general question about availability.
[600ms]
[curious] RPO describes how much recent data Contoso can afford to lose, while RTO describes how long recovery may take.
[600ms]
[reassuring] An SLA is a service commitment, not a replacement for those workload-specific recovery targets.

## Step 2 · Tier the workloads by what they cost to lose

[calm] Contoso's workloads do not all cause the same harm when they stop or lose recent data.
[600ms]
[curious] The four tiers assign different recovery targets according to business impact, rather than buying the strictest option for everything.
[600ms]
[reassuring] Treat the figures here as example requirements, and use each tier to guide the protection and recovery investment.

## Step 3 · Azure Backup: restore data from a point in time

[calm] Azure Backup keeps recovery points that Contoso can restore when data or a protected workload needs recovery.
[600ms]
[curious] Choose the vault and policy to match what is being protected, then consider the protections around the backup itself.
[600ms]
[reassuring] Keeping a recoverable history solves a different problem from simply maintaining another running copy.

## Step 4 · Azure Site Recovery: fail over the workload

[calm] Azure Site Recovery replicates the workload so Contoso can fail over after a disaster.
[600ms]
[curious] The recovery plan orders the application tiers and any required actions, instead of starting every component without coordination.
[600ms]
[reassuring] A test failover lets the team rehearse the recovery path without treating the first real outage as its first exercise.

## Step 5 · Backup or replication?

[calm] These two recovery paths are complementary: restore a recovery point, or fail over to a replica.
[600ms]
[curious] Backup addresses lost or damaged data, while replication helps bring a workload back after losing its operating location.
[600ms]
[reassuring] Choose according to the failure and recovery target; a second running copy does not replace a protected backup history.

## Step 6 · Choose where the second copy lives

[calm] The position of the second copy changes which failures the design can survive.
[600ms]
[curious] A local copy, a copy across zones and a copy in another region offer different protection boundaries.
[600ms]
[reassuring] Match the distance and restore option to Contoso's recovery objective, including whether the team must perform its own regional recovery drill.

## Step 7 · Protect on-premises servers too

[calm] Some Contoso servers will stay on-premises, so the recovery design must cross that boundary too.
[600ms]
[curious] The diagram separates agent-based backup, a backup server and workload replication into Azure.
[600ms]
[reassuring] Pick the route that matches the system being protected and whether the goal is restoring data or recovering the running workload.

## Step 8 · All in one: recover to the objective

[calm] Start at the business target, then follow the design through workload tiers, recovery tools and copy locations.
[600ms]
[curious] Contoso's answer is a recovery approach that fits each workload, not a single tool applied everywhere.
[600ms]
[reassuring] The next lesson adds the database and storage availability features that keep the data layer ready for failures.

