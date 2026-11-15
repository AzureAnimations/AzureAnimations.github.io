# Narrator Script — Foundry · Prompt Engineering: Instructions a Model Follows

**Source animation:** [PromptEngineering.html](../../../../journeys/AI/Foundry/PromptEngineering.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/advanced-prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/system-message>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/safety-system-message-templates>

---

## Step 1 · Same model, very different answers

[curious] 모델은 앞에 있는 단어들에서 계속 이어집니다.
[600ms]
[calm] Contoso Outfitters에는 도움말 봇이 있는데, 누군가가 모호한 프롬프트를 줍니다.
[600ms]
[concerned] 그래서 빈틈을 추측으로 채우고, 같은 모델이 매우 다른 답을 내놓습니다.

## Step 2 · Two prompts, two authors

[calm] 개발자는 규칙을 설정하기 위해 시스템 프롬프트를 한 번 작성합니다.
[600ms]
[curious] 고객은 매 턴마다 사용자 프롬프트를 입력하고, 모델은 두 가지 모두를 읽습니다.
[600ms]
[confident] 채팅 모델은 각 메시지가 역할을 가진 목록을 받습니다. 시스템 메시지가 먼저 나오며 가장 높은 우선순위 명령을 담고 있습니다.

## Step 3 · What a good system message contains

[calm] 다섯 가지 작은 요소가 대부분의 일을 합니다. 역할과 작업, 대상과 어조, 범위와 경계, 출력 형식, 그리고 안전 규칙입니다.
[600ms]
[confident] 각 부분을 구체적으로 유지하세요.
[600ms]
[serious] 서로 모순되지 않도록 하고, 봇이 확신이 없을 때 대비책을 포함하세요.

## Step 4 · Show it, don’t just tell it

[curious] 제로 샷은 모델에 과제만 부여합니다. 퓨샷은 몇 가지 예제 질문과 답변 쌍을 추가합니다.
[600ms]
[calm] 모델은 그 예시들의 패턴을 따라 하기 때문에 응답의 톤과 형태가 훨씬 예측 가능해집니다.
[600ms]
[reassuring] 예시가 모델을 바꾸는 것은 아닙니다. 이 요청은 단 한 가지 요청만 조율합니다.

## Step 5 · Give it the facts to use

[serious] 모델은 사실이 부족할 때 추측합니다.
[600ms]
[confident] 그래서 프롬프트에 올바른 정책을 넣고, 모델이 그 정책에서만 답변하라고 지시하세요. 이것이 바로 현실입니다: 답은 모델의 기억이 아니라 당신의 데이터에서 나옵니다.
[600ms]
[calm] 그리고 출처에 답이 없을 때 어떻게 할지도 알려 주세요.

## Step 6 · Ask for the shape your app needs

[curious] 코드는 친근한 단락을 파싱할 수 없습니다. 그래서 이름 붙인 필드가 있는 JSON 같은 고정된 형식을 요청하고, 작고 안정적으로 유지하세요.
[600ms]
[calm] 평범한 지시는 정중하게 부탁합니다.
[600ms]
[confident] 확실한 보장을 위해 Foundry는 구조화된 출력을 지원합니다. JSON 스키마를 제공하면 답변이 그 스키마를 따릅니다.

## Step 7 · Try it: switch the parts on and off

[excited] 이제 여러분 차례입니다. 같은 모델, 같은 질문입니다. 프롬프트의 각 요소를 켜거나 끄면서 답변이 어떻게 바뀌는지 지켜보세요.
[600ms]
[curious] 어떤 스위치가 어떤 문제를 해결할까요?
[600ms]
[reassuring] 이것은 실제 모델이 아니라 단순화된 데모이지만, Foundry 놀이터에서 실제 체험을 해볼 수 있습니다.

## Step 8 · Test it, then tune it

[calm] 한 가지를 바꾼 뒤 같은 테스트를 다시 실행하세요.
[600ms]
[curious] 쉬운 질문, 예외 사례, 규칙 위반 시도를 섞어보세요. 프롬프트를 코드처럼 다루고, 변경 때마다 다시 실행하는 테스트 세트를 사용하세요.
[600ms]
[serious] Learn에서는 이러한 기법들이 추론 모델에 권장되지 않는다고 하니, 해당 모델의 가이드라인을 확인하세요.

## Step 9 · Untrusted text can give orders

[concerned] 이메일, 웹페이지, 파일은 모델에게는 단지 더 많은 텍스트일 뿐입니다. 그 안에 숨겨진 지시가 당신의 지시를 덮어쓰려고 시도할 수 있습니다.
[600ms]
[serious] 이것이 바로 프로프트 인젝션이며, 명령어가 문서 안에 숨어 있을 때 간접 인젝션이라고 합니다.
[600ms]
[confident] 방어 스택: 신뢰할 수 없는 텍스트를 데이터로 표시하고, 모델이 할 수 있는 행동을 제한하며, 프롬프트 쉴드와 같은 감지 기능을 추가하는 것입니다. 완벽한 것은 없습니다.

## Step 10 · A prompt is one layer, not the wall

[serious] 시스템 메시지로 봇을 유도할 수는 있지만, 작정한 사용자는 여전히 말로 이를 우회할 수 있습니다.
[600ms]
[calm] 진정한 보호는 여러 층이 함께 작용할 때 나옵니다.
[600ms]
[reassuring] 즉, 모델 선택, 그라운딩, 콘텐츠 분류기, 사용자 경험 완화 요소들, 그리고 프롬프트가 그 중 하나의 레이어입니다.

## Step 11 · Prompting at a glance

[calm] 명확한 지침을 작성하세요. 예를 보여주세요. 사실을 제공하세요. 앱에 필요한 형식을 요청하세요.
[600ms]
[determined] 끊임없이 테스트하고, 절대 프롬프트에만 의존하지 마세요.
[600ms]
[optimistic] 다음으로, 지침, 지식, 도구가 에이전트에서 어떻게 결합되는지 살펴보세요.
