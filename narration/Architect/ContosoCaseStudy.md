# Narrator Script — Architect · Case study: design the Contoso platform

**Source animation:** [ContosoCaseStudy.html](../../journeys/Architect/ContosoCaseStudy.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-305>
- <https://learn.microsoft.com/azure/well-architected/what-is-well-architected-framework>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/app-service/overview-patch-os-runtime>
- <https://learn.microsoft.com/azure/networking/design-guide/app-delivery>
- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways>
- <https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/well-architected/>

---

## Step 1 · Read the brief: requirements and constraints

[calm] Read Contoso's brief before looking for a favorite Azure service.
[600ms]
[curious] The underlined requirements separate what the design must do from the constraints on how it can be delivered.
[600ms]
[reassuring] Use those words to eliminate unsuitable options first, then compare the remaining designs against the same evidence.

## Step 2 · Identity and governance: pick the sign-in method

[calm] Contoso's staff already use on-premises accounts, so the sign-in choice begins with that requirement.
[600ms]
[curious] Compare where each method validates the user, then choose the simplest method that meets the stated need.
[600ms]
[reassuring] The governance guardrails sit around that authentication decision; a familiar product name alone is not a justification.

## Step 3 · Data: match the SQL target to the need

[calm] The database requirement calls for instance-level SQL Server capabilities, not just a place to store relational tables.
[600ms]
[curious] That narrows the options toward SQL Managed Instance without adding the operating-system responsibility of a virtual machine.
[600ms]
[reassuring] Point to the requirement that selected it, and explain why the other choices miss either the capabilities or the operating-effort constraint.

## Step 4 · Business continuity: meet the RTO and RPO

[calm] Contoso must recover from a regional failure within one hour and lose no more than five minutes of order data.
[600ms]
[curious] Check each option against both recovery targets and the regional failure described in the brief.
[600ms]
[reassuring] Zone redundancy addresses a different boundary, while a failover group provides the cross-region recovery approach considered in this design.

## Step 5 · Compute: the least to operate that fits

[calm] A small operations team and a launch without a rewrite shape the compute decision.
[600ms]
[curious] For the suitable web application, App Service removes operating-system and runtime maintenance from Contoso's task list.
[600ms]
[reassuring] The legacy batch workload can take a different initial route, showing why one solution does not need one compute service everywhere.

## Step 6 · Network: private link, global front door

[calm] The network must satisfy two requirements: a private datacenter connection and a global entry point for customers.
[600ms]
[curious] ExpressRoute addresses the private connection, while Front Door provides the global application-routing role.
[600ms]
[reassuring] A regional gateway and an internet-based VPN solve different problems, so check each choice against the exact wording of the brief.

## Step 7 · Migration: the lightest route per workload

[calm] The migration plan assigns a practical route to each part of the platform instead of rewriting everything before launch.
[600ms]
[curious] Azure Migrate handles the servers, Database Migration Service moves the database and the data-transfer path handles the files.
[600ms]
[reassuring] Keep the dependency order, validation and cutover requirements visible while selecting each tool.

## Step 8 · All in one: the Contoso platform

[calm] The assembled Contoso platform answers the four design domains with one connected set of choices.
[600ms]
[curious] Review it through Reliability, Security, Cost Optimization, Operational Excellence and Performance Efficiency.
[600ms]
[reassuring] A defensible design balances those pillars against the brief, explaining the trade-offs instead of claiming that every dimension is maximized.

