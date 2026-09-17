# Narrator Script - Tenant, Identity and Azure Access

**Source animation:** journeys/Identity/TenantsAndIdentity.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/content.mjs.

## Step 1 · Signed in. Still denied.

[calm] Signed in. Still denied.
[600ms]
Maya signs in but cannot read shop-vm configuration. In this example, no other roles or deny assignments apply.
[600ms]
[serious] Read VM configuration: access denied.

## Step 2 · Start with the tenant

[calm] Start with the tenant.
[600ms]
Microsoft Entra ID provides the identity service. Contoso's tenant is its directory instance.
[600ms]
[serious] A tenant is not a VM region. Entra roles do not automatically grant Azure resource access.

## Step 3 · People and groups live here

[calm] People and groups live here.
[600ms]
Maya's user and the operations security group are directory objects. Membership is not a resource permission.
[600ms]
[serious] Maya is a member. The group has no Azure role assignment yet.

## Step 4 · One directory, two subscriptions

[calm] One directory, two subscriptions.
[600ms]
Contoso's development and production subscriptions trust the same tenant, with separate resource scopes.
[600ms]
[serious] Each subscription trusts one tenant; a tenant can serve multiple subscriptions.

## Step 5 · Authentication answers who

[calm] Authentication answers who.
[600ms]
Microsoft Entra ID authenticates Maya. That alone does not authorize the VM configuration request.
[600ms]
[serious] Read VM configuration: access denied.

## Step 6 · A role permits the read

[calm] A role permits the read.
[600ms]
An authorized administrator assigns Operations the Reader role at shop-vm scope. Maya can then read its configuration.
[600ms]
[serious] Read allowed after permissions take effect. Reader does not grant guest-OS login.

## Step 7 · Identity and Access - All in One

[calm] Identity and Access - All in One.
[600ms]
The tenant supplies identities. Subscriptions organize resources. Azure RBAC grants actions at a chosen scope.
[600ms]
[serious] Who: Maya via Operations. What: read. Where: shop-vm.
