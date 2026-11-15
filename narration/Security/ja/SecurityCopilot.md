# Narrator Script — Security · Microsoft Security Copilot: workspaces, roles, plugins and agents — Azure Security Journey

**Source animation:** [SecurityCopilot.html](../../../journeys/Security/SecurityCopilot.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/copilot/security/microsoft-security-copilot>
- <https://learn.microsoft.com/copilot/security/plugin-overview>
- <https://learn.microsoft.com/copilot/security/manual-onboarding>
- <https://learn.microsoft.com/copilot/security/authentication>

---

## Step 1 · Forty open incidents and one afternoon

[calm] Priya は、Contoso のセキュリティアナリストです。未解決のインシデントが40件あるのに、使える時間は午後だけ。しかも、インシデントは、それぞれ別のコンソールにあります。
[600ms]
[concerned] どのインシデントも、1日が終わるまでに、要約、クエリ、そして判断が必要です。
[600ms]
[determined] このレッスンでは、1人のアナリストと1人の管理者を通して Security Copilot を見ていきます。S C 500 のスキルをカバーします。登場する人物は、全員架空です。

## Step 2 · What Security Copilot is

[calm] Microsoft Security Copilot は、生成 AI を使ったセキュリティソリューションです。質問は、普通の言葉で入力します。
[600ms]
[curious] プラグインを使って、質問を自分のセキュリティデータに結びつけ、それから言語モデルに送ります。
[600ms]
[confident] 応答は、もう一度プラグインで処理されてから返され、それを確認して評価します。

## Step 3 · Capacity and workspace

[calm] キャパシティは、自分でプロビジョニングする計算リソースで、セキュリティ コンピューティング ユニットで測ります。ワークスペースは、テナントに結びついた領域で、ユーザー、オートメーション、エージェントがその中で動きます。
[600ms]
[confident] ライセンスに Security Copilot が含まれていない場合は、Azure のサブスクリプションとリソースグループを使って、ユニットを自分でプロビジョニングします。
[600ms]
[reassuring] Microsoft 365 E5 と E7 のお客様は、あらかじめ含まれていて、自動でプロビジョニングされる場合があります。

## Step 4 · Configure a workspace

[calm] 初回のセットアップでは、管理者が4つの選択を順に進めます。ワークスペース名、キャパシティ、データ共有、そしてロールの確認です。
[600ms]
[serious] このうち2つは、慎重に選んでください。データの保存場所は、ワークスペースを作成したあとは変更できません。
[600ms]
[concerned] また、E5 や E7 を使っていないお客様では、Microsoft とのデータ共有が、既定でオンになっています。Copilot のオーナーは、いつでも変更できます。

## Step 5 · Roles: owner and contributor

[calm] プラットフォームを使うための Security Copilot のロールは、オーナーとコントリビューターの2つです。これらは、Microsoft Entra のロールではありません。
[600ms]
[serious] どちらのロールも、それだけではセキュリティデータにアクセスできません。そのアクセスは、これまでどおり、Entra、Azure、各サービスのロールから得ます。
[600ms]
[confident] 設定で割り当てますが、できればセキュリティグループに割り当ててください。Copilot では、オーナーを常に2人以上にしておきます。一部の管理者ロールは、オーナーを自動で引き継ぎます。

## Step 6 · Embedded or standalone

[curious] Security Copilot は、専用のポータルでも、いつも使っている Microsoft のセキュリティツールの中でも使えます。
[600ms]
[confident] 組み込みのエクスペリエンスは、Defender XDR、Sentinel、Entra、Intune、Purview などの製品に用意されていて、多くはサイドカーとして表示されます。
[600ms]
[reassuring] どちらも同じ Security Copilot で、必要なロールとライセンスは、製品ごとに示されています。

## Step 7 · Plugins: Microsoft, third-party, custom

[calm] プラグインは、関連するツールのセットで、スキルとも呼ばれます。Copilot がデータにアクセスしたり、操作を実行したりするために使います。種類は、Microsoft、サードパーティ、カスタムの3つです。
[600ms]
[confident] Microsoft のプラグインは、ユーザーに代わって認証する方式を使うので、自分がすでにアクセスできる範囲にしか届きません。
[600ms]
[serious] カスタムプラグインは、オーナーが管理します。ワークスペース全体に公開する前に、まずユーザーレベルで検証してください。

## Step 8 · Enable a plugin, change the answer

[curious] プラグインをオフにすると、Copilot は、一般的な話しかできません。
[600ms]
[impressed] オンにすると、同じプロンプトが、Contoso 自身のインシデントに基づいた内容になります。スイッチを切り替えて、2つの答えを比べてみてください。
[600ms]
[reassuring] 「セットアップ」ボタンがあるプラグインは、ユーザーごとに設定します。返されるデータは、自分のロールによって、引き続き制限されます。

## Step 9 · Agents that work without being asked

[calm] エージェントは、トリガーが働いたときに、繰り返しのタスクを処理します。トリガーは、スケジュール、イベント、手動実行などです。
[600ms]
[confident] セットアップでは、トリガー、ID、アクセス許可、そして必要なプラグインとロールを選びます。制限を設定でき、コントロールは自分の手に残ります。
[600ms]
[reflective] エージェントも、ほかの機能と同じように、セキュリティ コンピューティング ユニットを使います。一部は、まだプレビューです。

## Step 10 · The Security Store

[calm] Security Store では、エージェントを見つけて入手し、適切な担当者にアクセス許可を承認してもらってから、セットアップします。
[600ms]
[confident] Microsoft のエージェントは、アクティブなエージェントに入ります。パートナーのエージェントは、ストアで購入するか、サブスクライブします。
[600ms]
[curious] パートナーのエージェントが Microsoft のデータを必要とする場合は、グローバル管理者が承認します。サブスクリプションはストアで管理し、エージェントの実行にはキャパシティを使います。

## Step 11 · Try it: pick the right tool for six tasks

[curious] 6つのタスクと、Security Copilot の5つの要素。タスクを読んで、それを解決できるものを選んでください。
[600ms]
[encouraging] ロール、ワークスペース、プラグイン、エージェント、Security Store。タスクごとに、最も合うものが1つあります。
[600ms]
[reassuring] 選ぶたびに理由が表示されるので、間違えても、何かが学べます。

## Step 12 · Recap: workspace, role, plugin, agent

[calm] セットアップするものは4つあり、順番は、ワークスペース、ロール、プラグイン、エージェントです。それぞれが、管理者が聞かれる質問に対応しています。
[600ms]
[confident] これらは、S C 500 の学習ガイドにある、Microsoft Security Copilot の実装スキルで、Security Store のエージェントも含まれます。
[600ms]
[proud] 試験は変わるので、このリストに頼る前に、最新の学習ガイドを読んでください。
