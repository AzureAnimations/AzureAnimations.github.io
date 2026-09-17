# Narrator Script - 可用性ゾーンに VM を分散

**Source animation:** journeys/Compute/VirtualMachines/AvailabilityZones.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · What if a whole zone fails?

[calm] ゾーン全体が停止したら？
[600ms]
Contoso は共通のデータセンター基盤の境界を超えた分離を必要としています。
[600ms]
[serious] 新しいゾーン構成です。可用性セットをその場で変換する操作ではありません。

## Step 2 · Place one VM in a zone

[calm] 一台の VM をゾーンに配置。
[600ms]
ゾーン VM は選択した一つのゾーンで動作します。二台目が作成されるわけではありません。
[600ms]
[serious] ゾーンを選ぶだけでは別のアプリは作成されません。

## Step 3 · Prepare VMs across zones

[calm] 複数ゾーンに VM を準備。
[600ms]
別々のゾーンに VM とディスクの組を配置し、それぞれでアプリを準備します。
[600ms]
[serious] アプリの複製と負荷分散は個別に構成します。

## Step 4 · Configure resilient routing

[calm] 回復性のある経路を構成。
[600ms]
ゾーン冗長フロントエンドの Standard Load Balancer が新しい接続を正常なバックエンドへ送ります。
[600ms]
[serious] ゾーン冗長フロントエンド

## Step 5 · Do not forget the data

[calm] データを忘れない。
[600ms]
データ依存先には別途回復性が必要です。通常のディスクはアプリの状態を複製しません。
[600ms]
[serious] 回復性は個別に構成

## Step 6 · A zone goes unavailable

[calm] 一つのゾーンが停止。
[600ms]
予備容量と正常なデータがあれば、検出後の新しい接続は正常なゾーンを使います。
[600ms]
[serious] 予備の処理能力、正常なデータ依存先、正常性プローブの設定が前提です。

## Step 7 · Zonal VMs - All in One

[calm] ゾーン VM - 全体像。
[600ms]
配置の分離、アプリの準備、回復性のある経路、データ計画を組み合わせます。
[600ms]
[serious] アプリ、データ、フェールオーバーの準備が必要です。
