# Narrator Script — GitHub · Contoso Delivery · Plan the Work · EN

**Source animation:** `journeys/GitHub/PlanTheWork.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · One Issue Nobody Can Pick Up

[warm] The requirements are agreed. So somebody opens one issue and pastes the whole document into it.
[500ms]
[thoughtful] Every line of it is correct. And together they make the issue useless.
[500ms]
[serious] Nobody can own it, because it is four people's work. It never fits in one review. Nobody can work in parallel. And until the last day, there is no honest way to say how far along it is.

## Step 2 · Cut It Into Four Epics

[confident] So cut it into epics. An epic is a milestone-sized slice — big enough to matter, small enough that you can say when it is finished.
[500ms]
[bright] The Node.js REST API. The retail-ready frontend. Automated quality and security. Containerization and cloud deployment.
[500ms]
[thoughtful] Keep those colours in mind. Each epic becomes a long-lived branch and a group on the board, so the name you choose follows you to production.

## Step 3 · Split Each Epic Into Sub-Tasks

[confident] An epic still is not something you can start on a Monday morning. So each one splits again.
[500ms]
[calm] A sub-task is one focused piece of work — one branch, one pull request, one review. Epic 1 becomes exactly two: the service scaffold with the cities and health endpoints, then the Azure Maps weather proxy.
[500ms]
[thoughtful] The test for whether you cut deep enough: could one person finish it, and could a reviewer hold all of it in their head at once?

## Step 4 · What Goes Inside a Sub-Task

[confident] Now, what goes in the issue? The title says what — one sentence, starting with a verb.
[500ms]
[serious] Then the acceptance criteria, and this is the part people skip. Health returns 200 with a status payload. Cities returns the supported cities as JSON. Both covered by unit tests that run in CI.
[500ms]
[thoughtful] That is the whole trick. Without acceptance criteria, "done" is an opinion — and the review turns into a negotiation.

## Step 5 · Make the Hierarchy Real

[confident] So far the epics and sub-tasks are only related in our heads. Two characters fix that.
[500ms]
[calm] In the epic's body, write a task list of issue references — a dash, a pair of brackets, and the number. GitHub renders a live checklist: close number two, and the box ticks itself and the progress bar moves.
[500ms]
[thoughtful] You never pick those numbers. GitHub stamps each new issue with the next one in the repository — and pull requests draw from the same counter, which is why the first pull request here will be number thirteen.
[500ms]
[reassuring] Notice what did not happen: nobody edited the progress bar. That is why the board you are about to build can be trusted.

## Step 6 · Say What Blocks What

[serious] One more thing to write down: order.
[600ms]
[calm] Issue six is the city detail page, and it needs weather to display. Issue three is the endpoint that returns that weather. Six simply cannot finish first.
[600ms]
[confident] So in the body of six, you write: blocked by three. GitHub shows that relationship on both issues.
[600ms]
[thoughtful] Order is information. An issue that *says* it is blocked costs a great deal less than one discovered halfway through a sprint.

## Step 7 · Your Turn: Generate This Backlog

[warm] You have seen the shape of it. Now make it real, on your own repository.
[500ms]
[calm] If you haven't set up yet, pause and do "Set Up Your Repo" first — you need an empty repo and `gh auth login` done.
[500ms]
[bright] Then download the importer, PowerShell or Bash, run it, and answer one question: your username, slash, weather map app.
[500ms]
[serious] Two things trip people up. Your repository needs an Effort field with High, Medium and Low, and the Feature issue type. Without either, the script stops and says which.
[500ms]
[reassuring] About a minute later: five of five, success. Go and run it — I'll wait.

## Step 8 · Twelve Issues — and No Way to Work Them

[confident] Open the Issues tab. Everything we planned is there — four epics, eight sub-tasks, labels, estimates, acceptance criteria, the blocked-by chain.
[500ms]
[thoughtful] Now look at it as a person who has to do the work. Which one is started? Which is next? Which is stuck, and who is on it?
[500ms]
[serious] You can't tell. Twelve open issues, all the same shade of grey. A list tells you what *exists*. It cannot tell you what is *happening*.

## Step 9 · From One Idea to Work You Can Assign

[warm] Look at the distance travelled. One idea, far too big for anyone to pick up — now four epics, sub-tasks worth a branch and a review apiece, linked by task lists and ordered by what blocks what.
[500ms]
[confident] Next stop: putting all of this on a board, so status stops living in somebody's head.
