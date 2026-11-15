# Narrator Script — Network · Application Gateway: Listeners, Rules, Settings and Rewrites

**Source animation:** [ApplicationGatewayDeepDive.html](../../../journeys/Network/ApplicationGatewayDeepDive.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/application-gateway/configuration-overview>
- <https://learn.microsoft.com/azure/web-application-firewall/ag/ag-overview>

---

## Step 1 · A reverse proxy in its own subnet

[calm] Application Gatewayは、Webトラフィック向けのレイヤー7のリバースプロキシで、仮想ネットワークの中に置きます。
[600ms]
[confident] クライアントがサーバーに直接つながることはありません。ゲートウェイがクライアントの接続を終端して、バックエンドプールのサーバーに、新しい接続を開きます。
[600ms]
[reassuring] ゲートウェイは、専用のサブネットを使います。インスタンスごとに、プライベートアドレスを1つ使うので、スケールできるように余裕を持たせておきましょう。

## Step 2 · v2 SKU, scaling and capacity units

[curious] まず、バージョン2のSKUを選びます。Standard v2かWAF v2です。古いバージョン1は、すでに廃止されています。
[600ms]
[confident] 次に、スケールのしかたを選びます。インスタンス数を固定にするか、最小と最大の間でオートスケールにするかです。
[600ms]
[reflective] キャパシティユニットは、ゲートウェイが実際に使っている量を、コンピューティング、接続数、スループットの3つで測ったものです。この3つのうち、一番大きい値が使われます。

## Step 3 · Frontend IP and listeners

[calm] フロントエンドIPは、クライアントが入ってくる場所です。パブリック、プライベート、またはその両方にできます。
[600ms]
[curious] リスナーは、ポート、プロトコル、ホスト名を確認します。基本リスナーは、どのホストでも受け付けます。マルチサイトリスナーは、ホスト名で一致を見るので、複数のサイトで1つのアドレスを共有できます。
[600ms]
[serious] バージョン2では、ルールの優先度で順番が決まります。だから、ワイルドカードのリスナーには、サイト固有のリスナーより大きい番号を付けましょう。

## Step 4 · Backend pools

[calm] バックエンドプールは、トラフィックを受け取るサーバーのグループです。
[600ms]
[confident] メンバーには、仮想マシン、スケールセット、App Serviceアプリ、または、自分で指定したIPアドレスやドメイン名を使えます。
[600ms]
[reassuring] プールを、1つ以上のルーティングルールにリンクします。ルールに一致すると、ゲートウェイは、正常なメンバーにだけリクエストを送ります。

## Step 5 · HTTP settings

[curious] バックエンドの設定で、ゲートウェイがサーバーとどう通信するかを決めます。プロトコル、ポート、応答を待つ時間です。
[600ms]
[confident] Cookieアフィニティを使うと、ゲートウェイが管理するCookieで、同じユーザーを同じサーバーにつなぎ続けられます。
[600ms]
[serious] ホスト名にも注意しましょう。上書きもできますが、ベストプラクティスは、クライアントからサーバーまで、同じホスト名を保つことです。

## Step 6 · Health probes

[curious] プローブが、どのサーバーにトラフィックを送るかを決めます。カスタムプローブがないと、ゲートウェイはルートパスを呼ぶだけで、200から399の応答なら、どれでも正常とみなします。
[600ms]
[confident] カスタムプローブなら、実際のヘルスチェック用のパスを、自分のホスト、自分で決めた間隔で確認できます。ステータスコードや、レスポンスの本文で判定することもできます。
[600ms]
[determined] アプリの依存先まで動かすようなパスをプローブすれば、異常なサーバーは、自動的にローテーションから外れます。

## Step 7 · Routing rules

[calm] ルーティングルールは、リスナーを、バックエンドプールとその設定に結び付けます。
[600ms]
[confident] 基本ルールは、すべてを1つのプールに送ります。パスベースのルールは、URLのパスごとに別のプールに送り、どれにも当てはまらないものは、デフォルトのプールに送ります。
[600ms]
[encouraging] ルールにはそれぞれ固有の優先度があり、その順にチェックされます。ボタンで、2つのタイプを見比べてみましょう。

## Step 8 · TLS termination and end-to-end TLS

[calm] TLSの終端では、HTTPSリスナーに証明書を追加します。ゲートウェイがリクエストを復号して、ルールを適用し、その先には、プレーンなHTTPで送ることもあります。
[600ms]
[confident] エンドツーエンドのTLSでは、バックエンド設定でもHTTPSを選びます。ゲートウェイは、独自の証明書を持つサーバーに対して、新しく暗号化したセッションを開きます。
[600ms]
[reassuring] その証明書がプライベートな認証局のものなら、ルート証明書をアップロードしましょう。クライアントもバックエンドも、TLS 1.2以上が必要です。

## Step 9 · Rewrite rule sets

[curious] リライトセットは、通過するリクエストやレスポンスを書き換えます。ヘッダー、URLパス、クエリ文字列を変更できます。
[600ms]
[confident] 条件で、いつ適用するかを決めて、アクションで、ヘッダーを追加、設定、削除します。よくある使い方は、HSTSの追加や、バックエンドが分かってしまうヘッダーを隠すことです。
[600ms]
[impressed] パスマップを再評価すると、書き換えたパスで、別のプールを選ぶこともできます。バージョン2が必要で、1つのルールに設定できるリライトセットは、1つだけです。

## Step 10 · WAF, and when to add Front Door

[calm] WAF v2を使うと、ゲートウェイに、Webアプリケーションファイアウォールが加わります。リージョンの中での保護です。
[600ms]
[confident] WAFポリシーには、OWASPコアルールセットに基づくマネージドルールと、自分で作るカスタムルールを入れます。カスタムルールが先にチェックされます。
[600ms]
[proud] Application Gatewayは、リージョン単位のサービスです。グローバルな入口が必要なら、前段にAzure Front Doorを置いて、各リージョンにゲートウェイを置きます。これが、A Z 700のスキルの中心です。
