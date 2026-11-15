# Narrator Script — GitHub · Code Security: Code Scanning with CodeQL

**Source animation:** [CodeScanningWithCodeQL.html](../../journeys/GitHub/CodeScanningWithCodeQL.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Tests prove it works; scanning asks if it is safe

[calm] Ravi's tests are all green. Everything works the way he expected.
[600ms]
[concerned] Yet one line of code can still be attacked, and no test was written to look for that.
[600ms]
[confident] Code scanning reads the code itself, looks for unsafe patterns, and reports alerts right on the line.

## Step 2 · How CodeQL works: build a database, then query it

[curious] CodeQL treats code like data. First it builds a database from your code, one database for each language.
[600ms]
[confident] Then it runs queries against that database. Each query hunts for one kind of unsafe pattern.
[600ms]
[calm] The results show up as code scanning alerts in your repository.

## Step 3 · Default setup: one click, languages detected

[calm] The easiest way in is default setup. GitHub picks the languages, the query suite and the triggers for you.
[600ms]
[confident] You review the summary, and then enable it.
[600ms]
[reassuring] It needs GitHub Actions turned on, and the repository must be public or have Code Security.

## Step 4 · Advanced setup: workflow, triggers and a matrix

[confident] Advanced setup adds a workflow file to your repository, and you own it from then on.
[600ms]
[curious] Edit the triggers, such as push, pull request or a schedule. Edit the language matrix too.
[600ms]
[impressed] The matrix runs one job for each language, and they all run in parallel.

## Step 5 · Compiled languages and build modes

[curious] Compiled languages may need a build before CodeQL can make its database from them.
[600ms]
[calm] For each language in the matrix, you pick a build mode. None means no build at all. Autobuild means CodeQL builds it for you.
[600ms]
[confident] Manual means you write the build commands yourself. The docs list which languages support which mode.

## Step 6 · Third-party scanners and SARIF upload

[curious] Already using another scanner? Have it write a SARIF file, which is a JSON format for results.
[600ms]
[confident] Upload that file with an action, the API or the CodeQL command line.
[600ms]
[impressed] Its findings then appear as code scanning alerts, right beside the ones from CodeQL.

## Step 7 · Reading an alert: severity, rule and data-flow path

[calm] Every alert names the rule that fired, and its severity. A security alert also shows a level from critical down to low.
[600ms]
[confident] For a data-flow alert, choose Show paths. It walks the data from its source to its sink.
[600ms]
[encouraging] Click through each step of the path, and you see exactly where untrusted input becomes dangerous.

## Step 8 · Fixing with Copilot Autofix, then re-scan

[curious] Copilot Autofix can suggest a code change for the alert that you are looking at.
[600ms]
[confident] You review the suggestion, open a pull request with the fix, and code scanning checks it again.
[600ms]
[reflective] It's best effort, so it can't fix every alert in every situation. Always read the change before you merge.

## Step 9 · Dismiss an alert: reasons and the audit trail

[calm] Some alerts you won't fix. Maybe the code is only used in tests, or the risk is acceptable.
[600ms]
[confident] Dismiss the alert and choose a reason. You can add a comment as well.
[600ms]
[reassuring] Both stay on the alert timeline, so there's a record of who decided what, and why.

## Step 10 · Query suites: from default to security-and-quality

[curious] A query suite is a named set of queries. It lets you choose how much to look for.
[600ms]
[confident] Default is highly precise. Security-extended adds lower-precision queries, so you find more.
[600ms]
[calm] Security-and-quality goes further and adds code quality queries too.

## Step 11 · Custom queries and configuration files

[confident] A configuration file lets you add your own queries and packs. It can also leave queries out and skip whole folders.
[600ms]
[calm] The workflow points to that file with one setting.
[600ms]
[serious] One catch. Queries set in the workflow replace the ones in the file, unless you put a plus sign in front of them to merge.

## Step 12 · When a scan fails or is slow: where to look

[calm] When a scan fails, start with the failed step, the build mode and the logs.
[600ms]
[confident] If the build fails, try manual build mode. If the logs are too thin, turn on debug logging.
[600ms]
[determined] If the scan is too slow, cut the scope, split by language or use a bigger runner. What you can change depends on default or advanced setup.
