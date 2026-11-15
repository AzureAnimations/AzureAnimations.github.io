# Narrator Script — Foundry · Deploy a model and chat with it in Foundry

**Source animation:** [DeployAndChatInFoundry.html](../../../journeys/AI/Foundry/DeployAndChatInFoundry.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/concepts/concept-playgrounds>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/deploy-foundry-models>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>

---

## Step 1 · Contoso needs a model

[calm] Mia is building a chat helper for Contoso Outdoors support. The Foundry model catalog holds many models.
[600ms]
[curious] It includes reasoning, multimodal and small language models, among others. Which one fits this job?
[600ms]
[encouraging] The next steps show how to choose, deploy and test it.

## Step 2 · Browse the catalog

[curious] Match the model's capability to the scenario. Pick a need, and you'll see the model type and where to look in the catalog.
[600ms]
[calm] The catalog filters by collection, by supported features such as reasoning and tool calling, and by inference task.
[600ms]
[reassuring] Whatever you shortlist, read the model card before you choose.

## Step 3 · Compare on the leaderboard

[calm] Model leaderboards rank models on quality, cost and throughput. This feature is in preview.
[600ms]
[curious] No model wins every row, so you choose the trade-off. Higher quality index is better, and cost is an estimate that assumes three input tokens for every output token.
[600ms]
[reassuring] In the catalog, select View leaderboard or Compare models. The numbers here are made up.

## Step 4 · Deploy it: name and type

[confident] Select Deploy and name the deployment. Then choose a deployment type: where data is processed, and whether you pay per token or reserve capacity.
[600ms]
[calm] Start with Global Standard unless you need data residency, reserved throughput or batch. Not every model supports every type.
[600ms]
[serious] Remember the name you choose, because your code sends the deployment name in the model parameter.

## Step 5 · You land in the playground

[excited] When the deployment succeeds, Foundry opens the model playground.
[600ms]
[confident] You can chat, set up the model, compare models and view code, all without writing code.
[600ms]
[curious] The playground follows the model. An image model opens the images playground, and a video model opens the video playground.

## Step 6 · Set a system prompt and chat

[calm] The system prompt sets the role and the rules for every reply. The user prompt is what the customer asks.
[600ms]
[curious] Send one and read the answer.
[600ms]
[encouraging] The system prompt applies to every turn, while the user prompt is just this message. Change one at a time, so you can see what moved the answer.

## Step 7 · Tune the response

[curious] Temperature and Top P change how random the wording is. Lower temperature gives steadier answers, higher gives more varied ones.
[600ms]
[calm] Max output tokens caps how long the reply can be. Change one knob at a time, and adjust temperature or Top P, but not both.
[600ms]
[serious] Many reasoning models don't support temperature or Top P, so check the model card first.

## Step 8 · Watch tokens in and out

[calm] Text is split into tokens. One token is roughly four characters of typical English.
[600ms]
[confident] Tokens in are your system prompt, history and user message. Tokens out are the reply. Both fill the context window, and both drive cost on pay-per-token deployments.
[600ms]
[concerned] Reasoning tokens are billed as output too. The numbers here are only examples.

## Step 9 · Compare two models

[curious] Compare models sends the same prompt, system message and settings to each model at once.
[600ms]
[impressed] Now you can judge quality, speed and tokens side by side. You can compare up to three models.
[600ms]
[calm] Select Compare models in the upper-right corner of the playground. You can switch off sync from a model's Setup pane. The numbers here are made up.

## Step 10 · View code

[calm] The Code tab shows the same call as code. Your deployment name goes in the model parameter, so an app reaches exactly this deployment.
[600ms]
[curious] Pick a language tab, then use Open in VS Code for the Web to carry the sample and endpoint into an editor.
[600ms]
[serious] Keep keys out of source control.

## Step 11 · Clean up: delete the deployment

[calm] When you no longer need a deployment, open it and delete it.
[600ms]
[reassuring] Each deployment holds a share of your quota, so removing unused ones keeps things tidy. In the portal, find them under Build, then Models.
[600ms]
[proud] Look back at what you can now do: find a model, compare it, deploy it, chat with it and see the code.
