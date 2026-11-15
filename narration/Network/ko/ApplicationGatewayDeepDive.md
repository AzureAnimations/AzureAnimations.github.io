# Narrator Script — Network · Application Gateway: Listeners, Rules, Settings and Rewrites

**Source animation:** [ApplicationGatewayDeepDive.html](../../../journeys/Network/ApplicationGatewayDeepDive.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/application-gateway/configuration-overview>
- <https://learn.microsoft.com/azure/web-application-firewall/ag/ag-overview>

---

## Step 1 · A reverse proxy in its own subnet

[calm] Application Gateway는 웹 트래픽을 위한 계층 7 리버스 프록시이고, 가상 네트워크 안에 있습니다.
[600ms]
[confident] 클라이언트는 서버와 직접 통신하지 않습니다. 게이트웨이가 클라이언트 연결을 종료하고, 백엔드 풀의 서버로 완전히 새 연결을 엽니다.
[600ms]
[reassuring] 게이트웨이에는 전용 서브넷이 따로 필요하고, 인스턴스마다 프라이빗 주소를 하나씩 사용하니, 확장할 여유를 남겨 두세요.

## Step 2 · v2 SKU, scaling and capacity units

[curious] 먼저 버전 2 SKU를 고르세요. Standard v2 또는 WAF v2입니다. 이전 버전 1은 사용이 중단되었습니다.
[600ms]
[confident] 그다음 확장 방식을 고릅니다. 인스턴스 수를 고정하거나, 최솟값과 최댓값 사이에서 자동으로 확장합니다.
[600ms]
[reflective] 용량 단위는 게이트웨이가 컴퓨팅, 연결, 처리량에서 실제로 사용하는 양을 측정하며, 이 셋 중 가장 높은 값이 적용됩니다.

## Step 3 · Frontend IP and listeners

[calm] 프런트엔드 IP는 클라이언트가 도착하는 곳입니다. 퍼블릭, 프라이빗, 또는 둘 다일 수 있습니다.
[600ms]
[curious] 그다음 리스너가 포트, 프로토콜, 호스트 이름을 확인합니다. 기본 리스너는 어떤 호스트든 받고, 다중 사이트 리스너는 호스트 이름으로 일치시켜서 여러 사이트가 주소 하나를 공유할 수 있습니다.
[600ms]
[serious] 버전 2에서는 규칙 우선순위가 순서를 정하니, 와일드카드 리스너에는 특정 사이트 리스너보다 큰 숫자를 주세요.

## Step 4 · Backend pools

[calm] 백엔드 풀은 트래픽을 받는 서버의 모음입니다.
[600ms]
[confident] 멤버는 가상 머신, 확장 집합, App Service 앱, 또는 직접 고른 IP 주소나 도메인 이름이 될 수 있습니다.
[600ms]
[reassuring] 풀을 하나 이상의 라우팅 규칙에 연결하면, 규칙이 일치할 때 게이트웨이는 정상 상태인 멤버에게만 요청을 보냅니다.

## Step 5 · HTTP settings

[curious] 백엔드 설정은 게이트웨이가 서버와 통신하는 방식을 알려 줍니다. 프로토콜, 포트, 응답을 기다리는 시간입니다.
[600ms]
[confident] 쿠키 선호도는 게이트웨이가 관리하는 쿠키로 사용자를 같은 서버에 계속 연결해 줍니다.
[600ms]
[serious] 호스트 이름도 살펴보세요. 재정의할 수는 있지만, 모범 사례는 클라이언트에서 서버까지 같은 호스트 이름을 유지하는 것입니다.

## Step 6 · Health probes

[curious] 프로브가 어떤 서버가 트래픽을 받을지 정합니다. 사용자 지정 프로브가 없으면 게이트웨이는 루트 경로만 요청하고, 200에서 399 사이의 응답이면 모두 정상으로 봅니다.
[600ms]
[confident] 사용자 지정 프로브는 내 호스트의 실제 상태 확인 경로를 내가 정한 간격으로 확인하고, 상태 코드나 응답 본문으로 일치 여부를 판단할 수 있습니다.
[600ms]
[determined] 앱의 종속성까지 확인하는 경로를 프로브하면, 비정상 서버는 자동으로 순환에서 빠집니다.

## Step 7 · Routing rules

[calm] 라우팅 규칙은 리스너를 백엔드 풀과 그 설정에 연결합니다.
[600ms]
[confident] 기본 규칙은 모든 요청을 풀 하나로 보냅니다. 경로 기반 규칙은 URL 경로마다 다른 풀로 보내고, 어디에도 해당하지 않는 요청을 위한 기본 풀이 있습니다.
[600ms]
[encouraging] 규칙마다 고유한 우선순위가 있고, 하나가 가장 먼저 확인됩니다. 버튼을 눌러 두 유형을 비교해 보세요.

## Step 8 · TLS termination and end-to-end TLS

[calm] TLS 종료를 쓰려면 HTTPS 리스너에 인증서를 추가합니다. 게이트웨이가 요청을 복호화하고 규칙을 적용한 뒤, 일반 HTTP로 전달할 수도 있습니다.
[600ms]
[confident] 종단 간 TLS를 쓰려면 백엔드 설정에서도 HTTPS를 선택합니다. 그러면 게이트웨이가 자체 인증서를 가진 서버로 새 암호화 세션을 엽니다.
[600ms]
[reassuring] 그 인증서가 프라이빗 기관에서 발급된 것이라면 루트 인증서를 업로드하세요. 클라이언트와 백엔드는 TLS 1.2 이상이 필요합니다.

## Step 9 · Rewrite rule sets

[curious] 다시 쓰기 집합은 요청과 응답이 지나갈 때 내용을 바꿉니다. 헤더, URL 경로, 쿼리 문자열을 바꿀 수 있습니다.
[600ms]
[confident] 조건이 적용 시점을 정하고, 동작은 헤더를 추가하거나 설정하거나 제거합니다. 흔한 용도는 HSTS를 추가하거나, 백엔드를 드러내는 헤더를 숨기는 것입니다.
[600ms]
[impressed] 경로 맵을 다시 평가하면, 다시 쓴 경로가 다른 풀을 고르게 할 수도 있습니다. 버전 2가 필요하고, 규칙 하나에는 다시 쓰기 집합을 하나만 둘 수 있습니다.

## Step 10 · WAF, and when to add Front Door

[calm] WAF v2는 게이트웨이에 웹 애플리케이션 방화벽을 추가하며, 리전 안에서 동작합니다.
[600ms]
[confident] WAF 정책에는 OWASP Core Rule Set 기반의 관리형 규칙과, 먼저 확인되는 사용자 지정 규칙이 들어 있습니다.
[600ms]
[proud] Application Gateway는 리전 단위로 동작합니다. 글로벌 진입점이 필요하면 Azure Front Door를 앞에 두고, 각 리전마다 그 뒤에 게이트웨이를 두세요. 이것이 A Z 700 스킬의 핵심입니다.
