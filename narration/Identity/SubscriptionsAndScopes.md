# Narrator Script - Which room pays for this?

**Source animation:** journeys/Identity/SubscriptionsAndScopes.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/management-groups/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview -->
<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->

## Step 1 · One bill for the whole house

[curious] The family now knows who can use each appliance, but everything is charged to one shared account.
[600ms]
We need a way to organize resources, responsibility and costs. Scope tells us where a permission or policy applies.
[600ms]
[confident] Even one subscription can contain smaller scopes. You do not have to grant access to everything just because it shares an account.

## Step 2 · Give each part of the house its own account

[calm] Subscriptions give Contoso separate boundaries for tracking usage, costs and quotas.
[600ms]
In the house picture, shared and private areas receive separate accounts. The identities still belong to the tenant, not to a new family in each account.
[600ms]
[confident] Choose subscription boundaries deliberately. Moving resources later is possible only where the resource types and move requirements support it.

## Step 3 · A room for things that belong together

[calm] A resource group is a room for resources managed together. The oven goes in the kitchen; the television and speaker share the living room.
[600ms]
Each resource group belongs to one subscription, and each resource belongs to one resource group.
[600ms]
[confident] Deleting the group also deletes its resources, unless protections or dependencies block the operation. Group resources by lifecycle, not just by appearance.

## Step 4 · Above every account sits the family

[calm] A management group sits above subscriptions, like the family level above separate household accounts.
[600ms]
It can contain subscriptions and other management groups, giving Contoso a place to apply common rules.
[600ms]
[confident] A subscription placed beneath that group inherits applicable assignments. The tenant's root management group anchors the hierarchy; the accounts do not float independently.

## Step 5 · What the family decides reaches every room

[calm] Follow the hierarchy downward: management group, subscription, resource group, then resource.
[600ms]
Role permissions assigned above apply below. Policy assignments also reach child scopes, subject to authorized exclusions or exemptions.
[600ms]
[confident] Tags are different: they do not inherit automatically. Do not assume every setting travels down the tree in the same way.

## Step 6 · Four levels — All in One

[calm] Family, account, room, appliance: those are our four levels of Azure scope.
[600ms]
A role assignment at one resource is narrow; an assignment higher in the tree can reach many resources underneath.
[600ms]
[confident] Choose the smallest appropriate scope. Next, we will use the same hierarchy to apply resource rules and spending alerts, not just permissions.

## Step 7 · The Contoso estate, end to end

[confident] The estate view replaces the house with real names: one tenant, a management group and five environment subscriptions.
[600ms]
Each resource group contains the environment's virtual machine, cluster, database and network. Each subscription appears under one parent.
[600ms]
[confident] Assign common policy or access at the management group, and applicable assignments reach the subscriptions beneath it, including ones added later.
