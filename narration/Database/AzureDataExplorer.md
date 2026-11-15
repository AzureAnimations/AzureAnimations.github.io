# Narrator Script — Database · Azure Data Explorer: Fast Analytics on Logs and Telemetry

**Source animation:** [AzureDataExplorer.html](../../journeys/Database/AzureDataExplorer.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/data-explorer/data-explorer-overview>
- <https://learn.microsoft.com/azure/data-explorer/how-it-works>
- <https://learn.microsoft.com/azure/data-explorer/ingest-data-overview>
- <https://learn.microsoft.com/kusto/management/cache-policy>

---

## Step 1 · Billions of rows, one question

[calm] Contoso Fleet's trucks, gateways and apps never stop writing telemetry and logs. The rows pile up all day, every day.
[600ms]
[curious] Then someone asks a simple question, and the clock starts. How quickly can you get an answer from all that data?
[600ms]
[confident] Contoso Fleet is fictional. Azure Data Explorer is the real service this lesson explains.

## Step 2 · What Azure Data Explorer is for

[calm] Azure Data Explorer is a fully managed analytics service. It's built for large data that arrives fast.
[600ms]
[confident] That data is mostly append-only, and you want to explore it interactively, in near real time.
[600ms]
[reassuring] Microsoft Learn lists its sweet spot as log analytics, time series analytics, IoT, and general exploratory analytics.

## Step 3 · Cluster, database, table, extent

[curious] Let's look at how the data is organized. A cluster holds databases, and databases hold tables with typed columns.
[600ms]
[confident] Each table is stored as extents, which are compressed, indexed shards of rows. Data is partitioned by ingestion time.
[600ms]
[calm] Extents start small, and the service merges them in the background into larger ones.

## Step 4 · Compute and storage are separate

[curious] Under the hood, the work is split. Engine nodes serve your queries and cache the hot data.
[600ms]
[calm] Data management nodes run ingestion. Every extent is persisted in Azure Blob Storage.
[600ms]
[confident] Because storage and compute are separate, each one scales on its own. Compute only caches what storage already holds.

## Step 5 · Ways to get data in

[calm] Data arrives from sources like Event Hubs, IoT Hub, Event Grid and Kafka.
[600ms]
[confident] Queued ingestion batches the data for throughput, and it's recommended for most scenarios.
[600ms]
[curious] Streaming ingestion favors low latency instead, giving near real time results when each table receives small amounts of data.

## Step 6 · Try it: ingestion path and hot cache

[encouraging] Now it's your turn. Choose how the data arrives, and how much of it stays hot.
[600ms]
[curious] Watch the meters move. They show the direction of each trade-off, never real numbers.
[600ms]
[reflective] Real behavior depends on batching, cache policies, your workload and your cluster size.

## Step 7 · Ask it in KQL

[curious] To ask questions, you use Kusto Query Language, or KQL. It reads top to bottom.
[600ms]
[confident] You start with a table, then pipe it through filters and summaries. T-SQL also works on the same data.
[600ms]
[calm] KQL is open source, and the Azure Data Explorer team created it. Azure Monitor Logs and Application Insights use it too.

## Step 8 · Hot cache vs retention

[calm] Two policies often get confused. The cache policy decides what stays fast on local SSD.
[600ms]
[confident] The retention policy decides how long data stays queryable at all. They're independent of each other.
[600ms]
[serious] Retention sets the queryable range, while caching just prioritizes part of that range for speed. And deletion isn't exact to the moment.

## Step 9 · Scale out, scale up

[calm] When you need more capacity, you have two directions. Scale out by adding or removing engine nodes.
[600ms]
[confident] Or scale up by changing the VM SKU, for more CPU and memory. Storage scales on its own.
[600ms]
[reassuring] New clusters use optimized autoscale by default. It scales in when underused and out when overloaded, between the limits you set.

## Step 10 · Security at a plain level

[serious] Security comes down to three plain ideas. First, roles say who can query or ingest the data.
[600ms]
[confident] Private endpoints keep traffic off the public internet, and managed identities remove secrets from your configuration.
[600ms]
[calm] Data roles apply at cluster, database or table scope, separate from Azure resource roles. Customer-managed keys are supported too.

## Step 11 · Where Azure Data Explorer fits

[curious] Where does it fit in the Azure data family? KQL ties the family together.
[600ms]
[confident] Choose by how much you want to run yourself, and by the job. It's for telemetry analytics, not warehousing or app data.
[600ms]
[calm] Fabric Real-Time Intelligence is the SaaS route, while Azure Data Explorer is the PaaS route with more control.

## Step 12 · Azure Data Explorer at a glance

[calm] Here's the whole picture. Append-mostly telemetry and logs go in, and KQL answers come out.
[600ms]
[confident] Your job is to design four things: the ingestion path, the cache and retention, the scale, and the security.
[600ms]
[proud] Next, learn the KQL basics, then compare the other data stores in the Database journey.
