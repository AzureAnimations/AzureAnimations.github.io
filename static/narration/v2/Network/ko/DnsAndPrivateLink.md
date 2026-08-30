# DNS & Private Link — 내레이션 (ko)

## Step 1 · A name, and who is allowed to use it

[calm] 여러분의 웹 앱에 필요한 건 스토리지 계정 하나입니다.
[400ms]
[curious] 지금은 앱이 공용 이름을 물어보고, 공용 주소를 돌려받고, 트래픽은 인터넷으로 나갔다가 다시 돌아옵니다. 같은 지역에 나란히 있는 리소스 두 개를 위해서 말이죠.
[500ms]
[confident] 이걸 해결하는 조각은 세 가지인데, 이 셋은 늘 서로 헷갈립니다. Azure DNS는 이름을 바깥 세상에 게시합니다. Private DNS는 VNet 안에서 이름에 답합니다. 그리고 Private Link는 그 리소스에, 답으로 돌려줄 사설 주소를 만들어 줍니다.

## Step 2 · Azure DNS public zones

[calm] 공용 영역은 여러분이 소유한 도메인 이름을 권한 있게 호스팅하는 것입니다.
[500ms]
[confident] 등록 기관의 네임 서버를 Azure로 가리키면, 그때부터 여러분의 도메인에 대한 전 세계의 질문에 Azure가 답하게 됩니다.
[400ms]
[helpful] 여기 있는 레코드는 보여지라고 있는 겁니다. 누구나, 어디서나 조회할 수 있고, 그게 바로 이 영역이 하는 일 전부입니다. 공용 영역은 그 어떤 의미로도 보안 경계가 아닙니다.

## Step 3 · Azure Private DNS zones

[calm] 사설 영역은 겉모습은 거의 똑같은데, 딱 하나 결정적인 차이가 있습니다.
[500ms]
[confident] 이 레코드는 인터넷에서는 확인되지 않습니다. 여러분이 명시적으로 영역에 연결한 가상 네트워크에서만 답이 돌아옵니다.
[400ms]
[helpful] 그 연결이 접근 모델의 전부입니다. 연결하지 않은 가상 네트워크는 이 영역을 아예 보지 못합니다. 부분적으로 보이는 것도, "거의 연결됨" 같은 상태도 없습니다.

## Step 4 · Private endpoint

[confident] private endpoint는 여러분의 서브넷 안에 있고, 사설 IP 주소를 가지며, 특정 PaaS 서비스 인스턴스 하나에 매핑되는 네트워크 인터페이스입니다.
[500ms]
[calm] 그리고 Azure는 그 서비스 이름을 그 주소로 연결하는 레코드를 private DNS zone에 함께 기록합니다. 그래서 이 둘은 항상 같이 배포되는 겁니다.
[400ms]
[helpful] 여기가 정말로 새로운 부분입니다. Storage나 SQL, 나머지 서비스들은 보통 공용 엔드포인트 뒤에 있습니다. private endpoint는 그중 하나를 여러분의 주소 공간 안으로 끌어들이고, 공용 액세스를 완전히 꺼 버릴 수 있게 해 줍니다.

## Step 5 · What the lookup actually does

[calm] 이름 조회 과정을 한번 따라가 보죠. 여기서 딱 이해가 됩니다.
[500ms]
[confident] 애플리케이션은 늘 쓰던 그 공용 이름을 그대로 씁니다. Azure는 그 이름을 조용히 privatelink 영역으로 돌리고, 사설 영역이 사설 IP로 답합니다.
[400ms]
[helpful] 그래서 연결 문자열을 바꿀 일이 없습니다. 애플리케이션은 똑같은 질문을 하고 있고, 달라지는 건 답뿐입니다.

## Step 6 · The link is the whole mechanism

[curious] 레코드가 완벽하게 들어 있는 사설 영역도, 가상 네트워크가 연결되기 전까지는 아무 일도 하지 않습니다.
[500ms]
[calm] 그리고 그 네트워크가 사용자 지정 DNS 서버를 쓴다면 연결만으로도 부족합니다. 전달자가 필요합니다.
[400ms]
[confident] 하나 더 기억해 둘 구분이 있습니다. 이름을 확인할 수 있다는 것과, 들어가도 된다는 것은 다릅니다. privatelink 체인은 어디서든 확인되도록 일부러 그렇게 만들어져 있습니다. 조회가 성공했다는 건 그 리소스가 존재한다는 뜻이지, 여러분이 거기에 닿을 수 있다는 뜻이 아닙니다.

## Step 7 · Same shape, opposite purpose

[calm] 공용 영역과 사설 영역. 둘 다 레코드가 들어 있는 DNS 영역입니다.
[500ms]
[confident] 정말로 중요한 건 전부, 누가 물어볼 자격이 있느냐 하는 문제입니다.
[400ms]
[helpful] 그리고 같은 도메인 이름을 둘 다로 호스팅할 수도 있습니다. 이른바 split-horizon이죠. 질문이 어디서 왔느냐에 따라 다르게 답하는 겁니다.

## Step 8 · It still resolves to a public IP

[concerned] 이제 그 전형적인 실패 이야기인데, Private Link에서 가장 흔한 문제입니다.
[500ms]
[calm] 원인은 엔드포인트 자체보다 거의 언제나 DNS이고, 네 가지 원인이면 거의 전부 설명됩니다.
[400ms]
[helpful] 증상은 아주 특징적입니다. 포털에는 private endpoint가 승인됨으로 보이는데, 앱은 여전히 공용 주소를 받습니다. 아니면, 이미 공용 액세스를 꺼 둔 서비스에서 사백삼 이 돌아옵니다.

## Step 9 · Publish, resolve, or reach

[confident] 자, 핵심입니다. 각 조각은 서로 다른 질문에 답합니다.
[400ms]
[calm] 지금 내가 어떤 질문을 하고 있는지 소리 내어 말해 보세요. 그러면 알맞은 서비스가 저절로 정해집니다.
[600ms]
[encouraging] 그리고 이 둘은 꼭 구분해 두세요. 헷갈리는 Private Link 사고는 거의 다 이 둘을 섞어서 생깁니다. DNS는 어떤 주소를 받을지를 정합니다. 서비스 방화벽은 들어갈 수 있는지를 정합니다.
