# ナレーション原稿 - ガバナンスとコンプライアンス

**Source animation:** journeys/Fundamentals/GovernanceAndCompliance.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/governance/policy/overview ; https://learn.microsoft.com/azure/azure-resource-manager/management/lock-resources ; https://learn.microsoft.com/azure/cloud-adoption-framework/govern/monitor-cloud-governance -->

## Step 1 · Standards nobody checks

[calm] ContosoはEnvironmentタグを必須にしましたが、次のデプロイでは付いていません。文書に基準を書くだけでは、リソースを自動でチェックできません。
[600ms]
[confident] リソースを作成する場所で評価されるルールが必要です。付け忘れを見つけたり、事前に防いだりするためです。

## Step 2 · Write the rule, then apply it

[calm] Azure Policyの定義には、対応するリソースにEnvironmentタグを求める、といったルールを記述します。割り当ては、そのルールを適用する場所を指定します。
[600ms]
[confident] Contosoはショップのサブスクリプションに割り当てます。定義と適用は別の作業で、割り当てによって管理範囲が決まります。

## Step 3 · First, observe with Audit

[calm] Auditという監査の効果では、タグがないことを非準拠として報告しますが、このポリシーはデプロイを止めません。Contosoは基準が守られていない場所を確認できます。
[600ms]
[confident] 強制する前に影響を知るのに役立ちます。ただし、問題の報告だけでリソースが自動修正されるわけではありません。

## Step 4 · Then enforce with Deny

[calm] Denyという拒否の効果では、必須タグがないため、この要求をブロックします。Contosoはタグを追加し、修正した要求をもう一度送ります。
[600ms]
[confident] 非準拠の変更を防ぎますが、既存リソースは削除しません。このルールを通過しても、ほかの権限やポリシーの確認は残ります。

## Step 5 · Protect what already exists

[calm] Contosoは本番リソースの誤削除も防ぎたいと考えています。削除ロックが適用されている間は、そのリソースを削除する管理要求をブロックします。
[600ms]
[confident] 権限を持つ管理者はロックを外せます。特定の管理変更から守る仕組みであり、永久に削除できなくする保証ではありません。

## Step 6 · The resource is not its data

[calm] データベースのリソースをロックしても、内部のお客様の記録すべてがロックされるわけではありません。リソースロックは管理操作が対象なので、許可されたデータ操作では記録を変更できます。
[600ms]
[confident] データの権限と復旧対策は別に必要です。ロックはバックアップでも、完全なデータ保護戦略でもありません。

## Step 7 · Govern the data too

[calm] Contosoには、どの情報を持ち、どこに保存しているかの把握も必要です。Microsoft Purviewは、接続した対応データソースから情報を検出し、分類できます。
[600ms]
[confident] その一覧が、機密情報の扱いを決める助けになります。要件を満たす制御の設定と運用は、引き続きチームが行います。

## Step 8 · Governance - All in One

[calm] Policyはリソースの基準を確認し、ロックは特定の管理操作を保護します。データガバナンスは、保有する情報の理解を助けます。それぞれ目的が違います。
[600ms]
[confident] これらはガバナンスを支援しますが、自動的に準拠を保証するものではありません。次は、手順の記憶に頼らない、繰り返せるデプロイを作ります。