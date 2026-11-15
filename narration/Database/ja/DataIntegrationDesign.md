# Narrator Script — データ統合とデータ レイクの設計

**Source animation:** [DataIntegrationDesign.html](../../../journeys/Database/DataIntegrationDesign.html)
**Language:** ja

キューの凡例：`[confident]` と `[reflective]` は話し方の指示、`[600ms]` は文と文の間の無音の間です。

<!-- Source: https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · Contoso’s data journey

[confident]
Contoso の注文、Web クリック、倉庫のセンサーは異なるデータを生みますが、この流れでは共通の方向へ進みます。
[600ms]
取り込みで集め、保存で保管し、準備で変換と拡充を行い、提供で分析に使えるようにします。
[600ms]
[reflective]
同じ段階の列が表示され続けるので、各サービスが担う仕事を見失わずに追えます。

## Step 2 · Azure Data Factory: the orchestrator

[confident]
Azure Data Factory は、データ ソースや処理ツールを別々に動かすのではなく、全体の作業を調整します。
[600ms]
パイプラインはアクティビティをまとめ、データセットはデータを、リンク サービスは接続を表し、統合ランタイムがそれらをつなぎます。
[600ms]
[reflective]
下の流れでは、その調整を収集と変換から公開、監視までたどれます。

## Step 3 · Azure Data Lake Storage: raw data at scale

[confident]
Contoso は分析方法を決める前に、生のファイルを元の形式のまま保存できます。
[600ms]
Data Lake Storage は Blob Storage を基盤に階層型名前空間を有効にし、フォルダーを名前のプレフィックスとして扱うのではなく、実際のディレクトリを提供します。
[600ms]
[reflective]
比較表では、POSIX のアクセス許可によるファイルとディレクトリへのアクセスも示しています。

## Step 4 · Azure Databricks: Spark for big data

[confident]
Azure Databricks は、SQL、データ エンジニアリング、機械学習の作業を共通の Spark プラットフォームにまとめます。
[600ms]
コントロール プレーンはワークスペースを管理し、コンピューティング プレーンは処理を実行します。
[600ms]
[reflective]
クラシック コンピューティングは Contoso の Azure サブスクリプション内、サーバーレス コンピューティングは Azure Databricks アカウント内で動くため、その境界は異なります。

## Step 5 · Azure Synapse Analytics: one analytics service

[confident]
Azure Synapse Analytics は、データ統合、ストレージ、分析を切り離さずにまとめて扱います。
[600ms]
コントロール ノードが複数のコンピューティング ノードでのクエリを調整し、並列処理で作業を分担する仕組みを示しています。
[600ms]
[reflective]
SQL プール、Spark プール、パイプライン、リンクが Synapse Studio とともに共通のツール群を構成します。

## Step 6 · Hot, warm and cold data paths

[confident]
Contoso がすべての答えを同じ速さで必要とするわけではないため、流れを異なるデータ パスに分けます。
[600ms]
ホット パスはリアルタイムのアラートを支え、ウォーム パスは流れるデータを分析して最近の一部を保持します。
[600ms]
[reflective]
コールド パスは元のメッセージを残し、長期的なバッチ分析に使います。

## Step 7 · Azure Stream Analytics: insight from streams

[confident]
Azure Stream Analytics は、届いたイベントをほかのサービスで使える結果へと変えます。
[600ms]
Event Hubs、IoT Hub、Blob Storage から SQL ベースのクエリへの矢印を追うと、ウィンドウが時間に沿って処理を整理する様子が分かります。
[600ms]
[reflective]
出力は、その結果を Power BI、Data Lake Storage、Cosmos DB などの宛先へ渡します。

## Step 8 · Which service for which job?

[confident]
この対応表は、好きな製品をすべての問題に当てはめるのではなく、仕事からサービスへと読んでください。
[600ms]
Data Factory は移動を調整し、Data Lake Storage は生データを保存し、Databricks は共有の Spark 処理を提供します。
[600ms]
[reflective]
Synapse は分析の構成要素をまとめ、Stream Analytics は SQL ベースのクエリでイベント ストリームを処理します。

## Step 9 · All in One: Contoso’s data journey

[confident]
完成した図では、各サービスを Contoso の取り込み、保存、準備、提供の流れに戻して見渡せます。
[600ms]
Data Factory と Event Hubs がデータを送り込み、ストレージが保管し、処理によって分析に役立つ結果を準備します。
[600ms]
[reflective]
下のパスは、即時性と保持の要件によって、それぞれのデータの行き先が決まることを示しています。
