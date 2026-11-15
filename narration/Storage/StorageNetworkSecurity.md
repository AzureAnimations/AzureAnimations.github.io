# Narrator Script — Azure Storage · Level up · Network & Private Link

**Source animation:** `static/v2/Storage/StorageNetworkSecurity.html`

Tags in `[brackets]` are delivery cues — speaking styles, paralinguistics, and `[NNNms]` pauses.
One block per animation step, in on-screen order.

---

## Step 1 · goal

[confident] By default, your storage account has a public endpoint — reachable from anywhere on the internet.
[600ms]
[calm] Our goal is to take it off the public internet, so only the networks you trust can reach it.
[700ms]
[serious] And a key idea before we start: network rules and identity are independent layers. One controls where a request comes from; the other controls who's allowed to act.

## Step 2 · firewall

[confident] The first layer is the storage firewall. Turning it on flips the default action to deny.
[600ms]
[calm] Now only the I-P ranges and virtual networks you allow can reach the account — everything else is refused.
[700ms]
[reassuring] Add a trusted-services exception so first-party Azure services, like backup and monitoring, can still get through.

## Step 3 · pe

[confident] Next, add a private endpoint. Through Azure Private Link, it places a private I-P from your own subnet in front of the account.
[600ms]
[calm] Traffic to storage now travels your private network instead of the public internet.
[700ms]
[serious] One catch worth knowing — creating a private endpoint does not, by itself, switch the public endpoint off. That's a separate step.

## Step 4 · dns

[confident] For that private I-P to actually be used, the name has to resolve to it. That's the job of a private DNS zone.
[600ms]
[calm] The private-link zone points the account's hostname at the private address, so clients inside your network reach it privately and automatically.
[700ms]
[reassuring] From outside the virtual network, the same name still resolves publicly — which is exactly why the next step matters.

## Step 5 · lockdown

[confident] Now close the front door. Flip public network access to disabled.
[600ms]
[calm] From here on, the private path is the only way in.
[700ms]
[serious] Remember that name resolution and access control are independent — disabling public access is what truly locks it down.

## Step 6 · connect

[confident] Let's watch it work, end to end. Your app, running in the subnet, resolves the storage URL to the private I-P.
[600ms]
[calm] It connects straight across your private network — no hop over the public internet at all.
[700ms]
[encouraging] Want even tighter control across many resources? Layer on a Network Security Perimeter.

## Step 7 · recap

[proud] There's the whole picture: firewall default-deny, then a private endpoint, then private DNS, then public access switched off.
[700ms]
[encouraging] Prefer private endpoints with a default-deny firewall — it's the pattern that keeps storage genuinely private.

## Step 8 · spec

[confident] One level deeper. There are three ways to control storage networking.
[600ms]
[calm] The firewall with I-P and virtual-network rules; service endpoints, which keep the public address but restrict who can use it; and private endpoints, which give you a private I-P with no internet exposure at all.
[700ms]
[reassuring] For real isolation, the private endpoint wins — a private address, reachable only from your network.
