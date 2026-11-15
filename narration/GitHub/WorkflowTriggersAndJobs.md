# Narrator Script — GitHub · Workflow Syntax: Triggers, Jobs, Matrices and Contexts

**Source animation:** [WorkflowTriggersAndJobs.html](../../journeys/GitHub/WorkflowTriggersAndJobs.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · One workflow file

[calm] A workflow is one YAML file, kept in the workflows folder inside the dot github folder. It must end in dot yml or dot yaml.
[600ms]
[confident] Four keys tell its whole story. Name, on, jobs and steps.
[600ms]
[curious] The on key starts the run, and the jobs do the work. Leave out the name, and GitHub shows the file path in the Actions tab instead.

## Step 2 · Triggers

[curious] The on key says what starts a run. It could be a code event, a repository event, a schedule, or a call from outside GitHub.
[600ms]
[confident] Filters on branches, tags and paths narrow push and pull request triggers. A schedule uses cron syntax and runs on the default branch.
[600ms]
[calm] One matching event is enough to start a run. A repository dispatch webhook carries an event type.

## Step 3 · Run it by hand

[confident] The workflow dispatch trigger adds a Run workflow button.
[600ms]
[curious] Each input has a type, an optional default and a required flag. Types include boolean, choice, number, environment and string. The jobs read them from the inputs context.
[600ms]
[reflective] The button only shows when the workflow file is on the default branch.

## Step 4 · Jobs and needs

[calm] Jobs run in parallel by default.
[600ms]
[confident] Add needs, and a job waits for the jobs it depends on to succeed.
[600ms]
[serious] If a job fails or is skipped, every job that needs it is skipped too, unless that job uses a condition such as always.

## Step 5 · Conditional logic

[calm] An if key decides whether a step or a job runs. With no status function, GitHub adds success for you.
[600ms]
[confident] The failure function runs a step after a failure, and the always function runs it whatever happened before.
[600ms]
[serious] Avoid always for work that can fail badly, like getting sources. The docs recommend not cancelled, to run a step whether or not earlier steps passed.

## Step 6 · Variables and commands

[confident] The env key sets variables for the whole workflow, one job or one step. The most specific one wins.
[600ms]
[curious] Workflow commands let a step talk to the runner from the log. Notice, warning and error create annotations.
[600ms]
[calm] Write a name and value to the GitHub environment file, and it becomes a variable for later steps, not for the step that wrote it.

## Step 7 · Service containers

[curious] A services block starts a container, such as a database, right next to your job.
[600ms]
[confident] Map its port and reach it on localhost. Add health check options, so the job waits until the service is ready.
[600ms]
[reassuring] GitHub creates a fresh container for each job and destroys it when the job completes. Service containers need a Linux runner.

## Step 8 · A matrix

[curious] A matrix turns one job definition into many.
[600ms]
[confident] Here there are two operating systems and three Node versions. That makes six jobs, one for every combination.
[600ms]
[impressed] Each job reads its own values from the matrix context.

## Step 9 · Shape the matrix

[calm] Exclude removes a combination from the matrix, and include adds one.
[600ms]
[confident] Fail-fast and max-parallel control how the jobs run. Fail-fast defaults to true.
[600ms]
[reflective] Pin a runner version if you want to stay put. A latest label means the newest stable image, so what's behind it can change over time.

## Step 10 · Contexts

[curious] Contexts are objects that hold data about the run.
[600ms]
[confident] Read them in expressions to get the branch, the runner, your variables, and the results of earlier jobs and steps.
[600ms]
[serious] Where a context works depends on the key. A job-level if can read github, needs, vars and inputs, but not secrets.

## Step 11 · Expressions

[calm] GitHub evaluates the dollar sign and double curly braces first, and swaps in the text.
[600ms]
[confident] That happens before the shell on the runner sees the line. A plain dollar name is expanded later, by the shell.
[600ms]
[serious] Keep secrets out of logs. Never print them, and mask generated values.

## Step 12 · Anchors and editor help

[calm] An anchor names a block of YAML, and an alias repeats it somewhere else. That cuts repetition inside one workflow file.
[600ms]
[curious] The GitHub Actions extension for VS Code gives you highlighting, validation and completion as you type.
[600ms]
[determined] It works best with a local clone of the repository. Now go and build a workflow of your own.
