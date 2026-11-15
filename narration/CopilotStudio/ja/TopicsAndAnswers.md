# Narrator Script — Copilot Studio · Copilot Studio — Topics & Answers

**Source animation:** [TopicsAndAnswers.html](../../../journeys/CopilotStudio/TopicsAndAnswers.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/courses/ab-620t00>
- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · A topic is a path of decisions

[calm] 顧客が「ヘッドセットを返品したい」と言います。トピックがその文をノードのパスに変えます。
[600ms]
[curious] トリガー、質問、ツール、生成型の回答、メッセージの各ノードがあり、それぞれ設定するのは一つだけです。
[600ms]
[confident] Contoso Supportとそのデータは架空のものです。このページでは、各ノードで何を設定するべきかを一つのトピックに踏み込んでいます。

## Step 2 · Variables: a named, typed box

[curious] Questionノードが注文番号を求めると、答えを変数に保存します。名前付きのタイプされたボックスと考えてください。
[600ms]
[calm] 後のノードはメッセージや条件、ツール入力で読み返します。型は最初に保存した値から来て、その後固定されます。
[600ms]
[reassuring] また、Set variable valueノードで自分で値を設定することもできます。そしてデフォルト名を意味のある名前に変えることもできます。

## Step 3 · Scope: who can see the variable

[calm] 変数にはスコープがあり、誰がそれを見ることができるかを決定します。レベルは4つあります:トピック、グローバル、システム、環境です。
[600ms]
[confident] トピックはデフォルトで、作成したトピックのみが表示されます。グローバルはセッション中続き、トピック横断で動作し、グローバル接頭辞が付けられます。
[600ms]
[serious] システム変数と環境変数は組み込みで読み取り専用です。最適な範囲を選びましょう。

## Step 4 · Pass values on, never ask twice

[curious] 誰だって同じ質問を二度聞かれるのは好きではありません。ですから、別の話題に話を移すときは、すでに知っていることを渡してください。
[600ms]
[confident] 宛先トピックで変数を他のトピックから値を受け取るように設定します。次にリダイレクトノードで「入力を追加」を選択します。
[600ms]
[reassuring] ツール入力とフロー入力も、変数の種類が一致していれば同じように動作します。

## Step 5 · Flows and tools: do the work in a topic

[calm] 実際の作業はツールやエージェントフローで行われます。トピックで「ノードを追加」を選択し、次にツールを追加します。
[600ms]
[confident] それは、あなたが配置した場所に正確に動作するアクションノードとなります。トピックレベルのツールはそこにしか利用できませんが、エージェントレベルのツールはオーケストレーターがいつ呼び出すかを決められます。
[600ms]
[serious] ツールであるためには、フローがエージェントのトリガー、応答アクション、公開、そして100秒以内の応答が必要です。

## Step 6 · Generative answers: grounded in your sources

[curious] 生成回答ノードは、選んだ知識源を検索し、引用付きの回答を書きます。
[600ms]
[confident] ノードに設定されたソースはエージェントレベルのソースを上書きします。検索をオンにすると、選択したソースのみが無視されます。
[600ms]
[calm] 会話が到達したときに実行し、トピックが一致しない場合はフォールバックとしても動作します。コンテンツモデレーションはデフォルトでHighに設定されます。

## Step 7 · Custom prompts: your instructions, your output

[curious] 時には言葉を完全にコントロールしたいと思うこともあります。カスタムプロンプトを使えば、自分で指示を書くことができます。
[600ms]
[confident] ツールを追加し、「新しいプロンプト」を選び、モデル、温度、入力・出力フォーマットを設定します。テキストは変数で返ってきます。
[600ms]
[encouraging] サンプルデータを使ってテストしてください。具体的に、簡潔に、答えられないときは出口を与えましょう。

## Step 8 · Custom knowledge: bring your own data

[calm] もしあなたのコンテンツがサポートされている知識ソースに載っていなかったら?その場合は自分で持ってきてください。
[600ms]
[confident] フローやHTTPリクエストで取得し、Contentでテーブルに成形し、引用にはContentLocationとTitleもオプションで設定します。そして生成回答ノードに渡します。
[600ms]
[serious] 一つだけ覚えておいてください:答えを生成するには最初の3つのレコードのみが使われます。

## Step 9 · HTTP request: call any API from a topic

[curious] トピックから直接REST APIを呼び出すには、アドバンスドメニューからリクエストノードHTTP送信を追加します。
[600ms]
[confident] URL、メソッド、ヘッダー、本文を設定します。サンプルJSONを貼り付けると、応答は型付き変数になります。
[600ms]
[reassuring] デフォルトでは、エラーが話題を停止し、On Errorトピックをトリガーします。ステータスコードとエラー本文を保持するために「Continue on error」を選択してください。

## Step 10 · Response formatting: shape how it reads

[calm] メッセージノードは小さなエディタです。太字、斜体、箇条書きや番号付きリストでテキストを書式化できます。
[600ms]
[curious] 変数を挿入し、エージェントがランダムに選ぶメッセージのバリエーションを追加し、画像や迅速な返信、カードも含めましょう。
[600ms]
[confident] クイックレスポンスはすべてのチャンネルでサポートされているわけではありません。音声チャンネルでは、テキストを音声メッセージで上書きしてSSML

## Step 11 · Adaptive cards: input and output in one card

[curious] アダプティブカードはチャネルがレンダリングするJSONです。メッセージノードにカードを入れれば、単に情報が表示されます。
[600ms]
[confident] Ask with Adaptive Cardを使って入力を収集します。送信ボタンが必要で、カードの入力から出力変数を作成します。
[600ms]
[serious] Copilot Studioスキーマは1.6%以前をサポートしていますが、Teamsは1.5で止まります。すべてのチャネルがサポートしているバージョンを選びましょう。

## Step 12 · Configure topics: all in one

[calm] 今、全体の道を見てください。試験リストから9つのスキルがすべて1つの会話にまとめられ、それぞれがノードに存在しています。
[600ms]
[confident] トピックの構成は、試験A B 620の「エージェントソリューションの計画と構成」ドメインに含まれ、配点は30〜35%です。
[600ms]
[determined] 公式の学習ガイドで現在のスキルリストを確認し、その後は公式のトレーニングで練習を続けてください。
