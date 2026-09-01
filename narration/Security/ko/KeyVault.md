# Narrator Script · 한국어 (ko) — Journey 01 · Azure Key Vault

**Source animation:** `static/v2/Security/KeyVault.html`
**Language:** Korean (ko). 영어 마스터 대본에서 번역. 연기 지시 `[tags]` 와 멈춤 `[NNNms]` 는 그대로 유지(읽지 않는 연출 지시). 단계 제목은 1:1 매핑을 위해 영어로 둡니다.

애니메이션 한 단계당 한 블록.

---

## Step 1 · Every connection needs a secret, key or certificate

[confident] Contoso를 소개합니다. 온라인 상점이지만, 사실은 서로 통신하는 여러 앱입니다.
[600ms]
[calm] 쇼핑객은 TLS로 Store Front에 도달하고, Store Front는 Order Processing을 호출하며, Order Processing은 데이터베이스와 점점 늘어나는 구성 요소에 도달합니다.
[600ms]
[concerned] 이 화살표들은 모두 자격 증명(비밀, 키 또는 인증서)이 필요하지만, 지금은 이를 안전하고 중앙에서 보관할 곳이 없습니다.
[800ms]
[curious] 그렇다면 이 모든 민감한 자료는 사실 어디에 있어야 할까요?

## Step 2 · Static secrets in appsettings.json

[serious] 대개 이렇게 시작하고, 여기서 어긋납니다.
[600ms]
[concerned] Store Front는 하드코딩된 데이터베이스 암호와 결제 키를 로컬 appsettings.json 파일에서 바로 읽습니다. 같은 값이 개발 노트북과 파이프라인 변수에 복사되어 있습니다.
[600ms]
[serious] Secure Future Initiative의 첫 번째 원칙은 설계부터 안전하게입니다. 저장 시, 전송 시, 실행 시에 비밀을 보호합니다.
[600ms]
[determined] 소스 제어 안의 정적 자격 증명은 첫날부터 그것을 깨뜨립니다. 리포지토리 하나가 유출되면 프로덕션이 손상됩니다.

## Step 3 · Centralize in Azure Key Vault

[confident] 해결책은 중앙화하는 것, Azure Key Vault에서입니다.
[600ms]
[calm] Key Vault은 흩어진 비밀을 하나의 관리형, 감사된 저장소로 모으며, 세 가지 개체 유형(비밀, 암호화 키, 인증서)을 보관합니다.
[600ms]
[impressed] 앱은 런타임에 이를 읽으며, 코드에는 자격 증명이 전혀 없습니다.
[600ms]
[reassuring] 이제 하나의 자격 증명 모음에 Contoso의 데이터베이스 암호, 결제 키, 주문 암호화 키, Store Front 인증서가 모두 들어가고, 회전, 감사, 액세스 제어는 모두 중앙화됩니다.

## Step 4 · How your material is protected

[intrigued] 하지만 그 자료는 실제로 얼마나 강력하게 보호될까요?
[800ms]
[confident] 모든 키는 검증된 FIPS 140 수준으로 보호됩니다. Standard는 키를 소프트웨어 모듈에 보관하고, Premium과 Managed HSM은 하드웨어 보안 모듈 안에서 키를 생성하고 보관합니다.
[600ms]
[impressed] HSM 내부에서는 키가 하드웨어 경계를 벗어나지 않습니다.
[600ms]
[calm] FIPS 수준이 높을수록 물리적 보호가 더 강력하다는 뜻입니다. 소프트웨어부터, ID 기반 액세스를 갖춘 변조 방지 하드웨어까지.

## Step 5 · Standard vs Premium vs Managed HSM

[curious] 그렇다면 Contoso는 어떤 컨테이너를 선택해야 할까요?
[800ms]
[confident] Key Vault은 두 가지 자격 증명 모음 계층과 전용 Managed HSM으로 제공되며, 테넌트, 보호, 신뢰 루트를 누가 제어하는지에 따라 다릅니다.
[600ms]
[calm] 일상적인 앱 비밀과 TLS 인증서에는 Standard를 사용하세요. HSM 지원 또는 고객 관리 키가 필요하면 Premium을 선택하세요.
[600ms]
[reassuring] 그리고 단일 테넌트 전용 모듈과 신뢰 루트의 완전한 제어(진정한 키 주권)가 필요하면 Managed HSM을 선택하세요.

## Step 6 · Migrate a key into Key Vault — without exposing it

[intrigued] 이미 키가 있고, 그것을 한 번도 노출하지 않고 가져와야 한다면 어떨까요?
[800ms]
[confident] 그것이 Bring Your Own Key입니다. 온-프레미스 HSM 안에서 데이터 암호화 키를 생성했다고 해 보죠. Key Vault KEK, 즉 RSA 키 쌍이 이동을 위해 그것을 래핑합니다.
[600ms]
[calm] KEK의 공개 키를 내보내면, 사용자의 HSM이 그것으로 DEK를 래핑하고, 이동하는 것은 암호화된 .byok blob뿐입니다.
[600ms]
[reassuring] Key Vault은 HSM 내부에서 개인 키로 그것을 언래핑하므로, 평문 키가 밖으로 드러나는 일은 없습니다.

## Step 7 · Azure Key Vault — the whole picture

[reflective] 한 걸음 물러서면, 전체 그림이 하나로 맞춰집니다.
[600ms]
[proud] 이제 Contoso의 비밀, 키, 인증서는 하나의 감사된 자격 증명 모음에 존재합니다. 올바른 FIPS 수준으로, 올바른 계층에서 보호되고, Contoso가 제어하는 키로 래핑되며, 코드에 자격 증명 없이 런타임에 읽힙니다.
[600ms]
[confident] 이것이 설계부터 안전하게, 기본적으로 안전하게, 그리고 안전한 운영입니다.
[600ms]
[optimistic] 그리고 이것은 나머지 여정의 토대입니다. 관리 ID는 암호 없이 이 비밀을 가져오고, 액세스 제어는 누가 읽을 수 있는지를 좁히며, 프라이빗 네트워킹은 자격 증명 모음을 잠급니다.
