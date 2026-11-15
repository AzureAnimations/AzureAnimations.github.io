# ナレーション原稿 - Azureのネットワーク

**Source animation:** journeys/Fundamentals/AzureNetworking.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/private-link/private-endpoint-overview ; https://learn.microsoft.com/training/modules/describe-azure-compute-networking-services/ ; https://learn.microsoft.com/azure/expressroute/secure-expressroute#data-protection -->

## Step 1 · An order needs the stock count

[calm] お客様が購入手続きに進みました。App Serviceのサイトは在庫用仮想マシンを呼び出しますが、そのシステムには、在庫を調べるSQLデータベースへの接続がまだ必要です。
[600ms]
[confident] このレッスンでは、その未完成の経路を作ります。アプリを動かし、記録を保存するだけでは、両者はつながりません。

## Step 2 · Give the backend a private address

[calm] Contosoは在庫用仮想マシンを、VNetと呼ばれる仮想ネットワークに置きます。プライベートアドレスは、接続されたプライベートネットワーク内で、そのマシンを識別します。
[600ms]
[confident] SQLは別のマネージドサービスのままです。アドレスを与えても、データベースがネットワーク内へ移ったり、記録を読む権限が付いたりはしません。

## Step 3 · Organize the address space

[calm] サブネットは、仮想ネットワーク内を区切った小さなアドレス範囲です。Contosoはアプリ用の範囲と、サービスへのプライベート接続用の範囲を分けて用意します。
[600ms]
[confident] サブネットはアドレスを整理するもので、それ自体がセキュリティルールではありません。何を通信させるか、適切な制御も必要です。

## Step 4 · Find inventory by name

[calm] アプリはアドレスを覚える代わりに、名前でデータベースを指定します。プライベートDNSが、その名前を図のプライベートエンドポイントのアドレスへ変換します。
[600ms]
[confident] DNSの答えは、接続先を示します。ネットワークの経路を作ったり、在庫を読む権限を与えたりするものではありません。

## Step 5 · Connect privately to the database

[calm] 承認されたプライベートエンドポイントが、Contosoのサブネット内のネットワークインターフェイスを通してSQLへ接続します。管理されたデータベース本体は、サブネットの外にあります。
[600ms]
[confident] パブリックネットワークアクセスの無効化は別途行い、データベース権限も確認します。非公開の経路と、許可されたデータアクセスは別の要件です。

## Step 6 · Reach the fulfilment network

[calm] 出荷処理アプリは、別の仮想ネットワークで動いています。ピアリングはMicrosoftのバックボーンで2つのネットワークを接続し、ルールで許可されたプライベート通信を可能にします。
[600ms]
[confident] それぞれのアドレス空間は残ります。接続しても1つのリソースグループになるわけではなく、セキュリティ確認も必要です。

## Step 7 · Keep the warehouse connected

[calm] 倉庫には、社内で動かすシステムも残っています。サイト間VPNは、インターネット上の暗号化トンネルを使い、倉庫のネットワークをAzureに接続します。
[600ms]
[confident] 倉庫を移さなくても、ショップのハイブリッド環境に参加できます。ただし、経路やアクセス制御は設定する必要があります。

## Step 8 · Consider a private circuit

[calm] 接続要件によっては、通信事業者を通してExpressRouteを契約する方法もあります。VPNが利用するインターネット経路ではなく、Microsoftのクラウドサービスへのプライベート接続を提供します。
[600ms]
[confident] プライベートであることと暗号化は同じではありません。暗号化が必要なら、ExpressRouteにも適切な設計を追加します。

## Step 9 · The order can reach inventory

[calm] 部品をつなげましょう。在庫システムにはアドレスがあり、DNSがデータベース名を解決し、承認されたエンドポイントが経路を提供します。必要な権限があれば、在庫照会の結果を購入処理へ返せます。
[600ms]
[confident] この例では倉庫にVPNを使います。次は、ショップのほかのデータを保存するサービスを選びます。