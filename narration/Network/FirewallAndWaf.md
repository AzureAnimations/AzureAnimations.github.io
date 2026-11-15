# Firewall & WAF — narration

## Step 1 · Two firewalls, two different jobs

[calm] Azure has a service called Firewall, and a service called Web Application Firewall.
[400ms]
[curious] The names suggest you're meant to choose. You're not — they read completely different things about a packet.
[500ms]
[confident] The cleanest way to keep them apart: one asks "should this machine be talking to that place at all?". The other asks "is this HTTP request trying to attack my application?".

## Step 2 · Web Application Firewall

[confident] A WAF policy inspects the HTTP request itself — the URI, the headers, the cookies, the body.
[500ms]
[calm] It matches all of that against rule sets derived from the OWASP project.
[400ms]
[helpful] And it isn't a standalone service. A WAF policy attaches to Application Gateway for a regional application, or to Front Door to stop attacks out at the edge, before they ever reach your region.

## Step 3 · Detection logs. Prevention blocks.

[calm] Every WAF policy runs in one of two modes, and the difference is not subtle.
[500ms]
[confident] Detection writes a log line and lets the request through. Prevention stops it with a 403.
[400ms]
[concerned] The trap is shipping and forgetting. Detection mode provides no protection at all. It exists so you can find false positives before they become outages — not as a permanent setting.

## Step 4 · Azure Firewall

[confident] Azure Firewall is a managed, stateful network firewall for the whole virtual network estate.
[500ms]
[calm] It sits in the hub, and traffic is routed through it — in from the internet, out to the internet, and between spokes.
[400ms]
[helpful] The word to hold on to is direction. A WAF looks at requests coming in to one application. Azure Firewall governs north-south and east-west — including the traffic your own VMs originate.

## Step 5 · Nothing reaches the firewall by accident

[curious] Here's the part people miss. Deploying the firewall doesn't route anything to it.
[500ms]
[calm] Azure gives every subnet system routes you can't delete, and left alone they send internet-bound traffic straight out. A route table is how you overrule that and point traffic at the firewall instead.
[400ms]
[helpful] When two routes match, Azure takes the longest prefix first, then compares source — user-defined beats BGP beats system. That order explains the classic surprise: a default route does not capture subnet-to-subnet traffic, because the VNet system route is more specific.

## Step 6 · Three rule collections, one order

[confident] Azure Firewall rules come in three kinds, and they're always evaluated in the same sequence.
[500ms]
[calm] DNAT first, then network rules, then application rules. Knowing that order explains most surprising results.
[400ms]
[concerned] Because network rules are evaluated before application rules, a broad network allow can quietly bypass the FQDN filtering you carefully wrote — the packet is already permitted before the application rules are consulted.

## Step 7 · The distinction, in one table

[calm] Microsoft states the difference directly.
[500ms]
[confident] Read a row, and it's obvious which service that row belongs to.
[400ms]
[helpful] The last row is the one that settles arguments: they block different attacks. Neither one would have caught what the other catches.

## Step 8 · In a hub, they sit in series

[calm] In a real hub design, they aren't alternatives at all — they're in series.
[500ms]
[confident] A request from the internet is translated and filtered at the network level first, then handed to the gateway where the WAF reads the HTTP itself, and only then reaches the workload.
[400ms]
[helpful] Each hop removes something the next one cannot see. By the time the request arrives at your application, both "who is allowed to talk" and "what is this request trying to do" have been answered.

## Step 9 · The mistakes that cost you

[concerned] Both services fail quietly rather than loudly.
[500ms]
[calm] Nothing errors. You simply aren't protected in the way you assumed.
[400ms]
[confident] The most common one is also the most invisible. If your origin still accepts traffic from anywhere, an attacker can skip Front Door entirely, reach the origin IP directly — and every WAF rule you wrote is bypassed.

## Step 10 · One reads requests, one reads traffic

[confident] So, the takeaway, in one sentence.
[400ms]
[calm] One reads requests. One reads traffic. That resolves nearly every question about which service you need — and the honest answer is usually both, in series.
[600ms]
[encouraging] If you can only do one thing today: put a WAF in Prevention mode in front of anything public, and lock the origin so nobody can walk around it.
