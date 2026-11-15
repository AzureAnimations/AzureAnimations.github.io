# Narrator Script - Governance and Compliance

**Source animation:** journeys/Fundamentals/GovernanceAndCompliance.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/governance/policy/overview ; https://learn.microsoft.com/azure/azure-resource-manager/management/lock-resources ; https://learn.microsoft.com/azure/cloud-adoption-framework/govern/monitor-cloud-governance -->

## Step 1 · Standards nobody checks

[calm] Contoso agreed that shop resources need an Environment tag, yet the next deployment is missing it. A standard written in a document doesn't automatically check a resource.
[600ms]
[confident] The team needs a rule that is evaluated where resources are created, so omissions become visible or can be prevented.

## Step 2 · Write the rule, then apply it

[calm] An Azure Policy definition describes the rule, such as requiring an Environment tag on supported resources. An assignment specifies where that rule applies.
[600ms]
[confident] Contoso assigns it to the shop subscription. Defining a policy and applying it are separate steps; the assignment gives the rule a management scope.

## Step 3 · First, observe with Audit

[calm] With the Audit effect, the missing tag is reported as non-compliant, but this policy still lets the deployment proceed. Contoso can see where its standard isn't being followed.
[600ms]
[confident] Audit is useful for understanding the impact of a rule before enforcement. Reporting the problem doesn't automatically fix the resource.

## Step 4 · Then enforce with Deny

[calm] With Deny, the policy blocks this request because the required tag is missing. Contoso adds the tag and submits the corrected request again.
[600ms]
[confident] This prevents the non-compliant change from proceeding. It doesn't delete existing resources, and passing this rule doesn't bypass other permission or policy checks.

## Step 5 · Protect what already exists

[calm] Contoso also wants to prevent accidental deletion of a production resource. A cannot-delete lock blocks a management request to delete it while the lock remains in place.
[600ms]
[confident] An authorized administrator can remove the lock. It's protection against certain management changes, not an irreversible guarantee that the resource can never be deleted.

## Step 6 · The resource is not its data

[calm] Locking the database resource isn't the same as locking every customer record inside it. An authorized data operation can still change records because resource locks apply to management operations.
[600ms]
[confident] Contoso needs separate data permissions and recovery controls. A resource lock isn't a backup or a complete data-protection strategy.

## Step 7 · Govern the data too

[calm] Contoso also needs to know what information it holds and where that information lives. Microsoft Purview can discover and classify data from supported, connected sources.
[600ms]
[confident] That inventory guides decisions about sensitive information and its handling. The team still establishes and operates the controls needed to meet its requirements.

## Step 8 · Governance - All in One

[calm] Policy checks what resources should look like; locks protect selected management operations; data governance helps Contoso understand the information it holds. Each addresses a different need.
[600ms]
[confident] These controls support good governance, not an automatic compliance guarantee. Next, Contoso makes deployments repeatable so standards don't depend on remembering every manual step.