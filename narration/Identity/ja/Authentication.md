# Narrator Script - 認証とアクセス

**Source animation:** journeys/Identity/Authentication.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/authentication.mjs.

## Step 1 · Two apps. Repeated sign-ins.

[calm] 2 つのアプリと繰り返すサインイン。
[600ms]
Maya は注文アプリと Azure 管理を開きます。個別のサインイン要求が作業を中断します。認証に成功しても操作権限は別問題です。
[600ms]
[serious] 2 つのアプリは別の入口です。認証は ID を証明し、各サービスはそれぞれの権限を管理します。

## Step 2 · Reuse an eligible session

[calm] 利用可能なセッションを再利用。
[600ms]
Microsoft Entra の SSO では、対応するアプリが Maya のサインイン セッションを再利用できます。要求は減ってもポリシー要件はなくなりません。
[600ms]
[serious] 再利用にはアプリ統合と有効なセッションが必要です。新しい要件、有効期限、ポリシーによって再要求される場合があります。

## Step 3 · Compare the authentication evidence

[calm] 認証の証拠を比較。
[600ms]
パスワードは 1 要素です。Authenticator と組み合わせると要素が増えます。PIN で解除する FIDO2 セキュリティ キーはパスワードレスで多要素認証も満たせます。
[600ms]
[serious] 認証方法の有効化と登録が必要です。パスワードレスと MFA は両立します。2 つのパスワードは異なる 2 要素ではありません。

## Step 4 · Evaluate the required strength

[calm] 必要な認証強度を評価。
[600ms]
初期認証の後、Contoso の仮想ルールは社内で MFA、社外でフィッシング耐性のある MFA を要求します。既存セッションの証拠も要件を満たす必要があります。
[600ms]
[serious] Azure の既定値ではなく仮想ルールです。条件付きアクセスには Entra ID P1 相当、リスクベースのポリシーには P2 が必要です。

## Step 5 · Check the resource permission too

[calm] リソース権限も確認。
[600ms]
サインイン ポリシーを満たしても Azure ロールは割り当てられません。この例で構成を読むには shop-vm のスコープで Reader が必要です。
[600ms]
[serious] 他のロールや拒否割り当てがなく、反映済みの例です。Reader は管理情報を読めますが、変更、VM ログイン、データ アクセスは許可しません。

## Step 6 · Session, method, policy, permission

[calm] セッション、方法、ポリシー、権限。
[600ms]
SSO はセッションを再利用し、認証は証拠を提供します。条件付きアクセスは要件を確認し、Azure RBAC はリソース権限を付与します。互いの代わりにはなりません。
[600ms]
[serious] 社内にいるだけで安全とは限りません。実際には必要なシグナルと該当するすべてのポリシーを考慮します。この例は範囲を限定しています。
