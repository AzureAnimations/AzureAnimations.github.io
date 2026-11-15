# Narrator Script — Foundry · Evaluate and Observe

**Source animation:** [EvaluateAndObserve.html](../../../../journeys/AI/Foundry/EvaluateAndObserve.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/concepts/observability>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/built-in-evaluators>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators>

---

## Step 1 · It looked fine in the demo

[calm] Contoso Ask Contoso이라는 지원 어시스턴트를 만들었습니다. 이 도구는 정책 문서와 주문 도구에서 주문에 답변하고 질문을 반환합니다.
[600ms]
[confident] 데모에서는 세 가지 질문을 정확히 맞췄고, 모두가 박수를 쳤습니다.
[600ms]
[concerned] 그러다 실제 고객들이 아무도 시험하지 않은 질문을 들고 왔고, 그때부터 문제가 시작되었습니다.

## Step 2 · One loop: test, ship, trace, watch

[curious] 좋은 AI 앱은 결코 완성되지 않습니다. 이 앱은 반복되는 루프 속에 있습니다: 릴리스 전에 테스트하고, 실행되는 것을 추적하고, 생산 상태를 관찰하고, 배운 것을 수정하고, 다시 테스트합니다.
[600ms]
[calm] Microsoft Foundry 평가, 추적, 모니터링 세 가지 부분을 명명합니다.
[600ms]
[confident] 이 둘이 함께 AI 앱에 대한 관측 가능성을 제공합니다.

## Step 3 · Write the test cases first

[curious] 평가 데이터셋부터 시작하세요. 한 줄에 테스트 질문 하나씩, 그리고 정답이 있는 경우 예상 답변까지 담은 파일입니다.
[600ms]
[calm] Foundry 버전을 유지해서 모든 실행이 똑같은 테스트를 사용하고, 데이터셋은 JSONL 또는 CSV 파일로 구성되어 있습니다.
[600ms]
[serious] 해피 패스뿐만 아니라 예외 사례와 공격도 세트에 넣으세요.

## Step 4 · A judge model grades the answers

[curious] 많은 품질 검사에서는 두 번째 모델을 심사위원으로 사용합니다. 이 모델은 질문, 원문, 답변을 읽고, 평가 기준에 따라 점수를 매기고, 그 이유를 설명합니다.
[600ms]
[calm] 현실감을 위해서는 심사위원으로서 자신의 모델 배포를 가져옵니다. 점수는 1부터 5까지 다양하며, 임계값이 결정되면 합격 또는 불합격으로 바뀝니다.
[600ms]
[reflective] 어떤 평가자들은 아예 모델을 사용하지 않기도 합니다. 그들은 단어 겹침만 측정합니다. 예를 들어 F1, BLEU, ROUGE같은 경우입니다.

## Step 5 · Pick the evaluator for the symptom

[calm] 각 기본 제공 품질 평가자는 한 가지를 확인합니다. 그래서 핵심은 팀이 본 증상을 그것을 잡아내는 평가자와 짝짓는 것입니다.
[600ms]
[curious] 여기에서 시도해 보세요. 불만 사항을 골라주면 적절한 평가자가 빛나게 됩니다.
[600ms]
[confident] 맞는 것이 없으면 사용자 지정 평가자를 직접 작성할 수도 있으며, 이 기능은 아직 미리 보기 상태입니다.

## Step 6 · Grade the agent’s steps, not just its words

[curious] 에이전트가 완벽하게 맞는 말을 하는 것처럼 들려도, 잘못된 도구를 고르거나 중간에 지시를 건너뛸 수 있습니다.
[600ms]
[calm] 에이전트 평가자는 실행 단계마다 의도 해결, 작업 준수, 도구 호출 정확도, 도구 출력 활용, 작업 완료 등을 살펴봅니다.
[600ms]
[serious] 의도 해결, 작업 준수, 작업 완료는 아직 미리 보기 상태라는 점을 기억하세요.

## Step 7 · Safety evaluations: what could go wrong?

[serious] 안전 평가자는 답변에서 유해한 내용, 복사된 텍스트, 문서 내에 숨겨진 탈옥 여부를 스캔합니다. 이 마지막 부분을 간접 공격(indirect attack, XPIA)이라고 합니다.
[600ms]
[calm] 결과적으로 결함률이 나옵니다: 몇 개의 답변이 플래그되었는지입니다.
[600ms]
[reassuring] Foundry 평가 서비스가 이러한 검사를 호스팅하기 때문에 판사 모델 배포가 필요하지 않습니다.

## Step 8 · Red teaming: attack it before others do

[serious] 진짜 공격자가 약점을 찾기 전에, 레드 팀 에이전트가 집요한 공격자 역할을 합니다. 수많은 프로브를 보내며, 일부는 위장되어 있습니다.
[600ms]
[calm] 그 후 얼마나 자주 작동하는지를 보고합니다. 그 숫자가 공격 성공률입니다. Microsoft의 오픈소스 툴킷인 PyRIT와 안전성 평가자 위에 구축되어 있습니다.
[600ms]
[reflective] 이 방법은 인간 검토와 함께 가장 잘 작동하며, 출시 후 예약된 스캔은 미리보기에 있습니다.

## Step 9 · Read a trace, span by span

[curious] 트레이스는 하나의 요청의 이야기이며, 각 스팬은 그 안의 한 단계입니다. 스팬을 선택해서 무엇을 알려주는지 확인해 보세요.
[600ms]
[calm] 추적은 OpenTelemetry 위에 구축되어 Application Insights에 저장됩니다. 일반적으로 프롬프트 에이전트와 호스팅 에이전트 모두에게 제공됩니다.
[600ms]
[concerned] 추적 자료는 민감한 텍스트를 담을 수 있으니, 공유하거나 저장하기 전에 반드시 삭제하세요.

## Step 10 · Monitor production: usage, speed, drift

[calm] 출시 후에는 대시보드가 토큰, 지연 시간, 오류 및 품질 점수를 추적합니다. 화면에 표시된 숫자들은 조작된 것입니다.
[600ms]
[curious] 지속적인 평가는 실시간 트래픽 샘플을 점수 매겨 불만을 기다리지 않고도 품질 변화를 감지할 수 있습니다.
[600ms]
[serious] 답변이 점점 나빠지는 Drift에서는 경고가 작동해야 합니다. 에이전트 모니터링 대시보드와 이 알림들은 미리보기에 있습니다.

## Step 11 · Close the loop: gate every release

[determined] 모니터링에서 문제가 발견되면 프롬프트, 데이터, 모델 중 한 가지만 변경하세요. 그런 다음 같은 테스트를 다시 실행하세요.
[600ms]
[curious] 두 번의 런을 나란히 비교해 변화가 도움이 되었는지 확인하고, 클러스터 분석을 사용해 실패를 패턴으로 분류하세요.
[600ms]
[confident] 마지막으로, CI CD 게이트는 모든 변경에 동일한 평가자를 사용하며, 점수가 맞지 않으면 해제됩니다.

## Step 12 · Evaluate, trace, monitor, repeat

[calm] 출시 전에 테스트하세요. 실행 중인 것을 추적하세요. 생산 상태를 모니터링하세요. 그 다음 수정 후 다음 릴리스를 게이트하세요.
[600ms]
[reflective] 이렇게 해서 Ask Contoso는 좋은 데모에서 고객이 신뢰할 수 있는 제품으로 변모했습니다.
[600ms]
[proud] 이 루프가 바로 AI 앱이 출시일에도 오랫동안 좋은 상태를 유지하는 방법입니다.
