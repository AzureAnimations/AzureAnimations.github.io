# Narrator Script — Architect · Design logging and monitoring

**Source animation:** [DesignMonitoring.html](../../../journeys/Architect/DesignMonitoring.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview>
- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/data-sources>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-platform-logs>
- <https://learn.microsoft.com/azure/azure-monitor/logs/workspace-design>
- <https://learn.microsoft.com/azure/azure-monitor/platform/diagnostic-settings>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/sentinel/overview>

---

## Step 1 · An outage, and logs in five places

[calm] Contoso의 주문이 밤사이 실패하기 시작했고, 단서가 여러 종류의 텔레메트리에 흩어져 있습니다.
[600ms]
[curious] 플랫폼, 리소스, 아이덴티티, 게스트 운영 체제 및 애플리케이션 신호가 모두 동일한 수집 경로를 통해 도착하지 않습니다.
[600ms]
[reassuring] 대시보드를 선택하기 전에 각 소스가 무엇을 생산하는지, 그리고 그 데이터가 모니터링 설계에 어떻게 전달될지 파악하세요.

## Step 2 · Azure Monitor: metrics and logs

[calm] Azure Monitor는 수치 지표와 상세 로그 레코드를 모두 사용하여 두 개의 상호 보완적인 경로로 표시됩니다.
[600ms]
[curious] 지표는 Contoso가 변화를 빠르게 인지하는 데 도움을 주며; 로그는 이를 조사하는 데 필요한 맥락을 제공합니다.
[600ms]
[reassuring] 두 가지를 함께 사용하세요: 적절한 경고로 증상을 감지한 후, 기록을 따라 무슨 일이 있었는지 이해하세요.

## Step 3 · Log Analytics: one workspace or many?

[calm] Log Analytics 워크스페이스는 Contoso가 수집된 로그를 조회할 수 있는 공간을 제공합니다.
[600ms]
[curious] 요구사항이 허용하는 한 가능한 한 적은 워크스페이스부터 시작한 후, 분리 이유를 살펴보세요.
[600ms]
[reassuring] 데이터 상주 위치, 소유권 같은 경계 때문에 워크스페이스를 나누는 것이 타당할 수 있지만, 소스마다 워크스페이스를 만들면 관리와 쿼리 부담이 커집니다.

## Step 4 · Table plans: pay for the query you need

[calm] 각 테이블에는 계획이 있으며, 적절한 계획은 Contoso가 데이터를 어떻게 활용하려는지에 따라 달라집니다.
[600ms]
[curious] 정기 모니터링을 위한 Analytics, 문제 해결을 위한 Basic, 덜 자주 조회되는 장문의 기록을 위한 Auxiliary를 비교하세요.
[600ms]
[reassuring] 수집 요구 사항과 쿼리 요구 사항을 함께 살펴보고, 수집 가격이 낮아 보인다는 이유만으로 플랜을 선택하지 마세요.

## Step 5 · Route logs with diagnostic settings

[calm] 진단 설정은 자원의 로그와 지표를 여기 표시된 목적지로 라우팅합니다.
[600ms]
[curious] 워크스페이스는 조사를 지원하고, 스토리지는 보존을 지원하며, Event Hubs는 스트리밍 통합을 지원합니다.
[600ms]
[reassuring] 각 복사본이 수행해야 할 작업에 따라 목적지를 선택하고, 리소스 로그의 수집과 라우팅이 반드시 필요하다는 점을 기억하세요.

## Step 6 · Application Insights and VM insights

[calm] 스토어프론트 애플리케이션과 배치 가상 머신은 서로 다른 종류의 계측이 필요합니다.
[600ms]
[curious] Application Insights는 애플리케이션 동작을 추적하는 반면, VM Insights는 서버를 이해하는 데 필요한 기계 수준 신호를 수집합니다.
[600ms]
[reassuring] 이들의 데이터가 동일한 워크스페이스에서 만나 애플리케이션 증상을 해당 인프라와 연결할 수 있습니다.

## Step 7 · Alerts and action groups

[calm] 경보 규칙은 신호가 행동할 만큼 중요할 때를 결정합니다.
[600ms]
[curious] 액션 그룹은 다음 단계를 담당합니다: 사람들에게 알림을 보내거나 자동 응답을 호출하는 것입니다.
[600ms]
[reassuring] 이 책임들을 분리하여 Contoso가 응답 경로를 재사용할 수 있도록 하여 각 신호에 맞는 적절한 규칙을 선택할 수 있도록 하세요.

## Step 8 · Microsoft Sentinel: the SIEM on your workspace

[calm] Microsoft Sentinel은 워크스페이스 데이터 주변에 보안 탐지 및 대응 기능을 추가합니다.
[600ms]
[curious] 신호 수집부터 위협 감지, 사건 조사, 대응 수행까지 순서를 따라가세요.
[600ms]
[reassuring] 이것은 단순한 로그 검색 화면 그 이상입니다: 설계는 보안팀의 탐지 및 사고 처리 워크플로우를 지원해야 합니다.

## Step 9 · All in one: from signal to action

[calm] 이제 모니터링 설계는 증거를 따로따로 두지 않고 신호를 조치와 연결합니다.
[600ms]
[curious] Contoso는 무엇을 수집하고, 어떻게 라우팅하며, 어디에 보관하고, 무엇이 대응할지를 정했습니다.
[600ms]
[reassuring] 이 네 가지 결정으로 문제 해결이 가능해집니다. 다음으로, 사고가 장애로 이어졌을 때 비즈니스가 어떻게 복구할지 결정하세요.

