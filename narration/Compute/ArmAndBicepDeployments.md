# Narrator Script — Compute · ARM templates and Bicep: read, change, deploy, export

**Source animation:** [ArmAndBicepDeployments.html](../../journeys/Compute/ArmAndBicepDeployments.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/syntax>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/deployment-modes>
- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/deploy-what-if>

---

## Step 1 · Built by hand, twice

[calm] Priya at Contoso clicked through the portal to make the same storage account for Dev, and again for Prod.
[600ms]
[concerned] Done by hand, the two quietly drifted apart. A setting here, a tag there, and nobody noticed.
[600ms]
[confident] One template removes the guesswork. You describe the resource once and deploy it the same way every time.

## Step 2 · Anatomy of an ARM template

[calm] An ARM template is a JSON file, and only three parts are required: the schema, the content version, and the resources.
[600ms]
[confident] Real files usually add parameters, variables, functions and outputs, so the same file can serve Dev and Prod.
[600ms]
[reassuring] The JSON on screen is shortened so it fits, but the shape is exactly what you'll meet in real templates.

## Step 3 · The same thing in Bicep

[curious] Here's the same storage account written in Bicep. Follow the reading cursor block by block.
[600ms]
[impressed] It's shorter, and there's no JSON punctuation to balance.
[600ms]
[confident] Bicep is declarative, so the order of the blocks doesn't change how the deployment runs. Learn recommends Bicep for new work: same capabilities, easier syntax.

## Step 4 · Modify an existing ARM template

[calm] Most of the time you edit a file you already have. Add a parameter, use it for the SKU, and add a tag.
[600ms]
[confident] Then deploy the same file again. You can also raise the content version to record the change.
[600ms]
[serious] Careful, though. A redeploy re-applies every property in the file, so a property you leave out is reset to its default.

## Step 5 · Modify an existing Bicep file

[calm] Three Bicep tools you'll edit with every week.
[600ms]
[confident] A module splits one file into smaller files that another file deploys. A loop repeats a resource, and every copy needs a unique name.
[600ms]
[curious] And the existing keyword points at something already deployed, so it's referenced rather than created again.

## Step 6 · Deploy it: choose the scope

[calm] The command decides where the deployment lands, and the same commands deploy a JSON template or a Bicep file.
[600ms]
[confident] The file will land in the resource group by default, and it only goes elsewhere when it sets a target scope.
[600ms]
[reflective] For subscription, management group and tenant deployments, the commands also take a location, because the deployment record itself has to live somewhere.

## Step 7 · Incremental, Complete and what-if

[calm] Incremental mode is the default, and it leaves resources the template doesn't mention alone.
[600ms]
[serious] Complete mode deletes whatever the template doesn't list, so it's not recommended and is being phased out. Use deployment stacks when you need deletes.
[600ms]
[determined] Flip the switch to see the difference, and always run what-if first to preview the changes.

## Step 8 · Export a deployment as a template

[curious] The resources exist, but nobody kept the file. What now?
[600ms]
[confident] Export a template, either as a snapshot of the group as it is today, or as the exact template from a past deployment.
[600ms]
[reassuring] In the portal, choose Export template on the resource group, or open Deployments, pick one, and select Template.

## Step 9 · Convert: decompile and build

[calm] Move between the two formats with the Bicep tools.
[600ms]
[confident] Decompile turns an ARM template into Bicep. Build turns Bicep into an ARM template, and the two are functionally equivalent.
[600ms]
[hesitant] Decompile is best effort, because there's no guaranteed mapping from JSON to Bicep. Fix any warnings or errors it reports.

## Step 10 · Troubleshoot a failed deployment

[serious] There are three kinds of deployment error, and each shows up in a different place.
[600ms]
[confident] Validation and preflight errors appear in the activity log, but not in the deployment history.
[600ms]
[curious] A Bicep file with syntax errors never compiles at all, so it isn't in the activity log either. Work out which kind you have first.

## Step 11 · ARM, Bicep or template spec: pick one

[calm] Pick by the job in front of you. ARM templates and Bicep have the same capabilities, and Learn recommends Bicep for its easier syntax.
[600ms]
[confident] A template spec stores a template in Azure, so you can share it with Azure RBAC and let people deploy it without write access to the template.
[600ms]
[proud] Then check yourself against the A Z one oh four skill: automate deployment of resources by using ARM templates or Bicep files.
