# Narrator Script — Journey 02 · Azure App Configuration

**Source animation:** `static/v2/Security/AppConfiguration.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Every service must find the others

[confident] Contoso's services all need to find each other.
[600ms]
[calm] The Store Front must know the Order API's URL; Order must reach the backend, the database, and payments.
[600ms]
[concerned] Multiply that by every version and revision, and each service ends up hardcoding the others' endpoints in its own app-settings dot json.
[800ms]
[curious] A new revision means editing and redeploying everything that references it — so where should all these settings really live?

## Step 2 · One store for every setting: App Configuration

[confident] In one store for every setting: Azure App Configuration.
[600ms]
[calm] It's a managed store for all your application settings and feature flags — kept out of code and shared by every service and revision.
[600ms]
[impressed] Twelve-Factor apps keep configuration out of code, and this is exactly that external store.
[600ms]
[reassuring] Set a value once, and every service and version reads it from one place.

## Step 3 · Scattered settings become organized key-values

[confident] Inside, those scattered settings become organized key-values.
[600ms]
[calm] Every endpoint and property becomes a key and a value, with hierarchical names grouped by a colon delimiter.
[600ms]
[impressed] A name like Contoso, colon, Order-API, colon, Backend-URL reads just like a path.
[600ms]
[reassuring] And you can query a whole group at once with a prefix — one clean, searchable namespace.

## Step 4 · One key, many labels — versions & environments

[intrigued] But what about different environments and versions of the same setting?
[800ms]
[confident] That's what labels are for. Give the same key a label to create a variant.
[600ms]
[calm] Contoso keeps the Backend URL once, with a label per environment and version — dev, prod, version two, staging.
[600ms]
[reassuring] Labels are the built-in way to version configuration, and each app simply loads the label it targets.

## Step 5 · Flags and secret references, by content type

[curious] Are these values only ever plain strings?
[800ms]
[confident] No — App Configuration marks two special value types.
[600ms]
[calm] Feature flags you can flip in real time, and Key Vault references that point to a secret without ever copying it.
[600ms]
[reassuring] Both are still key-values; a content type just tells the client to evaluate the flag, or resolve the secret from Key Vault.

## Step 6 · Consume live: managed identity + dynamic refresh

[confident] Now let's consume it live — securely, and without redeploying.
[600ms]
[calm] Apps read App Configuration with a managed identity — no connection string at all.
[600ms]
[impressed] Change a value or a flag, and dynamic refresh delivers it to the running app: no restart, no redeploy.
[600ms]
[reassuring] A sentinel key signals when to reload, so every instance refreshes safely, in place.

## Step 7 · All in one: central, versioned, live configuration

[reflective] All in one, the operating model is clear.
[600ms]
[proud] Every Contoso service reads a single App Configuration store — hierarchical keys, version labels, feature flags, and Key Vault references — over a managed identity, refreshed live.
[600ms]
[confident] Configuration is now external, shared, and versioned.
[600ms]
[optimistic] And the next stops tighten access even further: managed identities fetch secrets on demand, and local credentials disappear.
