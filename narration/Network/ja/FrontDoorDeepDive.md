# Narrator Script — Network · Azure Front Door: endpoints, origins, rules and private origins

**Source animation:** [FrontDoorDeepDive.html](../../../journeys/Network/FrontDoorDeepDive.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/frontdoor/front-door-routing-architecture>
- <https://learn.microsoft.com/azure/frontdoor/private-link>
- <https://learn.microsoft.com/azure/web-application-firewall/afds/afds-overview>

---

## Step 1 · What Front Door adds

[calm] 3つのサービスに、それぞれ役割があります。Traffic Manager は DNS で応答するドメインレベルのサービスなので、フェイルオーバーは、キャッシュと有効期間が切れるのを待つことになります。
[600ms]
[confident] Application Gateway は、ネットワーク内にあるリージョン単位のレイヤー7プロキシです。
[600ms]
[impressed] Azure Front Door は、Microsoft のエッジにあるグローバルなレイヤー7の入口です。TLSオフロード、パスベースのルーティング、キャッシュ、高速なフェイルオーバーを備えています。

## Step 2 · Standard vs Premium: what each buys

[curious] Front Door には2つのティアがあります。どちらもグローバルにルーティングでき、キャッシュやルールエンジンも使えて、WAF のカスタムルールにも対応しています。
[600ms]
[confident] Microsoft マネージドの WAF ルールセット、ボット保護、オリジンへの Private Link が加わるのは、Premium だけです。
[600ms]
[encouraging] クラシックは廃止される予定なので、新しい設計は Standard か Premium で始めましょう。マトリックスでニーズをクリックすると、どのティアが対応しているかわかります。

## Step 3 · Endpoints, routes and origin groups

[calm] エンドポイントは、ドメイン向けのルートをまとめるものです。Front Door がドメイン名を生成しますし、独自のカスタムドメインも追加できます。
[600ms]
[confident] ルートは、ドメインとパスのパターンに一致したリクエストを、オリジングループに送ります。
[600ms]
[reassuring] オリジングループは、オリジンの集まりです。App Service アプリ、ストレージ、任意のホストなどを、まとめてプローブし、負荷分散します。

## Step 4 · Health probes and latency routing

[curious] すべてのエッジロケーションが、各オリジンをプローブします。正常でないオリジンは、選択肢から外れます。
[600ms]
[confident] Front Door は、正常なオリジン、優先度、遅延、重みの順に絞り込んでいきます。
[600ms]
[reflective] 既定の方式は最小遅延で、リクエストは、最も速い正常なオリジンに送られます。ここの数字は、説明用のものです。

## Step 5 · Caching and compression

[calm] ルートでキャッシュをオンにすると、エッジが GET 応答のコピーを保持します。
[600ms]
[confident] 次の買い物客はエッジから受け取れるので、オリジンは呼ばれません。圧縮で、応答のサイズも小さくなります。
[600ms]
[serious] 個人のコンテンツは、絶対にキャッシュしないでください。動的なものには、キャッシュをオフにした別のルートを使い、更新したいときはパスをパージします。

## Step 6 · Traffic acceleration: edge and split TCP

[curious] まず、DNS が買い物客を、適切なエッジロケーションに案内します。
[600ms]
[confident] そのエッジが、近くにいる買い物客の TCP 接続を終端します。これが分割 TCP で、時間のかかるセットアップの往復が短く済みます。
[600ms]
[impressed] オリジンへの長い接続は別に、あらかじめ開いておき、多くの買い物客で使い回します。

## Step 7 · TLS at the edge and end to end

[calm] Front Door は、エッジで買い物客の TLS を終端し、ルーティングとルールを適用してから、オリジンへの2つ目の TLS 接続を開きます。
[600ms]
[confident] エンドツーエンドで暗号化するには、転送プロトコルに HTTPS を設定します。
[600ms]
[reassuring] カスタムドメインには、マネージド証明書を使うか、Key Vault から独自の証明書を持ち込めます。T L S 1.2 と 1.3 に対応しています。

## Step 8 · Rules: rewrite, redirect, headers

[curious] ルールセットは、WAF とルートの一致のあと、リクエストが先に進む前に実行されます。
[600ms]
[confident] ルールには、すべて満たす必要がある一致条件と、アクションがあります。
[600ms]
[encouraging] よく使うアクションは、URL リダイレクト、URL 書き換え、リクエストヘッダーやレスポンスヘッダーの変更です。

## Step 9 · Secure an origin with Private Link

[calm] Premium なら、Private Link でオリジンに接続できます。これがプライベートの選択肢です。
[600ms]
[confident] Front Door がプライベートエンドポイントを要求すると、オリジン側にはリクエストが保留中として表示されるので、それを承認します。
[600ms]
[proud] その後のトラフィックは Microsoft バックボーンの中にとどまり、オリジンをパブリックインターネットから到達可能にしておく必要もありません。

## Step 10 · WAF policy and rule sets

[calm] WAF ポリシーは、送信元に近いエッジで、すべてのリクエストを検査します。
[600ms]
[confident] まずカスタムルールが優先度順に実行され、そのあとでマネージドルールセットが実行されます。Standard はカスタムルールのみで、Premium はマネージドセットとボット保護が加わります。
[600ms]
[proud] ログだけ取るなら検出モード、実際に対処するなら防止モードで実行し、プロファイル、ドメイン、ルートのいずれかに関連付けます。これで A Z 700 の Front Door のスキルをカバーできました。
