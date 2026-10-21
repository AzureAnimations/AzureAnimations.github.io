# Narrator Script — Cosmos DB: Vector Search

**Source animation:** [CosmosVectorSearch.html](../../journeys/Database/CosmosVectorSearch.html)
**Language:** en

Cues: bracketed styles guide delivery; [600ms] marks a pause between sentences.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ -->

## Step 1 · Search by meaning, not keywords

[curious] A customer asks how to stay dry, but Contoso's product describes a waterproof jacket instead.
[600ms]
[calm] Matching only the customer's words misses the connection, while embeddings represent the meaning of text as vectors.
[600ms]
[reassuring] Comparing those vectors lets the assistant retrieve a related product even when the question and description use different wording.

## Step 2 · Tell the container about its vectors

[confident] Before storing vectors, tell the container where the embedding lives and how its values should be compared.
[600ms]
[calm] The policy specifies the property path, numeric type, distance function, and number of dimensions.
[600ms]
[serious] Enable vector search on the account and set this policy when creating the container, so storage and comparison agree with your embeddings.

## Step 3 · Keep the embedding on the item

[confident] Product text passes through an Azure OpenAI embedding model and becomes the numeric vector shown beside it.
[600ms]
[calm] Save that vector on the same item as the product information, rather than separating it from the content it represents.
[600ms]
[reassuring] The model's output must match the policy's dimensions, so the stored item is ready for compatible similarity queries.

## Step 4 · Rank items by similarity

[confident] Embed the customer's question with the same model used for the product items.
[600ms]
[calm] The vector distance query compares that question vector with stored embeddings and returns a limited set of ranked matches.
[600ms]
[reassuring] The displayed scores illustrate the ordering, not a promise of answer quality; keeping the result focused gives the assistant candidate products to consider.

## Step 5 · Narrow, rank, then match words

[confident] Begin with metadata filters, so the search considers the appropriate category, publication status, and date.
[600ms]
[calm] Vector ranking then captures meaning, while full-text ranking recognizes the words that matter in the content.
[600ms]
[reassuring] Reciprocal rank fusion combines these two rankings, letting Contoso use semantic and word-based evidence together rather than choosing just one signal.

## Step 6 · Keep embeddings fresh

[confident] When product text changes, its embedding may no longer describe what the customer would read.
[600ms]
[calm] The change feed passes the changed item to Azure Functions, which requests an embedding and writes it back.
[600ms]
[reassuring] Checking the content hash skips unchanged text, so metadata-only updates don't need another embedding and the refresh loop avoids repeating unnecessary work.

## Step 7 · One semantic search pipeline

[confident] The full pipeline now connects ingestion and questions to one container with a vector policy and index.
[600ms]
[calm] Product text and customer questions use the same embedding model, while retrieval returns ranked matches with the relevant filters.
[600ms]
[reassuring] The change-feed branch refreshes edited items, linking the searchable vectors back to the content they represent.

## Step 8 · Vector search in Cosmos DB, all in one

[confident] Keep three responsibilities together: configure vector storage, search with compatible embeddings, and refine and refresh the results.
[600ms]
[calm] Vector distance provides ranking, filters and full-text add selection signals, and the change feed keeps changed content connected to updated embeddings.
[600ms]
[encouraging] With that retrieval flow in place, the next lesson turns to indexing, request costs, and consistency.
