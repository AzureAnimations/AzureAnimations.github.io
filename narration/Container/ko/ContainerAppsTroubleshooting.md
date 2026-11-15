# Narrator Script — Containers · Troubleshoot Container Apps: app not responding

**Source animation:** [ContainerAppsTroubleshooting.html](../../../journeys/Container/ContainerAppsTroubleshooting.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/troubleshooting>
- <https://learn.microsoft.com/azure/container-apps/revisions>
- <https://learn.microsoft.com/azure/container-apps/log-streaming>
- <https://learn.microsoft.com/azure/container-apps/ingress-overview>

---

## Step 1 · The app is up but the URL fails: where to look first

[calm] Contoso의 orders-api는 포털에서 Running으로 표시되는데도, URL로 접속하면 응답이 없습니다.
[600ms]
[concerned] 당직인 Mina에게는 상태가 초록색이어도 소용이 없습니다. 고객은 아무것도 볼 수 없으니까요.
[600ms]
[determined] Mina에게 필요한 건 확인할 곳을 알맞은 순서로 정리한 짧은 목록입니다. 그 목록을 같이 만들어 봅시다.

## Step 2 · The troubleshooting loop for Container Apps

[confident] 단계는 다섯 개이고, 순서는 항상 같습니다. 리비전 상태를 읽고, 로그를 읽고, 인그레스를 확인하고, 복제본과 프로브를 확인합니다.
[600ms]
[calm] 다섯 번째 단계는 한 가지를 고치고 다시 확인하는 것입니다. 여기 나오는 Azure CLI 명령은 모두 az containerapp로 시작합니다.
[600ms]
[reassuring] 포털에도 리비전 관리부터 문제 진단 및 해결까지 같은 확인 지점이 있으니, 편한 쪽으로 하세요.

## Step 3 · Revision status and provisioning state

[curious] 배포할 때마다 리비전이 만들어지고, 그 리비전이 이야기의 앞부분을 알려 줍니다.
[600ms]
[calm] 프로비저닝 상태는 시작 및 준비 상태 검사를 통과했는지를 알려 주고, 실행 상태는 복제본이 Running, Degraded, Failed 중 어떤 상태인지 알려 줍니다.
[600ms]
[confident] 상태가 이상해 보이면 실행 상태 세부 정보를 여세요. 정확한 이유가 나옵니다.

## Step 4 · Console logs versus system logs

[calm] 로그는 두 종류입니다. 콘솔 로그는 앱이 표준 출력과 표준 오류로 내보낸 내용입니다.
[600ms]
[curious] 시스템 로그는 Container Apps 서비스가 앱에 대해 남긴 기록입니다. 시스템 로그는 무슨 일이 있었는지를, 콘솔 로그는 왜 그랬는지를 알려 줍니다.
[600ms]
[reassuring] 포털에서 로그 스트림을 열고 콘솔이나 시스템을 선택하세요. 리비전이 0으로 스케일되었다고 나오면, 복제본이 하나 이상 있는 리비전을 배포하세요.

## Step 5 · Query ContainerAppConsoleLogs and ContainerAppSystemLogs with KQL

[calm] Log Analytics를 쓰면 로그가 테이블 두 개에 나뉘어 쌓입니다. 하나는 시스템 로그, 다른 하나는 콘솔 로그입니다.
[600ms]
[confident] 앱 이름과 리비전 이름으로 필터링하고, Log 열을 읽으세요. 콘솔 로그에는 각 줄을 어느 복제본과 어느 이미지가 썼는지도 나옵니다.
[600ms]
[encouraging] 같은 쿼리를 명령줄에서도 실행할 수 있으니, 당직 점검 절차에 스크립트로 넣어 둘 수 있습니다.

## Step 6 · Ingress: external, internal, target port, IP restrictions

[calm] 인그레스는 앱 앞에 놓인 규칙 모음이라서 순서대로 확인해야 합니다. 먼저, 인그레스가 켜져 있나요?
[600ms]
[curious] 그다음은 누가 접근할 수 있느냐입니다. External은 어디서든 접근할 수 있다는 뜻이고, Internal은 Container Apps 환경 안에서만 접근할 수 있다는 뜻입니다. 그리고 대상 포트가 앱이 수신 대기하는 포트와 같은지 확인하세요.
[600ms]
[serious] 마지막으로 IP 제한이 클라이언트를 막고 있지는 않은지 보세요. 이 중 하나만 틀어져도, 멀쩡한 앱이 응답하지 않을 수 있습니다.

## Step 7 · Replicas, probes and restarts

[curious] 상태 프로브를 쓰면 Container Apps가 복제본을 하나씩 점검합니다. 프로브를 통과하지 못한 복제본은 비정상으로 간주되어 재시작될 수 있습니다.
[600ms]
[concerned] 프로브 포트가 틀렸거나 시작이 느리면, 멀쩡한 앱이 고장 난 것처럼 보일 수 있습니다. 시작하는 데 오래 걸리는 Java 앱은 초기 지연을 더 길게 잡아야 하는 경우가 많습니다.
[600ms]
[confident] 인그레스를 켜면 기본 프로브는 인그레스 대상 포트를 사용합니다. 그리고 컨테이너마다 프로브는 유형별로 하나씩만 추가할 수 있다는 점도 기억하세요.

## Step 8 · Scaling that never starts (min replicas, scale rule credentials)

[concerned] 메시지는 큐에 쌓이는데 복제본이 생기지 않습니다. 이건 코드 문제가 아니라 스케일링 문제입니다.
[600ms]
[calm] 최소 복제본 수가 0인데 앱을 깨우는 것이 없거나, 스케일 규칙이 이벤트 원본을 읽지 못하는 경우입니다.
[600ms]
[reassuring] 스케일 규칙은 비밀이나 관리 ID로 로그인합니다. 비밀을 바꿨다면 새 값을 가져오도록 리비전을 재시작하세요.

## Step 9 · Triage simulator: pick a symptom

[excited] 이제 직접 해 볼 차례입니다. 증상을 하나 고르면, 시뮬레이터가 실제로 보게 될 증거를 보여 줍니다.
[600ms]
[curious] 증상마다 가장 먼저 시도할 해결 방법이 나와서, 루프가 처음부터 끝까지 어떻게 돌아가는지 볼 수 있습니다.
[600ms]
[reflective] 이름과 출력은 가상입니다. 실제 출력은 세부 내용이 다르지만, 중요한 건 패턴입니다.

## Step 10 · Troubleshooting playbook

[confident] 이제 따라갈 루프가 하나 생겼고, 증상마다 가장 먼저 의심할 곳을 알려 주는 지도와, Azure가 증거를 보관하는 위치도 알게 됐습니다.
[600ms]
[calm] A I 200 기술에는 AKS와 Container Apps에서 솔루션을 모니터링하고 문제를 해결하는 것이 들어 있습니다. 이 수업은 그중 Container Apps 부분입니다.
[600ms]
[proud] 다음에 앱 상태는 초록색인데 URL이 응답하지 않는다면, 어디부터 봐야 하는지 정확히 알게 될 것입니다.
