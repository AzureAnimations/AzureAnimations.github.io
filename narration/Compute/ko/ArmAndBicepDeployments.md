# Narrator Script — Compute · ARM templates and Bicep: read, change, deploy, export

**Source animation:** [ArmAndBicepDeployments.html](../../../journeys/Compute/ArmAndBicepDeployments.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/syntax>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/deployment-modes>
- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/deploy-what-if>

---

## Step 1 · Built by hand, twice

[calm] Contoso의 Priya는 포털에서 클릭해 가며 Dev용 스토리지 계정을 만들었고, Prod용도 똑같이 다시 만들었습니다.
[600ms]
[concerned] 손으로 만들다 보니 두 계정이 어느새 서로 달라졌습니다. 여기는 설정이 하나, 저기는 태그가 하나 다른데, 아무도 눈치채지 못했습니다.
[600ms]
[confident] 템플릿 하나면 이런 추측이 필요 없습니다. 리소스를 한 번 정의해 두고, 매번 같은 방식으로 배포하면 됩니다.

## Step 2 · Anatomy of an ARM template

[calm] ARM 템플릿은 JSON 파일이고, 꼭 필요한 부분은 세 가지뿐입니다. 스키마와 콘텐츠 버전, 리소스입니다.
[600ms]
[confident] 실제 파일에는 보통 매개변수와 변수, 함수, 출력이 더해집니다. 그래서 같은 파일 하나로 Dev와 Prod에 모두 쓸 수 있습니다.
[600ms]
[reassuring] 화면의 JSON은 들어가도록 줄여서 보여 드리지만, 구조는 실제 템플릿에서 보게 될 모습 그대로입니다.

## Step 3 · The same thing in Bicep

[curious] 같은 스토리지 계정을 Bicep으로 쓰면 이렇습니다. 읽기 커서를 따라 블록별로 보세요.
[600ms]
[impressed] 더 짧고, 짝을 맞춰야 하는 JSON 구두점도 없습니다.
[600ms]
[confident] Bicep은 선언형이라서 블록 순서가 바뀌어도 배포 방식은 달라지지 않습니다. Learn에서는 새 작업에 Bicep을 권장합니다. 기능은 같고 문법은 더 쉽습니다.

## Step 4 · Modify an existing ARM template

[calm] 대부분은 이미 있는 파일을 수정하게 됩니다. 매개변수를 추가하고, SKU에 사용하고, 태그를 추가해 보세요.
[600ms]
[confident] 그런 다음 같은 파일을 다시 배포하세요. 변경 내용을 기록하려고 콘텐츠 버전을 올려도 됩니다.
[600ms]
[serious] 하지만 조심하세요. 다시 배포하면 파일에 있는 모든 속성이 다시 적용되기 때문에, 빠뜨린 속성은 기본값으로 초기화됩니다.

## Step 5 · Modify an existing Bicep file

[calm] 매주 쓰게 될 Bicep 도구 세 가지입니다.
[600ms]
[confident] 모듈은 파일 하나를 작은 파일들로 나누고, 다른 파일에서 그 모듈을 배포합니다. 루프는 리소스를 반복해서 만드는데, 복사본마다 고유한 이름이 필요합니다.
[600ms]
[curious] 그리고 existing 키워드는 이미 배포된 리소스를 가리킵니다. 새로 만들지 않고 참조만 합니다.

## Step 6 · Deploy it: choose the scope

[calm] 명령어가 배포 위치를 정합니다. JSON 템플릿이든 Bicep 파일이든 같은 명령어로 배포합니다.
[600ms]
[confident] 파일은 기본적으로 리소스 그룹에 배포되고, 대상 범위를 지정할 때만 다른 곳으로 갑니다.
[600ms]
[reflective] 구독, 관리 그룹, 테넌트 배포에서는 명령어에 위치도 지정해야 합니다. 배포 기록 자체도 어딘가에 저장되어야 하기 때문입니다.

## Step 7 · Incremental, Complete and what-if

[calm] 증분 모드가 기본값이고, 템플릿에 나오지 않는 리소스는 그대로 둡니다.
[600ms]
[serious] 전체 모드는 템플릿에 없는 리소스를 삭제하기 때문에 권장하지 않고, 점차 없어지는 중입니다. 삭제가 필요하면 배포 스택을 쓰세요.
[600ms]
[determined] 스위치를 바꿔서 차이를 확인해 보세요. 그리고 변경 내용을 미리 볼 수 있도록 항상 what-if부터 실행하세요.

## Step 8 · Export a deployment as a template

[curious] 리소스는 있는데, 파일은 아무도 보관하지 않았습니다. 이럴 땐 어떻게 할까요?
[600ms]
[confident] 템플릿을 내보내면 됩니다. 지금 그룹 상태를 스냅샷으로 내보내거나, 과거 배포에 쓴 템플릿을 그대로 내보낼 수 있습니다.
[600ms]
[reassuring] 포털에서 리소스 그룹의 템플릿 내보내기를 선택하거나, Deployments를 열어서 배포를 하나 고르고 Template을 선택하세요.

## Step 9 · Convert: decompile and build

[calm] Bicep 도구로 두 형식을 오갈 수 있습니다.
[600ms]
[confident] 디컴파일은 ARM 템플릿을 Bicep으로 바꾸고, 빌드는 Bicep을 ARM 템플릿으로 바꿉니다. 둘은 기능적으로 같습니다.
[600ms]
[hesitant] 디컴파일은 최선을 다하는 방식입니다. JSON에서 Bicep으로 바뀌는 결과가 항상 같다고 보장되지는 않기 때문입니다. 경고나 오류가 나오면 수정하세요.

## Step 10 · Troubleshoot a failed deployment

[serious] 배포 오류는 세 종류가 있고, 종류마다 나타나는 위치가 다릅니다.
[600ms]
[confident] 유효성 검사 오류와 사전 검증 오류는 활동 로그에는 나오지만, 배포 기록에는 나오지 않습니다.
[600ms]
[curious] 구문 오류가 있는 Bicep 파일은 컴파일조차 되지 않으니 활동 로그에도 없습니다. 그러니 먼저 어떤 종류의 오류인지 파악하세요.

## Step 11 · ARM, Bicep or template spec: pick one

[calm] 지금 하려는 작업에 맞춰 고르세요. ARM 템플릿과 Bicep은 기능이 같고, Learn에서는 문법이 쉬운 Bicep을 권장합니다.
[600ms]
[confident] 템플릿 사양은 템플릿을 Azure에 저장합니다. Azure RBAC로 공유할 수 있고, 템플릿에 쓰기 권한이 없는 사람도 배포할 수 있습니다.
[600ms]
[proud] 마지막으로 A Z 104 기술에 비춰 점검해 보세요. ARM 템플릿이나 Bicep 파일로 리소스 배포를 자동화하는 것입니다.
