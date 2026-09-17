# Narrator Script - 가용성 집합

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · One host, one point of failure

[calm] 호스트 하나가 단일 장애점.
[600ms]
상점은 VM 하나에 의존하며 호스트 장애로 앱이 중단될 수 있습니다.
[600ms]
[serious] VM 하나가 작동한다고 고가용성 설계가 완성되지는 않습니다.

## Step 2 · Prepare another application instance

[calm] 다른 앱 인스턴스 준비.
[600ms]
Contoso는 두 번째 VM을 배포하고 앱과 부하 분산을 별도로 구성합니다.
[600ms]
[serious] 앱 복제본과 부하 분산은 별도로 구성합니다.

## Step 3 · Separate fault domains

[calm] 장애 도메인 분리.
[600ms]
가용성 집합은 공유 하드웨어 종속성 그룹에 VM을 분산합니다.
[600ms]
[serious] 장애 및 업데이트 도메인은 가용성 영역이 아닙니다.

## Step 4 · Separate update domains

[calm] 업데이트 도메인 분리.
[600ms]
계획된 플랫폼 유지 관리를 위해 VM을 그룹화하며 지리적 영역이 아닙니다.
[600ms]
[serious] 장애 및 업데이트 도메인은 가용성 영역이 아닙니다.

## Step 5 · A hardware failure unfolds

[calm] 하드웨어 장애의 진행.
[600ms]
VM이 먼저 실패한 후 프로브가 감지합니다. 새 연결은 정상 인스턴스로 전달됩니다.
[600ms]
[serious] 상태 감지에는 시간이 걸리며 기존 연결이 그대로 이전되지는 않습니다.

## Step 6 · Know the boundary

[calm] 보호 경계 이해.
[600ms]
가용성 집합은 영역 전체 장애를 방지하거나 게스트 앱을 복구하지 않습니다.
[600ms]
[serious] Microsoft는 더 폭넓은 가용성 기능에 VMSS Flexible을 권장합니다. 가용성 집합은 사용 중단되지 않았습니다.

## Step 7 · Availability Sets - All in One

[calm] 가용성 집합 - 전체 보기.
[600ms]
장애 도메인은 하드웨어 위험을, 업데이트 도메인은 계획 유지 관리를 분리합니다. 앱 준비도 필요합니다.
[600ms]
[serious] 앱 복제본과 부하 분산은 별도로 구성합니다.
