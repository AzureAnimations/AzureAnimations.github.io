# Narrator Script — 데이터 통합 및 데이터 레이크 설계

**Source animation:** [DataIntegrationDesign.html](../../../journeys/Database/DataIntegrationDesign.html)
**Language:** ko

큐 안내: `[confident]`와 `[reflective]`는 전달할 어조를 나타내며, `[600ms]`는 문장 사이의 무음 쉼을 나타냅니다.

<!-- Source: https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · Contoso’s data journey

[confident]
Contoso의 주문, 웹 사이트 클릭스트림, 창고 센서는 서로 다른 데이터를 만들지만, 이 여정은 공통된 방향을 제시합니다.
[600ms]
수집에서는 데이터를 모으고, 저장에서는 보관하고, 준비에서는 변환하고 보강하며, 제공에서는 분석에 사용할 수 있게 합니다.
[600ms]
[reflective]
같은 단계 표시가 계속 남아 있으므로 각 서비스가 맡는 일을 알아볼 수 있습니다.

## Step 2 · Azure Data Factory: the orchestrator

[confident]
Azure Data Factory는 각 원본과 처리 도구가 따로 움직이게 두는 대신 전체 작업을 조율합니다.
[600ms]
파이프라인은 활동을 묶고, 데이터 세트는 데이터를, 연결된 서비스는 연결을 설명하며, 통합 런타임이 이 구성 요소들을 이어 줍니다.
[600ms]
[reflective]
아래의 흐름은 수집과 변환에서 게시와 모니터링까지 이러한 조율 과정을 보여 줍니다.

## Step 3 · Azure Data Lake Storage: raw data at scale

[confident]
Contoso는 분석 방법을 결정하기 전에 원시 파일을 원래 형식 그대로 보관할 수 있습니다.
[600ms]
Data Lake Storage는 Blob Storage를 기반으로 계층 구조 네임스페이스를 사용하여, 폴더를 이름 접두사로 취급하는 대신 실제 디렉터리를 제공합니다.
[600ms]
[reflective]
비교표에서는 POSIX 권한을 통한 파일과 디렉터리 액세스도 확인할 수 있습니다.

## Step 4 · Azure Databricks: Spark for big data

[confident]
Azure Databricks는 SQL, 데이터 엔지니어링, 기계 학습 작업을 공유 Spark 플랫폼으로 모읍니다.
[600ms]
컨트롤 플레인은 작업 영역을 관리하고, 컴퓨팅 플레인은 실제 처리를 실행합니다.
[600ms]
[reflective]
클래식 컴퓨팅은 Contoso의 Azure 구독에서, 서버리스 컴퓨팅은 Azure Databricks 계정에서 실행되므로 두 방식의 경계는 다릅니다.

## Step 5 · Azure Synapse Analytics: one analytics service

[confident]
Azure Synapse Analytics는 데이터 통합, 스토리지, 분석을 서로 떨어진 작업으로 취급하지 않고 함께 제공합니다.
[600ms]
제어 노드는 여러 컴퓨팅 노드의 쿼리를 조율하며, 병렬 처리가 작업을 나누는 방식을 보여 줍니다.
[600ms]
[reflective]
SQL 풀, Spark 풀, 파이프라인, 링크가 Synapse Studio와 함께 공통 도구 모음을 구성합니다.

## Step 6 · Hot, warm and cold data paths

[confident]
Contoso가 모든 답을 같은 속도로 필요로 하지는 않으므로, 흐름을 서로 다른 데이터 경로로 나눕니다.
[600ms]
핫 경로는 실시간 알림을 지원하고, 웜 경로는 흐르는 데이터를 분석하면서 최근 데이터의 일부를 보관합니다.
[600ms]
[reflective]
콜드 경로는 원본 메시지를 유지하여 장기 배치 분석에 사용합니다.

## Step 7 · Azure Stream Analytics: insight from streams

[confident]
Azure Stream Analytics는 들어오는 이벤트를 다른 서비스가 사용할 수 있는 결과로 바꿉니다.
[600ms]
Event Hubs, IoT Hub 또는 Blob Storage에서 SQL 기반 쿼리로 이어지는 화살표를 따라가면, 창이 시간에 따라 처리를 구성하는 모습을 볼 수 있습니다.
[600ms]
[reflective]
출력은 이 결과를 Power BI, Data Lake Storage, Cosmos DB 같은 대상으로 전달합니다.

## Step 8 · Which service for which job?

[confident]
좋아하는 제품을 모든 문제에 적용하지 말고, 이 표를 작업에서 서비스 방향으로 읽어 보세요.
[600ms]
Data Factory는 이동을 조율하고, Data Lake Storage는 원시 데이터를 보관하며, Databricks는 공유 Spark 처리를 제공합니다.
[600ms]
[reflective]
Synapse는 분석 구성 요소를 모으고, Stream Analytics는 SQL 기반 쿼리로 이벤트 스트림을 처리합니다.

## Step 9 · All in One: Contoso’s data journey

[confident]
완성된 보드는 각 서비스를 Contoso의 수집, 저장, 준비, 제공 여정에 다시 배치합니다.
[600ms]
Data Factory와 Event Hubs가 흐름에 데이터를 보내고, 스토리지가 보관하며, 처리 과정을 통해 분석에 유용한 결과를 준비합니다.
[600ms]
[reflective]
아래의 경로는 즉시성과 보존 요구가 각 데이터의 위치를 결정한다는 점을 보여 줍니다.
