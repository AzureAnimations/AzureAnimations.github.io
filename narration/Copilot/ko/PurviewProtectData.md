# Narrator Script — Microsoft 365 Copilot · Microsoft Purview: Protect Your Data

**Source animation:** [PurviewProtectData.html](../../../journeys/Copilot/PurviewProtectData.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/purview/sensitivity-labels>
- <https://learn.microsoft.com/purview/dlp-learn-about-dlp>
- <https://learn.microsoft.com/purview/retention>
- <https://learn.microsoft.com/purview/trainable-classifiers-learn-about>

---

## Step 1 · Data roams

[calm] Contoso 고객 명단은 이메일로 보내고, 공유되고, 복사된 뒤 시간이 지나도록 방치됩니다.
[600ms]
[concerned] Priya에게는 세 가지 답이 필요합니다. 민감한 데이터는 어디에 있는지, 누가 사용할 수 있는지, 그리고 얼마나 오래 보관할지입니다.
[600ms]
[confident] Microsoft Purview 이 질문에 답하는 데이터 보안 및 거버넌스 도구 계열입니다. 이 수업은 보호 측면을 다룹니다.

## Step 2 · Four jobs, one data journey

[curious] Purview Priya질문에 순서대로 답변합니다. 먼저, 데이터를 찾으세요.
[600ms]
[confident] 그 후 표시하고 보호하며, 위험한 공유를 막고, 필요 없을 때 보관하거나 삭제하세요.
[600ms]
[reassuring] 이 직무들은 정보 보호, 데이터 손실 방지, 데이터 수명 주기 관리와 연결되며, 시험 기술 목록에서 볼 수 있는 이름들입니다.

## Step 3 · Find it: classification

[calm] Purview 아이템이 무엇인지 알아야 행동할 수 있습니다.
[600ms]
[confident] 패턴은 신용카드 번호와 같은 것을 포착하고, 훈련 가능한 분류기는 예시를 통해 문서 유형이 어떻게 생겼는지 학습합니다.
[600ms]
[impressed] 항목이 분류되면 라벨, DLP, 보존 모두 그 결과를 조건으로 사용할 수 있습니다.

## Step 4 · Mark it: a label travels with the file

[curious] 민감성 라벨은 파일의 메타데이터에 저장된 도장입니다.
[600ms]
[confident] 저장하거나, 이메일로 보내거나, 공유하거나, Copilot 에게 문의하면 라벨도 보호와 함께 표시됩니다.
[600ms]
[reassuring] Copilot 라벨도 인식합니다. 라벨이 아이템을 암호화하면, 사용자가 복사 권한을 가질 때만 데이터를 반환 Copilot 됩니다.

## Step 5 · What a label can do

[calm] 라벨을 적용하는 것만으로 충분합니다. 이후에는 라벨이 관리자가 선택한 설정을 적용합니다.
[600ms]
[confident] 암호화는 누가 무엇을 얼마나 오래 할 수 있는지를 제어하며, 콘텐츠 표시는 Office 앱에 헤더, 푸터, 워터마크를 추가합니다.
[600ms]
[curious] 라벨은 자동으로 적용되거나 사용자에게 프롬프트로 추천할 수도 있습니다.

## Step 6 · One label, four places

[curious] 라벨의 범위가 어디에 사용될 수 있는지를 결정합니다.
[600ms]
[confident] 그것은 파일, 이메일, 회의, 또는 그룹과 사이트일 수 있습니다.
[600ms]
[serious] 사이트와 그룹의 경우, 라벨은 각 파일을 보호하는 것이 아니라 설정을 통해 컨테이너를 보호하며, 라벨 지원은 먼저 켜야 합니다.

## Step 7 · Publish labels to the right people

[calm] 관리자는 우선순위 순서대로 라벨을 생성하며, 가장 제한적인 라벨, 예를 들어 '고도(Highly Confidential)' 같은 라벨은 맨 아래에 둡니다.
[600ms]
[confident] 그 후 사용자나 그룹에 라벨 정책을 적용해 게시합니다. 사람들은 수동으로 라벨을 붙이거나, Purview 자동으로 붙입니다.
[600ms]
[reflective] 항목은 단 하나의 민감도 라벨만 가질 수 있으며, 변경 사항이 나타나기까지 최대 24시간이 걸릴 수 있습니다.

## Step 8 · Guard it: Data Loss Prevention

[curious] 데이터 손실 방지는 사람들이 민감한 물품을 어떻게 다루는지 관찰합니다.
[600ms]
[confident] 규칙에는 조건과 작업이 들어 있고, 정책은 이를 여러 위치에 적용합니다. 작업은 정책 팁, 차단, 또는 재정의가 가능한 차단일 수 있습니다.
[600ms]
[reassuring] 먼저 시뮬레이션 모드로 배포한 다음 튜닝하는 것이 좋습니다.

## Step 9 · Keep it, or delete it: retention

[calm] 데이터 수명주기 관리는 유지와 삭제 두 가지 작업을 사용합니다.
[600ms]
[confident] 이 둘을 결합하면 세 가지 결과가 나옵니다: 보존만 하기, 삭제만 하기, 또는 보존한 후 삭제하기.
[600ms]
[serious] 설정이 충돌할 경우, 삭제보다 유지가 우선하며, 가장 긴 보존 기간이 승리합니다.

## Step 10 · Retention policy or retention label?

[curious] 유지 정책은 사이트나 우편함처럼 전체 위치에 대해 하나의 규칙을 설정합니다.
[600ms]
[confident] 보존 라벨은 각 항목에 규칙을 지정하고 항목과 함께 따라다니므로, 항목마다 다르거나 처분 검토 또는 레코드 관리가 필요한 경우에 적합합니다.
[600ms]
[reassuring] 한 항목에 민감도 라벨과 보존 라벨을 동시에 붙일 수 있습니다.

## Step 11 · Which Purview capability?

[curious] Contoso가 해야 할 일을 선택하세요.
[600ms]
[confident] 해당하는 기능이 켜지면서 작동 방식이 그림으로 표시됩니다.
[600ms]
[reflective] 대부분의 실제적 필요는 이러한 도구들을 결합하는데, 분류는 라벨, DLP, 유지를 제공합니다.

## Step 12 · Find, mark, guard, keep

[calm] Purview 데이터를 찾아내고, 라벨로 보호하며, 위험한 공유를 막 DLP 데이터 수명주기 관리가 데이터를 유지하거나 삭제합니다.
[600ms]
[confident] 이제 A B 900 평가 기술 목록과 공식 Learn 자료로 스스로 점검해 보세요.
[600ms]
[determined] Purview 이름과 라이선스는 빠르게 바뀌기 때문에, Microsoft Learn에 Purview 문서가 진실의 근원이 됩니다.
