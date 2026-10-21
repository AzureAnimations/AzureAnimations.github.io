# Narrator Script — PostgreSQL: Optimize Vector Search

**Source animation:** [PostgresOptimize.html](../../journeys/Database/PostgresOptimize.html)
**Language:** en

Cues in brackets guide delivery; [600ms] marks a pause between spoken sentences.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Where a vector query spends its time

[curious] A slow product search can spend time in several places, not just in the vector comparison itself.
[600ms]
[calm] Trace connection setup, planning, vector comparisons, and data reads to see where the time goes.
[600ms]
[encouraging] Establish a baseline first so each tuning change addresses an observed source of delay.

## Step 2 · Tune PostgreSQL for pgvector

[confident] Memory, planner behavior, and vector search effort give Contoso different ways to tune the same query.
[600ms]
[serious] These settings trade memory, latency, and recall, so response speed is not the only measurement that matters.
[600ms]
[encouraging] Change one parameter at a time, inspect the execution plan, and test the result on representative data.

## Step 3 · Choose and configure the vector index

[confident] Choose the vector index by memory, build time, recall, and how often your data changes.
[600ms]
[calm] The comparison separates index-building decisions from query-time search effort, with an exact scan available as a baseline.
[600ms]
[serious] Match the distance measure to the query, and test the trade-offs rather than choosing by index name alone.

## Step 4 · Shape the table for vectors and filters

[confident] Keep frequently filtered product attributes in typed columns, with embeddings and flexible JSON serving their own roles.
[600ms]
[calm] Use a B-tree for category and price, a partial index for stocked products, and GIN for JSON containment.
[600ms]
[serious] Match each index to its access pattern instead of expecting the vector index to accelerate every filter.

## Step 5 · Scale for high-volume workloads

[confident] First scale up when individual queries are slow or vectors and indexes put pressure on available memory.
[600ms]
[calm] Then use read replicas for read volume and Azure Managed Redis for repeated lookups, as shown.
[600ms]
[serious] Keep writes on the primary, and measure where additional capacity actually helps the workload.

## Step 6 · Pool connections and manage sessions

[confident] PgBouncer lets many clients share fewer server connections, reducing repeated setup work and connection memory overhead.
[600ms]
[calm] Transaction mode shares connections between transactions; session mode holds one until the client disconnects.
[600ms]
[serious] Scope query-specific settings to the transaction so pooled connections do not carry unintended settings into later work.

## Step 7 · Contoso’s product search, tuned

[confident] Contoso’s comparison brings the levers together: tuned parameters, a vector index, typed filters, suitable capacity, and pooled connections.
[600ms]
[calm] Each change targets a different source of waiting while keeping the table and product question the same.
[600ms]
[serious] This is a qualitative illustration, so benchmark your data and record what each individual change contributes.

## Step 8 · All in One: Optimize vector search

[confident] The finished picture puts five levers around one PostgreSQL workload: parameters, vector indexes, table layout, scaling, and connection pooling.
[600ms]
[calm] Better performance comes from matching those choices to observed behavior, not copying every example setting unchanged.
[600ms]
[encouraging] Measure first, test changes individually with production-like data, and document the effects before applying the next adjustment.
