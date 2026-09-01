# Narrator Script — Copilot Studio · Extend & Integrate · JA

**Source animation:** `static/v2/CopilotStudio/Integrate.html`

男性の声（ja-JP-Masaru）。1ステップにつき1ブロック。

---

## Step 1 · Why Extend

[confident] エージェントは単独でも、すばらしい会話ができます。でも、良い答えには本物のシステムが必要なことが多いのです。
[600ms]
[calm] 注文データベース、チケット管理ツール、社内 API。実際に役立つには、エージェントがそれらへ手を伸ばす必要があります。
[600ms]
[impressed] 拡張こそが、エージェントを「物事について話す」から「物事をやり遂げる」へと変えるのです。Contoso の本物のデータに対して行動します。

## Step 2 · Connectors

[confident] いちばん簡単な入り口はコネクタです。Copilot Studio には千を超える組み込みコネクタが用意されています。
[600ms]
[calm] これらは Power Automate、Power Apps、Azure Logic Apps と共有されます。Dataverse、SharePoint、SQL Server、ServiceNow、Salesforce など数百種類です。
[600ms]
[impressed] 一つをツールとして追加すれば、エージェントは会話の途中でそれを呼び出せます。コード不要です。必要なシステムには、たいてい待機中のコネクタがすでにあります。

## Step 3 · Custom Connectors

[confident] お使いのシステムに組み込みコネクタがない場合は、任意の REST API をカスタム コネクタで包みます。
[600ms]
[calm] API を記述し、ベース URL、認証、エンドポイントを指定してから、「StartReturn」や「GetStatus」のようなトリガーとアクションを定義します。
[600ms]
[reassuring] Contoso 社内の返品 API には組み込みコネクタがないので、カスタムのものが一級のツールに変えます。Power Platform 全体で再利用でき、認定してテナント全体で共有することもできます。

## Step 4 · MCP

[confident] さらに新しいものとして、Model Context Protocol、つまり MCP のサーバーからツールを追加できます。
[600ms]
[calm] Tools タブで「Add a tool」、次に「Model Context Protocol」を選びます。Microsoft の組み込み MCP コネクタを選ぶか、自分のサーバーを URL で接続します。
[600ms]
[impressed] 一つの開かれた標準で、たくさんのツールを。MCP サーバーはツールもリソースも公開できるので、独自のサービス、データベース、API にぴったりです。

## Step 5 · Agent Flows + Azure

[confident] より重く、複数ステップのビジネス ロジックには、エージェント フローと Azure でエージェントを支えます。
[600ms]
[calm] 複数ステップの自動化にはエージェント フロー、企業ワークフローには Azure Logic Apps、承認には Power Automate、オンデマンドのカスタム コードには Azure Functions。
[600ms]
[impressed] ローコードが Azure の統合スタック全体と出会います。エージェントは、チャットからそのまま本物の企業プロセスを実行できます。

## Step 6 · Autonomous & Multi-Agent

[confident] しかも、チャットを待つ必要すらありません。
[600ms]
[calm] イベント トリガーでエージェントは自ら動き、子エージェントで専門家に委任できます。Dataverse に新しい行が届くと、Contoso のオペレーション エージェントが起動します。
[600ms]
[impressed] 重複をまとめる調整エージェント、返金を処理する財務エージェント、担当者に知らせる通知エージェントへ振り分けます。反応し、調整し、振り分ける。人手を介さずに。

## Step 7 · Recap

[confident] というわけで、統合の全体像が一枚の地図になりました。
[600ms]
[calm] コネクタは千以上、コード不要。カスタム コネクタは任意の REST API を包む。MCP は組み込みか自分のサーバー。企業ロジックにはフローと Azure。そして準備ができたら自律へ。
[600ms]
[encouraging] まずは組み込みコネクタから始め、必要が広がるにつれてカスタム コネクタ、MCP、フロー、自律へと手を伸ばしましょう。もっと深めたいなら、Microsoft Learn の "Extend and manage Copilot Studio agents" ラーニング パスが次の一歩です。
