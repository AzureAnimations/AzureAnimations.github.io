# Narrator Script — Compute · Secure Azure Functions, Logic Apps, App Service and API Management

**Source animation:** [SecureAppPlatform.html](../../../journeys/Compute/SecureAppPlatform.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/app-service/overview-authentication-authorization>
- <https://learn.microsoft.com/azure/azure-functions/security-concepts>
- <https://learn.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app>
- <https://learn.microsoft.com/azure/api-management/mitigate-owasp-api-threats>

---

## Step 1 · Who can call it, and what can it reach?

[calm] Contoso Shopは、4つのプラットフォームで動いています。App Service、Functions、Logic Apps、API Managementです。
[600ms]
[curious] それぞれについて、2つの答えが必要です。誰が呼び出してよいのか。そして、何にアクセスしてよいのか。
[600ms]
[confident] このレッスンで扱うコントロールは、すべて、この2つの問いのどちらかに答えるものです。受信側か、送信側かです。

## Step 2 · App Service: sign-in, HTTPS and managed identity

[calm] App Serviceでは、ブラウザからのアクセスにHTTPSを必須にして、TLSの最低バージョンを設定します。どれも、アプリの設定です。
[600ms]
[confident] ユーザーにサインインしてもらうには、自分で実装せず、組み込みの認証をオンにします。
[600ms]
[impressed] そして、アプリは、Microsoft Entra IDのマネージドIDを使って、Key Vaultにアクセスします。コードに、保存したりローテーションしたりする資格情報はありません。

## Step 3 · Functions: authorization levels and keys

[calm] HTTPトリガーを持つ関数には、すべて認可レベルがあります。anonymousレベルでは、キーは要りません。
[600ms]
[confident] functionレベルとadminレベルでは、アクセスキーが必要です。キーは、ヘッダーか、codeクエリ文字列で送ります。マスターキーは、管理者パスワードと同じように扱いましょう。
[600ms]
[serious] ただし、キーは共有のシークレットで、サインインではありません。本当にIDを確認したいなら、組み込みの認証をオンにします。

## Step 4 · Functions network: inbound and outbound

[calm] 公開された呼び出し元には、許可と拒否のリストを使います。リストは、優先順位の順に評価されます。
[600ms]
[confident] プライベートな呼び出し元には、プライベートエンドポイントを使います。アプリに、受信用のプライベートアドレスが付きます。
[600ms]
[serious] プライベートなサービスへの呼び出しには、仮想ネットワーク統合を使います。ただし、これは送信トラフィックにしか効かないので、アプリがプライベートになるわけではありません。

## Step 5 · Logic Apps: who can start a workflow

[curious] リクエストトリガーは、ただのURLです。では、誰が呼び出してよいのでしょうか。
[600ms]
[confident] 呼び出し元が身元を証明する方法を選びます。Microsoft Entra IDのOAuth、共有アクセス署名、受信IPの制限、またはワークフローをAPI Managementの後ろに置く方法です。
[600ms]
[reassuring] ワークフローが行う接続には、保存した資格情報の代わりに、マネージドIDを使いましょう。

## Step 6 · Logic Apps: keep secrets out of run history

[calm] 実行履歴には、すべてのアクションの入力と出力が表示されます。
[600ms]
[serious] 機密性の高い値があると、これは問題です。セキュアな入力とセキュアな出力をオンにして、隠しましょう。セキュアな出力を使うアクションは、入力も隠されます。
[600ms]
[confident] シークレットは、セキュア文字列のパラメータとして定義します。画面に出ている値は、すべて架空のものです。

## Step 7 · API Management: validate the token

[calm] 次は、ゲートウェイです。バックエンドがリクエストを見る前に、呼び出し元のトークンを確認します。
[600ms]
[confident] validate JWTポリシーでは、署名、発行者、対象ユーザー、有効期限、さらに必須にしたクレームを確認します。
[600ms]
[reassuring] 有効なトークンがなければ、呼び出しはゲートウェイで止まります。デフォルトでは、呼び出し元に401が返ります。

## Step 8 · API Management: limits, IP filter, backend

[calm] 同じ入口を守るポリシーは、ほかにもあります。IPフィルターは、アドレスを許可したり拒否したりします。
[600ms]
[confident] レート制限は、呼び出しの回数に上限を設けます。超えた呼び出し元には、429のToo Many Requestsが返ります。
[600ms]
[curious] バックエンドに対しては、ゲートウェイも身元を証明します。マネージドIDのトークンか、相互TLS用のクライアント証明書を使います。

## Step 9 · Put a WAF in front

[calm] Webアプリケーションファイアウォールは、アプリや関数、ゲートウェイに届く前に、すべてのリクエストを調べて、よくある攻撃を見つけます。
[600ms]
[confident] Azure Web Application Firewallは、Application GatewayかFront Doorの上で動きます。SQLインジェクションや、クロスサイトスクリプティングなどの攻撃から守ります。
[600ms]
[serious] そして、アプリは、そのフロントドア経由の通信だけを受け付けるように、ロックしましょう。

## Step 10 · Try it: where is the request blocked?

[curious] リクエストを選んで、経路を見てみましょう。最初にそれを拒否した層が表示されます。
[600ms]
[confident] それより後ろの層には、リクエストは届きません。だから、不正な呼び出しは、できるだけ早い段階で止まります。
[600ms]
[reflective] だから、層を重ねるのです。ひとつの層が見逃したものを、次の層が止めます。

## Step 11 · Which control for which platform?

[calm] 8つのコントロールと、4つのプラットフォーム。それぞれのコントロールを設定する場所が、どのプラットフォームなのかを見ていきましょう。
[600ms]
[confident] App ServiceとFunctionsのアクセス制限のように、設定が重なるものもあります。
[600ms]
[reassuring] この8つは、各プラットフォームに、いちばんわかりやすく対応するものを選んだだけです。それぞれをどこで設定するのかを覚えるのに、役立ちます。

## Step 12 · Recap: identity, network, front door

[calm] どのコントロールも、ひとつの問いに答えます。あなたは誰か。どこから来ているのか。このリクエストは安全そうか。
[600ms]
[confident] つまり、ID、ネットワーク、そして入口です。どのプラットフォームでも、この3つの層を合わせて使いましょう。
[600ms]
[proud] このレッスンは、S C 500の学習ガイドにある、Secure computeのスキルに沿っています。
