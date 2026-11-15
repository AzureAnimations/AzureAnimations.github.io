# Narrator Script — Copilot Studio · Copilot Studio — Multi-Agent Solutions

**Source animation:** [MultiAgentSolutions.html](../../../journeys/CopilotStudio/MultiAgentSolutions.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents>
- <https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns>
- <https://learn.microsoft.com/training/courses/ab-620t00>

---

## Step 1 · One agent, too many choices

[curious] Contoso Support에는 도구, 토픽, 다른 에이전트가 계속 늘어납니다. 그때는 하나하나가 좋은 생각처럼 보였습니다.
[600ms]
[concerned] 어느 시점이 지나면 오케스트레이터가 알맞은 것을 고르기가 쉬워지기는커녕 더 어려워집니다.
[600ms]
[serious] Microsoft Learn의 경험 법칙은 라우팅이 약 30개에서 40개 이상의 선택지를 넘어서, 또는 설명이 비슷할 때 더 빨리 감소할 수 있다는 것입니다.

## Step 2 · When to split into more agents

[calm] 한 명의 에이전트로 시작하세요. 그게 가장 간단한 방법입니다.
[600ms]
[confident] 명확한 필요가 있을 때만 분할하세요. 추가 에이전트가 홉을 추가해 달리거나 거버넌트할 수 있으니까요.
[600ms]
[reflective] Learn의 조언은 먼저 이름과 설명을 검토하라는 것입니다. 분할은 지연을 늘리고 테스트, 관리, 거버넌스 범위를 넓힙니다.

## Step 3 · Child agent or connected agent?

[curious] 분할할 때 두 가지 선택지가 있습니다. 부모 측은 생성 오케스트레이션을 통해 두 가지 모두를 호출합니다.
[600ms]
[confident] 차일드 에이전트는 경량이며, 에이전트 내부에 존재합니다. 연결된 에이전트는 별도의 에이전트로, 자체 오케스트레이션, 도구, 지식을 가지고 있습니다.
[600ms]
[reassuring] 독립성도 차이가 있고, 두 개를 한 용액에 섞을 수도 있습니다.

## Step 4 · Child agents and existing agents

[calm] 여기서 부모는 그 안에 거주하는 자식 에이전트에게 위임합니다.
[600ms]
[confident] 또한 다른 팀이 구축한 기존 Copilot Studio 에이전트에 위임할 수도 있습니다. 그 에이전트는 같은 환경에 있어야 하고, 게시되어 있으며, 연결이 허용되어야 합니다.
[600ms]
[encouraging] 부모 에이전트 페이지에서 추가한 후, 설명을 명확히 해서 라우팅이 제대로 작동하도록 하세요.

## Step 5 · Integrate a Foundry agent

[curious] 이제 Microsoft Foundry 내장된 요원이 팀에 합류했습니다. 이 영상은 미리보기입니다.
[600ms]
[confident] 프로젝트 엔드포인트와 에이전트 ID를 Copilot Studio 주고, 부모가 언제 호출해야 하는지 설명하세요.
[600ms]
[serious] Foundry 에이전트는 활동 프로토콜 엔드포인트를 활성화해야 하며, 새로운 Foundry 포털에 구축되어야 합니다.

## Step 6 · Integrate a Fabric data agent

[curious] 패브릭 데이터 에이전트가 귀하의 패브릭 데이터를 기반으로 응답합니다. 이 연결도 미리보기 중입니다.
[600ms]
[confident] 액세스할 수 있는 에이전트 중에서 선택한 다음, 그 에이전트가 무엇을 아는지 설명하세요. 그러면 부모 에이전트가 질문을 그쪽으로 라우팅할 수 있습니다.
[600ms]
[serious] 아직 지원되지 않는 기능들도 있는데, 예를 들어 주제에서 리디렉션하거나 명령어에 이름을 붙이는 것처럼요. 생성 오케스트레이션은 여전히 이를 호출할 수 있습니다.

## Step 7 · A2A: agents talking to agents

[curious] Agent2Agent또는 A2A는 다른 프레임워크에 기반한 에이전트라도 작업을 맡기는 개방형 표준입니다.
[600ms]
[confident] 이미 A2A통신을 하는 에이전트, 예를 들어 외부 프레임워크 등에 Copilot Studio사용하세요.
[600ms]
[reflective] MCP 플러그인 도구를 사용하세요. 도구와 리소스는 MCP 서버를 사용하고, 일반 API는 커스텀 커넥터나 HTTP 도구를 사용하세요.

## Step 8 · Trace one request across the team

[curious] 고객 메시지 한 명을 팀을 통해 따라가세요. 두 명의 전문가가 작업하고, 한 명이 답장을 받습니다.
[600ms]
[confident] 각 홉을 선택해서 그곳에서 무슨 일이 일어나고 무엇을 주의해야 하는지 확인하세요.
[600ms]
[encouraging] 가상의 시나리오이며, 발표자 보기에서는 각 홉이 자동으로 차례대로 진행됩니다.

## Step 9 · Ground answers with Azure AI Search

[calm] 문서를 Azure AI Search에서 한 번만 인덱싱하세요.
[600ms]
[confident] Copilot Studio 생성 답변에 그 인덱스를 사용하며, Foundry 에이전트도 동일한 인덱스를 사용할 수 있습니다.
[600ms]
[reflective] 적절한 연결을 통해 지식을 추가하고, 벡터 인덱스 하나를 명명하세요. 인용을 보여주려면 인덱스에 문서 URL를 담는 필드가 필요합니다.

## Step 10 · Custom prompts on Foundry models

[curious] 프롬프트 도구는 기본 모델뿐만 아니라 선택한 모델에서도 실행할 수 있습니다.
[600ms]
[confident] Foundry에 배포된 모델을 연결한 후, 그 프롬프트를 도구나 주제 내에서 활용하세요.
[600ms]
[serious] 배포 이름과 기본 모델 이름을 Foundry 표시된 대로 입력하고, 채팅 완료 엔드포인트를 사용하세요.

## Step 11 · Monitor agents with Application Insights

[calm] 팀이 실행되면 꼭 지켜봐야 할 거예요. 연결 문자열을 에이전트 설정에 붙여넣으세요.
[600ms]
[confident] 무엇을 기록할지 선택한 후, Azure에서 Kusto로 텔레메트리를 쿼리하세요.
[600ms]
[encouraging] 테스트 캔버스 채팅도 기록되어 있으니 디자인 모드 커스텀 차원으로 필터링하세요. 미리보기에는 대시보드 뷰가 지연 시간, 도구 사용 및 예외를 차트로 표시합니다.

## Step 12 · Multi-Agent Solutions — All in One

[calm] 팀을 설계하고, 전문가들을 연결하며, Azure에 단단히 붙잡아 두고, 그들이 뛰는 모습을 지켜보세요.
[600ms]
[confident] A B 620 도메인의 네 개 스킬 그룹 중 두 개, 에이전트 통합과 확장 그룹이 있습니다.
[600ms]
[determined] 기술은 시간이 지남에 따라 업데이트되니 실시간 학습 가이드를 읽어보세요. 시험에는 공통 미리보기 기능이 포함될 수 있으며, Foundry와 Fabric 연결도 오늘 미리보기에 나와 있습니다.
