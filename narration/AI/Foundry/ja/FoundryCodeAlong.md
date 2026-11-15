# Narrator Script — Foundry · Build lightweight Foundry apps in Python

**Source animation:** [FoundryCodeAlong.html](../../../../journeys/AI/Foundry/FoundryCodeAlong.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/responses>
- <https://learn.microsoft.com/azure/foundry/openai/audio-completions-quickstart>

---

## Step 1 · A small app, three things to start

[calm] 軽量クライアントといっても、Contoso Outfitters向けの短いPythonスクリプトです。ここにあるデータは、すべて架空のものです。
[600ms]
[confident] 重い処理はFoundry側で動きます。コードはリクエストを送って、返ってきた応答を使うだけです。
[600ms]
[curious] Microsoft Learnでは、Foundry SDKを、プロジェクトAPIの上に載った薄いクライアントと説明しています。このレッスンでは、Azure AI Projectsの2ポイントxパッケージを使います。

## Step 2 · Set up and sign in

[calm] まず az login を一度実行して、パッケージをインストールします。あとは、DefaultAzureCredentialに、自分のIDを探してもらいます。
[600ms]
[confident] これは、いくつもの認証方法をつなげた仕組みです。環境設定、Azure上のマネージドIDや、Azureコマンドラインのサインインなど、サインイン元を順番に試していきます。
[600ms]
[reassuring] ローカルでも本番でも同じように動き、コードにキーを書く必要は一切ありません。

## Step 3 · Chat with a model

[curious] プロジェクトクライアントを作成して、そこからOpenAIクライアントを取得します。
[600ms]
[confident] responsesのcreate呼び出しでプロンプトを送って、返ってきた内容を出力します。
[600ms]
[serious] modelの引数には、自分のモデルのデプロイ名を指定します。Learnのクイックスタートと同じ呼び出しです。

## Step 4 · Analyze text

[curious] Azure Languageクライアントは、お客様のレビューを読み取って、感情、キーフレーズ、個人データを返します。どれもメソッド呼び出しが1回ずつです。
[600ms]
[calm] Microsoft Entra IDでサインインするには、カスタムサブドメイン付きのエンドポイントが必要です。
[600ms]
[concerned] Learnでは、感情分析とキーフレーズ抽出が、廃止が予定されている機能に挙がっています。個人データの検出は、引き続き提供されます。新しいプロジェクトを始める前に、最新のLearnのページを確認してください。

## Step 5 · Speak and transcribe

[calm] Azure Speechクライアントは、テキストを音声ファイルに変換して、その音声をテキストに戻すこともできます。
[600ms]
[curious] どちらの方向も、同じ音声構成を使います。Learnでは、環境変数に入れたキーとエンドポイントから構成を作ります。
[600ms]
[confident] 1回だけ認識する方式では、ひとつの発話を処理します。最長で30秒、または無音になるまでです。

## Step 6 · Ask about an image

[curious] 画像を受け取れるモデルのデプロイなら、画像についての質問にも答えられます。
[600ms]
[confident] 写真と質問は、1つのメッセージにまとめて送ります。
[600ms]
[calm] Learnでは、画像を渡す方法として3つ挙げています。公開URL、Base64のデータURI、Files APIのファイルIDです。ビジョン対応のデプロイを使いましょう。

## Step 7 · Send a spoken prompt

[curious] 音声に対応したモデルは、録音そのものを入力にできます。答えを出す前に、別途文字起こしをする必要はありません。
[600ms]
[calm] Learnのクイックスタートでは、テキストと音声のモダリティを指定したチャット補完を使い、入力音声には、Base64でエンコードしたWAVファイルを使っています。
[600ms]
[serious] 利用できるモデルはリージョンによって違うので、まずモデルのページで確認してください。

## Step 8 · Extract from files

[curious] Content Understandingのクライアントは、1つで3種類の入力を扱えます。ファイルの種類に合ったビルド済みのアナライザーを選んで、構造化された結果を読み取ります。
[600ms]
[confident] 請求書のアナライザーはフィールドを返し、画像のアナライザーは画像の内容を説明します。音声のアナライザーは、文字起こしと要約を返します。
[600ms]
[serious] アナライザーを使うには、先にFoundryリソースで、モデルのデプロイを用意しておく必要があります。必要なモデルは、LearnのREADMEにアナライザーごとにまとめられています。

## Step 9 · Call an agent

[calm] エージェントは、指示とモデルを付けた状態で、すでにプロジェクトの中にあります。
[600ms]
[confident] クライアントに必要なのは、エージェントの名前と、会話、メッセージだけです。そのエージェントに紐づいたOpenAIクライアントが取得できます。
[600ms]
[impressed] 会話がターンをまたいで履歴を保持するので、フォローアップの質問もそのまま通じます。

## Step 10 · Handle errors and clean up

[serious] エラーは、対処できるものをきちんと捕まえましょう。Learnでは、400、401、403、404のときは再試行しないよう勧めています。
[600ms]
[calm] 4 2 9やサーバーエラーなら、バックオフ付きの再試行を検討してください。4 0 3は権限が足りないという意味です。キーではなくEntra IDでサインインして、作成したリソースは削除しておきましょう。
[600ms]
[proud] この6つのクライアントが、A I 901の学習ガイドにある、実践的なスキルです。
