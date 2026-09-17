# Narrator Script - 가용성 영역에 VM 분산

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · What if a whole zone fails?

[calm] 영역 전체에 장애가 생기면?
[600ms]
Contoso는 공유 데이터 센터 인프라 경계를 넘어 분리가 필요합니다.
[600ms]
[serious] 새 영역 설계이며 기존 가용성 집합을 바로 변환하는 것이 아닙니다.

## Step 2 · Place one VM in a zone

[calm] VM을 한 영역에 배치.
[600ms]
영역 VM은 선택한 한 영역에서 실행됩니다. 두 번째 VM이 생성되지는 않습니다.
[600ms]
[serious] 영역을 선택해도 앱 인스턴스가 복제되지 않습니다.

## Step 3 · Prepare VMs across zones

[calm] 여러 영역에 VM 준비.
[600ms]
별도 영역에 VM과 디스크 쌍을 배포하고 각각 앱을 준비합니다.
[600ms]
[serious] 앱 복제본과 부하 분산은 별도로 구성합니다.

## Step 4 · Configure resilient routing

[calm] 복원력 있는 경로 구성.
[600ms]
영역 중복 프런트엔드의 Standard Load Balancer가 새 연결을 정상 백엔드에 전달합니다.
[600ms]
[serious] 영역 중복 프런트엔드

## Step 5 · Do not forget the data

[calm] 데이터도 고려.
[600ms]
데이터 종속성의 복원력은 별도입니다. 일반 디스크는 앱 상태를 복제하지 않습니다.
[600ms]
[serious] 복원력은 별도 구성

## Step 6 · A zone goes unavailable

[calm] 한 영역을 사용할 수 없게 됨.
[600ms]
여유 용량과 정상 데이터가 있으면 감지 후 새 연결이 정상 영역을 사용합니다.
[600ms]
[serious] 여유 용량, 정상 데이터 종속성, 상태 프로브 설정을 전제로 합니다.

## Step 7 · Zonal VMs - All in One

[calm] 영역 VM - 전체 보기.
[600ms]
분리된 배치, 준비된 앱, 복원력 있는 경로, 데이터 계획이 함께 작동합니다.
[600ms]
[serious] 앱, 데이터 및 장애 조치를 준비해야 합니다.
