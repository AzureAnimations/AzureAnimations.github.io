# Narrator Script — Compute · Run a Container on App Service: Settings and Secrets

**Source animation:** [AppServiceContainers.html](../../../journeys/Compute/AppServiceContainers.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/tutorial-custom-container>

---

## Step 1 · From a Registry Image to a Running Web App

[calm] Contoso는 주문 API를 컨테이너 이미지 버전 1.4로 패키징해서 Azure Container Registry에 푸시했습니다.
[600ms]
[curious] 컨테이너용 웹 앱은 내장 언어 스택을 쓰지 않습니다. 대신 여러분이 만든 이미지를 그대로 실행합니다.
[600ms]
[confident] 그래서 흐름이 간단합니다. App Service가 레지스트리에서 이미지를 가져와 시작하고, 사용자에게 서비스합니다.

## Step 2 · Create a Web App for Containers

[calm] 웹 앱을 만들 때 게시 방식은 코드가 아니라 Container를 선택하고, 이 수업에서는 Linux를 고르세요.
[600ms]
[confident] 그다음 레지스트리와 이름, 태그를 지정해서 앱이 사용할 이미지를 가리키게 합니다.
[600ms]
[reassuring] 포털로 하든 명령줄로 하든 결과는 같습니다. CLI에서는 먼저 Linux 플랜을 만들고, 그다음 이미지를 가리키는 웹 앱을 만듭니다.

## Step 3 · Pull from ACR with a Managed Identity

[curious] App Service는 레지스트리에 어떻게 로그인할까요? 가장 좋은 답은, 비밀번호가 아예 필요 없다는 것입니다.
[600ms]
[confident] 앱에 시스템 할당이나 사용자 할당 ID를 부여하고, 그 ID에 레지스트리의 AcrPull 역할을 부여하세요. 그다음 레지스트리 풀에 관리 ID를 사용하는 설정을 켭니다.
[600ms]
[serious] 사용자 할당 ID를 쓸 때는 클라이언트 ID도 설정해야 합니다. 레지스트리가 토큰을 거부하면, 풀이 권한 없음 오류로 실패합니다.

## Step 4 · WEBSITES_PORT and the Container Port

[calm] App Service는 컨테이너가 포트 80에서 요청을 받는다고 가정합니다.
[600ms]
[confident] 컨테이너가 다른 포트, 예를 들어 8000번에서 받는다면, 웹사이트 포트 앱 설정으로 플랫폼에 알려 주세요.
[600ms]
[reflective] 제한 사항도 기억하세요. HTTP 요청은 포트 하나만 받을 수 있고, TLS는 App Service 프런트엔드에서 끝납니다. 그래서 컨테이너는 일반 HTTP로만 서비스하면 됩니다.

## Step 5 · App Settings Become Environment Variables

[calm] 정의한 앱 설정은 모두 컨테이너가 시작될 때 환경 변수로 전달됩니다.
[600ms]
[confident] 이름에는 문자, 숫자, 마침표, 밑줄을 쓸 수 있습니다. 코드에서 실제로 읽을 수 있는 이름으로 정하세요.
[600ms]
[serious] 부작용도 있습니다. 설정을 추가하거나 바꾸면 앱이 재시작됩니다. 설정을 수정할 때는 잠깐 재시작된다는 점을 염두에 두세요.

## Step 6 · Secrets: Key Vault References Instead of Values

[serious] 앱 설정에 비밀을 그대로 붙여 넣지 마세요.
[600ms]
[confident] 대신 Key Vault 참조를 넣으세요. 참조에는 볼트와 비밀 이름만 적고, 값은 볼트에 그대로 있습니다. 앱의 관리 ID가 Key Vault Secrets User 역할로 값을 읽어 옵니다.
[600ms]
[concerned] 실패하는 경우도 조심하세요. 참조를 확인하지 못하면 앱이 참조 텍스트를 그냥 문자열로 받습니다. 나중에 버그가 될 수 있습니다.

## Step 7 · Slot Settings: What Stays with the Slot on Swap

[curious] 배포 슬롯을 스왑하면 앱이 옮겨 가고, 대부분의 설정도 함께 따라갑니다.
[600ms]
[confident] 설정을 배포 슬롯 설정으로 표시하면 그 슬롯에 그대로 남습니다. 포털 체크박스 이름이 정확히 이것이고, CLI에서는 slot settings를 씁니다.
[600ms]
[reflective] 아예 스왑되지 않는 것도 있습니다. 사용자 지정 도메인 이름, 크기 조정 설정, 관리 ID입니다.

## Step 8 · Continuous Deployment: Webhook from ACR

[calm] 배포 센터에서 지속적 배포를 켜면, App Service가 레지스트리에 웹후크를 추가합니다.
[600ms]
[impressed] 이제 이미지를 푸시할 때마다 웹후크가 동작합니다. 앱이 재시작되면서 새 이미지를 가져오고, 새 버전이 실행됩니다.
[600ms]
[reassuring] 이 옵션을 켜지 않았다면 앱을 직접 재시작하면 됩니다. 다른 레지스트리를 쓴다면, 파이프라인에서 웹후크 URL로 요청을 보내세요.

## Step 9 · Logs and the Container Startup Check

[curious] 재시작하면 App Service는 컨테이너가 응답할 때까지 계속 핑을 보냅니다.
[600ms]
[concerned] 시간 안에 응답하지 않으면 그 시도는 실패하고, 플랫폼이 다시 시도합니다. 그동안 방문자에게는 503 오류가 보입니다.
[600ms]
[determined] 그러니 파일 시스템 옵션으로 애플리케이션 로깅을 켜고, 로그 스트림과 App Service 로그를 보면서 원인을 찾아보세요.

## Step 10 · Container on App Service at a Glance

[calm] 전체 흐름은 이렇습니다. 레지스트리 이미지가 있고, 컨테이너용 웹 앱이 있고, 서비스가 실행됩니다.
[600ms]
[confident] 앱 설정은 환경 변수가 되고, 비밀은 값을 붙여 넣는 게 아니라 Key Vault 참조로 가져옵니다.
[600ms]
[proud] 쉽게 말해 A I 200 시험 목표가 이것입니다. App Service에서 컨테이너를 실행하고, 필요한 변수와 비밀을 전달하는 것입니다.
