# Narrator Script — Storage · Files and Tables: Which Service?

**Source animation:** [FilesAndTables.html](../../journeys/Storage/FilesAndTables.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/storage/files/storage-files-introduction>
- <https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction>
- <https://learn.microsoft.com/azure/storage/tables/table-storage-overview>
- <https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-introduction>

---

## Step 1 · Three needs, one question

[calm] Contoso wants a file share, a cheap NoSQL table and an enterprise NAS in Azure, all reachable from its offices.
[600ms]
[curious] Which service fits each need, and how does each one connect?
[600ms]
[confident] Four services answer it: Azure Files, Azure File Sync, Table storage and Azure NetApp Files. Contoso is fictional.

## Step 2 · Four services, one map

[calm] Azure Files and Table storage both live inside a storage account.
[600ms]
[confident] Azure File Sync adds a Windows Server cache in front of Azure Files, and Azure NetApp Files is its own enterprise service.
[600ms]
[reflective] Blob storage is in the same family, but it stores unstructured objects, so it's a different shape.

## Step 3 · Azure Files: a managed share

[calm] Azure Files is a fully managed file share that lives in a storage account.
[600ms]
[confident] Mount it at the same time from cloud and on-premises clients on Windows, Linux or macOS, with no extra software, no hardware and no operating system to patch.
[600ms]
[reassuring] Protect it with read-only share snapshots, or let Azure Backup schedule them and handle retention.

## Step 4 · SMB or NFS, SSD or HDD

[curious] Two choices shape every share. First, one protocol per share: SMB for Windows-style access, NFS for Linux.
[600ms]
[calm] Second, a media tier: SSD for low latency, or HDD for cost-effective general use. NFS shares are SSD only.
[600ms]
[serious] A share can't speak both protocols, and it can't change tier directly. You create a new share and copy the data.

## Step 5 · Who gets in: identity-based access

[calm] A lift-and-shift keeps its Windows ACLs. Users sign in with the identity they already have.
[600ms]
[confident] Azure Files checks the Kerberos ticket at the share, and again at each file and folder. It receives the ticket, never the user's password.
[600ms]
[serious] Choose one identity source per storage account: AD DS, Entra Domain Services, or Entra Kerberos. This works for SMB shares only, and the account key isn't recommended.

## Step 6 · Reaching it from on-premises

[calm] For SMB from on-premises, you need a VPN or ExpressRoute link into your Azure network.
[600ms]
[confident] Azure Files is then exposed through a private endpoint, on a private IP address.
[600ms]
[curious] A public endpoint exists too, for SMB three and later only. NFS is never reachable from the internet, and a File Sync cache can give a branch fast local access.

## Step 7 · Azure File Sync: a cache on your server

[curious] To build the cache, deploy a Storage Sync Service, then install the agent on a Windows Server and register it.
[600ms]
[calm] A sync group links one cloud endpoint, an Azure file share, with one or more server endpoints, each a folder on a server.
[600ms]
[serious] A server registers with one service at a time, and only SMB Azure file shares can sync.

## Step 8 · Cloud tiering: hot local, cool in Azure

[calm] Cloud tiering keeps hot, often-used files on the server.
[600ms]
[curious] Cool files keep their names and folders locally, while the content lives in the Azure file share and comes back when someone opens it.
[600ms]
[confident] Two policies decide when to tier: the volume free space policy, and the date policy for files not accessed for a set number of days.

## Step 9 · Multi-site sync and quick recovery

[calm] Every server syncs through the Azure file share, so each office sees the same files without server-to-server links.
[600ms]
[confident] Add as many server caches as you need, around the world.
[600ms]
[reassuring] If a server fails, provision a new Windows Server, install the agent and register it. The namespace downloads from Azure and files recall on access, with no local backup needed.

## Step 10 · Table storage: entities and keys

[calm] Table storage is a schemaless NoSQL key-attribute store, living in a table inside your storage account.
[600ms]
[confident] Each entity is a row of properties, found by its PartitionKey and RowKey together. Entities in one table can even have different properties.
[600ms]
[curious] Entities with the same PartitionKey query faster and can be inserted or updated in atomic operations.

## Step 11 · Query by key, then outgrow it

[confident] Always include the PartitionKey. A point query, with PartitionKey and RowKey, is the fastest lookup there is.
[600ms]
[serious] A query without the PartitionKey scans every partition, and that's the slowest.
[600ms]
[optimistic] Results come back sorted by those keys. And if you outgrow Table storage, Azure Cosmos DB for Table keeps the same SDKs and adds global distribution and automatic secondary indexes.

## Step 12 · Azure NetApp Files: enterprise NAS

[calm] Azure NetApp Files is an enterprise-class file service. A NetApp account holds capacity pools, and each pool holds volumes.
[600ms]
[confident] The service level is set on the pool, and volumes serve NFS, SMB or both.
[600ms]
[curious] Volumes sit in a delegated subnet of your virtual network, so on-premises clients reach them over ExpressRoute or a VPN.

## Step 13 · Which one do I pick?

[curious] Pick the need that sounds like yours, and the matching service lights up in the comparison table.
[600ms]
[confident] Two needs land on Azure NetApp Files: Linux high performance computing, and SAP or Oracle. Both want an enterprise NAS.
[600ms]
[reflective] For lighter Linux jobs, an Azure Files NFS share on SSD may be enough for you.

## Step 14 · All in one

[calm] Match the need to the service, then choose how it reaches on-premises. Four services, one question.
[600ms]
[confident] A Z three oh five asks you to recommend storage for semi-structured and unstructured data, and to balance features, performance and cost.
[600ms]
[proud] A Z one oh four covers creating a file share, snapshots, soft delete, storage tiers and identity-based access for Azure Files.
