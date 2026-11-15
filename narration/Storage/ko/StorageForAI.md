# 내레이션 대본 — Azure Storage · 레벨업 · AI를 위한 Storage

**Source animation:** `static/v2/Storage/StorageForAI.html`

---

## Step 1 · goal

[confident] 여러분은 모델이 우연히 외운 것이 아니라, 여러분 자신의 기업 콘텐츠에서 답하는 AI 앱을 원합니다.
[600ms]
[calm] 그것을 해내는 패턴이 검색 증강 생성, 즉 RAG입니다. 질문 시점에 여러분의 데이터를 모델에 먹이므로, 답이 여러분의 문서에 뿌리를 둡니다.
[700ms]
[curious] 그리고 그 모두가 storage에서 시작됩니다. 한 문서를 blob에서 근거 있는 답까지 따라가 봅시다.

## Step 2 · store

[confident] 먼저, 진실의 원천. 여러분의 문서, PDF, 이미지가 Blob Storage에 내려앉습니다.
[600ms]
[calm] 큰 분석 데이터에는 Data Lake Storage Gen 2에 손을 뻗으세요. 그것은 계층형 네임스페이스와 폴더 수준 권한을 갖춘 Blob Storage입니다.
[700ms]
[reassuring] 어느 쪽이든, storage는 다른 모두가 길어 올릴 원시 콘텐츠를 담습니다.

## Step 3 · index

[confident] 이제 그 콘텐츠를 찾을 수 있게 만듭니다. Azure AI Search 인덱서가 여러분의 blob 컨테이너에 곧바로 연결됩니다.
[600ms]
[calm] 파일과 그 메타데이터를 끌어오고, 각 문서를 열어, 안의 텍스트를 추출합니다.
[700ms]
[reassuring] 더욱이, blob 타임스탬프를 지켜보므로, 콘텐츠가 바뀌면 새것만 다시 인덱싱됩니다.

## Step 4 · vectorize

[confident] 여기가 AI 검색을 가능하게 하는 단계입니다. 인덱싱 중에, 통합 벡터화가 각 문서를 청크로 나눕니다.
[600ms]
[calm] 청킹은 각 조각을 모델의 토큰 한도 안에 유지합니다. 그리고 임베딩 모델이 각 청크를, 그 의미를 담은 숫자 목록, 즉 벡터로 바꿉니다.
[700ms]
[reassuring] 그 벡터들은 검색 인덱스 안에 바로 살면서, 키워드뿐 아니라 의미로 일치될 준비가 되어 있습니다.

## Step 5 · retrieve

[confident] 질문의 시간. 앱은 인덱스 위에서 벡터와 키워드를 함께 쓰는 하이브리드 검색을 실행합니다.
[600ms]
[calm] 벡터는 의미적으로 가까운 것을 찾고, 키워드는 정확한 용어를 잡아냅니다. 함께, 가장 관련 있는 청크를 떠오르게 합니다.
[700ms]
[impressed] 그 청크들은 답을 근거 짓기 위해 모델에 건네집니다. 그것이 RAG입니다. 모델은 여러분의 콘텐츠에서 답하고, 그것을 인용할 수 있습니다.

## Step 6 · secure

[confident] 이제 기업이 건너뛸 수 없는 부분 — 검색을 안전하게 지키기.
[600ms]
[calm] Azure AI Search는 각 문서의 권한 — 액세스 제어 목록과 Microsoft Entra 그룹, 심지어 Purview 민감도 레이블까지 — 을 인덱스에 곧바로 수집할 수 있습니다.
[700ms]
[reassuring] 그것이 권한을 인식하는 검색을 줍니다. 에이전트는 묻는 사람이 볼 권한이 없는 문서를 결코 떠오르게 하지 않습니다.

## Step 7 · recap

[proud] 이것이 전체 그림입니다. Blob이나 Data Lake Storage에 콘텐츠를 저장하고, AI Search 인덱서가 그것을 끌어오게 하고, 통합 벡터화로 청킹하고 임베딩하고, 하이브리드 검색으로 가져오고, 모델의 답을 근거 짓기 — 그 모두를 권한을 존중하면서.
[700ms]
[encouraging] storage는 진실의 원천, 검색 인덱스는 벡터를 담고, RAG는 그것들을 여러분이 신뢰할 수 있는 답으로 묶습니다.

## Step 8 · spec

[confident] 조금 더 깊이. 세 계층으로 생각하세요. storage가 원천. Azure AI Search가 검색 계층이고, 여러분의 벡터는 벡터 필드에 삽니다.
[600ms]
[calm] 그리고 에이전트가 그 위에 앉습니다. 먼저 검색하고, 그다음 돌아온 것에서 모델이 답하게 합니다.
[700ms]
[reassuring] 권한을 storage에서 인덱스로 계속 흐르게 하면, 모든 답은 근거 있고 안전한 채로 남습니다.
