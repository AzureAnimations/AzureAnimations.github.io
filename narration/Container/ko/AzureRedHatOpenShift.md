# 내레이션 대본 — Azure Containers · 06 · Azure Red Hat OpenShift

**Source animation:** `journeys/Container/AzureRedHatOpenShift.html`

---

## Step 1 · stack

[confident] Azure Red Hat OpenShift의 출발점은 AKS에서 본 것과 같은 Kubernetes입니다.
[600ms]
[calm] 그 위에 웹 콘솔, 이미지 레지스트리, 라우팅, 빌드, 파이프라인, Operator, 모니터링, 로깅까지 플랫폼 전체를 더해 하나의 제품으로 제공합니다.
[600ms]
[reassuring] Microsoft와 Red Hat이 함께 설계하고, 운영하고, 지원하며, 지원 창구도 하나입니다.
[700ms]
[confident] 여러분의 구독에서 실행되고, Azure 청구서에 표시되며, 99.95% 가동 시간 SLA가 적용됩니다.

## Step 2 · resp

[confident] 그렇다면 누가 무엇을 담당할까요? Microsoft와 Red Hat의 사이트 안정성 엔지니어가 클러스터 전체를 운영합니다.
[600ms]
[calm] 컨트롤 플레인을 패치하고 확장하며, 워커 노드의 운영 체제를 최신으로 유지하고, 플랫폼 경고와 감사 로그를 지켜봅니다.
[600ms]
[calm] 몇 가지는 공유합니다. SRE가 테스트된 버전을 게시하면 업그레이드는 여러분이 시작하고, 워커 추가와 가상 네트워크 연결도 여러분이 합니다.
[700ms]
[reassuring] 앱, 데이터, 개발자 서비스는 여러분의 것이며, SRE는 프라이빗 엔드포인트로만 클러스터에 접근합니다.

## Step 3 · arch

[confident] AKS와 달리 여기서는 숨겨진 것이 없습니다. 모든 것이 여러분의 가상 네트워크에서 실행됩니다.
[600ms]
[calm] 컨트롤 플레인 노드 3개가 자체 서브넷에서 API 서버와 etcd를 실행하고, 워커 노드 3개 이상이 다른 서브넷에서 Pod를 실행합니다.
[600ms]
[calm] 선택 사항인 인프라 노드는 라우터, 레지스트리, 모니터링을 호스팅하고, Azure 부하 분산 장치가 API 호출과 앱 트래픽을 전달합니다.
[700ms]
[intrigued] 클러스터의 각 부분을 선택해 역할과 주의할 점을 확인해 보세요.

## Step 4 · hcp

[confident] ARO에는 두 가지 아키텍처가 있고, 둘 다 같은 OpenShift 경험을 제공합니다.
[600ms]
[calm] 표준 아키텍처는 모든 것을 여러분의 구독에 두며, 컨트롤 플레인 노드 3개와 워커 3개 이상으로 구성되고, 생성에 약 45분이 걸립니다.
[600ms]
[intrigued] 미리 보기인 호스트된 컨트롤 플레인은 컨트롤 플레인을 Red Hat 소유의 Azure 계정으로 옮깁니다.
[700ms]
[confident] 워커 2대로 시작할 수 있고, 클러스터는 약 15~20분이면 준비되며, 노드 풀을 따로 업그레이드합니다.

## Step 5 · projects

[confident] 이제 팀을 맞이해 봅시다. 개발자는 회사 계정과 MFA로 Microsoft Entra ID에 로그인합니다.
[600ms]
[calm] OpenShift에 기본 제공되는 OAuth 서버가 그 OpenID Connect 토큰을 받아 액세스를 허용합니다.
[600ms]
[calm] 팀은 프로젝트 안에서 작업합니다. 직접 만들 수 있는 Kubernetes 네임스페이스로, 할당량과 네트워크 정책이 함께합니다.
[700ms]
[reassuring] 프로젝트별로 admin, edit, view를 부여하면 각 팀이 딱 필요한 만큼의 액세스를 갖게 됩니다.

## Step 6 · s2i

[confident] 개발자에게 OpenShift가 가장 빛나는 순간입니다. Git에서 실행 중인 앱까지, Dockerfile 없이 갑니다.
[600ms]
[calm] webhook이 Source-to-Image 빌드를 시작하고, 언어별 빌더 이미지와 여러분의 코드를 결합합니다.
[600ms]
[calm] 이미지는 기본 제공 레지스트리에 저장되고 ImageStream이 추적하며, 그 새 이미지가 Pod의 롤링 업데이트를 시작합니다.
[700ms]
[impressed] 마지막으로 Route가 HTTPS URL로 게시합니다. 각 단계를 선택해 작동 방식을 확인해 보세요.

