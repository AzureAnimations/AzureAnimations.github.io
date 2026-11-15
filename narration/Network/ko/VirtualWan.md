# Virtual WAN — 내레이션 (ko)

## Step 1 · The hub you built by hand

[calm] 직접 관리하는 허브는 스포크가 세 개일 때는 아주 잘 돌아갑니다.
[500ms]
[concerned] 그런데 스포크가 서른 개, 리전이 두 개, 지사가 마흔 곳이 되면, 피어링과 라우트 테이블과 게이트웨이를 관리하는 일만으로 하루가 다 갑니다.
[400ms]
[confident] 여기서 잘못된 건 하나도 없습니다. 허브 앤 스포크는 올바른 구조예요. 문제는 그 허브를 누가 운영하느냐입니다. Virtual WAN은 그 부분을 마이크로소프트가 대신 맡겠다는 제안입니다.

## Step 2 · Azure Virtual WAN

[confident] Azure Virtual WAN은 연결과 라우팅, 보안을 마이크로소프트가 관리하는 하나의 허브로 묶어 주는 네트워킹 서비스입니다.
[500ms]
[calm] 여러분은 거기에 붙이기만 하면 됩니다. 그 안에서 벌어지는 일은 마이크로소프트의 몫이고요.
[400ms]
[helpful] 결과로 얻는 구조는 여전히 허브 앤 스포크입니다. 달라지는 건, 허브 안의 피어링과 라우팅을 마이크로소프트가 관리한다는 점이죠. 서로 다른 리전에 있는 허브 사이의 연결까지 포함해서요.

## Step 3 · What may live in the hub

[calm] virtual hub은 마이크로소프트가 만들고 제어하는 가상 네트워크입니다.
[500ms]
[confident] 그리고 이게 이 거래의 전부입니다. 라우팅은 거저 얻고, 대신 그 안에 아무거나 넣을 수 있는 자유는 내려놓는 거죠.
[400ms]
[concerned] 여기서 많은 팀이 걸려 넘어집니다. virtual hub 안에는 VM도, 도메인 컨트롤러도, Azure Bastion도 넣을 수 없습니다. 그런 건 스포크로 갑니다. 마이크로소프트가 virtual hub 확장 패턴이라고 부르는 방식이죠.

## Step 4 · One network, two regions, every branch

[calm] Contoso는 지사 VPN과 ExpressRoute 회선, 그리고 원격 사용자를 두 리전의 허브에 연결합니다.
[500ms]
[confident] 마이크로소프트가 그 허브들을 서로 이어 주고, 그 뒤에 있는 모든 스포크는 서로에게 도달할 수 있게 됩니다.
[400ms]
[helpful] 두 허브 사이의 이 선이 바로 여러분이 절대 만들 필요가 없는 것입니다. 마이크로소프트가 만들고 유지해 주죠. 그리고 이게 두 개의 지역 허브를 하나의 글로벌 전송 네트워크로 바꿔 줍니다.

## Step 5 · Four paths you get for nothing

[confident] Virtual WAN Standard는 완전 메시입니다.
[500ms]
[calm] 두 대상이 같은 Virtual WAN에 연결되는 순간, 서로 도달할 수 있습니다. 같은 리전이든, 리전을 넘나들든 마찬가지고요.
[400ms]
[helpful] 일반 피어링과 비교해 보세요. 피어링은 전이되지 않습니다. 같은 허브에 피어링된 두 스포크는, 중간의 무언가를 가리키는 라우트 테이블이 없으면 여전히 통신할 수 없어요. Virtual WAN에서는 그 경로가 이미 존재합니다.

## Step 6 · Secured virtual hub

[confident] 허브를 secured virtual hub으로 바꾸면, Firewall Manager가 그 안에 Azure Firewall을 배포합니다.
[500ms]
[calm] 그러면 그 허브에 붙은 모든 스포크와 모든 지사가 하나의 공유 방화벽으로 검사받게 됩니다.
[400ms]
[helpful] 그리고 여기가 알아 둘 만한 부분입니다. secured virtual hub에는 라우팅이 내장되어 있습니다. 직접 만든 허브에서처럼 트래픽을 그쪽으로 강제하려고 사용자 정의 경로를 작성할 필요가 없어요.

## Step 7 · Basic buys almost nothing

[calm] Virtual WAN에는 두 가지 SKU가 있고, 그 차이는 결코 작지 않습니다.
[500ms]
[confident] Basic은 아주 좁은 한 가지 경우를 위해 존재합니다. Virtual WAN을 선택할 만한 설계라면 거의 대부분 Standard가 필요합니다.
[400ms]
[helpful] 허브를 두 개 이상 쓰고 싶거나, ExpressRoute나 지점 대 사이트가 필요하거나, 스포크 사이의 전송이 필요하다면, 그건 전부 Standard입니다. Basic은 단일 허브로 들어오는 사이트 대 사이트 VPN까지, 딱 거기까지입니다.

## Step 8 · Managed hub, or one you own

[calm] 두 선택지 모두 허브 앤 스포크를 제공합니다.
[500ms]
[confident] 선택의 기준은, 허브 안에서 얼마나 많은 제어가 필요한가와, 그중 얼마만큼을 직접 운영하고 싶은가 사이의 균형입니다.
[400ms]
[helpful] 정말로 판가름하는 질문은 규모가 아닙니다. 허브 안에 여러분 소유의 무언가를 넣어야 하느냐입니다. 그래야 한다면, 스포크가 몇 개든 Virtual WAN은 답이 아닙니다.

## Step 9 · The same shape, someone else's problem

[confident] 그럼 정리해 보죠.
[400ms]
[calm] Virtual WAN은 새로운 토폴로지를 만들어 내지 않습니다. 어차피 여러분이 만들었을 그 허브를 가져다가, 운영을 마이크로소프트에 넘기는 것뿐이죠. 전송과 리전 간 연결까지 포함해서요.
[600ms]
[encouraging] 질문 하나로 결정하세요. 허브 안에 반드시 있어야 하는 여러분만의 무언가가 있습니까? 없다면 관리형을 선택하세요. 있다면 직접 만들고 제어권을 지키세요.
