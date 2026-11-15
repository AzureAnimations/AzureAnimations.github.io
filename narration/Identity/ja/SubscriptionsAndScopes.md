# Narrator Script - この費用はどの部屋のもの？

**Source animation:** journeys/Identity/SubscriptionsAndScopes.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/management-groups/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview -->
<!-- Reference: https://learn.microsoft.com/en-us/training/paths/az-104-manage-identities-governance/ -->

## Step 1 · One bill for the whole house

[curious] 家族は誰がどの家電を使えるか分かりましたが、費用は一つの共通口座にまとめられています。
[600ms]
リソース、責任、費用を整理する仕組みが必要です。権限やポリシーがどこに適用されるかを示すのがスコープです。
[600ms]
[confident] 一つのサブスクリプションにも、小さなスコープがあります。同じ口座だからといって、すべてへのアクセスを渡す必要はありません。

## Step 2 · Give each part of the house its own account

[calm] サブスクリプションを使うと、Contoso は利用状況、費用、クォータを別々の境界で管理できます。
[600ms]
家のたとえでは、共有部分と個人の部分に別の口座を用意します。ID は引き続きテナントに属し、口座ごとに新しい家族を作るわけではありません。
[600ms]
[confident] サブスクリプションの分け方は計画しましょう。後で移動できるのは、リソースの種類と移動条件が対応する場合だけです。

## Step 3 · A room for things that belong together

[calm] リソース グループは、一緒に管理するものを置く部屋です。オーブンはキッチンへ、テレビとスピーカーはリビングへ置きます。
[600ms]
各グループは一つのサブスクリプションに属し、各リソースは一つのリソース グループに属します。
[600ms]
[confident] 保護や依存関係で阻止されなければ、グループの削除は中のリソースも削除します。見た目ではなくライフサイクルでまとめましょう。

## Step 4 · Above every account sits the family

[calm] 管理グループはサブスクリプションの上にあります。家全体の方針を決める家族と、個別の口座の関係です。
[600ms]
サブスクリプションや別の管理グループを収め、共通のルールを適用する場所にできます。
[600ms]
[confident] 配下に置いたサブスクリプションは、適用対象の割り当てを継承します。テナントのルート管理グループが階層の起点となり、口座はばらばらにはなりません。

## Step 5 · What the family decides reaches every room

[calm] 管理グループ、サブスクリプション、リソース グループ、リソースの順に下へたどります。
[600ms]
上位に割り当てたロールの権限は下位にも適用されます。ポリシーも、承認された除外や免除を除き、子のスコープに適用されます。
[600ms]
[confident] ただしタグは自動で継承されません。すべての設定が同じ仕組みで階層を下るとは限らないのです。

## Step 6 · Four levels — All in One

[calm] 家族、口座、部屋、家電。これが Azure の四つのスコープのたとえです。
[600ms]
一つのリソースへのロール割り当ては限定的ですが、上位の割り当ては配下の多くのリソースに及びます。
[600ms]
[confident] 目的に合う最小のスコープを選びましょう。次は権限だけでなく、リソースのルールや費用の通知にも同じ階層を使います。

## Step 7 · The Contoso estate, end to end

[confident] 全体図では家のたとえを実際の名前に置き換えます。一つのテナント、管理グループ、五つの環境用サブスクリプションです。
[600ms]
各リソース グループには、その環境の仮想マシン、クラスター、データベース、ネットワークがあります。サブスクリプションの親は一つです。
[600ms]
[confident] 共通のポリシーやアクセスを管理グループに割り当てると、後から追加したものも含め、配下のサブスクリプションに適用されます。
