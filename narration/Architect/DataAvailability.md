# Narrator Script — Architect · Keep data available: HA and DR for databases and storage

**Source animation:** [DataAvailability.html](../../journeys/Architect/DataAvailability.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/automated-backups-overview>
- <https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview>
- <https://learn.microsoft.com/azure/cosmos-db/high-availability>
- <https://learn.microsoft.com/azure/postgresql/backup-restore/concepts-business-continuity>
- <https://learn.microsoft.com/azure/storage/common/storage-redundancy>

---

## Step 1 · Zone redundancy: survive a zone failure

[calm] The order database must stay available when one availability zone fails.
[600ms]
[curious] Zone redundancy spreads the database protection across zones within the region, so the surviving placement can keep serving the application.
[600ms]
[reassuring] That addresses a zone failure; it does not by itself create a second region for a regional disaster.

## Step 2 · Across regions: geo-replication or failover group?

[calm] A regional outage requires a database copy in another region, not only another zone in the same region.
[600ms]
[curious] Compare a geo-replicated database with a failover group that coordinates the databases and provides stable listener endpoints.
[600ms]
[reassuring] Choose the failover unit and application connection approach deliberately, and account for changes that have not yet replicated.

## Step 3 · Backups: pick the restore for the problem

[calm] The database backup paths answer different recovery questions, even when availability replicas are already in place.
[600ms]
[curious] Point-in-time restore goes back before a mistake, long-term retention keeps older recovery history and geo-restore uses the remote backup copy.
[600ms]
[reassuring] Choose the restore that matches the incident, rather than confusing a backup with an immediately available standby.

## Step 4 · SQL Server on VMs: availability groups

[calm] SQL Server on virtual machines gives Contoso control, but it also makes the availability design Contoso's responsibility.
[600ms]
[curious] Availability groups use database replicas, while a failover cluster instance protects at the instance level.
[600ms]
[reassuring] Choose the databases that must fail over together, then plan how to operate, monitor and maintain their replicas.

## Step 5 · Azure Cosmos DB: replicate and choose consistency

[calm] Azure Cosmos DB can place copies across regions, but the write configuration changes the design.
[600ms]
[curious] A single write region and multiple write regions have different failover and conflict considerations.
[600ms]
[reassuring] Choose the consistency requirement alongside the region topology, because availability, data-loss expectations and application behavior must agree.

## Step 6 · PostgreSQL flexible server: layers of recovery

[calm] PostgreSQL recovery uses several layers rather than one universal switch.
[600ms]
[curious] A zone-redundant standby addresses local availability, while a cross-region read replica and backups serve different recovery situations.
[600ms]
[reassuring] Compare the failure boundary and recovery expectations of each layer before claiming that the whole database design meets the objective.

## Step 7 · Storage redundancy: one decision row

[calm] Storage redundancy is another failure-boundary decision: a datacenter, a zone or a region.
[600ms]
[curious] Follow the copies from LRS and ZRS to the additional regional protection in GRS and GZRS.
[600ms]
[reassuring] A remote copy and a readable remote endpoint are not the same promise, so consider the read-access options separately.

## Step 8 · All in one: pick by RTO and RPO

[calm] The summary starts with RTO and RPO, then maps each data service to the appropriate protection layer.
[600ms]
[curious] Tighter targets usually need more ready-to-use capacity, while backup-based recovery follows a different path.
[600ms]
[reassuring] Contoso should justify the availability design against its targets before moving on to choose the application's compute platform.

