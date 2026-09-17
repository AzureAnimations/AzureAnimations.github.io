# Narrator Script - Cost and Tags

**Source animation:** journeys/Fundamentals/CostAndTags.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets ; https://learn.microsoft.com/azure/well-architected/saas/governance#cost-governance -->

## Step 1 · Where did the money go?

[calm] Contoso's promotion has finished, but spending hasn't returned to the expected level. The live shop still needs resources, while some test capacity may no longer be doing useful work.
[600ms]
[confident] Before cutting anything, the team needs to see which resources create the charges and who is using them.

## Step 2 · What actually drives cost

[calm] The bill isn't just a count of servers. Compute size and running time, stored data, network traffic, service usage, and region can all affect cost.
[600ms]
[confident] Contoso looks at the meters for each chosen service. Changing one part of the design can change several charges, not just one headline price.

## Step 3 · Estimate before you deploy

[calm] Contoso enters expected capacity, operating hours, storage, and traffic into the pricing calculator. It compares an ordinary month with the extra work expected during a promotion.
[600ms]
[confident] The result is an estimate based on those assumptions, not a guaranteed bill. Keeping the assumptions makes later comparisons useful.

## Step 4 · Organize what you deploy

[calm] Tags attach labels to supported resources, such as the workload name and whether the environment is test or production. Contoso applies them consistently so spending can be grouped meaningfully.
[600ms]
[confident] Labels make ownership easier to understand. They don't move resources or automatically limit what those resources may spend.

## Step 5 · Watch the real spending

[calm] Now compare actual costs in Cost Management with the estimate. Grouping by service or tag helps Contoso find which part of the shop has changed.
[600ms]
[confident] A total says that spending rose; the breakdown helps explain why. The team uses that evidence before deciding which resources to adjust.

## Step 6 · An alert is not a stop switch

[calm] Contoso sets a budget threshold and chooses who should receive an alert. When the configured cost condition is met, the owner gets a notification to investigate.
[600ms]
[confident] The budget isn't a hard spending cap. It doesn't shut down the shop or stop consumption; a person or separately configured automation must act.

## Step 7 · Find the cause, then act

[calm] The breakdown reveals unused test capacity left over from the promotion. Contoso checks dependencies and any data that must be retained before removing what is no longer needed.
[600ms]
[confident] The goal is to remove waste without disrupting production. A smaller bill is only a good result if the shop still works.

## Step 8 · Cost and Tags - All in One

[calm] Estimate before deploying, label resources consistently, and compare actual spending with the plan. Budget alerts draw attention to a change; investigation determines the right response.
[600ms]
[confident] Contoso now understands its costs. Next, it turns those agreed standards into governance checks so future deployments follow the same rules.