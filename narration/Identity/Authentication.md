# Narrator Script - The front door

**Source animation:** journeys/Identity/Authentication.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2 -->

## Step 1 · Unlocking the same door twice

[curious] Mum opens the orders app, then Azure management, and faces another sign-in prompt.
[600ms]
Both entry points need to know who she is, but repeating a password does not tell either service what she may do.
[600ms]
[confident] Authentication proves identity. Authorization decides which actions that identity is allowed to take.

## Step 2 · Reuse an eligible session

[calm] Single sign-on can reuse Mum's valid session when the applications support it.
[600ms]
That saves another sign-in without turning off the application's permission checks.
[600ms]
[confident] An expired session or a new policy requirement can still prompt her again. Single sign-on means eligible reuse, not a promise that she will never be challenged.

## Step 3 · Not every key is equally convincing

[calm] Compare the proofs Mum can offer: a password, a password plus Authenticator, or a FIDO two security key unlocked with a PIN.
[600ms]
The key combines possession with local verification, so it can be passwordless and multifactor at the same time.
[600ms]
[confident] Methods must be enabled and registered. Two passwords are still the same kind of factor.

## Step 4 · A doorbell that decides how hard to check

[calm] Conditional Access checks the situation and sets the required proof for this sign-in.
[600ms]
In Contoso's example, the office accepts multifactor authentication; the café requires phishing-resistant proof. That is an authored policy, not an Azure default.
[600ms]
[confident] An office is not automatically safe. Real policies consider applicable signals and require the appropriate Entra license.

## Step 5 · Getting in is not the same as being allowed

[calm] Mum has passed the sign-in checks, but the virtual machine still asks a different question: what may she do here?
[600ms]
A Reader assignment at this scope allows her to inspect the machine's configuration.
[600ms]
[confident] It does not permit changes, operating-system login or data access. Passing the front door never hands over the appliance keyring.

## Step 6 · Session, proof, policy, permission

[calm] Four layers now work together: a reusable session, an authentication method, Conditional Access requirements, and resource permissions.
[600ms]
Changing one does not replace the others. Stronger proof does not create a role assignment.
[600ms]
[confident] Use the sign-in layers to establish trust, then use scoped authorization to limit what that trusted identity can do.

## Step 7 · The front door, in Microsoft Entra ID

[confident] The upper band joins Mum's FIDO two key, Conditional Access and eligible single sign-on across the two apps.
[600ms]
The lower band shows a separate Reader assignment on the shop virtual machine, and no assignment on the storage account.
[600ms]
[confident] Same signed-in person, different resource outcomes. Identity proof and permission remain separate decisions.
