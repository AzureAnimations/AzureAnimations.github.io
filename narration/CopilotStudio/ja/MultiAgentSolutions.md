# Narrator Script — Copilot Studio · Copilot Studio — Multi-Agent Solutions

**Source animation:** [MultiAgentSolutions.html](../../../journeys/CopilotStudio/MultiAgentSolutions.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents>
- <https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns>
- <https://learn.microsoft.com/training/courses/ab-620t00>

---

## Step 1 · One agent, too many choices

[curious] Contoso Supportツールやトピック、他のエージェントをどんどん増やしていく。どれも当時は良いアイデアのように思えた。
[600ms]
[concerned] ある数を超えると、オーケストレーターが正しいものを選ぶのは、簡単になるどころか、より難しくなります。
[600ms]
[serious] Microsoft Learnの目安では、ルーティングは選択肢が30〜40ほどを超えると精度が下がることがあり、説明が似ていると、それより早く下がります。

## Step 2 · When to split into more agents

[calm] まずは一人のエージェントから始めましょう。それが一番簡単な方法です。
[600ms]
[confident] 明確な必要性がある時だけ分割してください。追加のエージェントが増えるたびに、ホップが増えて運営や統治が増えます。
[600ms]
[reflective] Learnのアドバイスは、まず名前と説明を確認することです。分割は遅延を増やし、テスト、管理、ガバナンスの範囲を広げます。

## Step 3 · Child agent or connected agent?

[curious] 分割する際、選択肢は2つあります。親は生成オーケストレーションを通じて両方を呼び出します。
[600ms]
[confident] チャイルドエージェントは軽量で、エージェントの内部に存在します。コネクテッドエージェントは独立したエージェントであり、独自のオーケストレーション、ツール、知識を持っています。
[600ms]
[reassuring] それぞれ独立度が異なり、両方を1つの溶液で混ぜることも可能です。

## Step 4 · Child agents and existing agents

[calm] ここで親はその中に住む子代理人に委任します。
[600ms]
[confident] また、他のチームが構築した既存のCopilot Studioエージェントに委任することも可能です。そのエージェントは同じ環境にあり、公開され、接続が許可されている必要があります。
[600ms]
[encouraging] 親のエージェントページから追加し、その説明を絞り込んでルーティングが正常に動作するようにしてください。

## Step 5 · Integrate a Foundry agent

[curious] そして今、 Microsoft Foundryに組み込まれたエージェントがチームに加わりました。これはプレビュー映像です。
[600ms]
[confident] プロジェクトのエンドポイントとエージェントIDをCopilot Studio伝え、親がいつ呼び出すかを説明してください。
[600ms]
[serious] Foundryエージェントはアクティビティプロトコルエンドポイントを有効にする必要があり、新しいFoundryポータルに構築する必要があります。

## Step 6 · Integrate a Fabric data agent

[curious] FabricのデータエージェントがあなたのFabricデータから応答します。この接続もプレビュー段階です。
[600ms]
[confident] アクセスできるエージェントの中から選び、そのエージェントが何を知っているかを説明すると、親エージェントが質問をそちらにルーティングできます。
[600ms]
[serious] トピックからリダイレクトしたり、指示内で名前を付けたりするなど、まだサポートされていないものもあります。生成オーケストレーションでも呼び出すことは可能です。

## Step 7 · A2A: agents talking to agents

[curious] Agent2AgentまたはA2Aは、異なるフレームワークに基づいて構築されたエージェントであっても、タスクを他のエージェントに割り当てるためのオープンスタンダードです。
[600ms]
[confident] すでにA2A話しているエージェント、例えば外部のフレームワークなど、外部にホストされているCopilot Studioに使うのが良いでしょう。
[600ms]
[reflective] 代わりにツールをプラグインMCPしてください。ツールやリソースにはMCPサーバーを使い、シンプルなAPIにはカスタムコネクタやHTTPツールを使いましょう。

## Step 8 · Trace one request across the team

[curious] チームを通じて1件の顧客メッセージをフォローしてください。2人の専門家が対応し、1件の返信が返ってきます。
[600ms]
[confident] 各ホップを選択して、そこで何が起こるか、何に注意すべきかを確認してください。
[600ms]
[encouraging] これは架空のシナリオで、プレゼンター視点ではホップがステップスルーしてくれます。

## Step 9 · Ground answers with Azure AI Search

[calm] Azure AI Searchに一度だけ文書をインデックスしてください。
[600ms]
[confident] Copilot Studioはそのインデックスを生成回答に使用し、 Foundryエージェントも同じインデックスを使用できます。
[600ms]
[reflective] 適切な接続を通じて知識として追加し、ベクターインデックスを1つ指定します。引用を表示するには、インデックスに文書を保持するフィールドが必要ですURL。

## Step 10 · Custom prompts on Foundry models

[curious] プロンプトツールは、デフォルトだけでなく、選択したモデルでも動作します。
[600ms]
[confident] Foundryにデプロイされたモデルを接続し、そのプロンプトをツールとしてまたはトピック内で活用します。
[600ms]
[serious] デプロイ名とベースモデル名をFoundry表示通りに入力し、チャット完了エンドポイントを使います。

## Step 11 · Monitor agents with Application Insights

[calm] チームが動き出したら、その様子を見たいでしょう。エージェントの設定に接続文字列を貼り付けてください。
[600ms]
[confident] 何をログするか選び、その後KustoでテレメトリをAzureで問い合わせます。
[600ms]
[encouraging] テストキャンバスのチャットもログに記録されているので、デザインモードのカスタムディメンションでフィルターしてください。プレビューのダッシュボードビューでは、遅延、ツールの使用状況、例外をグラフ化します。

## Step 12 · Multi-Agent Solutions — All in One

[calm] チームを設計し、専門家をつなげ、 Azureに根付かせ、彼らの走りを見守る。
[600ms]
[confident] A B 620ドメインの4つのスキルグループのうち2つが、エージェントの統合と拡張です。
[600ms]
[determined] スキルは時間とともに更新されるので、ライブ学習ガイドを読んでください。試験には共通プレビュー機能が含まれることがあり、 FoundryとFabricの接続も本日プレビューされています。
