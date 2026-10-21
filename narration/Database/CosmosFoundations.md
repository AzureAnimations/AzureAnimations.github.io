# Narrator Script — Cosmos DB: Build and Query

**Source animation:** [CosmosFoundations.html](../../journeys/Database/CosmosFoundations.html)
**Language:** en

Cues: bracketed styles guide delivery; [600ms] marks a pause between sentences.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ -->

## Step 1 · Why a document database?

[confident] Contoso's chat messages and product documents have different shapes, even though both are useful to the support assistant.
[600ms]
[calm] Azure Cosmos DB for NoSQL stores them as JSON documents without requiring every item to share one fixed schema.
[600ms]
[reassuring] The two examples show why flexible items suit this workload, while familiar development tools provide access.

## Step 2 · Account, database, container, item

[confident] Read the nesting from the outside inward: account, database, container, then individual items.
[600ms]
[calm] The product catalog database contains separate product and user containers, each with its own partition-key choice.
[600ms]
[reassuring] This hierarchy is also your application's navigation map, so knowing where an item lives makes the later client operations easier to follow.

## Step 3 · Partition key: where items live

[confident] The category value sends each product into its logical partition, as the tent, stove, and pack groups show.
[600ms]
[calm] Choose a property with many distinct values and a balanced distribution, rather than concentrating activity behind only a few values.
[600ms]
[serious] Decide carefully before creating the container, because changing its partition key later requires moving the data.

## Step 4 · Connect with the SDK

[confident] The application starts with a client, authenticates, and obtains handles for the database and product container.
[600ms]
[calm] Microsoft Entra ID provides role-based access without placing an account secret in the code, but the appropriate data role still needs assigning.
[600ms]
[reassuring] Reuse the client across the application; obtaining those resource handles alone doesn't make a network call.

## Step 5 · Create, read, replace, upsert, delete

[confident] Follow one product through the operations: create adds it, and a read retrieves it using its identifier and partition key.
[600ms]
[calm] Replace changes an existing item, while upsert inserts or replaces, depending on whether that item exists.
[600ms]
[serious] Delete removes the identified item, so choose the operation that matches your intent rather than treating all writes alike.

## Step 6 · Point read or query?

[curious] Do you know the item's identifier and partition key, or do you need to discover matching items?
[600ms]
[calm] A point read goes directly to one item, while a query filters, projects, or sorts according to your criteria.
[600ms]
[reassuring] Use the direct route when it fits, and keep queries within a partition when possible to avoid unnecessary fan-out.

## Step 7 · Query: filter and project

[confident] The query keeps tents within the price condition, while the expensive tent is excluded from the result.
[600ms]
[calm] It returns only the identifier, name, and price instead of sending every property back to the assistant.
[600ms]
[reassuring] Filtering chooses which items qualify, projection chooses their fields, and the partition key keeps this example focused on the relevant group.

## Step 8 · All in one: build and query

[confident] Bring the pieces together: model the resources, connect through a reusable client, then read and write the items.
[600ms]
[calm] Use a point read for a known item, or a filtered query when the assistant must discover matching data.
[600ms]
[encouraging] This foundation prepares you to add embeddings and vector retrieval without losing track of the documents they describe.
