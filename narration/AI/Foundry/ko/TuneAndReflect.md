# Narrator Script — Foundry · Tune the Model: Parameters, Reflection and Hybrid Flows

**Source animation:** [TuneAndReflect.html](../../../../journeys/AI/Foundry/TuneAndReflect.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>

---

## Step 1 · Same prompt, different run: what a parameter changes

[curious] 모델은 가능성 높은 후보들 중에서 다음 단어를 하나씩 고릅니다. 그래서 같은 프롬프트로도 실행할 때마다 결과가 달라질 수 있습니다.
[600ms]
[calm] 매개변수는 그 선택 방식을 조절하는 설정입니다. 아래의 다섯 가지 이름은 요청과 함께 실제로 보내는 설정입니다.
[600ms]
[reassuring] 여기 나오는 Contoso 아웃피터스의 태그라인은 예시일 뿐입니다. 실제 모델의 출력은 실행할 때마다 다르니까요.

## Step 2 · Temperature and top_p: spread versus focus

[calm] 온도는 다음 단어가 나올 확률을 바꿉니다. 낮으면 한쪽으로 모이고, 높으면 더 다양해집니다.
[600ms]
[curious] Top P는 가능성이 낮은 단어를 잘라 냅니다.
[600ms]
[serious] 둘 중 하나만 바꾸세요. 둘 다 바꾸면 안 됩니다. 여기 나오는 백분율은 고정된 점수로 계산한 예시이고, 실제 모델에서 측정한 값은 아닙니다.

## Step 3 · Max tokens and stop sequences: length and cost

[calm] 최대 토큰은 모델이 쓸 수 있는 분량의 상한을 정하고, 중지 시퀀스는 어디서 멈출지 알려 줍니다.
[600ms]
[confident] 두 설정이 함께 길이를, 그리고 길이에 따른 비용을 조절합니다.
[600ms]
[concerned] 하지만 상한이 너무 작으면 답이 중간에 끊깁니다. 여기서는 칩 하나가 토큰 하나를 나타내지만, 실제 토큰은 단어의 일부인 경우가 많습니다.

## Step 4 · Reasoning models: effort instead of temperature

[curious] 대부분의 추론 모델은 온도나 Top P를 받지 않습니다. 대신 추론 노력 수준으로 얼마나 깊이 생각할지를 정합니다.
[600ms]
[serious] 생각하는 과정도 출력 토큰으로 계산됩니다. 추론 모델에서는 상한이 추론과 눈에 보이는 출력을 모두 포함합니다.
[600ms]
[calm] 지원하는 노력 수준은 모델마다 다르고, 이 막대들은 예시입니다.

## Step 5 · Think step by step: when it helps, when it does not

[calm] 일반 모델에게 풀이 과정을 보여 달라고 하면, 답을 확인하기가 쉬워집니다.
[600ms]
[curious] 추론 모델은 이미 먼저 생각하니, 단계가 아니라 목표를 알려 주세요.
[600ms]
[confident] 추론 모델의 생각을 보려면 추론 요약 매개변수를 쓰세요. 그 밖의 방법으로 꺼내는 건 지원하지 않습니다.

## Step 6 · Self-critique: draft, critique, revise

[curious] 만드는 쪽이 초안을 쓰면, 검토하는 쪽이 분명한 기준에 따라 초안을 확인하고, 만드는 쪽이 다시 고칩니다.
[600ms]
[confident] 검토하는 쪽이 승인하거나 반복 한도에 닿으면 루프가 끝납니다. 리플렉션 루프나 크리틱 루프라고도 부릅니다.
[600ms]
[serious] 이 방식에는 분명한 승인 기준과 반복 횟수 한도, 그리고 사람 검토자 같은 대비책이 필요합니다.

## Step 7 · Grade the reasoning: chain-of-thought evaluators

[curious] L L M 판정기로 단계를 채점할 수도 있습니다. 추론 과정을 읽고 점수와 통과 또는 실패 레이블, 그리고 그 이유를 돌려줍니다.
[600ms]
[calm] 그 이유를 읽고 바로 조치할 수 있습니다. 이 결과 카드는 Foundry 평가기가 돌려주는 필드를 보여 줍니다.
[600ms]
[serious] Task Adherence는 미리 보기 상태입니다. 판정기도 결국 모델 호출이라서, 검사할 때마다 추론 비용이 듭니다.

## Step 8 · Try it: change one parameter, watch the answer

[excited] 이제 직접 해 보세요. 설정을 하나씩 바꿔 가면서 무엇이 달라지는지 보세요. 표현과 길이, 그리고 답이 끝나는 지점이 바뀝니다.
[600ms]
[amused] 이건 실제 모델이 아니라 미리 짜 놓은 데모라서, 답변도 미리 써 둔 것입니다.
[600ms]
[encouraging] 설정을 하나씩 따로 바꿔 보고, 그다음 두 개를 함께 바꿔 보세요.

## Step 9 · Hybrid flow: rules first, model for the gray area

[calm] 분명한 경우는 코드에 정해 둔 규칙을 따릅니다. 빠르고, 저렴하고, 결과도 예측할 수 있습니다.
[600ms]
[curious] 애매한 영역만 모델에 맡기고, 결과는 사람이 확인할 수 있습니다. 단계마다 누가 결정할지 정하는 겁니다. 모델이 할지, 일반 코드가 할지, 사람이 할지요.
[600ms]
[confident] 단계가 분명하고 규칙이 엄격하다면, 일반 코드가 더 빠르고 저렴하고 믿을 만합니다.

## Step 10 · Route by task: small first, big on escalation

[calm] 모든 요청에 가장 큰 모델이 필요한 건 아닙니다. 라우터는 쉬운 작업은 작은 모델에, 어려운 작업은 큰 모델에 보냅니다.
[600ms]
[curious] 모델 라우터는 요청마다 복잡도와 추론 필요성, 작업 유형을 보고 모델을 고릅니다.
[600ms]
[confident] 에스컬레이트 화살표는 제품 설정이 아니라 여러분이 직접 만드는 라우팅 로직입니다. 작은 모델이 확신하지 못할 때 쓰세요.

## Step 11 · Tuning at a glance

[calm] 습관 세 가지입니다. 설정을 조정하고, 출력을 확인하고, 모델과 규칙을 함께 쓰세요.
[600ms]
[reflective] A I 103의 이 부분이 요구하는 것이 바로 이것입니다. 모든 항목이 방금 본 단계 하나하나에 대응합니다.
[600ms]
[proud] 목표 문구는 학습 가이드에서 가져온 것이니, 현재 버전은 꼭 확인하세요.
