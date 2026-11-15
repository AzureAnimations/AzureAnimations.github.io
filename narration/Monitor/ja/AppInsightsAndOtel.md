# Narrator Script — Monitor · Application Insights and OpenTelemetry

**Source animation:** [AppInsightsAndOtel.html](../../../journeys/Monitor/AppInsightsAndOtel.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-sampling>
- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable>
- <https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview>

---

## Step 1 · A slow checkout across five services

[calm] Contosoの買い物客が「Pay」をタップすると、リクエストは5つの別々のサービスを通っていきます。
[600ms]
[concerned] かかった時間は2.4秒で、遅いのですが、サービスを1つずつ単独で確認すると、どれも正常に見えます。
[600ms]
[curious] では、時間はどこで使われたのでしょうか。このレッスンでは、このチェックアウトのリクエスト1つを追いかけながら、この問いに答えていきます。

## Step 2 · Three signals, one trace ID

[calm] テレメトリには3種類あります。トレースは1つのリクエストを追いかけ、メトリックは時間とともに起きたことを数え、ログはコードが出力した内容を記録します。
[600ms]
[curious] 単独で見ると、どれもただのデータの山です。トレースからそのログへ移れるのは、共通のトレースIDがあるからです。
[600ms]
[impressed] この関連付けで、3つの山が1つのストーリーになります。スパンのIDが、ログの行のIDと一致しているからです。

## Step 3 · The trace ID travels with the request

[calm] トレースの経路を1本たどってみましょう。各サービスは、自分のスパンを追加して、traceparentヘッダーでトレースコンテキストを次に渡します。
[600ms]
[confident] トレースIDは同じままで、親IDだけがホップごとに変わります。こうして、各部分がつながったままになります。
[600ms]
[reassuring] このヘッダーは、W 3 CのTrace Context標準に基づいています。読み書きはOpenTelemetryのライブラリがやってくれます。

## Step 4 · Spans become a timeline

[calm] スパンは、時間を測った1つの操作です。開始時刻、所要時間、親を持っています。
[600ms]
[curious] 1つのトレースのスパンを時間軸に並べると、ウォーターフォールになります。入れ子を見れば、誰が誰を呼んだかが分かります。
[600ms]
[confident] 親のスパンは、待っている子のスパンと少なくとも同じ長さになります。だから、子が遅いと、親も遅くなります。

## Step 5 · OpenTelemetry: instrument once, export anywhere

[calm] OpenTelemetryは、ベンダーに依存しない標準です。インストルメンテーションがテレメトリを作り、SDKが処理します。
[600ms]
[confident] そのあと、エクスポーターが、Application Insightsなどのバックエンドに送ります。
[600ms]
[optimistic] 形式が標準なので、バックエンドを変えるときは、エクスポーターを変えるだけで済みます。アプリを計装し直す必要はありません。

## Step 6 · Auto-instrument first, add manual spans

[calm] まずは自動インストルメンテーションから始めましょう。HTTP、データベース、メッセージングのライブラリは、すでにスパンを作ってくれます。
[600ms]
[confident] 手動のスパンや属性を足すのは、本当に自分たちだけのステップだけにします。たとえば、チェックアウトのコードにある価格ルールです。
[600ms]
[serious] ディストリビューションは、セットアップをまとめて提供してくれます。ただし、同じアプリの中で、2つのディストリビューションを初期化しないでください。

## Step 7 · Connect the app, land the data

[calm] Application Insightsは、アプリケーションのパフォーマンスを監視する、Azure Monitorの機能です。
[600ms]
[confident] 接続文字列で、アプリがテレメトリを送る先を指定します。Application Insightsは、そのデータをLog Analyticsワークスペースに保存します。
[600ms]
[curious] データがワークスペースに入るので、KQLでクエリできます。KQLには、専用のジャーニーがあります。

## Step 8 · Application map: where is the trouble?

[curious] アプリケーションマップは、すべてのコンポーネントを、クラウドロール名で描き、その間の呼び出しも表示します。
[600ms]
[calm] 正常性が一目で分かるので、遅いノードや失敗しているノードが、ほかと比べて目立ちます。
[600ms]
[confident] まずここで、5つのサービスを1つに絞り込みます。次に、そのノードを選んで、失敗やパフォーマンスを掘り下げましょう。

## Step 9 · Read the trace: end-to-end transaction

[calm] 検索で、見たいトランザクションを探します。開くと、エンドツーエンドのビューに、スパンがガントチャートで並びます。
[600ms]
[curious] スパンのバーを選ぶと、その操作が教えてくれることが分かります。所要時間、依存関係の呼び出し、あるいは例外です。
[600ms]
[impressed] これで、2.4秒の犯人が分かります。どのスパンが長いのかが、見えるからです。

## Step 10 · Probe from outside, watch live

[calm] 可用性テストは、複数の場所から、エンドポイントを呼び出します。エンドポイントが失敗したり、遅くなったりすると、アラートが届きます。
[600ms]
[confident] 今の選択肢は、標準テストです。非推奨になったURL pingテストの後継です。
[600ms]
[curious] ライブメトリックは、今まさに起きていることを表示します。このデータは保存されません。ペインを開いている間だけ、ストリーミングされるからです。

## Step 11 · Sampling keeps whole traces, not every trace

[calm] サンプリングは、送るテレメトリの量を減らして、コストを抑えます。
[600ms]
[confident] Application Insightsのサンプラーは、トレース全体をまとめて残すか、まとめて捨てます。だから、残したトレースは、すべて完全な状態のままです。
[600ms]
[serious] 固定レートのサンプリングは、割合を指定して残します。レート制限のサンプリングは、1秒あたりのトレース数に上限を設けます。メトリックはサンプリングされないので、アラートはメトリックで設定しましょう。

## Step 12 · All in one: follow the request

[calm] 遅かったチェックアウトに戻りましょう。サービスをOpenTelemetryで計装して、テレメトリをApplication Insightsに送ります。
[600ms]
[confident] そのあと、アプリケーションマップで問題のあるサービスを見つけて、トランザクションを開いて、遅いスパンを探します。
[600ms]
[proud] こうすれば、遅かったリクエストが、どこで時間を使ったのかが、1リクエストずつ分かります。
