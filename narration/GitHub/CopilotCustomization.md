# Narrator Script — GitHub · Teach Copilot Your Project: Instructions, Prompts and Spaces

**Source animation:** [CopilotCustomization.html](../../journeys/GitHub/CopilotCustomization.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Same Question, Different Answers

[curious] Maya and Ravi ask Copilot the same question, and get different answers, with different tools and styles.
[600ms]
[calm] Nothing tells Copilot how Contoso builds, tests and names things. The standards aren't written down where Copilot can read them.
[600ms]
[reflective] Shared instructions improve consistency, but they don't guarantee that every answer is the same.

## Step 2 · Repository Instructions

[calm] One Markdown file in the repository tells Copilot how Contoso builds, tests and names things.
[600ms]
[confident] You write natural-language rules, and it applies to every request made in that repository.
[600ms]
[encouraging] It's the simplest place to start.

## Step 3 · Path-Specific Instructions

[curious] A path-specific file carries an apply to pattern, so its rules reach only the files that match.
[600ms]
[calm] Separate several patterns with commas. If a repository-wide file also exists, both are used.
[600ms]
[reflective] Which Copilot features read these files depends on the client.

## Step 4 · Prompt Files

[calm] Save a task you repeat as a prompt file.
[600ms]
[confident] Instead of retyping it, run it from chat by typing a slash and its name.
[600ms]
[curious] Unlike instructions, which apply automatically, you choose when a prompt file runs.

## Step 5 · Copilot Spaces

[calm] A Space gathers the docs, code, issues and notes for one job, plus instructions on how to use them.
[600ms]
[confident] Sources can be files, repositories, pull requests, issues, uploads and notes, and GitHub sources update as they change.
[600ms]
[curious] Copilot answers from that context, in Copilot Chat on GitHub.

## Step 6 · Share a Space

[calm] Who can open the Space depends on who owns it.
[600ms]
[confident] Organization Spaces use roles: admin, editor, viewer, or no access. Personal Spaces can be private, shared with people, or open to anyone with the link.
[600ms]
[reassuring] Viewers only see sources they already have access to.

## Step 7 · Spark: A Prompt Becomes an App

[calm] Spark turned a plain-language idea into a small working app you could preview.
[600ms]
[serious] GitHub has retired it. It stopped taking new apps from August fourth, twenty twenty-six, but the study guide still names it.
[600ms]
[encouraging] Today you build the same way with Copilot in VS Code, Copilot CLI, or the GitHub Copilot app.

## Step 8 · MCP: Connect an Outside Tool

[curious] An MCP server lets Copilot use a tool or data source outside the editor, such as an issue tracker.
[600ms]
[confident] You stop copying details into chat. MCP is an open standard for connecting models to tools and data.
[600ms]
[serious] Approve only actions you understand. Organizations can allow or block MCP with a policy.

## Step 9 · Agent Sessions

[calm] Start a session for a task, and keep working while it runs.
[600ms]
[confident] Each session is independent, with its own history, so you can switch away, come back, and resume.
[600ms]
[reassuring] Archive keeps the session but hides it. Delete removes it for good.

## Step 10 · Sub-Agents

[curious] The main agent can hand a clear task to a sub-agent.
[600ms]
[confident] The sub-agent works in its own context and returns a short result, so the main chat stays small. Brief it with the goal, context, allowed actions, and expected result.
[600ms]
[reflective] Delegation adds model usage, so a quick lookup is often better asked directly.

## Step 11 · Pick the Right Tool

[curious] Match the need to the tool. Choose a need on the left and see which tool fits.
[600ms]
[confident] Standing rules mean instructions. A saved task is a prompt file, shared sources are a Space, an outside tool is an MCP server, and a handoff is an agent session.
[600ms]
[encouraging] Start with the smallest tool that fits. A one-time requirement can simply go in the request.

## Step 12 · Recap: What Goes Where

[calm] Files in the repository give Copilot standing rules and saved tasks.
[600ms]
[confident] Spaces, MCP, sessions and sub-agents bring in sources, tools and background work.
[600ms]
[proud] That's the use GitHub Copilot features area of the G H three hundred study guide. Spark is still named there, even though it's retired.
