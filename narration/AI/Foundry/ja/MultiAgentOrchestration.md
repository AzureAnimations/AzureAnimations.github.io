# Narrator Script — Foundry · Multi-Agent Orchestration

**Source animation:** [MultiAgentOrchestration.html](../../../../journeys/AI/Foundry/MultiAgentOrchestration.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/agent-framework/workflows/orchestrations/>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>
- <https://learn.microsoft.com/agent-framework/workflows/human-in-the-loop>

---

## Step 1 · One agent, too many hats

[calm] Contoso Retailでは、Helperという代理店が注文、ポリシー、返金、メールなどすべての返品に関する質問を一人で対応しています。
[600ms]
[concerned] つまり、一つのプロンプト、一つのツールの山、そして一つの成長するコンテキストです。
[600ms]
[reflective] 役割を重ねるほど信頼性を維持するのは難しくなります。

## Step 2 · Three reasons to split the job

[curious] 解決策は、各エージェントに1つのジョブを与え、焦点を絞ったプロンプト、必要なツール、そして使用するコンテキストだけを与えることです。
[600ms]
[calm] モデルのサイズもタスクに合わせて調整できます。
[600ms]
[confident] 理由は3つあります:専門化、最適化、そしてセキュリティの境界を明確にする。

## Step 3 · When one agent is enough

[calm] 何かを分割する前に、まずは最もシンプルで効果的なものから始めましょう。
[600ms]
[serious] 一段上がるたびに、調整、遅延、コストが増え、新たな障害の可能性も増えます。
[600ms]
[reassuring] 自分の要件に確実に合う最も低い複雑さのレベルを使いましょう。

## Step 4 · In a line, or side by side

[curious] 連続的なオーケストレーションはエージェントを次々と動かし、それぞれが前の仕事の上に積み重ねていく。
[600ms]
[calm] 同時処理は同じ入力に対してエージェントを実行させ、最後のステップで回答を組み合わせます。
[600ms]
[confident] どちらもMicrosoft Agent Frameworkに組み込まれています。順序が重要な場合はシーケンシャル、ジョブが独立している場合は並行を使いましょう。

## Step 5 · Who decides who goes next?

[curious] ハンドオフでは、アクティブなエージェントが、中央の管理役を置かずに、より適したピアのエージェントへタスク全体を渡します。
[600ms]
[calm] グループチャットとMagenticでは、マネージャーが次に誰を動かすかを決め、Magenticはその上にプランニングマネージャーを追加します。
[600ms]
[serious] 従来のConnected Agentsツールは新しいFoundry Agent Serviceでは利用できないため、ワークフロー、Agent Framework、またはA2Aツールをご利用ください。

## Step 6 · How agents pass context

[curious] 各エージェントはそれぞれの理由やツールの結果を加えます。すべてを伝えれば、文脈が膨れ上がります。
[600ms]
[calm] 要約だけを渡せば、簡潔なままです。ここでのバーの大きさは、あくまで説明のための例です。
[600ms]
[reflective] デフォルトでは、シーケンス内の各エージェントは前のエージェントの会話全体を消費しますが、そのエージェントの応答のみを渡すことができます。ワークフローは共有状態も提供します。

## Step 7 · Tools: the agent asks, your code acts

[curious] 関数呼び出しでは、エージェントは1842のget order関数を求めます。
[600ms]
[calm] あなたのコードは関数を実行し、その結果を返します。
[600ms]
[confident] エージェントはその結果を使って返信を続けます。エージェントは尋ねますが、あなたのコードが演技を行います。

## Step 8 · Sensitive tools pause for a human

[serious] リスクのある道具は承認必須とマークしてください。エージェントが連絡すると、実行は一時停止します。
[600ms]
[calm] リクエストはツールとその引数を示し、その人が決定します。
[600ms]
[concerned] Foundryのビジュアルワークフロービルダーはプレビュー中で、2026年12月1日に廃止されるため、新規ビルドはMicrosoft Agent Frameworkを使うべきです。

## Step 9 · You are the approver

[curious] 今度は君の番だ。返金担当者が1842号の注文で240ドルの返金を希望しており、その走行は一時停止された。
[600ms]
[calm] 承認か拒否を選択し、ワークフローのブランチを見守ってください。
[600ms]
[encouraging] 次に別の選択肢を試してみて、両方の道が見えるようにしてください。

## Step 10 · Read the whole run as a trace

[calm] トレースは、モデル呼び出し、ツール呼び出し、トークン、時間といった順に各ステップを記録します。
[600ms]
[curious] チームでは、どのエージェントが何をしたか、どこで問題が起きたかが分かります。
[600ms]
[reassuring] FoundryトレースをApplication Insightsに保存し、トレースは一般的にプロンプトおよびホストエージェント向けに利用可能です。

## Step 11 · Where teams go wrong, and the guardrails

[serious] エージェントが増えれば失敗する可能性も増えます。まず失敗を名付け、それを捉えるコントロールを加えましょう。
[600ms]
[calm] 人間などのフォールバックで反復上限を設定し、グループチャットは3人以下に抑え、各エージェントあたりのトークン数を監視しましょう。
[600ms]
[confident] タスクごとにモデルを割り当て、次のエージェントが使う前に各出力を検証してください。

## Step 12 · Multi-agent orchestration at a glance

[calm] それは一つの仕事で、小さなエージェントチームがそれぞれ一つのことに集中している。
[600ms]
[reassuring] 重要な場面には人間が関与し、何が起きたかを示すトレースも残ります。
[600ms]
[proud] そうしてHelperは本当に信頼できるチームになったのです。
