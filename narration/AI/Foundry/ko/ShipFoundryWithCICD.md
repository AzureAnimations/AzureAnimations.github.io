# Narrator Script — Foundry · Ship a Foundry Project with CI/CD

**Source animation:** [ShipFoundryWithCICD.html](../../../../journeys/AI/Foundry/ShipFoundryWithCICD.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli>
- <https://learn.microsoft.com/azure/foundry/how-to/evaluation-github-action>
- <https://learn.microsoft.com/azure/foundry/how-to/create-resource-template>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent>

---

## Step 1 · Portal clicks do not scale: why pipelines

[calm] Foundry 프로젝트를 손으로 설정하는 건 한 번이면 됩니다. 하지만 세 번째 복사본쯤 되면, 개발, 테스트, 프로덕션 환경이 어느새 서로 달라져 있습니다.
[600ms]
[serious] 이런 드리프트 때문에 프로덕션에서 뜻밖의 문제가 터집니다.
[600ms]
[confident] 파이프라인은 매번 같은 단계를 똑같이 반복합니다. 이 수업에서는 내내 Contoso 아웃피터스와 이 회사의 헬프 봇을 예로 듭니다.

## Step 2 · What lives in the repo

[curious] 인프라와 에이전트 정의, 평가 데이터는 모두 파이프라인 옆에서 Git으로 관리합니다.
[600ms]
[confident] 리포지토리가 유일한 기준 원본이 됩니다.
[600ms]
[calm] 여기 나오는 폴더 이름은 가상의 구성입니다. 실제 리포지토리에서는 같은 네 부분을 다르게 구성해도 됩니다.

## Step 3 · Provision the Foundry project as code

[calm] Bicep 파일에 Foundry 리소스와 프로젝트를 정의합니다. 파이프라인은 환경마다 매개변수 파일을 따로 두고 Azure CLI나 azd로 배포합니다.
[600ms]
[confident] 이미 포털에서 리소스를 만들었나요? Microsoft Learn에서는 그 리소스를 Bicep 파일로 내보내라고 안내합니다.
[600ms]
[encouraging] 그런 다음 코드에 박아 둔 값을 매개변수로 바꾸세요.

## Step 4 · Deploy a model: name, version, type, capacity

[curious] 모델 배포도 코드입니다. 에이전트가 부르는 이름 뒤에 무엇이 있을지는 네 가지 값이 정합니다. 이름, 버전, 유형, 용량입니다.
[600ms]
[calm] 배포마다 이름만 다르면, 같은 모델을 여러 번 배포해도 됩니다.
[600ms]
[confident] 에이전트는 배포 이름만 요청합니다.

## Step 5 · Create or update the agent from code

[calm] 파이프라인의 한 단계에서 SDK를 호출해 에이전트를 만듭니다.
[600ms]
[impressed] 문장 하나만 고쳐도, 이전 버전을 덮어쓰지 않고 새 버전으로 저장됩니다.
[600ms]
[confident] 코드는 에이전트를 이름과 버전으로 가리킵니다. 버전이 바뀌어도 에이전트의 엔드포인트 주소는 그대로입니다.

## Step 6 · Dev, test, prod: one pipeline, three projects

[calm] 하나의 소스 리비전이 개발에서 테스트, 프로덕션으로 차례로 넘어갑니다.
[600ms]
[confident] 환경마다 고유한 Foundry 프로젝트를 가리키고, 설정과 권한도 각자 따로 갖습니다.
[600ms]
[serious] 환경 이름만으로는 아무것도 분리되지 않습니다. 환경마다 별도의 Foundry 프로젝트를 연결해야 합니다.

## Step 7 · Evaluation as a quality gate

[curious] 테스트 환경에 배포하고 나면, 파이프라인이 정해진 테스트 질문 세트를 평가기에 돌립니다.
[600ms]
[serious] 통과율이 기준선보다 낮으면 파이프라인이 멈춥니다. 여기 나오는 점수는 가상입니다.
[600ms]
[calm] 평가용 GitHub Action은 미리 보기 상태입니다. 비용을 줄이려면 커밋할 때마다 평가를 돌리지는 마세요.

## Step 8 · Secrets and identity in the pipeline

[calm] 워크플로는 단기 토큰으로 로그인합니다. 이 토큰은 페더레이션 자격 증명을 통해 Microsoft Entra가 신뢰합니다.
[600ms]
[proud] 그래서 저장하고 교체하고 유출될까 걱정해야 하는 클라이언트 비밀이 없습니다.
[600ms]
[serious] 페더레이션 자격 증명의 주체는 워크플로가 실제로 보내는 토큰과 일치해야 합니다. 그리고 ID에는 꼭 필요한 역할만, 가장 좁은 범위로 부여하세요.

## Step 9 · Roll back and watch after release

[curious] 새 버전에 트래픽 일부만 보내고 지켜보세요. 90 대 10은 예시로 나눈 비율일 뿐입니다.
[600ms]
[confident] 이상이 없으면 비율을 올리고, 문제가 있으면 엔드포인트를 안정 버전으로 되돌리세요.
[600ms]
[reassuring] 엔드포인트가 제공하는 버전을 바꾼다고 해서 코드를 다시 빌드하거나 새 버전을 만들지는 않습니다.

## Step 10 · Pipeline at a glance

[calm] 커밋에서 모니터링되는 릴리스까지, 모든 단계가 코드이고, 모든 승격에는 게이트가 있고, 저장해 둔 비밀은 없습니다.
[600ms]
[reflective] 이건 하나의 패턴일 뿐, 유일한 파이프라인은 아닙니다. 같은 원리가 GitHub Actions에서도, Azure DevOps에서도 통합니다.
[600ms]
[determined] 프로젝트를 파이프라인에 올리면, 모든 릴리스를 똑같이 반복할 수 있습니다.
