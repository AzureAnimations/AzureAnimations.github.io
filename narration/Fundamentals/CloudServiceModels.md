# Narrator Script - Cloud Service Models

**Source animation:** journeys/Fundamentals/CloudServiceModels.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Source: https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility -->

## Step 1 · Who patches the server?

[calm] Contoso's team wants to prepare the next promotion, but the shop's server also needs a security update. Someone must maintain every layer that keeps the application running.
[600ms]
[confident] Cloud service models help answer a practical question: which work stays with Contoso, and which work does Microsoft take on?

## Step 2 · Run it yourself

[calm] Start at the bottom of the stack: physical equipment, then the operating system, then the application and its data. On premises, Contoso takes care of all these layers.
[600ms]
[confident] That gives the team control, but also responsibility for maintenance, security, and keeping the whole system working.

## Step 3 · Rent the infrastructure

[calm] Now Microsoft takes care of the physical infrastructure underneath the shop. Contoso rents a virtual machine but still maintains its operating system, application, and data.
[600ms]
[confident] This is infrastructure as a service, or IaaS. The hardware work moves to Microsoft; the guest operating-system updates still belong to Contoso.

## Step 4 · Use a managed platform

[calm] Move one layer higher. With platform as a service, or PaaS, Microsoft also operates the underlying operating system and runtime, the environment that runs the application.
[600ms]
[confident] Contoso can focus on its shop's code and data, while still managing the application's settings, access, and security responsibilities.

## Step 5 · Subscribe to finished software

[calm] Warehouse staff need business software they can use, not another application to build. Software as a service, or SaaS, supplies a finished application with its underlying platform operated by the provider.
[600ms]
[confident] Contoso manages how staff use it. This doesn't turn Contoso's custom online shop into a ready-made SaaS application.

## Step 6 · Some work stays with Contoso

[calm] More managed layers don't mean no responsibilities. Contoso still decides who can sign in, what those people may access, and how customer information is handled.
[600ms]
[confident] Data, identities, access, and relevant devices still need protection. Shared responsibility means understanding the boundary, not assuming the provider handles everything.

## Step 7 · Cloud Service Models - All in One

[calm] Compare the stacks: IaaS provides infrastructure, PaaS provides a managed application platform, and SaaS provides finished software. Each moves a different part of the operating work to Microsoft.
[600ms]
[confident] Contoso can mix models to suit different jobs. Next, it needs a clear way to organize the resources it creates.