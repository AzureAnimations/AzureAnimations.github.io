# Narrator Script — Cosmos DB: Optimize Performance

**Source animation:** [CosmosOptimize.html](../../journeys/Database/CosmosOptimize.html)
**Language:** en

Cues in brackets guide delivery; [600ms] marks a pause between spoken sentences.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ -->

## Step 1 · Measure before you tune

[curious] Contoso’s product search feels slow, so start with query metrics rather than guessing which setting to change.
[600ms]
[calm] Compare the documents retrieved with those returned, alongside index utilization and the request charge.
[600ms]
[encouraging] Add the missing index, wait for its transformation to finish, then repeat the measurement.

## Step 2 · The indexing policy decides what is indexed

[confident] The indexing policy controls which product properties receive indexes, rather than treating every property as equally useful.
[600ms]
[calm] Compare the broad default policy with a selective policy covering the fields this workload actually queries.
[600ms]
[reassuring] Leaving unnecessary properties out of range indexing reduces maintenance work, while preserving indexes for the searches that matter.

## Step 3 · Composite index for filter + sort

[curious] Contoso filters products by category and sorts by price, but supporting the filter alone leaves sorting work.
[600ms]
[confident] The revised query includes the filtered property in its ordering and pairs it with a matching composite index.
[600ms]
[serious] Match both property order and sort direction, then measure whether the request charge improves.

## Step 4 · Pick a vector index by dataset size

[confident] Vector index selection depends on dataset size and the balance between search accuracy, speed, and request charge.
[600ms]
[calm] The cards compare an exact flat approach, a compressed flat approach, and diskANN for larger collections.
[600ms]
[encouraging] Test suitable options with the same vectors and queries instead of assuming one index wins for every workload.

## Step 5 · Every index trades read speed for write cost

[serious] An index can make searches cheaper, but every extra index also adds work when products are written.
[600ms]
[calm] Write-heavy workloads favor a leaner policy, while read-heavy workloads may justify more indexes supporting their queries.
[600ms]
[reassuring] When replacing an index, add its replacement first and wait for transformation before removing the old one.

## Step 6 · Consistency is a latency and RU dial

[confident] Consistency is another workload choice, balancing how current reads must be against latency and request charge.
[600ms]
[calm] The table compares five levels, with session consistency highlighted for Contoso’s chat experience and reading its own writes.
[600ms]
[serious] When several services handle that interaction, pass the session token along so they retain the session context.

## Step 7 · Contoso tunes the product container

[confident] Contoso now replaces a default setup with decisions tied to how its product container is actually queried.
[600ms]
[calm] Selective paths, a separate vector index, a matching composite index, and session consistency address different parts of the workload.
[600ms]
[serious] This comparison is illustrative, so confirm the effect on reads and writes using measured request charges.

## Step 8 · Optimizing Cosmos DB, all in one

[confident] These choices work together around one container: measure the query, shape the indexing policy, and support its ordering.
[600ms]
[calm] Choose a vector index and consistency level that fit the search experience, rather than maximizing every setting.
[600ms]
[encouraging] Recheck the metrics after changes, then carry that evidence-led approach into PostgreSQL’s tables and queries.
