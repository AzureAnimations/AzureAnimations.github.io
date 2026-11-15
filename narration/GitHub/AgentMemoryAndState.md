# Narrator Script — GitHub · Agent Memory and State: Remember, Resume and Avoid Drift

**Source animation:** [AgentMemoryAndState.html](../../journeys/GitHub/AgentMemoryAndState.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · The agent that forgot

[calm] In the first session, the agent reads the code, decides the cap and writes tests.
[600ms]
[concerned] The second session starts from an empty context, with nowhere to keep what was learned. It repeats the same work.
[600ms]
[serious] The cost is wasted effort, and a decision that can quietly change.

## Step 2 · Short-term, long-term, external

[curious] Pick the shelf by how long a fact must last, and who needs it.
[600ms]
[confident] Short-term is this session's context. Long-term is Copilot Memory, for facts and preferences kept for later sessions. External means files, issues and pull requests in the repository.
[600ms]
[reflective] No shelf is best. Use external files for decisions that people must read and review.

## Step 3 · Copilot Memory

[calm] Copilot Memory stores facts about a repository, with citations, and your own preferences.
[600ms]
[confident] Repository facts are shared with collaborators and used only in that repository. Your preferences are yours alone, and follow you across repositories.
[600ms]
[curious] Copilot creates memories itself as it works. You can delete one in settings but not edit it, and a fork doesn't inherit them.

## Step 4 · Keep only what the task needs

[serious] A crowded context hurts the answer. A longer context is not a better one.
[600ms]
[confident] Keep the files, criteria and decisions the task depends on. Prune old chats, unrelated questions and bulky output, using commands to look, clear, or summarize.
[600ms]
[reassuring] Copilot CLI summarizes history automatically as the window fills, and memory should hold only what stays true.

## Step 5 · Expiry and reset

[calm] A memory isn't true forever.
[600ms]
[confident] It expires after a period without reinforcement. When Copilot confirms it's still valid, the clock restarts. Retrieving a memory doesn't restart it.
[600ms]
[encouraging] Owners can set the expiry, and the lower value wins if the organization and enterprise differ. You can delete a memory any time in settings.

## Step 6 · Durable artifacts

[calm] Write decisions where they outlast the chat.
[600ms]
[confident] A plan file lists the steps and which are done. An issue holds the task and its acceptance criteria. A pull request records what changed, why, and the checks.
[600ms]
[reflective] Copilot CLI saves a plan in the session folder, so keep what the team must share in the repository.

## Step 7 · Resume the work

[curious] A new session reads the artifacts: the plan, the issue and the pull request.
[600ms]
[confident] It skips anything already done and agreed, finds the first unchecked item, and carries on.
[600ms]
[calm] In Copilot CLI you can continue an earlier session, or start fresh and point the agent at the artifacts. Either way, check the plan first.

## Step 8 · Drift

[curious] Over a long run, each step looks reasonable on its own.
[600ms]
[concerned] Together, they leave the plan. The run ends somewhere the plan never went, because nobody compared the small choices with it.
[600ms]
[serious] The signal is a diff between the work and the original plan. Drift is a pattern, not a setting.

## Step 9 · Detect and correct drift

[calm] Compare the work to the plan at checkpoints, not only at the end.
[600ms]
[confident] Flag every change the plan doesn't cover. Then steer: tell the agent to revert and carry on.
[600ms]
[encouraging] You can send a follow-up prompt while Copilot is still working, and review the diff before you create a pull request.

## Step 10 · Share state across tools

[curious] Facts learned in one tool can help the others.
[600ms]
[confident] Memory belongs to a repository, not one tool. Instructions, the issue, the plan and the pull request are visible to every tool, so each has the same picture.
[600ms]
[calm] A session started in the cloud can also continue in another client.

## Step 11 · Conflicting and stale context

[concerned] When two sources disagree, one is usually stale.
[600ms]
[confident] Check against the current code, then correct the old source. Copilot checks a memory's citations against the current branch, but that's a judgment, not a guarantee.
[600ms]
[serious] Copilot CLI combines instruction files without a general order, so remove the old line rather than hoping the new one wins.

## Step 12 · Recap

[calm] Here's a checklist for agent work. Remember: choose the shelf, scope it and set its expiry.
[600ms]
[confident] Persist: write decisions down, resume from them and check for drift.
[600ms]
[proud] Keep it true by sharing state and removing stale or conflicting context. That covers the G H six hundred objective on managing memory, state and execution.
