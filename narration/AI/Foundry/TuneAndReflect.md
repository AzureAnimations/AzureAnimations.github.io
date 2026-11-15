# Narrator Script — Foundry · Tune the Model: Parameters, Reflection and Hybrid Flows

**Source animation:** [TuneAndReflect.html](../../../journeys/AI/Foundry/TuneAndReflect.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>

---

## Step 1 · Same prompt, different run: what a parameter changes

[curious] A model picks each next word from a spread of likely choices. So one prompt can give different runs.
[600ms]
[calm] Parameters are the settings that shape that choice. The five names at the bottom are real settings you send with a request.
[600ms]
[reassuring] These Contoso Outfitters taglines are only illustrations, since a real model's output differs from run to run.

## Step 2 · Temperature and top_p: spread versus focus

[calm] Temperature reshapes the odds of each next word. Low is focused, high is more varied.
[600ms]
[curious] Top P trims the unlikely words away.
[600ms]
[serious] Change one, not both. The percentages are illustrative, worked out from fixed scores, not measured from a real model.

## Step 3 · Max tokens and stop sequences: length and cost

[calm] Max tokens caps how much the model may write. A stop sequence tells it where to stop.
[600ms]
[confident] Together they control length, and the cost that comes with it.
[600ms]
[concerned] But a cap that's too small cuts the answer off. Each chip here stands for one token, though real tokens are often pieces of words.

## Step 4 · Reasoning models: effort instead of temperature

[curious] Most reasoning models don't take temperature or Top P. Instead you set how hard they think, with reasoning effort.
[600ms]
[serious] The thinking counts as output tokens. For reasoning models the cap covers both reasoning and visible output.
[600ms]
[calm] Supported effort values vary by model, and these bars are illustrative.

## Step 5 · Think step by step: when it helps, when it does not

[calm] Asking a standard model to show its steps makes the answer easier to check.
[600ms]
[curious] A reasoning model already thinks first, so give it the goal, not the steps.
[600ms]
[confident] To see a reasoning model's thinking, use the reasoning summary parameter. Other ways to extract it aren't supported.

## Step 6 · Self-critique: draft, critique, revise

[curious] A maker drafts, a checker tests the draft against clear criteria, and the maker revises.
[600ms]
[confident] The loop stops when the checker approves or a cap is reached. It's also called a reflection or critic loop.
[600ms]
[serious] It needs clear acceptance criteria, an iteration cap, and a fallback such as a human reviewer.

## Step 7 · Grade the reasoning: chain-of-thought evaluators

[curious] An L L M judge can grade the steps too. It reads the reasoning and returns a score, a pass or fail label, and a reason.
[600ms]
[calm] You can read that reason and act on it. This result card illustrates the fields Foundry evaluators return.
[600ms]
[serious] Task Adherence is in preview. A judge is itself a model call, so each check costs inference.

## Step 8 · Try it: change one parameter, watch the answer

[excited] Now try it. Flip one setting at a time and see what changes: the wording, the length, and where the answer ends.
[600ms]
[amused] This is a scripted demo, not a live model, so the answers are written in advance.
[600ms]
[encouraging] Try each setting alone, then two together.

## Step 9 · Hybrid flow: rules first, model for the gray area

[calm] Clear cases follow fixed rules in code, which is fast, cheap and predictable.
[600ms]
[curious] Only the gray area goes to the model, and a person can confirm the result. For each step you choose who decides: the model, regular code, or a human.
[600ms]
[confident] If the steps are clear and follow strict rules, regular code is faster, cheaper and more reliable.

## Step 10 · Route by task: small first, big on escalation

[calm] Not every request needs the biggest model. A router sends easy work to a small model and hard work to a larger one.
[600ms]
[curious] Model router picks a model for each request from its complexity, reasoning needs and task type.
[600ms]
[confident] The escalate arrow is your own routing logic, not a product setting. Use it when the small model is unsure.

## Step 11 · Tuning at a glance

[calm] Three habits: tune the settings, check the output, and combine models and rules.
[600ms]
[reflective] That's what this part of A I one oh three asks you to do. Every point maps to a step you just watched.
[600ms]
[proud] The objective wording comes from the study guide, so check it for the current version.
