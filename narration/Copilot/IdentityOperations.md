# Narrator Script — Microsoft 365 Copilot · Identity Operations

**Source animation:** [IdentityOperations.html](../../journeys/Copilot/IdentityOperations.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/fundamentals/what-is-entra>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>
- <https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins>
- <https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups>

---

## Step 1 · Which Entra tool do I open?

[calm] Priya's help desk gets sign-in and security tickets all day.
[600ms]
[curious] Behind each ticket sits a different Microsoft Entra tool, so which one do you open?
[600ms]
[confident] This lesson covers the core security skills in exam A B nine hundred. Concepts like MFA and tenants live in the Identity journey, so here we focus on what an admin opens, and when.

## Step 2 · Microsoft Entra ID: the front door

[calm] Every Microsoft 365 tenant is already a Microsoft Entra tenant.
[600ms]
[confident] Entra ID is the front door. It checks who is signing in, applies your rules, and records what happened.
[600ms]
[curious] The tiles you see are the features we'll open one by one.

## Step 3 · Pick the object that fits the job

[curious] A user is one identity, and a group manages many identities as one.
[600ms]
[confident] Keep personal settings on the user, and give access to a group.
[600ms]
[reassuring] Security groups manage access to shared resources, Microsoft 365 groups support collaboration, and a license, role or policy can go to a group instead of each person.

## Step 4 · One sign-in, many apps

[calm] With single sign-on, Alex signs in once with work credentials and opens every app assigned to him.
[600ms]
[confident] Entra ID is the identity provider. The app sends Alex there, Entra ID verifies him, and the app grants access.
[600ms]
[reassuring] Admins manage all of that access from one place.

## Step 5 · Conditional Access: if, then

[curious] Conditional Access works on an if, then idea. Entra gathers signals about a sign-in, makes a decision, and enforces it.
[600ms]
[confident] The decision is either block access, or grant access with controls, and policies run after the first sign-in step.
[600ms]
[reassuring] You can start a policy in report-only mode, and the What If tool simulates a sign-in to show which policies would apply.

## Step 6 · Three logs, three questions

[calm] Three logs answer three different questions.
[600ms]
[confident] Sign-in logs show who signed in and what happened. Audit logs show who changed what.
[600ms]
[reassuring] Microsoft Purview audit follows user and admin activity across services. Entries can't be changed or deleted, and the roles you need differ by log.

## Step 7 · When a sign-in looks risky

[concerned] Sometimes a sign-in looks risky. Microsoft Entra ID Protection flags risky users and risky sign-ins.
[600ms]
[confident] You review the risk, then remediate. Either the user fixes it, or an admin steps in.
[600ms]
[serious] Full features need Entra ID P two or an Entra Suite license, and reading the risk reports needs at least the Global Reader role.

## Step 8 · Identity Secure Score

[curious] Identity Secure Score is a percentage showing how closely your tenant follows Microsoft's identity security recommendations.
[600ms]
[confident] A higher score means more of them are met, and it's recalculated every twenty-four hours.
[600ms]
[reflective] Some recommendations need a paid license, and a risk you accept earns no points. The percentages here are only an illustration.

## Step 9 · Admin power on demand

[curious] Why leave admin power switched on all day? Privileged Identity Management makes the roles eligible instead of always on.
[600ms]
[confident] Mei activates a role only when she needs it, and the access expires.
[600ms]
[reassuring] It can require MFA, ask for a justification, send notifications, run access reviews, and keep an audit history.

## Step 10 · Two objects for every app

[calm] Every app has two objects. An app registration is the blueprint, kept in the app's home tenant.
[600ms]
[confident] An enterprise application is its instance in your tenant, and that's where you manage who can use it.
[600ms]
[reassuring] Registering an app creates both, an application object and a service principal.

## Step 11 · Which tool do I open?

[curious] Now it's your turn. Pick a symptom from the help desk queue.
[600ms]
[confident] The Entra tool that answers it lights up, along with where to look.
[600ms]
[reflective] Some symptoms need two tools, and names change over time, so confirm paths on Microsoft Learn.

## Step 12 · Know the tool, fix the problem

[calm] Match the symptom to the Entra tool, and the ticket gets easier to solve.
[600ms]
[confident] Then check yourself against the A B nine hundred skills measured and the official Microsoft Learn training.
[600ms]
[proud] Always read the current study guide, because the skills measured change over time.
