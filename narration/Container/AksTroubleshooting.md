# Narrator Script — Containers · Troubleshoot AKS: pod not running

**Source animation:** [AksTroubleshooting.html](../../journeys/Container/AksTroubleshooting.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/aks/monitor-aks>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/welcome-azure-kubernetes>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/create-upgrade-delete/pod-stuck-crashloopbackoff-mode>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-scheduler-errors>

---

## Step 1 · My pod is not running. Which command shows me why?

[calm] Contoso Shop is running on AKS. Four pods should be up, but one of them is not.
[600ms]
[concerned] Mina is on call, and she needs the reason, fast.
[600ms]
[confident] The names and terminal output here are all made up, but they show the pattern real clusters follow.

## Step 2 · The troubleshooting loop

[calm] There's a loop with five moves, always in the same order.
[600ms]
[confident] Read the state, describe the pod, check the events, read the logs, then fix it and look again.
[600ms]
[reassuring] Describe already includes an Events section, so many problems end at move two. The other commands are for when you need more.

## Step 3 · Move 1 · What state is the pod in?

[calm] Move one is kubectl get pods. It lists every pod with READY, STATUS and RESTARTS.
[600ms]
[curious] The STATUS word already points to the kind of problem. And READY zero out of one means no container in the pod is ready yet.
[600ms]
[confident] Add dash capital A to list pods in every namespace, or dash n for just one.

## Step 4 · Move 2 · Describe it, then read the Events

[calm] Move two is kubectl describe pod. It shows each container's state, its last state, the exit code and the restart count.
[600ms]
[curious] At the bottom is the Events section, which is the pod's own diary.
[600ms]
[confident] Read it first. It lists what Kubernetes tried, like scheduling, pulling, starting and restarting, and what went wrong.

## Step 5 · Move 3 · Read the events, oldest to newest

[calm] Move three is to read the events for the namespace. Kubernetes records what it tried: scheduled, pulled, started, backed off.
[600ms]
[curious] When they're sorted by time, they read like the story of what happened to the pod.
[600ms]
[serious] Each event is Normal or Warning. Start with the Warning events, because they're your leads.

## Step 6 · Move 4 · Read the logs, even from the crashed run

[calm] Move four is kubectl logs, which shows what the app printed.
[600ms]
[concerned] But a crash-looping container has a fresh, mostly empty log after each restart.
[600ms]
[confident] Add dash dash previous to read the run that crashed. Its last words are there.

## Step 7 · Each failure happens at one stage of a pod’s life

[calm] Every failure happens at one stage of a pod's life. Find the stage where the pod stops, and you know what kind of cause to chase.
[600ms]
[curious] The stage comes from the STATUS and the Events.
[600ms]
[confident] Pending means it hasn't reached a node. ImagePullBackOff is the image. CrashLoopBackOff and OOMKilled happen after the start.

## Step 8 · Triage simulator: pick a symptom

[curious] Time to practice. Choose a symptom you might see.
[600ms]
[confident] The terminal runs the commands that reveal the cause, and the likely fix appears beside it.
[600ms]
[encouraging] Try all six. The output is fictional, but it follows the shape real kubectl commands produce.

## Step 9 · When the node is the problem

[calm] Sometimes the pod isn't the problem at all. A NotReady node can't take pods, so look at the node.
[600ms]
[confident] Cordon stops new pods from landing on it. Drain moves the running ones off.
[600ms]
[reassuring] AKS watches node health and can repair unhealthy nodes automatically. It uses cordon and drain during upgrades too.

## Step 10 · Where logs and events live in Azure

[calm] Kubectl shows you the live cluster. Azure Monitor keeps the history, so you can search it after the pod is gone.
[600ms]
[serious] Control plane logs aren't collected until you create a diagnostic setting.
[600ms]
[curious] Container insights and managed Prometheus are on by default in AKS Automatic. In AKS Standard, you enable them.

## Step 11 · kubectl debug: a shell on the node

[calm] When logs and events aren't enough, start a debugging pod on the node with kubectl debug.
[600ms]
[serious] It runs a privileged container, so be deliberate. Run chroot slash host inside it to work with the node itself.
[600ms]
[confident] Look around, then delete it. Windows nodes need the SSH proxy workaround from the docs.

## Step 12 · Your pod-not-running playbook

[calm] You now have one loop, a map from symptom to cause, and the places Azure keeps the evidence.
[600ms]
[confident] That's the playbook for any pod that won't run.
[600ms]
[proud] It also matches an A I two hundred skill: monitor and troubleshoot solutions on AKS and Container Apps by inspecting logs, events, and end-to-end connectivity.
