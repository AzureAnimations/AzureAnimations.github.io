# Narrator Script — Design Relational Data Storage

**Source animation:** [SqlRelationalDesign.html](../../journeys/Database/SqlRelationalDesign.html)
**Language:** en

Cue legend: `[confident]`, `[reflective]` and `[serious]` direct delivery; `[600ms]` marks a silent pause between sentences.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/azure/azure-sql/database/security-best-practice#data-protection -->

## Step 1 · Three ways to run SQL on Azure

[confident]
Contoso’s order system needs tables, rows and keys, but that doesn’t decide who runs the database.
[600ms]
SQL Database manages the database platform, Managed Instance retains instance capabilities, and SQL Server on Azure VMs exposes the operating system.
[600ms]
[reflective]
Those branches represent different boundaries of control and maintenance.

## Step 2 · Azure SQL Database

[confident]
With Azure SQL Database, Contoso chooses resources without managing an operating system or SQL Server instance.
[600ms]
The vCore and DTU choices describe how resources are purchased, while serverless adjusts compute for a single database.
[600ms]
[reflective]
An elastic pool lets the regional databases share resources within configured limits.

## Step 3 · Azure SQL Managed Instance

[confident]
Contoso’s existing application depends on more than individual tables, so the migration needs an instance perspective.
[600ms]
Managed Instance brings capabilities such as SQL Server Agent and linked servers into a managed SQL Server instance.
[600ms]
[reflective]
Orders, stock and returns share that instance’s compute and storage.

## Step 4 · SQL Server on Azure VMs

[confident]
Sometimes Contoso needs operating system access and SQL Server capabilities that call for a virtual machine.
[600ms]
The stacked layers show what that control includes: the database engine, the operating system and the chosen Azure VM.
[600ms]
[reflective]
Contoso also takes responsibility for SQL Server and operating system updates.

## Step 5 · Recommend a scaling approach

[confident]
Different growth problems need different answers, as these scenario arrows show.
[600ms]
Elastic pools share resources, vertical scaling changes compute size, and horizontal scaling with sharding separates data across databases.
[600ms]
[reflective]
When finance needs rows from several databases, elastic query addresses that reporting need rather than simply adding more compute.

## Step 6 · Recommend an availability tier

[confident]
The service tier changes the architecture underneath Contoso’s database, not just the size of its compute.
[600ms]
General Purpose separates compute from remote storage, while Business Critical uses locally attached storage and replicas.
[600ms]
[reflective]
Hyperscale adds page servers for scalable storage and read scale, and belongs to SQL Database.

## Step 7 · Protect data in every state

[serious]
Follow the data from storage through the connection to the sensitive column shown on the right.
[600ms]
TDE protects stored database files, TLS protects data in transit, and Always Encrypted protects selected columns encrypted by the client.
[600ms]
[reflective]
Dynamic data masking only obscures query results; it is not encryption.

## Step 8 · When relational is not the answer

[confident]
Not every workload needs the relational approach used by Contoso’s order system.
[600ms]
Azure Table Storage and Azure Cosmos DB for Table share a table data model, but differ in indexing, distribution, latency and consistency.
[600ms]
[reflective]
Read across the comparison to decide whether those additional capabilities fit the application’s needs.

## Step 9 · All in one: pick the right store

[confident]
Start each decision with the requirement on the left, then follow its arrow to a suitable option.
[600ms]
Cloud databases, shared pools, instance features and operating system access lead to different choices.
[600ms]
[reflective]
Availability architecture, data protection and global table access complete the design rather than replacing that first workload decision.
