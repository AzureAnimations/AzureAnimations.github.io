# Narrator Script - Identity and Security

**Source animation:** journeys/Fundamentals/IdentityAndSecurity.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/role-based-access-control/overview ; https://learn.microsoft.com/security/zero-trust/zero-trust-overview ; https://learn.microsoft.com/azure/security/fundamentals/management-monitoring-overview -->

## Step 1 · Who are you, and what may you do?

[calm] Maya needs to inspect Contoso's production shop, not change it. Before allowing access, the system must establish who she is and whether the requested action is permitted.
[600ms]
[confident] Those are separate questions: authentication proves identity; authorization decides access. A successful sign-in isn't permission to do everything.

## Step 2 · The directory holds the identities

[calm] Microsoft Entra ID is Contoso's identity directory, containing users, groups, and application identities. Maya has an identity the organization can manage instead of an unrelated account for every resource.
[600ms]
[confident] The directory helps establish who is asking. What that identity may do on Azure resources is controlled through appropriate permissions.

## Step 3 · Prove who is asking

[calm] Maya signs in and proves her identity. Multifactor authentication uses different kinds of proof, while single sign-on reduces repeated sign-ins across connected applications.
[600ms]
[confident] Passwordless methods provide another sign-in option. Once authentication succeeds, the system still needs to evaluate whether Maya may perform the action she requested.

## Step 4 · Check the sign-in conditions

[calm] Not every sign-in attempt has the same context. Conditional Access lets Contoso apply requirements based on signals about the attempted access, such as requiring multifactor authentication.
[600ms]
[confident] Meeting those requirements helps protect entry. It doesn't replace the permissions that determine what Maya can do after access is granted.

## Step 5 · Then allow the action

[calm] Contoso assigns Maya the Reader role at the production resource group. The role defines the permitted actions; the scope defines where they apply.
[600ms]
[confident] She can inspect the resources without this role granting changes. Reading resource settings isn't the same as automatically reading every customer's data inside those resources.

## Step 6 · Same person, different actions

[calm] Maya's identity hasn't changed, but the requested action matters. Inspecting settings is allowed by Reader; modifying them isn't granted by that role.
[600ms]
[confident] This example assumes no other role assignments give her more access. Permissions can add together, so assigning Reader doesn't cancel permissions she already has elsewhere.

## Step 7 · Assume nothing is safe by default

[calm] Zero Trust means verifying explicitly, using the least access needed, and assuming a breach is possible. Being inside a network isn't enough reason to trust a request.
[600ms]
[confident] Contoso uses layers of protection so a failure in one control doesn't leave the entire shop exposed.

## Step 8 · Keep checking the security posture

[calm] Permissions aren't the end of security work. Microsoft Defender for Cloud helps Contoso review its security posture, find recommendations, and identify threats through the protections it enables.
[600ms]
[confident] The team still investigates alerts and makes improvements. A recommendation describes work to consider; it doesn't mean the problem has already been fixed.

## Step 9 · Identity and Security - All in One

[calm] Follow Maya's path: establish an identity, verify the sign-in, apply access conditions, then authorize the requested action at the right scope. Keep layered protections and review them over time.
[600ms]
[confident] Contoso can now manage access deliberately. Next, it needs the same clarity about what the shop is costing.