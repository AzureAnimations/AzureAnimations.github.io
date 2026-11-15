# Narrator Script — Architect · Keep data available: HA and DR for databases and storage

**Source animation:** [DataAvailability.html](../../../journeys/Architect/DataAvailability.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-sql/database/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/managed-instance/business-continuity-high-availability-disaster-recover-hadr-overview>
- <https://learn.microsoft.com/azure/azure-sql/database/automated-backups-overview>
- <https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview>
- <https://learn.microsoft.com/azure/cosmos-db/high-availability>
- <https://learn.microsoft.com/azure/postgresql/backup-restore/concepts-business-continuity>
- <https://learn.microsoft.com/azure/storage/common/storage-redundancy>

---

## Step 1 · Zone redundancy: survive a zone failure

[calm] 一つの可用性ゾーンで障害が発生しても、注文データベースは利用できる必要があります。
[600ms]
[curious] ゾーン冗長性は、データベース保護をリージョン内のゾーンに分散させ、残った配置がアプリケーションに引き続きサービスを提供します。
[600ms]
[reassuring] これはゾーンの失敗に対処するものです。それだけでリージョン災害の第二のリージョンを作るわけではありません。

## Step 2 · Across regions: geo-replication or failover group?

[calm] リージョン全体の障害に備えるには、同じリージョン内の別ゾーンではなく、別リージョンにデータベースのコピーが必要です。
[600ms]
[curious] ジオレプリケートされたデータベースと、データベースを調整し安定したリスナーエンドポイントを提供するフェイルオーバーグループを比較してください。
[600ms]
[reassuring] フェイルオーバーユニットとアプリケーション接続のアプローチを慎重に選び、まだレプリケートされていない変更を考慮してください。

## Step 3 · Backups: pick the restore for the problem

[calm] データベースのバックアップパスは、既に可用性レプリカが設置されていても、異なる復旧の質問に答えます。
[600ms]
[curious] ポイントインタイム復元はミス以前に戻り、長期保持は古い復元履歴を保持し、ジオリストアはリモートバックアップコピーを使用します。
[600ms]
[reassuring] バックアップとすぐに利用可能なスタンバイを混同するのではなく、インシデントに合った復元を選びましょう。

## Step 4 · SQL Server on VMs: availability groups

[calm] 仮想マシン上のSQL ServerはContosoに制御を与えますが、可用性設計の責任もContosoに委ねます。
[600ms]
[curious] 可用性グループはデータベースのレプリカを使用し、フェイルオーバークラスターインスタンスはインスタンスレベルで保護します。
[600ms]
[reassuring] どのデータベースをまとめてフェールオーバーさせるかを決め、レプリカの運用、監視、保守も計画します。

## Step 5 · Azure Cosmos DB: replicate and choose consistency

[calm] Azure Cosmos DBはリージョン間でコピーを配置できますが、書き込み設定はデザインを変更します。
[600ms]
[curious] 単一の書き込みリージョンと複数の書き込みリージョンは異なるフェイルオーバーや競合の考慮事項を持ちます。
[600ms]
[reassuring] 可用性、データ損失の期待値、アプリケーションの動作が一致しなければならないため、リージョントポロジーと並んで整合性要件を選択してください。

## Step 6 · PostgreSQL flexible server: layers of recovery

[calm] PostgreSQLのリカバリーは、1つのユニバーサルスイッチではなく複数のレイヤーを使用します。
[600ms]
[curious] ゾーン冗長スタンバイはローカルの可用性に対応し、クロスリージョンのリードレプリカとバックアップは異なる復旧状況に対応します。
[600ms]
[reassuring] 各層の障害境界と復旧の期待値を比較し、データベース全体の設計が目標を満たしていると主張してください。

## Step 7 · Storage redundancy: one decision row

[calm] ストレージ冗長性も故障境界の決定の一つです。データセンター、ゾーン、またはリージョンのいずれかです。
[600ms]
[curious] LRSおよびZRSのコピーをたどり、GRSおよびGZRSの追加リージョン保護をご覧ください。
[600ms]
[reassuring] リモートコピーと読み取れるリモートエンドポイントは同じ約束ではないため、読み取りアクセスオプションは別々に検討してください。

## Step 8 · All in one: pick by RTO and RPO

[calm] 要約はRTOとRPOから始まり、各データサービスを適切な保護層にマッピングします。
[600ms]
[curious] よりタイトなターゲットは通常、より多くの即利用可能な容量を必要としますが、バックアップベースの復旧は異なる経路をたどります。
[600ms]
[reassuring] Contosoは、アプリケーションの計算プラットフォームを選択する前に、ターゲットに対して可用性設計の正当性を説明すべきです。

