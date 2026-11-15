# Narrator Script — Foundry · Evaluate and Observe

**Source animation:** [EvaluateAndObserve.html](../../../journeys/AI/Foundry/EvaluateAndObserve.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/concepts/observability>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/built-in-evaluators>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators>

---

## Step 1 · It looked fine in the demo

[calm] Contoso built a support assistant called Ask Contoso. It answers order and returns questions from policy documents and an order tool.
[600ms]
[confident] In the demo it nailed three questions, and everyone clapped.
[600ms]
[concerned] Then real customers arrived with questions nobody had tested, and that's where the trouble started.

## Step 2 · One loop: test, ship, trace, watch

[curious] A good AI app is never really done. It lives in a loop: test before release, trace what runs, watch production, fix what you learn, and test again.
[600ms]
[calm] Microsoft Foundry names the three parts evaluation, tracing and monitoring.
[600ms]
[confident] Together they give you observability for AI apps.

## Step 3 · Write the test cases first

[curious] Start with an evaluation dataset. It's a file of test questions, one per line, plus the expected answer wherever you have one.
[600ms]
[calm] Foundry keeps it versioned, so every run uses exactly the same tests, and the datasets are JSONL or CSV files.
[600ms]
[serious] Put edge cases and attacks in the set, not only the happy paths.

## Step 4 · A judge model grades the answers

[curious] Many quality checks use a second model as a judge. It reads the question, the source text and the answer, scores them against a rubric, and explains why.
[600ms]
[calm] For groundedness, you bring your own model deployment as the judge. The score runs from one to five, and a threshold turns it into pass or fail.
[600ms]
[reflective] Some evaluators use no model at all. They just measure word overlap, like F1, BLEU and ROUGE.

## Step 5 · Pick the evaluator for the symptom

[calm] Each built-in quality evaluator checks one thing. So the trick is matching the symptom your team saw to the evaluator that catches it.
[600ms]
[curious] Try it here. Pick a complaint, and the right evaluator lights up.
[600ms]
[confident] If nothing fits, you can write a custom evaluator too, which is still in preview.

## Step 6 · Grade the agent’s steps, not just its words

[curious] An agent can sound perfectly right and still pick the wrong tool, or skip an instruction along the way.
[600ms]
[calm] Agent evaluators look at each step of the run: intent resolution, task adherence, tool call accuracy, tool output utilization and task completion.
[600ms]
[serious] Keep in mind that intent resolution, task adherence and task completion are still in preview.

## Step 7 · Safety evaluations: what could go wrong?

[serious] Safety evaluators scan replies for harmful content, copied text, and jailbreaks hidden inside documents. That last one is called an indirect attack, or XPIA.
[600ms]
[calm] The result is a defect rate: how many replies were flagged.
[600ms]
[reassuring] The Foundry evaluation service hosts these checks, so you don't need a judge model deployment for them.

## Step 8 · Red teaming: attack it before others do

[serious] Before real attackers find your weak spots, a red team agent plays the determined attacker. It sends many probes, some of them disguised.
[600ms]
[calm] Then it reports how often they work. That number is the attack success rate. It's built on PyRIT, Microsoft's open-source toolkit, plus the safety evaluators.
[600ms]
[reflective] It works best alongside human review, and scheduled scans after launch are in preview.

## Step 9 · Read a trace, span by span

[curious] A trace is the story of one request, and each span is one step inside it. Pick a span and see what it tells you.
[600ms]
[calm] Tracing is built on OpenTelemetry and stored in Application Insights. It's generally available for prompt and hosted agents.
[600ms]
[concerned] Traces can hold sensitive text, so redact it before you share or store them.

## Step 10 · Monitor production: usage, speed, drift

[calm] After launch, dashboards track tokens, latency, errors and quality scores. The numbers on screen here are made up.
[600ms]
[curious] Continuous evaluation scores a sample of live traffic, so you notice quality changing without waiting for complaints.
[600ms]
[serious] Drift, where answers slowly get worse, should trip an alert. The agent monitoring dashboard and these alerts are in preview.

## Step 11 · Close the loop: gate every release

[determined] When monitoring finds a problem, change one thing: the prompt, the data or the model. Then re-run the same tests.
[600ms]
[curious] Compare the runs side by side to see whether the change helped, and use cluster analysis to group failures into patterns.
[600ms]
[confident] Finally, a CI and CD gate runs the same evaluators on every change, and you release only if the scores hold.

## Step 12 · Evaluate, trace, monitor, repeat

[calm] Test before release. Trace what ran. Watch production. Then fix, and gate the next release.
[600ms]
[reflective] That's how Ask Contoso went from a nice demo to something customers can trust.
[600ms]
[proud] That loop is how an AI app stays good, long after launch day.
