# Narrator Script — Architect · Pick the right compute

**Source animation:** [PickCompute.html](../../journeys/Architect/PickCompute.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree>

---

## Step 1 · Control or effort: choose your spot

[calm] Contoso's workloads all ask for compute, but they do not all need Contoso to operate a server.
[600ms]
[curious] The spectrum trades direct control against management effort, from infrastructure through managed platforms to event-driven functions.
[600ms]
[reassuring] Start by deciding which responsibilities the team actually needs, rather than assuming every workload belongs on a virtual machine.

## Step 2 · Six questions that decide

[calm] These six questions turn a vague compute request into a set of design requirements.
[600ms]
[curious] Check operating-system control, startup behavior, scaling, state, pricing and the skills of the team that will run it.
[600ms]
[reassuring] Evaluate each workload separately, because one complete application can legitimately use several compute services.

## Step 3 · Virtual machines: when, which size, how many

[calm] A virtual machine is appropriate when Contoso needs operating-system access or software that requires that level of control.
[600ms]
[curious] Then match the size family to the resource requirement and plan how multiple instances will stay available.
[600ms]
[reassuring] A scale set addresses repeated instances and scaling, but it does not remove the responsibility for the guest operating system.

## Step 4 · Containers: four services, one choice

[calm] All four choices run containers, but they expose different operational responsibilities.
[600ms]
[curious] AKS fits a team needing the Kubernetes API, while Container Apps removes the need to operate that cluster interface.
[600ms]
[reassuring] Contoso's catalogue API needs a managed container platform, so the workload and team requirements point to Container Apps.

## Step 5 · Serverless: code that runs when something happens

[calm] Azure Functions suits code triggered by events, while Logic Apps offers a low-code workflow approach.
[600ms]
[curious] The scale-to-zero path reduces idle capacity, but the startup behavior and state requirements still matter.
[600ms]
[reassuring] Choose the plan and application pattern around those needs instead of promising that serverless removes every operational constraint.

## Step 6 · Batch: a pool of VMs for the nightly job

[calm] Contoso's nightly export can be divided into independent tasks, so Azure Batch organizes it as a pool, a job and tasks.
[600ms]
[curious] The pool supplies the machines, the scheduler distributes the work and capacity can shrink when processing finishes.
[600ms]
[reassuring] Spot capacity lowers cost for retryable work, but the task design must tolerate eviction.

## Step 7 · Five workloads, five services

[calm] The same six questions now place Contoso's five workloads on services that meet different needs.
[600ms]
[curious] The answer is not the biggest platform for every workload; each assignment has a specific requirement behind it.
[600ms]
[reassuring] Check the reason attached to each service and ask whether a simpler option could still satisfy that requirement.

## Step 8 · All in one: pick the simplest service that fits

[calm] The completed map keeps the workload requirement beside the service choice, making the trade-off visible.
[600ms]
[curious] Use infrastructure when control is necessary, and managed services when the platform can take work off the team.
[600ms]
[reassuring] Next, surround the application with an API gateway, caching, configuration and a repeatable release path.

