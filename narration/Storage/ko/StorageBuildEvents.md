# 내레이션 대본 — Azure Storage · 레벨업 · Storage로 만들기

**Source animation:** `static/v2/Storage/StorageBuildEvents.html`

---

## Step 1 · goal

[confident] 만들어 봅시다. 여러분은 blob — 이미지, 문서, 업로드 — 을 저장하고 제공하는 앱을 쓰고 있습니다.
[600ms]
[calm] storage에 연결하고, 읽고 쓰고, 로컬에서 개발하고, 그다음 변화가 일어나는 그 순간에 반응할 겁니다.
[700ms]
[reassuring] 그리고 가장 좋은 점 — 여러분이 쓰는 같은 SDK 코드가, 노트북에서도 프로덕션에서도, 바뀜 없이 실행됩니다.

## Step 2 · connect

[confident] Azure Storage 클라이언트 라이브러리로 시작하고, 암호 없는 방식으로 연결하세요.
[600ms]
[calm] DefaultAzureCredential은 여러분의 컴퓨터에서는 개발자 로그인을, Azure에서는 관리 ID를 집어 옵니다. 그래서 코드 안에 연결 문자열이나 키가 없습니다.
[700ms]
[reassuring] 한 번 쓰면, 양쪽에서 그대로 동작합니다.

## Step 3 · io

[confident] 이제 매일의 일 — blob 읽고 쓰기입니다. blob 클라이언트를 만들고 업로드나 다운로드를 호출합니다.
[600ms]
[calm] 호출은 비동기이므로, 데이터가 움직이는 동안에도 앱은 계속 응답합니다.
[700ms]
[encouraging] 큰 파일에는 스트리밍과 병렬 전송에 기대세요. 무거운 일은 라이브러리가 맡습니다.

## Step 4 · azurite

[confident] 만드는 데 클라우드 계정은 필요 없습니다. Azurite는 로컬 Storage 에뮬레이터입니다.
[600ms]
[calm] blob, 큐, 테이블 스토리지를 여러분의 컴퓨터에서 바로 실행하므로, 오프라인으로 개발하고 테스트할 수 있습니다. 빠르게, 그리고 무료로.
[700ms]
[reassuring] 게다가 Visual Studio Code의 Azure Tools에 함께 들어 있으니, 클릭 한 번이면 됩니다.

## Step 5 · events

[confident] 여기서 storage가 생기를 띱니다. blob이 만들어지거나 삭제되면, Storage는 이벤트를 발생시킵니다.
[600ms]
[calm] Event Grid가 그 이벤트를 처리기 — Azure Function, Logic App, webhook — 로 라우팅하므로, 여러분의 코드는 데이터가 바뀌는 순간에 반응합니다.
[700ms]
[impressed] Event Grid blob 트리거는 높은 이벤트 속도까지 확장되므로, 업로드의 홍수 아래에서도 따라잡습니다.

## Step 6 · feed

[confident] 이벤트는 지금 당장 반응하기에 좋습니다. 하지만 전체 기록이 필요하다면요?
[600ms]
[calm] 그것이 변경 피드입니다. 여러분의 blob에 대한 모든 변경을 기록한, 내구성 있고, 순서가 있으며, 읽기 전용인 로그죠.
[700ms]
[reassuring] 이렇게 생각하세요. 이벤트는 푸시, 변경 피드는 풀입니다. 하나는 실시간으로 알리고, 다른 하나는 모든 변경을 나중에 읽고, 일괄 처리하고, 다시 재생하게 해 줍니다.

## Step 7 · recap

[proud] 이것이 전체 그림입니다. 여러분의 앱은 관리 ID로 SDK를 통해 Blob Storage와 대화하고, Azurite 위에서 로컬로 개발하고, Event Grid로 변화에 반응하고, 변경 피드로 그것을 감사하거나 재생합니다.
[700ms]
[encouraging] SDK에 관리 ID, 개발에는 Azurite, 반응에는 이벤트. 그것이 깔끔하고 현대적인 스토리지 앱입니다.

## Step 8 · spec

[confident] 만드는 사람들을 위해 조금 더 깊이. Azure Storage 클라이언트 라이브러리는 모든 주요 언어를 다룹니다 — .NET, Java, Python, JavaScript, Go.
[600ms]
[calm] 그것들을 모두 DefaultAzureCredential로 인증하면, 어디서나 암호가 없습니다.
[700ms]
[reassuring] 그리고 blob에 반응하려면, 고전적인 폴링 트리거보다 Event Grid blob 트리거를 택하세요. 더 빨리 발화하고, 확장됩니다.
