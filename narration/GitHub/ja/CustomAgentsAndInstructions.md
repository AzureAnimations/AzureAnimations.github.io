# Narrator Script — GitHub · Configure Copilot Agents: Instructions, Custom Agents and Setup Steps

**Source animation:** [CustomAgentsAndInstructions.html](../../../journeys/GitHub/CustomAgentsAndInstructions.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents>

---

## Step 1 · One Agent, Many Jobs

[calm] Mayaは、汎用のエージェント1つに、テスト、ドキュメント、レビューという、3つの違う仕事を任せています。
[600ms]
[concerned] このエージェントは、Contosoのルールを何も知りません。しかも、制限しなければ、どの仕事でも、使えるツールをすべて使えてしまいます。
[600ms]
[serious] その結果、チームの働き方に合わない出力になってしまいます。これを、設定で解決しましょう。

## Step 2 · Repository Instructions

[curious] 最初の対策は、ファイルを1つ用意することです。Contosoの構築、テスト、命名のやり方を、Copilotに伝えます。
[600ms]
[confident] リポジトリのGitHubのフォルダに置く、ふつうのMarkdownファイルです。ルールは、自然な言葉で書きます。このリポジトリでのすべてのリクエストに、適用されます。
[600ms]
[encouraging] 作業のビルド、テスト、検証の方法を書いておきましょう。エージェントは、毎回それに従います。

## Step 3 · Path and Agent Instructions

[calm] 範囲の狭いルールは、より、コードの近くに置きます。
[600ms]
[confident] パス指定の指示ファイルは、パターンに一致するファイルに適用されます。エージェント指示ファイルは、リポジトリのどこにでも置けます。複数ある場合は、いちばん近いものが優先されます。
[600ms]
[curious] パスが一致して、リポジトリ全体のファイルもある場合は、Copilotは両方を使います。また、パス指定のファイルを、クラウドエージェントやコードレビューの対象から、外すこともできます。

## Step 4 · A Custom Agent

[curious] 次は、エージェントに役割を与えます。カスタムエージェントは、フロントマターが付いたMarkdownファイルです。
[600ms]
[confident] 名前、目的の説明、そして、動き方を決めるプロンプトを書きます。説明は、必須です。
[600ms]
[reflective] プロファイルは、agentsフォルダに置いて、ファイル名の末尾は、dot agent dot mdにします。JetBrains IDE、Eclipse、Xcodeでの対応は、パブリックプレビューです。

## Step 5 · Choose Its Tools

[calm] toolsプロパティには、エージェントが使えるツールを並べます。読み取りと検索しかできないレビュアーなら、ファイルを変更することはできません。
[600ms]
[confident] このプロパティを省略するか、アスタリスクを指定すると、エージェントは、すべてのツールを使えます。リストを指定した場合は、そのツールだけが有効になります。
[600ms]
[serious] 空のリストにすると、すべて無効になります。認識されないツール名は、単に無視されます。

## Step 6 · Pick the Model and the Scope

[calm] モデルは、任意です。設定しないと、エージェントは、デフォルトのモデルを引き継ぎます。
[600ms]
[confident] ファイルをどこに置くかで、誰がそのエージェントを使えるかが決まります。1つのリポジトリ、組織、またはエンタープライズです。組織のエージェントは、組織のdot githubリポジトリにある、専用のフォルダに置きます。
[600ms]
[curious] 同じ名前のエージェントが、2つのレベルにある場合は、いちばん下のレベルのものが優先されます。

## Step 7 · Copilot Setup Steps

[calm] 次は、環境です。copilot setup stepsという名前のジョブを1つ持つワークフローファイルで、エージェントが始まる前に、環境を準備します。
[600ms]
[confident] このステップは、GitHub Actionsで実行されます。だから、適用されるのは、Actionsで動くセッションで、クラウドサンドボックスのセッションには適用されません。
[600ms]
[serious] ステップが失敗した場合、Copilotは、残りを飛ばして、その時点の環境で作業を始めます。

## Step 8 · Scope to a Repository and a Branch

[calm] エージェントのファイルは、デフォルトブランチに置きます。だから、先に、プロファイルとセットアップステップのファイルを、そこにマージしてください。
[600ms]
[confident] セッションは、1つのリポジトリから始まります。Copilotは、選んだベースブランチから、新しいブランチを作成します。
[600ms]
[reassuring] 結果は、そのベースブランチに対するプルリクエストになります。クラウドサンドボックスでは、1つの組織内の複数のリポジトリにまたがるセッションも可能です。

## Step 9 · Invoke It

[curious] カスタムエージェントを始める方法は、いくつかあります。issueを割り当てるときや、タスクを始めるときに、選びましょう。
[600ms]
[confident] プルリクエストでは、Copilotにメンションして、変更を依頼します。ワークフローでは、issues APIに、カスタムエージェントとベースブランチを渡せます。これは、プレビューの機能です。
[600ms]
[encouraging] エージェントタブのドロップダウンから選ぶこともできますし、Copilot CLIのagentコマンドも使えます。

## Step 10 · Test the Agent

[calm] エージェントは、結果を確認できる、小さなタスクを1つ使ってテストしましょう。
[600ms]
[curious] 結果を読みます。Copilotがプルリクエストを開くと、どのカスタムエージェントが使われたかが、そこに記載されます。
[600ms]
[determined] 結果が間違っていたら、出力を直すのではなく、指示を直して、もう一度実行しましょう。

## Step 11 · Recap: The Files That Make an Agent

[calm] エージェントは、4つの要素でできています。指示がルールを決めて、プロファイルが役割とツールを決めます。
[600ms]
[confident] セットアップステップが環境を整えて、スコープが、リポジトリ、ベースブランチ、そしてエージェントの起動方法を決めます。
[600ms]
[proud] G H 600の学習ガイドでは、これは、ツールの使用と環境とのやり取りの実装に分類されています。
