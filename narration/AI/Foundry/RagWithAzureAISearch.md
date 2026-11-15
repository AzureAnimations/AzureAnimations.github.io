# Narrator Script — Foundry · RAG with Azure AI Search

**Source animation:** [RagWithAzureAISearch.html](../../../journeys/AI/Foundry/RagWithAzureAISearch.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview>
- <https://learn.microsoft.com/azure/search/search-indexer-overview>
- <https://learn.microsoft.com/azure/search/vector-search-integrated-vectorization>

---

## Step 1 · A model that has never read your files

[curious] Maya asks Contoso's assistant a simple question about the remote work policy.
[600ms]
[concerned] The model only knows its training data, and that has a cut-off date. Contoso's private, changing HR files aren't in there.
[600ms]
[serious] So it does what models do when they don't know: it guesses, and the answer sounds confident but isn't grounded.

## Step 2 · RAG: retrieve, augment, generate

[calm] Retrieval-augmented generation, or RAG, fixes this in three moves.
[600ms]
[confident] First look up the right passages. Then add them to the prompt. Then let the model answer from them.
[600ms]
[reassuring] The model isn't retrained. The facts arrive in the prompt at question time, so your content can change every day.

## Step 3 · Ingest: from files to a search index

[curious] An indexer pulls content from your data source into a search index on Azure AI Search.
[600ms]
[confident] It can rerun on a schedule, which keeps the index fresh as your files change.
[600ms]
[calm] The index is a separate, searchable copy on the search service. That's what makes queries fast, because the service doesn't go back to your source at question time.

## Step 4 · Enrich: read, chunk, and embed

[curious] Next, a skillset runs AI skills over every document.
[600ms]
[confident] One skill reads text from scans, another splits it into passages, and another turns each passage into a vector.
[600ms]
[impressed] There are skills for tables and figures too. With integrated vectorization, embedding happens at indexing time and again at query time.

## Step 5 · The index: one chunk, one document

[calm] Each chunk becomes its own search document in the index.
[600ms]
[confident] Field attributes decide how it can be searched, filtered, and returned for citations. A vector field holds the embedding, and its dimensions must match your embedding model.
[600ms]
[serious] Only retrievable fields can be returned, so keep a source link field if you want citations that point back.

## Step 6 · Four ways to ask the index

[curious] There are four ways to ask the index a question.
[600ms]
[confident] Full-text matches the words. Vector matches the meaning. Hybrid does both in a single request.
[600ms]
[impressed] And the semantic ranker then re-orders the best results, so the most useful passage rises to the top.

## Step 7 · Try it: which mode finds the answer?

[encouraging] Now try it yourself. Pick a question, then pick a search mode.
[600ms]
[curious] Watch which chunks reach the model, and notice where the answer chunk lands in the ranking.
[600ms]
[reflective] The ranking here is illustrative, on made-up Contoso chunks. Real results depend on your content, your fields, and your embedding model.

## Step 8 · Ground a Foundry agent on the index

[confident] To ground an agent, add a project connection to your search service.
[600ms]
[calm] Then point the agent's Azure AI Search tool at the index, and answers come back with citations.
[600ms]
[serious] Prefer the project's managed identity over keys. Private networking requires Microsoft Entra, so check Learn for the exact role assignments.

## Step 9 · When one search is not enough

[curious] Sometimes a single search isn't enough for a question that is complicated.
[600ms]
[confident] Agentic retrieval puts a knowledge base in front of your sources. It plans subqueries, runs them in parallel, re-ranks, and returns grounded results.
[600ms]
[reflective] In Foundry, Foundry IQ gives agents that knowledge base, with Azure AI Search as the engine underneath. Some parts are still preview, so check the API version you target.

## Step 10 · Only retrieve what the caller may see

[serious] Retrieval brings a risk. Not everyone should see every document.
[600ms]
[confident] So filter results by the caller's identity at query time. Restricted chunks never reach the prompt, whoever asks the model.
[600ms]
[calm] A security filter matches a user or group value on a filterable field. Built-in document-level access control is available in preview.

## Step 11 · Measure it, then tune cost and latency

[curious] Now measure. Score retrieval and answers with evaluators, such as retrieval, groundedness, and relevance.
[600ms]
[confident] Then adjust the levers that trade answer quality against cost and response time.
[600ms]
[reflective] Evaluation is a topic of its own, so this step only shows where it fits. The bar heights here are illustrative.

## Step 12 · RAG with Azure AI Search, all in one

[calm] Ingest and enrich your content once. Query the way each question needs.
[600ms]
[confident] Ground the agent, trim results by identity, then measure and tune.
[600ms]
[proud] That's the pipeline behind the A I one oh three retrieval objectives, and it pairs well with A I two hundred, which practises the same RAG idea on other vector stores.
