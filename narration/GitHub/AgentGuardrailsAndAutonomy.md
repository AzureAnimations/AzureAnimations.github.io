# Narrator Script — GitHub · Guardrails and Autonomy Levels for Agents

**Source animation:** [AgentGuardrailsAndAutonomy.html](../../journeys/GitHub/AgentGuardrailsAndAutonomy.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>
- <https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai>

---

## Step 1 · Fast and safe

[calm] Every agent team wants speed and safety at once. Guardrails are how you get both.
[600ms]
[concerned] With no checks, one bad change reaches production. With a person on every step, the work just waits.
[600ms]
[confident] The goal for Contoso Delivery is to ask a person only where it lowers the risk.

## Step 2 · Classify actions by risk

[curious] Before you decide how free an agent is, sort each action by the damage it could do.
[600ms]
[calm] Ask three questions. Could it break the delivery or a service? Could it expose data or change who has access? Could it break a rule or a policy?
[600ms]
[serious] The highest of the three scores sets the overall risk. These ratings are examples, and each team rates its own.

## Step 3 · Autonomy levels

[calm] Think of autonomy as a dial. Each step up gives the agent more to do and a person less.
[600ms]
[confident] At level one, the agent suggests and a person makes the change. At level two, it asks before it acts.
[600ms]
[reflective] At levels three and four, a person reviews after, or the agent acts alone. It's a teaching ladder, not an official list.

## Step 4 · Match the level to the risk

[curious] Now choose the level that fits the risk. Pick an action here and watch its level appear.
[600ms]
[confident] Reads and searches are low risk, so the agent acts alone. Edits on a branch are medium, so a person reviews after.
[600ms]
[serious] Deploying or spending needs approval first. Deleting or changing policy is suggest only. Build one level per kind of action, not one for everything.

## Step 5 · Actions that need a person

[calm] Most actions are safe to go ahead without a person.
[600ms]
[serious] But some can't be undone, and some could break a compliance rule. For those, a person decides.
[600ms]
[reassuring] Keeping that short list small is what lets everything else move quickly.

## Step 6 · Require authorization

[curious] Now put a person in the way where it matters. Follow the path here from the agent's change to production.
[600ms]
[confident] A ruleset or branch protection can require a pull request and approvals. Code owners must approve changes to their files. Environment approval holds a deploy job until reviewers say yes.
[600ms]
[reassuring] These are real GitHub controls.

## Step 7 · Block what must not happen

[serious] Some changes must never happen, even from an agent. Rulesets stop them.
[600ms]
[confident] Rules can require a pull request, forbid force pushes, and demand that checks pass before merging. A required policy check is a status check you write for your own policy.
[600ms]
[reassuring] The agent is subject to the same rulesets as a person.

## Step 8 · Least privilege for agents

[calm] Give the agent only the access its task needs, in the smallest place. Here's a triage agent that labels issues.
[600ms]
[confident] Set the token permissions to the least the task needs, and list only the tools the agent should use.
[600ms]
[reassuring] It starts in one repository, pushes to its own branch, and runs with the firewall on.

## Step 9 · Responsible AI standards

[curious] Write the standard down where the agent reads it, such as repository custom instructions. Then check the result.
[600ms]
[calm] Microsoft's six principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.
[600ms]
[serious] Instructions guide the agent, but checks and a person's review are what confirm it.

## Step 10 · Too many approvals

[concerned] Each approval prompt costs time. Too many, and people stop reading them.
[600ms]
[confident] Keep approvals for actions that are costly or hard to undo. Remove them for safe, repeatable ones. In VS Code you can scope an approval to one use, one session, or always.
[600ms]
[serious] Trimming prompts is not the same as allowing everything.

## Step 11 · Recap: an autonomy matrix

[calm] One team, one matrix. Every action has a risk, a level and a guardrail.
[600ms]
[confident] Classify and assign. Then guard, with a person on sensitive changes, blocks for rule-breaking, and least privilege. And keep it fast by removing approvals that add no safety.
[600ms]
[proud] That covers the implement guardrails and accountability skill area of the G H six hundred study guide.
