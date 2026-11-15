# Narrator Script — GitHub · Copilot for Tests, Refactoring and Legacy Code

**Source animation:** [CopilotForTestingAndModernization.html](../../../journeys/GitHub/CopilotForTestingAndModernization.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/sql/tools/visual-studio-code-extensions/github-copilot/test-and-mocking-data-generator>

---

## Step 1 · A Function Nobody Dares Touch

[calm] Contoso에서 Maya는 이름은 알쏭달쏭하고 테스트도 문서도 없는 가격 책정 함수를 물려받았습니다.
[600ms]
[concerned] 한 줄만 바꿔도 결제가 깨질 수 있는데, 그걸 알려 주는 것은 아무것도 없습니다.
[600ms]
[curious] 이것이 레거시 코드입니다. 문서가 거의 없고 테스트 커버리지가 약해서 다들 손대기를 겁냅니다. Copilot이 어떻게 도와주는지 볼까요?

## Step 2 · Understand It First

[calm] Maya는 뭔가 바꾸기 전에 먼저 코드를 선택하고, Copilot Chat에 설명해 달라고 요청합니다.
[600ms]
[confident] Visual Studio Code에서는 슬래시 explain 명령이 활성 편집기의 코드를 설명해 줍니다. Python 3 개발자라는 식으로 자신의 배경을 Copilot에게 알려 주면, 답이 그에 맞게 나옵니다.
[600ms]
[serious] 그다음 모든 내용을 코드와 대조해 확인합니다. 설명은 실마리일 뿐 사실이 아닙니다.

## Step 3 · Generate Unit Tests

[confident] 파일을 연 상태에서 슬래시 tests 명령을 쓰면, 선택한 코드에 대한 단위 테스트 초안이 만들어집니다.
[600ms]
[calm] 기존 테스트 파일을 코드 옆에 열어 두면, Copilot이 테스트 프레임워크를 맞추는 데 도움이 됩니다.
[600ms]
[serious] 테스트가 모든 시나리오를 다루지는 못할 수 있습니다. 그래서 Maya는 테스트를 실행하고, 하나씩 읽어 보고, 빠진 것을 추가합니다.

## Step 4 · Edge Cases

[curious] 이번에는 빠진 게 무엇인지 묻습니다. 빈 값, null, 0, 경계 값 입력 같은 것들입니다.
[600ms]
[confident] Copilot이 케이스를 제안합니다. 레거시 코드에는 숨은 가정이 있기 때문에, 코드가 무엇을 가정하는지도 물어서 그 답을 적어 둡니다.
[600ms]
[reassuring] 동작이 불분명할 때는 규칙을 어떻게 정할지 팀이 결정합니다. Copilot이 정하는 것이 아닙니다.

## Step 5 · Assertions

[calm] 약한 단언은 답이 틀려도 통과합니다.
[600ms]
[serious] 실패할 수 없는 테스트는 아무것도 증명하지 못합니다. 그러니 테스트 이름만 보지 말고, Copilot이 작성한 단언을 읽어 보세요.
[600ms]
[confident] 정확한 값과 예외를 검사하라고 요청하세요. 그러면 진짜 실수가 생겼을 때 테스트가 빨간불이 됩니다.

## Step 6 · Integration Tests

[calm] 통합 테스트는 두 부분을 함께 호출합니다. 여기서는 checkout과 apply promo입니다.
[600ms]
[curious] 모의 객체가 notifier를 대신하기 때문에, 테스트에 실제 연결이 필요 없습니다. notifier가 한 번 호출됐는지, 아니면 전혀 호출되지 않았는지 검증합니다.
[600ms]
[confident] 무엇을 모킹하고 무엇을 검증할지 말해 주세요. 잘못된 입력에 대한 테스트도 하나 더 추가하고, 큰 요청은 작게 쪼개세요.

## Step 7 · Refactor Safely

[calm] 이제 Maya는 테스트를 돌려 가며 리팩터링합니다. 아래에서 버전을 바꿔 가며 비교해 보세요.
[600ms]
[impressed] 더 단순해진 코드에서도 같은 테스트 다섯 개가 통과합니다. 실수가 있으면 배포 전에 테스트 두 개가 빨간불이 됩니다.
[600ms]
[reassuring] 테스트가 있으면 코드가 하는 일은 그대로 두고, 동작하는 방식만 바꿀 수 있습니다. 변경할 때마다 테스트를 실행하세요.

## Step 8 · Document It

[calm] Maya는 함수를 선택하고 Copilot에게 docstring을 요청한 다음, 코드베이스용 README 섹션도 요청합니다.
[600ms]
[serious] 그리고 코드와 맞지 않는 부분은 직접 고칩니다.
[600ms]
[optimistic] 좋은 문서는 다음 사람이 읽기 쉽게 해 주고, 주석과 문서가 있으면 Copilot도 더 좋은 제안을 합니다.

## Step 9 · Sample Data

[curious] 테스트 데이터가 필요한가요? 테이블을 설명하거나 JSON 샘플을 붙여 넣고, 모의 행을 요청하세요.
[600ms]
[confident] 행 개수를 지정하고 엣지 케이스를 포함하라고 할 수도 있습니다. 결과는 테스트 데이터베이스를 채울 가상의 행입니다.
[600ms]
[serious] 항상 가상의 값을 쓰고, 실제 고객 데이터는 프롬프트에 붙여 넣지 마세요.

## Step 10 · Modernize

[calm] Maya는 테스트를 가까이 둔 채, Python 2 코드를 Python 3으로 바꾸는 식으로 오래된 패턴을 현재 패턴으로 다시 작성해 달라고 Copilot에 요청합니다.
[600ms]
[confident] 대표적인 변경은 import, print 문, 제거된 메서드입니다.
[600ms]
[serious] 마법의 지팡이는 아닙니다. 컨텍스트와 오래된 라이브러리에 맞춰 손봐야 한다고 생각하고, 실제로 무엇이 바뀌었는지는 테스트로 확인하세요.

## Step 11 · Security and Performance

[calm] Maya는 Copilot에게 보안 위험을 묻고, 더 빠른 버전도 요청합니다.
[600ms]
[concerned] Copilot Chat은 SQL 인젝션 같은 흔한 문제를 찾는 데 도움이 되지만, 전체 보안 분석을 여기에만 의존해서는 안 됩니다. 응답은 매번 똑같지 않아서, 여러분이 받는 답은 다를 수 있습니다.
[600ms]
[determined] 그러니 검증하세요. 테스트를 실행하고, 코드 스캔을 돌리고, 속도를 측정하세요.

## Step 12 · Recap: Review Every Change

[calm] Copilot은 설명하고, 초안을 만들고, 작업 속도를 높여 줍니다. 모든 변경은 사람이 검토하고, 증거는 테스트입니다.
[600ms]
[confident] 먼저 코드를 이해하세요. 작업하는 동안에는 Copilot이 초안을 쓰고 사람이 테스트를 실행합니다. 마지막에는 테스트와 사람이 승인한 것만 병합하세요.
[600ms]
[proud] G H 300 시험 기준으로, 테스트, 엣지 케이스, 샘플 데이터, 리팩터링, 문서화, 레거시 현대화, 보안과 성능 제안을 다룹니다.
