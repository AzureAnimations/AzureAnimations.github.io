# Narrator Script — Network · Service Endpoints, Private Endpoints and Delegation

**Source animation:** [EndpointsAndDelegation.html](../../../journeys/Network/EndpointsAndDelegation.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoints-overview>
- <https://learn.microsoft.com/azure/virtual-network/virtual-network-service-endpoint-policies-overview>
- <https://learn.microsoft.com/azure/virtual-network/subnet-delegation-overview>
- <https://learn.microsoft.com/azure/virtual-network/vnet-integration-for-azure-services>

---

## Step 1 · PaaS answers on a public address

[calm] Contoso에는 vnet-app에 VM이 하나 있는데, Storage와 SQL, Key Vault가 필요합니다.
[600ms]
[curious] 이 서비스들은 공용 엔드포인트로 응답합니다. VM도 이걸 쓸 수 있지만, 규칙을 추가하기 전에는 다른 네트워크도 똑같이 쓸 수 있습니다.
[600ms]
[serious] 여기 나오는 주소는 실제 주소가 아니라 문서용 범위입니다. 핵심은, 기본값이 공개라는 건 따로 막기 전까지 열려 있다는 뜻이라는 점입니다.

## Step 2 · Three doors to the same service

[curious] 같은 서비스에 접근하는 방법은 세 가지입니다. 공용 주소를 그대로 두고 필터링하거나, 서브넷에 그 서비스로 가는 지름길을 만들어 주거나, 서비스 앞에 프라이빗 IP를 두는 방법입니다.
[600ms]
[confident] 각각 해결하는 문제가 달라서, 어느 한쪽이 무조건 낫다고 할 수는 없습니다.
[600ms]
[calm] 서브넷 위임은 별개의 작업입니다. 서비스가 내 서브넷 안에서 동작하게 해 주는 기능인데, 이건 뒤에서 다루겠습니다.

## Step 3 · Service endpoint: switch it on for a subnet

[calm] 서비스 엔드포인트는 서브넷 단위로 켭니다. 그러면 그 서브넷의 트래픽이 Azure 백본을 타고 서비스로 갑니다.
[600ms]
[impressed] 이제 서비스는 서브넷의 프라이빗 주소를 볼 수 있어서, VNet 규칙으로 바로 그 서브넷만 허용할 수 있습니다.
[600ms]
[serious] 서비스의 공용 IP와 공용 DNS 이름은 그대로입니다. 그리고 엔드포인트를 켜거나 제거하면, 그 서브넷에서 열려 있던 연결이 잠깐 초기화됩니다.

## Step 4 · A service endpoint stops at the subnet

[calm] 서비스 엔드포인트는 서브넷에서 시작된 트래픽에만 효과가 있습니다.
[600ms]
[concerned] 온프레미스에서 오는 트래픽은 공용 NAT 주소로 들어오기 때문에, 엔드포인트가 알아보지 못합니다. 이 경우에는 IP 규칙이나 프라이빗 엔드포인트가 필요합니다.
[600ms]
[reassuring] ExpressRoute Microsoft 피어링을 쓴다면, 사용하는 NAT 주소를 리소스의 IP 방화벽에서 허용하세요.

## Step 5 · Endpoint policies narrow it to your accounts

[curious] 서비스 엔드포인트로는 다른 고객의 계정까지 포함해 서비스 전체에 닿습니다. 대부분 생각하는 것보다 범위가 넓습니다.
[600ms]
[confident] 서비스 엔드포인트 정책을 쓰면 서브넷이 접근할 수 있는 Storage 계정만 나열하고, 나머지는 거부합니다.
[600ms]
[serious] 허용 목록이므로, 앱이 의존하는 계정을 빠짐없이 넣으세요. Azure Storage에만 적용되고, 클래식 계정에는 적용되지 않습니다.

## Step 6 · Private endpoint: a private IP for one resource

[calm] 프라이빗 엔드포인트는 프라이빗 IP가 있는 네트워크 인터페이스를 서브넷에 만들고, 이름으로 지정한 리소스 하나에 연결합니다.
[600ms]
[confident] 트래픽은 Private Link가 실어 나릅니다. 다만 DNS가 그 프라이빗 IP를 돌려줘야 합니다. 그러지 않으면 클라이언트는 계속 공용 주소로 갑니다.
[600ms]
[reassuring] 여기서는 간단히 정리만 합니다. 프라이빗 DNS 영역과 VNet 링크는 DNS와 Private Link 레슨에서 자세히 다룹니다.

## Step 7 · Service endpoint or private endpoint?

[curious] 두 가지를 나란히 놓고 보면, 선택을 가르는 차이가 눈에 들어옵니다.
[600ms]
[calm] 둘 다 Azure 간 트래픽을 Azure 백본 안에 유지합니다.
[600ms]
[confident] Microsoft는 가능하면 Private Link를 권장합니다. 추가 비용 없이 간단하게 가고 싶다면 서비스 엔드포인트도 여전히 쓸 만합니다.

## Step 8 · Which door should the VNet use?

[curious] 내 상황과 가장 가까운 요구를 고르면, 그에 맞는 문이 그림과 함께 나타나고, 선택을 결정짓는 질문도 같이 보입니다.
[600ms]
[calm] 온프레미스에서 접근해야 하나요? 계정은 하나뿐인가요? 프라이빗 주소가 필요한가요?
[600ms]
[reflective] 실제 설계에서는 함께 쓰는 경우가 많습니다. 운영 데이터에는 프라이빗 엔드포인트를, 위험이 낮은 개발 서브넷에는 서비스 엔드포인트를 쓰는 식입니다.

## Step 9 · Subnet delegation: let a service live in your subnet

[calm] 엔드포인트는 내 VNet이 서비스에 닿게 해 줍니다. 위임은 반대 방향이어서, 서비스가 내 서브넷 안에 자리를 잡게 합니다.
[600ms]
[confident] 서브넷을 지정해 주면, 서비스가 그 안에 필요한 리소스를 직접 만듭니다.
[600ms]
[serious] 규칙은 서비스마다 다릅니다. 전용 서브넷이 필요한 서비스도 있고, 최소 크기를 정해 둔 서비스도 있으니, 주소 공간을 계획하기 전에 해당 서비스 문서를 확인하세요.

## Step 10 · Three ways this goes wrong

[concerned] '분명히 되어야 하는데 안 된다'는 문의는 대부분 세 가지 원인 중 하나입니다.
[600ms]
[curious] 서브넷, 규칙 유형, DNS 응답을 확인하세요. 트래픽이 맞는 서브넷에서 나오고 있나요? IP 규칙이 필요한 자리에 VNet 규칙을 쓰지 않았나요? 이름이 프라이빗 주소로 해석되나요?
[600ms]
[serious] 서비스 엔드포인트를 켜거나 끄면 그 서브넷의 열린 TCP 연결이 끊기므로, 중요한 작업 시간은 피해서 하세요.

## Step 11 · Reaching PaaS privately, at a glance

[calm] 전체 그림입니다. 필요에 따라 서비스 엔드포인트, 서비스 엔드포인트 정책, 프라이빗 엔드포인트 중에서 고릅니다.
[600ms]
[confident] 그리고 서비스가 내 서브넷 안에서 동작해야 한다면 위임을 더하면 됩니다.
[600ms]
[reassuring] 다음 레슨, DNS와 Private Link에서는 프라이빗 엔드포인트의 나머지 절반인 DNS를 살펴봅니다.
