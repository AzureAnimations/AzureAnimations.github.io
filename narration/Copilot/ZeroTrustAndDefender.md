# Narrator Script — Microsoft 365 Copilot · Zero Trust and Defender XDR

**Source animation:** [ZeroTrustAndDefender.html](../../journeys/Copilot/ZeroTrustAndDefender.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/security/zero-trust/zero-trust-overview>
- <https://learn.microsoft.com/entra/identity-platform/authentication-vs-authorization>
- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-xdr/incidents-overview>

---

## Step 1 · One password, every door

[curious] Meet Alex, Mei, Jo, and an intruder, all at Contoso. In the old model, anyone inside the network was trusted.
[600ms]
[serious] Today's attacks go after identity. One phishing email, one stolen sign-in, and the intruder walks through every door.
[600ms]
[calm] This lesson follows the Microsoft 365 security principles skills of the A B nine hundred exam.

## Step 2 · Three Zero Trust principles

[confident] Zero Trust rests on three principles: verify explicitly, use least privilege access, and assume breach.
[600ms]
[calm] They guide every access decision and every security control in Microsoft 365.
[600ms]
[reflective] The big shift is from trust by default to trust by exception. Nothing gets in just because of where it sits.

## Step 3 · Authentication, then authorization

[curious] Two words that sound alike but do different jobs. Authentication proves who you are.
[600ms]
[confident] Authorization decides what you're allowed to do once you're known. A request needs both, and neither replaces the other.
[600ms]
[calm] In Microsoft 365, authorization comes from things like Microsoft Entra roles, Exchange roles, and site permissions.

## Step 4 · Password, MFA, passwordless

[calm] Picture a ladder of sign-in methods. At the bottom is a plain password, which is the easiest thing for an attacker to steal.
[600ms]
[confident] Each step up makes a stolen password less useful. Multifactor authentication adds a second proof, and passwordless removes the password altogether.
[600ms]
[encouraging] Microsoft recommends phishing-resistant methods like Windows Hello for Business and passkeys. Admins choose allowed methods in the Authentication methods policy.

## Step 5 · Four ways in, four defenders

[curious] Attackers reach Microsoft 365 along four paths: email, devices, identities, and apps.
[600ms]
[confident] Threat protection puts a Microsoft Defender product on each path, and each one watches its own area.
[600ms]
[calm] Microsoft Defender XDR joins them together, and Microsoft Entra ID Protection helps protect identities too.

## Step 6 · Threat intelligence

[curious] Knowing what attackers are doing is half the battle. Threat intelligence also tells you whether it affects you.
[600ms]
[confident] In Microsoft Defender, threat analytics delivers these reports. They come from Microsoft security researchers, plus curated open-source sources.
[600ms]
[calm] The campaign, the answers, and the report on screen are an invented example.

## Step 7 · Defender XDR: one incident

[concerned] Each Defender product raises its own alerts, and a pile of separate alerts is hard to read as one attack.
[600ms]
[confident] Microsoft Defender XDR correlates the related alerts into a single incident. That gives you one attack story instead of many fragments.
[600ms]
[impressed] An alert is one signal, an incident is the whole picture, and you work on it in the Microsoft Defender portal.

## Step 8 · Automated investigation and response

[curious] Defender XDR doesn't have to wait for an analyst, because it can investigate the incident on its own.
[600ms]
[confident] Each piece of evidence gets a verdict: malicious, suspicious, or no threats found. Then it can take remediation actions.
[600ms]
[reassuring] Depending on configuration, actions run automatically or wait for your security team's approval. Every action is listed in the Action center.

## Step 9 · Advanced hunting

[curious] Sometimes your team has its own question. Advanced hunting lets it search raw data collected by the Defender products.
[600ms]
[confident] That covers Defender for Office 365, Endpoint, Identity, and Cloud Apps, with up to thirty days of raw data.
[600ms]
[encouraging] Guided mode is a query builder, and advanced mode uses Kusto Query Language. A good query can even become a custom detection rule.

## Step 10 · Which principle applies?

[encouraging] Now it's your turn. Pick a scenario, then choose the Zero Trust principle that applies.
[600ms]
[curious] You'll see how each one shows up in Microsoft 365: MFA and Conditional Access for verify explicitly, roles and permissions for least privilege.
[600ms]
[confident] And detection and response in Defender XDR is how you assume breach.

## Step 11 · Zero Trust, then Defender XDR

[calm] Let's pull it together. Verify explicitly, use least privilege, and assume breach.
[600ms]
[confident] Defender XDR then puts those principles to work: it detects, correlates, responds, and hunts.
[600ms]
[proud] Check yourself against the A B nine hundred skills measured, and read the current study guide on Microsoft Learn, because skills change over time.
