# Narrator Script — Foundry · RAG with Azure AI Search

**Source animation:** [RagWithAzureAISearch.html](../../../../journeys/AI/Foundry/RagWithAzureAISearch.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview>
- <https://learn.microsoft.com/azure/search/search-indexer-overview>
- <https://learn.microsoft.com/azure/search/vector-search-integrated-vectorization>

---

## Step 1 · A model that has never read your files

[curious] Maya Contoso조수에게 원격 근무 정책에 대해 간단한 질문을 합니다.
[600ms]
[concerned] 모델은 학습 데이터만 알고 있고, 그것에는 마감일이 있습니다. Contoso비공개이거나 변경되는 인사 파일은 그 안에 없습니다.
[600ms]
[serious] 그래서 모델들이 모를 때 하는 일을 합니다: 추측하고, 답은 자신감 있어 보이지만 근거가 없을 때입니다.

## Step 2 · RAG: retrieve, augment, generate

[calm] 검색 증강 생성, 즉 RAG는 세 단계로 이 문제를 해결합니다.
[600ms]
[confident] 먼저 올바른 구절을 찾아보세요. 그다음 그것들을 프롬프트에 추가하세요. 그 다음 모델이 그 구절들로부터 답변하도록 하세요.
[600ms]
[reassuring] 모델은 재교육되지 않습니다. 사실은 질문 시간에 프롬프트에 전달되기 때문에 콘텐츠는 매일 바뀔 수 있습니다.

## Step 3 · Ingest: from files to a search index

[curious] 인덱서는 데이터 소스에서 Azure AI Search의 검색 인덱스로 콘텐츠를 끌어옵니다.
[600ms]
[confident] 일정에 따라 재실행할 수 있어서 파일이 바뀔 때마다 인덱스가 신선하게 유지됩니다.
[600ms]
[calm] 색인은 검색 서비스에서 별도의 검색 가능한 사본입니다. 이 점이 쿼리를 빠르게 만드는 이유인데, 서비스가 질문 시간에 출처로 돌아가지 않기 때문입니다.

## Step 4 · Enrich: read, chunk, and embed

[curious] 다음으로, 스킬셋은 각 문서에 AI 스킬셋을 적용합니다.
[600ms]
[confident] 한 스킬은 스캔본에서 텍스트를 읽고, 다른 스킬은 이를 구절 단위로 나누며, 또 다른 스킬은 각 구절을 벡터로 바꿉니다.
[600ms]
[impressed] 표와 그림을 위한 스킬도 있습니다. 통합 벡터화를 사용하면 임베딩이 인덱싱 시점과 쿼리 시점 모두에서 이루어집니다.

## Step 5 · The index: one chunk, one document

[calm] 각 청크는 인덱스 내에서 별도의 검색 문서가 됩니다.
[600ms]
[confident] 필드 속성은 검색 방법, 필터링 및 인용 반환 방식을 결정합니다. 벡터 필드는 임베딩을 저장하며, 그 치수는 임베딩 모델과 일치해야 합니다.
[600ms]
[serious] 검색 가능한 필드만 반환할 수 있으니, 출처 링크 필드를 남겨두면 인용이 되돌아오는 경우가 좋습니다.

## Step 6 · Four ways to ask the index

[curious] 인덱스에 질문하는 방법은 네 가지가 있습니다.
[600ms]
[confident] 전체 텍스트는 단어와 일치합니다. 벡터는 의미와 일치합니다. 하이브리드는 한 번의 요청에서 두 가지를 모두 수행합니다.
[600ms]
[impressed] 그리고 의미 랭커는 가장 좋은 결과를 재정렬하여 가장 유용한 구절이 맨 위에 올라갑니다.

## Step 7 · Try it: which mode finds the answer?

[encouraging] 이제 직접 해보세요. 질문을 고르고, 검색 모드를 선택하세요.
[600ms]
[curious] 어떤 청크가 모델에 도달하는지 관찰하고, 답 청크가 순위에서 어디에 위치하는지 확인하세요.
[600ms]
[reflective] 여기서의 순위는 Contoso 단위로 만들어진 것에 불과합니다. 실제 결과는 당신의 콘텐츠, 분야, 임베딩 모델에 달려 있습니다.

## Step 8 · Ground a Foundry agent on the index

[confident] 에이전트를 확보하려면 검색 서비스에 프로젝트 연관성을 추가하세요.
[600ms]
[calm] 그 다음 에이전트의 Azure AI Search 도구를 인덱스에 가리키면, 답변이 인용문과 함께 돌아옵니다.
[600ms]
[serious] 키보다 프로젝트의 관리 신원을 선호하세요. 사설 네트워킹은 Microsoft Entra필요하니 정확한 역할 할당은 Learn에서 확인하세요.

## Step 9 · When one search is not enough

[curious] 복잡한 질문을 한 번의 검색만으로는 해결하기 어려울 때가 있습니다.
[600ms]
[confident] 에이전트 검색은 소스 앞에 지식 기반을 제시합니다. 하위 쿼리를 계획하고, 병렬로 실행하며, 재순위를 매기고, 근거 있는 결과를 반환합니다.
[600ms]
[reflective] FoundryFoundry IQ는 에이전트에게 지식 기반을 제공하며, Azure AI Search 엔진이 그 아래에 있습니다. 일부 부분은 아직 미리보기 단계이므로 목표로 하는 API 버전을 확인하세요.

## Step 10 · Only retrieve what the caller may see

[serious] 회수는 위험을 동반합니다. 모든 사람이 모든 문서를 봐야 하는 것은 아닙니다.
[600ms]
[confident] 쿼리 시점에 호출자의 신원으로 결과를 필터링하세요. 제한된 청크는 모델에 묻는 사람이 프롬프트에 도달하지 않습니다.
[600ms]
[calm] 보안 필터는 필터링 가능한 필드의 사용자 또는 그룹 값을 일치시킵니다. 내장된 문서 수준의 접근 제어가 미리보기 기능으로 제공됩니다.

## Step 11 · Measure it, then tune cost and latency

[curious] 이제 측정해 보세요. 검색, 근거성, 관련성 같은 평가자로 검색 결과와 답변에 점수를 매깁니다.
[600ms]
[confident] 그 다음 답변의 질과 비용, 응답 시간을 교환하는 레버를 조정하세요.
[600ms]
[reflective] 평가는 별도의 주제이므로, 이 단계는 어디에 해당하는지 보여줍니다. 여기 있는 바 높이는 예시입니다.

## Step 12 · RAG with Azure AI Search, all in one

[calm] 한 번만 콘텐츠를 수집하고 풍부하게 하세요. 각 질문이 필요한 방식으로 질문하세요.
[600ms]
[confident] 에이전트를 접지시키고, 결과를 식별별로 다듬은 다음, 측정하고 조정하세요.
[600ms]
[proud] 이것이 A I 103 회수 목표의 파이프라인이며, 다른 벡터 저장소에서 같은 RAG 아이디어를 실천하는 A I 200와도 잘 어울립니다.
