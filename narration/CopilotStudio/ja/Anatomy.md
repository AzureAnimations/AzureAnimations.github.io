# Narrator Script — Copilot Studio · What Makes an Agent (Anatomy) · JA

**Source animation:** `static/v2/CopilotStudio/Anatomy.html`

男性の声（ja-JP-Masaru）。1 ステップにつき 1 ブロック。

---

## Step 1 · Overview

[confident] 実際の Copilot Studio エージェント、Contoso サポート エージェントを開いて、タブごとに見ていきましょう。
[600ms]
[calm] Overview タブはその正体です。名前、そのために推論するモデル（ここでは GPT-4.1）、そしてペルソナとルールを定める指示です。
[600ms]
[impressed] そして生成オーケストレーションがオンになっているので、エージェントはリクエストごとに何を使うかをその場で判断します。指示、モデル、オーケストレーション。これが頭脳です。ほかのすべては、エージェントが使えるものです。

## Step 2 · Knowledge

[confident] 次に Knowledge タブ。ここでエージェントを自社のデータに根拠づけます。
[600ms]
[calm] SharePoint サイト、自社の公開 Web ページ、アップロードした返品ポリシーの PDF を指定すれば、推測ではなく、出典付きの本物の情報から答えるようになります。これが検索拡張生成、RAG です。
[600ms]
[reassuring] 公開サイト向けに Web 検索をオンにすることもできます。根拠づけこそが答えを信頼できるものにします。エージェントは、それぞれの事実がどこから来たのかを正確に示せます。

## Step 3 · Tools

[confident] Tools タブは、エージェントが話すだけでなく、実際に物事を行う方法です。
[600ms]
[calm] 顧客と注文を読む Dataverse コネクタ、チケットを開くエージェント フロー、ケースを要約する再利用可能なプロンプト、さらには自社の API をツールとして公開する MCP サーバー。
[600ms]
[impressed] ツールを追加すれば、会話の途中でエージェントは注文を調べたり、そのチケットを起票したり、任意の API を呼び出したりできます。話すだけから、実際に成し遂げるへと変わります。

## Step 4 · Agents

[confident] Agents タブでは、エージェントが専門家に委任できます。
[600ms]
[calm] Contoso サポートはルーターのままで、子エージェントに引き継ぎます。返金は返品エージェント、請求は経理エージェント、営業時間や場所は店舗エージェント。
[600ms]
[impressed] これがマルチエージェント パターンです。一つのエージェントが焦点を保ち、残りをルーティングし、それぞれが自分のレーンの専門家として、すべて生成オーケストレーションで調整されます。

## Step 5 · Topics

[confident] Topics タブは、あえてスクリプト化された道筋がほしいときのためのものです。
[600ms]
[calm] カスタム トピックは、フレーズで起動する作成済みのフロー（「商品を返品」「注文はどこ」）で、ノード、スロット入力、変数を持ちます。システム トピックは、あいさつ、フォールバック、エスカレートなどの組み込み動作をカバーします。
[600ms]
[intrigued] でも、ここが転換点です。オーケストレーションによって、トピックはプランナーが選べる再利用可能な部品になります。一つの硬直した決定木ではありません。

## Step 6 · Measure

[confident] この 3 つのタブが一つの改善ループを作ります。Activity、Evaluation、Monitor です。
[600ms]
[calm] Activity は利用状況とエンゲージメントを、Evaluation は回答の品質を、Monitor はエージェントの健全性と Copilot Credits の消費を追跡します。
[600ms]
[encouraging] 公開してデータを見守り、指示、ナレッジ、ツールを調整する。そうしてエージェントは時間とともに静かに良くなっていきます。

## Step 7 · Channels

[confident] 最後に Channels タブ。一度公開すれば、人々がすでにいる場所で迎えられます。
[600ms]
[calm] Microsoft Teams と Microsoft 365 Copilot、Web サイト、SharePoint、モバイル アプリ、そして任意の Azure Bot Service チャネル。
[600ms]
[impressed] 同じエージェント、たくさんの入口。一度作れば、ユーザーが好むすべてのチャネルに展開できます。

## Step 8 · Recap

[confident] というわけで、エージェント全体が一枚のマップになりました。
[600ms]
[calm] Overview が頭脳（モデル、指示、オーケストレーション）を定めます。Knowledge、Tools、Agents、Topics が使えるものを与えます。そして計測、続いて Channels が、本番へと送り出します。
[600ms]
[encouraging] 一つのローコード エージェント。根拠づけられ、ツールを使え、スクリプトではなくオーケストレーションで動き、あらゆる場所に公開されます。自分でも作ってみたいですか。Microsoft Learn の無料の道「Agents in a Day」が、次の一歩に最適です。
