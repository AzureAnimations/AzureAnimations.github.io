# Narrator Script — Journey 01 · Azure Key Vault

**Source animation:** `static/v2/Security/KeyVault.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Every connection needs a secret, key or certificate

[confident] Meet Contoso — an online shop that's really many apps talking to each other.
[600ms]
[calm] A shopper reaches the Store Front over TLS, the Store Front calls Order Processing, and Order Processing reaches the database and a growing set of components.
[600ms]
[concerned] Every one of those arrows needs a credential — a secret, a key, or a certificate — and right now there's nowhere safe and central to keep them.
[800ms]
[curious] So where should all this sensitive material actually live?

## Step 2 · Static secrets in appsettings.json

[serious] Here's how it usually starts — and where it goes wrong.
[600ms]
[concerned] The Store Front reads a hardcoded database password and payment key straight from a local app-settings dot json file, copied across dev laptops and pipeline variables.
[600ms]
[serious] The Secure Future Initiative's first principle is Secure by Design — protect secrets at rest, in transit, and at runtime.
[600ms]
[determined] Static credentials in source control break that on day one; one leaked repo compromises production.

## Step 3 · Centralize in Azure Key Vault

[confident] The fix is to centralize — in Azure Key Vault.
[600ms]
[calm] Key Vault pulls those scattered secrets into one managed, audited store, holding three object types: secrets, cryptographic keys, and certificates.
[600ms]
[impressed] Apps read them at runtime with zero credentials in code.
[600ms]
[reassuring] One vault now holds Contoso's database password, the payment key, an order-encryption key, and the Store Front certificate — all with central rotation, auditing, and access control.

## Step 4 · How your material is protected

[intrigued] But how strongly is that material actually protected?
[800ms]
[confident] Every key is guarded to a validated FIPS 140 level. Standard keeps keys in a software module; Premium and Managed HSM generate and hold them inside hardware security modules.
[600ms]
[impressed] Inside an HSM, the key never leaves the hardware boundary.
[600ms]
[calm] Higher FIPS levels simply mean stronger physical protection — from software, up to tamper-resistant hardware with identity-based access.

## Step 5 · Standard vs Premium vs Managed HSM

[curious] So which container should Contoso pick?
[800ms]
[confident] Key Vault comes as two vault tiers plus a dedicated Managed HSM, differing by tenancy, protection, and who controls the root of trust.
[600ms]
[calm] Use Standard for everyday app secrets and TLS certificates. Choose Premium when you need HSM-backed or customer-managed keys.
[600ms]
[reassuring] And choose Managed HSM when you need a single-tenant, dedicated module and full control of the root of trust — true key sovereignty.

## Step 6 · Migrate a key into Key Vault — without exposing it

[intrigued] What if you already have a key, and you need to bring it in without ever exposing it?
[800ms]
[confident] That's Bring Your Own Key. Say you generated a Data Encryption Key inside your on-prem HSM — a Key Vault K-E-K, an RSA key pair, wraps it for the trip.
[600ms]
[calm] You export the K-E-K's public key, your HSM wraps the D-E-K with it, and only the encrypted dot-byok blob travels.
[600ms]
[reassuring] Key Vault unwraps it inside the HSM with the private key — so the plaintext key is never out in the open.

## Step 7 · Azure Key Vault — the whole picture

[reflective] Step back, and the whole picture comes together.
[600ms]
[proud] Contoso's secrets, keys, and certificates now live in one audited vault — protected to the right FIPS level, in the right tier, wrapped by keys Contoso controls, and read at runtime with no credentials in code.
[600ms]
[confident] This is Secure by Design, by Default, and in Operations.
[600ms]
[optimistic] And it's the foundation for the rest of the journey: managed identities fetch these secrets without passwords, access control narrows who can read them, and private networking locks the vault down.
