# Narrator Script — Monitor · Alerts and Action Groups

**Source animation:** [AlertsAndActionGroups.html](../../journeys/Monitor/AlertsAndActionGroups.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-overview>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-processing-rules>

---

## Step 1 · Something broke at 3 a.m.

[serious] Contoso Retail's checkout went down overnight. Mina, the on-call engineer, was asleep, and nothing told her.
[600ms]
[curious] So who should be told, how, and how often?
[600ms]
[confident] An alert is Azure Monitor telling a person or a script that your data says something is wrong. You hear it from Azure first, not from customers.

## Step 2 · What can Azure Monitor watch?

[calm] An alert starts with a signal, and each kind of signal has its own alert type.
[600ms]
[confident] Metric alerts evaluate numbers at regular intervals. Log search alerts run a KQL query. Activity log alerts match an event from the platform.
[600ms]
[reassuring] Prometheus alerts run PromQL. Picking the right type is half the job.

## Step 3 · Anatomy of an alert rule

[calm] An alert rule watches a signal on some resources. When its condition is met, an alert fires.
[600ms]
[confident] The fired alert then calls the action groups you chose.
[600ms]
[curious] If a rule watches several resources, each one is evaluated separately and fires its own alert. Fired alerts are read-only, and stored for thirty days.

## Step 4 · A threshold: fixed or learned

[calm] A static threshold is a number you pick. Choose it when you know the exact limit.
[600ms]
[intrigued] A dynamic threshold learns the usual pattern from the metric's history, so the normal three a.m. batch job stops paging anyone.
[600ms]
[confident] It can alert above an upper bound or below a lower bound. The numbers on screen are fictional.

## Step 5 · Action group: who gets told, what runs

[curious] An action group is a saved list of notifications and automated actions. The alert rule just points at it.
[600ms]
[confident] Email receivers are verified once with a one-time passcode, so test the group from the portal before you rely on it.
[600ms]
[reassuring] Secure webhooks use Microsoft Entra ID. And SMS and voice aren't available in every country or region.

## Step 6 · One action group, many rules

[calm] Different rules can point at the same action group.
[600ms]
[confident] Two rules that notify the same three engineers share one group. Change the on-call list once, and every rule follows.
[600ms]
[reassuring] Action groups also serve Azure Service Health and Azure Advisor, not only alert rules.

## Step 7 · One alert shape for every type

[curious] Metric, log and activity log alerts used to send different payloads.
[600ms]
[confident] The common alert schema gives email and automation one structure to read. Turn it on per receiver in the action group.
[600ms]
[calm] Use the essentials section to route alerts by resource group or severity. Alerts from VM insights don't support it.

## Step 8 · The life of an alert

[calm] While a problem lasts, a stateless alert keeps firing every time the condition is met.
[600ms]
[confident] A stateful alert fires once, sends nothing more, and then sends a resolved notification when the condition clears.
[600ms]
[serious] Activity log alerts are always stateless. Separately, you mark your own response, and it never changes by itself.

## Step 9 · Alert processing rules

[curious] A processing rule changes alerts as they fire. You can mute notifications during maintenance, or add an action group to many alerts at once.
[600ms]
[confident] These were called action rules before. Their scope must be in the same subscription as the rule.
[600ms]
[concerned] A new or changed rule can take up to thirty minutes before it starts working, so plan for that.

## Step 10 · Build an alert: pick a symptom

[excited] Time to build one. Choose what went wrong.
[600ms]
[confident] You'll see the signal, the condition and the action group Contoso would use.
[600ms]
[calm] The severities and group names are examples, not rules. Budgets can call an action group too, but they only notify. They don't stop spending.

## Step 11 · Page fewer people, page them better

[serious] Alert fatigue means real alerts get ignored. Each lever filters noise before it reaches Mina's phone.
[600ms]
[confident] Severities zero to four are yours to define. Reserve voice and SMS for the top levels, and send the rest to email or a dashboard.
[600ms]
[reassuring] Cost follows what you watch, so check the Azure Monitor pricing page for current numbers.

## Step 12 · Alerts and action groups: all in one

[calm] A signal feeds a rule. A processing rule shapes the alert, and an action group delivers it.
[600ms]
[confident] For exams, A Z one oh four lists alert rules, action groups and processing rules. A Z three oh five covers designing monitoring solutions, and A I two hundred covers the KQL behind a log search alert.
[600ms]
[proud] Keep the noise down, and Mina sleeps through everything except what matters.
