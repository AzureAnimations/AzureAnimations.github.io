# Narrator Script — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · problem

[confident] Meet Contoso. Their team writes a .NET or Java app, compiles it, and hands the artifact — a dot jar or a dot d-l-l — over to Ops to deploy.
[600ms]
[calm] But that artifact only carries the compiled code. It doesn't carry the operating-system libraries or the runtime it was built against.
[700ms]
[concerned] So on the production server it meets a different OS, a different runtime — and it breaks.

## Step 2 · drift

[curious] So why does it break? One word: drift.
[600ms]
[calm] Your app was never just your code. It's your code plus a specific runtime and a specific set of libraries.
[600ms]
[serious] Every environment — the dev laptop, the test VM, production — has slightly different ones. Change any of them, and the exact same build behaves differently.

## Step 3 · wrap

[confident] Here's Docker's fix. A Dockerfile is a recipe that wraps your code and its dependencies together with a base OS and runtime.
[600ms]
[calm] Then docker build seals all of it into one image — for Contoso, that's contoso-orders version one.
[700ms]
[reassuring] Now the runtime and libraries travel inside the image. The host just needs a container runtime, and that OS mismatch simply can't happen.

## Step 4 · layers

[curious] Look inside that image and it's not one solid block — it's a stack of read-only layers.
[600ms]
[calm] Each line in the Dockerfile adds one layer: the base, the dependencies, then your app on top.
[600ms]
[impressed] Layers are immutable and shared, so identical ones are stored just once. That's what makes pulls fast and rebuilds cheap.

## Step 5 · vmvc

[confident] Now, a container is not just a lightweight virtual machine.
[600ms]
[calm] A VM virtualizes hardware and runs a full guest OS for every app. A container shares the host kernel and packages only the app and its libraries — an isolated process, not a whole machine.
[700ms]
[impressed] That shared kernel is the whole trick: containers start in seconds, weigh megabytes instead of gigabytes, and pack far more onto one host.

## Step 6 · ports

[confident] Run that image and you get a container — and that container IS Contoso Orders. Inside, the app listens on port three thousand.
[600ms]
[calm] But a port inside the container is sealed off. To let requests in, you publish it when you run the image.
[600ms]
[encouraging] So docker run, dash p, port eighty-eighty to three thousand: external traffic hits the host on port eighty-eighty, and Docker forwards it to the app on port three thousand.

## Step 7 · oci

[curious] And here's something people miss — Docker isn't the only way to run a container.
[600ms]
[calm] Your image follows the Open Container Initiative — OCI — standard, which defines three specs: image, runtime, and distribution.
[600ms]
[impressed] So any OCI-compliant runtime runs it unchanged — containerd, the engine inside Docker and on AKS nodes, plus CRI-O, Podman, and Buildah. Most are open-source, under the Linux Foundation and CNCF.

## Step 8 · targets

[confident] Because it's an open standard, one image runs anywhere — including all over Azure.
[600ms]
[calm] Same artifact, four front doors: Azure Container Instances for a single container, Azure Container Apps for serverless autoscaling, Azure Kubernetes Service for full control, and App Service to run it as a managed web app.
[700ms]
[encouraging] You just choose by how much orchestration you want — the image never changes.

## Step 9 · recap

[proud] So that's the whole idea. Package your app and its dependencies once as an immutable, layered image, then run that identical image anywhere — your laptop, CI, or Azure.
[700ms]
[optimistic] The image is the unit you'll store, secure, scale, and run for the rest of this journey.
[600ms]
[curious] But that raises one question — where do those images actually live? Next stop: Azure Container Registry.
