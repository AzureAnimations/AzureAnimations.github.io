# Narrator Script - Who lives here

**Source animation:** journeys/Identity/UsersAndGroups.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups -->

## Step 1 · The family lives here. The register doesn’t know them.

[curious] Noah lives in the house, but the register has no record of him yet.
[600ms]
Without his own identity, the system cannot distinguish him from someone else using a shared login.
[600ms]
[confident] Alex already has an identity next door. Noah needs his own Contoso record before we decide what he may access.

## Step 2 · Give Noah his own record

[calm] An authorized administrator creates Noah's user record, with a name, sign-in and department.
[600ms]
These attributes describe him. Setting his department to Kids does not make it an Azure permission.
[600ms]
[confident] We have established who Noah is in the directory, not which appliances he can use.

## Step 3 · One group for the children

[calm] The kids become a security group, bringing Noah and Mia together on one list.
[600ms]
A group owner manages that list; a member belongs to it. Those are separate relationships.
[600ms]
[confident] Security groups can receive resource permissions. Microsoft 365 groups serve collaboration needs, so choose the group type for its purpose.

## Step 4 · Write his name, or write a rule

[calm] There are two ways to fill the list: add people by hand, or use a dynamic membership rule.
[600ms]
Here the rule selects users whose department is Kids. Changing an attribute can change who qualifies.
[600ms]
[confident] Dynamic membership needs the appropriate licenses, and processing takes time. Protect who can edit the attributes that drive access.

## Step 5 · Check who is really on the list

[calm] Check the actual member list, not just whether Noah's attributes match the rule.
[600ms]
The rule must be processed before its result appears. A dynamic group's membership is managed by that rule, not by hand.
[600ms]
[confident] Alex does not match this example, but other rules can include guests. Ownership alone does not mean membership.

## Step 6 · Everybody has a key — to the house

[calm] Noah now has his own identity and a place on the right list. Think of sign-in as proving whose door key he holds.
[600ms]
No resource role has been assigned in this example, so the appliances remain unavailable.
[600ms]
[confident] Membership can carry an existing group permission. Without an assignment, the list itself grants no resource access.

## Step 7 · The register, in Microsoft Entra ID

[confident] The top rows compare assigned membership for the grown-ups with rule-based membership for the kids.
[600ms]
Below, Storage Blob Data Reader gives the grown-ups data access at the storage account's scope.
[600ms]
[confident] The kids have no role on the virtual machine. Membership says who is included; the assignment says what they can do and where.
