# Narrator Script — GitHub · Build and Publish a Custom Action

**Source animation:** [BuildCustomActions.html](../../../journeys/GitHub/BuildCustomActions.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Why package an action

[calm] Contosoは、同じチェックスクリプトを、3つのリポジトリにコピーして使っていました。これでは、修正のたびに、3回貼り付けなければなりません。
[600ms]
[concerned] コピーしたスクリプトは、少しずつ内容がずれていきます。そして、どれが正しいバージョンなのか、誰にも分からなくなります。
[600ms]
[confident] アクションにして1回パッケージ化すれば、各ワークフローは、usesの1行で呼び出すだけです。

## Step 2 · Three types of action

[curious] アクションは、3種類作れます。JavaScriptアクション、Dockerコンテナアクション、そしてコンポジットアクションです。
[600ms]
[confident] 違いは、動き方です。JavaScriptは、ランナー上で直接動きます。Dockerは、コンテナの中で動きます。コンポジットは、ステップとアクションを組み合わせます。
[600ms]
[serious] Dockerコンテナアクションが動くのは、Linuxランナーだけです。セルフホステッドのLinuxランナーには、Dockerがインストールされている必要があります。

## Step 3 · The action.yml file

[calm] どのアクションにも、メタデータファイルが1つ必要です。名前は、action dot ymlか、action dot yamlです。
[600ms]
[confident] 必須なのは、3つです。名前、説明、そしてアクションの実行方法です。入力、出力、作成者、ブランディングは、任意です。
[600ms]
[serious] 注意してください。入力を必須にしても、それだけで実行が止まるわけではありません。コード側で、確認する必要があります。

## Step 4 · A JavaScript action

[calm] コードは、Actionsツールキットを使って、Nodeで書きます。そして、依存関係と一緒に、distフォルダにバンドルします。
[600ms]
[confident] ランナーは、アクションをダウンロードして、そのファイル1つを、完結したパッケージとして実行します。
[600ms]
[serious] つまり、依存関係も、そのファイルに含まれていなければなりません。バンドルしたファイルはコミットして、node modulesはコミットしないでください。

## Step 5 · A Docker container action

[calm] Dockerfileは、コードを、その実行環境と一緒にパッケージ化します。オペレーティングシステム、ツール、バージョンなどです。
[600ms]
[curious] ランナーは、イメージをビルドするか取得して、エントリーポイントと引数を指定して起動します。
[600ms]
[serious] Linuxランナーでしか動かず、JavaScriptより遅くなります。USER命令は使わないでください。そして、エントリーポイントのスクリプトには、実行権限を付けておきましょう。

## Step 6 · A composite action

[calm] コンポジットアクションは、複数のステップを、再利用できる1つのステップにまとめます。シェルコマンドや、ほかのアクションも含められます。
[600ms]
[serious] runステップには、必ずシェルを指定する必要があります。
[600ms]
[intrigued] それと、コンポジットアクションの中では、入力は環境変数ではなく、inputsコンテキストで読み取ります。

## Step 7 · Workflow commands in an action

[curious] アクションは、ワークフローコマンドで、ランナーとやり取りします。出力を書き込んだり、値をマスクしたり、アノテーションを追加したりできます。
[600ms]
[confident] ツールキットが、それぞれをラップしてくれます。出力は、ランナーが指定するファイルに書き込まれます。アノテーションは、notice、warning、errorのどれかです。
[600ms]
[serious] マスクの登録は、値を出力する前に行ってください。あとからでは遅いです。

## Step 8 · Pick a type

[calm] 選ぶときは、何を重視するかで決めます。速度、プラットフォーム、そして依存関係です。
[600ms]
[confident] JavaScriptは、Dockerより速いです。また、純粋なJavaScriptアクションなら、GitHubホステッドランナーのすべてで動きます。
[600ms]
[curious] DockerはLinuxだけですが、依存関係を、一緒に持ち込めます。

## Step 9 · Troubleshoot an action that fails

[calm] アクションが失敗したら、まずログを読みます。失敗したステップから見ていきましょう。
[600ms]
[confident] 次に、デバッグログを有効にして再実行すると、より詳しい情報が見られます。
[600ms]
[intrigued] 最後に、見えたものを、よくある原因に当てはめます。権限、シェル、依存関係、ランナーのOSなどです。ここのログの文章は、あくまでサンプルです。

## Step 10 · Distribute your action

[curious] 次は、誰に使ってもらうかを選びます。パブリックリポジトリなら、全員に届きます。これが、いちばん広い選択肢です。
[600ms]
[confident] プライベートや内部のリポジトリなら、組織やエンタープライズの中だけで使えます。Marketplaceに公開すれば、見つけてもらいやすくなります。
[600ms]
[concerned] 1つ注意点があります。共有しているプライベートアクションを使っているリポジトリでは、外部のコラボレーターが、その実行ログを読めてしまいます。

## Step 11 · Publish to the Marketplace

[calm] 公開するには、要件を満たす必要があります。パブリックリポジトリであること、ルートにアクションファイルがあること、そして、名前が一意であることです。
[600ms]
[confident] アクションファイルに、ブランディングとカテゴリを追加します。それから、リリースの下書きを作って、「Publish this Action to the GitHub Marketplace」を選びます。
[600ms]
[impressed] 公開には、2要素認証が必要です。要件を満たしたアクションは、レビューなしで、すぐに公開されます。

## Step 12 · Release strategy

[calm] リリースごとに、セマンティックバージョンのタグを付けます。それとは別に、v oneのような、メジャーバージョンの移動タグも持っておきましょう。
[600ms]
[confident] ユーザーは、修正を自動で受け取りたければv1を選びます。安定性を重視するなら、正確なタグやコミットのSHAを選びます。
[600ms]
[proud] v2のような新しいメジャータグは、既存のワークフローを壊す変更のためのものです。そして、イミュータブルリリースにすると、そのタグは、ずっと固定されます。
