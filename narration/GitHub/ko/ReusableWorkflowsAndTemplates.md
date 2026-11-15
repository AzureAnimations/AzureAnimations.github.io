# Narrator Script — GitHub · Reuse Automation: Starter Workflows, Reusable Workflows and Composite Actions

**Source animation:** [ReusableWorkflowsAndTemplates.html](../../../journeys/GitHub/ReusableWorkflowsAndTemplates.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Twelve repos, twelve copies

[calm] Contoso 저장소마다 똑같은 CI 파일 사본을 하나씩 갖고 있습니다. 같은 아이디어가 열두 군데에 복사되어 있는 셈입니다.
[600ms]
[concerned] 그래서 하나를 고치려면 열두 번을 고쳐야 하고, 머지않아 사본들이 서로 달라집니다.
[600ms]
[curious] 해결책은 사본을 더 만드는 게 아닙니다. GitHub는 자동화를 재사용하는 방법을 세 가지 제공하고, G H 200 시험에서는 이 셋을 구분하라고 묻습니다.

## Step 2 · Starter workflows

[calm] 첫 번째는 스타터 워크플로우입니다. 뼈대 같은 것으로, 선택해서 사본을 커밋하고 나면 그 파일은 그때부터 내 것입니다.
[600ms]
[confident] Actions에서 New workflow를 선택하면 찾을 수 있습니다. 복사한 뒤에는 독립된 파일이니 마음껏 수정하세요.
[600ms]
[reflective] GitHub 문서에서는 이제 이것을 워크플로우 템플릿이라고 부르지만, 스터디 가이드에서는 여전히 스타터 워크플로우라고 합니다. 같은 개념입니다.

## Step 3 · Organization starter workflows

[curious] 조직에서 자체 템플릿을 제공할 수도 있습니다. dot github라는 이름의 저장소 안 워크플로우 템플릿 폴더에 두고, 템플릿마다 속성 파일을 하나씩 만드세요.
[600ms]
[confident] 각 템플릿 옆에는 작은 속성 파일이 있고, 이름과 설명은 필수입니다.
[600ms]
[serious] 공개 범위도 중요합니다. 비공개 dot github 저장소는 비공개 저장소에만 템플릿을 제공하고, 템플릿을 쓰는 사람에게는 읽기 권한이 필요합니다.

## Step 4 · Reusable workflows

[confident] 두 번째는 재사용 가능한 워크플로우입니다. 파이프라인을 중앙 저장소에 한 번만 정의합니다.
[600ms]
[curious] 호출하는 쪽은 uses 줄로 그 파일을 가리키고, 똑같은 코드를 실행합니다. 호출되는 파일은 워크플로우 호출 이벤트를 수신하도록 되어 있어야 합니다.
[600ms]
[serious] 호출이 들어가는 위치를 기억하세요. 호출은 작업 안에 들어가고, 단계 안에는 절대 들어가지 않습니다.

## Step 5 · workflow_call: inputs, secrets, outputs

[calm] 호출되는 워크플로우는 무엇을 받고 무엇을 내보내는지 선언합니다.
[600ms]
[confident] 호출하는 쪽은 with 키로 입력을, secrets 키로 비밀을 보내고, 결과는 needs로 다시 읽어 옵니다.
[600ms]
[intrigued] 입력은 선언한 유형, 즉 문자열, 숫자, 불리언과 맞아야 합니다. 그리고 단계 출력은 먼저 작업 출력에 매핑해야 워크플로우가 반환할 수 있습니다.

## Step 6 · Passing secrets

[calm] 호출된 워크플로우는 내 비밀을 자동으로 볼 수 없습니다. 전달할 비밀은 하나하나 이름을 적어 주세요.
[600ms]
[confident] 아니면 secrets inherit으로 한꺼번에 넘길 수도 있는데, 같은 조직이나 엔터프라이즈 안에서만 동작합니다.
[600ms]
[serious] 비밀은 내가 직접 호출한 워크플로우에만 전달됩니다. A, B, C로 이어지는 체인이라면, C는 B가 넘겨 줘야만 비밀을 받습니다.

## Step 7 · Pin the caller to a version

[calm] at 기호 뒤의 텍스트가 실행할 버전을 정합니다. 브랜치, 릴리스 태그, 커밋 SHA 중 하나입니다.
[600ms]
[curious] 브랜치는 새 커밋이 생길 때마다 움직입니다. 릴리스 태그는 직접 게시하는 버전입니다. 태그와 브랜치 이름이 같으면 태그가 우선합니다.
[600ms]
[confident] 안정성과 보안, 두 가지 모두에서 전체 커밋 SHA가 가장 안전한 선택입니다.

## Step 8 · Composite actions

[calm] 세 번째는 복합 액션입니다. uses 줄 하나 뒤에 여러 단계를 묶어 둡니다.
[600ms]
[confident] 호출하는 쪽 작업 안에서 단계 하나로 실행되고, 메타데이터 파일에 정의합니다. 그 안의 run 단계에는 모두 셸을 지정해야 합니다.
[600ms]
[serious] 자기 저장소에 둘 수도 있고, 내 저장소 안의 폴더에 둘 수도 있습니다. 다만 단계로만 이루어져 있고, 작업은 절대 포함하지 않습니다.

## Step 9 · Starter vs reusable vs composite

[curious] 목표는 같고 도구는 셋입니다. 그럼 어떻게 고를까요?
[600ms]
[confident] 무엇을 공유하고 싶은지에 따라 고르세요. 스타터 워크플로우는 복사해서 내가 소유하는 파일입니다. 재사용 가능한 워크플로우는 작업에서 호출하는 중앙 파이프라인 전체입니다.
[600ms]
[reassuring] 그리고 복합 액션은 몇 개의 단계를 하나로 묶은 것일 뿐입니다.

## Step 10 · Who can call what

[calm] 재사용에는 접근 규칙이 있습니다. 호출하는 쪽은 워크플로우가 있는 저장소에 접근할 수 있어야 하고, Actions 설정에서도 이를 허용해야 합니다.
[600ms]
[confident] 공개 저장소에서 호출하면 공개 워크플로우만 쓸 수 있습니다. 비공개 저장소는 공개와 비공개 워크플로우를 모두 쓸 수 있고, 호출되는 저장소가 비공개라면 Access 설정이 필요합니다.
[600ms]
[concerned] GitHub의 경고가 하나 있습니다. 비공개 저장소를 다른 워크플로우에 열어 주면, 그 저장소의 외부 협업자가 이를 사용한 실행의 로그를 볼 수 있습니다.

## Step 11 · Consume a shared workflow

[calm] 개발자가 풀 리퀘스트에 작은 호출 파일을 추가합니다. 공유 파일을 호출하는 몇 줄이 전부입니다.
[600ms]
[impressed] 그러면 공유 워크플로우가 그 풀 리퀘스트에서 실행되고, 그 작업들이 검사로 표시됩니다.
[600ms]
[serious] 호출하는 파일도 코드이니 꼭 리뷰하세요. at 기호 뒤의 ref와, 어떤 비밀을 넘기는지 확인하세요.

## Step 12 · Recap: pick the right tool

[calm] 비슷해 보이는 개념 세 가지입니다. 스타터 워크플로우는 내가 소유하는 사본이고, 재사용 가능한 워크플로우는 호출해서 쓰는 중앙 워크플로우입니다.
[600ms]
[confident] 그리고 복합 액션은 몇 개의 단계를 하나로 묶은 것입니다.
[600ms]
[proud] G H 200 준비로는 이제 이 셋을 구분하고, 안전하게 쓰고, 템플릿과 재사용 가능한 구성 요소를 자신 있게 관리할 수 있습니다.
