# Narrator Script — Architect · Design governance: structure, policy and compliance

**Source animation:** [DesignGovernance.html](../../../journeys/Architect/DesignGovernance.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/governance/management-groups/overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging>
- <https://learn.microsoft.com/azure/governance/policy/concepts/effect-basics>
- <https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard>
- <https://learn.microsoft.com/purview/compliance-manager>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/>

---

## Step 1 · One subscription, no structure

[calm] Contosoはストアフロント、データベース、実験を一つのサブスクリプションにまとめ、共有構造は持たない。
[600ms]
[curious] その隣にある3つの問題に注目してください:生産リスク、不明瞭なコスト、そしてチームごとに異なるルールです。
[600ms]
[reassuring] 設計は、所有権、分離、ポリシーを置く場所を明確にすることから始まります。

## Step 2 · Management groups: rules that flow down

[calm] 経営グループは、会社の組織図をコピーするのではなく、共有するルールで購読を整理します。
[600ms]
[curious] 方針に従ってツリーを下ろしてください:サブスクリプションは上に割り当てられたガードレールを継承します。
[600ms]
[reassuring] 階層は浅く保ち、開発と本番のサブスクリプションは適切な共有グループの下に分けて管理しましょう。

## Step 3 · Subscriptions: billing, limits and isolation

[calm] サブスクリプションは請求、制限、隔離の境界線を作っており、これら3枚のカードが示しています。
[600ms]
[curious] Contosoは、予算やアクセス要件が異なるため、注文プラットフォーム、開発作業、実験を分離しています。
[600ms]
[reassuring] 境界が変わる必要がある場合に新しいサブスクリプションを選択してください。単に別のリージョンが関わっているからではなく。

## Step 4 · Resource groups: one shared lifecycle

[calm] これらのアプリケーションリソースは同時にデプロイ、更新、削除されるため、リソースグループを共有しています。
[600ms]
[curious] 共有ネットワークはライフサイクルが異なるため、独自のグループにとどまります。
[600ms]
[reassuring] アプリケーショングループを削除するとリソースが一緒に失われますが、別に管理されるネットワークは独自のライフサイクルを維持します。

## Step 5 · Tags: decide what, then let policy apply them

[calm] タグは、機能、分類、会計、ビジネス目的などのカテゴリーで資源を記述します。
[600ms]
[curious] リソースグループタグに注意してください:その下のリソースには自動的に表示されません。
[600ms]
[reassuring] ContosoはAzure Policyを使って必要なタグをコピーし、タグ付け戦略をプラットフォームが強制できるものに変えます。

## Step 6 · Azure Policy: pick the effect for each rule

[calm] Contosoのベースラインは、複数のポリシー定義を一つの取り組みにまとめ、共有範囲で割り当てています。
[600ms]
[curious] audit は問題を報告し、deny はブロックし、modify はプロパティを変更し、deployIfNotExists は不足している関連リソースを追加します。
[600ms]
[reassuring] すべてのコンプライアンス問題をブロックされたデプロイメントとして扱うのではなく、ルールに合った効果を選択してください。

## Step 7 · Compliance: who answers which question

[calm] これら2つのツールは、仕事が関連しているにもかかわらず、異なるコンプライアンスの質問に答えます。
[600ms]
[curious] Microsoft Defender for CloudはAzureリソースをコントロールに対して評価し、Microsoft Purview Compliance Managerは評価や改善行動を組織します。
[600ms]
[reassuring] Contosoは技術的な発見の視点と、改善に責任を持つ人々を追跡する方法の両方を必要としています。

## Step 8 · All in one: Contoso’s landing zone

[calm] こちらはContosoのガバナンス設計を一つのランディングゾーンにまとめたもので、それぞれのスコープが異なる役割を果たしています。
[600ms]
[curious] 管理グループは共通のルールを持ち、サブスクリプションは境界を分け、リソースグループはライフサイクルに従い、タグは所有権を説明します。
[600ms]
[reassuring] ポリシーやコンプライアンスツールは、これらの決定を執行可能かつ審査可能にします。次に、この遺産を利用する人々をつなげましょう。

