# Narrator Script · 日本語 (ja) — Journey 01 · Azure Key Vault

**Source animation:** `static/v2/Security/KeyVault.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま（読み上げず、演出指示です）。ステップ見出しは 1:1 対応のため英語のままにしています。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Every connection needs a secret, key or certificate

[confident] Contoso をご紹介します。オンライン ショップですが、実際には多数のアプリが互いに通信するものです。
[600ms]
[calm] 買い物客は TLS 経由で Store Front に到達し、Store Front は Order Processing を呼び出し、Order Processing はデータベースと増え続けるコンポーネント群に到達します。
[600ms]
[concerned] これらの矢印はどれも資格情報（シークレット、キー、または証明書）を必要としますが、今はそれらを安全かつ一元的に保管する場所がありません。
[800ms]
[curious] では、この機密素材はすべて、本当はどこに置くべきなのでしょうか？

## Step 2 · Static secrets in appsettings.json

[serious] たいていはこう始まり、そしてここでつまずきます。
[600ms]
[concerned] Store Front は、ハードコードされたデータベースのパスワードと決済キーを、ローカルの appsettings.json ファイルから直接読み取ります。同じ値が開発 PC やパイプラインの変数にコピーされています。
[600ms]
[serious] Secure Future Initiative の第一原則は「セキュア バイ デザイン」です。保存時、転送時、実行時にシークレットを保護します。
[600ms]
[determined] ソース管理の中の静的な資格情報は、初日にそれを破ります。リポジトリが 1 つ漏えいすれば本番が侵害されます。

## Step 3 · Centralize in Azure Key Vault

[confident] 解決策は一元化すること、Azure Key Vault にです。
[600ms]
[calm] Key Vault は散らばったシークレットを 1 つのマネージドで監査済みのストアにまとめ、3 種類のオブジェクト（シークレット、暗号鍵、証明書）を保持します。
[600ms]
[impressed] アプリは実行時にそれらを読み取り、コードには資格情報が一切ありません。
[600ms]
[reassuring] 1 つの保管庫に、Contoso のデータベースのパスワード、決済キー、注文暗号化キー、Store Front の証明書がすべて入り、ローテーション、監査、アクセス制御はすべて一元化されます。

## Step 4 · How your material is protected

[intrigued] しかし、その素材は実際どれほど強力に保護されるのでしょうか？
[800ms]
[confident] すべてのキーは検証済みの FIPS 140 レベルで保護されます。Standard はキーをソフトウェア モジュールに保持し、Premium と Managed HSM はハードウェア セキュリティ モジュール内でキーを生成・保持します。
[600ms]
[impressed] HSM の内部では、キーはハードウェア境界の外に出ません。
[600ms]
[calm] FIPS のレベルが高いほど、物理的な保護が強くなるということです。ソフトウェアから、ID ベースのアクセスを備えた改ざん耐性ハードウェアまで。

## Step 5 · Standard vs Premium vs Managed HSM

[curious] では、Contoso はどのコンテナーを選ぶべきでしょうか？
[800ms]
[confident] Key Vault は 2 つのコンテナー レベルと、専用の Managed HSM として提供され、テナント、保護、信頼のルートを誰が制御するかで異なります。
[600ms]
[calm] 日常的なアプリのシークレットや TLS 証明書には Standard を。HSM 支援またはお客様管理のキーが必要な場合は Premium を選びます。
[600ms]
[reassuring] そして、シングルテナントの専用モジュールと信頼のルートの完全な制御（真のキーの主権）が必要なときは Managed HSM を選びます。

## Step 6 · Migrate a key into Key Vault — without exposing it

[intrigued] すでにキーを持っていて、それを一切公開せずに取り込む必要がある場合はどうでしょう？
[800ms]
[confident] それが Bring Your Own Key です。オンプレミスの HSM 内でデータ暗号化キーを生成したとしましょう。Key Vault の KEK、つまり RSA キー ペアが、移動のためにそれをラップします。
[600ms]
[calm] KEK の公開鍵をエクスポートし、あなたの HSM がそれで DEK をラップします。そして移動するのは暗号化された .byok ブロブだけです。
[600ms]
[reassuring] Key Vault は HSM の内部で秘密鍵を使ってそれをアンラップするので、平文のキーが外にさらされることはありません。

## Step 7 · Azure Key Vault — the whole picture

[reflective] 一歩下がると、全体像が 1 つにまとまります。
[600ms]
[proud] Contoso のシークレット、キー、証明書は、今や 1 つの監査済み保管庫に存在します。適切な FIPS レベルで、適切なレベルで保護され、Contoso が制御するキーでラップされ、コードに資格情報なしで実行時に読み取られます。
[600ms]
[confident] これがセキュア バイ デザイン、既定でセキュア、そしてセキュアな運用です。
[600ms]
[optimistic] そしてこれは、この後の道のりの土台です。マネージド ID はパスワードなしでこれらのシークレットを取得し、アクセス制御は誰が読めるかを絞り込み、プライベート ネットワークは保管庫を閉じ込めます。
