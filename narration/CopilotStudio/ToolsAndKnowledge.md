# Narrator Script — Copilot Studio · Copilot Studio: Knowledge and Tools

**Source animation:** [ToolsAndKnowledge.html](../../journeys/CopilotStudio/ToolsAndKnowledge.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/add-knowledge-copilots-online-workshop/>
- <https://learn.microsoft.com/training/modules/copilot-tools-online-workshop/>

---

## Step 1 · The answers live outside the agent

[calm] Contoso Support is live, and customers have started asking things its prompt simply can't answer.
[600ms]
[curious] Some questions need facts that sit in wikis, databases and files. Others need actions, like starting a return, that live behind APIs and apps.
[600ms]
[confident] Contoso and every system you'll see here are fictional, and the same agent runs through all twelve steps.

## Step 2 · Two jobs: know it, or do it

[curious] Every outside need comes down to one of two jobs. Either the agent needs to know something, or it needs to do something.
[600ms]
[calm] Knowledge gives it content to read and cite. Tools let it call a service and change things. They live on two separate pages of the agent.
[600ms]
[confident] With generative orchestration, the agent chooses between them by reading your descriptions, so those words really matter.

## Step 3 · Copilot connectors: index first, then answer

[calm] The first knowledge route is Copilot connectors, which used to be called Microsoft Graph connectors.
[600ms]
[confident] A tenant admin connects a non-Microsoft system, and its content is indexed into Microsoft Graph. Agents can then answer from it, cite it, and respect each person's access.
[600ms]
[serious] Because the admin sets it up first, it only shows up in the Add knowledge dialog afterwards.

## Step 4 · Power Platform connectors: ask the live system

[curious] This route is different, because nothing gets copied. It's a preview, real-time option.
[600ms]
[confident] Copilot Studio indexes only table and column names. Then each question runs against the live system, using the user's own sign-in.
[600ms]
[calm] It reuses the same connection and data policies as connector tools, and works with systems like Salesforce, ServiceNow, Azure SQL, SAP and Dataverse.

## Step 5 · Azure AI Search: bring your own index

[calm] Here you bring your own index. You prepare a vector index in Azure and add it through a data connection.
[600ms]
[confident] You get one index per knowledge source, and it can return citations, as long as the index has a URL field to point to.
[600ms]
[reassuring] Use the import and vectorize wizard so the same embedding model also embeds the question. Private endpoints are supported, too.

## Step 6 · Connector tools: prebuilt or custom

[calm] Now we move from reading to acting. A connector wraps a REST API so the agent can call it.
[600ms]
[curious] But what if there's no prebuilt connector for Contoso's Returns API? Then you simply add the custom connector your team already built.
[600ms]
[reassuring] By default, the tool runs with each user's own connection, so people only do what they're allowed to do.

## Step 7 · REST API tool: an OpenAPI file becomes tools

[curious] Maybe you don't have a connector at all, just an OpenAPI file. This preview route turns that file into tools.
[600ms]
[confident] You upload the specification, write a clear description, choose none, an API key or OAuth for authentication, and keep only the endpoints you want. Each one becomes a tool.
[600ms]
[serious] That description is what the orchestrator reads to decide when to call the tool, so add the synonyms people actually use.

## Step 8 · MCP: connect once, choose the tools

[curious] An MCP server publishes its own tools and resources, each with a name, a description and inputs.
[600ms]
[confident] You add it once with the wizard, then switch off any tool you don't want the agent to use. When the server changes, the agent sees the update.
[600ms]
[calm] Generative orchestration has to be on, and prompts aren't supported yet. A resource only becomes usable when a tool returns it.

## Step 9 · Computer use: when there is no API

[curious] What if there's no connector, no API and no MCP server? That's where computer use comes in.
[600ms]
[impressed] The agent looks at a Windows screen, decides what to do, then clicks and types like a person would. A vision and reasoning model helps it cope when screens change.
[600ms]
[calm] It needs a Windows machine and generative orchestration, and each step uses Copilot Credits. Hosted machines suit prototypes; use your own in production.

## Step 10 · Computer use: set guardrails, watch every run

[serious] An agent that clicks through screens needs guardrails. Run it on a dedicated machine and limit what it can touch with an allow list.
[600ms]
[concerned] Let a person step in when it's unsure, but don't rely on that alone. Supervision is probabilistic, and the allow list doesn't stop the model from opening a site.
[600ms]
[reassuring] Afterwards, review every run in Activity, with a transcript and session replay. Run logs go to Dataverse and are kept for seven days.

## Step 11 · Which route should I pick?

[calm] Start from what the agent needs, not from the technology. Pick a need and you'll see the route, when to choose it, and what to watch out for.
[600ms]
[confident] The rule of thumb is simple. Use a knowledge source to read.
[600ms]
[determined] Use a connector, a REST API or an MCP server to call a service. And choose computer use only when nothing else can connect.

## Step 12 · Knowledge and tools: all in one

[calm] Let's pull it together. Read with knowledge, act with tools.
[600ms]
[confident] Choose the lightest route that works, and supervise the heaviest one, which is computer use.
[600ms]
[proud] For the exam, A B six twenty, Integrate and extend agents in Copilot Studio, is forty to forty-five percent. These routes cover connecting to knowledge sources and adding tools.
