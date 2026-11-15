# Narrator Script — GitHub · Secret Protection: Stop the Leak, Then Clean It Up

**Source animation:** [SecretProtection.html](../../journeys/GitHub/SecretProtection.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A Token in a Commit: Who Finds It

[calm] Maya commits a token by mistake. Three parties can find it: people who can read the repository, GitHub secret scanning, and, in a public repository, the token's provider.
[600ms]
[confident] Secret scanning checks the whole Git history, on all branches.
[600ms]
[serious] And here's the first rule: a committed secret is a compromised secret. Scanning tells you about it, but it doesn't undo it.

## Step 2 · What Secret Scanning Looks For

[curious] Four kinds of patterns decide what counts as a secret: provider patterns, generic patterns, patterns you write yourself, and generic secrets found with AI.
[600ms]
[confident] It also scans beyond code, in issues, pull requests, discussions, wikis, and secret gists.
[600ms]
[reassuring] Generic and AI-found alerts get their own list, because they can have more false positives.

## Step 3 · Turn It On at Three Levels

[calm] Secret Protection can be switched on for one repository, by a repository administrator in the Settings page.
[600ms]
[confident] Or an owner can turn it on for many repositories at once, with an organization or enterprise security configuration.
[600ms]
[reassuring] Public repositories get secret scanning automatically and for free. For private and internal repositories, you enable GitHub Secret Protection.

## Step 4 · Push Protection: Stop the Push

[curious] Switch push protection off and on, and compare the two outcomes.
[600ms]
[serious] Without it, the secret lands first and an alert follows. With it, the push is blocked before it reaches the repository.
[600ms]
[confident] It's off by default and needs Secret Protection. A repository admin, organization owner, security manager, or enterprise owner can enable it.

## Step 5 · Bypass: Give a Reason or Ask First

[calm] By default, anyone with write access can bypass a block by giving a reason, like used in tests, false positive, or fix it later.
[600ms]
[confident] Delegated bypass adds an approval step, so a reviewer decides before the push is allowed. Requests expire after seven days.
[600ms]
[reassuring] Either way, every bypass is written to the audit log and emailed to watching owners, security managers, and repository admins.

## Step 6 · The Alert: Created, Open, Closed

[calm] A detected secret becomes an alert, created when a scan finds a secret or when push protection is bypassed.
[600ms]
[serious] It stays open until someone closes it, with a reason, an optional comment, and a record of who and when. Closing is manual, even after the token is gone from the code.
[600ms]
[curious] Partner alerts go to the provider and aren't shown in the repository.

## Step 7 · Validity Checks: Is It Still Live?

[curious] A validity check asks the token's issuer whether a detected secret still works.
[600ms]
[serious] Active means it could still be exploited, so fix those first. Inactive no longer works, but you should confirm there was no misuse.
[600ms]
[calm] Unknown means it's not supported, or couldn't be verified. GitHub tokens are checked by default, and partner patterns need validity checks enabled.

## Step 8 · Respond in Order: Revoke, Then Clean Up

[serious] Treat a committed secret as compromised. First, revoke and rotate it, so it's useless.
[600ms]
[confident] Then review the logs for misuse and close the alert.
[600ms]
[reassuring] Cleaning the Git history comes last. It's time-intensive, and often unnecessary once the token is revoked.

## Step 9 · Dismiss With Care

[calm] Closing an alert is a decision you may have to defend later, so choose the honest reason.
[600ms]
[confident] The reasons are false positive, used in tests, revoked, and won't fix. Always leave a note, because it goes on the alert timeline for audits.
[600ms]
[serious] And check validity before you dismiss.

## Step 10 · Alert Recipients and Path Exclusions

[curious] Decide who gets told about a leak. That's admins, security managers, some owners, and the commit author.
[600ms]
[calm] Email arrives only if a person watches the repository and has email turned on.
[600ms]
[confident] You can also list paths that secret scanning should leave alone. Alerts there close as ignored by configuration.

## Step 11 · Custom Patterns: Write, Dry Run, Publish

[calm] When no built-in pattern knows your secret, write your own. You need a name and a regular expression for the secret's format.
[600ms]
[confident] Next, save and dry run. It shows matches without raising any alerts, so you can tune the pattern safely.
[600ms]
[optimistic] Then publish it, and optionally enable push protection. You can define patterns for an organization or enterprise too.

## Step 12 · Public vs Private, and What You Can Now Do

[calm] Public and private repositories behave differently, in scanning, alerts, and tokens. Check the docs for your own plan.
[600ms]
[confident] Now check yourself against the G H five hundred objective: configure and use Secret Protection.
[600ms]
[proud] You can enable it, stop leaks with push protection, triage alerts, and respond in the right order.
