# Network monitoring — 내레이션 (ko)

## Step 1 · "It cannot connect"

[calm] 어떤 VM이 데이터베이스에 닿지 못합니다.
[400ms]
[curious] 오류가 난 것도 아니고, 눈에 띄게 내려간 것도 없습니다. 그런데 이걸 막고 있을 만한 것이 네 가지나 됩니다. 어림짐작으로 가면 대가가 큽니다.
[500ms]
[confident] 그러니 지금 실제로 던지고 있는 질문을 기준으로 도구를 나누세요. Network Watcher는 "이 연결이 왜 지금 실패하고 있는가"에 답합니다. Azure Monitor는 "내 네트워크가 그동안 무엇을 해왔는가"에 답합니다.

## Step 2 · Network Watcher

[confident] Network Watcher는 실제로 운영 중인 네트워크를 들여다보는 지역 단위 플랫폼 서비스입니다.
[500ms]
[calm] 가상 네트워크를 만든 모든 지역에서 자동으로 사용 설정됩니다. 쓰기 전에 따로 배포할 것은 없습니다.
[400ms]
[helpful] 진짜 가치는, 여러분이 배포했다고 믿는 내용이 아니라 실제로 적용된 유효한 구성을 읽어 준다는 점입니다. 의도와 현실 사이의 그 간극에 대부분의 네트워크 장애가 숨어 있습니다.

## Step 3 · Three tools, in this order

[calm] 여기서 마이크로소프트는 특정한 순서를 권장하는데, 따를 만한 가치가 있습니다.
[500ms]
[confident] 각 단계는 다음 단계보다 비용이 적게 들고, 대부분의 문제는 끝까지 가기 전에 해결됩니다.
[400ms]
[helpful] IP flow verify부터 시작하세요. 허용인지 거부인지만 말해 주는 게 아니라, 원인이 된 규칙의 이름까지 알려 주기 때문입니다. 그 한 번의 답으로 대부분의 조사는 시작하기도 전에 끝납니다.

## Step 4 · Virtual network flow logs

[confident] 흐름 로그는 모든 흐름마다 메타데이터를 한 줄씩 기록합니다. 원본, 대상, 포트, 프로토콜, 그리고 허용되었는지 거부되었는지까지요.
[500ms]
[calm] 바로 그 기록이 있어야 지난주 화요일에 대한 질문에 답할 수 있습니다.
[400ms]
[concerned] NSG flow logs가 아니라 VNet flow logs를 쓰세요. NSG flow logs는 사용 중단 절차에 들어갔습니다. 이천이십오년 유월 삼십일 이후에는 새로 만들 수 없고, 기존 항목은 이천이십칠년 구월 삼십일까지 마이그레이션해야 합니다.

## Step 5 · Traffic Analytics

[calm] 흐름 로그는 그 자체로는 수백만 줄의 데이터일 뿐입니다.
[500ms]
[confident] Traffic Analytics는 그것을 실제로 읽을 수 있는 형태로 집계해 줍니다. 트래픽이 많은 대상, 열려 있는 포트, 지역 간 트래픽, 그리고 흐름이 거부되고 있는 지점까지요.
[400ms]
[helpful] 여기에는 Log Analytics 작업 영역이 필요합니다. Azure Monitor가 쓰는 바로 그 작업 영역이고, 네트워크 데이터가 나머지 원격 분석과 합쳐져 KQL로 조회할 수 있게 되는 지점이 바로 여기입니다.

## Step 6 · Connection Monitor

[calm] 지금까지 살펴본 것은 모두 사후에 보는 것이거나, 필요할 때 실행하는 것입니다.
[500ms]
[confident] Connection Monitor는 정해진 일정에 따라 경로를 계속 검사합니다. 그래서 누군가 알아채지 않아도 경로가 끊겼다는 사실을 알 수 있습니다.
[400ms]
[helpful] 이것이 "누가 신고했다"를 "알림을 받았다"로 바꿔 줍니다. SLA가 걸린 경로, 예를 들어 하이브리드 링크나 내가 소유하지 않은 종속성에 딱 맞는 도구입니다.

## Step 7 · Azure Monitor Network Insights

[confident] Network Insights는 이 모든 것을 한곳에 모아 주는 Azure Monitor의 화면입니다.
[500ms]
[calm] 실시간 토폴로지, 모든 네트워크 리소스의 상태와 메트릭, 그리고 진단 도구로 바로 이어지는 링크까지 있습니다.
[400ms]
[helpful] 토폴로지와 상태, 메트릭은 아무 설정 없이도 나타납니다. 반면 연결과 트래픽 탭은 Connection Monitor와 흐름 로그를 켜기 전까지 비어 있습니다. 그러니 패널이 비어 있다면 보통은 "보고할 것이 없다"가 아니라 "사용 설정되지 않았다"는 뜻입니다.

## Step 8 · Which one answers your question

[calm] 이 둘은 포털에서 겹쳐 보이고, 바로 그 때문에 혼동됩니다.
[500ms]
[confident] 깔끔하게 구분하는 방법은, 여러분이 어떤 질문을 들고 왔는지를 기준으로 나누는 것입니다.
[400ms]
[helpful] 그리고 서로 경쟁하는 제품도 아닙니다. Azure Monitor가 보여 주는 내용의 상당 부분은 Network Watcher가 만들어 냅니다. 흐름 로그와 Connection Monitor는 Network Watcher의 기능이고, 그 데이터는 Log Analytics 작업 영역에 쌓입니다.

## Step 9 · Diagnose now, or watch always

[confident] 그래서, 기억할 핵심입니다.
[400ms]
[calm] 한쪽 도구들은 지금 이 순간 무엇이 왜 망가졌는지를 알려 줍니다. 다른 쪽은 그동안 무슨 일이 있었는지를 알려 주고, 다음번에는 미리 경고해 줍니다. 둘 다 필요하지만, 켜는 시점은 다릅니다.
[600ms]
[encouraging] 그리고 필요해지기 전에 해 둘 일이 하나 있습니다. 지금 바로 VNet flow logs와 Traffic Analytics를 켜세요. 여기 나온 다른 도구들은 필요할 때 실행하면 됩니다. 이 둘만은 켠 다음에 발생한 트래픽만 알고 있습니다.
