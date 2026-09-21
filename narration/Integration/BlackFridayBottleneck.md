# Narrator Script — Episode 1 · The Black Friday Bottleneck

**Source animation:** `journeys/Integration/BlackFridayBottleneck.html`

**Script status:** Authored voiceover.

Six spoken blocks — one per step.

---

## Step 1 · Black Friday breaks the checkout

[serious] It is two minutes to midnight on Black Friday, and Contoso Retail's checkout has stopped answering.
[500ms]
[calm] Every Buy Now click calls the inventory database and then waits for it. With twelve thousand four hundred shoppers a minute, that waiting is what kills the site. Two hundred worker threads, none of them free, and shoppers getting a gateway timeout instead of a receipt.
[600ms]
[curious] Nothing here is broken code. It is a coupling problem.

## Step 2 · 99% of a checkout is spent waiting

[calm] The diagram shows nine thousand one hundred milliseconds waiting out of nine thousand one hundred and ninety in total: about ninety-nine percent. Waiting ties up worker threads. With two hundred threads and roughly nine seconds per request, capacity is only about thirteen hundred requests a minute. These are illustrative numbers, not an Azure service limit.

## Step 3 · Maya cuts the wire

[optimistic] So Maya asks a better question. Does the checkout actually need the database to answer?
[600ms]
[confident] It does not. It needs a promise that the order will be processed. And that promise is a message on a queue.
[500ms]
[calm] Decoupling is not really about speed. It is about who has to be healthy at the same moment. After the cut, only the queue has to be up when the shopper clicks.

## Step 4 · Meet the Azure Storage queue

[calm] A queue is a durable list of small messages in your storage account, and four behaviours are all you need to understand it.
[400ms]
[confident] A message holds up to sixty-four kilobytes. Getting a message hides it from everyone else for the visibility timeout — thirty seconds by default. Deleting it means the work succeeded. And a delivery counter catches the messages that keep failing.
[500ms]
[serious] Delivery is at least once, and the order is usually, but not always, first in first out. Design the worker to be safe if it sees the same order twice.

## Step 5 · The same night, buffered

[optimistic] Same night. Same twelve thousand four hundred shoppers a minute.
[500ms]
[confident] But now the checkout writes one message and answers in a hundred and twenty milliseconds. The inventory workers drain the backlog at the pace the database can actually sustain, and the database write drops from nine and a half seconds to forty milliseconds.
[600ms]
[calm] The spike did not disappear. It moved. Queue depth is now your load signal — scale on it, alert on it, and let it absorb the peak instead of your customers.

## Step 6 · Episode 1: buffer the work, keep the sale

[confident] A Storage queue is the cheapest and simplest way to stop a slow back end from taking your front end down with it.
[500ms]
[calm] The producer writes one small message and replies immediately. The buffer holds up to five hundred tebibytes and moves two thousand messages a second. The consumer gets, processes, and deletes — and handles the poison messages itself.
[600ms]
[encouraging] Reach for this when the job is simple background work. When you need strict order, transactions, or publish and subscribe, that is episode two.
