# Narrator Script — Security · Security, Compliance and Identity Concepts: the shared vocabulary

**Source animation:** [SecurityConcepts.html](../../../journeys/Security/SecurityConcepts.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/describe-security-concepts-methodologies/>
- <https://learn.microsoft.com/training/modules/describe-identity-principles-concepts/>

---

## Step 1 · Security, compliance and identity

[calm] Contoso は、まもなく顧客ポータルを公開します。公開前に、3つの違う問いに答える必要があります。
[600ms]
[curious] セキュリティは、データとシステムを脅威から守ることです。コンプライアンスは、適用される法律や基準を満たすことです。アイデンティティは、誰が、あるいは何が関わっているかを表します。
[600ms]
[confident] 似て聞こえますが、同じものではありません。特に、コンプライアンスとセキュリティは別物です。

## Step 2 · Shared responsibility

[calm] オンプレミスからサービスとしてのソフトウェアへ移るほど、クラウドプロバイダーが受け持つスタックの範囲が広がります。
[600ms]
[serious] でも、移らない仕事もあります。どのモデルでも、データ、ID とアクセス、エンドポイント、設定の選択は、自分の責任のままです。
[600ms]
[reassuring] 責任の境界が正確にどこにあるかは、サービスによって違います。使うサービスごとに、プロバイダーのドキュメントで確認してください。

## Step 3 · Defense in depth

[calm] 多層防御は、連携して働く複数の保護の層を使います。1つの層が破られても、次の層が、攻撃者とデータの間に立ちはだかります。
[600ms]
[curious] ここでは、盗まれたパスワードで ID の層は突破されますが、ネットワークのセグメント化が、攻撃者を止めます。
[600ms]
[confident] これらの層は、機密性、完全性、可用性を支えていて、データがいちばん内側の層です。

## Step 4 · Zero Trust

[calm] ゼロトラストは、決して信頼せず、常に検証するという考え方です。管理されていないデバイスで、見慣れない場所から来た、1件のアクセスリクエストを追ってみましょう。
[600ms]
[confident] 3つの原則があります。明示的に検証する、最小特権アクセスを使う、侵害を想定する、です。
[600ms]
[reflective] ゼロトラストは戦略で、単一の製品ではありません。そのため、各原則は、途中で別々のチェックとして現れます。

## Step 5 · Encryption

[calm] 暗号化すると、鍵がなければデータは役に立たなくなります。対称暗号は、両方向で1つの鍵を使うので高速ですが、鍵の共有が難しくなります。
[600ms]
[curious] 非対称暗号は、鍵のペアを使います。公開鍵で暗号化したものは、秘密鍵でしか復号できないので、公開鍵は自由に共有できます。
[600ms]
[serious] 鍵は、Azure Key Vault のようなマネージドサービスに、データとは別の場所に保管してください。ここに表示している暗号文は、作り物です。

## Step 6 · Hashing

[curious] ハッシュは、一方向のフィンガープリントです。システムはパスワードのフィンガープリントだけを保管して、サインインのたびに比較します。
[600ms]
[confident] ハッシュには鍵が要らず、元に戻すこともできません。同じ入力からは、いつも同じハッシュが得られます。
[600ms]
[reassuring] 実際のシステムでは、固有のソルトも加えるので、同じパスワードが2つあっても、同じハッシュにはなりません。ここの値は作り物で、短くしてあります。

## Step 7 · Encryption or hashing?

[curious] 身近な例が6つと、箱が2つ。それぞれに、1つだけ質問してください。元のものを取り戻す必要がありますか。
[600ms]
[confident] 答えがイエスなら、暗号化です。たとえば、保存データや、HTTPS 経由のトラフィックです。ノーなら、ハッシュです。たとえば、パスワードの保管や、ダウンロードしたファイルのチェックです。
[600ms]
[encouraging] まず自分で仕分けして、それから、それぞれがどこに入るかを見てください。

## Step 8 · Governance, risk and compliance

[calm] ガバナンス、リスク、コンプライアンスは、3つの問いに答えます。誰がルールを決めるのか。何が問題になりうるのか。そして、ルールを守っていることを証明できるのか。
[600ms]
[confident] リスク管理では、リスクを特定し、評価し、対応し、監視します。対応には、受け入れる、軽減する、移転する、回避する、があります。
[600ms]
[serious] コンプライアンスは、ルールが求める最低限であって、セキュリティのすべてではありません。ここに出てくる Contoso のチームは、架空のものです。

## Step 9 · Identity is the new perimeter

[calm] かつての境界は、ネットワークでした。そこへ、クラウドアプリ、リモートワーク、個人のデバイスが加わり、境界の位置が動きました。
[600ms]
[curious] 今の問いは、誰が、あるいは何がリクエストしているのか、です。それは、人間かもしれませんし、デバイス、ワークロード、エージェントかもしれません。
[600ms]
[serious] 攻撃が成功するときは、ほとんどの場合、最終的に ID の侵害や悪用が絡んでいます。だから、ID はこれほど重要なのです。

## Step 10 · Authentication and authorization

[calm] まず、自分が誰かを証明します。これが認証です。次に、何をしてよいかを確認します。これが認可で、必ず2番目に来ます。
[600ms]
[confident] アイデンティティプロバイダーが最初の部分を担当し、クレームを含むトークンを発行します。ID トークンはサインインしたことを証明し、アクセストークンはリソースへのアクセス許可を与えます。
[600ms]
[reflective] よく使われるプロトコルは、OpenID Connect、OAuth 2.0、SAML です。

## Step 11 · Active Directory and the cloud

[calm] Active Directory Domain Services は、オンプレミスのネットワーク向けに作られました。ユーザー、デバイス、グループを保存し、それを実行するサーバーがドメインコントローラーです。
[600ms]
[curious] サービスとしてのソフトウェアのサインインには、ネイティブでは対応していません。Microsoft Entra ID は、クラウド向けに作られたディレクトリです。
[600ms]
[reassuring] この2つは、同期させることでつなげられます。これをハイブリッド ID と呼びます。

## Step 12 · Federation and recap

[calm] フェデレーションを使うと、Contoso はパートナーのサインインを受け入れられるので、新しいアカウントを作る必要がありません。
[600ms]
[serious] これは、別々のアイデンティティプロバイダー間の信頼関係で、信頼は自動的に双方向になるわけではありません。双方向の信頼は、意図して設定する必要があります。
[600ms]
[proud] これで、最初の S C 900 のスキル領域、セキュリティ、コンプライアンス、アイデンティティの概念をカバーしました。最新の学習ガイドを確認してください。
