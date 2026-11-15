# Narrator Script — GitHub · Reuse Automation: Starter Workflows, Reusable Workflows and Composite Actions

**Source animation:** [ReusableWorkflowsAndTemplates.html](../../journeys/GitHub/ReusableWorkflowsAndTemplates.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Twelve repos, twelve copies

[calm] Every Contoso repository holds its own copy of the same CI file. That's twelve copies of one idea.
[600ms]
[concerned] One fix now means twelve edits, and sooner or later the copies drift apart.
[600ms]
[curious] The cure isn't more copies. GitHub offers three different ways to reuse automation, and the G H two hundred exam asks you to tell them apart.

## Step 2 · Starter workflows

[calm] The first way is a starter workflow. It's a scaffold: you choose it, commit a copy, and from then on the file is yours.
[600ms]
[confident] You find them under Actions, then New workflow. After the copy, edit freely, because it's independent.
[600ms]
[reflective] GitHub's docs now call these workflow templates, while the study guide still says starter workflows. It's the same idea.

## Step 3 · Organization starter workflows

[curious] Organizations can offer their own. Keep them in a repository named dot github, inside a workflow templates folder, with a properties file for each.
[600ms]
[confident] Each template has a small properties file beside it, and the name and description are required.
[600ms]
[serious] Visibility matters: a private dot github repository serves private repositories only, and people using the templates need Read access.

## Step 4 · Reusable workflows

[confident] The second way is a reusable workflow. You define the pipeline once in a central repository.
[600ms]
[curious] Each caller points at it with a uses line, and runs exactly the same code. The called file must listen for the workflow call event.
[600ms]
[serious] Remember where the call goes: it lives in a job, never in a step.

## Step 5 · workflow_call: inputs, secrets, outputs

[calm] The called workflow declares what goes in and what comes out.
[600ms]
[confident] The caller sends inputs with the with key and secrets with the secrets key, then reads the outputs back with needs.
[600ms]
[intrigued] Inputs must match their declared type: string, number or boolean. And a step output must first be mapped to a job output before the workflow can return it.

## Step 6 · Passing secrets

[calm] A called workflow doesn't see your secrets automatically. Name each one you pass.
[600ms]
[confident] Or hand them all over with secrets inherit, which works within the same organization or enterprise.
[600ms]
[serious] Secrets reach only the workflow you call directly. In a chain of A, B and C, workflow C gets a secret only if B passes it on.

## Step 7 · Pin the caller to a version

[calm] The text after the at sign picks the version that runs: a branch, a release tag, or a commit SHA.
[600ms]
[curious] A branch moves with every new commit. A release tag is a version you publish. If a tag and a branch share a name, the tag wins.
[600ms]
[confident] A full commit SHA is the safest choice, for both stability and security.

## Step 8 · Composite actions

[calm] The third way is a composite action. It bundles several steps behind a single uses line.
[600ms]
[confident] It runs as one step inside the caller's job, described in a metadata file, and every run step in it needs a shell.
[600ms]
[serious] It can live in its own repository or in a folder inside yours, but it is only steps, and never contains jobs.

## Step 9 · Starter vs reusable vs composite

[curious] Same goal, three tools. So how do you choose?
[600ms]
[confident] Pick by what you want to share. A starter workflow is a copied file you then own. A reusable workflow is a whole central pipeline you call in a job.
[600ms]
[reassuring] And a composite action is just a few steps bundled into one.

## Step 10 · Who can call what

[calm] Reuse has access rules. A caller needs access to the repository that holds the workflow, and its Actions settings must allow it.
[600ms]
[confident] A public caller can use public workflows only. A private caller can use public and private ones, and a private called repository needs the Access setting.
[600ms]
[concerned] One warning from GitHub: if you open a private repository to other workflows, outside collaborators there can view the logs of runs that use it.

## Step 11 · Consume a shared workflow

[calm] A developer adds a small caller in a pull request, just a few lines that call the shared file.
[600ms]
[impressed] The shared workflow then runs on the pull request, and its jobs show up as checks.
[600ms]
[serious] The caller is still code, so review it: look at the ref after the at sign, and at which secrets it passes.

## Step 12 · Recap: pick the right tool

[calm] Three look-alike ideas. A starter workflow is a copy you own. A reusable workflow is a central workflow you call.
[600ms]
[confident] And a composite action is a handful of steps bundled into one.
[600ms]
[proud] For G H two hundred, you can now tell them apart, use them safely, and manage templates and reusable components with confidence.
