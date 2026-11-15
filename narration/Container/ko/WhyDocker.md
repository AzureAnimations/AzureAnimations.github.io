# 내레이션 대본 — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

<!-- Review sources: https://learn.microsoft.com/virtualization/windowscontainers/about/containers-vs-vm ; https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/ ; https://buildah.io/ -->

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · problem

[confident] Contoso 개발팀은 .NET이나 Java로 앱을 만들고 컴파일합니다. 완성된 JAR 파일이나 DLL 파일을 운영팀에 전달하고 배포를 맡깁니다.
[600ms]
[calm] 하지만 그 아티팩트는 컴파일된 코드만 담고 있습니다. 빌드에 사용된 운영 체제 라이브러리나 런타임은 담고 있지 않죠.
[700ms]
[concerned] 그런데 운영 서버의 운영 체제나 런타임이 개발 환경과 다르면, 앱이 제대로 실행되지 않을 수 있습니다.

## Step 2 · drift

[curious] 왜 이런 문제가 생길까요? 환경마다 구성이 달라졌기 때문입니다.
[600ms]
[calm] 여러분의 앱은 결코 코드만이 아니었습니다. 코드에 더해 특정 런타임과 특정 라이브러리 집합까지가 앱입니다.
[600ms]
[serious] 개발 노트북, 테스트 VM, 프로덕션 — 환경마다 이것들이 조금씩 다릅니다. 하나만 바뀌어도 똑같은 빌드가 다르게 동작하죠.

## Step 3 · wrap

[confident] 여기 Docker의 해법이 있습니다. Dockerfile은 여러분의 코드와 의존성을 기반 운영 체제, 런타임과 함께 감싸는 레시피입니다.
[600ms]
[calm] docker build 명령으로 이 구성을 하나의 이미지로 만듭니다. 이 예에서는 contoso-orders의 첫 번째 버전을 만듭니다.
[700ms]
[reassuring] 런타임과 라이브러리를 이미지에 포함하면 환경 간 차이를 줄일 수 있습니다. 다만 호스트의 운영 체제, 프로세서 아키텍처, 컨테이너 런타임은 여전히 이미지와 호환되어야 합니다.

## Step 4 · layers

[curious] 그 이미지 안을 들여다보면 하나의 덩어리가 아니라, 읽기 전용 레이어가 쌓인 스택입니다.
[600ms]
[calm] 기본 이미지의 레이어 위에 의존성과 앱 파일을 담은 레이어가 추가됩니다. Dockerfile에는 파일을 변경하는 명령도 있고, 컨테이너 실행 방식을 설정하는 명령도 있습니다.
[600ms]
[impressed] 레이어는 불변이고 공유되므로 동일한 레이어는 한 번만 저장됩니다. 그래서 내려받기는 빠르고 재빌드는 저렴하죠.

## Step 5 · vmvc

[confident] 그런데 컨테이너는 그저 가벼운 가상 머신이 아닙니다.
[600ms]
[calm] VM은 각각 별도의 게스트 운영 체제를 가지며 여러 앱을 실행할 수 있습니다. 프로세스 격리 컨테이너는 호스트 커널을 공유하므로, 앱과 의존성을 포함하되 별도의 게스트 커널은 필요하지 않습니다.
[700ms]
[impressed] 커널을 공유하면 필요한 리소스를 줄일 수 있습니다. 컨테이너는 일반적으로 VM보다 빠르게 시작하고 적은 리소스를 사용하지만, 이미지 크기와 시작 시간은 앱에 따라 달라집니다.

## Step 6 · ports

[confident] 그 이미지를 실행하면 컨테이너가 되고, 그 컨테이너가 바로 Contoso Orders입니다. 안에서 앱은 포트 3000에서 대기합니다.
[600ms]
[calm] 앱은 컨테이너 안에서 요청을 기다리고 있지만, 이 예에서는 아직 호스트 포트가 공개되지 않았습니다. 포트를 공개하면 외부 클라이언트가 호스트를 통해 앱에 연결할 수 있습니다.
[600ms]
[encouraging] 그래서 docker run에 -p 8080:3000을 붙입니다. 외부 트래픽은 호스트의 포트 8080으로 들어오고, Docker가 이를 컨테이너의 포트 3000으로 전달합니다.

## Step 7 · oci

[curious] 여기 많은 분들이 놓치는 게 있어요 — Docker만이 컨테이너를 실행하는 방법은 아닙니다.
[600ms]
[calm] Open Container Initiative, 줄여서 OCI는 이미지 형식, 컨테이너 실행, 이미지 배포에 관한 규격을 정의합니다.
[600ms]
[impressed] 도구마다 역할이 다릅니다. containerd와 CRI-O는 컨테이너를 실행하고, Podman은 컨테이너를 관리하며, Buildah는 이미지를 만듭니다. 공통 규격 덕분에 함께 활용하기 쉽지만, 호스트 호환성은 확인해야 합니다.

## Step 8 · targets

[confident] 호환되는 이미지라면 Azure를 비롯한 여러 환경에서 재사용할 수 있습니다. 먼저 각 서비스가 지원하는 운영 체제와 이미지 형식을 확인해야 합니다.
[600ms]
[calm] 여기에는 네 가지 선택지가 있습니다. 필요할 때 컨테이너를 실행하는 Azure Container Instances, 자동 크기 조정을 제공하는 Azure Container Apps, 오케스트레이션을 세밀하게 제어하는 Azure Kubernetes Service, 웹앱을 위한 App Service입니다.
[700ms]
[encouraging] 호환성, 크기 조정, 필요한 제어 범위를 기준으로 선택하세요. 이미지를 재사용하면 앱 패키지를 일관되게 유지할 수 있지만, 배포 환경별 설정은 달라질 수 있습니다.

## Step 9 · recap

[proud] 핵심을 정리해 보겠습니다. 앱과 의존성을 변경되지 않는 레이어로 구성된 이미지에 담습니다. 호환되는 개발 환경, 테스트 환경, Azure에서 재사용하면 매번 환경을 수동으로 구성할 필요가 없습니다.
[700ms]
[optimistic] 이 이미지가 앞으로 이 여정 내내 저장하고, 보호하고, 확장하고, 실행할 단위입니다.
[600ms]
[curious] 그렇다면 이미지는 어디에 저장할까요? 다음으로 Azure Container Registry를 살펴보겠습니다.
