# Narrator Script — Copilot Studio · Copilot Studio — Multi-Agent Solutions

**Source animation:** [MultiAgentSolutions.html](../../journeys/CopilotStudio/MultiAgentSolutions.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents>
- <https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns>
- <https://learn.microsoft.com/training/courses/ab-620t00>

---

## Step 1 · One agent, too many choices

[curious] Contoso Support keeps gaining tools, topics, and other agents. Each one seemed like a good idea at the time.
[600ms]
[concerned] Past a point, picking the right one gets harder, not easier for the orchestrator.
[600ms]
[serious] Microsoft Learn's rule of thumb is that routing can degrade beyond about thirty to forty choices, or sooner when descriptions look alike.

## Step 2 · When to split into more agents

[calm] Start with one agent. That's the simplest thing that can work.
[600ms]
[confident] Split only when there's a clear need, because every extra agent adds hops to run and to govern.
[600ms]
[reflective] Learn's advice is to review names and descriptions first. Splitting adds latency and widens the testing, management, and governance surface.

## Step 3 · Child agent or connected agent?

[curious] When you do split, you have two options. The parent calls both through generative orchestration.
[600ms]
[confident] A child agent is lightweight, and lives inside your agent. A connected agent is a separate agent, with its own orchestration, tools, and knowledge.
[600ms]
[reassuring] They differ in how independent they are, and you can mix both in one solution.

## Step 4 · Child agents and existing agents

[calm] Here the parent delegates to a child agent that lives inside it.
[600ms]
[confident] It can also delegate to an existing Copilot Studio agent that another team built. That agent must be in the same environment, published, and allowed to connect.
[600ms]
[encouraging] Add it from the parent's Agents page, then sharpen its description so routing works.

## Step 5 · Integrate a Foundry agent

[curious] Now an agent built in Microsoft Foundry joins the team. This one is in preview.
[600ms]
[confident] Give Copilot Studio the project endpoint and the Agent Id, then describe when the parent should call it.
[600ms]
[serious] The Foundry agent needs its Activity protocol endpoint enabled, and it must be built in the new Foundry portal.

## Step 6 · Integrate a Fabric data agent

[curious] A Fabric data agent answers from your Fabric data. This connection is also in preview.
[600ms]
[confident] Pick it from the agents you can access, then describe what it knows, so the parent can route questions to it.
[600ms]
[serious] Some things aren't supported yet, like redirecting to it from a topic or naming it in instructions. Generative orchestration can still call it.

## Step 7 · A2A: agents talking to agents

[curious] Agent2Agent, or A2A, is an open standard for handing a task to another agent, even one built on a different framework.
[600ms]
[confident] Use it for agents that already speak A2A, for example external frameworks hosted outside Copilot Studio.
[600ms]
[reflective] MCP plugs in tools instead. Use MCP servers for tools and resources, and custom connectors or HTTP tools for plain APIs.

## Step 8 · Trace one request across the team

[curious] Follow one customer message through the team. Two specialists work on it, and one reply comes back.
[600ms]
[confident] Select each hop to see what happens there and what to watch for.
[600ms]
[encouraging] It's a fictional scenario, and in presenter view the hops step through for you.

## Step 9 · Ground answers with Azure AI Search

[calm] Index your documents once in Azure AI Search.
[600ms]
[confident] Copilot Studio uses that index for generative answers, and a Foundry agent can use the very same index.
[600ms]
[reflective] Add it as knowledge through a proper connection, and name one vector index. To show citations, the index needs a field holding the document URL.

## Step 10 · Custom prompts on Foundry models

[curious] A prompt tool can run on a model you choose, not only the default.
[600ms]
[confident] Connect a model deployed in Foundry, then use that prompt as a tool or inside a topic.
[600ms]
[serious] Enter the deployment name and base model name exactly as Foundry shows them, and use a chat-completions endpoint.

## Step 11 · Monitor agents with Application Insights

[calm] Once the team is running, you'll want to watch it. Paste a connection string into the agent's settings.
[600ms]
[confident] Choose what to log, then query the telemetry with Kusto in Azure.
[600ms]
[encouraging] Test canvas chats are logged too, so filter them out with the design mode custom dimension. A dashboard view, in preview, charts latency, tool usage, and exceptions.

## Step 12 · Multi-Agent Solutions — All in One

[calm] Design the team, connect the specialists, ground them in Azure, and watch them run.
[600ms]
[confident] That's two of the four skill groups in the A B six twenty domain, Integrate and extend agents.
[600ms]
[determined] Skills are updated over time, so read the live study guide. The exam can include common preview features, and the Foundry and Fabric connections are in preview today.
