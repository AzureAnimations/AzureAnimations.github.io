# Narrator Script — Monitor · Log Analytics workspaces

**Source animation:** [LogAnalyticsWorkspaces.html](../../../journeys/Monitor/LogAnalyticsWorkspaces.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-retention-configure>
- <https://learn.microsoft.com/azure/azure-monitor/logs/manage-access>
- <https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap>

---

## Step 1 · Where do my logs live?

[curious] Contosoには、仮想マシンとWebアプリ、Key Vaultがあります。この3つはどれも、ログを書き出します。
[600ms]
[calm] そのログを誰かが使えるようになる前に、答えるべき質問が3つあります。ログはどこにあるのか、誰が読めるのか、そしてコストはいくらかかるのか、です。
[600ms]
[confident] このレッスンでは、この3つすべてに答えます。まずは、ログがどこにあるのかからです。

## Step 2 · Two stores: metrics and logs

[calm] Azure Monitorは、数値をメトリックストアに保存します。メトリックは、一定の間隔でサンプリングされた値です。
[600ms]
[confident] イベントのレコードは、ログに送られます。ログはタイムスタンプ付きのレコードで、Log Analyticsワークスペースに保存して、KQLでクエリします。
[600ms]
[reassuring] Application Insightsのようなインサイトは、よくあるシナリオでは、この違いを意識しなくて済むようにしてくれます。

## Step 3 · A workspace is a box of tables

[calm] Log Analyticsワークスペースは、データの保存先です。ログの種類ごとに、名前付きの列を持つ専用のテーブルに入ります。
[600ms]
[curious] Azureのデータに必要なテーブルは、Azure Monitorが作ります。自分のデータ用には、カスタムテーブルを作ります。
[600ms]
[confident] テーブル名は、大文字と小文字が区別されます。ワークスペース自体には、直接の料金はかかりません。料金は、取り込んで保持するデータに対してかかるからです。

## Step 4 · Three on-ramps feed the workspace

[calm] データがワークスペースに届く入口は、3つあります。Azureのリソースは、診断設定を使います。
[600ms]
[curious] マシンはエージェントを使い、アプリはApplication InsightsかAPIを使います。
[600ms]
[confident] データ収集ルールを使えば、入ってくる途中で、データをフィルターしたり、変換したりできます。この入口にはそれぞれ、専用のレッスンがあります。

## Step 5 · Each table gets a plan

[calm] 各テーブルには、プランがあります。Analytics、Basic、Auxiliaryは、クエリの機能と取り込みコストのバランスが違います。
[600ms]
[confident] プランはテーブルごとに選べるので、ノイズの多いログは、重要なデータより安いプランに置けます。
[600ms]
[serious] BasicとAuxiliaryは、対応しているテーブルでしか使えません。まず、テーブルのリファレンスで確認してください。

## Step 6 · How long do logs stay?

[calm] 新しいデータは、インタラクティブ保持にあり、クエリが速く返ってきます。
[600ms]
[curious] 古いデータは、低コストの長期保持で、合計の保持期間が終わるまで待機します。
[600ms]
[reassuring] 保持期間は、テーブルごとに設定します。ワークスペースのデフォルトもあります。短くしても、データが削除されるまでは少し待つので、間違えても元に戻せます。

## Step 7 · Two doors into the same data

[calm] 同じデータへの入口は、2つあります。ワークスペースからは、読める権限のあるテーブルがすべて見えます。
[600ms]
[curious] 1つのリソースからは、そのリソースのレコードだけが見えます。
[600ms]
[confident] ワークスペースコンテキストは、中央のチームに向いています。リソースコンテキストは、そのリソースを持っていて、そのリソースにだけアクセスできればいいチームに向いています。

## Step 8 · Narrow it down: mode and tables

[calm] アクセス制御モードで、リソースの所有者が自分のログを読めるかどうかが決まります。
[600ms]
[confident] それでも、テーブルレベルのアクセスを使えば、Azureのロールベースアクセス制御で、特定のテーブルをロックできます。
[600ms]
[reassuring] Log Analytics ReaderやLog Analytics Contributorのような組み込みロールで、よくある要件はカバーできます。

## Step 9 · One workspace or several?

[calm] まずは1つのワークスペースで始めて、要件を満たせる最小限の数にしましょう。
[600ms]
[curious] 一番重視したい基準を選ぶと、トレードオフが見えてきます。分けるのは、理由をはっきり言える要件があるときだけです。
[600ms]
[serious] 基準どうしが衝突することもあります。ワークスペースを増やす前に、1つずつよく比べましょう。

## Step 10 · Ingestion drives the bill

[calm] 料金がかかるのは、取り込んだデータと、それを保持する期間です。
[600ms]
[concerned] コストは、監視するリソースの数と、それぞれが集めるデータの量で決まります。
[600ms]
[confident] データ収集ルールの変換は、課金される前にノイズを取り除きます。だから、捨てたレコードには料金がかかりません。

## Step 11 · Guardrails for the spend

[calm] コストの調整は、順番に使いましょう。まずノイズをフィルターして、次にテーブルのプランを選びます。
[600ms]
[confident] そのあと、割引を受けるために、ティアにコミットします。コミットメントティアは、Analyticsログの取り込みに適用されます。
[600ms]
[serious] 日次上限は、最後の安全策としてだけ使いましょう。上限に達すると、収集が止まり、リセットされるまで、監視が見えなくなります。

## Step 12 · All in one

[calm] ログはテーブルに入り、テーブルはLog Analyticsワークスペースの中にあります。
[600ms]
[confident] アクセス、保持期間、コストは、ワークスペース単位か、テーブル単位で設定します。
[600ms]
[proud] この部分が分かれば、Contosoの3つの質問に、自信を持って答えられます。
