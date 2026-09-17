# ナレーション原稿 - Azureのコンピューティング

**Source animation:** journeys/Fundamentals/AzureCompute.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/virtual-machines/availability-set-overview -->

## Step 1 · How much do you want to manage?

[calm] Contosoは、ウェブサイトを動かし、注文イベントを処理し、従業員に業務アプリを提供します。コンピューティングとは、こうした仕事を実行する処理能力です。
[600ms]
[confident] すべてを同じサービスで動かす必要はありません。仕事の要件と、自分たちで管理したい範囲に合わせて選びます。

## Step 2 · Take the whole machine

[calm] 在庫システムはOSを制御する必要があるため、Contosoは仮想マシンを選びます。プロセッサーとメモリが処理を担い、ディスクがOSとデータを保存し、ネットワークインターフェイスが接続を提供します。
[600ms]
[confident] 物理ハードウェアはMicrosoftが運用します。仮想マシンと、その中のゲストOSの設定や保守はContosoの担当です。

## Step 3 · Prepare the VM workload

[calm] 仮想マシンは故障することがあります。可用性セットは、特定のハードウェア障害や保守更新の影響を分離するグループにマシンを分散します。スケールセットは、複数台の管理や拡張を支援します。
[600ms]
[confident] どちらもショップ全体の復旧を自動で設計するものではありません。アプリ、データ、トラフィックの扱いも準備します。

## Step 4 · Package the app instead

[calm] コンテナーは、アプリのコードと必要な依存関係をまとめます。Contosoはそのパッケージを、対応するテスト環境から本番環境へ、ソフトウェア構成の違いを減らして移せます。
[600ms]
[confident] パッケージ化と実行場所の提供は別です。コンテナーにも、動かす場所、設定、接続、適切なセキュリティが必要です。

## Step 5 · Let the platform run it

[calm] お客様向けのウェブサイトにはApp Serviceを選びます。ウェブアプリや、ほかのソフトウェアから呼び出すインターフェイスを、管理された基盤で動かせます。
[600ms]
[confident] Contosoは基盤のOSを保守する代わりに、コードを配置してアプリを設定します。在庫システムは要件が違うので、仮想マシンに残します。

## Step 6 · React to an order

[calm] 注文の到着はイベントです。何かが起き、それをきっかけに仕事を始めます。Azure Functionsは、そのイベントに応じてContosoのコードを管理された基盤上で実行できます。
[600ms]
[confident] サーバーレスでもサーバーは存在します。サービスが基盤を管理するという意味で、拡張や課金の動作はホスティングプランに依存します。

## Step 7 · Deliver desktops, not servers

[calm] 倉庫の従業員には、業務用デスクトップとアプリが必要です。Azure Virtual Desktopなら、クラウドのサーバーのそばで作業しなくても、遠隔からその環境を利用できます。
[600ms]
[confident] これは従業員の作業環境を提供するサービスです。Contosoが公開ショッピングサイトを動かすために選んだサービスとは異なります。

## Step 8 · Compute Options - All in One

[calm] 仕事とサービスを対応させましょう。OSの制御には仮想マシン、パッケージ化にはコンテナー、ウェブにはApp Service、イベントにはFunctions、従業員にはVirtual Desktopです。
[600ms]
[confident] コードを動かす場所は決まりました。次は、在庫システムと在庫データベースを、承認された経路で接続します。