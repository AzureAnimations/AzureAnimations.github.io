# Narrator Script — Azure PaaS Compute · 04 · Function App

**Source animation:** `static/v2/Compute/FunctionApp.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · intro

[confident] Last stop — a different flavor of compute: the Function App.
[600ms]
[calm] It hosts small pieces of code, called functions, that run only when an event fires. There are no servers for you to manage, and you pay only while your code is actually running.
[700ms]
[amused] Serverless doesn't mean there are no servers — it means Azure runs and scales them for you, invisibly.

## Step 2 · triggers

[confident] Every function starts with exactly one trigger — the event that runs it.
[600ms]
[calm] That might be an HTTP request, a timer, a queue message, or a new file uploaded to storage.
[500ms]
[calm] Then optional bindings connect the function to data, as input or output — a database, storage, a message queue.
[700ms]
[impressed] Bindings are declarative: you describe the connection, and the runtime wires it up — no glue code.

## Step 3 · scaling

[confident] Here's the real magic of serverless. A scale controller watches how fast events are arriving.
[600ms]
[calm] As load rises, it adds instances; as things quiet down, it removes them — all the way down to zero.
[700ms]
[impressed] On Consumption and Flex Consumption, an idle app costs nothing. No events, no instances, no bill.

## Step 4 · plans

[confident] Functions give you a few hosting plans, so you can match the plan to the workload.
[600ms]
[calm] Flex Consumption is the recommended serverless choice — fast scaling, virtual-network support, pay-as-you-go. Premium removes cold starts with pre-warmed instances. Dedicated reuses an App Service Plan for predictable cost.
[700ms]
[encouraging] Not sure where to start? Begin with Flex Consumption, and adjust later.

## Step 5 · compare

[confident] So when do you pick Functions over an App Service?
[600ms]
[calm] Reach for Functions when the work is short, event-driven, and bursty — and can scale to zero when idle.
[500ms]
[calm] Reach for App Service when you run a continuous web app or API that's always on.
[700ms]
[reassuring] And they share the same platform — you can even run both in one resource group and wire them together.

## Step 6 · recap

[proud] That completes the picture: triggers start your code, bindings connect it to data, event-driven scaling sizes it from zero to thousands, and Flex Consumption keeps it cheap.
[700ms]
[encouraging] Deploy a function, point a trigger at it, and let Azure handle the servers and the scale. That's the Azure PaaS Compute journey — nicely done.
