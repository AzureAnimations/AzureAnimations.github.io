# Narrator Script — Build and extend an AI agent

**Source animation:** [BuildAndExtendAgents.html](../../../journeys/lab-guide/AgentLab/BuildAndExtendAgents.html)
**Language:** ko

Delivery cues and pause positions follow the English script; cues are not spoken.
Localized narration prepared for a later localization and recording pass; the animation currently offers English only.

Sources: [Companion lab](https://ivorb.github.io/mslearn-ai-agents/Instructions/Exercises/A-build-and-extend-ai-agents.html), [Foundry agents](https://learn.microsoft.com/azure/ai-foundry/agents/overview), [Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

---
## Step 1 · The problem

[curious] Tailwind Traders에는 이미 언어 모델이 있습니다. 하지만 실질적으로 도움을 주는 어시스턴트는 아직 없습니다.

[500ms]

텐트 반품 규정을 물으면 삼십 일, 구십 일, 영수증 불필요 같은 답이 바로 나옵니다. 유창하고 자신 있어 보이지만, 모두 근거 없이 만들어 낸 내용입니다.

[700ms]

[calm] 모델이 고장 난 것은 아닙니다. 매장 규정을 읽어 본 적이 없어 그럴듯한 말로 빈틈을 채우는 것입니다. 이번 실습에서는 이 문제를 해결합니다.

## Step 2 · Lab at a glance

[confident] 여섯 가지 작업으로 어시스턴트 하나를 만듭니다.

[400ms]

핵심 작업은 두 가지입니다. 포털에서 에이전트를 만들고 문서로 답변의 근거를 마련한 뒤, 원격 MCP 서버에 연결합니다. 예상 소요 시간은 약 삼십오 분입니다.

[600ms]

나머지 네 가지는 선택 사항입니다. 앱에서 호출하고, 직접 작성한 Python 코드를 연결하고, 도구 서버를 만들고, 호스팅된 에이전트로 배포합니다.

[500ms]

[encouraging] 시간에 맞춰 핵심 작업만 하거나, 권장 작업 두 가지를 더하거나, 전체를 진행하세요.

## Step 3 · The blueprint

[calm] 첫 작업을 시작하기 전에 만들려는 시스템의 구성을 살펴보겠습니다.

[400ms]

에이전트는 네 요소로 구성됩니다. 역할을 정하는 지침, 직접 제공한 문서의 지식, 외부에 접근하는 도구, 그리고 사용자가 대화하는 클라이언트 앱입니다.

[700ms]

[confident] 각 실습 작업은 이 중 한 요소를 추가하거나 확장합니다. 이 구성을 기억하며 나머지 부분을 채워 나가세요.

## Step 4 · How the pieces fit together

[confident] 이번에는 각 요소가 어디에서 동작하는지 확인하겠습니다.

[400ms]

채팅 화면, 클라이언트, 함수, 직접 만든 서버는 로컬 환경에서 실행됩니다. 에이전트와 지식, 도구 정의는 Microsoft Foundry에 있고, 문서와 Learn 문서 서버는 외부에 있습니다.

[600ms]

[calm] 배지는 해당 요소를 만드는 작업을 나타냅니다. 작업을 선택하면 요소가 추가되고 다시 선택하면 사라지므로, 작업별 변경점을 비교할 수 있습니다.

## Step 5 · Explore each task

[encouraging] 작업 하나를 선택하고 내용을 살펴보세요.

[400ms]

각 패널은 무엇을 만드는지, 완료 후 무엇을 할 수 있는지, 그리고 자주 겪는 실수를 보여줍니다.

[600ms]

[calm] 핵심 작업은 채워진 버튼이고 선택 작업은 테두리 버튼입니다. 모든 작업은 같은 폴더에서 독립적으로 시작하므로 자신에게 맞는 순서로 진행하세요.

## Step 6 · One assistant, six tasks

[confident] 여섯 가지 작업을 마치면 어시스턴트의 구성 요소가 모두 갖춰집니다.

[500ms]

핵심 작업 두 가지를 통해 문서를 근거로 답하고 외부 도구를 호출하는 에이전트를 만들었습니다.

[600ms]

선택 작업 네 가지에서는 직접 만든 앱, Python 코드, MCP 서버를 연결해 Foundry가 관리하는 컨테이너에서 실행합니다.

[700ms]

[warm] 지식은 답변의 정확성을 높이고, 도구는 수행할 수 있는 일을 넓혀 줍니다. 이제 직접 만들어 보세요.
