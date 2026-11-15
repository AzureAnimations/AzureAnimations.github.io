# Narrator Script — GitHub · Troubleshoot Workflow Runs: Logs, Re-runs and Artifacts

**Source animation:** [DiagnoseWorkflowRuns.html](../../../journeys/GitHub/DiagnoseWorkflowRuns.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · A Red Cross on the Pull Request

[calm] ContosoのMayaがプルリクエストを開くと、チェックの1つに赤い×印がついています。チームメイトのRaviが、その結果を待っています。
[600ms]
[curious] ワークフローの実行に含まれるジョブは、1つ1つがチェックです。だからこの×印から、ジョブ、ステップ、そしてログへとたどっていけます。
[600ms]
[confident] やることはシンプルです。最初に失敗したステップを見つけて、そこから読み進めましょう。

## Step 2 · The Actions Tab: Workflows, Runs and History

[calm] Actionsタブを開いて、左のサイドバーでワークフローを選びます。実行が一覧で表示され、1回の実行が1行です。
[600ms]
[curious] 実行はすべて一覧に残るので、ワークフローがいつから失敗し始めたのか、履歴からはっきり分かります。
[600ms]
[reassuring] 見るだけならリポジトリの読み取りアクセスで十分です。コマンドラインでも、同じ実行を確認できます。

## Step 3 · Read a Run: Jobs, Steps, First Failure

[confident] 実行をクリックすると、概要にジョブが並びます。失敗したジョブを開けば、失敗したステップが自動で展開されます。
[600ms]
[serious] まずは最初に赤くなったステップから見ましょう。後ろの失敗は、そこから連鎖して起きていることが多いからです。
[600ms]
[curious] GitHubは、どのジョブにもセットアップジョブと完了ジョブを自動で加えます。ログの検索は、展開したステップの中だけが対象です。どのログ行も、リンクをコピーできます。

## Step 4 · What Triggered This Run?

[calm] 実行のヘッダーを見れば、なぜ始まったのかが分かります。イベント、実行した人、そしてコミットです。
[600ms]
[confident] この3つは、自分のワークフローで使えるイベント名、アクター、コミットの値にそれぞれ対応しています。
[600ms]
[intrigued] 再実行しても、アクターは最初の実行を始めた人のままです。再実行した人は、別の値で分かります。

## Step 5 · Matrix Runs: Names, Axes and Failures

[curious] マトリックスは、値の組み合わせごとにジョブを1つ作ります。各ジョブの名前には、その値が入っています。
[600ms]
[confident] だから赤いジョブは、どの軸の値かがすぐ分かります。成功した緑のジョブと、軸ごとに見比べてみましょう。
[600ms]
[serious] グレーのジョブにも注目です。フェイルファストはデフォルトでオンで、1つ失敗すると残りがキャンセルされます。つまり、グレーは原因ではありません。

## Step 6 · Re-run Only What Failed

[calm] 再実行は、すべてのジョブ、失敗したジョブだけ、あるいはマトリックスの1セルのような単一のジョブから選べます。
[600ms]
[confident] 再実行は同じコミットで動きます。再実行しなかったジョブは、前の結果がそのまま残ります。再実行したジョブに依存するジョブは、もう一度実行されます。
[600ms]
[serious] 再実行は、最初に実行を起動した人の権限で動きます。また、ワークフローが無効のあいだは再実行できません。

## Step 7 · Debug Logging: Read the Extra Output

[curious] ログだけでは足りないこともあります。そんなときは、デバッグログをオンにします。
[600ms]
[excited] ここでスイッチを入れてみましょう。同じステップに、詳しい出力が追加されます。
[600ms]
[reassuring] ワークフローを実行できる人なら、再実行のときに「デバッグログを有効にする」にチェックを入れられます。シークレットや変数で常時有効にすることもでき、両方あるときはシークレットが優先されます。

## Step 8 · Common Causes of a Failed Run

[calm] よくある原因は4つです。自分の実行で見えている状況を、このカードのどれかに当てはめてみましょう。
[600ms]
[curious] トークンに権限が足りない、シークレットが設定されていない、または渡されていない、ラベルに合うランナーがない、トークンの期限が切れている、のどれかです。
[600ms]
[serious] これらはあくまで例です。原因は、必ず自分のログで確かめてください。

## Step 9 · YAML Anchors: What Actually Runs

[calm] アンカーはブロックに名前をつけ、エイリアスはそれをファイルの別の場所で繰り返します。
[600ms]
[confident] GitHubが実行するのは、展開後の結果です。失敗したジョブは、エイリアスをすべて書き出したものとして読みましょう。
[600ms]
[reassuring] 展開した形は、アンカーなしで書いたファイルと同じ動きをします。頭の中で展開してみれば、失敗の理由が見えてきます。

## Step 10 · Find Artifacts and Logs in the UI

[calm] アーティファクトは、実行概要の一番下にあります。ログのアーカイブは、ジョブのログのメニューから取れます。
[600ms]
[confident] どちらも、読み取りアクセスがあればダウンロードできます。
[600ms]
[serious] どちらも保持期間が決まっていて、その期間は変更できます。ただし、過ぎると期限切れになるので、必要なものは早めに取っておきましょう。

## Step 11 · The Same Through the API and gh CLI

[curious] ブラウザでやったことは、すべてGitHubのコマンドラインツールのコマンドと、RESTエンドポイントで実行できます。
[600ms]
[confident] 実行の一覧表示、詳細の確認、アーティファクトのダウンロード、再実行まで、すべてターミナルからできます。
[600ms]
[impressed] 実行もログもアーティファクトも同じなので、一連の作業をまるごとスクリプトにできます。

## Step 12 · Disable vs Delete, and the History

[calm] ワークフローを無効にすると、一時停止になります。ファイルも履歴も、そのまま残ります。
[600ms]
[serious] 実行を削除すると、その実行だけが完全に消えます。削除には書き込みアクセスが必要です。一方、無効にしても、すでに動いている実行はキャンセルされません。
[600ms]
[proud] この一連のスキルが、G H 200でいうワークフローの利用とトラブルシューティングです。
