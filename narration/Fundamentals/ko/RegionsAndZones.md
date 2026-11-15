# 내레이션 대본 - 지역과 가용성 영역

**Source animation:** journeys/Fundamentals/RegionsAndZones.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/reliability/availability-zones-overview ; https://learn.microsoft.com/azure/architecture/aws-professional/regions-zones#multi-region-deployment-and-paired-regions -->

## Step 1 · Where should the shop run?

[calm] 리소스는 정리했지만, 고객에게는 반응이 빠른 매장이 필요하고 데이터에는 적절한 저장 장소가 필요합니다. 위치 선택은 기술뿐 아니라 사업상의 결정입니다.
[600ms]
[confident] Contoso는 고객이 누구인지, 어떤 서비스가 필요한지, 그 위치를 사용할 수 없게 되면 어떻게 할지를 고려합니다.

## Step 2 · Choose a region

[calm] Azure 지역은 데이터 센터를 포함하는 지리적 구역입니다. Contoso는 고객과의 거리, 데이터 및 법적 요건, 필요한 서비스의 제공 여부를 비교합니다.
[600ms]
[confident] 가까운 지역은 네트워크 지연을 줄이는 데 도움이 되지만, 거리만으로 결정할 수는 없습니다. 매장의 다른 요건도 충족해야 합니다.

## Step 3 · Look inside the region

[calm] 클라우드 서비스 뒤에는 장비가 가득한 실제 건물이 있습니다. 데이터 센터에는 작업을 처리하는 서버, 데이터를 보관하는 스토리지, 이를 연결하는 네트워크가 있습니다.
[600ms]
[confident] 그림의 건물 수는 예시이며, 모든 지역의 고정된 개수가 아닙니다. 클라우드도 물리 인프라에 의존합니다.

## Step 4 · Separate the infrastructure

[calm] 가용성 영역은 한 지역 안의 데이터 센터 그룹을 분리하고, 전원과 냉각, 네트워크를 독립적으로 갖춥니다. 따라서 한 영역의 문제가 다른 영역까지 영향을 줄 가능성을 줄입니다.
[600ms]
[confident] Contoso는 지역과 서비스의 지원 여부를 확인합니다. 사용할 수 있는 옵션은 서비스와 배포 구성에 따라 달라집니다.

## Step 5 · One location is not redundancy

[calm] 앱 인스턴스 하나를 특정 영역에 배치해도, 여전히 하나뿐입니다. 영역을 선택하는 것만으로 매장이나 데이터의 다른 복사본이 생기지는 않습니다.
[600ms]
[confident] 그 위치의 장애를 견디려면, 다른 위치에 용량을 준비하고 앱과 데이터를 계속 사용할 수 있도록 설계해야 합니다.

## Step 6 · What if a zone fails?

[calm] 정상 상태, 영역 장애, 그리고 장애 감지 후 경로 전환을 비교하세요. 준비된 두 번째 인스턴스가 있으면 요청을 다른 곳으로 보낼 수 있지만, 라우팅이 장애를 인식해야 합니다.
[600ms]
[confident] 사용 가능한 데이터를 포함해 모든 구성 요소가 함께 작동해야 합니다. 위치 하나를 추가한다고 구매 완료가 보장되지는 않습니다.

## Step 7 · The regional boundary matters

[calm] 여러 영역은 한 지역 내부의 장애에 도움이 됩니다. 하지만 지역 전체를 사용할 수 없다면, 그 영역들은 여전히 같은 지역 경계 안에 있습니다.
[600ms]
[confident] 더 큰 장애에 대비하려면, 다른 지역의 앱 배포와 데이터 복제, 검증된 전환 절차를 포함한 별도의 지역 복구 설계가 필요합니다.

## Step 8 · Check the geography before committing

[calm] Contoso는 복구 위치를 정하기 전에 지리적 조건과 법적 요건을 확인합니다. 지역 쌍이 앱을 자동으로 복사하지는 않으며, 모든 지역에 쌍이 있는 것도 아닙니다.
[600ms]
[confident] 소버린 환경에는 별도의 이용 자격과 서비스 제공 범위도 있습니다. 지도만 보지 말고 업무 요건에 맞춰 선택해야 합니다.

## Step 9 · Regions and Zones - All in One

[calm] 견뎌야 할 장애부터 정하세요. 국소적인 인프라 문제인지, 영역 중단인지, 지역 전체 중단인지에 따라 앱과 데이터, 경로를 적절한 범위에 준비합니다.
[600ms]
[confident] Contoso에는 이제 위치 전략이 있습니다. 다음은 매장의 업무를 실제로 실행할 컴퓨팅 서비스를 선택합니다.