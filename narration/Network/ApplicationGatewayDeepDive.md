# Narrator Script — Network · Application Gateway: Listeners, Rules, Settings and Rewrites

**Source animation:** [ApplicationGatewayDeepDive.html](../../journeys/Network/ApplicationGatewayDeepDive.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/application-gateway/configuration-overview>
- <https://learn.microsoft.com/azure/web-application-firewall/ag/ag-overview>

---

## Step 1 · A reverse proxy in its own subnet

[calm] Application Gateway is a layer seven reverse proxy for web traffic, and it lives in your virtual network.
[600ms]
[confident] Clients never talk to the server directly. The gateway ends the client connection, then opens a brand new one to a server in the backend pool.
[600ms]
[reassuring] It gets a dedicated subnet of its own, and every instance takes one private address, so leave room to scale.

## Step 2 · v2 SKU, scaling and capacity units

[curious] Start by picking a version two SKU, either Standard v2 or WAF v2. The older version one has been retired.
[600ms]
[confident] Then choose how it scales: a fixed instance count, or autoscale between a minimum and a maximum.
[600ms]
[reflective] Capacity units measure what the gateway really uses across compute, connections and throughput, and the highest of the three is the one that counts.

## Step 3 · Frontend IP and listeners

[calm] The frontend IP is where clients arrive. It can be public, private, or both.
[600ms]
[curious] A listener then checks the port, the protocol and the host name. A basic listener accepts any host, while a multi-site listener matches on the host name, so several sites can share one address.
[600ms]
[serious] On version two, rule priority sets the order, so give wildcard listeners a larger number than site-specific ones.

## Step 4 · Backend pools

[calm] A backend pool is the group of servers that receive the traffic.
[600ms]
[confident] Members can be virtual machines, a scale set, an App Service app, or any IP address or domain name that you choose.
[600ms]
[reassuring] You link the pool to one or more routing rules, and when a rule matches, the gateway sends the request only to healthy members.

## Step 5 · HTTP settings

[curious] Backend settings tell the gateway how to talk to the servers: the protocol, the port, and how long to wait for an answer.
[600ms]
[confident] Cookie affinity keeps a user on the same server, using a cookie the gateway manages for you.
[600ms]
[serious] Watch the host name too. You can override it, but the best practice is to keep the same host name from client to server.

## Step 6 · Health probes

[curious] Probes decide which servers receive traffic. With no custom probe, the gateway just asks for the root path, and any answer from two hundred to three ninety-nine counts as healthy.
[600ms]
[confident] A custom probe checks a real health path, on your host, with your interval, and can match on status code or response body.
[600ms]
[determined] Probe something that exercises the app's dependencies, and an unhealthy server drops out of rotation automatically.

## Step 7 · Routing rules

[calm] A routing rule ties a listener to a backend pool and its settings.
[600ms]
[confident] A basic rule sends everything to one pool. A path-based rule sends different URL paths to different pools, with a default pool for anything left over.
[600ms]
[encouraging] Each rule has a unique priority, and one is checked first. Use the buttons to compare the two types.

## Step 8 · TLS termination and end-to-end TLS

[calm] For TLS termination, you add a certificate to an HTTPS listener. The gateway decrypts the request, applies its rules, and may send plain HTTP onward.
[600ms]
[confident] For end-to-end TLS, you also choose HTTPS in the backend setting, so the gateway opens a fresh encrypted session to a server that has its own certificate.
[600ms]
[reassuring] If that certificate comes from a private authority, upload the root certificate. Clients and backends need TLS one point two or higher.

## Step 9 · Rewrite rule sets

[curious] A rewrite set changes requests and responses as they pass through. It can touch headers, the URL path and the query string.
[600ms]
[confident] Conditions decide when it applies, and actions add, set or remove headers. Typical uses are adding HSTS or hiding a header that reveals the backend.
[600ms]
[impressed] Re-evaluating the path map even lets a rewritten path pick a different pool. It needs version two, and a rule can have only one rewrite set.

## Step 10 · WAF, and when to add Front Door

[calm] WAF v2 adds a web application firewall to the gateway, inside your region.
[600ms]
[confident] A WAF policy holds managed rules based on the OWASP Core Rule Set, plus your own custom rules, which are checked first.
[600ms]
[proud] Application Gateway stays regional. When you need a global entry point, put Azure Front Door in front, with a gateway behind it in each region. That is the heart of the A Z seven hundred skill.
