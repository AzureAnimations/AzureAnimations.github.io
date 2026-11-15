# Narrator Script — GitHub · Copilot Privacy, Content Exclusions and Safeguards

**Source animation:** [CopilotPrivacyAndExclusions.html](../../journeys/GitHub/CopilotPrivacyAndExclusions.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-admin>

---

## Step 1 · Two Worries, One Tool

[calm] Contoso wants Copilot in every editor. But its repository holds a secrets file, and Ravi asks about licensed code.
[600ms]
[concerned] Those are two real worries: what Copilot may read, and what it may suggest.
[600ms]
[reassuring] Copilot has a setting for each. Content exclusions and the public code filter.

## Step 2 · What Copilot Sends and Keeps

[curious] Copilot sends your code and its context as a prompt, and gets a suggestion back.
[600ms]
[confident] Three settings decide what goes in, what comes out, and how data is used: exclusions, the public code filter, and data use.
[600ms]
[reflective] What is kept and used for training depends on your plan, so check the GitHub Copilot Trust Center.

## Step 3 · Content Exclusions: What They Are

[calm] A content exclusion tells Copilot to ignore the files or repositories that you choose.
[600ms]
[confident] So they can't shape what it suggests or says. There are no suggestions, no context, no answers and no review from excluded content.
[600ms]
[serious] Exclusion works with the Copilot Business and Copilot Enterprise plans.

## Step 4 · Write an Exclusion Rule

[curious] An admin lists paths in the repository settings, under Copilot, then Content exclusion.
[600ms]
[calm] Each line is one quoted path or pattern, and every file it matches is excluded. You can add comments with a hash sign.
[600ms]
[reassuring] Matching uses fnmatch patterns, and it isn't case sensitive.

## Step 5 · Who Can Set Exclusions

[calm] Rules can be set for a repository, an organization, or a whole enterprise. The level decides who is covered.
[600ms]
[confident] Repository admins cover that repository. Organization owners cover users given a seat by the organization. Enterprise owners cover every Copilot user in the enterprise.
[600ms]
[curious] Inherited rules appear in grey boxes you can't edit.

## Step 6 · What the Exclusion Does

[curious] Edit a normal file and a suggestion appears. Make the same edit in the excluded file and none does.
[600ms]
[confident] In Chat, an excluded file isn't listed as a reference, and so Chat can't use it.
[600ms]
[serious] The editor setting to switch Copilot off is personal. It isn't a rule.

## Step 7 · Matching Public Code

[calm] Copilot compares a suggestion and its surrounding code with public code on GitHub.
[600ms]
[confident] With the filter on, a matching suggestion isn't shown. With it off, the match is shown with its licence and a link.
[600ms]
[reassuring] If there's no match, the suggestion appears either way.

## Step 8 · Turn the Public Code Filter On

[curious] Who flips this setting depends on your plan. Try the three plan buttons and see who controls the filter.
[600ms]
[calm] On an individual plan, you choose Allow or Block yourself in Copilot settings.
[600ms]
[confident] With an enterprise or organization admin, they set it for everyone. If you have a seat from an organization, it's inherited and you can't change it.

## Step 9 · Who Owns the Output

[calm] GitHub doesn't own what Copilot outputs. You keep the ownership you already have.
[600ms]
[serious] You also stay responsible for what you build, and filters only reduce risk.
[600ms]
[reflective] This is a plain-language summary, not legal advice. Your own agreement decides anything beyond it.

## Step 10 · When It Does Not Work

[curious] Start from the symptom. No suggestion often means an excluded file, a language switched off, or a filter match.
[600ms]
[confident] If an excluded file is still used, think stale settings, the pattern, a symlink, or indirect context. Reload the window or reopen the app so the rules refresh.
[600ms]
[serious] And remember, exclusion is a guardrail, not a security boundary.

## Step 11 · Recap: Who Owns Which Setting

[calm] Admins write the exclusion rules and the public code policy.
[600ms]
[confident] Developers test the rules, set their own filter, and review what they ship.
[600ms]
[proud] That covers four skills in the G H three hundred study guide. Just remember the limit, exclusion is a guardrail, not a security boundary.
