# 내레이션 대본 — Azure Storage · 레벨업 · ID와 RBAC

**Source animation:** `static/v2/Storage/StorageIdentityRBAC.html`

---

## Step 1 · goal

[confident] 앱은 컨테이너 안의 blob을 읽어야 합니다. 그리고 목표는 키 하나 없이 그것을 해내는 것입니다.
[600ms]
[calm] 예전 방식은 계정 키나 SAS 토큰을 건네줍니다. 유출될 수 있는 비밀이죠. 현대적인 방식은 대신 앱에 ID를 주고 역할을 부여합니다.
[700ms]
[curious] 그 그림을 화살표 하나하나 따라가며 그려 봅시다. 왼쪽의 ID가 오른쪽 컨테이너에 대한 접근 권한을 얻어 갑니다.

## Step 2 · identity

[confident] 먼저, 앱에는 보안 주체가 필요합니다. 간단히 말해, 누가 요청하고 있는가입니다.
[600ms]
[calm] 사용자, 그룹, 또는 서비스 주체일 수 있습니다. 하지만 앱에게 최선의 선택은 관리 ID입니다. Azure가 자격 증명을 관리하므로 코드 안에 비밀이 없습니다.
[700ms]
[reassuring] 그리고 DefaultAzureCredential 도우미를 쓰면, 완전히 같은 코드가 여러분의 노트북에서도 Azure에서도 실행됩니다.

## Step 3 · token

[confident] 이제 앱이 Storage를 호출합니다. Microsoft Entra ID가 그 ID를 인증하고, 수명이 짧은 OAuth 토큰을 돌려줍니다.
[600ms]
[calm] Storage는 Entra를 신뢰하므로, 그 토큰이 — 키가 아니라 — 모든 요청에 함께 실려 갑니다.
[700ms]
[reassuring] 토큰은 빠르게 만료되고 storage로 범위가 한정되어 있으니, 여러분이 저장하거나 교체할 것은 아무것도 없습니다.

## Step 4 · role

[confident] 토큰만으로는 아직 충분하지 않습니다. ID에는 역할이 필요합니다. 그리고 여기에 모두가 걸려 넘어지는 함정이 있습니다.
[600ms]
[serious] Storage Blob Data Reader 같은 데이터 평면 역할을 사용하세요. 컨트롤 평면의 기여자 역할은 계정을 관리할 수 있지만, 여러분의 blob은 읽지 못합니다.
[700ms]
[amused] 그러니 기여자는 리소스를 태연히 관리하면서도 데이터에 대해서는 403을 받습니다. 데이터 역할을 할당하세요.

## Step 5 · scope

[confident] 모든 역할은 범위에서 할당됩니다. 관리 그룹에서 시작해 구독, 리소스 그룹, 계정을 거쳐, 단일 컨테이너에 이르기까지.
[600ms]
[calm] 동작하는 가장 좁은 범위에서 할당하세요. 여기서는 컨테이너입니다. 그러면 권한이 거기서부터 아래로 상속됩니다.
[700ms]
[reassuring] blob 경로 수준의 정밀함이 필요한가요? 할당 그 자체에 특성 기반 조건, 즉 ABAC를 더하세요.

## Step 6 · assign

[confident] 이를 합치면 역할 할당이 됩니다. 주체, 그리고 역할, 그리고 범위입니다.
[600ms]
[calm] 이제 모든 요청이 Entra 토큰을 실어 나르고, Azure가 할당을 확인하고, 앱이 blob을 읽습니다. 키는 전혀 관여하지 않은 채로요.
[700ms]
[reassuring] 역할 할당은 결국 누가, 무엇을, 어디서입니다. 그리고 Azure는 한 번 한 번의 호출마다 그것을 평가합니다.

## Step 7 · recap

[proud] 이것이 전체 그림입니다. 앱 ID에서, Entra 토큰으로, 컨테이너 범위의 데이터 평면 역할로, 그리고 blob으로.
[600ms]
[calm] 키는 없고, 최소 권한이며, 완전히 감사됩니다.
[700ms]
[encouraging] 마지막 한 수 — 공유 키를 끄고, ID를 유일한 입구로 만드세요.

## Step 8 · spec

[confident] 중요하니 한 단계 더 깊이. Azure 역할 기반 액세스 제어에는 두 개의 평면이 있습니다.
[600ms]
[calm] 소유자와 기여자 같은 컨트롤 평면 역할은 리소스를 관리합니다. 데이터 평면 역할 — blob용 Reader, Contributor, Owner, 그리고 파일, 큐, 테이블용 그 사촌들 — 은 안의 데이터에 대한 접근을 부여합니다.
[700ms]
[serious] 기억하세요. 소유자와 기여자는 계정 키를 나열할 수 있으므로, 예전 방식으로 데이터에 도달할 수 있습니다. 공유 키를 비활성화해서 모두가 제대로 된 데이터 역할을 거치도록 강제하세요.
