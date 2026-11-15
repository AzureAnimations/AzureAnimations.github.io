# Narrator Script — Copilot Studio · Copilot Studio: Knowledge and Tools

**Source animation:** [ToolsAndKnowledge.html](../../../journeys/CopilotStudio/ToolsAndKnowledge.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/add-knowledge-copilots-online-workshop/>
- <https://learn.microsoft.com/training/modules/copilot-tools-online-workshop/>

---

## Step 1 · The answers live outside the agent

[calm] Contoso Supportはライブ配信中で、顧客はそのプロンプトでは答えられない質問をし始めています。
[600ms]
[curious] ある質問はウィキ、データベース、ファイルにある事実が必要です。また、返還を始めるようなAPIやアプリの背後にあるアクションが必要なものもあります。
[600ms]
[confident] Contoso 、ここで登場するすべてのシステムは架空のものであり、同じエージェントが12ステップすべてを実行します。

## Step 2 · Two jobs: know it, or do it

[curious] 外部のニーズはすべて二つの仕事のいずれかに集約されます。エージェントが何かを知っている必要があるか、何かをしなければならないかのどちらかです。
[600ms]
[calm] 知識はそれを読み引用する内容を与えます。ツールはサービスを呼び出して物事を変えます。それらはエージェントの2つの別々のページに存在します。
[600ms]
[confident] 生成オーケストレーションでは、エージェントが説明文を読んで選択するので、その言葉が本当に重要です。

## Step 3 · Copilot connectors: index first, then answer

[calm] 最初の知識ルートはCopilotコネクターで、かつてはMicrosoft Graphコネクターと呼ばれていました。
[600ms]
[confident] テナント管理者は非Microsoftシステムに接続し、その内容がMicrosoft Graphにインデックスされます。エージェントはそこから回答し、引用し、各人のアクセスを尊重できます。
[600ms]
[serious] 管理者が最初に設定しているため、知識追加ダイアログに表示されるのは後からです。

## Step 4 · Power Platform connectors: ask the live system

[curious] このルートは違います。なぜなら、何もコピーされないからです。プレビューのリアルタイムオプションです。
[600ms]
[confident] Copilot Studioテーブル名とカラム名のみをインデックス化します。その後、各質問はユーザー自身のサインインを使ってライブシステムに応答します。
[600ms]
[calm] コネクタツールと同じ接続およびデータポリシーを再利用し、Salesforce、 ServiceNow、 Azure SQL、 SAP 、 Dataverseなどのシステムと連携しています。

## Step 5 · Azure AI Search: bring your own index

[calm] ここでは自分のインデックスを持参します。ベクターインデックスをAzureで準備し、データ接続を通じて追加します。
[600ms]
[confident] 知識源ごとに1つのインデックスが割り当てられ、インデックスにURLフィールドがあれば引用を返すことができます。
[600ms]
[reassuring] インポートとベクトル化ウィザードを使って、同じ埋め込みモデルで質問も埋め込むようにしてください。プライベートエンドポイントもサポートしています。

## Step 6 · Connector tools: prebuilt or custom

[calm] さて、読みから演技へと移行します。コネクターがREST APIを巻き、エージェントがそれを呼べるようにします。
[600ms]
[curious] しかし、もしリターンAPI用の既製コネクターがContosoない場合はどうでしょうか?その場合は、チームがすでに作ったカスタムコネクタを追加するだけです。
[600ms]
[reassuring] デフォルトではツールは各ユーザーの接続で動作するため、ユーザーは許可された範囲でしか行動しません。

## Step 7 · REST API tool: an OpenAPI file becomes tools

[curious] もしかするとコネクター自体がなく、OpenAPIファイルだけかもしれません。このプレビュールートはそのファイルをツールに変換します。
[600ms]
[confident] 仕様をアップロードし、明確な説明を書き、何も選ばず、認証用のAPIキーかOAuthを使い、望むエンドポイントだけを保持します。それぞれがツールとなります。
[600ms]
[serious] その説明はオーケストレーターがツールを呼ぶタイミングを判断するために読むものなので、実際に使われている同義語を加えてください。

## Step 8 · MCP: connect once, choose the tools

[curious] MCPサーバーは独自のツールやリソースを公開し、それぞれに名前、説明、入力があります。
[600ms]
[confident] ウィザードで一度追加し、エージェントに使わせたくないツールはオフにします。サーバーが変更されると、エージェントは更新を確認します。
[600ms]
[calm] 生成オーケストレーションはオンでなければならず、プロンプトはまだサポートされていません。リソースが使えるのはツールが返すときだけです。

## Step 9 · Computer use: when there is no API

[curious] もしコネクターもAPIもMCPサーバーもなかったらどうなるでしょうか?そこでコンピュータの利用が重要になります。
[600ms]
[impressed] エージェントはWindows画面を見て何をするか決め、その後、人間のようにクリックしてタイプします。ビジョンと推論モデルが画面の変化に対応するのに役立ちます。
[600ms]
[calm] Windowsマシンと生成オーケストレーションが必要で、各ステップはCopilot Creditsを使用します。ホストされたマシンはプロトタイプに適しています。本番環境では自社で使いましょう。

## Step 10 · Computer use: set guardrails, watch every run

[serious] 画面を操作してクリックしていくエージェントにはガードレールが必要です。専用マシンで動かし、許可リストで触れられる範囲を制限しましょう。
[600ms]
[concerned] 不確かな場合は人が介入してもらいましょうが、それだけに頼らないでください。監督は確率的であり、許可リストがモデルのサイト開設を妨げるわけではありません。
[600ms]
[reassuring] その後、すべてのランをアクティビティで見直し、トランスクリプトとセッションのリプレイを添えて確認してください。ランログはDataverseに送られ、7日間保管されます。

## Step 11 · Which route should I pick?

[calm] 技術ではなく、エージェントが必要とするものから始めましょう。ニーズを決めれば、ルートや選び方、注意すべき点が見えてきます。
[600ms]
[confident] 目安はシンプルです。知識源を使って読むこと。
[600ms]
[determined] コネクター、 REST API 、またはMCPサーバーを使ってサービスを呼び出しましょう。そして、他に何も接続できない時のみコンピュータ使用を選択してください。

## Step 12 · Knowledge and tools: all in one

[calm] 気持ちを合わせよう。知識を持って読み、道具で行動しろ。
[600ms]
[confident] 最も軽い方法を選び、最も重い方法であるコンピューター使用を監督しましょう。
[600ms]
[proud] 試験では、A B 620、エージェントの統合と拡張Copilot Studio、40〜45%の割合です。これらのルートは、知識源への接続やツールの追加を含みます。
