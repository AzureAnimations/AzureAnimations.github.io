# Narrator Script — Integration · Failure & Recovery: when a message fails

**Source animation:** [FailureRecovery.html](../../journeys/Integration/FailureRecovery.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-message-loss-and-duplicates>

---

## Step 1 · The broker can’t see inside your handler

[calm] It's Black Friday, two minutes to midnight. A function charges a customer's card, then crashes before it can say done.
[600ms]
[serious] To the broker, silence looks exactly like failure, so it delivers the message again.
[600ms]
[confident] That's at-least-once delivery. It's a guarantee, not a bug, so your handler has to cope with a repeat.

## Step 2 · Peek-lock: borrow the message, don’t take it

[curious] In peek-lock mode, the receiver borrows a message under an exclusive lock, so no other consumer can see it.
[600ms]
[confident] Then it settles the message one of four ways: complete, abandon, defer or dead-letter. Or the lock simply runs out.
[600ms]
[concerned] Receive-and-delete is different. It settles the moment the broker sends, so a failed transfer loses the message. Use it only for low-value data.

## Step 3 · Every failed lap adds one

[calm] Each time a delivery ends in an abandon or an expired lock, the delivery count goes up by one.
[600ms]
[serious] When it reaches the maximum delivery count, Service Bus moves the message to the dead-letter queue. The default is ten.
[600ms]
[reassuring] Lock duration defaults to one minute and tops out at five, so set it above your normal processing time, or renew it.

## Step 4 · Break it and watch what happens

[curious] Now you try it. Switch on a failure, then send the order. This demo queue uses a maximum delivery count of five to keep things short.
[600ms]
[intrigued] Watch the message retry again and again, until it lands in the dead-letter queue.
[600ms]
[confident] Resending without fixing anything just sends it around again. And a bad payload isn't worth retrying, so your code can dead-letter it at once with its own reason.

## Step 5 · Dead-letter queue: a parking lot with labels

[calm] Every queue and subscription has a dead-letter sub-queue. Messages wait there until you remove them. There's no automatic cleanup.
[600ms]
[confident] Each one carries a reason you can read. You receive from it with a receiver pointed at the dead-letter sub-queue.
[600ms]
[reassuring] When you set your own reason, include the exception type. It makes triage far easier.

## Step 6 · Recover without losing or duplicating

[calm] The order matters. Read the reason, fix the cause, then send a fresh copy to the main queue.
[600ms]
[confident] Only complete the dead-letter copy after that send worked. If a crash happens in between, you get a duplicate, never a loss.
[600ms]
[serious] A resubmit is a brand-new message, so let your handler check first, then act, and shrug off any repeat.

## Step 7 · Two helpers: duplicate detection and sessions

[curious] Two features help. Duplicate detection stops a resent message at the door when it has the same message ID inside the window.
[600ms]
[confident] It needs the Standard or Premium tier, and the window defaults to ten minutes.
[600ms]
[calm] Sessions keep related messages together, in order, with one receiver. Once they're on, every message needs a session ID.

## Step 8 · Event Grid retries on a schedule

[calm] Event Grid delivers each event at least once, and waits thirty seconds for an answer.
[600ms]
[confident] If none comes, it retries with a backoff, until your retry policy says stop: up to thirty attempts, or a time to live of up to a day.
[600ms]
[concerned] Order isn't guaranteed, and duplicates can still arrive, so the same idempotent habit applies here too.

## Step 9 · Publish your own events

[curious] A custom topic is an endpoint your app posts events to. You can authenticate with the topic's access key.
[600ms]
[confident] Better, use a Microsoft Entra identity that has the EventGrid Data Sender role, so there are no keys in code.
[600ms]
[calm] Topics accept CloudEvents or the Event Grid schema. CloudEvents is the recommended format.

## Step 10 · Who retries? The service that delivers

[curious] So who owns the retries? Not your function. A Service Bus trigger adds none of its own.
[600ms]
[confident] The runtime completes the message when your function succeeds, and abandons it when it throws. Service Bus does the counting.
[600ms]
[reassuring] Likewise, an Event Grid trigger's retries come from the event subscription. Function retry policies cover other triggers.

## Step 11 · Tune it, connect it, ship it safely

[calm] A few host dot json settings shape how messages are pulled: concurrency, auto-complete and lock renewal.
[600ms]
[confident] Use a managed identity instead of a secret. A connection string still works, but Learn recommends identity wherever you can.
[600ms]
[serious] And release through a staging slot. Mark event source settings as slot settings before you swap, because a swap can cut off running functions.

## Step 12 · See failures before customers do

[curious] Failures leave numbers behind. For Service Bus, watch dead-lettered messages, abandoned messages and server errors.
[600ms]
[confident] For Event Grid, watch delivery failed, dead lettered and dropped events.
[600ms]
[reassuring] Then let an alert rule page a human. A fired alert runs an action group, such as email, text or a function.

## Step 13 · Failure and recovery, in one view

[calm] A failed message is retried by the service that delivers it, parked with a reason, and replayed safely by an idempotent handler.
[600ms]
[confident] This is part of the A I two hundred exam, in the domain worth twenty to twenty-five percent. The study guide names dead-letter handling, and Event Grid filters, custom events and retries.
[600ms]
[proud] Remember the loop: retry, park, fix, resubmit, and repeat safely.
