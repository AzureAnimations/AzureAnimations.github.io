# 내레이션 대본 - 관리와 배포

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/cloud-shell/overview ; https://learn.microsoft.com/powershell/module/az.resources/get-azresourcegroup ; https://learn.microsoft.com/azure/azure-arc/servers/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso에는 테스트용 VM 한 개와 프로덕션용 VM 두 개가 있습니다. 추가 용량은 계획했지만 프로덕션의 Environment 태그 누락은 수동 설정 과정에서 생긴 실수입니다.
[600ms]
[confident] 검토된 인프라 정의에 설계를 기록하고 매개 변수로 승인된 차이를 명시합니다. 이렇게 하면 의도한 선택과 구성 드리프트를 구분할 수 있습니다.

## Step 2 · Start in the portal

[calm] Maya는 브라우저 기반 그래픽 인터페이스인 Azure Portal에서 프로덕션 VM을 확인합니다. 구독, 리소스 그룹, 지역, 크기, 태그를 살펴보고 액세스 제어에서 관리 권한을 확인합니다.
[600ms]
[confident] 시각적인 확인이나 개별 작업에는 포털을 선택합니다. 관리 요청은 여전히 Resource Manager를 사용하므로 인터페이스를 바꿔도 권한이나 정책을 우회할 수 없습니다.

## Step 3 · Repeat it with commands

[calm] 두 명령은 모두 현재 구독의 리소스 그룹을 나열합니다. Azure CLI는 에이 제트로 시작하는 명령을 사용하고, Azure PowerShell은 개체를 반환하는 Az cmdlet과 파이프라인을 사용합니다.
[600ms]
[confident] Cloud Shell은 Bash 또는 PowerShell과 도구가 미리 설치된 브라우저 실행 환경입니다. 도구는 로컬에서도 실행할 수 있습니다. 로그인과 권한이 필요하며 Cloud Shell이 Azure 리소스를 무료로 제공하는 것은 아닙니다.

## Step 4 · Describe it as code

[calm] 코드형 인프라는 원하는 리소스 상태를 기록합니다. Bicep은 간결한 선언적 구문을 제공하고 ARM JSON 템플릿으로 컴파일됩니다. 매개 변수는 입력을, 리소스는 배포할 구성을, 출력은 반환할 값을 나타냅니다.
[600ms]
[confident] 정의의 버전을 관리하고 변경을 검토합니다. 멱등성은 같은 입력으로 배포를 반복해도 리소스를 중복 생성하지 않고 같은 상태에 도달할 수 있음을 뜻합니다.

## Step 5 · Same definition, intentional differences

[calm] 이 예는 Contoso 상점의 스토리지 부분입니다. 테스트나 프로덕션을 고르고 스토리지 중복성을 선택합니다. 매개 변수 파일은 같은 정의에 값을 전달해 이름, Environment 태그, 스토리지 SKU를 적용합니다.
[600ms]
[confident] 배포 전에 결과를 미리 확인하세요. 미리 보기는 리소스를 만들지 않습니다. 이 템플릿은 상점 VM을 배포하거나 고객 데이터를 복사하지도 않습니다. 해당 정의와 작업은 별도입니다.

## Step 6 · The management request path

[calm] Contoso가 스토리지 생성을 요청합니다. Reader이면 권한 확인에 실패합니다. Contributor여도 Environment 태그가 없으면 예제 Deny 정책이 차단합니다. 권한과 태그가 있으면 모의 요청이 Microsoft Storage에 도달해 성공합니다.
[600ms]
[confident] 올바른 코드도 권한이나 정책을 우회하지는 못합니다. 이 시뮬레이션은 Azure의 모든 오류를 재현하지 않습니다. 고객 결제는 관리 배포 경로가 아닌 별도의 데이터 경로를 사용합니다.

## Step 7 · Reach beyond Azure

[calm] Contoso는 창고 서버에 Connected Machine 에이전트를 설치해 Azure Arc에 연결합니다. 서버는 인벤토리, 액세스 제어, 지원되는 관리 서비스를 위한 Azure 리소스로 표현됩니다. Arc는 Kubernetes와 SQL Server도 지원합니다.
[600ms]
[confident] 관리는 마이그레이션이 아닙니다. 서버는 창고에 남고 운영 체제 관리도 필요합니다. 연결된 Azure 서비스에는 별도 요금이 발생할 수 있습니다.

## Step 8 · Manage and Deploy - All in One

[calm] 각 작업에 맞는 도구를 선택하세요. 시각적 확인은 포털, 명령 반복은 CLI나 PowerShell, 선언적 인프라는 ARM이나 Bicep입니다. Arc는 Azure 밖의 지원 리소스로 관리를 확장합니다.
[600ms]
[confident] 도구는 서로 보완하며 어떤 도구도 권한이나 정책을 우회하지 않습니다. Contoso는 관리 선택을 설명할 수 있습니다. 다음은 모니터링으로 상점 운영 상태를 파악합니다.