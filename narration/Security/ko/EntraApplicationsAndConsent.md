# Narrator Script — Security · Microsoft Entra applications: registrations, enterprise apps and consent — Azure Security Journey

**Source animation:** [EntraApplicationsAndConsent.html](../../../journeys/Security/EntraApplicationsAndConsent.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals>
- <https://learn.microsoft.com/entra/identity-platform/permissions-consent-overview>
- <https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview>
- <https://learn.microsoft.com/entra/identity-platform/quickstart-register-app>

---

## Step 1 · An app wants your mailbox

[curious] Ana가 새 앱인 MailTidy에 로그인했더니, 앱이 사서함에 접근하게 해 달라고 요청합니다.
[600ms]
[calm] Priya는 Contoso의 ID를 책임지고 있습니다. 그렇다면 허용해도 될까요? 그리고 누가 결정할까요?
[600ms]
[confident] 이번 레슨은 앱 하나를 따라가면서 Microsoft Entra ID의 등록, 동의, 할당, 검토 과정을 살펴봅니다.

## Step 2 · App registration: the app’s identity

[calm] 개발자 Sam이 MailTidy를 한 번 등록합니다. 이 등록이 앱을 정의합니다.
[600ms]
[curious] 앱 이름과 로그인 후 돌아올 주소, 그리고 앱이 자기가 누구인지 증명하는 방법을 정합니다.
[600ms]
[confident] 등록하면 홈 테넌트에 애플리케이션 개체가 만들어지고, 전역에서 고유한 클라이언트 ID가 생깁니다.

## Step 3 · Enterprise application: the app in your tenant

[calm] MailTidy를 쓰는 테넌트마다 서비스 주체라는 자체 로컬 사본이 생깁니다.
[600ms]
[curious] Entra에서는 엔터프라이즈 애플리케이션 아래에 나타나고, Contoso는 여기서 앱을 관리합니다.
[600ms]
[confident] 애플리케이션 개체는 전역 템플릿이고, 서비스 주체는 그 템플릿의 로컬 인스턴스라고 생각하면 됩니다.

## Step 4 · Delegated or application permissions

[calm] 권한에는 두 가지 종류가 있습니다. 위임된 권한에서는 앱이 로그인한 사용자 대신 동작합니다.
[600ms]
[serious] 애플리케이션 권한에서는 사용자 없이 앱이 자기 자신으로 동작합니다. 그리고 모든 사서함처럼, 권한이 미치는 모든 데이터에 적용됩니다.
[600ms]
[confident] 위임된 액세스는 그 사용자가 접근할 수 있는 범위까지만 닿습니다.

## Step 5 · Consent: who can say yes

[calm] 동의는 권한을 부여하는 방법입니다. 사용자는 자기 데이터에 대해서 동의할 수 있습니다.
[600ms]
[curious] 관리자는 모든 사용자를 대신해 동의할 수 있고, 관리자가 있어야 하는 요청도 있습니다.
[600ms]
[serious] 애플리케이션 권한과, 권한이 높은 위임된 권한 상당수는 관리자만 승인할 수 있습니다.

## Step 6 · User consent settings

[calm] 사용자가 동의할 수 있게 할지는 Priya가 정합니다. 기본 제공 선택지는 세 가지입니다.
[600ms]
[curious] 사용자 동의 안 함, 영향이 낮은 권한에 대해 확인된 게시자만, 아니면 모든 앱입니다.
[600ms]
[confident] 가운데 옵션에서는 어떤 권한을 영향이 낮은 것으로 칠지 직접 분류합니다. 관리자가 사용자 지정 동의 정책을 만들 수도 있습니다.

## Step 7 · Admin consent and the workflow

[calm] 사용자가 동의할 수 없을 때는, 관리자 동의 워크플로를 통해 승인을 요청할 수 있습니다.
[600ms]
[curious] 검토자에게 알림이 가고, 한 명이 결정하고, 사용자는 결과를 받습니다.
[600ms]
[serious] 검토자로 지정된다고 권한이 올라가는 건 아닙니다. 승인하려면 그 동의를 부여할 수 있는 권한이 있어야 합니다.

## Step 8 · Try it: approve or deny

[excited] 동의 요청이 세 건 들어왔습니다. 하나씩 결정하고, 이유를 확인해 보세요.
[600ms]
[curious] 세 가지를 물어보세요. 누가 동작하나요? 게시자가 확인되었나요? 권한의 영향이 낮은가요?
[600ms]
[reassuring] 정답은 Contoso의 설정을 따릅니다. Contoso는 확인된 게시자와 영향이 낮은 권한에 대해서만 사용자가 동의할 수 있게 해 두었습니다.

## Step 9 · Review and revoke permissions

[serious] 부여한 권한은 누군가 제거하기 전까지 계속 유지됩니다. 그러니 앱마다 어떤 권한을 갖고 있는지 검토하세요.
[600ms]
[confident] 그리고 과한 권한은 취소하세요. 최소한 Cloud Application Administrator 역할이 필요합니다.
[600ms]
[calm] 포털에서는 관리자가 동의한 권한을 취소합니다. 사용자가 부여한 권한은 Microsoft Graph나 PowerShell로 취소합니다.

## Step 10 · Assign users and require assignment

[calm] 동의는 앱이 무엇을 할 수 있는지를 정하고, 할당은 누가 앱을 쓸 수 있는지를 정합니다.
[600ms]
[confident] 할당 필수로 설정하면, 할당된 사용자와 그룹만 로그인할 수 있습니다.
[600ms]
[reflective] 그러면 사용자가 직접 동의할 수 없으니, 관리자가 테넌트 전체에 대해 동의를 부여해야 합니다. 그룹에 할당하려면 Premium 라이선스가 필요합니다.

## Step 11 · Secrets, certificates or federated credentials

[calm] 앱은 자격 증명으로 자기가 누구인지 증명합니다. 유출될 위험이 가장 적은 것을 고르세요.
[600ms]
[curious] 아무것도 저장하지 않는 방식이 인증서보다 낫고, 인증서가 클라이언트 비밀보다 낫습니다.
[600ms]
[serious] 관리 ID와 페더레이션 자격 증명을 쓰면 저장된 비밀이 없어집니다. 클라이언트 비밀은 프로덕션에서 쓰지 마세요.

## Step 12 · Recap: register, consent, assign, review

[calm] 앱을 통제하는 방법은 네 가지입니다. 등록하고, 누가 동의할 수 있는지 정하고, 누가 쓸 수 있는지 할당하고, 앱이 가진 권한을 검토합니다.
[600ms]
[confident] 이 네 가지가 합쳐져서, 애플리케이션 ID와 동의에 관한 S C 500 기술 항목을 모두 다룹니다.
[600ms]
[proud] 이 내용은 ID와 액세스, 거버넌스 관리 영역에 속합니다.
