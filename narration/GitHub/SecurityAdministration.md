# Narrator Script — GitHub · Security Administration: Roll It Out Across an Organisation

**Source animation:** [SecurityAdministration.html](../../journeys/GitHub/SecurityAdministration.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Fifty Repositories, No Consistent Setup

[calm] Contoso has fifty repositories, and each team set up security its own way.
[600ms]
[concerned] Some are covered and some aren't. That's what happens when every team switches features on by hand, and Ravi can't say which is which.
[600ms]
[determined] He needs one rollout that works everywhere.

## Step 2 · Enterprise, Organisation, Repository

[calm] Security settings live at three levels. The enterprise has its Settings and Policies pages, and they reach every organization.
[600ms]
[confident] The organization has Configurations, global settings and defaults. A repository has its own Advanced Security settings, for that one repository only.
[600ms]
[serious] Remember that a higher level can enforce a setting, so the level below can't change it.

## Step 3 · Enterprise Cloud and Enterprise Server

[curious] GitHub Enterprise Cloud and GitHub Enterprise Server use the same security features, but you switch them on in different places.
[600ms]
[confident] On Enterprise Cloud, it's the enterprise settings and policies on github.com. A self-hosted Server needs a license, the Management Console and GitHub Actions.
[600ms]
[reassuring] Configurations, rulesets and the REST API are the same in both. Some options arrive in a later Server version.

## Step 4 · Security Configurations: One Named Bundle

[confident] A security configuration is a named bundle of enablement settings. You build it once, then apply it to any group of repositories.
[600ms]
[curious] Each setting can be enabled, disabled or not set. Not set keeps whatever the repository has today.
[600ms]
[encouraging] Groups that need different protection can each get their own configuration.

## Step 5 · Defaults for New Repositories, and Inheritance

[calm] Pick a default configuration, so new repositories start protected. It applies to new repositories only, not to transferred ones.
[600ms]
[confident] An attached repository inherits the settings. Try the switch. Without enforcement, a repository admin can change a setting and the status becomes Removed.
[600ms]
[serious] With enforcement, the setting is locked and the status is Enforced.

## Step 6 · Enable All Three Suites in Bulk

[calm] Now apply it in bulk. Select the repositories, or select everything that matches a filter.
[600ms]
[confident] Pick the configuration and choose Apply. Secret Protection, supply chain security and Code Security switch on together.
[600ms]
[reassuring] Each repository then shows a configuration status, so you can check the result. Archived repositories are included.

## Step 7 · Default CodeQL Setup or an Approved Workflow

[confident] Default setup is the quickest route. It needs no workflow file, and GitHub picks the languages.
[600ms]
[curious] Choose advanced setup only when you need your own workflow, with builds, a matrix or a schedule.
[600ms]
[calm] At scale, approve one version of that workflow, and roll it out to a whole group of repositories.

## Step 8 · Policies and Rulesets: Enterprise and Organisation

[calm] A policy decides who may switch features on. A ruleset decides what must pass before code is merged.
[600ms]
[confident] Both can cover many organizations at once. Organization owners and security managers can always enable features, whatever the policy says.
[600ms]
[encouraging] For a safe rollout, start a ruleset in Evaluate, see its impact, then set it to Active. A bypass list covers exceptions.

## Step 9 · Roles: Administrator, Security Manager, Developer

[calm] Give each person the least access that does the job.
[600ms]
[confident] Administrators set the rules. Security managers run the security features and alerts across the organization. Developers work in the repository and fix the alerts.
[600ms]
[reflective] The security manager role belongs to the organization, and an owner can give it to a member or a team.

## Step 10 · Who Can Dismiss or Reopen an Alert

[calm] Read and Triage access can't dismiss alerts. Write, Maintain and Admin can.
[600ms]
[curious] Want a second pair of eyes? Turn on Prevent direct alert dismissals, and every dismissal needs a reviewer's approval.
[600ms]
[confident] That setting lives in the security configuration, one each for code scanning, secret scanning and Dependabot.

## Step 11 · Automate with the REST API and the CLI

[confident] Everything you click in the configuration pages can be scripted. The GitHub CLI's api command calls the REST API for you.
[600ms]
[calm] You create a configuration, apply it to repositories, and set the defaults for new ones, each with its own call.
[600ms]
[serious] If a setting is enforced, an API call that tries to change it appears to succeed but changes nothing. So always read the status back.

## Step 12 · Recap: A Rollout Checklist

[calm] Work down the list. Choose the level, build the bundle, set the default, and apply it in bulk.
[600ms]
[confident] Then pick the CodeQL setup, and govern with policies, rulesets, roles and dismissal rules.
[600ms]
[proud] Finish by automating with the REST API. That's the security administration domain of the G H five hundred study guide.
