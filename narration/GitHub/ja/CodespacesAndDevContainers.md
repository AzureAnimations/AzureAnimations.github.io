# Narrator Script — GitHub · Codespaces & Dev Containers

**Source animation:** [CodespacesAndDevContainers.html](../../../journeys/GitHub/CodespacesAndDevContainers.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Day One, the Old Way

[calm] PriyaちょうどContoso気象チームに加わりました。
[600ms]
[concerned] コードを書く前に、空のノートパソコンをチームメイトの機械のコピーに変えなければならない。それで一日丸食いしてしまう。
[600ms]
[serious] そして、リスクは現実のものです。手作業で構築したセットアップは、どれも少しずつ他のものからずれていきます。

## Step 2 · What Is a Codespace?

[curious] コードスペースとは、クラウド上でホストされる開発環境のことです。
[600ms]
[confident] テンプレート、ブランチ、プルリクエスト、コミットから一つ開き、ブラウザやVS Code、またはGitHub CLIに接続してください。
[600ms]
[calm] その裏には、ホストをGitHubする仮想マシン上のDockerコンテナです。常に自分のコンピュータが動かすものLinux動作します。

## Step 3 · Open One With a Click

[calm] リポジトリページで「Code」を選択し、次にCodespacesタブを選択し、ブランチにコードスペースを作成します。
[600ms]
[curious] ブランチ、開発コンテナ、マシンタイプを選びたい場合は「オプション付き新字」を選びます。
[600ms]
[reassuring] ダイアログ内のメモで誰が支払っているかがわかります。個人アカウントには月額無料クォータがあり、組織はメンバーのために支払うかどうかを選択できます。

## Step 4 · What Happens When You Press Create

[curious] 作成ボタンを押すと、 GitHub 4つの動きで環境を組み立てます。
[600ms]
[confident] 仮想マシンを起動し、コンテナを構築し、接続し、セットアップを終えます。3回目の移動後に接続されます。
[600ms]
[reassuring] 数分かかることもありますが、リポジトリ管理者がプリビルドをオンにして待ち時間を短縮できます。

## Step 5 · Same Environment for Everyone

[calm] 開発コンテナとは、開発のために設定されたDockerコンテナのことです。
[600ms]
[confident] その記述をリポジトリにコミットすると、すべてのコードスペース、 Priya、 Sam、Anaのコードスペースは同じレシピから構築されます。
[600ms]
[reassuring] そのレシピはdevcontainer dot jsonというファイルです。ファイルがなければ、コードスペースは多くの共通言語やツールを含むデフォルトイメージから始まります。

## Step 6 · Inside devcontainer.json

[curious] 小さなファイルが「チーム全体で何をインストールすればいいか」という疑問に答えています。
[600ms]
[confident] 各プロパティはセットアップの一部を担当します:イメージ、機能、拡張機能、ポート、コマンドです。
[600ms]
[reflective] みんなが必要とする範囲に保ちましょう。テーマやエイリアスのような個人の好みはドットファイルに含めるべきです。変更を適用するには、コミットしてコンテナを再構築してください。

## Step 7 · An Open Spec: One File, Many Tools

[curious] このファイルはオープンスタンダードであるDevelopment Containers specification at containers dot ioに従っています。
[600ms]
[impressed] つまり、同じファイルで自分のマシン上で環境を構築できるということです。
[600ms]
[calm] VS Codeでは、Dev Containers拡張機能がそれから構築されたコンテナ内のフォルダを開きます。 Codespacesクラウドでも同じことをします。

## Step 8 · Stop, Resume, Delete — and the Meter

[calm] コードスペースはアイドル状態に停止し、停止中は保存した変更を保持し、削除されると消えます。
[600ms]
[confident] コンピュートは稼働中のみ請求され、ストレージは稼働中のみ請求されます。デフォルトでは、30分のアイドル後に停止します。
[600ms]
[serious] 停止したコードスペースは30日後に削除され、1セッションは12時間後に停止します。デフォルト設定は変更可能です。

## Step 9 · github.dev: Press the Period Key

[curious] ショートカットがあります。どのリポジトリやプルリクエストでも、ピリオドキーを押してください。
[600ms]
[impressed] VS Code for the Webは、github dot devのブラウザで即座に開き、構築するものは何もありません。
[600ms]
[serious] ファイルの閲覧、編集、コミットはできますが、ターミナルはなく、コードを実行・デバッグする方法もありません。編集はそれまでブラウザに残るので、頻繁にコミットしてください。

## Step 10 · Which Editor Should I Open?

[curious] では、どのエディターを開けばいいのでしょうか?目の前の仕事から始めましょう。
[600ms]
[confident] 簡単な編集はgithub dot devの仕事です。実行が必要ですか、デバッグが必要ですか?コンピュートが必要なので、コードスペースを開くか、自分のマシンを使うのが良いでしょう。
[600ms]
[reassuring] そして、全員に同じセットアップをしたいなら、開発コンテナで説明してください。

## Step 11 · All in One: Open It, Start Coding

[calm] Priyaの初日に戻る。彼女はコードスペースを開くと、すでに環境が待っている。
[600ms]
[confident] コードスペースや開発コンテナについて説明でき、GitHub dot devで十分だと言えるようになります。
[600ms]
[proud] これがこのトピックのG H 900スキルセットです。 GitHub基礎の学習パスが次のステップです。
