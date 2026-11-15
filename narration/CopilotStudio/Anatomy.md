# Narrator Script — Copilot Studio · What Makes an Agent (Anatomy)

**Source animation:** `static/v2/CopilotStudio/Anatomy.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step. Narrated by a male voice (en-US-Andrew).

---

## Step 1 · Overview

[confident] Let's open a real Copilot Studio agent — the Contoso Support agent — and walk it tab by tab.
[600ms]
[calm] The Overview tab is its identity: a name, the model that reasons for it — here, GPT-4.1 — and the instructions that set its persona and its rules.
[600ms]
[impressed] And generative orchestration is switched on, so the agent decides, in the moment, what to use for each request. Instructions, plus a model, plus orchestration — that's the brain. Everything else is what it can use.

## Step 2 · Knowledge

[confident] Next, the Knowledge tab — this is where you ground the agent in your own data.
[600ms]
[calm] Point it at a SharePoint site, your public web pages, an uploaded returns-policy PDF — and now it answers from real, cited sources instead of guessing. That's retrieval-augmented generation, or RAG.
[600ms]
[reassuring] You can switch on Web search for public sites too. Grounding is what makes an answer trustworthy — the agent can show exactly where each fact came from.

## Step 3 · Tools

[confident] The Tools tab is how the agent does things, not just talks about them.
[600ms]
[calm] A Dataverse connector to read customers and orders, an agent flow to open a ticket, a reusable prompt to summarize a case — even an MCP server that exposes your own APIs as tools.
[600ms]
[impressed] Add a tool, and mid-conversation the agent can look up an order, file that ticket, or call any API — it goes from talking about things to actually getting things done.

## Step 4 · Agents

[confident] The Agents tab lets your agent delegate to specialists.
[600ms]
[calm] Contoso Support stays the router, and hands off to child agents — a Returns agent for refunds, a Finance agent for billing, a Store agent for hours and locations.
[600ms]
[impressed] That's the multi-agent pattern: one agent stays focused and routes the rest, each an expert in its own lane, all coordinated by generative orchestration.

## Step 5 · Topics

[confident] The Topics tab is for the times you DO want a scripted path.
[600ms]
[calm] Custom topics are authored flows triggered by phrases — "return an item", "where's my order" — with nodes, slot-filling, and variables. System topics cover the built-ins: greeting, fallback, escalate.
[600ms]
[intrigued] But here's the shift: with orchestration, topics become reusable building blocks the planner can pick from — not one rigid decision tree.

## Step 6 · Measure

[confident] These three tabs form one improvement loop: Activity, Evaluation, and Monitor.
[600ms]
[calm] Activity shows usage and engagement, Evaluation checks the quality of the answers, and Monitor tracks the agent's health and its Copilot Credit usage.
[600ms]
[encouraging] Ship it, watch the data, then tune the instructions, the knowledge, and the tools — and the agent quietly gets better over time.

## Step 7 · Channels

[confident] Finally, the Channels tab — publish once, and meet people where they already are.
[600ms]
[calm] Microsoft Teams and Microsoft 365 Copilot, a website, SharePoint, a mobile app, and any Azure Bot Service channel.
[600ms]
[impressed] The same agent, many front doors — you build it once and deploy it to every channel your users prefer.

## Step 8 · Recap

[confident] So there's the whole agent, in one map.
[600ms]
[calm] Overview sets the brain — model, instructions, orchestration. Knowledge, Tools, Agents, and Topics give it what to use. And measure, then Channels, take it live.
[600ms]
[encouraging] One low-code agent — grounded, tool-enabled, orchestrated rather than scripted, and published everywhere. Want to build one yourself? The free "Agents in a Day" path on Microsoft Learn is a great next step.
