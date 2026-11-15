# Narrator Script — GitHub · Troubleshoot Workflow Runs: Logs, Re-runs and Artifacts

**Source animation:** [DiagnoseWorkflowRuns.html](../../journeys/GitHub/DiagnoseWorkflowRuns.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · A Red Cross on the Pull Request

[calm] Maya opens her pull request at Contoso, and one check shows a red cross. Her teammate Ravi is waiting on it.
[600ms]
[curious] Every job in a workflow run is one check, so that cross leads you to a job, then a step, then its log.
[600ms]
[confident] Your goal is simple: find the first failed step, and read from there.

## Step 2 · The Actions Tab: Workflows, Runs and History

[calm] Open the Actions tab and pick a workflow in the left sidebar. Its runs appear as a list, one row for each run.
[600ms]
[curious] Every run stays in that list, so the history shows you exactly when the workflow began to fail.
[600ms]
[reassuring] Read access to the repository is enough to look, and the command line shows the same runs.

## Step 3 · Read a Run: Jobs, Steps, First Failure

[confident] Click a run and its summary lists the jobs. Open the failed job, and the failed step expands for you.
[600ms]
[serious] Start at the first red step, because later failures often follow from it.
[600ms]
[curious] GitHub adds a set up job and a complete job to every job. Search logs only looks inside steps you've expanded, and you can copy a link to any log line.

## Step 4 · What Triggered This Run?

[calm] The run header tells you why it started: the event, who triggered it, and which commit.
[600ms]
[confident] Those match the event name, actor and commit values you can use in your own workflow.
[600ms]
[intrigued] On a re-run, the actor is still the person who started the first run. A separate value names whoever re-ran it.

## Step 5 · Matrix Runs: Names, Axes and Failures

[curious] A matrix makes one job for every combination of values. Each job's name carries its values.
[600ms]
[confident] So a red job maps straight back to its axes, and you can compare it with the green ones, axis by axis.
[600ms]
[serious] Notice the grey jobs. With fail-fast on, which is the default, one failure cancels the rest, so grey is not a cause.

## Step 6 · Re-run Only What Failed

[calm] You can re-run all jobs, only the failed jobs, or a single job, such as one matrix cell.
[600ms]
[confident] A re-run uses the same commit, and jobs that you didn't re-run keep their results. Jobs that depend on a re-run job run again.
[600ms]
[serious] Re-runs use the privileges of the person who first triggered the run, and you can't re-run while the workflow is disabled.

## Step 7 · Debug Logging: Read the Extra Output

[curious] Sometimes the log just isn't enough. That's when you turn on debug logging.
[600ms]
[excited] Try the switch here, and watch the same step print extra detail.
[600ms]
[reassuring] Anyone who can run the workflow can tick Enable debug logging on a re-run. Or set it permanently with a secret or a variable, and the secret wins if both exist.

## Step 8 · Common Causes of a Failed Run

[calm] Four causes show up again and again. Match what you see in your run to one of these cards.
[600ms]
[curious] The token may lack a permission, a secret may not be set or passed in, no runner may match the label, or the token may have expired.
[600ms]
[serious] These are examples, so always confirm the cause in your own log.

## Step 9 · YAML Anchors: What Actually Runs

[calm] An anchor names a block, and an alias repeats it somewhere else in the file.
[600ms]
[confident] GitHub runs the expanded result, so read a failing job as if the alias were written out in full.
[600ms]
[reassuring] The expanded form behaves the same as writing the file without anchors, so expand it in your head and the failure makes sense.

## Step 10 · Find Artifacts and Logs in the UI

[calm] Artifacts sit at the bottom of the run summary. The log archive is in the menu on a job's log.
[600ms]
[confident] Read access is enough to download either one.
[600ms]
[serious] Both are kept for a retention period that can be changed, and then they expire, so grab what you need in time.

## Step 11 · The Same Through the API and gh CLI

[curious] Everything you just did in the browser has a command in the GitHub command line tool and a REST endpoint.
[600ms]
[confident] You can list runs, view them, download their artifacts and re-run them, all from a terminal.
[600ms]
[impressed] Same runs, same logs, same artifacts, so you can script the whole routine.

## Step 12 · Disable vs Delete, and the History

[calm] Disabling a workflow pauses it. The file and its history stay exactly where they are.
[600ms]
[serious] Deleting a run removes only that run, permanently, and it needs write access. Disabling doesn't cancel runs that are already going.
[600ms]
[proud] Together, these skills are what G H two hundred means by consuming and troubleshooting workflows.
