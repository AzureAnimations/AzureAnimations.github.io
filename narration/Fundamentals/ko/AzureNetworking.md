# 내레이션 대본 - Azure 네트워킹

**Source animation:** journeys/Fundamentals/AzureNetworking.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Sources: https://learn.microsoft.com/azure/private-link/private-endpoint-overview ; https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/expressroute/secure-expressroute#data-protection -->

## Step 1 · An order needs the stock count

[calm] 고객이 결제 단계에 도착했습니다. App Service 웹사이트는 재고 가상 머신을 호출하지만, 이 백엔드는 재고를 확인할 SQL 데이터베이스와의 연결이 아직 필요합니다.
[600ms]
[confident] 이 수업에서는 빠져 있는 백엔드와 데이터베이스 사이의 경로를 만듭니다. 앱을 실행하고 기록을 저장하는 것만으로 둘이 연결되지는 않습니다.

## Step 2 · Give the backend a private address

[calm] Contoso는 재고 가상 머신을 VNet이라는 가상 네트워크에 둡니다. 프라이빗 주소는 연결된 사설 네트워크 안에서 이 머신을 식별합니다.
[600ms]
[confident] SQL 데이터베이스는 별도의 관리형 서비스입니다. 백엔드에 주소를 준다고 데이터베이스가 네트워크 안으로 이동하거나 데이터 권한이 생기지는 않습니다.

## Step 3 · Organize the address space

[calm] 서브넷은 가상 네트워크 안의 더 작은 주소 범위입니다. Contoso는 앱용 범위를 하나 쓰고, 프라이빗 서비스 연결용으로 다른 범위를 예약합니다.
[600ms]
[confident] 서브넷은 주소를 정리하지만, 그 자체가 보안 규칙은 아닙니다. 어떤 통신을 허용할지 적절한 트래픽 제어도 필요합니다.

## Step 4 · Find inventory by name

[calm] 앱은 주소를 외우는 대신 데이터베이스 이름을 사용합니다. 프라이빗 DNS가 그 이름을 그림에 보이는 프라이빗 엔드포인트 주소로 바꿉니다.
[600ms]
[confident] DNS 응답은 연결을 시도할 대상을 알려 줍니다. 네트워크 경로나 재고 기록을 읽을 권한을 만들어 주지는 않습니다.

## Step 5 · Connect privately to the database

[calm] 승인된 프라이빗 엔드포인트는 Contoso 서브넷의 네트워크 인터페이스를 통해 SQL에 비공개 연결을 제공합니다. 관리형 데이터베이스 자체는 여전히 그 서브넷 밖에 있습니다.
[600ms]
[confident] 퍼블릭 네트워크 액세스는 별도로 끄고 데이터베이스 권한도 확인합니다. 프라이빗 경로와 허가된 데이터 접근은 다른 요건입니다.

## Step 6 · Reach the fulfilment network

[calm] 주문 처리 앱은 다른 가상 네트워크에서 실행됩니다. 피어링은 Microsoft 백본을 통해 두 네트워크를 연결하며, 관련 규칙이 허용할 때 리소스가 비공개로 통신할 수 있습니다.
[600ms]
[confident] 각 네트워크의 주소 공간은 유지됩니다. 연결한다고 하나의 리소스 그룹이 되거나 보안 확인이 사라지지는 않습니다.

## Step 7 · Keep the warehouse connected

[calm] 창고에는 자체 시설에서 실행하는 시스템이 남아 있습니다. 사이트 간 VPN은 인터넷 위의 암호화된 터널로 창고 네트워크와 Azure를 연결합니다.
[600ms]
[confident] 창고를 옮기지 않고도 매장의 하이브리드 환경에 참여할 수 있습니다. 라우팅과 접근 제어는 여전히 설정해야 합니다.

## Step 8 · Consider a private circuit

[calm] 연결 요건이 다르다면, Contoso는 연결 공급자를 통해 ExpressRoute를 마련할 수 있습니다. VPN의 인터넷 경로 대신 Microsoft 클라우드 서비스로 향하는 프라이빗 연결을 제공합니다.
[600ms]
[confident] 프라이빗이 곧 암호화라는 뜻은 아닙니다. 보호가 필요하다면 ExpressRoute에도 적절한 암호화 설계가 필요합니다.

## Step 9 · The order can reach inventory

[calm] 이제 연결해 보세요. 백엔드에는 주소가 있고, DNS는 데이터베이스 이름을 확인하며, 승인된 엔드포인트가 경로를 제공합니다. 필요한 권한이 있으면 재고 조회 결과를 결제로 돌려줄 수 있습니다.
[600ms]
[confident] 이 예에서 창고는 VPN을 사용합니다. 다음은 매장의 다른 데이터를 위한 스토리지를 선택합니다.