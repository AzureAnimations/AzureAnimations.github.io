# Narrator Script - Authentication and Access

**Source animation:** journeys/Identity/Authentication.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/authentication.mjs.

## Step 1 · Two apps. Repeated sign-ins.

[calm] Two apps. Repeated sign-ins.
[600ms]
Maya opens the orders app and Azure management. Separate sign-in prompts interrupt her work; a successful sign-in still does not answer what she may do.
[600ms]
[serious] The two apps are separate entry points. Authentication proves identity; each app or service still controls its own permissions.

## Step 2 · Reuse an eligible session

[calm] Reuse an eligible session.
[600ms]
With Microsoft Entra single sign-on, compatible apps can reuse Maya's sign-in session. A session reduces repeated prompts, not the need to satisfy access policies.
[600ms]
[serious] Session reuse depends on app integration and session validity. New requirements, expiry or policy checks can still trigger another prompt.

## Step 3 · Compare the authentication evidence

[calm] Compare the authentication evidence.
[600ms]
A password is one factor. Password plus Authenticator adds another. A FIDO2 security key unlocked with a PIN can be both passwordless and multifactor.
[600ms]
[serious] These methods must be enabled and registered. Passwordless and MFA overlap; two passwords are not two different factors.

## Step 4 · Evaluate the required strength

[calm] Evaluate the required strength.
[600ms]
After initial authentication, Contoso's hypothetical rule requires MFA in the office and phishing-resistant MFA remotely. Existing session evidence must satisfy the applicable requirement.
[600ms]
[serious] Illustrative rule, not an Azure default. Conditional Access needs Entra ID P1 or an included license; risk-based policies need P2.

## Step 5 · Check the resource permission too

[calm] Check the resource permission too.
[600ms]
Meeting the sign-in policy does not assign an Azure role. Maya needs Reader at shop-vm scope to read its configuration in this bounded example.
[600ms]
[serious] Assume no other roles or deny assignments and completed propagation. Reader permits control-plane reads, not modification, VM login or data access.

## Step 6 · Session, method, policy, permission

[calm] Session, method, policy, permission.
[600ms]
SSO reuses a session; authentication supplies evidence; Conditional Access checks requirements; Azure RBAC grants resource permissions. No one layer replaces the others.
[600ms]
[serious] An office location is not a security guarantee. Real policies consider the required signals and all applicable policies; this example is deliberately bounded.
