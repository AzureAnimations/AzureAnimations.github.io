# 내레이션 대본 — Azure PaaS Compute · 04 · Function App

**Source animation:** `static/v2/Compute/FunctionApp.html`

---

## Step 1 · intro

[confident] 마지막 목적지 — 조금 다른 종류의 컴퓨팅, Function App입니다.
[600ms]
[calm] 함수라고 부르는 작은 코드 조각을 호스팅하며, 이벤트가 발생할 때만 실행합니다. 관리할 서버가 없고, 코드가 실제로 실행되는 동안에만 비용을 냅니다.
[700ms]
[amused] 서버리스는 "서버가 없다"는 뜻이 아닙니다 — Azure가 보이지 않게 서버를 실행하고 확장해 준다는 뜻입니다.

## Step 2 · triggers

[confident] 모든 함수는 정확히 하나의 트리거에서 시작합니다 — 함수를 실행하는 이벤트입니다.
[600ms]
[calm] 그것은 HTTP 요청, 타이머, 큐 메시지, 또는 스토리지에 업로드된 새 파일일 수 있습니다.
[500ms]
[calm] 그다음 선택적 바인딩이 함수를 데이터에 연결합니다. 입력 또는 출력으로 — 데이터베이스, 스토리지, 메시지 큐에.
[700ms]
[impressed] 바인딩은 선언적입니다. 연결을 설명하기만 하면 런타임이 이어 줍니다 — 연결 코드는 필요 없습니다.

## Step 3 · scaling

[confident] 여기가 서버리스의 진짜 마법입니다. 스케일 컨트롤러가 이벤트가 얼마나 빨리 도착하는지 지켜봅니다.
[600ms]
[calm] 부하가 오르면 인스턴스를 추가하고, 잠잠해지면 제거합니다 — 0까지 내려가면서.
[700ms]
[impressed] Consumption과 Flex Consumption에서는 유휴 앱은 비용이 전혀 들지 않습니다. 이벤트 없음, 인스턴스 없음, 청구 없음.

## Step 4 · plans

[confident] Functions는 몇 가지 호스팅 플랜을 제공하므로, 워크로드에 맞춰 플랜을 고를 수 있습니다.
[600ms]
[calm] Flex Consumption은 권장 서버리스 선택입니다 — 빠른 확장, 가상 네트워크 지원, 사용한 만큼 지불. Premium은 미리 준비된 인스턴스로 콜드 스타트를 없앱니다. Dedicated는 App Service Plan을 재사용해 예측 가능한 비용을 제공합니다.
[700ms]
[encouraging] 어디서 시작할지 모르겠다면, Flex Consumption으로 시작해서 나중에 조정하세요.

## Step 5 · compare

[confident] 그렇다면 App Service 대신 Functions를 언제 골라야 할까요?
[600ms]
[calm] 작업이 짧고, 이벤트 기반이며, 폭발적이고, 유휴 시 0까지 확장할 수 있다면 Functions를.
[500ms]
[calm] 항상 켜져 있는 웹 앱이나 API를 운영한다면 App Service를.
[700ms]
[reassuring] 그리고 둘은 같은 플랫폼을 공유합니다 — 하나의 리소스 그룹에서 둘 다 실행하고 서로 연결할 수도 있습니다.

## Step 6 · recap

[proud] 이렇게 전체 그림이 완성됩니다: 트리거가 코드를 시작하고, 바인딩이 데이터에 연결하며, 이벤트 기반 확장이 0에서 수천까지 크기를 조정하고, Flex Consumption이 비용을 낮게 유지합니다.
[700ms]
[encouraging] 함수를 배포하고, 트리거를 향하게 한 뒤, 서버와 확장은 Azure에 맡기세요. 이것이 Azure PaaS Compute 여정입니다 — 훌륭했습니다.
