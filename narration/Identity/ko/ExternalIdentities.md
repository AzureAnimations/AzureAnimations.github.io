# Narrator Script - 외부 ID

**Source animation:** journeys/Identity/ExternalIdentities.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/external.mjs.

## Step 1 · A partner needs to collaborate

[calm] 파트너와 협업하기.
[600ms]
Alex는 Partner 소속이며 기존 로그인 ID가 있습니다. Contoso는 공유 계정을 만들지 않고 shop-vm 구성을 검토하도록 하려 합니다.
[600ms]
[serious] 이 예제는 Partner Entra 계정을 사용합니다. B2B는 구성된 다른 ID 공급자도 지원합니다.

## Step 2 · Invite Alex into Contoso

[calm] Alex를 Contoso에 초대.
[600ms]
권한 있는 초대자가 Contoso에 Alex의 B2B 사용자 레코드를 만듭니다. 초대는 수락 대기 중이며 홈 계정은 Partner에 남습니다.
[600ms]
[serious] 초대 권한, 도메인 제한 및 테넌트 간 설정이 적용됩니다. 암호를 Contoso에 복사하지 않습니다.

## Step 3 · Redeem the invitation

[calm] 초대 수락하기.
[600ms]
Alex는 홈 ID로 로그인하고 동의를 완료합니다. 초대를 수락해도 Azure 역할이 자동으로 할당되지는 않습니다.
[600ms]
[serious] 선택기는 예제 초대 상태를 비교하며 실제 동의를 취소하지 않습니다. 리소스 권한은 별도로 부여해야 합니다.

## Step 4 · One person, two directory records

[calm] 한 사람, 두 디렉터리 레코드.
[600ms]
홈 ID가 Alex를 인증하고 Contoso는 별도 사용자 개체를 보유합니다. Guest와 Member는 관계를 나타내며 ID 공급자를 의미하지 않습니다.
[600ms]
[serious] Guest와 Member의 기본 디렉터리 권한은 다릅니다. UserType을 변경해도 ID 공급자는 바뀌지 않습니다. 실제 조직 관계를 반영해야 합니다.

## Step 5 · Authorize just the intended resource

[calm] 대상 리소스만 허용.
[600ms]
Contoso는 shop-vm 범위에서 Alex에게 Reader를 할당합니다. 구성 읽기는 가능하지만 삭제는 불가합니다. 역할을 제거해도 초대 수락 상태는 유지됩니다.
[600ms]
[serious] 로그인 정책 충족, 변경 전파 완료, 다른 역할이나 거부 할당 없음을 가정합니다. Reader는 게스트 OS 로그인이나 데이터 액세스를 허용하지 않습니다.

## Step 6 · External identity. Bounded collaboration.

[calm] 외부 ID와 제한된 협업.
[600ms]
Alex는 홈 ID를 유지하고 Contoso는 별도 사용자 개체를 관리합니다. 범위가 지정된 역할이 권한을 제공합니다. 각각 별개의 책임입니다.
[600ms]
[serious] B2B 협업은 인력 테넌트에서 이루어집니다. 고객용 가입과 로그인에는 별도 외부 테넌트를 사용합니다.
