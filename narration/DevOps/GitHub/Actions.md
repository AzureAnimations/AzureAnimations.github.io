# GitHub Actions and Your Pipeline — Narration

Source animation: `journeys/DevOps/GitHub/Actions.html`

One block per step, paired 1:1 with `STEPS[]`. `[NNNms]` are pauses.

---

## Step 1 · Event, Workflow, Job, Step

[measured]
GitHub Actions has exactly four moving parts. Learn to name them and every workflow file you ever read makes sense.
[500ms]
An event is something that happened in the repository — a push, a pull request, a schedule, someone clicking a button.
[400ms]
A workflow is a YAML file that says what to run when that event fires.
[400ms]
A job is a set of steps that run together on one machine. And a step is one single thing: a shell command, or a reusable action.
[600ms]
The important detail is the job. Each job gets its own fresh runner. Steps inside a job share that machine — jobs don't.

---

## Step 2 · Where It Actually Runs

[measured]
A runner is the machine that executes a job, and it runs exactly one job at a time.
[500ms]
GitHub-hosted runners give you Ubuntu, Windows or macOS, provisioned fresh for every single run. Clean VM, nothing to patch, nothing to maintain.
[500ms]
Self-hosted runners are your machines. You'd choose them for custom hardware, GPUs, licensed software, or access to a private network. You get full control — and full responsibility for every update on that box.
[600ms]
And here's the rule worth memorising. GitHub's own guidance is that self-hosted runners should almost never be used on public repositories.
[400ms]
Because on a public repo, anyone can open a pull request — and that means anyone can run their code on your machine.

---

## Step 3 · Anatomy of a Workflow File

[measured]
Every workflow is the same five keys.
[500ms]
Name, which is what shows up in the Actions tab. On, which is the trigger. Jobs, each with an id. Runs-on, which picks the runner. And steps.
[600ms]
Inside steps there are only two shapes. "Uses" pulls in someone else's action. "Run" executes your own shell command.
[400ms]
A step is one or the other. Never both.
[400ms]
The file lives in dot-github slash workflows. That path is not optional — GitHub only looks there.

---

## Step 4 · A Real CI Workflow

[measured]
Here's a complete, working file, split across two panes.
[500ms]
On the left: it runs on every push to main and on every pull request. And notice the permissions block — read the repository, nothing else. Start least-privilege and add only what a job proves it needs.
[600ms]
On the right, one job on a GitHub-hosted Ubuntu runner: check out the code, set up Node, install, lint, test.
[500ms]
One more habit worth forming. Pin third-party actions to a full-length commit SHA rather than a tag, because a tag can be moved by anyone who compromises that action's repository.

---

## Step 5 · The Complete Pipeline, In Order

[measured]
So here is the whole pipeline, and the order is the entire point.
[500ms]
CI is the top row, and it protects the branch before code lands. Trigger. Lint and build. Unit tests. Security scan. Package.
[600ms]
CD is the bottom row, and it moves the artifact after the merge. Deploy to a test environment. Integration tests. Release. Approval. Deploy to production.
[500ms]
The dividing line between the two rows is the merge.
[400ms]
Everything fast and cheap runs before anything slow and expensive. That single principle is what decides the order.

---

## Step 6 · Why That Order?

[measured]
Look at what each gate costs.
[500ms]
Lint and build: about thirty seconds. Unit tests: a minute, because they're pure logic with no network and no database. Security scanning: a few minutes. Integration tests: fifteen, because they need a deployed environment and real dependencies.
[600ms]
And the most expensive gate of all is a human being clicking approve.
[500ms]
So you order them cheapest first. A ten-second lint failure that saves a twenty-minute integration run has paid for itself a hundred times over.
[400ms]
Fail fast, and fail cheap.

---

## Step 7 · Security Belongs In The Pipeline

[measured]
Security isn't a stage at the end. It's four scans that run automatically on the pull request, before a human even looks at it.
[500ms]
Two of them look at code you wrote. Code scanning, powered by CodeQL, finds vulnerable patterns. Secret scanning catches credentials that got committed by accident.
[600ms]
Two look at what you depend on. Dependabot alerts you and opens update pull requests. Dependency review shows what this specific pull request adds, and whether it's vulnerable.
[500ms]
And for cloud credentials, use OpenID Connect to get short-lived tokens, instead of storing long-lived secrets that never expire.

---

## Step 8 · Release, Then Deliver

[measured]
These last two stages get confused constantly, so let's separate them.
[500ms]
Release produces a versioned, immutable artifact. One build, tagged — say, v1.4.0.
[500ms]
Delivery moves that exact artifact through environments. Staging first, automatically, with smoke tests. Then a required reviewer. Then production.
[600ms]
The critical word is "that exact artifact". If you rebuild between staging and production, you've tested one thing and shipped another.
[400ms]
And environments carry their own secrets and protection rules — so a production credential simply isn't reachable from a staging job.

---

## Step 9 · The Whole Pipeline

[warm]
So: an event triggers a workflow. Jobs run on runners you choose. Cheap gates run before expensive ones. And a released artifact gets promoted, never rebuilt.
[600ms]
Don't try to build all ten stages on day one.
[400ms]
Start with one file that builds and unit-tests every pull request. Get that green, get the team trusting it, and then add the next stage.
