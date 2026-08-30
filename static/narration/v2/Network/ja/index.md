# Azure Networking Journey — ハブ ウォークスルーのナレーション (ja)

`static/v2/Network/index.html` の `TOUR` ステップと 1 対 1 で対応します。
ステップ 1 はイントロ画面、ステップ 2〜11 はボード上のストップ 01〜10、ステップ 12 はまとめです。
意図的に短く — 1 クリップおよそ 12〜16 秒。スポットライトを止めないためです。

## Step 1 · Welcome

[confident] Azure ネットワーク ジャーニーへようこそ。
[300ms]
[calm] これは、本格的な Azure ワークロードがほぼ必ず行き着くネットワークです。10 本の短いアニメーションが、実際に構築する順序で分解していきます。

## Step 2 · Virtual Network

[confident] ストップ 1。仮想ネットワーク。
[300ms]
[calm] Azure 上のあなた専用のプライベートな領域を、サブネットに分割します。トラフィックのルーティング先も、セキュリティを適用する場所も、サブネットです。

## Step 3 · NSG and ASG

[confident] ストップ 2。ネットワーク セキュリティ グループと、アプリケーション セキュリティ グループ。
[300ms]
[calm] NSG はサブネットを守ります。ASG はワークロードに名前を付けます。IP アドレスだらけのルールではなく、「アプリ層からデータベースへの通信を許可」と書けるようになります。

## Step 4 · VNet peering and Bastion

[confident] ストップ 3。ピアリングと、Bastion。
[300ms]
[calm] ピアリングは Azure バックボーン経由で仮想ネットワークをプライベートに接続します。Bastion はポータルから RDP と SSH を提供するので、仮想マシンにパブリック IP は要りません。

## Step 5 · DNS and Private Link

[confident] ストップ 4。DNS と、Private Link。
[300ms]
[calm] まず名前を解決し、次にプライベートに到達します。プライベート エンドポイントは、プラットフォーム サービスを普通のプライベート アドレスとして自分のサブネットに引き込みます。

## Step 6 · Load balancing

[confident] ストップ 5。負荷分散。
[300ms]
[calm] Front Door、Traffic Manager、Application Gateway、Load Balancer。グローバルかリージョナルか、HTTP かどうか。この 2 つに答えれば、選択はおのずと決まります。

## Step 7 · WAF and Azure Firewall

[confident] ストップ 6。Web アプリケーション ファイアウォールと、Azure Firewall。
[300ms]
[calm] WAF は Web 要求を検査します。Azure Firewall はそれ以外を制御しますが、守れるのはルート テーブルが実際に送り込んだトラフィックだけです。

## Step 8 · VPN Gateway and ExpressRoute

[confident] ストップ 7。VPN Gateway と、ExpressRoute。
[300ms]
[calm] 自社データセンターからの 2 つの入口。インターネット経由の暗号化トンネルか、インターネットを一切通らない専用回線か。両方を併用する組織も少なくありません。

## Step 9 · Azure Virtual WAN

[confident] ストップ 8。Azure Virtual WAN。
[300ms]
[calm] ハブを自分で運用する代わりのマネージド版で、グローバル トランジットが組み込まれています。拠点、VPN ユーザー、回線、スポークが 1 か所で出会います。

## Step 10 · Network monitoring

[confident] ストップ 9。監視。
[300ms]
[calm] Network Watcher は、今このパケットがなぜ破棄されたのかを教えてくれます。Azure Monitor とフロー ログは、先週の火曜に何が起きたのかを教えてくれます。

## Step 11 · Naming convention

[confident] ストップ 10。命名規則。
[300ms]
[calm] 最も技術的でないステップですが、残りの 9 つを保守できる状態に保てるかを決めます。早めに合意しましょう。リソースの名前変更は、たいてい作り直しを意味します。

## Step 12 · The whole picture

[confident] これでジャーニーは一周です。
[300ms]
[calm] 構築し、保護し、接続し、運用する。ボード上のどのストップからでも掘り下げられます。あるいは 1 番、仮想ネットワークから始めましょう。
