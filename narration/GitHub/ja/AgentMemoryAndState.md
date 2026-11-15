# Narrator Script — GitHub · Agent Memory and State: Remember, Resume and Avoid Drift

**Source animation:** [AgentMemoryAndState.html](../../../journeys/GitHub/AgentMemoryAndState.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · The agent that forgot

[calm] 最初のセッションで、エージェントは、コードを読んで、上限を決めて、テストを書きます。
[600ms]
[concerned] 2回目のセッションは、空っぽのコンテキストから始まります。前に学んだことを残しておく場所がないので、同じ作業を繰り返すことになります。
[600ms]
[serious] その代償は、無駄な作業と、いつの間にか変わってしまうかもしれない判断です。

## Step 2 · Short-term, long-term, external

[curious] どの棚に置くかは、その事実をどのくらいの期間残す必要があるか、そして、誰がそれを必要とするかで決めます。
[600ms]
[confident] 短期は、このセッションのコンテキストです。長期は、Copilot Memoryで、あとのセッションのために残しておく事実や好みを保存します。外部は、リポジトリ内のファイル、issue、プルリクエストのことです。
[600ms]
[reflective] どの棚が一番いいということはありません。人が読んでレビューする必要のある決定には、外部のファイルを使いましょう。

## Step 3 · Copilot Memory

[calm] Copilot Memoryには、リポジトリに関する事実が、出典付きで保存されます。あなた自身の好みも保存されます。
[600ms]
[confident] リポジトリの事実は、共同作業者と共有されて、そのリポジトリでだけ使われます。あなたの好みは、あなただけのもので、リポジトリをまたいで引き継がれます。
[600ms]
[curious] メモリは、Copilotが作業しながら、自分で作成します。設定から削除はできますが、編集はできません。また、フォークには引き継がれません。

## Step 4 · Keep only what the task needs

[serious] コンテキストが詰まりすぎると、回答の質が下がります。長いコンテキストが、いいコンテキストとは限りません。
[600ms]
[confident] タスクに必要なファイル、基準、決定は残しておきます。古いチャットや無関係な質問、長い出力は整理しましょう。コマンドで、確認、クリア、要約ができます。
[600ms]
[reassuring] Copilot CLIは、ウィンドウがいっぱいになってくると、履歴を自動で要約します。メモリに残すのは、この先も正しい内容だけにしましょう。

## Step 5 · Expiry and reset

[calm] メモリの内容が、ずっと正しいとは限りません。
[600ms]
[confident] 裏付けがないまま一定期間が過ぎると、期限切れになります。Copilotがまだ有効だと確認すると、期間がリセットされます。メモリを呼び出しただけでは、リセットされません。
[600ms]
[encouraging] 有効期限は、オーナーが設定できます。組織とエンタープライズで値が違う場合は、短いほうが優先されます。メモリは、設定からいつでも削除できます。

## Step 6 · Durable artifacts

[calm] 決定は、チャットより長く残る場所に書きましょう。
[600ms]
[confident] プランファイルには、ステップと、完了したものが書かれます。issueには、タスクと受け入れ基準を書きます。プルリクエストには、何をなぜ変更したのかと、チェックの結果を記録します。
[600ms]
[reflective] Copilot CLIは、プランをセッションフォルダに保存します。だから、チームで共有すべきものは、リポジトリに置きましょう。

## Step 7 · Resume the work

[curious] 新しいセッションは、成果物を読み込みます。プラン、issue、そしてプルリクエストです。
[600ms]
[confident] すでに終わって合意済みのものは飛ばして、最初の未完了の項目を見つけて、そこから続けます。
[600ms]
[calm] Copilot CLIでは、前のセッションを再開することも、最初から始めて、エージェントに成果物を読ませることもできます。どちらの場合も、まずプランを確認しましょう。

## Step 8 · Drift

[curious] 長い作業の中では、1つ1つのステップは、それだけ見ればもっともらしく見えます。
[600ms]
[concerned] でも、積み重なると、プランから外れてしまいます。小さな選択をプランと照らし合わせる人がいないと、プランにはなかった場所で、作業が終わってしまうのです。
[600ms]
[serious] その兆候は、実際の作業と元のプランとの差分に表れます。ドリフトは、設定ではなく、パターンです。

## Step 9 · Detect and correct drift

[calm] プランとの比較は、最後だけでなく、チェックポイントごとに行いましょう。
[600ms]
[confident] プランにない変更は、すべてフラグを立てます。それから、軌道修正します。エージェントに、元に戻して続けるよう伝えましょう。
[600ms]
[encouraging] Copilotが作業している最中でも、フォローアップのプロンプトを送れます。また、プルリクエストを作る前に、差分を確認できます。

## Step 10 · Share state across tools

[curious] 1つのツールで学んだ事実は、ほかのツールでも役に立ちます。
[600ms]
[confident] メモリは、ツールではなく、リポジトリに属します。指示、issue、プラン、プルリクエストは、どのツールからも見えるので、全員が同じ状況を把握できます。
[600ms]
[calm] クラウドで始めたセッションを、別のクライアントで続けることもできます。

## Step 11 · Conflicting and stale context

[concerned] 2つの情報源の内容が食い違っているときは、たいてい、どちらかが古くなっています。
[600ms]
[confident] 現在のコードと照らし合わせて確認してから、古いほうを修正します。Copilotは、メモリの出典を、現在のブランチと照合しますが、それは判断であって、保証ではありません。
[600ms]
[serious] Copilot CLIは、指示ファイルを、決まった順序なしにまとめて読み込みます。だから、新しい行が優先されることを期待するより、古い行を削除しましょう。

## Step 12 · Recap

[calm] エージェントを使うときのチェックリストです。まず、棚を選んで、範囲を決めて、有効期限を設定します。
[600ms]
[confident] 次に、残します。決定を書き留めて、そこから再開して、ドリフトがないかを確認します。
[600ms]
[proud] 最後に、状態を共有して、古いコンテキストや矛盾するコンテキストを取り除いて、正確さを保ちます。ここまでが、G H 600の、メモリ、状態、実行の管理という目標です。
