# Narrator Script - ID の管理

**Source animation:** journeys/Identity/IdentityAdministration.html

Delivery cues appear in brackets; pauses are on separate lines.
Generated from scripts/_identity-journeys/administration.mjs.

## Step 1 · Three requests. Different responsibilities.

[calm] 3 つの依頼と異なる責任。
[600ms]
Maya にはアカウントの支援が必要です。Contoso はヘルプデスクによるリセット、ライセンス割り当て、認証方法の管理を区別します。
[600ms]
[serious] Maya は特権ロールやロール割り当て可能グループを持ちません。担当者と支援対象者は別人です。

## Step 2 · Delegate the task, not the whole directory

[calm] ディレクトリ全体ではなく作業を委任。
[600ms]
最小特権のロールは作業によって異なります。権限を持つ管理者が担当者に割り当てます。ここで作業を選んでも割り当て済みロールは変わりません。
[600ms]
[serious] 割り当てが Maya を対象とする例です。Authentication Administrator もリセット可能ですが Password Administrator がより限定的です。Azure Reader はこれらの作業を許可しません。

## Step 3 · A license is an assignment with a result

[calm] ライセンス割り当ての結果を確認。
[600ms]
この例では Maya に Microsoft 365 Business Standard を割り当てます。空きライセンスや権限がなければ失敗します。空きを増やすだけでは割り当てられません。
[600ms]
[serious] 利用場所が有効でサービス競合がない例です。エラーは確認して再試行します。ライセンスは Azure リソース ロールを割り当てません。

## Step 4 · Register before recovery is needed

[calm] 回復が必要になる前に登録。
[600ms]
Maya はクラウド専用の非管理者です。この例で Contoso はメールと携帯電話を有効にし、SSPR に 2 つの登録済み方法を要求します。
[600ms]
[serious] 2 つの方法は Contoso の例であり共通の既定値ではありません。登録は回復情報の保存であり、将来のリセットの完了ではありません。

## Step 5 · Verify, then reset

[calm] 検証してからリセット。
[600ms]
ライセンスと SSPR の対象範囲だけでは不十分です。方法の登録と検証を終えてから、ポリシーに準拠した新しいパスワードを設定できます。ここでは収集しません。
[600ms]
[serious] Business Standard はクラウド専用 SSPR に対応します。ハイブリッド書き戻しには P1/P2 または Business Premium と構成・前提条件が必要です。Entra Free の変更は忘れたパスワードのリセットとは異なります。

## Step 6 · Support without blanket administration

[calm] 広すぎる権限を与えずに支援。
[600ms]
ディレクトリ ロールは担当者に操作権限を与え、ライセンスはサービスを有効にします。登録は回復の準備、検証はリセット時の本人確認です。役割は別々です。
[600ms]
[serious] 有効なクラウド専用アカウントと準拠した新パスワードを想定します。実際のロール、ライセンス、確認メッセージ、パスワードは変更しません。
