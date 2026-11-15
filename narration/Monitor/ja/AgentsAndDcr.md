# Narrator Script — Monitor · Agents and Data Collection Rules

**Source animation:** [AgentsAndDcr.html](../../../journeys/Monitor/AgentsAndDcr.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview>
- <https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview>
- <https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-transformations>
- <https://learn.microsoft.com/azure/azure-monitor/vm/data-collection>

---

## Step 1 · Azure sees the box, not what’s inside

[calm] ContosoのVM、vm-web-01を例に見てみましょう。Azureは、ホストのメトリックを自動で収集します。CPU、ネットワーク、ディスクです。
[600ms]
[concerned] ところが、ゲストOSの中の、Windowsイベント、パフォーマンスカウンター、ログは、何も見えないままです。
[600ms]
[confident] 箱の外側が見えることと、中で何が動いているかが見えることは、別の話です。ゲストのデータを集めるには、追加の設定が必要です。

## Step 2 · An agent reads from the inside

[curious] マシンの中で動くソフトウェアなら、プラットフォームには読めないものを読めます。
[600ms]
[confident] Azure Monitor Agentは、AzureとハイブリッドのマシンからゲストOSのデータを集めて、Azure Monitorに届けます。
[600ms]
[reassuring] エージェントがなければ、集められるのはホストのデータだけです。

## Step 3 · One agent to know: Azure Monitor Agent

[calm] 以前はエージェントがいくつもありましたが、今、覚えておくのは1つだけです。Azure Monitor Agent、略してAMAです。
[600ms]
[serious] AMAは、Log Analyticsエージェントの後継です。Log Analyticsエージェントは、MMAやOMSとも呼ばれ、Microsoftが2024年8月31日に提供を終了しました。
[600ms]
[encouraging] 移行するときは、Migration HelperブックとDCR Config Generatorを使うと、古いワークスペースの設定を、データ収集ルールに変換できます。

## Step 4 · Getting the agent onto machines

[curious] エージェントをマシンに入れる方法は3つあります。ポータルからインストールする、外部のマシンをAzure Arcで取り込む、あるいはAzure Policyで大規模に展開する、の3つです。
[600ms]
[confident] 動き出すと、エージェントはマシンのマネージドIDでサインインします。
[600ms]
[reassuring] システム割り当てもユーザー割り当ても使えます。大規模な展開には、ユーザー割り当てが向いています。

## Step 5 · A rule decides: the data collection rule

[curious] ここが重要なポイントです。何を収集するかは、エージェントが決めるのではありません。
[600ms]
[confident] データ収集ルール、略してDCRが、何を集めて、どんな形に整えて、どこに送るかを指示します。
[600ms]
[calm] DCRはパイプではなく、構成です。エージェントがそれをダウンロードして、Azure Monitorが適用します。

## Step 6 · Four parts make up a DCR

[calm] DCRは、4つの部分でできています。データソースは、何を収集するかを指定します。
[600ms]
[confident] ストリームは、決まった形でデータを運びます。任意で変換を入れて、フィルターすることもできます。デスティネーションは、データの届け先です。
[600ms]
[curious] たとえば、WindowsイベントはMicrosoft Eventストリームを通って、Eventテーブルに入ります。カウンターは、Perfテーブルに入ります。

## Step 7 · Filter before you pay

[curious] 変換は、データをワークスペースに取り込む前に、フィルターしたり、形を変えたりするKQLのステートメントです。
[600ms]
[confident] 読まないデータを落とせば、取り込む量も、保存する量も減ります。
[600ms]
[calm] 取り込み時の変換は、Azure Monitor側で動きます。プレビュー中のマルチステージの変換は、エージェント上でも動かせるので、ネットワークのトラフィックも減らせます。

## Step 8 · One rule, many machines

[calm] DCRは、関連付けでマシンにひもづけるまで、何もしません。ここで足りなかったのは、これです。
[600ms]
[confident] 1つのDCRを、多くのマシンで使えますし、1台のマシンが複数のDCRに従うこともできます。全体としては、多対多の関係です。
[600ms]
[reassuring] 関連付けを削除すれば、その収集は止まります。

## Step 9 · Compose your own DCR

[excited] では、ご自分の番です。データソースとデスティネーションを、オンとオフで切り替えてみましょう。
[600ms]
[confident] 切り替えるたびに、データの流れと、簡略化したDCRの概要が更新されます。
[600ms]
[curious] 制限にも注目してください。syslogはLinuxだけ、WindowsイベントはWindowsだけです。パフォーマンスカウンターは、プレビューでメトリックにも送れます。

## Step 10 · Platform logs take another road

[calm] Azureのリソースは、エージェントなしで、プラットフォームのデータを送ります。ここでは、Key Vaultが自分でやっています。それがポイントです。
[600ms]
[confident] 診断設定で、どのデータをエクスポートするかと、その送り先を選びます。送り先は、ワークスペース、ストレージアカウント、イベントハブのどれかです。
[600ms]
[serious] リソースログは、診断設定を作るまで収集されません。自動で届くのは、プラットフォームのメトリックとアクティビティログだけです。

## Step 11 · The quick start: VM insights

[curious] 手軽に始めたいですか。VM insightsを有効にすれば、あとはAzureが設定してくれます。
[600ms]
[confident] エージェントをインストールして、あらかじめ決まったデータのセットで、DCRを作ってくれます。
[600ms]
[reassuring] もっと集めたいときは、そのDCRは変更せず、自分のDCRを作って追加で収集しましょう。

## Step 12 · Agents and DCRs in one view

[calm] ゲストのデータには、エージェントが必要です。何を、どうやって、どこへ集めるかは、データ収集ルールが決めます。
[600ms]
[confident] 関連付けが、ルールとマシンをつなぎます。プラットフォームのデータには、診断設定を使います。
[600ms]
[proud] この4つの考え方を押さえておけば、データがAzure Monitorに届くしくみを、正確に説明できます。
