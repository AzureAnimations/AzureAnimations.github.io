# Narrator Script - 중단 없이 이동하기

**Source animation:** journeys/Compute/VirtualMachines/MoveVirtualMachines.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · It landed in the wrong place

[curious] 상점은 실험 단계였을 때 테스트용 리소스 그룹에 만들어졌습니다.
[600ms]
[serious] 이제 실제 주문을 받으므로 프로덕션 리소스와 함께 프로덕션 규칙과 청구 체계 아래에 있어야 합니다.
[600ms]
[calm] 먼저 리소스 그룹은 물리적 위치가 아니라 관리 경계라는 점을 기억하세요. 그룹을 바꾼다고 데이터가 다른 장소로 이동하지는 않습니다.

## Step 2 · Move between resource groups

[calm] 가장 단순한 이동은 리소스의 관리 소속만 바꾸는 것입니다.
[600ms]
[confident] Azure는 머신을 계속 실행한 채 소속 그룹을 변경합니다. 이 이동 자체를 위해 가상 머신을 중지할 필요는 없습니다.
[600ms]
[serious] 다만 이동 중에는 두 그룹의 관리 쓰기 작업이 잠깁니다. 그동안 어느 쪽에도 새 리소스를 배포하지 않도록 하세요.

## Step 3 · Move between subscriptions

[calm] 구독 간 이동은 같은 개념을 관리 계층 하나 위로 확장한 것입니다.
[600ms]
[confident] 머신과 함께 옮겨야 하는 디스크, 네트워크 인터페이스 등의 종속 리소스를 하나의 집합으로 준비해 대상 구독으로 이동합니다.
[600ms]
[serious] 대상부터 확인하세요. 필요한 할당량이 없으면 이동을 완료할 수 없습니다.

## Step 4 · Changing region is a rebuild

[serious] 지역을 바꾸는 것은 다른 작업입니다.
[600ms]
[confident] Azure Resource Mover는 워크로드를 복사하고 새 지역에 리소스를 다시 만듭니다. 식별자와 주소가 달라질 수 있음을 계획에 반영해야 합니다.
[600ms]
[calm] 재구축으로 계획하세요. 서비스 전환, 이름 확인, 이전 주소를 직접 입력해 둔 설정까지 점검합니다.

## Step 5 · Check before you commit

[curious] 사전 점검 습관이 많은 문제를 막아 줍니다. 검사를 실행하고 유효성 검사 결과를 살펴보세요.
[600ms]
[confident] 모든 리소스 유형이 모든 이동을 지원하지는 않습니다. 시작 전에 전체 집합을 검증하고 대상 리소스의 이동 지원 참조를 확인하세요.
[600ms]
[reassuring] 검증 단계에서 비지원 리소스를 찾으면 몇 분이면 됩니다. 이동 도중에 발견하면 저녁 시간을 모두 쓸 수도 있습니다.

## Step 6 · Moving - All in One

[reflective] 세 가지 이동을 구분해서 생각하세요.
[600ms]
[confident] 그룹과 구독 간 이동은 관리 소속을 바꿉니다. 지역 이동은 다른 위치에 리소스를 다시 만듭니다.
[600ms]
[proud] Contoso의 상점은 구축, 장애 대비, 확장, 적정 크기 조정, 백업, 모니터링을 마쳤습니다. 이제 있어야 할 곳에서 운영됩니다.
