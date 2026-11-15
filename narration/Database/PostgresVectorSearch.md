# Narrator Script — PostgreSQL: Vector Search with pgvector

**Source animation:** [PostgresVectorSearch.html](../../journeys/Database/PostgresVectorSearch.html)
**Language:** en

Cues in brackets guide delivery; [600ms] marks a pause between spoken sentences.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Meaning search, plus relational joins

[curious] Contoso’s assistant needs products matching a customer’s meaning, even when the description uses different words from the request.
[600ms]
[confident] pgvector adds similarity search to PostgreSQL, keeping embeddings beside the relational records the application already uses.
[600ms]
[reassuring] The result combines meaning-based discovery with relational joins, without introducing a separate vector store to manage.

## Step 2 · Enable pgvector, add a vector column

[confident] Start by allowing pgvector on the server, enabling it in the database, and verifying that it is installed.
[600ms]
[calm] Product content passes through an embedding model, and the resulting vector is stored alongside the row’s metadata.
[600ms]
[serious] Match the vector column’s dimensions to the model output so the stored representation fits the embeddings you generate.

## Step 3 · Three metrics, three operators

[curious] Closeness is a choice: Euclidean distance, cosine distance, and negative inner product compare vectors in different ways.
[600ms]
[calm] Cosine focuses on direction rather than length, which makes it a common choice for text embeddings.
[600ms]
[serious] Follow the embedding model’s recommended metric, and remember that smaller distances rank closer matches in these examples.

## Step 4 · Fast search: IVFFlat or HNSW

[confident] An exact scan compares every row, while an approximate index can accelerate search at the cost of some recall.
[600ms]
[calm] IVFFlat clusters existing vectors; HNSW builds a layered graph and typically needs more memory.
[600ms]
[encouraging] Start with HNSW unless your constraints favor IVFFlat, and match the index’s distance measure to the query.

## Step 5 · Keep embeddings and the index fresh

[serious] Search quality can drift when edited content still has old embeddings or the dataset’s distribution has changed.
[600ms]
[confident] Refresh changed content in batches, and consider rebuilding the index as the data evolves.
[600ms]
[reassuring] When changing embedding models, populate and validate a parallel column before switching, rather than mixing models in one column.

## Step 6 · Semantic retrieval with a filter

[confident] The question becomes an embedding, while metadata limits eligible products to the category the customer is interested in.
[600ms]
[calm] A distance threshold removes weaker matches, and ranking returns the nearest remaining results rather than every eligible row.
[600ms]
[encouraging] Tune that threshold on your own data so retrieval balances relevant matches against overly restrictive filtering.

## Step 7 · RAG: PostgreSQL is the retriever

[confident] Follow the question through embedding and retrieval, then into a prompt containing the closest chunks and their metadata.
[600ms]
[calm] PostgreSQL retrieves the context; the language model uses that context to compose the answer.
[600ms]
[serious] Keep chunks linked to source documents so the response can cite its sources, and evaluate retrieval quality before blaming generation.

## Step 8 · All in one: vector search in PostgreSQL

[confident] One PostgreSQL database now holds relational rows and embeddings, connecting the assistant’s question to retrieved context and an answer.
[600ms]
[calm] The extension, distance metric, index, refresh process, and metadata filters each contribute to that retrieval path.
[600ms]
[encouraging] Next, tune the database and vector workload together to address latency without losing sight of relevant results.
