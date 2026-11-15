# Narrator Script — GitHub · Use Copilot Responsibly: Risks, Validation and Safe Habits

**Source animation:** [UseCopilotResponsibly.html](../../../journeys/GitHub/UseCopilotResponsibly.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/ai/playbook/technology-guidance/overreliance-on-ai/overreliance-on-ai>

---

## Step 1 · It Compiled, So It Shipped

[calm] Maya가 Copilot이 제안한 폭염 경고 코드를 수락했습니다. 빌드는 초록불이고 테스트도 통과합니다.
[600ms]
[concerned] 그런데 명세에는 35도 이상이면 경고하라고 되어 있는데, 제안된 코드는 35도 초과일 때만 확인합니다. 값 하나가 틀렸는데, 아무도 살펴보지 않았습니다.
[600ms]
[serious] Copilot은 올바르게 보이지만 실제로는 틀린 코드를 쓸 수 있습니다. 초록불은 코드가 실행됐다는 뜻이지, 맞다는 뜻이 아닙니다.

## Step 2 · How a Model Goes Wrong

[calm] 모델은 그럴듯한 코드를 예측합니다. 그게 동작 원리이고, 틀리는 이유이기도 합니다.
[600ms]
[concerned] 존재하지 않는 메서드를 지어내거나, 이제는 낡은 옛 패턴을 반복하거나, 틀렸는데도 아주 확신에 찬 말투를 쓸 수 있습니다.
[600ms]
[serious] 이것이 환각입니다. 그럴듯하게 들리지만 틀렸거나 지어낸 출력을 말합니다. 모든 것을 검토해야 하는 가장 중요한 이유입니다.

## Step 3 · Bias in Suggestions

[curious] 학습에 쓰인 코드에는 그것을 쓴 사람들과 습관이 반영되어 있어서, 제안이 한 유형의 사용자만 당연하게 가정할 수 있습니다.
[600ms]
[confident] 누구를 지원해야 하는지는 프롬프트에 직접 적으세요. 그리고 다양한 이름과 입력으로 테스트하세요.
[600ms]
[reflective] 코드가 누구를 빼놓는지도 검토하세요. Copilot은 학습 데이터에 있던 편향과 오류를 그대로 반복할 수 있습니다.

## Step 4 · Insecure Code

[calm] 제안이 동작하더라도 안전하지 않을 수 있습니다. 여기서는 사용자 입력이 데이터베이스 쿼리에 그대로 이어 붙어 있습니다.
[600ms]
[serious] 이것이 SQL 인젝션입니다. 해결책은 매개변수화된 쿼리로, 입력을 명령의 일부가 아니라 데이터로만 다룹니다.
[600ms]
[confident] 이런 문제는 리뷰, 테스트, 코드 스캔으로 잡아냅니다. 보안에 민감한 작업에서는 특히 그렇습니다.

## Step 5 · Licence and Public Code

[calm] Copilot은 새 코드를 쓰지만, 가끔 제안이 공개 코드와 일치할 수 있습니다. 가능성은 낮지만 실제로 있습니다.
[600ms]
[confident] 설정에 따라 그런 제안을 볼 수 있는지가 정해집니다. 차단은 일치하는 제안을 숨깁니다. 허용은 라이선스와 링크를 보여 줍니다.
[600ms]
[reassuring] 일치하는 코드는 내가 쓰지 않은 다른 코드와 똑같이 다루세요. 테스트하고, 스캔하고, 취약점이 있는지 확인하세요. 조직에서 받은 시트는 조직의 설정을 따릅니다.

## Step 6 · Privacy of What You Paste

[calm] 프롬프트는 내 코드와 컨텍스트를 합쳐서 Copilot 서비스로 보내는 것입니다.
[600ms]
[serious] 그러니 키, 비밀번호, 토큰, 고객 데이터는 입력하거나 붙여 넣지 마세요.
[600ms]
[reassuring] 대신 자리 표시자를 쓰세요. 푸시 보호는 감지된 비밀이 들어 있는 푸시를 막고, 콘텐츠 제외는 선택한 파일을 Copilot이 보지 못하게 합니다.

## Step 7 · Over-Reliance

[curious] 제안을 전부 수락하다 보면 내 실력은 무뎌지고, 확인할 수 없는 것까지 받아들이게 됩니다.
[600ms]
[confident] 주도권을 쥐세요. 코드가 무슨 일을 해야 하는지 먼저 예상한 다음, Copilot과 비교해 보세요.
[600ms]
[encouraging] Copilot Chat에 코드를 설명해 달라고 해서 다시 들어볼 수도 있습니다. Copilot은 여러분의 전문성을 대체하려고 만든 것이 아닙니다.

## Step 8 · Validate Every Output

[calm] 제안은 새로 온 동료가 쓴 코드처럼 대하세요.
[600ms]
[confident] 읽어 보고 물어보세요. 이해했는가, 내가 요청한 것이 맞는가? 병합하기 전에 실행하고, 경계 조건을 테스트하고, 스캔하세요.
[600ms]
[impressed] 35도라는 경계값에 대한 엣지 케이스 테스트가 있었다면, Maya의 버그를 바로 잡았을 것입니다.

## Step 9 · Mitigations: Harm and Control

[curious] 이 수업에서 다룬 위험마다 대응책이 있습니다. 위험을 하나 골라 그에 맞는 대응책과 누가 실행하는지 확인해 보세요.
[600ms]
[confident] 위험은 여섯 가지이고, 앞에서 본 단계마다 하나씩입니다. 대응책은 습관, 테스트, 스캔, 설정입니다.
[600ms]
[reassuring] 일부는 관리자가 설정합니다. 공개 코드 필터와 콘텐츠 제외가 그렇습니다. 대부분은 그저 여러분의 습관입니다.

## Step 10 · You Are the Author of Record

[calm] Copilot은 코드, 텍스트, 수정안을 제안합니다. 검토하고, 테스트하고, 결정하고, 책임지는 것은 여러분입니다.
[600ms]
[serious] 변경에 내 이름이 올라가니, 책임도 내게 있습니다.
[600ms]
[confident] 그리고 Ravi 같은 두 번째 사람이 풀 리퀘스트를 한 번 더 읽습니다. 눈이 하나가 아니라 둘입니다.

## Step 11 · Recap: Responsible-Use Checklist

[calm] 여섯 가지 습관으로 이 수업의 위험을 모두 다룰 수 있습니다. 검토하기, 테스트하기, 스캔하기, 라이선스 살피기, 개인 정보 지키기, 주도권 유지하기입니다.
[600ms]
[confident] 어떤 Copilot 기능이 만든 결과든, 매번 이 습관을 적용하세요.
[600ms]
[proud] 이것이 G H 300 학습 가이드의 GitHub Copilot 책임 있는 사용 목표입니다. 체크리스트는 쉬운 말로 정리한 요약일 뿐, 공식 목록은 아닙니다.
