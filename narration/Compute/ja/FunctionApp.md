# ナレーション台本 — Azure PaaS Compute · 04 · Function App

**Source animation:** `static/v2/Compute/FunctionApp.html`

---

## Step 1 · intro

[confident] 最後の目的地は、ひと味違うコンピューティング、Function App です。
[600ms]
[calm] これは、関数と呼ばれる小さなコードの断片をホストし、イベントが発生したときにだけ実行します。管理するサーバーはなく、コードが実際に動いている間だけ課金されます。
[700ms]
[amused] サーバーレスは「サーバーがない」という意味ではありません。Azure が見えないところでサーバーを実行し、スケールしてくれるという意味です。

## Step 2 · triggers

[confident] すべての関数は、ちょうど一つのトリガーから始まります。関数を実行するきっかけとなるイベントです。
[600ms]
[calm] それは HTTP リクエスト、タイマー、キューのメッセージ、あるいはストレージにアップロードされた新しいファイルかもしれません。
[500ms]
[calm] 次に、任意のバインドが関数をデータに接続します。入力または出力として、データベース、ストレージ、メッセージキューへ。
[700ms]
[impressed] バインドは宣言的です。接続を記述するだけで、ランタイムが結線してくれます。つなぎのコードは不要です。

## Step 3 · scaling

[confident] ここがサーバーレスの本当の魔法です。スケールコントローラーが、イベントの到着する速さを監視します。
[600ms]
[calm] 負荷が上がればインスタンスを追加し、静かになれば取り除きます。ゼロになるまで。
[700ms]
[impressed] Consumption と Flex Consumption では、アイドル状態のアプリは何もかかりません。イベントなし、インスタンスなし、請求なし。

## Step 4 · plans

[confident] Functions にはいくつかのホスティングプランがあり、ワークロードに合わせて選べます。
[600ms]
[calm] Flex Consumption は推奨のサーバーレスの選択肢です。高速なスケール、仮想ネットワーク対応、そして従量課金。Premium は事前ウォーム済みインスタンスでコールドスタートをなくします。Dedicated は App Service Plan を再利用して、予測可能なコストにします。
[700ms]
[encouraging] どこから始めるか迷ったら、Flex Consumption から始めて、あとで調整しましょう。

## Step 5 · compare

[confident] では、App Service ではなく Functions を選ぶのはどんなときでしょう。
[600ms]
[calm] 処理が短く、イベント駆動で、バースト的で、アイドル時にゼロまでスケールできるなら Functions を。
[500ms]
[calm] 常時稼働のウェブアプリや API を動かすなら App Service を。
[700ms]
[reassuring] しかも同じプラットフォームを共有します。両方を一つのリソースグループで動かして、つなぐこともできます。

## Step 6 · recap

[proud] これで全体像が完成しました。トリガーがコードを起動し、バインドがデータに接続し、イベント駆動スケールがゼロから数千まで調整し、Flex Consumption が低コストに保ちます。
[700ms]
[encouraging] 関数をデプロイし、トリガーを向け、あとはサーバーとスケールを Azure に任せましょう。これが Azure PaaS Compute の旅です。お疲れさまでした。
