# Narrator Script — GitHub · Contoso Delivery · Track It on a Board · EN

**Source animation:** `journeys/GitHub/TheBoard.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · An Unorganized List of Issues

[warm] The planning worked. Every epic and sub-task is a real issue now — and this is what you get: one flat list, newest first.
[500ms]
[serious] Try to answer the questions a team actually asks. Who is working on what? What should I pick up next? What is stuck? How close is Epic 1?
[500ms]
[thoughtful] You cannot answer any of them from this screen. The issues are fine — the *view* is the problem. A list cannot show flow.

## Step 2 · One Board, Five Columns

[confident] So Contoso adds a Project and switches it to a Board view — five columns: Backlog, Ready for Sprint, In Progress, In Review, Done.
[500ms]
[bright] Five, not three. Ready for Sprint is where groomed work waits, and In Review is where finished work waits for a human. Those two are exactly where things quietly pile up — so they get named.
[500ms]
[reassuring] And the rule is simple: every item lives in exactly one column.

## Step 3 · Status Is a Column, Not a Comment

[confident] Here is what that buys you.
[600ms]
[calm] Sub-task two starts in the Backlog. It gets groomed into Ready for Sprint. Someone picks it up — In Progress. They open a pull request — In Review. It merges — Done.
[600ms]
[bright] Moving the card *is* the status update. Nobody types "starting this now" into a comment. Nobody sends a message asking.
[600ms]
[reassuring] One item, one place. If you want to know what is in review, you look.

## Step 4 · Tell the Board What Kind of Work This Is

[confident] The board still cannot tell an epic from a one-day task. So Contoso adds a field.
[500ms]
[calm] Work Type. Single select. Options: Epic and Sub-Task. Define it once and every card can carry it.
[500ms]
[thoughtful] Without it, a three-week epic and a three-hour fix look identical in a column. With it, you can filter them, group them and count them apart.

## Step 5 · Put the Work in a Timebox

[confident] One more field — and this one adds time.
[500ms]
[calm] Sprint is an iteration field on a two-week cadence. Sprint one takes the backend core; sprint two picks up the dashboard and the pipeline. Now the board can be filtered to *just this fortnight*.
[500ms]
[reassuring] That is what turns "someday" into a commitment — and what makes honest capacity planning possible at all.

## Step 6 · Group the Board by Parent

[confident] Last move. Change how the board is grouped.
[500ms]
[calm] Instead of columns by status, the same cards rearrange under the epic they belong to. Nothing was re-entered, nothing duplicated — identical data, sorted to answer a different question.
[500ms]
[confident] Group by Status to run the day. Group by Parent when someone asks how Epic 1 is going.

## Step 7 · Your Turn: Create the Board

[warm] You left the last explainer with twelve issues and no way to work them. Let's fix that on your repository.
[500ms]
[calm] Open the Projects tab, click "Link a project", then "New project". Pick Kanban if you see it; if not, choose Board. Same three columns: Todo, In Progress, Done.
[500ms]
[reassuring] Name it "Contoso Weather App" and create it. You should see an empty board — no cards at all. That's expected, and it's the point of the next step.

## Step 8 · Your Turn: Put the Issues on It

[thoughtful] So why is the board empty? Because GitHub does not move your issues onto it by itself.
[500ms]
[calm] In an organization you can tick "Import items from repository" as you create it. Otherwise open the project, three-dot menu, Workflows, "Auto-add to project", filter "is issue, is open", and turn it on.
[500ms]
[reassuring] Do all twelve appear in Todo? Drag one into In Progress and reload — if it stays, your board is live.

## Step 9 · Your Turn: Split the Board by Epic

[thoughtful] Twelve cards in one long Todo column, and nothing tells you which epic each belongs to.
[500ms]
[calm] Open View options, leave "Column by" on Status, then click Swimlanes and choose Parent issue. The column splits into four horizontal bands, one per epic — status across, epic down.
[500ms]
[careful] One warning: dragging a card sideways changes its status, but up or down, and you have just reparented that issue.

## Step 10 · Now the Team Can See the Work

[warm] So the board is done.
[600ms]
[calm] A flat list became five columns. Work Type separates the epics from the sub-tasks, Sprint puts them in a fortnight, and swimlanes report on an epic without anyone assembling a spreadsheet.
[600ms]
[confident] The plan is visible, and the status is honest. Next: the branching model that turns a card in *In Progress* into merged, deployed code.
