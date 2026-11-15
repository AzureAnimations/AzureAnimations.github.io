# DNS & Private Link — narration

## Step 1 · A name, and who is allowed to use it

[calm] Your web app needs one storage account.
[400ms]
[curious] Today it asks for the public name, gets back a public address, and the traffic goes out to the internet and comes back — for two resources sitting in the same region.
[500ms]
[confident] Three pieces fix this, and they're constantly confused with one another. Azure DNS publishes names to the world. Private DNS answers names inside a VNet. And Private Link is what gives the resource a private address to answer with.

## Step 2 · Azure DNS public zones

[calm] A public zone is authoritative hosting for a domain name you own.
[500ms]
[confident] You point your registrar's name servers at Azure, and from then on Azure answers the world's questions about your domain.
[400ms]
[helpful] The records here are meant to be seen. Anyone, anywhere, can query them — that is the entire job. Nothing about a public zone is a security boundary.

## Step 3 · Azure Private DNS zones

[calm] A private zone looks almost identical, with one decisive difference.
[500ms]
[confident] Its records are not resolvable from the internet. They answer only from virtual networks you explicitly link to the zone.
[400ms]
[helpful] That link is the whole access model. An unlinked virtual network can't see the zone at all — there's no partial visibility, no "almost linked".

## Step 4 · Private endpoint

[confident] A private endpoint is a network interface, in your subnet, holding a private IP address, that maps to one specific instance of a PaaS service.
[500ms]
[calm] Azure also writes the record mapping that service's name to that address into a private DNS zone — which is why the two are always deployed together.
[400ms]
[helpful] This is the genuinely new part. Storage, SQL and the rest normally live behind public endpoints. A private endpoint pulls one of them into your address space — and lets you switch public access off entirely.

## Step 5 · What the lookup actually does

[calm] Follow the lookup, because this is where it clicks.
[500ms]
[confident] Your application keeps using the same public name it always used. Azure quietly redirects that name into a privatelink zone, and the private zone answers with the private IP.
[400ms]
[helpful] That's why connection strings never change. The application asks the same question — only the answer is different.

## Step 6 · The link is the whole mechanism

[curious] A private zone with perfect records in it does absolutely nothing until a virtual network is linked to it.
[500ms]
[calm] And if that network uses custom DNS servers, the link alone still isn't enough — you need a forwarder.
[400ms]
[confident] One more distinction worth holding: resolving a name is not the same as being allowed in. The privatelink chain is deliberately resolvable from anywhere. A successful lookup proves the resource exists, not that you can reach it.

## Step 7 · Same shape, opposite purpose

[calm] Public zone, private zone. Both are DNS zones with records in them.
[500ms]
[confident] Everything that actually matters is about who is allowed to ask.
[400ms]
[helpful] And you can host the same domain name as both — split-horizon — answering differently depending on where the question came from.

## Step 8 · It still resolves to a public IP

[concerned] Now the classic failure, and it's the single most common Private Link problem.
[500ms]
[calm] It is almost always DNS rather than the endpoint itself, and four causes cover nearly all of it.
[400ms]
[helpful] The symptom is distinctive: the portal shows the private endpoint approved, but your app still gets a public address — or a 403 from a service whose public access you already disabled.

## Step 9 · Publish, resolve, or reach

[confident] So, the takeaway. Each piece answers a different question.
[400ms]
[calm] Say out loud which question you're asking, and the right service picks itself.
[600ms]
[encouraging] And keep these two apart, because almost every confusing Private Link incident comes from mixing them up. DNS decides which address you get. The service firewall decides whether you get in.
