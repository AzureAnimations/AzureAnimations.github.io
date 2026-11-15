# Narrator Script — Compute · Functions: Build an API and Deploy It

**Source animation:** [FunctionsApiAndDeploy.html](../../journeys/Compute/FunctionsApiAndDeploy.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-functions/functions-triggers-bindings>
- <https://learn.microsoft.com/azure/azure-functions/functions-deployment-technologies>

---

## Step 1 · One function, one HTTP endpoint

[calm] A function is your code plus exactly one trigger. The trigger is how the function starts.
[600ms]
[confident] Give it an HTTP trigger, and a web request starts your code. That's what turns the function into an API endpoint.
[600ms]
[curious] For Contoso's orders app, the default address is the API path followed by the function name.

## Step 2 · HTTP trigger: route, methods and auth

[calm] The trigger decides three things. The route is the URL after the API path, and it can hold parameters like an ID.
[600ms]
[confident] The methods say which HTTP verbs respond; leave them out and all of them do. The authorization level is anonymous, function or admin.
[600ms]
[serious] When you run locally, authorization isn't enforced. Once you publish, the level is enforced.

## Step 3 · Return a status code and JSON

[calm] Now your code builds the answer: a status code the client can act on, and a JSON body it can read.
[600ms]
[confident] Return two hundred for success, or four oh four when the order isn't found. Set the mimetype to application JSON so clients parse the body correctly.
[600ms]
[reflective] If your function returns nothing, the HTTP default is two oh four, No Content, with an empty body.

## Step 4 · Bindings: Cosmos DB in, Service Bus out

[curious] Bindings connect the function to other services without client code. Click each hop to follow the data.
[600ms]
[confident] Here an input binding passes Cosmos DB data in before your code runs, and an output binding writes the result to Service Bus for you.
[600ms]
[reassuring] Bindings are optional. You can always use an Azure SDK client in your code instead. A connection setting names the app setting that says how to connect.

## Step 5 · Run it locally with Core Tools

[calm] Core Tools runs the Functions runtime on your own machine.
[600ms]
[confident] Start it, and your functions answer on port seventy-one seventy-one by default. Call the API and fix mistakes before anything is deployed.
[600ms]
[reflective] The local settings file is for local runs only, and authorization isn't enforced locally by default.

## Step 6 · Create the function app

[calm] A function app needs three choices. How is it hosted? Which runtime runs your code? And which storage account keeps its state?
[600ms]
[confident] Flex Consumption is recommended for new serverless apps. Match the runtime stack to your code's language and version.
[600ms]
[serious] The storage account is required, because it holds keys and state. Check the Learn hosting page for the current plan list before you choose.

## Step 7 · Deploy: zip, publish and CI

[calm] Your code usually travels as a zip package, and zip deployment is the default and recommended technology for function apps.
[600ms]
[confident] Pick the route by stage. While you build, use Core Tools, Visual Studio Code or the Azure CLI.
[600ms]
[determined] Once it matters, move to CI and CD, using the Deployment Center, GitHub Actions or Azure Pipelines. On Flex Consumption, package deployment is the only method.

## Step 8 · App settings and managed identity

[calm] Settings tell the app where things are. A setting names the account, but holds no key.
[600ms]
[confident] A managed identity proves who the app is, so no secret has to sit in the settings. Prefer that, use Key Vault when a service can't, and keep a shared secret as the last resort.
[600ms]
[serious] Grant only the role the binding needs. Cosmos DB data access uses its own role system.

## Step 9 · Slots and safe release

[curious] A slot is a second copy of the app with its own address.
[600ms]
[confident] Deploy there, test, then swap it into production. If it goes wrong, swap back. A slot setting stays with the slot during a swap.
[600ms]
[serious] A swap warms the staging slot first, but it doesn't guarantee zero downtime. Flex Consumption doesn't support slots today, and uses rolling updates instead.

## Step 10 · Check it: logs and a test call

[calm] Call the live API with curl and the function key, sent as a code query value or in the function key header.
[600ms]
[impressed] Then find that same call in Application Insights, with its logs, performance and errors. Live Metrics is the recommended way to stream logs.
[600ms]
[proud] A good response plus a visible trace means the release works. That's the objective: build serverless APIs, then configure and deploy function apps.
