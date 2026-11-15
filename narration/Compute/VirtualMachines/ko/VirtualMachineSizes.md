# Narrator Script - VM 크기 최적화하기

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineSizes.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The invoice arrives

[serious] 할인 행사는 잘 끝났습니다. 그리고 한 달치 청구서가 도착했습니다.
[600ms]
[curious] Contoso는 평균 프로세서 사용률이 구 퍼센트였던 머신에 전체 요금을 내고 있었습니다.
[800ms]
[confident] 적정 크기 조정은 실제로 사용한 자원을 측정하는 데서 시작합니다. 필요할지도 모르는 용량을 추측하는 것이 아닙니다.

## Step 2 · Pick the family first

[calm] 크기를 고르기 전에 제품군부터 선택합니다.
[600ms]
[confident] 시리즈는 목적에 따라 하드웨어를 묶습니다. 평소 부하가 낮으면 버스트형, 균형이 필요하면 범용, 대용량 데이터에는 메모리 최적화, 집중적인 처리에는 컴퓨팅 최적화를 고려합니다.
[600ms]
[reassuring] 제품군이 맞으면 크기는 도박이 아니라 근거 있는 조정이 됩니다.

## Step 3 · The size sets the ceiling

[curious] 크기는 프로세서와 메모리만 정하지 않습니다. 슬라이더를 움직여 다른 항목도 확인해 보세요.
[600ms]
[confident] 연결 가능한 데이터 디스크 수, 네트워크 인터페이스 수, 사용할 수 있는 네트워크 대역폭에도 제한이 있습니다.
[600ms]
[serious] 이런 한계를 놓치기 쉽습니다. 프로세서가 바빠지기 전에도 상점은 디스크나 대역폭 한도에 먼저 도달할 수 있습니다.

## Step 4 · Resizing restarts the machine

[calm] 크기는 바꿀 수 있지만 아무 영향 없이 바뀌지는 않습니다.
[600ms]
[serious] 새 크기를 제공하는 하드웨어를 사용하려면 가상 머신이 재시작되므로 상점의 중단 시간을 계획해야 합니다.
[600ms]
[confident] 현재 호스트 클러스터에 새 크기가 없으면 먼저 할당을 취소해야 합니다. 동적 주소에 미치는 영향도 확인하고, 행사 도중이 아니라 미리 작업 시간을 정해 알리세요.

## Step 5 · Quota limits what you can deploy

[curious] 계획에서 실제 배포까지 가려면 한 가지 제한을 더 확인해야 합니다.
[800ms]
[confident] 할당량은 지역별, 제품군별로 부여되며 예산과는 별개입니다.
[600ms]
[serious] 예산이 승인되어도 배포가 거절될 수 있습니다. 남은 할당량을 확인하고 출시 전에 여유 있게 증가를 요청하세요.

## Step 6 · Right-Sizing - All in One

[reflective] 네 가지 습관을 이 순서로 적용하세요.
[600ms]
[confident] 실제 부하를 측정하고, 알맞은 제품군을 고르고, 크기의 한도를 확인한 뒤, 변경에 필요한 재시작을 계획합니다.
[600ms]
[proud] 그러면 Contoso는 처음 상상했던 상점이 아니라 실제로 운영하는 상점에 맞는 비용을 지불하게 됩니다.
