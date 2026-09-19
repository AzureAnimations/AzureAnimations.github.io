# Narrator Script - 첫 VM 구성하기

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The shop needs OS control

[curious] Contoso Retail은 자체 요구 사항에 맞게 온라인 상점을 운영하려고 합니다.
[600ms]
[confident] 가상 머신을 사용하면 애플리케이션에 필요한 대로 운영 체제를 설치하고, 조정하고, 패치할 수 있습니다.
[600ms]
[serious] 그만큼 책임도 따릅니다. 물리 호스트는 Azure가 관리하고, 게스트 운영 체제 내부는 사용자가 관리합니다.

## Step 2 · Start with an image

[calm] 모든 머신은 이미지에서 시작합니다.
[600ms]
[confident] 이미지는 운영 체제와 초기 소프트웨어를 제공하며, 머신을 만들 때 운영 체제 디스크에 배포됩니다.
[600ms]
[reassuring] 이 상점에는 Linux를 선택했지만 Windows도 일반적인 선택지입니다.

## Step 3 · Choose a size

[calm] 다음은 크기입니다. 크기는 이미지와 별도로 결정합니다.
[600ms]
[confident] 머신의 처리 능력과 메모리 용량을 정하므로 상점에서 실제로 필요한 용량에 맞춰야 합니다.
[600ms]
[serious] 측정 결과, 지역별 제공 여부, 예산을 기준으로 선택하세요. 추측만으로 정하지 마세요.

## Step 4 · Give data a durable home

[calm] 이제 스토리지입니다. 여기 있는 세 종류의 디스크는 역할이 서로 다릅니다.
[600ms]
[confident] 운영 체제 디스크는 부팅을 담당하고, 데이터 디스크는 상품 목록과 주문을 저장합니다. 둘 다 재시작해도 데이터가 남는 관리 디스크입니다.
[600ms]
[serious] 임시 디스크는 작업용 공간입니다. 제공되는 경우에도 없어져도 문제가 없는 데이터만 보관하세요.

## Step 5 · Connect the private network

[calm] 머신에는 통신할 수 있는 경로도 필요합니다.
[600ms]
[confident] 네트워크 인터페이스는 가상 네트워크의 서브넷 안에서 개인 주소를 제공합니다. 상점은 이 경로로 Contoso의 다른 시스템과 통신합니다.
[600ms]
[reassuring] 이 설계에서는 머신에 공용 주소가 필요하지 않습니다. 그래도 네트워크 보안 규칙은 적용됩니다.

## Step 6 · Connect, then authenticate

[curious] 그렇다면 관리자는 어떻게 접속할까요?
[800ms]
[confident] Azure Bastion을 전용 서브넷에 배치하면 포털에서 세션을 열 수 있습니다. 머신 자체에는 인터넷에 노출되는 주소가 필요하지 않습니다.
[600ms]
[serious] Bastion은 접속 경로를 제공하고, SSH 키는 신원을 증명합니다. 머신에 도달하는 것과 접속 권한을 갖는 것은 다릅니다.

## Step 7 · Stopped is not deallocated

[serious] 이 차이는 청구서에 그대로 나타납니다.
[600ms]
[confident] 게스트 운영 체제에서 종료하면 머신은 중지되지만 호스트에는 여전히 할당되어 있습니다. 그래서 컴퓨팅 요금이 계속 발생합니다.
[600ms]
[reassuring] Azure에서 할당을 취소하면 하드웨어가 해제되고 컴퓨팅 사용 요금이 중단됩니다. 하지만 남겨 둔 디스크와 다른 리소스는 계속 존재하며 요금이 발생할 수 있습니다.

## Step 8 · Your VM - All in One

[reflective] 전체를 보면 가상 머신 하나는 서로 연결된 다섯 가지 결정으로 이루어집니다.
[600ms]
[confident] 이미지, 크기, 디스크, 네트워크 경로, 그리고 인증 방법입니다.
[600ms]
[determined] 상점은 실행되지만 아직 호스트 하나의 머신 하나에 의존합니다. 다음은 가용성을 설계할 차례입니다.
