# Narrator Script — Security · Custom roles and least privilege in Azure and Microsoft Entra — Azure Security Journey

**Source animation:** [CustomRolesAndLeastPrivilege.html](../../journeys/Security/CustomRolesAndLeastPrivilege.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/custom-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/role-definitions>
- <https://learn.microsoft.com/entra/identity/role-based-access-control/custom-overview>
- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>

---

## Step 1 · Contributor is too much, Reader is too little

[curious] Meet Sam on the Contoso help desk. Sam needs to see virtual machines and restart them, nothing more.
[600ms]
[serious] Reader can't restart anything. Contributor can restart, but it can also create and delete almost everything.
[600ms]
[confident] When no built-in role fits the job, a custom role is the answer.

## Step 2 · What is inside an Azure role

[calm] A role definition is just a list of permissions. What it allows, what it subtracts, the data it can touch, and where it can be assigned.
[600ms]
[curious] Here's Contributor. Notice how a wildcard allows everything, and then a short list is subtracted from it.
[600ms]
[serious] That subtraction isn't a deny. If a second role grants the same action, the person can still do it.

## Step 3 · Build a custom role from a built-in one

[confident] The easiest start is to clone the closest built-in role. In the portal you can also start from scratch or from JSON.
[600ms]
[calm] Trim it to what Sam needs, add the two actions, and limit where it can be assigned. Four edits give us Contoso VM Operator.
[600ms]
[serious] List actions explicitly where you can, because a wildcard also grants actions added in the future.

## Step 4 · Test the role at one scope

[calm] Now assign the role to Sam on one resource group, sign in as Sam, and try it.
[600ms]
[curious] It should work where it's assigned and stop everywhere else. An assignment joins a person, a role and a scope, and flows down to everything below.
[600ms]
[reassuring] The Check access tab shows what someone can do at a scope. If the role misbehaves, update it and test again.

## Step 5 · Custom roles in Microsoft Entra ID

[calm] Microsoft Entra has custom roles too. They manage Entra resources, such as the app registrations in your tenant.
[600ms]
[curious] You pick permissions from a preset list, and assign at tenant or app scope. That list covers things like enterprise applications, consent, devices, users and groups.
[600ms]
[serious] You need a Premium licence and at least the Privileged Role Administrator role. And the Azure CLI isn't supported for these assignments.

## Step 6 · Azure roles vs Entra roles: which plane?

[curious] Two systems, and two sets of permissions. Azure roles manage Azure resources through Azure Resource Manager.
[600ms]
[calm] Entra roles manage Entra resources through Microsoft Graph. By default the two don't overlap, and you can't mix their permissions in one custom role.
[600ms]
[serious] One exception to know. A Global Administrator can switch on access management for Azure resources, and gain User Access Administrator on every subscription.

## Step 7 · Find overprivileged assignments

[calm] Start with who holds the most power. Owners, wide scopes, and accounts nobody uses.
[600ms]
[curious] Contoso lists its role assignments in Access control, and looks for red flags. The Privileged tab helps at a scope.
[600ms]
[confident] Defender for Cloud recommendations and access reviews in Privileged Identity Management point you to more excess.

## Step 8 · Replace broad access with narrow access

[calm] To fix an overprivileged assignment, follow a safe order. Add the narrow one first.
[600ms]
[confident] Check it works, then remove the broad one. That way Sam is never left without access.
[600ms]
[reassuring] Assignments flow down a scope, so removing the one on the subscription ends everything Sam had below it.

## Step 9 · Make access eligible, not permanent

[curious] Marcus needs Owner twice a month, not every day. So why leave it switched on all the time?
[600ms]
[calm] With Privileged Identity Management he's eligible, and activates the role only when he needs it. Activation can require multifactor authentication, a justification, or approval.
[600ms]
[reassuring] It lasts for a set time, then it ends by itself.

## Step 10 · Guardrails: locks and deny assignments

[serious] Roles say what a person may do. Guardrails say what nobody may do by accident.
[600ms]
[calm] A lock overrides every role. It can stop deletes or changes, flows down from a parent scope, and covers control plane operations only.
[600ms]
[curious] A deny assignment blocks actions even when a role allows them. You can't create your own, because Azure manages them.

## Step 11 · Which fix for which finding?

[excited] Time to try it yourself. There are six findings, and six fixes.
[600ms]
[curious] Pick a finding, then pick the fix that solves it. A custom role, a removal, an eligible assignment, a lock, an Entra custom role, or a deny assignment.
[600ms]
[encouraging] Each fix is used once, and each does one job. Match the job to the finding.

## Step 12 · Recap: define narrowly, find excess, remove, repeat

[calm] Least privilege is a loop, not a one-off. Build roles that fit the job, then find what is too broad.
[600ms]
[confident] Narrow it or remove it, add guardrails, and then check again.
[600ms]
[proud] For S C five hundred, this covers managing custom roles and fixing overprivileged access with Azure RBAC. Skills lists change, so read the current study guide.
