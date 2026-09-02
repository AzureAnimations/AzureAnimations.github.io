# Branches and GitHub Flow — Narration

Source animation: `journeys/DevOps/GitHub/Branches.html`

One block per step, paired 1:1 with `STEPS[]`. `[NNNms]` are pauses.

---

## Step 1 · A Branch Is a Pointer

[measured]
Almost everyone pictures a branch as a copy of the whole project. It isn't.
[500ms]
A branch is a movable label that points at one commit. That's it. A file containing a single forty-character SHA.
[600ms]
Which is why creating one is instant, and why deleting one costs you nothing. Nothing was duplicated in the first place.
[400ms]
Every commit knows its parent, so the pointer plus that parent chain is the history.
[500ms]
So: branch early, branch often, and merge fast. It's free.

---

## Step 2 · main Is the Branch That Must Work

[measured]
There's really only one rule, and everything else follows from it.
[500ms]
main should always be deployable. You could ship it right now. Every check on it is green, and nothing arrived without a review.
[600ms]
Every other branch exists so that main can stay that way.
[500ms]
And you don't protect it with good intentions — you protect it with a ruleset. Require a pull request. Require the checks to pass. Block direct pushes.
[400ms]
Including your own. Especially your own.

---

## Step 3 · Contoso Starts a Repository

[warm]
Let's make that concrete. Contoso is building an internal dashboard.
[500ms]
They start with one repository and one commit on main — repo init. That's the whole history so far.
[600ms]
And they've planned three epics of work. Watch the history grow as they build them.
[400ms]
Each epic follows the same shape: branch from main, commit on the branch, open a pull request, merge back.

---

## Step 4 · Epic 1 — Backend and Frontend

[measured]
The team cuts a branch from main and calls it epic-one-backend-frontend.
[500ms]
Two commits land on it. The backend API first, then the frontend dashboard.
[500ms]
Then a pull request, a review, and the merge back into main.
[600ms]
Notice main itself stayed untouched the whole time the work was in progress. It stayed deployable.
[400ms]
And notice the branch name. A month from now, that name is the only documentation anyone has about what this work was.

---

## Step 5 · Epic 2 — Tests and CI

[measured]
Epic 2 branches from main — but main has moved. It already contains Epic 1's work.
[600ms]
That's the important habit. Branching from an updated main is what keeps merges small, because you're building on top of what's already there instead of drifting away from it.
[500ms]
Two commits: the unit tests, then the CI workflow. Then merge.
[400ms]
And from this point on, every future pull request in the repository gets tested automatically.

---

## Step 6 · Epic 3 — Security and Delivery

[measured]
Epic 3 is the biggest one. Dependabot and CodeQL. The Dockerfiles and the Bicep. And finally the CD workflow.
[600ms]
Three commits, one branch, one merge.
[500ms]
And now look at the finished picture. Three epics, three branches, and one straight main line running through all of them.
[600ms]
Read main left to right and you get the whole story of the project. It started. It got features. It got tested. It got secured, and then it shipped.

---

## Step 7 · Why Branches Should Be Short

[measured]
Here's the thing a branch really is: a bet that nothing else will change underneath it.
[500ms]
The longer it stays open, the worse that bet gets.
[500ms]
A branch open for a day is a few files. Easy to review properly. main has barely moved, so conflicts are rare, and the feedback arrives while you still remember writing the code.
[600ms]
A branch open for a month is hundreds of files. Nobody reviews that properly — they skim it and approve. main has moved on, so there are conflicts everywhere.
[500ms]
And you end up merging code that you wrote and then forgot.
[400ms]
Aim for hours or days. Not weeks.

---

## Step 8 · GitHub Flow, Formally

[measured]
Everything you just watched has a name. It's called GitHub Flow, and it's six steps.
[500ms]
Create a branch from main. Make your commits. Open a pull request — open it early, because it's a conversation, not a submission. Let the review and the CI run. Merge when it's green and approved. Then delete the branch.
[600ms]
And notice what isn't there. No develop branch. No release branch. No long-lived integration branch that everyone dreads merging.
[400ms]
Just main, and short-lived branches off it. That's the whole model.

---

## Step 9 · Branch, Merge, Repeat

[warm]
So, to bring it together.
[500ms]
A branch is a movable pointer — free to create, free to delete. main stays deployable, protected by required checks and reviews. And every change takes the same six steps.
[600ms]
One last thought. People skip the branch for small changes, because it feels like overhead.
[500ms]
But if a change is too small to deserve a branch, it's small enough to break main by accident.
[400ms]
Branch anyway.
