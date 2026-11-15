# Narrator Script — Architect · Design logging and monitoring

**Source animation:** [DesignMonitoring.html](../../../journeys/Architect/DesignMonitoring.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview>
- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/data-sources>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-platform-logs>
- <https://learn.microsoft.com/azure/azure-monitor/logs/workspace-design>
- <https://learn.microsoft.com/azure/azure-monitor/platform/diagnostic-settings>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/sentinel/overview>

---

## Step 1 · An outage, and logs in five places

[calm] Contosoの命令は一晩で失敗し、手がかりは複数のテレメトリーに散らばっています。
[600ms]
[curious] プラットフォーム、リソース、アイデンティティ、ゲストOSおよびアプリケーション信号はすべて同じ収集経路を経由して届くわけではありません。
[600ms]
[reassuring] ダッシュボードを選ぶ前に、各ソースが何を生み出すか、そしてそのデータがどのように監視設計に届くかを特定しましょう。

## Step 2 · Azure Monitor: metrics and logs

[calm] Azure Monitorは数値指標と詳細なログレコードの両方に対応しており、これらは2つの補完的なパスとして示されています。
[600ms]
[curious] 指標はContosoが変化を迅速に察知するのに役立ちます。ログは調査に必要な文脈を提供します。
[600ms]
[reassuring] この二つは組み合わせて使います。適切なアラートで症状を検出し、その後ログをたどって何が起きたのかを把握します。

## Step 3 · Log Analytics: one workspace or many?

[calm] Log Analyticsのワークスペースは、Contosoが収集したログをクエリする場所を提供します。
[600ms]
[curious] まずは要件が許す限り少ない作業スペースから始め、それらを分離する理由を詳しく検討してください。
[600ms]
[reassuring] 居住権や所有権、その他の境界は分割を正当化するかもしれませんが、すべてのソースごとにワークスペースを作成することで管理やクエリのオーバーヘッドも発生します。

## Step 4 · Table plans: pay for the query you need

[calm] 各テーブルには計画があり、適切な計画はContosoがどのようにデータを使うかによって異なります。
[600ms]
[curious] 定期的なモニタリングにはAnalytics、トラブルシューティングにはBasic、あまり頻繁に問い合わせられない詳細記録にはAuxiliaryを比較してください。
[600ms]
[reassuring] インジェスメントとクエリのニーズを一緒に考え、単にインジェス価格が安そうだからといってプランを選ぶのではなく、

## Step 5 · Route logs with diagnostic settings

[calm] 診断設定はリソースのログや指標をここに示す宛先にルーティングします。
[600ms]
[curious] ワークスペースは調査をサポートし、ストレージは保持をサポートし、Event Hubsはストリーミング統合をサポートします。
[600ms]
[reassuring] 各コピーが行うジョブごとに宛先を選び、リソースログの収集とルーティングの設定を忘れないでください。

## Step 6 · Application Insights and VM insights

[calm] ストアフロントアプリケーションとバッチ仮想マシンは異なる種類の計測機器を必要とします。
[600ms]
[curious] Application Insightsはアプリケーションの動作を追跡し、VM Insightsはサーバーを理解するために必要なマシンレベルの信号を収集します。
[600ms]
[reassuring] これらのデータは同じワークスペースで集まり、アプリケーションの症状を依存するインフラと結びつけることができます。

## Step 7 · Alerts and action groups

[calm] アラートルールは、信号が行動を起こすに十分重要かどうかを決めます。
[600ms]
[curious] アクショングループが次のステップを担当します:人々に通知するか、自動応答を呼び出すことです。
[600ms]
[reassuring] これらの責任は分けておき、Contosoが各信号に適したルールを選びつつ、応答経路を再利用できるようにします。

## Step 8 · Microsoft Sentinel: the SIEM on your workspace

[calm] Microsoft Sentinelは、ワークスペースデータの周囲にセキュリティ検出および対応機能を追加します。
[600ms]
[curious] 信号収集から脅威の検出、事故の調査、対応の実行までの手順をたどりましょう。
[600ms]
[reassuring] これは単なるログ検索画面以上のもので、設計はセキュリティチームの検知およびインシデント処理のワークフローをサポートしなければなりません。

## Step 9 · All in one: from signal to action

[calm] 監視の設計は、証拠を別々の場所に置いたままにせず、シグナルをアクションにつなげます。
[600ms]
[curious] Contosoは、何を回収するか、どのようにルーティングするか、どこに保管するか、そして何が応答するかを選んでいます。
[600ms]
[reassuring] これら4つの決断がトラブルシューティングを可能にします。次に、インシデントが失敗した際にビジネスがどのように復旧するかを決めます。