## Step 7 · routes

[confident] Route는 Service를 게시합니다. 트래픽은 Azure 부하 분산 장치로 들어와 인프라 노드의 OpenShift 라우터에 도착합니다.
[600ms]
[calm] edge 종료에서는 라우터가 인증서를 갖고, 평문 HTTP를 Pod로 보냅니다. 가장 일반적인 선택입니다.
[600ms]
[calm] passthrough에서는 라우터가 복호화하지 않고, 앱이 처음부터 끝까지 TLS를 유지합니다.
[700ms]
[reassuring] 그리고 re-encrypt에서는 두 구간 모두 암호화되지만, 인증서 두 개를 관리해야 합니다.

## Step 8 · operators

[confident] Operator는 소프트웨어를 운영하는 소프트웨어입니다.
[600ms]
[calm] 사용자 지정 리소스에 원하는 상태를 선언하면, Operator가 이를 읽고 앱을 만들고 복구하며 상태를 보고합니다. 이 조정 루프가 계속 반복됩니다.
[600ms]
[calm] OpenShift 자체도 클러스터 Operator로 운영되며, SRE가 관리 상태를 유지합니다.
[700ms]
[impressed] 그리고 OperatorHub에서 Pipelines, GitOps, Serverless, Service Mesh, Virtualization, 파트너 Operator를 몇 번의 클릭으로 추가할 수 있습니다.

## Step 9 · security

[confident] OpenShift는 기본적으로 안전합니다. 모든 Pod는 실행 전에 보안 컨텍스트 제약 조건을 통과합니다.
[600ms]
[calm] root로 실행하겠다는 Pod는 기본 제약 조건인 restricted-v2에 의해 거부됩니다.
[600ms]
[reassuring] 사용자를 지정하지 않은 Pod는 허용되며, 프로젝트 범위에서 가져온 root가 아닌 임의의 사용자 ID로 실행됩니다.
[700ms]
[confident] 여기에 Entra ID 로그인, 프라이빗 API와 수신, 송신 잠금, 네트워크 정책, 변경 불가능한 RHCOS 노드, 관리 ID가 더해집니다.

## Step 10 · day2

[confident] Day 2의 업그레이드는 여러분의 일정에 맞춰 진행됩니다.
[600ms]
[calm] Red Hat과 Microsoft가 테스트된 버전을 게시하고 여러분이 시점을 고르면, OpenShift가 컨트롤 플레인을 업데이트한 뒤 워커를 한 대씩 드레인하고 업데이트하므로 앱은 계속 서비스됩니다.
[600ms]
[calm] Prometheus와 Alertmanager는 미리 설치되어 있고, 플랫폼 로그와 감사 로그는 자동으로 SRE에게 전달됩니다.
[700ms]
[reassuring] Azure Arc로 연결하면 Azure Monitor를 쓸 수 있고, 애플리케이션 로그는 Log Analytics로 보낼 수 있습니다.

## Step 11 · vsaks

[confident] 그렇다면 AKS일까요, ARO일까요? 같은 Kubernetes지만 방식이 다릅니다.
[600ms]
[calm] AKS는 가볍습니다. Azure가 보이지 않는 컨트롤 플레인을 운영하고, 추가 기능은 모두 직접 고르며, 필요하면 Windows 노드 풀도 씁니다.
[600ms]
[calm] ARO는 완전한 OpenShift 플랫폼으로, Microsoft와 Red Hat의 SRE가 클러스터 전체를 운영합니다.
[700ms]
[reassuring] 이미 OpenShift에 익숙하거나 모든 것을 기본 제공으로 원한다면 ARO를 고르세요. 다만 최소 규모가 크고 워커당 OpenShift 요금이 붙는다는 점을 고려하세요.

## Step 12 · recap

[confident] 이것이 Azure Red Hat OpenShift의 전체 모습입니다.
[600ms]
[calm] 공동으로 운영되고, 여러분의 구독에서 실행되며, 빌드, 레지스트리, Route, Operator까지 개발자에게 완전한 플랫폼을 제공합니다.
[600ms]
[reassuring] 기본적으로 안전하고, Day 2에는 업그레이드 시점을 여러분이 정하며, 모니터링도 기본 제공됩니다.
[700ms]
[impressed] 컨테이너 여정을 완료했습니다. Microsoft Learn에서 더 깊이 알아보세요.
