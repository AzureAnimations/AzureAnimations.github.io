# Narrator Script — Compute · Hybrid and Specialised Compute: Arc, VMware, Azure Local, Service Fabric

**Source animation:** [HybridAndSpecialised.html](../../journeys/Compute/HybridAndSpecialised.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-arc/overview>
- <https://learn.microsoft.com/azure/azure-vmware/introduction>
- <https://learn.microsoft.com/azure/azure-local/overview>
- <https://learn.microsoft.com/azure/service-fabric/service-fabric-overview>

---

## Step 1 · Some workloads can’t move to a region

[calm] Contoso wants to use Azure, but four of its workloads can't go into a standard Azure region.
[600ms]
[curious] Each one has its own reason for staying put, and each one has its own answer.
[600ms]
[confident] So the only question we ask on this page is simple: where does it run, and what do I pick?

## Step 2 · A spectrum: from in Azure to your own hardware

[calm] Picture a line. Azure's own hardware sits on the left, and your hardware sits on the right.
[600ms]
[curious] Each option lands at a different point. Azure VMware Solution runs in Azure datacentres, while Azure Local runs on partner hardware at your site.
[600ms]
[confident] Arc reaches out from the right to manage servers wherever they are, and Service Fabric is a platform, not a place.

## Step 3 · Azure Arc: projected into Azure, not moved

[calm] Azure Arc doesn't move anything. It gives each resource outside Azure a twin in Azure Resource Manager.
[600ms]
[curious] Servers, Kubernetes clusters and SQL stay exactly where they are, but now each one shows up in Azure with its own resource.
[600ms]
[reassuring] For servers you install the Connected Machine agent, and the machine can sit in a resource group next to native Azure resources.

## Step 4 · What Arc gives you: Azure’s tools, on your servers

[confident] Once a server is an Azure resource, Azure's tools apply to it: inventory, Policy, Defender for Cloud, Azure Monitor and Update Manager.
[600ms]
[intrigued] Policy can audit settings inside the machine, and Defender for Cloud can watch it for threats.
[600ms]
[reassuring] The Arc control plane features for servers cost nothing extra. The services you use on top are billed at their own price.

## Step 5 · Azure VMware Solution: VMware, running in Azure

[calm] Azure VMware Solution is a private cloud made of dedicated bare-metal hosts in Azure, running the VMware stack.
[600ms]
[curious] Every private cloud includes vCenter Server, vSAN, vSphere and NSX, so your VMware team keeps tools they already know.
[600ms]
[confident] It links to your Azure virtual networks, and to your on-premises network over ExpressRoute.

## Step 6 · Move VMs with VMware HCX

[calm] To get VMs there, you use VMware HCX. It links your on-premises vSphere to the private cloud.
[600ms]
[impressed] The VMs move as VMs, for example by live vMotion or cold migration, so nothing gets re-platformed in the process.
[600ms]
[reassuring] You deploy the connector on premises and pair it with the cloud. HCX can also extend a network across both sides.

## Step 7 · Who manages what in Azure VMware Solution

[calm] Responsibility is split. Microsoft runs the datacentres, the hosts and the lifecycle of the VMware software.
[600ms]
[serious] That means Microsoft deploys, patches and upgrades ESXi, vCenter, NSX and vSAN, and replaces failed hosts.
[600ms]
[confident] You run everything on top: NSX networking and security, your VMs, guest operating systems and apps, plus HCX migrations.

## Step 8 · Azure Local: Azure on your own hardware

[calm] Azure Local brings Azure to your own site. It was renamed from Azure Stack HCI.
[600ms]
[curious] Partner hardware runs there, and Azure Arc is the control plane that connects it back to Azure.
[600ms]
[confident] You use the Azure portal, the CLI and ARM templates, and you can add Policy, Defender for Cloud and Azure Monitor. Connected and disconnected deployments are both supported.

## Step 9 · What runs on Azure Local, and why there

[calm] On site you can run virtual machines, Kubernetes through AKS enabled by Arc, and Azure Virtual Desktop.
[600ms]
[curious] People choose local for four reasons: low latency, running through outages, keeping data close, and AI at the source.
[600ms]
[confident] Think factory production lines, manufacturing execution systems, or strict sovereignty and regulatory rules.

## Step 10 · Service Fabric: the state lives with the code

[calm] Service Fabric's key difference is where state lives. A stateless service keeps its state in an external store.
[600ms]
[curious] A stateful service keeps it inside, and the platform replicates it across nodes. There's one primary replica and several secondaries.
[600ms]
[reassuring] Writes go to the primary and get copied. If the primary fails, a secondary is promoted and a new one is created.

## Step 11 · Clusters, managed clusters and rolling upgrades

[calm] A Service Fabric cluster is a set of nodes you can create in Azure, on premises or in other clouds.
[600ms]
[curious] In a managed cluster, Azure handles the scale set, load balancer, public IP, storage and network behind a single resource. There's no migration path from an existing cluster, so you create a new one.
[600ms]
[confident] A rolling upgrade updates one domain at a time, so the app stays up.

## Step 12 · Service Fabric next to AKS and Container Apps

[calm] Service Fabric, AKS and Container Apps all run microservices.
[600ms]
[curious] They differ in how state is kept, what you build with, and where the cluster can live.
[600ms]
[serious] Service Fabric has state built in and its own models, while AKS uses the Kubernetes API. For a new design, check the current guidance for each service.

## Step 13 · Which one fits your constraint?

[curious] Now it's your turn. Pick the constraint you're stuck on, and the matching option lights up.
[600ms]
[confident] This is the exam skill: read the requirement, spot the real constraint, then match it to the platform.
[600ms]
[encouraging] Each tab names a constraint on top, and the option sits underneath. Try all four.

## Step 14 · Where it runs: four answers and four traps

[calm] Let's pull it together. Match the constraint to the platform, not to a product name.
[600ms]
[serious] Each option has one trap to remember, so keep an eye on those.
[600ms]
[reassuring] A Z three oh five doesn't name these four products, but they support its skills on designing compute solutions and migrations. Expect scenario questions that make you choose.
