# Virtual Network — 내레이션 (ko)

## Step 1 · Start With a Virtual Network

[confident] Azure 네트워킹의 모든 것은 여기, 가상 네트워크에서 시작합니다.
[500ms]
[calm] VNet은 Azure 네트워크 안에 있는, 격리된 나만의 사설 영역입니다. CIDR 표기법으로 주소 공간을 지정합니다. 여기서는 10.0.0.0/16입니다.
[400ms]
[helpful] RFC 1918 사설 범위를 사용하세요. 필요하다면 Azure는 IPv4와 IPv6 듀얼 스택도 지원합니다.

## Step 2 · Segment It Into Subnets

[calm] 커다란 네트워크 하나만으로는 설계라고 하기 어렵습니다. 그래서 VNet을 10.0.1.0/24 같은 더 작은 범위, 즉 서브넷으로 나눕니다.
[500ms]
[confident] 실제 작업은 서브넷에서 일어납니다. 관련된 리소스를 묶어 주고, 트래픽을 라우팅할 곳을 주고, 보안을 적용할 경계를 만들어 줍니다.
[400ms]
[helpful] 이것만은 기억하세요. Azure에 배치하는 모든 리소스는 서브넷 안에 존재합니다.

## Step 3 · Place a Virtual Machine

[calm] 이제 안에 무언가를 넣어 봅시다. 서브넷에 가상 머신을 배치합니다.
[400ms]
[confident] 네트워크에서 통신하려면 그 VM에는 최소한 하나의 사설 IP 주소가 필요합니다. 공용 IP는 선택 사항이고, 대개는 필요하지 않습니다.
[500ms]
[curious] 그런데 여기에 함정이 있습니다. 거의 모두가 여기서 헷갈립니다. IP 주소는 가상 머신 자체에 할당되는 일이 결코 없습니다.

## Step 4 · The NIC Holds the IPs

[confident] 그것이 바로 네트워크 인터페이스, 즉 NIC가 있는 이유입니다.
[400ms]
[calm] 사설 IP와 선택적인 공용 IP를 실제로 담고 있는 것은 NIC입니다. 필요하다면 IP 구성을 여러 개 가질 수도 있습니다.
[500ms]
[helpful] NIC는 정확히 한 대의 가상 머신에 연결됩니다. 일대일입니다. 그 연결이 VM에게 서브넷 위의 자리를 부여합니다.

## Step 5 · Filter Traffic With an NSG

[curious] 그렇다면 그 VM에 실제로 무엇이 도달할 수 있는지는 어떻게 제어할까요?
[400ms]
[confident] 네트워크 보안 그룹을 연결합니다. NSG는 허용과 거부 규칙의 목록으로, 포트별, 프로토콜별, 그리고 인바운드와 아웃바운드라는 방향별로 지정합니다.
[500ms]
[calm] 규칙은 우선순위에 따라 낮은 번호부터 평가됩니다. NIC에 연결하면 그 한 대의 가상 머신에 대한 트래픽을 필터링하게 됩니다.

## Step 6 · One NSG for the Whole Subnet

[curious] 이제 두 번째 VM을 추가해 봅시다. 세 번째도요. 같은 NSG를 정말 모든 NIC에 일일이 연결하시겠습니까?
[500ms]
[confident] 물론 아닙니다. 대신 NSG를 서브넷에 연결하세요.
[400ms]
[calm] 이제 그 서브넷의 모든 NIC가 같은 규칙을 자동으로 상속합니다. 가상 머신을 아무리 많이 추가해도 그대로 동작합니다.

## Step 7 · The Whole Picture

[confident] 그럼 전체 그림을 맞춰 봅시다.
[500ms]
[calm] VNet이 주소 공간을 제공합니다. 서브넷이 그것을 나눕니다. 가상 머신은 그 서브넷 안에 자리하고, IP 주소는 NIC 위에 있습니다. VM에 직접 있는 것이 아닙니다.
[400ms]
[calm] 그리고 NSG가 트래픽을 필터링합니다. 하나의 NIC에 연결하거나, 확장하고 싶다면 서브넷 전체에 연결합니다.
[600ms]
[encouraging] 이것이 Azure 네트워킹의 핵심입니다. 앞으로 만나게 될 다른 모든 서비스가 바로 이 위에 세워집니다.
