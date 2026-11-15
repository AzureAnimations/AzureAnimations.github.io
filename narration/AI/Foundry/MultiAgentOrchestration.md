# Narrator Script — Foundry · Multi-Agent Orchestration

**Source animation:** [MultiAgentOrchestration.html](../../../journeys/AI/Foundry/MultiAgentOrchestration.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/agent-framework/workflows/orchestrations/>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>
- <https://learn.microsoft.com/agent-framework/workflows/human-in-the-loop>

---

## Step 1 · One agent, too many hats

[calm] At Contoso Retail, an agent called Helper handles every returns question alone: orders, policy, refunds and emails.
[600ms]
[concerned] That means one prompt, one pile of tools, and one growing context.
[600ms]
[reflective] The more hats it wears, the harder it is to keep it reliable.

## Step 2 · Three reasons to split the job

[curious] The fix is to give each agent one job, with a focused prompt, only the tools it needs, and only the context it uses.
[600ms]
[calm] You can even size the model to the task.
[600ms]
[confident] Learn names three reasons: specialization, optimization, and separate security boundaries.

## Step 3 · When one agent is enough

[calm] Before splitting anything, start with the simplest thing that works.
[600ms]
[serious] Every step up the ladder adds coordination, latency, cost, and new ways to fail.
[600ms]
[reassuring] Use the lowest level of complexity that reliably meets your requirements.

## Step 4 · In a line, or side by side

[curious] Sequential orchestration runs agents one after another, each building on the last.
[600ms]
[calm] Concurrent runs agents on the same input at once, then a final step combines their answers.
[600ms]
[confident] Both are built into Microsoft Agent Framework. Use sequential when order matters, and concurrent when the jobs are independent.

## Step 5 · Who decides who goes next?

[curious] In a handoff, the active agent passes the whole task to a better-suited peer, with no central boss.
[600ms]
[calm] In group chat and Magentic, a manager picks who acts next, and Magentic adds a planning manager on top.
[600ms]
[serious] The classic Connected Agents tool isn't available in the new Foundry Agent Service, so use workflows, Agent Framework, or the A2A tool.

## Step 6 · How agents pass context

[curious] Every agent adds its own reasoning and tool results. Pass everything along, and the context swells.
[600ms]
[calm] Pass just a summary, and it stays lean. The bar sizes here are only illustrative.
[600ms]
[reflective] By default, each agent in a sequence consumes the previous agent's full conversation, though you can pass only its responses. Workflows also offer shared state.

## Step 7 · Tools: the agent asks, your code acts

[curious] With function calling, the agent asks for a get order function with order eighteen forty-two.
[600ms]
[calm] Your code runs the function and returns the result.
[600ms]
[confident] The agent then uses that result to finish its reply. The agent asks, but your code does the acting.

## Step 8 · Sensitive tools pause for a human

[serious] Mark risky tools as approval-required. When an agent calls one, the run pauses.
[600ms]
[calm] A request shows the tool and its arguments, and a person decides.
[600ms]
[concerned] Foundry's visual workflow builder is in preview and retires on the first of December, twenty twenty-six, so new builds should use Microsoft Agent Framework.

## Step 9 · You are the approver

[curious] Now it's your turn. The Refund agent wants to refund two hundred forty dollars on order eighteen forty-two, and the run is paused.
[600ms]
[calm] Choose Approve or Reject, and watch the workflow branch.
[600ms]
[encouraging] Then try the other choice, so you see both paths.

## Step 10 · Read the whole run as a trace

[calm] A trace records each step of a run in order: model calls, tool calls, tokens, and time.
[600ms]
[curious] In a team, it shows which agent did what, and where things went wrong.
[600ms]
[reassuring] Foundry stores traces in Application Insights, and tracing is generally available for prompt and hosted agents.

## Step 11 · Where teams go wrong, and the guardrails

[serious] More agents mean more ways to fail. So name the failure first, then add the control that catches it.
[600ms]
[calm] Set iteration caps with a fallback such as a human, keep group chats to three agents or fewer, and monitor tokens per agent.
[600ms]
[confident] Assign models by task, and validate each output before the next agent uses it.

## Step 12 · Multi-agent orchestration at a glance

[calm] It's one job, shared by a small team of agents that each focus on one thing.
[600ms]
[reassuring] A human in the loop where it matters, and a trace to show what happened.
[600ms]
[proud] That's how Helper became a team you can actually trust.
