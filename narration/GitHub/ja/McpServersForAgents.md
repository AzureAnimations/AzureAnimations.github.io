# Narrator Script — GitHub · MCP Servers for Agents: GitHub Remote, Registries and Allow Lists

**Source animation:** [McpServersForAgents.html](../../../journeys/GitHub/McpServersForAgents.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>
- <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp>

---

## Step 1 · The Agent Cannot Reach Your Tools

[calm] Contosoのコーディングエージェントが知っているのは、チャットの内容と、開いているファイルだけです。
[600ms]
[concerned] ビルドログやイシュー、ドキュメントは、エージェントが届かない別のツールにあります。標準の接続方法がないと、ツールごとに専用のつなぎ込みが必要になるか、誰かがコンテキストを手で貼り付けることになります。
[600ms]
[curious] 必要なのは、エージェントとツールをつなぐ、1つの標準的な方法です。

## Step 2 · What MCP Is: Client, Server, Tools

[curious] その標準が、Model Context Protocolです。AIアプリとツールをつなぐためのオープンスタンダードです。
[600ms]
[confident] ホストはAIアプリのことで、たとえばエージェント付きのIDEです。接続するMCPサーバーごとに、クライアントを1つ作ります。
[600ms]
[calm] 各サーバーは、提供するツールを一覧にするプログラムです。ここに出てくるツール名は、あくまで例です。

## Step 3 · Add an MCP Server to an Agent

[calm] サーバーを追加するには、エディターにエントリを1つ書くだけです。サーバーの名前とURLを指定します。
[600ms]
[confident] Visual Studio Codeでは、このエントリをMCP設定ファイルに書きます。list serversコマンドを使うと、設定済みのサーバーを確認できます。ほかのエディターでも、同じようなエントリを使います。
[600ms]
[reassuring] サーバーを起動して、信頼するかどうかを確認すると、エージェントがそのツールを使えるようになります。

## Step 4 · The GitHub Remote MCP Server

[curious] GitHubはMCPサーバーをホストしているので、インストールは不要です。ローカルサーバーのほうは、自分のマシンで動かします。
[600ms]
[confident] そのURLに接続して、サインインします。デフォルトはOAuthで、パーソナルアクセストークンも使えます。
[600ms]
[encouraging] ツールグループをすべて使うのではなく、エージェントに必要なツールセットだけを選びましょう。

## Step 5 · Read-Only Versus Write

[calm] ツールには、読み取るものと書き込むものがあります。読み取りは、ファイルやイシュー、プルリクエストを調べます。書き込みは、それらを作ったり変更したりします。
[600ms]
[curious] スイッチを切り替えてみましょう。読み取り専用モードでは、変更を加えるツールは、そもそも提供されません。
[600ms]
[confident] オンにするには、URLに読み取り専用のパスを付けるか、ヘッダーを使います。エージェントが呼び出せるのは、サーバーが提供するツールだけです。

## Step 6 · Authentication and Token Scope

[calm] エージェントは、あなたのサインイン、またはトークンで動きます。
[600ms]
[serious] 持っているスコープが、間違ったツール呼び出しやだまされた呼び出しでできることの上限になります。だから、タスクに必要な分だけ付与しましょう。
[600ms]
[reassuring] クラウドエージェントのデフォルトのGitHubのサーバーは、現在のリポジトリだけにスコープを絞った、読み取り専用のトークンを使います。画面のスコープ名は、説明用の例です。

## Step 7 · A Registry of Approved Servers

[curious] ここからは組織の視点です。レジストリは、組織が承認したMCPサーバーのカタログです。
[600ms]
[confident] 開発者は、インターネットを検索するのではなく、ここでサーバーを探します。MCPレジストリ仕様に沿った、HTTPSエンドポイントの集まりです。
[600ms]
[reflective] 自分でホストすることも、Azure API Centerを使うこともできます。レジストリはパブリックプレビューで、ここに出てくるサーバー名は架空のものです。

## Step 8 · Configure the Registry

[calm] 組織のオーナーが、MCPをオンにして、GitHubにレジストリのアドレスを指定し、制限の種類を選びます。
[600ms]
[confident] すべてのサーバーを許可するか、レジストリのサーバーだけを許可するかを選べます。組織では、設定はCopilotのポリシーの中にあります。エンタープライズのオーナーは、AI controlsで見つけられます。
[600ms]
[serious] レジストリのみの設定は、サーバーの名前かIDで照合するだけなので、完全なブロックではありません。

## Step 9 · Allow Lists: Only Approved Servers

[calm] 許可リストには、実行を許可するサーバーを、名前、URL、または起動コマンドで指定します。
[600ms]
[serious] 一致しないものはすべてブロックされます。また、一致する拒否エントリがあれば、必ずそちらが優先されます。
[600ms]
[confident] リストは、エンタープライズの管理設定ファイルに置きます。対象はユーザー設定とリポジトリ設定で、リポジトリのカスタムエージェントプロファイルの中のサーバーは対象外です。

## Step 10 · See a Blocked Server

[concerned] Mayaがリストにないサーバーを追加したため、起動しません。
[600ms]
[confident] 直すのはポリシー側です。オーナーがそのサーバーをレジストリか許可リストに追加し、そのあと彼女がリロードします。
[600ms]
[encouraging] トラブルシューティングでは、まず「MCP servers in Copilot」が有効になっているか確認します。次にレジストリか許可リスト、最後にlist serversコマンドを実行します。

## Step 11 · Recap: A Safe-by-Default MCP Checklist

[calm] サーバーは、エントリと信頼チェックを使って、意図して追加しましょう。
[600ms]
[confident] ツールセット、読み取り専用モード、スコープを絞ったトークンで制限します。そのうえで、レジストリと許可リストで管理します。
[600ms]
[proud] これで、MCPサーバーを設定するG H 600のスキルはひと通りカバーできました。覚えておきたいのは、レジストリはパブリックプレビューで、一般提供されている制御は許可リストだということです。
