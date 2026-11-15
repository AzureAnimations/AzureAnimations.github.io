# Narrator Script — Azure Storage · Level up · Move & Optimize

**Source animation:** `static/v2/Storage/StorageMoveOptimize.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] You're storing terabytes of blobs — a little of it hot, most of it slowly aging.
[600ms]
[calm] So let's move and optimize: put each blob in the right place, and pay the right price for it.
[700ms]
[reassuring] A few built-in tools do all the heavy lifting — for cost, for resilience, and for insight.

## Step 2 · tiers

[confident] It starts with access tiers. Blob storage prices data by how often you actually read it.
[600ms]
[calm] Hot is for data you touch constantly. Cool is cheaper to store but expects at least thirty days. Cold goes further, ninety days. And Archive is the cheapest of all — offline, for data you rarely need.
[700ms]
[serious] The trade is simple: the cooler the tier, the less you pay to store, but the more you pay — and wait — to read.

## Step 3 · lifecycle

[confident] You won't move all this by hand. Lifecycle rules do it for you.
[600ms]
[calm] A lifecycle policy is a set of rules — move a blob to Cool after thirty days, to Archive after ninety, delete it after a year — driven by age or by last access time.
[700ms]
[reassuring] Set it once, and Azure quietly right-sizes your storage every day. Just give a new policy up to a day to take effect.

## Step 4 · replication

[confident] Now, keeping a copy elsewhere. Object replication asynchronously copies block blobs from a source account to a destination account.
[600ms]
[calm] Think a write-heavy region replicating to a read region, or a second region for resilience.
[700ms]
[serious] One requirement to remember — it needs blob versioning turned on, on both the source and the destination.

## Step 5 · azcopy

[confident] Sometimes you just need to move a lot of data, fast. That's AzCopy.
[600ms]
[calm] It's the command-line tool built for high-throughput transfers — uploads, downloads, and account-to-account copies.
[700ms]
[impressed] And for server-to-server copies, AzCopy moves the data directly between accounts, so it never has to travel through your machine.

## Step 6 · inventory

[confident] Before you optimize, it helps to know exactly what you have. Blob inventory tells you.
[600ms]
[calm] It's a scheduled report — daily or weekly — listing your blobs and their properties: size, tier, last modified, and more.
[700ms]
[reassuring] It writes out CSV or Parquet files you can analyze, so cost reviews and governance run on real numbers.

## Step 7 · recap

[proud] There's the whole picture: right-size cost with access tiers, automate it with lifecycle rules, replicate for resilience, move bulk data with AzCopy, and know what you have with inventory.
[700ms]
[encouraging] Tier for cost, replicate for safety, and let policy keep it all tidy — at any scale.

## Step 8 · spec

[confident] A little deeper. Four access tiers, priced by how often you read: Hot, Cool, Cold, and Archive.
[600ms]
[calm] Each cooler tier expects a minimum stay — thirty days for Cool, ninety for Cold, and longer for Archive — and Archive is offline, so reading means rehydrating first.
[700ms]
[reassuring] And object replication, once more, needs blob versioning on both accounts. Get those right, and cost takes care of itself.
