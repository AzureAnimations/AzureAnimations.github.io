# Narrator Script — GitHub · Code Security: Code Scanning with CodeQL

**Source animation:** [CodeScanningWithCodeQL.html](../../../journeys/GitHub/CodeScanningWithCodeQL.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Tests prove it works; scanning asks if it is safe

[calm] Ravi의 테스트가 모두 초록불입니다. 모든 게 예상대로 동작합니다.
[600ms]
[concerned] 그래도 코드 한 줄은 공격받을 수 있고, 그걸 찾는 테스트는 작성된 적이 없습니다.
[600ms]
[confident] 코드 스캔은 코드 자체를 읽고 안전하지 않은 패턴을 찾아서, 해당 줄에 바로 경고를 보여 줍니다.

## Step 2 · How CodeQL works: build a database, then query it

[curious] CodeQL은 코드를 데이터처럼 다룹니다. 먼저 코드로 데이터베이스를 만드는데, 언어마다 데이터베이스가 하나씩입니다.
[600ms]
[confident] 그다음 그 데이터베이스에 쿼리를 실행합니다. 쿼리 하나는 안전하지 않은 패턴 한 종류를 찾습니다.
[600ms]
[calm] 결과는 저장소에 코드 스캔 경고로 나타납니다.

## Step 3 · Default setup: one click, languages detected

[calm] 가장 쉬운 방법은 기본 설정입니다. 언어, 쿼리 스위트, 트리거를 GitHub가 알아서 골라 줍니다.
[600ms]
[confident] 요약을 확인한 다음 사용 설정하면 됩니다.
[600ms]
[reassuring] GitHub Actions가 켜져 있어야 하고, 저장소가 퍼블릭이거나 Code Security가 있어야 합니다.

## Step 4 · Advanced setup: workflow, triggers and a matrix

[confident] 고급 설정은 저장소에 워크플로우 파일을 추가하고, 그때부터는 그 파일을 직접 관리합니다.
[600ms]
[curious] 푸시, 풀 리퀘스트, 일정 같은 트리거를 편집하세요. 언어 매트릭스도 편집할 수 있습니다.
[600ms]
[impressed] 매트릭스는 언어마다 작업 하나를 실행하고, 작업은 모두 병렬로 실행됩니다.

## Step 5 · Compiled languages and build modes

[curious] 컴파일 언어는 CodeQL이 데이터베이스를 만들기 전에 빌드가 필요할 수 있습니다.
[600ms]
[calm] 매트릭스의 언어마다 빌드 모드를 고릅니다. none은 빌드를 아예 하지 않는다는 뜻이고, autobuild는 CodeQL이 빌드를 대신 해 준다는 뜻입니다.
[600ms]
[confident] manual은 빌드 명령을 직접 작성한다는 뜻입니다. 어떤 언어가 어떤 모드를 지원하는지는 문서에 나와 있습니다.

## Step 6 · Third-party scanners and SARIF upload

[curious] 이미 다른 스캐너를 쓰고 있나요? 결과를 SARIF 파일로 쓰게 하세요. SARIF는 결과를 담는 JSON 형식입니다.
[600ms]
[confident] 그 파일은 액션, API, CodeQL 명령줄로 업로드할 수 있습니다.
[600ms]
[impressed] 그러면 그 결과가 CodeQL의 결과 바로 옆에 코드 스캔 경고로 나타납니다.

## Step 7 · Reading an alert: severity, rule and data-flow path

[calm] 모든 경고에는 작동한 규칙과 심각도가 표시됩니다. 보안 경고는 치명적부터 낮음까지의 수준도 함께 보여 줍니다.
[600ms]
[confident] 데이터 흐름 경고에서는 경로 표시를 선택하세요. 데이터가 소스에서 싱크까지 이동하는 경로를 따라가 보여 줍니다.
[600ms]
[encouraging] 경로의 각 단계를 차례로 클릭하면, 신뢰할 수 없는 입력이 어디서 위험해지는지 정확히 볼 수 있습니다.

## Step 8 · Fixing with Copilot Autofix, then re-scan

[curious] Copilot Autofix는 지금 보고 있는 경고에 대한 코드 변경을 제안해 줍니다.
[600ms]
[confident] 제안을 검토하고 수정 내용으로 풀 리퀘스트를 열면, 코드 스캔이 다시 검사합니다.
[600ms]
[reflective] 최선을 다하는 방식이라서 모든 상황의 모든 경고를 고칠 수는 없습니다. 병합하기 전에 변경 내용을 꼭 읽어 보세요.

## Step 9 · Dismiss an alert: reasons and the audit trail

[calm] 고치지 않을 경고도 있습니다. 코드가 테스트에서만 쓰이거나, 위험을 감수할 수 있는 경우가 그렇습니다.
[600ms]
[confident] 경고를 닫고 사유를 고르세요. 댓글도 남길 수 있습니다.
[600ms]
[reassuring] 사유와 댓글은 경고 타임라인에 모두 남아서, 누가 무엇을 왜 결정했는지 기록이 남습니다.

## Step 10 · Query suites: from default to security-and-quality

[curious] 쿼리 스위트는 이름이 붙은 쿼리 모음입니다. 어느 정도까지 찾을지 고를 수 있습니다.
[600ms]
[confident] default는 정밀도가 아주 높습니다. security-extended는 정밀도가 낮은 쿼리를 더해서 더 많이 찾아냅니다.
[600ms]
[calm] security-and-quality는 한 걸음 더 나아가 코드 품질 쿼리까지 추가합니다.

## Step 11 · Custom queries and configuration files

[confident] 구성 파일에서 직접 만든 쿼리와 팩을 추가할 수 있습니다. 쿼리를 제외하거나 폴더 전체를 건너뛸 수도 있습니다.
[600ms]
[calm] 워크플로우에서는 설정 하나로 그 파일을 가리킵니다.
[600ms]
[serious] 한 가지 주의할 점이 있습니다. 워크플로우에서 지정한 쿼리는 파일의 쿼리를 대체합니다. 합치려면 앞에 플러스 기호를 붙여야 합니다.

## Step 12 · When a scan fails or is slow: where to look

[calm] 스캔이 실패하면 실패한 단계, 빌드 모드, 로그부터 확인하세요.
[600ms]
[confident] 빌드가 실패하면 수동 빌드 모드를 써 보세요. 로그가 부족하면 디버그 로깅을 켜세요.
[600ms]
[determined] 스캔이 너무 느리면 범위를 줄이거나, 언어별로 나누거나, 더 큰 러너를 쓰세요. 바꿀 수 있는 항목은 기본 설정이냐 고급 설정이냐에 따라 다릅니다.
