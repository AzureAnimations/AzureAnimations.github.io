# Narrator Script — Copilot Studio · Copilot Studio: Knowledge and Tools

**Source animation:** [ToolsAndKnowledge.html](../../../journeys/CopilotStudio/ToolsAndKnowledge.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/add-knowledge-copilots-online-workshop/>
- <https://learn.microsoft.com/training/modules/copilot-tools-online-workshop/>

---

## Step 1 · The answers live outside the agent

[calm] Contoso Support 실시간 중이며, 고객들은 프롬프트가 답할 수 없는 질문을 하기 시작했습니다.
[600ms]
[curious] 어떤 질문은 위키, 데이터베이스, 파일에 있는 사실이 필요합니다. 다른 질문들은 API와 앱 뒤에 존재하는 신고 시작과 같은 행동이 필요합니다.
[600ms]
[confident] Contoso 그리고 여기서 볼 수 있는 모든 시스템은 허구이며, 같은 요원이 12단계를 모두 진행합니다.

## Step 2 · Two jobs: know it, or do it

[curious] 모든 외부 요구는 두 가지 작업 중 하나로 귀결됩니다. 에이전트가 무언가를 알아야 하거나, 무언가를 해야 합니다.
[600ms]
[calm] 지식은 읽고 인용할 콘텐츠를 제공합니다. 도구는 서비스를 호출하고 변화를 가능하게 합니다. 이 도구들은 에이전트의 두 개의 별도 페이지에 존재합니다.
[600ms]
[confident] 생성 오케스트레이션에서는 에이전트가 설명을 읽고 선택하기 때문에 그 단어들이 정말 중요합니다.

## Step 3 · Copilot connectors: index first, then answer

[calm] 첫 번째 지식 경로는 Copilot 커넥터로, 예전에는 Microsoft Graph 커넥터라고 불렸습니다.
[600ms]
[confident] 테넌트 관리자는 비Microsoft 시스템을 연결하고, 그 콘텐츠가 Microsoft Graph에 인덱싱됩니다. 에이전트는 그 시스템에서 답변하고, 인용하며, 각 사람의 접근 권한을 존중할 수 있습니다.
[600ms]
[serious] 관리자가 먼저 설정하기 때문에, 지식 추가 대화상자에 나오는 것은 이후에야 나타납니다.

## Step 4 · Power Platform connectors: ask the live system

[curious] 이 경로는 다릅니다. 아무것도 복사되지 않기 때문입니다. 미리보기이자 실시간 옵션입니다.
[600ms]
[confident] Copilot Studio 테이블 이름과 열명만 인덱싱합니다. 그 후 각 질문은 사용자의 로그인 기능을 사용해 실시간 시스템에 실행됩니다.
[600ms]
[calm] 커넥터 도구와 동일한 연결 및 데이터 정책을 재사용하며, Salesforce, ServiceNow, Azure SQL, SAP, Dataverse같은 시스템과 연동됩니다.

## Step 5 · Azure AI Search: bring your own index

[calm] 여기서는 자신만의 인덱스를 가져옵니다. 벡터 인덱스를 Azure 로 준비하고 데이터 연결을 통해 추가합니다.
[600ms]
[confident] 지식 소스마다 하나의 인덱스가 주어지고, 인덱스에 URL 필드가 있으면 인용문을 반환할 수 있습니다.
[600ms]
[reassuring] 가져오기 및 벡터화 마법사를 사용해 같은 임베딩 모델이 질문에 임베딩되도록 하세요. 프라이빗 엔드포인트도 지원합니다.

## Step 6 · Connector tools: prebuilt or custom

[calm] 이제 우리는 읽기에서 연기로 넘어갑니다. 커넥터가 REST API를 감싸서 에이전트가 호출할 수 있게 합니다.
[600ms]
[curious] 그런데 Contoso의 리턴스 API에 미리 만들어진 커넥터가 없다면 어떻게 될까요? 그다음에는 팀이 이미 만든 커스텀 커넥터를 추가하면 됩니다.
[600ms]
[reassuring] 기본적으로 도구는 각 사용자의 연결로 실행되기 때문에, 사람들은 허용된 일만 합니다.

## Step 7 · REST API tool: an OpenAPI file becomes tools

[curious] 아예 커넥터가 없고 OpenAPI 파일만 있을 수도 있습니다. 이 미리보기 경로는 그 파일을 도구로 변환합니다.
[600ms]
[confident] 명세서를 업로드하고, 명확한 설명을 작성하고, 아무것도 선택하지 않고, 인증용 API 키나 OAuth를 사용하며, 원하는 엔드포인트만 유지합니다. 각 엔드포인트는 하나의 도구가 됩니다.
[600ms]
[serious] 그 설명이 오케스트레이터가 언제 도구를 호출할지 결정할 때 읽는 것이므로, 사람들이 실제로 사용하는 동의어를 추가하세요.

## Step 8 · MCP: connect once, choose the tools

[curious] MCP 서버는 이름, 설명, 입력 기능을 가진 자체 도구와 리소스을 게시합니다.
[600ms]
[confident] 마법사로 한 번 추가하고, 에이전트가 사용하지 말고 싶은 도구는 꺼버립니다. 서버가 변경되면 에이전트가 업데이트를 확인합니다.
[600ms]
[calm] 생성 오케스트레이션은 켜져 있어야 하며, 프롬프트는 아직 지원되지 않습니다. 리소스은 도구가 반환할 때만 사용 가능해집니다.

## Step 9 · Computer use: when there is no API

[curious] 만약 커넥터도 없고, API도 없으며, MCP 서버도 없다면? 그럴 때 컴퓨터 사용이 필요합니다.
[600ms]
[impressed] 에이전트는 Windows 화면을 보고 무엇을 할지 결정한 뒤, 사람처럼 클릭하고 타이핑합니다. 비전과 추론 모델은 화면이 바뀔 때 대처하는 데 도움을 줍니다.
[600ms]
[calm] Windows 기계와 생성 조정이 필요하며, 각 단계마다 Copilot Credits사용됩니다. 호스팅된 기계는 프로토타입에 적합하며; 프로덕션에서는 직접 사용하세요.

## Step 10 · Computer use: set guardrails, watch every run

[serious] 화면을 클릭하는 에이전트는 가드레일이 필요합니다. 전용 컴퓨터에서 실행하고 허용 목록으로 접근할 수 있는 범위를 제한하세요.
[600ms]
[concerned] 확실하지 않을 때는 누군가가 개입하게 하되, 그것만으로는 의존하지 마세요. 감독은 확률적이며, 허용 목록이 모델이 사이트를 개설하는 것을 막지 않습니다.
[600ms]
[reassuring] 그 후 모든 런을 Activity에서 검토하고, 녹취록과 세션 리플레이를 첨부하세요. 런 로그는 Dataverse 로 보내져 7일간 보관됩니다.

## Step 11 · Which route should I pick?

[calm] 기술이 아니라 에이전트가 필요로 하는 것부터 시작하세요. 필요를 정하면 경로, 언제 선택해야 할지, 주의해야 할 점들을 알 수 있습니다.
[600ms]
[confident] 경험 법칙은 간단합니다. 지식 자료를 사용해 읽으세요.
[600ms]
[determined] 커넥터, REST API 또는 MCP 서버를 사용해 서비스를 호출하세요. 그리고 다른 아무것도 연결할 수 없을 때만 컴퓨터 사용을 선택하세요.

## Step 12 · Knowledge and tools: all in one

[calm] 정리해 보겠습니다. 지식으로 읽고, 도구로 행동합니다.
[600ms]
[confident] 가장 가벼운 방법을 선택하고, 가장 무거운 컴퓨터 사용을 감독하세요.
[600ms]
[proud] 시험에서는 A B 620, Copilot Studio내 에이전트 통합 및 확장 비율이 40%에서 45%입니다. 이 경로들은 지식 소스 연결과 도구 추가를 포함합니다.
