# Build and extend an AI agent — narration

Visual companion to the Microsoft Learn lab
<https://ivorb.github.io/mslearn-ai-agents/Instructions/Exercises/A-build-and-extend-ai-agents.html>

One block per step in `static/v2/AgentLab/BuildAndExtendAgents.html` (6 steps).
`[tags]` are delivery cues for the English Dragon HD voice; `[NNNms]` become SSML breaks.
English only — this page has no language selector.

Steps 4 and 5 are INTERACTIVE, so their narration invites the learner to click rather than
describing a fixed sequence. Keep it that way if the panels change.

---

## Step 1 · The problem

[curious] Tailwind Traders already has a language model. What it doesn't have is an assistant.
[500ms]
Ask it about the return policy on a tent and the answer arrives instantly — thirty days, ninety
days, no receipt needed. Fluent, confident, and completely invented.
[700ms]
[calm] The model isn't broken. It has simply never read Tailwind's store policy, so it fills the
gap with something plausible. That is the problem this lab exists to fix.

## Step 2 · Lab at a glance

[confident] Six tasks, one assistant.
[400ms]
Two of them are core. Create and ground an agent in the portal, then connect it to a remote MCP
server. About thirty-five minutes, and you have a working, tool-using agent.
[600ms]
The other four are optional — call the agent from your own app, give it your own Python, host your
own tool server, and ship the whole thing as a hosted agent.
[500ms]
[encouraging] Pick the path that fits the time you have: core only, core plus the two recommended
tasks, or everything.

## Step 3 · The blueprint

[calm] Before the first task, here is the shape of what you're assembling.
[400ms]
One agent, four pieces. Instructions that say who it is. Knowledge, drawn from your own documents.
Tools, so it can reach past what it already knows. And a client app, where people actually talk to it.
[700ms]
[confident] Every task in this lab adds or upgrades exactly one of these. Hold on to this picture —
the rest of the lab is filling it in.

## Step 4 · How the pieces fit together

[confident] Here is where everything actually lives.
[400ms]
Your code runs on your machine: the chat window, your client, your functions, your own server. The
agent, its knowledge and its tool definitions live in Microsoft Foundry. Your documents and the
live Learn documentation server sit outside both.
[600ms]
[calm] Each badge marks the task that builds that piece. Choose a task to add what it builds, and
choose it again to take it away — so you can see precisely what each one changes.

## Step 5 · Explore each task

[encouraging] Now pick a task and look inside it.
[400ms]
Every panel shows the same three things: what you build, what you can do once it's finished, and
the one mistake that catches most people out.
[600ms]
[calm] The core tasks are the solid buttons, the optional ones are outlined. Each task stands on its
own and starts from the same folder — so begin wherever you like, in whatever order suits you.

## Step 6 · One assistant, six tasks

[confident] One assistant, six tasks, every component in place.
[500ms]
The two core tasks earned you an agent that answers from your own documents and calls a live
external tool — accurate, and useful.
[600ms]
The four optional tasks made it yours: your app, your Python, your own MCP server, all running in a
container that Foundry manages for you.
[700ms]
[warm] Knowledge is what makes it accurate. Tools are what make it useful. Now go and build it.
