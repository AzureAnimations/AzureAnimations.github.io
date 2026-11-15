# Narrator Script — Containers · KEDA scaling in Container Apps — Azure Containers

**Source animation:** [KedaScaling.html](../../../journeys/Container/KedaScaling.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/scale-app>
- <https://learn.microsoft.com/azure/container-apps/jobs>
- <https://learn.microsoft.com/azure/container-apps/metrics>
- <https://learn.microsoft.com/azure/container-apps/log-monitoring>

---

## Step 1 · A burst the CPU can’t see

[calm] Contoso의 주문 처리기는 평소에는 조용하다가, 플래시 세일이 시작되면 1분 만에 큐에 메시지가 수백 개씩 쌓입니다.
[600ms]
[concerned] 복제본 하나로는 처리가 밀리는데도 CPU는 여유로워 보입니다. 작업자가 대부분의 시간을 결제 API 응답을 기다리며 보내기 때문입니다.
[600ms]
[confident] 그래서 CPU는 사각지대입니다. 정말 중요한 신호는 큐 길이이고, 이것을 기준으로 스케일해야 합니다.

## Step 2 · Three kinds of scale rule

[curious] 스케일 규칙은 Container Apps에 복제본을 언제 늘릴지 알려 줍니다. 종류는 세 가지입니다. HTTP, TCP, 그리고 사용자 지정입니다.
[600ms]
[calm] HTTP와 TCP 규칙은 실시간 트래픽을 셉니다. 사용자 지정 규칙은 큐 같은 KEDA 스케일러를 무엇이든 연결할 수 있습니다.
[600ms]
[confident] 규칙이 여러 개면, 가장 먼저 충족된 조건에서 스케일이 시작됩니다. 그리고 규칙을 하나도 정의하지 않으면, 기본 HTTP 규칙이 복제본을 0개에서 10개 사이로 조절합니다.

## Step 3 · The control loop: queue, KEDA, replicas

[calm] 동작 방식은 이렇습니다. KEDA가 이벤트 소스를 폴링해서 쌓인 작업을 처리하는 데 복제본이 몇 개 필요한지 계산하면, 플랫폼이 그에 맞춰 복제본을 추가하거나 제거합니다.
[600ms]
[curious] 사용자 지정 규칙은 기본적으로 30초마다 폴링합니다. HTTP와 TCP 규칙은 폴링하지 않습니다. 플랫폼이 그 트래픽을 직접 측정하기 때문입니다.
[600ms]
[reassuring] 코드가 스케일러와 직접 통신하는 일은 없습니다. 코드는 메시지만 처리하면 됩니다.

## Step 4 · Limits and the replica math

[curious] 복제본 하나가 처리할 메시지 수를 KEDA에 알려 주세요. KEDA는 쌓인 메시지 수를 그 숫자로 나눠서 올림합니다.
[600ms]
[calm] 그다음 최소 복제본 수와 최대 복제본 수로 결과를 제한합니다. 기본값은 0과 10입니다.
[600ms]
[serious] 복제본 수는 목표일 뿐 보장된 값이 아니라는 점을 기억하세요. 실제 스케일 아웃은 폴링을 여러 번 거치면서 단계적으로 늘어나다가 최댓값에 도달합니다.

## Step 5 · Scale to zero, and the cold start

[calm] 최소 복제본을 0으로 설정하면, 큐가 비었을 때 복제본이 0개가 되어 사용 요금도 나오지 않습니다.
[600ms]
[concerned] 대신 콜드 스타트라는 대가가 있습니다. 한동안 조용하다가 들어온 첫 메시지는 복제본이 시작될 때까지 기다려야 합니다.
[600ms]
[confident] 쿨다운 기간은 기본 300초이고, 마지막 복제본에서 0개로 줄어들 때만 적용됩니다. 0개일 때는 측정할 프로세스가 없으니, 이벤트 소스가 앱을 깨웁니다.

## Step 6 · A Service Bus scale rule, field by field

[calm] 이제 실제 규칙을 살펴보겠습니다. 사용자 지정 규칙에는 KEDA 스케일러 유형과 메타데이터를 적습니다. 여기서는 Azure Service Bus입니다.
[600ms]
[curious] 메타데이터에는 어느 네임스페이스의 어떤 큐를 감시할지, 그리고 복제본 하나가 처리할 메시지 수를 적습니다.
[600ms]
[confident] Storage 큐도 같은 방식입니다. 계정 이름과 큐 이름, 큐 길이를 적습니다. 화면에 나오는 값은 가상입니다.

## Step 7 · How the scaler signs in

[curious] KEDA가 큐 길이를 읽어야 하니, 규칙에 자격 증명이 필요합니다.
[600ms]
[calm] 규칙에서 참조하는 비밀을 넘겨줄 수도 있고, 관리 ID로 로그인하게 할 수도 있습니다. 관리 ID를 쓰면 저장하거나 교체할 것이 없습니다.
[600ms]
[serious] Service Bus 연결 문자열을 쓸 때는 공유 액세스 정책의 유형이 Manage여야 합니다. 관리 ID를 쓸 때는 그 ID에 큐를 읽을 권한이 있어야 합니다.

## Step 8 · Cron: scale by the clock

[curious] 폭주 시점을 미리 알 수 있을 때도 있습니다. 그럴 땐 크론 규칙으로 정해진 시간대 동안 복제본을 늘렸다가, 그 뒤에 해제합니다.
[600ms]
[calm] 시간대, 시작 시각, 종료 시각, 그리고 그 사이에 유지할 복제본 수를 지정합니다.
[600ms]
[serious] 시작과 종료 시각은 같으면 안 되고, 시간대 밖에서는 최소 복제본을 0으로 유지하세요. 큐 규칙도 함께 쓰면, 예상 못 한 폭주에도 대응할 수 있습니다.

## Step 9 · Try it: the live scale simulator

[excited] 이제 직접 해 보세요. 규칙을 고르고, 부하를 끌어서 조절하면서, 복제본 수가 계산대로 움직이는 모습을 지켜보세요.
[600ms]
[curious] 최대를 5로 두고 쌓인 메시지를 많이 만들어 보세요. 그다음 최소를 0으로 두고 부하를 0으로 해 보고, 이어서 최소를 1로 해 보세요.
[600ms]
[reassuring] 여기 나오는 것은 모두 가상이고, 페이지 안에서 계산한 값입니다. 앱이 어느 수준에서 안정되는지를 보여 주는 것이고, 실제 스케일 아웃은 폴링을 여러 번 거치며 단계적으로 늘어납니다.

## Step 10 · Apps scale replicas, jobs run executions

[calm] 앱은 복제본을 계속 실행해 두고, 복제본마다 소스에서 이벤트를 가져와 처리합니다.
[600ms]
[curious] 이벤트 기반 작업은 다릅니다. 이벤트 하나당 실행 하나를 시작하고, 끝까지 실행한 다음 멈춥니다.
[600ms]
[confident] 이벤트마다 컨테이너가 따로 필요하거나 오래 실행되는 경우에는 작업을 선택하세요. 작업도 같은 KEDA 스케일러를 쓰지만, 규칙이 실행을 몇 개 시작할지 정합니다.

## Step 11 · Verify it scales, and find what’s wrong

[calm] 확인하려면 테스트 메시지를 몇 개 추가하고, 복제본 수 메트릭과 시스템 로그를 지켜보세요.
[600ms]
[concerned] 아무 변화가 없다면 순서대로 점검하세요. 큐, 자격 증명, 규칙, 그리고 제한값입니다.
[600ms]
[serious] 함정이 하나 더 있습니다. 인그레스가 꺼져 있고 최소 복제본도 없고 규칙도 없으면, 앱이 0개로 줄어든 뒤 다시 시작할 방법이 없습니다. 그리고 스케일 규칙을 수정하면 새 리비전이 만들어집니다.

## Step 12 · Burst out, then back to zero

[calm] 정리해 봅시다. 규칙과 복제본당 임계값, 최소와 최대 한도, 그리고 자격 증명이 필요합니다.
[600ms]
[proud] 폴링은 KEDA가 하고, 스케일링은 플랫폼이 합니다. Contoso는 플래시 세일 때 크게 늘어났다가, 다시 0으로 돌아옵니다.
[600ms]
[reassuring] 이것은 A I 200에서 측정하는 기술입니다. 시뮬레이터로 연습한 다음, 공식 학습 가이드를 열어 보세요.
