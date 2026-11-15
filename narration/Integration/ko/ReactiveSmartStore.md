# 내레이터 스크립트 — 에피소드 4 · 반응형 스마트 스토어

**Source animation:** `journeys/Integration/ReactiveSmartStore.html`

**Script status:** Authored voiceover.

---

## Step 1 · Nobody is streaming. Everyone is knocking.

[curious] 이번 것은 양의 문제가 아닙니다. 예의의 문제입니다.
[500ms]
[calm] 공급업체는 하루에 몇 번 새 카탈로그를 스토리지에 올립니다. 세 개의 서로 다른 서비스가 혹시 몰라 30초마다 하루 종일 그 컨테이너를 폴링합니다. 8천 6백 40번의 호출 중 무언가를 찾는 것은 정확히 두 번입니다.
[600ms]
[serious] 폴링은 세 배로 비쌉니다. API 호출, 그 호출을 하는 컴퓨팅, 그리고 파일이 도착한 뒤 누군가 알아채기까지의 몇 분의 지연입니다.

## Step 2 · Let the event announce itself

[optimistic] 그래서 Maya는 시스템 토픽을 켭니다.
[500ms]
[confident] 이제 Storage는 파일이 도착하는 즉시 Blob 생성 이벤트를 내보내고, Event Grid가 이를 구독한 모두에게 폴링 없이 거의 실시간으로 밀어 줍니다. Function이 카탈로그를 다시 인덱싱하고, 웹후크가 모바일 백 엔드를 깨우고, Service Bus 큐가 공급업체 포털을 버퍼링합니다.
[600ms]
[calm] Event Grid는 여러분이 소유한 큐가 아니라 라우터입니다. 처리량을 프로비저닝할 일이 없습니다. 원본과, 필터가 있는 구독과, 전달할 곳을 선언하면 끝입니다.

## Step 3 · A tiny envelope, and rules about who opens it

[calm] Event Grid 이벤트는 페이로드가 아니라 알림입니다.
[500ms]
[confident] 누가, 무엇을, 어디서, 언제. 보통 1~2킬로바이트이고 CloudEvents 표준 형식입니다. subject가 어느 Blob인지 알려 주고, data가 주소와 크기를 담습니다. 그리고 의도적으로, 그게 전부입니다.
[500ms]
[serious] 그런 다음 각 구독이 그 필드로 필터링합니다. 필터는 처리기가 아니라 구독에서 거세요. 시작해서 이벤트를 들여다보고 끝나는 처리기도 이미 비용을 낸 콜드 스타트입니다.

## Step 4 · At least once, and a schedule to prove it

[calm] Event Grid는 처리기의 응답을 30초 기다립니다.
[500ms]
[confident] 응답이 없으면 백오프 일정으로 재시도합니다. 10초, 30초, 1분, 5분으로 이어지며, 성공하거나 24시간 수명이 만료되거나 30회 시도에 도달할 때까지 계속됩니다.
[500ms]
[serious] 그 시점에 이벤트는 버려집니다. 배달 못 한 컨테이너를 구성하지 않았다면요. 이건 선택 사항입니다. 그리고 최소 한 번이라는 말은 언젠가 처리기가 중복을 본다는 뜻이니, 이벤트 ID를 키로 삼으세요.

## Step 5 · When the handler cannot be reached, pull instead

[calm] 비공개 소비자는 네임스페이스 토픽에서 HTTP로 이벤트를 가져올 수 있습니다. Receive는 이벤트와 잠금 토큰을 반환합니다. Acknowledge는 완료, release는 다시 사용 가능하게 하며 reject는 처리 불가 이벤트를 다룹니다. MQTT는 네임스페이스의 별도 게시·구독 기능입니다. MQTT 클라이언트는 이 HTTP 수신 API를 쓰지 않습니다.

## Step 6 · Four services, one question each

[reflective] 이것이 시리즈 전체를 한 표에 담은 것입니다.
[500ms]
[confident] 페이로드가 실제로 무엇인지 물어보세요. 단순한 작업은 Storage 큐로. 비즈니스 트랜잭션은 Service Bus로. 측정값의 스트림은 Event Hubs로. 무언가 바뀌었다는 알림은 Event Grid로.
[600ms]
[calm] 요령은 이렇습니다. 메시지는 누군가 조치해야 하는 것. 이벤트는 무언가 일어났고 관심 있는 쪽이 신경 쓸 수도 있는 것. 실제 시스템 대부분은 여러 개를 함께 씁니다.

## Step 7 · Episode 4: Event Grid is the nervous system

[proud] Contoso Retail은 시간 초과되던 모놀리식에서 느슨하게 결합된 네 개의 파이프라인으로 옮겨 갔습니다.
[500ms]
[confident] 버퍼링된 작업, 보장된 주문, 기록된 원격 분석, 그리고 즉각적인 반응. 토픽당 500개 구독의 푸시 라우팅, 봉투 기반 필터링, 선택적 배달 못 한 처리를 갖춘 재시도, 그리고 닿을 수 없는 소비자를 위한 풀 전달.
[600ms]
[encouraging] 이 서비스들은 모두 최소 한 번 전달입니다. 넷 모두를 안전하게 만드는 습관은 같습니다. ID를 키로 삼은 멱등 처리기입니다.
