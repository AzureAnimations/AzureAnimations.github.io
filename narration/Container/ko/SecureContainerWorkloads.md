# Narrator Script — Containers · Secure containers: Defender for Containers, AKS, Container Registry, Instances and Container Apps — Azure Containers

**Source animation:** [SecureContainerWorkloads.html](../../../journeys/Container/SecureContainerWorkloads.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/alerts-containers>
- <https://learn.microsoft.com/azure/container-registry/container-registry-authentication>
- <https://learn.microsoft.com/azure/container-registry/overview-sign-verify-artifacts>

---

## Step 1 · Build, store, run: three places to attack

[calm] Contoso는 orders-api 컨테이너를 배포합니다. 컨테이너는 파이프라인에서 레지스트리를 거쳐, 실행 중인 포드로 이동합니다.
[600ms]
[serious] 공격자는 어느 단계에서든 공격할 수 있습니다. 이미지는 저장되어 있는 동안 변조되거나 바뀔 수 있고, 컨테이너는 실행되고 나면 악용될 수 있습니다.
[600ms]
[determined] 그래서 이 수업은 부분마다 한 단계씩 보호합니다. 모든 단계를 보호하면, 사슬에 약한 고리가 없어집니다.

## Step 2 · Defender for Containers watches all three

[confident] Defender for Cloud 플랜 하나로 레지스트리 이미지, 클러스터 구성, 실행 중인 컨테이너를 모두 다룹니다.
[600ms]
[calm] 보안 태세, 취약성 평가, 런타임 위협 방어, 공급망 보호, 배포 모니터링을 모두 한곳에서 할 수 있다는 뜻입니다.
[600ms]
[serious] 한 가지 기억하세요. 경고는 플랜을 켠 이후에 발생한 활동에 대해서만 나옵니다. 그러니 일찍 켜 두세요.

## Step 3 · Registry: who gets in and what’s inside

[calm] 레지스트리부터 시작하세요. 누가 푸시하고 풀할 수 있는지 통제하고, 공용 인터넷에서 접근하지 못하게 하고, 안에 들어 있는 것을 스캔하세요.
[600ms]
[confident] 대부분의 경우에는 Microsoft Entra ID 로그인을 사용하세요. 범위가 지정된 토큰이 대안이지만, 이 토큰은 Entra 역할 할당을 사용하지 않습니다.
[600ms]
[curious] 레지스트리를 프라이빗으로 유지하려면 프라이빗 엔드포인트를 추가하세요. 이 기능은 Premium 계층이 필요합니다.

## Step 4 · Image trust: sign it, scan it, then run it

[curious] 이미지가 내가 빌드한 그 이미지인지 어떻게 알 수 있을까요? 빌드할 때 서명하면 됩니다.
[600ms]
[calm] Notary Project의 Notation이 이미지에 서명하고, 서명은 레지스트리에 저장됩니다. 키는 Key Vault에 둘 수 있습니다.
[600ms]
[confident] 그리고 포드가 시작되기 전에 서명을 확인하세요. 아직 미리 보기인 AKS Image Integrity는 Azure Policy로 서명된 이미지만 허용하고, 스캔 결과에 따라 배포를 막을 수도 있습니다.

## Step 5 · AKS identity: people and pods

[calm] 클러스터에서 생각해야 할 ID는 두 종류입니다. 사람과 포드입니다.
[600ms]
[confident] 사람은 Microsoft Entra ID로 로그인하고, Kubernetes RBAC로 Kubernetes 역할을 받습니다. 대안으로 Kubernetes용 Azure RBAC도 있습니다.
[600ms]
[reassuring] 포드는 워크로드 ID로 Azure에 접근합니다. 포드의 서비스 계정 토큰을 Entra와 페더레이션하는 방식이라서, 저장해 둘 비밀번호가 필요 없습니다.

## Step 6 · AKS network: shrink who can connect

[calm] 이제 들어오는 경로를 줄이세요. API 서버를 공용 인터넷에 노출하지 마세요.
[600ms]
[confident] 프라이빗 클러스터는 API 서버에 프라이빗 주소를 부여합니다. 승인된 IP 범위는 대신 퍼블릭 API 서버를 제한하는 방법인데, 프라이빗 클러스터에서는 쓸 수 없습니다.
[600ms]
[serious] 클러스터 안에서는 기본적으로 모든 포드가 다른 모든 포드와 통신할 수 있습니다. 네트워크 정책으로 이것을 바꿉니다.

## Step 7 · AKS configuration: guardrails before pods run

[curious] 어드미션 검사는 API 서버로 들어오는 모든 요청을 확인합니다. 그래서 위험한 포드는 시작되기 전에 막힙니다.
[600ms]
[calm] AKS용 Azure Policy 애드온은 포드 보안 기준 같은 기본 제공 정의를 적용합니다. 효과를 감사에서 거부로 바꾸면 차단됩니다.
[600ms]
[confident] Pod Security Admission도 AKS에서 기본으로 켜져 있고, 네임스페이스의 레이블을 사용합니다.

## Step 8 · Container Instances: identity, network, secrets

[calm] Container Instances의 컨테이너 그룹은 관리 ID를 쓸 수 있고, 가상 네트워크에 연결할 수 있고, 비밀번호를 숨길 수 있습니다.
[600ms]
[serious] 실행 중인 그룹에 ID를 추가하거나 변경하면 그룹이 재시작됩니다. 가상 네트워크에서는 그룹에 전용 서브넷이 필요하고, 아웃바운드 트래픽용 NAT 게이트웨이도 필요합니다.
[600ms]
[reassuring] 비밀번호는 보안 값으로 저장하세요. 속성에는 이름만 표시됩니다.

## Step 9 · Container Apps: identity, ingress and secrets

[confident] Container Apps에서는 꼭 공개해야 하는 것만 노출하세요. 내부 인그레스는 환경 안에서만 접근할 수 있습니다.
[600ms]
[calm] 앱이 관리 ID를 쓰게 하면, 자격 증명을 따로 들고 있을 필요가 없습니다.
[600ms]
[serious] 프로덕션에서는 비밀 값을 Key Vault 참조로 보관하세요. 그리고 일부 역할은 비밀 목록 조회까지 포함하는 와일드카드 작업을 쓴다는 점도 유의하세요.

## Step 10 · Runtime threat: an alert, start to finish

[serious] 이제 실행 중인 컨테이너에 대한 공격 하나를 따라가 보겠습니다. 처음 수상한 프로세스가 나타나는 순간부터 대응까지입니다.
[600ms]
[curious] Defender for Containers는 센서와 Kubernetes 감사 로그를 사용합니다. 암호화폐 채굴, 웹 셸, 바이너리 드리프트, 수상한 DNS 활동을 탐지할 수 있습니다.
[600ms]
[confident] 경고는 MITRE 공격 프레임워크에 매핑되고, Defender for Cloud에 표시되며, Microsoft Defender XDR에서 조사할 수 있습니다.

## Step 11 · Which control for which layer?

[excited] 연습해 볼 시간입니다. 컨트롤을 하나 고른 다음, 그 컨트롤이 보호하는 계층을 고르세요.
[600ms]
[calm] 컨트롤은 여덟 가지, 계층은 네 가지입니다. 레지스트리와 이미지, AKS, Container Instances와 Container Apps, 그리고 런타임입니다.
[600ms]
[encouraging] 엉뚱한 곳에 놓았다면 다시 해 보세요. 이유를 생각해 봐야 기억에 오래 남습니다.

## Step 12 · Recap: protect the image, the cluster, the runtime

[calm] 배포하는 것, 클러스터 구성, 실행되는 것을 모두 단단히 잠그세요. 이 세 가지를 Defender가 모두 지켜봅니다.
[600ms]
[confident] 이것은 S C 500에서 측정하는 기술이고, 컨테이너로 컴퓨팅을 보호하는 항목에 해당합니다. 분류 연습을 해 본 다음, 공식 학습 가이드를 읽어 보세요.
[600ms]
[proud] 이미지와 클러스터, 런타임을 보호하면, Contoso의 orders-api를 공격하기가 훨씬 어려워집니다.
