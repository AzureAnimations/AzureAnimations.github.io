# Narrator Script — Compute · Azure Virtual Desktop: Desktops for 500 Remote Staff

**Source animation:** [VirtualDesktop.html](../../journeys/Compute/VirtualDesktop.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-desktop/>

---

## Step 1 · Desktops for 500 Remote Staff, No Laptops

[calm] Contoso hires five hundred remote staff, and it won't ship them laptops. Their own devices are all different.
[600ms]
[curious] So the question is, where should the Windows desktop for all of them run?
[600ms]
[confident] The idea is to run the desktops on virtual machines in Azure and stream them to any device. That's Azure Virtual Desktop, and we'll design it piece by piece.

## Step 2 · Who Runs What: Microsoft vs You

[calm] Azure Virtual Desktop is a service, so the first question is who runs what.
[600ms]
[confident] Microsoft runs the control plane: the web access, the broker, the gateway and the resource directory. You don't manage gateway servers like you would with Remote Desktop Services.
[600ms]
[serious] You run the session host VMs, their image and apps, the virtual network, backup and recovery, and the identities.

## Step 3 · Five Objects Connect Users to a Desktop

[calm] Five objects connect users to a desktop. A workspace groups application groups, and it's the list users see.
[600ms]
[curious] An application group publishes a desktop or RemoteApps from one host pool, and that's where you assign users, ideally as groups.
[600ms]
[confident] The host pool is a collection of session host VMs built from the same image. An application group belongs to only one workspace.

## Step 4 · Pooled or Personal Host Pool?

[calm] There are two kinds of host pool. In a pooled one, several users share a session host to keep cost down.
[600ms]
[curious] Pooled pools also choose a load balancing method. Breadth-first spreads new sessions evenly, while depth-first fills one host to its session limit before the next.
[600ms]
[confident] A personal pool gives each user their own VM, so load balancing doesn't apply. Multi-session Windows is exclusive to Azure Virtual Desktop.

## Step 5 · Profiles Follow the User: FSLogix

[curious] In a pooled host pool, a user can land on a different host every time. So how does their profile follow them?
[600ms]
[confident] FSLogix profile containers are the recommended answer. At sign-in, the container is attached from a file share as a virtual disk, so the profile feels native.
[600ms]
[reassuring] Azure Files is recommended for most customers, and Azure NetApp Files is another Azure option.

## Step 6 · Identity: Entra ID Signs Users In

[calm] Microsoft Entra ID always authenticates the user, so every user needs an Entra account.
[600ms]
[serious] Personal Microsoft accounts aren't supported.
[600ms]
[confident] Session hosts join the same Entra tenant, or an Active Directory domain. With a domain, user accounts must be hybrid identities, meaning they're synchronized.

## Step 7 · Three Ways to Join Session Hosts

[calm] You choose the join type by where your identities and apps live.
[600ms]
[curious] Entra joined hosts need no line of sight to a domain controller, and they can enroll in Intune automatically. With a domain, Microsoft Entra Connect syncs the accounts, or Entra Domain Services syncs from Entra ID.
[600ms]
[serious] One rule matters most: a host pool should contain session hosts of one join type only.

## Step 8 · Network: Outbound Only, Then Shortpath

[calm] By default, both the client and the session host connect outbound over TLS to the gateway, which relays the session.
[600ms]
[reassuring] That's reverse connect, so no inbound RDP port is opened.
[600ms]
[curious] RDP Shortpath can add a parallel UDP path for better reliability and latency, with TCP as the fallback. And Private Link keeps traffic on private endpoints.

## Step 9 · Autoscale: Pay for Hosts Only When Used

[calm] A scaling plan powers session hosts on and off, so you don't pay for idle hosts overnight.
[600ms]
[curious] It runs through four daily phases: ramp-up, peak, ramp-down and off-peak. Pooled schedules use a capacity threshold and a minimum percentage of hosts.
[600ms]
[confident] Personal schedules act on session state instead, like signed out or disconnected. The host counts here are only an illustration.

## Step 10 · Run It: Images, Cost and Monitoring

[calm] To run it, build one golden image. Customize a VM, run sysprep, then capture it into an Azure Compute Gallery.
[600ms]
[confident] You update pooled hosts by redeploying them from an updated image. Multi-session hosts, autoscale and Start VM on Connect keep cost under control.
[600ms]
[reassuring] And Azure Virtual Desktop Insights shows you how it's all doing, using a Log Analytics workspace.

## Step 11 · Pick a Design for Each User Type

[curious] Start from the user. Select a type, and you'll see the profile and scaling approach it points to.
[600ms]
[confident] A task worker fits pooled multi-session hosts with depth-first. A developer gets a personal host pool with one VM each. A contractor can use a RemoteApp from a browser, with Entra joined hosts for an external identity.
[600ms]
[serious] These are design suggestions, so test with your own apps before you size anything.

## Step 12 · Azure Virtual Desktop, All in One

[calm] Here's the whole design for Contoso's five hundred staff: five objects, the right host pool type, and profiles that follow users.
[600ms]
[confident] Add one identity plan, an outbound-only network, autoscale and good images.
[600ms]
[proud] Keep three questions in mind: what does Microsoft run, what do you run, and what must you design? That's the heart of the A Z three oh five skill on designing compute solutions.
