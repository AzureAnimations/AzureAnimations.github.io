# ナレーター スクリプト — Azure Integration & Messaging · ハブ ツアー

**Source animation:** `journeys/Integration/index.html`

**Script status:** Authored voiceover.

---

## Step 1 · Welcome

[calm] 統合とは、別々のプログラムを連携させることです。プロデューサーが仕事を送り、コンシューマーが処理し、ブローカーが仲介します。Contoso の5つのエピソードで、タスクの保留、注文の調整、測定の記録、変化への反応、Functions による接続を学びます。物語の数値は例であり、性能保証ではありません。

## Step 2 · The Black Friday Bottleneck

[calm] エピソード 1。ブラック フライデーのボトルネック。
[400ms]
[serious] 「今すぐ購入」のクリックごとに在庫データベースを待ち、その待ち時間がサイトを止めます。あいだにストレージ キューを置き、処理は裏で進めながら、買い物客にはすぐレシートを返します。

## Step 3 · The VIP Transaction Disaster

[calm] エピソード2では、注文とキャンセルの処理順が逆になります。Service Bus のセッションは関連するメッセージを調整します。ピークロックは受信と完了を分離し、配信不能キューは失敗を隔離します。順序だけでは業務処理の重複を防げません。ワーカーにはべき等性も必要です。

## Step 4 · The Sensor Tsunami

[calm] エピソード 3。センサーの津波。
[400ms]
[curious] 毎秒 10 万件のセンサー読み取りが届き、Service Bus ですら適切な道具ではなくなります。Event Hubs は配信をやめて記録を始め、どのチームも同じストリームを自分のペースで読めるようにします。

## Step 5 · The Reactive Smart Store

[calm] エピソード 4。リアクティブなスマート ストア。
[400ms]
[optimistic] 3 つのサービスが一日中、ストレージ アカウントにファイルが届いたかを尋ね続けます。Event Grid はイベント自身に知らせさせ、何かが変わった瞬間に適切なハンドラーだけを起こします。

## Step 6 · The Serverless Glue

[calm] エピソード 5。サーバーレスの接着剤。
[400ms]
[confident] 4 つのブローカーの間には、まだコードが必要です。Azure Functions がトリガー、バインド、スケールを引き受けるので、あなたは判断だけを書けば済みます。

## Step 7 · Keep Going on Microsoft Learn

[reflective] この学習に出てくる数値と制限は、すべて Microsoft の公式ドキュメントに基づいています。
[500ms]
[encouraging] 実際にこれらのパイプラインを構築する準備ができたら、下のラーニング パスが同じサービスを実践演習付きで案内してくれます。エピソードを 1 つ選んで、始めましょう。
