# 내레이션 대본 - 관리와 배포

**Source animation:** journeys/Fundamentals/ManageAndDeploy.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/azure-resource-manager/management/overview ; https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview ; https://learn.microsoft.com/azure/azure-arc/overview -->

## Step 1 · Built by hand, twice

[calm] Contoso는 테스트와 프로덕션을 따로 수동 구축했습니다. 이미 설정이 달라서, 테스트 성공만으로 프로덕션의 동작을 정확하게 설명할 수 없습니다.
[600ms]
[confident] 배포할 구성을 반복해서 사용할 수 있는 정의가 필요합니다. 우연한 차이는 숨기지 않고, 의도한 차이는 기록해야 합니다.

## Step 2 · Start in the portal

[calm] Maya는 Azure Portal에서 매장 리소스와 설정을 살펴봅니다. 브라우저 화면을 통해 무엇이 있고 각 리소스가 어떻게 구성되었는지 이해할 수 있습니다.
[600ms]
[confident] 포털은 탐색과 개별 작업에 유용합니다. 하지만 긴 수동 작업을 반복하면 일관성을 유지하기 어려워집니다.

## Step 3 · Repeat it with commands

[calm] Azure CLI와 Azure PowerShell은 저장하고 다시 실행할 수 있는 명령으로 리소스를 관리합니다. Cloud Shell은 브라우저에서 이 도구들을 사용할 환경을 제공합니다.
[600ms]
[confident] 저장한 명령으로 작업을 반복할 수 있지만, 팀은 순서와 입력, 권한, 실행 효과를 검토해야 합니다.

## Step 4 · Describe it as code

[calm] 코드형 인프라는 클릭 순서를 기억하는 대신 원하는 리소스를 기술합니다. Bicep이나 Azure Resource Manager 템플릿은 검토하고 버전을 관리할 수 있는 정의를 제공합니다.
[600ms]
[confident] 이 정의가 설명하는 것은 인프라입니다. 그 자체로 업무 데이터를 복사하거나 앱 코드의 모든 부분을 전달하지는 않습니다.

## Step 5 · Same definition, intentional differences

[calm] Contoso는 검토한 하나의 정의를 테스트와 프로덕션에 재사용합니다. 이름과 태그, 용량 같은 의도적인 차이는 매개 변수로 지정해 구조를 이해하기 쉽게 유지합니다.
[600ms]
[confident] 두 환경의 크기가 같을 필요는 없습니다. 차이를 명시해야 팀이 설명하고 재현할 수 있습니다.

## Step 6 · Everything goes through Resource Manager

[calm] 포털 작업, 명령, 템플릿 배포는 Azure Resource Manager를 통해 관리 요청을 보냅니다. 권한과 적용 정책을 확인한 뒤, 리소스 공급자가 리소스를 만들거나 업데이트합니다.
[600ms]
[confident] 이것은 관리 경로입니다. 고객의 결제 요청은 앱과 서비스를 사용하며, 이 리소스 배포 경로를 이용하는 것이 아닙니다.

## Step 7 · Reach beyond Azure

[calm] 창고 서버는 Azure로 옮기지 않았습니다. Azure Arc는 다른 곳에서 실행되는 지원 서버를 Azure의 관리 환경에 연결해, 하이브리드 환경 관리를 돕습니다.
[600ms]
[confident] Arc로 연결해도 서버의 위치는 바뀌지 않습니다. 기존 운영 책임을 유지한 채 창고에서 계속 실행됩니다.

## Step 8 · Manage and Deploy - All in One

[calm] 탐색에는 포털, 작업 반복에는 명령, 일관된 배포에는 검토한 인프라 정의를 사용하세요. Arc는 Azure 밖의 지원 리소스까지 관리를 확장합니다.
[600ms]
[confident] Contoso는 매장이 어떻게 만들어졌는지 설명할 수 있습니다. 마지막 질문은 고객에게 제대로 작동하는지 어떻게 알 수 있느냐입니다.