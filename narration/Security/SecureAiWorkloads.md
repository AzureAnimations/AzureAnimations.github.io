# Narrator Script — Security · Secure AI workloads in Azure: gateway, guardrails and Defender for AI

**Source animation:** [SecureAiWorkloads.html](../../journeys/Security/SecureAiWorkloads.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/genai-gateway-capabilities>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-threat-protection>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding>

---

## Step 1 · A Foundry app goes live

[calm] Contoso Assist is open to callers, and real traffic is about to arrive. Security engineer Priya wants three answers first.
[600ms]
[curious] Who is allowed to call it, what can go wrong inside a conversation, and how will we know if someone attacks it?
[600ms]
[confident] This lesson covers the AI part of S C five hundred. Contoso, Priya and the app are all fictional.

## Step 2 · Three layers around one app

[calm] The answer is three layers around one app. A gateway sits in front, guardrails work inside, and Defender watches around.
[600ms]
[confident] Each layer answers one question, and each is a different Azure feature, so you set them up in different places.
[600ms]
[curious] The gateway is an API Management capability, guardrails belong to Microsoft Foundry, and Defender for AI services is a plan in Defender for Cloud.

## Step 3 · AI gateway: one front door

[calm] First, the gate. API Management can sit in front of your models, agents and tools, so every AI call goes through one place you control.
[600ms]
[confident] The AI gateway is a set of API Management capabilities, not a separate product.
[600ms]
[curious] In Foundry, it's a preview feature you turn on under Manage. Check Microsoft Learn for the tiers that are supported today.

## Step 4 · Gateway policies on every call

[calm] Policies run in order on every request. First they check who is calling, then they limit tokens, then they record what happened.
[600ms]
[confident] The gateway can reach the model with a managed identity, so no API key is needed in the app.
[600ms]
[reassuring] Token metrics go to monitoring, and prompts and completions can be logged too, so you can see usage and spot abuse.

## Step 5 · Content filters and guardrails

[calm] Next, the guard. A guardrail is a named set of controls inside Foundry. Each control picks a risk, where to check it, and what to do on a match.
[600ms]
[confident] For hate, sexual, violence and self-harm, the blocking level decides which severities get blocked. Low blocks only high, and high blocks low, medium and high.
[600ms]
[serious] Classifiers can be wrong, so test them with your own content.

## Step 6 · Agent guardrails: four checkpoints

[calm] Agents need more than a prompt check. A guardrail can inspect the user input, the tool call, the tool response and the final output.
[600ms]
[serious] This is in preview. The tool checkpoints only work with tools that support moderation, so other tools are not scanned.
[600ms]
[confident] Guardrails apply to agents built in Foundry Agent Service, so confirm your agent type before you rely on them.

## Step 7 · Try it: guardrail on, prompt replayed

[curious] Now try it. Send the same risky prompt twice, once with the guardrail off and once with it on.
[600ms]
[impressed] Flip the switch and watch what changes. When a control fires, the chat shows which risk was detected and at which checkpoint.
[600ms]
[reassuring] This is a mock. In Foundry you create a guardrail, assign it, and test it in the playground with a non-production model or agent.

## Step 8 · Defender for AI services

[calm] Now the watcher. Turn on one plan, and Defender for Cloud watches prompts and replies for attacks, then raises alerts.
[600ms]
[confident] It works with Prompt Shields and Microsoft threat intelligence, and you enable it in Defender plans with the Owner or Contributor role.
[600ms]
[serious] It scans text only. And if suspicious prompt evidence is off, prompt content is masked in the alert.

## Step 9 · An AI alert, end to end

[serious] Here a jailbreak attempt is stopped, and an alert is raised. Priya opens it and investigates with the evidence.
[600ms]
[curious] The alert name, severity and tactics come from the Defender for Cloud alerts for AI services.
[600ms]
[concerned] If you see a detected variant, Prompt Shields spotted the attempt but didn't block it. That's your cue to review the guardrail setting.

## Step 10 · Data and AI security dashboard

[calm] One Defender for Cloud view brings your data and AI resources together, shows how well they are protected, and tells you what to fix first.
[600ms]
[confident] It's enabled per subscription and reflects the plans you turned on, so full access needs several of them, plus the Security explorer role.
[600ms]
[reflective] The numbers on screen are fictional.

## Step 11 · Which control answers which risk?

[curious] Six risks, three layers. Watch each risk land on the control that answers it best.
[600ms]
[confident] Caller identity and token budgets belong to the gateway. Harmful prompts and risky tool calls belong to guardrails. Live attacks and posture belong to Defender.
[600ms]
[reflective] In real designs the layers overlap, so each card shows the closest fit, not the only one.

## Step 12 · Recap: gate it, guard it, watch it

[calm] Gate it, guard it, watch it. The gateway handles callers and budgets, guardrails handle prompts and tools, and Defender handles alerts and posture.
[600ms]
[confident] That answers Priya's three questions, and it maps to securing AI workloads in the S C five hundred skills.
[600ms]
[proud] Read the current study guide, because the skills list changes over time.
