# Narrator Script — Foundry · Ship a Foundry Project with CI/CD

**Source animation:** [ShipFoundryWithCICD.html](../../../../journeys/AI/Foundry/ShipFoundryWithCICD.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli>
- <https://learn.microsoft.com/azure/foundry/how-to/evaluation-github-action>
- <https://learn.microsoft.com/azure/foundry/how-to/create-resource-template>
- <https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent>

---

## Step 1 · Portal clicks do not scale: why pipelines

[calm] Foundryプロジェクトを手作業でセットアップするのは、1回ならうまくいきます。でも、3つ目をコピーするころには、開発、テスト、本番の環境が、いつの間にかずれてしまっています。
[600ms]
[serious] このずれが、本番で思わぬトラブルを起こす原因になります。
[600ms]
[confident] パイプラインなら、毎回同じ手順を繰り返せます。ここでは、Contoso Outfittersとそのヘルプボットを例に説明します。

## Step 2 · What lives in the repo

[curious] インフラ、エージェントの定義、評価データは、すべてGitに置きます。パイプラインのすぐ隣です。
[600ms]
[confident] こうすると、リポジトリが唯一の正しい情報源になります。
[600ms]
[calm] ここに出てくるフォルダー名は、架空のレイアウトです。自分のリポジトリでは、同じ4つの要素を、別の構成で整理してもかまいません。

## Step 3 · Provision the Foundry project as code

[calm] Bicepファイルに、Foundryリソースとそのプロジェクトを記述します。パイプラインは、Azure CLIかazdでこれをデプロイします。環境ごとに、パラメータファイルを使います。
[600ms]
[confident] すでにポータルでリソースを作ってしまった場合は、Microsoft Learnでは、Bicepファイルにエクスポートすることを提案しています。
[600ms]
[encouraging] そのうえで、ハードコーディングされている値を、パラメータに置き換えます。

## Step 4 · Deploy a model: name, version, type, capacity

[curious] モデルのデプロイも、コードで管理します。エージェントが呼び出す名前の裏側に何が置かれるかは、4つの値で決まります。名前、バージョン、タイプ、容量です。
[600ms]
[calm] 同じモデルを複数回デプロイすることもできます。ただし、デプロイごとに別の名前を付ける必要があります。
[600ms]
[confident] エージェントが指定するのは、デプロイ名だけです。

## Step 5 · Create or update the agent from code

[calm] パイプラインのステップで、SDKを呼び出してエージェントを作成します。
[600ms]
[impressed] 変更は、たった一文の編集でも、古いものを上書きせず、新しいバージョンとして保存されます。
[600ms]
[confident] コードからは、エージェントの名前とバージョンで指定します。バージョンが変わっても、エージェントのエンドポイントのアドレスは1つのままです。

## Step 6 · Dev, test, prod: one pipeline, three projects

[calm] ひとつのソースリビジョンが、開発からテスト、そして本番へと進んでいきます。
[600ms]
[confident] 環境ごとに、専用のFoundryプロジェクトを指し、設定もアクセス許可も別々です。
[600ms]
[serious] 環境名を付けただけでは、何も分離されません。環境ごとに、別々のFoundryプロジェクトに紐づける必要があります。

## Step 7 · Evaluation as a quality gate

[curious] テスト環境へのデプロイが終わると、パイプラインは、決まったテスト用の質問を評価器にかけます。
[600ms]
[serious] 合格率が基準を下回ったら、パイプラインは止まります。ここにあるスコアは架空のものです。
[600ms]
[calm] 評価用のGitHub Actionは、プレビューです。コストを抑えるために、コミットのたびに評価を実行するのは避けましょう。

## Step 8 · Secrets and identity in the pipeline

[calm] ワークフローは、有効期間の短いトークンでサインインします。このトークンは、フェデレーション資格情報を通じて、Microsoft Entraが信頼します。
[600ms]
[proud] クライアントシークレットを保存したり、ローテーションしたり、漏らしたりする心配はありません。
[600ms]
[serious] フェデレーション資格情報のサブジェクトは、ワークフローが実際に送るトークンと、一致している必要があります。IDには、必要なロールだけを、できるだけ小さいスコープで与えましょう。

## Step 9 · Roll back and watch after release

[curious] 新しいバージョンに、トラフィックのごく一部だけを流して、様子を見ます。90対10という割合は、あくまで一例です。
[600ms]
[confident] 問題がなければ割合を増やし、問題があれば、エンドポイントを安定版に戻します。
[600ms]
[reassuring] エンドポイントがどのバージョンを提供するかを切り替えても、コードの再ビルドや、新しいバージョンの作成は起きません。

## Step 10 · Pipeline at a glance

[calm] コミットから、見守りながらのリリースまで。すべてのステップがコードで、すべての昇格にゲートがあり、保存するシークレットもありません。
[600ms]
[reflective] これはひとつのパターンで、唯一のパイプラインではありません。同じ考え方は、GitHub ActionsでもAzure DevOpsでも使えます。
[600ms]
[determined] プロジェクトをパイプラインに載せれば、どのリリースも、同じ手順で繰り返せるようになります。
