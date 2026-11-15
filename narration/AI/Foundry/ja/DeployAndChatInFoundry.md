# Narrator Script — Foundry · Deploy a model and chat with it in Foundry

**Source animation:** [DeployAndChatInFoundry.html](../../../../journeys/AI/Foundry/DeployAndChatInFoundry.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/concepts/concept-playgrounds>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/deploy-foundry-models>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>

---

## Step 1 · Contoso needs a model

[calm] Miaは、Contoso Outdoorsのサポート用に、チャットヘルパーを作っています。Foundryのモデルカタログには、たくさんのモデルがあります。
[600ms]
[curious] 推論モデル、マルチモーダルモデル、小規模言語モデルなど、種類もさまざまです。今回の用途には、どれが合うのでしょうか。
[600ms]
[encouraging] このあと、選び方からデプロイ、テストまでを順に見ていきます。

## Step 2 · Browse the catalog

[curious] モデルの得意分野を、シナリオに合わせましょう。ニーズを選ぶと、モデルの種類と、カタログのどこを探せばいいかがわかります。
[600ms]
[calm] カタログでは、コレクション、推論やツール呼び出しなどの対応機能、推論タスクで絞り込めます。
[600ms]
[reassuring] どのモデルを候補にするにしても、選ぶ前にモデルカードを読んでください。

## Step 3 · Compare on the leaderboard

[calm] モデルリーダーボードでは、品質、コスト、スループットでモデルをランク付けしています。この機能はプレビューです。
[600ms]
[curious] すべての項目で1位になるモデルはないので、何を優先するかは自分で決めます。品質インデックスは高いほど良く、コストは、出力トークン1つに対して入力トークンが3つあると仮定した推定値です。
[600ms]
[reassuring] カタログで「リーダーボードを見る」か「モデル比較」を選びます。ここにある数字は架空のものです。

## Step 4 · Deploy it: name and type

[confident] 「デプロイ」を選んで、デプロイに名前を付けます。次にデプロイタイプを選びます。データを処理する場所と、トークン単位の支払いか、容量の予約かを決めます。
[600ms]
[calm] データレジデンシーや予約スループット、バッチが必要な場合を除いて、まずはGlobal Standardから始めましょう。すべてのモデルがすべてのタイプに対応しているわけではありません。
[600ms]
[serious] 付けた名前は覚えておいてください。コードでは、modelパラメータにこのデプロイ名を渡すからです。

## Step 5 · You land in the playground

[excited] デプロイが成功すると、Foundryがモデルのプレイグラウンドを開きます。
[600ms]
[confident] チャット、モデルの設定、モデルの比較、コードの確認まで、コードを書かずにできます。
[600ms]
[curious] プレイグラウンドは、モデルに合わせて切り替わります。画像モデルなら画像のプレイグラウンド、動画モデルなら動画のプレイグラウンドが開きます。

## Step 6 · Set a system prompt and chat

[calm] システムプロンプトは、すべての返信に対する役割とルールを決めます。ユーザープロンプトは、お客様からの質問です。
[600ms]
[curious] ひとつ送って、答えを読んでみましょう。
[600ms]
[encouraging] システムプロンプトは毎ターン適用されますが、ユーザープロンプトはそのメッセージだけに効きます。変更は一度にひとつだけにしましょう。何が答えを変えたのか、はっきりわかります。

## Step 7 · Tune the response

[curious] TemperatureとTop Pは、言葉選びのランダムさを変えます。Temperatureが低いと答えが安定し、高いとバラエティが増えます。
[600ms]
[calm] 最大出力トークンは、返信の長さの上限を決めます。調整するのは一度にひとつだけ。TemperatureとTop Pも、どちらか一方だけにしてください。
[600ms]
[serious] 推論モデルの多くは、TemperatureとTop Pに対応していません。まずモデルカードで確認しましょう。

## Step 8 · Watch tokens in and out

[calm] テキストはトークンに分割されます。1トークンは、一般的な英語でおよそ4文字です。
[600ms]
[confident] 入力トークンは、システムプロンプトと履歴、ユーザーメッセージです。出力トークンは返信です。どちらもコンテキストウィンドウを使い、トークン課金のデプロイでは、どちらもコストに影響します。
[600ms]
[concerned] 推論トークンも、出力として課金されます。ここにある数字は、あくまで例です。

## Step 9 · Compare two models

[curious] モデル比較では、同じプロンプト、システムメッセージ、設定を、各モデルへ同時に送ります。
[600ms]
[impressed] これで、品質、速度、トークン数を並べて評価できます。比較できるのは、最大3つのモデルです。
[600ms]
[calm] プレイグラウンドの右上にある「モデル比較」を選びます。同期は、モデルのセットアップペインからオフにできます。ここにある数字は架空のものです。

## Step 10 · View code

[calm] コードタブには、同じ呼び出しがコードで表示されます。modelパラメータにはデプロイ名が入るので、アプリはまさにこのデプロイに届きます。
[600ms]
[curious] 言語のタブを選んで、「Open in VS Code for the Web」を使うと、サンプルとエンドポイントをエディターに持ち込めます。
[600ms]
[serious] キーは、ソース管理に入れないでください。

## Step 11 · Clean up: delete the deployment

[calm] デプロイが不要になったら、開いて削除します。
[600ms]
[reassuring] デプロイごとにクォータの一部が使われるので、使っていないものを削除すると整理しやすくなります。ポータルでは、「ビルド」の「モデル」から探せます。
[600ms]
[proud] ここまでの内容を振り返りましょう。モデルを探して比較し、デプロイしてチャットし、コードも確認できるようになりました。
