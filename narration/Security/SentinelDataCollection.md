# Narrator Script — Security · Microsoft Sentinel data collection: workspaces, connectors, Syslog, CEF and Windows events

**Source animation:** [SentinelDataCollection.html](../../journeys/Security/SentinelDataCollection.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/quickstart-onboard>
- <https://learn.microsoft.com/azure/sentinel/roles>
- <https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy>
- <https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview>

---

## Step 1 · Sentinel is blind until data arrives

[calm] Contoso just turned on Microsoft Sentinel, but its workspace is empty.
[600ms]
[serious] Sentinel can only detect what it can see. With no data, there's nothing to alert on.
[600ms]
[determined] So Priya starts with one data connector. This lesson covers event collection in Sentinel from the S C five hundred skills. All names here are fictional.

## Step 2 · Create the workspace and add Microsoft Sentinel

[calm] Sentinel runs on a Log Analytics workspace. Priya creates the workspace in a resource group, then adds Microsoft Sentinel to it.
[600ms]
[confident] You can run Sentinel on more than one workspace, but data is isolated to a single workspace.
[600ms]
[reassuring] To enable Sentinel, you need the Contributor role on the subscription that holds the workspace.

## Step 3 · Roles on the workspace

[calm] Azure roles control who can do what in Sentinel. Pick the lowest role that does the job.
[600ms]
[confident] Assign it on the resource group of the workspace, so the access covers the workspace and nothing wider.
[600ms]
[reflective] Playbook Operator and Automation Contributor are separate roles for automation, and they aren't covered in this lesson.

## Step 4 · Content hub: install, then configure

[curious] The content hub packages connectors, rules and workbooks into solutions.
[600ms]
[confident] To use one content item, you install the whole solution. Installing a solution adds the connector, but you still have to configure it.
[600ms]
[reassuring] Installing and managing solutions needs the Microsoft Sentinel Contributor role on the resource group.

## Step 5 · Connectors for Azure resources

[calm] Azure-side sources have built-in connectors. Here we see subscription activity, Microsoft Entra ID logs, and Defender for Cloud alerts.
[600ms]
[serious] Be aware that the sign-in logs from Entra need an Entra ID P one or P two license.
[600ms]
[curious] The tenant-based Defender for Cloud connector is in preview, and the subscription-based one is the legacy connector.

## Step 6 · Syslog from Linux machines

[calm] Priya's Linux servers write to syslog. The connector installs the Azure Monitor Agent on them.
[600ms]
[confident] A data collection rule then decides what is collected, by facility and by minimum severity.
[600ms]
[curious] Picking a minimum level also collects every higher severity. Choose the error level, and you also get critical, alert and emergency.

## Step 7 · CEF from appliances

[calm] Appliances such as firewalls send Common Event Format messages. They send them to a Linux log forwarder that runs the agent for them.
[600ms]
[curious] CEF is an extension of Syslog built for SIEM tools. It adds a header with vendor, product, version, event class, severity and ID, plus extensions.
[600ms]
[confident] Plain Syslog messages land in the Syslog table, while CEF lands in CommonSecurityLog.

## Step 8 · Windows Security events

[calm] Windows Security events can come straight from each machine with a data collection rule, or through Windows Event Forwarding to a collector.
[600ms]
[encouraging] Try both paths and compare them.
[600ms]
[confident] The agent filters at the source, so only the events you choose are ingested. Machines outside Azure need Azure Arc first.

## Step 9 · Custom log tables

[calm] When no built-in table fits, Contoso creates a custom table from a sample record.
[600ms]
[confident] Then it sends data into that table through a data collection rule.
[600ms]
[curious] Data can arrive through the Logs Ingestion API, or from text files with the Custom Logs connector, which is in preview. You need a sample record to define the schema.

## Step 10 · Retention and table plans

[calm] Not all data needs the same treatment. Keep fresh data hot for alerts and hunting.
[600ms]
[confident] Keep older data in low-cost long-term storage, and set retention per table.
[600ms]
[reflective] In the Defender portal you manage Sentinel and custom tables, while Basic plan tables are managed from the Log Analytics workspace.

## Step 11 · Query Purview Audit in Defender XDR

[curious] Audit records for Microsoft 365 activity come from Microsoft Purview Audit. Priya reaches them from the Defender portal, with filters or with KQL.
[600ms]
[serious] Auditing must be turned on in the Microsoft Purview portal first.
[600ms]
[confident] To open the Audit page, you need the View-Only Audit Logs or Audit Logs role in Exchange Online.

## Step 12 · Recap

[calm] Collection is a chain: workspace, connector, rule, table, retention. If one link is missing, data doesn't arrive or isn't kept.
[600ms]
[confident] Each link maps to a piece of the event collection objective you just walked through.
[600ms]
[proud] The S C five hundred skills change over time, so always read the current study guide on Microsoft Learn.
