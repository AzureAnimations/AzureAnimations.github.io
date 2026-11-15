# Narrator Script — Journey 04 · What Makes an Agent (Contoso Shopping Assistant)

**Source animation:** `static/v2/AI/Foundry/WhatMakesAnAgent.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · The Problem

[curious] Meet Contoso's AI Shopping Assistant — right now, it's just a plain model deployment.
[600ms]
[amused] The problem? With no instructions, it'll happily answer travel, finance, or health questions —
[600ms]
[laughter] anything except shopping.
[600ms]
[serious] For a store assistant, that's a real problem.
[600ms]
[determined] So let's turn it into a proper agent.

## Step 2 · What Is an Agent?

[confident] A bare model is stateless and answers anything.
[600ms]
[determined] A Foundry Agent wraps that same model with four ingredients — Instructions, Knowledge, Tools, and Memory.
[600ms]
[proud] Together, they make it Contoso's focused shopping expert.

## Step 3 · Instructions

[confident] First up: Instructions — the durable system prompt that's always in effect.
[600ms]
[calm] This is Contoso's shopping brief. It tells the assistant to act as a product expert and to stay strictly on topic.
[600ms]
[determined] And crucially, it tells the model to politely decline anything off-topic — travel, finance, or health.

## Step 4 · Knowledge

[intrigued] Next: Knowledge.
[600ms]
[confident] On its own, a model can only guess from stale training data — so we ground it in Contoso's own product catalog, live order history, and returns policy.
[600ms]
[reassuring] Now every answer comes from real, current company data — the right price, the right stock, the actual policy.
[600ms]
[serious] That's the difference between an assistant you can trust and one that quietly makes things up.

## Step 5 · Tools

[confident] Then come Tools — the power to actually do things, not just talk.
[600ms]
[calm] A tool is just a function you register with the agent — real code, an API, or an app, wired in and ready to run.
[600ms]
[proud] So the agent doesn't only talk: it reads the shopper's intent, picks the right tool, and runs real software on their behalf — placing an order, sending an email, updating a live system.
[600ms]
[impressed] Take the first scenario: a shopper asks, "where's my order?"
[600ms]
[confident] The agent reads that intent and reaches for the order-status tool — passing along the order number the shopper mentioned.
[600ms]
[determined] Behind the scenes, that tool calls Contoso's live order system, gets back the real shipping status, and hands it to the model.
[600ms]
[reassuring] The model turns that raw data into a warm, plain-English reply — no guessing, straight from the source.
[600ms]
[proud] And here's the answer the shopper sees: the order has shipped, and it arrives June third.
[600ms]
[encouraging] Your turn — click through Scenario 2 and Scenario 3 to see how the same agent handles a return and a proactive offer.

## Step 5s2 · Tools — Scenario 2

[confident] Scenario 2 — a return. The shopper says, "I'd like to return my recent order."
[500ms]
[impressed] This time one request needs two actions, so the agent chains two tools together — first it starts the return to open the case, then it feeds that result straight into an email.
[500ms]
[determined] Notice the order: the second tool only runs once the first succeeds, and the fresh return number flows right into the message.
[500ms]
[reassuring] Moments later the return is opened, a confirmation email with the shipping label goes out, and the assistant tells the shopper everything is on the way — one message, two real actions taken.

## Step 5s3 · Tools — Scenario 3

[intrigued] Scenario 3 — a proactive offer. No question this time; the shopper is just browsing winter jackets.
[500ms]
[confident] Here the agent acts on context alone — nobody asked it anything. Reading that browsing signal, it decides three tools are worth running.
[500ms]
[impressed] So it fires them together — recommend products to find a match, check inventory to be sure it's in stock, and a loyalty lookup to see what the shopper's points are worth.
[500ms]
[proud] It lands on the Aurora Parka, confirms it's available, and sees the shopper's points can knock twenty-four dollars off — then offers it, perfectly timed and completely unprompted.

## Step 6 · Memory

[curious] But a single model call forgets everything the moment it ends.
[600ms]
[confident] So we add Memory — a thread that stores the whole conversation, message by message.
[600ms]
[reassuring] Now the assistant remembers the shopper's size, their cart, and earlier questions, so the chat feels continuous.

## Step 7 · Build It

[encouraging] Now bring it all together in Foundry.
[600ms]
[confident] Wrap that same model deployment as an Agent — add instructions, knowledge, tools, and memory, then run the loop.
[600ms]
[proud] Publish it to contoso.com, finally on-brand, on-topic, and getting real work done.
