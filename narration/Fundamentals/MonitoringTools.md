# Narrator Script - Monitoring Tools

**Source animation:** journeys/Fundamentals/MonitoringTools.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview ; https://learn.microsoft.com/azure/app-service/monitor-app-service#insights ; https://learn.microsoft.com/azure/advisor/advisor-overview ; https://learn.microsoft.com/azure/service-health/overview -->

## Step 1 · Was it broken, or was it us?

[calm] A customer waits too long at checkout. Contoso has deployed the shop, but the symptom doesn't reveal whether the delay comes from its code, a dependency, or the underlying service.
[600ms]
[confident] The team needs evidence before changing anything. Monitoring turns that vague report into questions it can investigate.

## Step 2 · Collect the evidence

[calm] Metrics are numerical measurements over time, such as checkout duration. Logs are timestamped records of events, adding details about what happened.
[600ms]
[confident] Azure Monitor helps bring those signals together. Contoso uses the trend to find the slow period and the records to understand what happened during it.

## Step 3 · Look inside the checkout request

[calm] Before launch, Contoso configured its application to send telemetry to Application Insights, part of Azure Monitor. That preparation now links a checkout request with the inventory call it depends on.
[600ms]
[confident] This is application evidence, not something obtained merely by creating a resource. The relevant instrumentation must already be in place.

## Step 4 · Store it where you can query it

[calm] A Log Analytics workspace stores collected log data so Contoso can query it later. Instead of guessing from one symptom, Maya can examine records from the relevant period.
[600ms]
[confident] What she can find depends on what was collected and retained. Storing useful evidence is part of preparing to operate the shop.

## Step 5 · Follow the evidence

[calm] Maya follows the slow checkout to its inventory dependency. In this example, that call takes two point eight seconds, giving her a specific place to investigate.
[600ms]
[confident] The number is illustrative, not an Azure performance limit. She compares related logs before deciding whether code, capacity, or another dependency needs attention.

## Step 6 · Decide what is worth a phone call

[calm] Contoso creates an alert for sustained slow checkout and connects an action group. The alert evaluates the condition; the action group defines configured notifications or responses.
[600ms]
[confident] The support team receives the signal and investigates. An alert tells someone that attention is needed; it doesn't establish the cause or guarantee a fix.

## Step 7 · Improve before the next promotion

[calm] Azure Advisor reviews deployed resources and offers recommendations across areas such as reliability, security, performance, and cost. Contoso evaluates which recommendations make sense for its shop.
[600ms]
[confident] This supports ongoing improvement. Advisor recommendations aren't the diagnosis of this particular slow checkout and shouldn't replace the investigation.

## Step 8 · Is Azure reporting an issue?

[calm] Service Health reports Azure events relevant to Contoso's subscription. Resource Health focuses on an individual resource, providing another view of what may be affected.
[600ms]
[confident] Maya compares these signals with the application's evidence. A platform status alone doesn't prove that every part of the customer journey is working correctly.

## Step 9 · Monitoring - All in One

[calm] Contoso started with servers bought for its busiest promotion. It can now choose services, organize and connect resources, protect access, control waste, deploy consistently, and investigate customer problems.
[600ms]
[confident] Cloud operation is a continuing cycle: collect evidence, investigate, respond, and improve. The next promotion begins with a better-understood shop, not just more equipment.