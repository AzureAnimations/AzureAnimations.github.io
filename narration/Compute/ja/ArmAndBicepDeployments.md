# Narrator Script — Compute · ARM templates and Bicep: read, change, deploy, export

**Source animation:** [ArmAndBicepDeployments.html](../../../journeys/Compute/ArmAndBicepDeployments.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/syntax>
- <https://learn.microsoft.com/azure/azure-resource-manager/templates/deployment-modes>
- <https://learn.microsoft.com/azure/azure-resource-manager/bicep/deploy-what-if>

---

## Step 1 · Built by hand, twice

[calm] Contosoの Priyaは、Dev用のストレージアカウントをポータルで作り、同じものをProd用にも、もう一度ポータルで作りました。
[600ms]
[concerned] 手作業で作ったせいで、2つは、気づかないうちにずれていきました。設定がひとつ違い、タグがひとつ違い、でも誰も気づきません。
[600ms]
[confident] テンプレートがひとつあれば、あれこれ推測する必要はなくなります。リソースを一度だけ記述して、毎回同じ方法でデプロイします。

## Step 2 · Anatomy of an ARM template

[calm] ARMテンプレートはJSONファイルで、必須なのは3つだけです。スキーマ、コンテンツのバージョン、そしてリソースです。
[600ms]
[confident] 実際のファイルでは、パラメータ、変数、関数、出力を加えるのが普通です。そうすれば、同じファイルをDevにもProdにも使えます。
[600ms]
[reassuring] 画面のJSONは、収まるように短くしてありますが、構造は、実際のテンプレートとまったく同じです。

## Step 3 · The same thing in Bicep

[curious] 同じストレージアカウントを、Bicepで書くとこうなります。読み上げカーソルを、ブロックごとに追いかけてください。
[600ms]
[impressed] 短くなって、JSONのように、括弧やカンマを数える必要もありません。
[600ms]
[confident] Bicepは宣言型なので、ブロックの順番を変えても、デプロイの動きは変わりません。Learnでは、新しく作るならBicepを勧めています。機能は同じで、構文が書きやすいからです。

## Step 4 · Modify an existing ARM template

[calm] たいていは、すでにあるファイルを編集します。パラメータを追加して、それをSKUに使い、タグを追加します。
[600ms]
[confident] そして、同じファイルをもう一度デプロイします。変更を記録するために、コンテンツのバージョンを上げることもできます。
[600ms]
[serious] ただし、注意してください。再デプロイでは、ファイル内のすべてのプロパティが、もう一度適用されます。書かなかったプロパティは、デフォルトに戻ってしまいます。

## Step 5 · Modify an existing Bicep file

[calm] 毎週のように使う、Bicepの機能を3つ紹介します。
[600ms]
[confident] モジュールは、1つのファイルを小さなファイルに分け、別のファイルからデプロイします。ループはリソースを繰り返し作りますが、コピーごとに、一意の名前が必要です。
[600ms]
[curious] もうひとつが、existingキーワードです。すでにデプロイされているリソースを指すので、新しく作らずに、参照だけします。

## Step 6 · Deploy it: choose the scope

[calm] デプロイ先は、コマンドで決まります。JSONテンプレートでもBicepファイルでも、同じコマンドでデプロイできます。
[600ms]
[confident] ファイルは、デフォルトでは、リソースグループにデプロイされます。ほかの場所に出すのは、ターゲットスコープを指定したときだけです。
[600ms]
[reflective] サブスクリプション、管理グループ、テナントへのデプロイでは、コマンドにロケーションも指定します。デプロイの記録そのものを、どこかに保存する必要があるからです。

## Step 7 · Incremental, Complete and what-if

[calm] デフォルトは、インクリメンタルモードです。テンプレートに書かれていないリソースには、手を付けません。
[600ms]
[serious] コンプリートモードは、テンプレートに載っていないものを削除してしまうので、おすすめできません。段階的に廃止されています。削除が必要なときは、デプロイスタックを使いましょう。
[600ms]
[determined] スイッチを切り替えて、違いを確かめてみましょう。そして、デプロイの前には、必ず先にwhat-ifを実行して、変更内容をプレビューします。

## Step 8 · Export a deployment as a template

[curious] リソースはあるのに、誰もファイルを保管していなかったら、どうすればいいでしょうか。
[600ms]
[confident] テンプレートをエクスポートします。今のリソースグループのスナップショットとして出すか、過去のデプロイで使った、そのままのテンプレートを出します。
[600ms]
[reassuring] ポータルでは、リソースグループで「テンプレートのエクスポート」を選びます。または、「デプロイ」を開いて、ひとつ選び、「テンプレート」を選びます。

## Step 9 · Convert: decompile and build

[calm] 2つの形式の変換には、Bicepのツールを使います。
[600ms]
[confident] decompileは、ARMテンプレートをBicepに変換します。buildは、BicepをARMテンプレートに変換します。この2つは、機能として同等です。
[600ms]
[hesitant] decompileは、ベストエフォートです。JSONからBicepへの変換が、確実に対応するとは限らないからです。警告やエラーが出たら、修正してください。

## Step 10 · Troubleshoot a failed deployment

[serious] デプロイのエラーには、3つの種類があり、それぞれ表示される場所が違います。
[600ms]
[confident] 検証エラーとプリフライトのエラーは、アクティビティログに出ますが、デプロイの履歴には出ません。
[600ms]
[curious] 構文エラーのあるBicepファイルは、そもそもコンパイルされないので、アクティビティログにも出ません。まず、どの種類のエラーなのかを見分けましょう。

## Step 11 · ARM, Bicep or template spec: pick one

[calm] やりたいことに合わせて選びます。ARMテンプレートとBicepで、できることは同じです。Learnでは、構文が書きやすいBicepを勧めています。
[600ms]
[confident] テンプレートスペックは、テンプレートをAzureに保存します。Azure RBACで共有できて、テンプレートへの書き込み権限がなくても、デプロイできるようになります。
[600ms]
[proud] 最後に、A Z 104のスキルで確認しましょう。ARMテンプレートまたはBicepファイルを使った、リソースのデプロイの自動化です。
