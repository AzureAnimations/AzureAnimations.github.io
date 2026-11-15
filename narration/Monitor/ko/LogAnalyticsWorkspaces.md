# Narrator Script — Monitor · Log Analytics workspaces

**Source animation:** [LogAnalyticsWorkspaces.html](../../../journeys/Monitor/LogAnalyticsWorkspaces.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-retention-configure>
- <https://learn.microsoft.com/azure/azure-monitor/logs/manage-access>
- <https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap>

---

## Step 1 · Where do my logs live?

[curious] Contoso에는 가상 머신, 웹 앱, Key Vault가 있습니다. 셋 다 로그를 씁니다.
[600ms]
[calm] 이 로그를 쓰려면 먼저 세 가지 질문에 답해야 합니다. 로그는 어디에 있고, 누가 읽을 수 있고, 비용은 얼마나 들까요?
[600ms]
[confident] 이번 수업에서는 세 가지에 모두 답합니다. 먼저 로그가 있는 곳부터 보겠습니다.

## Step 2 · Two stores: metrics and logs

[calm] Azure Monitor는 숫자를 메트릭 저장소에 보관합니다. 메트릭은 일정한 간격으로 샘플링한 값입니다.
[600ms]
[confident] 이벤트 레코드는 로그로 갑니다. 로그는 타임스탬프가 붙은 레코드로, Log Analytics 워크스페이스에 보관되고 KQL로 쿼리합니다.
[600ms]
[reassuring] Application Insights 같은 인사이트는 일반적인 시나리오에서 이 차이를 가려 줍니다.

## Step 3 · A workspace is a box of tables

[calm] Log Analytics 워크스페이스가 데이터 저장소입니다. 로그 종류마다 이름이 있는 열을 가진 별도의 테이블에 들어갑니다.
[600ms]
[curious] Azure 데이터에 필요한 테이블은 Azure Monitor가 만들고, 내 데이터를 위한 사용자 지정 테이블은 직접 만듭니다.
[600ms]
[confident] 테이블 이름은 대소문자를 구분합니다. 워크스페이스 자체에는 직접적인 비용이 없습니다. 수집하고 보관하는 데이터에 대해서만 비용을 내기 때문입니다.

## Step 4 · Three on-ramps feed the workspace

[calm] 데이터가 워크스페이스에 도착하는 진입로는 세 가지입니다. Azure 리소스는 진단 설정을 씁니다.
[600ms]
[curious] 머신은 에이전트를 쓰고, 앱은 Application Insights나 API를 씁니다.
[600ms]
[confident] 데이터 수집 규칙은 데이터가 들어오는 도중에 걸러 내거나 변환할 수 있습니다. 진입로마다 별도의 수업이 있습니다.

## Step 5 · Each table gets a plan

[calm] 테이블마다 요금제가 있습니다. Analytics, Basic, Auxiliary는 쿼리 기능과 수집 비용을 맞바꿉니다.
[600ms]
[confident] 요금제는 테이블마다 고를 수 있어서, 잡음이 많은 로그는 핵심 데이터보다 저렴한 요금제에 둘 수 있습니다.
[600ms]
[serious] Basic과 Auxiliary는 이를 지원하는 테이블에서만 동작하니, 먼저 테이블 참조 문서를 확인하세요.

## Step 6 · How long do logs stay?

[calm] 최근 데이터는 대화형 보존 기간에 머물고, 쿼리가 빠릅니다.
[600ms]
[curious] 오래된 데이터는 전체 보존 기간이 끝날 때까지 저렴한 장기 보존에서 대기합니다.
[600ms]
[reassuring] 보존 기간은 워크스페이스 기본값을 두고 테이블마다 설정합니다. 기간을 줄이면 데이터가 삭제되기까지 대기 시간이 있어서, 실수를 되돌릴 수 있습니다.

## Step 7 · Two doors into the same data

[calm] 같은 데이터로 들어가는 문이 두 개 있습니다. 워크스페이스에서는 읽을 수 있는 모든 테이블이 보입니다.
[600ms]
[curious] 리소스 하나에서는 그 리소스의 레코드만 보입니다.
[600ms]
[confident] 워크스페이스 컨텍스트는 중앙 팀에 맞고, 리소스 컨텍스트는 리소스를 소유하면서 그것에만 접근하면 되는 팀에 맞습니다.

## Step 8 · Narrow it down: mode and tables

[calm] 액세스 제어 모드가 리소스 소유자가 자기 로그를 읽을 수 있는지 정합니다.
[600ms]
[confident] 그 경우에도, Azure 역할 기반 액세스 제어를 사용한 테이블 수준 액세스로 특정 테이블은 잠글 수 있습니다.
[600ms]
[reassuring] Log Analytics Reader와 Log Analytics Contributor 같은 기본 제공 역할이 일반적인 요구를 충족합니다.

## Step 9 · One workspace or several?

[calm] 워크스페이스 하나로 시작하고, 요구 사항을 충족하는 범위에서 가장 적게 쓰세요.
[600ms]
[curious] 가장 중요한 기준을 고르면 장단점이 보입니다. 이름을 댈 수 있는 요구 사항이 있을 때만 나누세요.
[600ms]
[serious] 기준끼리 충돌할 수 있으니, 워크스페이스를 하나 더 추가하기 전에 하나하나 따져 보세요.

## Step 10 · Ingestion drives the bill

[calm] 비용은 수집하는 데이터와 그것을 보관하는 기간에 대해 냅니다.
[600ms]
[concerned] 비용은 모니터링하는 리소스가 몇 개인지, 리소스마다 얼마나 많은 데이터를 수집하는지에 따라 달라집니다.
[600ms]
[confident] 데이터 수집 규칙의 변환은 요금이 청구되기 전에 잡음을 걸러 내므로, 버리는 레코드에는 비용을 내지 않습니다.

## Step 11 · Guardrails for the spend

[calm] 비용 절감 수단은 순서대로 쓰세요. 먼저 잡음을 걸러 내고, 그다음 테이블 요금제를 고르세요.
[600ms]
[confident] 그다음에는 약정 계층으로 할인을 받으세요. 약정 계층은 Analytics 로그 수집에 적용됩니다.
[600ms]
[serious] 일일 한도는 마지막 안전장치로만 두세요. 한도에 닿으면 수집이 멈추고, 재설정될 때까지 모니터링이 깜깜해집니다.

## Step 12 · All in one

[calm] 로그는 테이블에 있고, 테이블은 Log Analytics 워크스페이스 안에 있습니다.
[600ms]
[confident] 액세스, 보존 기간, 비용은 워크스페이스별 또는 테이블별로 설정합니다.
[600ms]
[proud] 이 내용을 이해했다면, Contoso의 세 가지 질문에 자신 있게 답할 수 있습니다.
