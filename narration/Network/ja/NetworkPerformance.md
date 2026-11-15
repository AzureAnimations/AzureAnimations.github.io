# Narrator Script — Network · Design for network performance: latency, throughput and the path

**Source animation:** [NetworkPerformance.html](../../../journeys/Network/NetworkPerformance.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview>
- <https://learn.microsoft.com/azure/frontdoor/front-door-traffic-acceleration>
- <https://learn.microsoft.com/azure/expressroute/about-fastpath>

---

## Step 1 · Is It Slow, or Is It Far?

[calm] Contoso のオンラインショップは、ホスティングリージョンから遠いお客様にとっては、動きが遅く感じられます。
[600ms]
[curious] レイテンシは、2点間の往復にかかる時間です。スループットは、1秒あたりに移動するデータ量です。パケットロスは、届かなかったパケットの割合です。
[600ms]
[confident] それぞれ対処法が違うので、解決策を選ぶ前に、まず症状をはっきりさせましょう。

## Step 2 · Measure First

[calm] Connection Monitor は、経路上のレイテンシとパケットロスをテストして、ホップごとに表示します。
[600ms]
[confident] Network Insights は、ネットワークリソースのトポロジ、正常性、メトリクスを、設定なしで表示します。
[600ms]
[curious] VM 間のレイテンシは、Windows なら Latte、Linux なら SockPerf で測ります。通常の ping は ICMP を使うので、TCP や UDP と同じテストではありません。

## Step 3 · Keep Chatty VMs Close

[curious] 通信の多い VM は、往復のたびに遅延を払うことになります。リージョン内でも近いですが、ゾーン内ならもっと近くなります。
[600ms]
[reflective] ただし、1つのゾーンが複数のデータセンターにまたがることがあるので、同じゾーンのマシン同士でも、数ホップ離れていることがあります。
[600ms]
[serious] 近接配置グループを使うと、1つのデータセンターにまとまるので、レイテンシが最も低くなります。その代わり、割り当てに失敗することがありますし、レジリエンスも多少犠牲になります。

## Step 4 · Accelerated Networking

[calm] 通常、すべてのパケットは、ホストの仮想スイッチを通ります。
[600ms]
[impressed] Accelerated Networking を使うと、ネットワークカードがトラフィックを VM に直接送ります。ネットワークセキュリティグループなどのポリシーも、ハードウェアで適用されます。
[600ms]
[confident] レイテンシとジッターが減り、CPU の使用率も下がります。同じ仮想ネットワーク内の両方の VM で、対応サイズのものを停止して割り当て解除した状態で、有効にしてください。

## Step 5 · VM Size Sets the Ceiling

[calm] VM のサイズごとに、アウトバウンド帯域幅の上限が決まっています。
[600ms]
[serious] この上限は、VM から出るすべてのトラフィックが対象で、宛先は関係なく、すべてのネットワークカードで共有されます。カードを追加したり Accelerated Networking を使ったりしても、上限は上がりません。
[600ms]
[encouraging] 上限に達しているなら、ネットワーク帯域幅の大きいサイズを選びましょう。

## Step 6 · Edge Acceleration

[curious] Front Door や CDN のエッジロケーションは、ユーザーの近くにあり、そこからキャッシュしたファイルを配信します。
[600ms]
[confident] 動的なトラフィックでは、分割 TCP が、近くのエッジでユーザーの接続を終端し、オリジンへの長く維持された接続を使い回します。
[600ms]
[serious] キャッシュするのは静的ファイルだけにして、個人データは絶対にキャッシュしないでください。また、クラシックの Azure CDN は廃止されるので、新しい設計は Front Door で始めましょう。

## Step 7 · Pick Routing for Speed

[calm] ユーザーを最速の場所に案内できるサービスはいくつかありますが、動作するレイヤーがそれぞれ違います。
[600ms]
[confident] Traffic Manager は、DNS で最もレイテンシの低いエンドポイントを返します。Front Door は、HTTP と HTTPS のユーザーを、近くのエッジで受け入れます。
[600ms]
[curious] クロスリージョンのロードバランサーは、TCP と UDP のアプリに、1つの静的なグローバルIPを提供します。タブを選んで、比べてみてください。

## Step 8 · Private Path to On-Premises

[calm] プライベート回線は帯域幅が固定なので、ピーク時のトラフィックに合わせてサイズを決めます。オーバーサブスクライブすると、パケットが破棄されます。
[600ms]
[confident] FastPath を使うと、データはゲートウェイを通りません。ルートの交換は、引き続きゲートウェイが行います。高性能なゲートウェイSKUが必要です。
[600ms]
[reassuring] Global Reach は、オンプレミスの拠点同士を、Microsoft のネットワーク経由でつなぎます。

## Step 9 · Where Inspection Adds Latency

[concerned] ハブのファイアウォールを経由させると、ホップが1つ増えます。
[600ms]
[confident] 遅延に敏感なスポーク同士を直接ピアリングすれば、余分なホップは増えません。レイテンシを最小限にするには、この方法がおすすめです。
[600ms]
[reflective] Virtual WAN は、Microsoft マネージドのハブルーターを追加します。必要な場所には、ルーティングインテントで検査を戻すこともできます。

## Step 10 · All in One

[calm] まず症状を特定します。レイテンシ、スループット、パケットロスのどれかです。そして、Connection Monitor と Network Insights で測定します。
[600ms]
[confident] そのうえで、配置、ネットワークカード、VM サイズ、エッジ、ルーティング、プライベートパスのどれかで対処します。1度に変えるのは、1つだけにしましょう。
[600ms]
[proud] 症状ごとに対処法を結びつけられれば、ネットワークのパフォーマンスを最適化するソリューションを提案できます。これは A Z 305 のスキルです。
