# Narrator Script - 最初の VM を組み立てる

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_vm-journeys/content.mjs.

## Step 1 · The shop needs OS control

[calm] 店舗には OS の制御が必要。
[600ms]
Contoso は自分でアプリ環境を導入して管理するために VM を選びます。
[600ms]
[serious] ゲスト OS とアプリは利用者が管理し、基盤ホストは Azure が管理します。

## Step 2 · Start with an image

[calm] イメージから始める。
[600ms]
イメージは OS ディスクのオペレーティングシステムと初期ソフトウェアを提供します。
[600ms]
[serious] この例は Linux。Windows イメージも選択できます。

## Step 3 · Choose a size

[calm] サイズを選ぶ。
[600ms]
CPU とメモリを負荷に合わせます。サイズは OS イメージとは別の選択です。
[600ms]
[serious] 負荷の測定、リージョンの提供状況、予算に基づいてサイズを選びます。

## Step 4 · Give data a durable home

[calm] データを永続的に保存する。
[600ms]
OS ディスクとデータディスクは役割が異なります。一時ストレージは永続的な複製ではありません。
[600ms]
[serious] 一時ストレージがある場合も、永続データの保存先にはできません。

## Step 5 · Connect the private network

[calm] プライベートネットワークに接続。
[600ms]
NIC は仮想ネットワークのサブネット内で VM にプライベート IP を与えます。
[600ms]
[serious] この VM にパブリック IP は不要です。ネットワークのセキュリティ規則は必要です。

## Step 6 · Connect, then authenticate

[calm] 接続と認証を分ける。
[600ms]
Bastion は管理経路を提供します。SSH キーで Linux の管理者を認証します。
[600ms]
[serious] 専用サブネットの Bastion Basic を使用。SSH キーで Linux に認証します。接続と権限は別です。

## Step 7 · Stopped is not deallocated

[calm] 停止と割り当て解除は別。
[600ms]
電源状態でコンピューティングの課金が変わります。ディスクなどのリソースは残ります。
[600ms]
[serious] 従量課金: コンピューティングとディスクに課金されます。

## Step 8 · Your VM - All in One

[calm] VM - 全体像。
[600ms]
イメージ、サイズ、ディスク、ネットワーク、アクセスが一つの VM を構成します。次は可用性です。
[600ms]
[serious] 動作する VM が一台あるだけでは、高可用性の設計は完成しません。
