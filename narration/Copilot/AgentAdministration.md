# Narrator Script — Microsoft 365 Copilot · Agent Administration

**Source animation:** [AgentAdministration.html](../../journeys/Copilot/AgentAdministration.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview>
- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings>
- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests>
- <https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits>

---

## Step 1 · Someone wants an agent

[calm] Alex built a helper agent for new hires, called Onboarding Buddy, and wants all of Contoso to use it.
[600ms]
[curious] Priya, the admin, has three questions before anything goes live.
[600ms]
[confident] This lesson follows the basic agent administration skills of exam A B nine hundred. To build an agent, see the Copilot Studio journey.

## Step 2 · The agent journey

[calm] Every agent travels the same five stages. A maker creates it.
[600ms]
[curious] Then the admin approves it, publishes it, monitors it, and one day retires it.
[600ms]
[reassuring] In the Microsoft 365 admin center, this lives under Agents. Menu names change, so confirm them on Microsoft Learn.

## Step 3 · Who can use agents?

[curious] The first question: who can use agents at all? The User access setting decides.
[600ms]
[calm] It can be everyone, no one, or only the users and groups you name. All users is the default.
[600ms]
[serious] Data processed by non-Microsoft agents isn't covered by Microsoft agreements, so review the publisher's terms before you allow access.

## Step 4 · Who can install and share?

[calm] Agent settings also decide whose agents people can install, and who can share the agents they make.
[600ms]
[curious] The Sharing setting in the Microsoft 365 admin center applies to agents built with Agent Builder.
[600ms]
[confident] Copilot Studio sharing limits live in the Power Platform admin center, and can take up to an hour to be enforced.

## Step 5 · Create an agent

[curious] There are two low-code routes. Agent Builder is quick: describe the agent, add knowledge, and test it.
[600ms]
[calm] Copilot Studio adds actions, connectors, and workflows. Agent Builder can't author actions that call external services.
[600ms]
[reassuring] Agents made with Microsoft Foundry or the Microsoft 365 Agents Toolkit appear in the same admin center.

## Step 6 · The request arrives

[calm] Alex submits the agent. It shows up under Requests in the Microsoft 365 admin center, and waits for an administrator.
[600ms]
[curious] Pending review means a new agent. Pending update means a new version of one that's already published.
[600ms]
[confident] For an update, users keep the previous version until you approve. You can filter the list by state and channel.

## Step 7 · Review before you decide

[calm] Before deciding, open the submission. It carries the agent's details.
[600ms]
[curious] Check what it is, who owns it, what data it reads, what it can do, and which permissions it asks for.
[600ms]
[serious] Use the role with the fewest permissions that can do the job. Global Administrator is for emergencies, and roles like Security Reader can view, but not approve.

## Step 8 · Your turn: approve or reject

[excited] Your turn. Choose a decision, then an audience, and watch who can install Onboarding Buddy.
[600ms]
[calm] Publishing is a wizard. Choose who can install, apply a policy template, then review the permissions and grant admin consent.
[600ms]
[reassuring] Rejecting keeps the agent unavailable.

## Step 9 · Watch it: two admin centers

[curious] Once it's live, you monitor it. Two admin centers answer different questions.
[600ms]
[calm] The Microsoft 365 admin center tells you what exists and who uses it. The agent overview shows the last thirty days.
[600ms]
[confident] The Power Platform admin center tells you how your Copilot Studio agents are running, including the agent session success rate, which is in preview.

## Step 10 · Update, block, retire

[calm] An agent keeps changing after launch. Approve its updates when they appear in Requests as pending update.
[600ms]
[serious] If it turns unsafe, block it. That restricts the agent across the organization, and you can undo it with Unblock.
[600ms]
[reassuring] When it's no longer needed, delete it. It's a soft delete, so you can restore it for thirty days. Permanent deletion can't be undone.

## Step 11 · Let rules do the housekeeping

[curious] Agent management rules find agents that match a condition, and act on them in bulk.
[600ms]
[calm] You review the affected agents before a rule runs. You'll find the rules under Agents, Settings.
[600ms]
[confident] Reassigning ownerless agents supports only agents made with Agent Builder. Applying a template is a one-time action, not a schedule.

## Step 12 · Five stages, two admin centers

[calm] Let's recap. You decide who uses an agent, you approve it, and you keep watching it.
[600ms]
[proud] Five stages, across two admin centers, and Priya has an answer for all three of her questions.
[600ms]
[determined] Now check yourself against A B nine hundred, and always read the current study guide on Microsoft Learn.
