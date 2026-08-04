# Narrator Script — Azure Storage · Level up · Build with Storage

**Source animation:** `static/v2/Storage/StorageBuildEvents.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] Let's build. You're writing an app that stores and serves blobs — images, documents, uploads.
[600ms]
[calm] We'll connect to storage, read and write, develop locally, and then react to changes as they happen.
[700ms]
[reassuring] And the best part — the same SDK code you write runs on your laptop and in production, unchanged.

## Step 2 · connect

[confident] Start with the Azure Storage client library, and connect the passwordless way.
[600ms]
[calm] The DefaultAzureCredential picks up your developer sign-in on your machine, and a managed identity in Azure — so there are no connection strings or keys in your code.
[700ms]
[reassuring] Write it once, and it just works in both places.

## Step 3 · io

[confident] Now the everyday work — reading and writing blobs. You create a blob client and call upload or download.
[600ms]
[calm] The calls are asynchronous, so your app stays responsive while data moves.
[700ms]
[encouraging] For big files, lean on streaming and parallel transfers — the library handles the heavy lifting.

## Step 4 · azurite

[confident] You don't need a cloud account to build. Azurite is the local Storage emulator.
[600ms]
[calm] It runs blob, queue, and table storage right on your machine, so you can develop and test offline — fast, and free.
[700ms]
[reassuring] It even ships with the Azure Tools in Visual Studio Code, so it's a click away.

## Step 5 · events

[confident] Here's where storage gets lively. When a blob is created or deleted, Storage raises an event.
[600ms]
[calm] Event Grid routes that event to a handler — an Azure Function, a Logic App, a webhook — so your code reacts the instant data changes.
[700ms]
[impressed] The Event Grid blob trigger scales to high event rates, so it keeps up even under a flood of uploads.

## Step 6 · feed

[confident] Events are great for reacting now. But what if you need the full history?
[600ms]
[calm] That's the change feed — a durable, ordered, read-only log of every change to your blobs.
[700ms]
[reassuring] Think of it this way: events are push, the change feed is pull. One notifies you live; the other lets you read, batch, and replay every change after the fact.

## Step 7 · recap

[proud] There's the whole picture: your app talks to Blob Storage through the SDK with a managed identity, develops locally on Azurite, reacts to changes with Event Grid, and audits or replays them with the change feed.
[700ms]
[encouraging] SDK plus managed identity, Azurite for dev, events to react — that's a clean, modern storage app.

## Step 8 · spec

[confident] A little deeper for the builders. The Azure Storage client libraries cover every major language — .NET, Java, Python, JavaScript, Go.
[600ms]
[calm] Authenticate them all with the DefaultAzureCredential, and you're passwordless everywhere.
[700ms]
[reassuring] And for reacting to blobs, prefer the Event Grid blob trigger over the classic polling trigger — it's faster to fire and it scales.
