# Narrator Script — Database · Azure Database for MySQL: Design for Availability and Growth

**Source animation:** [MySqlFlexible.html](../../journeys/Database/MySqlFlexible.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/mysql/flexible-server/overview>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-high-availability>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-read-replicas>
- <https://learn.microsoft.com/azure/mysql/flexible-server/concepts-backup-restore>

---

## Step 1 · Contoso Shop already speaks MySQL

[calm] Contoso Shop is a PHP store that already runs on MySQL.
[600ms]
[serious] Today the team patches it, backs it up, and fails it over by hand, and that work never really ends.
[600ms]
[reassuring] Azure Database for MySQL flexible server runs the same community engine, but as a managed service.

## Step 2 · When is MySQL the right pick?

[curious] So when is MySQL the right choice? Start from the engine your app already speaks.
[600ms]
[confident] If it's built for MySQL, flexible server keeps your drivers, your SQL, and your tools exactly as they are.
[600ms]
[calm] Other kinds of apps point to other services, and the Pick your database page walks through those trade-offs.

## Step 3 · A managed engine with compute apart from storage

[calm] Here's the shape of the service. You choose the MySQL version, the compute, and the storage.
[600ms]
[confident] Server parameters tune the engine. Dynamic ones apply at once, while static ones need a restart.
[600ms]
[serious] One caution: MySQL five point seven is in extended support, which is charged, so plan a major version upgrade. Only InnoDB is supported.

## Step 4 · Three compute tiers, matched to the workload

[curious] Compute comes in three tiers. Burstable is for dev and test servers that sit idle most of the time.
[600ms]
[confident] General Purpose suits most production apps, and Memory-Optimized is for in-memory speed and high concurrency.
[600ms]
[serious] High availability and read replicas need General Purpose or Memory-Optimized, and changing compute restarts the server.

## Step 5 · High availability: a standby that takes over

[calm] High availability adds a passive standby that replays the primary's logs.
[600ms]
[impressed] If the primary fails, the standby takes over, and committed data is kept. Zone-redundant HA even survives a zone outage.
[600ms]
[serious] Choose zone-redundant HA when you create the server. And always connect with the server name, never an IP address.

## Step 6 · Read replicas: scale reads and cover a region

[curious] Read replicas copy the source asynchronously and serve reads, so the source can keep the writes.
[600ms]
[confident] A replica in another region helps with disaster recovery, and you can have up to ten of them.
[600ms]
[serious] But nothing fails over automatically. To switch, you stop replication on a replica and point the app at it.

## Step 7 · Backups and point-in-time restore

[calm] Snapshots plus transaction logs let you restore to any moment inside your retention window.
[600ms]
[confident] A restore builds a brand new server from those backups, so the original stays untouched.
[600ms]
[serious] Remember that after a restore, an HA server comes back without HA, so you'll want to switch it on again.

## Step 8 · Who can reach the server?

[curious] Who gets to reach the server? Pick one door: public access with firewall rules, a private endpoint, or VNet integration.
[600ms]
[confident] Traffic is encrypted with TLS, and sign-in can use Microsoft Entra ID instead of the default MySQL authentication.
[600ms]
[reassuring] Entra sign-in needs a user-assigned managed identity and an Entra admin. Either network door controls access at the server, not per table.

## Step 9 · Grow and patch without rebuilding

[calm] You can grow without rebuilding. Compute scales up or down with a short restart.
[600ms]
[impressed] Storage grows online and can even auto-grow, though it only ever grows and never shrinks.
[600ms]
[reassuring] Patching runs in a maintenance window you choose, and for dev and test you can stop the server to pause compute billing.

## Step 10 · Moving a MySQL database in

[curious] How do you move a MySQL database in? Pick the path by how much downtime the shop can take.
[600ms]
[confident] Azure Database Migration Service can keep syncing while you cut over, and dump and restore is the simplest route.
[600ms]
[serious] Single Server was retired in September twenty twenty-four, so those servers must move. Convert any non-InnoDB tables first, and then start the move.

## Step 11 · Which flexible server design fits the requirement?

[curious] Now try it yourself. Pick the requirement closest to yours.
[600ms]
[intrigued] The matching flexible server settings light up, along with a picture of the design and the catch to watch for.
[600ms]
[reflective] Real designs combine these, like zone-redundant HA, read replicas, and private access for a production store.

## Step 12 · MySQL on Azure: pick it, protect it, grow it

[calm] Let's pull it together. Choose flexible server when the app already speaks MySQL.
[600ms]
[confident] Then design around the requirement: the compute tier, high availability, replicas, backups, and the network door.
[600ms]
[proud] Next up, the PostgreSQL page covers the same flexible server model for a different engine.
