# Narrator Script — Monitor · Agents and Data Collection Rules

**Source animation:** [AgentsAndDcr.html](../../journeys/Monitor/AgentsAndDcr.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview>
- <https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview>
- <https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-transformations>
- <https://learn.microsoft.com/azure/azure-monitor/vm/data-collection>

---

## Step 1 · Azure sees the box, not what’s inside

[calm] Meet vm-web-01, a virtual machine at Contoso. Azure collects its host metrics on its own: CPU, network and disk.
[600ms]
[concerned] But inside the guest operating system, the Windows events, performance counters and logs stay dark.
[600ms]
[confident] Seeing the box isn't the same as seeing what's running in it. Guest data needs extra setup.

## Step 2 · An agent reads from the inside

[curious] Software running inside the machine can read what the platform can't.
[600ms]
[confident] The Azure Monitor Agent collects guest operating system data from Azure and hybrid machines, and delivers it to Azure Monitor.
[600ms]
[reassuring] Without an agent, you can only collect data from the host.

## Step 3 · One agent to know: Azure Monitor Agent

[calm] There used to be several agents. Now there's one to know: the Azure Monitor Agent, or AMA.
[600ms]
[serious] It replaces the Log Analytics agent, also called MMA or OMS, which Microsoft retired on August thirty-first, twenty twenty-four.
[600ms]
[encouraging] If you're migrating, the Migration Helper workbook and the DCR Config Generator turn old workspace settings into data collection rules.

## Step 4 · Getting the agent onto machines

[curious] There are three ways to get the agent on. Install it from the portal, bring outside machines in with Azure Arc, or let Azure Policy do it at scale.
[600ms]
[confident] Once running, the agent signs in with the machine's managed identity.
[600ms]
[reassuring] System-assigned and user-assigned identities both work, and user-assigned suits large deployments.

## Step 5 · A rule decides: the data collection rule

[curious] Here's the key idea. The agent doesn't choose what to collect.
[600ms]
[confident] A data collection rule, or DCR, tells it what to gather, how to shape it, and where to send it.
[600ms]
[calm] A DCR is configuration, not a pipe. The agent downloads it, and Azure Monitor applies it.

## Step 6 · Four parts make up a DCR

[calm] A DCR has four parts. Data sources say what to collect.
[600ms]
[confident] Streams carry the data in a known shape, and an optional transformation filters it. Destinations say where it lands.
[600ms]
[curious] For example, Windows events use the Microsoft Event stream and land in the Event table. Counters land in the Perf table.

## Step 7 · Filter before you pay

[curious] A transformation is a KQL statement that filters or reshapes data before it's ingested into the workspace.
[600ms]
[confident] Drop what you'd never read, and there's less to ingest and less to store.
[600ms]
[calm] Ingestion-time transformations run in Azure Monitor. Multi-stage ones, still in preview, can also run on the agent and cut network traffic too.

## Step 8 · One rule, many machines

[calm] A DCR does nothing until an association links it to a machine, and that's the missing piece here.
[600ms]
[confident] One DCR can serve many machines, and one machine can follow several DCRs. Overall, it's a many-to-many relationship.
[600ms]
[reassuring] Remove an association, and that collection stops.

## Step 9 · Compose your own DCR

[excited] Now it's your turn. Switch data sources and destinations on and off.
[600ms]
[confident] The flow and a simplified DCR summary update as you go.
[600ms]
[curious] Notice the limits: syslog is Linux only, Windows events are Windows only, and performance counters can also go to metrics, in preview.

## Step 10 · Platform logs take another road

[calm] Azure resources send platform data without any agent. Here, a key vault does it on its own, and that's the point.
[600ms]
[confident] A diagnostic setting picks which data to export, and where it goes: a workspace, a storage account, or an event hub.
[600ms]
[serious] Resource logs aren't collected until you create one. Only platform metrics and the activity log arrive on their own.

## Step 11 · The quick start: VM insights

[curious] Want the quick start? Enable VM insights, and Azure does the wiring.
[600ms]
[confident] It installs the agent and creates a DCR with a predefined set of data.
[600ms]
[reassuring] Want more? Don't modify that DCR. Create your own DCRs to collect more.

## Step 12 · Agents and DCRs in one view

[calm] Guest data needs an agent. The data collection rule decides what, how and where.
[600ms]
[confident] Associations link rules to machines, and platform data uses diagnostic settings.
[600ms]
[proud] Keep those four ideas straight, and you can explain exactly how data reaches Azure Monitor.
