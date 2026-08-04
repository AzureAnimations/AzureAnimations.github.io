# Narrator Script — Azure PaaS Compute · 02 · App Service

**Source animation:** `static/v2/Compute/AppService.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · intro

[confident] Now for the star of the show — the App Service. This is the actual application, Contoso's storefront, running on the Plan you just met.
[600ms]
[reassuring] And it's fully managed. Azure handles the operating system, the runtime, and the patching, so you can focus on your code.
[700ms]
[calm] Build it in almost any language — .NET, Node, Python, Java, PHP — or bring your own container.

## Step 2 · deploy

[confident] You rarely upload files by hand. Instead, you connect a source — Git, GitHub, Azure DevOps, or Bitbucket.
[600ms]
[calm] From then on, every push to your branch automatically builds, tests, and deploys your app.
[700ms]
[encouraging] Commit your change, and the pipeline takes it the rest of the way to live.

## Step 3 · slotsIntro

[confident] A single App Service can run more than one live copy of itself, called deployment slots.
[600ms]
[calm] Production keeps serving Contoso's current site. When it's time to modernize, you add a Staging slot for the redesign — with its own address and settings — without touching Production.
[700ms]
[reassuring] Same app, two running versions, both safely inside one resource.

## Step 4 · slots

[confident] Here's where slots really shine. A visitor arrives, and App Service can split real traffic by a percentage you choose.
[600ms]
[calm] Send, say, ninety percent to the trusted live site, and just ten percent to the new redesign in staging.
[700ms]
[impressed] Watch how it behaves, then dial the new version up — or back to zero — with no redeploy. When you're happy, a single swap makes it live, instantly, with zero downtime.

## Step 5 · auth

[confident] Need sign-in? You don't have to write authentication code at all.
[600ms]
[calm] Flip on a provider in the portal — Microsoft, Google, Facebook, Apple, or any OpenID Connect provider.
[700ms]
[reassuring] App Service sits in front of your app and checks the token before a request ever reaches your code. It's configuration, not code.

## Step 6 · security

[confident] By default, your app answers at an azure-websites address. To use your own brand, add a custom domain.
[600ms]
[calm] Point your domain at the app with a DNS record, and Azure issues — and auto-renews — a free managed T-L-S certificate for it.
[700ms]
[reassuring] HTTPS is enforced by default, so visitors on your domain always get an encrypted connection.

## Step 7 · traffic

[confident] Ready to go global? Run your App Service in more than one region.
[600ms]
[calm] Then let Traffic Manager route each visitor to the nearest healthy region.
[700ms]
[reassuring] And if a region becomes unhealthy, it's routed around automatically — with no code change.

## Step 8 · recap

[proud] Put it all together: a Plan for compute, an App Service for your code, continuous deployment, slots, built-in auth, free T-L-S, and global routing.
[600ms]
[encouraging] That's a production-ready web app. Try it yourself — create a Plan, then an App Service on top, and you're live.
