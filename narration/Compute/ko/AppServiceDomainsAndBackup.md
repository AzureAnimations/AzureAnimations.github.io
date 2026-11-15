# Narrator Script — Compute · App Service · Custom Domains, TLS & Backup

**Source animation:** [AppServiceDomainsAndBackup.html](../../../journeys/Compute/AppServiceDomainsAndBackup.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/configure-ssl-bindings>
- <https://learn.microsoft.com/azure/app-service/manage-backup>
- <https://learn.microsoft.com/azure/app-service/faq-configuration-and-management>

---

## Step 1 · Your App Has a Name. Just Not Yours.

[curious] App Service 앱에는 모두 기본 이름이 하나씩 있는데, azurewebsites dot net으로 끝납니다.
[600ms]
[confident] Contoso는 같은 앱에 자기 도메인의 www 이름을 붙이고, 브라우저에 자물쇠 표시도 띄우고 싶어 합니다.
[600ms]
[reassuring] 그러려면 먼저 DNS를 설정하고, 그다음에 인증서를 적용해야 합니다. 그리고 문제가 생겼을 때 앱을 복구하는 방법도 알아봅니다.

## Step 2 · Which Tiers Allow It?

[calm] 사용자 지정 이름, 인증서, 백업은 모두 앱이 실행되는 App Service 플랜의 가격 책정 계층에 따라 달라집니다.
[600ms]
[confident] Free 계층은 사용자 지정 도메인을 쓸 수 없습니다. Shared는 사용자 지정 도메인은 되지만, 사용자 지정 TLS는 안 됩니다. Basic 이상부터 TLS 바인딩과 백업이 추가됩니다.
[600ms]
[reflective] 계획하기 전에 계층부터 확인하세요. 가격은 일부러 표시하지 않았으니, 공식 가격 페이지를 보세요.

## Step 3 · The Custom-Domain Walk

[curious] DNS 레코드에서 잠긴 문까지는 여섯 단계를 거칩니다.
[600ms]
[confident] 레코드를 추가하고, 검증하고, 도메인을 추가하고, 인증서를 받아서 바인딩한 뒤, 마지막으로 HTTPS만 허용하도록 강제합니다. 단계를 하나씩 선택하면 거기서 무엇을 하는지, 어디서 실패할 수 있는지 볼 수 있습니다.
[600ms]
[serious] 순서가 중요합니다. App Service가 이름을 추가하기 전에 DNS를 먼저 확인하기 때문에, DNS가 맨 처음입니다.

## Step 4 · Two Records, One Proof

[calm] DNS 레코드 하나가 이름을 앱에 연결합니다. 서브도메인은 CNAME, 루트 도메인은 A 레코드를 씁니다.
[600ms]
[confident] 도메인 확인 ID가 담긴 TXT 레코드로 그 도메인이 내 것임을 증명합니다.
[600ms]
[reflective] 이 레코드들은 DNS 제공업체에서 추가하는데, 사용자 지정 도메인 추가 대화 상자에 나온 값을 쓰세요. 유효성을 검사하고 추가하면, 그 행에는 아직 바인딩이 없다고 표시됩니다.

## Step 5 · Choose a Certificate

[curious] App Service에서 인증서를 얻는 방법은 네 가지입니다.
[600ms]
[confident] 관리형 인증서는 무료이고 자동으로 갱신되지만, 와일드카드는 지원하지 않습니다. 아니면 App Service 인증서를 구매하거나, Key Vault에서 가져오거나, 직접 만든 P F X 파일을 업로드할 수 있습니다.
[600ms]
[serious] 퍼블릭 인증서도 업로드할 수는 있지만, 이건 코드에서 다른 서비스를 호출할 때 쓰는 것이지 사용자 지정 도메인을 보호하는 용도가 아닙니다.

## Step 6 · Bind It: SNI or IP-Based

[calm] TLS 바인딩은 인증서를 사용자 지정 도메인에 연결하고, 이렇게 해야 도메인이 보호됩니다.
[600ms]
[confident] 대부분의 앱은 SNI를 씁니다. 브라우저가 호스트 이름을 함께 보내기 때문에, IP 주소 하나로 여러 인증서를 처리할 수 있습니다.
[600ms]
[reflective] IP 기반 SSL은 인증서 하나에 전용 주소를 하나 줍니다. 이 방식은 Standard 이상 계층이 필요합니다.

## Step 7 · Lock the Door

[serious] 이제 문을 잠가 보겠습니다. 일반 설정 세 가지가 클라이언트의 연결 방식을 정합니다.
[600ms]
[confident] HTTPS Only는 일반 트래픽을 모두 HTTPS로 리디렉션합니다. 최소 TLS 버전은 앱이 받아들이는 가장 낮은 버전을 정합니다.
[600ms]
[calm] 클라이언트 인증서를 쓰면 상호 인증이 추가되고, 인증서 검증은 코드가 직접 합니다. 이 기능은 Basic 이상 계층이 필요합니다.

## Step 8 · Keep the Padlock Fresh

[concerned] 인증서는 만료되고, 만료된 자물쇠는 방문자를 쫓아 버립니다.
[600ms]
[confident] 자동으로 갱신되는지는 인증서를 어디서 받았는지에 따라 다릅니다. 관리형 인증서는 스스로 갱신되고, 바인딩도 따라서 갱신됩니다.
[600ms]
[serious] Key Vault 인증서와 App Service 인증서는 24시간마다 동기화됩니다. 직접 업로드한 P F X는 여러분이 직접 챙겨야 합니다. 교체한 다음 다시 바인딩하세요.

## Step 9 · Your Safety Net: Backups

[calm] App Service는 따로 설정하지 않아도 앱을 알아서 백업해 줍니다. 그리고 직접 관리하는 스토리지 계정에 사용자 지정 백업을 추가할 수도 있습니다.
[600ms]
[confident] 자동 백업은 매시간 실행되지만 다운로드할 수는 없습니다. 사용자 지정 백업은 원하는 일정대로 실행되고, 일부만 백업할 수도 있습니다.
[600ms]
[reflective] 백업은 매번 증분이 아니라 전체 복사본입니다. 백업에는 Basic 이상이 필요하고, Basic에서는 프로덕션 슬롯만 백업됩니다.

## Step 10 · What a Backup Holds

[curious] 그럼 백업에는 무엇이 들어 있을까요? 앱 콘텐츠와 일부 설정은 복원됩니다.
[600ms]
[serious] 네트워크와 ID, 슬롯, 사용자 지정 도메인과 TLS 설정은 복원되지 않습니다. 그래서 복원한 뒤에 이 설정들을 다시 확인해야 합니다.
[600ms]
[reflective] 연결된 데이터베이스는 사용자 지정 백업에만 포함되는데, 이 기능은 사용 중단 예정입니다. 대신 데이터베이스 자체 백업을 사용하세요.

## Step 11 · Get It Back

[determined] 복구할 때는 기존 앱에 덮어쓰거나, 새 앱으로, 또는 슬롯으로 복원할 수 있습니다.
[600ms]
[confident] 프로덕션이라면 먼저 슬롯으로 복원하고 스왑하세요. 복원이 진행되는 동안에는 대상 앱이나 슬롯이 중지됩니다.
[600ms]
[serious] 복원한 뒤에는 사용자 지정 도메인과 TLS 바인딩을 다시 확인하세요.

## Step 12 · All in One

[calm] 이름을 붙이고, 증명하고, 보호하고, 갱신하고, 백업합니다. 그러면 복구할 수 있습니다.
[600ms]
[confident] 정리하면 CNAME이나 A 레코드와 TXT 증명, 인증서와 바인딩, HTTPS Only, 그리고 최소 TLS 버전입니다.
[600ms]
[proud] 백업으로는 파일과 일부 설정이 복원되고, 도메인과 TLS는 복원되지 않습니다. 이 모든 내용은 A Z 104의 App Service 목표에 해당합니다.
