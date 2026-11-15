# Narrator Script — Foundry · Multi-Agent Orchestration

**Source animation:** [MultiAgentOrchestration.html](../../../../journeys/AI/Foundry/MultiAgentOrchestration.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/agent-framework/workflows/orchestrations/>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>
- <https://learn.microsoft.com/agent-framework/workflows/human-in-the-loop>

---

## Step 1 · One agent, too many hats

[calm] Contoso Retail에서는 Helper라는 상담원이 주문, 정책, 환불, 이메일 등 모든 반품 관련 문의를 혼자 처리합니다.
[600ms]
[concerned] 즉, 하나의 프롬프트, 하나의 도구 더미, 그리고 하나의 점점 커지는 맥락이 필요하다는 뜻입니다.
[600ms]
[reflective] 모자가 많을수록 신뢰성을 유지하기가 더 어려워집니다.

## Step 2 · Three reasons to split the job

[curious] 해결책은 각 에이전트에게 하나의 작업을 부여하고, 집중된 프롬프트와 필요한 도구, 그리고 사용하는 맥락만 주는 것입니다.
[600ms]
[calm] 모델의 크기를 작업에 맞게 조절할 수도 있습니다.
[600ms]
[confident] Learn은 세 가지 이유를 꼽습니다. 전문화, 최적화, 그리고 분리된 보안 경계입니다.

## Step 3 · When one agent is enough

[calm] 무언가를 나누기 전에, 가장 간단한 효과적인 것부터 시작하세요.
[600ms]
[serious] 사다리를 오를 때마다 조정, 지연, 비용, 그리고 새로운 실패 경로가 추가됩니다.
[600ms]
[reassuring] 가장 낮은 복잡도를 사용해 요구사항을 신뢰성 있게 충족하세요.

## Step 4 · In a line, or side by side

[curious] 순차 오케스트레이션은 에이전트를 하나씩 차례로 실행하며, 각 에이전트는 이전 결과 위에 이어서 작업합니다.
[600ms]
[calm] 동시적으로 동일한 입력에 대해 에이전트를 실행한 후, 마지막 단계에서 응답을 합칩니다.
[600ms]
[confident] 두 가지 모두 Microsoft 에이전트 프레임워크에 내장되어 있습니다. 순서가 중요할 때는 순차적이고, 작업이 독립적일 때는 동시성을 사용하세요.

## Step 5 · Who decides who goes next?

[curious] 핸드오프에서는 활성 에이전트가 전체 작업을 더 적합한 동료 에이전트에게 넘기며, 중앙 관리자는 없습니다.
[600ms]
[calm] 그룹 채팅과 Magentic에서는 매니저가 다음에 누가 행동할지 결정하고, Magentic은 그 위에 기획 매니저를 추가합니다.
[600ms]
[serious] 고전적인 Connected Agents 도구는 새로운 Foundry 에이전트 서비스에서는 제공되지 않으니, 워크플로우, 에이전트 프레임워크, 또는 A2A 도구를 사용하세요.

## Step 6 · How agents pass context

[curious] 각 에이전트는 자신만의 논리와 도구 결과를 추가합니다. 모든 것을 전달하면 맥락이 확장됩니다.
[600ms]
[calm] 요약만 통과하면 간결한 상태를 유지합니다. 여기 표시된 막대 크기는 단지 설명일 뿐입니다.
[600ms]
[reflective] 기본적으로 시퀀스 내 각 에이전트는 이전 에이전트의 전체 대화를 소비하지만, 응답만 전달할 수 있습니다. 워크플로우는 공유 상태 기능도 제공합니다.

## Step 7 · Tools: the agent asks, your code acts

[curious] 함수 호출에서는 에이전트가 1842차 순서의 get order 함수를 요청합니다.
[600ms]
[calm] 코드가 함수를 실행하고 결과를 반환합니다.
[600ms]
[confident] 에이전트는 그 결과를 사용해 답변을 마무리합니다. 에이전트는 요청만 하고, 실제로 실행하는 것은 여러분의 코드입니다.

## Step 8 · Sensitive tools pause for a human

[serious] 위험한 도구를 승인 필수로 표시하세요. 에이전트가 호출하면 작업이 멈춥니다.
[600ms]
[calm] 요청은 도구와 그 인수들을 보여주고, 그 사람이 결정합니다.
[600ms]
[concerned] Foundry의 시각적 워크플로우 빌더는 미리보기 단계이며 2026년 12월 1일에 은퇴하므로, 새로운 빌드는 Microsoft Agent Framework를 사용해야 합니다.

## Step 9 · You are the approver

[curious] 이제 여러분 차례입니다. 환불 에이전트가 주문 1842번에 대해 240달러를 환불하려 하며, 실행이 일시 중지되었습니다.
[600ms]
[calm] 승인 또는 거부를 선택하고 워크플로우 분기를 지켜보세요.
[600ms]
[encouraging] 그다음 다른 선택지를 시도해 보세요. 두 경로를 모두 볼 수 있게 하세요.

## Step 10 · Read the whole run as a trace

[calm] 트레이스는 실행의 각 단계를 순서대로 기록합니다. 모델 호출, 도구 호출, 토큰, 시간입니다.
[600ms]
[curious] 팀에서는 어떤 요원이 무엇을 했고, 어디서 잘못됐는지 보여줍니다.
[600ms]
[reassuring] Foundry 추적을 Application Insights에 저장하며, 추적은 일반적으로 신속 및 호스팅 에이전트에 적합합니다.

## Step 11 · Where teams go wrong, and the guardrails

[serious] 에이전트가 많아질수록 실패할 수 있는 방법이 더 많아집니다. 그러니 먼저 실패의 이름이 붙이고, 그 다음에 그것을 포착하는 컨트롤을 추가하세요.
[600ms]
[calm] 인간 같은 백업 수단으로 반복 횟수 제한을 설정하고, 그룹 채팅은 3명 이하로 유지하며, 에이전트당 토큰 수를 모니터링하세요.
[600ms]
[confident] 작업을 따라 모델을 할당하고, 다음 에이전트가 사용하기 전에 각 출력물을 검증하세요.

## Step 12 · Multi-agent orchestration at a glance

[calm] 작은 에이전트 팀이 나누어 맡는 하나의 작업이며, 각 에이전트는 한 가지에 집중합니다.
[600ms]
[reassuring] 중요한 곳에는 사람이 개입하고, 무슨 일이 있었는지 보여 주는 트레이스가 있습니다.
[600ms]
[proud] 이렇게 해서 헬퍼는 정말 믿을 수 있는 팀이 되었습니다.
