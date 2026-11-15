# Narrator Script — Monitor · Application Insights and OpenTelemetry

**Source animation:** [AppInsightsAndOtel.html](../../../journeys/Monitor/AppInsightsAndOtel.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-sampling>
- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable>
- <https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview>

---

## Step 1 · A slow checkout across five services

[calm] Contoso 쇼핑객이 결제 버튼을 누르면, 요청이 서로 다른 서비스 다섯 개를 거칩니다.
[600ms]
[concerned] 2.4초가 걸리는데, 느린 편입니다. 그런데 서비스를 하나씩 따로 보면 모두 정상으로 보입니다.
[600ms]
[curious] 그렇다면 시간은 어디서 쓰였을까요? 이번 수업 내내 이 결제 요청 하나를 따라가며 그 답을 찾아보겠습니다.

## Step 2 · Three signals, one trace ID

[calm] 텔레메트리는 세 종류입니다. 트레이스는 요청 하나를 따라가고, 메트릭은 시간에 따라 일어나는 일을 세고, 로그는 코드가 남긴 말을 기록합니다.
[600ms]
[curious] 각각은 따로 보면 그저 데이터 더미일 뿐입니다. 공유되는 트레이스 ID가 있어야 트레이스에서 해당 로그로 넘어갈 수 있습니다.
[600ms]
[impressed] 이렇게 연관 짓고 나면 데이터 더미 세 개가 하나의 이야기가 됩니다. 스팬의 ID가 로그 줄의 ID와 일치하기 때문입니다.

## Step 3 · The trace ID travels with the request

[calm] 트레이스에서 경로 하나를 따라가 보세요. 서비스마다 자기 스팬을 추가하고, traceparent 헤더로 트레이스 컨텍스트를 다음으로 넘깁니다.
[600ms]
[confident] 트레이스 ID는 그대로 유지되고, 부모 ID는 홉마다 바뀝니다. 이렇게 조각들이 서로 이어집니다.
[600ms]
[reassuring] 이 헤더는 W 3 C 트레이스 컨텍스트 표준에서 나온 것이고, OpenTelemetry 라이브러리가 대신 읽고 써 줍니다.

## Step 4 · Spans become a timeline

[calm] 스팬은 시간을 잰 작업 하나입니다. 시작 시점, 소요 시간, 부모가 있습니다.
[600ms]
[curious] 트레이스 하나의 스팬을 시간 축에 나란히 놓으면 워터폴이 됩니다. 들여쓰기로 누가 누구를 호출했는지 보입니다.
[600ms]
[confident] 부모 스팬은 자신이 기다리는 자식 스팬만큼은 최소한 지속됩니다. 그래서 느린 자식이 느린 부모를 만듭니다.

## Step 5 · OpenTelemetry: instrument once, export anywhere

[calm] OpenTelemetry는 특정 벤더에 종속되지 않는 표준입니다. 계측이 텔레메트리를 만들고, SDK가 그것을 처리합니다.
[600ms]
[confident] 그다음 익스포터가 Application Insights 같은 백엔드로 보냅니다.
[600ms]
[optimistic] 형식이 표준이기 때문에, 백엔드를 바꾸려면 익스포터만 바꾸면 됩니다. 앱을 다시 계측할 필요가 없습니다.

## Step 6 · Auto-instrument first, add manual spans

[calm] 자동 계측으로 시작하세요. HTTP, 데이터베이스, 메시징 라이브러리는 이미 스팬을 알아서 만들어 줍니다.
[600ms]
[confident] 수동 스팬이나 특성은 결제 코드의 가격 규칙처럼 정말 내 것인 단계에만 추가하세요.
[600ms]
[serious] 디스트로는 설정을 묶어서 제공합니다. 다만 같은 앱에서 디스트로를 두 개 초기화하지는 마세요.

## Step 7 · Connect the app, land the data

[calm] Application Insights는 애플리케이션 성능 모니터링을 위한 Azure Monitor 기능입니다.
[600ms]
[confident] 연결 문자열은 앱이 텔레메트리를 어디로 보낼지 알려 줍니다. 그러면 Application Insights가 그 데이터를 Log Analytics 워크스페이스에 저장합니다.
[600ms]
[curious] 데이터가 워크스페이스에 쌓이므로 KQL로 쿼리할 수 있고, KQL은 별도의 여정에서 다룹니다.

## Step 8 · Application map: where is the trouble?

[curious] 애플리케이션 맵은 모든 구성 요소를 클라우드 역할 이름으로 그리고, 그 사이의 호출을 보여 줍니다.
[600ms]
[calm] 상태가 한눈에 보여서, 느리거나 실패하는 노드가 다른 노드와 구별됩니다.
[600ms]
[confident] 여기서 시작해 서비스 다섯 개를 하나로 좁힌 다음, 그 노드를 선택해 실패나 성능을 자세히 살펴보세요.

## Step 9 · Read the trace: end-to-end transaction

[calm] 검색으로 관심 있는 트랜잭션을 찾으세요. 열면 종단 간 보기가 스팬을 간트 차트로 펼쳐 줍니다.
[600ms]
[curious] 스팬 막대를 선택하면 그 작업이 알려 주는 내용을 볼 수 있습니다. 소요 시간, 종속성 호출, 또는 예외입니다.
[600ms]
[impressed] 이제 2.4초의 범인이 보입니다. 어느 스팬이 긴지 알 수 있기 때문입니다.

## Step 10 · Probe from outside, watch live

[calm] 가용성 테스트는 여러 위치에서 엔드포인트를 호출합니다. 엔드포인트가 실패하거나 느려지면 경고해 줍니다.
[600ms]
[confident] 지금 권장되는 것은 표준 테스트이고, 더 이상 사용되지 않는 URL ping 테스트를 대체합니다.
[600ms]
[curious] 라이브 메트릭은 지금 일어나는 일을 보여 줍니다. 창이 열려 있는 동안에만 스트리밍되기 때문에, 그 데이터는 보관되지 않습니다.

## Step 11 · Sampling keeps whole traces, not every trace

[calm] 샘플링은 보내는 텔레메트리의 양을 줄여서, 비용을 관리할 수 있게 해 줍니다.
[600ms]
[confident] Application Insights 샘플러는 트레이스 전체를 함께 유지하거나 함께 버리기 때문에, 남긴 트레이스는 항상 완전합니다.
[600ms]
[serious] 고정 비율 샘플링은 일정 비율을 남기고, 속도 제한 샘플링은 초당 트레이스 수에 상한을 둡니다. 메트릭은 샘플링되지 않으니, 메트릭으로 경고를 설정하세요.

## Step 12 · All in one: follow the request

[calm] 다시 느린 결제 요청으로 돌아가 봅시다. 서비스를 OpenTelemetry로 계측하고, 텔레메트리를 Application Insights로 보내세요.
[600ms]
[confident] 그다음 애플리케이션 맵에서 문제가 있는 서비스를 찾고, 트랜잭션을 열어 느린 스팬을 찾으세요.
[600ms]
[proud] 이렇게 느린 요청이 시간을 어디에 썼는지, 요청 하나씩 확인할 수 있습니다.
