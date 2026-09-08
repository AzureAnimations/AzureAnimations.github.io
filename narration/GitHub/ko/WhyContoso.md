# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · KO

**Source animation:** `journeys/GitHub/WhyContoso.html`

`## Step N` 제목은 의도적으로 영어로 유지합니다(음성 생성기와 자막의 색인).

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] 소프트웨어와는 아무 상관이 없는 문제에서 시작해 봅시다.
[500ms]
[calm] Contoso는 소매 기업입니다. 강한 비가 도시에 머무르면 쇼핑객은 집을 나서지 않습니다. 방문객 수가 떨어지고, 계산대의 숫자도 뒤따라 떨어집니다.
[500ms]
[thoughtful] 옅은 윤곽선은 Contoso가 기대했던 하루입니다. 채워진 막대가 실제 하루고요. 상품에도 가격에도 문제는 없었습니다. 그저 비가 왔을 뿐입니다.

## Step 2 · The Same Rain, Two Different Days

[confident] 이 프로젝트 전체가 올라선 통찰이 바로 이것입니다. 비는 신호이고, Contoso는 그 신호에 대해 둘 중 하나를 할 수 있습니다.
[500ms]
[serious] 아무것도 하지 않으면 그 방문은 사라집니다. 재고는 팔리지 않은 채 남고, 그날은 손실로 기록됩니다.
[500ms]
[bright] 아니면 움직입니다. 고객이 이미 있는 곳에서 맞이하는 것이죠. 비 오는 오후라면 그곳은 온라인입니다. 매장을 비운 바로 그 날씨가, 이제는 그 날씨가 만들어 낸 하루와 맞물립니다.

## Step 3 · Sell What the Weather Calls For

[calm] 각각의 날씨는 갑자기 살 이유가 생기는 재고와 짝을 이룹니다. 비에는 레인재킷과 우산. 폭풍에는 두꺼운 외투, 그리고 배송. 한파에는 니트.
[500ms]
[thoughtful] 오른쪽 열을 보세요. *모든 채널*이 무엇을 전면에 내세워야 하는지 알려 줍니다. 이 표현을 기억해 두세요. 두 단계 뒤에 그것이 곧 아키텍처 문제가 됩니다.

## Step 4 · Storm Day Free Shipping

[bright] 그리고 예보가 험해지면 Contoso는 한 걸음 더 나갈 수 있습니다.
[500ms]
[calm] Azure Maps가 다가오는 폭풍을 알려 줍니다. 그 하나의 사실이 Storm Day 프로모션을 켜고, 배너가 바뀌고, 알맞은 상품이 앞으로 나오고, 무료 배송이 기다릴 이유를 없앱니다.
[500ms]
[confident] 순서를 보세요. 먼저 폭풍이 자라고, 그다음에야 제안이 나타납니다. 날씨가 캠페인을 촉발한 것이죠. 아무도 예보를 보고 손으로 게시하지 않았습니다.

## Step 5 · Three Channels, Three Sets of Problems

[serious] 자, 여기가 팀들이 잘못 판단하는 지점입니다. Contoso에는 웹, 모바일 앱, 마케팅이라는 세 채널이 있고, 단순하게 생각하면 각자가 Azure Maps를 직접 호출하면 될 것 같아 보입니다.
[500ms]
[concerned] 그 대가를 보세요. 구독 키 사본이 셋. 게다가 하나는 브라우저 안에 있습니다. 키가 더 이상 비밀이 아니게 되는 곳이죠. 입력 검증도 세 가지. 같은 예보를 세 팀이 조금씩 다르게 해석합니다.
[500ms]
[thoughtful] 세 채널, 세 벌의 문제. 그리고 Contoso가 네 번째 앱을 만드는 순간 네 번째 문제 묶음이 생깁니다.

## Step 6 · One API, One Source of Truth

[confident] 그래서 Contoso는 대신 하나를 만듭니다. 단일 Node.js 서비스인 Contoso Weather API가 채널과 Azure Maps 사이에 섭니다.
[500ms]
[bright] 이 서비스가 네 가지 일을 정확히 한 번씩 합니다. 키를 서버 쪽에 둡니다. 입력을 검증합니다. 응답을 하나의 형태로 정규화합니다. 그리고 그 예보가 비즈니스에 무엇을 *의미하는지* 결정합니다.
[500ms]
[reassuring] 앞 단계와 같은 그림입니다. 채널은 바뀌지 않았습니다. 바뀐 것은 빨간 선 셋이 파란 선 하나가 되었고, 키가 사라졌다는 점입니다.

## Step 7 · What We Are Actually Building

[warm] 계획으로 들어가기 전에, 만들 물건 자체를 봅시다. 화면은 둘입니다.
[500ms]
[calm] "Weather around the world"라는 대시보드. 도시들이 나라별로 묶여 있습니다. 도시를 클릭하면 상세 화면으로 넘어가고, 마커가 찍힌 지도와 더 자세한 수치가 나옵니다.
[500ms]
[confident] 제품은 이것이 전부입니다. 로그인 없음, 데이터베이스 없음, 결제 없음. 모두 명시적으로 범위 밖입니다.
[500ms]
[reassuring] 바로 그 점이 핵심입니다. 뒤따르는 모든 것은 *이 두 화면*을 안전하게 전달하기 위해 존재합니다. 요구사항 문서는 이 단계에서 내려받을 수 있습니다.

## Step 8 · Weather In, Revenue Out

[warm] 전체 이야기를 한 줄로.
[500ms]
[calm] Azure Maps가 날씨를 알려 줍니다. Contoso의 API가 그것을 읽고 의미를 정합니다. 모든 채널이 같은 답을 받습니다. 그리고 비 오는 날이 파는 날로 바뀝니다.
[500ms]
[confident] 이것이 *왜*입니다. 여기서부터는 전부 *어떻게*에 관한 이야기입니다.
