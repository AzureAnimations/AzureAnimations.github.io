# Narrator Script — Network · Managed Networking — Virtual Network Manager and Route Server

**Source animation:** [ManagedNetworking.html](../../../journeys/Network/ManagedNetworking.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network-manager/overview>
- <https://learn.microsoft.com/azure/virtual-network-manager/concept-security-admins>
- <https://learn.microsoft.com/azure/route-server/overview>
- <https://learn.microsoft.com/azure/route-server/route-server-faq>

---

## Step 1 · Many VNets, Managed by Hand

[calm] Contoso는 가상 네트워크를 계속 늘리고 있습니다. 네트워크마다 피어링과 보안 규칙 사본이 따로 필요합니다.
[600ms]
[concerned] 피어링은 리전마다 하나하나 만들어야 하고, NSG 사본들은 시간이 지나면서 서로 조금씩 달라집니다.
[600ms]
[serious] 게다가 VNet이 새로 생길 때마다 이 작업을 처음부터 다시 해야 합니다.

## Step 2 · One Manager, One Scope

[calm] Azure Virtual Network Manager는 가상 네트워크를 한곳에서 묶고, 구성하고, 배포합니다.
[600ms]
[confident] 범위는 관리 그룹이나 구독 목록으로 정하고, 이 범위가 Virtual Network Manager가 보고 바꿀 수 있는 한계입니다.
[600ms]
[curious] 범위 밖의 VNet은 관리되지 않습니다. 작업 흐름은 범위, 네트워크 그룹, 구성, 배포 순서로 진행됩니다.

## Step 3 · Network Groups Choose Who Gets What

[calm] 네트워크 그룹은 가상 네트워크를 담는 컨테이너입니다. 구성은 그룹에 적용하기 때문에, 구성원이 모두 받게 됩니다.
[600ms]
[curious] 고정 멤버십은 VNet을 직접 하나씩 고르는 방식이고, 동적 멤버십은 태그 같은 Azure Policy 조건이 대신 골라 주는 방식입니다.
[600ms]
[confident] 그리고 VNet은 여러 그룹에 동시에 속할 수 있습니다.

## Step 4 · Connectivity, Defined Once

[calm] 연결 구성은 그룹마다 토폴로지를 정합니다.
[600ms]
[curious] 허브 앤 스포크는 스포크마다 허브와 피어링합니다. 메시는 그룹 안의 모든 VNet을 서로 연결합니다.
[600ms]
[confident] 직접 연결을 쓰면 한 그룹의 스포크끼리 메시가 추가되어, 허브를 거치지 않고 서로 통신합니다. 여기서는 프로덕션에는 적용되어 있고, 테스트에는 없습니다.

## Step 5 · Security Admin Rules Go First

[calm] 관리자 규칙은 중앙 네트워크 팀이 소유하는 전역 규칙입니다. NSG 규칙보다 먼저 평가되고, NSG 규칙은 앱 팀이 계속 관리합니다.
[600ms]
[confident] 허용, 거부, 항상 허용 중에서 정할 수 있고, 이 설정이 트래픽의 운명을 결정합니다.
[600ms]
[serious] 허용 규칙은 최종 결정을 NSG에 넘깁니다. 하지만 거부나 항상 허용 규칙은 거기서 평가가 끝나기 때문에, NSG가 뒤집을 수 없습니다.

## Step 6 · Nothing Applies Until You Deploy

[serious] 배포하기 전까지 구성은 계획일 뿐입니다.
[600ms]
[calm] 구성을 원하는 리전에 커밋하세요. 한 번에 한 리전씩 점진적으로 롤아웃하고, 배포한 리전만 바뀝니다.
[600ms]
[reassuring] 목표 상태는 배포된 구성에 그룹 멤버십을 더한 것입니다. 한 리전에서 전부 제거하려면, 그 리전에 아무것도 배포하지 않으면 됩니다.

## Step 7 · Change the Group, the Rules Follow

[curious] 직접 해 보세요. 그룹에 가상 네트워크를 추가하거나 빼 보세요.
[600ms]
[impressed] 구성이 배포된 상태에서는 새 구성원이 다시 배포하지 않아도 구성을 그대로 받고, 빠진 구성원은 구성이 사라집니다. 피어링과 직접 링크, 관리자 규칙 모두 멤버십을 따라갑니다.
[600ms]
[reassuring] 정적 멤버십은 바로 반영됩니다. 동적 멤버십은 Azure Policy를 기다려야 해서 몇 분 걸릴 수 있습니다.

## Step 8 · Routes by Hand Go Stale

[calm] 네트워크 가상 어플라이언스, 줄여서 NVA는 지점에서 경로를 학습합니다. SD-WAN 장치일 수도 있고 방화벽일 수도 있습니다.
[600ms]
[concerned] 그 경로를 쓰려면 경로가 바뀔 때마다 누군가 라우팅 테이블, 즉 UDR을 직접 수정해야 합니다.
[600ms]
[serious] 새 프리픽스는 누군가 추가하기 전까지 경로가 없습니다. 이게 바로 빈틈입니다.

## Step 9 · Azure Route Server in Its Own Subnet

[calm] Route Server는 RouteServerSubnet이라는 전용 서브넷에서 동작하는 관리형 서비스이고, 서브넷 크기는 /26 이상이어야 합니다.
[600ms]
[confident] NVA가 BGP로 Route Server와 피어링하는데, Route Server의 인스턴스 두 개와 모두 피어링합니다. BGP를 지원하는 NVA라면 어느 것이든 가능합니다.
[600ms]
[impressed] NVA가 학습한 경로에 대해서는 UDR을 따로 관리하지 않아도 되는 게 장점입니다.

## Step 10 · Routes Flow In and Out Automatically

[curious] NVA가 자신이 아는 프리픽스를 광고하면, Route Server가 그 경로를 가상 네트워크에 적용하고, VNet의 프리픽스도 반대로 NVA에 전달됩니다.
[600ms]
[confident] Route Server는 경로만 교환합니다.
[600ms]
[reassuring] 데이터는 Route Server를 거치지 않습니다. 트래픽은 VM과 NVA 사이를 곧바로 오갑니다.

## Step 11 · Gateways and Branch-to-Branch

[calm] 기본적으로 각 구성 요소는 Route Server하고만 경로를 교환합니다.
[600ms]
[curious] 경로 교환을 켜면 Route Server가 NVA와 VPN 게이트웨이, ExpressRoute 게이트웨이 사이에서 경로를 전달합니다. 그러면 온프레미스 사이트끼리 Azure를 거쳐 서로 통신할 수 있습니다.
[600ms]
[serious] 게이트웨이는 Route Server와 같은 VNet에 있어야 합니다. 회선 간 경로는 전달되지 않으니, 그럴 때는 Global Reach를 쓰세요.

## Step 12 · Which Tool for Which Job?

[curious] 같은 네트워크라도 하는 일은 다릅니다. 지금 풀려는 문제에 맞는 서비스를 고르세요.
[600ms]
[confident] 내가 가진 VNet이 많다면 Virtual Network Manager이고, 태그 기반 그룹에는 Azure Policy를 함께 씁니다. 관리형 허브가 필요하면 Virtual WAN입니다.
[600ms]
[calm] 경로는 고정 경로에는 UDR을, BGP로 학습해야 하면 Route Server를 쓰세요.

## Step 13 · Managed Networking, All in One

[calm] Virtual Network Manager는 범위, 그룹, 연결, 관리자 규칙, 배포로 여러 VNet을 일관되게 운영합니다.
[600ms]
[confident] Azure Route Server를 쓰면 NVA와 게이트웨이가 테이블을 손으로 고치지 않고도 경로를 학습합니다. RouteServerSubnet, BGP 피어링, 경로 교환이 핵심입니다.
[600ms]
[proud] A Z 700의 주제들이고, A Z 305의 네트워크 설계도 포함됩니다. 다음은 학습 가이드입니다.
