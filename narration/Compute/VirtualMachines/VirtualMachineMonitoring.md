# Narrator Script - Watch It and Keep It Patched

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineMonitoring.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Checkout feels slow

[serious] Customers say checkout feels slow. The team has no idea why.
[600ms]
[curious] Is it the machine, the disk, or the application itself?
[800ms]
[calm] Without signals, that argument cannot be settled, only repeated. So let us give Contoso something to look at.

## Step 2 · Host signals need no agent

[reassuring] The good news is that some of it is already there.
[600ms]
[confident] Azure collects processor, disk and network metrics from the host underneath the machine, with nothing installed inside it.
[600ms]
[calm] That is enough to see whether the machine is working hard, and it is free of any setup on your side.

## Step 3 · Inside the guest needs an agent

[curious] But host metrics stop at the edge of the guest. Switch the telemetry on and see what appears.
[600ms]
[confident] To see memory as the operating system sees it, or to collect logs from inside, Azure needs the Azure Monitor Agent installed, with a data collection rule telling it what to gather.
[600ms]
[serious] The rule is the part to remember. An agent with nothing to collect will sit there quietly and tell you nothing.

## Step 4 · Compare guest performance

[calm] Once the data arrives, VM Insights puts it together.
[600ms]
[confident] Processor, memory and disk performance side by side, which is exactly what you need to decide whether the slow checkout is the machine or the code.
[600ms]
[serious] Performance monitoring is supported and current. The older Map view and its Dependency Agent are deprecated, so do not build on them.

## Step 5 · Turn a threshold into action

[curious] Nobody watches a dashboard at three in the morning. Set the threshold and watch what fires.
[600ms]
[confident] An alert rule watches one signal against a condition, and the action group decides what happens when it trips, whether that is an email, a ticket or an automated response.
[600ms]
[reassuring] Rule and action group are separate on purpose, so one carefully built response can serve many rules.

## Step 6 · Patch on a schedule

[calm] The last gap is the one that grows quietly.
[600ms]
[confident] Azure Update Manager assesses which operating system updates are missing and installs them on a schedule you choose, across your machines, with no pipeline of your own to maintain.
[600ms]
[determined] Patching is not an emergency task. It is a routine you decide once and then keep.

## Step 7 · Monitoring - All in One

[reflective] Four layers, and the shop stops surprising you.
[600ms]
[confident] Host signals for free, guest performance through the agent, alerts that reach a human, and updates on a schedule.
[600ms]
[proud] That is the difference between running a machine and operating a service.
