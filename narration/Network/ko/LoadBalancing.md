# Load balancing — 내레이션 (ko)

## Step 1 · One name, many servers

[calm] 사용자가 입력하는 주소는 하나뿐입니다. 그 뒤에는 한 리전, 혹은 여러 리전에 걸쳐 많은 인스턴스가 놓여 있습니다.
[500ms]
[confident] 누군가는 어느 인스턴스가 응답할지 골라야 하고, 다운된 인스턴스로는 아무도 보내지 않아야 합니다.
[400ms]
[curious] 그리고 Azure의 부하 분산 서비스는 하나가 아닙니다. 네 가지입니다. 잘못 고른다고 치명적인 경우는 드물지만, 지연 시간을 잃거나, 기능을 잃거나, 한 리전에 단일 장애 지점을 떠안게 됩니다.

## Step 2 · Two questions decide it

[confident] 마이크로소프트는 이 서비스들을 정확히 두 개의 축으로 분류합니다.
[500ms]
[calm] 트래픽이 글로벌인가요, 아니면 리전 단위인가요? 그리고 HTTP인가요, 아니면 모든 프로토콜인가요?
[400ms]
[helpful] 이 순서대로 답하세요. 먼저 범위입니다. 글로벌 서비스를 리전 서비스 앞에 두는 것은 지극히 정상적이고 건강한 설계입니다. 반대로 리전 서비스가 글로벌인 척하면, 모든 사용자를 한 리전으로 몰아넣게 됩니다.

## Step 3 · Four services, four quadrants

[calm] 두 축을 겹쳐 놓으면, 각 서비스가 자기 칸에 자리를 잡습니다.
[500ms]
[confident] 이 격자가 지도입니다. 다음 네 단계에서 한 칸씩 따라가 보겠습니다.
[400ms]
[helpful] 격자가 단순화한 두 가지 사실도 짚고 갑시다. Azure Load Balancer에는 리전 간 프런트엔드도 있고, Application Gateway는 HTTP뿐 아니라 TCP와 TLS도 프록시합니다. 이 격자는 각 서비스가 가장 잘 어울리는 자리를 보여 줍니다.

## Step 4 · Azure Load Balancer

[confident] Azure Load Balancer는 모든 TCP와 UDP 트래픽을 다루는 계층 사 서비스입니다.
[500ms]
[calm] 아주 높은 처리량과 극도로 낮은 지연 시간을 위해 만들어졌고, 연결을 종료하지 않고 패킷을 그대로 통과시킵니다.
[400ms]
[helpful] 이것이 핵심입니다. 클라이언트의 연결이 백엔드 서버 자체에 도달합니다. 그래서 지연 시간이 그토록 낮은 것이고, 동시에 URL 경로를 읽을 수 없는 이유이기도 합니다.

## Step 5 · Contoso, balanced at Layer 4

[calm] 실제 아키텍처에서 살펴보겠습니다.
[500ms]
[confident] 공용 Load Balancer 하나가 인터넷 트래픽을 받고, 그 뒤의 각 계층 앞에는 내부용 Load Balancer 두 개가 놓입니다. 여기서 모든 구간은 TCP입니다. 이 그림에서 URL을 읽는 것은 하나도 없습니다.
[400ms]
[helpful] 세어 보세요. 부하 분산 장치는 하나가 아니라 셋입니다. 공용 프런트엔드를 가진 것은 첫 번째뿐입니다. 내부의 둘은 사설 IP를 가지므로, 웹 계층 뒤에 있는 것은 인터넷에서 전혀 접근할 수 없습니다.

## Step 6 · Application Gateway

[confident] Application Gateway는 리전 단위의 역방향 프록시입니다.
[500ms]
[calm] 연결을 종료하고, HTTP 요청을 읽고, URL 경로나 호스트 이름을 기준으로 어디로 보낼지 결정합니다.
[400ms]
[helpful] TLS를 종료하기 때문에, 계층 사 부하 분산 장치가 할 수 없는 일을 할 수 있습니다. 요청을 검사하고, WAF를 적용하고, 헤더를 다시 쓰고, 경로마다 다른 풀로 보낼 수 있습니다.

## Step 7 · One hostname, three back-end pools

