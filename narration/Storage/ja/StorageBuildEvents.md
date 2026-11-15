# ナレーション台本 — Azure Storage · レベルアップ · Storage で作る

**Source animation:** `static/v2/Storage/StorageBuildEvents.html`

---

## Step 1 · goal

[confident] 作りましょう。あなたは blob — 画像、ドキュメント、アップロード — を保存し配信するアプリを書いています。
[600ms]
[calm] storage に接続し、読み書きし、ローカルで開発し、そして変化が起きたその瞬間に反応します。
[700ms]
[reassuring] そして一番いいところ — あなたが書くのと同じ SDK のコードが、あなたのノート PC でも本番でも、変更なしで動きます。

## Step 2 · connect

[confident] Azure Storage クライアントライブラリから始めて、パスワードレスな方法で接続しましょう。
[600ms]
[calm] DefaultAzureCredential は、あなたのマシンではあなたの開発者サインインを、Azure ではマネージド ID を拾います。だからコードの中に接続文字列やキーはありません。
[700ms]
[reassuring] 一度書けば、両方の場所でそのまま動きます。

## Step 3 · io

[confident] さて毎日の仕事 — blob の読み書きです。blob クライアントを作り、アップロードかダウンロードを呼び出します。
[600ms]
[calm] 呼び出しは非同期なので、データが動いている間もアプリは応答し続けます。
[700ms]
[encouraging] 大きなファイルには、ストリーミングと並列転送に頼りましょう。重い作業はライブラリが引き受けます。

## Step 4 · azurite

[confident] 作るのにクラウドアカウントは要りません。Azurite はローカルの Storage エミュレーターです。
[600ms]
[calm] blob、キュー、テーブルのストレージをあなたのマシン上で動かすので、オフラインで開発とテストができます。速く、そして無料で。
[700ms]
[reassuring] しかも Visual Studio Code の Azure Tools に同梱されているので、クリック一つで使えます。

## Step 5 · events

[confident] ここで storage が生き生きとします。blob が作成または削除されると、Storage はイベントを発生させます。
[600ms]
[calm] Event Grid がそのイベントをハンドラー — Azure Function、Logic App、webhook — にルーティングするので、あなたのコードはデータが変わった瞬間に反応します。
[700ms]
[impressed] Event Grid の blob トリガーは高いイベントレートまでスケールするので、アップロードの洪水の下でも追いつきます。

## Step 6 · feed

[confident] イベントは今すぐ反応するのに最適です。でも、完全な履歴が必要ならどうしましょう？
[600ms]
[calm] それが変更フィードです。あなたの blob へのすべての変更を記録した、耐久性のある、順序付けられた、読み取り専用のログです。
[700ms]
[reassuring] こう考えてください。イベントはプッシュ、変更フィードはプルです。一方はライブで通知し、もう一方はすべての変更を後から読み、バッチ処理し、再生させてくれます。

## Step 7 · recap

[proud] これが全体像です。あなたのアプリは、マネージド ID を使って SDK 経由で Blob Storage と話し、Azurite の上でローカルに開発し、Event Grid で変化に反応し、変更フィードでそれを監査または再生します。
[700ms]
[encouraging] SDK にマネージド ID、開発には Azurite、反応にはイベント。それが、きれいでモダンなストレージアプリです。

## Step 8 · spec

[confident] 作り手のために、もう少し深く。Azure Storage クライアントライブラリは、主要な言語をすべてカバーします — .NET、Java、Python、JavaScript、Go。
[600ms]
[calm] それらすべてを DefaultAzureCredential で認証すれば、どこでもパスワードレスです。
[700ms]
[reassuring] そして blob に反応するには、古典的なポーリングトリガーより Event Grid の blob トリガーを選んでください。発火が速く、スケールします。
