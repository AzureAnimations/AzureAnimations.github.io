# Narrator Script — GitHub · Contoso Delivery · Track It on a Board · EN

**Source animation:** `journeys/GitHub/TheBoard.html`

Narrated by a female voice (en-US-Ava). One block per step.

---

## Step 1 · An Unorganized List of Issues

[warm] The planning worked. Every epic and every sub-task is now a real issue in the repository.
[600ms]
[calm] And this is what you get: one flat list, newest first. Epic one sits next to sub-task six, which sits next to epic four.
[600ms]
[serious] Now try to answer the questions a team actually asks. Who is working on what? What should I pick up next? What is stuck? How close is Epic 1 to finished?
[600ms]
[thoughtful] You cannot answer any of them from this screen. The issues are fine — the *view* is the problem. A list cannot show flow.

## Step 2 · One Board, Five Columns

[confident] So Contoso adds a Project, and switches it to a Board view.
[600ms]
[calm] The board is called *Contoso Weather-Driven Retail App*, and it has five columns: Backlog, Ready for Sprint, In Progress, In Review, and Done.
[600ms]
[bright] Five, not three. Ready for Sprint is where groomed work waits, and In Review is where finished work waits for a human. Those two columns are exactly where things quietly pile up — so they get named.
[600ms]
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
[600ms]
[calm] Its name is Work Type. Its type is single select. Its options are Epic and Sub-Task.
[600ms]
[bright] Define it once, and every card on the board can carry it. Epic one is an Epic. Sub-tasks two and three are Sub-Tasks.
[600ms]
[thoughtful] Without that field, a three-week epic and a three-hour fix look identical in a column. With it, you can filter them, group them and count them apart.

## Step 5 · Put the Work in a Timebox

[confident] One more field — and this one adds time.
[600ms]
[calm] Sprint is an iteration field, running on a two-week cadence. Sprint one takes the backend core: the scaffold, the weather proxy, and the tests that cover them. Sprint two picks up the dashboard, the city detail page, and the CI pipeline.
[600ms]
[bright] Now the board can be filtered down to *just this fortnight*.
[600ms]
[reassuring] That is what turns "someday" into a commitment — and it is what makes a burndown, and honest capacity planning, possible at all.

## Step 6 · Group the Board by Parent

[confident] Last move. Change how the board is grouped.
[600ms]
[calm] Instead of columns by status, the same cards rearrange themselves under the epic they belong to. Epic one, with its two sub-tasks. Epic two, with its two.
[600ms]
[thoughtful] Nothing was re-entered and nothing was duplicated — it is the identical data, sorted to answer a different question.
[600ms]
[confident] Group by Status to run the day. Group by Parent when someone asks how Epic 1 is going.

## Step 7 · Your Turn: Create the Board

[warm] You left the last explainer with twelve issues and no way to work them. Let's fix that on your own repository.
[600ms]
[calm] Open your repository and go to the Projects tab. Click "Link a project", then "New project".
[600ms]
[bright] Now you get a choice. Under "Start from scratch" there's Table, Board and Roadmap. Below that are the templates GitHub curates — and one of them is Kanban. Pick Kanban if you see it; if you don't, choose Board. They give you the same three columns: Todo, In Progress, and Done.
[600ms]
[calm] Name it "Contoso Weather App", and create it.
[600ms]
[reassuring] Do you see an empty board with those three columns? It should have no cards on it at all yet — that's expected, and it's the point of the next step.

## Step 8 · Your Turn: Put the Issues on It

[thoughtful] So why is the board empty? Because GitHub does not move your issues onto it by itself.
[600ms]
[calm] There are two ways to connect them. If you're creating the project inside an organization, you can tick "Import items from repository" while you set it up — that pulls in everything you already have, and everything you add later.
[600ms]
[confident] Otherwise, open your project, click the three-dot menu, and choose Workflows. Open "Auto-add to project", set the filter to "is issue, is open", and save and turn it on.
[600ms]
[bright] Now go and drag one card from Todo into In Progress.
[600ms]
[reassuring] Do all twelve appear in Todo? And does the card you dragged stay in In Progress when you reload the page? Then your board is live — and everything left in this journey happens on it.

## Step 9 · Your Turn: Split the Board by Epic

[thoughtful] So all twelve cards are on the board — sitting in one long Todo column, and nothing on a card tells you which epic it belongs to.
[600ms]
[calm] Open View options at the top right of the board. Leave "Column by" set to Status, then click Swimlanes and choose Parent issue.
[600ms]
[bright] The column splits into four horizontal bands, one per epic — and the Todo, In Progress and Done columns still run across every one of them. Status across, epic down. The same twelve cards, answering two questions at once.
[600ms]
[careful] One warning. Dragging a card into a different swimlane changes the field you grouped by. Sideways changes the status — but up or down, and you have just reparented that issue.
[600ms]
[reassuring] Do you see four bands, one per epic? Then save the view, so the whole team opens the board the same way you do.

## Step 10 · Now the Team Can See the Work

[warm] So the board is done.
[600ms]
[calm] A flat list became five columns. Work Type separates the epics from the sub-tasks, Sprint puts them in a fortnight, and swimlanes report on an epic without anyone assembling a spreadsheet.
[600ms]
[confident] The plan is visible, and the status is honest. Next: the branching model that turns a card in *In Progress* into merged, deployed code.
