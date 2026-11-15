# Narrator Script — GitHub · Security Operations: Prioritise, Remediate and Govern

**Source animation:** [SecurityOperations.html](../../journeys/GitHub/SecurityOperations.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A thousand alerts, one team

[calm] Contoso turned on every scanner. Now security overview shows more open alerts than four people can ever read.
[600ms]
[concerned] So where do you start?
[600ms]
[confident] This lesson follows four moves. Name the alert, rank it, fix it at scale, and govern who may make exceptions.

## Step 2 · CVE, CWE and GHSA

[curious] Three identifiers show up on almost every alert, and each one answers a different question.
[600ms]
[confident] A CVE is one specific, public vulnerability. A CWE is the type of weakness behind it. A GHSA is the advisory record on GitHub.
[600ms]
[calm] GitHub is a CVE Numbering Authority, so it can assign CVE IDs. Use the right identifier to search, filter and report.

## Step 3 · Severity, EPSS and exposure

[calm] Severity says how bad a flaw is, from low to critical. EPSS says how likely it is to be exploited in the next thirty days.
[600ms]
[confident] Exposure says whether your code can actually be hit. Is the package in production or development, and is the flawed code reachable?
[600ms]
[reflective] Reachability analysis is in public preview, for JavaScript and TypeScript. Read all three signals before you rank the queue.

## Step 4 · A remediation workflow

[confident] Every alert follows the same five moves. Triage, assign, fix, verify and close.
[600ms]
[calm] Alerts can be assigned to people, teams or AI agents. A fix pull request triggers a new scan, so the change is checked before it merges.
[600ms]
[reassuring] Each change lands on the alert timeline. And if you won't fix it, dismiss it with a reason and a comment.

## Step 5 · Security campaigns

[curious] A security campaign groups related alerts, gives developers a deadline and a contact, and lets the security team watch the backlog shrink.
[600ms]
[confident] You create one from security overview. Pick a template or your own filters, then set a name, a due date and campaign managers.
[600ms]
[impressed] Track the alerts as open, in progress, fixed or dismissed. For code scanning alerts, Copilot Autofix is triggered automatically.

## Step 6 · Bulk actions and auto-dismiss

[calm] You can dismiss many alerts for one reason in a single action. Or you can let a rule do it as the alerts arrive.
[600ms]
[confident] Auto-triage rules can dismiss or snooze Dependabot alerts before notifications go out. Presets come from GitHub, and custom rules need Code Security or Advanced Security.
[600ms]
[serious] Either way, record why. Reasons, comments, the timeline and the audit log are your paper trail, and someone will ask later.

## Step 7 · Alert ownership

[calm] Three roles share every alert. Developers fix it.
[600ms]
[confident] The security team manages the whole queue. The security manager role gives read access on all repositories, write access on all security alerts, and access to security overview.
[600ms]
[curious] Administrators set the rules that everyone else works within. Organization owners assign the security manager role.

## Step 8 · Delegated bypass and exceptions

[calm] Sometimes a push or an alert really is an exception. Delegation lets a named reviewer decide.
[600ms]
[confident] With delegated bypass, a blocked push can ask for a bypass, and a reviewer approves or denies. Delegated dismissal works the same way for code scanning, secret scanning and Dependabot alerts.
[600ms]
[reassuring] Bypasses and dismissals are logged, so every decision is on the record.

## Step 9 · Rulesets that block a merge

[confident] A ruleset turns your severity policy into a gate. Choose a threshold, and any pull request that crosses it can't merge.
[600ms]
[curious] The rule is called Require code scanning results. It also blocks when the analysis is still running, or isn't configured. Try the buttons and watch the gate change.
[600ms]
[calm] Repository administrators and organization owners set it.

## Step 10 · Tailor detection

[curious] Detection isn't one size fits all. Choose a CodeQL query suite that fits your risk.
[600ms]
[confident] Default and security-extended work with default setup. Security-and-quality, and custom suites, need advanced setup.
[600ms]
[encouraging] You can also teach secret scanning your own token formats, with custom patterns written as regular expressions.

## Step 11 · Shift left, end to end

[calm] The earliest check is the cheapest one. Catch problems early and they never join the backlog.
[600ms]
[confident] At the push, push protection blocks a secret. On the pull request, dependency review and code scanning report. At the merge, a ruleset can block it.
[600ms]
[reassuring] After the merge, Dependabot alerts and scanning keep watching.

## Step 12 · Recap: a monthly security review

[calm] Contoso's security team now meets once a month. Each agenda item is one idea from this lesson, in plain words.
[600ms]
[confident] Name the alert, rank it, fix it in bulk, and review who can make exceptions. Then enforce it and tune detection.
[600ms]
[proud] This covers the security operations skills in the G H five hundred study guide. Now practise on your own organization.
