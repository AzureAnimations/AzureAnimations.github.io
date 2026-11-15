# Narrator Script — Copilot Studio · Copilot Studio — Test and Manage Agents

**Source animation:** [TestAndLifecycle.html](../../journeys/CopilotStudio/TestAndLifecycle.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro>
- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export>

---

## Step 1 · Three good chats aren’t proof

[calm] Maya's Contoso Support agent aced her test chat. She's pleased, but real customers phrase things differently from her.
[600ms]
[concerned] And dev isn't production. So how does she prove it works, then move it safely?
[600ms]
[confident] Prove it with evaluation, and move it with solutions, variables, and pipelines. That's the Test and manage agents exam domain, twenty to twenty-five percent.

## Step 2 · Test chat or evaluation? Use both

[curious] The test chat is a live conversation, one question at a time. It's great for exploring.
[600ms]
[confident] Agent evaluation runs a whole test set, scores every answer, and can be repeated after each change.
[600ms]
[reflective] Learn recommends using both. Evaluation runs as the signed-in user, so it sees only what that user can see.

## Step 3 · Create a test set

[calm] A test case is a question, usually with the answer you expect. A test set holds up to one hundred cases.
[600ms]
[confident] Generate them from the agent, capture them from chats, import a file, or write them yourself.
[600ms]
[serious] An import file is CSV or TXT, with two headings: Question and Expected response. Any maker with access can see test sets, so keep sensitive data out.

## Step 4 · Choose how to grade the answers

[curious] There are eight test methods, and one test set can use several of them.
[600ms]
[confident] Some check the words, some judge meaning or quality, one checks the tools used, and one checks safety.
[600ms]
[reflective] General quality is on by default and needs no expected answer. Methods that compare against an expectation return Invalid for any case without one.

## Step 5 · Which method fits? Try it

[encouraging] Select a scenario, and the method that fits lights up.
[600ms]
[confident] You'll see when to use it and what to watch for.
[600ms]
[reflective] Real test sets mix methods. When precise phrasing matters, pair Compare meaning with Text similarity.

## Step 6 · Review the results

[calm] Each case ends as Pass, Fail, Invalid, or Error, and the set gets a pass rate.
[600ms]
[curious] Open a failed case to compare expected with actual, read the reasoning, and see what the agent used.
[600ms]
[reassuring] Rerun the same set after every change. Results stay for eighty-nine days, so export to CSV to keep them longer.

## Step 7 · Primer: environments and Dataverse

[calm] Agents live in a Power Platform environment, a space for agents, flows, and apps with their own data and roles.
[600ms]
[confident] Each environment can have one Dataverse database. Contoso uses dev, test, and prod.
[600ms]
[serious] Use a non-default production environment for what you ship. Solutions carry components, not Dataverse table data.

## Step 8 · ALM: a solution carries the agent

[curious] Create a custom solution, then choose Add existing, and pick Agent.
[600ms]
[confident] The solution is the carrier that moves your agent between environments. Add required objects so topics and flows travel too.
[600ms]
[serious] New solutions are unmanaged, and you can't export a managed one from Copilot Studio. Some components, like custom topics and knowledge sources, may need adding separately.

## Step 9 · Environment variables: same agent, new value

[curious] Some values change with each environment, like an API endpoint. Don't hard-code them.
[600ms]
[confident] Keep them in an environment variable inside the solution, and each environment supplies its own value.
[600ms]
[reassuring] A variable has a name, a type, an optional default, and a current value, which wins when it's set. You provide values on import, or a pipeline asks first.

## Step 10 · Pipelines: dev to test to production

[calm] An admin builds the pipeline once. Then Maya presses Deploy in dev.
[600ms]
[confident] The same managed solution moves stage by stage, and connections and variables are checked first.
[600ms]
[impressed] The solution is exported when the request is submitted, so no stage can be bypassed. Pipelines move solutions and settings, not table data.

## Step 11 · Extend the pipeline with gates

[curious] Gated extensions let you add your own steps to the pipeline.
[600ms]
[confident] A pre-export step can run your test set. Delegated deployment adds an approval, and your Power Automate flow completes or rejects the step.
[600ms]
[reflective] Enable pre-export only on the first stage. Personal pipelines can't be extended.

## Step 12 · Test and manage agents: all in one

[calm] Prove it with test sets, methods, and results.
[600ms]
[confident] Move it with solutions, variables, and pipelines. Together that's the Test and manage agents domain.
[600ms]
[proud] It's twenty to twenty-five percent of the A B six twenty exam, so read the current study guide before you sit it.
