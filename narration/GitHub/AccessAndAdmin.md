# Narrator Script — GitHub · Access and Admin

**Source animation:** [AccessAndAdmin.html](../../journeys/GitHub/AccessAndAdmin.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Contoso Is Growing

[calm] Contoso is growing. There's Maya, Ravi, Noor, Ivy, and Sam, plus an organization, a contractor, and private code.
[600ms]
[curious] So who gets to do what, and who's in charge of the settings?
[600ms]
[confident] Those three questions on the bottom row are the three parts of this journey: accounts, access, and administration.

## Step 2 · Passwords Alone Fall Short

[calm] Start with the account. A password can be guessed, reused, or phished.
[600ms]
[serious] If it's the only lock, whoever holds it can sign in as Ravi.
[600ms]
[reassuring] Two-factor authentication adds a second lock, something only you know or have, so a stolen password alone is not enough.

## Step 3 · Add a Second Factor

[curious] After the password, GitHub asks for something only you have: a code from an app, a text message, a security key, or GitHub Mobile.
[600ms]
[calm] Authenticator apps make one-time codes, and security keys use WebAuthn. Keep your recovery codes as a backup.
[600ms]
[confident] Organization owners can require two-factor for members, billing managers, and outside collaborators.

## Step 4 · Passkeys: One Step, No Password

[curious] A passkey is a key pair. The private key stays on your device, and GitHub keeps the public key.
[600ms]
[impressed] One step covers both password and second factor. You unlock it with a PIN, a passcode, or a biometric.
[600ms]
[serious] Passkeys are bound to the real domain, so a browser refuses a lookalike site. Still, keep a fallback method to avoid lockouts.

## Step 5 · Organization Roles

[calm] Now access. An organization gathers Contoso's people and repositories in one place.
[600ms]
[confident] Owners hold complete administrative access, while members are the default, non-admin role.
[600ms]
[serious] Keep owners few, but never fewer than two, so ownership is never lost. There are specialist roles too, like moderator and billing manager.

## Step 6 · Repository Roles: Try It

[curious] Repositories have their own roles. Pick one and watch what it can do.
[600ms]
[confident] From least to most access, they are Read, Triage, Write, Maintain, and Admin.
[600ms]
[determined] The principle is least privilege: give people the smallest role that gets the job done.

## Step 7 · Teams: Grant Access to Groups

[calm] Granting access person by person doesn't scale, so this is where teams come in.
[600ms]
[confident] Give a team a role once and everyone on it has it. Child teams inherit the access of their parent team.
[600ms]
[serious] Teams hold only organization members, so outside collaborators can't join one.

## Step 8 · Least Privilege for a Contractor

[curious] Sam is a contractor, not an employee.
[600ms]
[confident] So Sam becomes an outside collaborator, added to the one repository the job needs, with a role you choose, and nothing else.
[600ms]
[reassuring] Sam isn't a member and can't join teams. If the organization requires two-factor, Sam must enable it before accepting.

## Step 9 · Visibility and Branch Protection

[calm] Two settings guard the code itself. Visibility decides who can see a repository: public, private, or internal.
[600ms]
[confident] A branch protection rule decides what's allowed to land on main, like reviews and passing status checks before merging.
[600ms]
[serious] People with repository admin access set both. Internal repositories need an enterprise account on GitHub Enterprise Cloud.

## Step 10 · Enterprise Managed Users

[curious] Personal accounts are created and owned by the person. Enterprise Managed Users work differently.
[600ms]
[confident] Contoso's identity provider creates and controls the accounts, and people sign in through it.
[600ms]
[reflective] Managed users can't collaborate outside the enterprise, so it isn't the best fit for every company. GitHub documents how to choose.

## Step 11 · Owners Hold the Controls

[calm] Owners set the organization's defaults, like base permissions, required two-factor, and teams.
[600ms]
[curious] Then they decide who gets Copilot, whether that's all, some, or none of the members, and which policies apply.
[600ms]
[serious] One catch: if an enterprise owner already chose a policy, the organization can't override it.

## Step 12 · Access and Admin: All in One

[calm] Let's put it together. Protect the accounts with two-factor and passkeys.
[600ms]
[confident] Share only the access people need through organization roles, repository roles, and teams.
[600ms]
[proud] And keep the settings with owners and admins. This is the privacy, security, and administration domain of the G H nine hundred exam.
