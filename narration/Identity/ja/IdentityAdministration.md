# Narrator Script - 家を回す

**Source animation:** journeys/Identity/IdentityAdministration.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-administrator -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-licensing -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks -->
<!-- Reference: https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users -->

## Step 1 · Three favours, three different jobs

[curious] Mia には三つの手助けが必要です。パスワードのリセット、製品ライセンスの割り当て、回復方法の更新です。
[600ms]
手伝う担当者は Mia とは別の人で、自分の管理権限を持っています。
[600ms]
[confident] この例の Mia は、特権ロールを持たないクラウド専用ユーザーです。テナント全体の管理権を渡さなくても、仕事を委任できます。

## Step 2 · Hand over one chore, not the house

[calm] 担当者のロールを作業に合わせます。管理者ではない Mia のパスワードをリセットするなら、より限定的なパスワード管理者が適しています。
[600ms]
ライセンス管理者はライセンスの割り当てを行い、認証管理者は対応する認証方法の管理作業を行えます。
[600ms]
[confident] 作業を選び直しても担当者のロールは変わりません。実際の割り当てが、Mia に対するその操作を許可する必要があります。

## Step 3 · A seat at the table has to exist

[calm] 製品ライセンスは利用者のための席です。空席があり、それを Mia に割り当てる必要があります。
[600ms]
担当者には権限が必要で、アカウントも有効な利用場所などの条件を満たさなければなりません。席を購入しただけでは割り当てられません。
[600ms]
[confident] 失敗したら原因を調べて再試行します。Microsoft 365 のライセンスを与えても、Azure リソースのロールは付与されません。

## Step 4 · Register the spare key before you need it

[calm] パスワードを忘れる前に、Mia が回復方法を準備しておくことが大切です。
[600ms]
Contoso の例では、メールと携帯電話を許可し、二つの方法の登録を求めます。この数は例の設定であり、すべての環境の既定値ではありません。
[600ms]
[confident] 登録は回復情報を保存するだけです。後日のリセット要求が本当に Mia から来たことまでは証明しません。

## Step 5 · Prove it is you, then cut a new key

[calm] Mia がパスワードを忘れました。リセットの対象であること、方法を登録済みであること、必要な本人確認に成功することが条件です。
[600ms]
その後で、要件を満たす新しいパスワードを選べます。このデモは本物のパスワードを入力させません。
[600ms]
[confident] Business Standard はこのクラウド専用のリセットに対応します。ハイブリッドのパスワード ライトバックには、追加のライセンスと構成要件があります。

## Step 6 · Help out without holding every key

[calm] 四つの仕事を分けましょう。ロールは担当者を認可し、ライセンスはサービスを有効にし、登録は回復を準備し、検証は本人を確認します。
[600ms]
一つがあっても、残りがそろうとは限りません。ライセンスは本人確認の代わりにはなりません。
[600ms]
[confident] この画面は確認の仕組みを示すもので、実際のアカウントは変更しません。不要な特権を与えずに役立つ作業を委任するのが目的です。

## Step 7 · Running the house, in Microsoft Entra ID

[confident] 上の段には、担当者のパスワード管理とライセンス管理のロール、そしてセルフサービスで自分のパスワードをリセットする Mia がいます。
[600ms]
下の段では、担当者には最初 Azure リソースの権限がありません。別途 Reader を割り当てると、店舗の仮想マシンの構成を読めます。
[600ms]
[confident] ディレクトリの管理、製品ライセンス、Azure リソースへのアクセスは、それぞれ別の責任です。
