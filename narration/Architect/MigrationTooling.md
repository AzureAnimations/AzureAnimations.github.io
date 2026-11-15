# Narrator Script — Architect · Migration tooling: Azure Migrate and DMS

**Source animation:** [MigrationTooling.html](../../journeys/Architect/MigrationTooling.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/migrate-appliance>
- <https://learn.microsoft.com/azure/migrate/concepts-assessment-overview>
- <https://learn.microsoft.com/azure/dms/dms-overview>

---

## Step 1 · 300 servers, 20 databases: now what?

[curious] Contoso is leaving its datacenter, with hundreds of servers and a couple of dozen databases to move. The numbers are made up for this lesson.
[600ms]
[serious] Before anything moves, the team needs the right tools, the right order, and a clear idea of what the appliance really does.
[600ms]
[confident] This is the A Z three oh five skill of evaluating on-premises servers, data, and applications for migration.

## Step 2 · Azure Migrate: one hub, four tool families

[calm] Azure Migrate is the single place to decide, plan, and run a move.
[600ms]
[confident] Servers, databases, web apps, and bulk data each get their own family of tools, and large offline data can travel on Azure Data Box.
[600ms]
[reflective] The work follows three phases. Decide, with discovery and a business case. Plan, with assessments. Then execute the migration.

## Step 3 · Create the Azure Migrate project

[calm] Everything that you discover lands in one project, inside a resource group.
[600ms]
[confident] You add the tools you need, then generate a project key that the appliance will use to register.
[600ms]
[reflective] One appliance registers with a single project, but one project can have several appliances. Your account needs the right roles first.

## Step 4 · The appliance: a lightweight server on your network

[curious] The appliance is a lightweight server that you deploy once, inside your own network.
[600ms]
[confident] Use a template or a PowerShell script, then register it with the project key from the portal.
[600ms]
[serious] For physical servers or servers in other clouds, you always use the script. And don't install other components, like the replication appliance, on the same server.

## Step 5 · What the appliance actually does

[curious] So what does it actually do? It reads configuration and performance metadata from your hypervisor, and sends it to the project.
[600ms]
[reassuring] It's agentless. Nothing gets installed on the virtual machines themselves.
[600ms]
[calm] The appliance does need internet access to Azure, directly or through a proxy, so allow its required addresses. Deployment runs a connectivity check for you.

## Step 6 · Two credentials, two levels of insight

[curious] The appliance uses two kinds of credentials, and each gives a different level of insight.
[600ms]
[confident] A read-only vCenter account is enough for inventory and performance data.
[600ms]
[impressed] Add server credentials as well, and the appliance can also see installed software and dependencies, plus SQL Server and web apps.

## Step 7 · Dependency analysis: move what talks together

[curious] Now the appliance watches the TCP connections between your servers.
[600ms]
[serious] Servers that depend on each other must move together. Otherwise the application breaks after cutover.
[600ms]
[confident] Agentless dependency analysis is the recommended option. It needs no agents, and it shows a map or a CSV export.

## Step 8 · Assessments turn data into decisions

[calm] Assessments turn all that data into decisions. You pick a group of servers and a target.
[600ms]
[confident] Azure Migrate checks readiness first, then right-sizes, then estimates the monthly cost. There are assessments for Azure VMs, Azure SQL, App Service, and Azure VMware Solution.
[600ms]
[serious] A server that fails readiness gets no sizing or cost. And an assessment is a snapshot in time.

## Step 9 · Right-size by use, then make the business case

[curious] There are two ways to size. As-on-premises sizing copies what you provisioned.
[600ms]
[confident] Performance-based sizing uses what the server really used, so idle capacity isn't carried over into Azure.
[600ms]
[proud] A business case then compares on-premises with Azure, covering total cost of ownership, cash flow year over year, and the shift from capital to operating expense.

## Step 10 · Migrate servers: replicate, test, cut over

[calm] To migrate servers, you replicate first, and the server stays live while an initial copy and then changes are sent.
[600ms]
[confident] Next you test in an isolated network. Then you cut over in a planned window, optionally shutting the source down to avoid data loss.
[600ms]
[reassuring] Finally you complete the migration and clean up. The replication method depends on whether you run VMware, Hyper-V, or physical servers.

## Step 11 · Databases: assess first, then Azure DMS

[curious] SQL Server has its own path. First assess readiness and pick a target.
[600ms]
[confident] Then migrate with Azure Database Migration Service, offline or online. Offline can target SQL Database, SQL Managed Instance, or SQL on an Azure VM. Online targets the last two.
[600ms]
[serious] The Azure SQL migration extension in Azure Data Studio is retired along with the tool, so use the SSMS or Azure Arc assessment instead.

## Step 12 · Web apps and bulk data have their own tools

[curious] Not everything is a server or a SQL database.
[600ms]
[confident] Azure Migrate can assess ASP.NET web apps on IIS and move them to App Service. The App Service Migration Assistant handles individual sites.
[600ms]
[impressed] For very large data, Azure Data Box ships a device to you. You copy your data, send it back, and Azure uploads it to your storage account.

## Step 13 · Pick your workload, see the path

[encouraging] Now try the tool picker. Choose what you're migrating.
[600ms]
[confident] The panel shows the matching Azure tool path and the first three actions to take.
[600ms]
[reflective] That's the A Z three oh five skill in practice: choose the tool by workload type, not by habit.

## Step 14 · The runbook: discover, assess, migrate, cut over

[calm] Here's Contoso's answer. Start with the appliance, to discover and assess.
[600ms]
[confident] Databases go through Azure DMS, and everything else follows its dependency group through replication, testing, and cutover.
[600ms]
[proud] That covers the A Z three oh five migration objectives, from evaluating on-premises estates to recommending the right path for servers, databases, and data.
