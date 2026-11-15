# 내레이션 대본 — Azure PaaS Compute · 02 · App Service

**Source animation:** `static/v2/Compute/AppService.html`

---

## Step 1 · intro

[confident] 이제 주인공이 등장합니다. App Service. 이것은 실제 애플리케이션, Contoso의 스토어프론트로, 방금 만난 플랜 위에서 실행됩니다.
[600ms]
[reassuring] 게다가 완전 관리형입니다. Azure가 운영 체제, 런타임, 패치를 맡아 주니, 여러분은 코드에 집중할 수 있습니다.
[700ms]
[calm] 거의 모든 언어로 만들 수 있습니다 — .NET, Node, Python, Java, PHP — 또는 자신의 컨테이너로도.

## Step 2 · deploy

[confident] 파일을 손으로 업로드하는 일은 드뭅니다. 대신 소스를 연결합니다 — Git, GitHub, Azure DevOps, 또는 Bitbucket.
[600ms]
[calm] 그때부터는 브랜치에 푸시할 때마다 앱이 자동으로 빌드, 테스트, 배포됩니다.
[700ms]
[encouraging] 변경을 커밋하면, 나머지는 파이프라인이 프로덕션까지 옮겨 줍니다.

## Step 3 · slotsIntro

[confident] 하나의 App Service는 자기 자신의 라이브 복사본을 여러 개 실행할 수 있습니다. 이를 배포 슬롯이라고 합니다.
[600ms]
[calm] 프로덕션은 Contoso의 현재 사이트를 계속 서비스합니다. 현대화할 때가 되면, 리디자인을 위한 스테이징 슬롯을 자체 주소와 설정으로 추가합니다. 프로덕션은 건드리지 않고요.
[700ms]
[reassuring] 같은 앱, 실행 중인 두 버전, 둘 다 하나의 리소스 안에서 안전하게.

## Step 4 · slots

[confident] 슬롯이 진가를 발휘하는 지점입니다. 방문자가 도착하면, App Service는 실제 트래픽을 여러분이 정한 비율로 나눌 수 있습니다.
[600ms]
[calm] 예를 들어 구십 퍼센트는 신뢰할 수 있는 라이브 사이트로, 단 십 퍼센트만 스테이징의 새 리디자인으로 보냅니다.
[700ms]
[impressed] 어떻게 동작하는지 지켜보다가, 새 버전 비율을 올리거나 다시 0으로 되돌립니다. 재배포는 필요 없습니다. 만족하면, 한 번의 스왑으로 즉시, 다운타임 없이 라이브로 전환됩니다.

## Step 5 · auth

[confident] 로그인이 필요한가요? 인증 코드를 전혀 작성할 필요가 없습니다.
[600ms]
[calm] 포털에서 공급자를 켜기만 하세요 — Microsoft, Google, Facebook, Apple, 또는 어떤 OpenID Connect 공급자든.
[700ms]
[reassuring] App Service가 앱 앞에 서서, 요청이 코드에 닿기 전에 토큰을 검사합니다. 코드가 아니라 구성입니다.

## Step 6 · security

[confident] 기본적으로 앱은 azure-websites 주소로 응답합니다. 자신의 브랜드를 쓰려면 사용자 지정 도메인을 추가하세요.
[600ms]
[calm] DNS 레코드로 도메인을 앱에 연결하면, Azure가 무료 관리형 T-L-S 인증서를 발급하고 자동으로 갱신합니다.
[700ms]
[reassuring] HTTPS는 기본으로 적용되므로, 여러분 도메인의 방문자는 항상 암호화된 연결을 얻습니다.

## Step 7 · traffic

[confident] 글로벌로 나갈 준비가 됐나요? App Service를 둘 이상의 리전에서 실행하세요.
[600ms]
[calm] 그러면 Traffic Manager가 각 방문자를 가장 가까운 정상 리전으로 라우팅합니다.
[700ms]
[reassuring] 그리고 어떤 리전이 비정상이 되면, 자동으로 그 리전을 우회합니다 — 코드 변경 없이.

## Step 8 · recap

[proud] 모두 모아 봅시다: 컴퓨팅을 위한 플랜, 코드를 위한 App Service, 지속적 배포, 슬롯, 기본 제공 인증, 무료 T-L-S, 그리고 글로벌 라우팅.
[600ms]
[encouraging] 이것이 프로덕션 준비가 된 웹 앱입니다. 직접 해 보세요 — 플랜을 만들고, 그 위에 App Service를 만들면, 바로 라이브입니다.
