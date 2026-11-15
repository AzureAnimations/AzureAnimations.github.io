# Narrator Script — Compute · Hybrid and Specialised Compute: Arc, VMware, Azure Local, Service Fabric

**Source animation:** [HybridAndSpecialised.html](../../../journeys/Compute/HybridAndSpecialised.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-arc/overview>
- <https://learn.microsoft.com/azure/azure-vmware/introduction>
- <https://learn.microsoft.com/azure/azure-local/overview>
- <https://learn.microsoft.com/azure/service-fabric/service-fabric-overview>

---

## Step 1 · Some workloads can’t move to a region

[calm] Contoso는 Azure를 쓰고 싶지만, 워크로드 네 개는 표준 Azure 리전에 올릴 수 없습니다.
[600ms]
[curious] 워크로드마다 그 자리에 남아 있어야 하는 이유가 다르고, 해법도 각각 다릅니다.
[600ms]
[confident] 그래서 이 페이지에서 던질 질문은 단순합니다. 어디에서 실행되고, 무엇을 골라야 할까요?

## Step 2 · A spectrum: from in Azure to your own hardware

[calm] 선 하나를 그려 보세요. 왼쪽에는 Azure 자체 하드웨어가 있고, 오른쪽에는 여러분의 하드웨어가 있습니다.
[600ms]
[curious] 옵션마다 놓이는 지점이 다릅니다. Azure VMware Solution은 Azure 데이터센터에서 실행되고, Azure Local은 여러분 사이트에 둔 파트너 하드웨어에서 실행됩니다.
[600ms]
[confident] Arc는 오른쪽에서 손을 뻗어 서버가 어디 있든 관리하고, Service Fabric은 장소가 아니라 플랫폼입니다.

## Step 3 · Azure Arc: projected into Azure, not moved

[calm] Azure Arc는 아무것도 옮기지 않습니다. Azure 밖에 있는 리소스마다 Azure Resource Manager에 쌍둥이 리소스를 하나씩 만들어 줍니다.
[600ms]
[curious] 서버와 Kubernetes 클러스터, SQL은 원래 있던 자리에 그대로 있지만, 이제 각각이 Azure에 자기 리소스로 나타납니다.
[600ms]
[reassuring] 서버에는 Connected Machine 에이전트를 설치합니다. 그러면 이 머신을 Azure 네이티브 리소스와 같은 리소스 그룹에 둘 수 있습니다.

## Step 4 · What Arc gives you: Azure’s tools, on your servers

[confident] 서버가 Azure 리소스가 되면 Azure 도구를 쓸 수 있습니다. 인벤토리, Policy, Defender for Cloud, Azure Monitor, Update Manager입니다.
[600ms]
[intrigued] Policy는 머신 내부 설정까지 감사할 수 있고, Defender for Cloud는 위협이 없는지 지켜볼 수 있습니다.
[600ms]
[reassuring] 서버용 Arc 컨트롤 플레인 기능은 추가 비용이 없습니다. 그 위에서 쓰는 서비스는 각각의 요금이 따로 청구됩니다.

## Step 5 · Azure VMware Solution: VMware, running in Azure

[calm] Azure VMware Solution은 Azure에 있는 전용 베어 메탈 호스트로 구성한 프라이빗 클라우드이고, VMware 스택이 실행됩니다.
[600ms]
[curious] 프라이빗 클라우드에는 항상 vCenter Server, vSAN, vSphere, NSX가 들어 있습니다. 그래서 VMware 팀은 익숙한 도구를 그대로 쓸 수 있습니다.
[600ms]
[confident] Azure 가상 네트워크와 연결되고, ExpressRoute를 통해 온프레미스 네트워크와도 연결됩니다.

## Step 6 · Move VMs with VMware HCX

[calm] VM을 옮길 때는 VMware HCX를 씁니다. 온프레미스 vSphere를 프라이빗 클라우드와 연결해 줍니다.
[600ms]
[impressed] VM은 VM 그대로 옮겨집니다. 예를 들어 라이브 vMotion이나 콜드 마이그레이션을 쓰기 때문에, 이전하면서 플랫폼을 바꿀 필요가 없습니다.
[600ms]
[reassuring] 온프레미스에 커넥터를 배포하고 클라우드와 페어링하면 됩니다. HCX로 양쪽에 걸쳐 네트워크를 확장할 수도 있습니다.

## Step 7 · Who manages what in Azure VMware Solution

[calm] 책임은 나누어져 있습니다. Microsoft가 데이터센터와 호스트, 그리고 VMware 소프트웨어의 수명 주기를 운영합니다.
[600ms]
[serious] 즉 Microsoft가 ESXi, vCenter, NSX, vSAN을 배포하고 패치하고 업그레이드하며, 고장 난 호스트도 교체합니다.
[600ms]
[confident] 그 위의 모든 것은 여러분이 운영합니다. NSX 네트워킹과 보안, VM, 게스트 운영 체제와 앱, 그리고 HCX 마이그레이션입니다.

## Step 8 · Azure Local: Azure on your own hardware

[calm] Azure Local은 여러분의 사이트로 Azure를 가져옵니다. 이전 이름은 Azure Stack HCI였습니다.
[600ms]
[curious] 그 자리에서는 파트너 하드웨어가 돌아가고, Azure Arc가 이것을 Azure와 연결하는 컨트롤 플레인 역할을 합니다.
[600ms]
[confident] Azure 포털과 CLI, ARM 템플릿을 사용하고, Policy와 Defender for Cloud, Azure Monitor도 추가할 수 있습니다. 연결된 배포와 연결이 끊긴 배포를 모두 지원합니다.

## Step 9 · What runs on Azure Local, and why there

[calm] 현장에서 가상 머신을 실행할 수 있고, Arc로 사용하도록 설정한 AKS로 Kubernetes도, Azure Virtual Desktop도 실행할 수 있습니다.
[600ms]
[curious] 로컬을 택하는 이유는 네 가지입니다. 낮은 지연 시간, 연결이 끊겨도 계속 실행, 데이터를 가까이에 보관, 그리고 현장에서 처리하는 AI입니다.
[600ms]
[confident] 공장 생산 라인이나 제조 실행 시스템, 또는 엄격한 주권과 규제 요건을 떠올려 보세요.

## Step 10 · Service Fabric: the state lives with the code

[calm] Service Fabric에서 핵심 차이는 상태를 어디에 두느냐입니다. 스테이트리스 서비스는 상태를 외부 저장소에 둡니다.
[600ms]
[curious] 스테이트풀 서비스는 상태를 서비스 안에 두고, 플랫폼이 노드 사이에 복제합니다. 주 복제본이 하나, 보조 복제본이 여러 개 있습니다.
[600ms]
[reassuring] 쓰기는 주 복제본으로 가고, 거기서 복사됩니다. 주 복제본에 장애가 나면 보조 복제본 하나가 주 복제본으로 승격되고, 새 보조 복제본이 만들어집니다.

## Step 11 · Clusters, managed clusters and rolling upgrades

[calm] Service Fabric 클러스터는 노드의 집합이고, Azure나 온프레미스, 다른 클라우드에 만들 수 있습니다.
[600ms]
[curious] 관리형 클러스터에서는 리소스 하나 뒤에서 Azure가 스케일 집합과 부하 분산 장치, 공용 IP, 스토리지, 네트워크를 알아서 처리합니다. 기존 클러스터에서 옮겨 오는 방법은 없으니, 새 클러스터를 만들어야 합니다.
[600ms]
[confident] 롤링 업그레이드는 한 번에 도메인 하나씩 업데이트하기 때문에 앱이 계속 실행됩니다.

## Step 12 · Service Fabric next to AKS and Container Apps

[calm] Service Fabric, AKS, Container Apps는 모두 마이크로서비스를 실행합니다.
[600ms]
[curious] 차이는 상태를 어떻게 유지하는지, 무엇으로 개발하는지, 클러스터를 어디에 둘 수 있는지입니다.
[600ms]
[serious] Service Fabric은 상태 관리가 기본으로 들어 있고 자체 프로그래밍 모델이 있는 반면, AKS는 Kubernetes API를 씁니다. 새로 설계할 때는 각 서비스의 최신 안내를 확인하세요.

## Step 13 · Which one fits your constraint?

[curious] 이제 직접 해 볼 차례입니다. 지금 막혀 있는 제약 조건을 고르면, 그에 맞는 옵션에 불이 들어옵니다.
[600ms]
[confident] 이것이 시험에서 필요한 기술입니다. 요구 사항을 읽고, 진짜 제약 조건을 찾아내서, 그에 맞는 플랫폼과 연결하는 것입니다.
[600ms]
[encouraging] 탭마다 위쪽에 제약 조건이 있고, 그 아래에 옵션이 있습니다. 네 가지를 모두 해 보세요.

## Step 14 · Where it runs: four answers and four traps

[calm] 정리해 보겠습니다. 제품 이름이 아니라 제약 조건을 보고 플랫폼을 고르세요.
[600ms]
[serious] 옵션마다 기억해 둘 함정이 하나씩 있으니, 잘 살펴보세요.
[600ms]
[reassuring] A Z 305에 이 네 가지 제품 이름이 직접 나오지는 않지만, 컴퓨팅 솔루션 설계와 마이그레이션 기술에 도움이 됩니다. 이 중에서 고르게 하는 시나리오 문제가 나올 수 있습니다.
