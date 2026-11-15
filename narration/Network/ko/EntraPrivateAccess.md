# Narrator Script — Network · Microsoft Entra Private Access and Private Link services

**Source animation:** [EntraPrivateAccess.html](../../../journeys/Network/EntraPrivateAccess.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/azure/private-link/private-link-service-overview>
- <https://learn.microsoft.com/entra/global-secure-access/how-to-configure-per-app-access>

---

## Step 1 · Two requests, two tools

[calm] Contoso에 프라이빗 접근 요청이 두 건 들어왔습니다. 재택근무 중인 Maya는 내부 앱 하나만 쓰면 됩니다.
[600ms]
[curious] 그리고 파트너는 Contoso가 Azure에서 운영하는 서비스에 접속해야 합니다. 요청마다 각자의 프라이빗 경로가 필요합니다.
[600ms]
[confident] 첫 번째는 Microsoft Entra Private Access가 해결하고, 두 번째는 Azure Private Link 서비스가 해결합니다.

## Step 2 · The VPN problem

[calm] 네트워크 수준 VPN은 장치 전체를 네트워크에 붙입니다.
[600ms]
[concerned] Maya에게 필요한 건 앱 하나뿐인데, 이제 그 네트워크의 모든 서버에 손이 닿게 됩니다. 업무에 필요한 것보다 훨씬 넓은 접근 권한입니다.
[600ms]
[confident] Private Access는 대신 애플리케이션 세그먼트 단위로 동작합니다. 여기서 말한 건 네트워크 수준 접근의 일반적인 개념이고, 모든 VPN 제품이 그렇다는 뜻은 아닙니다.

## Step 3 · Microsoft Entra Private Access

[curious] Maya의 장치에는 Global Secure Access 클라이언트가 실행됩니다. 프라이빗 앱으로 가는 요청을 이 서비스를 거쳐 보내므로, 따로 VPN에 연결할 필요가 없습니다.
[600ms]
[confident] 프라이빗으로 취급할 이름과 주소를 목록으로 등록하면, 앱의 대상으로 가는 요청이 그 앱으로 라우팅됩니다.
[600ms]
[reassuring] 그 외에 네트워크의 다른 것에는 연결할 수 없습니다.

## Step 4 · The connector

[calm] 커넥터는 네트워크 안의 Windows Server에서 실행되는 작은 에이전트입니다.
[600ms]
[confident] 커넥터가 서비스로 나가는 연결을 먼저 열기 때문에, 인바운드 포트는 전혀 열 필요가 없습니다. 사용자는 클라우드 서비스에 접속하고, 클라우드 서비스가 커넥터를 통해 앱으로 트래픽을 보냅니다.
[600ms]
[serious] 고가용성을 위해 그룹에 커넥터를 두 개 이상 두세요.

## Step 5 · Define an app segment

[curious] 세그먼트는 앱이 무엇인지 알려 줍니다. 정규화된 도메인 이름이나 IP 주소, 그리고 포트입니다.
[600ms]
[confident] 와일드카드 이름이나 주소 범위도 되고, 포트는 값 하나 또는 범위로 지정할 수 있습니다. 엔터프라이즈 앱에 세그먼트를 추가하고, 커넥터 그룹을 선택하면 됩니다.
[600ms]
[encouraging] 그런 다음 이 앱을 쓸 수 있는 사용자와 그룹을 할당합니다.

## Step 6 · Conditional Access on a private app

[calm] 프라이빗 앱은 엔터프라이즈 앱이라서 조건부 액세스가 적용됩니다.
[600ms]
[confident] 정책으로 사용자가 들어오기 전에 다단계 인증이나 규정 준수 장치를 요구할 수 있습니다.
[600ms]
[reassuring] Global Secure Access의 앱에서 정책을 시작하면, 그 앱이 이미 대상으로 지정되어 있습니다. 긴급 액세스 계정은 제외하고, 보고 전용 모드로 시작하세요.

## Step 7 · Quick Access or per-app access?

[curious] 설정 방법은 두 가지입니다. Quick Access는 주요 프라이빗 리소스를 한꺼번에 담는 앱 하나입니다.
[600ms]
[confident] 앱별 Global Secure Access 앱은 일부 리소스에만 자체 규칙을 적용합니다.
[600ms]
[reflective] Quick Access는 전환 단계라고 생각하세요. VPN을 대체하는 데 쓰고, 더 세밀하게 제어하려면 앱별 액세스로 옮겨 가세요. 둘 다 커넥터 그룹을 사용합니다.

## Step 8 · Publish a Private Link service

[calm] 이번에는 제공자 쪽입니다. 서비스를 Standard Load Balancer 뒤에 두세요.
[600ms]
[confident] 그런 다음 프런트엔드 IP에 Private Link 서비스를 만들면, Azure가 공유할 수 있는 별칭을 생성합니다.
[600ms]
[serious] Basic Load Balancer는 여기서 쓸 수 없고, 서비스와 가상 네트워크, 로드 밸런서가 모두 같은 리전에 있어야 합니다.

## Step 9 · Who may connect: NAT, visibility, approval

[curious] 누가 연결할 수 있는지는 세 가지 설정이 정합니다. 가시성은 연결을 요청할 수 있는 대상을 정하는데, 역할 기반 액세스만 허용할 수도, 특정 구독만 허용할 수도, 별칭을 아는 누구에게나 열어 둘 수도 있습니다.
[600ms]
[confident] 자동 승인을 쓰면 신뢰하는 구독은 검토 없이 통과합니다. 나머지 요청은 승인하거나 거부할 때까지 Pending 상태로 대기합니다.
[600ms]
[reflective] NAT IP는 내 서브넷에서 할당되기 때문에, 서비스에는 소비자의 주소가 아니라 NAT 주소가 원본으로 보입니다.

## Step 10 · The partner's private endpoint

[calm] 소비자 쪽에서는 파트너가 자기 가상 네트워크에 프라이빗 엔드포인트를 만듭니다.
[600ms]
[confident] 이 엔드포인트가 별칭이나 리소스 식별자로 내 서비스를 가리키게 합니다. 별칭을 쓰면 수동 승인이 필요하므로, 연결은 Pending으로 시작합니다.
[600ms]
[reassuring] 파트너의 구독이 자동 승인 목록에 있으면 바로 승인됩니다. 승인된 연결만 트래픽을 보낼 수 있습니다.

## Step 11 · Which one for which request?

[curious] 시나리오 여섯 개에 도구는 두 가지입니다. 각각 어디에 들어맞는지 보세요.
[600ms]
[confident] 직원이 자기 신원을 기준으로 프라이빗 앱에 접근하는 경우라면, Private Access입니다.
[600ms]
[proud] 내가 만든 서비스를 다른 쪽의 프라이빗 엔드포인트에 게시하는 경우라면, Private Link 서비스입니다.

## Step 12 · Recap: identity in, private endpoint out

[calm] Private Access는 직원을 신원 기준으로 프라이빗 앱 하나에 연결해 주고, 그 사이에 VPN은 필요 없습니다.
[600ms]
[confident] Private Link 서비스를 쓰면 파트너가 자기 프라이빗 엔드포인트를 통해 내 서비스에 접근할 수 있습니다.
[600ms]
[proud] 이 둘로 S C 500 학습 가이드의 항목 두 개를 다룬 셈이고, 이제 어떤 요청에 어떤 도구를 써야 하는지 알게 되었습니다.
