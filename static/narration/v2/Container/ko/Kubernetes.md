# 내레이션 대본 — Azure Containers · 05 · Azure Kubernetes Service

**Source animation:** `static/v2/Container/Kubernetes.html`

---

## Step 1 · arch

[confident] Azure Kubernetes Service는 관리형 Kubernetes이고, 이 역할 분담이 핵심입니다.
[600ms]
[calm] Azure가 control plane을 대신 운영하고 확장합니다. API server, etcd, scheduler, 그리고 컨트롤러를 Free, Standard, Premium 등급 위에서요.
[600ms]
[reassuring] 그 아래 node pools는 여러분의 것입니다. Pod가 실제로 실행되는 워커 VM이죠.
[700ms]
[confident] 그리고 이 모든 것을 하나의 도구로 다룹니다. kubectl이 그 관리형 API server와 대화합니다.

## Step 2 · nodepools

[confident] 그 노드들은 node pools로 묶이고, 각 풀은 동일한 VM으로 이루어진 Virtual Machine Scale Set일 뿐입니다.
[600ms]
[calm] 언제나 system pool이 있는데, Linux 전용이며 CoreDNS와 metrics-server 같은 클러스터 서비스를 호스팅합니다.
[600ms]
[calm] 그다음 여러분의 앱을 위해 user pools를 추가하는데, 이건 Linux든 Windows든 상관없습니다.
[700ms]
[impressed] 각 풀은 독립적으로 확장되며, 최대 천 개 노드까지 늘어납니다.

## Step 3 · pod

[confident] 이제 앱을 배포해 봅시다. 각 Deployment가 원하는 복제본 수를 선언합니다. frontend는 둘, orders는 셋, backend는 둘.
[600ms]
[calm] orders 이미지는 contoso-orders 버전 원이고, kubectl 명령 하나로 적용합니다.
[600ms]
[intrigued] 그때부터 kube-scheduler가 넘겨받아, 각 Pod가 어느 노드에 놓일지 결정합니다.
[700ms]
[reassuring] 각 앱을 두 노드에 분산하므로, 노드 하나를 잃어도 앱은 절대 멈추지 않습니다.

## Step 4 · scale

[confident] AKS는 세 가지 서로 다른 방식으로 확장합니다. 이를 구분해 두면 도움이 됩니다.
[600ms]
[calm] Horizontal Pod Autoscaler, 즉 HPA는 CPU나 메모리, 또는 KEDA 이벤트가 수요 증가를 알리면 Pod 복제본을 늘립니다.
[600ms]
[calm] 그 Pod가 더 이상 들어갈 자리가 없으면, Cluster Autoscaler가 스케일 세트에 새 VM 노드를 추가합니다. 몇 분이 걸리죠.
[700ms]
[impressed] 그리고 갑작스러운 급증에는, virtual nodes가 추가 Pod를 Azure Container Instances로 몇 초 만에 밀어냅니다. 서버리스이고 초 단위 과금입니다.

## Step 5 · service

[confident] Pod는 일시적입니다. 나타났다 사라지고, 그때마다 새 IP를 갖죠.
[600ms]
[calm] 그래서 Pod와 직접 통신하지 않습니다. Service가 안정적인 정문이 되어, 뒤에 있는 건강한 Pod들에 부하를 분산합니다.
[600ms]
[reassuring] readiness, liveness, startup 프로브를 통과한 Pod에만 트래픽을 보냅니다.
[700ms]
[curious] 유형은 세 가지입니다. ClusterIP, NodePort, LoadBalancer로, 갈수록 더 멀리 도달합니다. 하나씩 살펴봅시다.

## Step 6 · svcCip

[confident] 먼저 ClusterIP이고, 이게 기본값입니다.
[600ms]
[calm] Pod에 안정적인 내부 주소를 부여해, frontend, orders, backend가 노드를 넘나들며 안전하게 서로를 호출할 수 있게 합니다.
[700ms]
[serious] 하지만 빨간 카드를 보세요. 이 트래픽은 클러스터를 절대 벗어나지 않습니다. 인터넷 사용자는 이 Pod에 닿을 수 없습니다.
[600ms]
[reassuring] 그게 바로 비공개 Pod 간 통신에 원하는 바입니다.

