# Narrator Script — Security · Microsoft Defender for Cloud — Azure Security Journey

**Source animation:** [DefenderForCloud.html](../../journeys/Security/DefenderForCloud.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls>
- <https://learn.microsoft.com/azure/defender-for-cloud/exempt-resource>
- <https://learn.microsoft.com/azure/defender-for-cloud/concept-regulatory-compliance-standards>

---

## Step 1 · Is my Azure estate secure?

[calm] Contoso runs servers, containers, data and apps across many subscriptions, and Priya has to know what's weak and what's under attack.
[600ms]
[curious] That's the job of Microsoft Defender for Cloud, and this lesson covers it for the exams A Z three oh five, A Z one oh four and A Z seven hundred.
[600ms]
[reassuring] For Defender XDR in Microsoft 365, see the Zero Trust journey instead.

## Step 2 · Two pillars: posture and protection

[confident] Defender for Cloud does two jobs. The first is posture management, called CSPM, which finds and fixes weaknesses.
[600ms]
[calm] The second is workload protection, called CWPP, which detects and responds to threats.
[600ms]
[reflective] Microsoft Learn also lists DevSecOps, meaning code and pipeline security, as a third component of this cloud-native application protection platform.

## Step 3 · Secure score and recommendations

[calm] Defender for Cloud checks your resources against a security benchmark, and it applies the Microsoft cloud security benchmark by default.
[600ms]
[confident] It raises recommendations and rolls the results into one secure score. Fix more, and the score goes up, which means lower identified risk.
[600ms]
[encouraging] Foundational CSPM, with the score and recommendations, is free. The numbers on screen are just an example.

## Step 4 · Four ways to act on a recommendation

[calm] Each recommendation lists the issue, its severity, the affected resources and the fix steps.
[600ms]
[confident] You can fix it, block it with Deny or Enforce through Azure Policy, accept it with an exemption, or give it an owner.
[600ms]
[serious] Deny and Enforce apply only to Azure resources and a subset of recommendations, and governance rules need the Defender CSPM plan.

## Step 5 · Regulatory compliance dashboard

[curious] A standard is a set of controls, and each control is a group of recommendations.
[600ms]
[calm] The dashboard shows which controls your resources pass. A control that can't be assessed automatically shows as unavailable, in grey.
[600ms]
[confident] The Microsoft cloud security benchmark is on by default, and extra regulatory assessments need Defender CSPM.

## Step 6 · Attack paths and cloud security explorer

[curious] Defender CSPM maps your cloud as a graph and finds the routes an attacker could take to your critical assets.
[600ms]
[impressed] It then suggests the fix that breaks the path, so you fix the one thing that matters most.
[600ms]
[serious] Attack path analysis and the cloud security explorer are part of the paid Defender CSPM plan, and they need agentless scanning or the Defender for Servers vulnerability assessment.

## Step 7 · One Defender plan per workload

[calm] Workload protection is switched on plan by plan, and each plan adds threat detection for one kind of resource.
[600ms]
[confident] Servers, storage, databases, containers, AI services and more each have their own plan. Defender for Servers comes as Plan 1 and Plan 2.
[600ms]
[reassuring] Enable a plan on a subscription, and it covers that resource type across the whole subscription.

## Step 8 · Alerts, incidents and your SOC

[calm] Enabled plans raise alerts ranked by severity, with the affected resources and remediation steps.
[600ms]
[confident] Defender for Cloud groups related alerts into one incident, so the team sees a story instead of a pile.
[600ms]
[impressed] Alerts can stream to a SIEM like Microsoft Sentinel, or to SOAR and ITSM tools, and they appear in the Defender portal too.

## Step 9 · Enable once, cover everything

[confident] Turn plans on at the subscription level, and that protects its resources.
[600ms]
[curious] To cover a whole management group, assign the built-in Azure Policy that enables Defender for Cloud, with a remediation task.
[600ms]
[reassuring] Agentless scanning needs no agent on each machine. It's part of Defender CSPM and Defender for Servers Plan 2.

## Step 10 · One view across clouds

[calm] Your estate probably isn't only Azure. Connect AWS accounts and GCP projects, and add on-premises servers through Azure Arc.
[600ms]
[confident] Defender for Cloud uses agentless connectors for AWS and GCP, so you get posture insight and workload protection beyond Azure.
[600ms]
[impressed] Everything shows up in one place.

## Step 11 · What you pay for

[calm] The posture basics are free. Advanced posture and each workload plan are paid, and charges follow the plans and resources you turn on.
[600ms]
[reflective] There are no prices here on purpose, because they change. Use the pricing page and the cost calculator.
[600ms]
[encouraging] A new subscription can try Defender for Cloud free for thirty days, but malware scanning in Defender for Storage is billed from day one.

## Step 12 · Which plan protects it?

[curious] Now it's your turn. Pick a resource type and see which Defender plan protects it.
[600ms]
[calm] You'll see what the plan detects, plus an example recommendation for that resource.
[600ms]
[confident] Every plan also has its own recommendation asking you to turn it on, and the finding shown is just one example, not the full list.

## Step 13 · Posture, protection, response

[calm] Find and fix weaknesses, detect and respond to threats, and turn it all on at scale.
[600ms]
[confident] Then check yourself against the skills measured for your exam. The A Z seven hundred guide names secure score, attack path analysis and the cloud security explorer.
[600ms]
[reassuring] A Z three oh five includes managing compliance, and A Z one oh four covers governance and monitoring. Exams change, so read the current study guide.
