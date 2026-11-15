# Narrator Script — GitHub · Contoso Delivery · Shift Left · EN

**Source animation:** `journeys/GitHub/ShipIt.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · What You Have, and What Is Missing

[confident] Before we add anything new, look at where you already are.
[500ms]
[calm] You cut a branch off main. You committed, naming the issue each time. You opened a pull request, and a reviewer approved it — stops one, two, three and five on this map.
[500ms]
[thoughtful] But look at stop four. There is a gap. Nothing so far has actually *checked* that the code still works.
[500ms]
[serious] A reviewer reads the change. A reviewer does not run the test suite — and will not spot a vulnerable dependency three levels down.
[500ms]
[bright] So this page adds an automated gate on the pull request itself. Green, and it moves on. Red, and it goes back for a fix.
[500ms]
[reassuring] And notice where it sits — *before* the merge. Once a change lands on main, everyone pulls it, and one small bug becomes everybody's afternoon.

## Step 2 · The Later You Find It, the More It Costs

[confident] Take one bug — or one vulnerability; it behaves the same way.
[500ms]
[bright] Catch it on your laptop and it costs almost nothing. Catch it in the pull request and it costs a review cycle. Catch it after it merges and you are unpicking it from other people's work. Catch it in production and the cost is in a different league.
[500ms]
[thoughtful] So shift left. And be precise: it is not "test more", it is test *earlier* — and it applies to security exactly as much as correctness.

## Step 3 · What the Pipeline Does — and Why You Want One

[confident] So what runs at that gate? Four stages, in a fixed order.
[400ms]
[calm] Source — a push or a pull request starts the run. Build — dependencies restored, the app compiled the way production will compile it. Test — the unit tests run. And Scan — CodeQL reads the code, Dependabot checks the packages.
[500ms]
[bright] Deploy sits at the end, dashed — that belongs to the next page. Everything here happens *before* the merge.
[500ms]
[serious] Why bother, when you could run all four by hand? Because a person forgets step four on a Friday — and because a person can decide, just this once, to skip it.
[500ms]
[reassuring] A workflow file does neither. Same steps, every time — and branch protection holds the merge until they come back green.
[500ms]
[thoughtful] One last thing: Build, Test and Scan all need an actual computer. So who provides it?

## Step 4 · The Machine That Actually Runs It

[confident] A runner. A runner is simply the machine your job executes on.
[500ms]
[calm] Usually you let GitHub provide it: ask for ubuntu, windows or macos, and you get a clean virtual machine for that one job — created for it, destroyed when it ends.
[500ms]
[thoughtful] Which is why "it works on my laptop" and "it passes in CI" are different claims. Your laptop has years of history. The runner has none.
[500ms]
[calm] It is rented by the minute. Linux is cheapest, Windows not quite double, a macOS minute about ten times a Linux one — free on public repositories.
[500ms]
[serious] Need a GPU, or a route into your private network? Host the runner yourself. No per-minute bill, but you patch it, you secure it, and you clean up what the last job left behind.

## Step 5 · What a Pipeline Actually Is

[confident] A pipeline is just a YAML file under dot-github, workflows. Three things define it.
[500ms]
[bright] The trigger — when it runs: a push, a pull request, a schedule. The runner — where it runs. And the job — what it runs: steps in order, check out, set up Node, install, test. A failure stops the job.
[500ms]
[thoughtful] And the two letters people mix up: CI proves the change is good. CD releases the proven change. Same pipeline, continued.

## Step 6 · Tests That Run Themselves

[confident] Now the first check. The CI workflow runs on every push and pull request — install the dependencies, run the tests.
[500ms]
[bright] On the backend: that a weather response parses correctly, and what happens when the provider fails. On the frontend: that a city card renders, and clicking it navigates.
[500ms]
[serious] That provider-failure test earns its keep. Azure Maps *will* be unavailable one day, and Contoso needs to already know how the app behaves.

## Step 7 · Let GitHub Read the Code for You

[confident] Tests prove the code does what you expected. They cannot tell you it is safe.
[500ms]
[calm] So a second workflow runs CodeQL — on every pull request, and again weekly. It looks for injection and unsafe input paths, secrets committed by accident, unsafe data flow into the provider call.
[500ms]
[thoughtful] Anything it finds is raised on the pull request, before a human reads it. Security shifted left: the scan happens while the change is still a proposal.

## Step 8 · Keep the Dependencies Honest

[confident] Third check. Most vulnerabilities do not arrive in code your team wrote — they arrive in packages.
[500ms]
[calm] So Dependabot watches the manifests and opens a pull request whenever something needs bumping.
[500ms]
[bright] Notice the shape of that: the update arrives *as a pull request*, so it runs the same tests and the same scan as any human change. Nothing skips the gate — not even a security fix.

## Step 9 · Where Secrets Are Allowed to Live

[serious] One thing the pipeline needs that must never be in the repository: credentials.
[500ms]
[calm] Not the Azure Maps key. Not a client secret. Not a dot-env file committed just for now — because just for now is how it ends up in the history forever.
[500ms]
[confident] They go in Actions secrets: encrypted, and write-only — once saved you cannot read one back, only replace it. If a step tries to print one, GitHub masks it.
[500ms]
[thoughtful] This is the rule from the very first explainer — the Azure Maps key stays server-side — applied now to the pipeline.

## Step 10 · Every Change Arrives Already Proven

[warm] So the left-hand half is done.
[600ms]
[calm] The checks moved as far left as they go. Tests, security analysis and dependency updates all run on the pull request, on a clean runner, with secrets that never touch the code.
[600ms]
[confident] That is continuous integration, finished. Next: continuous delivery — packaging this change, and getting it into Azure safely.
