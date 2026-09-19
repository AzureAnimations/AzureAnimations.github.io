# Narrator Script - 可用性セット

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · One host, one point of failure

[serious] 店舗は動いていますが、仮想マシン一台だけに依存しています。
[600ms]
[curious] 物理ホストが故障したり、プラットフォームのメンテナンスで停止が必要になったりすると、どうなるでしょうか。
[800ms]
[calm] 店舗も一緒に止まります。どれほど丁寧に構築しても、一台だけでは単一障害点になります。

## Step 2 · Prepare another application instance

[confident] まず、同じアプリを動かす二台目のマシンを準備します。
[600ms]
[serious] Azure が店舗を自動で複製するわけではありません。チームが二台目をデプロイし、アプリを導入して、二台の前にロードバランサーを配置します。
[600ms]
[reassuring] 準備済みの二つのインスタンスが、このレッスンの土台になります。

## Step 3 · Separate fault domains

[calm] 次に、その二台を分離して配置するよう Azure に指定します。
[600ms]
[confident] 可用性セットは、マシンを複数の障害ドメインに分散します。障害ドメインとは、電源やネットワークスイッチを共有するハードウェアのグループです。
[600ms]
[reassuring] 一つのラックで障害が起きても、別のドメインのインスタンスが処理を続けられます。

## Step 4 · Separate update domains

[calm] 同じセットは、マシンを更新ドメインにも分けます。
[600ms]
[confident] 計画メンテナンスはグループごとに順番に行われるため、すべてのインスタンスが同時に再起動されるのを避けられます。
[600ms]
[serious] これは可用性ゾーンとは違います。障害ドメインと更新ドメインは、データセンター内のリスクを分離する仕組みです。

## Step 5 · A hardware failure unfolds

[curious] シナリオの状態を切り替えながら、出来事の順番を見てみましょう。
[600ms]
[serious] 最初にインスタンスが停止します。その後、正常性プローブが異常を検出し、トラフィックの送信対象から外します。
[600ms]
[calm] 新しい接続は正常なマシンへ向かいます。停止したマシンへの既存の接続は失われる可能性があるため、アプリには再試行への備えが必要です。

## Step 6 · Know the boundary

[reflective] この構成でカバーできない範囲も押さえておきましょう。
[600ms]
[serious] 可用性セットが分離するのは、データセンター内のハードウェア障害や計画メンテナンスの影響です。ゾーン全体の停止はカバーせず、アプリの不具合も直しません。
[600ms]
[confident] Microsoft は、より幅広い可用性の選択肢として Flexible オーケストレーションのスケールセットを推奨しています。可用性セット自体は廃止されていません。

## Step 7 · Availability Sets - All in One

[reflective] ここまでの要素をつなげましょう。
[600ms]
[confident] 障害ドメインはハードウェアのリスクを分け、更新ドメインは計画メンテナンスを分けます。ロードバランサーは正常なインスタンスへ通信を送ります。
[600ms]
[determined] アプリ、その複製、そしてデータの準備はチームの責任です。次はゾーンを見ていきます。
