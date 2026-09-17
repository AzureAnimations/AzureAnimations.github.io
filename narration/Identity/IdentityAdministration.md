# Narrator Script - Identity Administration

**Source animation:** journeys/Identity/IdentityAdministration.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/administration.mjs.

## Step 1 · Three requests. Different responsibilities.

[calm] Three requests. Different responsibilities.
[600ms]
Maya needs account support. Contoso must distinguish a help-desk password reset, license assignment and management of her authentication methods.
[600ms]
[serious] Maya has no privileged role or role-assignable group membership. The operator and the supported user are different people.

## Step 2 · Delegate the task, not the whole directory

[calm] Delegate the task, not the whole directory.
[600ms]
The least-privileged role depends on the task. An authorized role administrator assigns it to the operator; choosing a task here never changes the assigned role.
[600ms]
[serious] Assume these assignments cover Maya. Authentication Administrator can also reset her password; Password Administrator is the narrower recommendation. Azure Reader grants none of these directory tasks.

## Step 3 · A license is an assignment with a result

[calm] A license is an assignment with a result.
[600ms]
For this example, assign Microsoft 365 Business Standard to Maya. An unavailable license or an unauthorized operator leaves the attempt unsuccessful; correcting capacity alone does not apply the license.
[600ms]
[serious] Assume valid usage location and no conflicting services. License errors need inspection and retry; licensing never assigns an Azure resource role.

## Step 4 · Register before recovery is needed

[calm] Register before recovery is needed.
[600ms]
Maya is a cloud-only, non-admin user. Contoso has enabled email and mobile phone for this example and requires two registered methods for self-service password reset.
[600ms]
[serious] Two methods is Contoso's example policy, not a universal default. Registration stores recovery information; it does not complete a future reset attempt.

## Step 5 · Verify, then reset

[calm] Verify, then reset.
[600ms]
A licensed user in SSPR scope still needs registered methods and successful verification. Only then can Maya choose a policy-compliant new password; this illustration never collects one.
[600ms]
[serious] Business Standard supports cloud-only SSPR. Hybrid writeback instead needs P1/P2 or Business Premium plus configured writeback and its prerequisites. Entra Free password change is not forgotten-password reset.

## Step 6 · Support without blanket administration

[calm] Support without blanket administration.
[600ms]
Directory roles authorize operators. Product licenses enable services. Registration prepares recovery; verification proves control during the reset attempt. These responsibilities remain separate.
[600ms]
[serious] The example assumes a valid cloud-only account and a compliant new password. No real role, license, verification message or password is changed by this workbench.
