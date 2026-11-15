# Narrator Script — Containers · KEDA scaling in Container Apps — Azure Containers

**Source animation:** [KedaScaling.html](../../journeys/Container/KedaScaling.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/scale-app>
- <https://learn.microsoft.com/azure/container-apps/jobs>
- <https://learn.microsoft.com/azure/container-apps/metrics>
- <https://learn.microsoft.com/azure/container-apps/log-monitoring>

---

## Step 1 · A burst the CPU can’t see

[calm] Contoso's order processor sits quiet, until a flash sale drops hundreds of messages on the queue in a single minute.
[600ms]
[concerned] One replica falls behind, yet its CPU looks calm, because the worker spends most of its time waiting on a payment API.
[600ms]
[confident] So CPU is the blind spot. The signal that matters is the queue length, and that's what we should scale on.

## Step 2 · Three kinds of scale rule

[curious] A scale rule tells Container Apps when to add replicas. There are three kinds: HTTP, TCP, and custom.
[600ms]
[calm] HTTP and TCP rules count live traffic. A custom rule plugs in any KEDA scaler, such as a queue.
[600ms]
[confident] With several rules, the first condition met starts the scaling. And if you define none, a default HTTP rule scales between zero and ten replicas.

## Step 3 · The control loop: queue, KEDA, replicas

[calm] Here's the loop. KEDA polls the event source, works out how many replicas the backlog needs, and the platform adds or removes replicas to match.
[600ms]
[curious] A custom rule polls every thirty seconds by default. HTTP and TCP rules aren't polled, because the platform measures that traffic itself.
[600ms]
[reassuring] Your code never talks to the scaler. It only processes messages.

## Step 4 · Limits and the replica math

[curious] You tell KEDA how many messages one replica should handle. It divides the backlog by that number and rounds up.
[600ms]
[calm] Then your minimum and maximum replicas clamp the answer. By default, that's zero and ten.
[600ms]
[serious] Remember, a replica count is a target, not a guarantee. Real scale-out ramps up in stages, over several polls, until it reaches your max.

## Step 5 · Scale to zero, and the cold start

[calm] With minimum replicas set to zero, an empty queue ends with zero replicas, and no usage charges.
[600ms]
[concerned] The price is a cold start. The first message after a quiet spell waits while a replica starts.
[600ms]
[confident] The cool down period, three hundred seconds by default, only applies when going from the last replica to zero. At zero, there's no process to measure, so the event source wakes the app.

## Step 6 · A Service Bus scale rule, field by field

[calm] Now let's look at a real rule. A custom rule names the KEDA scaler type, here Azure Service Bus, plus its metadata.
[600ms]
[curious] The metadata says which queue to watch, in which namespace, and how many messages one replica should handle.
[600ms]
[confident] A Storage queue follows the same idea, with an account name, a queue name, and a queue length. The values on screen are fictional.

## Step 7 · How the scaler signs in

[curious] KEDA has to read the queue length, so the rule needs credentials.
[600ms]
[calm] You can pass a secret, referenced from the rule. Or let a managed identity sign in, with nothing to store or rotate.
[600ms]
[serious] With a Service Bus connection string, the shared access policy must be of type Manage. With a managed identity, that identity must be allowed to read the queue.

## Step 8 · Cron: scale by the clock

[curious] Sometimes the burst is predictable. A cron rule raises replicas for a time window, then releases them afterwards.
[600ms]
[calm] You give it a time zone, a start, an end, and the desired replicas to hold in between.
[600ms]
[serious] Start and end can't be the same, and keep min replicas at zero outside the window. Pair it with a queue rule, so surprise bursts are still covered.

## Step 9 · Try it: the live scale simulator

[excited] Your turn. Pick a rule, drag the load, and watch the replica count follow the math.
[600ms]
[curious] Try a big backlog with max set to five, then try zero load with min zero, and then min one.
[600ms]
[reassuring] Everything here is fictional and computed in the page. It shows where the app settles, while real scale-out ramps over several polls.

## Step 10 · Apps scale replicas, jobs run executions

[calm] An app keeps replicas running, and each replica drains events from the source.
[600ms]
[curious] An event-driven job is different. It starts one execution per event, runs it to completion, and stops.
[600ms]
[confident] Choose a job when each event needs its own container, or runs for a long time. Jobs use the same KEDA scalers, but the rule decides how many executions to start.

## Step 11 · Verify it scales, and find what’s wrong

[calm] To verify, add some test messages, then watch the replica count metric and the system logs.
[600ms]
[concerned] If nothing moves, walk the loop in order: the queue, the credentials, the rule, and the limits.
[600ms]
[serious] One more trap. With ingress off, no min replicas and no rule, the app scales to zero with no way to start again. And editing a scale rule creates a new revision.

## Step 12 · Burst out, then back to zero

[calm] Let's pull it together. You need a rule, a per-replica threshold, min and max limits, and credentials.
[600ms]
[proud] KEDA does the polling, and the platform does the scaling. Contoso bursts out for the flash sale, then drops back to zero.
[600ms]
[reassuring] This is a skill measured in A I two hundred. Practise with the simulator, then open the official study guide.
