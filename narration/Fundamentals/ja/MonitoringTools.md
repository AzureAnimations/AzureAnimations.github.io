# ナレーション原稿 - 監視ツール

**Source animation:** journeys/Fundamentals/MonitoringTools.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview ; https://learn.microsoft.com/azure/app-service/monitor-app-service#insights ; https://learn.microsoft.com/azure/advisor/advisor-overview ; https://learn.microsoft.com/azure/service-health/overview -->

## Step 1 · Was it broken, or was it us?

[calm] お客様が購入手続きで長く待っています。ショップは配置済みですが、遅延の原因がコード、依存先、基盤サービスのどれかは、症状だけではわかりません。
[600ms]
[confident] 変更する前に証拠が必要です。監視によって、曖昧な報告を調査できる問いへ変えます。

## Step 2 · Collect the evidence

[calm] メトリックは、購入処理の時間などを時系列で測る数値です。ログは時刻付きの出来事の記録で、何が起きたかの詳細を補います。
[600ms]
[confident] Azure Monitorは、これらの情報を集めます。Contosoは傾向から遅い時間帯を見つけ、記録からその間の出来事を調べます。

## Step 3 · Look inside the checkout request

[calm] Contosoは公開前に、Azure Monitorの一部であるApplication Insightsへ情報を送るよう、アプリを設定しました。その準備によって、購入要求と依存する在庫呼び出しを関連付けられます。
[600ms]
[confident] これはアプリから集めた証拠です。リソースを作るだけで得られるものではなく、必要な計測を事前に組み込んでおきます。

## Step 4 · Store it where you can query it

[calm] Log Analyticsワークスペースは、後から検索できるように収集したログを保存します。Mayaは1つの症状から推測せず、該当する時間帯の記録を調べられます。
[600ms]
[confident] 見つかる内容は、何を収集し、どれだけ保持したかで決まります。役立つ証拠を残すことも、運用の準備です。

## Step 5 · Follow the evidence

[calm] Mayaは遅い購入処理から、在庫の依存先をたどります。この例の呼び出しは二点八秒かかり、具体的に調べる場所が見つかりました。
[600ms]
[confident] この数値は説明用で、Azureの性能上限ではありません。関連ログを比較し、コード、能力、別の依存先のどれに対応すべきか判断します。

## Step 6 · Decide what is worth a phone call

[calm] Contosoは購入処理の遅さが続いた場合のアラートを作り、アクショングループを接続します。アラートが条件を評価し、グループが設定済みの通知や対応を定義します。
[600ms]
[confident] サポートは通知を受けて調査します。アラートは注意が必要だと知らせますが、原因の特定や解決を保証するものではありません。

## Step 7 · Improve before the next promotion

[calm] Azure Advisorは配置済みのリソースを調べ、信頼性、セキュリティ、性能、コストなどの改善を提案します。Contosoはショップに合う推奨事項を評価します。
[600ms]
[confident] 継続的な改善に役立ちますが、今回の購入処理の遅延を診断した結果ではありません。個別の調査に代わるものではないのです。

## Step 8 · Is Azure reporting an issue?

[calm] Service Healthは、Contosoのサブスクリプションに関係するAzureのイベントを報告します。Resource Healthは個々のリソースに注目し、影響の別の側面を示します。
[600ms]
[confident] Mayaはアプリの証拠と照合します。基盤の状態だけでは、お客様のすべての操作が正常だとは証明できません。

## Step 9 · Monitoring - All in One

[calm] 最も忙しいセールに備えたサーバーから、Contosoの話は始まりました。今はサービスを選び、リソースを整理して接続し、アクセスを守り、無駄を減らし、一貫して配置し、問題を調べられます。
[600ms]
[confident] クラウド運用は、証拠の収集、調査、対応、改善の繰り返しです。次のセールは、設備を増やすだけでなく、ショップをもっと理解した状態で迎えます。