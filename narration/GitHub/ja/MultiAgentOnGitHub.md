# Narrator Script — GitHub · Several Agents, One Repository

**Source animation:** [MultiAgentOnGitHub.html](../../../journeys/GitHub/MultiAgentOnGitHub.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>

---

## Step 1 · Three Agents, One Repository

[calm] Contosoの天気チームが、バックログを3つのエージェントに任せました。Mayaは全部を早く終わらせたいと考えています。
[600ms]
[curious] エージェントにはそれぞれタスクがありますが、コードベースも、ブランチも、プルリクエストの一覧も共有しています。
[600ms]
[serious] 問題はここから始まります。作業がぶつかったり、重複したり、誰にも気づかれないまま失敗したりします。

## Step 2 · Choose a Pattern

[calm] イシューが3つで、エージェントも3つです。始める前に、イシュー同士の依存関係に合ったパターンを選びましょう。
[600ms]
[confident] オーケストレーターは、目標をタスクに分け、独立したタスクを並列で実行し、結果をレビューして統合します。ハンドオフは、1つの作業を次の専門エージェントに渡します。
[600ms]
[reflective] 作業が本当に順番どおりにしか進められないなら、並列にしてもほとんど効果はありません。

## Step 3 · Isolate Parallel Work

[confident] エージェントごとに専用のブランチを用意しましょう。そうすれば、プルリクエストでまとめるまで、並列の作業が互いを上書きすることはありません。
[600ms]
[calm] GitHubでは、Copilot cloud agentがタスクごとに1つのブランチにプッシュして、そのブランチ用にプルリクエストを1つ開きます。自分のマシンなら、git worktreeで、エージェントごとに専用のフォルダを持てます。
[600ms]
[reassuring] どちらの方法でも、最後のマージは人が行います。

## Step 4 · Overlapping Changes

[curious] ここでは、2つのエージェントが同じファイルの同じ行を編集しています。プルリクエストは、単体で見ればどちらも問題なさそうです。
[600ms]
[calm] Gitは、別のファイルや別の行への変更なら、自動でマージしてくれます。でも、同じ行に別々の編集が入ると、手助けが必要です。
[600ms]
[intrigued] 重なりは、各プルリクエストのFiles changedタブで確認できます。

## Step 5 · Resolve Conflicts

[serious] 競合があると、マージできません。2つの編集のどちらを選ぶべきか、Gitには安全に判断できないからです。
[600ms]
[confident] まず、マージの順番を決めましょう。1つ目のプルリクエストを先に取り込んで、次のプルリクエストをそれに合わせて更新します。そのファイルの担当者には、CODEOWNERSで確認できます。マージボックスからCopilotに手伝ってもらうこともできます。
[600ms]
[reassuring] 最終的なテキストを選ぶのは、人です。

## Step 6 · Duplicated and Contradictory Work

[curious] 次は、プルリクエストの一覧で、2つの警告サインを探します。同じイシューを閉じるプルリクエストが2つあれば、重複です。
[600ms]
[concerned] 内容が食い違っている2つは、矛盾です。たとえば、コードは時速キロメートル、ガイドは時速マイルになっている場合です。
[600ms]
[determined] 1つを残して、もう1つは閉じ、その理由を書き残しましょう。検索の修飾子を使うと、一覧を絞り込めます。

## Step 7 · Leave an Audit Trail

[calm] 各エージェントの判断やハンドオフのメモは、そのプルリクエストに書き込まれます。だから、あとで誰でも確認できます。
[600ms]
[confident] Copilot cloud agentのコミットは署名されていて、タスクを始めた人が共同作成者として記録され、セッションログへのリンクも付きます。そのログには、推論の過程と使ったツールが残っています。
[600ms]
[serious] ログは役に立ちますが、自分でレビューする代わりにはなりません。

## Step 8 · Spot a Stalled or Failed Run

[calm] 正常な実行は、ログの行を出し続けます。すべてのセッションを、チームで決めたしきい値と比べてみましょう。
[600ms]
[concerned] 注意するトラブルは3種類です。失敗は、チェックが失敗で終わったこと。一部完了は、途中で止まったものの、いくつかのコミットはプッシュ済みという状態。停滞は、新しいログの行が長いあいだ出てこないことです。
[600ms]
[reassuring] エージェントパネルからセッションを開くと、進捗とログを確認できます。

## Step 9 · Recover: Roll Back and Hand On

[serious] 実行がおかしくなったら、まず停止します。停止すると実行は終わり、すでにプッシュしたコミットは残ります。
[600ms]
[confident] そのあと、そのエージェントの作業だけをロールバックします。マージ済みのプルリクエストをリバートすると、それを取り消す新しいプルリクエストが開くので、履歴は残ります。
[600ms]
[reassuring] 最後に、メモを添えてタスクを引き継ぎます。マージするのは人です。Copilotは、自分のプルリクエストを承認できないからです。

## Step 10 · Add an Agent

[curious] 専門のエージェントが必要ですか。新しいプロファイルファイルを1つ追加して、Markdownで書きます。
[600ms]
[calm] すでに動いているエージェントは、これまでどおり自分のファイルと自分のブランチを使います。新しいエージェントには、はっきりした役割と、必要なツールだけを与えましょう。
[600ms]
[optimistic] ファイルをマージしたら、頼りにする前に、まずタスクを1つ試してみましょう。

## Step 11 · Update, Replace or Retire an Agent

[calm] エージェントを変更するときは、プルリクエストでプロファイルを変更します。Gitがすべてのバージョンを保持して、過去のプルリクエストやログもそのまま残ります。
[600ms]
[confident] タスクは、始めたときのバージョンのまま動き続けます。エージェントを置き換えるときは、新しいエージェントを先に導入してから、古いほうを廃止します。
[600ms]
[reflective] 廃止とは、ファイルは削除しても、記録は残すということです。セッションはアーカイブできるので、読める状態のまま残せます。

## Step 12 · Recap: A Multi-Agent Run, Reviewed After the Fact

[calm] Contosoの実行を、6つの質問で振り返ってみましょう。答えはすべて、リポジトリの中にあります。
[600ms]
[confident] パターンを決めて、エージェントごとにブランチを1つ用意します。競合、重複、停滞に気をつけます。プルリクエスト、コミット、セッションログは残しておきます。
[600ms]
[proud] これが、G H 600の学習ガイドにある、マルチエージェントの連携を調整するスキル領域です。
