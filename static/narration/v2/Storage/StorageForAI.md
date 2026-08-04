# Narrator Script — Azure Storage · Level up · Storage for AI

**Source animation:** `static/v2/Storage/StorageForAI.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] You want an AI app that answers from your own enterprise content — not from whatever the model happened to memorize.
[600ms]
[calm] The pattern that does this is retrieval-augmented generation, or RAG. It feeds your data to the model at question time, so the answer is grounded in your documents.
[700ms]
[curious] And it all starts in storage. Let's follow a document from a blob to a grounded answer.

## Step 2 · store

[confident] First, the source of truth. Your documents, PDFs, and images land in Blob Storage.
[600ms]
[calm] For big analytical data, reach for Data Lake Storage Gen 2 — that's Blob Storage with a hierarchical namespace and folder-level permissions.
[700ms]
[reassuring] Either way, storage holds the raw content everything else will draw from.

## Step 3 · index

[confident] Now we make that content findable. An Azure AI Search indexer connects straight to your blob container.
[600ms]
[calm] It pulls in the files and their metadata, cracks open each document, and extracts the text inside.
[700ms]
[reassuring] Better still, it watches the blob timestamps, so when content changes, only what's new gets re-indexed.

## Step 4 · vectorize

[confident] Here's the step that makes AI search possible. During indexing, integrated vectorization splits each document into chunks.
[600ms]
[calm] Chunking keeps every piece within the model's token limits — and then an embedding model turns each chunk into a vector, a list of numbers that captures its meaning.
[700ms]
[reassuring] Those vectors live right in the search index, ready to be matched by meaning, not just keywords.

## Step 5 · retrieve

[confident] Question time. The app runs a hybrid search — vector and keyword together — over the index.
[600ms]
[calm] Vectors find what's semantically close; keywords catch the exact terms. Together they surface the most relevant chunks.
[700ms]
[impressed] Those chunks are handed to the model to ground its answer. That's RAG — the model responds from your content, and can cite it.

## Step 6 · secure

[confident] Now the part enterprises can't skip — keeping retrieval secure.
[600ms]
[calm] Azure AI Search can ingest each document's permissions — access control lists and Microsoft Entra groups, even Purview sensitivity labels — right into the index.
[700ms]
[reassuring] That gives you permission-aware retrieval: an agent never surfaces a document the person asking isn't allowed to see.

## Step 7 · recap

[proud] There's the whole picture: store content in Blob or Data Lake Storage, let an AI Search indexer pull it in, chunk and embed it with integrated vectorization, retrieve it with hybrid search, and ground the model's answer — all while honoring permissions.
[700ms]
[encouraging] Storage is the source of truth; the search index holds the vectors; and RAG ties them into an answer you can trust.

## Step 8 · spec

[confident] A little deeper. Think of it as three layers. Storage is the source. Azure AI Search is the retrieval layer, where your vectors live in vector fields.
[600ms]
[calm] And the agent sits on top — it searches first, then asks the model to answer from what came back.
[700ms]
[reassuring] Keep the permissions flowing from storage into the index, and every answer stays both grounded and secure.
