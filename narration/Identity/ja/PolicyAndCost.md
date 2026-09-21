# Narrator Script - 家のお金とルール

**Source animation:** journeys/Identity/PolicyAndCost.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/overview -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-basics -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/governance/policy/concepts/scope -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources -->
<!-- Reference: https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets -->

## Step 1 · Nobody said no

[curious] Mia は自分の部屋に入り、家電を注文する権限も持っています。しかし、ゲーム機は置いてはいけないというルールはまだありません。
[600ms]
操作してよいかと、リソースがルールに合うかは別の問いです。
[600ms]
[confident] Azure ロールは誰が操作できるか、条件付きアクセスはサインイン要件、Azure Policy はリソースの準拠を確認します。この三つを区別しましょう。

## Step 2 · Write the rule, then choose where it lands

[calm] まずポリシー定義としてルールを書き、次に適用先を決める割り当てを作ります。
[600ms]
この例のスコープは、リソース グループに当たる Mia の部屋です。お父さんの作業部屋はこの割り当ての対象外です。
[600ms]
[confident] 定義を保存しただけでは強制されません。割り当てが、再利用するルールと設定、評価するリソースを結び付けます。

## Step 3 · Stopped, or just written down?

[calm] 対象の要求がルールに違反したとき、何が起きるかは効果で決まります。
[600ms]
Deny は要求を拒否し、Audit は許可したうえで非準拠を記録します。Owner の権限でも、強制される Deny ポリシーは回避できません。
[600ms]
[confident] 問題を観察することと、阻止することは別です。また、どちらも既存のリソースがすべて自動修復されたという意味ではありません。

## Step 4 · One rule is not a standard

[calm] 家の標準には複数のルールが必要かもしれません。イニシアチブは、ポリシー定義を一冊のルールブックにまとめます。
[600ms]
図では定義が本の中にあり、割り当ては外にあります。
[600ms]
[confident] イニシアチブをスコープに割り当てると、ルールをまとめて評価できます。定義をまとめることと、適用先を選ぶことは別の操作です。

## Step 5 · Label the receipt, then monitor spending

[calm] お父さんはゲーム機を買えますが、Contoso は誰の費用か、支出がいつ増えたかも把握する必要があります。
[600ms]
所有者タグは費用の担当を示します。この例の予算は八十パーセントで通知しますが、購入やリソースの稼働を停止しません。
[600ms]
[confident] 予算の評価は即時ではなく、タグも自動では継承されません。

## Step 6 · Protect an existing resource

[calm] ボイラーは、誤って変更したくない既存のリソースを表します。ReadOnly ロックがある間は、Owner でもコントロール プレーンでの更新や削除が制限されます。
[600ms]
CanNotDelete ロックは削除を防ぎますが、更新は許可します。
[600ms]
[confident] データ プレーンはこのロックの保護対象ではありません。権限のある人は解除できるので、絶対に開かない金庫ではなく、変更を防ぐガードレールです。

## Step 7 · Keyrings, rules, locks — All in One

[calm] 各制御を並べて比べましょう。ロールは操作を許可し、ポリシーはリソースのルールを評価し、ロックは既存のリソースへの変更を制限します。
[600ms]
タグは担当を示し、予算は支出を通知します。予算は利用を止める上限ではありません。
[600ms]
[confident] それぞれが実際に果たす仕事に合わせて選びます。どれか一つで、ほかを置き換えることはできません。

## Step 8 · How it really looks in Azure

[confident] 最後の図には、Contoso の管理グループでイニシアチブにまとめた、再利用可能なポリシー定義があります。
[600ms]
一つの割り当てが二つのサブスクリプションに適用されます。もう一つは一つのリソース グループを対象に、より厳しい要件を追加します。
[600ms]
[confident] 定義はルールを表し、割り当てはスコープを選びます。この区別を使い、ID、権限、費用の通知を混同せずに環境を管理しましょう。
