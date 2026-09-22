# Narrator Script - Manage and Deploy

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/cloud-shell/overview ; https://learn.microsoft.com/powershell/module/az.resources/get-azresourcegroup ; https://learn.microsoft.com/azure/azure-arc/servers/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso has one virtual machine in test and two in production. That extra capacity was planned, but production's missing Environment tag was a mistake introduced during manual setup.
[600ms]
[confident] A reviewed infrastructure definition records the design. Parameters make approved differences explicit, so the team can distinguish a deliberate choice from configuration drift.

## Step 2 · Start in the portal

[calm] Maya uses the Azure portal, a graphical interface in the browser, to inspect the production VM. She checks its subscription, resource group, region, size and tags, then reviews who can manage it in Access control.
[600ms]
[confident] Choose the portal for visual inspection and individual tasks. Its management requests still use Resource Manager; the interface doesn't bypass permissions or policies.

## Step 3 · Repeat it with commands

[calm] These two commands both list resource groups in the current subscription. Azure CLI uses commands beginning with A Z. Azure PowerShell uses Az cmdlets that return objects for its pipeline.
[600ms]
[confident] Cloud Shell is the hosted browser environment, with Bash or PowerShell and preinstalled tools. The tools can also run locally. You still need sign-in and permissions; Cloud Shell doesn't make Azure resources free.

## Step 4 · Describe it as code

[calm] Infrastructure as code records the desired resource state. Bicep provides concise declarative syntax and compiles into an ARM JSON template. Parameters hold inputs, resources declare what to deploy, and outputs return values.
[600ms]
[confident] Version and review the definition. Idempotence means repeating a deployment with the same inputs can reach the same state rather than creating duplicate resources.

## Step 5 · Same definition, intentional differences

[calm] This example covers the storage portion of Contoso's shop. Choose test or production, then select the storage redundancy. The parameter file supplies those values to the same reviewed definition, which applies the resource name, Environment tag and storage SKU.
[600ms]
[confident] Preview the result before deploying. The preview doesn't create resources, and this storage template doesn't deploy the shop VMs or copy customer data. Their definitions and deployment tasks are separate.

## Step 6 · The management request path

[calm] Contoso submits a request to create storage. With Reader, authorization fails. With Contributor but no Environment tag, the example Deny policy blocks it. With permission and the required tag, the simulated request reaches Microsoft Storage and succeeds.
[600ms]
[confident] Valid code does not bypass authorization or policy. This simplified simulation cannot reproduce every Azure failure. Customer checkout traffic follows a separate data path, not this Resource Manager deployment path.

## Step 7 · Reach beyond Azure

[calm] Contoso installs the Connected Machine agent on its warehouse server to connect it to Azure Arc. The server gains an Azure resource representation for inventory, access control and supported management services. Arc also supports other resource types, including Kubernetes and SQL Server.
[600ms]
[confident] Management is not migration. The server stays in the warehouse, its operating system still needs care, and connected Azure services can have separate charges.

## Step 8 · Manage and Deploy - All in One

[calm] Choose the tool that best fits each task. Use the portal for visual inspection, CLI or PowerShell for repeatable commands, and ARM templates or Bicep for declarative infrastructure. Arc extends management to supported resources outside Azure.
[600ms]
[confident] These tools complement one another; choosing one does not bypass permissions or policy. Contoso can now explain its management choices. Next, use monitoring to understand how the shop is running.