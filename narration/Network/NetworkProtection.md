# Narrator Script — Network · Protect and observe your network: DDoS, flow logs and traffic analytics

**Source animation:** [NetworkProtection.html](../../journeys/Network/NetworkProtection.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ddos-protection/ddos-protection-overview>
- <https://learn.microsoft.com/azure/network-watcher/vnet-flow-logs-overview>

---

## Step 1 · A busy Friday, or an attack?

[calm] It's a busy Friday, and Contoso Shop's public IP is swamped. Customers can't check out.
[600ms]
[concerned] Is this a sale, or an attack? Who sent this traffic, and what can absorb it?
[600ms]
[serious] A DDoS attack sends more traffic than the application can handle, so real users can't get through.

## Step 2 · Three kinds of DDoS attack

[curious] There are three kinds of attack: flood the pipe, abuse the handshake, or imitate real web users.
[600ms]
[calm] Layers three and four carry packets and connections. Layer seven is the application. Each kind is stopped at a different layer.
[600ms]
[confident] Azure DDoS Protection mitigates layer three and four attacks. For layer seven, you add a web application firewall.

## Step 3 · Three levels of DDoS cover

[calm] Every public IP gets basic platform protection.
[600ms]
[curious] Two paid tiers, DDoS IP Protection and DDoS Network Protection, tune it to your app and add alerts, logs and more.
[600ms]
[reassuring] They share the same core engineering and differ in value-added services. Check the pricing page for costs.

## Step 4 · Absorb, scrub, forward

[calm] Past the learned limit, Azure absorbs and scrubs the flood with its global network.
[600ms]
[confident] Only legitimate traffic is forwarded to your app.
[600ms]
[impressed] Adaptive real-time tuning uses machine-learning traffic profiling to set the limits for each protected public IP, so you don't hand-tune thresholds.

## Step 5 · See the attack while it happens

[curious] Metrics, alerts and logs show an attack under way, and what was dropped.
[600ms]
[confident] Network Protection also adds a rapid-response team. Send DDoS logs to a Log Analytics workspace with a diagnostic setting.
[600ms]
[serious] Test only with an approved simulation partner, never against targets you don't own.

## Step 6 · Layer the defences

[calm] No single control covers everything. DDoS Protection handles floods at layers three and four.
[600ms]
[curious] A WAF reads web requests at layer seven, and NSGs and a firewall decide who gets in and out.
[600ms]
[confident] A common design puts a DDoS-protected public IP on an Application Gateway with WAF, in front of subnets guarded by NSGs.

## Step 7 · What a flow log records

[curious] Every IP flow through the virtual network becomes a small record: who talked to whom, on which port, and whether it was allowed or denied.
[600ms]
[calm] Each record also carries the network interface, protocol, flow state, encryption state, and packet and byte counts.
[600ms]
[reassuring] You need the Microsoft.Insights resource provider registered, and a Standard storage account in the same region.

## Step 8 · One switch replaces many

[serious] NSG flow logs retire on September thirtieth, twenty twenty-seven, and new ones can't be created.
[600ms]
[confident] Turn flow logging on once, at the virtual network, instead of per NSG.
[600ms]
[concerned] Turn NSG flow logs off before you enable virtual network flow logs on the same workloads, or you may record and pay for the traffic twice.

## Step 9 · Traffic analytics: patterns, not rows

[calm] Raw flow logs are rows. Traffic analytics turns them into patterns.
[600ms]
[curious] It reads the logs, merges repeats, adds geography and security context, and stores the result in a Log Analytics workspace.
[600ms]
[serious] You need Network Watcher, a workspace, and a virtual network with flow logging on. Check the region table first, because not every region supports it.

## Step 10 · Ask the network, check the posture

[calm] Network Watcher answers a question right now, with tools like NSG diagnostics, next hop and effective security rules.
[600ms]
[confident] Defender for Cloud keeps checking your setup and lists what to fix.
[600ms]
[reassuring] The secure score rolls those findings into one number. The higher it is, the lower the identified risk.

## Step 11 · Pick a threat, see what reacts

[curious] Choose an attack or a mistake.
[600ms]
[confident] The path shows which control reacts, and where you would see it.
[600ms]
[reflective] Four common threats, and four different answers. Most real defences stack several of these.

## Step 12 · Absorb, block, record, flag

[calm] Absorb with DDoS Protection, block with WAF, NSGs and a firewall, record with flow logs, and flag with Defender for Cloud.
[600ms]
[confident] Layer the controls, then use logs and recommendations to see what's really happening on your network.
[600ms]
[proud] A Z seven hundred names these skills directly, and A Z three oh five asks you to choose the right solution for network security and monitoring.
