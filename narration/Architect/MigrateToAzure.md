# Narrator Script — Architect · Design a migration to Azure

**Source animation:** [MigrateToAzure.html](../../journeys/Architect/MigrateToAzure.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy>
- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/concepts-vmware-agentless-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/>

---

## Step 1 · Plan the move: 120 servers, one method

[calm] Contoso has one hundred and twenty servers, but it first needs a migration method rather than a moving tool.
[600ms]
[curious] The Cloud Adoption Framework sequence runs from planning and preparation through execution, optimization and retiring the source.
[600ms]
[reassuring] Prepare the landing zone and adoption plan before treating the first copied server as a successful migration.

## Step 2 · Discover and assess with Azure Migrate

[calm] Azure Migrate gathers configuration and performance evidence through discovery and assessment.
[600ms]
[curious] Use that evidence to understand readiness, suitable sizing, cost and the dependencies that affect the move.
[600ms]
[reassuring] Contoso needs a defensible picture of the current estate before deciding what to migrate, how to migrate it and in which order.

## Step 3 · Dependencies decide the move groups

[calm] The dependency map shows why a server list is not enough to plan the migration waves.
[600ms]
[curious] Closely connected components should move together, while looser dependencies can allow separate waves.
[600ms]
[reassuring] Begin with simpler, lower-risk workloads so Contoso can practise the process before moving the critical order platform.

## Step 4 · Pick a strategy for each workload

[calm] Choose a migration strategy for each workload, using the lightest change that still achieves its goal.
[600ms]
[curious] Some workloads can be rehosted or replatformed; others may justify code changes, a larger redesign or not moving at all.
[600ms]
[reassuring] The destination and required change must agree, rather than calling every move to a managed service a simple lift and shift.

## Step 5 · Migrate servers: replicate, test, cut over

[calm] Server migration starts with replication, then keeps the target synchronized while the source continues running.
[600ms]
[curious] A test migration validates the copied workload in the test network before the real cutover.
[600ms]
[reassuring] Retire the original server only after Contoso has checked the migrated service and its dependencies.

## Step 6 · Migrate the order database

[calm] The order database's feature requirements narrow the destination before the migration mode is chosen.
[600ms]
[curious] Compare SQL Database, SQL Managed Instance and SQL Server on a virtual machine, then consider the downtime the business accepts.
[600ms]
[reassuring] Check which migration modes Database Migration Service supports for the target; the tool does not remove the need to choose the right destination.

## Step 7 · Migrate files and images

[calm] Moving files and images depends on their volume, the network and whether local access must continue.
[600ms]
[curious] Data Box, Storage Mover, AzCopy and Azure File Sync serve different parts of that decision.
[600ms]
[reassuring] An offline seed and an online synchronization path can work together, so the migration does not have to be entirely offline or entirely online.

## Step 8 · Cut over with a way back

[calm] The cutover plan must say how Contoso will validate success and when it will go back.
[600ms]
[curious] Match the migration method to the downtime tolerance, then make the go or no-go checkpoints explicit.
[600ms]
[reassuring] Optimization and source decommissioning come after validation, not before the team knows the new platform meets the agreed requirements.

## Step 9 · All in one: the migration route

[calm] The complete route begins with assessment and dependencies, not with copying servers.
[600ms]
[curious] Contoso chooses a strategy and tool for each workload, rehearses the move and cuts over with a recovery path.
[600ms]
[reassuring] The case study now brings these choices together with identity, data, continuity and infrastructure in one design.

