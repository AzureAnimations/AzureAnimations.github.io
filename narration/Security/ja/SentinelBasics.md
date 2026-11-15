# Narrator Script — Security · Microsoft Sentinel basics

**Source animation:** [SentinelBasics.html](../../../journeys/Security/SentinelBasics.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/sentinel/overview>
- <https://learn.microsoft.com/azure/sentinel/connect-data-sources>
- <https://learn.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules>
- <https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal>

---

## Step 1 · Thousands of alerts, one team

[calm] Contoso の ID、クラウド、ネットワーク、デバイスは、どれもアラートを出します。少人数のセキュリティチームでは、すべてを読み切れません。
[600ms]
[curious] 必要なのは、セキュリティデータを収集して脅威を検出する、見るための SIEM と、日常的な対応を自動化する、動くための SOAR です。
[600ms]
[confident] Microsoft Sentinel は、クラウドネイティブの SIEM で、SOAR プラットフォームでもあります。Contoso と、ここにあるデータは、すべて架空のものです。

## Step 2 · Connectors bring the signals in

[calm] Sentinel は、最初は空っぽです。データコネクターが、ソースからシグナルを取り込み、1か所に集めます。
[600ms]
[confident] コネクターは、通常コンテンツハブのソリューションに入っています。ソリューションをインストールしてから、そのコネクターを設定します。
[600ms]
[serious] レガシーの HTTP Data Collector API のサポートは、2026年9月14日に終了します。そのため、カスタムソースには、Logs Ingestion API か、コードレスコネクタフレームワークを使ってください。

## Step 3 · One workspace holds the data

[curious] Sentinel は、別のデータベースではありません。Log Analytics ワークスペースに対して、オンにします。
[600ms]
[calm] すべてのコネクターは、そのワークスペースのテーブルにデータを書き込み、保持期間と課金も、ワークスペースに従います。
[600ms]
[reflective] だから、ワークスペースをどこに置くかが重要で、これは設計のステップで、改めて取り上げます。

## Step 4 · Analytics rules look for threats

[calm] 分析ルールは、データに対して常に投げかけている質問です。答えがイエスになると、アラートを出します。
[600ms]
[confident] ルールの種類によって質問のしかたは違います。始めるなら、コンテンツハブのソリューションにあるルールテンプレートが最適で、それを調整して使います。
[600ms]
[curious] Defender ポータルでは、新しいルールを作るには、カスタム検出が Microsoft から推奨されています。

## Step 5 · A match becomes an alert with entities

[calm] ルールのクエリの結果がしきい値を超えると、ルールは、情報から高までの重大度を付けて、アラートを出します。
[600ms]
[confident] エンティティマッピングは、どのフィールドがアカウント、IPアドレス、ホストなのかを Sentinel に教えます。
[600ms]
[impressed] これらのエンティティが、インシデントのグループ化、調査グラフ、自動化の土台になります。

## Step 6 · Related alerts group into one incident

[curious] 同じエンティティに関するアラートは、1つのインシデントにまとめられます。
[600ms]
[confident] 別々のアラートの山ではなく、重大度、ステータス、オーナーを持つ、1つのケースファイルになります。
[600ms]
[reassuring] コメント、タスク、アクティビティログも持てるので、チーム全体が、1か所で作業できます。

## Step 7 · Investigate the incident, hunt for the next one

[calm] 調査グラフは、つながりのあるものを時系列で表示します。アナリストは、攻撃がどこまで及んだかを確認できます。
[600ms]
[curious] ハンティングは別物です。ハンティングクエリは、アラートが鳴る前に質問を投げかけ、ブックマークは、見つけた証拠を保存します。
[600ms]
[confident] ノートブックを使うと、Python、機械学習、可視化で、ハンティングを拡張できます。

## Step 8 · Automation does the routine work

[calm] 自動化ルールは、インシデントにすぐ反応して、設定した順に実行されます。プレイブックなしで、インシデントにタグを付けたり、割り当てたり、クローズしたりできます。
[600ms]
[confident] 作業にもっと多くのステップが必要なら、Azure Logic Apps のワークフローとして作ったプレイブックに引き継ぎます。
[600ms]
[serious] プレイブックを、分析ルールに直接アタッチするのは、古い方法です。代わりに、自動化ルールを使いましょう。

## Step 9 · Follow one attack through Sentinel

[curious] Contoso の、架空のアカウント乗っ取りを、1ホップずつ追って、各段階で Sentinel が何をするかを見てみましょう。
[600ms]
[calm] シグナルが届き、ルールが作動し、インシデントが作られ、自動化が応答します。
[600ms]
[reflective] アカウントを無効にするのは封じ込めで、終わりではありません。アナリストは、どこまで広がったかを、引き続き調査します。

## Step 10 · Watch the whole picture: workbooks and UEBA

[calm] ワークブックは、データをチーム向けのダッシュボードに変えます。データソースを接続すると、組み込みのテンプレートが表示され、自分で作ることもできます。
[600ms]
[intrigued] UEBA は、各ユーザーとホストの普段の状態を学習します。本人の過去の履歴、同僚、組織全体と、アクティビティを比較します。
[600ms]
[confident] そして、普段と違うものにスコアを付けます。有効にして、Microsoft Entra ID などのソースを接続してください。

## Step 11 · Design it: placement, cost, tenants, access

[calm] Sentinel の設計は、4つの判断で決まります。ワークスペースをどこに置くか、何を取り込んで何を保持するか、どのテナントを対象にするか、そして誰が何をできるか、です。
[600ms]
[confident] 多くのソースにまたがって脅威を検出し、対応したいときは、Sentinel を考えます。運用上の正常性なら、Azure Monitor のアラートです。
[600ms]
[reassuring] Sentinel のロールは、ワークスペースを含むリソースグループで割り当てます。

## Step 12 · Sentinel is moving to the Defender portal

[curious] Sentinel には、新しい場所ができました。Microsoft Defender ポータルで一般提供されていて、ワークスペースも KQL も同じです。
[600ms]
[serious] Azure ポータルでのサポートは、2027年3月31日で終了します。既存のお客様は、移行を計画してください。
[600ms]
[calm] 自動化の動きは少し変わります。相関のあとで、インシデントのタイトルが変わることがあるからです。条件には、分析ルール名とタグを使いましょう。

## Step 13 · Signals to incidents to action

[calm] Sentinel は、何千もの生のシグナルを、誰かが対応できる、少数のインシデントに絞り込みます。
[600ms]
[confident] 4つの操作で実現します。データを接続し、ルールで検出し、調査してハンティングし、そして対応を自動化します。
[600ms]
[proud] どちらの学習ガイドにも Sentinel の名前はありませんが、A Z 305 ではログと監視の推奨が求められ、A Z 104 では Azure Monitor のログとアラートを扱います。