[calm] 하나의 호스트 이름이 하나의 Application Gateway로 확인됩니다.
[500ms]
[confident] TLS를 종료하고, 요청에 WAF를 적용한 다음, 경로를 읽어 사이트의 부분마다 서로 다른 backend pool을 고릅니다.
[400ms]
[helpful] 이것이 계층 사 부하 분산 장치는 할 수 없는 일입니다. 슬래시 api와 슬래시 images는 같은 주소로 향하는 같은 연결로 도착합니다. 이를 구분할 수 있는 것은 HTTP 요청을 읽을 수 있는 존재뿐입니다.

## Step 8 · Traffic Manager

[confident] Traffic Manager는 DNS 기반의 트래픽 분산 서비스입니다.
[500ms]
[calm] 여러분의 패킷에는 전혀 손대지 않습니다. 이름 조회에 대해 클라이언트가 사용할 엔드포인트를 알려 주고, 그다음에는 물러납니다.
[400ms]
[helpful] 이 설계는 장점이자 한계입니다. DNS에만 응답하므로 어떤 프로토콜이든 동작합니다. 하지만 장애 조치는 DNS 캐시와 TTL을 기다려야 해서, Front Door만큼 빠르게 전환할 수는 없습니다.

## Step 9 · One global profile, many regions

[calm] Contoso는 같은 애플리케이션을 여러 리전에서 운영합니다.
[500ms]
[confident] Traffic Manager는 글로벌입니다. 모든 리전 바깥에 위치해 이름을 소유하고, 조회마다 그 사용자를 담당해야 할 리전을 답해 줍니다.
[400ms]
[helpful] 번호를 따라가 보세요. 1번과 2번은 DNS이고, 애플리케이션 트래픽이 흐르지 않기 때문에 점선으로 그려져 있습니다. 3번이 실제 연결이며, 곧바로 리전으로 향합니다. Traffic Manager는 결코 데이터 경로에 들어가지 않습니다.

## Step 10 · Azure Front Door

[confident] Front Door는 애플리케이션 전송 네트워크입니다.
[500ms]
[calm] 글로벌 계층 칠 부하 분산에 더해, 사이트 가속을 사용자와 가까운 마이크로소프트의 에지에서 제공합니다.
[400ms]
[helpful] Traffic Manager와 달리 요청 자체를 실어 나르기 때문에, DNS를 기다리지 않고 몇 초 만에 장애 조치할 수 있고 캐시도 할 수 있습니다. 전 세계에 걸친 애플리케이션 전체의 현관이라고 생각하세요.

## Step 11 · One edge in front of the whole world

[calm] 어디에 있든 모든 사용자는 가장 가까운 마이크로소프트 에지 위치에 도착합니다.
[500ms]
[confident] Front Door는 요청을 검사하고, 가능하면 캐시에서 응답하며, 그렇지 않으면 가장 상태가 좋은 원본으로 전달합니다.
[400ms]
[helpful] 이것을 Traffic Manager 다이어그램과 나란히 놓고 보세요. 여기서는 트래픽이 실제로 서비스를 통과합니다. 바로 그래서 캐시할 수 있고, WAF를 실행할 수 있고, DNS 레코드가 만료되기를 기다리는 대신 몇 초 만에 사용자를 다른 리전으로 옮길 수 있습니다.

## Step 12 · They stack, they do not compete

[confident] 실제 아키텍처 대부분은 이 가운데 둘 이상을 함께 씁니다.
[500ms]
[calm] 각 계층은 아래 계층이 할 수 없는 일을 합니다. 글로벌 도달 범위, 그다음 리전 내 계층 칠 라우팅, 그리고 장비들 사이의 순수한 분산입니다.
[400ms]
[helpful] 한 계층에 네 가지가 모두 필요한 경우는 드뭅니다. 하지만 제대로 된 공개 애플리케이션은 흔히 Front Door를 Application Gateway 앞에 두고, 그 뒤에 Load Balancer를 두는 모습으로 정리됩니다.

## Step 13 · Scope first, then protocol

[confident] 자, 핵심입니다.
[400ms]
[calm] 트래픽을 어디에서 분산해야 하는지 묻고, 그다음 서비스가 얼마나 깊이 들여다봐야 하는지 물으세요. 이 두 답이 서비스를 정합니다. 나머지는 모두 세부 사항입니다.
[600ms]
[encouraging] 확신이 서지 않으면 요구 사항을 소리 내어 말해 보세요. "글로벌, 웹, 캐시 필요"라면 Front Door입니다. "리전, SQL, 가장 낮은 지연 시간"이라면 Load Balancer입니다. 그 한 문장이 서비스 이름을 알려 줍니다.
