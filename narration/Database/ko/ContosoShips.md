# Narrator Script — Contoso의 어시스턴트 출시

**Source animation:** [ContosoShips.html](../../../journeys/Database/ContosoShips.html)
**Language:** ko

큐 안내: `[confident]`와 `[reflective]`는 전달할 어조를 나타내며, `[600ms]`는 문장 사이의 무음 쉼을 나타냅니다.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · One question, two kinds of answer

[confident]
Contoso의 고객은 빗속에서도 젖지 않는 텐트를 찾으면서 주문이 어디 있는지도 알고 싶어 합니다.
[600ms]
제품의 의미와 주문의 사실에는 서로 다른 검색 방식이 필요하므로, 어시스턴트는 이 요청을 나눕니다.
[600ms]
[reflective]
텐트를 찾을 때는 의도와의 일치가 유용하지만, 주문에는 정확한 기록이 필요합니다.

## Step 2 · Cosmos DB remembers the conversation

[confident]
새로 추가된 연결을 통해 어시스턴트는 Azure Cosmos DB에서 채팅 기록을 다시 가져옵니다.
[600ms]
채팅 항목은 텍스트와 임베딩을 함께 보관하고, 파티션 키는 고객의 기록을 구성합니다.
[600ms]
[reflective]
항목 식별자와 파티션 키를 알고 있다면 지점 읽기로 해당 항목을 가져올 수 있습니다.

## Step 3 · Find the tent by meaning

[confident]
질문을 저장된 벡터와 같은 모델로 임베딩하면 서로의 의미를 비교할 수 있습니다.
[600ms]
텐트만 포함하는 메타데이터 필터로 관련 후보를 유지하며, 이 예시 결과에서는 Alpine 2P 텐트가 가장 먼저 나옵니다.
[600ms]
[reflective]
Cosmos의 코사인 점수는 비슷할수록 높아지고, pgvector의 코사인 거리는 가까울수록 작아집니다.

## Step 4 · Look up the order with a tool

[confident]
주문 상태는 고객 질문과의 유사성이 아니라 PostgreSQL을 조회하는 Python 도구에서 가져옵니다.
[600ms]
연결에는 Microsoft Entra 토큰과 TLS를 사용하며, 쿼리 매개 변수는 입력값을 SQL과 분리합니다.
[600ms]
[reflective]
반환된 행이 답변의 근거가 되며, 키셋 페이지 매김은 더 긴 주문 기록을 살펴볼 수 있게 합니다.

## Step 5 · Fast and affordable on both engines

[confident]
이전과 이후 막대는 튜닝 목표를 보여 줄 뿐, Contoso 워크로드에서 측정된 성능을 약속하지 않습니다.
[600ms]
Cosmos DB의 인덱싱 선택은 RU 요금에 영향을 주고, PostgreSQL의 매개 변수, 벡터 인덱스, 연결 풀링은 쿼리 동작에 영향을 줍니다.
[600ms]
[reflective]
먼저 RU 요금과 대기 시간을 측정한 다음, 대표성 있는 데이터로 한 번에 한 가지씩 변경해 테스트하세요.

## Step 6 · Optional: zoom out to the architect view

[confident]
어시스턴트의 맵은 그대로 두고, 아래쪽에서는 Contoso의 더 넓은 데이터 아키텍처를 살펴봅니다.
[600ms]
주문에는 Azure SQL 제품군을 사용할 수 있고, 원시 채팅과 로그는 Data Factory를 거쳐 Data Lake Storage로 흐릅니다.
[600ms]
[reflective]
Databricks가 이 데이터를 준비하고 분석하면서, 개별 고객 요청을 넘어선 구성이 드러납니다.

## Step 7 · Contoso ships the assistant

[confident]
완성된 맵은 질문 분할, 임베딩, 검색, 사실 조회, 데이터 스토어 튜닝을 연결합니다.
[600ms]
Cosmos DB는 메모리와 의미를 제공하고, PostgreSQL은 사실을 제공하면서 의미 검색도 수행할 수 있습니다.
[600ms]
[reflective]
선택 사항인 아키텍처가 이 동작 예시와 함께 배치되어, 각 스토어의 역할이 의도적으로 정해졌다는 점을 보여 줍니다.
