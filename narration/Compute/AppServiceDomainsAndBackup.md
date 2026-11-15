# Narrator Script — Compute · App Service · Custom Domains, TLS & Backup

**Source animation:** [AppServiceDomainsAndBackup.html](../../journeys/Compute/AppServiceDomainsAndBackup.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/configure-ssl-bindings>
- <https://learn.microsoft.com/azure/app-service/manage-backup>
- <https://learn.microsoft.com/azure/app-service/faq-configuration-and-management>

---

## Step 1 · Your App Has a Name. Just Not Yours.

[curious] Every App Service app gets a default name ending in azurewebsites dot net.
[600ms]
[confident] Contoso wants its own www name on that same app, with a padlock in the browser.
[600ms]
[reassuring] That takes DNS first, then a certificate. And we'll also learn how to get the app back if something breaks.

## Step 2 · Which Tiers Allow It?

[calm] Custom names, certificates, and backups all depend on the App Service plan tier your app runs in.
[600ms]
[confident] Free has no custom domain. Shared allows a custom domain, but no custom TLS. Basic and up add TLS bindings and backups.
[600ms]
[reflective] Check the tier before you plan. Prices aren't shown on purpose, so use the official pricing page.

## Step 3 · The Custom-Domain Walk

[curious] Six hops take you from a DNS record to a locked door.
[600ms]
[confident] You add the record, verify it, add the domain, get a certificate, bind it, and finally enforce HTTPS only. Select any hop to see what you do there, and what can fail.
[600ms]
[serious] Order matters. DNS comes first, because App Service checks it before it adds the name.

## Step 4 · Two Records, One Proof

[calm] One DNS record maps your name to the app. For a subdomain that's a CNAME, and for the apex it's an A record.
[600ms]
[confident] A TXT record with the domain verification ID proves you own the domain.
[600ms]
[reflective] You add these at your DNS provider, using values from the Add custom domain dialog. Validate, add it, and the row shows no binding yet.

## Step 5 · Choose a Certificate

[curious] App Service can get you a certificate in four ways.
[600ms]
[confident] A managed certificate is free and renews itself, but has no wildcard. You can buy an App Service certificate, pull one from Key Vault, or upload your own P F X file.
[600ms]
[serious] Public certificates can be uploaded too, but those are for your code to call other services, not for securing a custom domain.

## Step 6 · Bind It: SNI or IP-Based

[calm] A TLS binding ties a certificate to a custom domain, and that is what secures it.
[600ms]
[confident] Most apps use SNI, where browsers send the host name so one IP address can serve many certificates.
[600ms]
[reflective] IP-based SSL gives one certificate its own dedicated address, and it needs the Standard tier or higher.

## Step 7 · Lock the Door

[serious] Now lock the door. Three general settings decide how clients may connect.
[600ms]
[confident] HTTPS Only redirects all plain traffic to HTTPS. Minimum TLS sets the lowest version your app accepts.
[600ms]
[calm] Client certificates add mutual authentication, where your code validates them. That one needs the Basic tier or higher.

## Step 8 · Keep the Padlock Fresh

[concerned] Certificates expire, and an expired padlock scares visitors away.
[600ms]
[confident] Whether renewal is automatic depends on where the certificate came from. Managed ones renew themselves, and bindings follow.
[600ms]
[serious] Key Vault and App Service certificates sync every twenty-four hours. An uploaded P F X is on you: replace it and bind again.

## Step 9 · Your Safety Net: Backups

[calm] App Service backs your app up for you, with no setup, and you can add custom backups to a storage account you control.
[600ms]
[confident] Automatic backups run hourly but can't be downloaded. Custom backups follow your schedule, and can be partial.
[600ms]
[reflective] Each backup is a complete copy, not incremental. Backups need Basic or higher, and Basic covers only the production slot.

## Step 10 · What a Backup Holds

[curious] So what's inside the box? App content comes back, along with some settings.
[600ms]
[serious] Network, identity, slots, and custom domain and TLS settings do not. That's why you re-check them after a restore.
[600ms]
[reflective] Linked databases are covered only by custom backups, and that is being retired. Use the database's own backup instead.

## Step 11 · Get It Back

[determined] When it's time to recover, you can restore over the app, into a new app, or into a slot.
[600ms]
[confident] For production, restore to a slot first, then swap. The target app or slot is stopped while the restore runs.
[600ms]
[serious] Afterwards, re-check the custom domain and the TLS binding.

## Step 12 · All in One

[calm] Name it, prove it, secure it, renew it, back it up. Then you can recover it.
[600ms]
[confident] That's a CNAME or an A record plus the TXT proof, a certificate and binding, HTTPS Only, and a minimum TLS version.
[600ms]
[proud] Backups restore files and some settings, not domains or TLS. It all sits under the A Z one oh four App Service objectives.
