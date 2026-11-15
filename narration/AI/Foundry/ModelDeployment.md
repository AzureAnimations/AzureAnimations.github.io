# Narrator Script — Journey 03 · Model Deployment vs Agent

**Source animation:** `static/v2/AI/Foundry/ModelDeployment.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`),
paralinguistics (e.g. `[laughter]`), and `[NNNms]` pause markers (e.g. `[600ms]`).
One block per animation step.

---

## Step 1 · Why an Agent?

[confident] Foundry gives you the world's most advanced models — but here's the catch.
[600ms]
[serious] A model, on its own, is just a predictor: it takes a prompt and guesses the next token.
[600ms]
[curious] It can't remember, plan, or act.
[600ms]
[determined] To do real work — to reason, use tools, and follow through — you need an agent.

## Step 2 · Deployment

[confident] Before you can call a model like GPT, you create a deployment.
[600ms]
[calm] You choose two things: where your data is processed — globally or in a specific region — and how throughput is handled, standard or provisioned.
[600ms]
[reassuring] Combine them, and you get your type — Global plus Standard makes a "Global Standard" deployment.

## Step 3 · Tokens

[intrigued] But before any model reads your text, there's one key idea: the token.
[600ms]
[confident] The model splits everything you send into tokens — small chunks of words, sometimes just a few characters each.
[600ms]
[serious] And tokens are the currency of language models: your price, your rate limits, and your context window are all measured in them.
[600ms]
[optimistic] So fewer tokens means cheaper, faster responses.

## Step 4 · Inference

[curious] So what actually happens when the model runs?
[600ms]
[confident] Deep in a data center, thousands of specialized chips take your tokens, turn them into vectors, and push them through layer after layer of math.
[600ms]
[serious] That process is called inference — and all those calculations lead to one thing: predicting the single most likely next word.
[600ms]
[reflective] It's not so different from how you'd finish a sentence from memory — except it's pure math, running billions of times a second.

## Step 5 · Chat Flow

[confident] Now follow a single message.
[600ms]
[calm] Your app breaks it into tokens and sends them to a Foundry endpoint; the model runs inference and streams the response tokens back.
[600ms]
[serious] That's the round trip — and you're billed for every token, both in and out.

## Step 6 · AI Agents

[confident] Calling a deployment directly is simple, and it works.
[600ms]
[hesitant] But real business applications need much more than raw answers.
[600ms]
[determined] They need instructions to stay on task, scoped knowledge to stay accurate, plus user context, chat history, summarization, and memory.
[600ms]
[confident] Wrap all of that around the model, and you've built an AI Agent.
[600ms]
[encouraging] And that's exactly what we do next.
