# Azure Networking Journey — 허브 둘러보기 나레이션 (ko)

`static/v2/Network/index.html` 의 `TOUR` 단계와 1:1로 대응합니다.
1단계는 인트로 화면, 2~11단계는 보드의 스톱 01~10, 12단계는 요약입니다.
의도적으로 짧게 — 클립당 약 12~16초로, 스포트라이트가 계속 움직이도록 했습니다.

## Step 1 · Welcome

[confident] Azure 네트워킹 여정에 오신 것을 환영합니다.
[300ms]
[calm] 제대로 된 Azure 워크로드가 거의 항상 도달하는 네트워크입니다. 열 편의 짧은 애니메이션이 실제로 구축하는 순서대로 하나씩 분해합니다.

## Step 2 · Virtual Network

[confident] 첫 번째 스톱. 가상 네트워크.
[300ms]
[calm] Azure 안의 나만의 사설 영역을 서브넷으로 나눕니다. 트래픽을 라우팅하는 대상도, 보안을 적용하는 지점도 서브넷입니다.

## Step 3 · NSG and ASG

[confident] 두 번째 스톱. 네트워크 보안 그룹과 애플리케이션 보안 그룹.
[300ms]
[calm] NSG는 서브넷을 지킵니다. ASG는 워크로드에 이름을 붙여서, IP 주소로 가득한 규칙 대신 "앱 계층이 데이터베이스에 접근하도록 허용"이라고 쓸 수 있게 해 줍니다.

## Step 4 · VNet peering and Bastion

[confident] 세 번째 스톱. 피어링, 그리고 Bastion.
[300ms]
[calm] 피어링은 Azure 백본을 통해 가상 네트워크를 사설로 연결합니다. Bastion은 포털에서 RDP와 SSH를 제공하므로 어떤 가상 머신도 공용 IP가 필요 없습니다.

## Step 5 · DNS and Private Link

[confident] 네 번째 스톱. DNS, 그리고 Private Link.
[300ms]
[calm] 먼저 이름을 확인하고, 그다음 사설로 접근합니다. 프라이빗 엔드포인트는 플랫폼 서비스를 평범한 사설 주소로 내 서브넷 안에 끌어옵니다.

## Step 6 · Load balancing

[confident] 다섯 번째 스톱. 부하 분산.
[300ms]
[calm] Front Door, Traffic Manager, Application Gateway, Load Balancer. 전역인가 지역인가, HTTP인가 아닌가. 이 두 질문에 답하면 선택은 저절로 정해집니다.

## Step 7 · WAF and Azure Firewall

[confident] 여섯 번째 스톱. 웹 애플리케이션 방화벽과 Azure Firewall.
[300ms]
[calm] WAF는 웹 요청을 검사합니다. Azure Firewall은 나머지를 통제하는데, 경로 테이블이 실제로 보낸 트래픽만 보호할 수 있습니다.

## Step 8 · VPN Gateway and ExpressRoute

[confident] 일곱 번째 스톱. VPN Gateway와 ExpressRoute.
[300ms]
[calm] 자체 데이터센터에서 들어오는 두 가지 길. 인터넷을 지나는 암호화 터널, 또는 인터넷을 전혀 거치지 않는 전용 회선. 둘 다 운영하는 조직도 많습니다.

## Step 9 · Azure Virtual WAN

[confident] 여덟 번째 스톱. Azure Virtual WAN.
[300ms]
[calm] 허브를 직접 운영하는 대신 선택하는 관리형 대안으로, 전역 전송이 내장되어 있습니다. 지사, VPN 사용자, 회선, 스포크가 한곳에서 만납니다.

## Step 10 · Network monitoring

[confident] 아홉 번째 스톱. 모니터링.
[300ms]
[calm] Network Watcher는 지금 이 패킷이 왜 삭제됐는지 알려 줍니다. Azure Monitor와 흐름 로그는 지난 화요일에 무슨 일이 있었는지 알려 줍니다.

## Step 11 · Naming convention

[confident] 열 번째 스톱. 명명 규칙.
[300ms]
[calm] 가장 덜 기술적인 단계이지만, 나머지 아홉이 유지 가능한 상태로 남을지를 결정합니다. 일찍 합의하세요. 리소스 이름을 바꾸는 일은 대개 다시 만드는 것을 뜻합니다.

## Step 12 · The whole picture

[confident] 이것으로 여정이 한 바퀴 돌았습니다.
[300ms]
[calm] 구축하고, 보호하고, 연결하고, 운영합니다. 보드의 어떤 스톱에서든 깊이 들어가거나, 1번 가상 네트워크부터 시작하세요.
