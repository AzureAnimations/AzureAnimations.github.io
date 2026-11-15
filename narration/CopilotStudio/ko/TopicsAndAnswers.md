# Narrator Script — Copilot Studio · Copilot Studio — Topics & Answers

**Source animation:** [TopicsAndAnswers.html](../../../journeys/CopilotStudio/TopicsAndAnswers.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/courses/ab-620t00>
- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · A topic is a path of decisions

[calm] 고객이 말하길, 헤드셋을 반품하고 싶습니다. 주제가 그 문장을 노드 경로로 변환합니다.
[600ms]
[curious] 트리거, 질문, 도구, 생성 응답, 메시지 노드가 있으며, 각각은 단 하나의 설정만 하면 됩니다.
[600ms]
[confident] Contoso Support와 그 데이터는 허구입니다. 이 페이지는 각 노드에 대해 어떤 설정을 해야 하는지 한 주제 안에 들어가 있습니다.

## Step 2 · Variables: a named, typed box

[curious] 질문 노드가 주문 번호를 요청하면, 답변을 변수로 저장합니다. 이름을 붙이고 타이핑된 상자라고 생각하세요.
[600ms]
[calm] 이후 노드들은 메시지, 조건, 도구 입력으로 다시 읽습니다. 타입은 저장한 첫 값에서 나오고, 그 후 고정됩니다.
[600ms]
[reassuring] 또한 Set variable value 노드로 직접 값을 설정할 수도 있습니다. 그리고 기본 이름을 의미 있는 이름으로 바꿀 수도 있습니다.

## Step 3 · Scope: who can see the variable

[calm] 변수는 범위를 가지며, 누가 볼 수 있는지를 결정합니다. 네 가지 수준이 있습니다: 주제, 전역, 시스템, 환경.
[600ms]
[confident] 주제는 기본 설정으로, 해당 주제에 참여한 주제만 볼 수 있습니다. 글로벌은 세션 내내 지속되며, 주제 간 작동과 글로벌 접두사가 붙습니다.
[600ms]
[serious] 시스템 및 환경 변수는 내장되어 있으며 읽기 전용입니다. 가장 좁은 범위로 작동하세요.

## Step 4 · Pass values on, never ask twice

[curious] 아무도 같은 질문을 두 번 받는 것을 좋아하지 않습니다. 다른 주제로 방향을 돌릴 때는 이미 알고 있는 내용을 알려주세요.
[600ms]
[confident] 목적지 주제에서 변수를 다른 주제로부터 값을 받도록 설정하세요. 그 다음 리다이렉트 노드에서 입력 추가를 선택하세요.
[600ms]
[reassuring] 도구 입력과 흐름 입력도 변수 유형이 일치하는 한 동일하게 작동합니다.

## Step 5 · Flows and tools: do the work in a topic

[calm] 실제 작업은 도구와 에이전트 플로우에서 이루어집니다. 주제에서 노드 추가를 선택한 후 도구 추가를 선택하세요.
[600ms]
[confident] 이 노드는 배치한 위치에서 정확히 실행되는 액션 노드가 됩니다. 주제 수준의 도구는 그곳에서만 사용할 수 있고, 에이전트 수준의 도구는 오케스트레이터가 언제 호출할지 결정할 수 있게 합니다.
[600ms]
[serious] 도구가 되려면 흐름이 에이전트 트리거, 응답 동작, 게시, 그리고 100초 이내의 응답이 필요합니다.

## Step 6 · Generative answers: grounded in your sources

[curious] 생성 답변 노드는 선택한 지식 출처를 검색하여 인용과 함께 답변을 작성합니다.
[600ms]
[confident] 노드에 설정된 소스는 에이전트 수준의 소스를 덮어씁니다. 검색을 켜면 선택한 소스만 켜면 나머지 모든 것이 무시됩니다.
[600ms]
[calm] 대화가 해당 지점에 도달할 때 실행되고, 주제가 일치하지 않을 때는 백업 수단으로도 실행됩니다. 콘텐츠 중재는 기본적으로 '높음'으로 설정됩니다.

## Step 7 · Custom prompts: your instructions, your output

[curious] 때로는 문구를 완전히 통제하고 싶을 때가 있습니다. 맞춤형 프롬프트를 통해 직접 지시를 작성할 수 있습니다.
[600ms]
[confident] 도구를 추가하고, 새 프롬프트를 선택한 뒤 모델, 온도, 입력 및 출력 형식을 설정하세요. 텍스트는 변수로 돌아옵니다.
[600ms]
[encouraging] 샘플 데이터로 테스트해 보세요. 구체적이고 간결하게 작성하며, 질문이 답하지 못할 때는 빠져나갈 방법을 주세요.

## Step 8 · Custom knowledge: bring your own data

[calm] 콘텐츠가 지원되는 지식 소스에 없다면 어떻게 할까요? 그럼 직접 가져오면 됩니다.
[600ms]
[confident] 플로우나 HTTP 요청으로 가져오고, Content와 함께 테이블로 형태를 형성하며, 인용은 선택적으로 ContentLocation와 Title을 넣습니다. 그 후 생성 답변 노드에 전달합니다.
[600ms]
[serious] 한 가지 제한을 명심하세요: 답을 생성하는 데 처음 세 개의 레코드만 사용됩니다.

## Step 9 · HTTP request: call any API from a topic

[curious] 주제에서 직접 REST API를 호출하려면 고급 메뉴에서 요청 노드 전송 HTTP 추가하세요.
[600ms]
[confident] URL, 메서드, 헤더, 본문을 설정하면 됩니다. 샘플 JSON을 붙여넣으면 응답이 타입이 지정된 변수가 됩니다.
[600ms]
[reassuring] 기본적으로 오류가 발생하면 주제가 중단되고 On Error 주제가 트리거됩니다. 상태 코드와 오류 본문을 유지하려면 Continue on error를 선택하세요.

## Step 10 · Response formatting: shape how it reads

[calm] 메시지 노드는 작은 편집기입니다. 굵은 글, 이탤릭체, 글머리표 또는 번호 목록으로 텍스트를 포맷할 수 있습니다.
[600ms]
[curious] 변수를 삽입하고, 메시지 변형을 추가해 에이전트가 무작위로 하나를 선택하며, 이미지, 빠른 답장, 카드를 포함하세요.
[600ms]
[confident] 모든 채널에서 빠른 답장을 지원하는 것은 아닙니다. 음성 채널에서는 음성 메시지와 SSML로 텍스트를 재정의하세요.

## Step 11 · Adaptive cards: input and output in one card

[curious] 채널이 렌더링하는 적응형 카드가 JSON 됩니다. 메시지 노드에 하나 넣으면 단순히 정보를 표시합니다.
[600ms]
[confident] Ask with Adaptive Card를 사용해 입력을 수집하세요. 제출 버튼이 필요하고, 카드의 입력에서 출력 변수를 생성합니다.
[600ms]
[serious] Copilot Studio는 스키마 1.6 이하를 지원하지만, Teams는 1.5까지만 지원합니다. 모든 채널이 지원하는 버전을 선택하세요.

## Step 12 · Configure topics: all in one

[calm] 이제 전체 경로를 보세요. 시험 목록에서 아홉 가지 스킬이 한 대화에 모두 포함되고, 각각은 노드에 존재합니다.
[600ms]
[confident] 주제 구성은 시험 A B 620의 계획 및 에이전트 솔루션 구성 도메인에 속하며, 이는 30%에서 35%에 해당합니다.
[600ms]
[determined] 공식 학습 가이드에서 현재 기술 목록을 확인한 후 공식 훈련으로 계속 연습하세요.
