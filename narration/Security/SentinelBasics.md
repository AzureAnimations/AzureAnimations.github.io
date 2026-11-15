# Narrator Script — Security · Microsoft Sentinel basics

**Source animation:** [SentinelBasics.html](../../journeys/Security/SentinelBasics.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/overview>
- <https://learn.microsoft.com/azure/sentinel/connect-data-sources>
- <https://learn.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules>
- <https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal>

---

## Step 1 · Thousands of alerts, one team

[calm] Contoso's identities, cloud, network and devices all raise alarms, and a small security team can't read them all.
[600ms]
[curious] It needs a SIEM to see, which collects security data and detects threats, and a SOAR to act, which automates the routine response.
[600ms]
[confident] Microsoft Sentinel is a cloud-native SIEM that's also a SOAR platform. Contoso and all the data here are fictional.

## Step 2 · Connectors bring the signals in

[calm] Sentinel starts out empty. A data connector pulls signals from a source and lands them in one place.
[600ms]
[confident] Connectors usually arrive in content hub solutions, so you install the solution, then configure its connector.
[600ms]
[serious] Support for the legacy HTTP Data Collector API ends on September fourteenth, twenty twenty-six, so custom sources should use the Logs Ingestion API or the Codeless Connector Framework.

## Step 3 · One workspace holds the data

[curious] Sentinel isn't a separate database. You turn it on for a Log Analytics workspace.
[600ms]
[calm] Every connector writes into that workspace's tables, and retention and billing follow the workspace.
[600ms]
[reflective] That's why where you put the workspace matters, and we'll come back to it in the design step.

## Step 4 · Analytics rules look for threats

[calm] An analytics rule is a standing question asked of your data. When the answer is yes, it raises an alert.
[600ms]
[confident] Different rule types ask in different ways, and the best place to start is a rule template from a content hub solution, then tune it.
[600ms]
[curious] In the Defender portal, Microsoft recommends custom detections for creating new rules.

## Step 5 · A match becomes an alert with entities

[calm] When the rule's query returns results past the threshold, the rule raises an alert with a severity from informational to high.
[600ms]
[confident] Entity mapping tells Sentinel which fields are the account, the IP address or the host.
[600ms]
[impressed] Those entities are the building blocks for incident grouping, the investigation graph and automation.

## Step 6 · Related alerts group into one incident

[curious] Alerts about the same entities are correlated into a single incident.
[600ms]
[confident] That's one case file with a severity, a status and an owner, instead of a pile of separate alerts.
[600ms]
[reassuring] It also holds comments, tasks and an activity log, so the whole team works from one place.

## Step 7 · Investigate the incident, hunt for the next one

[calm] The investigation graph shows what's connected, in time order, so an analyst can see how far an attack reached.
[600ms]
[curious] Hunting is different. Hunting queries ask questions before any alert fires, and bookmarks keep the evidence you find.
[600ms]
[confident] Notebooks extend hunting with Python, machine learning and visualization.

## Step 8 · Automation does the routine work

[calm] An automation rule reacts to an incident right away, in the order you set. It can tag, assign or close incidents without any playbook.
[600ms]
[confident] When a job needs more steps, it hands off to a playbook, built as an Azure Logic Apps workflow.
[600ms]
[serious] Attaching playbooks directly to analytics rules is the old method. Use an automation rule instead.

## Step 9 · Follow one attack through Sentinel

[curious] Let's follow Contoso's fictional account takeover, hop by hop, and see what Sentinel does at each one.
[600ms]
[calm] A signal arrives, a rule fires, an incident forms, and automation responds.
[600ms]
[reflective] Disabling the account is containment, not the end. The analyst still investigates how far it spread.

## Step 10 · Watch the whole picture: workbooks and UEBA

[calm] Workbooks turn the data into dashboards for the team. Built-in templates appear once a data source is connected, and you can build your own.
[600ms]
[intrigued] UEBA learns what's normal for each user and host, comparing activity with their own history, their peers and the organization.
[600ms]
[confident] It then scores the odd ones. Enable it and connect sources such as Microsoft Entra ID.

## Step 11 · Design it: placement, cost, tenants, access

[calm] Four decisions shape a Sentinel design: where the workspace lives, what you ingest and keep, which tenants you cover, and who may do what.
[600ms]
[confident] Think of Sentinel when you must detect and respond to threats across many sources. For operational health, think of Azure Monitor alerts.
[600ms]
[reassuring] Assign Sentinel roles at the resource group that holds the workspace.

## Step 12 · Sentinel is moving to the Defender portal

[curious] Sentinel has a new home. It's generally available in the Microsoft Defender portal, with the same workspace and the same KQL.
[600ms]
[serious] The Azure portal stops supporting it after March thirty-first, twenty twenty-seven, so existing customers should plan the transition.
[600ms]
[calm] Automation behaves a little differently, because incident titles can change after correlation. Use analytics rule names and tags as conditions.

## Step 13 · Signals to incidents to action

[calm] Sentinel shrinks thousands of raw signals into a few incidents someone can act on.
[600ms]
[confident] Four moves do it: connect the data, detect with rules, investigate and hunt, then automate the response.
[600ms]
[proud] Sentinel isn't named in either study guide, but A Z three oh five asks you to recommend logging and monitoring, and A Z one oh four covers Azure Monitor logs and alerts.
