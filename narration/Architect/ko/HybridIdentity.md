# Narrator Script — Architect · Design hybrid identity and on-premises access

**Source animation:** [HybridIdentity.html](../../../journeys/Architect/HybridIdentity.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity/hybrid/whatis-hybrid-identity>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso>
- <https://learn.microsoft.com/entra/identity/domain-services/overview>
- <https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy>
- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>

---

## Step 1 · Two directories, one workforce

[calm] Contoso의 직원들은 이미 온프레미스 Active Directory에 존재하지만, 클라우드 애플리케이션은 Microsoft Entra ID를 사용합니다.
[600ms]
[curious] 두 디렉토리는 두 개의 관련 없는 계정을 생성하는 대신 동일한 인력을 대표해야 합니다.
[600ms]
[reassuring] 동기화, 로그인, 애플리케이션 접근은 각각 이 문제의 다른 부분을 해결하기 때문에 별도로 선택할 것입니다.

## Step 2 · Sync: Cloud Sync or Connect Sync?

[calm] 두 동기화 옵션 모두 사용자와 그룹을 Microsoft Entra ID로 통합하지만, 운영 모델은 다릅니다.
[600ms]
[curious] Cloud Sync는 클라우드 관리 구성의 경량 에이전트를 사용하는 반면, Connect Sync는 서버에서 더 완전한 동기화 엔진을 실행합니다.
[600ms]
[reassuring] 선택하기 전에 요구사항과 맞춤화 요구사항을 비교하세요; 정체성 동기화가 그 로그인 방식을 자동으로 선택하는 것은 아닙니다.

## Step 3 · Sign-in: who checks the password?

[calm] 각 로그인 경로를 따라가며 한 가지 질문을 하세요: 비밀번호가 실제로 어디서 확인되나요?
[600ms]
[curious] 비밀번호 해시 동기화는 클라우드에서 검증되고, 패스스루 인증은 온프레미스 도메인 컨트롤러에 도달하며, 페더레이션은 인증을 다른 시스템에 전달합니다.
[600ms]
[reassuring] Contoso의 요구사항을 충족하는 가장 간단한 방법을 선택하세요. 온프레미스 계정 상태 확인 요건도 포함해서요.

## Step 4 · Single sign-on: no repeat prompts

[calm] 싱글 사인온은 직원들이 클라우드 애플리케이션을 열 때마다 다시 인증을 요구하는 것을 피합니다.
[600ms]
[curious] 이 다이어그램은 가입된 기기에서 사용하는 주요 새로고침 토큰과 기업 도메인 가입 기기의 Seamless SSO를 구분합니다.
[600ms]
[reassuring] 모든 SSO 형태가 동일하게 작동한다고 가정하지 말고, 기기와 로그인 디자인에 맞는 메커니즘을 선택하세요.

## Step 5 · Legacy apps: managed domain or your own DCs?

[calm] Contoso의 레거시 애플리케이션은 여전히 LDAP, Kerberos, 도메인 조인과 같은 도메인 서비스를 기대하고 있습니다.
[600ms]
[curious] 관리되는 도메인은 관리 권한을 줄여주고, Azure 가상 머신에서 Active Directory 도메인 컨트롤러를 실행하면 더 많은 제어가 가능합니다.
[600ms]
[reassuring] 결정적인 질문은 애플리케이션이 어떤 기능을 필요로 하는지, 그리고 애플리케이션이 의존하는 도메인 컨트롤러를 누가 운영할지입니다.

## Step 6 · On-premises apps: reach them without a VPN

[calm] 원격 직원들은 Contoso 네트워크 내에 애플리케이션을 사용해야 하며, 해당 애플리케이션에 대한 인바운드 연결을 열지 않습니다.
[600ms]
[curious] Application Proxy는 웹 애플리케이션을 게시하는 반면, Private Access는 더 넓은 프라이빗 애플리케이션과 자원을 다룹니다.
[600ms]
[reassuring] 아웃바운드 커넥터 경로를 따라가고, 애플리케이션과 장치 요구사항에 맞는 접근 방식을 선택하세요.

## Step 7 · Conditional Access: one policy layer

[calm] 조건부 접근은 왼쪽에 표시된 신호들을 접근 결정으로 전환합니다.
[600ms]
[curious] 사용자, 기기, 위치 또는 위험 상태가 차단이나 다중 인증과 같은 추가 요구사항으로 이어질 수 있습니다.
[600ms]
[reassuring] 동일한 정책 접근법이 클라우드 애플리케이션과 Contoso가 공개한 온프레미스 애플리케이션을 보호할 수 있습니다.

## Step 8 · All in one: Contoso’s hybrid identity

[calm] 이제 Contoso의 인력은 두 디렉터리에서 하나로 일관되게 표현되며, 동기화와 로그인 방식도 의도적으로 선택되었습니다.
[600ms]
[curious] 애플리케이션 경로는 다르지만, 동일한 신원 기반 접근 결정 뒤에 위치해 있습니다.
[600ms]
[reassuring] 이로써 인증과 접근 가능성이 완성됩니다; 다음 수업에서는 각 사람이나 업무 부하가 무엇을 할 수 있는지, 그리고 얼마나 오래 지속되는지 묻습니다.

