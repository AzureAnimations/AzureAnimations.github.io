# Narrator Script — Virtual Machines · Secure a virtual machine: encryption, JIT, Trusted launch and Defender for Servers

**Source animation:** [SecureVirtualMachines.html](../../../journeys/Compute/VirtualMachines/SecureVirtualMachines.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/just-in-time-access-overview>
- <https://learn.microsoft.com/azure/virtual-machines/disk-encryption-overview>
- <https://learn.microsoft.com/azure/virtual-machines/trusted-launch>
- <https://learn.microsoft.com/azure/virtual-machines/boot-integrity-monitoring-overview>

---

## Step 1 · A VM with the defaults

[calm] Contoso's new shop VM was built for convenience: a public IP address, RDP and SSH allowed from anywhere, and nobody watching.
[600ms]
[concerned] Exact portal defaults vary, so check what your own VMs expose.
[600ms]
[serious] The point is what an attacker can reach, and here they can reach a lot.

## Step 2 · Don’t leave RDP and SSH open

[serious] Threat actors actively hunt for machines with open management ports.
[600ms]
[concerned] One compromised VM becomes the entry point to everything else that it can reach.
[600ms]
[confident] But admins need RDP and SSH, so you can't just delete the ports. Keep them closed, and open them only when needed, for as short a time as possible.

## Step 3 · Just-in-time access

[calm] Just-in-time access keeps management ports closed.
[600ms]
[confident] An admin requests a port for their own IP address and a short time window. Defender for Cloud checks their Azure RBAC permissions, then opens that source address for that time.
[600ms]
[reassuring] When the window ends, the rule goes back, and connections already open aren't interrupted. It's part of Defender for Servers Plan 2.

## Step 4 · Bastion or JIT?

[curious] Both avoid leaving RDP and SSH open to the internet, in different ways. Pick a scenario to see which fits.
[600ms]
[confident] Bastion gives RDP and SSH over TLS on port four forty-three, to VMs by private IP, so the VM needs no public IP.
[600ms]
[reflective] JIT keeps the network security group closed and opens a port for one address for a limited time. It needs Defender for Servers Plan 2.

## Step 5 · Disk encryption

[calm] Managed disks are always encrypted at rest, but that doesn't cover temp disks or caches.
[600ms]
[confident] Encryption at host adds those, plus the data flowing to storage. Azure Disk Encryption works inside the VM with BitLocker or DM-Crypt.
[600ms]
[serious] Azure Disk Encryption is scheduled for retirement, so Learn recommends encryption at host for new VMs. Your own keys give you control.

## Step 6 · Security type

[curious] When you create a VM, you choose its security type. It decides what protects the VM before the operating system even starts.
[600ms]
[confident] Trusted launch is for Generation two VMs and is the default for new ones. Confidential VMs add a hardware-enforced boundary around the VM.
[600ms]
[concerned] The standard type has none of these boot protections, and that is the weakest choice.

## Step 7 · Secure Boot and vTPM

[calm] Secure Boot lets only signed boot code run. The boot loader, the kernel and its drivers must be signed by trusted publishers, or the VM fails to boot.
[600ms]
[confident] The vTPM is a virtual TPM two point oh. It records what did run, so the boot can be proved later.
[600ms]
[impressed] That keeps keys and measurements outside the reach of any VM, and that's your defense against rootkits.

## Step 8 · Integrity monitoring

[calm] With integrity monitoring on, a Guest Attestation extension proves each boot to Azure.
[600ms]
[confident] If the proof fails, Defender for Cloud alerts you. In the portal, select Integrity monitoring under the security type settings, and the extension is installed.
[600ms]
[serious] It needs a Trusted launch VM with Secure Boot and vTPM on. Attestation fails if Secure Boot is disabled.

## Step 9 · Defender for Servers

[calm] Defender for Servers protects Windows and Linux machines from Defender for Cloud. Turn it on for a subscription, then choose a plan.
[600ms]
[confident] Plan 1 is entry-level and centres on endpoint detection and response. Plan 2 includes Plan 1, and adds agentless scanning, JIT and file integrity monitoring.
[600ms]
[reflective] Microsoft recommends enabling it at subscription level, and the toggle turns on Plan 2 by default. For prices, see the Defender for Cloud pricing page.

## Step 10 · Vulnerability scanning and EDR

[curious] The Defender for Endpoint sensor sees a VM while it runs. Agentless scanning reads a copy of its disks and needs nothing installed.
[600ms]
[confident] Agent-based scanning and EDR come with both plans. Agentless scanning is in Plan 2, and malware scanning is Plan 2 only.
[600ms]
[reassuring] The snapshot stays in the VM's region, and it's deleted once the metadata is read.

## Step 11 · Azure Machine Configuration

[calm] Machine Configuration checks settings inside the operating system against the state you require, and can put them back when they drift.
[600ms]
[confident] It's part of Azure Policy. An Azure VM needs the machine configuration extension and a system-assigned managed identity.
[600ms]
[curious] Each assignment has a mode: Audit, Apply and Monitor, or Apply and Autocorrect.

## Step 12 · Arc-enabled servers, and the recap

[calm] Azure Arc brings servers outside Azure into Azure management. Install the Connected Machine agent and the server becomes an Azure resource.
[600ms]
[confident] Then Defender for Servers, Azure Policy and Machine Configuration can work on it too.
[600ms]
[proud] VM features such as Trusted launch and encryption at host stay with Azure VMs. Close the ports, protect the boot, encrypt the disks, and keep watching.
