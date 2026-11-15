# 내레이션 대본 - 클라우드 서비스 모델

**Source animation:** journeys/Fundamentals/CloudServiceModels.html
**Script status:** Authored voiceover.
**Language:** 한국어

대괄호 안의 내용은 읽지 않는 연출 지시입니다. 쉼 표시는 별도 줄에 둡니다. 각 블록은 애니메이션 한 단계에 대응합니다.
<!-- Source: https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility -->

## Step 1 · Who patches the server?

[calm] Contoso 팀은 다음 할인 행사를 준비하고 싶지만, 매장 서버의 보안 업데이트도 해야 합니다. 앱을 실행하는 모든 계층에는 관리할 사람이 필요합니다.
[600ms]
[confident] 클라우드 서비스 모델은 현실적인 질문에 답합니다. 어떤 업무는 Contoso에 남고, 어떤 업무는 Microsoft가 맡을까요?

## Step 2 · Run it yourself

[calm] 아래부터 살펴보세요. 물리 장비 위에 운영 체제가 있고, 그 위에 앱과 데이터가 있습니다. 자체 시설에서는 Contoso가 이 모든 계층을 관리합니다.
[600ms]
[confident] 직접 제어할 수 있지만, 유지 관리와 보안, 전체 시스템의 정상 작동에 대한 책임도 모두 맡습니다.

## Step 3 · Rent the infrastructure

[calm] 이제 Microsoft가 매장 아래의 물리 인프라를 관리합니다. Contoso는 가상 머신을 빌리지만, 그 안의 운영 체제와 앱, 데이터는 계속 관리합니다.
[600ms]
[confident] 이것이 서비스형 인프라, IaaS입니다. 하드웨어 업무는 Microsoft로 옮겨가지만, 게스트 운영 체제 업데이트는 Contoso의 일입니다.

## Step 4 · Use a managed platform

[calm] 한 계층 더 올라가 보겠습니다. 서비스형 플랫폼인 PaaS에서는 Microsoft가 기반 운영 체제와 앱이 실행되는 런타임 환경도 운영합니다.
[600ms]
[confident] Contoso는 매장의 코드와 데이터에 집중할 수 있습니다. 다만 앱의 설정과 접근 권한, 자신의 보안 책임은 계속 관리합니다.

## Step 5 · Subscribe to finished software

[calm] 창고 직원에게 필요한 것은 새로 개발할 앱이 아니라 바로 쓸 업무용 소프트웨어입니다. 서비스형 소프트웨어인 SaaS는 공급자가 기반 플랫폼까지 운영하는 완성된 앱을 제공합니다.
[600ms]
[confident] Contoso는 직원들의 사용 방식을 관리합니다. 자체 개발한 온라인 매장이 자동으로 완성형 SaaS 앱으로 바뀌는 것은 아닙니다.

## Step 6 · Some work stays with Contoso

[calm] 관리되는 계층이 늘어나도 책임이 사라지지는 않습니다. 로그인할 사람, 그들이 접근할 대상, 고객 정보의 처리 방식은 Contoso가 결정합니다.
[600ms]
[confident] 데이터, ID, 접근 권한, 관련 장치는 여전히 보호해야 합니다. 공동 책임은 공급자가 전부 처리한다고 믿는 것이 아니라, 책임의 경계를 이해하는 것입니다.

## Step 7 · Cloud Service Models - All in One

[calm] 계층을 비교해 보세요. IaaS는 인프라, PaaS는 관리형 앱 플랫폼, SaaS는 완성된 소프트웨어를 제공합니다. Microsoft가 맡는 운영 업무의 범위가 각각 다릅니다.
[600ms]
[confident] Contoso는 업무에 맞춰 모델을 함께 사용할 수 있습니다. 다음은 만들어진 리소스를 명확하게 정리할 차례입니다.