# Narrator Script — GitHub · Contoso Delivery · Set Up Your Repo · JA

**Source animation:** `journeys/GitHub/TryItYourself.html`

`## Step N` の見出しは意図的に英語のままです（音声生成と字幕の索引）。

---

## Step 1 · Start With an Empty Repository

[warm] ここまではすべて Contoso のリポジトリでした。次はあなたのものにしましょう。
[500ms]
[calm] 必要なのは無料アカウントと、空のリポジトリが一つ。github ドット com スラッシュ new を開き、名前を「weather map app」にします。「Add a README file」のチェックは外したままに。スクリプトは空の場所を必要とします。
[500ms]
[reassuring] フルネームを控えておいてください。あなたのユーザー名、スラッシュ、weather map app。インポーターがそのとおりに尋ねてきます。

## Step 2 · Who Owns the Repository?

[warm] Create を押す前に、いちばん上の項目を見てください。Owner、所有者です。
[500ms]
[calm] 自分のユーザー名は必ずあります。その下には、あなたが所属する組織が並びます。組織は共有アカウントで、誰もそこにログインはしません。人は自分自身としてサインインして参加し、そのあとロールとチームを与えられ、十人分のアクセスを一度に付与できるようになります。
[500ms]
[bright] 組織は無料で、ここではどちらを選んでも構いません。一人で進めるなら個人アカウントで十分です。ただし後で効いてくる違いが一つ。組織では新しいプロジェクトがすべてのイシューを取り込むか尋ねてくれますが、個人プロジェクトにはそのボタンがありません。

## Step 3 · Install the GitHub CLI

[confident] スクリプトは何もクリックしません。`gh`、GitHub 公式のコマンドラインツールを通して GitHub と話します。
[500ms]
[calm] Windows なら winget install GitHub ドット cli。Mac なら brew install gh。Ubuntu なら apt install gh。あるいは cli ドット github ドット com からインストーラーを取得します。
[500ms]
[reassuring] そして確認します。`gh --version` と入力し、バージョン番号が返ってくれば準備完了です。

## Step 4 · Sign the CLI Into Your Account

[warm] 次は、ツールにあなたの代理を任せます。`gh auth login` と入力してください。
[500ms]
[calm] 質問は四つ。GitHub ドット com、HTTPS、Git も認証する、そして大事なもの。「Login with a web browser」を選びます。
[500ms]
[thoughtful] ここが巧妙なところです。ターミナルに使い捨てのコードが表示され、ブラウザーが開き、*ブラウザーのほうが*そのコードの入力を求めます。二つのウィンドウ、一つのコード、パスワードはどこにもありません。

## Step 5 · Your Repository Is Ready

[warm] 準備はこれで全部です。空のリポジトリ、インストール済みの CLI、そしてディスクにパスワードを残さないサインイン済みのセッション。
[500ms]
[bright] ここから先、この旅はデモンストレーションではなくなります。各解説はあなた自身のリポジトリで同じことを行い、画面と見比べるよう促します。
[500ms]
[reassuring] Plan the Work から始めてください。このリポジトリを十二個の作業項目で満たすスクリプトを渡してくれます。
