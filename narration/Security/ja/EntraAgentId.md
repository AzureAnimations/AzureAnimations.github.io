# Narrator Script — Security · Secure AI agents with Microsoft Entra Agent ID — Azure Security Journey

**Source animation:** [EntraAgentId.html](../../../journeys/Security/EntraAgentId.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/agent-id/what-is-microsoft-entra-agent-id>
- <https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers>
- <https://learn.microsoft.com/entra/identity/conditional-access/agent-id>
- <https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview>

---

## Step 1 · An agent that acts on its own

[curious] Contoso の請求書エージェントは、誰もサインインしていない状態で、決まったスケジュールでメール、ファイル、財務データを読み取ります。
[600ms]
[serious] もしこれが乗っ取られたら、攻撃者は、エージェントが届く範囲のすべてを手に入れてしまいます。
[600ms]
[calm] このレッスンでは、1つのエージェントを追いながら、ID の付与から封じ込めまでを見ていきます。まだプレビューの機能には、印が付いています。

## Step 2 · Why agents need identities of their own

[calm] エージェントが、人のアカウントを借りて動くとします。ログを見てください。誰が操作したのか、人なのかエージェントなのか、区別がつきません。
[600ms]
[confident] エージェント専用の ID を用意すると、エージェントの操作を人の操作と切り分けられ、アクセスの範囲も調整できます。
[600ms]
[curious] 最も重要なロールからエージェントを遠ざけることもできます。エージェントは頻繁に入れ替わるので、規模が大きくなっても対応できます。

## Step 3 · Microsoft Entra Agent ID: identities and blueprints

[calm] Entra Agent ID は、ディレクトリの中で、AI エージェントに専用の ID を提供します。
[600ms]
[curious] エージェント ID のブループリントは、テンプレートです。各エージェント ID はそこから作られ、独自の資格情報とアクセス許可を持ちます。
[600ms]
[reflective] 一部の保護機能には Microsoft Agent 365 のライセンスが必要なので、最新のライセンスページを確認してください。エージェントは、Entra 管理センターで確認できます。

## Step 4 · Who owns and sponsors an agent

[calm] どのエージェント ID にも、責任を持つ人が必要です。所有者は技術面の運用を担当し、設定は任意です。
[600ms]
[confident] スポンサーはビジネス側の代表者で、少なくとも1人は必須です。エージェントの目的とライフサイクルに責任を持ちます。
[600ms]
[reassuring] スポンサーは、エージェントを無効にできますが、再度有効にすることはできません。また、スポンサーが退職した場合は、スポンサーの役割がそのマネージャーに移ります。

## Step 5 · What an agent may reach

[calm] アクセスは、アクセスパッケージで付与します。期限があり、承認が必要で、仕事に見合った範囲に絞られています。
[600ms]
[curious] Sam がエージェントのためにリクエストすると、エージェントは、パッケージに書かれたものだけを受け取ります。グループ、API のアクセス許可、Entra のロールなどを含められます。
[600ms]
[confident] ブループリントでは、まず、本当に必要な委任スコープだけから始めましょう。

## Step 6 · Conditional Access for agents

[curious] エージェントが Entra にアクセストークンを要求すると、条件付きアクセスが、まずシグナルを確認します。
[600ms]
[calm] そのうえで、許可するかブロックするかを判断します。トークンが発行または更新されるたびに、実行されます。
[600ms]
[confident] ポリシーの対象は、1つのエージェント、ブループリント全体、または割り当てた属性を持つエージェントです。エージェントのリスクは、まだプレビューです。

## Step 7 · Try it: change the risk level

[excited] あなたの番です。請求書エージェントのリスクレベルを選んでください。
[600ms]
[curious] ポリシーがブロックするのは、指定したレベルだけです。どのレベルでトークンが発行されるのか、確認してみましょう。
[600ms]
[reassuring] 実際の運用では、ポリシーをオンにする前に、レポート専用モードから始めてください。

## Step 8 · Review access and remove what is not needed

[calm] アクセスは、必要な期間より長く残してはいけません。パッケージには有効期限があり、終了が近づくと、スポンサーに通知されます。
[600ms]
[curious] スポンサーは、延長を依頼できます。その場合、新たな承認が始まることもあります。依頼しなければ、そのまま期限切れになります。
[600ms]
[confident] アクセスレビューでは、Sam が、各アクセス許可を維持するか削除するかを、スケジュールに沿って判断します。

## Step 9 · The blast radius

[serious] エージェントが侵害された場合の爆発半径は、エージェントが直接、または数ホップで届くすべてのシステムです。
[600ms]
[calm] それがわかれば、何を最初に守るべきかがわかります。
[600ms]
[reflective] これらは、あくまで可能性のある経路で、攻撃者が必ず通るという意味ではありません。グラフの精度は、データがどれだけそろっているかで決まります。

## Step 10 · Defender XDR: an agent in the attack path

[calm] インシデントでは、エージェントを選び、「爆発半径を表示」を選びます。
[600ms]
[curious] Defender XDR が、そこから重要なターゲットまでの、可能性のある経路を描き出します。
[600ms]
[reflective] これには Microsoft Sentinel データレイクが必要で、攻撃パス分析を拡張し、置き換えるものです。

## Step 11 · Contain it

[determined] まずエージェントを止めて、それから調査してください。侵害を確認するとリスクが High に設定されるので、ポリシーによってブロックされます。
[600ms]
[serious] 無効にすると、すべてのサインインが止まります。1つの ID だけでも、ブループリント全体でも無効にできます。何を実行したかは、ログでわかります。
[600ms]
[reassuring] 誤検知だったなら、リスクを無視して、再度有効にします。本物の侵害だったなら、先に資格情報をローテーションするか、エージェントを廃止します。

## Step 12 · Recap: identity, policy, review, contain

[calm] エージェントに、専用の ID を与える。ポリシーで制御する。アクセスを最新に保つ。
[600ms]
[confident] そして、封じ込め方も知っておく。この同じ4つの操作が、どのエージェントにも使えます。
[600ms]
[proud] これは、S C 500 と A B 650 のスキルに対応しています。試験は変わるので、最新の学習ガイドを確認してください。
