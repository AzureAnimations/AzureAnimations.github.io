# Narrator Script — GitHub · Evaluate and Tune a GitHub Agent

**Source animation:** [EvaluateAndTuneAgents.html](../../journeys/GitHub/EvaluateAndTuneAgents.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · It Merged, Then It Broke

[calm] Contoso's storefront team assigned an issue to Copilot. Pull request two thirty-one passed review and was merged.
[600ms]
[concerned] On Monday, the build on main fails. A green merge is not the same as good work.
[600ms]
[curious] Review is the moment to evaluate with evidence, not a formality. So how do you evaluate an agent's work?

## Step 2 · Define Success First

[calm] Before the agent starts, write down the expected outcome and the constraints on the issue.
[600ms]
[confident] Think of the issue as the prompt. Add acceptance criteria that say what a good solution looks like, and directions about which files need to change.
[600ms]
[encouraging] The result is a yardstick you can score the work against.

## Step 3 · Qualitative and Quantitative Signals

[curious] Numbers say what happened. Judgement says whether it's right. Use both.
[600ms]
[confident] Quantitative signals are measured: test results, timings, scan counts and the size of the change. Qualitative signals are judged, like review comments on approach, naming and intent.
[600ms]
[reflective] Read each one against what the issue asked for. The numbers here are made up for the story.

## Step 4 · Automated Scans as Signals

[calm] Copilot cloud agent checks its own code with CodeQL, a dependency check and secret scanning.
[600ms]
[confident] CodeQL looks for code security issues. Dependencies are checked against the GitHub Advisory Database. Secret scanning looks for keys, tokens and other sensitive information.
[600ms]
[serious] Read the results as signals, not a verdict. They don't tell you whether the change did what the issue asked.

## Step 5 · Read the Evidence

[curious] Start at the symptom and walk toward the cause.
[600ms]
[confident] Look at workflow runs and the diff first, then the plan, then the session log. Every Copilot commit message links to that log.
[600ms]
[serious] By default, workflows don't run on a Copilot push until someone with write access approves them, so inspect the changes first.

## Step 6 · Classify the Root Cause

[calm] Sort each failure by where the first wrong step happened. Pick a class to see its clues.
[600ms]
[confident] A reasoning error means the agent solved the wrong problem. Tool misuse means the wrong command or too much access. Context or environment means missing setup, a blocked request or stale context.
[600ms]
[determined] Fix the class you actually found. Changing everything at once hides what worked.

## Step 7 · Walk Through One Failure

[curious] Here the session log shows a wrong tool call.
[600ms]
[concerned] The agent ran npm install in a repository that uses pnpm, and edited a generated folder. The symptom is a second lockfile that broke the build.
[600ms]
[confident] The cause is a missing rule: the instructions never said which package manager to use. Fix the cause.

## Step 8 · Tune the Instructions

[calm] Put the missing rules where the agent reads them: the repository's custom instructions file.
[600ms]
[confident] Add how to install, test and build, and which folders are generated. Path-specific files and the agent instructions file work too.
[600ms]
[encouraging] If Copilot can build and test in its own environment, it's more likely to produce a pull request that merges quickly.

## Step 9 · Tune the Tools and Access

[calm] Give the agent only the tools the task needs.
[600ms]
[confident] Remove a tool the task never needs, and narrow another to a single operation instead of a whole server. In a custom agent profile, leaving tools out enables all of them.
[600ms]
[reassuring] The principle is the least access that still does the job.

## Step 10 · Tune the Memory

[calm] Memory should help, not mislead.
[600ms]
[confident] Review what Copilot remembered about the repository, along with its citations, and delete what's stale. People with write access can do this in repository settings.
[600ms]
[reflective] Copilot checks citations against the current branch, but that's a judgment. Use custom instructions for what must always hold.

## Step 11 · Re-run and Compare

[curious] Run the same task again with the tuned setup, and score both runs against the same yardstick.
[600ms]
[impressed] The first run passed three of six checks. The second passed all six, after changing instructions, tools and memory.
[600ms]
[serious] One better run is a signal, not proof. Change one lever at a time when you can, and try a few similar tasks before you trust it.

## Step 12 · Recap: Evaluate, Diagnose, Tune

[calm] Evaluate the work against a yardstick: the outcome, constraints, signals and scans.
[600ms]
[confident] Diagnose the cause from logs, plans, diffs and workflow runs, then name a class. Tune one lever: instructions, tools and access, or memory.
[600ms]
[proud] Then run it again. That covers the G H six hundred area on evaluation, error analysis and tuning.
