# Narrator Script — Architect · Front the app: APIs, caching and deployment

**Source animation:** [ApisAndCaching.html](../../journeys/Architect/ApisAndCaching.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/api-management-key-concepts>

---

## Step 1 · API Management: one front door

[calm] Contoso's clients currently call the backend directly, leaving policy enforcement scattered around the application.
[600ms]
[curious] API Management places a gateway in front, with checks and transformations applied on the request and response paths.
[600ms]
[reassuring] Products, subscriptions and the developer portal organize API consumption, while the backend can remain focused on its own job.

## Step 2 · API Management: choose the tier

[calm] API Management tiers differ in capacity, networking and the availability features they offer.
[600ms]
[curious] Use the comparison to identify the requirements that eliminate unsuitable tiers, including whether this is production traffic.
[600ms]
[reassuring] Choose only after checking the current feature comparison, rather than assuming every tier provides the same network and resilience options.

## Step 3 · Caching: check the cache first

[calm] Watch the storefront ask the cache for product data before it asks the database.
[600ms]
[curious] A cache hit returns the answer quickly; a miss sends the application to the data store and then populates the cache.
[600ms]
[reassuring] This cache-aside pattern reduces repeated reads, but the application still needs an expiry and invalidation strategy.

## Step 4 · Caching: what belongs in memory

[calm] The cache is useful for data that is read often and can tolerate some temporary staleness.
[600ms]
[curious] It is not the authoritative record for Contoso's orders or other data that must not be lost.
[600ms]
[reassuring] Choose what belongs in Azure Managed Redis by the access pattern and correctness requirement, not just because memory is fast.

## Step 5 · Messaging and events: pick by the message

[calm] A command, a discrete event and a stream describe different communication needs.
[600ms]
[curious] Service Bus supports valuable business messages, Event Grid distributes event notifications and Event Hubs ingests streams.
[600ms]
[reassuring] A storage queue can fit simpler queueing needs; start with the message's meaning and required guarantees before choosing the service.

## Step 6 · Configuration: keep settings out of the code

[calm] The same application build should run across environments without carrying secrets in its source code.
[600ms]
[curious] App Configuration holds settings and feature flags, while a Key Vault reference points to the separately protected secret.
[600ms]
[reassuring] Follow the application's access to each service: a reference does not copy the secret into the configuration store.

## Step 7 · Deployment: ship safely, roll back fast

[calm] The release path replaces manual changes with infrastructure code and an application pipeline.
[600ms]
[curious] A deployment slot lets Contoso prepare the new version before switching the production traffic.
[600ms]
[reassuring] Keeping the release and rollback path repeatable makes the design safer than making emergency changes directly to the live application.

## Step 8 · All in one: a fast, safe partner API

[calm] Contoso's partner API now has a coordinated set of supporting decisions, not just a faster backend.
[600ms]
[curious] The gateway, cache, messaging, configuration and deployment path each solve a different concern.
[600ms]
[reassuring] Keep the justification beside the service choice; next, plan how the existing workloads will move into this Azure design.

