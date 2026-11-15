# Narrator Script — GitHub · Copilot in the Command Line

**Source animation:** [CopilotInTheCli.html](../../../journeys/GitHub/CopilotInTheCli.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Why the terminal needs a partner

[calm] Raviは、gitコマンドの正確な書き方を忘れてしまいました。そこで、ターミナルを離れて調べに行って、作業の流れが途切れてしまいます。
[600ms]
[curious] これは、ほとんどの開発者にとって、実際にあるコストです。タブをいくつも開いて、検索して、集中が途切れてしまいます。
[600ms]
[optimistic] 考え方は簡単です。作業している、その場で聞けばいいのです。

## Step 2 · What Copilot CLI is

[calm] GitHub Copilot CLIは、Copilotをターミナルに持ち込みます。
[600ms]
[confident] やりたいことを、ふつうの言葉で伝えるだけです。Copilotが答えて、コードを書いて、GitHub dot comと連携して作業してくれます。
[600ms]
[reflective] 画面に表示されている返答は、イメージです。実際の出力は、毎回変わります。

## Step 3 · Install it

[calm] まず、Copilotのサブスクリプションが必要です。それと、組織でCLIが無効になっていないことも条件です。
[600ms]
[confident] インストールは、WinGet、Homebrew、またはnpmで行います。
[600ms]
[reassuring] macOSとLinux向けには、インストールスクリプトもあります。

## Step 4 · Sign in and start a session

[calm] 信頼できるフォルダで、copilotを実行します。
[600ms]
[curious] サインインは、スラッシュのloginコマンドで行います。デスクトップでは、ブラウザーでのサインインがデフォルトです。デバイスコードの方法では、ワンタイムのコードが表示されるので、それをブラウザーに入力します。
[600ms]
[encouraging] サインインしたら、最初のプロンプトを入力しましょう。

## Step 5 · Ask, explain, suggest

[curious] 目標を、ふつうの言葉で書きます。Copilotが、コマンドを提案して、各部分の意味も説明してくれます。
[600ms]
[confident] だから、承認する前に、内容を理解できます。
[600ms]
[serious] 表示される返答はサンプルで、言い回しは毎回変わります。だから、必ず、実際のコマンドを最初に読んでください。

## Step 6 · Interactive mode

[calm] copilotと入力すると、会話が始まります。プロンプトは、前のものを踏まえて続くので、「その場合は」のような言い方でも、通じます。
[600ms]
[confident] Copilot CLIは、コンテキストを管理してくれて、いっぱいになると、履歴を圧縮します。スラッシュのcontextコマンドで、使用状況を確認できます。
[600ms]
[intrigued] ShiftキーとTabキーを押すと、プランモードに切り替わります。

## Step 7 · Slash commands and options

[calm] スラッシュコマンドで、セッションを管理します。login、model、contextなどです。
[600ms]
[confident] プロンプトの中で、アットマークを使うとファイルを追加できて、感嘆符を使うと、シェルコマンドを実行できます。
[600ms]
[encouraging] 1回だけ答えが欲しいときは、copilotに、ダッシュpオプションとプロンプトを付けて実行します。全部のリストはもっと長いので、まずは、この数個から覚えましょう。

## Step 8 · Generate a script

[curious] 欲しいスクリプトを、言葉で説明します。Copilotが、ファイルを書いてくれます。
[600ms]
[confident] 何かが実行される前に、差分として、内容を確認できます。
[600ms]
[serious] 生成されたコードは、必ず先に読んでください。実行するのは、承認してからです。

## Step 9 · Manage files

[calm] Copilotは、新しいファイルの作成、ファイル名の変更、そして、行の直接編集もできます。
[600ms]
[confident] ファイルを変更したり、実行したりするツールは、先に、あなたの承認を求めることができます。
[600ms]
[reassuring] いまのフォルダの外にあるファイルは、追加の承認が必要です。スラッシュのadd dirコマンドで、信頼するフォルダを追加できます。

## Step 10 · Stay in control

[calm] Copilotは、ツールを使う前に、確認を求めることができます。コマンドを読んでから、選びましょう。
[600ms]
[confident] 1回だけ許可する、セッションの間は許可する、あるいは、拒否して、代わりにやってほしいことをCopilotに伝える、の3つです。
[600ms]
[concerned] セッションの間は許可する、を選ぶときは、注意してください。削除コマンドを承認すると、Copilotは、そのフォルダとその下にあるすべてのファイルを、もう確認なしで削除できるようになります。

## Step 11 · Organization policy

[calm] 管理者は、組織の設定の、Copilotのポリシーで、Copilot CLIを有効にしたり、無効にしたりできます。
[600ms]
[serious] 無効になっていると、その組織の人は、使えません。
[600ms]
[reflective] エンタープライズでポリシーが設定されている場合は、そちらが優先されます。だから、組織では、それを上書きできません。

## Step 12 · Recap: one Copilot, three places

[calm] Copilotは1つで、エディターでも、ターミナルでも、GitHub dot comでも使えます。
[600ms]
[confident] コードの作成や編集には、エディターを使います。コマンド、スクリプト、ファイルには、CLIを使います。リポジトリ、issue、プルリクエストには、GitHub dot comを使います。
[600ms]
[proud] 作業に合った場所を選びましょう。何が使えるかは、プラン、クライアント、そして組織のポリシーによって変わります。
