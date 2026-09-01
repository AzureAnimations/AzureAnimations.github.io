# 내레이션 대본 — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

---

## Step 1 · problem

[confident] Contoso를 만나 보세요. 이 팀은 .NET이나 Java로 앱을 작성해 컴파일한 뒤, 그 아티팩트인 dot jar나 dot d-l-l을 운영팀에 넘겨 배포합니다.
[600ms]
[calm] 하지만 그 아티팩트는 컴파일된 코드만 담고 있습니다. 빌드에 사용된 운영 체제 라이브러리나 런타임은 담고 있지 않죠.
[700ms]
[concerned] 그래서 운영 서버에서는 다른 운영 체제, 다른 런타임을 만나고 — 결국 깨집니다.

## Step 2 · drift

[curious] 그럼 왜 깨질까요? 한 단어로, 드리프트입니다.
[600ms]
[calm] 여러분의 앱은 결코 코드만이 아니었습니다. 코드에 더해 특정 런타임과 특정 라이브러리 집합까지가 앱입니다.
[600ms]
[serious] 개발 노트북, 테스트 VM, 프로덕션 — 환경마다 이것들이 조금씩 다릅니다. 하나만 바뀌어도 똑같은 빌드가 다르게 동작하죠.

## Step 3 · wrap

[confident] 여기 Docker의 해법이 있습니다. Dockerfile은 여러분의 코드와 의존성을 기반 운영 체제, 런타임과 함께 감싸는 레시피입니다.
[600ms]
[calm] 그런 다음 docker build가 그 모두를 하나의 이미지로 봉인합니다. Contoso의 경우엔 contoso-orders version one이죠.
[700ms]
[reassuring] 이제 런타임과 라이브러리가 이미지 안에 함께 이동합니다. 호스트에는 컨테이너 런타임만 있으면 되고, 그 운영 체제 불일치는 아예 일어날 수 없습니다.

## Step 4 · layers

[curious] 그 이미지 안을 들여다보면 하나의 덩어리가 아니라, 읽기 전용 레이어가 쌓인 스택입니다.
[600ms]
[calm] Dockerfile의 각 줄이 레이어를 하나씩 더합니다. 기반, 의존성, 그 위에 여러분의 앱 순으로요.
[600ms]
[impressed] 레이어는 불변이고 공유되므로 동일한 레이어는 한 번만 저장됩니다. 그래서 내려받기는 빠르고 재빌드는 저렴하죠.

## Step 5 · vmvc

[confident] 그런데 컨테이너는 그저 가벼운 가상 머신이 아닙니다.
[600ms]
[calm] VM은 하드웨어를 가상화하고 앱마다 완전한 게스트 운영 체제를 실행합니다. 컨테이너는 호스트 커널을 공유하고 앱과 라이브러리만 담죠 — 통째로 된 머신이 아니라 격리된 프로세스입니다.
[700ms]
[impressed] 그 공유 커널이 핵심입니다. 컨테이너는 몇 초 만에 시작하고, 기가바이트가 아닌 메가바이트 단위이며, 한 호스트에 훨씬 많이 담깁니다.

## Step 6 · ports

[confident] 그 이미지를 실행하면 컨테이너가 되고, 그 컨테이너가 바로 Contoso Orders입니다. 안에서 앱은 포트 3000에서 대기합니다.
[600ms]
[calm] 하지만 컨테이너 안의 포트는 닫혀 있습니다. 요청을 들어오게 하려면 이미지를 실행할 때 그 포트를 게시해야 하죠.
[600ms]
[encouraging] 그래서 docker run에 -p 8080:3000을 붙입니다. 외부 트래픽은 호스트의 포트 8080으로 들어오고, Docker가 이를 컨테이너의 포트 3000으로 전달합니다.

## Step 7 · oci

[curious] 여기 많은 분들이 놓치는 게 있어요 — Docker만이 컨테이너를 실행하는 방법은 아닙니다.
[600ms]
[calm] 여러분의 이미지는 Open Container Initiative, 즉 OCI 표준을 따르며, 이 표준은 image, runtime, distribution 세 가지 명세를 정의합니다.
[600ms]
[impressed] 그래서 OCI를 준수하는 어떤 런타임이든 그대로 실행합니다 — Docker 내부와 AKS 노드에 들어 있는 엔진인 containerd, 그리고 CRI-O, Podman, Buildah까지요. 대부분 Linux Foundation과 CNCF 아래 오픈 소스입니다.

## Step 8 · targets

[confident] 열린 표준이기 때문에, 하나의 이미지가 어디서나 실행됩니다 — Azure 전반에서도요.
[600ms]
[calm] 같은 아티팩트, 네 개의 정문입니다. 단일 컨테이너를 위한 Azure Container Instances, 서버리스 자동 확장을 위한 Azure Container Apps, 완전한 제어를 위한 Azure Kubernetes Service, 그리고 관리형 웹 앱으로 실행하는 App Service죠.
[700ms]
[encouraging] 필요한 오케스트레이션의 정도에 따라 고르면 됩니다 — 이미지는 절대 바뀌지 않습니다.

## Step 9 · recap

[proud] 자, 이게 전부입니다. 앱과 의존성을 불변의 레이어 이미지로 한 번만 패키징하고, 그 똑같은 이미지를 어디서나 실행하세요 — 노트북이든, CI든, Azure든요.
[700ms]
[optimistic] 이 이미지가 앞으로 이 여정 내내 저장하고, 보호하고, 확장하고, 실행할 단위입니다.
[600ms]
[curious] 그런데 한 가지 의문이 생기죠 — 그 이미지들은 실제로 어디에 살까요? 다음 정거장은 Azure Container Registry입니다.
