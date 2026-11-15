# Narrator Script — GitHub · Contoso Delivery · Ship It to Azure · EN

**Source animation:** `journeys/GitHub/DeployIt.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · One Pipeline, Two Halves

[confident] Two letters, then two more. They get said in one breath — "CI/CD" — but they answer different questions.
[500ms]
[calm] Continuous integration asks: *is this change good?* A pull request triggers `ci.yml` — backend tests, frontend tests, and a CodeQL scan.
[500ms]
[serious] Then everything hinges on one question: are they all green? If not, the merge is blocked. Not discouraged — blocked.
[500ms]
[bright] If they are green and the change is on main, `cd.yml` takes over: build the images, push to GHCR, deploy, smoke test. Live in Azure.
[500ms]
[reassuring] One pipeline, not two tools — the second half never starts until the first half says yes.

## Step 2 · Build It Once, Ship the Small Half

[confident] First job of the delivery half: turn the code into something you can run.
[500ms]
[calm] A multi-stage Dockerfile. Stage one starts from the full Node image, installs every dependency including dev ones, and builds. Stage two starts fresh from a slim image and copies across only the built output.
[500ms]
[thoughtful] Two stages, two reasons. The image that runs is far smaller — and it holds no compilers for an attacker to use. It goes to GHCR tagged with the commit that produced it.

## Step 3 · GitHub Is Not Inside Azure

[serious] Now the part that trips people up. The runner is a machine on GitHub's network. Azure has never met it.
[500ms]
[thoughtful] Your instinct is probably *managed identity* — but a managed identity attaches to something running in Azure. A GitHub runner is not.
[500ms]
[bright] So: either paste a client secret into GitHub and watch it expire at the worst moment, or give the workflow a Service Principal and let Azure trust GitHub's own token.

## Step 4 · Give the Workflow an Identity

[confident] So what *is* a Service Principal? Three things, in order.
[500ms]
[calm] An App Registration in Microsoft Entra ID — the blueprint. The Service Principal itself — that application's identity in your tenant, the thing Azure makes decisions about. And an RBAC role: Contributor, scoped to one resource group, not the subscription.
[500ms]
[thoughtful] Definition, identity, permission. Keep those separate and the model stops being mysterious.

## Step 5 · Deploy Without a Password

[confident] Here is how the trust works.
[500ms]
[calm] You add a federated credential to that Service Principal, naming one repository and one branch. At deploy time GitHub requests a short-lived OIDC token identifying that exact run; Entra ID checks it and hands back an Azure access token.
[500ms]
[serious] You still store a client ID, tenant ID and subscription ID — none of them secrets. What you no longer store is a password that could leak, or expire at three in the morning.
[500ms]
[calm] One detail that catches people: the job needs id-token write permission, or GitHub never mints the token.

## Step 6 · The Job That Actually Releases It

[confident] So here is the deploy workflow.
[500ms]
[calm] It triggers on a push to main — which, given branch protection, means a merged pull request. It asks for id-token write, targets the production environment, which can require a human approval, and signs in with the Azure Login action.
[500ms]
[thoughtful] And notice what it does *not* do: it never rebuilds. It deploys the exact image the tests already passed. Rebuilding would give you a different artifact from the one you proved.

## Step 7 · From a Rainy Afternoon to Running Code

[warm] So — all the way back to the beginning.
[500ms]
[calm] Rain was quietly costing Contoso sales. That became a business case, four epics, sub-tasks on a board, branches, and a pull request — proven by tests and scans, packaged into a small image, and deployed by a Service Principal with no stored password.
[500ms]
[reassuring] None of these steps is exotic. What makes it work is that every one of them runs every single time, without anyone having to remember to ask.
