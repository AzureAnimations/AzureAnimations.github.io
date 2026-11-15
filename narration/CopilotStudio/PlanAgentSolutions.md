# Narrator Script — Copilot Studio · Copilot Studio — Plan an Agent Solution

**Source animation:** [PlanAgentSolutions.html](../../journeys/CopilotStudio/PlanAgentSolutions.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · Building is easy. Deciding comes first.

[calm] Contoso's maker builds a helper agent in an afternoon. It works, and everyone's pleased.
[600ms]
[concerned] Then seven questions arrive, and each one changes how the agent has to be built.
[600ms]
[reflective] They mirror the Plan an agent solution skills in the A B six twenty study guide.

## Step 2 · Seven decisions to make first

[confident] Here's the map: enterprise systems, identity, channels, responsible AI, governance, reusable components, and audience.
[600ms]
[calm] Each decision shapes the build.
[600ms]
[encouraging] Answer them all, and a quick prototype becomes a plan you can defend.

## Step 3 · Decision 1 · Which systems will it touch?

[curious] First, list every system the agent must read from or act on.
[600ms]
[confident] For each one, decide: is it knowledge to read, or a tool that acts?
[600ms]
[calm] Knowledge can come from Copilot connectors, Power Platform connectors, or Azure AI Search. Tools can be connectors, MCP servers, or REST APIs. Contoso's systems here are made up.

## Step 4 · Decision 2 · How do people sign in?

[curious] Next, choose how users prove who they are.
[600ms]
[confident] That choice decides which channels can work, and what the agent may do on a user's behalf.
[600ms]
[reassuring] Authenticate with Microsoft is the default for new agents. Changes take effect only after you publish.

## Step 5 · Decision 2 · Whose permissions do tools use?

[curious] When a tool calls a system, it runs as someone. Whose access should it use?
[600ms]
[confident] With the signed-in user's credentials, people only reach data they're allowed to see.
[600ms]
[reflective] With the maker's credentials, the tool acts as its author, which suits shared resources. Choose on purpose, because without authentication, tools can't use user credentials.

## Step 6 · Decision 3 · Where will it live?

[calm] A channel is where people meet the agent, such as Teams, Microsoft 365 Copilot, SharePoint, or a website.
[600ms]
[confident] Publish first, then connect the channels your audience already uses. Each channel has its own experience.
[600ms]
[serious] The demo website is for testing, not customers, and admins can block channels with data policies.

## Step 7 · Decision 4 · Who is it for?

[curious] Pick the audience first, internal or external.
[600ms]
[confident] The channel, the sign-in, and the tool credentials all follow from that choice. Try each one.
[600ms]
[reflective] These pairings are planning defaults. Teams uses Authenticate with Microsoft, other channels need manual authentication, and no authentication lets anyone with the link chat.

## Step 8 · Decision 5 · How will it stay responsible?

[serious] Plan the guardrails before launch, not after something goes wrong.
[600ms]
[confident] Moderate content, ground answers in approved knowledge, tell people it's AI, and keep a person within reach.
[600ms]
[reassuring] Content moderation is checked twice, on input and before the agent responds. Makers can also limit knowledge sources and turn off ungrounded responses.

## Step 9 · Decision 6 · Who governs it?

[calm] Admins set the rules in the Power Platform admin center.
[600ms]
[confident] They decide where agents are built, what they may connect to, and who can share them.
[600ms]
[serious] Connectors sort into Business, Non-business, or Blocked, and data can't flow between those groups.

## Step 10 · Decision 7 · What can we reuse?

[curious] Why rebuild the same pieces in every agent? Package shared building blocks once.
[600ms]
[confident] A collection can hold topics, knowledge, tools, child agents, MCP servers, connectors, flows, and entities.
[600ms]
[calm] It exports as a managed solution, and can be shared with Viewer or Editor permissions. Authors can use its components, but not change them.

## Step 11 · Your plan on one page

[calm] Seven answered decisions turn a prototype into a plan.
[600ms]
[encouraging] Check your own agent against them, one by one, and note the gaps.
[600ms]
[determined] Then study the exam skills, and read the current A B six twenty study guide, because exams and Copilot Studio names change.
