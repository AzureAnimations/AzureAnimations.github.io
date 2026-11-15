# Narrator Script — Security · Security, Compliance and Identity Concepts: the shared vocabulary

**Source animation:** [SecurityConcepts.html](../../journeys/Security/SecurityConcepts.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/describe-security-concepts-methodologies/>
- <https://learn.microsoft.com/training/modules/describe-identity-principles-concepts/>

---

## Step 1 · Security, compliance and identity

[calm] Contoso is about to open a customer portal. Before launch, three different questions need answers.
[600ms]
[curious] Security protects data and systems from threats. Compliance means meeting the laws and standards that apply. Identity describes who or what is involved.
[600ms]
[confident] They sound alike, but they aren't the same thing. Compliance, in particular, isn't the same as security.

## Step 2 · Shared responsibility

[calm] Move from on-premises to software as a service, and the cloud provider takes on more of the stack.
[600ms]
[serious] But some jobs never move. In every model, your data, identities and access, endpoints, and configuration choices stay with you.
[600ms]
[reassuring] Exactly where the line sits depends on the service, so check the provider documentation for each one you use.

## Step 3 · Defense in depth

[calm] Defense in depth uses layers of protection that work together. When one layer fails, the next one still stands between an attacker and the data.
[600ms]
[curious] Here a stolen password gets past the identity layer, but network segmentation still stops the attacker.
[600ms]
[confident] The layers serve confidentiality, integrity and availability, with data as the innermost layer.

## Step 4 · Zero Trust

[calm] Zero Trust means never trust, always verify. Follow one access request from an unfamiliar location on an unmanaged device.
[600ms]
[confident] Three principles guide it: verify explicitly, use least privileged access, and assume breach.
[600ms]
[reflective] Zero Trust is a strategy, not a single product, so each principle shows up as a different check along the way.

## Step 5 · Encryption

[calm] Encryption makes data useless without the key. Symmetric encryption uses one key in both directions, which is fast but makes sharing the key hard.
[600ms]
[curious] Asymmetric encryption uses a key pair. Whatever the public key encrypts, only the private key can decrypt, so the public key can be shared freely.
[600ms]
[serious] Keep keys in a managed service such as Azure Key Vault, away from the data. The scrambled text is made up.

## Step 6 · Hashing

[curious] A hash is a one-way fingerprint. The system keeps only the fingerprint of a password and compares it at every sign-in.
[600ms]
[confident] Hashing needs no key and can't be reversed. The same input always gives the same hash.
[600ms]
[reassuring] Real systems also add a unique salt, so two identical passwords don't give identical hashes. These values are made up and shortened.

## Step 7 · Encryption or hashing?

[curious] Six everyday examples, two bins. Ask one question for each: do you need to get the original back?
[600ms]
[confident] If the answer is yes, it belongs with encryption, like data at rest or traffic over HTTPS. If it's no, it belongs with hashing, like password storage or checking a downloaded file.
[600ms]
[encouraging] Sort them yourself first, then watch where each one lands.

## Step 8 · Governance, risk and compliance

[calm] Governance, risk and compliance answer three questions. Who sets the rules, what could go wrong, and can we prove we follow them?
[600ms]
[confident] Risk management identifies, assesses, responds to and monitors risks. A response can be to accept, mitigate, transfer or avoid.
[600ms]
[serious] Compliance is the minimum the rules require, not the whole of security. The Contoso teams here are fictional.

## Step 9 · Identity is the new perimeter

[calm] The old boundary was the network. Then cloud apps, remote work and personal devices moved the edge.
[600ms]
[curious] The question is now: who or what is asking? That could be a human, a device, a workload or an agent.
[600ms]
[serious] Almost all successful attacks eventually rely on compromising or abusing an identity, which is why identity matters so much.

## Step 10 · Authentication and authorization

[calm] First prove who you are. That's authentication. Then find out what you may do. That's authorization, and it always comes second.
[600ms]
[confident] An identity provider handles the first part and issues tokens that carry claims. An ID token proves you signed in, and an access token grants permission to a resource.
[600ms]
[reflective] Common protocols are OpenID Connect, OAuth two point zero and SAML.

## Step 11 · Active Directory and the cloud

[calm] Active Directory Domain Services was built for on-premises networks. It stores users, devices and groups, and a server running it is a domain controller.
[600ms]
[curious] It doesn't natively handle software as a service sign-in. Microsoft Entra ID is the directory built for the cloud.
[600ms]
[reassuring] The two can be connected by synchronizing them, which is called hybrid identity.

## Step 12 · Federation and recap

[calm] Federation lets Contoso accept the sign-in of a partner, so nobody has to create a new account.
[600ms]
[serious] It's a trust relationship between separate identity providers, and trust isn't automatically two-way. A two-way trust has to be set up on purpose.
[600ms]
[proud] That covers the first S C nine hundred skill area, the concepts of security, compliance and identity. Check the current study guide.
