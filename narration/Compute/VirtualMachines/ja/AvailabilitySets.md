# Narrator Script - 可用性セット

**Source animation:** journeys/Compute/VirtualMachines/AvailabilitySets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · One host, one point of failure

[calm] ホスト一台が単一障害点に。
[600ms]
店舗は一台の VM に依存しています。ホストの障害でアプリが停止する可能性があります。
[600ms]
[serious] 動作する VM が一台あるだけでは、高可用性の設計は完成しません。

## Step 2 · Prepare another application instance

[calm] 別のアプリインスタンスを準備。
[600ms]
Contoso は二台目の VM を展開し、アプリと負荷分散を個別に構成します。
[600ms]
[serious] アプリの複製と負荷分散は個別に構成します。

## Step 3 · Separate fault domains

[calm] 障害ドメインを分ける。
[600ms]
可用性セットは、共通のハードウェア依存関係を持つグループに VM を分散します。
[600ms]
[serious] 障害ドメインと更新ドメインは可用性ゾーンではありません。

## Step 4 · Separate update domains

[calm] 更新ドメインを分ける。
[600ms]
更新ドメインは計画メンテナンスのための VM グループで、地理的なゾーンではありません。
[600ms]
[serious] 障害ドメインと更新ドメインは可用性ゾーンではありません。

## Step 5 · A hardware failure unfolds

[calm] ハードウェア障害の流れ。
[600ms]
VM が停止し、プローブが検出します。新しい接続は正常なインスタンスに送られます。
[600ms]
[serious] 障害検出には時間がかかります。既存の接続がそのまま移るわけではありません。

## Step 6 · Know the boundary

[calm] 保護の境界を知る。
[600ms]
可用性セットはゾーン全体の停止を保護せず、ゲストアプリも修復しません。
[600ms]
[serious] Microsoft は幅広い可用性機能に VMSS Flexible を推奨しています。可用性セットは非推奨ではありません。

## Step 7 · Availability Sets - All in One

[calm] 可用性セット - 全体像。
[600ms]
障害ドメインはハードウェアのリスクを、更新ドメインは計画メンテナンスを分離します。アプリの準備も必要です。
[600ms]
[serious] アプリの複製と負荷分散は個別に構成します。
