# Narrator Script — Foundry · Secure a Foundry Project: Identity, Network and Guardrails

**Source animation:** [SecureAFoundryProject.html](../../../journeys/AI/Foundry/SecureAFoundryProject.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry>
- <https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry>
- <https://learn.microsoft.com/azure/foundry/how-to/configure-private-link>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>

---

## Step 1 · Keys in a screenshot: why keyless

[serious] An API key is a static secret. If it lands in a screenshot, a chat or a repo, anyone holding it gets full access.
[600ms]
[concerned] And nobody can tell who used it. This key is a placeholder, and Contoso is fictional.
[600ms]
[confident] Microsoft recommends Microsoft Entra ID instead, and that is the right choice for production workloads.

## Step 2 · Managed identity: for the project and your app

[calm] Give the web app and the Foundry project their own managed identities. Azure manages the credential, so there's nothing to store or rotate.
[600ms]
[confident] A role assignment then decides what each identity may do.
[600ms]
[curious] An identity can be system-assigned or user-assigned. Token sign-in needs a custom subdomain on the Foundry resource.

## Step 3 · Roles: who deploys, who calls, who builds

[calm] Foundry has built-in roles. Pick the smallest one for each job.
[600ms]
[confident] Then assign it at the scope where that job happens, so people and apps get no more than they need.
[600ms]
[serious] Roles apply when you sign in with Microsoft Entra ID. An API key skips roles and grants full access.

## Step 4 · Private endpoints: close the public door

[calm] Set public network access to Disabled, and add a private endpoint.
[600ms]
[confident] Now callers reach the Foundry resource through your virtual network, not the open internet.
[600ms]
[curious] Inside the network, the same endpoint name resolves to a private address, through a private link DNS zone.

## Step 5 · Data and egress: what leaves the network

[curious] The agent client is injected into your own subnet. It reaches your Storage, AI Search and Cosmos DB over private endpoints.
[600ms]
[confident] A firewall decides what may leave the network.
[600ms]
[reassuring] In a standard setup you bring your own Storage, AI Search and Cosmos DB, so agent data stays in your Azure tenant.

## Step 6 · Content filters: categories, severity, blocking

[calm] Foundry calls these guardrails. A control scores each of the four harm categories by severity.
[600ms]
[curious] Then it annotates the result or blocks it, depending on the blocking level you pick. Try the switches.
[600ms]
[confident] Controls scan user input and output. For agents they can also scan tool calls and tool responses, in preview. Models use the default guardrail unless you change it.

## Step 7 · Prompt Shields and groundedness

[serious] Prompt Shields catch hostile or hidden instructions before the model acts on them.
[600ms]
[concerned] Document attack detection is off by default, so turn it on.
[600ms]
[calm] Groundedness detection checks the answer against your source text. It's in preview, isn't applied to agents, and retires on April thirtieth, twenty twenty-seven.

## Step 8 · Custom blocklists and risk detection

[calm] Add your own banned terms. They can be exact matches or regular expressions.
[600ms]
[curious] Then switch on detectors for protected material and personal data. Personal data detection is in preview.
[600ms]
[confident] Each one can annotate the reply or block it. All names and numbers here are fictional.

## Step 9 · Audit it: logs, traces and approval gates

[calm] Send resource logs to Azure Monitor, and trace every agent run.
[600ms]
[serious] Make risky tool calls wait for a person to approve. The example uses an MCP tool set to always require approval.
[600ms]
[confident] Log the approvals and tool calls so you can audit them later.

## Step 10 · Secure project at a glance

[calm] Four layers work together: who is calling, which network, what content, and what you can prove afterwards.
[600ms]
[reflective] No single layer is enough on its own.
[600ms]
[proud] Identity, network, guardrails and audit support each other, and together they make a project you can defend.
