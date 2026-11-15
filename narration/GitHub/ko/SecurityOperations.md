# Narrator Script — GitHub · Security Operations: Prioritise, Remediate and Govern

**Source animation:** [SecurityOperations.html](../../../journeys/GitHub/SecurityOperations.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A thousand alerts, one team

[calm] Contoso는 스캐너를 전부 켰습니다. 이제 보안 개요에는 네 사람이 다 읽을 수 없을 만큼 많은 열린 경고가 나옵니다.
[600ms]
[concerned] 그럼 어디서부터 시작해야 할까요?
[600ms]
[confident] 이번 수업은 네 단계로 진행합니다. 경고를 식별하고, 우선순위를 매기고, 대규모로 수정하고, 예외를 누가 허용할지 관리합니다.

## Step 2 · CVE, CWE and GHSA

[curious] 거의 모든 경고에 식별자 세 가지가 나오는데, 각각 다른 질문에 답합니다.
[600ms]
[confident] CVE는 구체적인 공개 취약점 하나입니다. CWE는 그 뒤에 있는 약점의 유형입니다. GHSA는 GitHub의 권고 기록입니다.
[600ms]
[calm] GitHub는 CVE 번호 부여 기관이라서 CVE ID를 직접 발급할 수 있습니다. 검색, 필터링, 보고에는 알맞은 식별자를 쓰세요.

## Step 3 · Severity, EPSS and exposure

[calm] 심각도는 결함이 얼마나 나쁜지를 낮음부터 치명적까지로 나타냅니다. EPSS는 앞으로 30일 안에 악용될 가능성을 나타냅니다.
[600ms]
[confident] 노출은 내 코드가 실제로 공격받을 수 있는지를 알려 줍니다. 그 패키지가 프로덕션에 있는지 개발용인지, 결함이 있는 코드에 도달할 수 있는지를 봅니다.
[600ms]
[reflective] 도달 가능성 분석은 JavaScript와 TypeScript에 대해 공개 미리보기 단계입니다. 대기열의 순서를 정하기 전에 세 가지 신호를 모두 읽어 보세요.

## Step 4 · A remediation workflow

[confident] 모든 경고는 같은 다섯 단계를 거칩니다. 분류, 할당, 수정, 검증, 종료입니다.
[600ms]
[calm] 경고는 사람, 팀, 또는 AI 에이전트에게 할당할 수 있습니다. 수정 풀 리퀘스트가 올라오면 새 스캔이 실행되어, 병합되기 전에 변경 내용이 검사됩니다.
[600ms]
[reassuring] 변경 사항은 모두 경고 타임라인에 기록됩니다. 수정하지 않기로 했다면, 이유와 댓글을 남기고 경고를 닫으세요.

## Step 5 · Security campaigns

[curious] 보안 캠페인은 관련된 경고를 묶어서, 개발자에게 기한과 담당자를 알려 주고, 보안 팀이 밀린 경고가 줄어드는 것을 지켜볼 수 있게 해 줍니다.
[600ms]
[confident] 보안 개요에서 만들 수 있습니다. 템플릿이나 직접 만든 필터를 고르고, 이름, 기한, 캠페인 관리자를 정하세요.
[600ms]
[impressed] 경고는 열림, 진행 중, 수정됨, 닫힘 상태로 추적합니다. 코드 스캔 경고에는 Copilot Autofix가 자동으로 실행됩니다.

## Step 6 · Bulk actions and auto-dismiss

[calm] 같은 이유로 여러 경고를 한 번에 닫을 수도 있고, 경고가 들어오는 즉시 규칙이 처리하게 할 수도 있습니다.
[600ms]
[confident] 자동 분류 규칙은 알림이 나가기 전에 Dependabot 경고를 닫거나 일시 중지할 수 있습니다. 프리셋은 GitHub가 제공하고, 사용자 지정 규칙에는 Code Security 또는 Advanced Security가 필요합니다.
[600ms]
[serious] 어느 쪽이든 이유를 기록하세요. 이유, 댓글, 타임라인, 감사 로그가 증빙 자료가 되고, 나중에 누군가 반드시 물어봅니다.

## Step 7 · Alert ownership

[calm] 모든 경고에는 세 가지 역할이 함께합니다. 개발자는 수정합니다.
[600ms]
[confident] 보안 팀은 전체 대기열을 관리합니다. 보안 관리자 역할은 모든 저장소에 대한 읽기 권한, 모든 보안 경고에 대한 쓰기 권한, 보안 개요 접근 권한을 줍니다.
[600ms]
[curious] 관리자는 모두가 따르는 규칙을 정합니다. 보안 관리자 역할은 조직 소유자가 부여합니다.

## Step 8 · Delegated bypass and exceptions

[calm] 푸시나 경고가 정말 예외인 경우도 있습니다. 위임을 쓰면 지정한 검토자가 결정합니다.
[600ms]
[confident] 위임된 우회를 쓰면, 차단된 푸시가 우회를 요청하고 검토자가 승인하거나 거부합니다. 위임된 닫기도 코드 스캔, 비밀 스캔, Dependabot 경고에서 똑같이 동작합니다.
[600ms]
[reassuring] 우회와 닫기는 모두 로그에 남으니, 모든 결정이 기록으로 남습니다.

## Step 9 · Rulesets that block a merge

[confident] 룰셋은 심각도 정책을 관문으로 바꿔 줍니다. 임계값을 고르면, 그 선을 넘는 풀 리퀘스트는 병합할 수 없습니다.
[600ms]
[curious] 이 규칙의 이름은 Require code scanning results입니다. 분석이 아직 실행 중이거나 구성되지 않았을 때도 차단합니다. 버튼을 눌러 보면서 관문이 어떻게 바뀌는지 보세요.
[600ms]
[calm] 저장소 관리자와 조직 소유자가 설정합니다.

## Step 10 · Tailor detection

[curious] 탐지는 모두에게 똑같지 않습니다. 내 위험 수준에 맞는 CodeQL 쿼리 스위트를 고르세요.
[600ms]
[confident] default와 security-extended는 기본 설정에서 동작합니다. security-and-quality와 사용자 지정 스위트는 고급 설정이 필요합니다.
[600ms]
[encouraging] 비밀 스캔에 내 토큰 형식을 가르칠 수도 있습니다. 정규식으로 작성한 사용자 지정 패턴을 쓰면 됩니다.

## Step 11 · Shift left, end to end

[calm] 가장 이른 검사가 가장 저렴한 검사입니다. 문제를 일찍 잡으면 밀린 경고 목록에 쌓이지 않습니다.
[600ms]
[confident] 푸시 단계에서는 푸시 보호가 비밀을 차단합니다. 풀 리퀘스트 단계에서는 의존성 검토와 코드 스캔이 보고합니다. 병합 단계에서는 룰셋이 차단할 수 있습니다.
[600ms]
[reassuring] 병합한 뒤에도 Dependabot 경고와 스캔이 계속 지켜봅니다.

## Step 12 · Recap: a monthly security review

[calm] 이제 Contoso의 보안 팀은 한 달에 한 번 모입니다. 안건 하나하나가 이번 수업에서 배운 개념을 쉬운 말로 풀어 놓은 것입니다.
[600ms]
[confident] 경고를 식별하고, 우선순위를 매기고, 한꺼번에 수정하고, 누가 예외를 허용할 수 있는지 점검하세요. 그리고 이를 강제하고 탐지를 조정하세요.
[600ms]
[proud] 이것으로 G H 500 학습 가이드의 보안 운영 기술을 다뤘습니다. 이제 여러분의 조직에서 직접 연습해 보세요.
