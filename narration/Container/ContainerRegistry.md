# Narrator Script — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · dockerhub

[confident] Last chapter you built an image called contoso-orders version one.
[600ms]
[curious] So where does it go when you run docker push? If the name has no registry in front of it, Docker sends it to docker dot io — the public Docker Hub.
[700ms]
[calm] That's a fine default, but it means your image lands in a public repository — and that's usually not what you want for your own app.

## Step 2 · acr

[confident] Here's the fix — put your image somewhere private that you own.
[600ms]
[calm] Prefix the name with your registry's login server, contoso dot azure-c-r dot io, and now docker push uploads straight into your own Azure Container Registry.
[700ms]
[reassuring] You sign in first with az acr login, and ACR authenticates with Microsoft Entra ID — no shared passwords floating around.

## Step 3 · tasks

[confident] You don't even need Docker running on your machine to build.
[600ms]
[impressed] With ACR Tasks, one command — az acr build — builds the image up in Azure and pushes it for you.
[700ms]
[intrigued] Better still, it can rebuild automatically — on a git commit, on a schedule, or when a base image gets patched — so a security fix flows to every image without you lifting a finger.

## Step 4 · tiers

[confident] Every registry comes in one of three tiers — Basic, Standard, or Premium.
[600ms]
[calm] They all speak the exact same registry API. You move up mainly for more included storage and more image throughput.
[700ms]
[encouraging] Start on Basic for dev, Standard for most production — and reach for Premium when you need geo-replication, Private Link, or customer-managed keys.

## Step 5 · features

[confident] ACR is much more than a shelf to park images on.
[600ms]
[impressed] It secures access with Entra roles and tokens, replicates across regions, and lets Microsoft Defender scan every pushed image for vulnerabilities.
[700ms]
[intrigued] And because it's an OCI registry, it holds Helm charts and other artifacts too — not just container images.

## Step 6 · advanced

[confident] When you outgrow simple push and pull, ACR has a deeper toolbox.
[600ms]
[impressed] Artifact cache is a favourite — mirror Docker Hub or other public images into your own registry to beat rate limits and pull them fast over private networks.
[700ms]
[intrigued] There's also artifact streaming for faster container starts, connected registries for the edge, soft delete to recover mistakes, and image signing to verify what you deploy.

## Step 7 · recap

[proud] So that's your image supply chain — build once, push to a private registry in Azure, patch it in the cloud, scale with tiers, and secure it end to end.
[700ms]
[optimistic] With your images stored and built in Azure, you're ready to actually run one. Next stop: Azure Container Instances — the fastest way to spin up a single container.
