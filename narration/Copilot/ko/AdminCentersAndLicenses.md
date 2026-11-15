# Narrator Script — Microsoft 365 Copilot · Admin Centers and Licenses

**Source animation:** [AdminCentersAndLicenses.html](../../../journeys/Copilot/AdminCentersAndLicenses.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users>
- <https://learn.microsoft.com/microsoft-365/copilot/copilot-license-options>
- <https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses>
- <https://learn.microsoft.com/microsoft-365/admin/setup/add-domain>

---

## Step 1 · Which door do I open?

[calm] Priya Contoso의 새로운 Microsoft 365 관리자입니다. 도메인, 라이선스, 메일박스, 사이트, 채널에 대한 요청이 이미 접수되고 있습니다.
[600ms]
[curious] 문제는 각 센터가 서로 다른 행정 센터 뒤에 있다는 점입니다.
[600ms]
[confident] 이 수업은 Priya와 함께 시험 A B 900의 핵심 개체 기술을 따라갑니다. 어떤 문을 열어야 하는지 배워 봅시다.

## Step 2 · One tenant, four admin centers

[curious] 각 Microsoft 365 서비스는 자체 행정 센터를 가지고 있습니다. 여기 네 개의 문이 있는 한 세입자가 있습니다.
[600ms]
[calm] 규칙은 간단합니다. 관리하는 물건을 찾으면 어느 문을 열어야 할지 알게 됩니다.
[600ms]
[reassuring] Microsoft Entra와 Microsoft Purview도 행정 센터가 있지만, 그건 다른 수업에 속해 있어요.

## Step 3 · A license unlocks features

[calm] 계정만으로는 아무것도 열리지 않습니다. 할당된 라이선스 유형이 어떤 서비스와 기능을 활성화할지 결정합니다.
[600ms]
[serious] 계획에 포함된 내용은 계획마다 다르고 시간이 지나면서 변하니, 외우기보다는 Microsoft Learn 확인하세요.
[600ms]
[curious] Copilot은 자격이 되는 요금제에 추가하는 애드온 라이선스입니다. 기본 라이선스 위에 얹힙니다.

## Step 4 · License the group, not each person

[curious] 한 번에 한 사람씩 라이선스를 할당하는 것은 확장되지 않습니다. 대신 그룹에 라이선스를 한 번만 할당하세요.
[600ms]
[impressed] 모든 멤버가 라이선스를 받아요. 새 멤버는 자동으로 라이선스를 받고, 누군가 그룹을 떠나면 라이선스도 함께 사라집니다.
[600ms]
[calm] 보안 그룹, 메일 활성화 그룹, Microsoft 365 그룹과 함께 작동합니다. 최소한 라이선스 관리자 역할은 필요합니다.

## Step 5 · Domains and org settings

[calm] Microsoft 365 관리자 센터에서 도메인은 자신의 도메인 이름을 테넌트에 연결합니다.
[600ms]
[curious] 도메인을 검증한다는 것은 도메인 등록기관에 TXT 기록을 추가하여 소유권을 증명하는 것을 의미합니다.
[600ms]
[confident] 인증이 완료되면 사람들은 onmicrosoft 주소에서 본인 주소로 이동할 수 있습니다. 조직 설정에는 조직 전체의 선택권이 있습니다.

## Step 6 · Mailboxes and distribution groups

[calm] Exchange 관리자 센터에서 메일함은 하나의 받은편지함입니다. 그것은 사람이나 리소스에 속합니다.
[600ms]
[curious] 배포 그룹은 여러 메일박스에 전달하는 하나의 주소입니다.
[600ms]
[serious] 하지만 조심하세요. 배포 그룹은 이메일만 배포하며, 권한을 부여할 수 없습니다.

## Step 7 · Sites, libraries and folders

[calm] SharePoint에서 사이트는 팀이나 프로젝트의 집을 의미합니다.
[600ms]
[curious] 그 안에는 라이브러리가 파일을 저장하고, 폴더가 이를 정리합니다. 팀 사이트와 커뮤니케이션 사이트가 두 가지 일반적인 유형입니다.
[600ms]
[confident] SharePoint 관리 센터가 사이트를 관리합니다. 모든 사이트는 '사이트' 다음에 '활성 사이트' 아래에 있습니다.

## Step 8 · Roles and permissions in a site

[calm] 사이트에는 기본 역할이 세 가지 있습니다: 소유자, 멤버, 방문자.
[600ms]
[curious] 소유자는 완전한 통제권을 가지며, 회원은 편집할 수 있고, 방문자는 읽을 수 있습니다. 권한은 라이브러리와 폴더로 내려가며, 누군가가 아이템을 별도의 항목으로 부여하지 않는 한 말입니다.
[600ms]
[reassuring] 팀 사이트를 Microsoft 365 그룹 또는 팀 팀을 통해 관리하세요. 커뮤니케이션 사이트는 세 개의 SharePoint 그룹을 직접 사용합니다.

## Step 9 · Teams and channels

[calm] 팀은 함께 일하는 사람들의 집단이며, 채널은 대화를 주제별로 나눕니다.
[600ms]
[curious] 소유주가 팀을 이끌고, 멤버들이 참여합니다. 모든 팀은 Microsoft 365 그룹의 지원을 받으며, 파일을 위해 SharePoint 사이트를 사용합니다.
[600ms]
[confident] 개인 채널과 공유 채널은 각각 별도의 사이트를 갖습니다. Teams와 채널은 Teams 관리 센터에서 관리합니다.

## Step 10 · Teams policies

[calm] 정책은 사람들이 Teams에서 할 수 있는 일을 통제합니다. 모든 사람은 기본적으로 글로벌 정책을 받습니다.
[600ms]
[curious] 다른 사람에게 다른 규칙을 주려면, 맞춤형 정책을 할당하세요. 글로벌 정책에서는 개인 채널과 공유 채널 생성이 기본적으로 켜져 있습니다.
[600ms]
[serious] 정책 변경 적용에는 최대 24시간이 걸릴 수 있으니, 문제 해결 전에 인내심을 가지시기 바랍니다.

## Step 11 · Which admin center?

[excited] 당신 차례입니다. 작업을 선택하고, 어느 행정센터가 불이 켜지는지 확인하세요.
[600ms]
[calm] 관리해야 할 객체가 문을 결정합니다. 라이브러리와 폴더는 각 사이트 내에서 관리됩니다.
[600ms]
[reassuring] 관리자 센터가 진화함에 따라 메뉴 이름이 바뀌니, Microsoft Learn에서 현재 화면을 확인하세요.

## Step 12 · Four doors, one tenant

[calm] 객체를 알고, 관리자 센터를 알게 됩니다. 한 줄로 이 모든 아이디어를 다 알게 됩니다.
[600ms]
[proud] Priya 이제 네 개의 문 중 어느 쪽을 열어야 할지 알기 때문에 모든 요청에 응답할 수 있습니다.
[600ms]
[encouraging] 다음으로, 측정된 A B 900 기술과 공식 Microsoft Learn 교육과 비교해 보세요. 항상 최신 학습 가이드를 읽으세요.
