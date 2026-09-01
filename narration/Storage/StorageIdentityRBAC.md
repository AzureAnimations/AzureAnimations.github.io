# Narrator Script — Azure Storage · Level up · Identity & RBAC

**Source animation:** `static/v2/Storage/StorageIdentityRBAC.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] Your app needs to read blobs in a container — and the goal is to do it without a single key.
[600ms]
[calm] The old way hands out an account key or a SAS token — a secret that can leak. The modern way gives the app an identity and grants it a role instead.
[700ms]
[curious] Let's build that picture, arrow by arrow — the identity on the left earning access to the container on the right.

## Step 2 · identity

[confident] First, the app needs a security principal — simply, who is asking.
[600ms]
[calm] It could be a user, a group, or a service principal. But for an app, the best choice is a managed identity: Azure manages the credential, so there's no secret in your code.
[700ms]
[reassuring] And with the DefaultAzureCredential helper, the very same code runs on your laptop and in Azure.

## Step 3 · token

[confident] Now the app calls Storage. Microsoft Entra ID authenticates its identity and hands back a short-lived OAuth token.
[600ms]
[calm] Storage trusts Entra, so that token — not a key — rides along with every request.
[700ms]
[reassuring] It expires quickly and it's scoped to storage, so there's nothing for you to store or rotate.

## Step 4 · role

[confident] A token alone still isn't enough — the identity needs a role. And here's the catch that trips everyone up.
[600ms]
[serious] Use a data-plane role, like Storage Blob Data Reader. The control-plane Contributor role can manage the account, but it does not read your blobs.
[700ms]
[amused] So a Contributor can happily manage the resource and still get a 403 on the data. Assign a data role.

## Step 5 · scope

[confident] Every role is assigned at a scope — from management group, down through subscription, resource group, and account, all the way to a single container.
[600ms]
[calm] Assign at the narrowest scope that works — here, the container — and the permission inherits down from there.
[700ms]
[reassuring] Need blob-path precision? Add an attribute-based condition, or ABAC, right on the assignment.

## Step 6 · assign

[confident] Put it together, and you have a role assignment: the principal, plus the role, plus the scope.
[600ms]
[calm] Now every request carries the Entra token, Azure checks the assignment, and the app reads the blobs — with no key ever involved.
[700ms]
[reassuring] Role assignment is simply who, what, and where — and Azure evaluates it on every single call.

## Step 7 · recap

[proud] There's the whole picture: app identity, to an Entra token, to a data-plane role at container scope, to the blobs.
[600ms]
[calm] No keys, least privilege, and fully audited.
[700ms]
[encouraging] The final move — turn off Shared Key, so identity is the only way in.

## Step 8 · spec

[confident] One level deeper, because it matters. Azure role-based access control has two planes.
[600ms]
[calm] Control-plane roles like Owner and Contributor manage the resource. Data-plane roles — Reader, Contributor, Owner for blobs, and their cousins for files, queues, and tables — grant access to the data inside.
[700ms]
[serious] Remember, Owner and Contributor can list the account keys, so they can still reach data the old way. Disable Shared Key to force everyone through a proper data role.
