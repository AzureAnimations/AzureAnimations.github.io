# Narrator Script — GitHub · Administer Copilot: Policies, Audit Logs and the REST API

**Source animation:** [CopilotAdminAndPolicies.html](../../../journeys/GitHub/CopilotAdminAndPolicies.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Contoso Rolls Out Copilot

[calm] Contoso는 개발자 200명에게 Copilot을 도입하려고 합니다. 조직 소유자인 Ravi는 누구에게든 좌석을 주기 전에 답해야 할 질문이 네 가지 있습니다.
[600ms]
[curious] 어떤 플랜을 쓸까? 누구에게 좌석을 주고, 어떤 기능을 켤까? 그리고 이 모든 걸 어떻게 지켜볼까?
[600ms]
[confident] 이 질문들이 바로 Copilot 관리자가 하는 진짜 일이고, 이번 수업에서는 질문마다 단계를 하나씩 할애합니다.

## Step 2 · Plans for Teams

[calm] Copilot Business와 Copilot Enterprise는 팀을 위한 두 가지 플랜입니다.
[600ms]
[confident] 둘 다 조직에서 중앙 관리와 정책 제어를 할 수 있습니다. Enterprise는 Business에 엔터프라이즈급 기능을 더했고, 크레딧 풀도 더 큽니다.
[600ms]
[reassuring] Free, Pro, Pro plus, Max는 개인 계정용 개인 플랜입니다. 가격은 바뀌니 최신 금액은 GitHub 플랜 페이지에서 확인하세요.

## Step 3 · Assign Seats

[calm] 조직 소유자는 조직의 Copilot Access 설정에서 누가 Copilot을 쓸 수 있는지 정합니다.
[600ms]
[confident] 현재와 앞으로의 모든 멤버에게 좌석을 줄 수도 있고, 선택한 사람과 팀에게만 줄 수도 있습니다. 파일을 업로드해서 지정하는 것도 가능합니다.
[600ms]
[serious] 좌석 요금은 처음 사용할 때가 아니라, 접근 권한을 부여한 시점부터 청구된다는 점을 기억하세요.

## Step 4 · Feature Policies

[curious] 정책은 좌석이 있는 모든 사람에게 Copilot 기능을 켜거나 끕니다. 채팅, 에이전트 모드, 명령줄, 코드 리뷰 등이 해당합니다.
[600ms]
[confident] 기능마다 소유자가 설정하는 스위치가 하나씩 있습니다. 코드 리뷰는 정책을 켜야 쓸 수 있습니다. 공개 코드와 일치하는 제안은 허용하거나 차단할 수 있습니다.
[600ms]
[serious] 그리고 엔터프라이즈 소유자가 이미 정책을 설정했다면, 조직은 그 정책을 덮어쓸 수 없습니다.

## Step 5 · Availability Across IDEs and GitHub.com

[calm] 정책은 해당 기능이 있는 곳에서만 의미가 있습니다. 그러니 각 정책을 사람들이 Copilot을 쓰는 곳과 하나씩 대조해 보세요. IDE, GitHub dot com의 클라우드, 명령줄, 코드 리뷰입니다.
[600ms]
[curious] 이 네 곳 중 공개 코드 필터는 IDE에서만 동작합니다. MCP 서버와 콘텐츠 제외는 네 곳 모두에서 동작합니다.
[600ms]
[reassuring] 기억할 규칙은 이것입니다. 모든 정책이 모든 곳에 적용되는 것은 아닙니다.

## Step 6 · Enterprise Over Organization

[calm] 정책은 엔터프라이즈에서 먼저 정합니다. 거기서 활성화나 비활성화로 정한 값은 조직이 바꿀 수 없습니다.
[600ms]
[curious] 조직이 결정하도록 두면 선택권이 아래로 넘어갑니다. 엔터프라이즈 설정 세 가지를 직접 눌러 보고, Contoso에서 Copilot 명령줄을 끄려는 Ravi의 바람이 이기는지 확인해 보세요.
[600ms]
[serious] 두 조직에서 좌석을 받은 사람이라면 보통 제한이 가장 적은 설정이 적용되지만, 민감한 정책은 가장 제한적인 설정을 따릅니다.

## Step 7 · Content Exclusions at Org Level

[calm] 소유자는 선택한 파일과 저장소를 Copilot이 보지 못하게 할 수 있습니다. 같은 제어가 세 단계에 있습니다.
[600ms]
[confident] 저장소 관리자, 조직 소유자, 엔터프라이즈 소유자가 각각 설정할 수 있습니다. Copilot Business나 Copilot Enterprise가 필요합니다.
[600ms]
[reassuring] 변경 내용은 감사 로그에 기록되니 이력이 남습니다. 규칙을 쓰는 방법은 개인정보 보호 수업에서 다룹니다.

## Step 8 · The Audit Log

[calm] 감사 로그에는 좌석과 정책처럼 Copilot 플랜에 생긴 변경이 기록됩니다.
[600ms]
[curious] Copilot 이벤트를 검색한 다음, 이벤트를 열어 누가 무엇을 했는지 확인하세요. actor로 검색하면 GitHub에서의 에이전트 활동도 볼 수 있습니다.
[600ms]
[serious] 프롬프트나 다른 클라이언트 세션 데이터는 들어 있지 않고, 이벤트는 제한된 기간만 보관됩니다. 오래 보관하려면 로그를 SIEM으로 스트리밍하세요.

## Step 9 · Subscriptions by REST API (Preview)

[calm] 조직 소유자는 REST API로 좌석을 추가하고 제거할 수 있습니다.
[600ms]
[confident] POST 요청은 사용자를 추가하고, DELETE 요청은 해당 사용자의 좌석을 취소 대기 상태로 바꿉니다.
[600ms]
[serious] 이 엔드포인트는 공개 미리 보기 단계라서 바뀔 수 있습니다. 화면의 토큰은 자리 표시용입니다. 실제 토큰은 코드나 슬라이드에 절대 붙여 넣지 마세요.

## Step 10 · Billing and Usage

[calm] 미터가 두 개 나란히 돌아갑니다. 좌석은 그 좌석을 할당한 조직이나 엔터프라이즈에, 매월 청구 주기마다 청구됩니다.
[600ms]
[curious] AI 크레딧은 다릅니다. 채팅, 명령줄, 클라우드 에이전트 등은 사람들이 Copilot을 쓰는 만큼 공유 풀에서 차감됩니다.
[600ms]
[confident] 예산을 설정하면 사용자, 비용 센터, 조직, 엔터프라이즈별로 지출 한도를 정할 수 있습니다. 이 단계에서는 가격이 아니라 방식을 보여 드립니다.

## Step 11 · Recap: The Admin’s Weekly Checklist

[calm] Copilot 관리는 정해진 루틴입니다. 좌석을 확인하세요. 누가 좌석을 갖고 있고, 누가 실제로 쓰고 있는지 봅니다.
[600ms]
[confident] 정책은 엔터프라이즈를 먼저, 그다음 조직을 확인하세요. 그리고 기록을 검토합니다. 감사 로그와 청구 내역입니다.
[600ms]
[proud] 이것으로 조직 전체의 설정과 정책 관리에 관한 G H 300 기술을 마칩니다. 체크리스트는 학습 보조 자료로 활용하세요.
