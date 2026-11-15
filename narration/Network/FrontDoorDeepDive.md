# Narrator Script — Network · Azure Front Door: endpoints, origins, rules and private origins

**Source animation:** [FrontDoorDeepDive.html](../../journeys/Network/FrontDoorDeepDive.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/frontdoor/front-door-routing-architecture>
- <https://learn.microsoft.com/azure/frontdoor/private-link>
- <https://learn.microsoft.com/azure/web-application-firewall/afds/afds-overview>

---

## Step 1 · What Front Door adds

[calm] Three services, three jobs. Traffic Manager answers with DNS, at the domain level, so failover waits on caching and time to live.
[600ms]
[confident] Application Gateway is a regional layer seven proxy inside your network.
[600ms]
[impressed] Azure Front Door is the global layer seven entry point at Microsoft's edge, with TLS offload, path-based routing, caching and fast failover.

## Step 2 · Standard vs Premium: what each buys

[curious] Front Door has two tiers. Both route globally, cache, run the rules engine and support WAF custom rules.
[600ms]
[confident] Only Premium adds Microsoft-managed WAF rule sets, bot protection, and Private Link to an origin.
[600ms]
[encouraging] Classic is being retired, so start new designs on Standard or Premium. Click a need in the matrix to see which tier covers it.

## Step 3 · Endpoints, routes and origin groups

[calm] An endpoint groups the routes for your domains. Front Door generates a domain name for it, and you can add your own custom domains.
[600ms]
[confident] A route matches a domain and a path pattern, then sends the request to an origin group.
[600ms]
[reassuring] An origin group is a set of origins, such as an App Service app, storage, or any host, probed and load balanced together.

## Step 4 · Health probes and latency routing

[curious] Every edge location probes each origin. An unhealthy origin drops out of the choice.
[600ms]
[confident] Front Door then narrows things in order: healthy origins, then priority, then latency, then weight.
[600ms]
[reflective] The default method is lowest latency, so the request goes to the fastest healthy origin. The numbers here are illustrations.

## Step 5 · Caching and compression

[calm] With caching switched on for a route, an edge keeps a copy of a GET response.
[600ms]
[confident] The next shopper gets it from the edge, and the origin isn't called. Compression shrinks the response too.
[600ms]
[serious] Never cache personal content. Use a separate route with caching off for anything dynamic, and purge paths when you need a refresh.

## Step 6 · Traffic acceleration: edge and split TCP

[curious] First, DNS sends the shopper to a good edge location.
[600ms]
[confident] That edge ends the shopper's TCP connection close by. This is split TCP, so the slow setup round trips stay short.
[600ms]
[impressed] A separate long connection to the origin is opened ahead of time and reused across many shoppers.

## Step 7 · TLS at the edge and end to end

[calm] Front Door ends the shopper's TLS at the edge, applies routing and rules, then opens a second TLS connection to the origin.
[600ms]
[confident] Set HTTPS as the forwarding protocol to get end-to-end encryption.
[600ms]
[reassuring] For a custom domain, use a managed certificate, or bring your own from Key Vault. T L S one point two and one point three are supported.

## Step 8 · Rules: rewrite, redirect, headers

[curious] A rule set runs after the WAF and the route match, before the request goes on.
[600ms]
[confident] A rule has match conditions that must all be true, plus actions.
[600ms]
[encouraging] Common actions are a URL redirect, a URL rewrite, and changes to request or response headers.

## Step 9 · Secure an origin with Private Link

[calm] Premium can reach an origin over Private Link, which is the private option.
[600ms]
[confident] Front Door asks for a private endpoint, the request shows up at the origin as pending, and you approve it.
[600ms]
[proud] After that, traffic stays on the Microsoft backbone, and the origin doesn't need to be reachable from the public internet.

## Step 10 · WAF policy and rule sets

[calm] A WAF policy checks every request at the edge, close to the source.
[600ms]
[confident] Custom rules run first, in priority order, then the managed rule sets. Standard supports custom rules only, and Premium adds managed sets and bot protection.
[600ms]
[proud] Run in detection mode to log, or prevention mode to act, and attach it at the profile, domain or route. That covers the A Z seven hundred Front Door skill.
