# Narrator Script — Copilot Studio · Copilot Studio: Agent Flows

**Source animation:** [AgentFlows.html](../../journeys/CopilotStudio/AgentFlows.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/flows-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create>
- <https://learn.microsoft.com/microsoft-copilot-studio/flows-request-for-information>
- <https://learn.microsoft.com/microsoft-copilot-studio/flow-manage-monitor>

---

## Step 1 · A refund can’t be improvised

[curious] Contoso Support chats well. But a refund isn't just a chat, it's a process with rules.
[600ms]
[serious] It has to follow the same steps, in the same order, every single time.
[600ms]
[concerned] Left to improvise, one refund request can wander down several different paths, and that's a risk.

## Step 2 · Agent flow or topic?

[calm] Both are deterministic, so the same input always gives the same output.
[600ms]
[confident] A topic is built for the conversation. An agent flow is built for the business process happening behind it.
[600ms]
[reflective] A good rule of thumb: if the work is talking with the user, use a topic. If it's steps, systems, and people, build an agent flow.

## Step 3 · Create the flow

[calm] You can describe a flow in everyday language, or build it yourself in the designer.
[600ms]
[confident] A flow the agent can call starts with a trigger and finishes by responding to the agent.
[600ms]
[encouraging] Create it from the agent's Tools page, and Copilot Studio adds the trigger and the response action for you.

## Step 4 · Inputs in, outputs out

[curious] The trigger carries input parameters, and the response action carries output parameters.
[600ms]
[confident] The agent fills in the inputs, then reads the outputs when the flow responds.
[600ms]
[serious] If you change a parameter later, refresh the flow in the agent and republish. A schema mismatch is a common cause of a bad request error.

## Step 5 · Configure actions and connectors

[calm] Between the trigger and the response sits a lane for your actions, drawn from four families.
[600ms]
[confident] Connector actions use a connection to reach the service they talk to.
[600ms]
[encouraging] Agent flows are premium flows, so premium connectors work too, whether Microsoft 365, third-party, or custom.

## Step 6 · Hand the flow to the agent

[confident] Once the flow meets the four requirements, publish it. Then add it from the agent's Tools page.
[600ms]
[curious] Its description matters, because that's how the orchestrator knows when to call it.
[600ms]
[calm] You can add it at the agent level for the orchestrator to call directly, or inside one topic as an Action node.

## Step 7 · Ask a human, then carry on

[curious] Sometimes the right answer is a person. A human-in-the-loop action, an approval or a request for information, pauses the flow.
[600ms]
[confident] It asks someone, then resumes with their answer.
[600ms]
[reflective] The agent only waits for the response action, so put the long human wait after it. Actions placed there can keep running, up to the thirty day flow run limit.

## Step 8 · When a step fails

[concerned] Things fail. Timeouts happen, data is bad, and a reviewer sometimes never answers.
[600ms]
[confident] Select a warning icon to see how the flow reacts in each case.
[600ms]
[reassuring] The pattern is to group the main steps in a Try scope, and put recovery in a Catch scope that runs when Try fails.

## Step 9 · Watch every run

[calm] Every agent flow has an Overview, an Activity history, and an Analytics view.
[600ms]
[confident] Together they help you fix failures and spot trends across runs.
[600ms]
[reflective] Keep in mind that Analytics can take up to thirty minutes to show new runs, and run analysis is only for solution flows.

## Step 10 · Agent flows: All in One

[calm] Let's recap. Deterministic steps keep the process the same every time.
[600ms]
[confident] A person steps in when needed, you plan for failure, and you can see every run.
[600ms]
[proud] These six skills are the Create and monitor agent flows objectives in the A B six twenty study guide.
