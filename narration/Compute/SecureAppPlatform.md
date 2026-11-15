# Narrator Script — Compute · Secure Azure Functions, Logic Apps, App Service and API Management

**Source animation:** [SecureAppPlatform.html](../../journeys/Compute/SecureAppPlatform.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/overview-authentication-authorization>
- <https://learn.microsoft.com/azure/azure-functions/security-concepts>
- <https://learn.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app>
- <https://learn.microsoft.com/azure/api-management/mitigate-owasp-api-threats>

---

## Step 1 · Who can call it, and what can it reach?

[calm] Contoso Shop runs on four platforms: App Service, Functions, Logic Apps and API Management.
[600ms]
[curious] For each one, you need two answers. Who is allowed to call it, and what is it allowed to reach?
[600ms]
[confident] Every control in this lesson answers one of those two questions, inbound or outbound.

## Step 2 · App Service: sign-in, HTTPS and managed identity

[calm] On App Service, browsers must use HTTPS, with a minimum TLS version. Those are settings on the app.
[600ms]
[confident] Users must sign in, so you turn on built-in authentication rather than writing it yourself.
[600ms]
[impressed] And the app reaches Key Vault through a managed identity from Microsoft Entra ID. There's no credential to store or rotate in your code.

## Step 3 · Functions: authorization levels and keys

[calm] Every function with an HTTP trigger has an authorization level, and the anonymous level needs no key.
[600ms]
[confident] The function and admin levels need an access key, sent in a header or the code query string. Treat the master key like an administrator password.
[600ms]
[serious] But a key is a shared secret, not a sign-in. For real identity, turn on built-in authentication.

## Step 4 · Functions network: inbound and outbound

[calm] Public callers meet an allow and deny list, which is ordered by priority.
[600ms]
[confident] Private callers use a private endpoint, which gives the app a private address for inbound traffic.
[600ms]
[serious] Calls out to private services use virtual network integration. But it only affects outbound traffic, so it doesn't make the app private.

## Step 5 · Logic Apps: who can start a workflow

[curious] A request trigger is simply a URL, so who is allowed to call it?
[600ms]
[confident] Choose how callers prove who they are: OAuth with Microsoft Entra ID, shared access signatures, inbound IP restrictions, or put the workflow behind API Management.
[600ms]
[reassuring] For the connections the workflow makes, use a managed identity instead of a stored credential.

## Step 6 · Logic Apps: keep secrets out of run history

[calm] Run history shows every input and output of every action.
[600ms]
[serious] That's a problem for sensitive values, so turn on secure inputs and secure outputs to hide them. An action that uses a secured output also has its inputs hidden.
[600ms]
[confident] Define your secrets as secure string parameters. Every value on screen here is fictional.

## Step 7 · API Management: validate the token

[calm] Now the gateway. It checks the caller's token before the backend ever sees the request.
[600ms]
[confident] The validate JWT policy checks the signature, the issuer, the audience and the expiry, plus any claims you require.
[600ms]
[reassuring] No valid token means the call stops at the gateway, and by default the caller gets a four oh one.

## Step 8 · API Management: limits, IP filter, backend

[calm] More policies guard the same door. An IP filter allows or denies addresses.
[600ms]
[confident] A rate limit caps the calls, and a caller who goes over gets a four twenty-nine, Too Many Requests.
[600ms]
[curious] And toward the backend, the gateway proves itself too, with a managed identity token or a client certificate for mutual TLS.

## Step 9 · Put a WAF in front

[calm] A web application firewall inspects every request for common attacks before it reaches your apps, functions or gateway.
[600ms]
[confident] Azure Web Application Firewall runs on Application Gateway or Front Door. It protects against attacks such as SQL injection and cross-site scripting.
[600ms]
[serious] Then lock your apps so they accept traffic only through that front door.

## Step 10 · Try it: where is the request blocked?

[curious] Pick a request and watch the path. It shows the first layer that rejects it.
[600ms]
[confident] Layers after that never see the request, so a bad call stops as early as it can.
[600ms]
[reflective] That's why you stack the layers. Each one catches what the one before it cannot.

## Step 11 · Which control for which platform?

[calm] Eight controls, four platforms. Watch each control land on the platform where you set it.
[600ms]
[confident] Some settings overlap, such as access restrictions on both App Service and Functions.
[600ms]
[reassuring] These eight are simply the clearest match for each platform, and a good way to remember where each one lives.

## Step 12 · Recap: identity, network, front door

[calm] Every control answers one question. Who are you? Where are you coming from? Does this request look safe?
[600ms]
[confident] That's identity, network, and the front door. Use all three layers together on every platform.
[600ms]
[proud] This lesson follows the Secure compute skills in the S C five hundred study guide.
