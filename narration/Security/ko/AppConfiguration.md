# Narrator Script · 한국어 (ko) — Journey 02 · Azure App Configuration

**Source animation:** `static/v2/Security/AppConfiguration.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지(읽지 않는 연출 지시). 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Every service must find the others

[confident] Contoso의 서비스는 모두 서로를 찾아야 합니다.
[600ms]
[calm] Store Front는 Order API의 URL을 알아야 하고, Order는 백엔드, 데이터베이스, 결제에 도달해야 합니다.
[600ms]
[concerned] 그것을 모든 버전과 리비전마다 곱하면, 각 서비스는 결국 다른 서비스의 엔드포인트를 자체 appsettings.json에 하드코딩하게 됩니다.
[800ms]
[curious] 새 리비전이 나올 때마다 그것을 참조하는 모든 것을 편집하고 다시 배포해야 합니다. 그렇다면 이 모든 설정은 사실 어디에 있어야 할까요?

## Step 2 · One store for every setting: App Configuration

[confident] 모든 설정을 하나의 저장소에, Azure App Configuration에서입니다.
[600ms]
[calm] 이것은 앱의 모든 설정과 기능 플래그를 위한 관리형 저장소로, 코드 밖에 보관되며 모든 서비스와 리비전이 공유합니다.
[600ms]
[impressed] Twelve-Factor 앱은 구성을 코드 밖에 둡니다. 그리고 이것이 바로 그 외부 저장소입니다.
[600ms]
[reassuring] 값을 한 번 설정하면, 모든 서비스와 버전이 한 곳에서 그것을 읽습니다.

## Step 3 · Scattered settings become organized key-values

[confident] 그 안에서, 흩어진 설정이 정리된 키-값이 됩니다.
[600ms]
[calm] 모든 엔드포인트와 속성이 키와 값이 되고, 계층적 이름이 콜론 구분 기호로 그룹화됩니다.
[600ms]
[impressed] Contoso 콜론 Order-API 콜론 Backend-URL 같은 이름은 마치 경로처럼 읽힙니다.
[600ms]
[reassuring] 그리고 접두사를 사용하면 그룹 전체를 한 번에 쿼리할 수 있습니다. 깨끗하고 검색 가능한 하나의 네임스페이스입니다.

## Step 4 · One key, many labels — versions & environments

[intrigued] 하지만 같은 설정의 서로 다른 환경과 버전은 어떨까요?
[800ms]
[confident] 그것을 위해 레이블이 있습니다. 같은 키에 레이블을 지정해 변형을 만듭니다.
[600ms]
[calm] Contoso는 Backend URL을 한 번만 보관하고, 환경과 버전마다 레이블을 붙입니다. dev, prod, 버전 2, staging입니다.
[600ms]
[reassuring] 레이블은 구성을 버전 관리하는 기본 제공 방법이며, 각 앱은 대상으로 하는 레이블을 로드하기만 하면 됩니다.

## Step 5 · Flags and secret references, by content type

[curious] 이 값들은 항상 일반 문자열이기만 할까요?
[800ms]
[confident] 아니요. App Configuration은 두 가지 특수 값 형식을 표시합니다.
[600ms]
[calm] 실시간으로 전환할 수 있는 기능 플래그와, 복사하지 않고 비밀을 가리키는 Key Vault 참조입니다.
[600ms]
[reassuring] 둘 다 여전히 키-값입니다. 콘텐츠 형식이 클라이언트에게 플래그를 평가할지, Key Vault에서 비밀을 확인할지를 알려줄 뿐입니다.

## Step 6 · Consume live: managed identity + dynamic refresh

[confident] 이제 안전하게, 그리고 다시 배포하지 않고 이것을 실시간으로 사용해 봅시다.
[600ms]
[calm] 앱은 관리 ID로 App Configuration을 읽습니다. 연결 문자열은 전혀 없습니다.
[600ms]
[impressed] 값이나 플래그를 변경하면, 동적 새로 고침이 실행 중인 앱에 그것을 전달합니다. 다시 시작도, 다시 배포도 없습니다.
[600ms]
[reassuring] 센티널 키가 언제 다시 로드할지 신호를 보내므로, 각 인스턴스는 그 자리에서 안전하게 새로 고쳐집니다.

## Step 7 · All in one: central, versioned, live configuration

[reflective] 모든 것이 하나로, 운영 모델이 명확해집니다.
[600ms]
[proud] 모든 Contoso 서비스는 하나의 App Configuration 저장소(계층적 키, 버전 레이블, 기능 플래그, Key Vault 참조)를 관리 ID를 통해 읽고, 실시간으로 새로 고쳐집니다.
[600ms]
[confident] 이제 구성은 외부화되고, 공유되며, 버전 관리됩니다.
[600ms]
[optimistic] 그리고 다음 단계는 액세스를 더욱 조입니다. 관리 ID가 필요할 때 비밀을 가져오고, 로컬 자격 증명은 사라집니다.
