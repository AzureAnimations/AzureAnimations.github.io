# Narrator Script — GitHub · Contoso Delivery · Branch with Intent · EN

**Source animation:** `journeys/GitHub/BranchStrategy.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Nobody Pushes Straight to main

[confident] The board says this card is In Progress. Time to write code — and the first question is where to put it.
[500ms]
[serious] Not on main. main is what gets deployed, so it is the one branch nobody writes to directly. Contoso enforces that with a ruleset: require a pull request, require the checks, require a review, block force pushes.
[500ms]
[thoughtful] A convention people *agree* to gets broken on a bad Friday afternoon. A ruleset does not — and it applies to maintainers too.

## Step 2 · Three Tiers, Not Two

[confident] Most teams stop at two tiers: main, and a branch per change. Contoso adds one in the middle.
[500ms]
[calm] main, always deployable. Below it an epic branch, long-lived, one per epic, integrating that epic's sub-tasks. Below that a feature branch, short-lived, one per sub-task, named for the issue it closes.
[500ms]
[bright] That middle tier is the whole idea — an entire epic can be assembled and tested *as one thing* before any of it reaches production.

## Step 3 · Clone It — and All You Have Is main

[warm] Everything so far has been on GitHub. To write code, you need it on your machine.
[500ms]
[calm] Click the green Code button, copy the address, then `git clone` and paste. What you get is not a download — it is a complete copy of the repository, with its entire history.
[500ms]
[reassuring] Now type `git branch`. One line: a star, and the word main. A fresh clone has exactly one branch — and it is the protected one. So the next thing you do is make one of your own.

## Step 4 · Cut the Epic Branch, Then the Feature Branch

[confident] Two command sequences, and the order matters.
[500ms]
[calm] First the epic branch: check out main, pull it so you start from what is deployed, create it, push it so the team can see it exists.
[500ms]
[bright] Then the feature branch — and notice where you are standing. You are *on* the epic branch, and you cut the feature branch from there.
[500ms]
[serious] Branch from the wrong place and your pull request fills with other people's commits, and the review becomes unreadable.

## Step 5 · A Commit Is a Set of Changes

[confident] So what is a commit, really? People say it like it means one file. It does not.
[500ms]
[calm] Sub-task one point one is the backend: a server, a health route, a cities route, the Azure Maps service, the package file, an example environment file, and a README edit.
[500ms]
[bright] Seven files. Six new, one modified. All seven go in together, as *one* commit.
[500ms]
[serious] Which brings us to three commands people mix up, because they happen in three places. `git add` saves nothing — it picks. `git commit` writes what you picked into the history on your own machine. And `git push` is the only one that touches GitHub.

## Step 6 · Write the Issue Number Into the Commit

[confident] The work is done, and it needs a commit message.
[500ms]
[calm] `feat` says what kind of change this is, then a plain description — and at the end, in brackets, the issue number. That reference draws the line back: the commit now appears on issue two.
[500ms]
[thoughtful] Six months from now, `git log` is the only colleague who still remembers why this line changed. The issue number is what lets it answer.

## Step 7 · One Number, Three Places

[thoughtful] So why does that message end in bracket hash two? Because GitHub reads it.
[500ms]
[calm] The moment the commit is pushed, GitHub adds a line to issue two — a commit that referenced this issue. Open the issue and you see the code that answered it; open the commit and you see the task that asked for it. Six months from now, the blame annotation on this line still carries that number.
[500ms]
[careful] One caution: a bare hash two only *links*. To actually close the issue you need a keyword — closes hash two — which the pull request carries next.

## Step 8 · Open the Pull Request Into the Epic

[confident] Time to open the pull request — and here is the step people get wrong.
[500ms]
[serious] The base branch is the epic branch. Not main. Every sub-task lands in its epic first.
[500ms]
[bright] In the body, two words and a number: Closes hash two. So when this merges, the issue closes itself, its box ticks in the epic's task list, and its card moves to Done. Three things, from one line of text.

## Step 9 · The Checks Decide, Not the Author

[confident] Opening the pull request starts the pipeline.
[600ms]
[calm] The project builds. The unit tests run. CodeQL scans the code for security problems. And a teammate reads it.
[600ms]
[serious] Until every one of those is green, the merge button stays disabled — for everyone, including the person who wrote it.
[600ms]
[reassuring] This is why the ruleset in step one mattered. Without it these checks would be advice. With it, they are a gate.

## Step 10 · When the Epic Is Whole, Promote It

[confident] Sub-task two merges. Sub-task three merges. The epic branch now holds a complete, integrated backend — and it has been tested as a unit, not as fragments.
[600ms]
[calm] So one final pull request takes `epic/backend-api` into main.
[600ms]
[bright] And *that* is the merge that ships. Everything before it was integration. This one triggers the deployment workflow.

## Step 11 · Epic 1, From Cut to Merge

[warm] Let's put the last five steps into one picture, and follow just epic one.
[500ms]
[calm] At the top, main. One commit, and then nothing — it sits still for the whole story. Below it, cut from main, the epic branch. Empty at first: it is a container, not a workspace.
[500ms]
[calm] Sub-task two gets its own short branch off the epic. One commit. Pull request thirteen merges it back — and because the body said "Closes #2", the issue closes itself.
[500ms]
[bright] Then sub-task three does the same. Its own branch, its own commit, pull request fourteen — the one Copilot's agent opened.
[500ms]
[confident] Count the middle lane: two commits, one per sub-task. And only now, only once the epic is whole, does pull request fifteen carry it into main.

## Step 12 · How It Actually Played Out

[confident] Now zoom out. Epic one was one of four, and every one has this same shape.
[500ms]
[calm] The backend API. The frontend. Tests and the pipeline. Security and deployment. Each cut from main, each filling with its own sub-tasks, each coming back through exactly one reviewed pull request — fifteen, eighteen, twenty-one, twenty-four.
[500ms]
[thoughtful] The feature branches have not disappeared — they live *inside* these lanes. This view is zoomed out to the merges that reached main.
[500ms]
[calm] Notice the order. Each epic finishes and promotes before the next. Main only ever moves forward in whole, tested pieces.
[500ms]
[reassuring] One exception: only the very first commit landed straight on main, before the ruleset was switched on.

## Step 13 · One Issue, One Branch, One Safe Merge

[warm] That is the whole model.
[500ms]
[calm] main protected by a ruleset. An epic branch per epic, integrating its parts. A short feature branch per issue, named for its number. And a set of checks that decides whether any of it gets through.
[500ms]
[confident] Everything rests on those green checks. So next: what the pipeline actually runs.
