# Narrator Script - Azure Storage Basics

**Source animation:** journeys/Fundamentals/AzureStorageBasics.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-storage-services/ ; https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview ; https://learn.microsoft.com/azure/storage/common/storage-redundancy -->

## Step 1 · Where should the data live?

[calm] The shop has product photos, shared warehouse documents, and order-related work waiting to be processed. All are data, but Contoso uses them in different ways.
[600ms]
[confident] Choosing storage starts with those access patterns. The right home for an image isn't necessarily the right home for a shared file or a work message.

## Step 2 · Start with a storage account

[calm] A storage account provides shared settings for Azure Storage, including account type and redundancy choices. Contoso starts with a Standard general-purpose account for its general storage needs.
[600ms]
[confident] Premium account types target particular high-performance services. They aren't simply a universal upgrade that makes every kind of storage faster.

## Step 3 · Pick the service per kind of data

[calm] Product photos fit Blob Storage, which stores objects such as images and documents. Warehouse staff use Azure Files when they need shared files they can open through familiar file-sharing protocols.
[600ms]
[confident] Both hold data, but the way applications and people access that data determines which service fits.

## Step 4 · Separate work from records

[calm] Queue Storage holds messages describing work that a worker can process later. Table Storage holds simple records organized by keys, useful when that data model fits the task.
[600ms]
[confident] Contoso keeps its relational order database for the order records that need it. Queues and Tables aren't drop-in replacements for that database.

## Step 5 · Plan the move

[calm] Before moving data, Contoso needs to understand its existing systems and the size of the job. Azure Migrate helps assess and plan the migration.
[600ms]
[confident] For a large transfer where offline movement makes sense, Azure Data Box is an option. Assessment and data transport solve different parts of the move.

## Step 6 · Move and synchronize files

[calm] Contoso chooses the tool by the task. AzCopy suits scripted transfers; Storage Explorer provides a graphical way to work with storage; Azure File Sync keeps Windows Server file shares synchronized with Azure Files.
[600ms]
[confident] Copying data once and maintaining an ongoing synchronized share are different needs.

## Step 7 · Match the tier to how often you read

[calm] Customers need product images immediately. Hot, Cool, and Cold are online blob tiers with different storage and access costs; Archive keeps data offline until it is rehydrated into an online tier.
[600ms]
[confident] Choose by access frequency and retrieval needs. Early deletion can also incur charges; low storage cost isn't the whole bill.

## Step 8 · Decide how many copies to keep

[calm] Local redundancy keeps copies locally; zone redundancy spreads copies across zones. Geo-redundant options add a copy in another region to either arrangement.
[600ms]
[confident] Regional replication is asynchronous, so the latest changes may not yet be there. Redundancy helps with infrastructure failures, but it doesn't replace a backup and recovery plan.

## Step 9 · Storage Basics - All in One

[calm] Contoso matches photos to Blobs, shared documents to Files, waiting work to Queues, and simple keyed records to Tables. Account type, access tier, and redundancy must work together for the chosen service.
[600ms]
[confident] The data now has suitable homes. Next, decide who may access the shop's resources and what they may do.