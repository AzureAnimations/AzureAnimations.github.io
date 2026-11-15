# Narrator Script — Network · ExpressRoute: models, SKUs, peerings and resilience

**Source animation:** [ExpressRouteDeepDive.html](../../../journeys/Network/ExpressRouteDeepDive.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/expressroute/expressroute-introduction>

---

## Step 1 · What a Circuit Really Is

[calm] Contoso가 ExpressRoute 회선을 주문합니다. 회선은 연결 제공업체가 Microsoft까지 이어 주는 링크 두 개로 이루어져 있습니다.
[600ms]
[curious] 회선은 서비스 키로 식별하는데, 이건 G U I D이고 비밀 값이 아닙니다.
[600ms]
[confident] 대역폭은 고정이고, 회선에 있는 모든 피어링이 이 대역폭을 나눠 씁니다.

## Step 2 · Connectivity Models

[curious] Contoso가 같은 회선에 연결하는 방법은 제공업체 기반으로 세 가지입니다. 클라우드 익스체인지, 지점 간 이더넷 링크, 그리고 any-to-any IP VPN입니다.
[600ms]
[confident] 어떤 모델이냐에 따라 경로의 모양과 라우팅을 누가 운영하는지가 정해집니다.
[600ms]
[reflective] 레이어 2 제공업체라면 라우팅을 직접 관리하고, 관리형 레이어 3라면 제공업체가 대신 해 줍니다.

## Step 3 · SKU and Tier

[calm] Contoso는 어디까지 닿아야 하는지에 따라 회선 SKU를 고릅니다.
[600ms]
[confident] Local은 피어링 위치 근처 리전에 닿습니다. Standard는 같은 지정학적 지역의 모든 리전에, Premium은 전 세계 모든 리전에 닿고 한도도 더 높습니다.
[600ms]
[reassuring] 그다음 데이터 요금제를 고릅니다. 종량제와 무제한 중에서요. 종량제에서 무제한으로는 바꿀 수 있지만, 반대로는 안 됩니다.

## Step 4 · Private Peering

[calm] 프라이빗 피어링은 Contoso의 네트워크를 가상 네트워크의 프라이빗 주소에 연결합니다.
[600ms]
[confident] 링크마다 하나씩, 작은 서브넷 두 개를 예약한 다음 VLAN과 A S N을 정합니다. Microsoft 쪽은 자체 A S N을 씁니다.
[600ms]
[serious] 피어링 서브넷은 가상 네트워크와 겹치면 안 됩니다. 가상 네트워크에 닿으려면 게이트웨이 서브넷에 게이트웨이를 추가하고, 회선에 연결을 만들어야 합니다.

## Step 5 · Microsoft Peering and Route Filters

[curious] Microsoft 피어링은 Microsoft 365나 Azure 플랫폼 서비스 같은 공용 엔드포인트에 닿습니다.
[600ms]
[confident] 서비스마다 프리픽스에 BGP 커뮤니티가 붙어 있고, 경로 필터는 그 커뮤니티를 허용하는 목록입니다.
[600ms]
[serious] 필터를 연결하기 전에는 새 회선이 프리픽스를 하나도 광고하지 않습니다.

## Step 6 · Route Advertisement and BGP Communities

[calm] Contoso는 BGP로 프리픽스를 광고합니다. Microsoft는 돌려보내는 경로에 커뮤니티 태그를 붙이고, 사용자가 붙인 태그는 무시합니다.
[600ms]
[curious] 같은 프리픽스가 회선 두 개로 들어오면, Azure는 더 구체적인 경로를 선호합니다.
[600ms]
[confident] 연결 가중치로 경로를 유도하거나, 다른 회선에서 A S 경로를 앞에 덧붙여서 유도할 수도 있습니다. 경로가 똑같으면 Azure가 두 회선에 부하를 분산합니다.

## Step 7 · Resilience Design

[serious] Contoso는 단일 장애 지점을 한 계층씩 없애 갑니다.
[600ms]
[confident] 회선마다 링크 두 개가 액티브-액티브로 동작하니, 서로 다른 장치에서 끝나도록 하세요. 위치 전체에 장애가 나도 버티려면, 다른 피어링 위치에 회선을 하나 더 추가하세요.
[600ms]
[reassuring] 마지막으로 영역 중복 ExpressRoute 게이트웨이를 두면, 게이트웨이가 약한 고리가 되지 않습니다.

## Step 8 · Global Reach and FastPath

[curious] Global Reach는 Contoso의 사무실을 각자의 회선으로 연결해서, 사이트끼리 Microsoft의 글로벌 네트워크로 데이터를 주고받게 합니다.
[600ms]
[confident] FastPath를 쓰면 데이터가 게이트웨이를 건너뛰고 가상 머신으로 바로 갑니다. 경로 교환은 여전히 게이트웨이가 합니다.
[600ms]
[reflective] FastPath에는 고사양 게이트웨이 SKU가 필요하고, 리전 간 Global Reach에는 Premium이 필요합니다.

## Step 9 · ExpressRoute Direct and Encryption

[calm] ExpressRoute Direct는 Contoso의 라우터를 이중 포트로 Microsoft에 직접 연결합니다. 대용량 데이터를 수집하거나 물리적으로 격리해야 할 때 씁니다.
[600ms]
[serious] 트래픽은 기본적으로 암호화되지 않습니다.
[600ms]
[confident] MACsec은 물리 링크를 보호하고 Direct에서만 동작하며, 키는 Key Vault에 둡니다. IPsec은 경로 전체를 종단 간으로 보호합니다. 둘을 함께 쓸 수도 있습니다.

## Step 10 · Bidirectional Forwarding Detection

[concerned] 링크가 끊어졌을 때 BGP만으로는 이를 알아차리는 데 최대 3분 정도 걸릴 수 있습니다.
[600ms]
[impressed] 양방향 포워딩 감지는 링크를 계속 확인해서, 장애를 1초 안에 찾아냅니다.
[600ms]
[reflective] Microsoft 쪽에서는 새 피어링에 기본으로 켜져 있지만, 내 장비에는 직접 설정해야 합니다. 감지는 빨라지지만, 전체 페일오버에는 여전히 시간이 걸립니다.

## Step 11 · Diagnose a Circuit

[serious] Azure가 Contoso의 서브넷에 닿지 않습니다. 아래 계층부터 차례로 확인하세요.
[600ms]
[confident] 먼저 회선입니다. 상태는 Enabled, 제공업체 상태는 Provisioned여야 합니다. 그다음 양쪽의 피어링 값이 일치하는지 확인하고, 두 경로 모두에서 A R P 테이블을 보세요.
[600ms]
[determined] 마지막으로 BGP 상태와 라우팅 테이블을 봅니다. 상태가 Active나 Idle이면 서브넷, VLAN, A S N, 아니면 M D 5 키가 서로 맞지 않는다는 뜻입니다.
