# Narrator Script - The guest room

**Source animation:** journeys/Identity/ExternalIdentities.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/user-properties -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/redemption-experience -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/tenant-configurations -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview -->

## Step 1 · The neighbour who needs to help

[curious] Alex works at Partner and already has a sign-in there. Contoso needs help inspecting its shop virtual machine.
[600ms]
We should not share a family account or copy Alex's password into Contoso.
[600ms]
[confident] Business-to-business collaboration lets Contoso invite that existing identity, then grant only the access the work requires.

## Step 2 · Invite Alex over

[calm] An authorized inviter creates a guest record for Alex in Contoso's directory.
[600ms]
The invitation is pending. The guest record exists, but Alex has not yet accepted it using their home identity.
[600ms]
[confident] No password is copied. Invitation restrictions and cross-tenant settings still apply; this is not an unrestricted open door.

## Step 3 · Alex accepts, using their own key

[calm] Alex accepts the invitation by signing in with the Partner identity and completing the required consent.
[600ms]
That connects the invitation to the person who will use it.
[600ms]
[confident] Acceptance is not a resource permission. Contoso still decides which resource Alex can access and what actions are allowed.

## Step 4 · One person, two house registers

[calm] One person now appears in two directories: the home identity at Partner, and the guest object at Contoso.
[600ms]
Guest and Member describe the relationship and default directory permissions, not where the credentials originate.
[600ms]
[confident] Changing that label does not move Alex's identity to Contoso or create a new password there.

## Step 5 · Access exactly one appliance

[calm] Contoso assigns Reader to Alex at the scope of just the shop virtual machine.
[600ms]
Once sign-in checks and permission propagation are complete, Alex can inspect its configuration, but cannot delete it with Reader.
[600ms]
[confident] This role does not grant operating-system login or data access. Removing the assignment removes this permission, not the guest record.

## Step 6 · A guest, not a resident

[calm] Keep the three pieces separate: Partner proves Alex's identity, Contoso holds the guest record, and a scoped role grants resource access.
[600ms]
This is collaboration in Contoso's workforce tenant.
[600ms]
[confident] An external tenant for customer sign-up is a different scenario. Inviting a colleague does not require turning this directory into a customer identity system.

## Step 7 · The guest, in Microsoft Entra ID

[confident] Read the picture from Alex's home directory to the guest object, then to the Reader assignment on the virtual machine.
[600ms]
The password stays at Partner. Whether Contoso accepts Partner's multifactor-authentication claim depends on cross-tenant trust settings.
[600ms]
[confident] The final rows contrast permitted configuration reads with refused deletion. Being invited never meant being allowed to do everything.
