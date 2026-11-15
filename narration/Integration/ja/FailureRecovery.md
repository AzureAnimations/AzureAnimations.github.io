# Narrator Script — Integration · Failure & Recovery: when a message fails

**Source animation:** [FailureRecovery.html](../../../journeys/Integration/FailureRecovery.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-dead-letter-queues>
- <https://learn.microsoft.com/azure/service-bus-messaging/service-bus-message-loss-and-duplicates>

---

## Step 1 · The broker can’t see inside your handler

[calm] ブラックフライデー、深夜0時の2分前です。ある関数がお客様のカードに請求したところで、完了を報告する前にクラッシュしました。
[600ms]
[serious] ブローカーから見ると、応答がないのは失敗と同じです。だから、メッセージをもう一度配信します。
[600ms]
[confident] これがat-least-once配信です。バグではなく、保証された仕様なので、ハンドラーは同じメッセージが繰り返し来ても大丈夫なようにしておく必要があります。

## Step 2 · Peek-lock: borrow the message, don’t take it

[curious] ピークロックモードでは、受信側が排他ロックをかけてメッセージを借りるので、ほかのコンシューマーからは見えません。
[600ms]
[confident] そのあと、4つの方法のどれかでメッセージを確定します。完了、破棄、保留、デッドレターです。あるいは、ロックが切れる場合もあります。
[600ms]
[concerned] 受信して削除するモードは違います。ブローカーが送った時点で確定するので、転送に失敗するとメッセージが失われます。重要度の低いデータにだけ使いましょう。

## Step 3 · Every failed lap adds one

[calm] 配信が、破棄かロックの期限切れで終わるたびに、配信回数が1つ増えます。
[600ms]
[serious] 最大配信回数に達すると、Service Busはメッセージをデッドレターキューに移します。デフォルトは10回です。
[600ms]
[reassuring] ロック期間は、デフォルトが1分で、最大は5分です。だから、通常の処理時間より長く設定するか、ロックを更新しましょう。

## Step 4 · Break it and watch what happens

[curious] 今度はご自身で試してみましょう。障害をオンにして、注文を送ります。このデモのキューは、短く済ませるために、最大配信回数を5にしています。
[600ms]
[intrigued] メッセージが何度も再試行されて、最後にデッドレターキューに入る様子を見てください。
[600ms]
[confident] 何も直さずに再送しても、同じことが繰り返されるだけです。それに、不正なペイロードは、再試行しても意味がありません。コードの中で、自分で理由を付けて、すぐにデッドレターにできます。

## Step 5 · Dead-letter queue: a parking lot with labels

[calm] どのキューにもサブスクリプションにも、デッドレターのサブキューがあります。メッセージは、削除するまでそこに残ります。自動では削除されません。
[600ms]
[confident] メッセージごとに、読める理由が付いています。受信するには、デッドレターのサブキューを指定した受信側を使います。
[600ms]
[reassuring] 自分で理由を設定するときは、例外の種類も入れましょう。トリアージがぐっと楽になります。

## Step 6 · Recover without losing or duplicating

[calm] 順番が大事です。まず理由を読んで、原因を直して、それから新しいコピーをメインのキューに送ります。
[600ms]
[confident] デッドレター側のコピーを完了するのは、その送信が成功してからです。途中でクラッシュしても、重複は起きても、失われることはありません。
[600ms]
[serious] 再送信は、まったく新しいメッセージです。だから、ハンドラーはまず確認してから処理して、重複が来ても受け流せるようにしておきましょう。

## Step 7 · Two helpers: duplicate detection and sessions

[curious] 助けになる機能が2つあります。重複検出は、同じメッセージIDが期間内に来たとき、再送されたメッセージを入口で止めます。
[600ms]
[confident] StandardかPremiumのティアが必要で、期間のデフォルトは10分です。
[600ms]
[calm] セッションは、関連するメッセージをまとめて、順番どおりに、1つの受信側で処理します。セッションをオンにすると、すべてのメッセージにセッションIDが必要になります。

## Step 8 · Event Grid retries on a schedule

[calm] Event Gridは、各イベントを少なくとも1回は配信して、応答を30秒待ちます。
[600ms]
[confident] 応答がなければ、バックオフを入れながら再試行します。再試行ポリシーが止めるまで続き、最大30回、または最長1日の有効期間までです。
[600ms]
[concerned] 順序は保証されませんし、重複して届くこともあります。だから、ここでも、冪等にする習慣が必要です。

## Step 9 · Publish your own events

[curious] カスタムトピックは、アプリがイベントを送り込むエンドポイントです。トピックのアクセスキーで認証できます。
[600ms]
[confident] もっといいのは、EventGrid Data Senderのロールを持つMicrosoft Entraのアイデンティティを使うことです。そうすれば、コードにキーを書かずに済みます。
[600ms]
[calm] トピックは、CloudEventsかEvent Gridのスキーマを受け付けます。おすすめの形式は、CloudEventsです。

## Step 10 · Who retries? The service that delivers

[curious] では、再試行するのは誰でしょうか。あなたの関数ではありません。Service Busのトリガー自体は、再試行を追加しません。
[600ms]
[confident] ランタイムは、関数が成功するとメッセージを完了し、例外が出ると破棄します。数えているのはService Busです。
[600ms]
[reassuring] 同じように、Event Gridのトリガーの再試行も、イベントサブスクリプションによるものです。関数の再試行ポリシーが対象にするのは、ほかのトリガーです。

## Step 11 · Tune it, connect it, ship it safely

[calm] host dot jsonのいくつかの設定で、メッセージの取り込み方が決まります。同時実行数、自動完了、ロックの更新です。
[600ms]
[confident] シークレットではなく、マネージドIDを使いましょう。接続文字列でも動きますが、Learnでは、可能な限りIDを推奨しています。
[600ms]
[serious] そして、ステージングスロットを経由してリリースします。スワップする前に、イベントソースの設定をスロット設定にしておきましょう。スワップすると、実行中の関数が途切れることがあるからです。

## Step 12 · See failures before customers do

[curious] 失敗は、数字になって残ります。Service Busでは、デッドレターになったメッセージ、破棄されたメッセージ、サーバーエラーを見ましょう。
[600ms]
[confident] Event Gridでは、配信失敗、デッドレター、破棄されたイベントを見ます。
[600ms]
[reassuring] そして、アラートルールで人に通知します。アラートが発火すると、アクショングループが動き、メール、テキストメッセージ、関数などを実行します。

## Step 13 · Failure and recovery, in one view

[calm] 失敗したメッセージは、配信するサービスが再試行して、理由を付けて保管され、冪等なハンドラーが安全に再処理します。
[600ms]
[confident] これはA I 200試験の一部で、配点が20〜25%のドメインに入ります。学習ガイドには、デッドレターの処理、Event Gridのフィルター、カスタムイベント、再試行が挙げられています。
[600ms]
[proud] この流れを覚えておきましょう。再試行、保管、修正、再送信、そして安全に繰り返す。
