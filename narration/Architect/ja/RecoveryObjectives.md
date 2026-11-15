# Narrator Script — Architect · Design for recovery: RTO, RPO and the right tool

**Source animation:** [RecoveryObjectives.html](../../../journeys/Architect/RecoveryObjectives.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/well-architected/reliability/metrics>
- <https://learn.microsoft.com/azure/reliability/concept-service-level-agreements>
- <https://learn.microsoft.com/azure/backup/backup-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-backup-faq>
- <https://learn.microsoft.com/azure/backup/backup-azure-recovery-services-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-vault-overview>
- <https://learn.microsoft.com/azure/backup/backup-azure-immutable-vault-concept>
- <https://learn.microsoft.com/azure/site-recovery/site-recovery-overview>
- <https://learn.microsoft.com/azure/backup/backup-architecture>

---

## Step 1 · Recovery objectives: RTO, RPO and SLA

[calm] 復旧タイムラインが問うのは、可用性に関する一般的な質問ではなく、2つの異なるビジネス上の質問です。
[600ms]
[curious] RPOはContosoがどれだけの最近データを失ってもよいことを説明し、RTOは復旧にかかる時間を示しています。
[600ms]
[reassuring] SLAはサービスのコミットメントであり、ワークロード固有の復旧目標の代替ではありません。

## Step 2 · Tier the workloads by what they cost to lose

[calm] Contosoのワークロードは、最近のデータが停止したり失われたりする際に同じような害を及ぼすわけではありません。
[600ms]
[curious] 4つの階層は、すべての項目に最も厳格な選択肢を買うのではなく、ビジネスの影響に応じて異なる復旧目標を設定しています。
[600ms]
[reassuring] ここでの数字は例示の要件として扱い、各階層を保護と復旧投資の指針として活用してください。

## Step 3 · Azure Backup: restore data from a point in time

[calm] Azure Backupは、データや保護されたワークロードが復旧が必要なときにContosoが復元できる復旧ポイントを保持します。
[600ms]
[curious] 保護対象と一致するボールトとポリシーを選択し、その後バックアップ自体の保護を考慮してください。
[600ms]
[reassuring] 復旧可能な履歴を保持することは、単に別の実行中のコピーを維持するのとは異なる問題を解決します。

## Step 4 · Azure Site Recovery: fail over the workload

[calm] Azure Site Recoveryはワークロードを複製し、災害後にContosoがフェイルオーバーできるようにします。
[600ms]
[curious] 復旧計画は、すべてのコンポーネントを調整せずに起動するのではなく、アプリケーション階層や必要なアクションを順序付けます。
[600ms]
[reassuring] テストフェイルオーバーは、最初の本格的な障害を最初の演習とみなさずに復旧経路をリハーサルできます。

## Step 5 · Backup or replication?

[calm] これら2つの復旧経路は補完的です:復旧ポイントを復元するか、レプリカにフェイルオーバーします。
[600ms]
[curious] バックアップは失われたり破損したりしたデータに対処し、レプリケーションは稼働していた拠点を失った後でもワークロードを復旧させます。
[600ms]
[reassuring] 障害と復旧の対象に基づいて選択してください。2つ目の実行中のコピーは保護されたバックアップ履歴を置き換えるものではありません。

## Step 6 · Choose where the second copy lives

[calm] 2つ目のコピーの位置によって、設計が耐えられる失敗が変わります。
[600ms]
[curious] ローカルコピー、ゾーン間コピー、別のリージョンのコピーは異なる保護境界を提供します。
[600ms]
[reassuring] 距離と復旧オプションをContosoの復旧目標に合わせ、チームが独自のリージョン復旧訓練を行うかどうかも含めて。

## Step 7 · Protect on-premises servers too

[calm] 一部のContosoサーバーはオンプレミスに留まるため、復旧設計もその境界を越えなければなりません。
[600ms]
[curious] この図は、エージェントベースのバックアップ、バックアップサーバー、ワークロードのレプリケーションをAzureに分離しています。
[600ms]
[reassuring] 保護対象のシステムに合ったルートを選び、目標がデータの復元か実行中のワークロードの復旧かを選びます。

## Step 8 · All in one: recover to the objective

[calm] まずビジネス目標から始め、その後、ワークロード層、復旧ツール、コピーロケーションを設計に沿って進めましょう。
[600ms]
[curious] Contosoの答えは、あらゆるワークロードに合った復旧アプローチであり、あらゆる場所に一つのツールを適用するのではありません。
[600ms]
[reassuring] 次のレッスンでは、データレイヤーを障害に備えるデータベースとストレージの可用性機能を追加します。

