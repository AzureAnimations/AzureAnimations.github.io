# Narrator Script - 첫 VM 구성하기

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · The shop needs OS control

[calm] 상점에 OS 제어가 필요합니다.
[600ms]
Contoso는 앱 환경을 직접 설치하고 관리하기 위해 VM을 선택합니다.
[600ms]
[serious] 게스트 OS와 앱은 사용자가, 기반 호스트는 Azure가 관리합니다.

## Step 2 · Start with an image

[calm] 이미지로 시작.
[600ms]
이미지는 OS 디스크의 운영 체제와 초기 소프트웨어를 제공합니다.
[600ms]
[serious] 이 예제는 Linux이며 Windows 이미지도 선택할 수 있습니다.

## Step 3 · Choose a size

[calm] 크기 선택.
[600ms]
CPU와 메모리는 워크로드에 맞춰야 합니다. 크기는 OS 이미지와 별개입니다.
[600ms]
[serious] 워크로드 측정, 지역 가용성, 예산에 따라 크기를 선택합니다.

## Step 4 · Give data a durable home

[calm] 데이터를 영구 저장.
[600ms]
OS 및 데이터 디스크는 역할이 다릅니다. 임시 스토리지는 영구 복사본이 아닙니다.
[600ms]
[serious] 제공되는 임시 스토리지는 영구 저장소가 아닙니다.

## Step 5 · Connect the private network

[calm] 개인 네트워크 연결.
[600ms]
NIC는 가상 네트워크의 서브넷에서 VM에 개인 IP를 제공합니다.
[600ms]
[serious] 이 VM에는 공용 IP가 필요하지 않습니다. 네트워크 보안 규칙은 적용됩니다.

## Step 6 · Connect, then authenticate

[calm] 연결 후 인증.
[600ms]
Bastion은 관리 경로를 제공합니다. SSH 키는 Linux 관리자를 인증합니다.
[600ms]
[serious] 전용 서브넷의 Bastion Basic을 사용합니다. SSH 키로 Linux에 인증하며 연결과 권한은 별개입니다.

## Step 7 · Stopped is not deallocated

[calm] 중지와 할당 취소는 다릅니다.
[600ms]
전원 상태에 따라 컴퓨팅 요금이 달라집니다. 디스크와 다른 리소스는 남습니다.
[600ms]
[serious] 종량제: 컴퓨팅과 디스크에 요금이 부과됩니다.

## Step 8 · Your VM - All in One

[calm] VM - 전체 보기.
[600ms]
이미지, 크기, 디스크, 네트워크, 접근 권한으로 VM을 구성합니다. 다음은 가용성입니다.
[600ms]
[serious] VM 하나가 작동한다고 고가용성 설계가 완성되지는 않습니다.
