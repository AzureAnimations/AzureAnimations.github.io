# Narrator Script — GitHub · Contoso Delivery · Plan the Work · EN

**Source animation:** `journeys/GitHub/PlanTheWork.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · One Issue Nobody Can Pick Up

[warm] The requirements are agreed and written down. So somebody opens an issue and pastes the whole document into it.
[600ms]
[calm] A backend that talks to Azure Maps. A dashboard, and a detail page for each city. Tests, security scanning, a pipeline. A container image, and a deployment to Azure.
[600ms]
[thoughtful] Every line of that is correct. And together they make the issue useless.
[600ms]
[serious] Nobody can own it, because it is four people's work. It never fits in one review. Nobody can work in parallel. And until the very last day, there is no honest way to say how far along it is.
[600ms]
[reassuring] The document itself is linked on this step, if you want to read what we are about to cut up.

## Step 2 · Cut It Into Four Epics

[confident] So the first move is to cut it into epics.
[600ms]
[calm] An epic is a milestone-sized slice of the product — big enough to matter to the business, small enough that you can say clearly when it is finished.
[600ms]
[bright] Epic 1, the centralized Node.js REST API — the backend core we argued for in the last explainer. Epic 2, the retail-ready frontend. Epic 3, automated quality and security. Epic 4, containerization and cloud deployment.
[600ms]
[thoughtful] Keep those colours in mind. Each epic is about to become a long-lived branch and a group on the project board, so the name you choose here follows you all the way to production.

## Step 3 · Split Each Epic Into Sub-Tasks

[confident] An epic still is not something you can start on a Monday morning. So each one splits again.
[600ms]
[calm] A sub-task is one focused piece of work — one branch, one pull request, one review. Epic 1 becomes exactly two of them.
[600ms]
[bright] Sub-task one-point-one is the service scaffold, plus the first two endpoints: cities, and health. One-point-two is the Azure Maps weather proxy — the endpoint that holds the key server-side and normalizes the response.
[600ms]
[thoughtful] Here is the test for whether you have cut deep enough: could one person finish it, and could a reviewer hold all of it in their head at once? If not, split again.

## Step 4 · What Goes Inside a Sub-Task

[confident] Now, what actually goes in the issue?
[600ms]
[calm] The title says what — one sentence, starting with a verb. *Implement the health and cities endpoints.*
[600ms]
[serious] Then the acceptance criteria, and this is the part people skip. Health returns 200 with a status payload. Cities returns the supported cities as JSON. Both routes are covered by unit tests that run in CI.
[600ms]
[thoughtful] That is the whole trick. Without acceptance criteria, "done" is an opinion — and the review turns into a negotiation.
[600ms]
[calm] And on the right: an assignee, labels, the project, and the work type. Those are what let the board know where this piece belongs.

## Step 5 · Make the Hierarchy Real

[confident] So far the epics and sub-tasks are only related in our heads. Two characters fix that.
[600ms]
[calm] In the epic's body, write a task list of issue references — a dash, a pair of brackets, and the issue number. That is it.
[600ms]
[bright] GitHub renders it as a live checklist, and it knows those are real issues. Close number two, and the box ticks itself and the progress bar moves.
[600ms]
[thoughtful] And where do those numbers come from? You never pick them. The moment you open an issue, GitHub stamps it with the next number in the repository. Our epic was created first, so it is number one — which makes its two sub-tasks two and three. Epic two then lands on four.
[600ms]
[calm] Pull requests draw from that same counter, which is why the first pull request in this repository will be number thirteen — right after the twelfth issue. And a number is never reused, even if the issue is deleted.
[600ms]
[reassuring] Notice what did not happen: nobody edited the progress bar. Nobody updated a status field. That is exactly why the board you are about to build can be trusted.

## Step 6 · Say What Blocks What

[serious] One more thing to write down: order.
[600ms]
[calm] Issue six is the city detail page, and it needs weather to display. Issue three is the endpoint that returns that weather. Six simply cannot finish first.
[600ms]
[confident] So in the body of six, you write: blocked by three. GitHub shows that relationship on both issues.
[600ms]
[thoughtful] Order is information. An issue that *says* it is blocked costs a great deal less than one discovered halfway through a sprint.

## Step 7 · Your Turn: Generate This Backlog

[warm] You have seen the shape of it. Now let's make it real — on your own repository.
[600ms]
[calm] If you haven't set up yet, pause here and do the "Set Up Your Repo" explainer first. You need an empty repo, and `gh auth login` already done. It takes about five minutes, and you only do it once.
[600ms]
[bright] Then download the importer — PowerShell or Bash, whichever shell you're in — run it, and answer the one question: your username, slash, weather map app.
[600ms]
[serious] Two things trip people up, so check them first. Your repository needs an issue field called Effort, with High, Medium and Low. And it needs the Feature issue type. Without either, the script stops and tells you exactly which one is missing.
[600ms]
[reassuring] About a minute later you should see: five of five, success. Go and run it now — I'll wait.

## Step 8 · Twelve Issues — and No Way to Work Them

[confident] Open the Issues tab on your repository. Everything we planned is there.
[600ms]
[calm] Four epics. Eight sub-tasks, linked underneath them. Labels, effort, estimates, acceptance criteria, a milestone, and the blocked-by chain — all of it, correctly written down.
[600ms]
[thoughtful] And now look at it as a person who has to do the work. Which one is started? Which one is next? Which one is stuck, and who is on it?
[600ms]
[serious] You can't tell. Twelve open issues, all the same shade of grey, newest first. A list tells you what *exists*. It cannot tell you what is *happening*.
[600ms]
[reassuring] Do you see the same flat list? Good — that's the problem, and it's exactly the one the next explainer fixes.

## Step 9 · From One Idea to Work You Can Assign

[warm] Look at the distance travelled.
[600ms]
[calm] One idea, far too big for anyone to pick up. Four epics, milestone-sized and named for the branches to come. Sub-tasks under each one — a branch, a pull request and a review apiece. And the whole thing linked by task lists and ordered by what blocks what.
[600ms]
[confident] Next stop: putting all of this on a board — so the team can see it, and so status stops living in somebody's head.
