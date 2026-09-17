# Narrator Script — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

<!-- Review sources: https://learn.microsoft.com/virtualization/windowscontainers/about/containers-vs-vm ; https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/ ; https://buildah.io/ -->

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

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
[reassuring] The app runtime and libraries now travel inside the image, reducing differences between environments. The host still needs a compatible operating system, processor architecture, and container runtime.

## Step 4 · layers

[curious] Look inside that image and it's not one solid block — it's a stack of read-only layers.
[600ms]
[calm] The base image supplies the starting layers. Instructions that change files add layers for dependencies and your app; other instructions configure how the container runs.
[600ms]
[impressed] Layers are immutable and shared, so identical ones are stored just once. That's what makes pulls fast and rebuilds cheap.

## Step 5 · vmvc

[confident] Now, a container is not just a lightweight virtual machine.
[600ms]
[calm] Each VM has its own guest operating system and can run several apps. A process-isolated container shares its host's kernel and packages the app with its dependencies, without a separate guest kernel.
[700ms]
[impressed] Sharing the kernel reduces overhead. Containers often start faster and use fewer resources than full VMs, although image size and startup time depend on the application.

## Step 6 · ports

[confident] Run that image and you get a container — and that container IS Contoso Orders. Inside, the app listens on port three thousand.
[600ms]
[calm] The app is listening inside the container, but this example has no published host port yet. Publishing a port gives external clients a path through the host to the app.
[600ms]
[encouraging] So docker run, dash p, port eighty-eighty to three thousand: external traffic hits the host on port eighty-eighty, and Docker forwards it to the app on port three thousand.

## Step 7 · oci

[curious] And here's something people miss — Docker isn't the only way to run a container.
[600ms]
[calm] Your image follows the Open Container Initiative — OCI — standard, which defines three specs: image, runtime, and distribution.
[600ms]
[impressed] The tools have different jobs: containerd and CRI-O run containers, Podman manages them, and Buildah builds images. Open standards help these tools work together, but host compatibility still matters.

## Step 8 · targets

[confident] A compatible image can be reused across different hosting environments, including Azure. First check which operating systems and image formats each service supports.
[600ms]
[calm] Same artifact, four front doors: Azure Container Instances for a single container, Azure Container Apps for serverless autoscaling, Azure Kubernetes Service for full control, and App Service to run it as a managed web app.
[700ms]
[encouraging] Choose based on compatibility, scaling, and how much control you need. Reusing the image keeps the application package consistent; deployment settings can still differ.

## Step 9 · recap

[proud] The idea is to package your app and its dependencies as an immutable, layered image. Reuse it on compatible development, test, and Azure hosts, instead of rebuilding the environment by hand each time.
[700ms]
[optimistic] The image is the unit you'll store, secure, scale, and run for the rest of this journey.
[600ms]
[curious] But that raises one question — where do those images actually live? Next stop: Azure Container Registry.
