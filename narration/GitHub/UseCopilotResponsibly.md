# Narrator Script — GitHub · Use Copilot Responsibly: Risks, Validation and Safe Habits

**Source animation:** [UseCopilotResponsibly.html](../../journeys/GitHub/UseCopilotResponsibly.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/ai/playbook/technology-guidance/overreliance-on-ai/overreliance-on-ai>

---

## Step 1 · It Compiled, So It Shipped

[calm] Maya accepts a Copilot suggestion for a heat alert. The build is green and the tests pass.
[600ms]
[concerned] But the spec says alert at thirty-five degrees or above, and the suggestion checks for strictly greater than. One value is wrong, and nobody has looked.
[600ms]
[serious] Copilot can write code that looks valid but isn't correct. Green checks show it ran, not that it's right.

## Step 2 · How a Model Goes Wrong

[calm] A model predicts likely code. That's how it works, and it's also how it goes wrong.
[600ms]
[concerned] It can invent a method that doesn't exist, repeat an old pattern that's now out of date, or sound completely sure while it's wrong.
[600ms]
[serious] That's a hallucination: output that sounds plausible but is incorrect or made up. It's a key reason to review everything.

## Step 3 · Bias in Suggestions

[curious] Training code reflects the people and habits that wrote it, so a suggestion can quietly assume one kind of user.
[600ms]
[confident] Say who must be supported right in the prompt. Then test with varied names and inputs.
[600ms]
[reflective] And review who the code leaves out. Copilot can repeat biases and errors from its training data.

## Step 4 · Insecure Code

[calm] A suggestion can work and still be unsafe. Here, a user's input is glued straight into a database query.
[600ms]
[serious] That's SQL injection. The fix is a parameterized query, which keeps input as data and never as part of the command.
[600ms]
[confident] You catch this with review, tests, and code scanning, especially on security-sensitive work.

## Step 5 · Licence and Public Code

[calm] Copilot writes new code, but now and then a suggestion can match public code. The chance is low, yet real.
[600ms]
[confident] A setting decides whether you ever see it. Block hides a matching suggestion. Allow shows the license and a link.
[600ms]
[reassuring] Treat a match like any code you didn't write: test it, scan it, and check it for vulnerabilities. Organization seats inherit the organization's setting.

## Step 6 · Privacy of What You Paste

[calm] A prompt is your code plus context, sent to the Copilot service.
[600ms]
[serious] So keep keys, passwords, tokens, and customer data out of what you type or paste.
[600ms]
[reassuring] Use placeholders instead. Push protection blocks pushes that contain detected secrets, and content exclusions keep chosen files away from Copilot.

## Step 7 · Over-Reliance

[curious] If you accept every suggestion, your own skills go quiet, and you end up accepting what you can't check.
[600ms]
[confident] Stay in charge. Predict what the code should do first, then compare with Copilot.
[600ms]
[encouraging] You can even ask Copilot Chat to explain the code back to you. Copilot isn't designed to replace your expertise.

## Step 8 · Validate Every Output

[calm] Treat a suggestion like code from a new colleague.
[600ms]
[confident] Read it and ask, do I understand it, and is it what I asked for? Run it, test the edges, then scan it, before it merges.
[600ms]
[impressed] An edge-case test on that thirty-five degree boundary is exactly what would have caught Maya's bug.

## Step 9 · Mitigations: Harm and Control

[curious] Every harm in this lesson has a control. Pick a harm and see the matching control, and who acts.
[600ms]
[confident] There are six harms, one for each earlier step. The controls are habits, tests, scanning, and settings.
[600ms]
[reassuring] Admins set some of them, like the public code filter and content exclusions. Most are simply your habits.

## Step 10 · You Are the Author of Record

[calm] Copilot suggests code, text, and fixes. You review, test, decide, and answer for it.
[600ms]
[serious] Your name is on the change, so the responsibility is yours.
[600ms]
[confident] And a second person, like Ravi, still reads the pull request. That's two sets of eyes, not one.

## Step 11 · Recap: Responsible-Use Checklist

[calm] Six habits cover the risks in this lesson: review, test, scan, mind the license, protect your privacy, and stay in charge.
[600ms]
[confident] Use them every time, whichever Copilot feature produced the output.
[600ms]
[proud] This is the use GitHub Copilot responsibly objective in the G H three hundred study guide. The checklist is a plain-words summary, not an official list.
