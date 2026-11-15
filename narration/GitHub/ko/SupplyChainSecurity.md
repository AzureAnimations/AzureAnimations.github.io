# Narrator Script — GitHub · Supply Chain Security: Dependency Graph, Dependabot and Dependency Review

**Source animation:** [SupplyChainSecurity.html](../../../journeys/GitHub/SupplyChainSecurity.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/supply-chain-security>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Most of your code is somebody else’s code

[calm] Contoso의 orders-api를 살펴보겠습니다. 팀이 의도적으로 고른 패키지 몇 개를 사용합니다.
[600ms]
[curious] 그런데 그 패키지들이 다시 다른 패키지를 끌어오고, 그 패키지들이 또 다른 패키지를 끌어옵니다. 내가 직접 고른 패키지는 직접 의존성이고, 딸려 오는 패키지는 전이 의존성입니다.
[600ms]
[serious] 이게 중요한 이유는, 이 연결 고리 어디에서든 결함이 생기면 내 앱의 결함이 되기 때문입니다.

## Step 2 · The dependency graph: direct and transitive packages

[confident] GitHub는 매니페스트 파일과 락 파일로 의존성 그래프를 만듭니다. 의존성 제출 API로 추가 데이터를 제출할 수도 있습니다.
[600ms]
[curious] 패키지마다 버전, 라이선스, 그리고 직접인지 전이인지가 표시됩니다. 경로 표시를 누르면 전이 패키지까지 이어지는 경로를 볼 수 있습니다.
[600ms]
[calm] 취약한 패키지가 맨 위에 정렬되어, 위험한 것부터 볼 수 있습니다.

## Step 3 · The Advisory Database: how a package becomes an alert

[calm] 보안 권고는 여러 출처에서 GitHub로 들어오고, GitHub Advisory Database에 모입니다.
[600ms]
[confident] 검토된 권고만 Dependabot 경고를 발생시키고, 그것도 내 그래프에 있는 패키지와 일치할 때만 발생합니다. 검토되지 않은 권고는 아무 경고도 만들지 않습니다.
[600ms]
[serious] 악성 코드 권고는 별도의 경고 유형이고, 따로 켜야 합니다.

## Step 4 · Dependabot alerts: severity, EPSS and what to fix first

[curious] 여기 Dependabot 경고 목록이 있습니다. 심각도는 좋은 출발점이지만, 하나의 신호일 뿐입니다.
[600ms]
[confident] 앞으로 30일 안에 악용될 가능성을 추정하는 EPSS와 함께 읽으세요. 그다음 그 패키지가 프로덕션에서 실행되는지, 어떻게 내 그래프에 들어왔는지도 확인하세요.
[600ms]
[encouraging] 경고를 클릭해서 서로 비교해 보세요. 이렇게 무엇을 먼저 고칠지 정합니다.

## Step 5 · Security updates: the pull request Dependabot opens

[calm] Dependabot 보안 업데이트를 켜면, Dependabot이 패치가 있는 모든 경고를 고치려고 시도합니다.
[600ms]
[impressed] 패치된 최소 버전으로 올리는 풀 리퀘스트를 열고 경고에 연결합니다. 풀 리퀘스트를 병합하면 경고가 닫힙니다.
[600ms]
[reflective] 전이 패키지라면 풀 리퀘스트가 대신 상위 패키지를 업데이트할 수도 있습니다.

## Step 6 · Version updates: dependabot.yml, schedule, groups, ignore

[confident] 버전 업데이트는 파일 하나, 저장소의 Dependabot 구성 파일에서 시작합니다.
[600ms]
[calm] 여기서 Dependabot이 얼마나 자주 확인할지, 어떤 업데이트를 풀 리퀘스트 하나로 묶을지, 어떤 패키지는 건너뛸지 정합니다.
[600ms]
[reflective] 새 릴리스는 먼저 대기 기간을 거치지만, 보안 업데이트는 그 대기를 건너뜁니다. 다만 주의하세요. 무시 규칙이 있으면 그 패키지의 보안 업데이트 풀 리퀘스트도 막힐 수 있습니다.

## Step 7 · Alert rules: auto-dismiss and auto-triage

[curious] 알림이 너무 많나요? 자동 분류 규칙이 알림이 나가기 전에 경고를 대신 닫거나 일시 중지해 줄 수 있습니다.
[600ms]
[confident] GitHub가 선별한 프리셋으로 시작하거나, 심각도, 패키지, 약점 유형 등으로 조건을 지정한 사용자 지정 규칙을 작성하세요.
[600ms]
[serious] 규칙이 무엇을 가릴 수 있는지 알아 두세요. 자동으로 닫힌 경고도 필터링하고, 검토하고, 다시 열 수 있습니다.

## Step 8 · Dependency Review: stop a bad package before the merge

[calm] 이제 풀 리퀘스트 단계입니다. 의존성 검토는 추가, 제거, 업데이트된 패키지를 보여 줍니다.
[600ms]
[confident] 알려진 취약점과 라이선스를 표시하고, 의존성 검토 액션은 검사를 실패시킬 수도 있습니다.
[600ms]
[determined] 이 검사를 필수로 지정하면 문제가 있는 패키지는 병합할 수 없습니다. 라이선스는 허용 목록이나 거부 목록 중 하나만 쓰세요. 둘 다 쓰면 안 됩니다.

## Step 9 · SBOM: export the graph as SPDX

[calm] SBOM은 소프트웨어 자재 명세서입니다. 프로젝트가 무엇에 의존하는지 기계가 읽을 수 있게 정리한 목록입니다.
[600ms]
[confident] GitHub는 현재 의존성 그래프를 SPDX 형식으로 내보낼 수 있습니다. 인터페이스, REST API, GitHub Actions 어디서든 가능합니다.
[600ms]
[reflective] 버전, 식별자, 라이선스, 경로가 담기지만, 나에게 의존하는 프로젝트는 담기지 않습니다.

## Step 10 · Who sees alerts, who owns them, and how they are notified

[calm] 저장소 관리자와 조직 소유자가 Dependabot 경고를 켜고, 누가 볼 수 있는지 정합니다.
[600ms]
[confident] 쓰기 권한이 있는 사람은 경고를 사용자, 팀, 또는 AI 에이전트에게 할당할 수 있습니다. 이를 위해서는 Code Security 또는 Advanced Security 라이선스가 필요합니다.
[600ms]
[curious] 알림은 이메일, 주간 요약, 웹훅, REST API로 전달됩니다.

## Step 11 · Fix many alerts at once

[curious] 경고가 수백 개라면 어떻게 할까요? 보안 업데이트를 그룹으로 묶으면, 패키지 에코시스템마다 풀 리퀘스트 수가 줄어듭니다.
[600ms]
[confident] 경고를 여러 개 선택하고 이유 하나로 한꺼번에 닫을 수도 있습니다. 아니면 경고를 AI 에이전트에게 넘기세요.
[600ms]
[encouraging] 코드 스캔과 비밀 스캔 경고에서는 보안 캠페인이 같은 일을 대규모로 해 줍니다.

## Step 12 · Recap: graph, alert, update, review

[calm] 정리해 봅시다. 그래프는 내가 무엇에 의존하는지 보여 줍니다.
[600ms]
[confident] 경고는 무엇이 취약한지 알려 주고, 업데이트는 수정을 전달합니다. 의존성 검토는 풀 리퀘스트 단계에서 새로운 위험을 막아 줍니다.
[600ms]
[proud] 이것이 G H 500 학습 가이드의 공급망 보안 영역입니다. 직접 만든 저장소 하나에서 연습해 보세요.
