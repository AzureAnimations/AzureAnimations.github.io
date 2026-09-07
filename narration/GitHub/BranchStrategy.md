# Narrator Script — GitHub · Contoso Delivery · Branch with Intent · EN

**Source animation:** `journeys/GitHub/BranchStrategy.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · Nobody Pushes Straight to main

[confident] The board says this card is In Progress. Time to write some code — and the first question is where to put it.
[600ms]
[serious] Not on main. main is what gets deployed, so it is the one branch nobody writes to directly.
[600ms]
[calm] Contoso enforces that with a ruleset called *protect-the-main-branch*: require a pull request, require the status checks to pass, require a review from somebody else, and block force pushes and deletions.
[600ms]
[thoughtful] A convention people *agree* to gets broken on a bad Friday afternoon. A ruleset does not — and it applies to maintainers too.

## Step 2 · Three Tiers, Not Two

[confident] Most teams stop at two tiers: main, and a branch per change. Contoso adds one in the middle.
[600ms]
[calm] At the top, main — always deployable, always protected. Below it, an epic branch: `epic/backend-api`. Long-lived, one per epic, and its job is to integrate that epic's sub-tasks. Below that, a feature branch: `feature/#2-health-cities-endpoints`. Short-lived, one per sub-task, named for the issue it closes.
[600ms]
[bright] That middle tier is the whole idea. It means an entire epic can be assembled and tested *as one thing* before any of it reaches production.

## Step 3 · Clone It — and All You Have Is main

[warm] Everything so far has been on GitHub. To actually write code, you need it on your machine.
[600ms]
[calm] Open the repository, click the green Code button, and copy the address it shows you. That is all that button is for.
[600ms]
[confident] Then `git clone`, and paste. What you get back is not a download — it is a complete copy of the repository, with its entire history.
[600ms]
[thoughtful] Now type `git branch`, and look at how little there is. One line. A star, and the word main.
[600ms]
[reassuring] That is the point. A fresh clone has exactly one branch — and it is the protected one you are not allowed to push to. So the very next thing you do is make a branch of your own.

## Step 4 · Cut the Epic Branch, Then the Feature Branch

[confident] Two commands sequences, and the order matters.
[600ms]
[calm] First the epic branch. Check out main, pull it so you are starting from what is actually deployed, create `epic/backend-api`, and push it so the rest of the team can see it exists.
[600ms]
[bright] Then the feature branch — and notice where you are standing. You are *on* the epic branch, and you cut `feature/#2-health-cities-endpoints` from there.
[600ms]
[serious] Branch from the wrong place and your pull request fills up with other people's commits, and the review becomes unreadable.

## Step 5 · A Commit Is a Set of Changes

[confident] So what is a commit, really? People say it like it means one file. It does not.
[600ms]
[calm] Sub-task one point one is the backend. To build it you write a Node.js and Express server, a route for slash api slash health, a route for slash api slash cities, and the service that calls Azure Maps for the weather. Plus the package file that pulls in the dependencies, an example environment file naming the Azure Maps key, and an edit to the README so somebody else can run it.
[600ms]
[bright] That is seven files. Six brand new, one modified. And all seven go in together, as *one* commit.
[600ms]
[serious] Which brings us to three commands people constantly mix up, because they happen in three different places.
[600ms]
[calm] `git add` does not save anything. It just picks. It says: these are the changes I want in the next commit.
[600ms]
[calm] `git commit` takes what you picked and writes it into your history — the history on your own machine. Still nobody else can see it.
[600ms]
[confident] And `git push` is the only one of the three that touches GitHub. Until you run it, all of this is a private conversation between you and your laptop.

## Step 6 · Write the Issue Number Into the Commit

[confident] Now the work is done, and it needs a commit message.
[600ms]
[calm] `feat` says what kind of change this is. Then a plain description of what was implemented. And at the end, in brackets, the issue number: hash two.
[600ms]
[bright] That reference is what draws the line back. The commit now appears on issue two, so anyone reading the issue can see the code that answered it.
[600ms]
[thoughtful] Six months from now, `git log` is the only colleague who still remembers why this line changed. The issue number is what lets it answer.

## Step 7 · One Number, Three Places

[thoughtful] So why does that message end in bracket hash two?
[600ms]
[calm] Because GitHub reads it. The moment the commit is pushed, GitHub turns that number into a link, and it adds a line to issue two: alex-dev added a commit that referenced this issue — with the commit's short ID next to it.
[600ms]
[confident] So open issue two and you can see the exact code that answered it. Open the commit and you can see the task that asked for it. One number, wired in both directions, for free.
[600ms]
[bright] And it does not stop at GitHub. In your editor, six months from now, the blame annotation on this very line still carries the same message — and the same hash two. From one line of code you can reach the commit, and from the commit, the task.
[600ms]
[careful] One caution. A bare hash two only *links*. To make merging actually close the issue, you need a keyword — closes hash two — and that is what the pull request carries next.

## Step 8 · Open the Pull Request Into the Epic

[confident] Time to open the pull request — and here is the step people get wrong.
[600ms]
[serious] The base branch is `epic/backend-api`. Not main. Every sub-task lands in its epic first.
[600ms]
[calm] In the body, two words and a number: Closes hash two. That is what wires the pull request to the issue.
[600ms]
[bright] So when this merges, issue two closes by itself — which ticks its box in the epic's task list, and moves its card to Done on the board. Three things, from one line of text.

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
[600ms]
[calm] At the top, main. One commit on it, and then nothing — it sits still for the whole story.
[600ms]
[confident] Below it, cut from main, `epic/backend-api`. Empty at first. It is a container, not a workspace.
[600ms]
[calm] Sub-task two gets its own short branch off the epic. One commit. Pull request thirteen merges it back in — and because the body said "Closes #2", the issue closes itself.
[600ms]
[bright] Then sub-task three does exactly the same thing. Its own branch, its own commit, pull request fourteen.
[600ms]
[thoughtful] Now count the middle lane. Two commits. One per sub-task. That is the whole epic.
[600ms]
[confident] And only now — only once the epic is whole — does pull request fifteen carry it up into main.
[400ms]
[reassuring] Two short branches, two pull requests into the epic, and one that reaches production.

## Step 12 · How It Actually Played Out

[confident] Now zoom out. Epic one was one of four, and every one of them has this same shape.
[600ms]
[calm] Epic one, the backend API. Epic two, the frontend. Epic three, tests and the pipeline. Epic four, security and deployment.
[600ms]
[bright] Each one is cut from main, each fills up with its own sub-tasks, and each comes back through exactly one reviewed pull request — fifteen, eighteen, twenty-one, twenty-four.
[600ms]
[thoughtful] The feature branches you just watched have not disappeared. They live *inside* these lanes. This view is simply zoomed out to the merges that actually reached main.
[600ms]
[calm] Notice the order, too. Each epic finishes and promotes before the next one does. Main only ever moves forward in whole, tested pieces.
[600ms]
[reassuring] And the one exception: only the very first commit landed straight on main, before the ruleset was switched on. Everything after that went through review.

## Step 13 · One Issue, One Branch, One Safe Merge

[warm] That is the whole model.
[600ms]
[calm] main protected by a ruleset, so nobody can push straight to production. An epic branch per epic, integrating its parts. A short feature branch per issue, named for its number. And a set of checks that decides whether any of it is allowed through.
[600ms]
[confident] Everything here rests on those green checks. So in the last explainer: what the pipeline actually runs — and how it deploys to Azure without storing a password.
