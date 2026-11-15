# Narrator Script — GitHub · GitHub Advanced Security: Three Suites, One Picture

**Source animation:** [AdvancedSecurityOverview.html](../../journeys/GitHub/AdvancedSecurityOverview.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · One repo, three different risks

[calm] Maya's repository at Contoso has three problems: a leaked key, an old package, and unsafe code.
[600ms]
[concerned] Here's the catch. No single check finds all three, because each one needs a different kind of checker.
[600ms]
[curious] So how does GitHub cover them? That's what this lesson maps out.

## Step 2 · Three suites, three questions

[calm] GitHub groups its security tools into three suites, and each suite answers one question about a repository.
[600ms]
[confident] Secret Protection asks, did a secret leak? Supply Chain Security asks, are my packages safe? Code Security asks, is my own code safe?
[600ms]
[reassuring] The G H five hundred study guide uses these three names. Supply Chain Security is the group once called Dependabot and dependency review.

## Step 3 · The Security tab: where alerts live

[calm] Every alert for a repository lands in one tab. Here's the Security tab, with a sidebar that lists the alert types and the reporting tools.
[600ms]
[confident] Dependabot, code scanning, and secret scanning alerts sit together. Security policy and advisories handle reporting.
[600ms]
[curious] On GitHub dot com the tab is named Security and quality. Older docs just call it Security.

## Step 4 · Public, private, licensed: what you get

[calm] What you get depends on the repository. Some features come with every plan: the dependency graph and Dependabot alerts.
[600ms]
[confident] Public repositories get more for free, including secret scanning, push protection, code scanning, and Autofix.
[600ms]
[serious] Private repositories need a Secret Protection or Code Security license for the rest. Prices aren't shown here.

## Step 5 · How each suite finds problems

[curious] Each suite finds problems in its own way.
[600ms]
[confident] Patterns match secrets. The GitHub Advisory Database matches vulnerable packages. And CodeQL queries match unsafe code.
[600ms]
[impressed] Secret scanning checks the whole Git history, and Dependabot alerts you when a new advisory appears or your dependency graph changes.

## Step 6 · Stop it early, or check before merge

[calm] There are two approaches. Prevention-first stops a problem at the source, like push protection blocking a push.
[600ms]
[confident] Gate-based lets work in, then checks it on the pull request before the merge, with code scanning merge protection and dependency review.
[600ms]
[reassuring] Good teams use both. The G H five hundred exam asks you to compare them.

## Step 7 · Security overview: risk and coverage

[calm] Security overview is the organization-wide view.
[600ms]
[curious] The Risk view shows where alerts of every type pile up. The Coverage view shows which repositories use which features.
[600ms]
[confident] That means you can spot repositories with no protection turned on yet. The numbers here are made up.

## Step 8 · Who does what

[calm] One alert, three people. Maya, the developer, fixes it in code.
[600ms]
[confident] Noor, the security manager, sees and tracks alerts everywhere. Ravi, the administrator, turns features on and sets the rules.
[600ms]
[reassuring] Security manager is a real organization role. Owners and repository admins configure the features.

## Step 9 · Who sees alerts, and delegated bypass

[calm] Only people with the right access see alerts: write, maintain, admin, and organization owners. You can add more people in settings.
[600ms]
[curious] Now push protection. Without delegated bypass, contributors can bypass a block on their own, with no one to ask.
[600ms]
[confident] With delegated bypass, a bypass needs a reviewer to approve or deny the request.

## Step 10 · Dismissing an alert: reason and note

[calm] Sometimes you close an alert you won't fix. Pick the reason that's really true.
[600ms]
[confident] Then add a note. It stays on the alert timeline, so auditors can see why.
[600ms]
[serious] And remember, a committed secret still counts as compromised until it's revoked, even after you dismiss its alert.

## Step 11 · A secure SDLC on one page

[calm] Security runs through every stage, from planning to monitoring, and each stage has a feature from the three suites.
[600ms]
[confident] Before the repository exists in earnest, stop secrets and keep packages current. Before the merge, scan, review, and gate.
[600ms]
[reassuring] After the merge, watch alerts, security overview, and campaigns. The five stages are a teaching frame.

## Step 12 · Recap: pick the suite for each risk

[calm] Back to Maya's repository. Each risk has a suite, and each suite has its own checker and alert.
[600ms]
[confident] The leaked key is Secret Protection. The old package is Supply Chain Security. The unsafe code is Code Security.
[600ms]
[proud] That covers the first G H five hundred skill area: GitHub security suites, features, and ecosystem.
