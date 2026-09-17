# Narrator Script - テナント、ID、Azure へのアクセス

**Source animation:** journeys/Identity/TenantsAndIdentity.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/content.mjs.

## Step 1 · Signed in. Still denied.

[calm] サインイン済み。でもアクセス拒否。
[600ms]
Maya はサインインできても shop-vm の構成を読み取れません。この例では他のロールや拒否の割り当ては適用されません。
[600ms]
[serious] VM 構成の読み取り: アクセス拒否。

## Step 2 · Start with the tenant

[calm] テナントから始める。
[600ms]
Microsoft Entra ID は ID サービスです。Contoso テナントはそのディレクトリ インスタンスです。
[600ms]
[serious] テナントは VM のリージョンではありません。Entra ロールで Azure リソースへのアクセスが自動的に付与されるわけではありません。

## Step 3 · People and groups live here

[calm] ユーザーとグループ。
[600ms]
Maya のユーザーと運用セキュリティ グループはディレクトリ オブジェクトです。所属だけで権限は得られません。
[600ms]
[serious] Maya はメンバーです。このグループにはまだ Azure ロールが割り当てられていません。

## Step 4 · One directory, two subscriptions

[calm] 一つのディレクトリ、二つのサブスクリプション。
[600ms]
Contoso の開発用と本番用のサブスクリプションは同じテナントを信頼し、リソースの範囲を分けています。
[600ms]
[serious] 各サブスクリプションが信頼するテナントは一つ。同じテナントを複数で利用できます。

## Step 5 · Authentication answers who

[calm] 認証で本人を確認。
[600ms]
Microsoft Entra ID が Maya を認証します。それだけでは VM 構成の読み取りは許可されません。
[600ms]
[serious] VM 構成の読み取り: アクセス拒否。

## Step 6 · A role permits the read

[calm] ロールで読み取りを許可。
[600ms]
権限を持つ管理者が Operations に shop-vm スコープの Reader ロールを割り当てると、Maya は構成を読み取れます。
[600ms]
[serious] 権限の反映後に読み取り可能。Reader ではゲスト OS にログインできません。

## Step 7 · Identity and Access - All in One

[calm] ID とアクセス - 全体像。
[600ms]
テナントが ID を提供し、サブスクリプションがリソースを整理します。Azure RBAC が指定範囲の操作を許可します。
[600ms]
[serious] 誰: Operations の Maya。何: 読み取り。範囲: shop-vm。
