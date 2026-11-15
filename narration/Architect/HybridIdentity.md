# Narrator Script — Architect · Design hybrid identity and on-premises access

**Source animation:** [HybridIdentity.html](../../journeys/Architect/HybridIdentity.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity/hybrid/whatis-hybrid-identity>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso>
- <https://learn.microsoft.com/entra/identity/domain-services/overview>
- <https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy>
- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>

---

## Step 1 · Two directories, one workforce

[calm] Contoso's employees already exist in on-premises Active Directory, but their cloud applications use Microsoft Entra ID.
[600ms]
[curious] The two directories must represent the same workforce instead of creating a second set of unrelated accounts.
[600ms]
[reassuring] We will choose synchronization, sign-in and application access separately, because they solve different parts of this problem.

## Step 2 · Sync: Cloud Sync or Connect Sync?

[calm] Both synchronization options bring users and groups into Microsoft Entra ID, but the operating model differs.
[600ms]
[curious] Cloud Sync uses lightweight agents with cloud-managed configuration, while Connect Sync runs a fuller synchronization engine on a server.
[600ms]
[reassuring] Compare the requirements and customization needs before choosing; synchronizing an identity does not by itself choose its sign-in method.

## Step 3 · Sign-in: who checks the password?

[calm] Follow each sign-in path and ask one question: where is the password actually checked?
[600ms]
[curious] Password hash synchronization validates in the cloud, pass-through authentication reaches on-premises domain controllers, and federation hands authentication to another system.
[600ms]
[reassuring] Pick the simplest method that satisfies Contoso's requirements, including any requirement to check on-premises account state.

## Step 4 · Single sign-on: no repeat prompts

[calm] Single sign-on avoids asking employees to authenticate again every time they open a cloud application.
[600ms]
[curious] The diagram separates the primary refresh token used by joined devices from Seamless SSO on corporate domain-joined devices.
[600ms]
[reassuring] Choose the mechanism that matches the device and sign-in design, rather than assuming every form of SSO works identically.

## Step 5 · Legacy apps: managed domain or your own DCs?

[calm] Contoso's legacy application still expects domain services such as LDAP, Kerberos or domain join.
[600ms]
[curious] A managed domain reduces administration, while running Active Directory domain controllers on Azure virtual machines offers more control.
[600ms]
[reassuring] The deciding question is which capabilities the application needs and who will operate the domain controllers it depends on.

## Step 6 · On-premises apps: reach them without a VPN

[calm] Remote staff need the applications inside Contoso's network, without opening inbound connections to those applications.
[600ms]
[curious] Application proxy publishes web applications, while Private Access addresses a broader set of private applications and resources.
[600ms]
[reassuring] Follow the outbound connector path, then choose the access approach that fits the application and device requirements.

## Step 7 · Conditional Access: one policy layer

[calm] Conditional Access takes the signals shown on the left and turns them into an access decision.
[600ms]
[curious] A user, device, location or risk condition can lead to a block or an additional requirement such as multifactor authentication.
[600ms]
[reassuring] The same policy approach can protect cloud applications and the on-premises applications Contoso has published.

## Step 8 · All in one: Contoso’s hybrid identity

[calm] Contoso now has one workforce represented in both directories, with synchronization and sign-in chosen deliberately.
[600ms]
[curious] The application paths differ, but they sit behind the same identity-based access decisions.
[600ms]
[reassuring] That completes authentication and reachability; the next lesson asks what each person or workload may do, and for how long.

