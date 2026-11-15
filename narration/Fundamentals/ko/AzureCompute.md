# 내레이션 대본 - Azure 컴퓨팅

**Source animation:** journeys/Fundamentals/AzureCompute.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/virtual-machines/availability-set-overview -->

## Step 1 · How much do you want to manage?

[calm] Contoso는 웹사이트를 실행하고, 주문 이벤트를 처리하며, 직원에게 업무 앱을 제공해야 합니다. 컴퓨팅은 이 일을 실행하는 처리 능력입니다.
[600ms]
[confident] 모든 업무에 같은 서비스가 필요한 것은 아닙니다. 각 업무의 요건과 직접 관리하려는 범위에 맞춰 선택합니다.

## Step 2 · Take the whole machine

[calm] 재고 백엔드는 운영 체제를 제어해야 하므로 가상 머신을 선택합니다. 프로세서와 메모리는 작업을 실행하고, 디스크는 운영 체제와 데이터를 저장하며, 네트워크 인터페이스는 연결을 제공합니다.
[600ms]
[confident] 물리 하드웨어는 Microsoft가 운영합니다. 가상 머신과 그 안의 게스트 운영 체제는 Contoso가 설정하고 유지 관리합니다.

## Step 3 · Prepare the VM workload

[calm] 가상 머신 한 대에도 장애가 생길 수 있습니다. 가용성 집합은 특정 하드웨어 장애와 유지 관리 업데이트의 영향을 분리하는 그룹에 머신을 나눠 배치합니다. 확장 집합은 여러 대의 관리와 확장을 돕습니다.
[600ms]
[confident] 어느 쪽도 매장 전체의 복구를 대신 설계하지는 않습니다. 앱과 데이터, 트래픽 처리도 준비해야 합니다.

## Step 4 · Package the app instead

[calm] 컨테이너는 앱 코드와 필요한 종속 항목을 하나로 묶습니다. Contoso는 이 패키지를 테스트에서 호환되는 프로덕션 환경으로 옮기면서 소프트웨어 구성의 차이를 줄일 수 있습니다.
[600ms]
[confident] 패키징과 호스팅은 다릅니다. 컨테이너에도 실행할 장소와 설정, 연결, 적절한 보안이 필요합니다.

## Step 5 · Let the platform run it

[calm] 고객용 웹사이트에는 App Service를 선택합니다. 웹앱과 다른 소프트웨어가 호출하는 인터페이스를 위한 관리형 호스팅을 제공합니다.
[600ms]
[confident] Contoso는 기반 운영 체제를 유지하는 대신 코드를 배포하고 앱을 설정합니다. 재고 백엔드는 요건이 다르므로 가상 머신에 남습니다.

## Step 6 · React to an order

[calm] 주문이 도착하는 것은 이벤트입니다. 어떤 일이 발생하면 관련 작업을 시작해야 합니다. Azure Functions는 이에 반응해 관리형 인프라에서 Contoso의 코드를 실행할 수 있습니다.
[600ms]
[confident] 서버리스도 서버는 있습니다. 서비스가 그 인프라를 관리한다는 뜻이며, 확장 방식과 요금은 호스팅 플랜에 따라 달라집니다.

## Step 7 · Deliver desktops, not servers

[calm] 창고 직원에게는 업무용 데스크톱과 앱이 필요합니다. Azure Virtual Desktop은 이런 환경을 원격으로 제공하므로, 직원이 클라우드 서버 옆에서 작업할 필요가 없습니다.
[600ms]
[confident] 직원의 작업 환경을 위한 서비스입니다. Contoso의 공개 쇼핑 웹사이트를 호스팅하는 서비스는 아닙니다.

## Step 8 · Compute Options - All in One

[calm] 업무와 서비스를 연결해 보세요. 운영 체제 제어에는 가상 머신, 패키징에는 컨테이너, 웹에는 App Service, 이벤트에는 Functions, 직원에게는 Virtual Desktop입니다.
[600ms]
[confident] 코드가 실행될 곳은 정했습니다. 다음은 재고 백엔드에 재고 데이터베이스로 연결되는 승인된 경로가 필요합니다.