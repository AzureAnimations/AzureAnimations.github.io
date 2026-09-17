# ナレーション原稿 - IDとセキュリティ

**Source animation:** journeys/Fundamentals/IdentityAndSecurity.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/role-based-access-control/overview ; https://learn.microsoft.com/security/zero-trust/zero-trust-overview ; https://learn.microsoft.com/azure/security/fundamentals/management-monitoring-overview -->

## Step 1 · Who are you, and what may you do?

[calm] Mayaは本番ショップを確認したいだけで、変更する必要はありません。アクセスを許す前に、本人であることと、その操作が許されているかを確認します。
[600ms]
[confident] この2つは別の問いです。認証は本人確認、認可はアクセスの判断です。サインインできても、何でもできるわけではありません。

## Step 2 · The directory holds the identities

[calm] Microsoft Entra IDは、ユーザー、グループ、アプリのIDを管理するContosoのディレクトリです。Mayaは、リソースごとに無関係なアカウントを持つ代わりに、組織で管理されたIDを使います。
[600ms]
[confident] ディレクトリは、誰からの要求かを確かめる助けになります。そのIDがAzureリソースで行える操作は、適切な権限で制御します。

## Step 3 · Prove who is asking

[calm] Mayaがサインインして本人であることを示します。多要素認証は異なる種類の証明を使い、シングルサインオンは接続されたアプリでの繰り返しのサインインを減らします。
[600ms]
[confident] パスワードレスという方法もあります。認証に成功した後も、要求した操作をMayaが実行できるかの判断は必要です。

## Step 4 · Check the sign-in conditions

[calm] サインインの状況は毎回同じではありません。条件付きアクセスを使うと、アクセス時の情報に基づき、多要素認証を求めるなどの条件を設定できます。
[600ms]
[confident] 条件を満たすことで入口を守ります。ただし、アクセス後にMayaが何をできるかを決める権限の代わりにはなりません。

## Step 5 · Then allow the action

[calm] Contosoは本番リソースグループで、Mayaに閲覧者ロールを割り当てます。ロールは許可する操作、スコープはその適用範囲を決めます。
[600ms]
[confident] このロールではリソースを確認できますが、変更はできません。設定の閲覧と、内部にあるすべてのお客様データを読むことも別です。

## Step 6 · Same person, different actions

[calm] MayaのIDは同じでも、要求する操作によって判断は変わります。閲覧者は設定の確認を許可しますが、変更する権限は与えません。
[600ms]
[confident] この例では、ほかのロールによる追加権限がないものとします。権限は組み合わさるため、閲覧者を割り当てても、既存の権限は取り消されません。

## Step 7 · Assume nothing is safe by default

[calm] ゼロトラストは、明示的に検証し、必要最小限の権限を使い、侵害を想定する考え方です。ネットワークの内側にいるだけでは、要求を信用する理由になりません。
[600ms]
[confident] Contosoは防御を重ねます。1つの制御が失敗しても、ショップ全体が無防備にならないようにするためです。

## Step 8 · Keep checking the security posture

[calm] 権限設定でセキュリティ作業は終わりません。Microsoft Defender for Cloudは、対策状況の確認、推奨事項の発見、有効にした保護機能による脅威の特定を支援します。
[600ms]
[confident] チームは引き続きアラートを調べ、改善します。推奨事項が表示されても、問題がすでに解決したという意味ではありません。

## Step 9 · Identity and Security - All in One

[calm] Mayaの流れを追いましょう。IDを用意し、サインインを確認し、アクセス条件を適用して、適切な範囲で操作を許可します。多層防御は維持し、見直し続けます。
[600ms]
[confident] Contosoはアクセスを意図的に管理できるようになりました。次は、ショップの費用も同じように明確にします。