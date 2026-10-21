# Narrator Script — Architect · Design access: roles, PIM and access reviews

**Source animation:** [IdentityGovernance.html](../../journeys/Architect/IdentityGovernance.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/overview>
- <https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview>
- <https://learn.microsoft.com/azure/key-vault/general/overview>
- <https://learn.microsoft.com/azure/key-vault/managed-hsm/overview>
- <https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure>
- <https://learn.microsoft.com/entra/id-governance/access-reviews-overview>
- <https://learn.microsoft.com/entra/id-governance/entitlement-management-overview>
- <https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows>
- <https://learn.microsoft.com/entra/id-governance/identity-governance-overview>

---

## Step 1 · Contoso: who has access to what?

[calm] Contoso's access has grown without a clear plan: administrators hold powerful roles and a former contractor still appears in the picture.
[600ms]
[curious] The problem is not simply whether someone can sign in, but what they can reach afterwards.
[600ms]
[reassuring] We will separate role scope, workload credentials, privileged access and the ongoing review of permissions.

## Step 2 · Azure roles vs Microsoft Entra roles

[calm] Azure roles govern Azure resources, while Microsoft Entra roles govern directory capabilities and administration.
[600ms]
[curious] In the resource hierarchy, a role assignment combines a principal, a role definition and the scope where it applies.
[600ms]
[reassuring] Choose the smallest appropriate role at the narrowest scope, remembering that inherited permissions can extend the effective access.

## Step 3 · Workloads: use a managed identity

[calm] The storefront needs access to the order database and storage, not another password embedded in its code.
[600ms]
[curious] A managed identity gives the application an identity, and a role assignment grants access to each destination.
[600ms]
[reassuring] System-assigned identity follows one resource's lifecycle; user-assigned identity is managed separately and can be shared by resources.

## Step 4 · Secrets, keys and certificates

[calm] The storefront still has several different sensitive items: a secret, an encryption key and a certificate.
[600ms]
[curious] Key Vault keeps those items behind controlled access, and the protection options differ by the kind of key security required.
[600ms]
[reassuring] Choose the protection model and authorization deliberately, rather than treating a vault as an unrestricted place to put credentials.

## Step 5 · Privileged access: eligible, not always on

[calm] Always-on administrator access creates risk even when no administrative work is taking place.
[600ms]
[curious] With Privileged Identity Management, an eligible administrator activates the role when needed, with requirements such as approval or multifactor authentication.
[600ms]
[reassuring] Watch the time window close: the privilege ends instead of becoming a permanent everyday permission.

## Step 6 · Access reviews: does anyone still need this?

[calm] Permissions outlive their original purpose when people move jobs or projects finish.
[600ms]
[curious] An access review asks a responsible reviewer whether each assignment is still needed, then applies the result.
[600ms]
[reassuring] Make that a recurring decision, so Contoso can remove stale access instead of relying on someone to remember every old grant.

## Step 7 · Entitlement management: access packages

[calm] A partner needs several connected resources for one project, rather than a collection of unrelated access requests.
[600ms]
[curious] An access package bundles the required groups, applications and sites with a request policy, an approver and an expiry.
[600ms]
[reassuring] Contoso can offer the package for the right duration while keeping ownership and approval visible.

## Step 8 · Lifecycle workflows: joiner, mover, leaver

[calm] Follow the employee lifecycle from joining, through changing roles, to leaving the organization.
[600ms]
[curious] Lifecycle workflows run the related access tasks when the configured conditions and identity attributes match.
[600ms]
[reassuring] The point is repeatable execution: the right tasks happen at the right transition, instead of depending on a manual checklist alone.

## Step 9 · All in one: which tool answers which question

[calm] The finished map separates access design into questions, with a different tool answering each one.
[600ms]
[curious] Roles define permission, managed identities avoid application secrets, and Key Vault protects the sensitive material that remains.
[600ms]
[reassuring] PIM, reviews, access packages and lifecycle workflows control when access starts, when it is checked and when it ends.

