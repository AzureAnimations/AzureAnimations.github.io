# Inside a GitHub Repository — Narration

Source animation: `journeys/DevOps/GitHub/RepoTour.html`

One block per step, paired 1:1 with `STEPS[]`. `[NNNms]` are pauses.

---

## Step 1 · Every Repository Looks Like This

[warm]
This is a GitHub repository. And here is the good news: every repository on GitHub looks exactly like this one.
[600ms]
Three zones. At the top, the name bar — who owns it, what it's called, and whether it's public or private.
[500ms]
Under that, the row of tabs. And under that, the content, which changes depending on which tab you picked.
[600ms]
The tabs aren't decoration. Each one answers a different question about the project.
[400ms]
Learn the six that matter and you can walk into any repository on the internet and know where to look.

---

## Step 2 · Where You Choose the Branch

[measured]
First question everybody asks: where do I pick the branch?
[500ms]
Top-left of the file list. That button, the one that says main.
[600ms]
And this is the part worth slowing down for. Everything below that button — the files, the README, the commit history — is showing you that one branch.
[500ms]
Next to it, the branch count. Click that and you get the full list, with the stale ones flagged.
[600ms]
Switching branch doesn't change the repository. It only changes your view of it. Nothing is lost, and main is one click away.
[400ms]
One warning, though. If you edit a file straight from this page, you're committing to whichever branch is named in that button. Check it first.

---

## Step 3 · The Code Tab

[measured]
The Code tab is what the project is.
[500ms]
The files as they stand on this branch. Above them, the commit bar — the last commit that touched the repository, whether its checks passed, and the total commit count.
[600ms]
The green Code button is how the project gets onto your machine. It holds the clone URL, and the option to open the whole thing in a Codespace instead.
[500ms]
And on the right, About — the description, the licence, the topics. The elevator pitch.
[400ms]
Scroll down and the README renders automatically as the project's front page. Which is why a good README matters more than people think.

---

## Step 4 · The Issues Tab

[measured]
Issues is what needs doing.
[500ms]
Every bug, every task, every question — each one with its own number, its own thread, and a state: open or closed. The default view hides everything already finished.
[600ms]
Labels sort them. Bug, enhancement, good first issue — colour-coded, and you can filter on them.
[500ms]
Milestones group them into a bucket with a due date. That's usually a release, or a sprint.
[600ms]
And an assignee says who owns it, so nothing sits there belonging to nobody.
[500ms]
One correction, because it trips people up. An issue isn't only a bug report.
[400ms]
It's the place the discussion happens before anyone writes code — and it's the thing a pull request eventually closes.

---

## Step 5 · The Pull Requests Tab

[measured]
A pull request proposes merging one branch into another.
[500ms]
It shows the full diff — every line you changed. It collects reviews. And it runs your checks against the merged result, not just against your branch.
[600ms]
All of that happens before anything reaches main.
[500ms]
Down here is the box everyone watches: all checks have passed. Those are your Actions workflows reporting back.
[600ms]
And on the right, the reviewers, and what's actually required before the merge button turns green.
[500ms]
This is the gate. If main is protected — and it should be — then a pull request, with a green tick and an approval, is the only way in.

---

## Step 6 · The Actions Tab

[measured]
Actions answers one question: did it build?
[500ms]
On the left, your workflows — one entry for every .yml file in dot-github-slash-workflows.
[500ms]
On the right, every run, newest first. Green passed. Red failed. Yellow still going. Each one tells you which branch and which commit triggered it, and how long it took.
[600ms]
Click any run and you drop into the logs — per job, per step, searchable.
[500ms]
And if something failed for a silly reason, re-run it. Either the whole thing, or just the jobs that failed.
[400ms]
One thing to connect: these runs are the same checks a pull request waits on. Red here means red there.

---

## Step 7 · The Security Tab

[measured]
Security is three robots, watching three different things.
[500ms]
Dependabot reads your dependencies. When one of them has a known vulnerability, you get an alert — and it opens the upgrade pull request for you.
[600ms]
Code scanning reads your code. CodeQL runs on every push and every pull request, looking for injection, cross-site scripting, and friends.
[600ms]
Secret scanning looks for credentials. Keys and tokens you committed without meaning to. And with push protection on, it stops the push before the secret ever lands.
[500ms]
On a public repository all three are free.
[400ms]
Which makes the one at the top worth noticing — the security policy that hasn't been set up. That's how people tell you they found something.

---

## Step 8 · The Settings Tab

[measured]
Settings is who and what is allowed. You'll only see this tab if you're an admin.
[600ms]
There's a lot in here, but two sections matter more than the rest.
[500ms]
Collaborators and teams — access, granted per person or per team, across five roles: Read, Triage, Write, Maintain, Admin.
[600ms]
And Rules. This is where you require a pull request, require the checks to pass, and block direct pushes to main.
[500ms]
That one is important. This is where "main is always deployable" stops being a good intention and becomes something the platform enforces for you.
[500ms]
Third, secrets and variables. Encrypted values your workflows read at run time.
[400ms]
Which is the whole point — your credentials live here, and never in your code.

---

## Step 9 · Which Tab Answers Which Question

[warm]
So don't memorise the layout. Memorise the questions.
[600ms]
What is the code? Code. What needs doing? Issues. What's being proposed? Pull requests.
[500ms]
Did the build pass? Actions. Are we exposed? Security. Who can do what? Settings.
[600ms]
And the branch — that's the button at the top-left of Code, and it decides everything you see below it.
[500ms]
Same six tabs on a two-file weekend experiment, and on a repository with ten thousand contributors.
[400ms]
Once you know them, every project you open is already familiar.
