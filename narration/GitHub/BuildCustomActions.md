# Narrator Script — GitHub · Build and Publish a Custom Action

**Source animation:** [BuildCustomActions.html](../../journeys/GitHub/BuildCustomActions.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Why package an action

[calm] Contoso pasted the same check script into three repositories. Now every fix has to be pasted three times.
[600ms]
[concerned] Copied scripts drift apart, and nobody is sure which version is right.
[600ms]
[confident] An action packages it once, so each workflow just calls it with a single uses line.

## Step 2 · Three types of action

[curious] You can build three kinds of action: a JavaScript action, a Docker container action, or a composite action.
[600ms]
[confident] They differ in how they run. JavaScript runs directly on the runner, Docker runs in a container, and composite combines steps and actions.
[600ms]
[serious] Docker container actions run only on Linux runners, and a self-hosted Linux runner must have Docker installed.

## Step 3 · The action.yml file

[calm] Every action needs one metadata file, named action dot yml, or action dot yaml.
[600ms]
[confident] Three things are required: a name, a description, and how the action runs. Inputs, outputs, an author and branding are optional.
[600ms]
[serious] Careful: marking an input as required doesn't stop the run by itself, so your code has to check it.

## Step 4 · A JavaScript action

[calm] Write the code in Node with the Actions toolkit, then bundle it with its dependencies into the dist folder.
[600ms]
[confident] The runner downloads the action and runs that one file as a complete package.
[600ms]
[serious] That means the dependencies must come with it. Commit the bundled file, and don't commit node modules.

## Step 5 · A Docker container action

[calm] A Dockerfile packages your code together with its environment: the operating system, tools and versions.
[600ms]
[curious] The runner builds or retrieves the image, then starts it with your entrypoint and arguments.
[600ms]
[serious] It runs on Linux runners only and is slower than JavaScript. Don't use the USER instruction, and make the entrypoint script executable.

## Step 6 · A composite action

[calm] A composite action bundles several steps into one reusable step, including shell commands and other actions.
[600ms]
[serious] Every run step must name its shell.
[600ms]
[intrigued] And inside a composite action, read inputs with the inputs context, not with environment variables.

## Step 7 · Workflow commands in an action

[curious] An action talks to the runner with workflow commands. It can write an output, mask a value, or add an annotation.
[600ms]
[confident] The toolkit wraps each one for you. Outputs go to the file the runner names, and annotations come as notice, warning or error.
[600ms]
[serious] Register a mask before you print the value, never after.

## Step 8 · Pick a type

[calm] Choose by what matters most: speed, platform, and dependencies.
[600ms]
[confident] JavaScript is faster than Docker, and a pure JavaScript action works on all GitHub-hosted runners.
[600ms]
[curious] Docker is Linux only, but it brings its own dependencies along.

## Step 9 · Troubleshoot an action that fails

[calm] When an action fails, read the log first, starting at the failing step.
[600ms]
[confident] Then re-run with debug logging turned on to see more detail.
[600ms]
[intrigued] Finally, match what you see to a common cause: permissions, the shell, dependencies, or the runner operating system. The log text here is only a sample.

## Step 10 · Distribute your action

[curious] Now choose who can use it. A public repository reaches everyone, and that is the widest option.
[600ms]
[confident] A private or internal repository stays inside your organization or enterprise, and the Marketplace adds discovery.
[600ms]
[concerned] One caution: outside collaborators on a repository that uses a shared private action can read its run logs.

## Step 11 · Publish to the Marketplace

[calm] To publish, meet the requirements: a public repository, an action file at the root, and a unique name.
[600ms]
[confident] Add branding and a category to the action file, then draft a release and choose Publish this Action to the GitHub Marketplace.
[600ms]
[impressed] Publishing needs two-factor authentication, and an action that meets the requirements goes live at once, without review.

## Step 12 · Release strategy

[calm] Tag each release with a semantic version, and keep a moving major tag such as v one.
[600ms]
[confident] Users pick v one to get fixes automatically, or an exact tag or a commit SHA when they want stability.
[600ms]
[proud] A new major tag, such as v two, is for changes that break existing workflows, and an immutable release locks its tag for good.
