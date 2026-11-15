# 내레이터 스크립트 — 에피소드 5 · 서버리스 접착제

**Source animation:** `journeys/Integration/ServerlessGlue.html`

**Script status:** Authored voiceover.

---

## Step 1 · Four brokers, and a thousand lines of plumbing

[calm] 이제 Contoso에는 큐, 버스, 허브, 그리드가 있습니다. 그런데 그것들을 붙들고 있는 것을 보세요.
[500ms]
[serious] 모든 작업자는 여전히 자기 클라이언트를 열고, 메시지를 폴링하고, 잠금을 갱신하고, 재시도하고, 로그를 남깁니다. 같은 200줄을 조금씩 다른 다섯 가지 방식으로, 그것도 큐가 비어 있어도 계속 켜져 있는 머신 위에서요.
[600ms]
[confident] 수신 루프 코드는 한 줄 쓰면 평생 책임지는 한 줄입니다. 대신 통합 런타임이 맡을 수 있고, 어려운 부분은 이미 해결해 두었습니다.

## Step 2 · Exactly one trigger. Any number of bindings.

[calm] 함수에는 트리거가 정확히 하나 있습니다. 시작을 담당하는 것이죠.
[500ms]
[confident] 그 주위에 다른 서비스와 이어 주는 입력·출력 바인딩을 선택적으로 선언합니다. 함수 본문에는 SDK 코드가 전혀 없습니다. Service Bus 큐가 함수를 깨우고, Cosmos DB가 고객 정보를 건네고, 결과는 Storage 큐와 Event Grid로 나갑니다.
[600ms]
[reflective] 다른 Azure 서비스를 읽거나 쓰려고 함수 안에서 클라이언트를 만들고 있다면, 이미 그 일을 해 주는 바인딩이 있는지 확인하세요.

## Step 3 · A trigger for every service in the series

[calm] 지금까지 만난 브로커마다 짝이 되는 트리거가 있고, 각각 다른 형태의 일을 건네줍니다.
[500ms]
[confident] 큐 트리거는 메시지 하나를 주고 성공할 때까지 재시도합니다. Service Bus 트리거는 peek-lock을 대신 처리해, 정상 반환이면 완료, 예외를 던지면 포기입니다. Event Hubs 트리거는 한 파티션에서 배치를 주고 검사점을 남깁니다. Event Grid 트리거는 라우팅된 이벤트 하나를 줍니다.
[600ms]
[serious] 그러니 고르는 트리거가 장애 동작을 결정합니다. 처리기를 쓰기 전에 알아 둘 가치가 있습니다.

## Step 4 · Stop shipping secrets to production

[serious] 이제 누군가의 발표 자료 스크린샷에 찍히고 마는 그 부분입니다.
[500ms]
[calm] 바인딩은 연결 문자열을 지정할 수 있습니다. 공유 비밀이고, 복사되고, 로그에 남고, 교체하기 어렵고, 보통 필요한 것보다 훨씬 넓은 권한을 줍니다. 아니면 엔드포인트를 지정하고, 함수 앱의 관리 ID가 런타임에 Entra ID 토큰으로 인증하게 할 수 있습니다.
[600ms]
[confident] 하나는 새어 나갈 수 있습니다. 다른 하나는 훔쳐 갈 대상 자체가 없습니다. 다만 쓰는 동작에만 권한을 주세요. 받기와 보내기는 다른 권한입니다.

## Step 5 · The backlog drives the instance count

[optimistic] 그리고 이제 아무도 블랙 프라이데이에 맞춰 클러스터 크기를 잡지 않습니다.
[500ms]
[confident] 확장 컨트롤러가 큐 깊이나 이벤트 지연을 지켜보며 일이 기다리는 동안 인스턴스를 늘리고, 끝나면 다시 거둬들입니다. 새벽 두 시에는 거의 0으로 돌아갑니다. 행사가 시작되어 백로그가 쌓이면 인스턴스가 병렬로 나타납니다. 해소되면 사라집니다.
[600ms]
[calm] 이것은 KEDA가 컨테이너를 확장할 때 쓰는 것과 같은 신호입니다. Functions든 Container Apps든 자동 확장기의 입력은 큐 길이입니다.

## Step 6 · At least once means expect it twice

[calm] 멱등이란 같은 요청을 반복해도 업무 효과가 중복되지 않는다는 뜻입니다. 안정적인 메시지 ID나 주문 ID를 사용하세요. 결과와 처리 ID를 원자적으로 저장해 충돌로 불일치가 생기지 않게 합니다. 외부 결제 API에는 공급자의 멱등 키도 사용하세요. 전달 보장만으로 청구를 보호할 수는 없습니다.

## Step 7 · Episode 5: Functions are the wiring

[proud] 그리고 이것이 Contoso Retail의 재구축입니다. 처음부터 끝까지요.
[500ms]
[calm] 메시지가 무엇을 뜻하는지는 브로커가 정합니다. 그다음 무슨 일이 일어날지는 Functions가 정하고, 수신 루프와 확장과 자격 증명은 대신 처리됩니다. 트리거 하나, 선언적 바인딩, 관리 ID, 그리고 0까지 내려가는 이벤트 기반 확장.
[600ms]
[encouraging] 작업을 큐에 넣고, 순서를 보장하고, 스트림을 기록하고, 변화에 반응하고, Functions가 접착제 역할을 하게 하세요. 다음 여정에서는 스토어프런트가 AI 에이전트를 갖추고, 같은 통합 근육이 그것을 떠받칩니다.
