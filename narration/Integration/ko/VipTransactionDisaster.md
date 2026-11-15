# 내레이터 스크립트 — 에피소드 2 · VIP 트랜잭션 참사

**Source animation:** `journeys/Integration/VipTransactionDisaster.html`

**Script status:** Authored voiceover.

---

## Step 1 · The cancellation beat the order

[calm] 취소는 주문보다 늦게 도착하지만 먼저 처리됩니다. 아직 취소할 주문이 없습니다. 그 뒤 주문이 확정됩니다. 이것은 순서 경쟁이지 이중 청구의 증거는 아닙니다. 관련 메시지는 세션으로 묶고 재전달도 안전하게 처리하세요.

## Step 2 · What a simple queue does not give you

[calm] Queue Storage는 독립적인 작업을 버퍼링하는 데 탁월합니다. 하지만 돈은 독립적인 작업이 아닙니다.
[500ms]
[confident] 돈에는 순서와, 연장할 수 있는 잠금과, 망가진 메시지를 안전하게 둘 곳이 필요합니다. Service Bus는 세션 안의 선입선출, 최대 256킬로바이트 메시지, 기본 제공 배달 못 한 메시지 큐, 중복 검색, 트랜잭션, 그리고 구독 2천 개를 갖는 토픽을 제공합니다.
[600ms]
[reflective] 메시지 한 건이 그것을 처리하는 컴퓨팅보다 값질 때는 Service Bus로 바꾸세요. 더 내는 값은 처리량이 아니라 신뢰성입니다.

## Step 3 · Sessions put the VIP back in order

[optimistic] 해결책은 속성 하나입니다. 모든 메시지에 세션 ID, 여기서는 고객 ID를 찍으세요.
[500ms]
[confident] 그러면 Service Bus가 그 세션 전체를 도착한 순서 그대로 단 하나의 수신자에게 넘깁니다. 주문 8801이 먼저 처리되고 취소가 그다음이며, 다른 고객의 세션은 또 다른 수신자에서 여전히 병렬로 돌아갑니다.
[600ms]
[calm] 세션은 메시지가 아니라 대화에 대한 잠금입니다. 한 수신자가 놓아줄 때까지 그 고객을 소유합니다.

## Step 4 · Peek-lock, and a cell for bad messages

[calm] Peek-lock은 삭제하지 않고 수신하는 방식입니다. Complete는 성공적으로 처리한 메시지를 삭제합니다. Abandon은 잠금을 즉시 해제하지만, 충돌 후 재전달은 잠금 만료까지 기다릴 수 있습니다. 반복 실패한 메시지는 배달 못 한 메시지 큐로 이동할 수 있습니다. 확인하고 수정해 다시 보내야 하며, 복구는 자동이 아닙니다.

## Step 5 · One order, three teams, zero coupling

[curious] 청구, 배송, 로열티가 모두 같은 주문을 필요로 합니다. 그러면 한 번만 게시하세요.
[500ms]
[confident] 토픽이 그 한 건을 독립적인 구독들로 퍼뜨립니다. 각 구독은 자체 필터, 자체 백로그, 자체 배달 못 한 메시지 큐를 갖습니다. 청구는 전부 받고, 배송은 물리 상품으로 거르고, 로열티는 100이 넘는 주문으로 거릅니다.
[600ms]
[optimistic] 구독은 독립적인 큐이므로, 로열티가 한 시간 멈춰도 메시지는 그저 기다립니다. 청구는 눈치채지도 못하고, 게시자를 바꿀 필요도 없습니다.

## Step 6 · Episode 2: Service Bus is the safe lane

[calm] 조정이 필요한 업무 메시지에는 Service Bus를 선택하세요. 세션은 세션 내 순서를 유지하고 peek-lock은 수신과 완료를 분리합니다. 배달 못 한 큐는 실패를 격리하고 토픽은 구독자에게 독립적인 복사본을 줍니다. 그래도 멱등 처리기는 필요합니다. 재시도로 고객에게 다시 청구하면 안 됩니다.

