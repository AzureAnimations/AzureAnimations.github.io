# Narrator Script — Copilot Studio · Extend & Integrate · KO

**Source animation:** `static/v2/CopilotStudio/Integrate.html`

남성 목소리(ko-KR-Hyunsu). 단계당 한 블록.

---

## Step 1 · Why Extend

[confident] 에이전트는 혼자서도 훌륭한 대화를 나눌 수 있습니다. 하지만 좋은 답변에는 실제 시스템이 필요한 경우가 많습니다.
[600ms]
[calm] 주문 데이터베이스, 티켓 관리 도구, 내부 API. 정말로 도움이 되려면 에이전트가 그것들에 닿아야 합니다.
[600ms]
[impressed] 확장이야말로 에이전트를 "이야기만 하는" 존재에서 "일을 해내는" 존재로 바꿔 줍니다. Contoso의 실제 데이터에 대해 행동하는 것이죠.

## Step 2 · Connectors

[confident] 가장 쉬운 입구는 커넥터입니다. Copilot Studio에는 천 개가 넘는 커넥터가 기본 제공됩니다.
[600ms]
[calm] 이들은 Power Automate, Power Apps, Azure Logic Apps와 공유됩니다. Dataverse, SharePoint, SQL Server, ServiceNow, Salesforce 등 수백 가지입니다.
[600ms]
[impressed] 하나를 도구로 추가하면 에이전트가 대화 도중에 그것을 호출할 수 있습니다. 코드는 필요 없습니다. 필요한 시스템에는 대개 이미 대기 중인 커넥터가 있습니다.

## Step 3 · Custom Connectors

[confident] 여러분의 시스템에 기본 커넥터가 없다면? 어떤 REST API든 사용자 지정 커넥터로 감싸면 됩니다.
[600ms]
[calm] API를 기술하고, 기본 URL, 인증, 엔드포인트를 지정한 다음, "StartReturn"이나 "GetStatus" 같은 트리거와 동작을 정의합니다.
[600ms]
[reassuring] Contoso의 내부 반품 API에는 기본 커넥터가 없으므로, 사용자 지정 커넥터가 그것을 일급 도구로 만듭니다. Power Platform 전반에서 재사용할 수 있고, 인증해 테넌트 전체에 공유할 수도 있습니다.

## Step 4 · MCP

[confident] 더 새로운 방법으로, Model Context Protocol, 즉 MCP 서버에서 도구를 추가할 수 있습니다.
[600ms]
[calm] Tools 탭에서 "Add a tool"을 고르고, 그다음 "Model Context Protocol"을 선택합니다. Microsoft의 기본 MCP 커넥터를 고르거나, 여러분의 서버를 URL로 연결하세요.
[600ms]
[impressed] 하나의 개방형 표준으로 많은 도구를. MCP 서버는 도구뿐 아니라 리소스도 노출할 수 있어, 자체 서비스, 데이터베이스, API에 아주 좋습니다.

## Step 5 · Agent Flows + Azure

[confident] 더 무겁고 여러 단계인 비즈니스 로직에는, 에이전트 흐름과 Azure로 에이전트를 뒷받침하세요.
[600ms]
[calm] 다단계 자동화에는 에이전트 흐름, 엔터프라이즈 워크플로에는 Azure Logic Apps, 승인에는 Power Automate, 필요할 때의 사용자 지정 코드에는 Azure Functions.
[600ms]
[impressed] 로우코드가 Azure 통합 스택 전체와 만납니다. 에이전트는 채팅에서 바로 진짜 엔터프라이즈 프로세스를 실행할 수 있습니다.

## Step 6 · Autonomous & Multi-Agent

[confident] 게다가 채팅을 기다릴 필요조차 없습니다.
[600ms]
[calm] 이벤트 트리거로 에이전트가 스스로 행동하고, 자식 에이전트로 전문가에게 위임합니다. Dataverse에 새 행이 도착하면 Contoso 운영 에이전트가 발동합니다.
[600ms]
[impressed] 중복을 병합하는 조정 에이전트, 환불을 처리하는 재무 에이전트, 담당자에게 알리는 알림 에이전트로 라우팅합니다. 반응하고, 조정하고, 라우팅하기. 사람의 개입 없이.

## Step 7 · Recap

[confident] 자, 통합의 전체 표면이 한 장의 지도에 담겼습니다.
[600ms]
[calm] 커넥터는 천 개 이상, 코드 없이. 사용자 지정 커넥터는 어떤 REST API든 감쌉니다. MCP는 기본 제공이거나 여러분의 서버. 엔터프라이즈 로직에는 흐름과 Azure. 그리고 준비되면 자율성으로.
[600ms]
[encouraging] 기본 커넥터로 시작하고, 필요가 커질수록 사용자 지정 커넥터, MCP, 흐름, 자율성으로 손을 뻗으세요. 더 깊이 알고 싶다면, Microsoft Learn의 "Extend and manage Copilot Studio agents" 러닝 경로가 다음 목적지입니다.
