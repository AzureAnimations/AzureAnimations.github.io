# Choosing Your AI SDK — Narration

Source animation: `journeys/AI/Foundry/ChoosingYourSdk.html`

One block per step, paired 1:1 with `STEPS[]`. `[NNNms]` are pauses.

---

## Step 1 · Three SDKs, One Application

[measured]
Azure OpenAI SDK. Foundry SDK. Microsoft Agent Framework.
[500ms]
Three names that all seem to do the same thing — call a model and get an answer back.
[600ms]
They are not competitors. They are three layers of one stack, and most real applications end up using more than one of them.
[400ms]
So the question isn't "which is best". It's "which endpoint does the feature I need actually live behind".

---

## Step 2 · One Resource, Two Endpoints

[measured]
Everything follows from this one picture.
[500ms]
A Foundry resource exposes two different endpoints. The project endpoint, which serves agents, tools, evaluations and connections. And the Azure OpenAI endpoint, which serves models directly.
[600ms]
The OpenAI SDK talks to the second one. The Foundry SDK talks to the first. And the Agent Framework doesn't talk to either directly — it depends on the Foundry SDK and rides on top.
[400ms]
Pick the endpoint first. The SDK follows from it.

---

## Step 3 · Azure OpenAI SDK

[measured]
The bottom layer is the plain OpenAI client, pointed at your Azure resource.
[500ms]
There are no Azure-specific abstractions here. It's the same code shape you'd write against OpenAI directly, which is exactly why it's the fastest path if you already have OpenAI code.
[600ms]
Reach for it when you want maximum compatibility, the lowest latency, or embeddings — and note that embeddings matter here, because the project endpoint doesn't route them at all.
[400ms]
What you don't get: agents, evaluations, connections. None of those exist on this endpoint.

---

## Step 4 · Foundry SDK

[measured]
One layer up, the Foundry SDK is a thin client over every project API — through a single endpoint.
[500ms]
It hands you two clients, and most applications use both. The project client for Foundry-native things: connections, deployments, tracing. And an OpenAI-compatible client for everything shaped like OpenAI — responses, agents, evaluations, fine-tuning.
[600ms]
This is the layer where the platform tools appear: file search, code interpreter, web search, memory, MCP servers.
[400ms]
One endpoint, one credential, the whole project.

---

## Step 5 · Microsoft Agent Framework

[measured]
The top layer turns a model client into an agent — and several agents into a workflow.
[500ms]
It's open source, it runs on .NET and Python, and it's the successor to Semantic Kernel and AutoGen. If you were combining those two for orchestration, this is where to consolidate.
[600ms]
It connects through FoundryChatClient, which means it depends on the Foundry SDK underneath — it's a layer on top, not an alternative.
[400ms]
And when you're ready, the same code packages up as a Foundry Hosted agent with a managed endpoint.

---

## Step 6 · How They Fit Together

[measured]
Here's the same three SDKs as a component diagram.
[500ms]
Your application depends on the Agent Framework. The Agent Framework requires an interface the Foundry SDK provides. The Foundry SDK requires the project API on the Foundry resource.
[600ms]
And notice the second path: your application can also depend on the OpenAI SDK directly, which reaches the model through the OpenAI v1 interface — bypassing the project entirely.
[400ms]
Two routes to the same resource, serving two different jobs.

---

## Step 7 · In a Real Application

[measured]
Now put it in a deployed system.
[500ms]
The browser holds no SDK and no secrets. Your service — FastAPI, ASP.NET, whatever you run — owns authentication, rate limits and business rules, and it's the only tier that holds an SDK client.
[600ms]
Below that, all three SDKs can coexist in the same service, because they all point at the same Foundry project and all accept the same credential.
[400ms]
Use DefaultAzureCredential, not an API key. Keys still work on the OpenAI endpoint, but managed identity is what you want in production.

---

## Step 8 · So Which One Do I Use?

[measured]
So here's the decision, as a table you can actually use.
[500ms]
Start from the row — what you need to do — and read across.
[400ms]
Embeddings or lowest latency? OpenAI SDK. Foundry tools, evaluations, tracing, connections? Foundry SDK. Several agents in a workflow, or a managed hosted endpoint? Agent Framework.
[600ms]
And where a row has two ticks, take the simpler one. A dash doesn't mean impossible — it means wrong endpoint, and you'd be fighting the SDK to get there.

---

## Step 9 · Pick Your Layer

[warm]
So the rule is simple: start at the lowest layer that does the job.
[500ms]
Just the model? Stop at the OpenAI SDK. Need the project — its tools, its evaluations, its connections? Move up to the Foundry SDK. Coordinating several agents? Let the Agent Framework hold the loop.
[600ms]
And moving up a layer later is cheap, because the same project endpoint and the same credential carry over.
[400ms]
Pick the lowest layer that works. Climb only when something makes you.
