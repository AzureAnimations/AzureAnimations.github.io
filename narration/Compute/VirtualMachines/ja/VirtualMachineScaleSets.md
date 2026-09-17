# Narrator Script - 仮想マシン スケール セット

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachineScaleSets.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · Demand changes

[calm] 需要は変わる。
[600ms]
Contoso には需要に合わせて増やせる容量が必要です。大きな VM 一台で十分とは限りません。
[600ms]
[serious] ポリシーの例です。評価、クールダウン、作成、準備には時間がかかります。

## Step 2 · Manage a group of VMs

[calm] VM のグループを管理。
[600ms]
スケール セットは VM インスタンスを管理します。アプリと負荷分散は別途構成します。
[600ms]
[serious] アプリの複製と負荷分散は個別に構成します。

## Step 3 · Choose an orchestration mode

[calm] オーケストレーションを選ぶ。
[600ms]
Flexible は標準 VM、Uniform はスケール セット専用 VM リソースを使います。以降は Flexible です。
[600ms]
[serious] 作成時にモードを選び、後から変更はできません。このコースは Flexible を使います。

## Step 4 · Configure a bounded scaling policy

[calm] 上限と下限のあるポリシー。
[600ms]
評価後の目標は VM 2～4 台です。新しい VM は準備が完了してからトラフィックを受けます。
[600ms]
[serious] ポリシーの例です。評価、クールダウン、作成、準備には時間がかかります。

## Step 5 · Combine scaling with zone placement

[calm] スケールとゾーン配置を組み合わせる。
[600ms]
設定により複数ゾーンに展開できます。容量と配置は別の判断です。
[600ms]
[serious] ゾーン分散は構成が必要です。非ゾーン構成では保証されません。

## Step 6 · Separate routing health from repair

[calm] 経路の正常性と修復を分ける。
[600ms]
プローブは経路を制御します。Flexible の自動修復は Application Health 拡張機能とポリシーを使います。
[600ms]
[serious] Flexible の修復には Application Health 拡張機能と猶予期間付きの修復ポリシーが必要です。

## Step 7 · Scale in with the application in mind

[calm] アプリを考慮してスケールイン。
[600ms]
余分な VM を削除する前に、ドレイン、終了処理、VM 外の永続状態を設計します。
[600ms]
[serious] 終了を考慮し、処理をドレインし、永続状態は使い捨て VM の外に置きます。

## Step 8 · VM Scale Sets - All in One

[calm] VM スケール セット - 全体像。
[600ms]
VM 構成、オーケストレーション、スケール、ゾーン、正常性、データを組み合わせます。
[600ms]
[serious] アプリ、データ、フェールオーバーの準備が必要です。
