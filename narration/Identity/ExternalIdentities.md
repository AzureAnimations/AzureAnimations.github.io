# Narrator Script - External Identities

**Source animation:** journeys/Identity/ExternalIdentities.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/external.mjs.

## Step 1 · A partner needs to collaborate

[calm] A partner needs to collaborate.
[600ms]
Alex works for Partner and already has a sign-in. Contoso needs Alex to review shop-vm configuration without creating a shared account.
[600ms]
[serious] This example uses an existing Partner Entra account. B2B also supports other configured identity providers.

## Step 2 · Invite Alex into Contoso

[calm] Invite Alex into Contoso.
[600ms]
An authorized inviter creates Alex's B2B user record in Contoso. The invitation is pending; Alex's home account stays in Partner.
[600ms]
[serious] Invitation permissions, domain restrictions and cross-tenant settings still apply. No password is copied into Contoso.

## Step 3 · Redeem the invitation

[calm] Redeem the invitation.
[600ms]
Alex signs in with the home identity and completes consent. Acceptance links the collaboration, but does not create an Azure role assignment.
[600ms]
[serious] The selector compares example invitation states; it does not revoke real consent. Contoso must authorize resources separately.

## Step 4 · One person, two directory records

[calm] One person, two directory records.
[600ms]
The home identity authenticates Alex. Contoso holds a separate user object. Guest or Member describes the relationship, not the identity provider.
[600ms]
[serious] Guest and Member have different default directory permissions. Changing UserType does not change the identity provider; reflect the real organizational relationship.

## Step 5 · Authorize just the intended resource

[calm] Authorize just the intended resource.
[600ms]
Contoso assigns Reader to Alex at shop-vm scope. A configuration read can succeed; deletion cannot. Removing the role does not undo invitation acceptance.
[600ms]
[serious] Assume sign-in policies are satisfied, changes have propagated, and no other roles or deny assignments apply. Reader grants no guest-OS login or data access.

## Step 6 · External identity. Bounded collaboration.

[calm] External identity. Bounded collaboration.
[600ms]
Alex keeps the home identity, Contoso manages its representation, and a scoped role supplies the permission. These are separate responsibilities.
[600ms]
[serious] B2B collaboration belongs in a workforce tenant. A separate external tenant serves customer-facing sign-up and sign-in scenarios.
