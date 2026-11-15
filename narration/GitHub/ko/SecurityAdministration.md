# Narrator Script — GitHub · Security Administration: Roll It Out Across an Organisation

**Source animation:** [SecurityAdministration.html](../../../journeys/GitHub/SecurityAdministration.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Fifty Repositories, No Consistent Setup

[calm] Contoso에는 저장소가 50개 있는데, 팀마다 보안을 제각각 설정했습니다.
[600ms]
[concerned] 보호되는 곳도 있고, 아닌 곳도 있습니다. 팀마다 기능을 손으로 하나씩 켜면 이런 일이 생기고, Ravi는 어디가 어떤지 말할 수 없습니다.
[600ms]
[determined] 그래서 어디서나 통하는 단일한 적용 방식이 필요합니다.

## Step 2 · Enterprise, Organisation, Repository

[calm] 보안 설정은 세 단계에 있습니다. 엔터프라이즈에는 Settings와 Policies 페이지가 있고, 모든 조직에 영향을 줍니다.
[600ms]
[confident] 조직에는 Configurations, 전역 설정과 기본값이 있습니다. 저장소에는 그 저장소에만 적용되는 Advanced Security 설정이 따로 있습니다.
[600ms]
[serious] 상위 단계에서 설정을 강제하면, 아래 단계에서는 바꿀 수 없다는 점을 기억하세요.

## Step 3 · Enterprise Cloud and Enterprise Server

[curious] GitHub Enterprise Cloud와 GitHub Enterprise Server는 같은 보안 기능을 쓰지만, 켜는 위치가 다릅니다.
[600ms]
[confident] Enterprise Cloud에서는 GitHub 웹사이트의 엔터프라이즈 설정과 정책에서 켭니다. 직접 호스팅하는 Server에는 라이선스, Management Console, GitHub Actions가 필요합니다.
[600ms]
[reassuring] Configurations, 룰셋, REST API는 둘 다 같습니다. 일부 옵션은 Server의 이후 버전에서 제공됩니다.

## Step 4 · Security Configurations: One Named Bundle

[confident] 보안 구성은 활성화 설정을 이름 붙여 묶어 놓은 세트입니다. 한 번 만들어 두면 어떤 저장소 그룹에도 적용할 수 있습니다.
[600ms]
[curious] 각 설정은 활성화, 비활성화, 미설정 중 하나입니다. 미설정은 저장소가 지금 가진 설정을 그대로 유지합니다.
[600ms]
[encouraging] 보호 수준이 다른 그룹에는 각각 별도의 구성을 줄 수 있습니다.

## Step 5 · Defaults for New Repositories, and Inheritance

[calm] 기본 구성을 하나 정해 두면 새 저장소가 처음부터 보호됩니다. 새 저장소에만 적용되고, 이전된 저장소에는 적용되지 않습니다.
[600ms]
[confident] 연결된 저장소는 이 설정을 상속합니다. 스위치를 눌러 보세요. 강제하지 않으면 저장소 관리자가 설정을 바꿀 수 있고, 상태는 제거됨이 됩니다.
[600ms]
[serious] 강제하면 설정이 잠기고, 상태는 강제됨이 됩니다.

## Step 6 · Enable All Three Suites in Bulk

[calm] 이제 한꺼번에 적용해 봅니다. 저장소를 선택하거나, 필터에 맞는 항목을 전부 선택하세요.
[600ms]
[confident] 구성을 고르고 적용을 선택하세요. 비밀 보호, 공급망 보안, 코드 보안이 함께 켜집니다.
[600ms]
[reassuring] 그러면 저장소마다 구성 상태가 표시되어 결과를 확인할 수 있습니다. 보관 처리된 저장소도 포함됩니다.

## Step 7 · Default CodeQL Setup or an Approved Workflow

[confident] 기본 설정이 가장 빠른 방법입니다. 워크플로우 파일이 필요 없고, 언어는 GitHub가 골라 줍니다.
[600ms]
[curious] 빌드, 매트릭스, 일정처럼 나만의 워크플로우가 필요할 때만 고급 설정을 선택하세요.
[600ms]
[calm] 대규모로 운영할 때는 그 워크플로우의 한 버전을 승인하고, 저장소 그룹 전체에 배포하세요.

## Step 8 · Policies and Rulesets: Enterprise and Organisation

[calm] 정책은 누가 기능을 켤 수 있는지 정하고, 룰셋은 코드를 병합하기 전에 무엇을 통과해야 하는지 정합니다.
[600ms]
[confident] 둘 다 여러 조직에 한꺼번에 적용할 수 있습니다. 조직 소유자와 보안 관리자는 정책과 상관없이 항상 기능을 켤 수 있습니다.
[600ms]
[encouraging] 안전하게 적용하려면 룰셋을 먼저 Evaluate로 시작해서 영향을 확인한 뒤 Active로 바꾸세요. 예외는 우회 목록으로 처리합니다.

## Step 9 · Roles: Administrator, Security Manager, Developer

[calm] 각 사람에게는 일을 할 수 있는 최소한의 접근 권한만 주세요.
[600ms]
[confident] 관리자는 규칙을 정합니다. 보안 관리자는 조직 전체의 보안 기능과 경고를 운영합니다. 개발자는 저장소에서 작업하며 경고를 수정합니다.
[600ms]
[reflective] 보안 관리자 역할은 조직에 속하며, 소유자가 구성원이나 팀에 부여할 수 있습니다.

## Step 10 · Who Can Dismiss or Reopen an Alert

[calm] 읽기와 Triage 권한으로는 경고를 닫을 수 없습니다. 쓰기, Maintain, 관리자 권한은 닫을 수 있습니다.
[600ms]
[curious] 한 번 더 확인받고 싶다면, 경고 직접 닫기 방지를 켜세요. 그러면 경고를 닫을 때마다 검토자의 승인이 필요합니다.
[600ms]
[confident] 이 설정은 보안 구성 안에 있고, 코드 스캔, 비밀 스캔, Dependabot 각각 따로 있습니다.

## Step 11 · Automate with the REST API and the CLI

[confident] 구성 페이지에서 클릭하는 모든 것은 스크립트로 만들 수 있습니다. GitHub CLI의 api 명령이 REST API를 대신 호출해 줍니다.
[600ms]
[calm] 구성 만들기, 저장소에 적용하기, 새 저장소의 기본값 설정하기를 각각 별도의 호출로 합니다.
[600ms]
[serious] 설정이 강제되어 있으면, 그것을 바꾸려는 API 호출은 성공한 것처럼 보이지만 아무것도 바뀌지 않습니다. 그러니 항상 상태를 다시 읽어서 확인하세요.

## Step 12 · Recap: A Rollout Checklist

[calm] 순서대로 정리해 봅시다. 단계를 고르고, 묶음을 만들고, 기본값을 정하고, 한꺼번에 적용합니다.
[600ms]
[confident] 그다음 CodeQL 설정을 고르고, 정책, 룰셋, 역할, 경고 닫기 규칙으로 관리하세요.
[600ms]
[proud] 마지막으로 REST API로 자동화합니다. 이것이 G H 500 학습 가이드의 보안 관리 영역입니다.
