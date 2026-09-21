# Narrator Script — Episode 2 · The VIP Transaction Disaster

**Source animation:** `journeys/Integration/VipTransactionDisaster.html`

**Script status:** Authored voiceover.

Six spoken blocks — one per step.

---

## Step 1 · The cancellation beat the order

[calm] The cancellation arrives after the order, but finishes first. There is no order to cancel yet. The order then commits anyway. This is an ordering race, not proof of a double charge. Group related messages into a session and still make repeated deliveries safe.

## Step 2 · What a simple queue does not give you

[calm] Queue Storage is excellent at buffering independent work. Money is not independent work.
[500ms]
[confident] Money needs ordering, locks you can extend, and somewhere safe to put a broken message. Service Bus brings first in first out within a session, messages up to two hundred and fifty-six kilobytes, a built-in dead letter queue, duplicate detection, transactions, and topics with two thousand subscriptions.
[600ms]
[reflective] Swap in Service Bus when a single message is worth more than the compute that processes it. The premium is the reliability, not the throughput.

## Step 3 · Sessions put the VIP back in order

[optimistic] The fix is one property. Stamp every message with a session id — here, the customer id.
[500ms]
[confident] Service Bus then hands that entire session to exactly one receiver, in the order it arrived. Order eight eight zero one is processed first, its cancellation second, and a different customer's session still runs in parallel on another receiver.
[600ms]
[calm] A session is a lock on a conversation, not on a message. One receiver owns that customer until it lets go.

## Step 4 · Peek-lock, and a cell for bad messages

[calm] Peek-lock means receiving without deleting. Complete removes a successfully processed message. Abandon releases the lock immediately; after a crash, redelivery may wait for the lock to expire. Repeated failures can send the message to the dead-letter queue. Inspect, repair and resubmit it; recovery is not automatic.

## Step 5 · One order, three teams, zero coupling

[curious] Billing, shipping and loyalty all need the same order. So publish it once.
[500ms]
[confident] A topic fans that one message out to independent subscriptions, each with its own filter, its own backlog and its own dead letter queue. Billing takes everything, shipping filters on physical goods, loyalty on orders over a hundred.
[600ms]
[optimistic] Because subscriptions are independent queues, loyalty can be down for an hour and its messages simply wait. Billing never notices, and nobody has to change the publisher.

## Step 6 · Episode 2: Service Bus is the safe lane

[calm] Choose Service Bus for business messages that need coordination. Sessions preserve ordering within a session; peek-lock separates receiving from completing. Dead-letter queues isolate failed messages for repair, and topics give subscribers independent copies. None of these removes the need for idempotent handlers: a retry must not charge the customer again.

