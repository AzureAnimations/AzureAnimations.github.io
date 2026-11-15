# Narrator Script — Foundry · Build and test your first agent in the Foundry portal

**Source animation:** [BuildYourFirstAgent.html](../../../journeys/AI/Foundry/BuildYourFirstAgent.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/tools/file-search>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>

---

## Step 1 · From a model to an agent

[calm] Contoso Outfitters has a deployed model, and it can answer almost anything. But it knows nothing about Contoso.
[600ms]
[curious] An agent closes that gap by wrapping the model with instructions, knowledge and tools.
[600ms]
[confident] This is a recap of the earlier lesson on what makes an agent, and the same returns helper follows us through every step.

## Step 2 · Create the agent: name and model

[curious] In the Foundry portal, open Agents and select Create agent. Give it a name, then choose the deployed model it will use.
[600ms]
[serious] Pick the name with care, because once you've named an agent you can't change it.
[600ms]
[calm] In code, that same name is how you'll refer to the agent later.

## Step 3 · Write the instructions

[calm] Instructions give the agent its role and its limits. Here you can switch the scope rule on and off.
[600ms]
[curious] Then ask an off-topic question and compare. With the rule on, the agent politely stays on its job.
[600ms]
[reassuring] A clear limit in the instructions is the simplest way to keep an agent focused.

## Step 4 · Add knowledge

[curious] Knowledge grounds the answers in your own files. Contoso uploads its policy documents, and they get indexed.
[600ms]
[confident] Before the agent answers, it looks up the relevant passage and uses it in the reply.
[600ms]
[calm] File search is one way to add knowledge, and it needs the files uploaded and indexed in a vector store first.

## Step 5 · Add a tool

[calm] Tools let the agent look things up or take actions. Pick one and finish its setup.
[600ms]
[serious] The tool must be configured successfully before you can save an agent that has it attached.
[600ms]
[confident] Then tell the agent in its instructions when to use the tool, so it reaches for it at the right moment.

## Step 6 · Test in the playground: read the tool call

[curious] Now test in the playground. Ask a question that needs the tool, then open the tool call and read it.
[600ms]
[intrigued] You can see which tool ran, what was sent to it, and what came back.
[600ms]
[confident] Tracing records those inputs and outputs, so you can confirm the agent called the tool you expected.

## Step 7 · Save a version

[serious] Everything so far is only a draft. If you leave the portal, you lose unsaved changes.
[600ms]
[confident] Saving creates a new version that never changes, so you can compare versions and roll back when needed.
[600ms]
[reassuring] Save a version first if you want history, monitoring or full evaluations.

## Step 8 · Call the agent by name

[calm] A small client app doesn't need the portal. It signs in, connects to the project, and asks for the agent by name.
[600ms]
[curious] Sign in once with the Azure command line. The default credential then finds that sign-in for you.
[600ms]
[confident] The code uses the Azure AI Projects two point x package.

## Step 9 · Print the reply and follow the conversation

[curious] Create a conversation, send a message, and print the reply.
[600ms]
[impressed] Now send a second message in the same conversation. The agent remembers, because the conversation keeps the history across turns.
[600ms]
[reassuring] So the follow-up doesn't need to repeat the original question.

## Step 10 · Troubleshoot: wrong tool, empty answer, auth error

[serious] Most first-agent problems come down to one of three things: the wrong tool, an empty answer, or an auth error.
[600ms]
[confident] Check the tool setup, check the data, and check the sign-in. Traces show whether the model produced a tool call, and what the tool received and returned.
[600ms]
[proud] Work through those three and you can build, test and call your first agent with confidence.
