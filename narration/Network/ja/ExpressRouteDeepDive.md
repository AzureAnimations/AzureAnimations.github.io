# Narrator Script — Network · ExpressRoute: models, SKUs, peerings and resilience

**Source animation:** [ExpressRouteDeepDive.html](../../../journeys/Network/ExpressRouteDeepDive.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/expressroute/expressroute-introduction>

---

## Step 1 · What a Circuit Really Is

[calm] Contosoは ExpressRoute回線を注文します。回線とは、接続プロバイダーが Microsoft に向けて提供する、2本1組のリンクです。
[600ms]
[curious] 回線は、サービスキーで識別します。サービスキーは G U I D で、シークレットではありません。
[600ms]
[confident] 帯域幅は固定で、回線上のすべてのピアリングで共有します。

## Step 2 · Connectivity Models

[curious] Contosoが同じ回線につなぐ方法は、プロバイダー経由で3通りあります。クラウド交換、ポイントツーポイントのイーサネット接続、そして I-P VPN です。
[600ms]
[confident] どのモデルを選ぶかで、経路の形と、ルーティングを誰が管理するかが決まります。
[600ms]
[reflective] レイヤー2のプロバイダーなら、ルーティングは自分で管理します。マネージドのレイヤー3なら、プロバイダーが代わりに管理します。

## Step 3 · SKU and Tier

[calm] 回線のSKUは、どこまで届く必要があるかで選びます。
[600ms]
[confident] Local は、ピアリングロケーションに近いリージョンに届きます。Standard は、同じ地政学的エリアのすべてのリージョンに届きます。Premium は世界中のすべてのリージョンに届き、上限も高くなります。
[600ms]
[reassuring] 次に、データプランを選びます。従量課金か無制限かです。従量課金から無制限には変更できますが、元には戻せません。

## Step 4 · Private Peering

[calm] プライベートピアリングは、Contoso のネットワークを、仮想ネットワークのプライベートアドレスにつなぎます。
[600ms]
[confident] リンクごとに小さなサブネットを1つずつ、合わせて2つ確保し、VLANと、自分の A、S、N を選びます。Microsoft 側は、Microsoft 自身の A、S、N を使います。
[600ms]
[serious] ピアリング用のサブネットは、仮想ネットワークと重なってはいけません。仮想ネットワークに届くようにするには、ゲートウェイサブネットにゲートウェイを追加し、回線への接続も作ります。

## Step 5 · Microsoft Peering and Route Filters

[curious] Microsoftピアリングでは、Microsoft 365 や Azure のプラットフォームサービスといった、パブリックエンドポイントに届きます。
[600ms]
[confident] 各サービスのプレフィックスには BGP コミュニティが付いていて、ルートフィルターは、そのコミュニティの許可リストです。
[600ms]
[serious] フィルターを関連付けるまでは、新しい回線はプレフィックスを1つもアドバタイズしません。

## Step 6 · Route Advertisement and BGP Communities

[calm] Contoso は BGP でプレフィックスをアドバタイズします。Microsoft は、返すルートにコミュニティのタグを付けます。こちらが付けたタグは無視されます。
[600ms]
[curious] 同じプレフィックスが2つの回線から届いた場合、Azure はより具体的なルートを優先します。
[600ms]
[confident] 接続の重みで制御することも、もう一方の回線で AS パスを付け足して制御することもできます。ルートがまったく同じなら、Azure は両方の回線に負荷を分散します。

## Step 7 · Resilience Design

[serious] Contoso は、単一障害点を1層ずつ減らしていきます。
[600ms]
[confident] 各回線には、アクティブ・アクティブで動くリンクが2本あるので、別々のデバイスで終端させましょう。ロケーション全体の障害に備えるなら、別のピアリングロケーションに2つ目の回線を追加します。
[600ms]
[reassuring] 最後に、ゾーン冗長の ExpressRoute ゲートウェイを置きます。これでゲートウェイが弱点になりません。

## Step 8 · Global Reach and FastPath

[curious] Global Reach を使うと、Contoso の各オフィスを回線同士でつなげるので、拠点間のデータは Microsoft のグローバルネットワーク経由でやり取りされます。
[600ms]
[confident] FastPath を使うと、データはゲートウェイを通らず、仮想マシンに直接届きます。ルートの交換は、引き続きゲートウェイが行います。
[600ms]
[reflective] FastPath には上位のゲートウェイSKUが必要で、リージョンをまたぐ Global Reach には Premium が必要です。

## Step 9 · ExpressRoute Direct and Encryption

[calm] ExpressRoute Direct は、Contoso のルーターを、デュアルポートで Microsoft に直接つなぎます。大量のデータ取り込みや、物理的な分離が必要なときに使います。
[600ms]
[serious] トラフィックは、既定では暗号化されません。
[600ms]
[confident] MACsec は物理リンクを保護しますが、使えるのは Direct だけで、キーは Key Vault に置きます。IPsec は、経路全体をエンドツーエンドで保護します。両方を併用することもできます。

## Step 10 · Bidirectional Forwarding Detection

[concerned] リンクが切れても、BGP だけだと、気づくまでに最大で約3分かかることがあります。
[600ms]
[impressed] 双方向フォワーディング検出は、リンクを常に監視していて、障害を1秒未満で検出します。
[600ms]
[reflective] Microsoft 側では、新しいピアリングで既定でオンになっていますが、自分のデバイスでは自分で設定します。検出は速くなりますが、フェイルオーバーの完了には、やはり時間がかかります。

## Step 11 · Diagnose a Circuit

[serious] Azure から Contoso のサブネットに届きません。下の層から順に確認していきましょう。
[600ms]
[confident] まずは回線です。状態が Enabled で、プロバイダーのステータスが Provisioned になっている必要があります。次に、両側のピアリングの値が一致しているかを確認し、両方のパスの A R P テーブルも見ます。
[600ms]
[determined] 最後に、BGP の状態とルートテーブルを確認します。状態が Active や Idle なら、サブネット、VLAN、A、S、N、または M D 5 キーの不一致が疑われます。
