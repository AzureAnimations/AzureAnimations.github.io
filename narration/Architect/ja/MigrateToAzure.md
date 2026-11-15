# Narrator Script — Architect · Design a migration to Azure

**Source animation:** [MigrateToAzure.html](../../../journeys/Architect/MigrateToAzure.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/plan-migration>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy>
- <https://learn.microsoft.com/azure/migrate/migrate-services-overview>
- <https://learn.microsoft.com/azure/migrate/concepts-vmware-agentless-migration>
- <https://learn.microsoft.com/azure/dms/dms-overview>
- <https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview>
- <https://learn.microsoft.com/azure/storage/common/storage-migration-overview>
- <https://learn.microsoft.com/azure/cloud-adoption-framework/migrate/>

---

## Step 1 · Plan the move: 120 servers, one method

[calm] Contosoは120台のサーバーを持っていますが、まずは移動ツールではなく移行方法が必要です。
[600ms]
[curious] Cloud Adoption Frameworkのシーケンスは、計画と準備から実行、最適化、そしてソースのリタイアリングに至るまで続きます。
[600ms]
[reassuring] 最初にコピーされたサーバーを成功した移行とみなす前に、ランディングゾーンと導入計画を準備してください。

## Step 2 · Discover and assess with Azure Migrate

[calm] Azure Migrateは、ディスカバリーと評価を通じて構成およびパフォーマンスの証拠を収集します。
[600ms]
[curious] その証拠を使って、準備状況、適切なサイズ、コスト、そして引っ越しに影響を与える依存関係を理解しましょう。
[600ms]
[reassuring] Contosoは、何を移行させ、どのように、どの順番で移転させるかを決める前に、現在の住宅地の正当な全体像を把握する必要があります。

## Step 3 · Dependencies decide the move groups

[calm] 依存関係マップは、サーバーリストだけでは移行波を計画するには不十分である理由を示しています。
[600ms]
[curious] 密接に連結されたコンポーネントは一緒に動き、より緩やかな依存関係は別々の波を許容できます。
[600ms]
[reassuring] まずは、よりシンプルでリスクの低い作業から始め、Contosoが重要な注文プラットフォームを移動する前にプロセスを練習できるようにしましょう。

## Step 4 · Pick a strategy for each workload

[calm] 各ワークロードに対して、目標を達成できる最も軽い変更を使いながら、移行戦略を選択します。
[600ms]
[curious] 一部のワークロードは再ホストや再プラットフォーム化が可能です。他はコード変更や大規模な再設計、あるいは全く移動しないことを正当化することもあります。
[600ms]
[reassuring] 移行先と必要な変更内容は一致していなければなりません。マネージドサービスへの移行をすべて単純なリフト&シフトと呼ぶべきではありません。

## Step 5 · Migrate servers: replicate, test, cut over

[calm] サーバー移行はレプリケーションから始まり、ソースが実行を続ける間、ターゲットを同期させます。
[600ms]
[curious] テスト移行は、実際のカットオーバー前にコピーされたワークロードをテストネットワーク内で検証します。
[600ms]
[reassuring] Contosoが移行したサービスとその依存関係を確認した後にのみ、元のサーバーを廃止してください。

## Step 6 · Migrate the order database

[calm] 注文データベースの機能要件は、移行モードを選択する前に宛先を絞り込みます。
[600ms]
[curious] 仮想マシン上のSQLデータベース、SQLマネージドインスタンス、SQL Serverを比較し、ビジネスが許容するダウンタイムを考慮します。
[600ms]
[reassuring] ターゲットに対してデータベース移行サービスがどの移行モードをサポートしているか確認してください。このツールは正しい宛先を選ぶ必要をなくすわけではありません。

## Step 7 · Migrate files and images

[calm] ファイルや画像の移動は、そのボリューム、ネットワーク、そしてローカルアクセスを継続する必要があるかどうかに依存します。
[600ms]
[curious] Data Box、Storage Mover、AzCopy、Azure File Syncはその決定の異なる部分を担当します。
[600ms]
[reassuring] オフラインのシードとオンライン同期パスは連携できるため、移行は完全にオフラインまたは完全にオンラインである必要はありません。

## Step 8 · Cut over with a way back

[calm] カットオーバープランには、Contosoがどのように成功を証明し、いつ戻すかを明記しなければなりません。
[600ms]
[curious] 移行方法をダウンタイム許容範囲に合わせ、実行可能かノーアクセスのチェックポイントを明確に設定します。
[600ms]
[reassuring] 最適化とソース廃止は検証後に行われ、チームが新しいプラットフォームが合意された要件を満たしていることをチームが確認する前ではありません。

## Step 9 · All in one: the migration route

[calm] ルート全体は、サーバーのコピーからではなく、評価と依存関係の把握から始まります。
[600ms]
[curious] Contoso はワークロードごとに戦略とツールを選び、移行をリハーサルしたうえで、復旧経路を確保して切り替えを行います。
[600ms]
[reassuring] ケーススタディでは、これらの選択肢とアイデンティティ、データ、継続性、インフラを一つのデザインにまとめています。

