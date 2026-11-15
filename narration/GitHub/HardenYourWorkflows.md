# Narrator Script — GitHub · Harden Your Workflows: Tokens, Pinning, Injection and Attestations

**Source animation:** [HardenYourWorkflows.html](../../journeys/GitHub/HardenYourWorkflows.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect>

---

## Step 1 · A pipeline is a path into production

[calm] A workflow runs code, holds secrets, and can ship to customers. That makes it a path into production.
[600ms]
[serious] Any text an outsider can type into it, from a pull request, an issue, or a third-party action, is a way in.
[600ms]
[determined] In this lesson we harden one release workflow for Contoso Weather Shop, one weak spot at a time.

## Step 2 · GITHUB_TOKEN: per run, scoped, short-lived

[calm] GitHub makes a fresh token for every job, before the job begins.
[600ms]
[confident] It can reach only the repository that contains the workflow, and it expires when the job finishes.
[600ms]
[serious] Any action can read it from the github token context, even if you never pass it in, so limit what it can do.

## Step 3 · Least privilege with permissions

[calm] Use the permissions key to give the token only what the job needs.
[600ms]
[confident] A good habit is to default the token to read-only, then raise it for the single jobs that need more. List any permission, and every one you leave out becomes none.
[600ms]
[serious] A personal access token is different: it's a stored secret tied to a person. Use it only when the GitHub token can't do the job.

## Step 4 · Script injection: untrusted input in run:

[curious] Here's how an attack happens. GitHub swaps the expression for its value before the shell starts.
[600ms]
[serious] If an attacker wrote that value, it becomes part of the script. Even a branch name can carry shell syntax.
[600ms]
[concerned] Be wary of titles, bodies, branch names and labels. Those are the risky inputs.

## Step 5 · The fix: an environment variable, quoted

[calm] The fix is to put the value in an environment variable and read it as data.
[600ms]
[impressed] Now the same malicious title is just text, and nothing extra runs.
[600ms]
[confident] Double-quote the variable in the shell, or pass the value to an action as an input.

## Step 6 · Trust an action before you run it

[serious] One compromised action can see the secrets a workflow uses, and can use the token to write to the repository.
[600ms]
[confident] So check who wrote it, look for a Verified creator badge, and audit that secrets never go to unintended hosts.
[600ms]
[calm] Then limit what's allowed: GitHub-created actions, verified Marketplace creators, or only the actions you name.

## Step 7 · Pin to a full commit SHA

[calm] A tag can be moved to different code later, if someone gains access to the action's repository.
[600ms]
[confident] A full commit SHA points at exactly one commit. Check that it comes from the action's own repository, not a fork.
[600ms]
[determined] Then enforce it with a policy that requires actions to be pinned to a full-length commit SHA.

## Step 8 · Immutable releases

[curious] Once an immutable release is published, its tag and files are locked.
[600ms]
[impressed] Nobody can quietly change what version four point two point zero means.
[600ms]
[confident] The title and notes stay editable, and a release attestation is created automatically so users can verify it.

## Step 9 · Environments: a gate before production

[calm] An environment can hold a deployment until a person approves, a timer ends, and the branch is allowed.
[600ms]
[confident] Its secrets stay locked until those rules pass, and one required reviewer is enough to approve.
[600ms]
[serious] Turn on Prevent self-review so that people cannot approve their own runs.

## Step 10 · OIDC: no stored cloud secret

[curious] With OIDC, the job asks GitHub for a short-lived token and shows it to Azure.
[600ms]
[confident] Azure checks it against a federated credential in Microsoft Entra ID that you set up, so no cloud password is stored in GitHub.
[600ms]
[serious] The job needs the id token write permission, and add a condition to the trust so untrusted repositories can't request tokens.

## Step 11 · Artifact attestations: sign it, verify it

[calm] The build signs a statement about what it built and where it came from.
[600ms]
[confident] Before you deploy, verify that statement with the GitHub command line tool.
[600ms]
[reflective] Sign what you ship, not every test build. And remember, an attestation links to the source and build; it doesn't prove the code is safe.

## Step 12 · Recap: a hardening checklist

[calm] Eight habits that protect one workflow, from the token to the deployment.
[600ms]
[confident] Least privilege for tokens, untrusted text through an environment variable, trusted and allowed actions pinned to a SHA, and immutable releases.
[600ms]
[proud] Then environment gates, OIDC, and attestations verified before deploy. That's the secure and optimize automation skill area of G H two hundred.
