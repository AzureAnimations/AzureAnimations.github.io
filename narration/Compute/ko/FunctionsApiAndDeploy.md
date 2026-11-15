# Narrator Script — Compute · Functions: Build an API and Deploy It

**Source animation:** [FunctionsApiAndDeploy.html](../../../journeys/Compute/FunctionsApiAndDeploy.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-functions/functions-triggers-bindings>
- <https://learn.microsoft.com/azure/azure-functions/functions-deployment-technologies>

---

## Step 1 · One function, one HTTP endpoint

[calm] 함수는 코드에 트리거가 정확히 하나 붙은 것입니다. 트리거는 함수가 시작되는 계기입니다.
[600ms]
[confident] HTTP 트리거를 붙이면 웹 요청이 들어올 때 코드가 실행됩니다. 그러면 함수가 API 엔드포인트가 됩니다.
[600ms]
[curious] Contoso의 주문 앱에서는 기본 주소가 API 경로 뒤에 함수 이름이 붙은 형태입니다.

## Step 2 · HTTP trigger: route, methods and auth

[calm] 트리거는 세 가지를 정합니다. 먼저 경로는 API 경로 뒤에 오는 URL이고, ID 같은 매개변수를 넣을 수 있습니다.
[600ms]
[confident] 메서드는 어떤 HTTP 동사에 응답할지 정하는데, 생략하면 모든 동사에 응답합니다. 권한 수준은 익명, 함수, 관리자 중에서 고릅니다.
[600ms]
[serious] 로컬에서 실행할 때는 권한 수준이 적용되지 않습니다. 게시하고 나면 적용됩니다.

## Step 3 · Return a status code and JSON

[calm] 이제 코드가 응답을 만듭니다. 클라이언트가 보고 대응할 수 있는 상태 코드와, 읽을 수 있는 JSON 본문입니다.
[600ms]
[confident] 성공하면 200을 반환하고, 주문을 찾지 못하면 404를 반환하세요. 클라이언트가 본문을 제대로 해석하도록 mimetype은 application JSON으로 설정합니다.
[600ms]
[reflective] 함수가 아무것도 반환하지 않으면 HTTP 기본값은 204, No Content이고 본문은 비어 있습니다.

## Step 4 · Bindings: Cosmos DB in, Service Bus out

[curious] 바인딩을 쓰면 클라이언트 코드 없이 함수를 다른 서비스와 연결할 수 있습니다. 각 단계를 클릭해서 데이터를 따라가 보세요.
[600ms]
[confident] 여기서는 입력 바인딩이 코드가 실행되기 전에 Cosmos DB 데이터를 넘겨 주고, 출력 바인딩이 결과를 Service Bus에 대신 써 줍니다.
[600ms]
[reassuring] 바인딩은 선택 사항입니다. 코드에서 Azure SDK 클라이언트를 직접 써도 됩니다. 연결 설정에는 연결 방법이 담긴 앱 설정의 이름을 적습니다.

## Step 5 · Run it locally with Core Tools

[calm] Core Tools는 내 컴퓨터에서 Functions 런타임을 실행해 줍니다.
[600ms]
[confident] 시작하면 함수가 기본적으로 포트 7071에서 응답합니다. 배포하기 전에 API를 호출해 보고 실수를 바로잡으세요.
[600ms]
[reflective] 로컬 설정 파일은 로컬 실행에만 쓰이고, 기본적으로 로컬에서는 권한 부여가 적용되지 않습니다.

## Step 6 · Create the function app

[calm] 함수 앱을 만들려면 세 가지를 정해야 합니다. 어디에서 호스팅할지, 어떤 런타임으로 코드를 실행할지, 그리고 어떤 스토리지 계정에 상태를 보관할지입니다.
[600ms]
[confident] 새 서버리스 앱에는 Flex Consumption을 권장합니다. 런타임 스택은 코드의 언어와 버전에 맞추세요.
[600ms]
[serious] 스토리지 계정은 키와 상태를 보관하기 때문에 꼭 필요합니다. 고르기 전에 Learn의 호스팅 페이지에서 지금 제공하는 플랜 목록을 확인하세요.

## Step 7 · Deploy: zip, publish and CI

[calm] 코드는 보통 zip 패키지로 올립니다. zip 배포가 함수 앱의 기본이자 권장 방식입니다.
[600ms]
[confident] 단계에 따라 방법을 고르세요. 만드는 동안에는 Core Tools나 Visual Studio Code, Azure CLI를 쓰세요.
[600ms]
[determined] 중요한 단계가 되면 배포 센터, GitHub Actions, Azure Pipelines로 CI와 CD를 구성하세요. Flex Consumption에서는 패키지 배포만 쓸 수 있습니다.

## Step 8 · App settings and managed identity

[calm] 설정은 앱에게 필요한 것이 어디에 있는지 알려 줍니다. 설정에는 계정 이름만 있고 키는 들어 있지 않습니다.
[600ms]
[confident] 관리 ID는 앱이 누구인지 증명하기 때문에 설정에 비밀을 넣어 둘 필요가 없습니다. 이 방법을 먼저 쓰고, 서비스가 지원하지 않으면 Key Vault를 쓰고, 공유 비밀은 마지막 수단으로 남겨 두세요.
[600ms]
[serious] 바인딩에 필요한 역할만 부여하세요. Cosmos DB의 데이터 접근은 자체 역할 시스템을 씁니다.

## Step 9 · Slots and safe release

[curious] 슬롯은 앱을 하나 더 복사해 둔 것으로, 자체 주소가 따로 있습니다.
[600ms]
[confident] 슬롯에 배포해서 테스트한 뒤 프로덕션과 스왑하세요. 문제가 생기면 다시 스왑하면 됩니다. 슬롯 설정은 스왑해도 그 슬롯에 그대로 남습니다.
[600ms]
[serious] 스왑은 스테이징 슬롯을 먼저 워밍업하지만, 다운타임이 없다고 보장하지는 않습니다. Flex Consumption은 지금은 슬롯을 지원하지 않고, 대신 롤링 업데이트를 씁니다.

## Step 10 · Check it: logs and a test call

[calm] curl과 함수 키로 실제 API를 호출해 보세요. 키는 code 쿼리 값으로 보내거나 함수 키 헤더에 담아 보냅니다.
[600ms]
[impressed] 그런 다음 Application Insights에서 같은 호출을 찾아보세요. 로그와 성능, 오류가 함께 보입니다. 로그를 스트리밍할 때는 Live Metrics를 권장합니다.
[600ms]
[proud] 응답이 정상이고 트레이스도 보이면 릴리스가 잘 동작하는 것입니다. 이것이 학습 목표입니다. 서버리스 API를 만들고, 함수 앱을 구성하고 배포하는 것입니다.
