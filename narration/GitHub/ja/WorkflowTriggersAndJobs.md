# Narrator Script — GitHub · Workflow Syntax: Triggers, Jobs, Matrices and Contexts

**Source animation:** [WorkflowTriggersAndJobs.html](../../../journeys/GitHub/WorkflowTriggersAndJobs.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · One workflow file

[calm] ワークフローは、1つのYAMLファイルです。dot githubフォルダの中の、workflowsフォルダに置きます。拡張子は、dot ymlかdot yamlにします。
[600ms]
[confident] 4つのキーで、全体像が分かります。name、on、jobs、stepsです。
[600ms]
[curious] onキーが実行を開始して、ジョブが実際の作業をします。nameを省略すると、Actionsタブには、代わりにファイルパスが表示されます。

## Step 2 · Triggers

[curious] onキーは、何が実行のきっかけになるかを決めます。コードのイベント、リポジトリのイベント、スケジュール、GitHubの外からの呼び出しなどです。
[600ms]
[confident] ブランチ、タグ、パスのフィルターで、pushやプルリクエストのトリガーを絞り込めます。スケジュールはcron構文を使い、デフォルトブランチで動きます。
[600ms]
[calm] 一致するイベントが1つあれば、実行が始まります。repository dispatchのwebhookには、イベントタイプが含まれます。

## Step 3 · Run it by hand

[confident] workflow dispatchのトリガーを使うと、Run workflowボタンが追加されます。
[600ms]
[curious] 各入力には、型、省略可能なデフォルト値、必須かどうかのフラグがあります。型には、boolean、choice、number、environment、stringがあります。ジョブは、inputsコンテキストから値を読み取ります。
[600ms]
[reflective] このボタンが表示されるのは、ワークフローファイルがデフォルトブランチにあるときだけです。

## Step 4 · Jobs and needs

[calm] ジョブは、デフォルトでは並列に実行されます。
[600ms]
[confident] needsを追加すると、そのジョブは、依存先のジョブが成功するのを待ちます。
[600ms]
[serious] ジョブが失敗したりスキップされたりすると、それをneedsしているジョブもすべてスキップされます。ただし、alwaysのような条件を使っているジョブは別です。

## Step 5 · Conditional logic

[calm] ifキーで、ステップやジョブを実行するかどうかを決めます。ステータス関数を書かなければ、GitHubが自動でsuccessを付け足します。
[600ms]
[confident] failure関数を使うと、失敗のあとにステップを実行できます。always関数なら、それまでの結果に関係なく実行します。
[600ms]
[serious] ソースの取得のように、失敗すると困る作業にはalwaysを使わないでください。ドキュメントでは、not cancelledが推奨されています。前のステップが成功したかどうかに関係なく、ステップを実行できます。

## Step 6 · Variables and commands

[confident] envキーで、変数を設定します。範囲は、ワークフロー全体、1つのジョブ、1つのステップのどれかです。一番具体的なものが優先されます。
[600ms]
[curious] ワークフローコマンドを使うと、ステップがログを通じてランナーに指示できます。notice、warning、errorは、アノテーションを作ります。
[600ms]
[calm] GitHubの環境ファイルに名前と値を書き込むと、それは変数になりますが、使えるのは後のステップです。書き込んだステップ自身では使えません。

## Step 7 · Service containers

[curious] servicesブロックを使うと、データベースなどのコンテナを、ジョブのすぐ隣で起動できます。
[600ms]
[confident] ポートをマップして、localhostでアクセスします。ヘルスチェックのオプションを加えると、サービスの準備ができるまで、ジョブが待ってくれます。
[600ms]
[reassuring] GitHubは、ジョブごとに新しいコンテナを作り、ジョブが終わると破棄します。サービスコンテナには、Linuxのランナーが必要です。

## Step 8 · A matrix

[curious] マトリックスを使うと、1つのジョブ定義が、複数のジョブになります。
[600ms]
[confident] ここでは、OSが2つ、Nodeのバージョンが3つあります。組み合わせの数だけ、つまり6つのジョブになります。
[600ms]
[impressed] 各ジョブは、matrixコンテキストから、自分の値を読み取ります。

## Step 9 · Shape the matrix

[calm] excludeを使うと、マトリックスから組み合わせを1つ外せます。includeなら、1つ追加できます。
[600ms]
[confident] fail-fastとmax-parallelで、ジョブの実行のしかたを制御します。fail-fastのデフォルトはtrueです。
[600ms]
[reflective] ランナーを変えたくなければ、バージョンを固定しましょう。latestラベルは、最新の安定したイメージを指すので、中身は時間とともに変わることがあります。

## Step 10 · Contexts

[curious] コンテキストは、実行に関するデータを持っているオブジェクトです。
[600ms]
[confident] 式の中で読めば、ブランチ、ランナー、変数、それまでのジョブやステップの結果が取れます。
[600ms]
[serious] コンテキストが使えるかどうかは、キーによって違います。ジョブレベルのifでは、github、needs、vars、inputsは読めますが、secretsは読めません。

## Step 11 · Expressions

[calm] GitHubは、ドル記号と二重の波かっこを最初に評価して、テキストに置き換えます。
[600ms]
[confident] これは、ランナー上のシェルがその行を見る前に起こります。単なるドル記号と名前の場合は、あとでシェルが展開します。
[600ms]
[serious] シークレットは、ログに出さないでください。絶対に出力せず、生成された値はマスクしましょう。

## Step 12 · Anchors and editor help

[calm] アンカーは、YAMLのブロックに名前を付けて、エイリアスが別の場所でそれを繰り返します。1つのワークフローファイルの中での繰り返しを、減らせます。
[600ms]
[curious] VS Code用のGitHub Actions拡張機能を使うと、入力しながら、ハイライト、検証、補完が使えます。
[600ms]
[determined] リポジトリをローカルにクローンして使うのが、一番効果的です。さあ、自分のワークフローを作ってみましょう。
