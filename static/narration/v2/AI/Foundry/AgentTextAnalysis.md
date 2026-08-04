# Narrator Script — Journey 05 · Text Analysis with Azure AI Language

**Source animation:** `static/v2/AI/Foundry/AgentTextAnalysis.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · The Problem

[serious] Reviews, support tickets, medical notes, contracts — most business data is unstructured text.
[600ms]
[concerned] Reading it all by hand doesn't scale.
[600ms]
[curious] So how do we make sense of it automatically?

## Step 2 · One Service, Many Capabilities

[confident] That's where Azure AI Language comes in — a prebuilt service you spin up inside Foundry.
[600ms]
[impressed] One resource, one endpoint and key, unlocks a whole suite of text capabilities.
[600ms]
[reassuring] The models are pretrained — no data to gather, no training to run.

## Step 3 · Language Detection

[confident] Let's start simple, with language detection.
[600ms]
[calm] Give it any text, and it returns the language, a standard ISO code, and a confidence score telling you how sure it is.
[600ms]
[optimistic] It sounds basic, but it's the essential first step in almost any multilingual pipeline — before you can translate, route, or analyze a message, you first have to know what language it's written in.

## Step 4 · Key Phrases

[intrigued] Next, key phrase extraction.
[600ms]
[confident] It scans unstructured text and automatically pulls out the main talking points — the words and phrases that actually matter — with no training needed.
[600ms]
[optimistic] It's perfect for tagging documents, building search indexes, or quickly surfacing the themes hidden across thousands of reviews or tickets.

## Step 5 · Entity Linking

[confident] Entity linking goes a step further.
[600ms]
[impressed] It finds the known entities in your text — here, Microsoft, Bill Gates, and Paul Allen — and links each one to its own page in a trusted knowledge base like Wikipedia.
[600ms]
[reassuring] That link is what resolves ambiguity — a word like "Surface" or "Word" could be an everyday object or a Microsoft product, and entity linking uses the surrounding context to ground it to exactly the right one.

## Step 6 · Sentiment

[confident] Sentiment analysis reads the emotion in text, scoring it as positive, negative, or neutral, each with a confidence score.
[600ms]
[intrigued] But look closely at this review — "The Contoso X2 headphones sound quality is excellent, but the delivery was painfully slow." It's really saying two things at once: the sound quality they love, and the delivery they hated.
[600ms]
[calm] So a single overall label doesn't fit — the best you could say is "mixed," and that hides what actually happened.
[600ms]
[impressed] This is where opinion mining goes deeper. It splits the review by target: "sound quality" — the product itself — comes out positive, while "delivery" — the shipping experience — comes out negative.
[600ms]
[optimistic] Two aspects, two opposite opinions, cleanly separated — so you learn not just that a review is mixed, but exactly what to celebrate and what to fix.

## Step 7 · PII Detection

[serious] Now a critical one for privacy — PII detection.
[600ms]
[confident] It automatically finds personally identifiable information: names, email addresses, phone numbers, account IDs, and more.
[600ms]
[reassuring] And it can redact all of it before your text is ever stored, logged, or shared with a model — so sensitive customer data never leaks into your pipeline, helping you stay compliant by default.

## Step 8 · Summarization

[confident] Summarization tackles long documents in two ways.
[600ms]
[calm] Extractive summarization pulls out the most important sentences, word for word.
[600ms]
[impressed] Abstractive summarization goes further, writing a fresh, concise summary in entirely new words — much like a person would.

## Step 9 · In the Real World

[optimistic] Now combine these capabilities, and real problems start to melt away.
[600ms]
[confident] Analyze customer feedback at scale, read through clinical notes, process financial documents, or summarize long legal files in seconds.
[600ms]
[encouraging] Each capability is a building block — together, they do serious work.

## Step 10 · Skills via MCP

[intrigued] Here's where it all connects to agents.
[600ms]
[confident] A Foundry agent can reach Azure AI Language through an MCP server, which exposes every capability we've seen as a callable tool.
[600ms]
[impressed] So the agent itself decides, right in the moment, when to detect a language, pull key phrases, redact PII, or summarize a document — no rigid, hard-coded pipeline required, just the right skill at the right time.

## Step 11 · Get Started

[encouraging] So, ready to try it yourself?
[800ms]
[confident] Create a Language resource, experiment with each feature in Language Studio, then call them straight from your app — or wire them into an agent over MCP so it can reach them as tools.
[600ms]
[optimistic] No model training, no heavy setup. You could be extracting real insights from your text today.
