# Narrator Script — Azure PaaS Compute · 01 · App Service Plan

**Source animation:** `static/v2/Compute/AppServicePlan.html`

Tags in `[brackets]` are delivery cues — speaking styles (e.g. `[confident]`), paralinguistics,
and `[NNNms]` pause markers. One block per animation step, in on-screen order.

---

## Step 1 · intro

[confident] Before Contoso Retail's website can serve a single visitor, Azure needs somewhere to actually run it.
[600ms]
[calm] That somewhere is an App Service Plan — the compute your apps share: a region, a size, and a number of instances.
[700ms]
[amused] Picture renting a building. The Plan is the building; the App Services you deploy are the tenants living inside.

## Step 2 · tier

[confident] Two choices define the Plan. First, a region — pick one close to your users.
[600ms]
[calm] Then a pricing tier, which sets your CPU, memory, and features — everything from a free dev-and-test tier up to a fully isolated network.
[700ms]
[reassuring] And you're not locked in. You can move up tiers later with almost no downtime, so start small and grow.

## Step 3 · instances

[confident] An instance is a single virtual machine running an identical copy of your app's code.
[600ms]
[impressed] Add more instances and you get two things at once — more capacity to handle traffic, and more resilience.
[700ms]
[reassuring] If one instance hits a problem, the others keep serving. That's redundancy, built in.

## Step 4 · platform

[confident] Every Plan runs on one operating system — Linux or Windows.
[600ms]
[calm] On top of it, your app can use any supported runtime: .NET, Java, Node.js, PHP, or Python.
[700ms]
[serious] One catch — you choose the operating system when you create the Plan, and it's fixed. So group apps that need the same one together.

## Step 5 · scale

[confident] There are two very different ways to scale, and it's worth keeping them straight.
[600ms]
[calm] Scale up changes the tier — bigger, more powerful machines, but the same number of them.
[500ms]
[calm] Scale out changes the count — same size machine, just more copies sharing the load.
[700ms]
[encouraging] Rule of thumb: scale out for traffic spikes, and scale up when a single instance needs more CPU or memory.

## Step 6 · autoscale

[confident] You don't have to move those levers by hand. Autoscale does it for you.
[600ms]
[calm] You define rules — a CPU threshold, a schedule, or a custom metric — plus a minimum and a maximum number of instances.
[700ms]
[impressed] Azure then adds and removes instances automatically, so capacity follows real demand — and you pay for it only when you need it.

## Step 7 · recap

[proud] So there's the foundation: region, tier, and instance count together define the compute — the App Service Plan — that your apps run on.
[700ms]
[encouraging] Next, let's put something on top of it, and watch an actual App Service — the web app itself — come to life.
