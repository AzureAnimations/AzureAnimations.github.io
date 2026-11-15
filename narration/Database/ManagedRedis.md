# Narrator Script — Database · Azure Managed Redis for AI Apps

**Source animation:** [ManagedRedis.html](../../journeys/Database/ManagedRedis.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/redis/overview>
- <https://learn.microsoft.com/azure/redis/tutorial-semantic-cache>
- <https://learn.microsoft.com/azure/redis/overview-vector-similarity>
- <https://learn.microsoft.com/azure/redis/entra-for-authentication>

---

## Step 1 · Why an AI app needs a cache

[calm] Contoso's support assistant answers the same questions all day long.
[600ms]
[curious] And every repeat pays twice, once for a model call and once for a database trip.
[600ms]
[confident] Contoso and the assistant are fictional. The idea is that Redis keeps the work you'd otherwise repeat, right in memory.

## Step 2 · Azure Managed Redis

[calm] Azure Managed Redis is a Microsoft-run, in-memory data store built on Redis Enterprise.
[600ms]
[confident] You pick a tier by how memory and compute are balanced for your workload.
[600ms]
[reassuring] Sizes and prices change, so check the official overview and pricing pages rather than memorizing numbers.

## Step 3 · Cache-aside, one level deeper

[calm] With cache-aside, the app owns the cache. On a read, it looks in Redis first.
[600ms]
[confident] On a miss, it goes to the database and stores the result. On a write, it changes the database, then fixes the cache.
[600ms]
[curious] The pattern was introduced in the architect lesson on APIs and caching. Here we go deeper on the Redis commands behind it.

## Step 4 · Set it, read it, let it expire

[curious] The simplest Redis value is a string. You write it with a lifetime, and read it back.
[600ms]
[confident] The EX option sets the TTL in seconds when you write. TTL reports the seconds left, and EXPIRE changes it later.
[600ms]
[reassuring] When the time runs out, the key removes itself. That clears old keys before memory pressure forces the issue.

## Step 5 · Three ways to retire stale data

[serious] A cached copy can go stale, so decide how it leaves the cache.
[600ms]
[confident] It can go when you write, when the clock ends, or when a new version appears.
[600ms]
[calm] Versioning keys, by data, model or prompt version, is also how semantic caches avoid reusing an outdated answer.

## Step 6 · More than strings

[curious] Redis is a data structure server, not just a place for strings.
[600ms]
[confident] Match the shape of the data to the job. Here are the six classic structures.
[600ms]
[calm] The pictures are simplified. Redis also has JSON, bitmaps, time series and more.

## Step 7 · Expire by clock, evict by memory

[encouraging] Time to try it. Add keys with different lifetimes, then fill up memory.
[600ms]
[confident] Expiration removes a key when its TTL ends. Eviction removes one when memory is full.
[600ms]
[reflective] This is a simulation with fictional keys and only eight slots. Azure Managed Redis defaults to the volatile LRU policy.

## Step 8 · Vectors in Redis: index first

[curious] To search by meaning, keep each embedding in a hash, right beside its metadata.
[600ms]
[confident] Then index the vector field, and Redis can search by meaning.
[600ms]
[serious] Vector search uses the RediSearch module. Enable it when you create the cache, because modules can't be added to an existing instance.

## Step 9 · Nearest by meaning, then filtered

[curious] A query vector asks for the K closest items, the nearest neighbors by meaning.
[600ms]
[confident] Add a metadata filter, and the same search becomes hybrid.
[600ms]
[calm] The map is a simple illustration with fictional support articles. Real embeddings have far more dimensions, and these distances are made up.

## Step 10 · Semantic caching for LLM answers

[curious] Now the payoff for AI apps. When a new prompt means almost the same as an old one, return the stored answer.
[600ms]
[impressed] That skips the model call entirely, saving both time and cost.
[600ms]
[calm] It's an application or gateway pattern, not a separate Redis feature. Redis stores and searches the prompts, and Azure API Management can run the steps as policies.

## Step 11 · Connect without secrets

[serious] How should your app connect? Prefer Microsoft Entra ID over access keys.
[600ms]
[confident] Keep TLS on, since Entra authentication works only on TLS connections, and limit the network path to the cache.
[600ms]
[reassuring] Access keys are still available, but they're secrets you have to store and rotate.

## Step 12 · Is the cache earning its keep?

[calm] A cache is only worth it if it pays off. Watch two things: how often lookups hit, and how full memory is.
[600ms]
[concerned] Set an alert before the memory runs out, not after that.
[600ms]
[reflective] The metric names come from the monitoring reference. The chart and numbers here are only illustrative.

## Step 13 · Redis for AI apps, all in one

[calm] Let's wrap up. Keep repeatable work in memory, give it a lifetime, and search it by meaning.
[600ms]
[confident] That covers caching, expiry, vectors, semantic caching, secure access and monitoring.
[600ms]
[proud] This is the A I two hundred skill, Integrate Azure Managed Redis in AI solutions. It sits in the data management domain, twenty-five to thirty percent of the exam.
