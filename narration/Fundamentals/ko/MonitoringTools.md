# 내레이션 대본 - 모니터링 도구

**Source animation:** journeys/Fundamentals/MonitoringTools.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview ; https://learn.microsoft.com/azure/app-service/monitor-app-service#insights ; https://learn.microsoft.com/azure/advisor/advisor-overview ; https://learn.microsoft.com/azure/service-health/overview -->

## Step 1 · Was it broken, or was it us?

[calm] 고객이 결제에서 너무 오래 기다립니다. 매장은 배포했지만, 증상만으로는 코드와 종속 서비스, 기반 서비스 중 무엇이 지연을 일으키는지 알 수 없습니다.
[600ms]
[confident] 바꾸기 전에 근거가 필요합니다. 모니터링은 막연한 보고를 조사할 수 있는 질문으로 바꿉니다.

## Step 2 · Collect the evidence

[calm] 메트릭은 결제 시간처럼 시간에 따라 측정한 수치입니다. 로그는 타임스탬프가 있는 이벤트 기록으로, 무슨 일이 있었는지 세부 정보를 더합니다.
[600ms]
[confident] Azure Monitor는 이런 신호를 모으도록 돕습니다. Contoso는 추세로 느린 시간대를 찾고, 기록으로 그동안의 상황을 이해합니다.

## Step 3 · Look inside the checkout request

[calm] Contoso는 출시 전에 앱이 Azure Monitor의 일부인 Application Insights로 원격 분석을 보내도록 설정했습니다. 덕분에 지금 결제 요청과 그 요청이 의존하는 재고 호출을 연결할 수 있습니다.
[600ms]
[confident] 이것은 앱에서 수집한 근거입니다. 리소스를 만들기만 해서 얻는 것이 아니라, 필요한 계측을 미리 준비해야 합니다.

## Step 4 · Store it where you can query it

[calm] Log Analytics 작업 영역은 수집한 로그를 저장해 나중에 쿼리할 수 있게 합니다. Maya는 증상 하나로 추측하는 대신, 해당 시간대의 기록을 살펴봅니다.
[600ms]
[confident] 찾을 수 있는 내용은 무엇을 수집하고 보존했는지에 달려 있습니다. 유용한 근거를 저장하는 것도 매장 운영 준비의 일부입니다.

## Step 5 · Follow the evidence

[calm] Maya는 느린 결제를 재고 종속 서비스까지 따라갑니다. 이 예에서는 호출에 이 점 팔 초가 걸려, 구체적인 조사 대상을 찾았습니다.
[600ms]
[confident] 이 숫자는 예시이지 Azure의 성능 제한이 아닙니다. 관련 로그를 비교한 뒤 코드, 용량, 다른 종속 서비스 중 어디를 살필지 결정합니다.

## Step 6 · Decide what is worth a phone call

[calm] Contoso는 결제 지연이 지속될 때의 경고를 만들고 작업 그룹을 연결합니다. 경고는 조건을 평가하고, 작업 그룹은 설정한 알림이나 대응을 정의합니다.
[600ms]
[confident] 지원팀이 신호를 받고 조사합니다. 경고는 주의가 필요하다고 알리지만, 원인을 확정하거나 해결을 보장하지는 않습니다.

## Step 7 · Improve before the next promotion

[calm] Azure Advisor는 배포된 리소스를 검토하고 안정성, 보안, 성능, 비용 같은 영역에서 개선 사항을 권장합니다. Contoso는 매장에 적합한 권장 사항을 평가합니다.
[600ms]
[confident] 지속적인 개선을 지원하지만, 이번 느린 결제의 진단 결과는 아닙니다. Advisor가 개별 문제의 조사를 대신해서는 안 됩니다.

## Step 8 · Is Azure reporting an issue?

[calm] Service Health는 Contoso 구독과 관련된 Azure 이벤트를 보고합니다. Resource Health는 개별 리소스에 초점을 맞춰, 영향을 받을 수 있는 대상을 다른 관점에서 보여 줍니다.
[600ms]
[confident] Maya는 이 신호를 앱의 근거와 비교합니다. 플랫폼 상태만으로 고객의 모든 이용 과정이 정상이라고 증명할 수는 없습니다.

## Step 9 · Monitoring - All in One

[calm] Contoso는 가장 바쁜 행사에 맞춰 구매한 서버로 시작했습니다. 이제 서비스를 선택하고, 리소스를 정리하고 연결하며, 접근을 보호하고, 낭비를 줄이고, 일관되게 배포하고, 고객 문제를 조사할 수 있습니다.
[600ms]
[confident] 클라우드 운영은 근거 수집, 조사, 대응, 개선의 반복입니다. 다음 행사는 장비를 더 늘리는 것만이 아니라, 매장을 더 잘 이해한 상태에서 시작합니다.