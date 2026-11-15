# Narrator Script — GitHub · Secret Protection: Stop the Leak, Then Clean It Up

**Source animation:** [SecretProtection.html](../../../journeys/GitHub/SecretProtection.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A Token in a Commit: Who Finds It

[calm] Maya가 실수로 토큰을 커밋합니다. 이를 찾아낼 수 있는 곳은 세 군데입니다. 저장소를 읽을 수 있는 사람, GitHub 비밀 스캔, 그리고 공개 저장소라면 토큰 제공자입니다.
[600ms]
[confident] 비밀 스캔은 모든 브랜치에 걸쳐 Git 기록 전체를 검사합니다.
[600ms]
[serious] 여기서 첫 번째 규칙입니다. 커밋된 비밀은 유출된 비밀입니다. 스캔은 그 사실을 알려 줄 뿐, 되돌려 주지는 않습니다.

## Step 2 · What Secret Scanning Looks For

[curious] 무엇을 비밀로 볼지는 네 가지 패턴이 정합니다. 제공자 패턴, 일반 패턴, 직접 작성한 패턴, 그리고 AI로 찾아낸 일반 비밀입니다.
[600ms]
[confident] 코드 말고도 이슈, 풀 리퀘스트, 토론, 위키, 비밀 gist까지 스캔합니다.
[600ms]
[reassuring] 일반 패턴과 AI가 찾은 경고는 오탐이 더 많을 수 있어서, 별도 목록으로 따로 보여 줍니다.

## Step 3 · Turn It On at Three Levels

[calm] 비밀 보호는 저장소 하나에 대해, 저장소 관리자가 설정 페이지에서 켤 수 있습니다.
[600ms]
[confident] 아니면 소유자가 조직이나 엔터프라이즈의 보안 구성으로 여러 저장소에 한꺼번에 켤 수도 있습니다.
[600ms]
[reassuring] 공개 저장소는 비밀 스캔이 자동으로, 무료로 적용됩니다. 비공개 저장소와 내부 저장소는 GitHub 비밀 보호를 활성화해야 합니다.

## Step 4 · Push Protection: Stop the Push

[curious] 푸시 보호를 껐다 켜 보면서 두 결과를 비교해 보세요.
[600ms]
[serious] 꺼져 있으면 비밀이 먼저 들어가고 경고가 뒤따릅니다. 켜져 있으면 푸시가 저장소에 닿기 전에 차단됩니다.
[600ms]
[confident] 푸시 보호는 기본으로 꺼져 있고, 비밀 보호가 필요합니다. 저장소 관리자, 조직 소유자, 보안 관리자, 엔터프라이즈 소유자가 켤 수 있습니다.

## Step 5 · Bypass: Give a Reason or Ask First

[calm] 기본적으로 쓰기 권한이 있는 사람은 누구나 이유를 적고 차단을 우회할 수 있습니다. 테스트에서 사용함, 오탐, 나중에 수정 같은 이유입니다.
[600ms]
[confident] 위임된 우회는 승인 단계를 추가해서, 검토자가 결정해야 푸시가 허용됩니다. 요청은 7일 뒤에 만료됩니다.
[600ms]
[reassuring] 어느 쪽이든 우회는 모두 감사 로그에 기록되고, 저장소를 주시하는 소유자, 보안 관리자, 저장소 관리자에게 이메일로 전송됩니다.

## Step 6 · The Alert: Created, Open, Closed

[calm] 감지된 비밀은 경고가 됩니다. 스캔에서 비밀이 발견되거나 푸시 보호가 우회될 때 만들어집니다.
[600ms]
[serious] 경고는 누군가 닫을 때까지 열려 있고, 닫을 때는 이유와 선택 사항인 댓글을 남기며 누가 언제 닫았는지도 기록됩니다. 닫는 것은 수동이라서, 코드에서 토큰이 사라진 뒤에도 직접 닫아야 합니다.
[600ms]
[curious] 파트너 경고는 제공자에게 전달되고 저장소에는 표시되지 않습니다.

## Step 7 · Validity Checks: Is It Still Live?

[curious] 유효성 검사는 토큰 발급처에 감지된 비밀이 아직 동작하는지 물어보는 것입니다.
[600ms]
[serious] 활성은 아직 악용될 수 있다는 뜻이니 가장 먼저 처리하세요. 비활성은 더 이상 동작하지 않지만, 악용된 적이 없는지 확인해야 합니다.
[600ms]
[calm] 알 수 없음은 지원되지 않거나 확인할 수 없다는 뜻입니다. GitHub 토큰은 기본으로 확인되고, 파트너 패턴은 유효성 검사를 켜야 합니다.

## Step 8 · Respond in Order: Revoke, Then Clean Up

[serious] 커밋된 비밀은 유출된 것으로 보세요. 먼저 폐기하고 교체해서 쓸모없게 만드세요.
[600ms]
[confident] 그다음 로그에서 악용 여부를 확인하고 경고를 닫으세요.
[600ms]
[reassuring] Git 기록 정리는 맨 마지막입니다. 시간이 많이 들고, 토큰을 폐기했다면 대개 필요하지 않습니다.

## Step 9 · Dismiss With Care

[calm] 경고를 닫는 것은 나중에 해명해야 할 수도 있는 결정이니, 솔직한 이유를 고르세요.
[600ms]
[confident] 이유는 오탐, 테스트에서 사용함, 폐기됨, 수정하지 않음입니다. 메모는 꼭 남기세요. 감사에 쓰이도록 경고 타임라인에 기록되기 때문입니다.
[600ms]
[serious] 그리고 닫기 전에 유효성부터 확인하세요.

## Step 10 · Alert Recipients and Path Exclusions

[curious] 유출을 누구에게 알릴지 정하세요. 관리자, 보안 관리자, 일부 소유자, 그리고 커밋 작성자입니다.
[600ms]
[calm] 이메일은 저장소를 주시하고 이메일을 켜 둔 사람에게만 갑니다.
[600ms]
[confident] 비밀 스캔이 건너뛸 경로를 지정할 수도 있습니다. 그 경로의 경고는 설정에 의해 무시됨으로 닫힙니다.

## Step 11 · Custom Patterns: Write, Dry Run, Publish

[calm] 기본 제공 패턴이 내 비밀을 모른다면, 직접 작성하세요. 비밀 형식에 맞는 이름과 정규식이 필요합니다.
[600ms]
[confident] 다음으로 저장하고 드라이 런을 실행하세요. 경고를 만들지 않고 일치 항목만 보여 주니, 패턴을 안전하게 다듬을 수 있습니다.
[600ms]
[optimistic] 그런 다음 게시하고, 원하면 푸시 보호도 켜세요. 조직이나 엔터프라이즈 단위로도 패턴을 정의할 수 있습니다.

## Step 12 · Public vs Private, and What You Can Now Do

[calm] 공개 저장소와 비공개 저장소는 스캔, 경고, 토큰에서 동작이 다릅니다. 내 요금제에 맞는 내용은 문서에서 확인하세요.
[600ms]
[confident] 이제 G H 500 목표에 비춰 스스로 점검해 보세요. 비밀 보호를 구성하고 사용하는 것입니다.
[600ms]
[proud] 비밀 보호를 켜고, 푸시 보호로 유출을 막고, 경고를 분류하고, 올바른 순서로 대응할 수 있습니다.
