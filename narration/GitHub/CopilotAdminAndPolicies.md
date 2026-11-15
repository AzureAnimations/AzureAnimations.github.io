# Narrator Script — GitHub · Administer Copilot: Policies, Audit Logs and the REST API

**Source animation:** [CopilotAdminAndPolicies.html](../../journeys/GitHub/CopilotAdminAndPolicies.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Contoso Rolls Out Copilot

[calm] Contoso wants Copilot for its two hundred developers. Ravi, the organization owner, has four questions to answer before anyone gets a seat.
[600ms]
[curious] Which plan? Who gets a seat, and which features are on? And how do we keep an eye on it all?
[600ms]
[confident] Those questions are the real job of a Copilot administrator, and each one gets its own step in this lesson.

## Step 2 · Plans for Teams

[calm] Copilot Business and Copilot Enterprise are the two team plans.
[600ms]
[confident] Both give an organization central management and policy control. Enterprise adds enterprise-grade capabilities on top of Business, including a larger credit pool.
[600ms]
[reassuring] Free, Pro, Pro plus, and Max are individual plans for personal accounts. Prices change, so check the GitHub plans page for current figures.

## Step 3 · Assign Seats

[calm] An organization owner chooses who may use Copilot, in the organization's Copilot Access settings.
[600ms]
[confident] You can give a seat to all current and future members, or pick selected people and teams, even by uploading a file.
[600ms]
[serious] Remember, seat billing starts when access is granted, not at first use.

## Step 4 · Feature Policies

[curious] Policies switch Copilot features on or off for everyone who has a seat. Chat, agent mode, the command line, code review, and more.
[600ms]
[confident] Each feature gets one switch, set by the owner. Code review needs its policy turned on. Suggestions that match public code can be allowed or blocked.
[600ms]
[serious] And if the enterprise owner has already set a policy, the organization can't override it.

## Step 5 · Availability Across IDEs and GitHub.com

[calm] A policy only matters where its feature exists. So check each policy against the places people use Copilot: IDEs, the cloud on GitHub dot com, the command line, and code review.
[600ms]
[curious] The public code filter works in IDEs only, among these four. MCP servers and content exclusion work on all four.
[600ms]
[reassuring] The rule to remember: not every policy applies to every surface.

## Step 6 · Enterprise Over Organization

[calm] Policies are set at the enterprise first. Enabled or Disabled there can't be overridden by an organization.
[600ms]
[curious] Let organizations decide hands the choice down. Try the three enterprise settings and see whether Ravi's wish to turn the Copilot command line off in Contoso wins.
[600ms]
[serious] If someone has seats from two organizations, the least restrictive setting usually wins, but sensitive policies use the most restrictive.

## Step 7 · Content Exclusions at Org Level

[calm] Owners can keep chosen files and repositories away from Copilot. The same control exists at three levels.
[600ms]
[confident] Repository admins, organization owners, and enterprise owners can each set it. It needs Copilot Business or Copilot Enterprise.
[600ms]
[reassuring] Any change is written to the audit log, so there's a record. The privacy lesson shows how to write the rules.

## Step 8 · The Audit Log

[calm] The audit log records changes to your Copilot plan, such as seats and policies.
[600ms]
[curious] Search for Copilot events, then open one to see who did what. You can also search by actor to see agent activity on GitHub.
[600ms]
[serious] It doesn't hold prompts or other client session data, and events are kept for a limited time. Stream the log to a SIEM for long-term history.

## Step 9 · Subscriptions by REST API (Preview)

[calm] Organization owners can add and remove seats with the REST API.
[600ms]
[confident] A POST request adds users, and a DELETE request sets their seats to pending cancellation.
[600ms]
[serious] These endpoints are in public preview and may change. The token on screen is a placeholder. Never paste a real token into code or slides.

## Step 10 · Billing and Usage

[calm] Two meters run side by side. Seats are billed to the organization or enterprise that assigns them, each monthly cycle.
[600ms]
[curious] AI credits are different. Chat, the command line, the cloud agent, and more draw from a shared pool as people use Copilot.
[600ms]
[confident] Budgets let you cap spending per user, cost center, organization, or enterprise. This step shows the mechanism, not prices.

## Step 11 · Recap: The Admin’s Weekly Checklist

[calm] Administering Copilot is a routine. Check seats: who has one, and who actually uses it.
[600ms]
[confident] Check policies, the enterprise first and then the organization. Then review the records: the audit log and billing.
[600ms]
[proud] That covers the G H three hundred skills for managing organization-wide settings and policies. Treat the checklist as a study aid.
