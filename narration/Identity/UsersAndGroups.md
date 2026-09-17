# Narrator Script - Users and Groups

**Source animation:** journeys/Identity/UsersAndGroups.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/users-groups.mjs.

## Step 1 · A teammate without a directory record

[calm] A teammate without a directory record.
[600ms]
Maya joins Contoso Operations. Her onboarding request is ready, but the directory does not contain her user yet.
[600ms]
[serious] Alex already has a partner record. Maya needs her own identity, not a shared account.

## Step 2 · Give Maya an identity

[calm] Give Maya an identity.
[600ms]
An authorized administrator creates Maya's cloud user. A name, sign-in identifier and department describe her; they do not grant permissions.
[600ms]
[serious] Example values only. Authorized administrators control these attributes; a department is not an Azure role.

## Step 3 · Organize the team

[calm] Organize the team.
[600ms]
Contoso creates Operations as a security group. Its owners manage the group; its members are the people it brings together.
[600ms]
[serious] Security groups organize resource access. Microsoft 365 groups support collaboration. Owners and members are separate relationships.

## Step 4 · Assignment or an attribute rule?

[calm] Assignment or an attribute rule?
[600ms]
Assigned membership is explicit. Dynamic membership follows a rule, with attribute changes processed before the member list updates.
[600ms]
[serious] Dynamic users need sufficient Entra ID P1 or Intune for Education licenses. Protect write access to rule attributes. Processing is not instant.

## Step 5 · Verify the actual members

[calm] Verify the actual members.
[600ms]
Inspect the processed membership, not just a matching rule preview. Maya's membership and the owners' responsibilities are different.
[600ms]
[serious] Dynamic members follow the rule; you cannot manually add or remove them. Alex does not match this example's Operations rule.

## Step 6 · People organized. Access still separate.

[calm] People organized. Access still separate.
[600ms]
The roster supplies identities; the group collects members. Contoso must separately authorize that group on each intended resource.
[600ms]
[serious] Group membership can convey an existing group permission. This example has no resource assignments, so membership alone grants no access.
