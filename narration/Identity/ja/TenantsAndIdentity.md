# Narrator Script - テナントは家である

**Source animation:** journeys/Identity/TenantsAndIdentity.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/concept-understand-roles -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview -->

## Step 1 · One key opens everything

[curious] Contoso が引っ越した家では、全員が一本の鍵を共有しています。Mia でもオーブンを使えてしまいます。
[600ms]
これはアクセスの区別がない状態のたとえであり、推奨するサインイン方法ではありません。
[600ms]
[confident] 一人ずつの ID と、それぞれの仕事に合った権限が必要です。

## Step 2 · The house is your tenant

[calm] この家を、Contoso の Microsoft Entra テナント、つまり独立した ID のディレクトリと考えてください。
[600ms]
家族はここに所属し、隣人は家族の一員にならなくても招待できます。
[600ms]
[confident] テナントは ID を管理する場所です。それだけで Azure のすべてのリソースにアクセスできるわけではありません。

## Step 3 · Every house needs an address

[calm] 家には最初から、Contoso ドット on Microsoft ドット com という住所があります。
[600ms]
DNS レコードで Contoso ドット com の所有を確認すると、そのカスタム ドメインをサインイン名に使えます。
[600ms]
[confident] 元のドメインは残ります。門に掲げる名前が変わっても、中の権限は変わりません。

## Step 4 · Who lives here

[calm] お父さん、お母さん、Noah、Mia には、それぞれ自分のユーザー ID が必要です。
[600ms]
大人と子どもをグループにすれば、一人ずつではなく、グループにアクセス権を割り当てられます。
[600ms]
[confident] グループはメンバーの一覧です。何にアクセスできるかは、そのグループに割り当てた権限によって決まります。

## Step 5 · House rules run the house

[calm] Microsoft Entra ロールは、家を管理するための鍵束です。ユーザー管理など、ディレクトリ内の特定の作業を許可します。
[600ms]
この例では、お父さんがグローバル管理者、お母さんがユーザー管理者です。
[600ms]
[confident] 役割は同じではありません。手伝う人全員に家の管理権を渡さず、作業に必要な最小限のロールと、対応するスコープを選びます。

## Step 6 · Appliance keys are a second keyring

[calm] 次は家電を見てください。Azure リソースを表し、別の鍵束である Azure のロールベースのアクセス制御で管理します。
[600ms]
Entra の管理者だからといって、このリソースを自動的に管理できるわけではありません。
[600ms]
[confident] Azure のロール割り当ては、誰に、どのロールを、どこで与えるかを組み合わせます。二つの権限体系は既定では別です。

## Step 7 · The whole house — All in One

[calm] 三つの問いを覚えてください。誰が所属し、何ができ、その権限はどこに効くのでしょうか。
[600ms]
最初の問いにはユーザーとグループが答えます。Entra ロールと Azure リソースのロールは、異なる管理対象について二つ目に答えます。
[600ms]
[confident] 三つ目を決めるのがスコープです。次は ID の共有をやめ、家族の名簿を作ります。

## Step 8 · The same house, in the Azure portal

[confident] 上の段には、お父さんとお母さん、それぞれの Entra ロール、その適用先のテナントがあります。
[600ms]
下の段では、大人のグループにストレージ アカウントの Storage Blob Data Reader、Noah に仮想マシンの Virtual Machine Contributor が割り当てられています。
[600ms]
[confident] 許可されるのは、そのスコープ内でロールが認める操作だけです。ディレクトリのロールと Azure リソースの権限は別物です。
