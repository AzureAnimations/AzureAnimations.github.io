# Narrator Script — GitHub · Agents in the SDLC: Plan, Act, Evaluate

**Source animation:** [AgentsInTheSdlc.html](../../journeys/GitHub/AgentsInTheSdlc.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent>

---

## Step 1 · Assistant or agent

[calm] Meet Maya at Contoso. She can use Copilot in two ways, and both are useful.
[600ms]
[curious] An assistant answers a prompt with a suggestion, and you apply it and check it yourself. An agent researches, plans, edits files and runs tests on its own.
[600ms]
[confident] So with an agent, your part changes. You review the finished result instead of doing every step by hand.

## Step 2 · Where agents fit

[curious] So where in the software lifecycle should an agent work? Give it the well-scoped steps.
[600ms]
[confident] It can research and plan, fix small bugs, add tests and docs, run checks and open a draft pull request. You keep priorities, design, success criteria, approvals and production risk.
[600ms]
[serious] This is a starting map, not a rule. Security, personal data and incident response usually stay with a person.

## Step 3 · GitHub as the system of record

[calm] Everything the agent does lands in GitHub, so the team can always see what happened.
[600ms]
[confident] The issue holds the task. The branch keeps the agent's work apart from the default branch. The pull request is where a person decides.
[600ms]
[reassuring] Commits are authored by Copilot with the requester as co-author, and each one links to the session log. Administrators get audit log events too.

## Step 4 · Inputs, outputs and success criteria

[curious] Think of the issue as the prompt. What goes in, what must come out, and how will anyone know it worked?
[600ms]
[confident] Describe the problem, the files involved and any limits. Say what the agent must hand back, and add checks that tell you the work is done.
[600ms]
[encouraging] Clear acceptance criteria and a pointer to the right files help a lot, even though Copilot can also search the codebase itself.

## Step 5 · Plan before act

[calm] Before any code changes, the agent writes a plan you can read.
[600ms]
[confident] A good plan is structured: the goal, the files, the steps, the checks, and what is out of scope. It's a proposal, not a change to the code.
[600ms]
[reassuring] Acting stays locked until a person approves. You agree on the approach before anything is written.

## Step 6 · Validate the plan

[curious] Now a person reads the plan and decides. Try both buttons.
[600ms]
[confident] Approve it and the gate opens, so the agent may act. Send it back with a comment and the agent revises while acting stays locked.
[600ms]
[reflective] Reviewing a plan is cheap. Fixing a wrong change later is not, so keep refining until the plan matches your intent.

## Step 7 · Act inside boundaries

[calm] Once the plan is approved, the agent gets to work on its own branch.
[600ms]
[serious] It can push to one Copilot branch, or the branch of the pull request it was asked to update, and nowhere else. It can't mark a pull request ready, approve it or merge it.
[600ms]
[reassuring] Branch protections and required checks still apply to the agent, just as they do to you.

## Step 8 · Evaluate the result

[curious] When the work is pushed, checks and scans run on the pull request.
[600ms]
[confident] By default the agent checks its own code with CodeQL, secret scanning and an advisory check on new dependencies, and Copilot code review gives a second opinion. Workflows run after a person approves them.
[600ms]
[serious] Then a person reads the diff and decides. Session logs don't replace your own review and testing.

## Step 9 · Governance by pull request

[calm] Four repository controls turn "the agent opened a pull request" into a reviewed, approved change.
[600ms]
[confident] Before review, a template asks the same questions and code owners request the right reviewers. Before merge, a ruleset requires approvals and passing checks. Before deploy, an environment can require reviewers.
[600ms]
[reflective] One extra approval for pull requests Copilot opens without a person's name on them is still in public preview.

## Step 10 · Anti-patterns and their fixes

[calm] Here are three common ways agent work goes wrong. Each one is paired with a habit that prevents it.
[600ms]
[concerned] A vague task is fixed by a scoped issue with acceptance criteria. No stop rule is fixed by a limit, then a hand-off to a person.
[600ms]
[serious] An unreviewed merge is fixed by required review, code owners and checks. These are examples, not an official list.

## Step 11 · Recap: plan, act, evaluate

[calm] One loop, a person at each gate, and GitHub records it all.
[600ms]
[confident] Plan by defining inputs, outputs and success criteria, then validate the plan. Act on its own branch with no merge rights. Evaluate with checks, scans, a diff review, and pull request governance.
[600ms]
[proud] That covers the G H six hundred skills for fitting an agent into the lifecycle, from defining its task to governing its pull request.
