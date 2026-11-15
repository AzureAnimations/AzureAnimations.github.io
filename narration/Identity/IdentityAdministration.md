# Narrator Script - Running the house

**Source animation:** journeys/Identity/IdentityAdministration.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-administrator -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-licensing -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks -->
<!-- Reference: https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users -->

## Step 1 · Three favours, three different jobs

[curious] Mia needs three kinds of help: resetting a password, receiving a product license, and updating a recovery method.
[600ms]
The colleague helping her is a different person, with their own administrative permissions.
[600ms]
[confident] Mia is a cloud-only user without a privileged role in this example. We can delegate the work without giving the helper control of the whole tenant.

## Step 2 · Hand over one chore, not the house

[calm] Match the helper's role to the task. Password Administrator is the narrower choice for resetting this non-admin user's password.
[600ms]
License Administrator handles license assignments; Authentication Administrator can manage supported authentication-method tasks.
[600ms]
[confident] Choosing a different chore does not change the role held by the operator. The actual role assignment must authorize that task for Mia.

## Step 3 · A seat at the table has to exist

[calm] A product license is a seat that must be available and assigned to Mia.
[600ms]
The operator needs permission, and the account must meet requirements such as a valid usage location. Buying seats alone does not assign one.
[600ms]
[confident] An assignment error needs investigation and retry. A Microsoft 365 license still does not give Mia an Azure resource role.

## Step 4 · Register the spare key before you need it

[calm] Recovery works best when Mia prepares before forgetting her password.
[600ms]
Contoso's example policy allows email and mobile and requires two registered methods. That number is a choice in this example, not a universal default.
[600ms]
[confident] Registration stores the recovery information. It does not prove that a later reset request really comes from Mia.

## Step 5 · Prove it is you, then cut a new key

[calm] Now Mia needs a forgotten-password reset. She must be eligible, have registered methods, and successfully complete the required verification.
[600ms]
Only then can she choose a compliant new password. This demonstration never asks for a real password.
[600ms]
[confident] Business Standard supports this cloud-only reset. Hybrid password writeback has additional licensing and configuration requirements.

## Step 6 · Help out without holding every key

[calm] Keep four jobs separate: roles authorize the helper, licenses enable services, registration prepares recovery, and verification checks the person.
[600ms]
Having one piece does not guarantee the others. A license cannot stand in for identity verification.
[600ms]
[confident] This workbench illustrates the checks; it does not change real accounts. The goal is useful delegation without unnecessary privilege.

## Step 7 · Running the house, in Microsoft Entra ID

[confident] The upper rows show the operator's password and license roles, plus Mia resetting her own password through self-service recovery.
[600ms]
Below, the operator initially has no Azure resource permission. A separate Reader assignment then permits configuration reads on the shop virtual machine.
[600ms]
[confident] Directory administration, product licensing and Azure resource access remain different responsibilities.
