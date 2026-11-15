# Narrator Script — Build and extend an AI agent

**Source animation:** [BuildAndExtendAgents.html](../../../journeys/lab-guide/AgentLab/BuildAndExtendAgents.html)
**Language:** ja

Delivery cues and pause positions follow the English script; cues are not spoken.
Localized narration prepared for a later localization and recording pass; the animation currently offers English only.

Sources: [Companion lab](https://ivorb.github.io/mslearn-ai-agents/Instructions/Exercises/A-build-and-extend-ai-agents.html), [Foundry agents](https://learn.microsoft.com/azure/ai-foundry/agents/overview), [Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

---
## Step 1 · The problem

[curious] Tailwind Tradersには、すでに言語モデルがあります。ただし、役に立つアシスタントにはまだなっていません。

[500ms]

テントの返品条件を聞くと、三十日、九十日、レシート不要と、すぐに答えが返ってきます。自信ありげですが、どれも根拠のない作り話です。

[700ms]

[calm] モデルが故障しているわけではありません。店舗の返品規定を読んでいないので、もっともらしい答えで埋めてしまうのです。このラボでは、その問題を解決します。

## Step 2 · Lab at a glance

[confident] 六つのタスクで、一つのアシスタントを作ります。

[400ms]

基本となる二つは、ポータルでエージェントを作り、根拠となる情報を与えて、リモートMCPサーバーにつなぐことです。目安は約三十五分です。

[600ms]

残りの四つは任意です。アプリから呼び出す、自作のPythonコードを使う、ツールサーバーを用意する、ホスト型エージェントとしてデプロイする、という作業です。

[500ms]

[encouraging] 時間に合わせて、基本の二つだけ、推奨タスクも追加、または全部、という進め方を選びましょう。

## Step 3 · The blueprint

[calm] 最初のタスクに入る前に、何を組み立てるのかを確認します。

[400ms]

エージェントを支えるのは四つの要素です。役割を定める指示、自分の文書から得る知識、外部にアクセスするツール、そして利用者が対話するクライアントアプリです。

[700ms]

[confident] 各タスクで、このうち一つを追加したり拡張したりします。この図を軸に、全体を完成させていきましょう。

## Step 4 · How the pieces fit together

[confident] 次に、それぞれの要素がどこで動くのかを見てみましょう。

[400ms]

チャット画面やクライアント、関数、自作サーバーは手元の環境で動きます。エージェントや知識、ツールの定義はMicrosoft Foundryにあり、文書とLearnのドキュメントサーバーは外部にあります。

[600ms]

[calm] バッジは、どのタスクでその要素を作るかを示しています。タスクを選ぶと表示が加わり、もう一度選ぶと消えるので、変更点を比較できます。

## Step 5 · Explore each task

[encouraging] タスクを一つ選んで、中身を見てみましょう。

[400ms]

各パネルには、作るもの、完成するとできること、そしてつまずきやすい点が表示されます。

[600ms]

[calm] 基本タスクは塗りつぶしのボタン、任意タスクは枠線のボタンです。それぞれ同じフォルダーから独立して始められるので、自分に合う順番で進めてください。

## Step 6 · One assistant, six tasks

[confident] 六つのタスクを終えると、一つのアシスタントの構成要素がそろいます。

[500ms]

基本の二つで、自分の文書を根拠に答え、外部ツールを呼び出せるエージェントになります。

[600ms]

任意の四つでは、自作アプリ、Pythonコード、MCPサーバーを組み込み、Foundryが管理するコンテナーで動かします。

[700ms]

[warm] 知識が答えの正確さを支え、ツールができることを広げます。それでは、実際に作ってみましょう。
