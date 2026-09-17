# Narrator Script - ユーザーとグループ

**Source animation:** journeys/Identity/UsersAndGroups.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/users-groups.mjs.

## Step 1 · A teammate without a directory record

[calm] 新しい仲間が未登録。
[600ms]
Maya が Contoso の Operations に参加します。入社申請はありますが、ディレクトリにはまだユーザーがありません。
[600ms]
[serious] Alex のパートナー レコードは登録済みです。Maya には共有アカウントではなく自分の ID が必要です。

## Step 2 · Give Maya an identity

[calm] Maya の ID を作成。
[600ms]
権限を持つ管理者がクラウド ユーザーを作成します。名前、サインイン ID、部署は属性であり、権限を付与するものではありません。
[600ms]
[serious] 値は例です。属性は権限を持つ管理者が管理します。部署は Azure ロールではありません。

## Step 3 · Organize the team

[calm] チームを整理。
[600ms]
Contoso は Operations をセキュリティ グループとして作成します。所有者はグループを管理し、メンバーはその所属者です。
[600ms]
[serious] セキュリティ グループはアクセスの整理、Microsoft 365 グループは共同作業に使います。所有と所属は別の関係です。

## Step 4 · Assignment or an attribute rule?

[calm] 割り当てか属性ルールか。
[600ms]
割り当て済みメンバーは明示的に選択します。動的メンバーシップでは属性の変更を処理してからメンバー一覧を更新します。
[600ms]
[serious] 動的ユーザーには十分な Entra ID P1 または Intune for Education ライセンスが必要です。属性の書き込み権限を保護します。処理は即時ではありません。

## Step 5 · Verify the actual members

[calm] 実際のメンバーを確認。
[600ms]
ルールのプレビューだけでなく、処理済みの所属を確認します。Maya の所属と所有者の役割は別です。
[600ms]
[serious] 動的メンバーはルールで決まり、手動で追加・削除できません。Alex はこの例の Operations ルールに一致しません。

## Step 6 · People organized. Access still separate.

[calm] 所属とアクセスは別。
[600ms]
ディレクトリが ID を提供し、グループがメンバーをまとめます。各リソースへのアクセス許可は別途設定します。
[600ms]
[serious] グループに権限があればメンバーに適用されます。この例にはリソース割り当てがないため、所属だけではアクセスできません。
