# Narrator Script - Azure Networking

**Source animation:** journeys/Fundamentals/AzureNetworking.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/private-link/private-endpoint-overview ; https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/expressroute/secure-expressroute#data-protection -->

## Step 1 · An order needs the stock count

[calm] A customer reaches checkout. The App Service website calls Contoso's inventory virtual machine, but that backend still needs a connection to the SQL database to check stock.
[600ms]
[confident] This lesson builds that missing backend-to-database path. Running the application and storing the records don't, by themselves, connect the two.

## Step 2 · Give the backend a private address

[calm] Contoso places the inventory virtual machine in a virtual network, often called a VNet. Its private address identifies it within the connected private network.
[600ms]
[confident] The SQL database remains a separate managed service. Giving the backend an address doesn't move the database into the network or grant access to its records.

## Step 3 · Organize the address space

[calm] A subnet is a smaller address range inside a virtual network. Contoso uses one range for the application and reserves another for the private service connection.
[600ms]
[confident] Subnets organize addresses. They aren't security rules by themselves; Contoso still needs the appropriate traffic controls for what may communicate.

## Step 4 · Find inventory by name

[calm] The application knows the database by name, not by memorizing its address. Private DNS translates that name into the private endpoint address shown here.
[600ms]
[confident] A DNS answer tells the backend where to try connecting. It doesn't create a network route or give the application permission to read stock records.

## Step 5 · Connect privately to the database

[calm] An approved private endpoint provides a private connection to SQL through a network interface in Contoso's subnet. The managed database itself still sits outside that subnet.
[600ms]
[confident] Contoso disables public network access separately and still checks database permissions. A private path and authorized data access are different requirements.

## Step 6 · Reach the fulfilment network

[calm] The fulfilment application runs in another virtual network. Peering connects the two networks over Microsoft's backbone so their resources can communicate privately when the relevant rules allow it.
[600ms]
[confident] The networks keep their own address spaces. Contoso is connecting them, not turning them into one resource group or removing security checks.

## Step 7 · Keep the warehouse connected

[calm] The warehouse still has systems on premises. A site-to-site virtual private network, or VPN, joins that network to Azure through an encrypted tunnel over the internet.
[600ms]
[confident] The warehouse can remain where it is while participating in the shop's hybrid environment. Routing and access controls still need to be configured.

## Step 8 · Consider a private circuit

[calm] For different connectivity requirements, Contoso could arrange ExpressRoute through a connectivity provider. This supplies a private connection to Microsoft cloud services instead of the internet path used by the VPN.
[600ms]
[confident] Private doesn't automatically mean encrypted. ExpressRoute traffic needs an appropriate encryption design when that protection is required.

## Step 9 · The order can reach inventory

[calm] Put the pieces together: the backend has an address, DNS resolves the database name, and the approved private endpoint provides the path. With the required permissions, the inventory lookup can return its result to checkout.
[600ms]
[confident] The warehouse uses VPN in this example. Next, Contoso chooses storage for the shop's other kinds of data.