# Narrator Script — Network · DNS Private Resolver and Hybrid DNS

**Source animation:** [DnsPrivateResolver.html](../../../journeys/Network/DnsPrivateResolver.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/dns/dns-private-resolver-overview>
- <https://learn.microsoft.com/azure/dns/private-resolver-endpoints-rulesets>
- <https://learn.microsoft.com/azure/dns/private-resolver-hybrid-dns>
- <https://learn.microsoft.com/azure/dns/private-resolver-architecture>

---

## Step 1 · The network works. The names don't.

[calm] Contoso의 데이터 센터는 VPN이나 ExpressRoute로 Azure에 연결되어 있고, 연결은 정상입니다.
[600ms]
[concerned] 그런데 양쪽이 각자 DNS를 운영합니다. 온프레미스에서는 Azure의 프라이빗 이름이 보이지 않고, Azure에서는 corp dot contoso dot local이 보이지 않습니다.
[600ms]
[curious] 연결은 패킷을 실어 나르지만, 질문을 실어 나르는 것은 따로 있어야 합니다.

## Step 2 · The old answer: DNS servers you run

[calm] 예전 해법은 Azure에 DNS 포워더 가상 머신을 두는 것이었습니다. 온프레미스는 Azure 이름에 대한 질의를 그 머신으로 전달합니다.
[600ms]
[curious] 그다음 가상 네트워크의 사용자 지정 DNS가 그 머신을 가리키게 하면, 간극이 메워집니다.
[600ms]
[serious] 동작은 하지만, 이제 서버를 직접 운영해야 합니다. 패치, 가용성, 라이선스를 챙겨야 하고, DNS를 바꿀 때마다 수동으로 변경해야 합니다.

## Step 3 · Swap the servers for a service

[calm] Azure DNS Private Resolver는 완전 관리형이면서 고가용성을 제공하는 서비스입니다.
[600ms]
[confident] 배포하고, 패치하고, 확장할 DNS 머신이 없고, VM의 DNS 클라이언트 설정도 바꿀 필요가 없습니다.
[600ms]
[reassuring] 필요한 것은 가상 네트워크와, ExpressRoute 또는 VPN입니다. 나머지는 모두 엔드포인트와 규칙으로 구성합니다.

## Step 4 · Inbound endpoint: the door into Azure

[calm] 인바운드 엔드포인트는 가상 네트워크 안의 프라이빗 IP 주소이며, 전용 서브넷에 있습니다.
[600ms]
[confident] 온프레미스 DNS가 Azure 프라이빗 이름을 이 주소로 전달하면, Azure DNS가 그 네트워크에 연결된 프라이빗 영역에서 답합니다.
[600ms]
[curious] 온프레미스에서는 이 영역에 대한 조건부 전달자를 만들어 이 주소를 가리키게 합니다.

## Step 5 · Outbound endpoint: the door out of Azure

[calm] 아웃바운드 엔드포인트는 Azure에서 온프레미스, 다른 클라우드, 또는 외부 DNS 서버로 질의를 보냅니다.
[600ms]
[curious] 전용 서브넷은 따로 있지만, 자체 IP 주소는 없습니다. 의도된 설계입니다.
[600ms]
[confident] 다만 질의를 어디로 보낼지는 이 엔드포인트가 정하지 않습니다. 그건 포워딩 규칙 집합이 하는 일입니다.

## Step 6 · Forwarding rulesets: which domain goes where

[calm] DNS 포워딩 규칙 집합은 규칙의 목록입니다. 각 규칙은 이 도메인에 대해서는 이 DNS 서버에 물어보라고 알려 줍니다.
[600ms]
[confident] 예를 들어 corp dot contoso dot local은 온프레미스 DNS 서버의 53번 포트로 갑니다.
[600ms]
[serious] 이름이 여러 규칙과 일치하면, 가장 긴 접미사가 우선합니다. 규칙 집합은 아웃바운드 엔드포인트에 연결되고, 엔드포인트가 질의를 내보냅니다.

## Step 7 · Ruleset links: put the rules to work

[calm] 규칙 집합을 가상 네트워크에 연결하면, 그 네트워크의 VM이 규칙을 사용합니다. DNS 설정은 바꾸지 않아도 됩니다.
[600ms]
[curious] 인바운드 엔드포인트를 가리키는 규칙이 있으면, 스포크가 허브에 있는 프라이빗 영역도 확인할 수 있습니다.
[600ms]
[reassuring] 연결된 네트워크가 리졸버의 네트워크와 피어링되어 있어야 하는 것은 아니지만, 허브 앤 스포크에서는 보통 피어링되어 있습니다.

## Step 8 · Where the resolver sits in hub-and-spoke

[calm] 리졸버는 허브에 두세요. 그러면 스포크가 두 가지 방법 중 하나로 리졸버에 접근할 수 있습니다.
[600ms]
[confident] 분산형은 각 스포크가 Azure 제공 DNS를 그대로 쓰고 규칙 집합 링크를 사용합니다. 중앙 집중형은 각 스포크의 사용자 지정 DNS를 인바운드 엔드포인트로 설정합니다.
[600ms]
[serious] 두 설계 모두 허브 네트워크가 프라이빗 영역에 연결되어 있어야 합니다.

## Step 9 · Private endpoints across the tunnel

[calm] 온프레미스 클라이언트는 프라이빗 엔드포인트에 contosodata dot blob dot core dot windows dot net 같은 일반 이름으로 접근합니다.
[600ms]
[serious] 전달할 대상은 privatelink 버전이 아니라, 퍼블릭 영역 이름인 blob dot core dot windows dot net입니다.
[600ms]
[impressed] Azure가 privatelink 이름으로 CNAME을 추가하고, 허브의 프라이빗 영역이 엔드포인트의 프라이빗 IP로 답합니다.

## Step 10 · Trace a query through the resolver

[excited] 질의를 하나 골라서 어디로 가는지 지켜보세요. 그다음 번호가 붙은 홉을 아무거나 선택하면 그곳에서 무슨 일이 일어나는지 볼 수 있습니다.
[600ms]
[calm] Azure VM 이름은 Azure DNS와 규칙 집합 링크를 거칩니다. 온프레미스 이름은 인바운드 엔드포인트로 들어옵니다.
[600ms]
[impressed] 그리고 리졸버는 직접 만들지 않아도 되는 부분입니다.

## Step 11 · Resolver, private zones, Firewall DNS proxy

[calm] 이 세 가지는 비슷하게 들리고 서로 겹치기도 하지만, 각자 하는 일이 다릅니다.
[600ms]
[curious] 프라이빗 영역은 레코드를 보관합니다. 리졸버는 네트워크 사이에서 양방향으로 질의를 전달합니다. 방화벽 DNS 프록시는 필터링과 전달을 맡습니다.
[600ms]
[confident] 함께 쓰면 효과적이고, 방화벽은 규칙에서 도메인 이름으로 필터링을 더해 줍니다.

## Step 12 · Hybrid DNS, nothing to patch

[calm] 관리형 리졸버가 DNS 가상 머신을 대체합니다.
[600ms]
[confident] 인바운드 엔드포인트는 온프레미스 질의에 답합니다. 아웃바운드 엔드포인트와 규칙 집합은 Azure 질의를 처리하고, 링크가 그 규칙을 내 네트워크에 적용합니다.
[600ms]
[proud] 시험에서는 어떤 엔드포인트가 어느 방향을 담당하는지, 허브 앤 스포크에서 리졸버가 어디에 있는지 알아 두세요.
