# Narrator Script — Architect · Design access: roles, PIM and access reviews

**Source animation:** [IdentityGovernance.html](../../../journeys/Architect/IdentityGovernance.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/overview>
- <https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview>
- <https://learn.microsoft.com/azure/key-vault/general/overview>
- <https://learn.microsoft.com/azure/key-vault/managed-hsm/overview>
- <https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure>
- <https://learn.microsoft.com/entra/id-governance/access-reviews-overview>
- <https://learn.microsoft.com/entra/id-governance/entitlement-management-overview>
- <https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows>
- <https://learn.microsoft.com/entra/id-governance/identity-governance-overview>

---

## Step 1 · Contoso: who has access to what?

[calm] Contosoのアクセス権は、明確な計画のないまま増えてきました。管理者が強力なロールを持ち、すでに退職した契約者のアクセスも残っています。
[600ms]
[curious] 問題は単にサインインできるかどうかではなく、その後どこにアクセスできるかです。
[600ms]
[reassuring] ロールのスコープ、ワークロードの認証情報、特権アクセス、権限の継続的なレビューを分けて管理します。

## Step 2 · Azure roles vs Microsoft Entra roles

[calm] Azure roles govern Azure resources, while Microsoft Entra roles govern directory capabilities and administration.
[600ms]
[curious] リソース階層において、ロールの割り当てはプリンシパル、ロール定義、そして適用される範囲を組み合わせたものです。
[600ms]
[reassuring] 必要最小限のロールを、必要最小限のスコープで割り当てます。継承された権限によって、実際に使えるアクセスが広がる場合がある点にも注意してください。

## Step 3 · Workloads: use a managed identity

[calm] ストアフロントは注文データベースとストレージへのアクセスを必要としており、コードに埋め込まれた別のパスワードではありません。
[600ms]
[curious] マネージド IDはアプリケーションにアイデンティティを与え、ロールの割り当てによって各宛先へのアクセス権が与えられます。
[600ms]
[reassuring] システム割り当てのアイデンティティは1つのリソースのライフサイクルに従います。ユーザー割り当てのアイデンティティは別途管理され、リソース間で共有することができます。

## Step 4 · Secrets, keys and certificates

[calm] ストアフロントには、秘密、暗号鍵、証明書など、いくつかの機密アイテムがまだ保管されています。
[600ms]
[curious] Key Vaultはこれらのアイテムを管理管理下に置き、必要な鍵のセキュリティの種類によって保護オプションが異なります。
[600ms]
[reassuring] 保護モデルと認可の方法を慎重に選び、Key Vault を資格情報の無制限な置き場として扱わないようにします。

## Step 5 · Privileged access: eligible, not always on

[calm] 管理者の常時アクセスは、管理作業が行われていなくてもリスクを生みます。
[600ms]
[curious] 特権ID管理では、承認や多要素認証などの要件を伴い、適格管理者が必要に応じてロールを有効化します。
[600ms]
[reassuring] 時間枠が閉じる様子を見てください。特権は終了し、常時有効な権限にはなりません。

## Step 6 · Access reviews: does anyone still need this?

[calm] 人が仕事を変えたりプロジェクトが終わったとき、許可は元の目的を超えて長く残ります。
[600ms]
[curious] アクセスレビューは、責任ある査読者に各課題がまだ必要かどうかを尋ね、その結果を適用します。
[600ms]
[reassuring] これを定期的な判断にすることで、Contoso は、過去の付与をすべて誰かが覚えていることに頼らず、不要になったアクセスを削除できます。

## Step 7 · Entitlement management: access packages

[calm] パートナーは、1つのプロジェクトに対して複数の関連リソースを必要としており、無関係なアクセスリクエストの集合ではありません。
[600ms]
[curious] アクセスパッケージは、必要なグループ、アプリケーション、サイトにリクエストポリシー、承認者、有効期限をまとめてまとめます。
[600ms]
[reassuring] Contosoは所有権と承認を目に見えるまま、適切な期間パッケージを提供できます。

## Step 8 · Lifecycle workflows: joiner, mover, leaver

[calm] 入社から役割の変更、そして組織を離れるまでの従業員ライフサイクルを追いましょう。
[600ms]
[curious] ライフサイクルワークフローは、設定条件とアイデンティティ属性が一致すると関連するアクセスタスクを実行します。
[600ms]
[reassuring] 重要なのは再現性です。手作業のチェックリストだけに頼らず、適切なタイミングで適切なタスクが実行されます。

## Step 9 · All in one: which tool answers which question

[calm] 完成した地図はアクセス設計を複数の質問に分け、それぞれに異なるツールで答えます。
[600ms]
[curious] ロールは権限を定義し、管理されたアイデンティティはアプリケーションの秘密を回避し、Key Vaultは残された機密資料を保護します。
[600ms]
[reassuring] PIM、レビュー、アクセスパッケージ、ライフサイクルワークフローは、アクセス開始、チェック、終了を制御します。