## Step 7 · svcNp

[confident] 다음은 NodePort, 바깥세상을 향한 첫걸음입니다.
[600ms]
[calm] 모든 노드의 IP에 같은 고정 포트를 엽니다. 범위는 대략 삼만에서 삼만 이천칠백육십칠까지죠.
[600ms]
[concerned] 하지만 함정이 있습니다. 노드가 둘이면 공용 IP도 둘이 되고, 나눠 줄 안정적인 단일 주소가 없습니다.
[700ms]
[amused] 노드는 나타났다 사라지고, 그 IP도 함께 바뀝니다. 빠른 테스트에는 괜찮지만, 실제 트래픽은 깔끔한 입구를 원합니다.

## Step 8 · svcLb

[confident] 그 깔끔한 입구가 바로 LoadBalancer 유형의 Service입니다.
[600ms]
[impressed] frontend에 이걸 선택하면, AKS가 Azure 공용 IP 하나를 자동으로 프로비저닝합니다. 단일하고 안정적인 주소죠.
[600ms]
[calm] 사용자는 그 하나의 IP에 접속하고, 클러스터 안에서 LoadBalancer가 각 요청을 건강한 frontend Pod들에 분산합니다. pod 원 또는 pod 투로요.
[700ms]
[reassuring] 비공개, 그다음 공개지만 지저분, 그리고 이제 부하 분산된 공용 IP. 이게 그 흐름입니다.

## Step 9 · ingress

[confident] 더 풍부한 라우팅을 위해서는 레이어 7로 올라갑니다.
[600ms]
[calm] Application Gateway for Containers는 Azure가 호스팅하는 게이트웨이로, 호스트와 경로 라우팅, TLS, mTLS를 다루며 클러스터로 들어오는 남북 트래픽을 처리합니다.
[600ms]
[calm] 관리형 Istio 서비스 메시는 동서 트래픽을 다루며, 서비스 간 호출을 mTLS로 보호합니다.
[700ms]
[optimistic] 둘 다 Kubernetes Gateway API에 맞춰져 있습니다. AKS가 향하고 있는 표준이죠.

## Step 10 · why

[confident] 그래서 왜 AKS일까요? Kubernetes가 현실을 여러분이 원하는 상태로 끊임없이 조정하기 때문입니다.
[600ms]
[reassuring] 자가 치유합니다. 실패한 Pod를 재시작하고, 죽은 노드에서 자동으로 재배치합니다.
[600ms]
[impressed] 무중단으로 업데이트를 배포하고, 마지막 정상 버전으로 즉시 롤백합니다.
[700ms]
[confident] 그리고 Azure에서는 Microsoft Entra ID와 RBAC, Azure CNI를 통한 VNet 통합, 관리형 업그레이드를 더할 수 있습니다.

## Step 11 · monitor

[confident] 마지막으로, 무슨 일이 일어나는지 봐야 합니다. CNCF 방식으로요.
[600ms]
[calm] Prometheus가 메트릭을 수집하고, Grafana가 시각화하고, Jaeger가 서비스 간 요청을 추적하고, Kiali가 서비스 메시를 지도로 그립니다.
[600ms]
[reassuring] Azure에서는 관리형 Prometheus와 관리형 Grafana 덕분에 여러분이 직접 운영할 서버가 없습니다.
[700ms]
[proud] 모두 오픈 소스이고, CNCF, Linux Foundation, 그리고 Microsoft가 뒷받침합니다.

## Step 12 · recap

[proud] 이것이 Azure Kubernetes Service의 처음부터 끝까지입니다.
[600ms]
[calm] 관리형 control plane, Linux나 Windows VM으로 이루어진 node pools, 자가 치유하는 Pod로 실행되는 여러분의 이미지, 자동 확장, Services와 ingress, 그리고 완전한 관측 가능성.
[700ms]
[encouraging] Dockerfile에서 완전히 오케스트레이션된 클러스터까지 쭉 왔습니다. 이것으로 컨테이너 여정이 완성됩니다.
[600ms]
[optimistic] 이제 무언가를 만들어 보세요. 무거운 일은 Azure에 맡기고요.
