# Narrator Script — GitHub · Copilot in the Command Line

**Source animation:** [CopilotInTheCli.html](../../journeys/GitHub/CopilotInTheCli.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Why the terminal needs a partner

[calm] Ravi forgets the exact git command. So he leaves the terminal to look it up, and loses his place.
[600ms]
[curious] The cost is real for most developers: tabs, searching, and lost focus.
[600ms]
[optimistic] The idea is simple. Ask right where you work.

## Step 2 · What Copilot CLI is

[calm] GitHub Copilot CLI brings Copilot into your terminal.
[600ms]
[confident] You describe what you want in plain words, and Copilot answers, writes code, and works with GitHub dot com.
[600ms]
[reflective] The reply on screen is an illustration. Real output varies.

## Step 3 · Install it

[calm] First, you need a Copilot subscription, and your organization must not have turned the CLI off.
[600ms]
[confident] Then install it with WinGet, Homebrew, or npm.
[600ms]
[reassuring] There's also an install script for macOS and Linux.

## Step 4 · Sign in and start a session

[calm] Run copilot in a folder you trust.
[600ms]
[curious] Sign in with the slash login command. On a desktop, the browser flow is the default, and the device code flow shows a one-time code to enter in your browser.
[600ms]
[encouraging] Then type your first prompt.

## Step 5 · Ask, explain, suggest

[curious] Describe the goal in plain words. Copilot suggests a command and explains each part.
[600ms]
[confident] That way you understand it before you approve it.
[600ms]
[serious] The reply is a sample and wording varies, so always read the real command first.

## Step 6 · Interactive mode

[calm] Enter copilot to start a conversation. Each prompt builds on the last, so a phrase like that case still makes sense.
[600ms]
[confident] Copilot CLI manages the context for you and compresses the history as it fills. The slash context command shows the usage.
[600ms]
[intrigued] Press Shift and Tab to switch plan mode.

## Step 7 · Slash commands and options

[calm] Slash commands manage the session, such as login, model, and context.
[600ms]
[confident] Inside a prompt, the at sign adds a file, and an exclamation mark runs a shell command.
[600ms]
[encouraging] For a one-shot answer, run copilot with the dash p option and a prompt. The full list is longer, so learn these few first.

## Step 8 · Generate a script

[curious] Describe the script you want. Copilot writes the file.
[600ms]
[confident] You review it as a diff before anything runs.
[600ms]
[serious] Always read generated code first, and run it only after you approve.

## Step 9 · Manage files

[calm] Copilot can create a new file, rename one, and edit the lines in place.
[600ms]
[confident] Tools that change or run files can ask for your approval first.
[600ms]
[reassuring] Files outside your current folder need extra approval. The slash add dir command adds a trusted folder.

## Step 10 · Stay in control

[calm] Copilot can ask before it uses a tool. Read the command, then choose.
[600ms]
[confident] Allow it once, allow it for the session, or say no and tell Copilot what to do instead.
[600ms]
[concerned] Be careful with for the session. Approving the remove command lets Copilot delete any file in that folder, or below it, without asking again.

## Step 11 · Organization policy

[calm] Admins can turn Copilot CLI on or off with a policy, under Copilot policies in organization settings.
[600ms]
[serious] When it's off, people in that organization can't use it.
[600ms]
[reflective] An enterprise policy that has been set wins, so an organization can't override it.

## Step 12 · Recap: one Copilot, three places

[calm] One Copilot works in your editor, your terminal, and on GitHub dot com.
[600ms]
[confident] Use the editor for writing and editing code, the CLI for commands, scripts and files, and GitHub dot com for repositories, issues and pull requests.
[600ms]
[proud] Pick the place that fits the work. What you can use depends on your plan, your client, and your organization's policies.
