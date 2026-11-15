# Narrator Script — Network · VPN gateway SKUs and policies

**Source animation:** [GatewaySkusAndPolicies.html](../../../journeys/Network/GatewaySkusAndPolicies.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings>
- <https://learn.microsoft.com/azure/vpn-gateway/about-gateway-skus>
- <https://learn.microsoft.com/azure/vpn-gateway/design>
- <https://learn.microsoft.com/azure/vpn-gateway/point-to-site-about>

---

## Step 1 · Which gateway, which settings?

[calm] Contoso Retail에는 지점 사무실 하나와 원격 근무 팀이 있는데, 둘 다 Azure에 접속해야 합니다.
[600ms]
[curious] 지점은 VPN 장치에서 사이트 간 터널로 연결합니다. 원격 근무자는 포인트 투 사이트를 쓰는데, 클라이언트 터널을 열고 로그인을 합니다.
[600ms]
[confident] VPN 게이트웨이 하나에서 네 가지 선택이 결과를 좌우합니다. 하나씩 차근차근 정해 보겠습니다.

## Step 2 · Route-based or policy-based?

[calm] VPN 유형은 트래픽을 어떤 터널에 연결할지, 그리고 어떤 기능을 쓸 수 있는지를 정합니다. SKU를 고르기 전에 먼저 정하세요.
[600ms]
[confident] 포인트 투 사이트와 BGP, 액티브-액티브는 경로 기반일 때만 쓸 수 있습니다.
[600ms]
[serious] 정책 기반은 Basic SKU에만 있고, 터널은 하나뿐이며 포인트 투 사이트도 안 됩니다. 변환할 수는 없고, 삭제한 뒤 경로 기반 게이트웨이를 새로 만들어야 합니다.

## Step 3 · What a bigger SKU buys you

[curious] 계층이 높을수록 CPU와 대역폭이 늘어납니다. 그러면 사이트 간 터널 수, 포인트 투 사이트 연결 수, 처리량 등급, 게이트웨이 뒤에 둘 수 있는 VM 수, 이 네 가지 상한이 올라갑니다.
[600ms]
[serious] Basic보다 위의 계층에는 Basic에 없는 운영용 기능도 들어 있습니다. BGP, 액티브-액티브, 영역 중복, RADIUS, 사용자 지정 정책, IPv6 같은 것들입니다.
[600ms]
[reassuring] 처리량 수치는 보장이 아니라 벤치마크입니다. 실제 게이트웨이 크기를 정할 때는 최신 표를 확인하세요.

## Step 4 · Generation and the AZ suffix

[calm] SKU 이름은 두 부분으로 읽습니다. 세대, 그리고 끝에 AZ가 붙는지입니다.
[600ms]
[confident] 2세대는 같은 계층에서 처리량이 더 높고, 가장 큰 계층도 추가됩니다. AZ는 영역 중복이라는 뜻이고, 가용성 영역이 있는 리전에서 쓸 수 있습니다.
[600ms]
[serious] 요즘 만드는 건 영역 중복 AZ SKU입니다. Basic이 없어지는 건 아니지만, 개발과 테스트용입니다.

## Step 5 · Active-standby or active-active?

[calm] VPN 게이트웨이는 모두 인스턴스 두 개로 구성됩니다. 기본적으로 하나는 일하고 하나는 대기하는데, 이걸 액티브-스탠바이라고 합니다.
[600ms]
[confident] 액티브-액티브는 둘 다 일하게 하고, 각각 자기 공용 IP를 갖습니다. Basic이 아닌 경로 기반 게이트웨이와, Standard 고정 공용 IP가 필요합니다.
[600ms]
[serious] 대기 인스턴스가 넘겨받을 때는 짧게 끊길 수 있고, 포인트 투 사이트 사용자는 다시 연결해야 합니다.

## Step 6 · Dual redundancy and BGP failover

[curious] 액티브-액티브 게이트웨이에 온프레미스 장치를 두 대 짝지으면, 모두 활성 상태인 터널이 네 개가 됩니다.
[600ms]
[impressed] 터널 하나가 장애가 나면 BGP가 그 경로를 철회하기 때문에, 트래픽이 나머지 터널로 알아서 옮겨 갑니다.
[600ms]
[serious] 로컬 네트워크 게이트웨이가 두 개, 연결도 두 개 필요하고, 두 연결이 같은 프리픽스를 처리할 수 있도록 BGP도 써야 합니다. 두 장치가 모두 BGP를 지원하는지 확인하세요.

## Step 7 · How the tunnel is built: IKE, then IPsec

[calm] 두 장치는 두 단계에 걸쳐 규칙을 맞춥니다.
[600ms]
[curious] 1단계 IKE에서는 어떻게 통신할지, 즉 암호화와 무결성, DH 그룹을 정합니다. 2단계 IPsec에서는 데이터를 어떻게 보호할지를 PFS 그룹과 함께 정합니다.
[600ms]
[reassuring] 따로 요청하지 않으면 Azure는 대부분의 장치에서 동작하도록 고른 기본 제안 세트를 제시합니다.

## Step 8 · When the partner device dictates

[calm] 가끔은 규정 준수 규칙이나 오래된 방화벽이 한 가지 조합만 받아 주기도 합니다.
[600ms]
[confident] 그럴 때는 연결에 사용자 지정 IPsec 및 IKE 정책을 지정해서 정확히 어떤 조합인지 알려 줍니다. 연결 하나에 정책 하나이고, Basic에서는 쓸 수 없습니다.
[600ms]
[reflective] 여기 나온 값은 예시일 뿐 권장 값이 아닙니다. 정책 기반 셀렉터를 쓰면 경로 기반 게이트웨이도 정책 기반 방화벽과 통신할 수 있는데, 전송 라우팅은 안 됩니다.

## Step 9 · Point-to-site tunnel types

[calm] 원격 근무자는 노트북에서 터널을 시작합니다. 터널 유형에 따라 어떤 장치가 연결할 수 있는지, 어떤 방화벽을 통과하는지가 달라집니다.
[600ms]
[confident] OpenVPN은 포트 443을 쓰는 TLS 기반이라 대부분의 방화벽을 통과하고, 지원하는 클라이언트도 가장 다양합니다. IKEv2는 표준 기반이지만, UDP 포트를 막는 네트워크도 있습니다.
[600ms]
[serious] SSTP는 Windows 전용이고 곧 종료됩니다. 2026년 8월 31일부터는 활성화할 수 없고, 2027년 3월 31일에 동작이 멈춥니다.

## Step 10 · Who gets in: three sign-in methods

[calm] 게이트웨이가 터널을 받아들이기 전에 먼저 사용자를 인증해야 합니다. 이미 쓰고 있는 ID 시스템에 맞는 방식을 고르세요.
[600ms]
[confident] Microsoft Entra ID는 조건부 액세스와 MFA를 쓸 수 있지만, OpenVPN과 Azure VPN Client에서만 동작합니다. RADIUS는 AD 자격 증명을 쓰고 NPS로 MFA를 더할 수 있으며, Basic에서는 쓸 수 없습니다.
[600ms]
[reassuring] 클라이언트가 최소한 한 가지만 지원하면 되므로, 여러 방식을 동시에 켜 둘 수 있습니다.

## Step 11 · ExpressRoute gateway, with VPN beside it

[calm] ExpressRoute에는 자체 게이트웨이 유형과 SKU가 따로 있습니다. ErGw1Az, ErGw2Az, ErGw3Az, ErGwScale입니다. SKU가 높을수록 CPU와 대역폭이 늘어납니다.
[600ms]
[curious] 옆에 사이트 간 VPN 게이트웨이를 두면, 회선에 문제가 생겼을 때 백업이 됩니다.
[600ms]
[serious] 이때는 Basic이 아닌 경로 기반 VPN 게이트웨이와, /27 이상 크기의 게이트웨이 서브넷이 필요합니다. 온프레미스에서는 ExpressRoute 경로를 우선하게 하세요.

## Step 12 · Try your own requirements

[curious] 이제 직접 해 볼 차례입니다. 왼쪽에서 요구 사항을 설정하세요. 지점 수, 처리량 등급, 복원력, 지점 장치, 원격 근무자입니다.
[600ms]
[impressed] 그러면 오른쪽의 네 가지 설정에, 무엇을 골라야 하고 그 이유가 무엇인지 표시됩니다.
[600ms]
[reassuring] Learn 가이드를 따른 학습용 모델이지, 크기를 산정하는 도구는 아닙니다. 배포하기 전에 최신 페이지에서 한도와 가격을 꼭 확인하세요.

## Step 13 · One gateway, four decisions

[calm] 정리하면, 경로 기반에 영역 중복을 쓰고, 중요한 곳에는 BGP와 함께 액티브-액티브를 씁니다.
[600ms]
[confident] 사용자 지정 정책은 파트너가 요구할 때만 추가하고, 로그인 방식은 내 ID 시스템에 맞는 것으로 고르세요.
[600ms]
[proud] A Z 700과 A Z 305 모두, 요구 사항을 보고 이런 설정을 고를 수 있어야 합니다. 다음은 Learn 학습 가이드입니다.
