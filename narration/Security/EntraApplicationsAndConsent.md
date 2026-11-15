# Narrator Script — Security · Microsoft Entra applications: registrations, enterprise apps and consent — Azure Security Journey

**Source animation:** [EntraApplicationsAndConsent.html](../../journeys/Security/EntraApplicationsAndConsent.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals>
- <https://learn.microsoft.com/entra/identity-platform/permissions-consent-overview>
- <https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview>
- <https://learn.microsoft.com/entra/identity-platform/quickstart-register-app>

---

## Step 1 · An app wants your mailbox

[curious] Ana signs in to MailTidy, a new app, and it asks to reach her mailbox.
[600ms]
[calm] Priya runs identity at Contoso. So should anyone say yes, and who decides?
[600ms]
[confident] This lesson follows one app through registration, consent, assignment and review in Microsoft Entra ID.

## Step 2 · App registration: the app’s identity

[calm] Sam, the developer, registers MailTidy once. The registration defines the app.
[600ms]
[curious] It sets what the app is called, where sign-in returns, and how it proves who it is.
[600ms]
[confident] Registering creates the application object in its home tenant, with a globally unique client ID.

## Step 3 · Enterprise application: the app in your tenant

[calm] Each tenant that uses MailTidy gets its own local copy, called a service principal.
[600ms]
[curious] In Entra it appears under Enterprise applications, and that's where Contoso manages it.
[600ms]
[confident] Think of the application object as the global template, and the service principal as the local instance.

## Step 4 · Delegated or application permissions

[calm] There are two kinds of permission. With delegated, the app acts as the signed-in user.
[600ms]
[serious] With application, it acts as itself, with no user present. It applies to all the data it covers, such as every mailbox.
[600ms]
[confident] Delegated access only reaches what that user could reach.

## Step 5 · Consent: who can say yes

[calm] Consent is how permissions get granted. A user can consent for their own data.
[600ms]
[curious] An administrator can consent for everyone, and some requests need one.
[600ms]
[serious] Application permissions, and many high-privilege delegated ones, can only be approved by an administrator.

## Step 6 · User consent settings

[calm] Priya decides whether users may consent at all. There are three built-in choices.
[600ms]
[curious] No user consent. Verified publishers with low-impact permissions. Or any app.
[600ms]
[confident] With the middle option, you classify which permissions count as low impact. Admins can also write custom consent policies.

## Step 7 · Admin consent and the workflow

[calm] When users can't consent, the admin consent workflow lets them request approval.
[600ms]
[curious] Reviewers are notified, one decides, and the user hears back.
[600ms]
[serious] Being named a reviewer doesn't raise anyone's privileges. To approve, they need the permissions to grant that consent.

## Step 8 · Try it: approve or deny

[excited] Three consent requests arrive. Decide each one, then see why.
[600ms]
[curious] Ask three things. Who acts? Is the publisher verified? Is the permission low impact?
[600ms]
[reassuring] The right answers follow Contoso's setting, which lets users consent only for verified publishers and low-impact permissions.

## Step 9 · Review and revoke permissions

[serious] A grant lasts until someone removes it. So review what each app holds.
[600ms]
[confident] Then revoke the excess. You need at least the Cloud Application Administrator role.
[600ms]
[calm] The portal revokes admin-consented permissions. User grants are revoked with Microsoft Graph or PowerShell.

## Step 10 · Assign users and require assignment

[calm] Consent says what the app may do. Assignment says who may use it.
[600ms]
[confident] With assignment required, only assigned users and groups can sign in.
[600ms]
[reflective] Then users can't consent themselves, so an admin must grant tenant-wide consent. Group assignment needs a Premium licence.

## Step 11 · Secrets, certificates or federated credentials

[calm] An app proves who it is with a credential. Choose the one with the least to leak.
[600ms]
[curious] Nothing stored beats a certificate, and a certificate beats a client secret.
[600ms]
[serious] Managed identities and federated credentials remove stored secrets. Client secrets shouldn't be used in production.

## Step 12 · Recap: register, consent, assign, review

[calm] Four moves keep an app under control. Register it, set who can consent, assign who can use it, and review what it holds.
[600ms]
[confident] Together they cover the S C five hundred skills for application identity and consent.
[600ms]
[proud] They sit in the manage identity, access, and governance domain.
