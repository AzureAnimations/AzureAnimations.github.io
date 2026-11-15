# Narrator Script — Foundry · Prompt Engineering: Instructions a Model Follows

**Source animation:** [PromptEngineering.html](../../../journeys/AI/Foundry/PromptEngineering.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/advanced-prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/system-message>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/safety-system-message-templates>

---

## Step 1 · Same model, very different answers

[curious] A model simply continues from the words in front of it.
[600ms]
[calm] Contoso Outfitters has a help bot, and someone gives it a vague prompt.
[600ms]
[concerned] So it fills the gaps with guesses, and the same model gives very different answers.

## Step 2 · Two prompts, two authors

[calm] The developer writes the system prompt once, to set the rules.
[600ms]
[curious] The customer types a user prompt every turn, and the model reads both.
[600ms]
[confident] Chat models take a list of messages, each with a role. The system message comes first and carries the highest-priority instructions.

## Step 3 · What a good system message contains

[calm] Five small parts do most of the work: role and task, audience and tone, scope and boundaries, an output format, and safety rules.
[600ms]
[confident] Keep each part specific.
[600ms]
[serious] Make sure they never contradict each other, and include a fallback for when the bot is unsure.

## Step 4 · Show it, don’t just tell it

[curious] Zero-shot gives the model only the task. Few-shot adds a couple of example question and answer pairs.
[600ms]
[calm] The model copies the pattern in those examples, so the tone and shape of the reply become much more predictable.
[600ms]
[reassuring] Examples don't change the model. They only steer this one request.

## Step 5 · Give it the facts to use

[serious] Models guess when they lack facts.
[600ms]
[confident] So put the right policy in the prompt, and tell the model to answer only from it. That's grounding: the answer comes from your data, not the model's memory.
[600ms]
[calm] And say what to do when the sources don't contain the answer.

## Step 6 · Ask for the shape your app needs

[curious] Code can't parse a friendly paragraph. So ask for a fixed format, like JSON with named fields, and keep it small and stable.
[600ms]
[calm] A plain instruction asks politely.
[600ms]
[confident] For a firm guarantee, Foundry supports structured outputs. You supply a JSON Schema, and the reply follows it.

## Step 7 · Try it: switch the parts on and off

[excited] Now it's your turn. Same model, same question. Flip each part of the prompt on or off, and watch the answer change.
[600ms]
[curious] Which switch fixes which problem?
[600ms]
[reassuring] This is a simplified demo, not a live model, but you can try the real thing in the Foundry playground.

## Step 8 · Test it, then tune it

[calm] Change one thing, then run the same tests again.
[600ms]
[curious] Mix easy questions, edge cases, and attempts to break your rules. Treat a prompt like code, with a test set you re-run after every change.
[600ms]
[serious] Learn says these techniques aren't recommended for reasoning models, so check the guidance for your model.

## Step 9 · Untrusted text can give orders

[concerned] Emails, web pages and files are just more text to a model. Hidden instructions inside them can try to override yours.
[600ms]
[serious] That's prompt injection, and it's called indirect when the instructions hide in a document.
[600ms]
[confident] Defenses stack: label untrusted text as data, limit what the model may do, and add detection like Prompt Shields. No single one is perfect.

## Step 10 · A prompt is one layer, not the wall

[serious] A system message can steer the bot, but a determined user can still talk around it.
[600ms]
[calm] Real protection comes from layers working together.
[600ms]
[reassuring] That means model selection, grounding, content classifiers, and user experience mitigations, with the prompt as one layer among them.

## Step 11 · Prompting at a glance

[calm] Write clear instructions. Show examples. Supply the facts. Ask for the format your app needs.
[600ms]
[determined] Test relentlessly, and never rely on the prompt alone.
[600ms]
[optimistic] Next, see how instructions, knowledge and tools come together in an agent.
