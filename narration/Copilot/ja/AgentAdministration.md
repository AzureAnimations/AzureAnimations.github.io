# Narrator Script — Microsoft 365 Copilot · Agent Administration

**Source animation:** [AgentAdministration.html](../../../journeys/Copilot/AgentAdministration.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview>
- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings>
- <https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests>
- <https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits>

---

## Step 1 · Someone wants an agent

[calm] Alex新入社員向けのヘルパーエージェント「Onboarding Buddy」を開発し、全員に使ってほしいと言Contoso 。
[600ms]
[curious] Priya、管理者は、何かが本格化する前に3つの質問をします。
[600ms]
[confident] このレッスンは試験A B 900の基本的なエージェント管理スキルを追います。エージェントを構築するには、 Copilot Studioの旅を見てください。

## Step 2 · The agent journey

[calm] すべてのエージェントは同じ5段階を進みます。それを創造者は作り出します。
[600ms]
[curious] その後、管理者が承認し、公開し、監視し、ある日は廃止します。
[600ms]
[reassuring] Microsoft 365管理センターでは、これはエージェントの下にあります。メニュー名が変わるので、Microsoft Learnで確認してください。

## Step 3 · Who can use agents?

[curious] 最初の質問:そもそも誰がエージェントを使えるのか?ユーザーアクセス設定が決定します。
[600ms]
[calm] 全員でも、誰でも、あるいは名前を付けたユーザーやグループだけかもしれません。すべてのユーザーがデフォルトです。
[600ms]
[serious] 非Microsoft代理店が処理したデータはMicrosoft契約の対象外なので、アクセスを許可する前に出版社の利用規約を必ず確認してください。

## Step 4 · Who can install and share?

[calm] エージェントの設定は、誰がインストールできるエージェントや、誰が作成したエージェントを共有できるかも決定します。
[600ms]
[curious] Microsoft 365管理センターの共有設定は、Agent Builderで構築されたエージェントに適用されます。
[600ms]
[confident] 共有制限Copilot StudioPower Platform管理センターに掲載されており、施行に最大1時間かかることがあります。

## Step 5 · Create an agent

[curious] ローコードには2つのルートがあります。 Agent Builderは素早く、エージェントを記述し、知識を追加し、テストします。
[600ms]
[calm] Copilot Studioアクション、コネクター、ワークフローを追加します。 Agent Builder外部サービスを呼び出すアクションを作成することはできません。
[600ms]
[reassuring] Microsoft FoundryやMicrosoft 365 Agents Toolkitで作成したエージェントも同じ管理センターに表示されます。

## Step 6 · The request arrives

[calm] Alexエージェントを提出します。 Microsoft 365管理センターのリクエスト欄に表示され、管理者を待ちます。
[600ms]
[curious] 審査保留とは新しいエージェントの加入を意味します。更新保留中とは、すでに公開されているエージェントの新しいバージョンのことです。
[600ms]
[confident] アップデートのために、ユーザーは承認されるまで前のバージョンを保持します。州やチャンネルで絞り込むことができます。

## Step 7 · Review before you decide

[calm] 決める前に、投稿を開いてください。エージェントの詳細が記載されています。
[600ms]
[curious] それが何であるか、誰が所有しているか、どんなデータを読み取るか、何ができるか、どの権限を求めているかを確認しましょう。
[600ms]
[serious] 作業ができる権限が最も少ない役割を使いましょう。グローバル管理者は緊急時用で、Security Readerのようなロールは閲覧はできますが承認はできません。

## Step 8 · Your turn: approve or reject

[excited] あなたの番です。決定を選び、次に聴衆を決め、誰がOnboarding Buddyをインストールできるかを見守りましょう。
[600ms]
[calm] 公開は魔法使いのようなものです。インストールできる人を選び、ポリシーテンプレートを適用し、権限を確認して管理者の同意を与えます。
[600ms]
[reassuring] 拒否するとエージェントは利用できなくなります。

## Step 9 · Watch it: two admin centers

[curious] 一度稼働したら、それを監視します。2つの管理センターが異なる質問に答えます。
[600ms]
[calm] Microsoft 365管理センターは、何が存在し、誰が利用しているかを教えてくれます。エージェントの概要は過去30日間を示しています。
[600ms]
[confident] Power Platform管理センターでは、あなたのCopilot Studioエージェントの動作状況、特にプレビュー中のエージェントセッション成功率を教えてくれます。

## Step 10 · Update, block, retire

[calm] エージェントはローンチ後も頻繁に変更されます。リクエストに「保留中のアップデート」として表示されたら、そのアップデートを承認してください。
[600ms]
[serious] もし安全でないと判断したら、ブロックしてください。それによって組織全体でエージェントが制限され、Unblockで解除できます。
[600ms]
[reassuring] 必要がなくなったら削除してください。ソフトデリットなので、30日間復元できます。永久削除は元に戻せません。

## Step 11 · Let rules do the housekeeping

[curious] エージェント管理ルールは条件に合致するエージェントを見つけ、それに基づいて一括行動します。
[600ms]
[calm] ルールを実行する前に影響を受けたエージェントを確認します。ルールは「エージェント、設定」の中に見つかります。
[600ms]
[confident] 所有者なしエージェントの再割り当ては、 Agent Builderで作成されたエージェントのみをサポートします。テンプレートの適用は一度きりのアクションであり、スケジュールではありません。

## Step 12 · Five stages, two admin centers

[calm] 振り返りましょう。誰がエージェントを使うか決め、承認し、そして監視を続けるのです。
[600ms]
[proud] 2つの管理センターにまたがる5つの段階で、 Priyaは3つの質問すべてに答えを持っている。
[600ms]
[determined] では、A B 900 に照らして自己チェックし、必ず Microsoft Learn の最新の学習ガイドを確認してください。
