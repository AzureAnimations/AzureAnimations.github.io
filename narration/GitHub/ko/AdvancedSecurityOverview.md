# Narrator Script — GitHub · GitHub Advanced Security: Three Suites, One Picture

**Source animation:** [AdvancedSecurityOverview.html](../../../journeys/GitHub/AdvancedSecurityOverview.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · One repo, three different risks

[calm] Maya가 맡은 Contoso 저장소에는 문제가 세 가지 있습니다. 유출된 키, 오래된 패키지, 그리고 안전하지 않은 코드입니다.
[600ms]
[concerned] 그런데 문제가 있습니다. 세 가지를 한꺼번에 찾아 주는 검사는 없습니다. 문제마다 필요한 검사 방식이 다르기 때문입니다.
[600ms]
[curious] 그렇다면 GitHub는 이것들을 어떻게 다룰까요? 이번 수업에서 그 구성을 정리해 봅니다.

## Step 2 · Three suites, three questions

[calm] GitHub는 보안 도구를 세 가지 스위트로 묶고, 스위트마다 저장소에 대한 질문 하나에 답합니다.
[600ms]
[confident] Secret Protection은 비밀이 유출됐는지 묻습니다. Supply Chain Security는 내 패키지가 안전한지 묻고요. Code Security는 내가 작성한 코드가 안전한지 묻습니다.
[600ms]
[reassuring] G H 500 학습 가이드도 이 세 가지 이름을 씁니다. Supply Chain Security는 예전에 Dependabot과 의존성 검토라고 부르던 묶음입니다.

## Step 3 · The Security tab: where alerts live

[calm] 저장소의 경고는 모두 한 탭에 모입니다. 이것이 Security 탭이고, 사이드바에 경고 유형과 보고 도구가 나열됩니다.
[600ms]
[confident] Dependabot, 코드 스캔, 비밀 스캔 경고가 한곳에 모여 있습니다. 보안 정책과 보안 권고는 보고를 맡습니다.
[600ms]
[curious] GitHub dot com에서는 이 탭 이름이 Security and quality입니다. 예전 문서에서는 그냥 Security라고 부릅니다.

## Step 4 · Public, private, licensed: what you get

[calm] 무엇을 쓸 수 있는지는 저장소에 따라 다릅니다. 어떤 플랜에서든 쓸 수 있는 기능도 있는데, 의존성 그래프와 Dependabot 경고가 그렇습니다.
[600ms]
[confident] 퍼블릭 저장소는 비밀 스캔, 푸시 보호, 코드 스캔, Autofix까지 더 많은 기능을 무료로 쓸 수 있습니다.
[600ms]
[serious] 프라이빗 저장소는 나머지 기능을 쓰려면 Secret Protection 또는 Code Security 라이선스가 필요합니다. 가격은 여기서 다루지 않습니다.

## Step 5 · How each suite finds problems

[curious] 스위트마다 문제를 찾는 방식이 다릅니다.
[600ms]
[confident] 비밀은 패턴으로 찾고, 취약한 패키지는 GitHub Advisory Database와 대조해서 찾습니다. 안전하지 않은 코드는 CodeQL 쿼리로 찾습니다.
[600ms]
[impressed] 비밀 스캔은 Git 기록 전체를 검사하고, Dependabot은 새 보안 권고가 올라오거나 의존성 그래프가 바뀌면 경고를 보냅니다.

## Step 6 · Stop it early, or check before merge

[calm] 접근 방식은 두 가지입니다. 예방 우선 방식은 푸시 보호가 푸시를 막는 것처럼, 문제를 원천에서 차단합니다.
[600ms]
[confident] 게이트 방식은 일단 작업을 받아들인 다음, 병합 전에 풀 리퀘스트에서 검사합니다. 코드 스캔 병합 보호와 의존성 검토가 여기에 해당합니다.
[600ms]
[reassuring] 좋은 팀은 둘 다 씁니다. G H 500 시험에서는 이 두 가지를 비교하라는 문제가 나옵니다.

## Step 7 · Security overview: risk and coverage

[calm] 보안 개요는 조직 전체를 한눈에 보는 화면입니다.
[600ms]
[curious] 위험 보기에서는 모든 유형의 경고가 어디에 쌓이는지 볼 수 있고, 적용 범위 보기에서는 어떤 저장소가 어떤 기능을 쓰는지 볼 수 있습니다.
[600ms]
[confident] 그래서 아직 보호 기능을 하나도 켜지 않은 저장소를 바로 찾아낼 수 있습니다. 여기 나오는 숫자는 예시로 만든 값입니다.

## Step 8 · Who does what

[calm] 경고 하나에 담당자는 세 명입니다. 개발자인 Maya는 코드를 고칩니다.
[600ms]
[confident] 보안 관리자인 Noor는 모든 저장소의 경고를 보고 추적합니다. 관리자인 Ravi는 기능을 켜고 규칙을 정합니다.
[600ms]
[reassuring] 보안 관리자는 실제로 있는 조직 역할입니다. 기능은 소유자와 저장소 관리자가 구성합니다.

## Step 9 · Who sees alerts, and delegated bypass

[calm] 적절한 권한이 있는 사람만 경고를 볼 수 있습니다. 쓰기, 유지 관리, 관리자 권한을 가진 사람과 조직 소유자입니다. 설정에서 사람을 더 추가할 수도 있습니다.
[600ms]
[curious] 이번에는 푸시 보호입니다. 위임된 우회를 쓰지 않으면, 기여자가 아무에게도 묻지 않고 스스로 차단을 우회할 수 있습니다.
[600ms]
[confident] 위임된 우회를 쓰면, 우회하려면 검토자가 요청을 승인하거나 거부해야 합니다.

## Step 10 · Dismissing an alert: reason and note

[calm] 고치지 않을 경고를 닫아야 할 때가 있습니다. 그럴 때는 실제 사실에 맞는 사유를 고르세요.
[600ms]
[confident] 그리고 메모를 남기세요. 메모는 경고 타임라인에 남아서, 감사인이 이유를 확인할 수 있습니다.
[600ms]
[serious] 그리고 커밋된 비밀은 경고를 닫은 뒤에도, 폐기하기 전까지는 유출된 것으로 봐야 한다는 점을 기억하세요.

## Step 11 · A secure SDLC on one page

[calm] 보안은 계획부터 모니터링까지 모든 단계에 걸쳐 있고, 단계마다 세 스위트의 기능이 하나씩 있습니다.
[600ms]
[confident] 저장소를 본격적으로 쓰기 전에는 비밀을 차단하고 패키지를 최신으로 유지하세요. 병합 전에는 스캔하고, 검토하고, 게이트로 막으세요.
[600ms]
[reassuring] 병합한 뒤에는 경고, 보안 개요, 캠페인을 지켜보세요. 다섯 단계는 설명을 위한 틀입니다.

## Step 12 · Recap: pick the suite for each risk

[calm] 다시 Maya의 저장소로 돌아가 봅시다. 위험마다 맞는 스위트가 있고, 스위트마다 고유한 검사기와 경고가 있습니다.
[600ms]
[confident] 유출된 키는 Secret Protection, 오래된 패키지는 Supply Chain Security, 안전하지 않은 코드는 Code Security가 맡습니다.
[600ms]
[proud] 이것으로 G H 500의 첫 번째 기술 영역인 GitHub 보안 스위트, 기능, 에코시스템을 마칩니다.
