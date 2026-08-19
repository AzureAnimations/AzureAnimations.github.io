# Narrator Script — Journey 04 · Service Principal & Federated Credentials

**Source animation:** `static/v2/Security/ServicePrincipal.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Ship Contoso from GitHub to Azure

[confident] Here's the goal: ship Contoso from GitHub straight to Azure.
[600ms]
[calm] Contoso's app lives in GitHub, and every push should kick off a GitHub Actions workflow that builds and deploys it to Azure.
[600ms]
[optimistic] No one copying files by hand — a simple git push automatically ships the app to Azure App Service.
[800ms]
[curious] Sounds easy... so what stands in the way?

## Step 2 · GitHub and Azure are two different platforms

[concerned] The catch is that GitHub and Azure are two different platforms.
[600ms]
[calm] GitHub Actions runs outside Azure. When the workflow tries to deploy, Azure sees an unknown caller from another platform, with different logins.
[600ms]
[serious] So Azure blocks it — it only accepts requests from an identity it recognises.
[800ms]
[reflective] Different platforms, different identity systems — and no shared identity between them.

## Step 3 · Trust starts with an identity

[intrigued] So how do we bridge that gap?
[800ms]
[confident] Trust starts with an identity. For the deploy to work, Azure needs to recognise the GitHub workflow as a known caller it can authorise.
[600ms]
[calm] And the fix isn't a shared password.
[600ms]
[reassuring] It's giving the workflow an identity in Microsoft Entra ID that Azure already trusts.

## Step 4 · App Registration defines the identity

[confident] That identity begins with an App Registration.
[600ms]
[calm] Contoso creates one App Registration in Microsoft Entra ID — it defines the application identity.
[600ms]
[impressed] In this tenant, Azure evaluates the matching Service Principal — the enterprise application instance that actually receives access decisions.
[600ms]
[reassuring] Think blueprint and instance: the App Registration is the definition; the Service Principal is its local representation inside the tenant.

## Step 5 · GitHub signs in as the Service Principal

[confident] Now GitHub signs in as that Service Principal.
[600ms]
[calm] Azure gives the workflow a Service Principal with an application client ID and an object ID — GitHub's identity inside Azure.
[600ms]
[impressed] GitHub Actions authenticates as it using a federated credential — with no secret — and Azure then authorizes it with a role at a specific scope.
[600ms]
[reassuring] Once wrapped by a Service Principal, GitHub behaves like any Azure identity: it authenticates, then it's authorized by role.

## Step 6 · Where federation shines

[optimistic] And this trust model reaches far beyond GitHub.
[600ms]
[calm] The same federated credential works for any external identity provider Microsoft Entra can validate.
[600ms]
[impressed] Contoso reuses it across GitHub Actions, other clouds, Kubernetes, and on-prem — with no stored secret in any of them.
[600ms]
[reassuring] Whatever the source, the pattern is identical: the workload brings a token from its own provider, and Entra exchanges it for an Azure access token.

## Step 7 · From GitHub to Azure — secretless, end to end

[reflective] From GitHub to Azure — secretless, end to end.
[600ms]
[confident] Two separate platforms, so the workflow gets an identity in Microsoft Entra ID: an App Registration and a Service Principal.
[600ms]
[proud] A federated credential lets Azure trust GitHub's own token, so the deploy runs with no stored secret.
[600ms]
[optimistic] Give the external workload an identity, then let Azure trust its token — and the same pattern reaches almost anywhere.
