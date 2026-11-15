# Narrator Script — GitHub · Contoso Delivery · Build It with Copilot · EN

**Source animation:** `journeys/GitHub/BuildWithCopilot.html`

Narrated by a female voice (en-US-Ava). One block per step.

> **Content note.** Plans, prices and AI-credit figures are verified against
> `docs.github.com/en/copilot/get-started/plans`. If they change, update the page *and*
> this script together. No model is named anywhere, on purpose — the line-up turns over
> every few months and would date both the audio and the animation.

---

## Step 1 · Not Autocomplete. A Pair Programmer.

[warm] The board is full. Somebody now has to write the code — and you are not writing it alone.
[500ms]
[calm] On the left, plain autocomplete: you type, and it offers words it has already seen in the file. On the right, Copilot: you write a comment saying what you want, and it writes the function.
[500ms]
[thoughtful] The difference is not cleverness — it is context. But it is a suggestion engine, not an oracle. Right often enough to save you real time; wrong often enough that you read every line.

## Step 2 · What Is Free, and What You Pay For

[calm] Copilot Free costs nothing and is genuinely usable — two thousand completions a month, and the AI picks the model. What you don't get is the cloud agent.
[500ms]
[bright] Pro is ten dollars for fifteen hundred AI credits. Pro Plus, thirty-nine for seven thousand and the premium models. Max, a hundred for twenty thousand. At work it is per seat: Business nineteen, Enterprise thirty-nine.
[500ms]
[reassuring] And if you are a student or a teacher, stop before you pay. Get verified by GitHub and Pro is free.

## Step 3 · AI Credits: What Actually Costs You

[bright] Here is the part most people get wrong. Code completions — the grey text while you type — cost no credits at all. On any paid plan they are unlimited, so coding all day does not move the meter.
[500ms]
[serious] What does move it: chat messages, agent runs, and Copilot code review. The thinking operations, each drawing from your monthly pot.
[500ms]
[thoughtful] Run out and extra credits are one cent each — though at work, an administrator decides whether that is even switched on.

## Step 4 · Who Picks the Model

[confident] Copilot does not run on one model. It runs on a rotating line-up from several vendors — and I am deliberately not naming them, because that list would be wrong by next quarter.
[500ms]
[calm] What is stable is who chooses. On Free and Student plans there is one option: Auto. GitHub picks, and it picks well. On Pro and Business you get a picker; on Pro Plus, Max and Enterprise it includes the premium models.
[500ms]
[thoughtful] A bigger model is not automatically a better answer. Start on Auto.

## Step 5 · Copilot in VS Code

[confident] Now let us put it to work. In VS Code, install the GitHub Copilot extension, sign in with the account that holds your plan, and open Chat. That is the whole setup.
[600ms]
[calm] Here is sub-task one point one — the base server. Watch what is typed into Chat: not "write me a server", but the actual requirement. Read the backend source first. Load config. Fail fast if a variable is missing. Listen on the configured port. Shut down cleanly on SIGINT and SIGTERM.
[700ms]
[serious] Now watch the order it works in. It does not write first. It reads — the source folder, then app dot js and the config file, lighting up in the explorer as it goes. Then it reasons out loud: app dot js already exports the Express app, so server dot js should own the process, not the routes.
[700ms]
[bright] Only then does it write. Twenty lines of server dot js, and every one of them fits the project it just read. That is the difference between a tool that guesses and a tool that looks.

## Step 6 · Ask, Plan, Agent

[confident] Chat is not one thing. It is the same Copilot doing three different jobs.
[500ms]
[calm] Ask answers questions and changes nothing on disk. Plan reads your repository with read-only tools and writes an implementation plan — it proposes, you approve. Agent does the work: edits files, runs commands, reads its own errors and retries.
[500ms]
[reassuring] And they join up. Finish a plan, and a Start Implementation button hands the whole thing to an agent.

## Step 7 · Hand Sub-task 1.2 to the Coding Agent

[confident] There is one more place Copilot works, and it is not your laptop.
[500ms]
[calm] Back on github dot com, the next issue from the board — sub-task one point two.
[500ms]
[bright] Look under Assignees. There is a second button: Assign to Agent. That one button is the whole hand-off — press it, and Copilot becomes the assignee.
[500ms]
[calm] A session starts on GitHub's infrastructure, not your machine. Close the lid and walk away; a minute later it opens draft pull request fourteen.
[500ms]
[thoughtful] But notice the issue is not one vague line — three acceptance criteria, down to never leaking the Azure Maps key. What you wrote on the board *is* the prompt.

## Step 8 · You Get a Draft, Not a Decision

[confident] And here is what comes back. A pull request marked Draft — three files, tests included.
[500ms]
[serious] Draft is the important word. It is a proposal from a very fast colleague, and it earns no shortcuts: read the diff, pull the branch, run it.
[500ms]
[thoughtful] Copilot wrote the lines, but you are the author of record. Your name is on the merge — and on the incident, if it breaks at two in the morning.
[500ms]
[bright] Which raises the next question: which branch should this have lived on?
