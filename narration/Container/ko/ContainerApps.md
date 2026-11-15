# 내레이션 대본 — Azure Containers · 04 · Azure Container Apps

**Source animation:** `static/v2/Container/ContainerApps.html`

---

## Step 1 · problem

[confident] Contoso는 contoso-orders 버전 원을 Azure Container Instances에서 실행했고, 잘 작동했습니다. 그러다 한계에 부딪히기 전까지는요.
[600ms]
[concerned] ACI는 고정된 수의 컨테이너를 실행합니다. 자동 확장도, 부하 분산도, 무중단 업데이트도 없습니다.
[700ms]
[optimistic] 트래픽이 급증하거나 안전한 릴리스가 필요하면 Azure Container Apps로 올라섭니다. 여러분을 대신해 확장하는 서버리스 컨테이너입니다.

## Step 2 · replica

[confident] Container Apps에서 앱은 레플리카로 실행됩니다. 각 레플리카는 자체 CPU와 메모리를 가진 여러분의 컨테이너입니다.
[600ms]
[calm] 종량제 요금제에서는 레플리카 하나가 4분의 1에서 4 vCPU, 그리고 0.5에서 8 기비바이트를 받습니다.
[700ms]
[impressed] 최솟값과 최댓값을 정하면 Azure가 부하에 따라 레플리카를 늘리고 줄입니다. 0에서 1,000까지, 모두 자동으로요.

## Step 3 · httpscale

[confident] az containerapp create로 이미지를 배포하고 HTTP 확장 규칙을 붙입니다.
[600ms]
[calm] http concurrency of fifty를 설정하면, 리비전이 그 임계값을 넘을 때마다 Container Apps가 레플리카를 추가합니다.
[700ms]
[impressed] 클라이언트는 하나의 주소, 즉 FQDN을 호출하고, 내장 ingress가 각 요청을 정상 레플리카에만 라우팅합니다.

## Step 4 · revision

[confident] 앱을 바꾸면, 새 이미지든 구성이든 환경 변수든, 변경할 수 없는 새 리비전이 만들어집니다.
[600ms]
[calm] 단일 모드에서는 Container Apps가 이전 리비전에서 새 리비전으로 트래픽을 자동으로 옮깁니다.
[700ms]
[reassuring] 다중 모드에서는 가중치로 트래픽을 나눕니다. 블루-그린이나 카나리아처럼요. 잘못된 배포는 그냥 이전 리비전에 머뭅니다.

## Step 5 · ingress

[confident] ingress를 켜면 앱은 HTTPS 엔드포인트를 얻습니다. 부하 분산 장치도, 공용 IP도 만들 필요가 없습니다.
[600ms]
[calm] 외부 ingress는 인터넷을 향하고, 내부 ingress는 environment 안에서만 접근할 수 있습니다.
[700ms]
[intrigued] 그 environment 안에서 앱들은 이름으로 서로를 찾습니다. http://payments를 호출해도 트래픽은 밖으로 나가지 않습니다.

## Step 6 · serverless

[confident] 여기서 자동 확장은 KEDA가 담당합니다. HTTP, CPU와 메모리, 또는 이벤트에 따라 0까지 확장합니다.
[600ms]
[impressed] 그 이벤트 트리거에는 Service Bus, Event Hubs, Kafka, Redis가 포함됩니다. 앱이 잠들어 있는 동안에는 요금이 들지 않습니다.
[700ms]
[optimistic] 선택 사항인 Dapr 사이드카를 추가하면 앱은 서비스 호출, 상태, pub/sub를 얻습니다. 추가 인프라 없이요.

## Step 7 · control

[confident] Container Apps는 의도적으로 관리형이며 정해진 방식을 따릅니다. 노드도, Kubernetes API도, 클러스터 업그레이드도 여러분이 건드리지 않습니다.
[600ms]
[calm] 바로 그게 핵심입니다. 여러분은 앱에 집중하고, Azure가 플랫폼을 운영합니다.
[700ms]
[curious] 하지만 노드 풀, 완전한 Kubernetes API, 사용자 지정 네트워킹, 오퍼레이터가 필요하다면, 마지막 정거장은 Azure Kubernetes Service입니다.

## Step 8 · recap

[proud] 그러니 이미지를 가져오면, Container Apps가 이를 서버리스로 자동 확장되는 레플리카로 실행합니다.
[600ms]
[encouraging] 안전한 롤아웃을 위한 리비전, 트래픽을 위한 ingress, 내장된 KEDA와 Dapr. 운영 부담 없이 Kubernetes의 힘을 얻습니다.
[700ms]
[optimistic] 그리고 정말로 노드 수준의 제어가 필요할 때, 이 여정의 마지막 정거장이 Azure Kubernetes Service입니다. 클러스터의 완전한 제어죠.
