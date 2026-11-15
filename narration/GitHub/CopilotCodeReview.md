# Narrator Script — GitHub · Review with Copilot: Pull Request Summaries and Review Standards

**Source animation:** [CopilotCodeReview.html](../../journeys/GitHub/CopilotCodeReview.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · A Pull Request Nobody Wants to Read

[calm] At Contoso, Maya opens a pull request with forty changed files and an empty description.
[600ms]
[concerned] Ravi has to piece the story together from the code alone, guessing what changed and why.
[600ms]
[curious] A reviewer needs the story before the details. So let's let Copilot write the summary, and then review the code.

## Step 2 · Generate a Summary

[confident] In the description box, Maya opens the Copilot menu and chooses Summary.
[600ms]
[calm] Copilot ignores any text that's already in the box, so she starts with it empty.
[600ms]
[reassuring] Then she reads the draft, adds her own context, and only then posts it. The summary is a starting point, not the final word.

## Step 3 · Ask Copilot to Review

[calm] On the pull request, Maya opens Reviewers in the right sidebar and clicks Request next to Copilot.
[600ms]
[curious] It's the same gesture she'd use to ask a teammate. Copilot reads the pull request and leaves its comments.
[600ms]
[confident] After new commits land, she can use the re-request button beside Copilot to get a fresh pass.

## Step 4 · Read the Comments

[calm] Each comment sits on a specific line and carries a severity: High, Medium, or Low.
[600ms]
[confident] Where it can, Copilot adds a suggested change that you can commit, or add to a batch with others.
[600ms]
[serious] Notice the review type. By default it's a Comment review, not an approval and not a request for changes. You can reply and resolve, but Copilot doesn't read your replies.

## Step 5 · Suggestions Versus Your Judgment

[calm] Copilot suggests, and Maya decides, comment by comment.
[600ms]
[confident] She can commit a suggestion as is, change the code herself and then commit, or resolve the conversation when it simply doesn't apply.
[600ms]
[serious] Copilot can point at problems that don't exist, and a re-review may repeat a comment you already resolved. Every comment needs a person.

## Step 6 · Set the Review Standard

[curious] Repeating the same feedback by hand gets old. So the team writes its review rules into instruction files in the repository.
[600ms]
[confident] There's a repository-wide file, path-specific files that match certain folders, and an agents file at the root.
[600ms]
[reassuring] Copilot reads them from the branch under review, so you can test a rule change in the same pull request. Short, specific rules work best.

## Step 7 · See the Standard at Work

[curious] Here's the same pull request, reviewed before and after the instructions file. Flip the switch to compare.
[600ms]
[impressed] Before, the comments are general and could fit any code. After, they name the team's own rules.
[600ms]
[serious] One caution. Instructions guide Copilot, they don't guarantee anything, and it may skip a rule. Keep reading its comments.

## Step 8 · Automatic Review

[calm] Nobody should have to remember to ask. A repository ruleset can request Copilot on every pull request.
[600ms]
[confident] You find it under Settings, Rulesets, then a new branch ruleset, and select the option to automatically request Copilot code review.
[600ms]
[reassuring] Turn on review of new pushes, or Copilot reviews a pull request only once. Draft pull requests are optional. Without a ruleset, Copilot reviews only when asked.

## Step 9 · Organization Policy

[calm] If people get Copilot from an organization, the organization has to enable the Copilot code review policy first.
[600ms]
[confident] It lives in the organization's Copilot policy settings, and it applies to reviews on GitHub dot com and in GitHub Mobile.
[600ms]
[curious] Organization rulesets can also request automatic reviews for every repository whose name matches a pattern.

## Step 10 · What It Can Miss

[serious] Copilot leaves a Comment review, and by default it doesn't count as an approval.
[600ms]
[concerned] It can be wrong, miss real problems, or skip your instructions.
[600ms]
[determined] Copilot can leave approving reviews only if repository, organization, and enterprise settings allow it, and that's a deliberate choice. Copilot supplements human review. A person still signs off.

## Step 11 · Recap: A Review Loop with Copilot and a Person

[calm] Before review, a Copilot summary tells the story. During review, Copilot comments and you decide.
[600ms]
[confident] Around the review, standards in instruction files, a ruleset, and an organization policy keep the loop consistent.
[600ms]
[proud] A person still makes the call. For the G H three hundred exam, these are the code review topics under using GitHub Copilot features.
