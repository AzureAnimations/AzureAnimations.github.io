# Narrator Script — Azure Containers · 05 · Azure Kubernetes Service

**Source animation:** `static/v2/Container/Kubernetes.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics, and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · arch

[confident] Azure Kubernetes Service is managed Kubernetes, and the split is the whole idea.
[600ms]
[calm] Azure runs and scales the control plane for you — the API server, etcd, the scheduler and the controllers — on a Free, Standard, or Premium tier.
[600ms]
[reassuring] You own the node pools underneath — the worker VMs where your Pods actually run.
[700ms]
[confident] And you drive all of it with one tool: kubectl, talking to that managed API server.

## Step 2 · nodepools

[confident] Those nodes come grouped into node pools, and each pool is just a Virtual Machine Scale Set of identical VMs.
[600ms]
[calm] There's always a system pool — Linux only — that hosts cluster services like CoreDNS and metrics-server.
[600ms]
[calm] Then you add user pools for your own apps, and those can be Linux or Windows.
[700ms]
[impressed] Each pool scales on its own, all the way up to a thousand nodes.

## Step 3 · pod

[confident] Now let's ship our app. Each Deployment declares how many replicas it wants — frontend with two, orders with three, backend with two.
[600ms]
[calm] Our orders image is contoso-orders version one, and we apply it with a single kubectl command.
[600ms]
[intrigued] From there the kube-scheduler takes over, deciding which node every Pod lands on.
[700ms]
[reassuring] It spreads each app across both nodes — so losing one node never takes the app down.

## Step 4 · scale

[confident] AKS scales in three different ways, and it helps to keep them straight.
[600ms]
[calm] The Horizontal Pod Autoscaler — the HPA — adds Pod replicas when CPU, memory, or a KEDA event says demand is climbing.
[600ms]
[calm] When those Pods no longer fit, the Cluster Autoscaler adds fresh VM nodes to the scale set — that takes minutes.
[700ms]
[impressed] And for a sudden spike, virtual nodes burst extra Pods straight to Azure Container Instances in seconds — serverless, pay-per-second.

## Step 5 · service

[confident] Pods are ephemeral — they come and go, each time with a new IP.
[600ms]
[calm] So you never talk to a Pod directly. A Service is the stable front door that load-balances across the healthy Pods behind it.
[600ms]
[reassuring] It only sends traffic to Pods that pass their readiness, liveness, and startup probes.
[700ms]
[curious] There are three types — ClusterIP, NodePort, and LoadBalancer — each reaching a little further out. Let's take them one at a time.

## Step 6 · svcCip

[confident] First, ClusterIP — and it's the default.
[600ms]
[calm] It gives your Pods a stable internal address, so frontend, orders, and backend can call each other across nodes — securely.
[700ms]
[serious] But notice the red card: this traffic never leaves the cluster. No internet user can reach these Pods.
[600ms]
[reassuring] That's exactly what you want for private, Pod-to-Pod communication.

## Step 7 · svcNp

[confident] Next, NodePort — our first step toward the outside world.
[600ms]
[calm] It opens the same static port — somewhere in the range thirty thousand to thirty-two thousand seven sixty-seven — on every single node's IP.
[600ms]
[concerned] But here's the snag: with two nodes, you get two different public IPs, and no single stable address to hand out.
[700ms]
[amused] Nodes come and go, and their IPs change with them. It's fine for a quick test — but real traffic wants one clean entrance.

## Step 8 · svcLb

[confident] And that clean entrance is a Service of type LoadBalancer.
[600ms]
[impressed] Choose it for the frontend, and AKS automatically provisions one Azure public IP — a single, stable address.
[600ms]
[calm] Users hit that one IP, and inside the cluster the LoadBalancer spreads every request across the healthy frontend Pods — pod one or pod two.
[700ms]
[reassuring] Private, then public-but-messy, now one load-balanced public IP. That's the arc.

## Step 9 · ingress

[confident] For richer routing, you go up to Layer seven.
[600ms]
[calm] Application Gateway for Containers is an Azure-hosted gateway — host and path routing, TLS, mTLS — handling north-south traffic coming into the cluster.
[600ms]
[calm] The managed Istio service mesh handles east-west traffic, securing calls between your services with mTLS.
[700ms]
[optimistic] Both line up on the Kubernetes Gateway API — the standard AKS is steering toward.

## Step 10 · why

[confident] So why AKS? Because Kubernetes constantly reconciles reality to your desired state.
[600ms]
[reassuring] It's self-healing — it restarts failed Pods and reschedules them off dead nodes, automatically.
[600ms]
[impressed] It rolls out updates with zero downtime and instant rollback to the last good version.
[700ms]
[confident] And on Azure you layer on Microsoft Entra ID with RBAC, VNet integration through Azure CNI, and managed upgrades.

## Step 11 · monitor

[confident] Finally, you need to see what's happening — the CNCF way.
[600ms]
[calm] Prometheus scrapes your metrics, Grafana visualizes them, Jaeger traces requests across services, and Kiali maps your service mesh.
[600ms]
[reassuring] On Azure, managed Prometheus and managed Grafana mean there are no servers for you to run.
[700ms]
[proud] All open source — backed by the CNCF, the Linux Foundation, and Microsoft.

## Step 12 · recap

[proud] And that's Azure Kubernetes Service, end to end.
[600ms]
[calm] A managed control plane, node pools of Linux or Windows VMs, your image running as self-healing Pods, autoscaling, Services and ingress, and full observability.
[700ms]
[encouraging] You've gone all the way from a Dockerfile to a full, orchestrated cluster — that completes the container journey.
[600ms]
[optimistic] Now go build something, and let Azure do the heavy lifting.
