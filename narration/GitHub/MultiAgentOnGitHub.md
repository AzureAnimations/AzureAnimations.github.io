# Narrator Script — GitHub · Several Agents, One Repository

**Source animation:** [MultiAgentOnGitHub.html](../../journeys/GitHub/MultiAgentOnGitHub.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>

---

## Step 1 · Three Agents, One Repository

[calm] Contoso's weather team hands a backlog to three agents, and Maya wants all of it done fast.
[600ms]
[curious] Each agent gets its own task, but they share one codebase, the same branches and the same pull request list.
[600ms]
[serious] That's where trouble starts. Work can collide, get duplicated, or fail without anyone noticing.

## Step 2 · Choose a Pattern

[calm] Three issues, three agents. Before you start them, pick a pattern that matches how the issues depend on each other.
[600ms]
[confident] An orchestrator breaks the goal into tasks, runs independent ones in parallel, then reviews and combines the results. A hand-off passes one item to the next specialist.
[600ms]
[reflective] If the work is truly sequential, parallel agents add very little.

## Step 3 · Isolate Parallel Work

[confident] Give every agent its own branch. Then parallel work can't overwrite each other until a pull request brings it together.
[600ms]
[calm] On GitHub, Copilot cloud agent pushes to one branch per task and opens one pull request for it. On your own machine, a git worktree gives each agent its own folder.
[600ms]
[reassuring] Either way, a person does the final merge.

## Step 4 · Overlapping Changes

[curious] Here two agents edit the same line of the same file. Each pull request looks fine on its own.
[600ms]
[calm] Git merges different files or different lines by itself. But different edits to the same line need help.
[600ms]
[intrigued] The Files changed tab on each pull request is where you can see the overlap.

## Step 5 · Resolve Conflicts

[serious] A conflict blocks the merge, because Git can't safely choose between two edits.
[600ms]
[confident] Settle the merge order, so one pull request lands first and the next one updates. Ask the file's owner through CODEOWNERS. Copilot can help from the merge box.
[600ms]
[reassuring] In the end, a person picks the final text.

## Step 6 · Duplicated and Contradictory Work

[curious] Now read the pull request list for two warning signs. Two pull requests that close the same issue are duplicates.
[600ms]
[concerned] Two that disagree are contradictions, like kilometers per hour in the code and miles per hour in the guide.
[600ms]
[determined] Keep one, close the other, and write down why. Search qualifiers can narrow the list.

## Step 7 · Leave an Audit Trail

[calm] Each agent's decisions and hand-off notes are written into its pull request, so anyone can review them later.
[600ms]
[confident] Copilot cloud agent commits are signed, list the person who started the task as co-author, and link to the session log. That log shows its reasoning and the tools it used.
[600ms]
[serious] Logs help, but they don't replace your own review.

## Step 8 · Spot a Stalled or Failed Run

[calm] A healthy run keeps producing log lines. Compare every session with a threshold your team sets.
[600ms]
[concerned] Watch for three kinds of trouble. Failed means a check ends in failure. Partial means it stopped early with some commits pushed. Stalled means no new log line for too long.
[600ms]
[reassuring] Open a session from the agents panel to see its progress and log.

## Step 9 · Recover: Roll Back and Hand On

[serious] When a run goes wrong, stop it first. Stopping ends the run and keeps the commits already pushed.
[600ms]
[confident] Then roll back only that agent's work. Reverting a merged pull request opens a new one that undoes it, so the history stays.
[600ms]
[reassuring] Finally, hand the task on with notes. People merge, because Copilot can't approve its own pull request.

## Step 10 · Add an Agent

[curious] Need a specialist? Add one new profile file, and write it in Markdown.
[600ms]
[calm] The agents already working keep their own files and their own branches. Give the new one a clear job and only the tools it needs.
[600ms]
[optimistic] Merge the file, then try one task before you rely on it.

## Step 11 · Update, Replace or Retire an Agent

[calm] To change an agent, change its profile through a pull request. Git keeps every version, and old pull requests and logs stay in place.
[600ms]
[confident] A task keeps using the version it started with. To replace an agent, bring in the new one first, then retire the old one.
[600ms]
[reflective] Retiring means deleting the file but keeping the trail. Sessions can be archived, so they stay readable.

## Step 12 · Recap: A Multi-Agent Run, Reviewed After the Fact

[calm] Look back at Contoso's run with six questions, and every answer lives in the repository.
[600ms]
[confident] Plan with a pattern and one branch for each agent. Watch for conflicts, duplicates and stalls. Keep the pull requests, commits and session logs.
[600ms]
[proud] That's the orchestrating multi-agent coordination skill area from the G H six hundred study guide.
