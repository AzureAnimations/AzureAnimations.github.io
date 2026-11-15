# Narrator Script — GitHub · Run Actions at Scale: Runners, Policies, Secrets and Variables

**Source animation:** [ActionsAtScale.html](../../journeys/GitHub/ActionsAtScale.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · From one team to a thousand repositories

[calm] Priya's team ran one workflow on one runner. That is simple.
[600ms]
[concerned] Now a thousand Contoso repositories want Actions, and every team asks the same questions.
[600ms]
[confident] Actions at scale is about governance: machines, access, allowed actions, secrets, and cost.

## Step 2 · Hosted runners: what is preinstalled

[calm] GitHub-hosted runners come with the runner app and many tools preinstalled, and GitHub maintains them.
[600ms]
[curious] Check what's on the image before you install anything. The set up job log and the image readme show you.
[600ms]
[confident] The tools are updated weekly, so use setup actions to pick a version and keep yours stable when the image changes.

## Step 3 · Larger runners and installing software

[curious] Need more power? Larger runners add cores, memory and disk, along with runner groups, autoscaling and static addresses.
[600ms]
[confident] They're for GitHub Team and Enterprise Cloud, billed per minute only while jobs use them.
[600ms]
[calm] Need one more tool? Install it while the job runs, with a setup action, a package manager or a container, instead of building a new image.

## Step 4 · Self-hosted runners

[calm] With self-hosted runners you register your own machine, using a short-lived token, and give it labels.
[600ms]
[confident] Jobs find it by label, and every label must match. Scale sets add autoscaling.
[600ms]
[serious] You keep the machine patched. And use self-hosted runners with private repositories, because a fork of a public one can run code on your machine.

## Step 5 · Runner groups: who can use which runners

[calm] A runner group decides which repositories can send jobs to a set of runners.
[600ms]
[confident] It holds larger or self-hosted runners, and its access policy is all repositories or a selected list. A workflow then asks for the group by name.
[600ms]
[intrigued] An enterprise group stays closed to an organization until an owner chooses which repositories may use it.

## Step 6 · Networking: IP allow lists and static IPs

[calm] A firewall that allows only known addresses needs a stable source.
[600ms]
[concerned] Standard hosted runners use many ranges, which makes a poor allow list.
[600ms]
[confident] Larger runners can give your pool a static range, and a self-hosted runner has your own IP address.

## Step 7 · Troubleshoot a runner

[curious] A job that waits forever always has a cause. Follow it hop by hop.
[600ms]
[confident] Check the labels and group first, then whether the runner is idle, active or offline, then the network and the limits.
[600ms]
[reassuring] Start with the cheapest checks. A label typo and the runner status explain most waiting jobs.

## Step 8 · Policies: allow and deny lists

[calm] Admins choose which actions and reusable workflows may run.
[600ms]
[confident] Allow entries, deny entries, and SHA pinning stop unwanted code before a workflow even starts.
[600ms]
[serious] An enterprise policy can override an organization setting, and requiring a pin applies to your own organization's actions too.

## Step 9 · Secrets and variables by scope

[calm] Define a value once, at the right level: organization, repository, or environment.
[600ms]
[confident] An organization value is shared, an environment value belongs to one deployment target, and when names clash the narrowest level wins.
[600ms]
[curious] Secrets hold sensitive values, and they are encrypted before they reach GitHub. Variables hold plain configuration.

## Step 10 · Use them, and manage them with the API

[calm] Workflows read variables with the vars context and secrets with the secrets context.
[600ms]
[confident] The REST API creates both. For a secret, get the public key, encrypt your value, then send it. A variable takes a name and a plain value.
[600ms]
[serious] Logs mask secrets, but masking is not guaranteed, so never print them.

## Step 11 · Usage and cost

[curious] Each runner type counts differently, so know what's free and what's billed.
[600ms]
[confident] Standard runners are free in public repositories, draw from included usage in private ones, and larger runners bill per minute.
[600ms]
[reflective] Usage is charged to the repository owner. Self-hosted runners cost nothing to use with Actions, but you pay to run the machines.

## Step 12 · Recap: an Actions governance checklist

[calm] Six checks to run before Actions spreads across a company, each with a setting you can find.
[600ms]
[confident] Runners, groups, networking, policies, secrets and variables, and usage. Each is a setting you now know how to find.
[600ms]
[reassuring] Which options you see depends on your GitHub plan, and an enterprise policy can override an organization.
