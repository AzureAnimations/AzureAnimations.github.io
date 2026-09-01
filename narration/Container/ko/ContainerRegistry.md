# 내레이션 대본 — Azure Containers · 02 · Azure Container Registry

**Source animation:** `static/v2/Container/ContainerRegistry.html`

---

## Step 1 · dockerhub

[confident] 지난 장에서 contoso-orders version one 이라는 이미지를 빌드했죠.
[600ms]
[curious] 그럼 docker push 를 실행하면 그건 어디로 갈까요? 이름 앞에 레지스트리가 없으면 Docker 는 그것을 docker dot io — 공개 Docker Hub 로 보냅니다.
[700ms]
[calm] 편리한 기본값이지만, 여러분의 이미지가 공개 리포지토리에 놓인다는 뜻이기도 합니다. 자기 앱이라면 대개 그건 원하는 바가 아니죠.

## Step 2 · acr

[confident] 해결책은 이렇습니다 — 여러분이 소유한 비공개 장소에 이미지를 두세요.
[600ms]
[calm] 이름 앞에 레지스트리의 로그인 서버, contoso dot azure-c-r dot io 를 붙이면, 이제 docker push 는 여러분 자신의 Azure Container Registry 로 곧장 업로드합니다.
[700ms]
[reassuring] 먼저 az acr login 으로 로그인하면 ACR 은 Microsoft Entra ID 로 인증합니다 — 공유 암호가 떠돌아다니지 않죠.

## Step 3 · tasks

[confident] 빌드하려고 자기 컴퓨터에서 Docker 를 돌릴 필요조차 없습니다.
[600ms]
[impressed] ACR Tasks 를 쓰면 명령 하나 — az acr build — 가 Azure 위에서 이미지를 빌드하고 여러분을 위해 푸시해 줍니다.
[700ms]
[intrigued] 게다가 자동으로 다시 빌드할 수도 있습니다 — git 커밋 시, 일정에 따라, 또는 베이스 이미지에 패치가 적용될 때. 그래서 보안 수정이 손 하나 까딱 안 해도 모든 이미지로 흘러갑니다.

## Step 4 · tiers

[confident] 모든 레지스트리는 Basic, Standard, Premium 이라는 세 계층 중 하나로 제공됩니다.
[600ms]
[calm] 모두 똑같은 레지스트리 API 를 사용합니다. 계층을 올리는 건 주로 포함된 스토리지와 이미지 처리량을 더 얻기 위해서죠.
[700ms]
[encouraging] 개발에는 Basic, 대부분의 프로덕션에는 Standard 로 시작하세요 — 그리고 지역 복제, Private Link, 또는 고객 관리형 키가 필요하면 Premium 을 선택하세요.

## Step 5 · features

[confident] ACR 은 이미지를 얹어두는 선반보다 훨씬 더한 것입니다.
[600ms]
[impressed] Entra 역할과 토큰으로 접근을 보호하고, 지역 간에 복제하며, Microsoft Defender 가 푸시된 각 이미지의 취약점을 검사하도록 합니다.
[700ms]
[intrigued] 그리고 OCI 레지스트리이기 때문에 Helm 차트와 다른 아티팩트도 담습니다 — 컨테이너 이미지만이 아니죠.

## Step 6 · advanced

[confident] 단순한 push 와 pull 을 넘어서면, ACR 에는 더 깊은 도구 상자가 있습니다.
[600ms]
[impressed] 아티팩트 캐시는 인기 기능입니다 — Docker Hub 나 다른 공개 이미지를 여러분 자신의 레지스트리로 미러링해서 속도 제한을 피하고 프라이빗 네트워크로 빠르게 가져옵니다.
[700ms]
[intrigued] 또한 시작을 빠르게 하는 아티팩트 스트리밍, 엣지를 위한 connected registry, 실수를 되돌리는 소프트 삭제, 그리고 배포할 것을 검증하는 이미지 서명도 있습니다.

## Step 7 · recap

[proud] 이것이 여러분의 이미지 공급망입니다 — 한 번 빌드하고, Azure 의 비공개 레지스트리로 푸시하고, 클라우드에서 패치하고, 계층으로 확장하고, 처음부터 끝까지 보호합니다.
[700ms]
[optimistic] 이미지를 Azure 에 저장하고 빌드했으니, 이제 실제로 하나를 실행할 준비가 됐습니다. 다음 목적지는 Azure Container Instances — 단일 컨테이너를 가장 빠르게 띄우는 방법입니다.
