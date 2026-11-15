# Narrator Script - ゲストルーム

**Source animation:** journeys/Identity/ExternalIdentities.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/user-properties -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/redemption-experience -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/tenant-configurations -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/cross-tenant-access-overview -->

## Step 1 · The neighbour who needs to help

[curious] Alex は Partner で働き、そちらにサインイン用の ID を持っています。Contoso は店舗の仮想マシンを調べる手助けを必要としています。
[600ms]
家族のアカウントを共有したり、Alex のパスワードを Contoso にコピーしたりする必要はありません。
[600ms]
[confident] 企業間の共同作業では既存の ID を招待し、仕事に必要なアクセスだけを与えます。

## Step 2 · Invite Alex over

[calm] 招待する権限を持つ担当者が、Contoso のディレクトリに Alex のゲストを登録します。
[600ms]
招待はまだ保留中です。ゲストの記録はありますが、Alex は自分のホーム ID で承諾していません。
[600ms]
[confident] パスワードはコピーされません。招待の制限やテナント間アクセス設定も適用されるので、無条件に開かれた入口ではありません。

## Step 3 · Alex accepts, using their own key

[calm] Alex は Partner の ID でサインインし、必要な同意を行って招待を承諾します。
[600ms]
これで招待と、実際に使う本人が結び付きます。
[600ms]
[confident] 承諾はリソースの権限ではありません。どのリソースで何を許可するかは、引き続き Contoso が決めます。

## Step 4 · One person, two house registers

[calm] 一人の Alex に対して、Partner のホーム ID と、Contoso のゲスト オブジェクトが存在します。
[600ms]
ゲストとメンバーは関係性や既定のディレクトリ権限を表し、資格情報の発行元を表すものではありません。
[600ms]
[confident] このラベルを変えても、Alex の ID が Contoso に移ったり、新しいパスワードが作られたりはしません。

## Step 5 · Access exactly one appliance

[calm] Contoso は店舗の仮想マシンだけをスコープにして、Alex に Reader を割り当てます。
[600ms]
サインイン条件を満たし、権限の変更が反映されれば、構成を確認できます。ただし Reader では削除できません。
[600ms]
[confident] OS へのログインやデータへのアクセスも、このロールには含まれません。割り当てを外すと、その権限がなくなり、ゲストの記録は残ります。

## Step 6 · A guest, not a resident

[calm] 三つを分けて考えましょう。Partner が Alex の本人確認を行い、Contoso がゲストを登録し、スコープ付きのロールがアクセスを許可します。
[600ms]
これは Contoso の従業員テナントでの共同作業です。
[600ms]
[confident] 顧客のサインアップに使う外部テナントとは別の場面です。同僚を招待しても、顧客向けの ID システムに変わるわけではありません。

## Step 7 · The guest, in Microsoft Entra ID

[confident] Alex のホーム ディレクトリからゲスト オブジェクト、仮想マシンの Reader 割り当てへと図をたどります。
[600ms]
パスワードは Partner に残ります。Partner の多要素認証の結果を Contoso が受け入れるかは、テナント間の信頼設定によります。
[600ms]
[confident] 最後の二行は、許可される構成の読み取りと、拒否される削除を比べています。招待されたからといって、何でもできるわけではありません。
