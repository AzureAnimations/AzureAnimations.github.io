# NSGs & ASGs — narration

## Step 1 · A network security group is a rule list

[confident] A network security group is, at heart, just a list of rules.
[400ms]
[calm] Each one allows or denies traffic, inbound or outbound. You attach the group to a subnet or to a network interface, and Azure enforces it in the platform itself — there's no agent running on the VM.
[500ms]
[helpful] And they're stateful. Allow a flow outbound, and the reply is allowed back automatically. You never write a matching inbound rule for the response.

## Step 2 · Anatomy of one rule

[calm] Every rule is the same six decisions. Priority, source, destination, port, protocol, and allow or deny.
[500ms]
[confident] Priority is the one that decides everything. The first rule that matches wins — and nothing after it is even read.
[400ms]
[helpful] The numbers run from 100 to 4096, lowest first. And you can't have two rules sharing a priority in the same direction.

## Step 3 · The rules you never wrote

[curious] Here's something that surprises people. Every NSG already contains six rules you didn't write — three inbound, three outbound.
[500ms]
[calm] They sit at the very highest numbers, so anything you add is read first. You can't delete them. You can only override them.
[400ms]
[confident] And this is exactly why a brand-new VM can call out to the internet, but nothing on the internet can reach it. One default permits the call; another blocks the knock.

## Step 4 · Subnet, NIC — or the order they run in

[calm] You can attach an NSG at either level: the subnet, or the network interface.
[400ms]
[curious] If you attach at both, the order matters — and both lists have to agree before a packet gets through.
[500ms]
[helpful] The official guidance is to pick one level, not both. When rules exist at two levels they can quietly contradict each other, and troubleshooting that is genuinely painful.

## Step 5 · The app tier keeps spreading

[calm] Let's make this concrete. App VMs in one subnet, a database in another, inside one virtual network.
[500ms]
[curious] Every sprint the team adds more app VMs. QA wants a subnet. Integration testing wants another. And every one of those addresses gets pasted, by hand, into the same rule.
[400ms]
[concerned] Rebuild a VM and its address may change, so the rule silently stops matching. Worse — an address never tells you which application it belongs to.

## Step 6 · An application security group is a label

[confident] The hand-maintained list of addresses is the part that keeps breaking. So stop maintaining it.
[500ms]
[calm] An application security group replaces that list with a name you attach to the machine. From then on your rule names the group, and Azure keeps resolving the addresses as machines come and go.
[400ms]
[helpful] Azure records that membership against the VM's network interface — which is why every member has to sit in the same virtual network. Different subnets are absolutely fine.

## Step 7 · One network, two subnets

[calm] Here's the topology. The app tier and the database each get their own subnet, inside one virtual network.
[400ms]
[confident] In both, a VM reaches the network through a NIC — and the NIC is what holds the private IP.
[500ms]
[helpful] Keeping both tiers in one VNet is deliberate. It's the only arrangement where a single rule can name an ASG on both the source and the destination.

## Step 8 · Name the machines, attach the filter

[calm] Every app VM joins one group. The database VM joins another. It's set on the VM itself and recorded against its network interface.
[500ms]
[confident] The NSG goes on the database subnet — because that's the thing being protected.
[400ms]
[helpful] And an ASG spans subnets, not networks. When the QA subnet arrives next sprint, its VMs join the same group, and no rule is touched.

## Step 9 · The rule, written in names

[confident] Now the rule itself. Deny everything to the database, then allow the app group above it.
[500ms]
[calm] Both sides are names now. There isn't a single address left in that rule to maintain.
[400ms]
[encouraging] Add a VM, rebuild a VM, add a whole QA subnet — the rule never changes. Group membership is the only thing anyone edits.

## Step 10 · A new subnet costs nothing

[calm] So QA finally gets its own subnet. Its VMs join the same application security group.
[500ms]
[confident] And that is the entire change. No rule was added, edited, or re-prioritised. The database NSG was never even opened.
[400ms]
[encouraging] That's the whole return on naming things. The rule describes a role — and roles don't change when the address space does.

## Step 11 · Filter by intent, not by address

[confident] So, to bring it together.
[400ms]
[calm] The NSG enforces the decision. The application security group is what lets you express that decision in the language your architecture already uses.
[600ms]
[encouraging] Next time you're about to paste an IP address into a rule, stop and ask what that address means. Then make that the group name.
