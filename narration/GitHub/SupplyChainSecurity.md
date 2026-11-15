# Narrator Script — GitHub · Supply Chain Security: Dependency Graph, Dependabot and Dependency Review

**Source animation:** [SupplyChainSecurity.html](../../journeys/GitHub/SupplyChainSecurity.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/supply-chain-security>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Most of your code is somebody else’s code

[calm] Meet the orders-api at Contoso. It uses a handful of packages that the team picked on purpose.
[600ms]
[curious] But each of those packages pulls in more packages, and those pull in more again. The ones you chose are direct, and the ones that tag along are transitive.
[600ms]
[serious] That matters, because a flaw anywhere in that chain becomes a flaw in your app.

## Step 2 · The dependency graph: direct and transitive packages

[confident] GitHub builds the dependency graph from your manifest and lock files. You can also submit extra data with the dependency submission API.
[600ms]
[curious] For every package you see the version, the license and whether it's direct or transitive. Show paths reveals the route to a transitive package.
[600ms]
[calm] Vulnerable packages sort to the top, so you see the risky ones first.

## Step 3 · The Advisory Database: how a package becomes an alert

[calm] Security advisories reach GitHub from several sources. They land in the GitHub Advisory Database.
[600ms]
[confident] Only reviewed advisories raise Dependabot alerts, and only when they match a package in your graph. Unreviewed advisories raise nothing.
[600ms]
[serious] Malware advisories are a separate kind of alert, and you switch those on separately.

## Step 4 · Dependabot alerts: severity, EPSS and what to fix first

[curious] Here's a list of Dependabot alerts. Severity is a good start, but it's only one signal.
[600ms]
[confident] Read it together with EPSS, which estimates the chance of exploitation in the next thirty days. Then check whether the package runs in production, and how it got into your graph.
[600ms]
[encouraging] Click an alert and compare them. That's how you decide what to fix first.

## Step 5 · Security updates: the pull request Dependabot opens

[calm] Turn on Dependabot security updates, and Dependabot tries to fix every alert that has a patch.
[600ms]
[impressed] It opens a pull request to the minimum patched version, and links it to the alert. Merge the pull request and the alert closes.
[600ms]
[reflective] For a transitive package, the pull request may update the parent package instead.

## Step 6 · Version updates: dependabot.yml, schedule, groups, ignore

[confident] Version updates start with one file, the Dependabot configuration file in your repository.
[600ms]
[calm] There you choose how often Dependabot checks, which updates get grouped into one pull request, and which packages to skip.
[600ms]
[reflective] A new release waits through a cooldown first, but security updates skip that wait. Be careful, though, because an ignore rule can also stop security update pull requests for that package.

## Step 7 · Alert rules: auto-dismiss and auto-triage

[curious] Too much noise? Auto-triage rules can dismiss or snooze alerts for you, before any notification goes out.
[600ms]
[confident] Start with the presets that GitHub curates, or write custom rules that match on severity, package, weakness type and more.
[600ms]
[serious] Know what a rule can hide. Auto-dismissed alerts can still be filtered, reviewed and reopened.

## Step 8 · Dependency Review: stop a bad package before the merge

[calm] Now we move to the pull request. Dependency review shows which packages were added, removed or updated.
[600ms]
[confident] It flags known vulnerabilities and licenses, and the dependency review action can fail the check.
[600ms]
[determined] Make that check required, and a bad package can't merge. For licenses, use an allow list or a deny list, never both.

## Step 9 · SBOM: export the graph as SPDX

[calm] An SBOM is a software bill of materials, a machine-readable inventory of what your project depends on.
[600ms]
[confident] GitHub exports the current dependency graph in the SPDX format, from the interface, the REST API or GitHub Actions.
[600ms]
[reflective] It lists versions, identifiers, licenses and paths, but not the projects that depend on you.

## Step 10 · Who sees alerts, who owns them, and how they are notified

[calm] Repository admins and organization owners turn Dependabot alerts on, and decide who can see them.
[600ms]
[confident] People with write access can assign an alert to a user, a team or an AI agent. That needs a Code Security or Advanced Security license.
[600ms]
[curious] The news travels by email, a weekly digest, webhooks and the REST API.

## Step 11 · Fix many alerts at once

[curious] What if you have hundreds of alerts? Group security updates, and you get fewer pull requests for each package ecosystem.
[600ms]
[confident] You can also select many alerts, give one reason and dismiss them together. Or hand an alert to an AI agent.
[600ms]
[encouraging] Security campaigns do the same job at scale for code scanning and secret scanning alerts.

## Step 12 · Recap: graph, alert, update, review

[calm] Let's pull it together. The graph shows what you depend on.
[600ms]
[confident] Alerts tell you what's vulnerable, and updates deliver the fix. Dependency review keeps new risk out at the pull request.
[600ms]
[proud] That's the supply chain security domain of the G H five hundred study guide. Practise it on one of your own repositories.
