# Narrator Script — Episode 5 · The Serverless Glue

**Source animation:** `journeys/Integration/ServerlessGlue.html`

**Script status:** Authored voiceover.

Seven spoken blocks — one per step.

---

## Step 1 · Four brokers, and a thousand lines of plumbing

[calm] Contoso now has a queue, a bus, a hub and a grid. But look at what is holding them together.
[500ms]
[serious] Every worker still opens its own client, polls for messages, renews locks, retries and logs. The same two hundred lines, written five slightly different ways, running on a machine that stays switched on even when the queue is empty.
[600ms]
[confident] Every line of receive-loop code is a line you own forever. The integration runtime can own it instead — and it has already solved the hard parts.

## Step 2 · Exactly one trigger. Any number of bindings.

[calm] A function has exactly one trigger: the thing that starts it.
[500ms]
[confident] Around it you declare optional input and output bindings that connect it to other services — no SDK code inside the function body at all. A Service Bus queue triggers it, Cosmos DB supplies the customer, and the results go out to a Storage queue and to Event Grid.
[600ms]
[reflective] If you find yourself constructing a client inside a function to read or write another Azure service, check whether a binding already does it for you.

## Step 3 · A trigger for every service in the series

[calm] Every broker you have met has a matching trigger, and each hands you a different shape of work.
[500ms]
[confident] The queue trigger gives you one message, retried until it succeeds. The Service Bus trigger handles peek-lock for you — return cleanly to complete, throw to abandon. The Event Hubs trigger gives you a batch from one partition and checkpoints it. The Event Grid trigger gives you one routed event.
[600ms]
[serious] So the trigger you pick decides your failure behaviour. That is worth knowing before you write the handler.

## Step 4 · Stop shipping secrets to production

[serious] Now, the part that ends up in a screenshot on someone's slide deck.
[500ms]
[calm] A binding can name a connection string — a shared secret, copyable, loggable, hard to rotate, and usually granting far more access than you need. Or it can name an endpoint and let the function app's managed identity authenticate with an Entra ID token at runtime.
[600ms]
[confident] One of those can leak. The other does not exist to steal. Just grant only the verb you use — receiving is not the same permission as sending.

## Step 5 · The backlog drives the instance count

[optimistic] And nobody sizes a cluster for Black Friday any more.
[500ms]
[confident] The scale controller watches queue depth or event lag and adds instances while work is waiting, then takes them away again. At two in the morning you run near zero. When the sale opens and the backlog climbs, instances appear in parallel. When it clears, they go.
[600ms]
[calm] This is the same signal KEDA uses to scale containers. Whether you run Functions or Container Apps, the queue length is the autoscaler's input.

## Step 6 · At least once means expect it twice

[calm] Idempotent means that repeating the same request does not repeat its business effect. Use a stable message or order ID. Commit the result and the processed ID atomically, so a crash cannot leave them disagreeing. For an external payment API, also use its idempotency key. Delivery guarantees alone cannot protect a charge.

## Step 7 · Episode 5: Functions are the wiring

[proud] And that is the Contoso Retail rebuild, end to end.
[500ms]
[calm] The brokers decide what a message means. Functions decide what happens next, with the receive loop, the scaling and the credentials handled for you. One trigger, declarative bindings, a managed identity, and event-driven scale that falls back to zero.
[600ms]
[encouraging] Queue the work, guarantee the order, record the stream, react to the change, and let Functions run the glue. Next journey, the storefront grows an AI agent — and the same integration muscles carry it.
