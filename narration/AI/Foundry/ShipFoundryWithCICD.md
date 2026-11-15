# Narrator Script — Foundry · Ship a Foundry Project with CI/CD

**Source animation:** [ShipFoundryWithCICD.html](../../../journeys/AI/Foundry/ShipFoundryWithCICD.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli>
- <https://learn.microsoft.com/azure/foundry/how-to/evaluation-github-action>
- <https://learn.microsoft.com/azure/foundry/how-to/create-resource-template>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent>

---

## Step 1 · Portal clicks do not scale: why pipelines

[calm] Setting up a Foundry project by hand works once. By the third copy, dev, test and prod have quietly drifted apart.
[600ms]
[serious] That drift is how surprises reach production.
[600ms]
[confident] A pipeline repeats the same steps every time. Contoso Outfitters and its help bot are the example throughout.

## Step 2 · What lives in the repo

[curious] Infrastructure, the agent definition and the evaluation data all live in Git, next to the pipeline.
[600ms]
[confident] The repo becomes the single source of truth.
[600ms]
[calm] The folder names here are a fictional layout. Your own repo can organise the same four parts differently.

## Step 3 · Provision the Foundry project as code

[calm] A Bicep file describes the Foundry resource and its project. The pipeline deploys it with Azure CLI or azd, using a parameter file for each environment.
[600ms]
[confident] Already built a resource in the portal? Microsoft Learn suggests exporting it to a Bicep file.
[600ms]
[encouraging] Then turn the hard-coded values into parameters.

## Step 4 · Deploy a model: name, version, type, capacity

[curious] A model deployment is also code. Four values decide what the agent gets behind the name it calls: the name, the version, the type and the capacity.
[600ms]
[calm] The same model can be deployed more than once, as long as each deployment has its own name.
[600ms]
[confident] The agent only ever asks for the deployment name.

## Step 5 · Create or update the agent from code

[calm] A pipeline step calls the SDK to create the agent.
[600ms]
[impressed] Every change, even one edited sentence, saves a new version instead of overwriting the old one.
[600ms]
[confident] Code refers to an agent by name and version. The agent keeps one endpoint address while its versions change.

## Step 6 · Dev, test, prod: one pipeline, three projects

[calm] One source revision moves from dev to test to prod.
[600ms]
[confident] Each environment points at its own Foundry project, with its own settings and permissions.
[600ms]
[serious] An environment name alone isolates nothing. Each environment must be bound to a separate Foundry project.

## Step 7 · Evaluation as a quality gate

[curious] After deploying to test, the pipeline runs a fixed set of test questions through evaluators.
[600ms]
[serious] If the pass rate is under the line, the pipeline stops. These scores are fictional.
[600ms]
[calm] The evaluation GitHub Action is in preview. To save cost, don't run evaluation on every commit.

## Step 8 · Secrets and identity in the pipeline

[calm] The workflow signs in with a short-lived token that Microsoft Entra trusts through a federated credential.
[600ms]
[proud] There's no client secret that you have to store, rotate or leak.
[600ms]
[serious] The subject in the federated credential must match the token the workflow really sends. Give the identity only the roles it needs, at the smallest scope.

## Step 9 · Roll back and watch after release

[curious] Send a small share of traffic to the new version and watch it. Ninety ten is only an example split.
[600ms]
[confident] Then raise the share, or point the endpoint back at the stable version.
[600ms]
[reassuring] Changing which version the endpoint serves doesn't rebuild code or create another version.

## Step 10 · Pipeline at a glance

[calm] From a commit to a watched release: every step is code, every promotion is gated, and there are no stored secrets.
[600ms]
[reflective] This is a pattern, not the only pipeline. The same ideas work in GitHub Actions or Azure DevOps.
[600ms]
[determined] Put your project in a pipeline, and every release becomes repeatable.
