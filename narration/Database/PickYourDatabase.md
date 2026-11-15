# Narrator Script — Pick Your Database for AI Apps

**Source animation:** [PickYourDatabase.html](../../journeys/Database/PickYourDatabase.html)
**Language:** en

Cues: bracketed styles guide delivery; [600ms] marks a pause between sentences.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ ; https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview ; https://learn.microsoft.com/training/modules/design-data-integration/ -->

## Step 1 · One assistant, four kinds of data

[curious] Contoso Outfitters' support assistant needs chat history, order records, meaning-based search, and large raw files.
[600ms]
[calm] These requests converge on one assistant, but they don't require the same storage shape or access pattern.
[600ms]
[reassuring] Notice the search tile's two colors: vectors aren't exclusive to one engine, so the workload must guide the choice.

## Step 2 · Documents and vectors: Cosmos DB

[confident] The message becomes a document in Azure Cosmos DB for NoSQL, with an embedding stored alongside its text.
[600ms]
[calm] Its partition key groups the item with related customer data, rather than treating every document as unrelated.
[600ms]
[reassuring] This combines document storage with vector retrieval, so the assistant can search meaning without separating the vector from its item.

## Step 3 · Tables plus vectors: PostgreSQL

[confident] The product catalog stays in relational tables, with an embedding column beside product fields.
[600ms]
[calm] Azure Database for PostgreSQL uses pgvector to combine meaning-based ranking with category filters and relational queries.
[600ms]
[reassuring] That suits a team that needs table relationships and vector search together, but the extension must be enabled in each database that uses it.

## Step 4 · Relational at scale: Azure SQL family

[confident] Contoso's orders and customers lead to another decision: how much of the database environment should the team manage?
[600ms]
[calm] Azure SQL Database and Azure SQL Managed Instance are managed services, while SQL Server on Azure VMs provides operating-system access.
[600ms]
[reassuring] Match the application's needs to that management boundary, especially when moving an existing SQL Server workload.

## Step 5 · Raw files and pipelines: the data lake

[confident] Chat exports, logs, and product photos begin as raw files in Azure Data Lake Storage.
[600ms]
[calm] Azure Data Factory connects, collects, transforms, publishes, and monitors the flow toward analytics.
[600ms]
[reassuring] Databricks, Synapse, and Stream Analytics appear downstream because this route prepares data for analysis, rather than treating a file collection like the assistant's transactional database.

## Step 6 · Which one, when?

[curious] Choose a need in the comparison, then look at the matching engine, its useful scenarios, and its caution.
[600ms]
[calm] Documents, relational vectors, business orders, and raw-file pipelines each lead to different trade-offs.
[600ms]
[encouraging] Contoso can use more than one option, so make the decision per workload instead of standardizing every task on one product.
