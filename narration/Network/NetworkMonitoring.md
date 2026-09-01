# Network monitoring — narration

## Step 1 · "It cannot connect"

[calm] A VM cannot reach a database.
[400ms]
[curious] Nothing has errored, nothing is obviously down, and four different things could be blocking it. Guessing is expensive.
[500ms]
[confident] So split the tooling by the question you're actually asking. Network Watcher answers "why is this connection failing, right now?". Azure Monitor answers "what has my network been doing?".

## Step 2 · Network Watcher

[confident] Network Watcher is a regional platform service that inspects your live network.
[500ms]
[calm] It's enabled automatically in every region where you create a virtual network — there's nothing to deploy before you can use it.
[400ms]
[helpful] Its real value is that it reads the actual effective configuration, not what you believe you deployed. That gap between intent and reality is where most network incidents live.

## Step 3 · Three tools, in this order

[calm] Microsoft recommends a specific sequence here, and it's worth following.
[500ms]
[confident] Each step is cheaper than the next, and most problems are solved before you reach the end.
[400ms]
[helpful] Start with IP flow verify — because it doesn't just say allowed or denied. It names the rule responsible. That one answer ends most investigations before they start.

## Step 4 · Virtual network flow logs

[confident] Flow logs write a line of metadata for every flow — source, destination, port, protocol, and whether it was allowed or denied.
[500ms]
[calm] That record is what lets you answer questions about last Tuesday.
[400ms]
[concerned] Use VNet flow logs, not NSG flow logs. NSG flow logs are retiring — none can be created after the thirtieth of June 2025, and existing ones must be migrated before the thirtieth of September 2027.

## Step 5 · Traffic Analytics

[calm] Flow logs on their own are millions of rows.
[500ms]
[confident] Traffic Analytics aggregates them into something you can actually read — top talkers, open ports, traffic between regions, and where flows are being denied.
[400ms]
[helpful] It needs a Log Analytics workspace. That's the same workspace Azure Monitor uses — which is the point where network data joins the rest of your telemetry and becomes queryable with KQL.

## Step 6 · Connection Monitor

[calm] Everything so far is either after the fact, or on demand.
[500ms]
[confident] Connection Monitor keeps probing a path on a schedule, so you find out that it broke without anyone having to notice.
[400ms]
[helpful] This is what turns "someone reported it" into "we were alerted". It's the right tool for any path with an SLA attached — a hybrid link, or a dependency you don't own.

## Step 7 · Azure Monitor Network Insights

[confident] Network Insights is the Azure Monitor view that gathers all of this into one place.
[500ms]
[calm] A live topology, health and metrics for every network resource, and links straight into the diagnostic tools.
[400ms]
[helpful] Topology, health and metrics appear with no configuration at all. The connectivity and traffic tabs stay empty until you switch on Connection Monitor and flow logs — so an empty panel usually means "not enabled", not "nothing to report".

## Step 8 · Which one answers your question

[calm] These two overlap in the portal, which is exactly why they get confused.
[500ms]
[confident] The clean way to separate them is by the question you arrived with.
[400ms]
[helpful] And they're not competing products. Network Watcher produces much of what Azure Monitor displays — flow logs and Connection Monitor are Network Watcher features whose data lands in a Log Analytics workspace.

## Step 9 · Diagnose now, or watch always

[confident] So, the takeaway.
[400ms]
[calm] One set of tools tells you why something is broken this minute. The other tells you what has been happening, and warns you next time. You want both — but you turn them on at different moments.
[600ms]
[encouraging] And the one thing to do before you need it: turn on VNet flow logs and Traffic Analytics now. Every other tool here works on demand. These two only know about traffic that happened after you enabled them.
