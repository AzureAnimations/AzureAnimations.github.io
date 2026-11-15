# Narrator Script — GitHub · How a Copilot Suggestion Is Made

**Source animation:** [HowCopilotWorks.html](../../journeys/GitHub/HowCopilotWorks.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow>
- <https://learn.microsoft.com/agent-framework/journey/llm-fundamentals>

---

## Step 1 · You type, a suggestion appears

[calm] Maya, a Contoso developer, types a comment, and grey text appears.
[600ms]
[curious] But in between, seven stages run, and you never see them.
[600ms]
[confident] This lesson opens each one, so you know what happens to your code.

## Step 2 · Gather the context

[calm] Before anything is sent, Copilot collects clues around your cursor: the code, the file, nearby tabs, and the project.
[600ms]
[confident] In Chat, it also uses your selection, files you mention with the at sign, and the chat history.
[600ms]
[encouraging] So open the files that matter and close the ones that don't.

## Step 3 · Build the prompt

[curious] The clues are packed into one prompt, along with rules and your code.
[600ms]
[confident] The code before the cursor and the code after it frame a gap, and the model fills that gap. This is called fill in the middle.
[600ms]
[reflective] The real prompt format is internal, so this picture shows the idea.

## Step 4 · Pass the proxy

[calm] The finished prompt leaves your editor over HTTPS.
[600ms]
[confident] It reaches a proxy server in the GitHub-owned Microsoft Azure tenant, before any model sees it.
[600ms]
[reassuring] That proxy is the first checkpoint, sitting between your editor and the model.

## Step 5 · Filter on the way in

[serious] The proxy blocks attempts to manipulate the system, so a crafted prompt can't change how Copilot behaves.
[600ms]
[confident] Content filters keep out offensive text and personal data, before the prompt goes any further.
[600ms]
[reassuring] Only a clean prompt reaches the model.

## Step 6 · The model writes

[calm] The model writes the suggestion one token at a time. A token is a small piece of text.
[600ms]
[curious] Each time, it predicts what is likely to come next.
[600ms]
[serious] Likely isn't the same as correct, so review and test every suggestion.

## Step 7 · Post-process on the way out

[calm] Every suggestion is checked before you see it.
[600ms]
[confident] The checks look for harmful content, bugs and security flaws, and, if that setting is on, matches with public code.
[600ms]
[reassuring] If a check fails, the suggestion is cut short or dropped.

## Step 8 · Back to the editor

[calm] Only suggestions that pass every check reach your editor, shown as grey text.
[600ms]
[confident] You can accept all or part of it, dismiss it, or just keep typing to ignore it.
[600ms]
[reassuring] Nothing changes in your file until you choose.

## Step 9 · Chat is different

[curious] In Chat, every new prompt carries the earlier turns too.
[600ms]
[concerned] So an old, off-topic turn can pull the answer the wrong way.
[600ms]
[encouraging] When you begin a new task, start a new conversation.

## Step 10 · Where your data goes

[calm] Your prompt and the suggestion travel the same path on every plan.
[600ms]
[confident] Whether that data can train models depends on the plan. On Business and Enterprise, it isn't used for training.
[600ms]
[serious] On Free, Pro and Pro Plus it's used unless you opt out, so check your Copilot settings for the current wording.

## Step 11 · Recap: the lifecycle in one picture

[calm] Here's one loop. The editor gathers context and builds a prompt, and the proxy and filters guard both doors.
[600ms]
[confident] The model writes, and then you decide. Chat follows the same loop, with the conversation history added to every prompt.
[600ms]
[proud] Now you know the moment between typing and the grey text.
