# Narrator Script — GitHub · Harden Your Workflows: Tokens, Pinning, Injection and Attestations

**Source animation:** [HardenYourWorkflows.html](../../../journeys/GitHub/HardenYourWorkflows.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect>

---

## Step 1 · A pipeline is a path into production

[calm] 워크플로우는 코드를 실행하고, 비밀을 보관하고, 고객에게 제품을 배포할 수도 있습니다. 그래서 프로덕션으로 들어가는 통로가 됩니다.
[600ms]
[serious] 외부 사람이 입력할 수 있는 텍스트는 풀 리퀘스트든 이슈든 서드파티 액션이든, 모두 공격자가 들어오는 입구가 될 수 있습니다.
[600ms]
[determined] 이번 수업에서는 Contoso Weather Shop의 릴리스 워크플로우 하나를, 약점마다 하나씩 차례로 단단하게 만들어 봅니다.

## Step 2 · GITHUB_TOKEN: per run, scoped, short-lived

[calm] GitHub는 작업이 시작되기 전에 작업마다 새 토큰을 만듭니다.
[600ms]
[confident] 이 토큰은 워크플로우가 들어 있는 저장소에만 접근할 수 있고, 작업이 끝나면 만료됩니다.
[600ms]
[serious] 어떤 액션이든 github 토큰 컨텍스트에서 이 토큰을 읽을 수 있습니다. 직접 전달하지 않아도 마찬가지입니다. 그러니 토큰이 할 수 있는 일을 제한하세요.

## Step 3 · Least privilege with permissions

[calm] permissions 키로 작업에 필요한 권한만 토큰에 부여하세요.
[600ms]
[confident] 토큰은 기본을 읽기 전용으로 두고, 더 많은 권한이 필요한 작업에만 따로 올려 주는 것이 좋은 습관입니다. 권한을 하나라도 나열하면, 나열하지 않은 권한은 모두 없음이 됩니다.
[600ms]
[serious] 개인용 액세스 토큰은 다릅니다. 특정 사람에게 묶여서 저장되는 비밀입니다. GitHub 토큰으로 해결할 수 없을 때만 사용하세요.

## Step 4 · Script injection: untrusted input in run:

[curious] 공격은 이렇게 일어납니다. GitHub는 셸이 시작되기 전에 표현식을 그 값으로 바꿔 넣습니다.
[600ms]
[serious] 그 값을 공격자가 썼다면, 그대로 스크립트의 일부가 됩니다. 브랜치 이름에도 셸 구문이 들어갈 수 있습니다.
[600ms]
[concerned] 제목, 본문, 브랜치 이름, 라벨을 조심하세요. 이런 입력이 위험합니다.

## Step 5 · The fix: an environment variable, quoted

[calm] 해결책은 값을 환경 변수에 넣고, 데이터로 읽는 것입니다.
[600ms]
[impressed] 이제 같은 악성 제목도 그냥 텍스트일 뿐이고, 추가로 실행되는 것은 없습니다.
[600ms]
[confident] 셸에서는 변수를 큰따옴표로 감싸고, 액션에는 값을 입력으로 전달하세요.

## Step 6 · Trust an action before you run it

[serious] 액션 하나만 침해돼도 워크플로우가 쓰는 비밀이 노출될 수 있고, 토큰으로 저장소에 쓰기까지 할 수 있습니다.
[600ms]
[confident] 그러니 누가 만들었는지 확인하고, 인증된 제작자 배지가 있는지 보고, 비밀이 의도하지 않은 호스트로 나가지 않는지 점검하세요.
[600ms]
[calm] 그런 다음 허용 범위를 제한하세요. GitHub가 만든 액션, 인증된 Marketplace 제작자의 액션, 또는 직접 지정한 액션만 허용할 수 있습니다.

## Step 7 · Pin to a full commit SHA

[calm] 누군가 액션의 저장소에 접근하게 되면, 태그를 나중에 다른 코드로 옮겨 놓을 수 있습니다.
[600ms]
[confident] 전체 길이 커밋 SHA는 정확히 커밋 하나를 가리킵니다. 그 SHA가 포크가 아니라 액션 본래의 저장소에서 온 것인지 확인하세요.
[600ms]
[determined] 그리고 액션을 전체 길이 커밋 SHA로 고정하도록 요구하는 정책으로 이를 강제하세요.

## Step 8 · Immutable releases

[curious] 변경 불가능한 릴리스는 게시하는 순간 태그와 파일이 잠깁니다.
[600ms]
[impressed] 버전 4.2.0이 무엇을 뜻하는지, 아무도 몰래 바꿀 수 없습니다.
[600ms]
[confident] 제목과 릴리스 노트는 계속 수정할 수 있고, 사용자가 검증할 수 있도록 릴리스 증명이 자동으로 만들어집니다.

## Step 9 · Environments: a gate before production

[calm] 환경을 쓰면 사람이 승인하고, 타이머가 끝나고, 브랜치가 허용될 때까지 배포를 보류할 수 있습니다.
[600ms]
[confident] 환경의 비밀은 이 규칙을 통과하기 전까지 잠겨 있습니다. 승인은 필수 검토자 한 명이면 충분합니다.
[600ms]
[serious] 자체 검토 방지를 켜서, 자기가 실행한 것을 스스로 승인하지 못하게 하세요.

## Step 10 · OIDC: no stored cloud secret

[curious] OIDC를 쓰면 작업이 GitHub에 단기 토큰을 요청하고, 그 토큰을 Azure에 제시합니다.
[600ms]
[confident] Azure는 사용자가 Microsoft Entra ID에 설정해 둔 페더레이션 자격 증명과 대조해서 확인합니다. 그래서 클라우드 비밀번호를 GitHub에 저장할 필요가 없습니다.
[600ms]
[serious] 작업에는 id 토큰 쓰기 권한이 필요합니다. 그리고 신뢰할 수 없는 저장소가 토큰을 요청하지 못하도록 신뢰 관계에 조건을 추가하세요.

## Step 11 · Artifact attestations: sign it, verify it

[calm] 빌드는 무엇을 만들었고 출처가 어디인지 적은 진술서에 서명합니다.
[600ms]
[confident] 배포하기 전에 GitHub 명령줄 도구로 그 진술서를 검증하세요.
[600ms]
[reflective] 모든 테스트 빌드가 아니라 실제로 배포하는 것에 서명하세요. 그리고 증명은 소스와 빌드를 연결해 줄 뿐, 코드가 안전하다는 것을 증명하지는 않습니다.

## Step 12 · Recap: a hardening checklist

[calm] 토큰부터 배포까지, 워크플로우 하나를 지켜 주는 여덟 가지 습관입니다.
[600ms]
[confident] 토큰에는 최소 권한을 주고, 신뢰할 수 없는 텍스트는 환경 변수로 넘기고, 신뢰하고 허용한 액션은 SHA로 고정하고, 릴리스는 변경 불가능하게 만드세요.
[600ms]
[proud] 그리고 환경 게이트와 OIDC를 쓰고, 배포 전에 증명을 검증합니다. 이것이 G H 200의 자동화 보안 및 최적화 영역입니다.
