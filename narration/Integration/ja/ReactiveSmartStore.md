# ナレーター スクリプト — エピソード 4 · リアクティブなスマート ストア

**Source animation:** `journeys/Integration/ReactiveSmartStore.html`

**Script status:** Authored voiceover.

---

## Step 1 · Nobody is streaming. Everyone is knocking.

[curious] これは量の問題ではありません。礼儀の問題です。
[500ms]
[calm] サプライヤーは 1 日に数回、新しいカタログをストレージに置きます。3 つの別々のサービスが 30 秒ごとに一日中、念のためそのコンテナーをポーリングします。8,640 回の呼び出しのうち、何かを見つけるのはちょうど 2 回です。
[600ms]
[serious] ポーリングは三重にコストがかかります。API 呼び出し、それを行うコンピューティング、そしてファイルが届いてから誰かが気づくまでの数分の遅延です。

## Step 2 · Let the event announce itself

[optimistic] そこで Maya はシステム トピックを有効にします。
[500ms]
[confident] これで Storage はファイルが届いた瞬間に BLOB 作成イベントを発行し、Event Grid がそれを購読者全員へ、ポーリングなしでほぼリアルタイムに送ります。Function がカタログを再インデックスし、Webhook がモバイル バックエンドを起こし、Service Bus キューがサプライヤー ポータルをバッファリングします。
[600ms]
[calm] Event Grid は自分で持つキューではなく、ルーターです。スループットをプロビジョニングすることはありません。ソース、フィルター付きのサブスクリプション、そして配信先を宣言するだけです。

## Step 3 · A tiny envelope, and rules about who opens it

[calm] Event Grid のイベントはペイロードではなく、通知です。
[500ms]
[confident] 誰が、何を、どこで、いつ。通常 1〜2 キロバイトで、CloudEvents 標準の形式です。subject がどの BLOB かを示し、data が URL とサイズを運びます。そして意図的に、それだけです。
[500ms]
[serious] そのうえで各サブスクリプションがそれらのフィールドでフィルターします。フィルターはハンドラーの中ではなく、サブスクリプションで行いましょう。起動してイベントを見て終了するだけのハンドラーでも、コールド スタートの費用は発生しています。

## Step 4 · At least once, and a schedule to prove it

[calm] Event Grid はハンドラーの応答を 30 秒待ちます。
[500ms]
[confident] 応答がなければ、バックオフ スケジュールで再試行します。10 秒、30 秒、1 分、5 分と続き、成功するか、24 時間の有効期間が切れるか、30 回の試行に達するまで続きます。
[500ms]
[serious] その時点でイベントは破棄されます。配信不能コンテナーを構成していない限りは。これはオプトインです。そして最低 1 回とは、いつかハンドラーが重複を見るということ。イベント ID をキーにして処理しましょう。

## Step 5 · When the handler cannot be reached, pull instead

[calm] プライベートなコンシューマーは名前空間トピックから HTTP でイベントを取得できます。Receive はイベントとロック トークンを返します。Acknowledge は完了、release は再配信可能にし、reject は処理不能なイベントを扱います。MQTT は名前空間の別の発行・購読機能です。MQTT クライアントはこの HTTP 受信 API を使いません。

## Step 6 · Four services, one question each

[reflective] これがシリーズ全体を 1 つの表にまとめたものです。
[500ms]
[confident] ペイロードが実際に何であるかを問いましょう。単純なタスクは Storage キューへ。ビジネス トランザクションは Service Bus へ。測定値のストリームは Event Hubs へ。何かが変わったという通知は Event Grid へ。
[600ms]
[calm] 目安はこうです。メッセージは、誰かが対応しなければならないもの。イベントは、何かが起きて、関心のある人が気にするかもしれないもの。現実のシステムの多くは複数を同時に使います。

## Step 7 · Episode 4: Event Grid is the nervous system

[proud] Contoso Retail は、タイムアウトするモノリスから 4 つの疎結合パイプラインへ移りました。
[500ms]
[confident] バッファーされた処理、保証された注文、記録されたテレメトリ、そして即座の反応。トピックあたり 500 サブスクリプションのプッシュ ルーティング、エンベロープでのフィルター、任意の配信不能処理を伴う再試行、そして届かないコンシューマーのためのプル配信。
[600ms]
[encouraging] ここで挙げたサービスはすべて最低 1 回配信です。4 つすべてを安全にする習慣は同じ。ID をキーにした、べき等なハンドラーです。
