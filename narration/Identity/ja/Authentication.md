# Narrator Script - 玄関の扉

**Source animation:** journeys/Identity/Authentication.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2 -->

## Step 1 · Unlocking the same door twice

[curious] お母さんが注文アプリを開き、次に Azure の管理画面を開くと、またサインインを求められます。
[600ms]
どちらも本人確認が必要ですが、パスワードを繰り返し入力しても、各サービスで何をしてよいかは決まりません。
[600ms]
[confident] 認証は本人を確認し、認可はその ID に許される操作を決めます。

## Step 2 · Reuse an eligible session

[calm] アプリが対応していれば、シングル サインオンでお母さんの有効なセッションを再利用できます。
[600ms]
アプリ側の権限確認はそのままに、もう一度サインインする手間を減らします。
[600ms]
[confident] セッションの期限切れや新たなポリシー要件があれば、再確認されることもあります。再利用できる場合に使う仕組みであり、二度と確認しない約束ではありません。

## Step 3 · Not every key is equally convincing

[calm] お母さんが示す証拠を比べましょう。パスワード、パスワードと Authenticator、または PIN で解除する FIDO ツーのセキュリティ キーです。
[600ms]
キーは所持と端末上の確認を組み合わせるため、パスワードレスでありながら多要素認証にもなります。
[600ms]
[confident] 使う方法は有効化と登録が必要です。パスワードを二つ使っても、異なる二種類の要素にはなりません。

## Step 4 · A doorbell that decides how hard to check

[calm] 条件付きアクセスは状況を確認し、このサインインに必要な証拠を決めます。
[600ms]
Contoso の例では、オフィスなら多要素認証、カフェならフィッシング耐性のある認証を要求します。Azure の既定値ではなく、この例のポリシーです。
[600ms]
[confident] オフィスにいるだけで安全とは限りません。実際のポリシーは関連するシグナルを考慮し、適切な Entra ライセンスも必要です。

## Step 5 · Getting in is not the same as being allowed

[calm] お母さんはサインインの確認を通過しました。しかし仮想マシンは別の問いを出します。ここで何ができるのでしょうか。
[600ms]
このスコープで Reader を割り当てると、マシンの構成を確認できます。
[600ms]
[confident] 変更、OS へのログイン、データへのアクセスは許可されません。玄関を通っても、家電の鍵束まで渡されるわけではありません。

## Step 6 · Session, proof, policy, permission

[calm] 四つの層がそろいました。再利用できるセッション、認証方法、条件付きアクセスの要件、そしてリソースの権限です。
[600ms]
一つを変えても、ほかの代わりにはなりません。強い本人確認をしてもロールは割り当てられません。
[600ms]
[confident] サインインの仕組みで信頼を確かめ、スコープ付きの認可で、その ID ができる操作を限定します。

## Step 7 · The front door, in Microsoft Entra ID

[confident] 上の段は、お母さんの FIDO ツー キー、条件付きアクセス、二つのアプリで可能な場合に再利用するシングル サインオンを示しています。
[600ms]
下の段には、店舗の仮想マシンに対する別の Reader 割り当てがあります。ストレージ アカウントには割り当てがありません。
[600ms]
[confident] 同じサインイン済みの人でも、リソースによって結果は変わります。本人確認と権限の付与は別の判断です。
