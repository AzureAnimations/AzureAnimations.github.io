# Narrator Script — Monitor · Alerts and Action Groups

**Source animation:** [AlertsAndActionGroups.html](../../../journeys/Monitor/AlertsAndActionGroups.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-overview>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-processing-rules>

---

## Step 1 · Something broke at 3 a.m.

[serious] Contoso Retail의 결제 시스템이 밤새 중단됐습니다. 당직 엔지니어 Mina는 자고 있었고, 아무도 그녀에게 알려 주지 않았습니다.
[600ms]
[curious] 그렇다면 누구에게, 어떤 방법으로, 얼마나 자주 알려야 할까요?
[600ms]
[confident] 경고는 Azure Monitor가 데이터를 보니 뭔가 잘못됐다고 사람이나 스크립트에 알려 주는 것입니다. 고객보다 먼저 Azure에서 알게 됩니다.

## Step 2 · What can Azure Monitor watch?

[calm] 경고는 신호에서 시작하고, 신호 종류마다 경고 유형이 따로 있습니다.
[600ms]
[confident] 메트릭 경고는 일정한 간격으로 수치를 평가합니다. 로그 검색 경고는 KQL 쿼리를 실행합니다. 활동 로그 경고는 플랫폼의 이벤트와 일치하는지 봅니다.
[600ms]
[reassuring] Prometheus 경고는 PromQL을 실행합니다. 알맞은 유형을 고르는 것이 일의 절반입니다.

## Step 3 · Anatomy of an alert rule

[calm] 경고 규칙은 일부 리소스의 신호를 지켜봅니다. 조건이 충족되면 경고가 발생합니다.
[600ms]
[confident] 발생한 경고는 선택한 액션 그룹을 호출합니다.
[600ms]
[curious] 규칙이 리소스 여러 개를 지켜보면, 리소스마다 따로 평가되어 각자 경고를 발생시킵니다. 발생한 경고는 읽기 전용이고 30일 동안 보관됩니다.

## Step 4 · A threshold: fixed or learned

[calm] 정적 임계값은 직접 정하는 숫자입니다. 정확한 한계를 알 때 고르세요.
[600ms]
[intrigued] 동적 임계값은 메트릭의 기록에서 평소 패턴을 학습합니다. 그래서 새벽 3시의 정기 배치 작업이 더 이상 누구도 호출하지 않습니다.
[600ms]
[confident] 상한 위로 올라가거나 하한 아래로 내려갈 때 경고하도록 할 수 있습니다. 화면의 숫자는 가상입니다.

## Step 5 · Action group: who gets told, what runs

[curious] 액션 그룹은 알림과 자동화 작업을 저장해 둔 목록입니다. 경고 규칙은 그것을 가리키기만 합니다.
[600ms]
[confident] 이메일 수신자는 일회용 암호로 한 번 확인합니다. 그러니 믿고 쓰기 전에 포털에서 그룹을 테스트해 보세요.
[600ms]
[reassuring] 보안 웹훅은 Microsoft Entra ID를 사용합니다. 그리고 SMS와 음성은 모든 국가나 지역에서 쓸 수 있는 것은 아닙니다.

## Step 6 · One action group, many rules

[calm] 서로 다른 규칙이 같은 액션 그룹을 가리킬 수 있습니다.
[600ms]
[confident] 같은 엔지니어 세 명에게 알리는 규칙이 둘이라면 그룹 하나를 같이 씁니다. 당직 명단을 한 번만 바꾸면 모든 규칙에 반영됩니다.
[600ms]
[reassuring] 액션 그룹은 경고 규칙뿐 아니라 Azure Service Health와 Azure Advisor에서도 쓰입니다.

## Step 7 · One alert shape for every type

[curious] 메트릭, 로그, 활동 로그 경고는 예전에는 페이로드가 제각각이었습니다.
[600ms]
[confident] 공통 경고 스키마를 쓰면 이메일과 자동화가 하나의 구조만 읽으면 됩니다. 액션 그룹에서 수신자별로 켜세요.
[600ms]
[calm] essentials 섹션을 이용하면 리소스 그룹이나 심각도에 따라 경고를 라우팅할 수 있습니다. VM insights의 경고는 지원하지 않습니다.

## Step 8 · The life of an alert

[calm] 문제가 계속되는 동안, 상태 비저장 경고는 조건이 충족될 때마다 계속 발생합니다.
[600ms]
[confident] 상태 저장 경고는 한 번만 발생하고 더 이상 알리지 않다가, 조건이 해소되면 해결됨 알림을 보냅니다.
[600ms]
[serious] 활동 로그 경고는 항상 상태 비저장입니다. 별개로, 내 대응 상태는 직접 표시하는 것이며 저절로 바뀌지 않습니다.

## Step 9 · Alert processing rules

[curious] 처리 규칙은 경고가 발생할 때 경고를 바꿉니다. 유지 관리 중에는 알림을 음소거하거나, 여러 경고에 액션 그룹을 한꺼번에 추가할 수 있습니다.
[600ms]
[confident] 예전에는 액션 규칙이라고 불렀습니다. 범위는 규칙과 같은 구독 안에 있어야 합니다.
[600ms]
[concerned] 새로 만들거나 바꾼 규칙은 작동하기까지 최대 30분이 걸릴 수 있으니, 이를 감안해서 계획하세요.

## Step 10 · Build an alert: pick a symptom

[excited] 이제 직접 만들어 볼 시간입니다. 무엇이 잘못되었는지 고르세요.
[600ms]
[confident] Contoso라면 어떤 신호, 조건, 액션 그룹을 쓸지 보여 줍니다.
[600ms]
[calm] 심각도와 그룹 이름은 예시일 뿐 규칙이 아닙니다. 예산도 액션 그룹을 호출할 수 있지만, 알리기만 할 뿐 지출을 막지는 않습니다.

## Step 11 · Page fewer people, page them better

[serious] 경고 피로란 진짜 경고가 무시되는 상태를 말합니다. 각 조정 방법은 Mina의 휴대폰에 닿기 전에 소음을 걸러 냅니다.
[600ms]
[confident] 심각도 0부터 4까지는 직접 정의합니다. 음성과 SMS는 가장 높은 단계에만 쓰고, 나머지는 이메일이나 대시보드로 보내세요.
[600ms]
[reassuring] 비용은 무엇을 지켜보느냐에 따라 달라지니, 최신 가격은 Azure Monitor 가격 페이지에서 확인하세요.

## Step 12 · Alerts and action groups: all in one

[calm] 신호가 규칙으로 들어가고, 처리 규칙이 경고를 다듬고, 액션 그룹이 그것을 전달합니다.
[600ms]
[confident] 시험 대비로 보면, A Z 104는 경고 규칙, 액션 그룹, 처리 규칙을 다루고, A Z 305는 모니터링 솔루션 설계를, A I 200은 로그 검색 경고 뒤의 KQL을 다룹니다.
[600ms]
[proud] 소음을 줄이면, Mina는 중요한 일이 아니고서는 푹 잘 수 있습니다.
