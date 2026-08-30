# Load balancing — narration

## Step 1 · One name, many servers

[calm] Users type one address. Behind it sit many instances — in one region, or several.
[500ms]
[confident] Something has to pick which one answers, and stop sending anyone to an instance that's down.
[400ms]
[curious] And Azure doesn't have one load balancer. It has four. Picking the wrong one isn't usually fatal — but it costs you latency, or features, or a single point of failure in one region.

## Step 2 · Two questions decide it

[confident] Microsoft categorises these services along exactly two axes.
[500ms]
[calm] Is the traffic global, or regional? And is it HTTP, or is it any protocol?
[400ms]
[helpful] Answer them in that order. Scope first — a global service in front of a regional one is a normal, healthy design. A regional service pretending to be global puts every user through one region.

## Step 3 · Four services, four quadrants

[calm] Put the two axes together, and each service lands in its own square.
[500ms]
[confident] This grid is the map. The next four steps walk it, one square at a time.
[400ms]
[helpful] Two honest caveats the grid flattens: Load Balancer also has a cross-region front end, and Application Gateway proxies TCP and TLS as well as HTTP. The grid shows where each is the recommended fit.

## Step 4 · Azure Load Balancer

[confident] Azure Load Balancer is a Layer-4 service for all TCP and UDP traffic.
[500ms]
[calm] It's built for very high throughput and ultra-low latency, and it passes packets through rather than terminating them.
[400ms]
[helpful] That's the key detail: the client's connection lands on the back-end server itself. It's what keeps the latency so low — and it's why it cannot read a URL path.

## Step 5 · Contoso, balanced at Layer 4

[calm] Here it is in a real architecture.
[500ms]
[confident] One public Load Balancer takes traffic off the internet, and two internal ones sit in front of the tiers behind it. Every hop here is TCP — nothing in this picture reads a URL.
[400ms]
[helpful] Count them: three load balancers, not one. Only the first has a public front end. The two internal ones hold private IPs, so nothing behind the web tier is reachable from the internet at all.

## Step 6 · Application Gateway

[confident] Application Gateway is a regional reverse proxy.
[500ms]
[calm] It terminates the connection, reads the HTTP request, and decides where it goes — by URL path, or by hostname.
[400ms]
[helpful] Because it terminates TLS, it can do what a Layer-4 balancer cannot: inspect the request, run a WAF over it, rewrite headers, and send different paths to different pools.

## Step 7 · One hostname, three back-end pools

[calm] One hostname resolves to a single Application Gateway.
[500ms]
[confident] It terminates TLS, runs the WAF over the request, then reads the path and picks a different pool for each part of the site.
[400ms]
[helpful] This is the move a Layer-4 balancer can't make. Slash-api and slash-images arrive on the same connection to the same address — only something that reads the HTTP request can separate them.

## Step 8 · Traffic Manager

[confident] Traffic Manager is a DNS-based traffic balancer.
[500ms]
[calm] It never touches your packets. It answers the name lookup with the endpoint the client should use, and then steps out of the way.
[400ms]
[helpful] That design is both its strength and its limit. Any protocol works, because it only answers DNS. But failover waits on DNS caching and TTL — so it can't fail over as fast as Front Door.

## Step 9 · One global profile, many regions

[calm] Contoso runs the same application in several regions.
[500ms]
[confident] Traffic Manager is global. It sits outside every region, owns the name, and answers each lookup with whichever region should serve that user.
[400ms]
[helpful] Follow the numbers. Steps one and two are DNS, drawn dashed because no application traffic moves. Step three is the real connection — and it goes straight to the region. Traffic Manager is never in the data path.

## Step 10 · Azure Front Door

[confident] Front Door is an application delivery network.
[500ms]
[calm] Global Layer-7 load balancing, plus site acceleration, delivered from Microsoft's edge close to the user.
[400ms]
[helpful] Unlike Traffic Manager it carries the request — so it can fail over in seconds rather than waiting for DNS, and it can cache. Think of it as the front of the whole application, worldwide.

## Step 11 · One edge in front of the whole world

[calm] Every user, wherever they are, lands on the nearest Microsoft edge location.
[500ms]
[confident] Front Door inspects the request, answers from cache when it can, and otherwise forwards it to the healthiest origin.
[400ms]
[helpful] Hold this next to the Traffic Manager diagram. Here the traffic does pass through the service — which is exactly why it can cache, run a WAF, and move a user to another region in seconds instead of waiting for a DNS record to expire.

## Step 12 · They stack, they do not compete

[confident] Most real architectures use more than one of these.
[500ms]
[calm] Each layer does the job the layer below it cannot — global reach, then regional Layer-7 routing, then raw distribution across machines.
[400ms]
[helpful] A single tier rarely needs all four. But a serious public application often ends up with Front Door in front of Application Gateway, and Load Balancer behind that.

## Step 13 · Scope first, then protocol

[confident] So, the takeaway.
[400ms]
[calm] Ask where the traffic has to be balanced, then how deep the service has to look. Those two answers pick the service — everything else is detail.
[600ms]
[encouraging] When you're unsure, say the requirement out loud. "Global, web, needs caching" is Front Door. "Regional, SQL, lowest latency" is Load Balancer. The sentence names the service.
