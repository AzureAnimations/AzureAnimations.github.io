# Narrator Script · 한국어 (ko) — Journey 03 · Managed Identity

**Source animation:** `static/v2/Security/ManagedIdentity.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지(읽지 않는 연출 지시). 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Where we start: an app that needs a database

[calm] 대부분의 앱이 시작하는 곳에서 시작해 봅시다.
[600ms]
[confident] Contoso의 백엔드는 Azure VM 안에서 실행되며 Azure SQL Database를 읽어야 합니다.
[600ms]
[calm] 연결하기 전에, 데이터베이스 관리자가 로그인(사용자 이름과 암호)을 발급하고, 그 로그인에 데이터베이스에 대한 권한을 부여합니다.
[600ms]
[reflective] 이것은 전형적인 설정입니다. 앱은 누군가가 건넨 자격 증명으로 자신이 누구인지 증명합니다.

## Step 2 · That login ships inside the app — in plain text

[concerned] 하지만 그 로그인이 어디로 가는지 보세요.
[600ms]
[serious] 사용자 이름과 암호는 앱에 저장되어 앱과 함께 배포됩니다. 종종 .env나 구성 파일에 평문으로 들어갑니다.
[600ms]
[concerned] 이 공유 서비스 계정을 우리는 기능 ID라고 부릅니다. 그리고 이것은 단순히 확장되지 않습니다.
[800ms]
[serious] 그 파일을 읽을 수 있는 사람은 누구나 데이터베이스 로그인을 갖게 되고, 새 앱마다 고유한 것이 필요합니다.

## Step 3 · Managed identity solves it — a role, not a password

[confident] 관리 ID가 이것을 해결합니다. 암호가 아니라 역할로.
[600ms]
[calm] 같은 VM, 같은 Contoso 앱, 같은 데이터베이스. 하지만 이제 앱은 관리 ID, 즉 Microsoft Entra ID 내의 자체 기본 제공 ID를 갖습니다.
[600ms]
[impressed] 사용자 이름과 암호를 발급하는 대신, 관리자는 데이터베이스의 액세스 제어를 열고 그 ID에 필요한 역할만 할당합니다.
[600ms]
[reassuring] 자격 증명이 만들어지거나 저장되는 일은 전혀 없습니다. 오직 ID와, 최소 권한 액세스뿐입니다.

## Step 4 · Turn it on — enable the managed identity

[confident] 그리고 켜는 것은 정말 간단합니다.
[600ms]
[calm] Azure Portal에서 리소스를 열고, [ID]로 이동한 다음, 시스템 할당 상태를 [켜기]로 전환하고 저장합니다. 그러면 Azure가 Microsoft Entra ID에 ID를 만듭니다.
[600ms]
[amused] 명령줄을 선호하나요? Azure CLI 한 줄로 똑같이 할 수 있습니다.
[600ms]
[reassuring] 대부분의 Azure 컴퓨팅 및 앱 서비스가 이를 지원합니다. 가상 머신, App Service, Functions, Container Apps, AKS 등 다수입니다.

## Step 5 · The catch — one identity per resource

[concerned] 하지만 규모가 커지면 함정이 있습니다.
[600ms]
[calm] Contoso의 백엔드는 많은 호스트(VM, App Service, Functions, Container Apps, AKS)에서 실행됩니다.
[600ms]
[serious] 시스템 할당 ID로는, 팀이 모든 리소스에서 하나씩 사용하도록 설정하고, 관리자가 각 ID에 개별적으로 액세스를 부여합니다.
[800ms]
[concerned] 머신을 더 추가하면 모든 것이 반복됩니다. 실제로는 하나의 앱인데 유지할 것이 너무 많습니다.

## Step 6 · One identity, shared — user-assigned

[confident] 그래서 대신 하나의 ID를 공유합니다. 사용자 할당입니다.
[600ms]
[calm] Contoso는 하나의 사용자 할당 관리 ID를 만들어 모든 호스트에 연결합니다. VM, App Service, Functions, Container Apps, AKS가 모두 같은 ID를 참조합니다.
[600ms]
[impressed] 관리자는 그 하나의 ID에 액세스를 한 번만 부여합니다. 다른 머신을 추가해도 같은 ID를 연결하기만 하면 됩니다. 새 부여는 없습니다.
[600ms]
[reassuring] 이것은 안정적인 개체 ID를 가진 자체 Azure 리소스이며, 어떤 단일 호스트와도 독립적으로 존재합니다.

## Step 7 · Recap — System-assigned vs User-assigned

[reflective] 하나의 비밀 없는 아이디어의 두 가지 형태를 정리해 봅시다.
[600ms]
[confident] 둘 다 워크로드가 비밀 대신 Microsoft Entra 토큰으로 인증한 다음, 최소 권한 역할을 얻게 합니다.
[600ms]
[calm] 차이는 오직 만드는 방법, 수명 주기, 그리고 공유 가능 여부뿐입니다.
[600ms]
[reassuring] 시스템 할당은 단일 리소스에 가장 간단합니다. 사용자 할당은 여러 리소스가 하나의 ID를 공유할 때 권장되는 재사용 가능한 선택입니다.
