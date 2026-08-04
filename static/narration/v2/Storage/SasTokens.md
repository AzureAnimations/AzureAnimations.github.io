# Narrator Script — Azure Storage · Share it (SAS Tokens) · EN

**Source animation:** `static/v2/Storage/SasTokens.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · The Players

[warm] Here's a common problem. You have data in a storage account, and someone needs just one container or blob — for a limited time.
[600ms]
[calm] How do you grant that without handing over your account keys? The keys unlock everything, forever — so sharing them is a non-starter.
[600ms]
[confident] Let's build the picture. Follow the arrows: every step connects the account on the left to the user on the right. The goal — scoped, temporary access.

## Step 2 · The Keys

[confident] It all starts with the account keys.
[600ms]
[calm] A storage account has two keys, and they unlock everything, with no expiry — which is exactly why you never hand them out. Instead, they sign the tokens you'll create.
[600ms]
[reassuring] Two keys let you rotate one while the other keeps your apps running. And regenerating a key is how you'll revoke access later.

## Step 3 · Generate a Token

[confident] So instead of the key, you create a Shared Access Signature — a SAS token.
[600ms]
[calm] It's a URL, signed by the account, that targets exactly one container or blob — not the whole account. You can simply hand it out.
[600ms]
[reassuring] The token points at a single resource. Share the URL, not the key.

## Step 4 · Inside the Token

[intrigued] Let's look inside. The token spells out exactly what's allowed.
[600ms]
[calm] Which permissions — read, write, list. The start and expiry time. And which I-P addresses and protocol may use it — HTTPS only.
[600ms]
[reassuring] Change any of these, and the signature breaks — so the token can't be tampered with.

## Step 5 · The User Gets In

[confident] Now hand the token to the user.
[600ms]
[calm] They can reach the shared container or blob — but only with the rights you granted, and only until it expires.
[600ms]
[reassuring] No account key was ever shared, and the access ends on its own. That's the whole point of a SAS.

## Step 6 · Stored Access Policy

[confident] Need many tokens with the same rules? Use a Stored Access Policy.
[600ms]
[calm] Put the permissions and expiry in a policy on the container, and have your tokens reference the policy instead of carrying their own rules. Note — this is container-level only.
[600ms]
[reassuring] Change the policy once, and every token that references it updates. It's also the clean way to revoke a whole set of tokens — just delete the policy.

## Step 7 · The Whole Picture

[warm] So here's SAS, end to end.
[600ms]
[calm] Account, to keys, to a signed, scoped, expiring token — and the user reaches just what you allowed. Add a stored access policy for central control, and know how to revoke: regenerate the key for ad-hoc tokens, or delete the policy for policy-based ones.
[600ms]
[encouraging] The best practice? Prefer a user delegation SAS, over HTTPS, with least privilege and a short expiry — always with a revocation plan.

## Step 8 · SAS Types & Scope

[confident] Finally, the technical view — three SAS types, and they work across all four storage services, not just blobs.
[600ms]
[calm] A user delegation SAS is signed with Microsoft Entra ID — the most secure, and Microsoft's recommendation. A service SAS is signed with the account key and scopes to one resource in one service. And an account SAS, also signed with the account key, can span multiple services.
[600ms]
[reassuring] All three cover Blob, Queue, Table, and Files. Stored access policies apply to a service SAS only — up to five per resource. When in doubt, reach for user delegation.
