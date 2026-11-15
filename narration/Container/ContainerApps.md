# Narrator Script — Azure Containers · 04 · Azure Container Apps

**Source animation:** `static/v2/Container/ContainerApps.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics, and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · problem

[confident] Contoso ran contoso-orders version one on Azure Container Instances, and it worked — until it didn't.
[600ms]
[concerned] ACI runs a fixed set of containers: no autoscaling, no load balancer, no zero-downtime updates.
[700ms]
[optimistic] When traffic spikes or you need safe releases, you step up to Azure Container Apps — serverless containers that scale for you.

## Step 2 · replica

[confident] In Container Apps, your app runs as replicas — each replica is your container with its own CPU and memory.
[600ms]
[calm] On the Consumption plan a replica gets a quarter to four vCPU, and half to eight gibibytes.
[700ms]
[impressed] Set a minimum and a maximum, and Azure adds or removes replicas with load — from zero all the way to a thousand.

## Step 3 · httpscale

[confident] Deploy the image with az containerapp create and attach an HTTP scale rule.
[600ms]
[calm] Set an http concurrency of fifty, and Container Apps adds a replica whenever a revision passes that threshold.
[700ms]
[impressed] Clients call one address — the FQDN — and the built-in ingress routes each request only to healthy replicas.

## Step 4 · revision

[confident] Change the app — a new image, config, or environment variable — and you get a new, immutable revision.
[600ms]
[calm] In single mode, Container Apps rolls traffic from the old revision to the new one automatically.
[700ms]
[reassuring] In multiple mode, you split traffic by weight — blue-green or canary — so a bad deploy just stays on the old one.

## Step 5 · ingress

[confident] Enable ingress and your app gets an HTTPS endpoint — no load balancer or public IP to create.
[600ms]
[calm] External ingress faces the internet; internal ingress is reachable only inside the environment.
[700ms]
[intrigued] Inside that environment, apps find each other by name — call http://payments, and the traffic never leaves.

## Step 6 · serverless

[confident] Autoscaling here is powered by KEDA — scale on HTTP, CPU and memory, or events, all the way to zero.
[600ms]
[impressed] Those event triggers include Service Bus, Event Hubs, Kafka, and Redis — pay nothing while apps sleep.
[700ms]
[optimistic] Add an optional Dapr sidecar and your apps get service invocation, state, and pub/sub — no extra infrastructure.

## Step 7 · control

[confident] Container Apps is deliberately managed and opinionated — you never touch nodes, the Kubernetes API, or cluster upgrades.
[600ms]
[calm] That's the point: you focus on the app, and Azure runs the platform.
[700ms]
[curious] But when you need node pools, the full Kubernetes API, custom networking, and operators — the last stop is Azure Kubernetes Service.

## Step 8 · recap

[proud] So bring an image, and Container Apps runs it as serverless, autoscaling replicas.
[600ms]
[encouraging] Revisions for safe rollouts, ingress for traffic, KEDA and Dapr built in — the power of Kubernetes without the operations.
[700ms]
[optimistic] And when you truly need node-level control, the final stop on this journey is Azure Kubernetes Service — full control of the cluster.
