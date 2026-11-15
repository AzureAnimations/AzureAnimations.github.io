# 내레이터 스크립트 — Azure Integration & Messaging · 허브 투어

**Source animation:** `journeys/Integration/index.html`

**Script status:** Authored voiceover.

---

## Step 1 · Welcome

[calm] 통합은 별개의 프로그램이 함께 작동하도록 만드는 것입니다. 생산자는 일을 보내고 소비자는 처리하며 브로커가 사이에서 전달합니다. Contoso의 다섯 에피소드에서 작업 보관, 주문 조정, 측정값 기록, 변화에 반응하기, Functions로 처리기 연결하기를 배웁니다. 이야기 속 수치는 예시이며 성능 보장이 아닙니다.

## Step 2 · The Black Friday Bottleneck

[calm] 에피소드 1. 블랙 프라이데이 병목.
[400ms]
[serious] '지금 구매' 클릭마다 재고 데이터베이스를 기다리고, 그 기다림이 사이트를 무너뜨립니다. 가운데에 스토리지 큐를 놓아, 작업은 뒤에서 처리하면서 쇼핑객에게는 곧바로 영수증을 돌려줍니다.

## Step 3 · The VIP Transaction Disaster

[calm] 에피소드 2에서는 주문과 취소가 역순으로 처리됩니다. Service Bus 세션은 관련 메시지를 조정합니다. Peek-lock은 수신과 완료를 분리하고 배달 못 한 큐는 실패를 격리합니다. 순서만으로 모든 업무 효과의 중복을 막을 수는 없습니다. 작업자에는 멱등성도 필요합니다.

## Step 4 · The Sensor Tsunami

[calm] 에피소드 3. 센서 쓰나미.
[400ms]
[curious] 초당 십만 건의 센서 판독값이 도착하면, Service Bus조차 맞지 않는 도구가 됩니다. Event Hubs는 전달을 멈추고 기록을 시작해, 모든 팀이 같은 스트림을 자기 속도로 읽게 합니다.

## Step 5 · The Reactive Smart Store

[calm] 에피소드 4. 반응형 스마트 스토어.
[400ms]
[optimistic] 세 서비스가 하루 종일 스토리지 계정에 파일이 도착했는지 묻습니다. Event Grid는 이벤트가 스스로 알리게 해서, 무언가 바뀌는 순간 알맞은 처리기만 깨웁니다.

## Step 6 · The Serverless Glue

[calm] 에피소드 5. 서버리스 접착제.
[400ms]
[confident] 네 브로커 사이에는 여전히 코드가 필요합니다. Azure Functions가 트리거와 바인딩과 확장을 맡아 주니, 여러분은 판단만 작성하면 됩니다.

## Step 7 · Keep Going on Microsoft Learn

[reflective] 이 여정에 나오는 모든 수치와 제한은 Microsoft 공식 문서에서 가져왔습니다.
[500ms]
[encouraging] 이 파이프라인을 실제로 만들 준비가 되면, 아래 학습 경로가 같은 서비스를 실습 위주로 안내해 줍니다. 에피소드를 하나 골라 시작해 볼까요.
