# Narrator Script - Your tenant is a house

**Source animation:** journeys/Identity/TenantsAndIdentity.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/concept-understand-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview -->

## Step 1 · One key opens everything

[curious] Contoso has moved into a house where everyone shares one key. Even Mia can switch on the oven.
[600ms]
That is our picture of access without boundaries, not a recommended sign-in setup.
[600ms]
[confident] We need separate identities, and permissions that match what each person should do.

## Step 2 · The house is your tenant

[calm] Think of the house as Contoso's Microsoft Entra tenant: its own directory of identities.
[600ms]
The family belongs here, while a neighbour can be invited without becoming part of the household.
[600ms]
[confident] The tenant gives us a place to manage those identities. It does not automatically grant access to every Azure resource.

## Step 3 · Every house needs an address

[calm] The house starts with an address: Contoso dot on Microsoft dot com.
[600ms]
Contoso can verify ownership of Contoso dot com using a DNS record, then use that custom domain for sign-in names.
[600ms]
[confident] The original domain remains. A familiar address changes the name on the gate, not the permissions inside.

## Step 4 · Who lives here

[calm] Dad, Mum, Noah and Mia each need their own user identity.
[600ms]
The grown-ups and the kids become groups, so access can be assigned to a group instead of managed person by person.
[600ms]
[confident] A group is a membership list. What that list can access depends on the permissions assigned to it.

## Step 5 · House rules run the house

[calm] Microsoft Entra roles are the house-administration keyring. They allow specific directory tasks, such as managing users.
[600ms]
Dad holds Global Administrator in this example; Mum has User Administrator.
[600ms]
[confident] Those are not interchangeable jobs. Use the least-privileged role and a supported scope that fit the task, rather than giving every helper control of the house.

## Step 6 · Appliance keys are a second keyring

[calm] Now look at the appliances. They represent Azure resources, with a separate permission keyring: Azure role-based access control.
[600ms]
An Entra administrator is not automatically allowed to manage these resources.
[600ms]
[confident] An Azure role assignment combines who, which role, and where it applies. The two permission systems are separate by default.

## Step 7 · The whole house — All in One

[calm] Keep three questions in mind: who belongs here, what may they do, and where does that permission apply?
[600ms]
Users and groups answer the first. Entra roles and Azure resource roles answer different parts of the second.
[600ms]
[confident] Scope answers the third. Next, we will build the family register instead of sharing one identity.

## Step 8 · The same house, in the Azure portal

[confident] The upper band shows Dad and Mum, their Entra roles, and the tenant where those roles apply.
[600ms]
Below it, the grown-ups have Storage Blob Data Reader on the storage account; Noah has Virtual Machine Contributor on the virtual machine.
[600ms]
[confident] Each assignment grants only its role's actions at its scope. A directory role is not an Azure resource permission.
