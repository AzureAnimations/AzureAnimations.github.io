# Narrator Script — Microsoft 365 Copilot · Copilot, Data and Oversharing

**Source animation:** [CopilotDataAndOversharing.html](../../journeys/Copilot/CopilotDataAndOversharing.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy>
- <https://learn.microsoft.com/microsoft-365/copilot/architecture-data-protection-auditing>
- <https://learn.microsoft.com/sharepoint/data-access-governance-reports>

---

## Step 1 · It answered. Should it have?

[calm] Alex, in Sales, asks Copilot about next year's salary bands. Copilot answers, using a file from the HR site.
[600ms]
[concerned] Priya, the admin, needs to know how that happened.
[600ms]
[confident] This lesson follows the data security and oversharing skills of exam A B nine hundred. Learn now says Microsoft Copilot for what the exam calls Copilot.

## Step 2 · Copilot sees what Alex sees

[calm] Copilot works with the signed-in user's own access. Files Alex can open can ground his answers.
[600ms]
[curious] Files he can't open stay out of reach. Copilot only surfaces organizational data the user has at least view permission for.
[600ms]
[reassuring] It uses the same access controls as other Microsoft 365 services, and it doesn't grant new access.

## Step 3 · Follow one prompt through Microsoft Graph

[curious] Let's follow one prompt. Copilot sends it to Microsoft Graph, which finds relevant content Alex is allowed to see.
[600ms]
[calm] That grounding goes to the model along with the prompt.
[600ms]
[confident] Grounding means anchoring a response in the user's own work content, like documents, email, calendar, chats, and meetings. Semantic indexing honors the same access boundary.

## Step 4 · Stays in the tenant, not used for training

[calm] Prompts, responses, and data accessed through Microsoft Graph aren't used to train the foundation models.
[600ms]
[reassuring] Permissions keep content from leaking between users, groups, and tenants.
[600ms]
[curious] Copilot activity history is stored with your other Microsoft 365 content, and admins can manage it with Microsoft Purview.

## Step 5 · Layers that protect it

[calm] Copilot honors Microsoft 365 permissions first. That's the foundation.
[600ms]
[curious] Microsoft Purview and Microsoft Defender then add their own controls on top. Which features you get depends on your licensing.
[600ms]
[serious] Encrypted content needs the user to hold both the VIEW and EXTRACT usage rights before Copilot can work with it.

## Step 6 · Built on six responsible AI principles

[calm] Microsoft's responsible AI principles guide Copilot. There are six of them.
[600ms]
[curious] This lesson lives in just one: privacy and security.
[600ms]
[reassuring] A B nine hundred asks you to understand the principles. The full tour is in the Responsible AI lesson of the Foundry journey.

## Step 7 · Why oversharing happens

[serious] Here's the key idea. Copilot doesn't widen access. It makes wide access visible.
[600ms]
[curious] Three habits leave content open to more people than anyone meant. Permissions flow from a site down to its libraries, folders, and files, unless someone breaks the inheritance.
[600ms]
[concerned] And sharing links can be for anyone, for people in the organization, or for specific people. The wider ones are easy to forget.

## Step 8 · Four tools to find oversharing

[calm] Start with reports and assessments that show where content is exposed.
[600ms]
[curious] Then use insights and the dashboard to decide what to fix first.
[600ms]
[confident] Roles matter here. The Security section of the Copilot dashboard needs Global Reader to view and AI administrator to change. SharePoint reports need the SharePoint administrator role.

## Step 9 · Run a data access governance report

[calm] In the SharePoint admin center, open Reports, then Data access governance.
[600ms]
[curious] Start with the site permissions report, to see which sites are open the widest.
[600ms]
[serious] Snapshot reports show today's state, while activity reports cover the last twenty-eight days. Without SharePoint Advanced Management, enable data collection first.

## Step 10 · SharePoint Advanced Management

[calm] SharePoint Advanced Management, or SAM, helps you manage content sprawl, manage the content lifecycle, and prevent oversharing.
[600ms]
[curious] These are the options named in Learn.
[600ms]
[reassuring] SAM capabilities for a Copilot deployment come with a Copilot license. Some features, like restricted site creation, need the Plan one add-on, so check Learn for the current list.

## Step 11 · Restricted access control

[calm] Now here is a fix. Limit a site to one Microsoft 365 group or a Microsoft Entra security group.
[600ms]
[impressed] Everyone else is blocked, even with a direct permission or a shared link, and the files drop out of search and Copilot for them.
[600ms]
[confident] Shared and private channel sites need their own setting.

## Step 12 · Try it: change the protection

[excited] Your turn. Pick a fix for the salary file.
[600ms]
[curious] See whether Alex can read it, and whether Copilot can show it to him.
[600ms]
[serious] Restricted content discovery is temporary. It doesn't change permissions, and people with access can still open the file. Use it while you fix the real permissions.

## Step 13 · See it, find it, fix it

[calm] Let's recap. You see it, you find it, and then you fix it.
[600ms]
[proud] Copilot respects access, so good access is the fix. Priya now knows how that answer happened, and how to prevent it.
[600ms]
[determined] Check yourself against the A B nine hundred skills measured, and the official Microsoft Learn training.
