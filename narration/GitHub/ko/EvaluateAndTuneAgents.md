# Narrator Script — GitHub · Evaluate and Tune a GitHub Agent

**Source animation:** [EvaluateAndTuneAgents.html](../../../journeys/GitHub/EvaluateAndTuneAgents.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · It Merged, Then It Broke

[calm] Contoso 스토어프론트 팀이 이슈 하나를 Copilot에 할당했습니다. 풀 리퀘스트 2 31은 리뷰를 통과해서 병합됐습니다.
[600ms]
[concerned] 그런데 월요일에 main 브랜치 빌드가 실패합니다. 병합이 초록불이었다고 해서 결과물이 좋다는 뜻은 아닙니다.
[600ms]
[curious] 리뷰는 형식적인 절차가 아니라, 증거를 가지고 평가하는 순간입니다. 그럼 에이전트가 한 작업은 어떻게 평가할까요?

## Step 2 · Define Success First

[calm] 에이전트가 시작하기 전에, 이슈에 기대하는 결과와 제약 조건을 적어 두세요.
[600ms]
[confident] 이슈가 곧 프롬프트라고 생각하세요. 좋은 해결책이 어떤 모습인지 알려 주는 인수 기준과, 어떤 파일을 고쳐야 하는지에 대한 안내를 추가하세요.
[600ms]
[encouraging] 그러면 작업 결과에 점수를 매길 수 있는 평가 기준이 생깁니다.

## Step 3 · Qualitative and Quantitative Signals

[curious] 숫자는 무슨 일이 일어났는지 알려 주고, 판단은 그게 맞는지 알려 줍니다. 둘 다 활용하세요.
[600ms]
[confident] 정량적 신호는 측정한 값입니다. 테스트 결과, 소요 시간, 스캔 건수, 변경 규모가 여기에 해당합니다. 정성적 신호는 사람이 판단하는 것으로, 접근 방식과 이름 짓기, 의도에 대한 리뷰 의견이 그렇습니다.
[600ms]
[reflective] 각 신호를 이슈가 요구한 내용에 비춰 읽어 보세요. 여기 나오는 숫자는 이야기를 위해 만든 값입니다.

## Step 4 · Automated Scans as Signals

[calm] Copilot 클라우드 에이전트는 CodeQL, 의존성 검사, 비밀 스캔으로 자기가 쓴 코드를 직접 점검합니다.
[600ms]
[confident] CodeQL은 코드의 보안 문제를 찾습니다. 의존성은 GitHub Advisory Database와 대조해서 확인하고, 비밀 스캔은 키와 토큰 같은 민감한 정보를 찾습니다.
[600ms]
[serious] 결과는 판결이 아니라 신호로 읽으세요. 이 결과만으로는 변경이 이슈에서 요청한 대로 동작하는지 알 수 없습니다.

## Step 5 · Read the Evidence

[curious] 증상에서 시작해서 원인 쪽으로 거슬러 올라가세요.
[600ms]
[confident] 먼저 워크플로우 실행과 diff를 보고, 그다음 계획, 마지막으로 세션 로그를 보세요. Copilot이 남긴 커밋 메시지에는 모두 그 로그 링크가 달려 있습니다.
[600ms]
[serious] 기본적으로 Copilot이 푸시하면, 쓰기 권한이 있는 사람이 승인하기 전까지 워크플로우가 실행되지 않습니다. 그러니 변경 내용부터 살펴보세요.

## Step 6 · Classify the Root Cause

[calm] 실패마다 처음 잘못된 일이 어디서 벌어졌는지에 따라 분류하세요. 유형을 선택하면 단서가 나옵니다.
[600ms]
[confident] 추론 오류는 에이전트가 엉뚱한 문제를 풀었다는 뜻입니다. 도구 오용은 잘못된 명령을 쓰거나 접근 권한이 너무 넓은 경우입니다. 컨텍스트나 환경 문제는 설정이 빠졌거나, 요청이 차단됐거나, 컨텍스트가 오래된 경우입니다.
[600ms]
[determined] 실제로 찾아낸 유형을 고치세요. 한꺼번에 다 바꾸면 무엇이 효과가 있었는지 알 수 없게 됩니다.

## Step 7 · Walk Through One Failure

[curious] 여기서는 세션 로그에 잘못된 도구 호출이 보입니다.
[600ms]
[concerned] 에이전트가 pnpm을 쓰는 저장소에서 npm install을 실행했고, 자동 생성된 폴더까지 수정했습니다. 그 결과 락 파일이 하나 더 생겨서 빌드가 깨졌고, 이것이 증상입니다.
[600ms]
[confident] 원인은 규칙이 빠져 있었다는 점입니다. 어떤 패키지 관리자를 써야 하는지 지침에 적혀 있지 않았습니다. 원인을 고치세요.

## Step 8 · Tune the Instructions

[calm] 빠진 규칙은 에이전트가 읽는 곳, 즉 저장소의 맞춤 지침 파일에 넣으세요.
[600ms]
[confident] 설치, 테스트, 빌드하는 방법과 자동 생성되는 폴더를 적어 두세요. 경로별 파일이나 에이전트 지침 파일도 사용할 수 있습니다.
[600ms]
[encouraging] Copilot이 자기 환경에서 빌드와 테스트를 할 수 있으면, 바로 병합할 만한 풀 리퀘스트를 만들 가능성이 더 높아집니다.

## Step 9 · Tune the Tools and Access

[calm] 에이전트에게는 작업에 필요한 도구만 주세요.
[600ms]
[confident] 작업에 전혀 필요 없는 도구는 빼고, 다른 도구는 서버 전체가 아니라 작업 하나로만 좁히세요. 사용자 지정 에이전트 프로필에서는 도구를 아예 적지 않으면 모든 도구가 켜집니다.
[600ms]
[reassuring] 원칙은 일을 해내는 데 필요한 최소한의 접근 권한입니다.

## Step 10 · Tune the Memory

[calm] 메모리는 도움이 되어야지, 헷갈리게 해서는 안 됩니다.
[600ms]
[confident] Copilot이 저장소에 대해 기억하는 내용과 그 출처 인용을 검토하고, 오래된 것은 삭제하세요. 쓰기 권한이 있으면 저장소 설정에서 할 수 있습니다.
[600ms]
[reflective] Copilot은 인용을 현재 브랜치와 대조해 확인하지만, 어디까지나 판단일 뿐입니다. 항상 지켜져야 하는 내용은 맞춤 지침에 쓰세요.

## Step 11 · Re-run and Compare

[curious] 조정한 설정으로 같은 작업을 다시 실행하고, 두 번의 실행을 같은 평가 기준으로 채점하세요.
[600ms]
[impressed] 첫 번째 실행은 검사 6개 중 3개를 통과했습니다. 지침, 도구, 메모리를 바꾼 두 번째 실행은 6개를 모두 통과했습니다.
[600ms]
[serious] 잘 나온 한 번은 신호일 뿐 증거가 아닙니다. 가능하면 한 번에 하나씩만 바꾸고, 믿기 전에 비슷한 작업을 몇 번 더 시도해 보세요.

## Step 12 · Recap: Evaluate, Diagnose, Tune

[calm] 평가 기준에 맞춰 작업을 평가하세요. 결과, 제약 조건, 신호, 스캔이 그 기준입니다.
[600ms]
[confident] 로그, 계획, diff, 워크플로우 실행으로 원인을 진단하고 유형을 정하세요. 그리고 지침, 도구와 접근 권한, 메모리 중 하나만 조정하세요.
[600ms]
[proud] 그다음에는 다시 실행하세요. 이것으로 평가, 오류 분석, 튜닝을 다루는 G H 600 영역이 정리됩니다.
