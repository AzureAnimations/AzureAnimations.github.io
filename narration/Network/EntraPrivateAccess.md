# Narrator Script — Network · Microsoft Entra Private Access and Private Link services

**Source animation:** [EntraPrivateAccess.html](../../journeys/Network/EntraPrivateAccess.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/azure/private-link/private-link-service-overview>
- <https://learn.microsoft.com/entra/global-secure-access/how-to-configure-per-app-access>

---

## Step 1 · Two requests, two tools

[calm] Contoso has two private-access requests. Maya works from home and needs one internal app.
[600ms]
[curious] And a partner needs to reach a service that Contoso runs in Azure. Each request needs its own private path.
[600ms]
[confident] Microsoft Entra Private Access answers the first one. An Azure Private Link service answers the second.

## Step 2 · The VPN problem

[calm] A network-level VPN puts the whole device on the network.
[600ms]
[concerned] Maya only needs one app, but now every server on that network is within her reach. That's a lot more access than the job calls for.
[600ms]
[confident] Private Access works per application segment instead. This is the general idea of network-level access, not a claim about every VPN product.

## Step 3 · Microsoft Entra Private Access

[curious] Maya's device runs the Global Secure Access client. It sends requests for private apps through the service, so there's no VPN to connect.
[600ms]
[confident] You list the names and addresses you treat as private, and requests to an app's destinations are routed to that app.
[600ms]
[reassuring] She can't connect to anything else on your network.

## Step 4 · The connector

[calm] A connector is a small agent that runs on a Windows Server inside your network.
[600ms]
[confident] It opens outbound connections to the service, so you open no inbound port at all. Users reach the cloud service, which routes traffic to the app through the connector.
[600ms]
[serious] For high availability, use at least two connectors in the group.

## Step 5 · Define an app segment

[curious] A segment says what the app is: a fully qualified domain name or an IP address, plus its ports.
[600ms]
[confident] It can be a wildcard name, an address range, and ports can be single values or ranges. You add segments to an enterprise app and choose its connector group.
[600ms]
[encouraging] Then you assign the users and groups who may use it.

## Step 6 · Conditional Access on a private app

[calm] A private app is an enterprise app, so Conditional Access applies to it.
[600ms]
[confident] A policy can ask for multifactor authentication or a compliant device before the user gets in.
[600ms]
[reassuring] Start the policy from the app in Global Secure Access, and the app is already the target. Exclude emergency access accounts, and begin in report-only mode.

## Step 7 · Quick Access or per-app access?

[curious] There are two ways to set it up. Quick Access is one app that covers your main group of private resources.
[600ms]
[confident] A per-app Global Secure Access app gives only a subset of resources its own rules.
[600ms]
[reflective] Think of Quick Access as a transition state. Use it to replace the VPN, then move to per-app access for finer control. Each one uses a connector group.

## Step 8 · Publish a Private Link service

[calm] Now the provider side. Put your service behind a Standard Load Balancer.
[600ms]
[confident] Then create a Private Link service on its frontend IP, and Azure generates an alias that you can share.
[600ms]
[serious] Basic Load Balancer won't work here, and the service, the virtual network and the load balancer must all be in the same region.

## Step 9 · Who may connect: NAT, visibility, approval

[curious] Three controls decide who may connect. Visibility decides who can even request a connection, from role-based access only, to specific subscriptions, to anyone with your alias.
[600ms]
[confident] Auto-approval lets trusted subscriptions skip your review. Other requests wait as Pending until you approve or reject them.
[600ms]
[reflective] NAT IPs come from your own subnet, so your service sees a NAT address as the source, not the consumer's own.

## Step 10 · The partner's private endpoint

[calm] On the consumer side, the partner creates a private endpoint in its own virtual network.
[600ms]
[confident] It points that endpoint at your service by alias or resource identifier. Using the alias means manual approval, so the connection starts as Pending.
[600ms]
[reassuring] If the partner's subscription is on your auto-approval list, it's approved straight away. Only approved connections can send traffic.

## Step 11 · Which one for which request?

[curious] Six scenarios, two tools. Watch each one land where it belongs.
[600ms]
[confident] If it's staff reaching your private apps based on who they are, that's Private Access.
[600ms]
[proud] If it's publishing your own service to someone else's private endpoint, that's a Private Link service.

## Step 12 · Recap: identity in, private endpoint out

[calm] Private Access brings staff to one private app, by identity, with no VPN in the way.
[600ms]
[confident] A Private Link service lets a partner reach your service through its own private endpoint.
[600ms]
[proud] Together they cover two bullets of the S C five hundred study guide, and you now know which tool answers which request.
