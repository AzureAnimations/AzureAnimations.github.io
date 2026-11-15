# Narrator Script — Compute · Functions: Build an API and Deploy It

**Source animation:** [FunctionsApiAndDeploy.html](../../../journeys/Compute/FunctionsApiAndDeploy.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-functions/functions-triggers-bindings>
- <https://learn.microsoft.com/azure/azure-functions/functions-deployment-technologies>

---

## Step 1 · One function, one HTTP endpoint

[calm] 関数とは、コードに、トリガーをちょうど1つ組み合わせたものです。トリガーは、関数が始まるきっかけです。
[600ms]
[confident] HTTPトリガーを付けると、Webリクエストでコードが動き出します。これで、関数がAPIのエンドポイントになります。
[600ms]
[curious] Contosoの注文アプリでは、デフォルトのアドレスは、APIパスのあとに関数名が続く形になります。

## Step 2 · HTTP trigger: route, methods and auth

[calm] トリガーでは、3つのことを決めます。ルートは、APIパスの後ろのURLで、IDのようなパラメータを入れられます。
[600ms]
[confident] メソッドは、どのHTTPメソッドに応答するかを指定します。省略すると、すべてに応答します。認可レベルは、anonymous、function、adminのどれかです。
[600ms]
[serious] ローカルで実行しているときは、認可は適用されません。公開すると、認可レベルが適用されます。

## Step 3 · Return a status code and JSON

[calm] 次に、コードで応答を組み立てます。クライアントが判断に使えるステータスコードと、読み取れるJSONの本文です。
[600ms]
[confident] 成功なら200を返し、注文が見つからなければ404を返します。mimetypeにはapplication JSONを設定して、クライアントが本文を正しく解析できるようにします。
[600ms]
[reflective] 関数が何も返さない場合、HTTPのデフォルトは、204のNo Contentで、本文は空になります。

## Step 4 · Bindings: Cosmos DB in, Service Bus out

[curious] バインドを使うと、クライアントのコードを書かずに、関数をほかのサービスにつなげられます。各ステップをクリックして、データの流れを追ってみましょう。
[600ms]
[confident] この例では、入力バインドが、コードの実行前にCosmos DBのデータを渡します。そして、出力バインドが、結果をService Busに書き込みます。
[600ms]
[reassuring] バインドは必須ではありません。代わりに、コードの中でAzure SDKのクライアントを使うこともできます。接続設定には、接続方法を記したアプリ設定の名前を指定します。

## Step 5 · Run it locally with Core Tools

[calm] Core Toolsを使うと、Functionsランタイムを、自分のマシンで動かせます。
[600ms]
[confident] 起動すると、関数はデフォルトでポート7171で応答します。何かをデプロイする前に、APIを呼び出して、ミスを直しておきましょう。
[600ms]
[reflective] ローカル設定ファイルは、ローカルで実行するときだけに使います。ローカルでは、デフォルトで認可は適用されません。

## Step 6 · Create the function app

[calm] 関数アプリでは、3つのことを決めます。どこでホストするか。どのランタイムでコードを動かすか。そして、どのストレージアカウントに状態を保存するかです。
[600ms]
[confident] 新しいサーバーレスアプリには、Flex Consumptionがおすすめです。ランタイムスタックは、コードの言語とバージョンに合わせて選びます。
[600ms]
[serious] ストレージアカウントは、キーと状態を保持するので必須です。選ぶ前に、Learnのホスティングのページで、現在のプランの一覧を確認してください。

## Step 7 · Deploy: zip, publish and CI

[calm] コードは、たいていzipパッケージで届けます。zipデプロイは、関数アプリのデフォルトで、推奨の方法でもあります。
[600ms]
[confident] デプロイの方法は、段階に応じて選びます。開発中は、Core Tools、Visual Studio Code、Azure CLIを使います。
[600ms]
[determined] 本番に近づいたら、CI/CDに移ります。デプロイセンター、GitHub Actions、Azure Pipelinesが使えます。Flex Consumptionでは、パッケージデプロイが、唯一の方法です。

## Step 8 · App settings and managed identity

[calm] 設定は、アプリに、どこに何があるかを教えるものです。設定にはアカウント名を書きますが、キーは入れません。
[600ms]
[confident] マネージドIDは、アプリが誰なのかを証明します。そのため、設定にシークレットを置く必要がありません。まずはこれを使い、使えないサービスにはKey Vaultを使います。共有シークレットは、最後の手段です。
[600ms]
[serious] バインドに必要なロールだけを付与しましょう。Cosmos DBのデータアクセスには、専用のロールの仕組みがあります。

## Step 9 · Slots and safe release

[curious] スロットは、アプリの2つ目のコピーで、専用のアドレスを持ちます。
[600ms]
[confident] スロットにデプロイしてテストし、問題なければ本番にスワップします。うまくいかなければ、スワップして戻します。スロット設定は、スワップしても、そのスロットに残ります。
[600ms]
[serious] スワップの前に、ステージングスロットはウォームアップされます。ただし、ダウンタイムがゼロになる保証はありません。Flex Consumptionは、現在スロットに対応しておらず、代わりにローリングアップデートを使います。

## Step 10 · Check it: logs and a test call

[calm] 稼働中のAPIは、curlと関数キーで呼び出せます。キーは、codeクエリ値か、関数キーのヘッダーで送ります。
[600ms]
[impressed] そのあと、同じ呼び出しを、Application Insightsで探してみましょう。ログ、パフォーマンス、エラーを確認できます。ログのストリーミングには、Live Metricsがおすすめです。
[600ms]
[proud] 正しい応答が返り、トレースも見える。それなら、リリースは成功です。これが、この試験の目標です。サーバーレスAPIを作って、関数アプリを構成し、デプロイします。
