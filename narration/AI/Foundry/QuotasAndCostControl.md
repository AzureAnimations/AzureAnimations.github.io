# Narrator Script — Foundry · Quotas, Rate Limits and Cost Control

**Source animation:** [QuotasAndCostControl.html](../../../journeys/AI/Foundry/QuotasAndCostControl.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/quota>
- <https://learn.microsoft.com/azure/foundry/openai/quotas-limits>
- <https://learn.microsoft.com/azure/foundry/concepts/manage-costs>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/monitor-models>

---

## Step 1 · Why did my call get a 429?

[curious] It's sale day at Contoso Retail, and the shop assistant has just gone live. Calls start arriving faster than its model deployment allows.
[600ms]
[concerned] Some of them are turned away with an HTTP four twenty-nine, and it looks alarming.
[600ms]
[reassuring] But four twenty-nine only means too many requests. A limit was reached. It doesn't mean your code is broken.

## Step 2 · Tokens: the unit of cost and of limits

[calm] Models don't read whole sentences. They read and write tokens, which are small chunks of text.
[600ms]
[confident] Your bill and your limits are both counted in tokens, input and output alike.
[600ms]
[reflective] The split you see here is only illustrative, since real tokenizers cut text differently. Rates vary by model and deployment type, so look them up instead of memorising numbers.

## Step 3 · Quota: one pool, shared out in slices

[calm] Quota is the pool of tokens per minute your subscription may use for a given model and deployment type.
[600ms]
[confident] You hand out slices of that pool to your deployments, and each slice becomes that deployment's ceiling.
[600ms]
[curious] How a pool is scoped depends on the deployment type. Newer pools can be shared across regions or per data zone, so check the quotas and limits page for your model.

## Step 4 · Rate limits count what you reserve

[curious] Every deployment gets a tokens per minute limit and a requests per minute limit.
[600ms]
[serious] A request is counted when it arrives, using the prompt plus its max tokens setting. That's what you reserve, not what the model finally uses.
[600ms]
[reflective] Because it's an estimate, a limit can trip earlier than an exact count suggests. Bursts matter too, since requests are also checked over windows of a few seconds.

## Step 5 · Two kinds of 429, two different fixes

[curious] A four twenty-nine can mean two quite different things, and the fix depends on which.
[600ms]
[confident] Either you've used up your own slice, or the shared service is briefly busy. The error message and the response headers tell you which, including the remaining tokens and the retry after hint.
[600ms]
[serious] Teams often ask for more quota when the real cause is a short capacity squeeze. Check first, then act.

## Step 6 · Back off, then retry

[serious] Retrying at once makes things worse, because failed calls still count against you.
[600ms]
[confident] Wait as long as the service suggests, then wait a little longer each time, with a touch of randomness so clients don't all retry together.
[600ms]
[reassuring] Many SDKs can do this for you, so check your client library first. And keep a cap, so a bad day never becomes an endless loop.

## Step 7 · Pick the deployment type for your traffic

[curious] Now choose your traffic shape, and where your data is allowed to be processed.
[600ms]
[confident] As you change those choices, the suggested deployment type and its scaling levers change with them.
[600ms]
[reflective] Not every model supports every type, so check availability by model and region. This page is about limits and cost, so look at the pricing and quotas pages for real numbers.

## Step 8 · Need more headroom? Raise it or spread it

[determined] Need more headroom? Start by reassigning any unused tokens per minute, or ask for more quota from the service.
[600ms]
[confident] Then spread traffic across several deployments or regions, so no single limit becomes the ceiling.
[600ms]
[calm] Quota requests are reviewed in the order received, and active customers get priority. A gateway like Azure API Management can also enforce token limits for each consumer.

## Step 9 · Spend fewer tokens, pay less

[calm] Cost is simply tokens multiplied by the rate for your model and deployment type.
[600ms]
[encouraging] So there are three ways to shrink the bill: use fewer tokens, pick a cheaper model, or take a discounted path.
[600ms]
[reflective] There are no prices on screen on purpose, because they change. Check the pricing page, and measure before and after, since savings depend on your workload.

## Step 10 · Watch tokens and budgets before the bill does

[curious] Foundry shows token use and estimated cost for each deployment, so you can see where spend comes from.
[600ms]
[confident] Azure Monitor tracks the metrics and sends alerts, while Cost Management holds the budgets.
[600ms]
[serious] Remember that budgets alert you but don't stop spend, and Azure OpenAI has no hard cost cap. Tag by team or project so you can charge costs back.

## Step 11 · Limits and cost at a glance

[calm] Tokens set both your limits and your bill, and that's the thread through this whole lesson.
[600ms]
[confident] Plan your quota, handle four twenty-nine errors with backoff, choose the right deployment type, trim tokens, then watch usage and budgets.
[600ms]
[reassuring] Numbers change often, so keep the quotas and limits and pricing pages bookmarked instead of memorising values.
