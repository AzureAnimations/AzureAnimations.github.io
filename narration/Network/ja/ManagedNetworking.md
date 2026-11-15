# Narrator Script — Network · Managed Networking — Virtual Network Manager and Route Server

**Source animation:** [ManagedNetworking.html](../../../journeys/Network/ManagedNetworking.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/virtual-network-manager/overview>
- <https://learn.microsoft.com/azure/virtual-network-manager/concept-security-admins>
- <https://learn.microsoft.com/azure/route-server/overview>
- <https://learn.microsoft.com/azure/route-server/route-server-faq>

---

## Step 1 · Many VNets, Managed by Hand

[calm] Contoso は、仮想ネットワークを次々と増やしています。そのたびに、専用のピアリングと、セキュリティルールのコピーが必要になります。
[600ms]
[concerned] ピアリングはリージョンごとに1つずつ作るので、NSG のコピーは少しずつ食い違っていきます。
[600ms]
[serious] しかも、新しい VNet ができるたびに、同じ作業をまた繰り返すことになります。

## Step 2 · One Manager, One Scope

[calm] Azure Virtual Network Manager なら、仮想ネットワークのグループ化、構成、デプロイを、1か所で行えます。
[600ms]
[confident] スコープは、管理グループかサブスクリプションの一覧で、見られる範囲、変更できる範囲の境界になります。
[600ms]
[curious] スコープ外の VNet は管理されません。作業の流れは、スコープ、ネットワークグループ、構成、デプロイの順です。

## Step 3 · Network Groups Choose Who Gets What

[calm] ネットワークグループは、仮想ネットワークを入れるコンテナーです。構成はグループに対して適用するので、メンバー全員に反映されます。
[600ms]
[curious] 静的メンバーシップは、個々の VNet を自分で選ぶ方法です。動的メンバーシップは、タグなどの Azure Policy の条件で、自動的に選ばれます。
[600ms]
[confident] また、1つの VNet を、複数のグループに同時に入れることもできます。

## Step 4 · Connectivity, Defined Once

[calm] 接続構成では、グループごとにトポロジを選びます。
[600ms]
[curious] ハブアンドスポークは、各スポークをハブとピアリングします。メッシュは、グループ内のすべての VNet を、ほかのすべての VNet につなぎます。
[600ms]
[confident] ダイレクト接続を使うと、1つのグループ内のスポーク同士にメッシュが加わり、ハブを経由せずに届くようになります。ここでは、Production にはあり、Test にはありません。

## Step 5 · Security Admin Rules Go First

[calm] 管理者ルールは、中央のネットワークチームが管理するグローバルなルールです。NSG ルールより先に評価されます。NSG ルールは、これまでどおりアプリチームの管理です。
[600ms]
[confident] 許可、拒否、常に許可のいずれかを指定でき、それがトラフィックの扱いを決めます。
[600ms]
[serious] 許可ルールの場合は、最終的な判断を NSG に任せます。でも、拒否ルールや常に許可ルールは、そこで評価が終わるので、NSG で上書きできません。

## Step 6 · Nothing Applies Until You Deploy

[serious] デプロイするまで、構成は計画にすぎません。
[600ms]
[calm] 選んだリージョンに、構成をコミットします。1度に1リージョンずつ、少しずつ展開しましょう。変わるのは、デプロイしたリージョンだけです。
[600ms]
[reassuring] 目標とする状態は、デプロイ済みの構成と、グループのメンバーシップです。リージョンからすべてを取り除くには、そのリージョンに何もデプロイしません。

## Step 7 · Change the Group, the Rules Follow

[curious] 試してみましょう。グループに仮想ネットワークを追加したり、削除したりしてみてください。
[600ms]
[impressed] 構成をデプロイしたあとは、新しいメンバーは再デプロイなしで構成を引き継ぎ、削除したメンバーは構成を失います。ピアリング、ダイレクトリンク、管理者ルールは、すべてメンバーシップに連動します。
[600ms]
[reassuring] 静的メンバーシップは、すぐに更新されます。動的メンバーシップは Azure Policy を待つので、数分かかることがあります。

## Step 8 · Routes by Hand Go Stale

[calm] ネットワーク仮想アプライアンス、略して NVA は、ブランチからルートを学習します。SD-WAN デバイスの場合も、ファイアウォールの場合もあります。
[600ms]
[concerned] そのルートを使うには、ルートが変わるたびに、誰かがルートテーブルを、つまり UDR を編集しなければなりません。
[600ms]
[serious] 新しいプレフィックスは、誰かが追加するまで、ルートがありません。そこが穴になります。

## Step 9 · Azure Route Server in Its Own Subnet

[calm] Route Server は、専用のサブネットで動くマネージドサービスです。サブネット名は RouteServerSubnet で、サイズはスラッシュ26以上です。
[600ms]
[confident] NVA は BGP で Route Server とピアリングします。2つあるインスタンスの両方に対して、ピアリングします。BGP に対応している NVA なら、どれでも使えます。
[600ms]
[impressed] 利点は、NVA が学習したルートについて、UDR を保守しなくて済むことです。

## Step 10 · Routes Flow In and Out Automatically

[curious] NVA は、自分が知っているプレフィックスをアドバタイズします。Route Server はそのルートを仮想ネットワークに反映し、VNet のプレフィックスも逆方向に流れます。
[600ms]
[confident] やることは、ルートの交換だけです。
[600ms]
[reassuring] データは Route Server を通りません。トラフィックは、VM と NVA の間を直接行き来します。

## Step 11 · Gateways and Branch-to-Branch

[calm] 既定では、各コンポーネントは Route Server とだけルートを交換します。
[600ms]
[curious] ルート交換をオンにすると、Route Server が、NVA、VPN ゲートウェイ、ExpressRoute ゲートウェイの間でルートを受け渡します。すると、オンプレミスの拠点どうしが、Azure を経由して通信できます。
[600ms]
[serious] ゲートウェイは、Route Server と同じ VNet に置く必要があります。回線どうしのルートは伝わらないので、そこは Global Reach を使いましょう。

## Step 12 · Which Tool for Which Job?

[curious] 同じネットワークでも、役割は別です。知りたいことに合わせて、答えてくれるサービスを選びましょう。
[600ms]
[confident] 自分で持つ多くの VNet なら、Virtual Network Manager です。タグベースのグループには、Azure Policy を使います。マネージドハブなら、Virtual WAN です。
[600ms]
[calm] ルートについては、固定のパスには UDR、BGP で学習するなら Route Server を使います。

## Step 13 · Managed Networking, All in One

[calm] Virtual Network Manager は、スコープ、グループ、接続、管理者ルール、デプロイで、多数の VNet を一貫して運用します。
[600ms]
[confident] Azure Route Server を使うと、NVA やゲートウェイが、手で編集したテーブルなしでルートを学習できます。RouteServerSubnet、BGP ピアリング、ルート交換を使います。
[600ms]
[proud] これらは A Z 700 のトピックで、A Z 305 のネットワーク設計も含みます。次は、学習ガイドです。
