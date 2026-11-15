# Narrator Script — GitHub · How a Copilot Suggestion Is Made

**Source animation:** [HowCopilotWorks.html](../../../journeys/GitHub/HowCopilotWorks.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow>
- <https://learn.microsoft.com/agent-framework/journey/llm-fundamentals>

---

## Step 1 · You type, a suggestion appears

[calm] Contosoの開発者Mayaがコメントを書くと、グレーの文字が表示されます。
[600ms]
[curious] でも、その裏では7つの段階が動いていて、普段は目に見えません。
[600ms]
[confident] このレッスンでは、その1つ1つを開いて、あなたのコードに何が起きているのかを見ていきます。

## Step 2 · Gather the context

[calm] 何かを送る前に、Copilotはカーソルのまわりから手がかりを集めます。コード、ファイル、近くのタブ、プロジェクトです。
[600ms]
[confident] チャットでは、選択範囲や、アットマークで指定したファイル、チャット履歴も使います。
[600ms]
[encouraging] だから、関係のあるファイルは開いて、関係ないファイルは閉じておきましょう。

## Step 3 · Build the prompt

[curious] 集めた手がかりは、ルールやあなたのコードと一緒に、1つのプロンプトにまとめられます。
[600ms]
[confident] カーソルの前のコードと後ろのコードが空白を挟む形になり、モデルがその空白を埋めます。これをフィル・イン・ザ・ミドルと呼びます。
[600ms]
[reflective] 実際のプロンプトの形式は内部のものなので、この図はイメージをつかむためのものです。

## Step 4 · Pass the proxy

[calm] できあがったプロンプトは、HTTPSでエディターから送り出されます。
[600ms]
[confident] どのモデルにも届く前に、GitHubが所有するMicrosoft Azureのテナント内の、プロキシサーバーに到達します。
[600ms]
[reassuring] このプロキシが最初のチェックポイントで、エディターとモデルのあいだに立っています。

## Step 5 · Filter on the way in

[serious] プロキシは、システムを操作しようとする試みをブロックします。だから、細工したプロンプトでCopilotの動作を変えることはできません。
[600ms]
[confident] コンテンツフィルターが、攻撃的なテキストや個人情報を、プロンプトが先に進む前に取り除きます。
[600ms]
[reassuring] モデルに届くのは、きれいなプロンプトだけです。

## Step 6 · The model writes

[calm] モデルは、提案を1トークンずつ書いていきます。トークンとは、テキストの小さな断片のことです。
[600ms]
[curious] そのたびに、次に来そうなものを予測しています。
[600ms]
[serious] 「ありそう」は「正しい」とは限りません。どの提案も、レビューしてテストしましょう。

## Step 7 · Post-process on the way out

[calm] 提案はどれも、あなたの目に届く前にチェックされます。
[600ms]
[confident] チェックするのは、有害なコンテンツ、バグ、セキュリティ上の欠陥です。設定がオンなら、公開コードとの一致も調べます。
[600ms]
[reassuring] チェックに引っかかった提案は、途中で切られるか、破棄されます。

## Step 8 · Back to the editor

[calm] すべてのチェックを通った提案だけが、グレーの文字としてエディターに届きます。
[600ms]
[confident] 全部でも一部でも受け入れられますし、却下もできます。そのまま入力を続ければ、無視したことになります。
[600ms]
[reassuring] あなたが選ぶまで、ファイルは何も変わりません。

## Step 9 · Chat is different

[curious] チャットでは、新しいプロンプトのたびに、前のやり取りも一緒に送られます。
[600ms]
[concerned] だから、話題が外れた古いやり取りが残っていると、答えが変な方向に引っ張られることがあります。
[600ms]
[encouraging] 新しいタスクを始めるときは、新しい会話を始めましょう。

## Step 10 · Where your data goes

[calm] プロンプトと提案は、どのプランでも同じ経路を通ります。
[600ms]
[confident] そのデータでモデルをトレーニングできるかどうかは、プランによって違います。BusinessとEnterpriseでは、トレーニングには使われません。
[600ms]
[serious] Free、Pro、Pro Plusでは、オプトアウトしない限り使われます。最新の文言はCopilotの設定で確認してください。

## Step 11 · Recap: the lifecycle in one picture

[calm] 全体の流れは、1つのループです。エディターがコンテキストを集めてプロンプトを作り、プロキシとフィルターが入口と出口を守ります。
[600ms]
[confident] モデルが書き、あなたが決めます。チャットも同じループで、毎回のプロンプトに会話履歴が加わるだけです。
[600ms]
[proud] これで、キーを打ってからグレーの文字が出るまでのあいだに何が起きているか、分かりましたね。
