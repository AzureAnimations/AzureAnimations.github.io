# Narrator Script — GitHub · Where the Agent Runs: Environments, Firewalls and Safe Failure

**Source animation:** [AgentExecutionEnvironments.html](../../journeys/GitHub/AgentExecutionEnvironments.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · Three places an agent can run

[calm] Ravi hands Maya's issue to an agent. First decide where it runs, because that sets what it can reach and who looks after the machine.
[600ms]
[confident] There are three places: your laptop, an Actions runner, or a cloud sandbox. The sandbox is an isolated Linux environment that GitHub creates and manages for the session.
[600ms]
[serious] You choose where a session runs when it starts, and you can't change it afterwards.

## Step 2 · A short-lived environment, set up first

[calm] On Actions, the cloud agent works in a fresh, temporary environment.
[600ms]
[confident] A setup file prepares it first, installing the tools and dependencies the agent needs to build and test. It's a normal workflow with one job, and it only takes effect on the default branch.
[600ms]
[reassuring] If a step fails, the agent skips the remaining setup steps and starts with what it has.

## Step 3 · The firewall: allowed hosts only

[curious] By default, a firewall limits the agent's internet access.
[600ms]
[confident] Hosts Copilot needs for GitHub are always allowed, and a recommended list covers package registries and other common hosts. Owners and repository admins can add more, and new sessions pick them up. Everything else is blocked and reported on the pull request.
[600ms]
[serious] The firewall covers commands the agent runs, not MCP servers or setup steps, and it's not a complete security solution.

## Step 4 · Different limits per environment

[curious] Development, test and production shouldn't behave the same. Pick one to compare.
[600ms]
[confident] An environment is a named stage with its own secrets and protection rules. Required reviewers mean a person approves before the job runs, so a deployment can wait.
[600ms]
[calm] The agent also has its own secrets and variables, set per repository or organization.

## Step 5 · Start an agent from a workflow

[curious] A workflow can run Copilot CLI on an Actions runner, with no one at the keyboard.
[600ms]
[confident] There's a trigger, then job setup, installing the CLI, and authenticating with a token from a secret. Last, it runs one prompt and lists which tools it may use.
[600ms]
[reflective] The job gets the lowest permissions it needs. For most automation, GitHub recommends Agentic Workflows, which is in preview.

## Step 6 · Branches and pull requests it may create

[calm] The agent can create work, but a person decides what ships.
[600ms]
[confident] It pushes to one branch of its own, or the branch of the pull request it was asked to work on, and opens a draft pull request. A person reviews it, marks it ready and merges it.
[600ms]
[reassuring] Branch protections still apply, and by default its workflows wait until someone approves them.

## Step 7 · When a step fails

[concerned] Things will fail, and that's expected.
[600ms]
[confident] The session log records each command and its output, plus the agent's reasoning and tools. Read the command, its output and its exit code first.
[600ms]
[calm] Then choose your next move: retry, roll back or escalate.

## Step 8 · Retry, with a limit

[calm] A retry is a second chance, not a loop without end.
[600ms]
[confident] Set a fixed number of tries, wait between them, and stop at the limit. Only retry steps that do no harm when they run twice.
[600ms]
[serious] When the tries run out, stop and hand over to a person. This is a pattern you write into the script, not a built-in setting.

## Step 9 · Roll back

[serious] If a merged change does harm, you need to undo it.
[600ms]
[confident] A revert creates a new pull request that reverts the merge commit, so the fix gets the same review and checks as any change. You need write permission to do it.
[600ms]
[calm] If it conflicts, revert with Git instead. Once the agent's pull request is closed or merged, delete its branch.

## Step 10 · Escalate to a person

[calm] When the limit is reached or the next move is unclear, hand over.
[600ms]
[confident] A good hand-off says what was asked, what was tried, the error, and what changed. It links the session log and the pull request.
[600ms]
[encouraging] Then the person can steer the running session with a follow-up prompt, or take over the branch.

## Step 11 · Trace every action

[curious] Who changed this, and why? Three records answer that.
[600ms]
[confident] The pull request holds the history of what was asked, reviewed and merged. The commit is authored by Copilot, co-authored by the person, and signed. It links to the session log.
[600ms]
[reassuring] The session log shows the agent's reasoning and tools, and administrators also get audit log events.

## Step 12 · Recap: from error to escalation

[calm] Before it runs, decide where it runs, then the setup steps, the firewall, environment limits, the workflow and the allowed actions.
[600ms]
[confident] When it fails, read the error, retry within a limit, roll back, and escalate with the facts.
[600ms]
[proud] Always trace it through the pull request, the commit and the session log. That covers the G H six hundred environment skills.
