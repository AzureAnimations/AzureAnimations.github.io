# Narrator Script — GitHub · Configure Copilot Agents: Instructions, Custom Agents and Setup Steps

**Source animation:** [CustomAgentsAndInstructions.html](../../journeys/GitHub/CustomAgentsAndInstructions.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>

---

## Step 1 · One Agent, Many Jobs

[calm] Maya hands one generic agent three different jobs: tests, docs and review.
[600ms]
[concerned] That agent knows none of Contoso's rules, and unless you limit it, it can use every tool available for every job.
[600ms]
[serious] The result is output that doesn't match how the team works. Let's fix that with configuration.

## Step 2 · Repository Instructions

[curious] The first fix is one file that tells Copilot how Contoso builds, tests and names things.
[600ms]
[confident] It's plain Markdown in the repository's GitHub folder, written as natural-language rules. It applies to every request made in this repository.
[600ms]
[encouraging] Say how to build, test and validate the work. The agent will follow it each time.

## Step 3 · Path and Agent Instructions

[calm] Narrower rules sit closer to the code.
[600ms]
[confident] A path-specific instructions file applies to files that match its pattern. An agent instructions file can live anywhere in the repository, and the nearest one wins.
[600ms]
[curious] If a path matches and a repository-wide file exists, Copilot uses both. You can also exclude a path file from the cloud agent or from code review.

## Step 4 · A Custom Agent

[curious] Now give the agent a role. A custom agent is a Markdown file with frontmatter.
[600ms]
[confident] It has a name, a description of its purpose, and a prompt that sets how it works. The description is required.
[600ms]
[reflective] Profiles live in the agents folder and end in dot agent dot md. Support in JetBrains IDEs, Eclipse and Xcode is in public preview.

## Step 5 · Choose Its Tools

[calm] The tools property lists what the agent may use. A reviewer that can only read and search cannot change a file.
[600ms]
[confident] Leave the property out, or use a star, and the agent gets every tool. A list enables only those tools.
[600ms]
[serious] An empty list disables them all, and unrecognized tool names are simply ignored.

## Step 6 · Pick the Model and the Scope

[calm] The model is optional. If you leave it unset, the agent inherits the default model.
[600ms]
[confident] Where the file lives decides who can use the agent: one repository, an organization or an enterprise. Organization agents sit in a special folder in the organization's dot github repository.
[600ms]
[curious] If the same name exists at two levels, the lowest level wins.

## Step 7 · Copilot Setup Steps

[calm] Next, the environment. A workflow file with one job named copilot setup steps prepares things before the agent starts.
[600ms]
[confident] These steps run in GitHub Actions, so they apply to sessions that run there, not to cloud sandbox sessions.
[600ms]
[serious] If a step fails, Copilot skips the rest and begins with what it has.

## Step 8 · Scope to a Repository and a Branch

[calm] The agent's files live on the default branch, so merge the profile and the setup steps file there first.
[600ms]
[confident] A session starts in one repository, and Copilot creates a new branch from the base branch you choose.
[600ms]
[reassuring] The result is a pull request against that base branch. In a cloud sandbox, sessions can span repositories in one organization.

## Step 9 · Invoke It

[curious] There are several ways to start your custom agent. Pick it when you assign an issue or start a task.
[600ms]
[confident] On a pull request, mention Copilot to ask for changes. In a workflow, the issues API takes a custom agent and a base branch, and that is a preview feature.
[600ms]
[encouraging] You can also choose it from the agents tab dropdown, or use the agent command in Copilot CLI.

## Step 10 · Test the Agent

[calm] Test the agent with one small task you can check.
[600ms]
[curious] Read the result. When Copilot opens a pull request, it notes which custom agent was used.
[600ms]
[determined] If it's wrong, fix the instructions rather than the output, then run it again.

## Step 11 · Recap: The Files That Make an Agent

[calm] Four things make an agent. Instructions set the rules, and the profile sets the role and tools.
[600ms]
[confident] Setup steps ready the environment, and scope sets the repository, the base branch and how the agent starts.
[600ms]
[proud] The G H six hundred study guide lists this under implementing tool use and environment interaction.
