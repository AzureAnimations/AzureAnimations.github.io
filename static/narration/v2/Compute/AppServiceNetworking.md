# Narrator Script — Azure PaaS Compute · 03 · App Service Networking

**Source animation:** `static/v2/Compute/AppServiceNetworking.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · intro

[confident] Let's talk networking — and the one idea that makes all of it click.
[600ms]
[calm] By default, your App Service is reachable from the public internet, and it can call out to any endpoint on the internet.
[700ms]
[serious] Traffic has two directions — inbound, coming to your app, and outbound, going from it. Inbound and outbound features are different tools; keep them straight, and everything else follows.

## Step 2 · inbound

[confident] First, inbound. Access restrictions are an allow-and-deny list that sits in front of your app.
[600ms]
[calm] They filter incoming requests on the front-end, upstream of your code, using I-P rules and service tags — evaluated top to bottom.
[700ms]
[reassuring] Think of it as a firewall for inbound web traffic: allow your office and your Front Door, and deny everyone else.

## Step 3 · privateendpoint

[confident] Want to go further and take your app off the public internet entirely? Add a private endpoint.
[600ms]
[calm] Through Azure Private Link, it gives your app a private address inside your own virtual network.
[700ms]
[reassuring] Turn public access off, and the app is reachable only from your network. It's inbound-only, and it helps guard against data leaving where it shouldn't.

## Step 4 · outbound

[confident] Now flip directions — outbound, the calls your app makes.
[600ms]
[calm] Virtual network integration routes that outbound traffic through a delegated subnet, so your app can reach databases, storage, and private endpoints inside your V-Net.
[700ms]
[serious] It's the outbound counterpart to a private endpoint: this lets your app call private resources — it does not receive traffic.

## Step 5 · nat

[confident] One more outbound trick. Attach a NAT gateway to that integration subnet.
[600ms]
[calm] Now all of your app's outbound traffic leaves through a single, dedicated I-P address — and SNAT port exhaustion under heavy load simply goes away.
[700ms]
[reassuring] The payoff: partners can allow-list one stable address, instead of a whole shifting range.

## Step 6 · recap

[proud] So — two directions, cleanly separated. Access restrictions and private endpoints guard the way in; virtual network integration and a NAT gateway shape the way out.
[700ms]
[encouraging] Just remember the golden rule — inbound tools can't fix outbound problems, and the reverse. Match the feature to the direction.
