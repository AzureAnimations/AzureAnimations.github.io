# Narrator Script — GitHub · Codespaces & Dev Containers

**Source animation:** [CodespacesAndDevContainers.html](../../journeys/GitHub/CodespacesAndDevContainers.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Day One, the Old Way

[calm] Priya has just joined the Contoso weather team.
[600ms]
[concerned] Before she writes a line of code, she has to turn a blank laptop into a copy of her teammates' machines. That can eat a whole day.
[600ms]
[serious] And the risk is real: every hand-built setup drifts a little away from the next one.

## Step 2 · What Is a Codespace?

[curious] A codespace is a development environment hosted in the cloud.
[600ms]
[confident] Open one from a template, a branch, a pull request, or a commit, then connect with your browser, VS Code, or the GitHub CLI.
[600ms]
[calm] Under the hood it's a Docker container on a virtual machine that GitHub hosts. It always runs Linux, whatever your own computer runs.

## Step 3 · Open One With a Click

[calm] On the repository page, choose Code, then the Codespaces tab, then create a codespace on your branch.
[600ms]
[curious] Choose New with options if you want to pick the branch, the dev container, or the machine type.
[600ms]
[reassuring] A note in the dialog tells you who pays. Personal accounts get a monthly free quota, and an organization can choose to pay for its members.

## Step 4 · What Happens When You Press Create

[curious] When you press Create, GitHub assembles your environment in four moves.
[600ms]
[confident] It starts a virtual machine, builds the container, connects you, and then finishes setup. You're connected after the third move.
[600ms]
[reassuring] It can take a few minutes, but repository admins can turn on prebuilds to speed up the wait.

## Step 5 · Same Environment for Everyone

[calm] A dev container is a Docker container set up for development.
[600ms]
[confident] Commit its description to the repo, and every codespace, Priya's, Sam's, and Ana's, is built from the same recipe.
[600ms]
[reassuring] That recipe is a file called devcontainer dot json. With no file, codespaces start from a default image that has many common languages and tools.

## Step 6 · Inside devcontainer.json

[curious] One small file answers the question, what do I install, for the whole team.
[600ms]
[confident] Each property handles one part of the setup: the image, features, extensions, ports, and commands.
[600ms]
[reflective] Keep it to what everyone needs. Personal taste, like themes and aliases, belongs in dotfiles. To apply a change, commit it and rebuild the container.

## Step 7 · An Open Spec: One File, Many Tools

[curious] The file follows an open standard, the Development Containers specification at containers dot io.
[600ms]
[impressed] That means the same file can also set up an environment on your own machine.
[600ms]
[calm] In VS Code, the Dev Containers extension opens a folder inside a container built from it. Codespaces does the same thing in the cloud.

## Step 8 · Stop, Resume, Delete — and the Meter

[calm] A codespace stops when it's idle, keeps your saved changes while stopped, and is gone once deleted.
[600ms]
[confident] Compute is billed only while it runs, and storage is billed while it exists. By default, it stops after thirty minutes idle.
[600ms]
[serious] A stopped codespace is deleted after thirty days, and one session stops after twelve hours. You can change the defaults.

## Step 9 · github.dev: Press the Period Key

[curious] Here's a shortcut. On any repository or pull request, press the period key.
[600ms]
[impressed] VS Code for the Web opens in your browser at github dot dev, instantly, with nothing to build.
[600ms]
[serious] You can browse, edit, and commit files, but there's no terminal and no way to run or debug code. Commit often, since edits stay in the browser until then.

## Step 10 · Which Editor Should I Open?

[curious] So which editor should you open? Start from the job in front of you.
[600ms]
[confident] A quick edit is a job for github dot dev. Need to run or debug? You need compute, so open a codespace or use your own machine.
[600ms]
[reassuring] And if you want the same setup for everyone, describe it in a dev container.

## Step 11 · All in One: Open It, Start Coding

[calm] Back to Priya's first day. She opens a codespace, and her environment is already waiting.
[600ms]
[confident] You can now explain codespaces and dev containers, and say when github dot dev is enough.
[600ms]
[proud] That's the G H nine hundred skill set for this topic. The GitHub Foundations learning paths are the next step.
