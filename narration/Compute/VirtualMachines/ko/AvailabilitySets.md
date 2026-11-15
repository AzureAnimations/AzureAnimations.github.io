# Narrator Script - 가용성 집합

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · One host, one point of failure

[serious] 상점은 작동하지만 가상 머신 하나에만 의존합니다.
[600ms]
[curious] 물리 호스트에 장애가 생기거나 플랫폼 유지 관리를 위해 호스트를 중지해야 하면 어떻게 될까요?
[800ms]
[calm] 상점도 함께 멈춥니다. 아무리 잘 구성해도 머신 하나는 단일 장애점입니다.

## Step 2 · Prepare another application instance

[confident] 먼저 같은 애플리케이션을 실행할 두 번째 머신을 준비합니다.
[600ms]
[serious] Azure가 상점을 대신 복제하지는 않습니다. 팀이 두 번째 가상 머신을 배포하고 애플리케이션을 설치한 뒤, 두 머신 앞에 부하 분산 장치를 구성합니다.
[600ms]
[reassuring] 준비된 두 인스턴스가 이 레슨에서 다룰 모든 설계의 출발점입니다.

## Step 3 · Separate fault domains

[calm] 이제 두 머신을 서로 분리해 배치하도록 Azure에 지정합니다.
[600ms]
[confident] 가용성 집합은 머신을 여러 장애 도메인에 분산합니다. 장애 도메인은 전원과 네트워크 스위치를 공유하는 하드웨어 그룹입니다.
[600ms]
[reassuring] 랙 하나에 장애가 생겨도 다른 도메인의 인스턴스는 서비스를 계속할 수 있습니다.

## Step 4 · Separate update domains

[calm] 같은 집합은 머신을 업데이트 도메인으로도 나눕니다.
[600ms]
[confident] 계획된 플랫폼 유지 관리는 그룹별로 차례대로 진행되므로 모든 인스턴스가 동시에 재부팅되는 것을 방지합니다.
[600ms]
[serious] 이것은 가용성 영역과 다릅니다. 장애 도메인과 업데이트 도메인은 데이터 센터 내부의 위험을 분리하는 단위입니다.

## Step 5 · A hardware failure unfolds

[curious] 시나리오 상태를 차례로 바꾸며 어떤 순서로 일이 일어나는지 살펴보세요.
[600ms]
[serious] 먼저 인스턴스가 중지됩니다. 그다음 상태 프로브가 장애를 감지하고 트래픽 대상에서 제외합니다.
[600ms]
[calm] 새 연결은 정상 머신으로 향합니다. 중지된 머신에 연결되어 있던 요청은 끊길 수 있으므로 애플리케이션은 재시도에 대비해야 합니다.

## Step 6 · Know the boundary

[reflective] 이 설계가 보호하지 못하는 범위도 알아야 합니다.
[600ms]
[serious] 가용성 집합은 데이터 센터 안에서 하드웨어 장애와 계획된 유지 관리의 영향을 분리합니다. 영역 전체 장애를 해결하거나 애플리케이션 오류를 고치지는 않습니다.
[600ms]
[confident] Microsoft는 더 폭넓은 가용성 옵션을 위해 Flexible 오케스트레이션 확장 집합을 권장합니다. 가용성 집합도 계속 지원되며 사용 중단된 기능은 아닙니다.

## Step 7 · Availability Sets - All in One

[reflective] 이제 각 요소를 하나로 연결해 봅시다.
[600ms]
[confident] 장애 도메인은 하드웨어 위험을 나누고, 업데이트 도메인은 계획된 유지 관리를 나눕니다. 부하 분산 장치는 정상 인스턴스로 트래픽을 보냅니다.
[600ms]
[determined] 애플리케이션과 복제본, 데이터의 준비는 여전히 팀의 책임입니다. 다음은 가용성 영역입니다.
