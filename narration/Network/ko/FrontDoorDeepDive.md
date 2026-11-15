# Narrator Script — Network · Azure Front Door: endpoints, origins, rules and private origins

**Source animation:** [FrontDoorDeepDive.html](../../../journeys/Network/FrontDoorDeepDive.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/frontdoor/front-door-routing-architecture>
- <https://learn.microsoft.com/azure/frontdoor/private-link>
- <https://learn.microsoft.com/azure/web-application-firewall/afds/afds-overview>

---

## Step 1 · What Front Door adds

[calm] 서비스 세 개, 맡은 일도 각각 다릅니다. Traffic Manager는 도메인 수준에서 DNS로 응답하기 때문에, 장애 조치는 캐싱과 T T L, 즉 유지 시간이 지나야 이루어집니다.
[600ms]
[confident] Application Gateway는 내 네트워크 안에 있는 리전 단위 7계층 프록시입니다.
[600ms]
[impressed] Azure Front Door는 Microsoft 엣지에 있는 글로벌 7계층 진입점으로, TLS 오프로드와 경로 기반 라우팅, 캐싱, 빠른 장애 조치를 제공합니다.

## Step 2 · Standard vs Premium: what each buys

[curious] Front Door에는 두 가지 계층이 있습니다. 둘 다 전역으로 라우팅하고, 캐싱하고, 규칙 엔진을 실행하며, WAF 사용자 지정 규칙을 지원합니다.
[600ms]
[confident] Microsoft가 관리하는 WAF 규칙 세트와 봇 보호, 그리고 오리진으로의 Private Link는 Premium에만 있습니다.
[600ms]
[encouraging] Classic은 지원이 종료될 예정이니, 새로 설계할 때는 Standard나 Premium으로 시작하세요. 매트릭스에서 필요한 항목을 클릭하면 어느 계층이 해당하는지 볼 수 있습니다.

## Step 3 · Endpoints, routes and origin groups

[calm] 엔드포인트는 내 도메인의 라우트를 한데 묶습니다. Front Door가 도메인 이름을 자동으로 만들어 주고, 직접 사용하는 사용자 지정 도메인도 추가할 수 있습니다.
[600ms]
[confident] 라우트는 도메인과 경로 패턴이 일치하면, 요청을 오리진 그룹으로 보냅니다.
[600ms]
[reassuring] 오리진 그룹은 App Service 앱이나 스토리지, 아니면 아무 호스트든 오리진을 모아 둔 것으로, 함께 프로브하고 부하를 분산합니다.

## Step 4 · Health probes and latency routing

[curious] 모든 엣지 위치가 각 오리진을 프로브합니다. 상태가 나쁜 오리진은 후보에서 빠집니다.
[600ms]
[confident] 그다음 Front Door는 순서대로 후보를 좁혀 갑니다. 정상 오리진, 우선순위, 지연 시간, 가중치 순입니다.
[600ms]
[reflective] 기본 방식은 지연 시간이 가장 짧은 쪽이라서, 요청은 가장 빠른 정상 오리진으로 갑니다. 여기 나오는 숫자는 예시입니다.

## Step 5 · Caching and compression

[calm] 라우트에서 캐싱을 켜 두면, 엣지가 GET 응답의 사본을 보관합니다.
[600ms]
[confident] 다음 쇼핑객은 엣지에서 바로 응답을 받기 때문에 오리진을 호출하지 않습니다. 압축을 쓰면 응답 크기도 줄어듭니다.
[600ms]
[serious] 개인 콘텐츠는 절대 캐시하지 마세요. 동적인 콘텐츠는 캐싱을 끈 별도의 라우트로 처리하고, 새로 고쳐야 할 때는 경로를 삭제하세요.

## Step 6 · Traffic acceleration: edge and split TCP

[curious] 먼저 DNS가 쇼핑객을 가까운 엣지 위치로 안내합니다.
[600ms]
[confident] 그 엣지가 가까운 곳에서 쇼핑객의 TCP 연결을 종료합니다. 이게 분할 TCP라서, 느린 연결 설정 왕복이 짧게 끝납니다.
[600ms]
[impressed] 오리진으로 가는 긴 연결은 따로 미리 열어 두고, 많은 쇼핑객이 함께 재사용합니다.

## Step 7 · TLS at the edge and end to end

[calm] Front Door는 쇼핑객의 TLS를 엣지에서 종료하고, 라우팅과 규칙을 적용한 다음, 오리진으로 두 번째 TLS 연결을 엽니다.
[600ms]
[confident] 전달 프로토콜을 HTTPS로 설정하면 종단 간 암호화가 됩니다.
[600ms]
[reassuring] 사용자 지정 도메인에는 관리형 인증서를 쓰거나, Key Vault에 있는 내 인증서를 가져다 쓰세요. T L S 1.2와 1.3을 지원합니다.

## Step 8 · Rules: rewrite, redirect, headers

[curious] 규칙 집합은 WAF와 라우트 매칭 다음에, 요청이 넘어가기 전에 실행됩니다.
[600ms]
[confident] 규칙은 모두 참이어야 하는 일치 조건과, 실행할 동작으로 이루어집니다.
[600ms]
[encouraging] 자주 쓰는 동작은 URL 리디렉션, URL 재작성, 요청 또는 응답 헤더 변경입니다.

## Step 9 · Secure an origin with Private Link

[calm] Premium은 Private Link로 오리진에 접근할 수 있는데, 이게 프라이빗 방식입니다.
[600ms]
[confident] Front Door가 프라이빗 엔드포인트를 요청하면, 오리진에는 보류 중으로 표시되고, 그걸 승인하면 됩니다.
[600ms]
[proud] 그 뒤로 트래픽은 Microsoft 백본에만 머물고, 오리진을 공용 인터넷에 노출할 필요도 없습니다.

## Step 10 · WAF policy and rule sets

[calm] WAF 정책은 모든 요청을 출발지와 가까운 엣지에서 검사합니다.
[600ms]
[confident] 사용자 지정 규칙이 우선순위 순서로 먼저 실행되고, 그다음에 관리형 규칙 세트가 실행됩니다. Standard는 사용자 지정 규칙만 지원하고, Premium은 관리형 세트와 봇 보호가 추가됩니다.
[600ms]
[proud] 탐지 모드는 로그만 남기고, 방지 모드는 직접 차단합니다. 프로필, 도메인, 라우트 중 원하는 곳에 연결하세요. 이것으로 A Z 700의 Front Door 항목을 모두 다뤘습니다.
