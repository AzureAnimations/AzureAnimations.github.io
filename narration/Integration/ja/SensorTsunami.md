# ナレーター スクリプト — エピソード 3 · センサーの津波

**Source animation:** `journeys/Integration/SensorTsunami.html`

**Script status:** Authored voiceover.

---

## Step 1 · The telemetry flood drowns the queue

[curious] Contoso はスマート棚、レジ、Web のクリックストリームを稼働させます。
[500ms]
[serious] 1 件の読み取りはごく小さいものです。しかし毎秒 10 万件あり、注文キューの上限はおよそ毎秒 2,000 メッセージ。結果は調整、読み取りの欠落、そして何も見えなくなったダッシュボードです。
[600ms]
[calm] キューは作業項目のための価格と形をしています。テレメトリは作業ではなく事実の奔流で、1 件ごとに往復が発生します。この速度では到底まかなえません。

## Step 2 · Stop delivering. Start recording.

[optimistic] そこで Maya は、問題の形そのものを変えます。
[500ms]
[confident] ブローカーはメッセージを 1 つのワーカーに渡して削除します。ログはすべてのイベントを追記し、何人の読み手でも自分のペースで進めます。
[500ms]
[calm] それが Azure メッセージングの本当の分かれ目です。ブローカー型のサービスは配信したものを削除します。ストリーム型のサービスはそれを残し、しおりを配ります。返金はメッセージ。棚の読み取りはイベントです。

## Step 3 · Partitions turn one pipe into parallel lanes

[calm] イベント ハブは、パーティションに分割された追記専用ログです。
[500ms]
[confident] パーティション キーが車線を決め、車線の中では順序が厳密です。だから棚 A14 のすべての読み取りは順番どおりに並びます。Standard では 1 から 32 のパーティション、最大 1 メガバイトのイベント、そして AMQP、Kafka、HTTPS を話します。
[600ms]
[serious] そのキーは順序と分散で選びます。店舗 ID は 1 店舗のイベントをまとめますが、人気が偏ったキーはホット パーティションを生み、他は遊んでしまいます。

## Step 4 · Offsets and consumer groups: read it twice

[calm] コンシューマーは独立した位置を持ちます。この図では realtime がオフセット42、batch が36で、6つの位置だけ遅れています。読んでもイベントは削除されません。チェックポイントは再起動後の再開位置を記録します。イベントは再び読まれる可能性があるため、適切に記録して再処理を安全にしましょう。

## Step 5 · Capture archives the stream without consumer code

[calm] Capture はコンシューマーのコードを書かずに保存できますが、無料という意味ではありません。時間かサイズの条件に達すると Avro バッチを Blob Storage や Data Lake に書きます。Standard は追加料金、Premium と Dedicated は含まれます。保存先ストレージは別途課金されます。ライブの読み手の出力容量は使いません。

## Step 6 · Episode 3: Event Hubs is the firehose

[confident] 量が膨大で、ペイロードが小さく、複数のシステムが同じデータを欲しがるとき、必要なのはキューではなくログです。
[500ms]
[calm] イベントは記録され、読んでも削除されません。パーティションは、それぞれの中で順序が厳密な並列の車線を与えます。コンシューマー グループは各チームに独自のビューと独自のオフセットを与えます。Capture はアーカイブを自動で残します。
[600ms]
[encouraging] Event Hubs は「今、大規模に何が起きているか」に答えます。次のエピソードはまったく別の問いに答えます。何かが変わった。誰が知る必要があるか?
