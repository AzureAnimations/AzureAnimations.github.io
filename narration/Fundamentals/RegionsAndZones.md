# Narrator Script - Regions and Zones

**Source animation:** journeys/Fundamentals/RegionsAndZones.html
**Script status:** Authored voiceover.
**Language:** English

Delivery cues in brackets are not spoken. Pause markers occupy separate lines. One block per animation step.
<!-- Sources: https://learn.microsoft.com/azure/reliability/availability-zones-overview ; https://learn.microsoft.com/azure/architecture/aws-professional/regions-zones#multi-region-deployment-and-paired-regions -->

## Step 1 · Where should the shop run?

[calm] Contoso has organized its resources, but customers still need a responsive shop and their data needs a suitable home. Choosing a location is a business decision as well as a technical one.
[600ms]
[confident] The team considers who uses the shop, which services it needs, and what happens if that location becomes unavailable.

## Step 2 · Choose a region

[calm] An Azure region is a geographic area containing datacenters. Contoso compares distance from customers, data and legal requirements, and whether its chosen services are available there.
[600ms]
[confident] A nearby region can help reduce network delay, but proximity alone isn't enough. The location must meet the shop's other requirements too.

## Step 3 · Look inside the region

[calm] Behind a cloud service are real buildings full of equipment. Datacenters house the servers that process work, the storage that keeps data, and the networking that connects them.
[600ms]
[confident] The buildings here are an illustration, not a fixed count for every region. Cloud computing still depends on physical infrastructure.

## Step 4 · Separate the infrastructure

[calm] Availability zones separate groups of datacenters within a region, with independent power, cooling, and networking. A problem in one zone is therefore less likely to affect the others.
[600ms]
[confident] Contoso checks which regions and services support zones before relying on them. The options vary by service and deployment configuration.

## Step 5 · One location is not redundancy

[calm] Putting one application instance in a chosen zone still leaves Contoso with one instance. Selecting a zone doesn't create another copy of the shop or its data.
[600ms]
[confident] To tolerate that location failing, the team needs prepared capacity elsewhere and a design that keeps the application and data usable.

## Step 6 · What if a zone fails?

[calm] Compare the healthy state with a zone outage, then with detected failure and rerouting. A prepared second instance gives requests somewhere else to go, but routing must recognize the failure.
[600ms]
[confident] Availability comes from these parts working together, including usable data. A second location alone doesn't guarantee successful checkout.

## Step 7 · The regional boundary matters

[calm] Several zones can help with a failure inside one region. But if the entire region is unavailable, those zones still share the same regional boundary.
[600ms]
[confident] Protecting against that larger failure requires a separate regional recovery design, including application deployment, data replication, and a tested way to switch over.

## Step 8 · Check the geography before committing

[calm] Contoso checks geographic and legal requirements before committing to a recovery location. A region pair doesn't automatically copy its application, and not every region has a pair.
[600ms]
[confident] Sovereign environments also have their own eligibility and service availability. The right choice depends on the workload's requirements, not just a map.

## Step 9 · Regions and Zones - All in One

[calm] Start with the failure you need to survive: a local infrastructure problem, a zone outage, or a regional outage. Then prepare the application, its data, and the routes at the appropriate boundary.
[600ms]
[confident] Contoso now has a location strategy. Next, it chooses the compute services that will actually run the shop's work.