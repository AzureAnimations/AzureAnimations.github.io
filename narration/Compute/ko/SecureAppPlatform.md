# Narrator Script — Compute · Secure Azure Functions, Logic Apps, App Service and API Management

**Source animation:** [SecureAppPlatform.html](../../../journeys/Compute/SecureAppPlatform.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/overview-authentication-authorization>
- <https://learn.microsoft.com/azure/azure-functions/security-concepts>
- <https://learn.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app>
- <https://learn.microsoft.com/azure/api-management/mitigate-owasp-api-threats>

---

## Step 1 · Who can call it, and what can it reach?

[calm] Contoso Shop은 네 가지 플랫폼에서 돌아갑니다. App Service, Functions, Logic Apps, API Management입니다.
[600ms]
[curious] 플랫폼마다 두 가지 질문에 답해야 합니다. 누가 호출할 수 있는지, 그리고 무엇에 접근할 수 있는지입니다.
[600ms]
[confident] 이 수업에서 다루는 컨트롤은 모두 인바운드든 아웃바운드든 이 두 질문 중 하나에 답합니다.

## Step 2 · App Service: sign-in, HTTPS and managed identity

[calm] App Service에서는 브라우저가 HTTPS를 써야 하고, 최소 TLS 버전도 지정합니다. 모두 앱에서 설정합니다.
[600ms]
[confident] 사용자는 로그인해야 합니다. 인증을 직접 구현하지 말고, 기본 제공 인증을 켜세요.
[600ms]
[impressed] 그리고 앱은 Microsoft Entra ID의 관리 ID로 Key Vault에 접근합니다. 코드에 저장하거나 교체할 자격 증명이 없습니다.

## Step 3 · Functions: authorization levels and keys

[calm] HTTP 트리거가 있는 함수에는 모두 권한 수준이 있고, 익명 수준은 키가 필요 없습니다.
[600ms]
[confident] 함수 수준과 관리자 수준은 액세스 키가 필요합니다. 키는 헤더나 code 쿼리 문자열로 보냅니다. 마스터 키는 관리자 비밀번호처럼 다루세요.
[600ms]
[serious] 하지만 키는 로그인이 아니라 공유 비밀입니다. 실제 ID를 확인하려면 기본 제공 인증을 켜세요.

## Step 4 · Functions network: inbound and outbound

[calm] 공용 네트워크에서 오는 호출자는 우선순위 순서로 정해진 허용 및 거부 목록을 거칩니다.
[600ms]
[confident] 프라이빗 네트워크의 호출자는 프라이빗 엔드포인트를 씁니다. 앱이 인바운드 트래픽용 프라이빗 주소를 갖게 됩니다.
[600ms]
[serious] 프라이빗 서비스를 호출할 때는 가상 네트워크 통합을 씁니다. 다만 이 기능은 아웃바운드 트래픽에만 적용되니, 앱 자체가 프라이빗이 되는 것은 아닙니다.

## Step 5 · Logic Apps: who can start a workflow

[curious] 요청 트리거는 그저 URL 하나일 뿐인데, 그러면 누가 호출할 수 있게 할까요?
[600ms]
[confident] 호출자가 신원을 증명하는 방법을 고르세요. Microsoft Entra ID의 OAuth, 공유 액세스 서명, 인바운드 IP 제한이 있고, 워크플로를 API Management 뒤에 둘 수도 있습니다.
[600ms]
[reassuring] 워크플로가 만드는 연결에는 저장해 둔 자격 증명 대신 관리 ID를 쓰세요.

## Step 6 · Logic Apps: keep secrets out of run history

[calm] 실행 기록에는 모든 작업의 입력과 출력이 전부 남습니다.
[600ms]
[serious] 민감한 값이 있으면 문제가 되니, 보안 입력과 보안 출력을 켜서 숨기세요. 보안 출력을 사용하는 작업은 입력도 함께 숨겨집니다.
[600ms]
[confident] 비밀은 보안 문자열 매개변수로 정의하세요. 화면에 나오는 값은 모두 가상입니다.

## Step 7 · API Management: validate the token

[calm] 이번에는 게이트웨이입니다. 게이트웨이는 백엔드가 요청을 보기도 전에 호출자의 토큰부터 확인합니다.
[600ms]
[confident] JWT 검증 정책은 서명과 발급자, 대상, 만료 시간을 확인하고, 필요한 클레임이 있으면 그것도 확인합니다.
[600ms]
[reassuring] 유효한 토큰이 없으면 호출은 게이트웨이에서 멈추고, 기본적으로 호출자는 401을 받습니다.

## Step 8 · API Management: limits, IP filter, backend

[calm] 같은 문을 지키는 정책이 더 있습니다. IP 필터는 주소를 허용하거나 거부합니다.
[600ms]
[confident] 속도 제한은 호출 횟수에 상한을 두고, 이를 넘긴 호출자는 429, Too Many Requests를 받습니다.
[600ms]
[curious] 백엔드 쪽에서는 게이트웨이도 자신을 증명합니다. 관리 ID 토큰을 쓰거나, 상호 TLS용 클라이언트 인증서를 씁니다.

## Step 9 · Put a WAF in front

[calm] 웹 애플리케이션 방화벽은 앱이나 함수, 게이트웨이에 닿기 전에 모든 요청에서 흔한 공격이 있는지 검사합니다.
[600ms]
[confident] Azure Web Application Firewall은 Application Gateway나 Front Door에서 실행됩니다. SQL 인젝션과 크로스 사이트 스크립팅 같은 공격을 막아 줍니다.
[600ms]
[serious] 그리고 앱이 그 정문을 통해서만 트래픽을 받도록 잠그세요.

## Step 10 · Try it: where is the request blocked?

[curious] 요청을 하나 골라서 경로를 지켜보세요. 그 요청을 처음으로 거부하는 계층이 표시됩니다.
[600ms]
[confident] 그 뒤의 계층은 요청을 아예 보지 못하니, 잘못된 호출은 가능한 한 빨리 차단됩니다.
[600ms]
[reflective] 그래서 계층을 여러 겹으로 쌓습니다. 앞 계층이 놓친 것을 다음 계층이 잡아냅니다.

## Step 11 · Which control for which platform?

[calm] 컨트롤 여덟 개, 플랫폼 네 개입니다. 각 컨트롤을 설정하는 플랫폼에 놓이는 모습을 보세요.
[600ms]
[confident] 일부 설정은 겹칩니다. 예를 들어 액세스 제한은 App Service와 Functions 모두에 있습니다.
[600ms]
[reassuring] 이 여덟 가지는 플랫폼마다 가장 잘 맞는 컨트롤을 고른 것이고, 각 컨트롤을 어디서 설정하는지 기억하기에 좋은 방법입니다.

## Step 12 · Recap: identity, network, front door

[calm] 컨트롤은 모두 질문 하나에 답합니다. 누구인가? 어디서 왔는가? 이 요청은 안전해 보이는가?
[600ms]
[confident] ID와 네트워크, 그리고 정문입니다. 모든 플랫폼에서 이 세 겹을 함께 쓰세요.
[600ms]
[proud] 이 수업은 S C 500 학습 가이드의 Secure Compute 기술을 다룹니다.
