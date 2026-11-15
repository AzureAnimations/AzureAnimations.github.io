# Narrator Script — GitHub · Move Data: Cache, Artifacts, Outputs and Job Summaries

**Source animation:** [CacheArtifactsAndOutputs.html](../../journeys/GitHub/CacheArtifactsAndOutputs.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · Every Job Starts Clean

[calm] On GitHub-hosted runners, each job starts in a fresh instance of a runner image.
[600ms]
[serious] Files and variables from an earlier job are simply not there. The runner is thrown away when the job ends.
[600ms]
[confident] So data has to be passed on deliberately, with outputs, artifacts or a cache.

## Step 2 · Step Outputs: GITHUB_OUTPUT

[calm] A step writes a name and value to the GitHub output file.
[600ms]
[confident] A later step in the same job reads it from the steps context, using the id of the step that wrote it.
[600ms]
[serious] The writing step needs an id, or nothing can read its output.

## Step 3 · GITHUB_ENV: Set It for Later Steps

[curious] Write a name and value to the GitHub environment file, and it becomes an environment variable for every later step in the job.
[600ms]
[serious] The step that wrote it does not see the new value. You also can't overwrite the default GitHub and runner variables this way.
[600ms]
[reflective] And it lives only in this job. The next job starts clean again.

## Step 4 · Job Outputs: Pass a Value On

[calm] To pass a value to another job, the first job lists outputs and maps each one to a step output.
[600ms]
[confident] The second job names the first one in needs, and reads the value from the needs context.
[600ms]
[serious] Without needs, the second job can't read the first job's outputs. Reusable workflows can also return outputs to the job that calls them.

## Step 5 · Artifacts: Upload, Then Download

[curious] For files, use artifacts. Upload artifact saves files from one job to the run.
[600ms]
[confident] A later job waits with needs, then uses download artifact to bring those files onto its own clean runner.
[600ms]
[reassuring] Artifacts also stay after the run ends, so people can download build output, logs or test results from the run page.

## Step 6 · Cache Dependencies With a Key

[curious] The cache action looks for the exact key first, then for restore keys. An exact match is a cache hit.
[600ms]
[confident] On a miss, a new cache is saved if the job succeeds. A key often joins the runner operating system with a hash of the lock file, so changed dependencies give a new key.
[600ms]
[serious] A cache never changes once it's created. A job must still work without it, and secrets never belong in it.

## Step 7 · Cache or Artifact? Pick the Right One

[calm] A cache speeds up later runs, by reusing files that are costly to recreate.
[600ms]
[confident] An artifact keeps what a job produced, so you can hand it over or download it. A short text value is better passed as an output.
[600ms]
[reflective] Caching and artifacts both store files, but they can't be used interchangeably. Pick by what you need to do next.

## Step 8 · Job Summaries: A Markdown Report

[curious] Append GitHub-flavored Markdown to the step summary file.
[600ms]
[confident] When the job finishes, the summaries of its steps are grouped and shown on the summary page of the run.
[600ms]
[encouraging] It's handy for test results, coverage and links, so nobody has to dig through the logs.

## Step 9 · A Status Badge for the README

[calm] A workflow badge shows whether the workflow is passing or failing.
[600ms]
[confident] By default it reports the default branch. Add a branch or event parameter to choose another.
[600ms]
[curious] The badge URL uses the workflow file name, and the Actions tab can create the Markdown for you. Embed it as an image in your README.

## Step 10 · Retention: How Long Files Stay

[calm] By default, artifacts and logs are kept for ninety days.
[600ms]
[confident] A repository or an organization can change that, within the limit set above it. Each upload can also set its own retention days.
[600ms]
[reflective] A new setting applies only to new artifacts and logs. You can set it in the Actions settings, or with the REST API.

## Step 11 · Cost: Faster Runs, Less Storage

[calm] Clean runners download dependencies on every run. That adds network use, run time and cost.
[600ms]
[confident] A cache replaces that download, so runs get faster. Shorter retention and fewer files shrink what you store.
[600ms]
[encouraging] Upload artifact takes wildcard patterns and exclusions, so you can upload only what you need.

## Step 12 · All in One: Pass It On, Don’t Rebuild

[calm] Contoso's pipeline now uses every tool from this lesson. Outputs carry values, and a cache holds the dependencies.
[600ms]
[confident] An artifact carries the build. A job summary shows the report, and a badge tells the README how the workflow is doing.
[600ms]
[proud] That's the G H two hundred skill of managing workflow execution and outputs. Pass it on, don't rebuild.
