# Narrator Script - 가상 머신 확장 집합

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · Demand changes

[calm] 수요는 변합니다.
[600ms]
Contoso는 큰 VM 하나로 충분하다고 가정하지 않고 수요에 따라 늘릴 용량이 필요합니다.
[600ms]
[serious] 예시 정책입니다. 평가, 대기, 프로비전, 준비에 시간이 걸립니다.

## Step 2 · Manage a group of VMs

[calm] VM 그룹 관리.
[600ms]
확장 집합은 VM 인스턴스를 관리합니다. 앱과 부하 분산 장치는 별도로 구성합니다.
[600ms]
[serious] 앱 복제본과 부하 분산은 별도로 구성합니다.

## Step 3 · Choose an orchestration mode

[calm] 오케스트레이션 모드 선택.
[600ms]
Flexible은 표준 VM, Uniform은 확장 집합 전용 VM 리소스를 사용합니다. 이후는 Flexible입니다.
[600ms]
[serious] 모드는 생성 시 선택하며 나중에 변경할 수 없습니다. 이 과정은 Flexible을 사용합니다.

## Step 4 · Configure a bounded scaling policy

[calm] 범위가 있는 확장 정책.
[600ms]
평가 후 목표는 VM 2~4대입니다. 새 VM은 준비가 완료된 후 트래픽을 받습니다.
[600ms]
[serious] 예시 정책입니다. 평가, 대기, 프로비전, 준비에 시간이 걸립니다.

## Step 5 · Combine scaling with zone placement

[calm] 확장과 영역 배치 결합.
[600ms]
구성하면 여러 가용성 영역에 걸칠 수 있습니다. 용량과 배치는 별도 결정입니다.
[600ms]
[serious] 영역 분산은 설정해야 하며 비영역 확장 집합은 이를 보장하지 않습니다.

## Step 6 · Separate routing health from repair

[calm] 라우팅 상태와 복구 분리.
[600ms]
프로브는 트래픽을 안내합니다. Flexible 자동 복구는 Application Health 확장과 복구 정책을 사용합니다.
[600ms]
[serious] Flexible 복구에는 Application Health 확장과 유예 기간이 있는 복구 정책이 필요합니다.

## Step 7 · Scale in with the application in mind

[calm] 앱을 고려한 축소.
[600ms]
초과 용량을 제거하기 전에 드레이닝, 종료, VM 외부의 영구 상태를 설계합니다.
[600ms]
[serious] 종료를 고려하고 작업을 드레이닝하며 영구 상태는 임시 VM 외부에 보관합니다.

## Step 8 · VM Scale Sets - All in One

[calm] VM 확장 집합 - 전체 보기.
[600ms]
VM 구성, 오케스트레이션, 확장, 영역 배치, 상태, 데이터가 하나의 운영 설계를 이룹니다.
[600ms]
[serious] 앱, 데이터 및 장애 조치를 준비해야 합니다.
