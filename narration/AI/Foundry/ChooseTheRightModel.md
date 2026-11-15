# Narrator Script — Foundry · Choose the Right Model for the Job

**Source animation:** [ChooseTheRightModel.html](../../../journeys/AI/Foundry/ChooseTheRightModel.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>

---

## Step 1 · One catalog, many models

[calm] Contoso Outfitters needs a model for its help bot. The Foundry catalog lists thousands, so start from the task and narrow down.
[600ms]
[curious] Models come in two groups. Some are sold by Azure, with Microsoft support and enterprise agreements. Others come from partners and the community, supported by their providers.
[600ms]
[serious] Either way, choosing an appropriate model and reading its model card is your job.

## Step 2 · Large, small and reasoning models

[curious] Size, cost and wait move together. A small model is quick and cheap, and suits narrow, well-defined tasks.
[600ms]
[calm] A large model handles a wider range, and a reasoning model thinks before it answers.
[600ms]
[concerned] That thinking creates reasoning tokens you never see but still pay for as output, and higher effort means a longer wait. These meters are relative, not measured.

## Step 3 · Multimodal and code models

[calm] Check what goes in and what comes out. If the input is photos or audio, you need a multimodal model.
[600ms]
[confident] Writing and fixing code is a job for a code model, tuned for coding tools. Some of these are available only through the Responses API.
[600ms]
[reassuring] Always read the input and output types on the model card.

## Step 4 · Foundry Tool or a model?

[curious] Some jobs already have a prebuilt service. For scanned invoices, a Foundry Tool gives you typed fields straight away.
[600ms]
[calm] A generative model could read an invoice too, but then you build everything around it.
[600ms]
[confident] Foundry Tools are pretrained, with no custom training. Microsoft Learn says to consider them before using a language model to stand in for a specialized service.

## Step 5 · Leaderboards: read them carefully

[calm] A leaderboard ranks models on public tests for quality, safety, performance and cost. That's a good way to build a shortlist.
[600ms]
[serious] But it isn't a verdict on your workload.
[600ms]
[confident] Shortlist from the leaderboard, then evaluate on your own data. The screen here is an illustration with made-up models.

## Step 6 · Model router and fallback

[curious] Easy and hard prompts don't need the same model. Model router picks one for each request, so you deploy just one thing.
[600ms]
[calm] You choose a routing mode, quality, balanced or cost, and the subset of models it may use.
[600ms]
[reassuring] If a model has a transient issue, the router fails over automatically. Pick at least two models to get that fallback, and compare against your current baseline.

## Step 7 · Match the task

[excited] Now it's your turn. Pick a Contoso job on the left.
[600ms]
[curious] The panel shows a good first choice, and the catch to watch for.
[600ms]
[reassuring] This is a simplified guide, not a rule book. Your own tests on your own data make the final call.

## Step 8 · Deployment option for the choice

[calm] Once the model is chosen, pick how to run it. Each option trades price, location and predictability.
[600ms]
[confident] Global Standard is the default starting point. Data Zone types keep processing in the US, EU or APAC zone, provisioned types reserve throughput, and batch is for asynchronous jobs.
[600ms]
[serious] Open models on managed compute are billed by virtual machine hours, and not every model supports every deployment type.

## Step 9 · Choosing at a glance

[calm] Pick the kind of model for the job, check the evidence, then choose how to run it.
[600ms]
[reflective] Those three moves cover the model selection skills in the A I one oh three study guide on Microsoft Learn.
[600ms]
[proud] Check the guide for its current wording, and you'll know how to choose with confidence.
