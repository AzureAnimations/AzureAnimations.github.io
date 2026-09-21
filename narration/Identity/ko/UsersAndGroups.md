# Narrator Script - 누가 여기 사는가

**Source animation:** journeys/Identity/UsersAndGroups.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups -->

## Step 1 · The family lives here. The register doesn’t know them.

[curious] Noah는 이 집에 살지만, 아직 명부에는 등록되어 있지 않습니다.
[600ms]
자신의 ID가 없으면 공유 계정을 사용하는 다른 사람과 구분할 수 없습니다.
[600ms]
[confident] 이웃 Alex는 이미 ID가 있습니다. Noah도 먼저 Contoso에 자신의 사용자 기록을 만들고, 그다음 접근 대상을 정해야 합니다.

## Step 2 · Give Noah his own record

[calm] 권한이 있는 관리자가 Noah의 이름, 로그인 정보, 부서를 담은 사용자 기록을 만듭니다.
[600ms]
이 속성들은 Noah를 설명합니다. 부서를 Kids로 설정한다고 Azure 권한이 생기는 것은 아닙니다.
[600ms]
[confident] 디렉터리에서 Noah가 누구인지는 정했지만, 어떤 가전을 사용할 수 있는지는 아직 정하지 않았습니다.

## Step 3 · One group for the children

[calm] 아이들을 보안 그룹으로 묶어 Noah와 Mia를 하나의 목록으로 관리합니다.
[600ms]
소유자는 목록을 관리하고, 멤버는 목록에 속합니다. 둘은 서로 다른 관계입니다.
[600ms]
[confident] 보안 그룹에는 리소스 권한을 할당할 수 있습니다. Microsoft 365 그룹은 협업을 위한 것이므로 목적에 맞는 종류를 선택하세요.

## Step 4 · Write his name, or write a rule

[calm] 목록을 채우는 방법은 두 가지입니다. 사람을 직접 추가하거나 동적 멤버 자격 규칙을 사용합니다.
[600ms]
여기서는 부서가 Kids인 사용자를 선택합니다. 속성을 바꾸면 조건에 맞는 사용자도 달라질 수 있습니다.
[600ms]
[confident] 동적 멤버 자격에는 적절한 라이선스가 필요하고 처리 시간도 걸립니다. 접근을 결정하는 속성을 누가 수정할 수 있는지 관리하세요.

## Step 5 · Check who is really on the list

[calm] Noah의 속성이 규칙에 맞는지만 보지 말고 실제 멤버 목록을 확인하세요.
[600ms]
규칙이 처리되어야 결과가 반영됩니다. 동적 그룹의 멤버 자격은 수동이 아니라 규칙으로 관리합니다.
[600ms]
[confident] 이 예제에서 Alex는 조건에 맞지 않지만, 다른 규칙으로 게스트를 포함할 수 있습니다. 소유자라고 해서 자동으로 멤버가 되는 것은 아닙니다.

## Step 6 · Everybody has a key — to the house

[calm] Noah는 이제 자신의 ID와 올바른 그룹 멤버 자격을 갖췄습니다. 로그인은 누구의 현관 열쇠인지 증명하는 일이라고 생각하세요.
[600ms]
이 예제에는 리소스 역할 할당이 없으므로 가전은 여전히 사용할 수 없습니다.
[600ms]
[confident] 그룹에 이미 권한이 있다면 멤버가 그 권한을 이용할 수 있습니다. 할당이 없다면 목록만으로 리소스 접근 권한이 생기지는 않습니다.

## Step 7 · The register, in Microsoft Entra ID

[confident] 위쪽에서는 어른들의 수동 멤버 자격과 아이들의 규칙 기반 멤버 자격을 비교합니다.
[600ms]
아래쪽에서는 Storage Blob Data Reader가 어른들 그룹에 스토리지 계정 범위의 데이터 읽기 권한을 줍니다.
[600ms]
[confident] 아이들에게는 가상 머신 역할이 없습니다. 멤버 자격은 누구를 포함할지, 역할 할당은 무엇을 어디에서 할 수 있을지 정합니다.
