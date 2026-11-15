# Narrator Script — Containers · Secure containers: Defender for Containers, AKS, Container Registry, Instances and Container Apps — Azure Containers

**Source animation:** [SecureContainerWorkloads.html](../../journeys/Container/SecureContainerWorkloads.html)
**Language:** en

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/alerts-containers>
- <https://learn.microsoft.com/azure/container-registry/container-registry-authentication>
- <https://learn.microsoft.com/azure/container-registry/overview-sign-verify-artifacts>

---

## Step 1 · Build, store, run: three places to attack

[calm] Contoso ships an orders-api container. It moves from the pipeline, to the registry, to a running pod.
[600ms]
[serious] An attacker can strike at every stage. Images can be altered or swapped while they're stored, and containers can be abused once they run.
[600ms]
[determined] So each part of this lesson protects one stage. Protect every stage, and the chain has no weak link.

## Step 2 · Defender for Containers watches all three

[confident] One Defender for Cloud plan covers registry images, cluster configuration and running containers.
[600ms]
[calm] That means security posture, vulnerability assessment, run-time threat protection, supply chain protection and deployment monitoring, all in one place.
[600ms]
[serious] One thing to remember: alerts only fire for activity after you enable the plan. So turn it on early.

## Step 3 · Registry: who gets in and what’s inside

[calm] Start with the registry. Control who can push and pull, keep it off the public internet, and scan what it holds.
[600ms]
[confident] For most scenarios, use Microsoft Entra ID sign-in. Scoped tokens are the alternative, but they don't use Entra role assignments.
[600ms]
[curious] To keep the registry private, add a private endpoint. That needs the Premium tier.

## Step 4 · Image trust: sign it, scan it, then run it

[curious] How do you know an image is the one you built? Sign it when you build it.
[600ms]
[calm] Notation, from the Notary Project, signs the image, and the signature is stored in the registry. The key can live in Key Vault.
[600ms]
[confident] Then check the signature before a pod starts. AKS Image Integrity, still in preview, uses Azure Policy to allow only signed images, and you can gate deployments on scan results.

## Step 5 · AKS identity: people and pods

[calm] In the cluster, there are two kinds of identity to think about: people and pods.
[600ms]
[confident] People sign in with Microsoft Entra ID and get Kubernetes roles through Kubernetes RBAC. Azure RBAC for Kubernetes is the alternative.
[600ms]
[reassuring] Pods reach Azure with a workload identity, which federates the pod's service account token with Entra. No stored password is needed.

## Step 6 · AKS network: shrink who can connect

[calm] Now shrink the ways in. Keep the API server off the open internet.
[600ms]
[confident] A private cluster gives the API server a private address. Authorized IP ranges limit a public API server instead, but they can't be used with private clusters.
[600ms]
[serious] Inside the cluster, every pod can talk to every pod by default. A network policy changes that.

## Step 7 · AKS configuration: guardrails before pods run

[curious] Admission checks look at every request to the API server. So a risky pod is stopped before it ever starts.
[600ms]
[calm] The Azure Policy add-on for AKS applies built-in definitions, such as the pod security baseline. Change the effect from audit to deny to block.
[600ms]
[confident] Pod Security Admission is also on by default in AKS, and it uses labels on the namespace.

## Step 8 · Container Instances: identity, network, secrets

[calm] A container group in Container Instances can use a managed identity, join your virtual network, and hide its passwords.
[600ms]
[serious] Adding or changing an identity on a running group restarts it. In a virtual network, the group needs its own subnet and a NAT gateway for outbound traffic.
[600ms]
[reassuring] Store passwords as secure values, which show only their name in the properties.

## Step 9 · Container Apps: identity, ingress and secrets

[confident] With Container Apps, expose only what must be public. Internal ingress is reachable only from inside the environment.
[600ms]
[calm] Let your apps use a managed identity, so that they don't have to carry any credentials.
[600ms]
[serious] In production, keep secret values in Key Vault references. And note that some roles use wildcard actions that include listing secrets.

## Step 10 · Runtime threat: an alert, start to finish

[serious] Now follow one attack on a running container, from the first suspicious process to the response.
[600ms]
[curious] Defender for Containers uses its sensor and the Kubernetes audit logs. It can detect crypto mining, web shells, binary drift and suspicious DNS activity.
[600ms]
[confident] Alerts map to the MITRE attack framework, appear in Defender for Cloud, and can be investigated in Microsoft Defender XDR.

## Step 11 · Which control for which layer?

[excited] Time to practise. Pick a control, then pick the layer it protects.
[600ms]
[calm] There are eight controls and four layers: registry and image, AKS, Container Instances and Container Apps, and runtime.
[600ms]
[encouraging] If one lands in the wrong place, try again. The reasoning is what sticks.

## Step 12 · Recap: protect the image, the cluster, the runtime

[calm] Lock down what you ship, how the cluster is configured, and what runs. Defender watches all three.
[600ms]
[confident] These are skills measured in S C five hundred, under securing compute with containers. Practise with the sorter, then read the official study guide.
[600ms]
[proud] Protect the image, the cluster and the runtime, and Contoso's orders-api is far harder to attack.
