# Narrator Script — Episode 4 · The Reactive Smart Store

**Source animation:** `journeys/Integration/ReactiveSmartStore.html`

**Script status:** Authored voiceover.

Seven spoken blocks — one per step.

---

## Step 1 · Nobody is streaming. Everyone is knocking.

[curious] This one is not a volume problem. It is a politeness problem.
[500ms]
[calm] Suppliers drop a new catalogue into storage a couple of times a day. Three separate services poll that container every thirty seconds, all day, just in case — eight thousand six hundred and forty calls, of which exactly two find anything.
[600ms]
[serious] Polling costs you three times over: the API calls, the compute that makes them, and the minutes of latency between the file landing and anybody noticing.

## Step 2 · Let the event announce itself

[optimistic] So Maya turns on a system topic.
[500ms]
[confident] Storage now emits a Blob Created event the instant the file lands, and Event Grid pushes it to everyone who subscribed — in near real time, with no polling at all. A Function reindexes the catalogue, a webhook wakes the mobile backend, and a Service Bus queue buffers the supplier portal.
[600ms]
[calm] Event Grid is a router, not a queue you own. You never provision throughput. You declare a source, a subscription with filters, and somewhere to deliver.

## Step 3 · A tiny envelope, and rules about who opens it

[calm] An Event Grid event is a notification, not a payload.
[500ms]
[confident] Who, what, where and when — typically a kilobyte or two, in the Cloud Events standard format. The subject tells you which blob, the data carries the url and the size, and that is deliberately all.
[500ms]
[serious] Then each subscription filters on those fields. Filter at the subscription, never inside the handler — a handler that starts up, inspects an event and exits is still a cold start you paid for.

## Step 4 · At least once, and a schedule to prove it

[calm] Event Grid waits thirty seconds for your handler to answer.
[500ms]
[confident] If it does not, the event is retried on a back-off schedule — ten seconds, thirty, a minute, five, and onwards — until it succeeds, or the twenty-four hour time to live expires, or it hits thirty attempts.
[500ms]
[serious] At that point the event is dropped, unless you configured a dead letter container. Dead lettering is opt-in. And "at least once" means your handler will see duplicates one day, so key the work on the event id.

## Step 5 · When the handler cannot be reached, pull instead

[calm] A private consumer can pull events over HTTP from a namespace topic. Receive returns events and lock tokens. Acknowledge completes the work, release makes it available again, and reject handles unprocessable events. MQTT is a separate publish-subscribe capability in the namespace; MQTT clients do not use this HTTP receive API.

## Step 6 · Four services, one question each

[reflective] This is the whole series in one table.
[500ms]
[confident] Ask what the payload actually is. A simple task goes on a Storage queue. A business transaction goes on Service Bus. A stream of measurements goes to Event Hubs. A notification that something changed goes to Event Grid.
[600ms]
[calm] The rule of thumb: a message means someone must act on it. An event means something happened, and interested parties may care. Most real systems use several at once.

## Step 7 · Episode 4: Event Grid is the nervous system

[proud] Contoso Retail has now gone from a monolith that timed out to four decoupled pipelines.
[500ms]
[confident] Buffered work, guaranteed orders, recorded telemetry, and instant reactions. Push routing with five hundred subscriptions per topic, filtering on the envelope, retries with optional dead lettering, and pull delivery for the consumers you cannot reach.
[600ms]
[encouraging] Every one of these services is at least once. The habit that makes all four safe is the same: idempotent handlers, keyed on an id.
