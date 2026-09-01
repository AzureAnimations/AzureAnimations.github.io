# Narrator Script — Copilot Studio · What Makes an Agent (Anatomy) · KO

**Source animation:** `static/v2/CopilotStudio/Anatomy.html`

남성 목소리(ko-KR-Hyunsu). 한 단계에 한 블록.

---

## Step 1 · Overview

[confident] 실제 Copilot Studio 에이전트인 Contoso 지원 에이전트를 열고, 탭 하나하나 살펴보겠습니다.
[600ms]
[calm] Overview 탭은 에이전트의 정체성입니다. 이름, 대신 추론해 주는 모델(여기서는 GPT-4.1), 그리고 페르소나와 규칙을 정하는 지침이 있습니다.
[600ms]
[impressed] 그리고 생성 오케스트레이션이 켜져 있어서, 에이전트는 요청마다 무엇을 쓸지 그 자리에서 결정합니다. 지침, 모델, 오케스트레이션. 이것이 두뇌입니다. 나머지는 모두 에이전트가 사용할 수 있는 것들입니다.

## Step 2 · Knowledge

[confident] 다음은 Knowledge 탭입니다. 여기서 에이전트를 여러분의 데이터에 근거하게 만듭니다.
[600ms]
[calm] SharePoint 사이트, 공개 웹 페이지, 업로드한 반품 정책 PDF를 지정하면, 이제 추측이 아니라 출처가 명시된 실제 자료에서 답합니다. 이것이 검색 증강 생성, 즉 RAG입니다.
[600ms]
[reassuring] 공개 사이트를 위한 웹 검색도 켤 수 있습니다. 근거화야말로 답을 신뢰할 수 있게 만듭니다. 에이전트는 각 사실이 어디서 왔는지 정확히 보여 줄 수 있습니다.

## Step 3 · Tools

[confident] Tools 탭은 에이전트가 말만 하는 것이 아니라 실제로 일을 하는 방법입니다.
[600ms]
[calm] 고객과 주문을 읽는 Dataverse 커넥터, 티켓을 여는 에이전트 흐름, 사례를 요약하는 재사용 가능한 프롬프트, 그리고 여러분의 API를 도구로 노출하는 MCP 서버까지.
[600ms]
[impressed] 도구를 추가하면 대화 중에 에이전트가 주문을 조회하고, 그 티켓을 만들고, 어떤 API든 호출할 수 있습니다. 말하는 것에서 실제로 해내는 것으로 바뀝니다.

## Step 4 · Agents

[confident] Agents 탭은 에이전트가 전문가에게 위임하게 해 줍니다.
[600ms]
[calm] Contoso 지원은 라우터로 남고, 자식 에이전트에게 넘깁니다. 환불은 반품 에이전트, 청구는 재무 에이전트, 영업시간과 위치는 매장 에이전트.
[600ms]
[impressed] 이것이 멀티 에이전트 패턴입니다. 하나의 에이전트는 집중을 유지하며 나머지를 라우팅하고, 각자 자기 영역의 전문가이며, 모두 생성 오케스트레이션으로 조율됩니다.

## Step 5 · Topics

[confident] Topics 탭은 정말로 스크립트화된 경로를 원할 때를 위한 것입니다.
[600ms]
[calm] 사용자 지정 토픽은 문구로 트리거되는 작성된 흐름입니다. "물건 반품", "내 주문은 어디" 같은 문구에 노드, 슬롯 채우기, 변수가 있습니다. 시스템 토픽은 인사, 폴백, 에스컬레이트 같은 기본 동작을 다룹니다.
[600ms]
[intrigued] 하지만 여기서 전환이 일어납니다. 오케스트레이션 덕분에 토픽은 플래너가 골라 쓸 수 있는 재사용 가능한 구성 요소가 됩니다. 하나의 경직된 결정 트리가 아니라요.

## Step 6 · Measure

[confident] 이 세 탭이 하나의 개선 루프를 이룹니다. Activity, Evaluation, Monitor입니다.
[600ms]
[calm] Activity는 사용량과 참여도를, Evaluation은 답변 품질을, Monitor는 에이전트의 상태와 Copilot Credits 사용량을 추적합니다.
[600ms]
[encouraging] 배포하고 데이터를 지켜보며 지침과 지식, 도구를 조정하세요. 그러면 에이전트는 시간이 지나며 조용히 더 좋아집니다.

## Step 7 · Channels

[confident] 마지막으로 Channels 탭입니다. 한 번 게시하고, 사람들이 이미 있는 곳에서 만나세요.
[600ms]
[calm] Microsoft Teams와 Microsoft 365 Copilot, 웹사이트, SharePoint, 모바일 앱, 그리고 어떤 Azure Bot Service 채널이든.
[600ms]
[impressed] 같은 에이전트, 여러 개의 문. 한 번 만들어서 사용자가 선호하는 모든 채널에 배포합니다.

## Step 8 · Recap

[confident] 자, 이렇게 에이전트 전체가 한 장의 지도가 되었습니다.
[600ms]
[calm] Overview가 두뇌(모델, 지침, 오케스트레이션)를 정합니다. Knowledge, Tools, Agents, Topics가 무엇을 쓸지 줍니다. 그리고 측정, 이어서 Channels가 실제로 내보냅니다.
[600ms]
[encouraging] 하나의 로우코드 에이전트. 근거가 있고, 도구를 갖추고, 스크립트가 아니라 오케스트레이션으로 움직이며, 어디에나 게시됩니다. 직접 만들어 보고 싶으신가요? Microsoft Learn의 무료 경로 "Agents in a Day"가 훌륭한 다음 단계입니다.
