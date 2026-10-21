# Narrator Script — Architect · Front the app: APIs, caching and deployment

**Source animation:** [ApisAndCaching.html](../../../journeys/Architect/ApisAndCaching.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/api-management-key-concepts>

---

## Step 1 · API Management: one front door

[calm] 현재 Contoso의 고객들은 백엔드에 직접 연락하여 정책 집행이 애플리케이션 곳곳에 분산되어 있습니다.
[600ms]
[curious] API Management는 게이트웨이를 앞에 두고, 요청과 응답 경로에 검사와 변환을 적용합니다.
[600ms]
[reassuring] 제품, 구독, 개발자 포털이 API 소비를 조직하는 반면, 백엔드는 자신의 역할에 집중할 수 있습니다.

## Step 2 · API Management: choose the tier

[calm] API Management 계층은 용량, 네트워킹, 그리고 제공하는 가용성 기능 면에서 차이가 있습니다.
[600ms]
[curious] 비교표를 활용해 부적합한 계층을 걸러 내는 요구 사항을 찾고, 프로덕션 트래픽인지도 함께 확인하세요.
[600ms]
[reassuring] 모든 계층이 동일한 네트워크 및 복원력 옵션을 제공한다고 가정하기보다는 현재 기능 비교를 확인한 후에만 선택하세요.

## Step 3 · Caching: check the cache first

[calm] 스토어프론트가 데이터베이스에 묻기 전에 캐시에 제품 데이터를 요청하는 걸 지켜보세요.
[600ms]
[curious] 캐시 히트는 빠르게 답을 반환합니다; 실패하면 애플리케이션이 데이터 저장소로 전송되고 캐시가 채워집니다.
[600ms]
[reassuring] 이 캐시 사이드 패턴은 반복 읽기를 줄이지만, 애플리케이션은 여전히 만료 및 무효화 전략이 필요합니다.

## Step 4 · Caching: what belongs in memory

[calm] 캐시는 자주 읽히고, 어느 정도 오래된 상태여도 문제가 없는 데이터에 유용합니다.
[600ms]
[curious] 캐시는 Contoso의 주문처럼 잃어서는 안 되는 데이터의 기준 저장소가 아닙니다.
[600ms]
[reassuring] Azure Managed Redis에 속할 항목을 접근 패턴과 정확성 요구사항으로 선택하세요. 단순히 메모리가 빠르기 때문만은 아닙니다.

## Step 5 · Messaging and events: pick by the message

[calm] 명령어, 개별 이벤트, 스트림은 서로 다른 통신 요구를 설명합니다.
[600ms]
[curious] Service Bus는 가치 있는 비즈니스 메시지를 지원하고, Event Grid는 이벤트 알림을 배포하며, Event Hubs는 스트림을 인징합니다.
[600ms]
[reassuring] 스토리지 큐는 더 간단한 큐링 요구를 충족할 수 있습니다; 서비스를 선택하기 전에 메시지의 의미와 필요한 보장부터 시작하세요.

## Step 6 · Configuration: keep settings out of the code

[calm] 동일한 애플리케이션 빌드는 소스 코드에 비밀을 포함하지 않고 환경을 넘어 실행되어야 합니다.
[600ms]
[curious] App Configuration은 설정과 기능 플래그를 저장하고, Key Vault 참조는 별도로 보호된 비밀을 가리킵니다.
[600ms]
[reassuring] 애플리케이션이 각 서비스에 접근하는 경로를 따라가세요: 참조는 비밀을 구성 저장소에 복사하지 않습니다.

## Step 7 · Deployment: ship safely, roll back fast

[calm] 릴리스 패스는 수동 변경 대신 인프라 코드와 애플리케이션 파이프라인을 사용합니다.
[600ms]
[curious] 배포 슬롯은 Contoso가 프로덕션 트래픽을 전환하기 전에 새 버전을 준비할 수 있게 해줍니다.
[600ms]
[reassuring] 릴리스와 롤백 경로를 반복 가능하게 유지하는 것은 실시간 애플리케이션에 긴급 변경을 하는 것보다 설계가 더 안전합니다.

## Step 8 · All in one: a fast, safe partner API

[calm] Contoso의 파트너 API는 이제 단지 더 빠른 백엔드뿐만 아니라 통합된 지원 결정 체계를 갖추고 있습니다.
[600ms]
[curious] 게이트웨이, 캐시, 메시징, 구성, 배포 경로는 각각 다른 문제를 해결합니다.
[600ms]
[reassuring] 서비스 선택 옆에 정당성을 두세요; 다음으로, 기존 워크로드가 이 Azure 설계로 어떻게 전환될지 계획하세요.

