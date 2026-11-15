# 내레이션 대본 - 리소스 계층 구조

**Source animation:** journeys/Fundamentals/ResourceHierarchy.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Source: https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/ -->

## Step 1 · Which resources belong together?

[calm] Contoso는 테스트 매장과 실제 고객용 매장을 함께 만들고 있습니다. 컴퓨터와 데이터베이스가 늘어나지만, 단순한 목록만으로는 무엇이 한 묶음인지 알기 어렵습니다.
[600ms]
[confident] 임시 테스트 환경의 작업을 프로덕션과 분리할 수 있도록, 관리 경계가 필요합니다.

## Step 2 · Start with a resource

[calm] 리소스는 Azure에서 만들고 관리할 수 있는 항목입니다. 가상 머신, 네트워크, 스토리지 계정처럼 매장을 이루는 개별 구성 요소라고 생각하세요.
[600ms]
[confident] 각각 자체 설정이 있습니다. 리소스라고 해서 반드시 별도의 요금이 발생하는 것은 아닙니다.

## Step 3 · Location is not ownership

[calm] Contoso는 두 질문을 구분해야 합니다. 리소스는 어디서 실행되며, 어느 리소스 그룹에 속할까요? 지역은 위치를 나타내고, 리소스 그룹은 관리를 정리합니다.
[600ms]
[confident] 리소스 그룹은 데이터 센터나 가용성 영역이 아닙니다. 같은 그룹에 넣는다고 네트워크로 연결되는 것도 아닙니다.

## Step 4 · Group what shares a lifecycle

[calm] 테스트 리소스를 함께 묶고, 프로덕션은 별도 리소스 그룹에 둡니다. 함께 만들고, 업데이트하고, 폐기하는 리소스는 같은 그룹에 두면 관리하기 좋습니다.
[600ms]
[confident] 테스트 그룹을 삭제하면 그 안의 리소스가 삭제되며, 프로덕션 그룹은 별개입니다. 그래도 삭제 전에는 종속 관계를 확인합니다.

## Step 5 · One subscription holds the groups

[calm] 리소스 그룹의 한 단계 바깥을 보세요. 구독은 이 그룹들을 포함하고, 접근을 관리하며 청구되는 사용량을 추적하는 경계를 제공합니다.
[600ms]
[confident] Contoso는 어느 구독에 비용이 청구되는지 확인할 수 있습니다. 구독 안에서도 테스트와 프로덕션 그룹의 수명 주기는 따로 유지됩니다.

## Step 6 · Management groups organize subscriptions

[calm] Contoso가 성장하면 여러 구독을 사용할 수 있습니다. 바깥의 관리 그룹은 구독들을 묶어, 공통 거버넌스를 구독마다 반복 설정하지 않도록 돕습니다.
[600ms]
[confident] 정책과 역할 할당은 계층 아래에 적용될 수 있습니다. 중첩된 상자는 관리 범위이지, 서버가 들어 있는 실제 건물이 아닙니다.

## Step 7 · Resource Hierarchy - All in One

[calm] 바깥에서 안쪽으로 읽어 보세요. 관리 그룹, 구독, 리소스 그룹, 개별 리소스 순서입니다. 이 관리 구조 안에서 Contoso의 테스트와 프로덕션은 별도 수명 주기를 가집니다.
[600ms]
[confident] 적용되는 정책과 역할 할당은 아래로 상속될 수 있지만, 모든 설정이 그런 것은 아닙니다. 관리가 정리됐으니, 다음은 매장을 실행할 위치를 선택합니다.