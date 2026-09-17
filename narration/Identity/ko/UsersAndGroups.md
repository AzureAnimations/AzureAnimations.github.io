# Narrator Script - 사용자와 그룹

**Source animation:** journeys/Identity/UsersAndGroups.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/users-groups.mjs.

## Step 1 · A teammate without a directory record

[calm] 아직 등록되지 않은 새 동료.
[600ms]
Maya가 Contoso Operations에 합류합니다. 입사 요청은 준비됐지만 디렉터리에 사용자 개체가 아직 없습니다.
[600ms]
[serious] Alex의 파트너 레코드는 이미 있습니다. Maya에게는 공유 계정이 아닌 자신의 ID가 필요합니다.

## Step 2 · Give Maya an identity

[calm] Maya의 ID 만들기.
[600ms]
권한 있는 관리자가 클라우드 사용자를 만듭니다. 이름, 로그인 ID, 부서는 사용자 속성이며 권한을 부여하지 않습니다.
[600ms]
[serious] 예제 값입니다. 권한 있는 관리자가 속성을 관리하며 부서는 Azure 역할이 아닙니다.

## Step 3 · Organize the team

[calm] 팀 구성하기.
[600ms]
Contoso가 Operations 보안 그룹을 만듭니다. 소유자는 그룹을 관리하고 멤버는 그룹에 속한 사람들입니다.
[600ms]
[serious] 보안 그룹은 액세스를 구성하고 Microsoft 365 그룹은 협업을 지원합니다. 소유자와 멤버는 별개의 관계입니다.

## Step 4 · Assignment or an attribute rule?

[calm] 직접 할당 또는 속성 규칙.
[600ms]
할당 멤버 자격은 명시적으로 선택합니다. 동적 멤버 자격은 속성 변경이 처리된 후에 멤버 목록을 업데이트합니다.
[600ms]
[serious] 동적 사용자에는 충분한 Entra ID P1 또는 Intune for Education 라이선스가 필요합니다. 속성 쓰기 권한을 보호하세요. 처리는 즉시 완료되지 않습니다.

## Step 5 · Verify the actual members

[calm] 실제 멤버 확인.
[600ms]
규칙 미리 보기뿐 아니라 처리된 멤버 자격을 확인합니다. Maya의 멤버 자격과 소유자의 역할은 서로 다릅니다.
[600ms]
[serious] 동적 멤버는 규칙을 따르며 수동으로 추가하거나 제거할 수 없습니다. Alex는 이 예제의 Operations 규칙에 일치하지 않습니다.

## Step 6 · People organized. Access still separate.

[calm] 그룹 구성과 액세스는 별개.
[600ms]
디렉터리는 ID를 제공하고 그룹은 멤버를 모읍니다. 각 리소스에 대한 그룹 권한은 별도로 부여해야 합니다.
[600ms]
[serious] 그룹에 기존 권한이 있으면 멤버에게 적용됩니다. 이 예제에는 리소스 할당이 없으므로 멤버 자격만으로 액세스할 수 없습니다.
