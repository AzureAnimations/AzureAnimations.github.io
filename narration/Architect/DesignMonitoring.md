# Narrator Script — Architect · Design logging and monitoring

**Source animation:** [DesignMonitoring.html](../../journeys/Architect/DesignMonitoring.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview>
- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/data-sources>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-platform-logs>
- <https://learn.microsoft.com/azure/azure-monitor/logs/workspace-design>
- <https://learn.microsoft.com/azure/azure-monitor/platform/diagnostic-settings>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/sentinel/overview>

---

## Step 1 · An outage, and logs in five places

[calm] Contoso's orders failed overnight, and the clues are scattered across several kinds of telemetry.
[600ms]
[curious] Platform, resource, identity, guest operating system and application signals do not all arrive through the same collection path.
[600ms]
[reassuring] Before choosing a dashboard, identify what each source produces and how that data will reach the monitoring design.

## Step 2 · Azure Monitor: metrics and logs

[calm] Azure Monitor works with both numerical metrics and detailed log records, shown as two complementary paths.
[600ms]
[curious] Metrics help Contoso notice a change quickly; logs provide the context needed to investigate it.
[600ms]
[reassuring] Use the two together: detect the symptom with an appropriate alert, then follow the records to understand what happened.

## Step 3 · Log Analytics: one workspace or many?

[calm] A Log Analytics workspace gives Contoso a place to query the collected logs.
[600ms]
[curious] Start with as few workspaces as the requirements allow, then examine the reasons shown for separating them.
[600ms]
[reassuring] Residency, ownership and other boundaries may justify a split, but creating a workspace for every source also creates management and query overhead.

## Step 4 · Table plans: pay for the query you need

[calm] Each table has a plan, and the right plan depends on how Contoso intends to use the data.
[600ms]
[curious] Compare Analytics for regular monitoring, Basic for troubleshooting and Auxiliary for less frequently queried verbose records.
[600ms]
[reassuring] Look at ingestion and query needs together, rather than choosing a plan only because its ingestion price appears lower.

## Step 5 · Route logs with diagnostic settings

[calm] A diagnostic setting routes a resource's logs and metrics to the destinations shown here.
[600ms]
[curious] A workspace supports investigation, storage supports retention, and Event Hubs supports a streaming integration.
[600ms]
[reassuring] Choose destinations by the job each copy must do, and remember that resource logs need their collection and routing configured.

## Step 6 · Application Insights and VM insights

[calm] The storefront application and the batch virtual machine need different kinds of instrumentation.
[600ms]
[curious] Application Insights follows application behavior, while VM insights collects the machine-level signals needed to understand the server.
[600ms]
[reassuring] Their data can meet in the same workspace, connecting an application symptom to the infrastructure it depends on.

## Step 7 · Alerts and action groups

[calm] The alert rule decides when a signal is important enough to act on.
[600ms]
[curious] The action group handles the next step: notify people or invoke an automated response.
[600ms]
[reassuring] Keep those responsibilities separate, so Contoso can reuse the response path while choosing the right kind of rule for each signal.

## Step 8 · Microsoft Sentinel: the SIEM on your workspace

[calm] Microsoft Sentinel adds security detection and response capabilities around the workspace data.
[600ms]
[curious] Follow the sequence from collecting signals to detecting threats, investigating incidents and running a response.
[600ms]
[reassuring] This is more than another log search screen: the design must support the security team's detection and incident-handling workflow.

## Step 9 · All in one: from signal to action

[calm] The monitoring design now connects signals to actions instead of leaving the evidence in separate places.
[600ms]
[curious] Contoso has chosen what to collect, how to route it, where to retain it and what will respond.
[600ms]
[reassuring] Those four decisions make troubleshooting possible; next, decide how the business will recover when an incident becomes a failure.

