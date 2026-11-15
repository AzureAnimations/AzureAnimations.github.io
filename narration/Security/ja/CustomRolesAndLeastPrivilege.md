# Narrator Script — Security · Custom roles and least privilege in Azure and Microsoft Entra — Azure Security Journey

**Source animation:** [CustomRolesAndLeastPrivilege.html](../../../journeys/Security/CustomRolesAndLeastPrivilege.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/role-based-access-control/custom-roles>
- <https://learn.microsoft.com/azure/role-based-access-control/role-definitions>
- <https://learn.microsoft.com/entra/identity/role-based-access-control/custom-overview>
- <https://learn.microsoft.com/azure/role-based-access-control/rbac-and-directory-admin-roles>

---

## Step 1 · Contributor is too much, Reader is too little

[curious] Contoso のヘルプデスクの Sam に会いましょう。Sam は、仮想マシンを確認して再起動できれば十分で、それ以上は必要ありません。
[600ms]
[serious] Reader では、何も再起動できません。Contributor なら再起動できますが、ほとんどすべてのものを作成・削除することもできてしまいます。
[600ms]
[confident] 組み込みロールが仕事に合わないときは、カスタムロールが答えになります。

## Step 2 · What is inside an Azure role

[calm] ロール定義は、アクセス許可の一覧にすぎません。許可する操作、差し引く操作、触れられるデータ、そして割り当てられる場所を定めます。
[600ms]
[curious] これは Contributor です。ワイルドカードですべてを許可して、そこから短い一覧を差し引いているのがわかります。
[600ms]
[serious] この差し引きは、拒否ではありません。別のロールが同じ操作を許可していれば、その人は引き続き実行できます。

## Step 3 · Build a custom role from a built-in one

[confident] いちばん簡単な始め方は、最も近い組み込みロールをクローンすることです。ポータルでは、ゼロから作ることも、JSON から始めることもできます。
[600ms]
[calm] Sam に必要な範囲まで絞り込み、2つの操作を追加して、割り当てられる場所を制限します。4回編集すれば、Contoso VM Operator の完成です。
[600ms]
[serious] 操作は、できるだけ1つずつ明示してください。ワイルドカードを使うと、将来追加される操作まで許可してしまうからです。

## Step 4 · Test the role at one scope

[calm] 次に、1つのリソースグループで、このロールを Sam に割り当て、Sam としてサインインして試します。
[600ms]
[curious] 割り当てた場所では動き、それ以外では止まるはずです。割り当ては、人、ロール、スコープを結びつけるもので、その下にあるすべてに引き継がれます。
[600ms]
[reassuring] 「アクセスの確認」タブで、そのスコープで誰が何をできるかを確認できます。ロールが思いどおりに動かなければ、更新して、もう一度テストしてください。

## Step 5 · Custom roles in Microsoft Entra ID

[calm] Microsoft Entra にも、カスタムロールがあります。テナント内のアプリ登録のような、Entra のリソースを管理するためのものです。
[600ms]
[curious] アクセス許可はあらかじめ用意された一覧から選び、テナントかアプリのスコープで割り当てます。一覧には、エンタープライズアプリケーション、同意、デバイス、ユーザー、グループなどが含まれます。
[600ms]
[serious] Premium ライセンスと、少なくとも特権ロール管理者のロールが必要です。また、こうした割り当てには、Azure CLI は使えません。

## Step 6 · Azure roles vs Entra roles: which plane?

[curious] 2つのシステムに、2つのアクセス許可のセットがあります。Azure のロールは、Azure Resource Manager を通じて、Azure のリソースを管理します。
[600ms]
[calm] Entra のロールは、Microsoft Graph を通じて、Entra のリソースを管理します。既定では、この2つは重ならず、1つのカスタムロールにアクセス許可を混ぜることもできません。
[600ms]
[serious] 例外が1つあります。グローバル管理者は、Azure リソースのアクセス管理をオンにして、すべてのサブスクリプションでユーザーアクセス管理者になれます。

## Step 7 · Find overprivileged assignments

[calm] まず、誰が最も強い権限を持っているかを確認しましょう。所有者、広いスコープ、そして誰も使っていないアカウントです。
[600ms]
[curious] Contoso は、アクセス制御でロールの割り当てを一覧にして、危ない兆候を探します。スコープごとに、特権タブが役立ちます。
[600ms]
[confident] Defender for Cloud の推奨事項と、Privileged Identity Management のアクセスレビューからも、過剰な権限が見つかります。

## Step 8 · Replace broad access with narrow access

[calm] 過剰な権限の割り当てを直すときは、安全な順序で進めます。まず、範囲の狭いロールを追加します。
[600ms]
[confident] それが動くことを確認してから、広いほうを外します。こうすれば、Sam がアクセスできなくなることはありません。
[600ms]
[reassuring] 割り当ては、スコープの下に引き継がれるので、サブスクリプションの割り当てを外すと、その下で Sam が持っていたものは、すべてなくなります。

## Step 9 · Make access eligible, not permanent

[curious] Marcus が Owner を必要とするのは、月に2回で、毎日ではありません。なのに、なぜ常にオンにしておくのでしょうか。
[600ms]
[calm] Privileged Identity Management を使えば、Marcus は対象ユーザーになり、必要なときだけロールをアクティブ化します。アクティブ化には、多要素認証、理由の入力、承認を求めることができます。
[600ms]
[reassuring] アクティブ化は、決まった時間だけ続き、そのあとは自動で終わります。

## Step 10 · Guardrails: locks and deny assignments

[serious] ロールが定めるのは、人が何をしてよいかです。ガードレールが定めるのは、誰も誤ってしてはいけないことです。
[600ms]
[calm] ロックは、すべてのロールより優先されます。削除や変更を止められ、親のスコープから引き継がれ、対象はコントロールプレーンの操作だけです。
[600ms]
[curious] 拒否割り当ては、ロールが許可していても、その操作をブロックします。管理しているのは Azure なので、自分で作ることはできません。

## Step 11 · Which fix for which finding?

[excited] では、自分で試してみましょう。6つの検出結果と、6つの修正があります。
[600ms]
[curious] 検出結果を選び、それを解決する修正を選びます。カスタムロール、削除、適格な割り当て、ロック、Entra カスタムロール、拒否割り当てです。
[600ms]
[encouraging] 修正は、それぞれ1回ずつしか使えず、1つ1つが別の役割を担います。役割を、検出結果に合わせてください。

## Step 12 · Recap: define narrowly, find excess, remove, repeat

[calm] 最小権限は、1度で終わりではなく、繰り返すループです。仕事に合ったロールを作り、そのあとで、広すぎるものを見つけます。
[600ms]
[confident] 絞り込むか外して、ガードレールを加え、もう一度確認します。
[600ms]
[proud] S C 500 では、カスタムロールの管理と、Azure RBAC による過剰なアクセスの修正が対象です。スキルの一覧は変わるので、最新の学習ガイドを読んでください。
