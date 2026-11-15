# Narrator Script — Azure Containers · 03 · Azure Container Instances

**Source animation:** `static/v2/Container/ContainerInstance.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · what

[confident] Suppose you just want to run one container — no cluster, no virtual machine, nothing to babysit.
[600ms]
[calm] That's Azure Container Instances. You hand it an image — say, contoso-orders version one — and it runs a single container in seconds.
[700ms]
[impressed] It's serverless single-container compute, hypervisor-isolated, and billed per second — only while it's actually running.

## Step 2 · config

[confident] What you deploy isn't just an image — it's a container group, and that's the unit ACI works with.
[600ms]
[calm] You give it the image plus its runtime settings: CPU and memory, environment variables, the ports to expose, and a restart policy.
[700ms]
[reassuring] That restart policy decides what happens when the process exits — Always keeps it running, OnFailure retries on an error, and Never runs it just once, perfect for a batch job.

## Step 3 · pull

[confident] Our image, contoso-orders version one, lives in a private registry — contoso dot azure-c-r dot io.
[600ms]
[calm] So ACI pulls it from Azure Container Registry. Give the instance a managed identity, grant it the AcrPull role, and the pull just works.
[700ms]
[reassuring] The best part — no registry passwords stored anywhere. It's an identity, not a secret.

## Step 4 · run

[confident] Now to actually start it — one command does the whole thing: az container create.
[600ms]
[calm] Prefer clicking? The Azure Portal has a Review and create flow, or you can deploy the same config as YAML, Bicep, or an ARM template.
[700ms]
[serious] Just remember the DNS name label has to be globally unique in its region — that's what makes your container reachable by name.

## Step 5 · reach

[confident] Expose a port and ACI hands the group a public IP straight away.
[600ms]
[calm] Add that DNS name label and you get a friendly, fully-qualified name — contoso-orders dot east-us dot azure-container dot io, answering on port eighty-eighty.
[700ms]
[concerned] One caveat: the public IP can change when the group restarts. For a stable address, put Application Gateway in front.

## Step 6 · limit

[serious] Here's the catch. ACI runs a fixed set of containers — there's no autoscaling, no load balancer, and no traffic splitting.
[700ms]
[calm] It's perfect for a single, short-lived, or fixed job. But for elastic web traffic, you'll outgrow it.
[600ms]
[encouraging] When you do, step up: Azure Container Apps for autoscaling containers, App Service for a managed web app, or AKS for full orchestration.

## Step 7 · recap

[proud] So that's Azure Container Instances end to end — hand it an image and one container is live in seconds, configured, pulled from ACR, and reachable over DNS.
[700ms]
[optimistic] It's the fastest way to get a container running on Azure. And the moment you need to scale, our next stop takes over — Azure Container Apps, serverless containers with autoscale built in.
