# Narrator Script — Architect · Design governance: structure, policy and compliance

**Source animation:** [DesignGovernance.html](../../journeys/Architect/DesignGovernance.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/governance/management-groups/overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging>
- <https://learn.microsoft.com/azure/governance/policy/concepts/effect-basics>
- <https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard>
- <https://learn.microsoft.com/purview/compliance-manager>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/>

---

## Step 1 · One subscription, no structure

[calm] Contoso has put the storefront, databases and experiments into one subscription, with no shared structure.
[600ms]
[curious] Notice the three problems beside it: production risk, unclear costs and rules that change from team to team.
[600ms]
[reassuring] The design starts by giving ownership, isolation and policy a clear place to live.

## Step 2 · Management groups: rules that flow down

[calm] Management groups organize subscriptions by the rules they share, rather than copying the company organization chart.
[600ms]
[curious] Follow the policy down the tree: subscriptions inherit the guardrails assigned above them.
[600ms]
[reassuring] Keep the hierarchy shallow, with separate development and production subscriptions under the appropriate shared group.

## Step 3 · Subscriptions: billing, limits and isolation

[calm] A subscription creates a boundary for billing, limits and isolation, as these three cards show.
[600ms]
[curious] Contoso separates the order platform, development work and experiments because their budgets and access requirements differ.
[600ms]
[reassuring] Choose a new subscription when the boundary must change, not just because another region is involved.

## Step 4 · Resource groups: one shared lifecycle

[calm] These application resources are deployed, updated and deleted together, so they share a resource group.
[600ms]
[curious] The shared network stays in its own group because it has a different lifecycle.
[600ms]
[reassuring] Deleting the application group removes its resources together, while the separately managed network keeps its own lifecycle.

## Step 5 · Tags: decide what, then let policy apply them

[calm] Tags describe resources through categories such as function, classification, accounting and business purpose.
[600ms]
[curious] Watch the resource group tag: it does not automatically appear on the resource beneath it.
[600ms]
[reassuring] Contoso uses Azure Policy to copy required tags, turning a tagging strategy into something the platform can enforce.

## Step 6 · Azure Policy: pick the effect for each rule

[calm] The Contoso baseline collects several policy definitions into one initiative, assigned at the shared scope.
[600ms]
[curious] Audit reports a problem, deny blocks it, modify changes properties and deploy if not exists adds a missing related resource.
[600ms]
[reassuring] Choose the effect that matches the rule, rather than treating every compliance problem as a blocked deployment.

## Step 7 · Compliance: who answers which question

[calm] These two tools answer different compliance questions, even though their work is connected.
[600ms]
[curious] Microsoft Defender for Cloud evaluates Azure resources against controls, while Microsoft Purview Compliance Manager organizes assessments and improvement actions.
[600ms]
[reassuring] Contoso needs both a view of the technical findings and a way to track the people responsible for improvement.

## Step 8 · All in one: Contoso’s landing zone

[calm] Here is Contoso's governance design assembled into one landing zone, with each scope doing a different job.
[600ms]
[curious] Management groups hold common rules, subscriptions separate boundaries, resource groups follow lifecycles and tags explain ownership.
[600ms]
[reassuring] Policy and compliance tools make those decisions enforceable and reviewable; next, connect the people who will use this estate.

