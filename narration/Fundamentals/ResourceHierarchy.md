# Narrator Script - Resource Hierarchy

**Source animation:** journeys/Fundamentals/ResourceHierarchy.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Source: https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/ -->

## Step 1 · Which resources belong together?

[calm] Contoso is building both a test shop and the shop customers actually use. Machines, databases, and other resources are appearing, but a flat list doesn't show which ones belong together.
[600ms]
[confident] The team needs management boundaries so work on a temporary test environment stays separate from production.

## Step 2 · Start with a resource

[calm] A resource is an item you can create and manage in Azure, such as a virtual machine, a network, or a storage account. Think of these as the shop's individual building blocks.
[600ms]
[confident] Each has its own configuration. Being a resource doesn't necessarily mean it has a separate charge.

## Step 3 · Location is not ownership

[calm] Contoso needs to answer two different questions: where does this resource run, and which resource group does it belong to? A region answers the location question; a resource group organizes management.
[600ms]
[confident] A resource group isn't a datacenter, an availability zone, or a network connection.

## Step 4 · Group what shares a lifecycle

[calm] Put the test resources together, and keep production in a separate resource group. Resources that are created, updated, and retired together often belong in the same group.
[600ms]
[confident] Deleting the test group removes its resources, not the production group. Contoso still checks dependencies before deleting anything.

## Step 5 · One subscription holds the groups

[calm] Look one level outside the resource groups. The subscription contains those groups and provides a boundary for managing access and tracking billed usage.
[600ms]
[confident] Contoso can see which subscription pays for these resources. The test and production groups remain distinct inside it; a subscription doesn't merge their lifecycles.

## Step 6 · Management groups organize subscriptions

[calm] As Contoso grows, it may use several subscriptions. The outer management group brings them together so governance doesn't have to be repeated separately for every subscription.
[600ms]
[confident] Policy and role assignments can apply down the hierarchy. These nested boxes represent management scope, not buildings containing physical servers.

## Step 7 · Resource Hierarchy - All in One

[calm] Read the containers from outside inward: management group, subscription, resource groups, then individual resources. Contoso's test and production resources have separate lifecycles within this management structure.
[600ms]
[confident] Applicable policies and role assignments can inherit downward; not every setting does. With ownership organized, the next decision is where the shop should run.