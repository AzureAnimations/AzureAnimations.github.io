# Narrator Script - The house rules on money

**Source animation:** journeys/Identity/PolicyAndCost.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-basics -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets -->

## Step 1 · Nobody said no

[curious] Mia can enter her room and has permission to order an appliance. Nothing yet says that a games console is unsuitable.
[600ms]
Permission to act and rules about the resource are different questions.
[600ms]
[confident] Azure roles decide who may act, Conditional Access checks sign-in requirements, and Azure Policy checks resource compliance. We need all three boundaries to stay clear.

## Step 2 · Write the rule, then choose where it lands

[calm] First write the rule as a policy definition. Then create an assignment to say where that rule applies.
[600ms]
Here, the scope is Mia's room, our resource group. Dad's workshop is outside this assignment.
[600ms]
[confident] Saving a definition alone does not enforce it. The assignment links the reusable rule, its settings and the resources it should evaluate.

## Step 3 · Stopped, or just written down?

[calm] The effect determines what happens when an applicable request breaks the rule.
[600ms]
Deny rejects it; Audit allows it and records noncompliance. Even an Owner's permissions do not bypass an enforced Deny policy.
[600ms]
[confident] Use the distinction deliberately: observing a problem is not the same as blocking it, and neither means every existing resource has automatically been repaired.

## Step 4 · One rule is not a standard

[calm] One household standard may need several rules. An initiative packages policy definitions into a single rule book.
[600ms]
The diagram puts the definitions inside the book and the assignment outside it.
[600ms]
[confident] Assign the initiative at a scope to evaluate the rules together. Grouping definitions is not the same operation as choosing where they apply.

## Step 5 · Label the receipt, then monitor spending

[calm] Dad is allowed to buy the console, but Contoso still needs to know whose cost it is and when spending grows.
[600ms]
An owner tag helps attribute the cost. This example's budget alerts at eighty percent; it does not stop the purchase or shut down resources.
[600ms]
[confident] Budget evaluation is not instant, and tags do not inherit automatically.

## Step 6 · Protect an existing resource

[calm] The boiler represents an existing resource that must not be changed accidentally. A ReadOnly lock blocks control-plane updates and deletion, even for an Owner while the lock remains.
[600ms]
A CanNotDelete lock blocks deletion but still allows updates.
[600ms]
[confident] These locks do not protect the data plane. An authorized person can remove a lock, so it is a guardrail, not an unbreakable vault.

## Step 7 · Keyrings, rules, locks — All in One

[calm] Put the controls side by side. Roles grant actions; policy evaluates resource rules; locks restrict changes to existing resources.
[600ms]
Tags help identify responsibility, and budgets warn about spending. A budget is not a spending cutoff.
[600ms]
[confident] Choose each control for the job it actually does. None is a substitute for the others.

## Step 8 · How it really looks in Azure

[confident] The final diagram shows reusable policy definitions grouped into an initiative at the Contoso management group.
[600ms]
One assignment reaches both subscriptions. Another assignment targets a single resource group to add a tighter requirement there.
[600ms]
[confident] Definitions describe the rules; assignments choose their scope. Use that distinction to govern the estate without confusing identity, permissions or cost alerts.
