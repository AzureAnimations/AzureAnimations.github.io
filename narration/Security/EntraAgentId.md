# Narrator Script — Security · Secure AI agents with Microsoft Entra Agent ID — Azure Security Journey

**Source animation:** [EntraAgentId.html](../../journeys/Security/EntraAgentId.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/agent-id/what-is-microsoft-entra-agent-id>
- <https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers>
- <https://learn.microsoft.com/entra/identity/conditional-access/agent-id>
- <https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview>

---

## Step 1 · An agent that acts on its own

[curious] Contoso's Invoice Agent reads mail, files and finance data on a schedule, with nobody signed in.
[600ms]
[serious] If it's hijacked, the attacker inherits everything it can reach.
[600ms]
[calm] This lesson follows one agent from identity to containment. Features still in preview are marked.

## Step 2 · Why agents need identities of their own

[calm] Imagine the agent borrows a person's account. Look at the log. It can't tell who acted, the person or the agent.
[600ms]
[confident] A separate agent identity keeps agent actions apart from people's, and lets you size its access.
[600ms]
[curious] It also keeps agents away from the most critical roles, and it scales, because agents come and go often.

## Step 3 · Microsoft Entra Agent ID: identities and blueprints

[calm] Entra Agent ID gives AI agents purpose-built identities in your directory.
[600ms]
[curious] An agent identity blueprint is the template. Each agent identity is created from it, with its own credentials and permissions.
[600ms]
[reflective] Some protections need Microsoft Agent 365 licensing, so check the current licensing page. You'll find agents in the Entra admin center.

## Step 4 · Who owns and sponsors an agent

[calm] Every agent identity needs people accountable for it. Owners run it technically, and they're optional.
[600ms]
[confident] Sponsors are business representatives, and at least one is required. They answer for the agent's purpose and lifecycle.
[600ms]
[reassuring] A sponsor can disable the agent but not re-enable it. And if a sponsor leaves, sponsorship moves to their manager.

## Step 5 · What an agent may reach

[calm] Access comes through an access package. It's time-bound, approved, and sized to the job.
[600ms]
[curious] Sam requests it for the agent, and the agent gets only what the package lists. That can include groups, API permissions and Entra roles.
[600ms]
[confident] On blueprints, start with only the essential delegated scopes.

## Step 6 · Conditional Access for agents

[curious] When an agent asks Entra for an access token, Conditional Access checks the signals first.
[600ms]
[calm] Then it allows or blocks. It runs each time a token is issued or refreshed.
[600ms]
[confident] A policy can target one agent, a whole blueprint, or agents with attributes you assign. Agent risk is still in preview.

## Step 7 · Try it: change the risk level

[excited] Your turn. Pick a risk level for the Invoice Agent.
[600ms]
[curious] The policy blocks only the level it names, so watch which levels still get a token.
[600ms]
[reassuring] In real life, start in report-only mode before you turn the policy on.

## Step 8 · Review access and remove what is not needed

[calm] Access should never outlive the need. Packages expire, and the sponsor is reminded as the end nears.
[600ms]
[curious] The sponsor can ask for an extension, which may start a new approval, or let it expire.
[600ms]
[confident] Access reviews let Sam keep or remove each permission, on a schedule.

## Step 9 · The blast radius

[serious] If the agent is compromised, the blast radius is every system it can reach, directly or in a few hops.
[600ms]
[calm] Knowing it tells you what to protect first.
[600ms]
[reflective] These are possible paths, not a promise that an attacker takes them. The graph is only as complete as your data.

## Step 10 · Defender XDR: an agent in the attack path

[calm] In an incident, select the agent and choose View blast radius.
[600ms]
[curious] Defender XDR draws the possible paths from it to your critical targets.
[600ms]
[reflective] This needs the Microsoft Sentinel data lake, and it extends and replaces attack path analysis.

## Step 11 · Contain it

[determined] Stop the agent first, then investigate. Confirming compromise sets risk to High, so policy blocks it.
[600ms]
[serious] Disabling stops every sign-in, and you can disable one identity or its whole blueprint. The logs show what it did.
[600ms]
[reassuring] If it was a false alarm, dismiss the risk and re-enable. If it was real, rotate credentials first, or retire the agent.

## Step 12 · Recap: identity, policy, review, contain

[calm] Give the agent its own identity. Control it with policy. Keep its access current.
[600ms]
[confident] And know how to contain it. The same four moves work for every agent.
[600ms]
[proud] This maps to S C five hundred, and to A B six fifty skills. Exams change, so read the current study guides.
