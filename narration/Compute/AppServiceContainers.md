# Narrator Script — Compute · Run a Container on App Service: Settings and Secrets

**Source animation:** [AppServiceContainers.html](../../journeys/Compute/AppServiceContainers.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/tutorial-custom-container>

---

## Step 1 · From a Registry Image to a Running Web App

[calm] Contoso packaged its orders API as a container image, version one point four, and pushed it to an Azure Container Registry.
[600ms]
[curious] A web app for containers doesn't use a built-in language stack. It runs your own image instead.
[600ms]
[confident] So the path is simple: App Service pulls the image from the registry, starts it, and serves it to your users.

## Step 2 · Create a Web App for Containers

[calm] When you create the web app, choose Container as the way to publish, not code, and pick Linux for this lesson.
[600ms]
[confident] Then point the app at your image, using the registry, the name and the tag.
[600ms]
[reassuring] The portal and the command line give you the same result. The CLI just creates a Linux plan first, then a web app that points at the image.

## Step 3 · Pull from ACR with a Managed Identity

[curious] How does App Service sign in to the registry? Best answer: it doesn't need a password at all.
[600ms]
[confident] Give the app an identity, system-assigned or user-assigned, and grant that identity the AcrPull role on the registry. Then turn on the managed identity setting for registry pulls.
[600ms]
[serious] A user-assigned identity also needs its client ID set. And if the registry rejects the token, the pull fails with an unauthorized error.

## Step 4 · WEBSITES_PORT and the Container Port

[calm] App Service assumes your container listens on port eighty.
[600ms]
[confident] If yours listens somewhere else, say eight thousand, tell the platform with the websites port app setting.
[600ms]
[reflective] Remember the limits. Only one port receives HTTP requests, and TLS ends at the App Service front end, so your container just serves plain HTTP.

## Step 5 · App Settings Become Environment Variables

[calm] Every app setting you define is handed to the container as an environment variable when it starts.
[600ms]
[confident] Names can use letters, numbers, periods and underscores, so pick names your code can actually read.
[600ms]
[serious] Notice the side effect. Adding or changing a setting restarts the app, so expect a brief restart when you edit one.

## Step 6 · Secrets: Key Vault References Instead of Values

[serious] Don't paste a secret into an app setting.
[600ms]
[confident] Put a Key Vault reference there instead. It names the vault and the secret, and the value stays in the vault, read through the app's managed identity with the Key Vault Secrets User role.
[600ms]
[concerned] Watch for failures. If a reference can't be resolved, the app receives the reference text as a plain string, and that's a bug waiting to happen.

## Step 7 · Slot Settings: What Stays with the Slot on Swap

[curious] When you swap deployment slots, the app moves, and most settings travel with it.
[600ms]
[confident] Mark a setting as a deployment slot setting and it stays in its own slot. The portal checkbox is named exactly that, and the CLI uses slot settings.
[600ms]
[reflective] Some things never swap at all: custom domain names, scale settings and managed identities.

## Step 8 · Continuous Deployment: Webhook from ACR

[calm] Turn on continuous deployment in the Deployment Center, and App Service adds a webhook to your registry.
[600ms]
[impressed] Now every image push triggers it. The app restarts, the restart pulls the new image, and the new version runs.
[600ms]
[reassuring] If you skip the switch, just restart the app yourself. With another registry, post to the webhook URL from your pipeline.

## Step 9 · Logs and the Container Startup Check

[curious] After a restart, App Service pings your container until it answers.
[600ms]
[concerned] If it doesn't answer in time, the attempt fails, the platform retries, and visitors see a five oh three error.
[600ms]
[determined] So turn on application logging with the file system option, then watch the Log stream and the App Service logs to see why.

## Step 10 · Container on App Service at a Glance

[calm] Here's the whole path: a registry image, a web app for containers, and a running service.
[600ms]
[confident] App settings become environment variables, and secrets come from Key Vault references, never pasted values.
[600ms]
[proud] That's the exam objective for A I two hundred in plain words: run a container on App Service and supply its variables and secrets.
