# Narrator Script - 가상 머신 확장 집합

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · Demand changes

[curious] Contoso의 트래픽은 일정하지 않습니다. 한가한 아침도 있고, 바쁜 할인 행사와 그 뒤의 조용한 한 주도 있습니다.
[800ms]
[serious] 가장 바쁜 한 시간에 맞춰 큰 머신을 선택하면 그 용량에 한 달 내내 비용을 내게 됩니다. 그래도 예측은 틀릴 수 있습니다.
[600ms]
[confident] 상점에는 수요를 추측하는 대신 수요 변화에 따라 늘고 줄어드는 용량이 필요합니다.

## Step 2 · Manage a group of VMs

[calm] 확장 집합은 관리하는 단위를 바꿉니다.
[600ms]
[confident] 머신을 하나씩 만드는 대신 구성을 정의하면, 확장 집합이 그 구성을 바탕으로 인스턴스를 만들고 관리합니다.
[600ms]
[serious] 관리 대상은 인스턴스입니다. 그 위의 애플리케이션과 앞단의 부하 분산 장치는 여전히 별도로 구성해야 합니다.

## Step 3 · Choose an orchestration mode

[curious] 첫 번째 중요한 결정은 오케스트레이션 모드입니다.
[800ms]
[confident] Flexible 인스턴스는 일반 가상 머신 리소스이므로 개별적으로 확인하고 관리할 수 있습니다. Uniform 인스턴스는 확장 집합 전용 리소스이며 그룹 단위로 관리합니다.
[600ms]
[serious] 이 모드는 생성할 때 선택하고 나중에 바꿀 수 없습니다. 여기서는 권장 모드인 Flexible을 사용합니다.

## Step 4 · Configure a bounded scaling policy

[calm] 이제 집합이 따를 규칙을 설정합니다.
[600ms]
[confident] 이 예제는 머신을 두 대에서 네 대 사이로 유지합니다. 수요가 달라지면 정책이 인스턴스를 추가하거나 제거합니다.
[600ms]
[serious] 어느 과정도 즉시 끝나지 않습니다. 규칙 평가, 쿨다운, 프로비전, 준비 상태 확인에는 시간이 걸립니다. 트래픽이 몰리기 전에 용량을 준비하세요.

## Step 5 · Combine scaling with zone placement

[calm] 용량과 배치는 서로 다른 문제이며 확장 집합은 둘 다 다룰 수 있습니다.
[600ms]
[confident] 여러 가용성 영역을 사용하도록 구성하면 인스턴스가 생성될 때 해당 영역에 분산됩니다.
[600ms]
[serious] 이 분산은 직접 구성해야 합니다. 영역을 지정하지 않은 집합은 영역 간 분산을 보장하지 않습니다.

## Step 6 · Separate routing health from repair

[curious] 여기에는 역할이 다른 두 가지 상태 관리 기능이 있습니다.
[600ms]
[confident] 부하 분산 장치의 프로브는 새 트래픽의 목적지를 정합니다. 자동 인스턴스 복구는 비정상 머신을 언제 교체할지 판단합니다.
[600ms]
[serious] Flexible에서는 Application Health 확장과 활성화된 복구 정책이 필요합니다. 느린 시작을 장애로 오인하지 않도록 유예 기간도 둡니다. 상태를 바꾸며 두 기능의 반응을 확인해 보세요.

## Step 7 · Scale in with the application in mind

[serious] 인스턴스 수를 줄이는 축소는 종종 잊히는 부분입니다.
[600ms]
[calm] 규칙이 인스턴스를 제거하면 그 머신에 의존하던 세션과 로컬 디스크에만 저장한 데이터도 사라집니다.
[600ms]
[determined] 제거를 전제로 설계하세요. 처리 중인 작업을 마무리하고, 종료 알림에 대응하며, 영구 상태는 머신 외부에 저장합니다.

## Step 8 · VM Scale Sets - All in One

[reflective] 여섯 가지 결정이 하나의 운영 설계를 만듭니다.
[600ms]
[confident] 머신 구성, 오케스트레이션 모드, 크기 조정 정책, 영역 배치, 상태와 복구, 그리고 데이터 저장 위치입니다.
[600ms]
[proud] 이들을 함께 구성하면 Contoso의 상점은 행사 때 늘어나고 이후에는 줄어듭니다. 누군가 한밤중까지 그래프를 지켜볼 필요도 줄어듭니다.
