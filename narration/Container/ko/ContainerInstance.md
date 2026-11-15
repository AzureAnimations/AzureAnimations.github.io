# 내레이션 대본 — Azure Containers · 03 · Azure Container Instances

**Source animation:** `static/v2/Container/ContainerInstance.html`

---

## Step 1 · what

[confident] 컨테이너 딱 하나만 실행하고 싶다고 해 봅시다 — 클러스터도, 가상 머신도, 신경 쓸 것도 없이요.
[600ms]
[calm] 그게 바로 Azure Container Instances입니다. 이미지 — 예를 들어 contoso-orders 버전 원 — 을 건네주면, 단일 컨테이너가 몇 초 만에 실행됩니다.
[700ms]
[impressed] 서버리스 단일 컨테이너 컴퓨팅이고, 하이퍼바이저로 격리되며, 실제로 실행되는 동안에만 초 단위로 청구됩니다.

## Step 2 · config

[confident] 배포하는 것은 단순한 이미지가 아니라 container group이고, 그것이 ACI가 다루는 단위입니다.
[600ms]
[calm] 여기에 이미지와 함께 런타임 설정을 줍니다 — CPU와 메모리, 환경 변수, 노출할 포트, 그리고 재시작 정책이죠.
[700ms]
[reassuring] 그 재시작 정책이 프로세스가 종료될 때 무슨 일이 일어날지 결정합니다 — Always는 계속 실행하고, OnFailure는 오류 시 재시도하며, Never는 한 번만 실행합니다. 배치 작업에 딱이죠.

## Step 3 · pull

[confident] 우리 이미지 contoso-orders 버전 원은 프라이빗 레지스트리 — contoso 닷 애저-씨-알 닷 아이오 — 에 있습니다.
[600ms]
[calm] 그래서 ACI가 Azure Container Registry에서 가져옵니다. 인스턴스에 managed identity를 부여하고 AcrPull 역할을 할당하면, 풀은 그냥 동작합니다.
[700ms]
[reassuring] 가장 좋은 점은 — 레지스트리 암호를 어디에도 저장하지 않는다는 겁니다. 비밀이 아니라 아이덴티티니까요.

## Step 4 · run

[confident] 이제 실제로 시작해 봅시다 — 명령 하나가 전부를 해냅니다. az container create입니다.
[600ms]
[calm] 클릭이 더 좋으세요? Azure Portal에는 검토 후 만들기 흐름이 있고, 같은 구성을 YAML, Bicep, 또는 ARM 템플릿으로 배포할 수도 있습니다.
[700ms]
[serious] 한 가지만 기억하세요 — DNS name label은 해당 지역에서 전역적으로 고유해야 합니다. 그래야 컨테이너에 이름으로 접근할 수 있으니까요.

## Step 5 · reach

[confident] 포트를 노출하면 ACI가 곧바로 그룹에 공용 IP를 부여합니다.
[600ms]
[calm] 거기에 DNS name label을 더하면, 친숙한 정규화된 이름을 얻습니다 — contoso-orders 닷 이스트-유에스 닷 애저-컨테이너 닷 아이오, 포트 에이티-에이티에서 응답하죠.
[700ms]
[concerned] 한 가지 주의점 — 그룹이 재시작되면 공용 IP는 바뀔 수 있습니다. 안정적인 주소가 필요하면 앞단에 Application Gateway를 두세요.

## Step 6 · limit

[serious] 여기 함정이 있습니다. ACI는 고정된 컨테이너 집합을 실행합니다 — 자동 확장도, 부하 분산기도, 트래픽 분할도 없습니다.
[700ms]
[calm] 단발성이거나 수명이 짧거나 고정된 작업에는 완벽합니다. 하지만 탄력적인 웹 트래픽에는 곧 한계에 부딪힙니다.
[600ms]
[encouraging] 그럴 땐 한 단계 올라가세요 — 자동 확장 컨테이너는 Azure Container Apps, 관리형 웹 앱은 App Service, 완전한 오케스트레이션은 AKS입니다.

## Step 7 · recap

[proud] 이렇게 Azure Container Instances를 처음부터 끝까지 봤습니다 — 이미지를 건네면 몇 초 만에 컨테이너 하나가, 구성되고 ACR에서 가져와지고 DNS로 접근 가능한 상태로 실행됩니다.
[700ms]
[optimistic] Azure에서 컨테이너를 띄우는 가장 빠른 방법이죠. 그리고 확장이 필요해지는 순간, 다음 정거장이 이어받습니다 — Azure Container Apps, 자동 확장이 기본으로 탑재된 서버리스 컨테이너입니다.
