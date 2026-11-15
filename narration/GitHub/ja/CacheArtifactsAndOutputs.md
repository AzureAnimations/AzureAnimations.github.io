# Narrator Script — GitHub · Move Data: Cache, Artifacts, Outputs and Job Summaries

**Source animation:** [CacheArtifactsAndOutputs.html](../../../journeys/GitHub/CacheArtifactsAndOutputs.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · Every Job Starts Clean

[calm] GitHubホステッドランナーでは、ジョブごとに、ランナーイメージの新しいインスタンスで始まります。
[600ms]
[serious] 前のジョブのファイルや変数は、そこにはありません。ジョブが終わると、ランナーは破棄されるからです。
[600ms]
[confident] だから、データを渡したいときは、意図的に渡す必要があります。方法は、出力、アーティファクト、キャッシュです。

## Step 2 · Step Outputs: GITHUB_OUTPUT

[calm] ステップは、GitHubの出力ファイルに、名前と値を書き込みます。
[600ms]
[confident] 同じジョブの後ろのステップでは、書き込んだステップのidを指定して、stepsコンテキストから読み取ります。
[600ms]
[serious] 書き込むステップには、idが必要です。idがないと、誰もその出力を読めません。

## Step 3 · GITHUB_ENV: Set It for Later Steps

[curious] GitHubの環境ファイルに、名前と値を書き込むと、ジョブ内の以降のステップすべてで、環境変数として使えます。
[600ms]
[serious] ただし、書き込んだステップ自身には、新しい値は見えません。また、GitHubやランナーのデフォルトの変数は、この方法では上書きできません。
[600ms]
[reflective] しかも、有効なのは、そのジョブの中だけです。次のジョブは、また、まっさらな状態から始まります。

## Step 4 · Job Outputs: Pass a Value On

[calm] 値を別のジョブに渡すには、最初のジョブで出力を宣言して、それぞれをステップの出力に対応づけます。
[600ms]
[confident] 2つ目のジョブは、needsで最初のジョブを指定して、needsコンテキストから値を読み取ります。
[600ms]
[serious] needsがないと、2つ目のジョブは、最初のジョブの出力を読めません。再利用可能なワークフローも、呼び出し元のジョブに、出力を返せます。

## Step 5 · Artifacts: Upload, Then Download

[curious] ファイルを渡したいときは、アーティファクトを使います。アップロードアーティファクトは、ジョブのファイルを、その実行に保存します。
[600ms]
[confident] 後ろのジョブは、needsで待機してから、ダウンロードアーティファクトで、そのファイルを、自分のクリーンなランナーに取り込みます。
[600ms]
[reassuring] アーティファクトは、実行が終わったあとも残ります。だから、実行のページから、ビルドの出力やログ、テスト結果をダウンロードできます。

## Step 6 · Cache Dependencies With a Key

[curious] キャッシュアクションは、まず、完全に一致するキーを探します。見つからなければ、リストアキーを探します。完全一致すれば、キャッシュヒットです。
[600ms]
[confident] ミスした場合は、ジョブが成功すれば、新しいキャッシュが保存されます。キーには、ランナーのOSと、ロックファイルのハッシュを組み合わせることが多いです。そうすると、依存関係が変わったときに、新しいキーになります。
[600ms]
[serious] キャッシュは、いったん作られたら、変更されません。ジョブは、キャッシュがなくても動く必要があります。また、シークレットは、キャッシュに入れないでください。

## Step 7 · Cache or Artifact? Pick the Right One

[calm] キャッシュは、作り直すのにコストがかかるファイルを再利用して、後続の実行を速くします。
[600ms]
[confident] アーティファクトは、ジョブが作ったものを保持します。だから、ほかに渡したり、ダウンロードしたりできます。短いテキストの値なら、出力で渡すほうが向いています。
[600ms]
[reflective] キャッシュもアーティファクトも、ファイルを保存しますが、どちらでも代わりになるわけではありません。次に何をしたいかで、選びましょう。

## Step 8 · Job Summaries: A Markdown Report

[curious] ステップサマリーのファイルに、GitHubで使える形式のMarkdownを追記します。
[600ms]
[confident] ジョブが終わると、各ステップのサマリーがまとめられて、実行のサマリーページに表示されます。
[600ms]
[encouraging] テスト結果やカバレッジ、リンクを載せておくと便利です。ログを掘り返さなくて済みます。

## Step 9 · A Status Badge for the README

[calm] ワークフローバッジは、そのワークフローが、成功しているか、失敗しているかを表示します。
[600ms]
[confident] デフォルトでは、デフォルトブランチの状態が表示されます。ほかのブランチを見たいときは、branchやeventのパラメーターを追加します。
[600ms]
[curious] バッジのURLには、ワークフローのファイル名を使います。Markdownは、Actionsタブから作成することもできます。それを画像として、READMEに埋め込みましょう。

## Step 10 · Retention: How Long Files Stay

[calm] デフォルトでは、アーティファクトとログは、90日間保持されます。
[600ms]
[confident] リポジトリや組織で、この期間を変更できます。ただし、上位で決められた上限の範囲内です。アップロードごとに、保持日数を設定することもできます。
[600ms]
[reflective] 新しい設定は、新しいアーティファクトとログにだけ適用されます。設定は、Actionsの設定画面か、REST APIで行えます。

## Step 11 · Cost: Faster Runs, Less Storage

[calm] クリーンなランナーは、実行のたびに、依存関係をダウンロードします。そのぶん、ネットワークの使用量も、実行時間も、コストも増えます。
[600ms]
[confident] キャッシュを使えば、そのダウンロードを省けるので、実行が速くなります。保持期間を短くして、ファイル数も減らせば、保存するデータ量も小さくなります。
[600ms]
[encouraging] アップロードアーティファクトでは、ワイルドカードのパターンや除外が使えます。だから、必要なものだけを、アップロードできます。

## Step 12 · All in One: Pass It On, Don’t Rebuild

[calm] Contosoのパイプラインは、このレッスンのツールを、すべて使うようになりました。出力が値を運び、キャッシュが依存関係を保持します。
[600ms]
[confident] アーティファクトが、ビルドを運びます。ジョブサマリーにはレポートが表示され、バッジが、ワークフローの状況をREADMEに知らせます。
[600ms]
[proud] ここまでが、G H 200の、ワークフローの実行と出力を管理するスキルです。作り直すのではなく、引き渡す。そう覚えておきましょう。
