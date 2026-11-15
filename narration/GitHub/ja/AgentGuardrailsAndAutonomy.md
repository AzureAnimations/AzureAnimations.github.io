# Narrator Script — GitHub · Guardrails and Autonomy Levels for Agents

**Source animation:** [AgentGuardrailsAndAutonomy.html](../../../journeys/GitHub/AgentGuardrailsAndAutonomy.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>
- <https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai>

---

## Step 1 · Fast and safe

[calm] エージェントのチームは、どこも、スピードと安全性の両方がほしいものです。その両立を可能にするのが、ガードレールです。
[600ms]
[concerned] チェックがなければ、1つの悪い変更が、そのまま本番に届いてしまいます。かといって、すべてのステップに人が付くと、作業はただ待たされるだけです。
[600ms]
[confident] Contoso Deliveryの目標は、リスクが下がる場面でだけ、人に確認することです。

## Step 2 · Classify actions by risk

[curious] エージェントにどこまで任せるかを決める前に、各アクションを、起こりうる被害の大きさで分類しましょう。
[600ms]
[calm] 3つの質問をします。デリバリーやサービスを壊すおそれはあるか。データを公開したり、アクセス権を変えたりするおそれはあるか。ルールやポリシーに違反するおそれはあるか。
[600ms]
[serious] 3つのうち、いちばん高いものが、全体のリスクになります。ここの評価は例で、実際の評価は、チームごとに行います。

## Step 3 · Autonomy levels

[calm] 自律性は、ダイヤルのようなものだと考えてください。1段階上がるごとに、エージェントの仕事が増えて、人の仕事が減ります。
[600ms]
[confident] レベル1では、エージェントが提案して、人が変更します。レベル2では、エージェントが実行する前に、確認を取ります。
[600ms]
[reflective] レベル3では、実行後に人がレビューします。レベル4では、エージェントが単独で動きます。これは学習用のステップで、公式のリストではありません。

## Step 4 · Match the level to the risk

[curious] では、リスクに合ったレベルを選びましょう。ここでアクションを1つ選ぶと、そのレベルが表示されます。
[600ms]
[confident] 読み取りと検索は、リスクが低いので、エージェントが単独で行います。ブランチ上の編集は、リスクが中程度なので、実行後に人がレビューします。
[600ms]
[serious] デプロイや支出は、先に承認が必要です。削除やポリシーの変更は、提案だけです。レベルは、すべてに1つではなく、アクションの種類ごとに決めましょう。

## Step 5 · Actions that need a person

[calm] ほとんどのアクションは、人を介さずに進めても安全です。
[600ms]
[serious] ただ、元に戻せないものや、コンプライアンスのルールに違反しかねないものもあります。そういうものは、人が判断します。
[600ms]
[reassuring] この短いリストを小さく保つことで、ほかのすべてを、速く進められます。

## Step 6 · Require authorization

[curious] 次は、重要な場所に、人を置きます。エージェントの変更が本番に届くまでの経路を、たどってみましょう。
[600ms]
[confident] ルールセットやブランチ保護で、プルリクエストと承認を必須にできます。コードオーナーは、担当ファイルの変更を承認しなければなりません。環境の承認では、レビュアーが承認するまで、デプロイジョブが待機します。
[600ms]
[reassuring] これらは、すべてGitHubの実際のコントロールです。

## Step 7 · Block what must not happen

[serious] エージェントによるものであっても、絶対に起こしてはいけない変更があります。ルールセットで、それを防ぎます。
[600ms]
[confident] ルールでは、プルリクエストを必須にしたり、強制プッシュを禁止したり、マージの前にチェックの合格を求めたりできます。必須のポリシーチェックは、自分たちのポリシーのために自分で書く、ステータスチェックです。
[600ms]
[reassuring] エージェントも、人とまったく同じルールセットの対象になります。

## Step 8 · Least privilege for agents

[calm] エージェントには、タスクに必要なアクセス権だけを、必要最小限の範囲で与えましょう。ここでは、issueにラベルを付けるトリアージエージェントを例にします。
[600ms]
[confident] トークンの権限は、タスクに必要な最小限に設定します。エージェントが使うツールも、必要なものだけを列挙します。
[600ms]
[reassuring] 作業は、1つのリポジトリから始めます。プッシュするのは自分専用のブランチで、ファイアウォールは有効のまま動かします。

## Step 9 · Responsible AI standards

[curious] 基準は、エージェントが読む場所に書いておきます。たとえば、リポジトリのカスタム指示です。そして、結果を確認します。
[600ms]
[calm] Microsoftの6つの原則は、公平性、信頼性と安全性、プライバシーとセキュリティ、包括性、透明性、そして説明責任です。
[600ms]
[serious] 指示はエージェントの方向づけになりますが、それを確実にするのは、チェックと、人によるレビューです。

## Step 10 · Too many approvals

[concerned] 承認の確認が出るたびに、時間がかかります。多すぎると、誰も読まなくなってしまいます。
[600ms]
[confident] 承認を残すのは、コストが大きいものや、元に戻しにくいアクションだけにします。安全で、繰り返し実行するものは、承認を外します。VS Codeでは、承認の範囲を、1回だけ、そのセッションの間、常にのどれかに設定できます。
[600ms]
[serious] 確認を減らすことは、何でも許可することとは違います。

## Step 11 · Recap: an autonomy matrix

[calm] チーム1つに、マトリクス1つ。すべてのアクションに、リスクと、レベルと、ガードレールがあります。
[600ms]
[confident] 分類して、割り当てます。そのうえで、ガードします。機密性の高い変更には人が関わり、ルール違反はブロックして、最小権限を適用します。そして、安全性が上がらない承認は外して、スピードを保ちます。
[600ms]
[proud] ここまでが、G H 600の学習ガイドにある、ガードレールと説明責任の実装というスキル分野です。
