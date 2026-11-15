# Narrator Script — Network · Outbound Connectivity: Public IPs, SNAT and NAT Gateway

**Source animation:** [OutboundConnectivity.html](../../../journeys/Network/OutboundConnectivity.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/nat-gateway/nat-overview>
- <https://learn.microsoft.com/azure/nat-gateway/nat-gateway-resource>
- <https://learn.microsoft.com/azure/virtual-network/ip-services/default-outbound-access>

---

## Step 1 · Which Address Do My VMs Call From?

[calm] Contoso 앱의 VM에는 프라이빗 주소만 있어서, 인터넷에서는 접근할 수 없습니다.
[600ms]
[curious] 그런데 파트너인 Fabrikam은 허용 목록에 등록된 공용 주소에서 오는 API 호출만 받습니다. 그러면 Fabrikam에는 실제로 어떤 주소가 보일까요?
[600ms]
[confident] 이번 레슨은 세 가지 질문을 따라갑니다. 호출이 어느 주소에서 나가는지, VM이 연결을 몇 개까지 열어 둘 수 있는지, 그리고 기본 아웃바운드 액세스가 어떻게 바뀌었는지입니다.

## Step 2 · Default Outbound Access

[calm] 아무것도 설정하지 않으면, Azure가 알아서 각 VM에 암시적인 아웃바운드 공용 IP를 줍니다.
[600ms]
[serious] 이 주소는 내 리소스가 아닙니다. 주소는 Microsoft 소유라서 예고 없이 바뀔 수 있고, ping이나 조각화된 패킷도 지원하지 않습니다.
[600ms]
[concerned] 이건 실제로 위험합니다. 주소가 바뀌는 순간 Fabrikam의 허용 목록과 맞지 않게 되어 호출이 실패하니까요.

## Step 3 · What Changed: Private Subnets

[curious] 여기서 큰 변화가 있습니다. 이제 새 가상 네트워크는 기본적으로 프라이빗 서브넷이어서, 기본 아웃바운드 IP가 아예 없습니다.
[600ms]
[calm] 기존 네트워크는 그대로입니다. 서브넷을 프라이빗으로 바꾸고 VM의 할당을 해제하기 전까지는, 기존 VM도 기본 아웃바운드를 계속 씁니다.
[600ms]
[confident] 어느 쪽이든 방향은 분명합니다. 새로 만드는 것에는 NAT 게이트웨이 같은 명시적인 아웃바운드 방법을 계획하세요.

## Step 4 · Public IPs: Standard, Static, Zone-Aware

[calm] 명시적인 아웃바운드 방법은 공용 IP에서 시작하고, 쓸 SKU는 Standard입니다.
[600ms]
[confident] 고정 IP이고, 영역 중복이나 단일 영역으로 만들 수 있으며, 허용하기 전에는 인바운드 트래픽이 닫혀 있습니다. Standard v2는 항상 영역 중복입니다.
[600ms]
[serious] Basic SKU는 2025년 9월 30일에 종료되었으니, 남아 있다면 업그레이드하세요.

## Step 5 · SNAT: When Ports Run Out

[calm] VM 여러 대가 SNAT로 공용 IP 하나를 함께 씁니다. SNAT는 각 프라이빗 원본 주소와 포트를 공용 주소와 포트로 바꿔 줍니다.
[600ms]
[curious] 같은 목적지 주소와 포트로 가는 활성 연결은 모두 자기만의 원본 포트가 필요해서, 포트 풀에는 한계가 있습니다.
[600ms]
[concerned] 포트가 바닥나면 그 목적지로 가는 새 연결이 실패합니다. 연결을 재사용하거나, 주소를 더 추가하거나, NAT 게이트웨이를 쓰세요.

## Step 6 · Attach a NAT Gateway

[confident] 해결책은 서브넷에 NAT 게이트웨이를 하나 연결하는 것입니다. 그러면 그 서브넷의 모든 VM이 게이트웨이의 고정 공용 IP로 나갑니다.
[600ms]
[calm] 고칠 경로도 없고 VM에 공용 IP를 붙일 필요도 없습니다. 아웃바운드 전용이라서, 먼저 들어오려는 인바운드 연결은 막힙니다.
[600ms]
[impressed] 포트는 모든 VM에 걸쳐 필요할 때 나눠 주기 때문에, 포트가 바닥날 가능성이 훨씬 낮습니다.

## Step 7 · More Addresses: IPs and Prefixes

[curious] NAT 게이트웨이에 공용 IP를 하나 추가할 때마다, 공유 포트 풀에 포트가 더 늘어납니다.
[600ms]
[confident] 공용 IP 프리픽스는 Standard 공용 IP를 연속된 범위로 묶은 것이라서, Fabrikam은 주소를 하나하나 등록하는 대신 범위 하나만 허용 목록에 올리면 됩니다.
[600ms]
[reflective] 프리픽스 크기는 신중하게 고르세요. 나중에 크기를 바꿀 수 없습니다.

## Step 8 · Bring Your Own IP Range

[calm] Contoso가 이미 공용 주소 대역을 가지고 있을 수도 있는데, 그 대역을 Azure로 가져올 수 있습니다.
[600ms]
[confident] 지역 인터넷 레지스트리에 등록하고, 검증하고, 프로비저닝한 다음 활성화합니다. 사용자 지정 프리픽스는 직접 연결할 수 없으니, 거기서 공용 IP와 프리픽스를 만들어 씁니다.
[600ms]
[proud] 그렇게 하면 Contoso는 주소 평판과 기존 허용 목록을 그대로 유지할 수 있습니다.

## Step 9 · Which Outbound Method Wins?

[curious] 서브넷에 아웃바운드 방법이 여러 개 있으면 어떻게 될까요? 분명한 우선순위가 있습니다.
[600ms]
[calm] 어플라이언스나 게이트웨이로 가는 경로가 가장 먼저입니다. 그다음이 NAT 게이트웨이, 인스턴스 수준 IP, 로드 밸런서 아웃바운드 규칙 순이고, 마지막이 기본 경로입니다.
[600ms]
[serious] 이미 진행 중인 흐름은 기존 방법을 그대로 쓰고 새 연결만 옮겨 가며, Basic SKU 리소스는 NAT 게이트웨이와 함께 쓸 수 없습니다.

## Step 10 · NAT Gateway: Zones and Idle Timeout

[calm] Standard NAT 게이트웨이는 영역 하나에 있습니다. 영역을 직접 고르거나, 영역을 지정하지 않으면 Azure가 배치하는데, 나중에 바꿀 수 없습니다.
[600ms]
[confident] StandardV2는 모든 영역에 걸쳐 영역 중복이고, StandardV2 공용 IP가 필요합니다.
[600ms]
[curious] 유휴 흐름은 제한 시간이 지나면 끊기는데, TCP는 이 시간을 조정할 수 있습니다. keepalive 같은 활동이 있으면 타이머가 초기화되고, UDP 제한 시간은 고정입니다.

## Step 11 · Pick Your Outbound Method

[curious] 제품이 아니라 필요에서 출발하세요. 하나를 고르면 다이어그램이 방법과 경로, 주의할 점을 보여 줍니다.
[600ms]
[confident] 대부분의 경우 Microsoft는 NAT 게이트웨이를 권장합니다. 방화벽은 검사 기능이 더해지고, 경로를 설정해서 연결합니다.
[600ms]
[serious] 기본 아웃바운드 액세스는 프로덕션에는 권장하지 않습니다.

## Step 12 · Outbound Connectivity, All in One

[calm] 이제 Contoso의 프라이빗 VM은 프라이빗 서브넷과 NAT 게이트웨이를 거쳐 나가고, Standard 고정 IP를 씁니다.
[600ms]
[confident] 세 가지 답은 이렇습니다. 주소는 Standard 고정 IP나 프리픽스, 아니면 내 대역입니다. 연결은 필요할 때 할당되는 SNAT 포트를 씁니다. 그리고 새 가상 네트워크는 기본적으로 프라이빗 서브넷입니다.
[600ms]
[proud] Fabrikam은 범위 하나만 허용하면 되고, Contoso의 호출은 언제나 알려진 주소에서 도착합니다.
