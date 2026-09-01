# 내레이션 대본 — Azure PaaS Compute · 01 · App Service Plan

**Source animation:** `static/v2/Compute/AppServicePlan.html`

---

## Step 1 · intro

[confident] Contoso Retail의 웹사이트가 단 한 명의 방문자라도 응대하려면, Azure에는 그것을 실제로 실행할 공간이 필요합니다.
[600ms]
[calm] 그 공간이 App Service 플랜입니다. 앱이 공유하는 컴퓨팅 — 리전, 크기, 그리고 인스턴스 수를 말합니다.
[700ms]
[amused] 건물을 임대한다고 상상해 보세요. 플랜은 건물이고, 배포하는 App Service는 그 안에 사는 세입자입니다.

## Step 2 · tier

[confident] 플랜을 정하는 것은 두 가지 선택입니다. 먼저 리전 — 사용자와 가까운 곳을 고르세요.
[600ms]
[calm] 그다음 가격 계층. 이것이 CPU, 메모리, 기능을 정합니다 — 무료 개발·테스트용부터 완전히 격리된 네트워크까지.
[700ms]
[reassuring] 게다가 묶여 있지 않습니다. 나중에 거의 다운타임 없이 상위 계층으로 옮길 수 있으니, 작게 시작해서 키우세요.

## Step 3 · instances

[confident] 인스턴스는 앱 코드의 완전히 동일한 복사본을 실행하는 하나의 가상 머신입니다.
[600ms]
[impressed] 인스턴스를 늘리면 두 가지를 동시에 얻습니다 — 트래픽을 처리할 용량과, 복원력입니다.
[700ms]
[reassuring] 한 인스턴스에 문제가 생겨도 나머지가 계속 서비스합니다. 이것이 기본 제공되는 중복성입니다.

## Step 4 · platform

[confident] 모든 플랜은 하나의 운영 체제에서 실행됩니다 — Linux 또는 Windows.
[600ms]
[calm] 그 위에서 앱은 지원되는 어떤 런타임이든 사용할 수 있습니다: .NET, Java, Node.js, PHP, Python.
[700ms]
[serious] 한 가지 주의할 점 — 운영 체제는 플랜을 만들 때 선택하며 고정됩니다. 그러니 같은 운영 체제가 필요한 앱은 함께 묶으세요.

## Step 5 · scale

[confident] 확장에는 매우 다른 두 가지 방식이 있고, 구분해 두는 것이 좋습니다.
[600ms]
[calm] 스케일 업은 계층을 바꿉니다 — 더 크고 강력한 머신이지만, 수는 같습니다.
[500ms]
[calm] 스케일 아웃은 수를 바꿉니다 — 같은 크기의 머신을, 복사본을 늘려 부하를 나눕니다.
[700ms]
[encouraging] 요령은 이렇습니다: 트래픽 급증에는 스케일 아웃, 한 인스턴스가 더 많은 CPU나 메모리가 필요할 때는 스케일 업.

## Step 6 · autoscale

[confident] 이 레버들을 손으로 움직일 필요는 없습니다. 자동 크기 조정이 대신 해 줍니다.
[600ms]
[calm] 규칙을 정의합니다 — CPU 임계값, 일정, 또는 사용자 지정 메트릭 — 그리고 인스턴스의 최소와 최대 수를.
[700ms]
[impressed] 그러면 Azure가 자동으로 인스턴스를 늘리고 줄여, 용량이 실제 수요를 따릅니다 — 그리고 필요할 때만 비용을 냅니다.

## Step 7 · recap

[proud] 이렇게 기반이 마련됐습니다: 리전, 계층, 인스턴스 수가 함께 앱이 실행되는 컴퓨팅 — App Service 플랜 — 을 정의합니다.
[700ms]
[encouraging] 이제 그 위에 무언가를 올려서, 실제 App Service — 웹 앱 그 자체 — 가 살아나는 것을 봅시다.
