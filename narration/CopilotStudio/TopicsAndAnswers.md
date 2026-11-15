# Narrator Script — Copilot Studio · Copilot Studio — Topics & Answers

**Source animation:** [TopicsAndAnswers.html](../../journeys/CopilotStudio/TopicsAndAnswers.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/courses/ab-620t00>
- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · A topic is a path of decisions

[calm] A customer says, I want to return my headset. A topic turns that sentence into a path of nodes.
[600ms]
[curious] There are trigger, question, tool, generative answers and message nodes, and each one needs just one thing configured.
[600ms]
[confident] Contoso Support and its data are fictional. This page goes inside one topic to see what to set on each node.

## Step 2 · Variables: a named, typed box

[curious] When a Question node asks for the order number, it saves the answer in a variable. Think of it as a named, typed box.
[600ms]
[calm] Later nodes read it back, in a message, a condition or a tool input. The type comes from the first value you store, and then it's fixed.
[600ms]
[reassuring] You can also set a value yourself with a Set variable value node. And rename the default name to something meaningful.

## Step 3 · Scope: who can see the variable

[calm] A variable has a scope, which decides who can see it. There are four levels: topic, global, system and environment.
[600ms]
[confident] Topic is the default, visible only to the topic that made it. Global lasts for the session, works across topics, and gets a Global prefix.
[600ms]
[serious] System and environment variables are built in and read-only here. Choose the narrowest scope that works.

## Step 4 · Pass values on, never ask twice

[curious] Nobody likes being asked the same question twice. So when you redirect to another topic, hand over what you already know.
[600ms]
[confident] On the destination topic, set the variable to receive values from other topics. Then on the Redirect node, choose Add input.
[600ms]
[reassuring] Tool and flow inputs work the same way, as long as the variable type matches.

## Step 5 · Flows and tools: do the work in a topic

[calm] Real work happens in tools and agent flows. In a topic you choose Add node, then Add a tool.
[600ms]
[confident] It becomes an Action node that runs exactly where you place it. A topic-level tool is available only there, while an agent-level tool lets the orchestrator decide when to call it.
[600ms]
[serious] To be a tool, a flow needs the agent trigger, a respond action, publishing, and an answer within one hundred seconds.

## Step 6 · Generative answers: grounded in your sources

[curious] The Generative answers node searches the knowledge sources you choose, and writes an answer with citations.
[600ms]
[confident] Sources set on the node override the agent-level ones. Turn on search only selected sources and it ignores everything else.
[600ms]
[calm] It runs when the conversation reaches it, and also as a fallback when no topic matches. Content moderation defaults to High.

## Step 7 · Custom prompts: your instructions, your output

[curious] Sometimes you want full control of the wording. A custom prompt lets you write the instructions yourself.
[600ms]
[confident] Add a tool, choose New prompt, and set the model, temperature, inputs and output format. Text comes back in a variable.
[600ms]
[encouraging] Test it with sample data. Be specific, keep it brief, and give the prompt a way out when it can't answer.

## Step 8 · Custom knowledge: bring your own data

[calm] What if your content isn't in a supported knowledge source? Then you bring it yourself.
[600ms]
[confident] Fetch it with a flow or an HTTP request, shape it into a table with Content, and optionally ContentLocation and Title for citations. Then hand it to a generative answers node.
[600ms]
[serious] Keep one limit in mind: only the first three records are used to generate the answer.

## Step 9 · HTTP request: call any API from a topic

[curious] To call a REST API directly from a topic, add the Send HTTP request node from the Advanced menu.
[600ms]
[confident] You set the URL, method, headers and body. Paste in sample JSON and the response becomes a typed variable.
[600ms]
[reassuring] By default an error stops the topic and triggers the On Error topic. Choose Continue on error to keep the status code and error body instead.

## Step 10 · Response formatting: shape how it reads

[calm] The Message node is a small editor. You can format text with bold, italic, and bulleted or numbered lists.
[600ms]
[curious] Insert variables, add message variations so the agent picks one at random, and include images, quick replies and cards.
[600ms]
[confident] Quick replies aren't supported on every channel. On voice channels, override the text with a speech message and SSML.

## Step 11 · Adaptive cards: input and output in one card

[curious] An adaptive card is JSON that the channel renders. Put one in a Message node and it simply displays information.
[600ms]
[confident] Use Ask with Adaptive Card to collect input. It needs a submit button, and it creates output variables from the card's inputs.
[600ms]
[serious] Copilot Studio supports schema one point six and earlier, but Teams stops at one point five. Pick a version every channel supports.

## Step 12 · Configure topics: all in one

[calm] Look at the whole path now. Nine skills from the exam list, all in one conversation, and each one lives on a node.
[600ms]
[confident] Configure topics sits in the Plan and configure agent solutions domain of exam A B six twenty, which is thirty to thirty-five percent.
[600ms]
[determined] Verify the current skills list on the official study guide, then keep practicing with the official training.
