# Narrator Script — Azure Integration & Messaging · Hub Tour

**Source animation:** `journeys/Integration/index.html`

**Script status:** Authored voiceover.

Seven spoken blocks — one per stop of the narrated hub tour. Stops 2 to 6 mirror the five episode cards, so the voice and the screen say the same thing.

---

## Step 1 · Welcome

[calm] Integration means getting separate programs to work together. A producer sends work; a consumer processes it; a broker carries it between them. Follow Contoso through five episodes: buffer tasks, coordinate orders, record measurements, react to changes, then connect the handlers with Functions. The numbers in the story are illustrative, not performance promises.

## Step 2 · The Black Friday Bottleneck

[calm] Episode one. The Black Friday Bottleneck.
[400ms]
[serious] Every Buy Now click waits for the inventory database, and the waiting is what takes the site down. You will put a Storage queue in the middle, so the shopper gets a receipt while the work happens behind them.

## Step 3 · The VIP Transaction Disaster

[calm] Episode two: an order and its cancellation are processed in the wrong order. Service Bus sessions coordinate related messages. Peek-lock separates receiving from completing, and the dead-letter queue isolates failures for repair. Ordering does not prevent every duplicate business effect: the worker still needs idempotency.

## Step 4 · The Sensor Tsunami

[calm] Episode three. The Sensor Tsunami.
[400ms]
[curious] A hundred thousand sensor readings a second arrive, and even Service Bus is the wrong tool. Event Hubs stops delivering and starts recording, so every team can read the same stream at its own speed.

## Step 5 · The Reactive Smart Store

[calm] Episode four. The Reactive Smart Store.
[400ms]
[optimistic] Three services spend all day asking a storage account whether a file has arrived yet. Event Grid lets the event announce itself, so the right handler wakes up the moment something changes.

## Step 6 · The Serverless Glue

[calm] Episode five. The Serverless Glue.
[400ms]
[confident] Four brokers still need code between them. Azure Functions supplies the trigger, the bindings and the scaling, so you write the decision and nothing else.

## Step 7 · Keep Going on Microsoft Learn

[reflective] Every number and limit in this journey comes from Microsoft's own documentation.
[500ms]
[encouraging] When you are ready to build these pipelines for real, the learning paths below take you through the same services with guided, hands-on exercises. Pick an episode, and let's begin.
