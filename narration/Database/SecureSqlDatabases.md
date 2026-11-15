# Narrator Script — Database · Secure Azure SQL: Network, Identity, Auditing and Defender

**Source animation:** [SecureSqlDatabases.html](../../journeys/Database/SecureSqlDatabases.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/network-access-controls-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/private-endpoint-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/authentication-azure-ad-only-authentication>
- <https://learn.microsoft.com/azure/azure-sql/database/auditing-overview>

---

## Step 1 · The orders database is open to the internet

[calm] Contoso's orders database runs in Azure SQL Database. A new logical server denies all connections until you allow some.
[600ms]
[concerned] Here, someone widened the firewall with one rule that allows every address. A SQL password is all that stands between the data and the internet.
[600ms]
[determined] Let's close that door, one layer at a time.

## Step 2 · Firewall rules and virtual network rules

[calm] The server firewall admits only the addresses and subnets you list. These rules guard the public endpoint.
[600ms]
[serious] Be careful with Allow Azure services. It's much wider than most teams intend, because it admits traffic from other customers' resources too.
[600ms]
[confident] A virtual network rule needs a service endpoint on the subnet and covers one region. Changes to IP rules can take a few minutes.

## Step 3 · A private endpoint removes the public path

[curious] A private endpoint gives the server a private IP address inside Contoso's virtual network.
[600ms]
[serious] But adding one doesn't close the public path. You must also deny public network access.
[600ms]
[reassuring] Always connect with the server's fully qualified name. Signing in to the private address or the privatelink name fails by design.

## Step 4 · Entra-only sign-in and a managed identity

[confident] Microsoft Entra-only authentication turns SQL passwords off for the whole server.
[600ms]
[calm] The app signs in with its managed identity and a token, so no secret sits in its settings.
[600ms]
[serious] Set a Microsoft Entra admin first. And remember, SQL Security Manager can switch Entra-only on or off, but SQL Server Contributor can't.

## Step 5 · TDE, Always Encrypted and customer keys

[calm] Transparent data encryption protects data files, logs and backups at rest.
[600ms]
[curious] Always Encrypted goes further. The client driver encrypts chosen columns, so the database engine never holds the keys.
[600ms]
[serious] Two cautions. If the server loses access to a customer-managed key, the database becomes inaccessible. And queries on encrypted columns are limited.

## Step 6 · Auditing: what, where and for which scope

[calm] Auditing tracks database events and writes them to a log you choose. That can be a storage account, a Log Analytics workspace or Event Hubs.
[600ms]
[confident] Pick the scope and the event categories first, so you record what matters without drowning in noise.
[600ms]
[reflective] Auditing favors availability, so under very heavy load some of the events may be missed. Failed Entra sign-ins show up in Entra, not here.

## Step 7 · Read an audit record: who ran what

[curious] Each audit record answers a few plain questions. Who did it? What did they run? Where, and when?
[600ms]
[calm] This is one record from Contoso's orders database. Follow the colors from each field to the question it answers.
[600ms]
[serious] A statement is stored as text, so sensitive values typed into it can end up in the log. Limit who can read audit logs.

## Step 8 · SQL Database vs SQL Managed Instance

[calm] Both are Azure SQL, but their settings live in different places. Know where each control is configured, and which defaults differ.
[600ms]
[serious] The SQL Database network article doesn't apply to Managed Instance.
[600ms]
[confident] Managed Instance auditing is SQL Server Audit, so Event Hubs and Azure Monitor logs use a different setup from SQL Database.

## Step 9 · Defender for Databases: assess and detect

[confident] The Defender for Azure SQL Databases plan does two jobs. Vulnerability assessment scans for weak settings.
[600ms]
[curious] Threat detection watches for attacks while the database runs.
[600ms]
[reassuring] Enable the plan once on a subscription, and every supported resource in it is protected, including ones created later.

## Step 10 · An alert end to end: SQL injection

[curious] A search box passes text straight into a SQL statement. That's the weakness.
[600ms]
[concerned] Defender first warns about a faulty statement as a possible vulnerability, at medium severity. Then it reports the exploit as potential SQL injection, at high severity.
[600ms]
[determined] The team investigates, finds the unsafe code, and fixes it.

## Step 11 · Which control answers which threat?

[excited] Eight threats, five controls. Watch each threat find its main control.
[600ms]
[encouraging] Then select any threat to see why that control is the answer.
[600ms]
[reflective] Real systems layer controls, so a threat can have more than one answer. Each threat here is matched to its main one.

## Step 12 · Recap: close, prove, encrypt, record, detect

[calm] Five controls protect the orders database. Close the network door, prove who's signing in, and encrypt the data.
[600ms]
[confident] Then record what happens, and detect attacks as they begin. Each control answers a different threat.
[600ms]
[proud] The S C five hundred study guide lists these under implementing security for databases.
