# Narrator Script — GitHub · Move Data: Cache, Artifacts, Outputs and Job Summaries

**Source animation:** [CacheArtifactsAndOutputs.html](../../../journeys/GitHub/CacheArtifactsAndOutputs.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · Every Job Starts Clean

[calm] GitHub 호스팅 러너에서는 작업마다 러너 이미지의 새 인스턴스에서 시작합니다.
[600ms]
[serious] 이전 작업의 파일과 변수는 그냥 없습니다. 작업이 끝나면 러너는 폐기됩니다.
[600ms]
[confident] 그래서 데이터는 출력, 아티팩트, 캐시를 이용해서 의도적으로 넘겨야 합니다.

## Step 2 · Step Outputs: GITHUB_OUTPUT

[calm] 단계는 GitHub 출력 파일에 이름과 값을 씁니다.
[600ms]
[confident] 같은 작업의 이후 단계에서는, 값을 쓴 단계의 ID를 이용해 steps 컨텍스트에서 그 값을 읽습니다.
[600ms]
[serious] 값을 쓰는 단계에는 ID가 있어야 합니다. 없으면 아무도 그 출력을 읽을 수 없습니다.

## Step 3 · GITHUB_ENV: Set It for Later Steps

[curious] GitHub 환경 파일에 이름과 값을 쓰면, 그 작업의 이후 모든 단계에서 환경 변수로 쓸 수 있습니다.
[600ms]
[serious] 하지만 값을 쓴 그 단계에서는 새 값이 보이지 않습니다. 또 이 방법으로는 GitHub와 러너의 기본 변수를 덮어쓸 수도 없습니다.
[600ms]
[reflective] 그리고 이 값은 해당 작업 안에서만 유지됩니다. 다음 작업은 다시 깨끗한 상태로 시작합니다.

## Step 4 · Job Outputs: Pass a Value On

[calm] 값을 다른 작업으로 넘기려면, 첫 번째 작업에서 outputs를 나열하고 각각을 단계 출력에 연결합니다.
[600ms]
[confident] 두 번째 작업은 needs에 첫 번째 작업을 적고, needs 컨텍스트에서 값을 읽습니다.
[600ms]
[serious] needs가 없으면 두 번째 작업은 첫 번째 작업의 출력을 읽을 수 없습니다. 재사용 가능한 워크플로우도 호출한 작업에 출력을 돌려줄 수 있습니다.

## Step 5 · Artifacts: Upload, Then Download

[curious] 파일은 아티팩트로 넘깁니다. Upload artifact는 작업에서 만든 파일을 실행에 저장합니다.
[600ms]
[confident] 이후 작업은 needs로 기다렸다가, download artifact로 그 파일을 자기만의 깨끗한 러너로 가져옵니다.
[600ms]
[reassuring] 아티팩트는 실행이 끝난 뒤에도 남아 있어서, 실행 페이지에서 빌드 결과물, 로그, 테스트 결과를 내려받을 수 있습니다.

## Step 6 · Cache Dependencies With a Key

[curious] 캐시 액션은 먼저 정확히 일치하는 키를 찾고, 그다음에 복원 키를 찾습니다. 정확히 일치하면 캐시 히트입니다.
[600ms]
[confident] 찾지 못하면, 작업이 성공했을 때 새 캐시가 저장됩니다. 키는 보통 러너 운영 체제와 잠금 파일의 해시를 합쳐서 만들기 때문에, 의존성이 바뀌면 새 키가 됩니다.
[600ms]
[serious] 캐시는 한번 만들어지면 절대 바뀌지 않습니다. 캐시가 없어도 작업이 동작해야 하고, 비밀은 절대 캐시에 넣으면 안 됩니다.

## Step 7 · Cache or Artifact? Pick the Right One

[calm] 캐시는 다시 만들기 비용이 큰 파일을 재사용해서 이후 실행을 빠르게 해 줍니다.
[600ms]
[confident] 아티팩트는 작업이 만든 결과물을 보관해서, 다른 작업에 넘기거나 내려받을 수 있게 합니다. 짧은 텍스트 값은 출력으로 넘기는 편이 낫습니다.
[600ms]
[reflective] 캐시와 아티팩트는 둘 다 파일을 저장하지만 서로 바꿔 쓸 수는 없습니다. 다음에 무엇을 할지에 따라 고르세요.

## Step 8 · Job Summaries: A Markdown Report

[curious] 단계 요약 파일에 GitHub 방식의 마크다운을 덧붙이세요.
[600ms]
[confident] 작업이 끝나면 각 단계의 요약이 모여서 실행의 요약 페이지에 표시됩니다.
[600ms]
[encouraging] 테스트 결과, 커버리지, 링크를 보여 줄 때 편리해서, 아무도 로그를 뒤질 필요가 없습니다.

## Step 9 · A Status Badge for the README

[calm] 워크플로우 배지는 워크플로우가 통과하는지 실패하는지를 보여 줍니다.
[600ms]
[confident] 기본적으로 기본 브랜치의 상태를 보여 줍니다. 다른 브랜치나 이벤트를 고르려면 branch나 event 매개변수를 추가하세요.
[600ms]
[curious] 배지 URL에는 워크플로우 파일 이름이 들어가고, Actions 탭에서 마크다운을 만들어 줍니다. 이를 README에 이미지로 넣으세요.

## Step 10 · Retention: How Long Files Stay

[calm] 기본적으로 아티팩트와 로그는 90일 동안 보관됩니다.
[600ms]
[confident] 저장소나 조직에서 이 기간을 바꿀 수 있는데, 상위에서 정한 한도 안에서만 가능합니다. 업로드마다 보존 일수를 따로 정할 수도 있습니다.
[600ms]
[reflective] 새 설정은 새로 만들어지는 아티팩트와 로그에만 적용됩니다. Actions 설정이나 REST API로 지정할 수 있습니다.

## Step 11 · Cost: Faster Runs, Less Storage

[calm] 깨끗한 러너는 실행할 때마다 의존성을 새로 내려받습니다. 그러면 네트워크 사용량, 실행 시간, 비용이 늘어납니다.
[600ms]
[confident] 캐시가 그 다운로드를 대신해서 실행이 빨라집니다. 보존 기간을 줄이고 파일 수를 줄이면 저장하는 양도 줄어듭니다.
[600ms]
[encouraging] Upload artifact는 와일드카드 패턴과 제외 패턴을 지원하므로, 필요한 것만 업로드할 수 있습니다.

## Step 12 · All in One: Pass It On, Don’t Rebuild

[calm] Contoso의 파이프라인은 이제 이번 수업의 도구를 모두 씁니다. 출력은 값을 전달하고, 캐시는 의존성을 보관합니다.
[600ms]
[confident] 아티팩트는 빌드 결과물을 전달합니다. 작업 요약은 보고서를 보여 주고, 배지는 README에 워크플로우 상태를 알려 줍니다.
[600ms]
[proud] 이것이 워크플로우 실행과 출력 관리에 관한 G H 200 기술입니다. 다시 만들지 말고, 넘겨 주세요.
