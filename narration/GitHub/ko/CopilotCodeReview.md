# Narrator Script — GitHub · Review with Copilot: Pull Request Summaries and Review Standards

**Source animation:** [CopilotCodeReview.html](../../../journeys/GitHub/CopilotCodeReview.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · A Pull Request Nobody Wants to Read

[calm] Contoso에서 Maya가 변경된 파일이 40개나 되는데 설명은 비어 있는 풀 리퀘스트를 엽니다.
[600ms]
[concerned] Ravi는 코드만 보고 무슨 일인지 짜 맞춰야 하고, 무엇이 왜 바뀌었는지 짐작해야 합니다.
[600ms]
[curious] 리뷰어는 세부 사항보다 먼저 전체 맥락이 필요합니다. 그래서 Copilot에게 요약을 쓰게 한 다음, 코드를 리뷰해 봅시다.

## Step 2 · Generate a Summary

[confident] 설명란에서 Maya가 Copilot 메뉴를 열고 요약을 선택합니다.
[600ms]
[calm] Copilot은 입력란에 이미 있는 텍스트를 무시하기 때문에, Maya는 빈 상태로 시작합니다.
[600ms]
[reassuring] 그다음 초안을 읽고 자기 설명을 덧붙인 뒤에야 게시합니다. 요약은 출발점일 뿐, 최종본이 아닙니다.

## Step 3 · Ask Copilot to Review

[calm] 풀 리퀘스트에서 Maya는 오른쪽 사이드바의 리뷰어를 열고, Copilot 옆의 요청을 클릭합니다.
[600ms]
[curious] 팀원에게 리뷰를 부탁할 때와 똑같은 동작입니다. Copilot이 풀 리퀘스트를 읽고 댓글을 남깁니다.
[600ms]
[confident] 새 커밋이 올라온 뒤에는 Copilot 옆의 다시 요청 버튼으로 새로 리뷰를 받을 수 있습니다.

## Step 4 · Read the Comments

[calm] 댓글은 각각 특정 줄에 달리고, 심각도가 높음, 중간, 낮음 중 하나로 붙습니다.
[600ms]
[confident] 가능하면 Copilot이 제안 변경 사항을 함께 달아 주는데, 바로 커밋하거나 다른 제안과 묶어서 한꺼번에 커밋할 수 있습니다.
[600ms]
[serious] 리뷰 유형을 눈여겨보세요. 기본값은 승인도 변경 요청도 아닌 댓글 리뷰입니다. 답글을 달고 해결 처리할 수는 있지만, Copilot은 사용자의 답글을 읽지 않습니다.

## Step 5 · Suggestions Versus Your Judgment

[calm] Copilot은 제안하고, 결정은 Maya가 댓글 하나하나마다 합니다.
[600ms]
[confident] 제안을 그대로 커밋해도 되고, 직접 코드를 고친 뒤 커밋해도 되고, 해당하지 않는 내용이면 대화를 해결 처리하면 됩니다.
[600ms]
[serious] Copilot은 없는 문제를 지적할 수도 있고, 다시 리뷰하면 이미 해결한 댓글을 또 달 수도 있습니다. 모든 댓글은 사람이 판단해야 합니다.

## Step 6 · Set the Review Standard

[curious] 같은 피드백을 손으로 되풀이하는 일은 금방 지겨워집니다. 그래서 팀은 리뷰 규칙을 저장소의 지침 파일에 적어 둡니다.
[600ms]
[confident] 저장소 전체에 적용되는 파일, 특정 폴더에만 적용되는 경로별 파일, 그리고 루트에 있는 agents 파일이 있습니다.
[600ms]
[reassuring] Copilot은 리뷰 중인 브랜치에서 이 파일을 읽기 때문에, 같은 풀 리퀘스트에서 규칙 변경을 바로 시험해 볼 수 있습니다. 짧고 구체적인 규칙이 가장 효과가 좋습니다.

## Step 7 · See the Standard at Work

[curious] 같은 풀 리퀘스트를 지침 파일을 적용하기 전과 후로 리뷰한 결과입니다. 스위치를 눌러서 비교해 보세요.
[600ms]
[impressed] 적용 전에는 댓글이 일반적이라 어떤 코드에도 해당할 법한 말입니다. 적용 후에는 팀이 정한 규칙을 구체적으로 짚습니다.
[600ms]
[serious] 한 가지 주의하세요. 지침은 Copilot을 안내할 뿐 아무것도 보장하지 않고, Copilot이 규칙을 건너뛸 수도 있습니다. 댓글은 계속 읽어 보세요.

## Step 8 · Automatic Review

[calm] 아무도 요청을 기억하지 않아도 되어야 합니다. 저장소 규칙 집합으로 모든 풀 리퀘스트에 Copilot 리뷰를 요청할 수 있습니다.
[600ms]
[confident] Settings, Rulesets로 가서 새 브랜치 규칙 집합을 만들고, Copilot 코드 리뷰를 자동으로 요청하는 옵션을 선택하세요.
[600ms]
[reassuring] 새로 푸시할 때마다 리뷰하는 옵션을 켜세요. 그렇지 않으면 Copilot은 풀 리퀘스트를 한 번만 리뷰합니다. 초안 풀 리퀘스트는 선택 사항입니다. 규칙 집합이 없으면 Copilot은 요청받았을 때만 리뷰합니다.

## Step 9 · Organization Policy

[calm] 사람들이 조직을 통해 Copilot을 받는다면, 조직에서 먼저 Copilot 코드 리뷰 정책을 활성화해야 합니다.
[600ms]
[confident] 이 정책은 조직의 Copilot 정책 설정에 있고, GitHub dot com과 GitHub Mobile의 리뷰에 적용됩니다.
[600ms]
[curious] 조직 규칙 집합으로, 이름이 특정 패턴과 일치하는 모든 저장소에 자동 리뷰를 요청할 수도 있습니다.

## Step 10 · What It Can Miss

[serious] Copilot은 댓글 리뷰를 남기고, 기본적으로 승인으로 인정되지 않습니다.
[600ms]
[concerned] Copilot은 틀릴 수도 있고, 실제 문제를 놓칠 수도 있고, 지침을 건너뛸 수도 있습니다.
[600ms]
[determined] Copilot이 승인 리뷰를 남기게 하려면 저장소, 조직, 엔터프라이즈 설정이 모두 허용해야 하고, 이는 의도적으로 내리는 선택입니다. Copilot은 사람의 리뷰를 보완할 뿐이고, 최종 승인은 여전히 사람이 합니다.

## Step 11 · Recap: A Review Loop with Copilot and a Person

[calm] 리뷰 전에는 Copilot 요약이 맥락을 전해 줍니다. 리뷰 중에는 Copilot이 댓글을 달고, 결정은 사람이 합니다.
[600ms]
[confident] 리뷰 전반에서는 지침 파일의 표준, 규칙 집합, 조직 정책이 이 흐름을 일관되게 유지해 줍니다.
[600ms]
[proud] 최종 판단은 여전히 사람의 몫입니다. G H 300 시험에서는 GitHub Copilot 기능 사용 항목에 이 코드 리뷰 주제들이 나옵니다.
