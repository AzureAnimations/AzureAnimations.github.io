# Narrator Script — Azure Storage · Protect it (Redundancy) · EN

**Source animation:** `static/v2/Storage/StorageRedundancy.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Overview

[warm] Here's a reassuring fact: Azure Storage always replicates your data. The only question is where the copies live.
[600ms]
[calm] You choose — the same data center, across availability zones, in another region, or with a readable secondary copy. That's six options, along three trade-offs: how many copies, how wide the blast radius, and whether the secondary is readable.
[600ms]
[confident] There are always three synchronous copies in the primary. The next steps animate each option, from local all the way to the most resilient.

## Step 2 · LRS

[confident] Start local — L-R-S, Locally Redundant Storage.
[600ms]
[calm] It keeps three synchronous copies of your data inside a single physical data center, in the region you choose. Every write lands in all three before it's acknowledged, so the copies are always identical.
[600ms]
[calm] It's the lowest-cost option, and it protects against the everyday failures — a bad drive, a dead server, a whole rack going down. Azure can even move or expand the account across zones to balance load.
[600ms]
[reassuring] But all three copies live in one building. So if a disaster hits that data center — a fire, a flood — every replica can be lost. L-R-S gives about eleven nines of durability, and it's a fine fit for easily reconstructable data, or where data-residency rules keep everything in one place.

## Step 3 · ZRS

[confident] Now spread the risk — Z-R-S, Zone-Redundant Storage.
[600ms]
[calm] It writes three synchronous copies across three availability zones in the same region. Each zone is a physically separate data center, with its own power, cooling, and network — so no single building is a single point of failure.
[600ms]
[calm] Because the writes are still synchronous, every copy is current, and you can keep reading and writing even if an entire zone goes offline. That's why Microsoft recommends Z-R-S in the primary region for high-availability apps — and for Data Lake Storage workloads.
[600ms]
[reassuring] It steps you up to about twelve nines of durability. The one thing to remember: Z-R-S still lives in a single region, so it protects against a zone outage — but not against losing the whole region. For that, you go geo.

## Step 4 · GRS and RA-GRS

[confident] To survive an entire region, go geo — G-R-S, Geo-Redundant Storage.
[600ms]
[calm] First, your data is written three times in the primary region using L-R-S. Then Azure copies it asynchronously to a paired secondary region, hundreds of miles away — where it's stored three more times, again with L-R-S. That's six copies in total, and about sixteen nines of durability.
[600ms]
[calm] That secondary region is chosen automatically from your primary, and it can't be changed. Because the copy is asynchronous, there's a small lag — so a sudden loss of the primary could lose the most recent writes that hadn't replicated yet. That gap is called the recovery point objective, or R-P-O, and geo-priority replication keeps it within fifteen minutes for block blobs.
[600ms]
[reassuring] By default, that secondary is for disaster recovery only — your app can't read it. If the primary goes down, you trigger an account failover, and D-N-S repoints to the secondary, which becomes the new primary.
[600ms]
[impressed] Turn on Read Access — R-A-G-R-S — and Azure exposes a read-only secondary endpoint. Now your app can read from the secondary while writes still go only to the primary — perfect for disaster-recovery testing and for spreading read traffic across regions.

## Step 5 · GZRS and RA-GZRS

[confident] Want zone protection AND region protection? Combine them — G-Z-R-S.
[600ms]
[calm] In the primary region it uses Z-R-S — three synchronous copies across three availability zones. Then it asynchronously replicates to the paired secondary region, where the data is stored with L-R-S. So you get the best of both worlds: zone-level high availability at home, and geo-level durability far away.
[600ms]
[calm] That means you can keep reading and writing through a zone outage, and still recover from a full regional disaster. It's also about sixteen nines of durability, and it's what Microsoft recommends for mission-critical apps that need maximum consistency, durability, and availability.
[600ms]
[impressed] Add Read Access — R-A-G-Z-R-S — for a readable secondary, and you've reached the most resilient option Azure Storage offers: zone-redundant primary, readable geo-redundant secondary.
[600ms]
[reassuring] The trade-off, as always, is cost — but for data you truly can't lose, it's the gold standard.

## Step 6 · Summary

[warm] So here are all six options, side by side.
[600ms]
[calm] L-R-S — one data center. Z-R-S — three zones. G-R-S — two regions. R-A-G-R-S — plus a readable secondary. G-Z-R-S — zones plus a paired region. And R-A-G-Z-R-S — the most resilient of all.
[600ms]
[encouraging] Choose by blast radius versus cost: how much failure must your data survive? From a single rack to an entire region, there's a redundancy option for it.
