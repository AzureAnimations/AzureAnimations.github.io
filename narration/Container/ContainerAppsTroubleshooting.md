# Narrator Script — Containers · Troubleshoot Container Apps: app not responding

**Source animation:** [ContainerAppsTroubleshooting.html](../../journeys/Container/ContainerAppsTroubleshooting.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/troubleshooting>
- <https://learn.microsoft.com/azure/container-apps/revisions>
- <https://learn.microsoft.com/azure/container-apps/log-streaming>
- <https://learn.microsoft.com/azure/container-apps/ingress-overview>

---

## Step 1 · The app is up but the URL fails: where to look first

[calm] Contoso's orders-api shows Running in the portal, yet its URL gets no answer.
[600ms]
[concerned] Mina is on call, and a green status doesn't help her when customers see nothing.
[600ms]
[determined] What she needs is a short list of places to check, in a sensible order. Let's build that list together.

## Step 2 · The troubleshooting loop for Container Apps

[confident] There are five moves, always in the same order. Read the revision status, read the logs, check ingress, check replicas and probes.
[600ms]
[calm] The fifth move is to fix one thing and look again. Every Azure CLI command here starts with az containerapp.
[600ms]
[reassuring] The portal has the same stops, from Revision management to Diagnose and solve problems, so use whichever you prefer.

## Step 3 · Revision status and provisioning state

[curious] Every deploy creates a revision, and the revision tells you the first part of the story.
[600ms]
[calm] Provisioning status says whether it passed its startup and readiness checks. Running status says how its replicas are doing, such as Running, Degraded or Failed.
[600ms]
[confident] When the status looks wrong, open the running status details. They give you the exact reason.

## Step 4 · Console logs versus system logs

[calm] There are two kinds of logs. Console logs are what your app prints to standard output and standard error.
[600ms]
[curious] System logs are what the Container Apps service says about your app. System tells you what happened; console tells you why.
[600ms]
[reassuring] In the portal, open Log stream and choose Console or System. If it says the revision is scaled to zero, deploy a revision with at least one replica.

## Step 5 · Query ContainerAppConsoleLogs and ContainerAppSystemLogs with KQL

[calm] With Log Analytics, your logs land in two tables: one for system logs and one for console logs.
[600ms]
[confident] Filter by app name and revision name, then read the Log column. Console logs also tell you which replica and which image wrote each line.
[600ms]
[encouraging] The same queries work from the command line, so you can script them into your on-call routine.

## Step 6 · Ingress: external, internal, target port, IP restrictions

[calm] Ingress is a set of rules in front of your app, so check them in order. First, is it turned on at all?
[600ms]
[curious] Next, who may reach it? External means anywhere, internal means only the Container Apps environment. Then, does the target port match the port your app listens on?
[600ms]
[serious] Finally, check whether an IP restriction is blocking the client. Any one of these can silence a healthy app.

## Step 7 · Replicas, probes and restarts

[curious] Health probes let Container Apps check each replica. A replica that fails them is not healthy and may be restarted.
[600ms]
[concerned] A wrong probe port, or a slow start, can make a good app look broken. Java apps with long startups often need a longer initial delay.
[600ms]
[confident] With ingress on, the default probes use the ingress target port. Remember, you can add only one probe of each type per container.

## Step 8 · Scaling that never starts (min replicas, scale rule credentials)

[concerned] Messages wait in the queue, but no replica appears. That's a scaling problem, not a code problem.
[600ms]
[calm] Either the minimum replica count is zero and nothing wakes the app, or the scale rule can't read its event source.
[600ms]
[reassuring] Scale rules sign in with secrets or a managed identity. If you change a secret, restart the revision so it picks up the new value.

## Step 9 · Triage simulator: pick a symptom

[excited] Now it's your turn. Pick a symptom, and the simulator shows the evidence you would find.
[600ms]
[curious] Each symptom comes with the first fix to try, so you can see the loop work from end to end.
[600ms]
[reflective] The names and output are fictional. Real output differs in detail, but the pattern is what matters.

## Step 10 · Troubleshooting playbook

[confident] You now have one loop to follow, a map from each symptom to its first suspect, and the places Azure keeps the evidence.
[600ms]
[calm] The A I two hundred skills include monitoring and troubleshooting solutions on AKS and Container Apps. This lesson is the Container Apps half.
[600ms]
[proud] Next time a green app has a silent URL, you'll know exactly where to look first.
