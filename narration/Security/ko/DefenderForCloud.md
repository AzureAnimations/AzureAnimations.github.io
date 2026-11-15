# Narrator Script — Security · Microsoft Defender for Cloud — Azure Security Journey

**Source animation:** [DefenderForCloud.html](../../../journeys/Security/DefenderForCloud.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls>
- <https://learn.microsoft.com/azure/defender-for-cloud/exempt-resource>
- <https://learn.microsoft.com/azure/defender-for-cloud/concept-regulatory-compliance-standards>

---

## Step 1 · Is my Azure estate secure?

[calm] Contoso는 여러 구독에 걸쳐 서버와 컨테이너, 데이터, 앱을 운영하고 있어서, Priya는 어디가 취약하고 어디가 공격받고 있는지 알아야 합니다.
[600ms]
[curious] 이 일을 하는 게 Microsoft Defender for Cloud이고, 이번 레슨에서는 A Z 305, A Z 104, A Z 700 시험에 맞춰 다룹니다.
[600ms]
[reassuring] Microsoft 365의 Defender XDR이 궁금하다면 Zero Trust 여정을 보세요.

## Step 2 · Two pillars: posture and protection

[confident] Defender for Cloud는 두 가지 일을 합니다. 첫째는 CSPM이라고 하는 보안 상태 관리로, 취약점을 찾아서 고칩니다.
[600ms]
[calm] 둘째는 CWPP라고 하는 워크로드 보호로, 위협을 탐지하고 대응합니다.
[600ms]
[reflective] Microsoft Learn에서는 코드와 파이프라인 보안을 뜻하는 DevSecOps도, 이 클라우드 네이티브 애플리케이션 보호 플랫폼의 세 번째 구성 요소로 꼽습니다.

## Step 3 · Secure score and recommendations

[calm] Defender for Cloud는 리소스를 보안 벤치마크와 비교해서 점검하는데, 기본으로 Microsoft 클라우드 보안 벤치마크를 적용합니다.
[600ms]
[confident] 점검 결과로 권장 사항을 띄우고, 결과를 보안 점수 하나로 모아 줍니다. 더 많이 고칠수록 점수가 올라가고, 확인된 위험이 낮아진다는 뜻입니다.
[600ms]
[encouraging] 점수와 권장 사항을 제공하는 Foundational CSPM은 무료입니다. 화면에 나온 숫자는 예시일 뿐입니다.

## Step 4 · Four ways to act on a recommendation

[calm] 권장 사항마다 문제와 심각도, 영향을 받는 리소스, 해결 단계가 나와 있습니다.
[600ms]
[confident] 직접 고치거나, Azure Policy의 Deny나 Enforce로 막거나, 예외로 처리해서 넘기거나, 담당자를 지정할 수 있습니다.
[600ms]
[serious] Deny와 Enforce는 Azure 리소스와 일부 권장 사항에만 적용되고, 거버넌스 규칙에는 Defender CSPM 플랜이 필요합니다.

## Step 5 · Regulatory compliance dashboard

[curious] 표준은 컨트롤의 모음이고, 컨트롤 하나는 권장 사항들을 묶은 것입니다.
[600ms]
[calm] 대시보드에서 내 리소스가 어떤 컨트롤을 통과하는지 볼 수 있습니다. 자동으로 평가할 수 없는 컨트롤은 회색으로 사용 불가라고 표시됩니다.
[600ms]
[confident] Microsoft 클라우드 보안 벤치마크는 기본으로 켜져 있고, 추가 규정 준수 평가에는 Defender CSPM이 필요합니다.

## Step 6 · Attack paths and cloud security explorer

[curious] Defender CSPM은 내 클라우드를 그래프로 그려서, 공격자가 중요한 자산까지 갈 수 있는 경로를 찾아냅니다.
[600ms]
[impressed] 그리고 그 경로를 끊어 주는 해결책을 제안해서, 가장 중요한 한 가지부터 고칠 수 있게 해 줍니다.
[600ms]
[serious] 공격 경로 분석과 클라우드 보안 탐색기는 유료 Defender CSPM 플랜에 포함되고, 에이전트 없는 스캔이나 Defender for Servers 취약점 평가가 필요합니다.

## Step 7 · One Defender plan per workload

[calm] 워크로드 보호는 플랜별로 켭니다. 플랜마다 리소스 종류 하나에 대한 위협 탐지가 추가됩니다.
[600ms]
[confident] 서버, 스토리지, 데이터베이스, 컨테이너, AI 서비스 등 각각 자기 플랜이 있습니다. Defender for Servers는 Plan 1과 Plan 2가 있습니다.
[600ms]
[reassuring] 구독에서 플랜을 켜면, 그 구독 전체의 해당 리소스 종류가 보호 대상이 됩니다.

## Step 8 · Alerts, incidents and your SOC

[calm] 켜 둔 플랜은 심각도 순으로 경고를 띄우고, 영향을 받는 리소스와 해결 단계를 함께 보여 줍니다.
[600ms]
[confident] Defender for Cloud는 관련된 경고를 하나의 인시던트로 묶어서, 팀이 경고 더미가 아니라 하나의 이야기로 볼 수 있게 합니다.
[600ms]
[impressed] 경고는 Microsoft Sentinel 같은 SIEM이나 SOAR, ITSM 도구로 스트리밍할 수 있고, Defender 포털에도 표시됩니다.

## Step 9 · Enable once, cover everything

[confident] 플랜은 구독 단위로 켜면, 그 구독의 리소스가 보호됩니다.
[600ms]
[curious] 관리 그룹 전체를 대상으로 하려면, Defender for Cloud를 켜 주는 기본 제공 Azure Policy를 할당하고 수정 작업도 함께 만드세요.
[600ms]
[reassuring] 에이전트 없는 스캔은 컴퓨터마다 에이전트를 설치할 필요가 없습니다. Defender CSPM과 Defender for Servers Plan 2에 포함됩니다.

## Step 10 · One view across clouds

[calm] 내 환경이 Azure만 있는 경우는 드뭅니다. AWS 계정과 GCP 프로젝트를 연결하고, 온프레미스 서버는 Azure Arc로 추가하세요.
[600ms]
[confident] Defender for Cloud는 AWS와 GCP에 에이전트 없는 커넥터를 쓰기 때문에, Azure 밖에서도 보안 상태 인사이트와 워크로드 보호를 받을 수 있습니다.
[600ms]
[impressed] 모든 게 한곳에서 보입니다.

## Step 11 · What you pay for

[calm] 기본 보안 상태 기능은 무료입니다. 고급 보안 상태 기능과 워크로드 플랜은 유료이고, 요금은 켜 둔 플랜과 리소스에 따라 청구됩니다.
[600ms]
[reflective] 가격은 자주 바뀌기 때문에 일부러 여기에 적지 않았습니다. 가격 페이지와 비용 계산기를 이용하세요.
[600ms]
[encouraging] 새 구독은 Defender for Cloud를 30일 동안 무료로 써 볼 수 있습니다. 다만 Defender for Storage의 악성 코드 검사는 첫날부터 요금이 청구됩니다.

## Step 12 · Which plan protects it?

[curious] 이제 직접 해 볼 차례입니다. 리소스 유형을 고르면, 어떤 Defender 플랜이 보호하는지 볼 수 있습니다.
[600ms]
[calm] 그 플랜이 무엇을 탐지하는지, 그리고 해당 리소스에 대한 권장 사항 예시도 볼 수 있습니다.
[600ms]
[confident] 플랜마다 그 플랜을 켜라는 권장 사항이 따로 있습니다. 화면에 나온 결과는 전체 목록이 아니라 예시 하나일 뿐입니다.

## Step 13 · Posture, protection, response

[calm] 취약점을 찾아 고치고, 위협을 탐지해 대응하고, 이 모든 걸 대규모로 켜 보세요.
[600ms]
[confident] 그런 다음 시험의 측정 기술과 비교해서 스스로 점검해 보세요. A Z 700 가이드에는 보안 점수, 공격 경로 분석, 클라우드 보안 탐색기가 나옵니다.
[600ms]
[reassuring] A Z 305에는 규정 준수 관리가 포함되고, A Z 104는 거버넌스와 모니터링을 다룹니다. 시험은 바뀔 수 있으니 최신 학습 가이드를 확인하세요.
