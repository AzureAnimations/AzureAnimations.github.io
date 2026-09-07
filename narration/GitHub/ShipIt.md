# Narrator Script — GitHub · Contoso Delivery · Shift Left · EN

**Source animation:** `journeys/GitHub/ShipIt.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · What You Have, and What Is Missing

[confident] Before we add anything new, let's look at where you already are.
[600ms]
[calm] You cut a branch off main. You committed your changes, and each commit named the issue it belonged to. You opened a pull request, and a reviewer approved it. That is stops one, two, three and five on this map — and you built every one of them in Branch with Intent.
[700ms]
[thoughtful] But look at stop four. There is a gap. Nothing so far has actually *checked* that the code still works.
[600ms]
[serious] A reviewer reads the change. A reviewer does not run the test suite — and a reviewer will not spot a vulnerable dependency three levels down.
[600ms]
[bright] So that is what this page adds: an automated gate that runs on the pull request itself. Green, and the change moves on to review. Red, and it goes back for a fix commit and runs again.
[600ms]
[reassuring] And notice where it sits — *before* the merge. Once a change lands on main, everyone else pulls it, and one small bug becomes everybody's afternoon.

## Step 2 · The Later You Find It, the More It Costs

[confident] The branching model ended on a promise: nothing merges until the checks are green. So let's talk about what those checks are, and — more importantly — *when* they should run.
[600ms]
[calm] Take one bug. Or one vulnerability; it behaves the same way.
[600ms]
[bright] Catch it on your laptop, before you even commit, and it costs almost nothing. Catch it in the pull request, and it costs a little more — a review cycle.
[600ms]
[serious] Catch it after it has merged into main, and now you are unpicking it from other people's work. And catch it in production — found by a customer, or by an attacker — and the cost is in a different league entirely.
[600ms]
[thoughtful] So shift left. And be precise about what that means: it is not "test more". It is test *earlier*. And it applies to security exactly as much as it applies to correctness.

## Step 3 · What the Pipeline Does — and Why You Want One

[confident] So what actually runs at that gate? Four stages, in a fixed order.
[600ms]
[calm] Source. A push, or a pull request, starts the run — you do not press anything.
[400ms]
[calm] Build. The dependencies are restored and the app is compiled, the same way it will be compiled for production.
[400ms]
[calm] Test. The unit tests run against your change.
[400ms]
[calm] And Scan. CodeQL reads the code for vulnerable patterns, and Dependabot checks the packages you pulled in.
[700ms]
[bright] Deploy sits at the end, dashed — that one belongs to the next page. Everything here happens *before* the merge.
[600ms]
[thoughtful] Now the harder question. Why bother? You could run all four of these by hand.
[600ms]
[serious] Because a person forgets step four on a Friday. Because somebody has to remember to start it, and be free to sit and watch it. And because a person can decide, just this once, to skip it.
[600ms]
[reassuring] A workflow file does none of those things. The same steps, every time, on every change — and branch protection holds the merge until they come back green.
[700ms]
[thoughtful] One last thing before we move on. Look at Build, Test, Scan and Deploy. Every one of those needs an actual computer — a processor, memory, disk. So who provides it?

## Step 4 · The Machine That Actually Runs It

[confident] A runner. A runner is simply the machine your job executes on.
[600ms]
[calm] Most of the time you let GitHub provide it. You ask for an operating system — ubuntu-latest, windows-latest, or macos-latest — and GitHub builds you a clean virtual machine for that one job.
[600ms]
[bright] Clean is the important word. It is created for the job, and destroyed the moment the job ends. Nothing you did last time is still lying around on it.
[700ms]
[thoughtful] Which is exactly why "it works on my laptop" and "it passes in CI" are two different claims. Your laptop has years of history on it. The runner has none.
[600ms]
[calm] If the default machine is too small for your build, larger runners give you more cores and more memory.
[600ms]
[serious] And if you need something GitHub cannot hand you — particular hardware, a GPU, or a route into your private network — you can host the runner yourself. But then the machine is yours. You install the software, you patch it, you secure it, and you clean up whatever the last job left behind.
[600ms]
[reassuring] Either way you choose with a single line: runs-on. And that line lives in the workflow file — which is where we are going next.

## Step 5 · What a Pipeline Actually Is

[confident] Before the checks, the machinery that runs them.
[600ms]
[calm] A pipeline is just a YAML file in your repository, under dot-github, workflows. Three things define it.
[600ms]
[bright] The trigger — when it runs. On a push, on a pull request, on a schedule. The event decides which workflow wakes up.
[600ms]
[calm] The runner — where it runs. `runs-on: ubuntu-latest` gives you a GitHub-hosted runner: a clean virtual machine, created for that one job and destroyed when it finishes. Nothing carries over from the last run. If you need access to a private network instead, you host the runner yourself.
[600ms]
[bright] And the job — what it runs. Steps, in order: check out the code, set up Node, install, test. A failure stops the job.
[600ms]
[thoughtful] And the two letters people mix up: CI proves the change is good. CD takes the proven change and releases it. Same pipeline, continued.

## Step 6 · Tests That Run Themselves

[confident] Now the first check.
[600ms]
[calm] The CI workflow runs on every push and every pull request. It installs the dependencies and runs the tests.
[600ms]
[bright] On the backend, two things get covered: that a weather response is parsed correctly, and — more importantly — what happens when the provider fails. On the frontend: that a city card renders, and that clicking it navigates to the detail page.
[600ms]
[serious] That provider-failure test is the one that earns its keep. Azure Maps *will* be slow or unavailable one day, and Contoso needs to already know how the app behaves when it is.

## Step 7 · Let GitHub Read the Code for You

[confident] Tests prove the code does what you expected. They cannot tell you the code is safe.
[600ms]
[calm] So a second workflow runs CodeQL — on every pull request, and again on a schedule each week.
[600ms]
[bright] It looks for injection and unsafe input paths, secrets committed by accident, and unsafe data flow into the provider call. Anything it finds is raised as a comment on the pull request, before a human reads it.
[600ms]
[thoughtful] This is security shifted left. The scan happens while the change is still a proposal — not after it is live.

## Step 8 · Keep the Dependencies Honest

[confident] Third check. Most vulnerabilities do not arrive in code your team wrote.
[600ms]
[calm] They arrive in packages. So Dependabot watches the manifests in the backend and the frontend, and opens a pull request whenever something needs bumping.
[600ms]
[bright] And notice the shape of that: the update arrives *as a pull request*. Which means it runs the same tests, and the same CodeQL scan, as any change a human would make.
[600ms]
[reassuring] Nothing gets to skip the gate — not even a security fix.

## Step 9 · Where Secrets Are Allowed to Live

[serious] One thing the pipeline needs that must never be in the repository: credentials.
[600ms]
[calm] Not the Azure Maps subscription key. Not a client secret or a password. Not a connection string. And not a dot-env file committed just for now — because just for now is how it ends up in the history forever.
[600ms]
[confident] They go in Actions secrets instead. Encrypted at rest, and write-only: once you save one you cannot read it back, only replace it. If a step tries to print one, GitHub masks it in the log. Environment secrets can even require an approval before a job may use them.
[600ms]
[bright] And in the workflow you reference it, never paste it — dollar, brace brace, secrets dot AZURE CLIENT ID.
[600ms]
[thoughtful] This is exactly the rule from the very first explainer — the Azure Maps key had to stay server-side — applied now to the pipeline.

## Step 10 · Every Change Arrives Already Proven

[warm] So the left-hand half is done.
[600ms]
[calm] The checks moved as far left as they go. Tests, security analysis and dependency updates all run on the pull request, on a clean runner, with secrets that never touch the code.
[600ms]
[confident] That is continuous integration, finished. Next: continuous delivery — packaging this change, and getting it into Azure safely.
