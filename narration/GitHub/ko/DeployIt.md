# Narrator Script — GitHub · Contoso Delivery · Ship It to Azure · KO

**Source animation:** `journeys/GitHub/DeployIt.html`

`## Step N` 제목은 의도적으로 영어로 유지합니다(음성 생성기와 자막의 색인).

---

## Step 1 · One Pipeline, Two Halves

[confident] 두 글자, 그리고 또 두 글자. 한 호흡에 "씨아이 씨디"라고 말하지만, 답하는 질문은 서로 다릅니다.
[500ms]
[calm] 지속적 통합이 묻는 것은 *이 변경이 괜찮은가*입니다. 풀 리퀘스트가 `ci.yml`을 촉발하고, 백엔드 테스트, 프런트엔드 테스트, CodeQL 검사가 실행됩니다.
[500ms]
[serious] 그리고 모든 것이 질문 하나에 달립니다. 전부 초록인가. 아니라면 병합은 차단됩니다. 자제하라고 권하는 게 아니라, 차단됩니다.
[500ms]
[bright] 초록이고 변경이 main 위에 있다면 `cd.yml`이 이어받습니다. 이미지를 빌드하고, GHCR로 푸시하고, 배포하고, 연기 테스트를 합니다. Azure에서 가동입니다.
[500ms]
[reassuring] 도구 둘이 아니라 파이프라인 하나입니다. 앞 절반이 좋다고 말하기 전까지 뒤 절반은 결코 시작되지 않습니다.

## Step 2 · Build It Once, Ship the Small Half

[confident] 배포 절반의 첫 잡. 코드를 실행할 수 있는 무언가로 바꾸는 일입니다.
[500ms]
[calm] 멀티 스테이지 Dockerfile입니다. 1단계는 전체 Node 이미지에서 시작해 개발용까지 포함한 모든 의존성을 설치하고 빌드합니다. 2단계는 가벼운 이미지에서 새로 시작해 빌드 결과물만 복사해 옵니다.
[500ms]
[thoughtful] 두 단계, 이유도 둘. 실제로 실행되는 이미지는 훨씬 작고, 공격자가 쓸 컴파일러를 하나도 담고 있지 않습니다. 그것을 만들어 낸 커밋의 태그를 달고 GHCR로 갑니다.

## Step 3 · GitHub Is Not Inside Azure

[serious] 이제 사람들이 걸려 넘어지는 부분입니다. 러너는 GitHub 네트워크에 있는 기계입니다. Azure는 그것을 만난 적이 없습니다.
[500ms]
[thoughtful] 아마 직감은 *관리 ID*일 겁니다. 하지만 관리 ID는 Azure 안에서 실행되는 무언가에 붙습니다. GitHub 러너는 그렇지 않습니다.
[500ms]
[bright] 그러니 둘 중 하나입니다. 클라이언트 비밀을 GitHub에 붙여 넣고 최악의 순간에 만료되는 것을 지켜보거나, 워크플로에 서비스 주체를 주고 GitHub 자신의 토큰을 Azure가 신뢰하게 하거나.

## Step 4 · Give the Workflow an Identity

[confident] 그럼 서비스 주체란 *무엇*일까요. 세 가지가 순서대로입니다.
[500ms]
[calm] Microsoft Entra ID의 앱 등록, 이것이 설계도입니다. 서비스 주체 자체, 이것이 여러분 테넌트 안에서의 그 애플리케이션의 ID이고, Azure가 판단을 내리는 대상입니다. 그리고 RBAC 역할. Contributor를 구독이 아니라 리소스 그룹 하나로 좁혀서요.
[500ms]
[thoughtful] 정의, ID, 권한. 이 셋을 분리해서 보면 이 모델은 더 이상 신비롭지 않습니다.

## Step 5 · Deploy Without a Password

[confident] 신뢰가 작동하는 방식은 이렇습니다.
[500ms]
[calm] 그 서비스 주체에 페더레이션 자격 증명을 추가하고, 저장소 하나와 브랜치 하나를 지정합니다. 배포 시점에 GitHub는 바로 그 실행을 식별하는 단명 OIDC 토큰을 요청하고, Entra ID가 그것을 검증한 뒤 Azure 액세스 토큰을 돌려줍니다.
[500ms]
[serious] 클라이언트 ID, 테넌트 ID, 구독 ID는 여전히 저장합니다. 그중 어느 것도 비밀이 아닙니다. 더 이상 저장하지 않는 것은 유출될 수 있는 비밀번호, 그리고 새벽 세 시에 만료되는 비밀번호입니다.
[500ms]
[calm] 걸려 넘어지기 쉬운 세부 하나. 잡에 id-token write 권한이 필요합니다. 없으면 GitHub는 토큰을 발급하지 않습니다.

## Step 6 · The Job That Actually Releases It

[confident] 그럼 배포 워크플로를 봅시다.
[500ms]
[calm] main으로의 푸시에서 실행됩니다. 브랜치 보호가 있으니 그것은 곧 병합된 풀 리퀘스트를 뜻하죠. id-token write를 요청하고, production 환경을 대상으로 합니다. 이 환경은 사람의 승인을 요구할 수 있습니다. 그리고 Azure Login 액션으로 로그인합니다.
[500ms]
[thoughtful] 그리고 *하지 않는* 일에 주목하세요. 결코 다시 빌드하지 않습니다. 테스트가 이미 통과시킨 바로 그 이미지를 배포합니다. 다시 빌드하면 증명한 것과 다른 산출물이 되어 버립니다.

## Step 7 · From a Rainy Afternoon to Running Code

[warm] 자, 맨 처음으로 돌아가 봅시다.
[500ms]
[calm] 비가 Contoso의 매출을 조용히 갉아먹고 있었습니다. 그것이 비즈니스 사례가 되고, 네 개의 에픽이 되고, 보드 위의 서브태스크가 되고, 브랜치가 되고, 풀 리퀘스트가 되었습니다. 테스트와 검사로 증명되고, 작은 이미지로 포장되고, 저장된 비밀번호가 하나도 없는 서비스 주체가 배포했습니다.
[500ms]
[reassuring] 이 단계들 중 특별한 것은 하나도 없습니다. 이것을 작동하게 만드는 것은, 그 모두가 매번, 누군가 기억해서 요청하지 않아도 실행된다는 점입니다.
