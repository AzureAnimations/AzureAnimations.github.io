# Narrator Script — Journey 03 · Managed Identity

**Source animation:** `static/v2/Security/ManagedIdentity.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Where we start: an app that needs a database

[calm] Let's start where most apps do.
[600ms]
[confident] Contoso's backend runs inside an Azure VM and needs to read an Azure SQL Database.
[600ms]
[calm] Before it can connect, a database administrator issues it a login — a username and password — and grants that login permission on the database.
[600ms]
[reflective] It's the classic setup: the app proves who it is with a credential someone hands it.

## Step 2 · That login ships inside the app — in plain text

[concerned] But watch where that login ends up.
[600ms]
[serious] The username and password get stored in the app and deployed with it — often as plain text in a dot-env or config file.
[600ms]
[concerned] This shared service account is what we call a Functional ID, and it simply does not scale.
[800ms]
[serious] Anyone who can read the file has the database login — and every new app needs its own.

## Step 3 · Managed identity solves it — a role, not a password

[confident] Managed identity solves this — with a role, not a password.
[600ms]
[calm] Same VM, same Contoso app, same database — but now the app has a managed identity, its own built-in identity in Microsoft Entra ID.
[600ms]
[impressed] Instead of issuing a username and password, the administrator opens the database's Access control and assigns that identity only the role it needs.
[600ms]
[reassuring] No credential is ever created or stored — just identity, plus least-privilege access.

## Step 4 · Turn it on — enable the managed identity

[confident] And turning it on is genuinely simple.
[600ms]
[calm] In the Azure Portal, open the resource, go to Identity, switch the system-assigned status to On, and Save — Azure creates the identity in Microsoft Entra ID.
[600ms]
[amused] Prefer the command line? One Azure CLI line does exactly the same.
[600ms]
[reassuring] Most Azure compute and app services support it — virtual machines, App Service, Functions, Container Apps, AKS, and many more.

## Step 5 · The catch — one identity per resource

[concerned] There's a catch, though, once you grow.
[600ms]
[calm] Contoso's backend runs on many hosts — a VM, App Service, Functions, Container Apps, AKS.
[600ms]
[serious] With a system-assigned identity, the team enables one on every resource, and the administrator grants each one access separately.
[800ms]
[concerned] Add more machines and it all repeats — a lot to maintain for what is really one app.

## Step 6 · One identity, shared — user-assigned

[confident] So share one identity instead — user-assigned.
[600ms]
[calm] Contoso creates a single user-assigned managed identity and attaches it to every host — the VM, App Service, Functions, Container Apps, and AKS all reference the same one.
[600ms]
[impressed] The administrator grants that one identity access just once. Add another machine, and you simply attach the same identity — no new grant.
[600ms]
[reassuring] It's its own Azure resource with a stable object ID, living independently of any single host.

## Step 7 · Recap — System-assigned vs User-assigned

[reflective] Let's recap the two flavors of one secretless idea.
[600ms]
[confident] Both let a workload authenticate with a Microsoft Entra token instead of a secret, then get a least-privilege role.
[600ms]
[calm] They differ only in how they're created, their lifecycle, and whether they can be shared.
[600ms]
[reassuring] System-assigned is simplest for a single resource; user-assigned is the recommended, reusable choice when several resources share one identity.
