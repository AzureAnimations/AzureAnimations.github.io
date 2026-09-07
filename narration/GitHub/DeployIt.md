# Narrator Script — GitHub · Contoso Delivery · Ship It to Azure · EN

**Source animation:** `journeys/GitHub/DeployIt.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · One Pipeline, Two Halves

[confident] Two letters, then two more. They get said in one breath — "CI/CD" — but they answer different questions.
[600ms]
[calm] Continuous integration asks: *is this change good?* A pull request, or a push to main, triggers `ci.yml`. It runs the backend tests — thirty-five of them — the frontend tests, thirteen, and a CodeQL security scan.
[600ms]
[serious] Then everything hinges on one question: are they all green? If not, the merge is blocked. Not discouraged — blocked.
[600ms]
[bright] If they are green, and the change is on main, `cd.yml` takes over. It builds the images and pushes them to GHCR, provisions the Container Apps environment, deploys the backend, deploys the frontend, and runs a smoke test.
[600ms]
[reassuring] And then it is live in Azure. One pipeline, not two tools — the second half simply never starts until the first half has said yes.

## Step 2 · Build It Once, Ship the Small Half

[confident] First job of the delivery half: turn the code into something you can actually run.
[600ms]
[calm] Contoso uses a multi-stage Dockerfile. Stage one starts from the full Node image, installs every dependency including the development ones, and builds the application.
[600ms]
[bright] Stage two starts fresh from a slim image, copies across only the built output, and installs production dependencies only.
[600ms]
[thoughtful] Two stages, two reasons. The image that runs is far smaller — and it contains no compilers and no dev tooling for an attacker to make use of.
[600ms]
[calm] That image is pushed to GitHub Container Registry, tagged with the commit that produced it. One image, one known source.

## Step 3 · GitHub Is Not Inside Azure

[serious] Now the part that trips people up.
[600ms]
[calm] The runner is a machine on GitHub's network. Azure has never met it. Before it can deploy anything at all, it has to prove who it is.
[600ms]
[thoughtful] And if you have used Azure before, your instinct is probably *managed identity*. But a managed identity is attached to something running in Azure — a VM, an App Service, a container. A GitHub runner is none of those.
[600ms]
[serious] So there are two options. The old one: create a client secret, and paste that password into a GitHub secret. It works. It also expires, usually at the worst possible moment — and anyone who can read it can be you.
[600ms]
[bright] The better one: give the workflow a Service Principal, and let Azure trust GitHub's own token. No password to store at all.

## Step 4 · Give the Workflow an Identity

[confident] So what actually *is* a Service Principal? Three things, in order.
[600ms]
[calm] First, an App Registration in Microsoft Entra ID. That is the definition of the application — the blueprint.
[600ms]
[bright] Second, the Service Principal itself: that application's identity inside your tenant. This is the thing Azure makes access decisions about.
[600ms]
[confident] Third, an RBAC role. Contributor — but scoped to one resource group, not the whole subscription. That is what decides how much the pipeline is allowed to do.
[600ms]
[thoughtful] Definition, identity, permission. Keep them separate in your head and the whole model stops being mysterious.
[600ms]
[calm] And if you want the full picture from the identity side — federated credentials, certificate fallback, why secrets are the legacy pattern — there is a whole explainer on it in the Azure Security journey. The link is on screen.

## Step 5 · Deploy Without a Password

[confident] Here is how the trust actually works.
[600ms]
[calm] You add a federated credential to that Service Principal, and it names exactly one repository and one branch. Then, at deploy time, GitHub Actions requests a short-lived OIDC token that identifies this precise workflow run. Microsoft Entra ID checks it against the federated credential, and hands back an Azure access token.
[600ms]
[serious] Be precise about what that removes. You still store three identifiers: the client ID, the tenant ID and the subscription ID. Those are not secrets.
[600ms]
[bright] What you no longer store is a client secret — a real password that could leak, or quietly expire at three in the morning.
[600ms]
[calm] One more detail that catches people: the job needs `permissions: id-token: write`, or GitHub will not mint the token at all.

## Step 6 · The Job That Actually Releases It

[confident] So here is the deploy workflow.
[600ms]
[calm] It triggers on a push to main — which, given the branch protection from earlier, means a merged pull request. It asks for id-token write permission. It targets the production environment, which can require a human approval before the job starts. And it signs in with the Azure Login action.
[600ms]
[bright] Then it deploys — to App Service, or to Container Apps. Same image, either target.
[600ms]
[thoughtful] And notice what this job does *not* do: it never rebuilds. It deploys the exact image the tests and the scans already passed. Rebuilding would give you a different artifact from the one you proved.

## Step 7 · From a Rainy Afternoon to Running Code

[warm] So — all the way back to the beginning.
[600ms]
[calm] Rain was quietly costing Contoso sales. That became a business case, then four epics, then sub-tasks a person could actually pick up. Those went on a board with five columns. They got branches — main, epic, feature — and travelled through a pull request.
[600ms]
[bright] Every change was proven on the way: tests, CodeQL and dependency updates, all shifted left onto the pull request. Then packaged into a small image, and deployed to Azure by a Service Principal with no stored password.
[600ms]
[reassuring] None of these steps is exotic. What makes it work is that every one of them runs every single time — without anyone having to remember to ask.
