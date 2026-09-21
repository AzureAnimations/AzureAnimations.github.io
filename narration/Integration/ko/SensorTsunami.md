# 내레이터 스크립트 — 에피소드 3 · 센서 쓰나미

**Source animation:** `journeys/Integration/SensorTsunami.html`

**Script status:** Authored voiceover.

---

## Step 1 · The telemetry flood drowns the queue

[curious] Contoso는 스마트 선반, 계산대, 웹 클릭스트림을 켭니다.
[500ms]
[serious] 판독값 하나하나는 아주 작습니다. 하지만 초당 10만 건이고, 주문 큐는 초당 2천 메시지 남짓에서 한계에 부딪힙니다. 결과는 제한, 유실된 판독값, 그리고 아무것도 보이지 않는 대시보드입니다.
[600ms]
[calm] 큐는 작업 항목에 맞춰 가격과 형태가 정해져 있습니다. 원격 분석은 작업이 아니라 사실의 급류이고, 한 건마다 왕복이 듭니다. 이 속도로는 감당할 수 없습니다.

## Step 2 · Stop delivering. Start recording.

[optimistic] 그래서 Maya는 문제의 형태 자체를 바꿉니다.
[500ms]
[confident] 브로커는 메시지를 작업자 하나에게 건네고 삭제합니다. 로그는 모든 이벤트를 덧붙이고, 몇 명의 독자든 각자의 속도로 지나가게 합니다.
[500ms]
[calm] 그것이 Azure 메시징의 진짜 분기점입니다. 브로커형 서비스는 전달한 것을 지웁니다. 스트림형 서비스는 그대로 두고 책갈피를 나눠 줍니다. 환불은 메시지이고, 선반 판독값은 이벤트입니다.

## Step 3 · Partitions turn one pipe into parallel lanes

[calm] 이벤트 허브는 파티션으로 나뉜 추가 전용 로그입니다.
[500ms]
[confident] 파티션 키가 차선을 정하고, 차선 안에서는 순서가 정확합니다. 그래서 선반 A14의 모든 판독값은 순서대로 남습니다. Standard는 파티션 1개에서 32개, 최대 1메가바이트 이벤트를 주고, AMQP와 Kafka와 HTTPS를 말합니다.
[600ms]
[serious] 그 키는 순서와 분산을 보고 고르세요. 매장 ID는 한 매장의 이벤트를 묶어 주지만, 너무 인기 있는 키는 핫 파티션을 만들고 나머지는 놀게 합니다.

## Step 4 · Offsets and consumer groups: read it twice

[calm] 소비자는 독립적인 위치를 유지합니다. 그림에서 realtime은 오프셋 42, batch는 36으로 여섯 위치 뒤에 있습니다. 읽어도 이벤트는 삭제되지 않습니다. 검사점은 재시작 후 이어 읽을 위치를 기록합니다. 이벤트를 다시 읽을 수 있으므로 검사점을 적절히 저장하고 재처리를 안전하게 만드세요.

## Step 5 · Capture archives the stream without consumer code

[calm] Capture는 소비자 코드를 작성하지 않고 보관하지만 무료라는 뜻은 아닙니다. 시간이나 크기 조건에 도달하면 Avro 배치를 Blob Storage나 Data Lake에 씁니다. Standard는 별도 요금이고 Premium과 Dedicated에는 포함됩니다. 대상 스토리지 요금은 별도입니다. 실시간 소비자의 송신 용량은 사용하지 않습니다.

## Step 6 · Episode 3: Event Hubs is the firehose

[confident] 양이 엄청나고, 페이로드가 작고, 둘 이상의 시스템이 같은 데이터를 원할 때 필요한 것은 큐가 아니라 로그입니다.
[500ms]
[calm] 이벤트는 기록되며 읽어도 제거되지 않습니다. 파티션은 각 차선 안에서 순서가 정확한 병렬 차선을 줍니다. 소비자 그룹은 팀마다 자기만의 뷰와 오프셋을 줍니다. Capture는 보관본을 자동으로 남깁니다.
[600ms]
[encouraging] Event Hubs는 '대규모로 지금 무슨 일이 일어나고 있는가'에 답합니다. 다음 에피소드는 전혀 다른 질문에 답합니다. 무언가 바뀌었다, 누가 알아야 하는가?
