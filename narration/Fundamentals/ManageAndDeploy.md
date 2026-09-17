# Narrator Script - Manage and Deploy

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/azure-arc/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso built test and production separately by hand. The environments already have different settings, so a successful test doesn't explain exactly what will happen in production.
[600ms]
[confident] The team needs a repeatable definition of what it deploys, with intentional differences recorded instead of accidental differences hidden.

## Step 2 · Start in the portal

[calm] Maya opens the Azure portal to inspect the shop's resources and settings. This browser interface helps her understand what exists and how each resource is configured.
[600ms]
[confident] The portal is useful for exploration and individual tasks. Repeating a long sequence of manual actions, however, makes consistency harder to maintain.

## Step 3 · Repeat it with commands

[calm] Azure's command-line interface and Azure PowerShell let Contoso manage resources with commands it can save and run again. Cloud Shell provides an environment for using these tools in the browser.
[600ms]
[confident] Saved commands make the work repeatable, but the team still reviews their order, inputs, permissions, and effects.

## Step 4 · Describe it as code

[calm] Infrastructure as code describes the resources Contoso wants instead of relying on remembered clicks. Bicep or an Azure Resource Manager template gives the team a definition it can review and version.
[600ms]
[confident] That definition describes infrastructure. It doesn't, by itself, copy business data or deliver every part of the application code.

## Step 5 · Same definition, intentional differences

[calm] Contoso reuses one reviewed definition for test and production. Parameters supply deliberate differences, such as names, tags, and capacity, while keeping the structure understandable.
[600ms]
[confident] The environments don't have to be identical in size. Their differences should be explicit, so the team can explain and reproduce them.

## Step 6 · Everything goes through Resource Manager

[calm] Portal actions, commands, and template deployments send management requests through Azure Resource Manager. Permissions and applicable policies are checked before resource providers create or update the resources.
[600ms]
[confident] This is the management path. A customer's checkout request uses the application and its services, not this resource-deployment path.

## Step 7 · Reach beyond Azure

[calm] Contoso's warehouse server hasn't moved to Azure. Azure Arc can bring supported servers running elsewhere into Azure's management experience, helping the team manage a hybrid environment.
[600ms]
[confident] Connecting a server through Arc doesn't relocate it. The machine still runs in the warehouse, with its existing operational responsibilities.

## Step 8 · Manage and Deploy - All in One

[calm] Use the portal to explore, commands to repeat operations, and reviewed infrastructure definitions to deploy consistently. Arc extends management to supported resources outside Azure.
[600ms]
[confident] Contoso can now explain how the shop was built. The final question is how to tell whether it is working well for customers.