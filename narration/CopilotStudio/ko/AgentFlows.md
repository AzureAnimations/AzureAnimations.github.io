# Narrator Script — Copilot Studio · Copilot Studio: Agent Flows

**Source animation:** [AgentFlows.html](../../../journeys/CopilotStudio/AgentFlows.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/flows-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create>
- <https://learn.microsoft.com/microsoft-copilot-studio/flows-request-for-information>
- <https://learn.microsoft.com/microsoft-copilot-studio/flow-manage-monitor>

---

## Step 1 · A refund can’t be improvised

[curious] Contoso Support 채팅을 잘 해요. 하지만 환불은 단순한 채팅이 아니라 규칙이 있는 과정이에요.
[600ms]
[serious] 매번 같은 순서로, 같은 단계를 따라야 합니다.
[600ms]
[concerned] 즉흥적으로 처리하게 두면 환불 요청 하나가 여러 갈래로 흘러갈 수 있고, 이는 위험합니다.

## Step 2 · Agent flow or topic?

[calm] 두 경우 모두 결정론적이므로 같은 입력이 항상 같은 출력을 냅니다.
[600ms]
[confident] 대화를 위한 주제가 만들어집니다. 에이전트 플로우는 그 뒤에서 진행되는 비즈니스 프로세스를 위해 만들어집니다.
[600ms]
[reflective] 좋은 경험칙: 작업이 사용자와 대화하는 것이라면 주제를 사용하세요. 단계, 시스템, 사람이라면 에이전트 플로우를 구축하세요.

## Step 3 · Create the flow

[calm] 일상 언어로 플로우를 설명할 수도 있고, 디자이너에서 직접 만들 수도 있습니다.
[600ms]
[confident] 에이전트가 호출할 수 있는 플로우는 트리거로 시작하여 에이전트에 응답하는 것으로 끝납니다.
[600ms]
[encouraging] 에이전트의 도구 페이지에서 생성하면 트리거와 응답 액션이 자동으로 추가되어 Copilot Studio 있습니다.

## Step 4 · Inputs in, outputs out

[curious] 트리거는 입력 매개변수를, 응답 동작은 출력 매개변수를 전달합니다.
[600ms]
[confident] 에이전트는 입력을 채우고, 흐름이 반응하면 출력을 읽습니다.
[600ms]
[serious] 나중에 매개변수를 변경하면 에이전트에서 플로우를 새로고침하고 다시 게시하세요. 스키마 불일치는 잘못된 요청 오류의 흔한 원인입니다.

## Step 5 · Configure actions and connectors

[calm] 트리거와 응답 사이에는 작업을 담는 레인이 있으며, 작업은 네 가지 계열에서 가져옵니다.
[600ms]
[confident] 커넥터 작업은 연결을 사용하여 통신 대상 서비스에 접근합니다.
[600ms]
[encouraging] 에이전트 플로우는 프리미엄 플로우이므로, 프리미엄 커넥터도 Microsoft 365, 서드파티, 맞춤 제품이든 모두 작동합니다.

## Step 6 · Hand the flow to the agent

[confident] 흐름이 네 가지 요구사항을 충족하면 게시하세요. 그 다음 에이전트의 도구 페이지에서 추가하세요.
[600ms]
[curious] 설명이 중요한데, 오케스트레이터가 이를 보고 언제 호출할지 판단하기 때문입니다.
[600ms]
[calm] 에이전트 레벨에서 오케스트레이터가 직접 호출할 수 있도록 추가할 수도 있고, 한 주제 내에서 액션 노드로 추가할 수도 있습니다.

## Step 7 · Ask a human, then carry on

[curious] 때로는 정답이 사람일 때도 있습니다. 인간이 개입하는 행동, 즉 승인이나 정보 요청이 흐름을 멈추게 합니다.
[600ms]
[confident] 누군가에게 물어보고, 그 답변을 받아 다시 이어서 실행합니다.
[600ms]
[reflective] 에이전트는 응답 작업만 기다리므로, 사람을 오래 기다리는 단계는 그 뒤에 두세요. 그곳에 둔 작업은 30일의 플로우 실행 제한까지 계속 실행될 수 있습니다.

## Step 8 · When a step fails

[concerned] 실패하는 일도 있습니다. 타임아웃이 발생하고, 데이터가 나쁘며, 심사자가 답변을 하지 않을 때도 있습니다.
[600ms]
[confident] 경고 아이콘을 선택해 각 경우마다 흐름이 어떻게 반응하는지 확인하세요.
[600ms]
[reassuring] 패턴은 주요 단계를 Try 스코프에 그룹화하고, Try가 실패할 때 실행되는 Catch 스코프에 리커버리를 넣는 것입니다.

## Step 9 · Watch every run

[calm] 모든 에이전트 플로우에는 개요, 활동 이력, 분석 뷰가 있습니다.
[600ms]
[confident] 이 둘이 함께 고장을 수정하고 실행 전반의 추세를 파악하는 데 도움을 줍니다.
[600ms]
[reflective] 분석 작업은 새로운 실행 결과를 보여주는 데 최대 30분이 걸릴 수 있다는 점을 기억하세요. 그리고 분석 분석은 솔루션 흐름에만 해당됩니다.

## Step 10 · Agent flows: All in One

[calm] 정리해 보겠습니다. 결정론적 단계들은 매번 과정을 동일하게 유지합니다.
[600ms]
[confident] 필요할 때 누군가가 개입하고, 실패를 계획하며, 모든 런을 볼 수 있습니다.
[600ms]
[proud] 이 여섯 가지 기술은 A B 620 학습 가이드에 있는 에이전트 플로우 생성 및 모니터링 목표입니다.
