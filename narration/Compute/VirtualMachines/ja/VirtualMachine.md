# Narrator Script - 最初の VM を組み立てる

**Source animation:** journeys/Compute/VirtualMachines/VirtualMachine.html

**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.

## Step 1 · The shop needs OS control

[curious] Contoso Retail は、自社の要件に合わせてオンライン店舗を運営したいと考えています。
[600ms]
[confident] 仮想マシンなら、アプリに必要な構成に合わせて、OS のインストール、調整、更新をチームで管理できます。
[600ms]
[serious] 自由に設定できる分、責任も伴います。物理ホストは Azure が管理し、ゲスト OS の中は利用者が管理します。

## Step 2 · Start with an image

[calm] マシンの出発点はイメージです。
[600ms]
[confident] イメージには OS と初期ソフトウェアが含まれ、マシンの作成時に OS ディスクへ展開されます。
[600ms]
[reassuring] この店舗では Linux を選びましたが、Windows も一般的な選択肢です。

## Step 3 · Choose a size

[calm] 次にサイズを選びます。これはイメージとは別の判断です。
[600ms]
[confident] サイズによって処理能力とメモリ容量が決まるので、店舗の実際の負荷に合わせる必要があります。
[600ms]
[serious] 測定結果、リージョンでの提供状況、予算を基に選びましょう。勘だけでは決めません。

## Step 4 · Give data a durable home

[calm] 次はストレージです。ここにある三種類のディスクは、それぞれ役割が違います。
[600ms]
[confident] OS ディスクはマシンを起動し、データディスクは商品カタログや注文を保存します。どちらも再起動後にデータが残るマネージドディスクです。
[600ms]
[serious] 一時ディスクは作業用の領域です。搭載されている場合も、失って困らないデータだけを置きましょう。

## Step 5 · Connect the private network

[calm] マシンには通信経路も必要です。
[600ms]
[confident] ネットワークインターフェイスによって、仮想ネットワーク内のサブネットにプライベートアドレスを持ちます。店舗はそこから Contoso のほかのシステムと通信します。
[600ms]
[reassuring] この構成では、マシンにパブリックアドレスは不要です。ただし、ネットワークのセキュリティ規則は必要です。

## Step 6 · Connect, then authenticate

[curious] では、管理者はどうやって接続するのでしょうか。
[800ms]
[confident] Azure Bastion を専用サブネットに配置すると、ポータルからセッションを開けます。マシン自体をインターネットに公開する必要はありません。
[600ms]
[serious] Bastion は接続経路を用意し、SSH キーは本人であることを証明します。マシンに到達できることと、ログインを許可されることは別です。

## Step 7 · Stopped is not deallocated

[serious] ここは請求額に直結するポイントです。
[600ms]
[confident] ゲスト OS からシャットダウンしても、停止したマシンはホストに割り当てられたままです。そのため、コンピューティングの課金は続きます。
[600ms]
[reassuring] Azure で割り当てを解除すると、ハードウェアが解放され、コンピューティングの従量課金が止まります。ただし、残したディスクなどのリソースには引き続き料金が発生します。

## Step 8 · Your VM - All in One

[reflective] 全体を振り返ると、一台の仮想マシンは五つの判断で成り立っています。
[600ms]
[confident] イメージ、サイズ、ディスク、ネットワーク経路、そして認証方法です。
[600ms]
[determined] 店舗は動くようになりましたが、まだ一台のホスト上の一台のマシンです。次は可用性を設計しましょう。
