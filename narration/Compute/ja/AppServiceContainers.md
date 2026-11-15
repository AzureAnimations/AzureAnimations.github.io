# Narrator Script — Compute · Run a Container on App Service: Settings and Secrets

**Source animation:** [AppServiceContainers.html](../../../journeys/Compute/AppServiceContainers.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/tutorial-custom-container>

---

## Step 1 · From a Registry Image to a Running Web App

[calm] Contosoは、注文APIをコンテナーイメージにパッケージ化しました。バージョンは1.4で、Azure Container Registryにプッシュ済みです。
[600ms]
[curious] コンテナー用のWebアプリでは、組み込みの言語スタックは使いません。代わりに、自分で用意したイメージを実行します。
[600ms]
[confident] 流れはシンプルです。App Serviceがレジストリからイメージをプルして起動し、ユーザーに提供します。

## Step 2 · Create a Web App for Containers

[calm] Webアプリを作るときは、公開方法で、コードではなく「コンテナー」を選びます。このレッスンでは、Linuxを選びます。
[600ms]
[confident] 次に、レジストリ、名前、タグを指定して、アプリがイメージを参照するように設定します。
[600ms]
[reassuring] ポータルでもコマンドラインでも、結果は同じです。CLIでは、まずLinuxのプランを作成してから、そのイメージを参照するWebアプリを作成します。

## Step 3 · Pull from ACR with a Managed Identity

[curious] では、App Serviceは、どうやってレジストリにサインインするのでしょうか。いちばんいいのは、パスワードがまったく要らない方法です。
[600ms]
[confident] アプリにIDを付けます。システム割り当てでも、ユーザー割り当てでもかまいません。そのIDに、レジストリのAcrPullロールを付与します。そして、レジストリからのプルにマネージドIDを使う設定をオンにします。
[600ms]
[serious] ユーザー割り当てIDの場合は、クライアントIDの設定も必要です。また、レジストリがトークンを拒否すると、プルは認証エラーで失敗します。

## Step 4 · WEBSITES_PORT and the Container Port

[calm] App Serviceは、コンテナーがポート80で待ち受けていると想定しています。
[600ms]
[confident] 別のポート、たとえば8000で待ち受けている場合は、WEBSITES PORTというアプリ設定で、プラットフォームに伝えます。
[600ms]
[reflective] 制限にも注意してください。HTTPリクエストを受け取れるポートは、1つだけです。TLSはApp Serviceのフロントエンドで終わるので、コンテナーは、普通のHTTPで応答するだけです。

## Step 5 · App Settings Become Environment Variables

[calm] 定義したアプリ設定は、すべて、コンテナーの起動時に環境変数として渡されます。
[600ms]
[confident] 名前には、英字、数字、ピリオド、アンダースコアが使えます。コードで実際に読み取れる名前を付けましょう。
[600ms]
[serious] 副作用にも注意が必要です。設定を追加したり変更したりすると、アプリが再起動します。編集すると、短い再起動が入ります。

## Step 6 · Secrets: Key Vault References Instead of Values

[serious] アプリ設定に、シークレットを直接貼り付けるのはやめましょう。
[600ms]
[confident] 代わりに、Key Vault参照を入れます。参照にはボールト名とシークレット名を書き、値はボールトに残したままです。アプリのマネージドIDが、Key Vault Secrets Userロールで読み取ります。
[600ms]
[concerned] 失敗にも気をつけましょう。参照を解決できないと、アプリは参照のテキストを、ただの文字列として受け取ります。これは、あとでバグになる原因です。

## Step 7 · Slot Settings: What Stays with the Slot on Swap

[curious] デプロイスロットをスワップすると、アプリが移動し、ほとんどの設定も一緒に移動します。
[600ms]
[confident] 設定を「デプロイスロットの設定」にしておくと、その設定は、元のスロットにとどまります。ポータルのチェックボックスの名前もそのとおりで、CLIでは、slot settingsを使います。
[600ms]
[reflective] まったくスワップされないものもあります。カスタムドメイン名、スケール設定、マネージドIDです。

## Step 8 · Continuous Deployment: Webhook from ACR

[calm] デプロイセンターで継続的デプロイをオンにすると、App Serviceが、レジストリにWebhookを追加します。
[600ms]
[impressed] これで、イメージをプッシュするたびに、Webhookが動きます。アプリが再起動して、再起動時に新しいイメージをプルし、新しいバージョンが動き出します。
[600ms]
[reassuring] スイッチをオンにしなかった場合は、自分でアプリを再起動します。別のレジストリを使う場合は、パイプラインから、WebhookのURLにPOSTします。

## Step 9 · Logs and the Container Startup Check

[curious] 再起動すると、App Serviceは、コンテナーが応答するまで、繰り返し呼び出して確認します。
[600ms]
[concerned] 時間内に応答しないと、その試行は失敗します。プラットフォームは再試行しますが、訪問者には503エラーが表示されます。
[600ms]
[determined] そんなときは、ファイルシステムのオプションでアプリケーションログをオンにして、ログストリームとApp Serviceのログで、原因を確認しましょう。

## Step 10 · Container on App Service at a Glance

[calm] 全体の流れは、こうです。レジストリのイメージ、コンテナー用のWebアプリ、そして動いているサービス。
[600ms]
[confident] アプリ設定は環境変数になり、シークレットは、値を貼り付けずに、Key Vault参照で渡します。
[600ms]
[proud] これが、A I 200の試験目標をかみ砕いたものです。App Serviceでコンテナーを実行して、その変数とシークレットを渡します。
