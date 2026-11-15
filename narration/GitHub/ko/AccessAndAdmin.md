# Narrator Script — GitHub · Access and Admin

**Source animation:** [AccessAndAdmin.html](../../../journeys/GitHub/AccessAndAdmin.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Contoso Is Growing

[calm] Contoso 성장하고 있습니다. Maya, Ravi, 누르, 아이비, Sam그리고 조직, 계약자, 그리고 사설 규범이 있습니다.
[600ms]
[curious] 그렇다면 누가 무엇을 하고, 누가 설정을 담당하나요?
[600ms]
[confident] 맨 아래 줄에 있는 세 가지 질문은 이 여정의 세 부분, 즉 회계, 접근성, 그리고 행정입니다.

## Step 2 · Passwords Alone Fall Short

[calm] 계정부터 시작하세요. 비밀번호는 추측하거나 재사용하거나 피싱할 수 있습니다.
[600ms]
[serious] 만약 유일한 자물쇠라면, 잠금을 가진 사람이 Ravi로 로그인할 수 있습니다.
[600ms]
[reassuring] 2단계 인증은 두 번째 잠금장치를 추가하는데, 이는 오직 당신만 알고 있거나 가지고 있기 때문에, 도난당한 비밀번호만으로는 충분하지 않습니다.

## Step 3 · Add a Second Factor

[curious] 비밀번호 다음에는 GitHub 당신이 가진 것, 즉 앱의 코드, 문자 메시지, 보안 키, 또는 GitHub 모바일 같은 것을 요구합니다.
[600ms]
[calm] 인증 앱은 일회성 코드를 만들고, 보안 키는 WebAuthn사용합니다. 복구 코드를 백업용으로 보관하세요.
[600ms]
[confident] 조직 소유주는 회원, 청구 관리자, 외부 협력자에 대해 2단계 인증을 요구할 수 있습니다.

## Step 4 · Passkeys: One Step, No Password

[curious] 패스키는 키 쌍입니다. 개인 키는 기기에 남아 있고, GitHub 공개 키를 유지합니다.
[600ms]
[impressed] 한 단계로 비밀번호와 두 번째 요소를 모두 포함합니다. PIN이나 비밀번호, 또는 생체 인식으로 잠금 해제합니다.
[600ms]
[serious] 패스키는 실제 도메인에 묶여 있어서, 브라우저는 유사 사이트를 거부합니다. 그래도 잠금 방지를 위해 대체 방법을 유지하세요.

## Step 5 · Organization Roles

[calm] 이제 액세스입니다. 조직은 Contoso의 사람들과 저장소를 한곳에 모읍니다.
[600ms]
[confident] 소유자는 전체 관리 권한을 가지며, 멤버는 기본 역할인 비관리자입니다.
[600ms]
[serious] 소유자는 적게 유지하되, 소유권을 잃지 않도록 최소 두 명은 두세요. 모더레이터나 청구 관리자 같은 전문 역할도 있습니다.

## Step 6 · Repository Roles: Try It

[curious] 저장소에는 자체 역할이 있습니다. 하나를 골라 무엇을 할 수 있는지 살펴보세요.
[600ms]
[confident] 접근 권한이 적은 순서로 읽기, 분류, 쓰기, 유지보수, 관리자입니다.
[600ms]
[determined] 원칙은 최소의 권한을 주는 것입니다: 일을 완수하는 가장 작은 역할을 사람들에게 주는 것입니다.

## Step 7 · Teams: Grant Access to Groups

[calm] 사람별로 접근 권한을 부여하는 것은 확장성이 없기 때문에, 팀이 개입하는 부분입니다.
[600ms]
[confident] 한 팀에 한 번 역할을 부여하면 그 팀의 모든 사람이 그 역할을 갖게 됩니다. 자식 팀은 부모 팀의 접근 권한을 상속받습니다.
[600ms]
[serious] 팀은 조직 구성원으로만 구성되므로, 외부 협력자는 팀에 가입할 수 없습니다.

## Step 8 · Least Privilege for a Contractor

[curious] Sam 계약자이지 직원이 아닙니다.
[600ms]
[confident] 그래서 Sam 외부 협력자가 되어, 해당 직무에 필요한 저장소에 추가되어 당신이 선택한 역할만 부여하고 그 외에는 아무것도 없습니다.
[600ms]
[reassuring] Sam 회원이 아니며 팀에 가입할 수 없습니다. 조직에서 이중 인증을 요구한다면, Sam 승인하기 전에 활성화해야 합니다.

## Step 9 · Visibility and Branch Protection

[calm] 코드 자체를 보호하는 두 가지 설정이 있습니다. 가시성은 저장소를 볼 수 있는 사람이 누구인지를 결정합니다: 공개, 비공개, 또는 내부입니다.
[600ms]
[confident] 브랜치 보호 규칙이 메인에 어떤 항목을 허용하는지 결정하는데, 예를 들어 검토나 합병 전 상태 확인 통과 등이 있습니다.
[600ms]
[serious] 저장소 관리자 권한이 있는 사람들은 둘 다 설정합니다. 내부 저장소는 엔터프라이즈 클라우드 GitHub 엔터프라이즈 계정이 필요합니다.

## Step 10 · Enterprise Managed Users

[curious] 개인 계정은 개인이 생성하고 소유합니다. 엔터프라이즈 관리 사용자는 다르게 작동합니다.
[600ms]
[confident] Contoso의 아이덴티티 제공자가 계정을 생성하고 관리하며, 사람들이 이를 통해 로그인합니다.
[600ms]
[reflective] 관리되는 사용자는 기업 외부에서 협업할 수 없기 때문에 모든 회사에 최적의 선택은 아닙니다. GitHub 선택 방법을 문서화합니다.

## Step 11 · Owners Hold the Controls

[calm] 소유주는 기지 권한, 필수 2단계 인증, 팀 등 조직의 기본 설정을 설정했습니다.
[600ms]
[curious] 그 후 누가 Copilot을지, 전부인지, 일부인지, 아무 회원도 포함하지 않을지, 그리고 어떤 정책이 적용될지 결정합니다.
[600ms]
[serious] 한 가지 조건: 기업 소유주가 이미 정책을 선택했다면, 조직은 이를 무시할 수 없습니다.

## Step 12 · Access and Admin: All in One

[calm] 정리해 보겠습니다. 2단계 인증과 패스키로 계정을 보호하세요.
[600ms]
[confident] 조직 역할, 저장소 역할, 팀을 통해 사람들이 필요로 하는 접근만 공유하세요.
[600ms]
[proud] 그리고 설정은 소유자와 관리자에게 보관하세요. 이 부분은 G H 900 시험의 프라이버시, 보안, 관리 영역입니다.
