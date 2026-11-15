# Narrator Script — Network · VPN gateway SKUs and policies

**Source animation:** [GatewaySkusAndPolicies.html](../../../journeys/Network/GatewaySkusAndPolicies.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings>
- <https://learn.microsoft.com/azure/vpn-gateway/about-gateway-skus>
- <https://learn.microsoft.com/azure/vpn-gateway/design>
- <https://learn.microsoft.com/azure/vpn-gateway/point-to-site-about>

---

## Step 1 · Which gateway, which settings?

[calm] Contoso Retail には、支店と、リモートワーカーのチームがあります。どちらも Azure に接続する必要があります。
[600ms]
[curious] 支店は、VPNデバイスからサイト間トンネルで接続します。リモートワーカーはポイント対サイトを使い、クライアントトンネルとサインインで接続します。
[600ms]
[confident] 1つの VPN ゲートウェイでは、4つの選択がうまくいくかどうかを左右します。1つずつ決めていきましょう。

## Step 2 · Route-based or policy-based?

[calm] VPNタイプは、トラフィックをどのトンネルに割り当てるかと、そもそもどの機能が使えるかを決めます。SKU を選ぶ前に決めておきましょう。
[600ms]
[confident] ポイント対サイト、BGP、アクティブ・アクティブが使えるのは、ルートベースです。
[600ms]
[serious] ポリシーベースは Basic SKU にしかなく、トンネルは1本で、ポイント対サイトも使えません。変換はできません。削除して、ルートベースのゲートウェイを作り直します。

## Step 3 · What a bigger SKU buys you

[curious] 上位のティアほど、CPU と帯域幅が増えます。その結果、サイト間トンネル、ポイント対サイト接続、スループットクラス、ゲートウェイの背後の VM の、4つの上限が上がります。
[600ms]
[serious] Basic より上のティアには、Basic にはない本番向けの機能も付いてきます。BGP、アクティブ・アクティブ、ゾーン冗長、RADIUS、カスタムポリシー、IPv6 などです。
[600ms]
[reassuring] スループットの数値は、保証ではなくベンチマークです。実際のゲートウェイのサイズを決めるときは、最新の表を確認してください。

## Step 4 · Generation and the AZ suffix

[calm] SKU 名は、2つの部分に分けて読みます。世代と、末尾が AZ かどうかです。
[600ms]
[confident] 第2世代は、同じティアでスループットが高く、最上位のティアも加わります。AZ はゾーン冗長のことで、リージョンに可用性ゾーンがある場合に使えます。
[600ms]
[serious] 今から作るなら、ゾーン冗長の AZ SKU です。Basic は廃止されるわけではありませんが、開発とテスト向けです。

## Step 5 · Active-standby or active-active?

[calm] VPN ゲートウェイは、どれも2つのインスタンスでできています。既定では1つが動いて、1つが待機します。これがアクティブ・スタンバイです。
[600ms]
[confident] アクティブ・アクティブでは、両方を動かし、それぞれに専用のパブリックIPを付けます。Basic 以外のルートベースゲートウェイと、Standard の静的パブリックIPが必要です。
[600ms]
[serious] スタンバイが引き継ぐと、短い中断が起こります。ポイント対サイトのユーザーは、再接続が必要です。

## Step 6 · Dual redundancy and BGP failover

[curious] アクティブ・アクティブのゲートウェイを、オンプレミスのデバイス2台と組み合わせると、4本のトンネルがすべてアクティブになります。
[600ms]
[impressed] BGP は、障害の起きたトンネルのルートを取り下げるので、トラフィックは自動的に残りのトンネルに移ります。
[600ms]
[serious] ローカルネットワークゲートウェイ2つ、接続2つ、そして BGP が必要です。これで、両方の接続が同じプレフィックスを運べます。2台のデバイスが BGP に対応しているかも確認してください。

## Step 7 · How the tunnel is built: IKE, then IPsec

[calm] 2台のデバイスは、2つのフェーズでルールを取り決めます。
[600ms]
[curious] フェーズ1は IKE で、暗号化、整合性、DH グループなど、通信のしかたを決めます。フェーズ2は IPsec で、PFS グループも含め、データの保護方法を決めます。
[600ms]
[reassuring] 特に指定しなければ、Azure が、ほとんどのデバイスで動くように選んだ既定の提案セットを提示します。

## Step 8 · When the partner device dictates

[calm] コンプライアンスのルールや古いファイアウォールが、1つの組み合わせしか受け付けないこともあります。
[600ms]
[confident] そんなときは、接続にカスタムの IPsec と IKE のポリシーを設定して、使う組み合わせを正確に指定します。ポリシーは接続ごとに1つで、Basic では使えません。
[600ms]
[reflective] 表示している値は例で、推奨ではありません。ポリシーベースのセレクターを使うと、ルートベースのゲートウェイでも、トランジットなしでポリシーベースのファイアウォールと通信できます。

## Step 9 · Point-to-site tunnel types

[calm] リモートワーカーは、ノートパソコンからトンネルを開始します。トンネルの種類によって、接続できるデバイスと、通過できるファイアウォールが決まります。
[600ms]
[confident] OpenVPN はポート443の TLS ベースなので、ほとんどのファイアウォールを通り抜けられ、対応クライアントも最も幅広いです。IKEv2 は標準ベースですが、UDP ポートをブロックしているネットワークもあります。
[600ms]
[serious] SSTP は Windows 専用で、廃止が予定されています。2026年8月31日以降は有効にできず、2027年3月31日に動作しなくなります。

## Step 10 · Who gets in: three sign-in methods

[calm] ゲートウェイがトンネルを受け入れる前に、ユーザーを認証する必要があります。すでに使っている ID システムに合わせて、方式を選びましょう。
[600ms]
[confident] Microsoft Entra ID は、条件付きアクセスと MFA が使えますが、対応するのは OpenVPN と Azure VPN クライアントだけです。RADIUS は AD の資格情報を使い、NPS 経由で MFA を追加できます。ただし Basic では使えません。
[600ms]
[reassuring] 複数の方式を同時に有効にできます。各クライアントが、少なくとも1つに対応していれば大丈夫です。

## Step 11 · ExpressRoute gateway, with VPN beside it

[calm] ExpressRoute には、専用のゲートウェイタイプと SKU があります。ErGw1Az、ErGw2Az、ErGw3Az、ErGwScale です。SKU が上がるほど、CPU と帯域幅が増えます。
[600ms]
[curious] その隣にサイト間 VPN ゲートウェイを置くと、回線が故障したときのバックアップになります。
[600ms]
[serious] そのためには、Basic 以外のルートベースの VPN ゲートウェイと、スラッシュ27以上のゲートウェイサブネットが必要です。オンプレミスでは、ExpressRoute のルートを優先させましょう。

## Step 12 · Try your own requirements

[curious] 次はあなたの番です。左側で要件を設定してください。支店、スループットクラス、レジリエンス、支店のデバイス、リモートワーカーです。
[600ms]
[impressed] すると右側の4つの設定が光って、何を選ぶべきかが、理由と一緒に表示されます。
[600ms]
[reassuring] これは Learn のガイダンスに沿った学習用モデルで、サイズ見積もりのツールではありません。デプロイする前に、最新のページで上限と料金を確認してください。

## Step 13 · One gateway, four decisions

[calm] まとめです。ルートベースでゾーン冗長、必要な場所ではアクティブ・アクティブと BGP を使います。
[600ms]
[confident] カスタムポリシーは、パートナーから求められたときだけ追加します。サインイン方式は、自社の ID システムに合うものを選びましょう。
[600ms]
[proud] A Z 700 も A Z 305 も、要件からこれらの設定を選べることが求められます。次は、Learn の学習ガイドです。
