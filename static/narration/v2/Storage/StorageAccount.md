# Narrator Script — Azure Storage · Store it (Storage Account) · EN

**Source animation:** `static/v2/Storage/StorageAccount.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Overview

[warm] Let's start with the foundation of Azure Storage — the storage account.
[600ms]
[calm] Think of it as one durable home for all of Contoso's cloud data — blobs, files, queues, and tables — under a single namespace and a single bill.
[600ms]
[confident] Everything sits behind one account endpoint, like contoso dot blob dot core dot windows dot net. One account, one bill, many services — pick a performance tier once, then store whatever the workload needs.

## Step 2 · Standard vs Premium

[confident] First, choose how fast the account should be.
[600ms]
[calm] Standard runs on hard drives — cost-effective, general-purpose storage that supports every service and every access tier. Premium runs on solid-state drives, for single-digit-millisecond latency when apps demand it.
[600ms]
[reassuring] Premium comes as a specialized account — block blob, page blob, or file shares — chosen for latency, not raw capacity. So the rule is simple: Premium for speed, Standard for cost.

## Step 3 · Four Data Services

[confident] A Standard account gives you four ways to store data — pick the shape that fits the job.
[600ms]
[calm] Blob is the workhorse for massive unstructured data — images, video, backups, documents. Files gives you managed S-M-B and N-F-S file shares. Queue passes small asynchronous messages between app components. And Table is a schemaless NoSQL key-value store.
[600ms]
[impressed] One account, four services — most workloads lean on Blob, with the other three covering shares, messaging, and NoSQL.

## Step 4 · Three Kinds of Blob

[intrigued] Blob storage itself comes in three types, each tuned for a different write pattern.
[600ms]
[calm] Block blobs hold text and binary data — the most common by far. Append blobs are optimized for adding to the end, which is perfect for logs. And page blobs support random read and write, so they back Azure V-M disks.
[600ms]
[reassuring] Rule of thumb: uploading a file or image? Block. Streaming log lines? Append. Backing a virtual disk? Page.

## Step 5 · Access Tiers

[confident] For block blobs, an access tier trades storage cost against read cost and a minimum retention.
[600ms]
[calm] Hot is for frequent access, with no minimum. Cool is infrequent, at least thirty days. Cold is rarely accessed, at least ninety. And Archive is offline and cheapest — at least a hundred and eighty days, and you rehydrate it to read.
[600ms]
[reassuring] Colder tiers store cheaper but read pricier and slower — and deleting early triggers a charge. Or let the new Smart tier move data across Hot, Cool, and Cold automatically, by real usage, with no lifecycle rules to manage.

## Step 6 · Recap

[warm] So there's the whole storage account, in one view.
[600ms]
[calm] Performance — Standard or Premium. Four services — Blob, File, Queue, Table. Three blob types — Block, Append, Page. And five access tiers, from Hot to Archive, plus Smart.
[600ms]
[encouraging] Always start with the workload: how fast, what shape of data, and how often you'll read it — and the bill follows. Go deeper on the free Microsoft Learn path, Store data in Azure.
