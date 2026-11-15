# Narrator Script — Monitor · Log Analytics workspaces

**Source animation:** [LogAnalyticsWorkspaces.html](../../journeys/Monitor/LogAnalyticsWorkspaces.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-retention-configure>
- <https://learn.microsoft.com/azure/azure-monitor/logs/manage-access>
- <https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap>

---

## Step 1 · Where do my logs live?

[curious] Contoso has a virtual machine, a web app, and a key vault. All three write logs.
[600ms]
[calm] Before anyone can use those logs, three questions need answers. Where do they live, who can read them, and what do they cost?
[600ms]
[confident] This lesson answers all three, starting with the place the logs live.

## Step 2 · Two stores: metrics and logs

[calm] Azure Monitor keeps numbers in a metrics store. Metrics are values sampled at regular intervals.
[600ms]
[confident] Event records go to logs. Logs are timestamped records, kept in a Log Analytics workspace and queried with KQL.
[600ms]
[reassuring] Insights, such as Application Insights, hide the difference for the common scenarios.

## Step 3 · A workspace is a box of tables

[calm] A Log Analytics workspace is the data store. Each kind of log lands in its own table, with named columns.
[600ms]
[curious] Azure Monitor creates the tables it needs for Azure data, and you create custom tables for your own data.
[600ms]
[confident] Table names are case sensitive. The workspace itself has no direct cost, because you pay for data you ingest and keep.

## Step 4 · Three on-ramps feed the workspace

[calm] Data reaches the workspace by three on-ramps. Azure resources use diagnostic settings.
[600ms]
[curious] Machines use an agent, and apps use Application Insights or an API.
[600ms]
[confident] Data collection rules can filter or transform the data on its way in. Each of those on-ramps has its own lesson.

## Step 5 · Each table gets a plan

[calm] Each table has a plan. Analytics, Basic, and Auxiliary trade query power for ingestion cost.
[600ms]
[confident] You pick the plan for each table, so noisy logs can sit on a cheaper plan than your key data.
[600ms]
[serious] Basic and Auxiliary only work for tables that support them, so check the table reference first.

## Step 6 · How long do logs stay?

[calm] Recent data stays in interactive retention, where queries are fast.
[600ms]
[curious] Older data waits in low-cost long-term retention, until the total retention ends.
[600ms]
[reassuring] You set retention per table, with a workspace default. Shortening it waits before data is removed, so a mistake can be undone.

## Step 7 · Two doors into the same data

[calm] There are two doors into the same data. From the workspace, you see every table you may read.
[600ms]
[curious] From a single resource, you see only that resource's records.
[600ms]
[confident] Workspace context suits central teams. Resource context suits the team that owns a resource and needs access only to it.

## Step 8 · Narrow it down: mode and tables

[calm] The access control mode decides whether resource owners can read their own logs.
[600ms]
[confident] Even then, table-level access can lock down a specific table, using Azure role-based access control.
[600ms]
[reassuring] Built-in roles such as Log Analytics Reader and Log Analytics Contributor cover the common needs.

## Step 9 · One workspace or several?

[calm] Start with one workspace, and use the fewest that meet your requirements.
[600ms]
[curious] Pick the driver that matters most, and you can see the trade. Split only for a requirement you can name.
[600ms]
[serious] Criteria can conflict, so weigh each one before adding another workspace.

## Step 10 · Ingestion drives the bill

[calm] You pay for the data you ingest and for the time you keep it.
[600ms]
[concerned] Cost depends on how many resources you monitor and how much data each one collects.
[600ms]
[confident] A transformation in a data collection rule filters noise before it's billed, so you don't pay for records you drop.

## Step 11 · Guardrails for the spend

[calm] Use the cost levers in order. First filter the noise, then pick table plans.
[600ms]
[confident] After that, commit to a tier for a discount. Commitment tiers apply to Analytics logs ingestion.
[600ms]
[serious] Keep a daily cap only as a last safety net. When it's reached, collection stops and monitoring goes dark until it resets.

## Step 12 · All in one

[calm] Logs live in tables, and the tables live inside a Log Analytics workspace.
[600ms]
[confident] Access, retention, and cost are set per workspace or per table.
[600ms]
[proud] With those pieces clear, you can answer Contoso's three questions with confidence.
