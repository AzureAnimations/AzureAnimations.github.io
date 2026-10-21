# Narrator Script — Contoso Ships the Assistant

**Source animation:** [ContosoShips.html](../../journeys/Database/ContosoShips.html)
**Language:** en

Cue legend: `[confident]` and `[reflective]` direct delivery; `[600ms]` marks a silent pause between sentences.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · One question, two kinds of answer

[confident]
Contoso’s customer wants a tent that stays dry in the rain and wants to know where an order is.
[600ms]
The assistant splits that request because product meaning and order facts need different kinds of retrieval.
[600ms]
[reflective]
Matching the intent is useful for tents, but an order needs exact records.

## Step 2 · Cosmos DB remembers the conversation

[confident]
The new connection gives the assistant a place to recover conversation history in Azure Cosmos DB.
[600ms]
The chat item keeps its text and embedding together, while the partition key organizes the customer’s history.
[600ms]
[reflective]
When the item identifier and partition key are known, a point read retrieves that specific item.

## Step 3 · Find the tent by meaning

[confident]
The question becomes an embedding using the same model as the stored vectors, so their meanings can be compared.
[600ms]
A tents metadata filter keeps the shortlist relevant, with the Alpine 2P tent leading these illustrative matches.
[600ms]
[reflective]
The Cosmos cosine score increases with similarity, while pgvector’s cosine distance decreases with closeness.

## Step 4 · Look up the order with a tool

[confident]
Order status comes from a Python tool querying PostgreSQL, not from similarity to a customer’s question.
[600ms]
The connection uses a Microsoft Entra token and TLS, and query parameters keep supplied values separate from SQL.
[600ms]
[reflective]
Returned rows ground the answer; keyset pagination supports looking through longer order histories.

## Step 5 · Fast and affordable on both engines

[confident]
These before and after bars illustrate tuning goals, not measured promises for Contoso’s workload.
[600ms]
Cosmos DB indexing choices affect request charges, while PostgreSQL parameters, vector indexes and connection pooling influence query behavior.
[600ms]
[reflective]
Measure request charges and latency first, then test one change at a time with representative data.

## Step 6 · Optional: zoom out to the architect view

[confident]
The assistant’s map stays in place while the lower view widens to Contoso’s broader data architecture.
[600ms]
Orders can use the Azure SQL family, while raw chats and logs flow through Data Factory into Data Lake Storage.
[600ms]
[reflective]
Databricks prepares and analyzes that data, extending the picture beyond individual customer requests.

## Step 7 · Contoso ships the assistant

[confident]
The completed map connects splitting the question, embedding it, searching, looking up facts and tuning the stores.
[600ms]
Cosmos DB supplies memory and meaning, while PostgreSQL supplies facts and can search meaning too.
[600ms]
[reflective]
The optional architecture sits alongside that working example, showing that each store has a deliberate role.
