# Naming convention — narration

## Step 1 · Six months later, nobody knows

[calm] A resource group full of names that made perfect sense on the day they were typed.
[500ms]
[concerned] Now nobody can say what they're for, who owns them, or whether deleting one will break production.
[400ms]
[confident] And here's the sharpest constraint: most Azure resource names cannot be changed after creation. A bad name isn't a five-minute fix later — it's a redeploy.

## Step 2 · Five parts, always in the same order

[confident] The Cloud Adoption Framework breaks a name into five components.
[500ms]
[calm] Resource type, workload, environment, region, and instance. Pick the order once, write it down, and every name in the estate becomes readable.
[400ms]
[helpful] The hyphen is recommended for readability — but not every Azure resource type allows it. Storage accounts, for one. If you value absolute consistency, drop the delimiter everywhere rather than only where you must.

## Step 3 · The abbreviations are already decided

[calm] You don't have to invent prefixes.
[500ms]
[confident] Microsoft publishes a recommended abbreviation for every resource type. Using it means anyone joining your team already knows how to read your estate.
[400ms]
[helpful] One that catches people out: there's no generic "lb". The Cloud Adoption Framework splits load balancers into lbi for internal, and lbe for external.

## Step 4 · What it looks like across the estate

[calm] The same five components, applied resource by resource.
[500ms]
[confident] The first six formats are published examples. The last three apply the same pattern to resources that have an abbreviation but no published example.
[400ms]
[helpful] Notice how the NSG format leans on the policy rather than the region. The convention bends to whatever actually distinguishes one of those from another.

## Step 5 · Where a name has to be unique

[calm] Uniqueness is not global for everything.
[500ms]
[confident] Some names must be unique across all of Azure, some only within a resource group. And the character limits differ enough between resource types that one of them will eventually bite you.
[400ms]
[helpful] A Windows VM computer name is capped at fifteen characters. That single limit is why most conventions keep workload abbreviations to three or four letters.

## Step 6 · What does not belong in the name

[confident] A name should carry only what stays true for the life of the resource.
[500ms]
[calm] Everything else — owner, cost centre, ticket number, review date — belongs in a tag, where you can actually change it.
[400ms]
[concerned] And one hard rule: never put personal, sensitive or confidential information in a resource name or a tag. Both are visible far more widely than people expect.

## Step 7 · A name that answers the question

[confident] So, the takeaway. A good convention isn't paperwork.
[400ms]
[calm] It's the thing that lets a script, a policy, a cost report, and a tired engineer at two in the morning all reach the same conclusion about a resource.
[600ms]
[encouraging] Write the convention down, publish the abbreviation list, and enforce it with Azure Policy on day one — because renaming later is rarely an option.
