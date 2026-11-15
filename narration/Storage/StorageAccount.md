# Narrator Script — Azure Storage · Store it (Storage Account) · EN

**Source animation:** `static/v2/Storage/StorageAccount.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

<!-- Review sources: https://learn.microsoft.com/azure/storage/common/storage-account-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-smart -->

## Step 1 · Overview

[warm] Let's start with the foundation of Azure Storage — the storage account.
[600ms]
[calm] It gives Contoso a unique namespace for its storage data. A Standard general-purpose version two account can hold blobs, files, queues, and tables.
[600ms]
[confident] Each service has its own endpoint. For example, contoso dot blob dot core dot windows dot net is the Blob endpoint, not the address for every service. Choose the account type that supports your workload.

## Step 2 · Standard vs Premium

[confident] First, compare the workload's performance needs and supported services.
[600ms]
[calm] Standard general-purpose version two is a common starting point. Premium uses solid-state storage for workloads that need consistently low latency or high transaction rates.
[600ms]
[reassuring] Premium accounts specialize in block blobs, page blobs, or file shares; they do not combine all four services. Compare features and costs as well as speed before choosing.

## Step 3 · Four Data Services

[confident] Azure Storage offers four services for different kinds of data.
[600ms]
[calm] Blob stores images, video, backups, and documents. Files provides managed file shares; N-F-S shares require SSD storage. Queue passes asynchronous messages between app components. Table stores structured NoSQL data without a fixed schema.
[600ms]
[impressed] Match the service to the data, then check that the account type supports the features you need.

## Step 4 · Three Kinds of Blob

[intrigued] Blob storage itself comes in three types, each tuned for a different write pattern.
[600ms]
[calm] Block blobs hold text and binary data — the most common by far. Append blobs are optimized for adding to the end, which is perfect for logs. And page blobs support random read and write, so they back Azure V-M disks.
[600ms]
[reassuring] Rule of thumb: uploading a file or image? Block. Streaming log lines? Append. Backing a virtual disk? Page.

## Step 5 · Access Tiers

[confident] For block blobs, access tiers balance storage and retrieval costs. Their minimum durations are billing rules, not deletion locks.
[600ms]
[calm] In a Standard general-purpose version two account, Hot has no minimum duration charge. Cool has thirty days, Cold ninety, and Archive a hundred and eighty. Hot, Cool, and Cold remain online with millisecond access. Archive needs rehydration before reading, which can take hours.
[600ms]
[reassuring] Deleting or moving data early can incur a charge. On supported zone-redundant accounts, Smart automatically manages eligible block blobs across Hot, Cool, and Cold, without tiering rules. It does not use Archive, and its billing is different.

## Step 6 · Recap

[warm] So there's the whole storage account, in one view.
[600ms]
[calm] Performance — Standard or Premium. Four services — Blob, File, Queue, Table. Three blob types — Block, Append, Page. And five access tiers, from Hot to Archive, plus Smart.
[600ms]
[encouraging] Start with the workload: required performance, data type, and access frequency. These choices affect features and cost. Go deeper on the free Microsoft Learn path, Store data in Azure.
