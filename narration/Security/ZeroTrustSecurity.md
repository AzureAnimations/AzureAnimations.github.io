# Narrator Script — Journey 05 · Zero Trust Security Architecture

**Source animation:** `static/v2/Security/ZeroTrustSecurity.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Start from the assembled Contoso design

[confident] For the finale, we bring it all together under Zero Trust.
[600ms]
[calm] The earlier stops already removed local secrets. Now every sensitive request must still satisfy the right identity, the right network path, and the right role.
[600ms]
[serious] Even if one component is compromised, that has to hold.
[800ms]
[determined] The rule is simple: don't trust a request just because it came from inside the app — make it prove identity, path, and authorization every time.

## Step 2 · Add Private Endpoint to the sensitive services

[confident] First, the network half — add Private Endpoint.
[600ms]
[calm] Bring Private Endpoint into Contoso's Virtual Network for both Key Vault and App Configuration.
[600ms]
[impressed] The app keeps using the very same services, but now the path lands on a private IP inside the VNet.
[600ms]
[reassuring] The route is private, local to the network, and explicit.

## Step 3 · Disable the public path too

[intrigued] But is a private path enough on its own?
[800ms]
[serious] Not quite — Private Endpoint doesn't automatically remove the public one.
[600ms]
[determined] So public network access on Key Vault and App Configuration must also flip from Enabled to Disabled.
[600ms]
[concerned] Otherwise the secure path and the open path live side by side — a classic false sense of security.

## Step 4 · Separate duties with Azure RBAC

[confident] Next, separate duties with Azure RBAC.
[600ms]
[calm] Replace legacy Key Vault access policies with role-based access control.
[600ms]
[impressed] The runtime app only reads secrets, the security team manages rotation, and CI/CD gets only the narrow scope it needs for one task.
[600ms]
[reassuring] Least privilege isn't one powerful identity — it's different identities doing different jobs.

## Step 5 · Assume breach operationally

[serious] Finally, assume breach — operationally.
[600ms]
[calm] Stream diagnostic settings into Log Analytics and Microsoft Sentinel, keep secret rotation moving, and let GitHub Actions use a federated credential instead of a stored admin credential.
[600ms]
[determined] Zero Trust is operational, not just architectural.
[600ms]
[reassuring] After the design goes live, you still need evidence, alerting, and rotation.

## Step 6 · The hardened Contoso design — end to end

[reflective] And here's the hardened Contoso design, end to end.
[600ms]
[proud] The same building blocks now sit behind a private path, managed identities, separated RBAC duties, operational logs, and secretless CI/CD.
[600ms]
[confident] Secretless, least-privilege, explicitly verified access — from one end of the app to the other.
[600ms]
[optimistic] That's the whole point of the journey, brought together in a single picture.
