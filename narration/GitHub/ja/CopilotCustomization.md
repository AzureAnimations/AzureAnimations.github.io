# Narrator Script — GitHub · Teach Copilot Your Project: Instructions, Prompts and Spaces

**Source animation:** [CopilotCustomization.html](../../../journeys/GitHub/CopilotCustomization.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Same Question, Different Answers

[curious] MayaとRaviが、Copilotに同じ質問をしたのに、答えが違います。使うツールも、スタイルも、バラバラです。
[600ms]
[calm] Contosoがどうやって構築して、テストして、名前を付けているのか、Copilotには何も伝わっていません。標準が、Copilotの読める場所に書かれていないからです。
[600ms]
[reflective] 指示を共有すれば、一貫性は高まります。ただし、どの回答も同じになるとは限りません。

## Step 2 · Repository Instructions

[calm] リポジトリにMarkdownファイルを1つ置くと、Contosoの構築、テスト、命名のやり方を、Copilotに伝えられます。
[600ms]
[confident] 自然な言葉でルールを書くと、そのリポジトリでのすべてのリクエストに、適用されます。
[600ms]
[encouraging] これが、いちばんシンプルな始め方です。

## Step 3 · Path-Specific Instructions

[curious] パス指定のファイルには、適用先のパターンを書きます。だから、そのルールは、パターンに一致するファイルにだけ届きます。
[600ms]
[calm] パターンを複数指定するときは、カンマで区切ります。リポジトリ全体のファイルもある場合は、両方が使われます。
[600ms]
[reflective] これらのファイルを、どのCopilotの機能が読み込むかは、クライアントによって違います。

## Step 4 · Prompt Files

[calm] 繰り返し行うタスクは、プロンプトファイルとして保存しておきましょう。
[600ms]
[confident] 毎回打ち直す代わりに、チャットでスラッシュと名前を入力すれば、実行できます。
[600ms]
[curious] 自動で適用される指示と違って、プロンプトファイルは、いつ実行するかを自分で選べます。

## Step 5 · Copilot Spaces

[calm] Spaceには、1つの作業のためのドキュメント、コード、issue、メモと、それらの使い方の指示を、まとめて入れられます。
[600ms]
[confident] ソースには、ファイル、リポジトリ、プルリクエスト、issue、アップロード、メモが使えます。GitHubのソースは、変更されると更新されます。
[600ms]
[curious] Copilotは、そのコンテキストをもとに、GitHubのCopilot Chatで回答します。

## Step 6 · Share a Space

[calm] Spaceを誰が開けるかは、誰が所有しているかによって決まります。
[600ms]
[confident] 組織のSpaceでは、ロールで管理します。管理者、編集者、閲覧者、アクセスなしのどれかです。個人のSpaceは、非公開にすることも、特定の人と共有することも、リンクを知っている人なら誰でも開けるようにすることもできます。
[600ms]
[reassuring] 閲覧者には、自分がすでにアクセスできるソースしか表示されません。

## Step 7 · Spark: A Prompt Becomes an App

[calm] Sparkは、日常の言葉で書いたアイデアを、プレビューできる小さな動くアプリに変えてくれるツールでした。
[600ms]
[serious] GitHubは、すでに終了しています。2026年8月4日から、新しいアプリの受け付けをやめました。ただ、学習ガイドには、まだ名前が載っています。
[600ms]
[encouraging] いまは、VS CodeのCopilot、Copilot CLI、GitHub Copilot appで、同じようにアプリを作れます。

## Step 8 · MCP: Connect an Outside Tool

[curious] MCPサーバーを使うと、Copilotが、エディターの外にあるツールやデータソースを使えます。たとえば、issueトラッカーです。
[600ms]
[confident] 詳細をチャットにコピーする必要は、なくなります。MCPは、モデルとツールやデータをつなぐための、オープンな標準です。
[600ms]
[serious] 承認するのは、内容を理解しているアクションだけにしましょう。組織では、ポリシーでMCPを許可することも、ブロックすることもできます。

## Step 9 · Agent Sessions

[calm] タスクごとにセッションを開始して、実行している間も、ほかの作業を続けられます。
[600ms]
[confident] 各セッションは独立していて、それぞれ履歴を持っています。だから、切り替えて、戻ってきて、再開できます。
[600ms]
[reassuring] アーカイブすると、セッションは保持されますが、表示されなくなります。削除すると、完全に消えます。

## Step 10 · Sub-Agents

[curious] メインのエージェントは、明確なタスクを、サブエージェントに任せられます。
[600ms]
[confident] サブエージェントは、独自のコンテキストで動いて、短い結果だけを返します。だから、メインのチャットが、膨らみません。依頼するときは、目的、コンテキスト、許可するアクション、期待する結果を伝えましょう。
[600ms]
[reflective] 任せると、そのぶんモデルの使用量が増えます。だから、ちょっとした調べものなら、直接聞いたほうがいいことが多いです。

## Step 11 · Pick the Right Tool

[curious] 必要なことに合うツールを選びましょう。左側で必要なことを選ぶと、どのツールが合うかが分かります。
[600ms]
[confident] いつも適用するルールは、指示です。保存しておくタスクは、プロンプトファイル。共有するソースは、Space。外部のツールは、MCPサーバー。引き継ぎは、エージェントのセッションです。
[600ms]
[encouraging] まずは、条件に合う、いちばん小さなツールから始めましょう。1回限りの要件なら、リクエストに書くだけで十分です。

## Step 12 · Recap: What Goes Where

[calm] リポジトリのファイルで、Copilotに、いつも適用するルールと、保存したタスクを与えられます。
[600ms]
[confident] Space、MCP、セッション、サブエージェントを使えば、ソース、ツール、そしてバックグラウンドの作業を取り込めます。
[600ms]
[proud] ここまでが、G H 300の学習ガイドにある、GitHub Copilotの機能の使用の分野です。Sparkは終了していますが、まだ学習ガイドには、名前が残っています。
