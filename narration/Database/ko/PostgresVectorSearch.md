# Narrator Script — PostgreSQL: pgvector로 벡터 검색

**Source animation:** [PostgresVectorSearch.html](../../../journeys/Database/PostgresVectorSearch.html)
**Language:** ko

대괄호 안은 전달 방식 안내이며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Meaning search, plus relational joins

[curious] Contoso의 어시스턴트는 제품 설명의 단어가 요청과 달라도 고객의 의도에 맞는 제품을 찾아야 합니다.
[600ms]
[confident] pgvector는 PostgreSQL에 유사성 검색을 추가하고, 애플리케이션에서 이미 사용하는 관계형 레코드 옆에 임베딩을 저장합니다.
[600ms]
[reassuring] 별도의 벡터 저장소를 관리하지 않고도 의미 기반 탐색과 관계형 조인을 함께 사용할 수 있습니다.

## Step 2 · Enable pgvector, add a vector column

[confident] 먼저 서버에서 pgvector를 허용하고, 데이터베이스에서 활성화한 뒤 설치 여부를 확인합니다.
[600ms]
[calm] 제품 콘텐츠를 임베딩 모델에 전달하고, 생성된 벡터를 해당 행의 메타데이터와 함께 저장합니다.
[600ms]
[serious] 벡터 열의 차원 수를 모델 출력과 맞춰, 생성한 임베딩이 저장 구조에 들어가도록 하세요.

## Step 3 · Three metrics, three operators

[curious] 근접도를 측정하는 방법은 선택할 수 있으며, 유클리드 거리와 코사인 거리, 음의 내적은 서로 다른 방식으로 벡터를 비교합니다.
[600ms]
[calm] 코사인은 길이보다 방향에 집중하므로 텍스트 임베딩에 흔히 사용합니다.
[600ms]
[serious] 임베딩 모델에서 권장하는 측정 기준을 따르고, 이 예시에서는 거리가 작을수록 더 가까운 결과로 순위를 매긴다는 점을 기억하세요.

## Step 4 · Fast search: IVFFlat or HNSW

[confident] 정확한 스캔은 모든 행을 비교하지만, 근사 인덱스는 재현율 일부를 양보하는 대신 검색 속도를 높일 수 있습니다.
[600ms]
[calm] IVFFlat은 기존 벡터를 군집화하고, HNSW는 계층형 그래프를 구축하며 일반적으로 메모리가 더 필요합니다.
[600ms]
[encouraging] 제약 조건상 IVFFlat이 유리하지 않다면 HNSW로 시작하고, 인덱스와 쿼리의 거리 측정 방식을 맞추세요.

## Step 5 · Keep embeddings and the index fresh

[serious] 수정된 콘텐츠에 오래된 임베딩이 남거나 데이터 분포가 바뀌면 검색 품질도 달라질 수 있습니다.
[600ms]
[confident] 변경된 콘텐츠는 일괄로 다시 임베딩하고, 데이터가 달라지면 인덱스를 다시 빌드할지 검토합니다.
[600ms]
[reassuring] 임베딩 모델을 변경할 때는 한 열에 여러 모델을 섞지 말고, 병렬 열에 데이터를 채워 검증한 뒤 전환합니다.

## Step 6 · Semantic retrieval with a filter

[confident] 질문을 임베딩으로 변환하고, 메타데이터로 검색 후보를 고객이 관심 있는 범주의 제품으로 제한합니다.
[600ms]
[calm] 거리 임계값으로 약한 일치를 제외하고, 모든 후보 행이 아니라 남은 결과 중 가까운 항목부터 반환합니다.
[600ms]
[encouraging] 자체 데이터로 임계값을 조정해 관련 결과를 찾는 것과 지나치게 제한적인 필터 사이의 균형을 맞추세요.

## Step 7 · RAG: PostgreSQL is the retriever

[confident] 질문의 임베딩과 검색을 거쳐, 가장 가까운 청크와 메타데이터가 프롬프트에 들어가는 흐름을 따라갑니다.
[600ms]
[calm] PostgreSQL은 컨텍스트를 검색하고, 언어 모델은 그 컨텍스트를 사용해 답변을 작성합니다.
[600ms]
[serious] 답변에서 출처를 인용할 수 있도록 청크를 원본 문서와 연결하고, 생성 문제로 판단하기 전에 검색 품질을 평가하세요.

## Step 8 · All in one: vector search in PostgreSQL

[confident] 이제 하나의 PostgreSQL 데이터베이스에 관계형 행과 임베딩을 함께 저장해, 어시스턴트의 질문을 검색한 컨텍스트와 답변으로 연결합니다.
[600ms]
[calm] 확장, 거리 측정 기준, 인덱스, 새로 고침 과정, 메타데이터 필터가 각각 이 검색 경로를 지원합니다.
[600ms]
[encouraging] 다음에는 데이터베이스와 벡터 워크로드를 함께 조정해, 관련 결과를 놓치지 않도록 살피면서 대기 시간을 개선하세요.
