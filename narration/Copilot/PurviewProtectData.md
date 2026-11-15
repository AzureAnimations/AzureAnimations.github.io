# Narrator Script — Microsoft 365 Copilot · Microsoft Purview: Protect Your Data

**Source animation:** [PurviewProtectData.html](../../journeys/Copilot/PurviewProtectData.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/purview/sensitivity-labels>
- <https://learn.microsoft.com/purview/dlp-learn-about-dlp>
- <https://learn.microsoft.com/purview/retention>
- <https://learn.microsoft.com/purview/trainable-classifiers-learn-about>

---

## Step 1 · Data roams

[calm] A Contoso customer list gets emailed, shared, copied, and then left to age.
[600ms]
[concerned] Priya needs three answers. Where is the sensitive data, who can use it, and how long do we keep it?
[600ms]
[confident] Microsoft Purview is the family of data security and governance tools that answers them. This lesson covers the protect side.

## Step 2 · Four jobs, one data journey

[curious] Purview answers Priya's questions in order. First, find the data.
[600ms]
[confident] Then mark and protect it, stop risky sharing, and finally keep it or delete it when it's no longer needed.
[600ms]
[reassuring] Those jobs map to Information Protection, Data Loss Prevention, and Data Lifecycle Management, the names you'll see in the exam skills list.

## Step 3 · Find it: classification

[calm] Purview has to know what an item is before it can act on it.
[600ms]
[confident] Patterns catch things like credit card numbers, and trainable classifiers learn what a type of document looks like from examples.
[600ms]
[impressed] Once an item is classified, labels, DLP and retention can all use that result as a condition.

## Step 4 · Mark it: a label travels with the file

[curious] A sensitivity label is a stamp stored in the file's metadata.
[600ms]
[confident] Save it, email it, share it, or ask Copilot about it, and the label goes along with its protection.
[600ms]
[reassuring] Copilot recognizes labels too. If a label encrypts the item, Copilot returns its data only when the user has the copy right.

## Step 5 · What a label can do

[calm] Applying the label is enough. The label then enforces the settings the admin chose.
[600ms]
[confident] Encryption controls who can do what, and for how long, and content marking adds headers, footers or watermarks in Office apps.
[600ms]
[curious] A label can also be applied automatically, or recommended to the user with a prompt.

## Step 6 · One label, four places

[curious] The scope of a label decides where it can be used.
[600ms]
[confident] That can be files, emails, meetings, or groups and sites.
[600ms]
[serious] For sites and groups, the label protects the container through its settings, not each file inside, and label support must be turned on first.

## Step 7 · Publish labels to the right people

[calm] Admins create labels in priority order, with the most restrictive, such as Highly Confidential, at the bottom.
[600ms]
[confident] Then they publish them with label policies, to users or groups. People apply labels by hand, or Purview applies them automatically.
[600ms]
[reflective] An item can have only one sensitivity label, and changes can take up to twenty-four hours to appear.

## Step 8 · Guard it: Data Loss Prevention

[curious] Data Loss Prevention watches what people do with sensitive items.
[600ms]
[confident] A rule holds the conditions and the actions, and the policy applies them across locations. An action might be a policy tip, a block, or a block with an override.
[600ms]
[reassuring] A good plan is to deploy in simulation mode first, then tune.

## Step 9 · Keep it, or delete it: retention

[calm] Data Lifecycle Management uses two actions, retain and delete.
[600ms]
[confident] Combined, they give three outcomes: retain only, delete only, or retain and then delete.
[600ms]
[serious] If settings conflict, retention wins over deletion, and the longest retention period wins.

## Step 10 · Retention policy or retention label?

[curious] A retention policy sets one rule for the whole location, like a site or mailbox.
[600ms]
[confident] A retention label sets a rule on each item and travels with it, which suits items that differ, or that need disposition review or records.
[600ms]
[reassuring] An item can carry a sensitivity label and a retention label at the same time.

## Step 11 · Which Purview capability?

[curious] Pick what Contoso needs to do.
[600ms]
[confident] The matching capability lights up, with a picture of how it works.
[600ms]
[reflective] Most real needs combine these tools, since classification feeds labels, DLP and retention.

## Step 12 · Find, mark, guard, keep

[calm] Purview finds the data, labels protect it, DLP stops risky sharing, and Data Lifecycle Management keeps or deletes it.
[600ms]
[confident] Now check yourself against the A B nine hundred skills measured and the official Learn material.
[600ms]
[determined] Purview names and licensing change quickly, so the Purview documentation on Microsoft Learn is your source of truth.
