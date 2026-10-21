# Narrator Script — Cosmos DB: 벡터 검색

**Source animation:** [CosmosVectorSearch.html](../../../journeys/Database/CosmosVectorSearch.html)
**Language:** ko

낭독 안내: 대괄호의 스타일은 말투를 지시하며, [600ms]는 문장 사이의 쉼을 나타냅니다.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ -->

## Step 1 · Search by meaning, not keywords

[curious] 고객은 비에 젖지 않는 방법을 묻지만, Contoso의 제품 설명에는 방수 재킷이라고 적혀 있습니다.
[600ms]
[calm] 고객이 쓴 단어만 맞추면 이 연결을 놓치지만, 임베딩은 텍스트의 의미를 벡터로 표현합니다.
[600ms]
[reassuring] 이 벡터들을 비교하면 질문과 설명의 표현이 달라도 어시스턴트가 관련 제품을 검색할 수 있습니다.

## Step 2 · Tell the container about its vectors

[confident] 벡터를 저장하기 전에 임베딩의 위치와 값을 비교할 방법을 컨테이너에 알려 주세요.
[600ms]
[calm] 정책은 속성 경로, 숫자 형식, 거리 함수, 차원 수를 지정합니다.
[600ms]
[serious] 계정에서 벡터 검색을 활성화하고 컨테이너를 만들 때 정책을 설정해, 저장과 비교 설정이 임베딩과 맞도록 하세요.

## Step 3 · Keep the embedding on the item

[confident] 제품 텍스트가 Azure OpenAI 임베딩 모델을 거쳐 옆에 표시된 숫자 벡터로 바뀝니다.
[600ms]
[calm] 그 벡터는 설명하는 콘텐츠와 분리하지 말고, 제품 정보와 같은 항목에 저장하세요.
[600ms]
[reassuring] 모델의 출력은 정책의 차원 수와 일치해야 하며, 그래야 저장한 항목에 호환되는 유사성 쿼리를 사용할 수 있습니다.

## Step 4 · Rank items by similarity

[confident] 먼저 제품 항목에 사용한 것과 같은 모델로 고객 질문의 임베딩을 만듭니다.
[600ms]
[calm] 벡터 거리 쿼리는 질문 벡터와 저장된 임베딩을 비교하고, 개수를 제한한 일치 후보를 순위와 함께 반환합니다.
[600ms]
[reassuring] 화면의 점수는 순서를 보여 주는 예시이지 답변 품질의 약속은 아니며, 결과를 좁히면 어시스턴트가 검토할 제품 후보를 얻을 수 있습니다.

## Step 5 · Narrow, rank, then match words

[confident] 먼저 메타데이터 필터로 검색 대상을 적절한 범주, 게시 상태, 날짜에 맞게 좁힙니다.
[600ms]
[calm] 벡터 순위는 의미를 반영하고, 전체 텍스트 순위는 콘텐츠에서 중요한 단어를 포착합니다.
[600ms]
[reassuring] 상호 순위 융합으로 두 순위를 결합하면, Contoso는 하나의 신호만 선택하지 않고 의미와 단어의 단서를 함께 활용할 수 있습니다.

## Step 6 · Keep embeddings fresh

[confident] 제품 텍스트가 바뀌면 기존 임베딩이 더 이상 고객이 읽는 내용을 설명하지 못할 수 있습니다.
[600ms]
[calm] 변경 피드가 바뀐 항목을 Azure Functions에 전달하면, 새 임베딩을 요청하고 항목에 다시 기록합니다.
[600ms]
[reassuring] 콘텐츠 해시를 확인해 바뀌지 않은 텍스트를 건너뛰면, 메타데이터만 바뀐 경우 임베딩을 다시 만들 필요가 없고 갱신 과정에서 불필요한 반복 작업도 피할 수 있습니다.

## Step 7 · One semantic search pipeline

[confident] 이제 전체 파이프라인에서 수집과 질문이 벡터 정책과 인덱스를 가진 하나의 컨테이너로 연결됩니다.
[600ms]
[calm] 제품 텍스트와 고객 질문은 같은 임베딩 모델을 사용하고, 검색은 적절한 필터와 함께 순위가 매겨진 일치 후보를 반환합니다.
[600ms]
[reassuring] 변경 피드 분기는 편집된 항목을 갱신하여, 검색용 벡터가 설명하는 콘텐츠와 계속 연결되도록 합니다.

## Step 8 · Vector search in Cosmos DB, all in one

[confident] 벡터 저장 설정, 호환되는 임베딩으로 검색, 결과 다듬기와 갱신이라는 세 가지 역할을 함께 생각하세요.
[600ms]
[calm] 벡터 거리가 순위를 제공하고, 필터와 전체 텍스트가 선택 신호를 더하며, 변경 피드가 바뀐 콘텐츠와 최신 임베딩을 연결합니다.
[600ms]
[encouraging] 이 검색 흐름을 갖췄으므로, 다음 학습에서는 인덱싱과 요청 비용, 일관성을 살펴봅니다.
