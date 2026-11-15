# Narrator Script — Integration · Failure & Recovery: when a message fails

**Source animation:** [FailureRecovery.html](../../../journeys/Integration/FailureRecovery.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-message-loss-and-duplicates>

---

## Step 1 · The broker can’t see inside your handler

[calm] 블랙 프라이데이, 자정 2분 전입니다. 함수가 고객의 카드를 결제한 뒤, 완료했다고 알리기도 전에 죽어 버립니다.
[600ms]
[serious] 브로커에게는 침묵이 곧 실패로 보이기 때문에, 메시지를 다시 전달합니다.
[600ms]
[confident] 이것이 최소 한 번 전달입니다. 버그가 아니라 보장된 동작이니, 처리기가 중복 메시지에 대처할 수 있어야 합니다.

## Step 2 · Peek-lock: borrow the message, don’t take it

[curious] peek-lock 모드에서는 수신자가 배타적 잠금으로 메시지를 빌려 가서, 다른 소비자는 그 메시지를 볼 수 없습니다.
[600ms]
[confident] 그다음 수신자는 메시지를 네 가지 중 하나로 처리합니다. 완료, 포기, 보류, 데드레터입니다. 아니면 잠금이 그냥 만료되기도 합니다.
[600ms]
[concerned] receive-and-delete는 다릅니다. 브로커가 메시지를 보내는 순간 처리가 끝나기 때문에, 전송에 실패하면 메시지를 잃습니다. 가치가 낮은 데이터에만 쓰세요.

## Step 3 · Every failed lap adds one

[calm] 전달이 포기나 잠금 만료로 끝날 때마다 전달 횟수가 1씩 올라갑니다.
[600ms]
[serious] 전달 횟수가 최대 전달 횟수에 도달하면, Service Bus는 메시지를 데드레터 큐로 옮깁니다. 기본값은 10입니다.
[600ms]
[reassuring] 잠금 시간은 기본 1분이고 최대 5분입니다. 그러니 평소 처리 시간보다 길게 설정하거나, 잠금을 갱신하세요.

## Step 4 · Break it and watch what happens

[curious] 이제 직접 해 보세요. 실패를 켜고, 주문을 보내 보세요. 이 데모 큐는 간단히 보여 주려고 최대 전달 횟수를 5로 설정했습니다.
[600ms]
[intrigued] 메시지가 데드레터 큐에 도착할 때까지 계속 재시도되는 모습을 지켜보세요.
[600ms]
[confident] 아무것도 고치지 않고 다시 보내면 같은 일이 되풀이될 뿐입니다. 그리고 잘못된 페이로드는 재시도할 가치가 없으니, 코드에서 직접 이유를 적어 바로 데드레터 처리할 수 있습니다.

## Step 5 · Dead-letter queue: a parking lot with labels

[calm] 모든 큐와 구독에는 데드레터 하위 큐가 있습니다. 메시지는 직접 꺼낼 때까지 그곳에 남아 있고, 자동으로 정리되지 않습니다.
[600ms]
[confident] 메시지마다 읽을 수 있는 이유가 붙어 있습니다. 데드레터 하위 큐를 가리키는 수신자로 메시지를 받으면 됩니다.
[600ms]
[reassuring] 직접 이유를 지정할 때는 예외 유형을 포함하세요. 원인 분류가 훨씬 쉬워집니다.

## Step 6 · Recover without losing or duplicating

[calm] 순서가 중요합니다. 이유를 읽고, 원인을 고치고, 새 사본을 메인 큐로 보내세요.
[600ms]
[confident] 그 전송이 성공한 뒤에만 데드레터 사본을 완료 처리하세요. 그 사이에 충돌이 나더라도, 중복은 생길지언정 유실은 없습니다.
[600ms]
[serious] 다시 제출한 메시지는 완전히 새로운 메시지입니다. 그러니 처리기가 먼저 확인하고 나서 동작하게 하고, 중복이 와도 가볍게 넘기게 하세요.

## Step 7 · Two helpers: duplicate detection and sessions

[curious] 도움이 되는 기능이 두 가지 있습니다. 중복 검색은 같은 메시지 ID를 가진 메시지가 기간 안에 다시 오면 입구에서 막아 줍니다.
[600ms]
[confident] Standard 또는 Premium 계층이 필요하고, 기간은 기본 10분입니다.
[600ms]
[calm] 세션은 관련된 메시지를 순서대로, 수신자 하나에게 모아서 전달합니다. 세션을 켜면 모든 메시지에 세션 ID가 있어야 합니다.

## Step 8 · Event Grid retries on a schedule

[calm] Event Grid는 이벤트를 최소 한 번 전달하고, 응답을 30초 동안 기다립니다.
[600ms]
[confident] 응답이 없으면 백오프를 적용해 재시도하다가, 재시도 정책이 멈추라고 할 때 그만둡니다. 최대 30번 시도하거나, 유효 기간이 최대 하루입니다.
[600ms]
[concerned] 순서는 보장되지 않고, 중복도 여전히 올 수 있습니다. 그래서 여기서도 멱등성을 지키는 습관이 똑같이 필요합니다.

## Step 9 · Publish your own events

[curious] 사용자 지정 토픽은 앱이 이벤트를 게시하는 엔드포인트입니다. 토픽의 액세스 키로 인증할 수 있습니다.
[600ms]
[confident] 더 좋은 방법은 EventGrid Data Sender 역할이 있는 Microsoft Entra 아이덴티티를 쓰는 것입니다. 그러면 코드에 키가 없습니다.
[600ms]
[calm] 토픽은 CloudEvents나 Event Grid 스키마를 받습니다. 권장 형식은 CloudEvents입니다.

## Step 10 · Who retries? The service that delivers

[curious] 그럼 재시도는 누가 맡을까요? 함수가 아닙니다. Service Bus 트리거는 자체 재시도를 하지 않습니다.
[600ms]
[confident] 함수가 성공하면 런타임이 메시지를 완료 처리하고, 함수가 예외를 던지면 포기 처리합니다. 횟수는 Service Bus가 셉니다.
[600ms]
[reassuring] 마찬가지로 Event Grid 트리거의 재시도는 이벤트 구독에서 정해집니다. 함수 재시도 정책은 다른 트리거에 적용됩니다.

## Step 11 · Tune it, connect it, ship it safely

[calm] host dot json의 몇 가지 설정이 메시지를 가져오는 방식을 좌우합니다. 동시성, 자동 완료, 잠금 갱신입니다.
[600ms]
[confident] 비밀 대신 관리 ID를 쓰세요. 연결 문자열도 여전히 동작하지만, Learn 문서에서는 가능하면 관리 ID를 쓰라고 권장합니다.
[600ms]
[serious] 그리고 스테이징 슬롯을 통해 릴리스하세요. 스왑하기 전에 이벤트 소스 설정을 슬롯 설정으로 표시하세요. 스왑하면 실행 중인 함수가 끊길 수 있기 때문입니다.

## Step 12 · See failures before customers do

[curious] 실패하면 숫자가 남습니다. Service Bus에서는 데드레터 메시지, 포기된 메시지, 서버 오류를 지켜보세요.
[600ms]
[confident] Event Grid에서는 전달 실패, 데드레터 처리됨, 삭제된 이벤트를 지켜보세요.
[600ms]
[reassuring] 그다음 경고 규칙으로 사람을 호출하세요. 경고가 발생하면 이메일, 문자, 함수 같은 액션 그룹이 실행됩니다.

## Step 13 · Failure and recovery, in one view

[calm] 실패한 메시지는 전달하는 서비스가 재시도하고, 이유와 함께 보관되고, 멱등성을 갖춘 처리기가 안전하게 다시 처리합니다.
[600ms]
[confident] 이 내용은 A I 200 시험 중 비중 20%에서 25%인 영역에 해당합니다. 학습 가이드에는 데드레터 처리, Event Grid 필터, 사용자 지정 이벤트, 재시도가 명시되어 있습니다.
[600ms]
[proud] 이 순환을 기억하세요. 재시도, 보관, 수정, 다시 제출, 그리고 안전하게 반복 처리하는 것입니다.
