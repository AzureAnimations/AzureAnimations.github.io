# Narrator Script — Database · Azure Data Explorer: Fast Analytics on Logs and Telemetry

**Source animation:** [AzureDataExplorer.html](../../../journeys/Database/AzureDataExplorer.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/data-explorer/data-explorer-overview>
- <https://learn.microsoft.com/azure/data-explorer/how-it-works>
- <https://learn.microsoft.com/azure/data-explorer/ingest-data-overview>
- <https://learn.microsoft.com/kusto/management/cache-policy>

---

## Step 1 · Billions of rows, one question

[calm] Contoso Fleet의 트럭, 게이트웨이, 앱은 텔레메트리와 로그를 쉬지 않고 기록합니다. 행은 매일 하루 종일 쌓입니다.
[600ms]
[curious] 그러다 누군가 간단한 질문을 던지면 시간과의 싸움이 시작됩니다. 그 많은 데이터에서 얼마나 빨리 답을 찾을 수 있을까요?
[600ms]
[confident] Contoso Fleet은 가상의 회사입니다. 이번 수업에서 설명하는 Azure Data Explorer는 실제 서비스입니다.

## Step 2 · What Azure Data Explorer is for

[calm] Azure Data Explorer는 완전 관리형 분석 서비스입니다. 빠르게 들어오는 대용량 데이터를 위해 만들어졌습니다.
[600ms]
[confident] 이런 데이터는 대개 추가만 되고, 거의 실시간으로 대화하듯 탐색하고 싶은 데이터입니다.
[600ms]
[reassuring] Microsoft Learn은 로그 분석, 시계열 분석, IoT, 일반 탐색 분석을 가장 잘 맞는 활용 분야로 꼽습니다.

## Step 3 · Cluster, database, table, extent

[curious] 데이터가 어떻게 구성되는지 살펴볼까요? 클러스터에는 데이터베이스가 있고, 데이터베이스에는 형식이 지정된 열을 가진 테이블이 들어 있습니다.
[600ms]
[confident] 각 테이블은 익스텐트 단위로 저장되는데, 익스텐트는 압축과 인덱싱이 된 행 조각입니다. 데이터는 수집 시간 기준으로 분할됩니다.
[600ms]
[calm] 익스텐트는 작게 시작하고, 서비스가 백그라운드에서 이를 더 큰 익스텐트로 병합합니다.

## Step 4 · Compute and storage are separate

[curious] 내부에서는 역할이 나뉘어 있습니다. 엔진 노드가 쿼리를 처리하고, 자주 쓰는 핫 데이터를 캐시합니다.
[600ms]
[calm] 데이터 관리 노드는 수집을 담당합니다. 모든 익스텐트는 Azure Blob Storage에 저장됩니다.
[600ms]
[confident] 스토리지와 컴퓨트가 분리되어 있어서 각각 따로 확장할 수 있습니다. 컴퓨트는 스토리지에 이미 있는 데이터만 캐시합니다.

## Step 5 · Ways to get data in

[calm] 데이터는 Event Hubs, IoT Hub, Event Grid, Kafka 같은 원본에서 들어옵니다.
[600ms]
[confident] 대기열 수집은 처리량을 높이려고 데이터를 모아서 처리하며, 대부분의 시나리오에 권장됩니다.
[600ms]
[curious] 반면 스트리밍 수집은 낮은 지연 시간에 초점을 둡니다. 테이블마다 들어오는 데이터가 적을 때 거의 실시간으로 결과를 얻을 수 있습니다.

## Step 6 · Try it: ingestion path and hot cache

[encouraging] 이제 직접 해 볼 차례입니다. 데이터를 어떤 방식으로 받을지, 그리고 핫 상태로 얼마나 유지할지 선택해 보세요.
[600ms]
[curious] 미터가 움직이는 걸 보세요. 실제 수치가 아니라, 각 장단점이 어느 쪽으로 기우는지만 보여 줍니다.
[600ms]
[reflective] 실제 동작은 일괄 처리 방식, 캐시 정책, 워크로드, 클러스터 크기에 따라 달라집니다.

## Step 7 · Ask it in KQL

[curious] 질문은 Kusto Query Language, 줄여서 KQL로 합니다. 위에서 아래로 읽어 내려가는 언어입니다.
[600ms]
[confident] 테이블에서 시작해서 필터와 요약을 파이프로 이어 가면 됩니다. 같은 데이터에 T-SQL도 쓸 수 있습니다.
[600ms]
[calm] KQL은 오픈 소스이고, Azure Data Explorer 팀이 만들었습니다. Azure Monitor Logs와 Application Insights에서도 씁니다.

## Step 8 · Hot cache vs retention

[calm] 혼동하기 쉬운 정책이 두 가지 있습니다. 캐시 정책은 로컬 SSD에서 빠르게 유지할 데이터를 정합니다.
[600ms]
[confident] 보존 정책은 데이터를 얼마나 오래 쿼리할 수 있는지를 정합니다. 두 정책은 서로 독립적입니다.
[600ms]
[serious] 보존 정책은 쿼리 가능한 범위를 정하고, 캐시는 그 범위의 일부를 빠르게 쓰도록 우선순위를 줄 뿐입니다. 그리고 삭제가 정확히 그 시점에 일어나는 것은 아닙니다.

## Step 9 · Scale out, scale up

[calm] 용량이 더 필요하면 방향이 두 가지입니다. 먼저 엔진 노드를 추가하거나 제거하는 스케일 아웃이 있습니다.
[600ms]
[confident] 아니면 VM SKU를 바꿔서 CPU와 메모리를 늘리는 스케일 업이 있습니다. 스토리지는 알아서 확장됩니다.
[600ms]
[reassuring] 새 클러스터는 기본적으로 최적화된 자동 스케일링을 사용합니다. 사용률이 낮으면 스케일 인, 과부하가 걸리면 스케일 아웃을 하는데, 설정한 한도 안에서 조정합니다.

## Step 10 · Security at a plain level

[serious] 보안은 쉬운 개념 세 가지로 정리됩니다. 첫째, 역할이 누가 데이터를 쿼리하거나 수집할 수 있는지 정합니다.
[600ms]
[confident] 프라이빗 엔드포인트는 트래픽이 공용 인터넷을 거치지 않게 하고, 관리 ID는 구성에서 비밀을 없애 줍니다.
[600ms]
[calm] 데이터 역할은 클러스터, 데이터베이스, 테이블 범위에 적용되며, Azure 리소스 역할과는 별개입니다. 고객 관리형 키도 지원합니다.

## Step 11 · Where Azure Data Explorer fits

[curious] Azure 데이터 제품군에서는 어디에 해당할까요? KQL이 이 제품군을 하나로 묶어 줍니다.
[600ms]
[confident] 얼마나 직접 운영하고 싶은지, 어떤 작업인지에 따라 고르세요. 텔레메트리 분석용이지, 웨어하우징이나 앱 데이터용이 아닙니다.
[600ms]
[calm] Fabric Real-Time Intelligence는 SaaS 방식이고, Azure Data Explorer는 제어 범위가 더 넓은 PaaS 방식입니다.

## Step 12 · Azure Data Explorer at a glance

[calm] 전체 그림은 이렇습니다. 주로 추가되는 텔레메트리와 로그가 들어가면, KQL로 답이 나옵니다.
[600ms]
[confident] 여러분이 설계할 것은 네 가지입니다. 수집 경로, 캐시와 보존, 규모, 그리고 보안입니다.
[600ms]
[proud] 다음에는 KQL 기초를 배우고, Database 여정에서 다른 데이터 저장소와 비교해 보세요.
