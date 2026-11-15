# Narrator Script — Network · Configure and troubleshoot Azure Load Balancer

**Source animation:** [LoadBalancerConfigAndTroubleshooting.html](../../journeys/Network/LoadBalancerConfigAndTroubleshooting.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/load-balancer/load-balancer-overview>

---

## Step 1 · One Front End, Many Backends

[calm] The Contoso web shop runs on three virtual machines. A load balancer gives customers one front end address.
[600ms]
[confident] It spreads new connections across the healthy machines in the backend pool.
[600ms]
[curious] Rules decide where a flow goes, and health probes decide who is healthy. Those are the parts we'll configure.

## Step 2 · Public or Internal, Standard SKU

[curious] The front end IP decides the type. A public IP makes a public load balancer, and a private IP makes an internal one.
[600ms]
[confident] An internal load balancer works inside a virtual network and can't accept traffic from the internet.
[600ms]
[serious] Use the Standard SKU. Basic was retired on the thirtieth of September, twenty twenty-five. Gateway is the third SKU, for appliances.

## Step 3 · Backend Pools: NIC or IP

[calm] A backend pool lists who serves the traffic. Fill it by network interface, or by IP address plus virtual network.
[600ms]
[confident] A network interface pool attaches VMs or scale set instances. An IP-based pool lets you prepopulate addresses, and needs Standard.
[600ms]
[reflective] One load balancer can have both kinds of pool, but never mixed in the same pool.

## Step 4 · Health Probes

[curious] The load balancer probes every backend. Here web-2 stops answering, so it stops receiving new connections.
[600ms]
[confident] A probe has a protocol, a port, an interval and a threshold. A TCP probe fails on no answer, and an HTTP probe fails on anything other than two hundred.
[600ms]
[reassuring] In Standard, established TCP flows continue. Use the switch to see both states.

## Step 5 · Load-Balancing Rules

[calm] A rule maps a front end IP and port to a backend port, using one health probe.
[600ms]
[curious] By default, each new connection is hashed on five values, so the same client can land on different machines.
[600ms]
[confident] If you need a client to stay put, switch to session persistence by client IP. Changing the mode causes no downtime.

## Step 6 · Inbound NAT Rules

[curious] A load-balancing rule picks any healthy VM. Sometimes you want one specific machine.
[600ms]
[confident] An inbound NAT rule forwards one frontend port to one chosen VM, such as S S H or R D P to a single server that you name.
[600ms]
[encouraging] Use version two, which targets the whole pool and preallocates ports. And unlike a load-balancing rule, it needs no probe.

## Step 7 · Outbound Rules and SNAT Ports

[calm] Backend VMs can leave through the load balancer's public IP, using S N A T.
[600ms]
[confident] An outbound rule lets you choose the front end, and decide how many S N A T ports each VM gets.
[600ms]
[reassuring] To scale further, add frontend IPs, or put a NAT gateway on the subnet, which takes precedence.

## Step 8 · HA Ports and Gateway Load Balancer

[curious] Firewalls and other appliances need every port.
[600ms]
[confident] An H A ports rule uses protocol all and port zero on an internal Standard load balancer, so one rule balances every flow.
[600ms]
[impressed] A Gateway Load Balancer then chains those appliances into a public front end, with no user-defined routes needed.

## Step 9 · Troubleshoot: Probe Failing

[concerned] Now web-2 shows Down. The probe has to pass three gates on its way in.
[600ms]
[confident] First the network security group, then the guest firewall, then a listener on the right port. Each must allow the probe address.
[600ms]
[determined] Check them in that order, and watch Health Probe Status per instance.

## Step 10 · Troubleshoot: Backend Unreachable

[serious] The probe is Up, but users still fail. Check the data port, the network security group, and any flow that loops back to itself.
[600ms]
[concerned] Don't call an internal front end from a VM in its own pool. The flow can map back to the same machine and time out.
[600ms]
[confident] If a VM can't call out, it needs an explicit outbound method, like an outbound rule or a NAT gateway on the subnet.

## Step 11 · Where Do I Look First?

[calm] Start from the symptom. Each branch names the first thing to check.
[600ms]
[confident] If clients can't connect, look at probe status. If VMs can't reach out, check the outbound method and S N A T metrics. If traffic is uneven, check session persistence.
[600ms]
[proud] That covers the load balancer skills in both A Z one oh four and A Z seven hundred.
