# Narrator Script - 外部 ID

**Source animation:** journeys/Identity/ExternalIdentities.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/external.mjs.

## Step 1 · A partner needs to collaborate

[calm] パートナーと共同作業。
[600ms]
Alex は Partner に所属し、既存のサインイン ID を持っています。Contoso は共有アカウントを作らずに shop-vm の構成を確認してもらいます。
[600ms]
[serious] この例は Partner の Entra アカウントを使います。B2B は構成された他の ID プロバイダーにも対応します。

## Step 2 · Invite Alex into Contoso

[calm] Alex を Contoso に招待。
[600ms]
権限を持つ招待者が Contoso に Alex の B2B ユーザーを作成します。招待は承諾待ちで、ホーム アカウントは Partner に残ります。
[600ms]
[serious] 招待権限、ドメイン制限、テナント間設定が適用されます。パスワードを Contoso にコピーしません。

## Step 3 · Redeem the invitation

[calm] 招待を承諾。
[600ms]
Alex はホーム ID でサインインし、同意を完了します。招待の承諾だけでは Azure ロールは割り当てられません。
[600ms]
[serious] 選択肢は招待状態の比較例であり、実際の同意は取り消しません。リソース権限は別途必要です。

## Step 4 · One person, two directory records

[calm] 1 人に 2 つのレコード。
[600ms]
ホーム ID が Alex を認証し、Contoso は別のユーザー オブジェクトを保持します。Guest と Member は関係を表し、ID プロバイダーを表しません。
[600ms]
[serious] Guest と Member は既定のディレクトリ権限が異なります。UserType を変えても ID プロバイダーは変わりません。実際の組織関係を反映します。

## Step 5 · Authorize just the intended resource

[calm] 対象リソースだけを許可。
[600ms]
Contoso は shop-vm のスコープで Reader を割り当てます。構成は読めても削除はできません。ロールを削除しても招待の承諾は変わりません。
[600ms]
[serious] サインイン ポリシーを満たし、変更が反映され、他のロールや拒否割り当てがない例です。Reader はゲスト OS ログインやデータ アクセスを許可しません。

## Step 6 · External identity. Bounded collaboration.

[calm] 外部 ID と限定された共同作業。
[600ms]
Alex はホーム ID を使い続け、Contoso はそのユーザー オブジェクトを管理します。スコープ付きロールが権限を提供します。責任はそれぞれ別です。
[600ms]
[serious] B2B 共同作業は従業員テナントで行います。顧客向けのサインアップとサインインには別の外部テナントを使います。
