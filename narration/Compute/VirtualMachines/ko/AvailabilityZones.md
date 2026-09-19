# Narrator Script - 가용성 영역에 VM 분산

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · What if a whole zone fails?

[curious] 장애 도메인은 랙 수준의 위험을 분리했습니다. 문제가 랙보다 더 크다면 어떨까요?
[800ms]
[serious] 전원, 냉각, 네트워크 문제로 데이터 센터 위치 전체가 중단될 수 있습니다.
[600ms]
[confident] 가용성 영역은 Contoso에 그 수준의 분리를 제공합니다. 여기서는 기존 가용성 집합을 그대로 변환하는 대신 새로운 배치를 설계합니다.

## Step 2 · Place one VM in a zone

[calm] 먼저 영역이 지정된 머신 하나부터 시작합니다.
[600ms]
[confident] 가상 머신의 영역을 지정하면 지역 안에서 물리적으로 분리된 어느 위치에 실행할지 Azure에 알려 주게 됩니다.
[600ms]
[serious] 이것은 배치 위치만 정합니다. 영역을 선택한다고 두 번째 복사본이 자동으로 생기지는 않습니다.

## Step 3 · Prepare VMs across zones

[determined] 그래서 Contoso는 두 번째 인스턴스를 직접 준비합니다.
[600ms]
[confident] 한 영역에는 머신과 디스크를, 다른 영역에는 별도의 머신과 자체 디스크를 배치합니다. 두 곳 모두 애플리케이션을 설치하고 실행할 준비를 마칩니다.
[600ms]
[reassuring] 이 구성에서는 디스크도 영역별로 배치됩니다. 공유하는 대신 각 인스턴스가 자체 디스크를 갖습니다.

## Step 4 · Configure resilient routing

[curious] 두 머신이 준비되어도 트래픽이 도달할 경로가 필요합니다.
[800ms]
[confident] 영역 중복 프런트엔드를 갖춘 Standard Load Balancer는 영역 하나가 중단되어도 계속 작동하며, 상태 프로브를 통과한 백엔드로 새 연결을 보낼 수 있습니다.
[600ms]
[reassuring] 프런트엔드 자체도 영역 중복이어야 합니다. 그렇지 않으면 단일 장애점의 위치만 바뀐 셈입니다.

## Step 5 · Do not forget the data

[serious] 이 부분을 놓치는 경우가 많습니다.
[600ms]
[calm] 일반 관리 디스크만으로는 상점 애플리케이션의 상태가 영역 사이에 자동 복제되지 않습니다.
[600ms]
[confident] 주문을 저장하는 데이터베이스나 공유 스토리지에는 별도의 복원력 설계가 필요합니다. 이 결정도 명시적으로 내려야 합니다.

## Step 6 · A zone goes unavailable

[curious] 이제 영역 장애 상태로 바꾸고 결과를 살펴보세요.
[600ms]
[calm] 프로브가 장애를 감지하면 프런트엔드는 해당 영역으로 보내던 트래픽을 중단하고, 새 연결은 정상 영역으로 보냅니다.
[600ms]
[serious] 그러려면 남은 영역에 트래픽을 감당할 여유가 있어야 합니다. 데이터 종속성도 정상이고 프로브도 올바르게 구성되어 있어야 합니다.

## Step 7 · Zonal VMs - All in One

[reflective] 이 설계에는 함께 작동해야 하는 네 가지 요소가 있습니다.
[600ms]
[confident] 분리된 배치, 준비된 애플리케이션 인스턴스, 영역 중복 라우팅, 그리고 데이터 계획입니다.
[600ms]
[proud] 네 가지를 모두 갖추면 영역 하나를 잃어도 Contoso가 상점을 계속 운영할 수 있는 기반이 마련됩니다.
