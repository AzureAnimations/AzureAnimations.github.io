# Narrator Script · 日本語 (ja) — Journey 02 · Azure App Configuration

**Source animation:** `static/v2/Security/AppConfiguration.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま（読み上げず、演出指示です）。ステップ見出しは 1:1 対応のため英語のままにしています。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Every service must find the others

[confident] Contoso のサービスはどれも、互いを見つける必要があります。
[600ms]
[calm] Store Front は Order API の URL を知る必要があり、Order はバックエンド、データベース、決済に到達する必要があります。
[600ms]
[concerned] それをバージョンとリビジョンごとに掛け合わせると、各サービスは結局、他のサービスのエンドポイントを自身の appsettings.json にハードコードすることになります。
[800ms]
[curious] 新しいリビジョンが出るたびに、それを参照するすべてを編集して再デプロイする必要があります。では、これらの設定は本当はどこに置くべきなのでしょうか？

## Step 2 · One store for every setting: App Configuration

[confident] すべての設定を 1 つのストアに、Azure App Configuration にです。
[600ms]
[calm] これは、アプリのすべての設定と機能フラグを保持するマネージド ストアです。コードの外に置かれ、すべてのサービスとリビジョンで共有されます。
[600ms]
[impressed] Twelve-Factor アプリは構成をコードの外に保ちます。そしてこれがまさにその外部ストアです。
[600ms]
[reassuring] 値を一度設定すれば、すべてのサービスとバージョンが 1 か所からそれを読み取ります。

## Step 3 · Scattered settings become organized key-values

[confident] その中で、散らばった設定は整理されたキー値になります。
[600ms]
[calm] すべてのエンドポイントとプロパティがキーと値になり、階層的な名前がコロン区切りでグループ化されます。
[600ms]
[impressed] Contoso コロン Order-API コロン Backend-URL のような名前は、まるでパスのように読めます。
[600ms]
[reassuring] そしてプレフィックスを使えばグループ全体を一度にクエリできます。1 つのクリーンで検索可能な名前空間です。

## Step 4 · One key, many labels — versions & environments

[intrigued] でも、同じ設定の異なる環境やバージョンはどうでしょう？
[800ms]
[confident] そのためにラベルがあります。同じキーにラベルを付けてバリアントを作成します。
[600ms]
[calm] Contoso は Backend URL を 1 つだけ保持し、環境とバージョンごとにラベルを付けます。dev、prod、バージョン 2、staging です。
[600ms]
[reassuring] ラベルは構成をバージョン管理する組み込みの方法で、各アプリは対象とするラベルを読み込むだけです。

## Step 5 · Flags and secret references, by content type

[curious] これらの値は、常に単純な文字列だけなのでしょうか？
[800ms]
[confident] いいえ。App Configuration は 2 つの特別な値の型をマークします。
[600ms]
[calm] リアルタイムで切り替えられる機能フラグと、コピーせずにシークレットを指し示す Key Vault 参照です。
[600ms]
[reassuring] どちらも依然としてキー値です。コンテンツ タイプが、フラグを評価するか、Key Vault からシークレットを解決するかをクライアントに伝えるだけです。

## Step 6 · Consume live: managed identity + dynamic refresh

[confident] では、安全に、そして再デプロイせずに、これをライブで利用しましょう。
[600ms]
[calm] アプリはマネージド ID で App Configuration を読み取ります。接続文字列は一切ありません。
[600ms]
[impressed] 値やフラグを変更すると、動的更新がそれを実行中のアプリに届けます。再起動も再デプロイもありません。
[600ms]
[reassuring] センチネル キーがいつ再読み込みするかを知らせるので、各インスタンスはその場で安全に更新されます。

## Step 7 · All in one: central, versioned, live configuration

[reflective] すべてが 1 つに、運用モデルが明確になります。
[600ms]
[proud] Contoso のすべてのサービスは、1 つの App Configuration ストア（階層的なキー、バージョン ラベル、機能フラグ、Key Vault 参照）を、マネージド ID を通じて読み取り、ライブで更新されます。
[600ms]
[confident] 構成は今や外部化され、共有され、バージョン管理されています。
[600ms]
[optimistic] そして次のステップはアクセスをさらに引き締めます。マネージド ID がオンデマンドでシークレットを取得し、ローカルの資格情報は消えます。
