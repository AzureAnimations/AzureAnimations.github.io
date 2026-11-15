# Narrator Script — Azure Containers · 06 · Azure Red Hat OpenShift

**Source animation:** `journeys/Container/AzureRedHatOpenShift.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics, and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · stack

[confident] Azure Red Hat OpenShift starts with the same Kubernetes you met in AKS.
[600ms]
[calm] Then it adds the whole platform around it: a web console, an image registry, routing, builds, pipelines, Operators, monitoring and logging, all in one product.
[600ms]
[reassuring] Microsoft and Red Hat engineer, operate and support it together, with one support experience.
[700ms]
[confident] It runs in your subscription, shows up on your Azure bill, and carries a ninety-nine point nine five percent uptime SLA.

## Step 2 · resp

[confident] So who runs what? Site reliability engineers from Microsoft and Red Hat operate the whole cluster.
[600ms]
[calm] They patch and scale the control plane, keep the worker nodes' operating system up to date, and watch the platform alerts and audit logs.
[600ms]
[calm] A few things are shared: SRE ship each tested version and you start the upgrade; you add workers; and the virtual network is yours to connect.
[700ms]
[reassuring] Your apps, your data and your developer services stay yours, and SRE reach the cluster only through a private endpoint.

## Step 3 · arch

[confident] Unlike AKS, nothing is hidden here. Everything runs in your own virtual network.
[600ms]
[calm] Three control-plane nodes run the API server and etcd in their own subnet, and at least three worker nodes run your Pods in another.
[600ms]
[calm] Optional infrastructure nodes host the router, the registry and monitoring, and Azure load balancers carry API calls and app traffic.
[700ms]
[intrigued] Select any part of the cluster to see what it does, and what to watch out for.

## Step 4 · hcp

[confident] ARO comes in two architectures, and both give you the same OpenShift experience.
[600ms]
[calm] The standard architecture keeps everything in your subscription, with at least three control-plane nodes and three workers, and takes about forty-five minutes to create.
[600ms]
[intrigued] Hosted control planes, in preview, move the control plane into a Red Hat-owned Azure account.
[700ms]
[confident] You start from just two workers, a cluster is ready in about fifteen to twenty minutes, and you upgrade node pools separately.

## Step 5 · projects

[confident] Now let's bring the teams in. Developers sign in with Microsoft Entra ID, using their work account and MFA.
[600ms]
[calm] OpenShift's built-in OAuth server accepts that OpenID Connect token and grants access.
[600ms]
[calm] Teams work inside Projects: Kubernetes namespaces they can create themselves, with quotas and network policy.
[700ms]
[reassuring] Give each person admin, edit or view per project, and every team gets exactly the access it needs.

## Step 6 · s2i

[confident] Here's where OpenShift really shines for developers: from Git to a running app, with no Dockerfile.
[600ms]
[calm] A webhook starts a Source-to-Image build, which combines a language builder image with your code.
[600ms]
[calm] The image lands in the built-in registry, tracked by an ImageStream, and that new image triggers a rolling update of your Pods.
[700ms]
[impressed] Finally a Route publishes it on an HTTPS URL. Select any stage to see how it works.

## Step 7 · routes

[confident] A Route publishes a Service. Traffic enters through an Azure load balancer and reaches the OpenShift router on the infrastructure nodes.
[600ms]
[calm] With edge termination, the router holds the certificate and sends plain HTTP to your Pods. It's the most common choice.
[600ms]
[calm] With passthrough, the router never decrypts; your app keeps TLS end to end.
[700ms]
[reassuring] And with re-encrypt, traffic is encrypted on both hops, at the cost of managing two certificates.

## Step 8 · operators

[confident] Operators are software that runs software.
[600ms]
[calm] You declare the state you want in a custom resource. The Operator reads it, creates and heals the running app, and reports status back, over and over, in a reconcile loop.
[600ms]
[calm] OpenShift itself is run by cluster Operators, which SRE keep managed.
[700ms]
[impressed] And from OperatorHub you can add Pipelines, GitOps, Serverless, Service Mesh, Virtualization and partner Operators in a few clicks.

## Step 9 · security

[confident] OpenShift is secure by default. Every Pod passes through security context constraints before it runs.
[600ms]
[calm] A Pod that asks to run as root is rejected by the default constraint, restricted-v2.
[600ms]
[reassuring] A Pod that sets no user is admitted, and runs with a random, non-root user ID from the project's range.
[700ms]
[confident] Add Entra ID sign-in, a private API and ingress, egress lockdown, network policy, immutable RHCOS nodes and managed identities.

## Step 10 · day2

[confident] On day two, upgrades happen on your schedule.
[600ms]
[calm] Red Hat and Microsoft publish a tested version, you pick the moment, and OpenShift updates the control plane, then drains and updates the workers one at a time, so apps keep serving.
[600ms]
[calm] Prometheus and Alertmanager come preinstalled, and platform and audit logs flow to SRE automatically.
[700ms]
[reassuring] Connect through Azure Arc for Azure Monitor, and send your application logs to Log Analytics.

## Step 11 · vsaks

[confident] So, AKS or ARO? It's the same Kubernetes, with a different deal.
[600ms]
[calm] AKS is lean: Azure runs a hidden control plane, and you pick every add-on yourself, including Windows node pools if you need them.
[600ms]
[calm] ARO is the full OpenShift platform, with Microsoft and Red Hat SRE running the whole cluster.
[700ms]
[reassuring] Choose it when you already know OpenShift, or want everything built in, and plan for a bigger footprint and an OpenShift fee per worker.

## Step 12 · recap

[confident] That's Azure Red Hat OpenShift, end to end.
[600ms]
[calm] It's jointly operated, it runs in your subscription, and it gives developers a complete platform: builds, a registry, Routes and Operators.
[600ms]
[reassuring] It's secure by default, and on day two you choose when to upgrade, with monitoring built in.
[700ms]
[impressed] You've completed the container journey. Go deeper on Microsoft Learn.
