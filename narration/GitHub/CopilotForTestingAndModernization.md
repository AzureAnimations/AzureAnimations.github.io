# Narrator Script — GitHub · Copilot for Tests, Refactoring and Legacy Code

**Source animation:** [CopilotForTestingAndModernization.html](../../journeys/GitHub/CopilotForTestingAndModernization.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/sql/tools/visual-studio-code-extensions/github-copilot/test-and-mocking-data-generator>

---

## Step 1 · A Function Nobody Dares Touch

[calm] At Contoso, Maya inherits a pricing function with cryptic names, no tests, and no documentation.
[600ms]
[concerned] Changing even one line could break checkout, and nothing would warn her.
[600ms]
[curious] That's legacy code. Little documentation and weak test coverage are exactly why people are afraid to touch it. Let's see how Copilot helps.

## Step 2 · Understand It First

[calm] Before changing anything, Maya selects the code and asks Copilot Chat to explain it.
[600ms]
[confident] In Visual Studio Code, the slash explain command does this for the active editor. She can also tell Copilot her background, like a Python three developer, so the answer fits her.
[600ms]
[serious] Then she checks every point against the code. The explanation is a lead, not a fact.

## Step 3 · Generate Unit Tests

[confident] With the file open, the slash tests command drafts unit tests for the selected code.
[600ms]
[calm] Keeping an existing test file open beside the code helps Copilot match your test framework.
[600ms]
[serious] The tests may not cover every scenario. So Maya runs them, reads each one, and adds what's missing.

## Step 4 · Edge Cases

[curious] Now she asks what's missing. Empty values, nulls, zero, and boundary inputs.
[600ms]
[confident] Copilot suggests the cases. Legacy code hides assumptions, so she also asks what the code assumes and writes the answer down.
[600ms]
[reassuring] When behavior is unclear, the team decides what the rule should be. Copilot doesn't decide that.

## Step 5 · Assertions

[calm] A weak assertion passes even when the answer is wrong.
[600ms]
[serious] A test that can't fail proves nothing. So read the assertions Copilot writes, not just the test names.
[600ms]
[confident] Ask it to check exact values and exceptions. Then a real mistake turns the test red.

## Step 6 · Integration Tests

[calm] An integration test calls two parts together, here checkout and apply promo.
[600ms]
[curious] A mock stands in for the notifier, so the test needs no real connection. It verifies the notifier is called once, or not at all.
[600ms]
[confident] Say what to mock and what to verify. Add a second test for invalid input, and break big requests into small pieces.

## Step 7 · Refactor Safely

[calm] Now Maya refactors with the tests running. Switch the version below to compare.
[600ms]
[impressed] The simpler code keeps the same five tests green. A slip turns two of them red before it ships.
[600ms]
[reassuring] Tests let you change how the code works without changing what it does. Run them after every change.

## Step 8 · Document It

[calm] Maya highlights the function and asks Copilot for a docstring, then a README section for the codebase.
[600ms]
[serious] Then she corrects anything that isn't accurate against the code.
[600ms]
[optimistic] Good documentation helps the next reader, and comments and docs help Copilot give better suggestions too.

## Step 9 · Sample Data

[curious] Need test data? Describe the table, or paste a JSON sample, and ask for mock rows.
[600ms]
[confident] You can ask for a number of rows and include edge cases. The result is fictional rows to seed a test database.
[600ms]
[serious] Always use fictional values, and never paste real customer data into the prompt.

## Step 10 · Modernize

[calm] Maya asks Copilot to rewrite an old pattern in a current one, such as Python two code for Python three, with the tests nearby.
[600ms]
[confident] Typical changes are imports, print statements, and removed methods.
[600ms]
[serious] It isn't a magic wand. Expect to adjust for context and outdated libraries, and let the tests show what really changed.

## Step 11 · Security and Performance

[calm] Maya asks Copilot for security risks, and for a faster version.
[600ms]
[concerned] Copilot Chat can help spot common problems like SQL injection, but you shouldn't rely on it for a full security analysis. Responses aren't deterministic, so yours may differ.
[600ms]
[determined] So verify. Run the tests, run code scanning, and measure the speed.

## Step 12 · Recap: Review Every Change

[calm] Copilot explains, drafts, and speeds up the work. You review every change, and the tests are the proof.
[600ms]
[confident] Understand the code first. While you work, Copilot drafts and you run the tests. Afterward, merge only what the tests and a person approve.
[600ms]
[proud] For the G H three hundred exam, this covers tests, edge cases, sample data, refactoring, documentation, legacy modernization, and security and performance suggestions.
