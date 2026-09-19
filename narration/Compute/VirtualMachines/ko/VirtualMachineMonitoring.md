# Narrator Script - 모니터링하고 패치 유지하기

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineMonitoring.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Checkout feels slow

[serious] 고객들이 결제가 느리다고 말하지만 팀은 이유를 모릅니다.
[600ms]
[curious] 머신 문제일까요, 디스크일까요, 아니면 애플리케이션 자체일까요?
[800ms]
[calm] 관측 데이터가 없으면 논쟁은 해결되지 않고 반복됩니다. Contoso가 판단할 수 있도록 데이터를 마련해 봅시다.

## Step 2 · Host signals need no agent

[reassuring] 다행히 일부 정보는 이미 제공됩니다.
[600ms]
[confident] Azure는 게스트 내부에 아무것도 설치하지 않아도 호스트에서 프로세서, 디스크, 네트워크 메트릭을 수집합니다.
[600ms]
[calm] 이 정보로 머신에 부하가 몰리는지 살펴보기 시작할 수 있습니다. 게스트 쪽 추가 설정도 필요하지 않습니다.

## Step 3 · Inside the guest needs an agent

[curious] 하지만 호스트 메트릭만으로 게스트 내부를 모두 볼 수는 없습니다. 원격 분석을 켜고 무엇이 나타나는지 확인해 보세요.
[600ms]
[confident] 운영 체제가 보는 메모리 사용량이나 내부 로그를 수집하려면 Azure Monitor Agent와 수집 항목을 지정하는 데이터 수집 규칙이 필요합니다.
[600ms]
[serious] 규칙을 기억하세요. 에이전트를 설치해도 무엇을 수집할지 지정하지 않으면 필요한 신호를 얻지 못합니다.

## Step 4 · Compare guest performance

[calm] 데이터가 도착하면 VM Insights에서 함께 볼 수 있습니다.
[600ms]
[confident] 프로세서, 메모리, 디스크 성능을 나란히 살펴보면 느린 결제의 원인이 머신인지 코드인지 조사할 수 있습니다.
[600ms]
[serious] 성능 모니터링은 계속 지원됩니다. 반면 기존 Map 보기와 Dependency Agent는 사용 중단 대상으로 지정되었으므로 새 설계의 기반으로 삼지 마세요.

## Step 5 · Turn a threshold into action

[curious] 새벽 세 시까지 대시보드를 지켜볼 수는 없습니다. 임계값을 설정하고 경고가 언제 발생하는지 확인하세요.
[600ms]
[confident] 경고 규칙은 신호가 조건을 충족하는지 확인합니다. 작업 그룹은 이메일, 티켓, 자동 대응 등 이후의 행동을 정합니다.
[600ms]
[reassuring] 규칙과 작업 그룹이 분리되어 있어 잘 준비한 대응 하나를 여러 규칙에서 재사용할 수 있습니다.

## Step 6 · Patch on a schedule

[calm] 마지막은 조용히 쌓이는 업데이트 작업입니다.
[600ms]
[confident] Azure Update Manager는 누락된 운영 체제 업데이트를 평가하고 선택한 일정에 따라 설치할 수 있습니다. 별도의 자체 파이프라인을 유지할 필요가 없습니다.
[600ms]
[determined] 패치가 매번 긴급 작업이 되어서는 안 됩니다. 계획하고 꾸준히 수행하는 운영 습관이어야 합니다.

## Step 7 · Monitoring - All in One

[reflective] 네 가지 계층이 상점의 예상치 못한 문제에 대비하게 합니다.
[600ms]
[confident] 기본 제공되는 호스트 신호, 에이전트로 수집하는 게스트 성능, 담당자에게 도달하는 경고, 그리고 예약된 업데이트입니다.
[600ms]
[proud] 이것이 머신을 켜 두는 것과 서비스를 운영하는 것의 차이입니다.
