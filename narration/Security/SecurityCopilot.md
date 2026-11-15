# Narrator Script — Security · Microsoft Security Copilot: workspaces, roles, plugins and agents — Azure Security Journey

**Source animation:** [SecurityCopilot.html](../../journeys/Security/SecurityCopilot.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/copilot/security/microsoft-security-copilot>
- <https://learn.microsoft.com/copilot/security/plugin-overview>
- <https://learn.microsoft.com/copilot/security/manual-onboarding>
- <https://learn.microsoft.com/copilot/security/authentication>

---

## Step 1 · Forty open incidents and one afternoon

[calm] Priya is a Contoso security analyst with forty open incidents and one afternoon. Each incident lives in a different console.
[600ms]
[concerned] Each one needs a summary, a query and a decision before the day ends.
[600ms]
[determined] This lesson follows one analyst and one admin through Security Copilot, covering the S C five hundred skills. Everyone here is fictional.

## Step 2 · What Security Copilot is

[calm] Microsoft Security Copilot is a generative AI security solution. You ask in plain language.
[600ms]
[curious] It grounds the question in your own security data, using plugins, then sends it to the language model.
[600ms]
[confident] The response is processed again with plugins, then returned for you to review and assess.

## Step 3 · Capacity and workspace

[calm] Capacity is the compute you provision, measured in Security Compute Units. A workspace is the tenant-bound space where users, automations and agents operate.
[600ms]
[confident] If Security Copilot isn't included in your license, you provision units yourself, using an Azure subscription and a resource group.
[600ms]
[reassuring] Microsoft 365 E5 and E7 customers may have it included and provisioned automatically.

## Step 4 · Configure a workspace

[calm] First-run setup walks an administrator through four choices: the workspace name, capacity, data sharing, and a review of roles.
[600ms]
[serious] Two need care. Where data is stored can't be changed after the workspace is created.
[600ms]
[concerned] And data sharing with Microsoft is on by default for customers without E5 or E7. Copilot owners can change it at any time.

## Step 5 · Roles: owner and contributor

[calm] Two Security Copilot roles open the platform, owner and contributor. They aren't Microsoft Entra roles.
[600ms]
[serious] Neither gives access to security data on its own. That still comes from your Entra, Azure and service roles.
[600ms]
[confident] Assign them in settings, preferably to security groups. Copilot keeps at least two owners, and some admin roles inherit owner automatically.

## Step 6 · Embedded or standalone

[curious] Use Security Copilot in its own portal, or inside the Microsoft security tools you already work in.
[600ms]
[confident] Embedded experiences appear in products like Defender XDR, Sentinel, Entra, Intune and Purview, often as a sidecar.
[600ms]
[reassuring] It's the same Security Copilot in both places, and each product lists its own role and license needs.

## Step 7 · Plugins: Microsoft, third-party, custom

[calm] A plugin is a set of related tools, also called skills, that lets Copilot reach data or take action. There are three kinds: Microsoft, third-party and custom.
[600ms]
[confident] Microsoft plugins use on-behalf-of authentication, so they reach only what you can already access.
[600ms]
[serious] Owners control custom plugins. Vet one at user level before you make it available to the whole workspace.

## Step 8 · Enable a plugin, change the answer

[curious] With the plugin off, Copilot can only talk in general terms.
[600ms]
[impressed] Turn it on, and the same prompt is grounded in Contoso's own incidents. Try the switch and compare the two answers.
[600ms]
[reassuring] A plugin with a Set up button is configured per user, and your own roles still limit the data it can return.

## Step 9 · Agents that work without being asked

[calm] An agent handles a repeated task when its trigger fires. That might be a schedule, an event, or a manual run.
[600ms]
[confident] Setting one up means choosing its trigger, identity and permissions, plus the plugins and roles it needs. You set the limits and stay in control.
[600ms]
[reflective] Agents use Security Compute Units like other features, and some are still in preview.

## Step 10 · The Security Store

[calm] In the Security Store you find an agent, get it, and have the right person approve its permissions before you set it up.
[600ms]
[confident] Microsoft agents go to Active agents. Partner agents are purchased or subscribed to in the store.
[600ms]
[curious] When a partner agent needs Microsoft data, a Global Administrator approves it. Subscriptions live in the store, while running an agent uses capacity.

## Step 11 · Try it: pick the right tool for six tasks

[curious] Six tasks, five parts of Security Copilot. Read the task, then choose the one that solves it.
[600ms]
[encouraging] Role, workspace, plugin, agent or Security Store. Each task has one best fit.
[600ms]
[reassuring] You get the reason after each pick, so a wrong guess still teaches you something.

## Step 12 · Recap: workspace, role, plugin, agent

[calm] Four things to set up, in this order: the workspace, the roles, the plugins, then the agents. Each answers a question an administrator is asked.
[600ms]
[confident] Those are the Implement Microsoft Security Copilot skills in the S C five hundred study guide, including Security Store agents.
[600ms]
[proud] Exams change, so read the current study guide before you rely on this list.
