# Narrator Script — Containers · Secure containers: Defender for Containers, AKS, Container Registry, Instances and Container Apps — Azure Containers

**Source animation:** [SecureContainerWorkloads.html](../../../journeys/Container/SecureContainerWorkloads.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-containers-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/alerts-containers>
- <https://learn.microsoft.com/azure/container-registry/container-registry-authentication>
- <https://learn.microsoft.com/azure/container-registry/overview-sign-verify-artifacts>

---

## Step 1 · Build, store, run: three places to attack

[calm] Contosoは、orders-apiというコンテナーをリリースします。コンテナーは、パイプラインからレジストリへ、そして、実行中のポッドへと進みます。
[600ms]
[serious] 攻撃者は、どの段階でも攻撃できます。イメージは、保存されている間に、改ざんされたり、すり替えられたりします。コンテナーは、動き出したあとに、悪用されます。
[600ms]
[determined] そこで、このレッスンでは、段階ごとに守りを固めていきます。すべての段階を守れば、チェーンに弱い部分はなくなります。

## Step 2 · Defender for Containers watches all three

[confident] Defender for Cloudの1つのプランで、レジストリのイメージ、クラスターの構成、実行中のコンテナーを、まとめて保護できます。
[600ms]
[calm] つまり、セキュリティ体制、脆弱性評価、実行時の脅威保護、サプライチェーンの保護、デプロイの監視が、すべて1か所で行えます。
[600ms]
[serious] 覚えておいてほしいことがあります。アラートが出るのは、プランを有効にしたあとの動きだけです。早めに有効にしておきましょう。

## Step 3 · Registry: who gets in and what’s inside

[calm] まず、レジストリからです。誰がプッシュとプルをできるかを管理して、公開インターネットには出さず、保存されているイメージをスキャンします。
[600ms]
[confident] ほとんどのシナリオでは、Microsoft Entra IDのサインインを使いましょう。代わりにスコープ付きトークンも使えますが、こちらはEntraのロールの割り当てを使いません。
[600ms]
[curious] レジストリをプライベートに保つには、プライベートエンドポイントを追加します。これには、Premiumレベルが必要です。

## Step 4 · Image trust: sign it, scan it, then run it

[curious] そのイメージが、自分で作ったものだと、どうすれば確認できるのでしょうか。ビルドするときに、署名します。
[600ms]
[calm] Notary ProjectのNotationで、イメージに署名します。署名は、レジストリに保存されます。キーは、Key Vaultに置けます。
[600ms]
[confident] そして、ポッドが起動する前に、署名を確認します。AKS Image Integrityは、まだプレビューですが、Azure Policyを使って、署名済みのイメージだけを許可します。また、スキャン結果に応じて、デプロイを止めることもできます。

## Step 5 · AKS identity: people and pods

[calm] クラスターでは、2種類のIDを考える必要があります。人とポッドです。
[600ms]
[confident] 人は、Microsoft Entra IDでサインインして、Kubernetes RBACでKubernetesのロールを受け取ります。代わりに、Kubernetes向けのAzure RBACも使えます。
[600ms]
[reassuring] ポッドは、ワークロードIDを使って、Azureにアクセスします。ポッドのサービスアカウントトークンを、Entraとフェデレーションします。パスワードを保存する必要はありません。

## Step 6 · AKS network: shrink who can connect

[calm] 次は、侵入される経路を減らしましょう。APIサーバーは、開かれたインターネットに出さないようにします。
[600ms]
[confident] プライベートクラスターでは、APIサーバーにプライベートアドレスが付きます。許可するIP範囲は、代わりに、パブリックなAPIサーバーを制限しますが、プライベートクラスターでは使えません。
[600ms]
[serious] クラスターの中では、デフォルトで、すべてのポッドが、すべてのポッドと通信できます。ネットワークポリシーで、これを変えます。

## Step 7 · AKS configuration: guardrails before pods run

[curious] アドミッションチェックは、APIサーバーへのすべてのリクエストを確認します。だから、危険なポッドは、起動する前に止められます。
[600ms]
[calm] AKS向けのAzure Policyアドオンは、ポッドセキュリティのベースラインなど、組み込みの定義を適用します。効果をauditからdenyに変えると、ブロックされます。
[600ms]
[confident] Pod Security Admissionも、AKSではデフォルトで有効です。名前空間のラベルを使います。

## Step 8 · Container Instances: identity, network, secrets

[calm] Container Instancesのコンテナーグループでは、マネージドIDを使えます。仮想ネットワークにも参加できて、パスワードも隠せます。
[600ms]
[serious] 実行中のグループにIDを追加したり変更したりすると、グループが再起動します。仮想ネットワークの中では、グループ専用のサブネットと、送信トラフィック用のNATゲートウェイが必要です。
[600ms]
[reassuring] パスワードは、セキュアな値として保存します。そうすれば、プロパティには、名前しか表示されません。

## Step 9 · Container Apps: identity, ingress and secrets

[confident] Container Appsでは、公開が必要なものだけを公開します。内部イングレスには、環境の内側からしかアクセスできません。
[600ms]
[calm] アプリには、マネージドIDを使わせましょう。そうすれば、資格情報を持たせずに済みます。
[600ms]
[serious] 本番では、シークレットの値は、Key Vault参照で管理します。また、ロールによっては、シークレットの一覧表示を含む、ワイルドカードのアクションを使うものもあるので、注意してください。

## Step 10 · Runtime threat: an alert, start to finish

[serious] では、実行中のコンテナーへの攻撃を、ひとつ追ってみましょう。最初の不審なプロセスから、対応までです。
[600ms]
[curious] Defender for Containersは、専用のセンサーと、Kubernetesの監査ログを使います。暗号通貨のマイニング、Webシェル、バイナリのドリフト、不審なDNSアクティビティを検出できます。
[600ms]
[confident] アラートは、MITREの攻撃フレームワークに対応づけられ、Defender for Cloudに表示されます。Microsoft Defender XDRで、調査することもできます。

## Step 11 · Which control for which layer?

[excited] では、練習しましょう。コントロールをひとつ選んで、それが守る層を選んでください。
[600ms]
[calm] コントロールは8つ、層は4つです。レジストリとイメージ、AKS、Container InstancesとContainer Apps、そして、ランタイムです。
[600ms]
[encouraging] 間違った層に入れてしまっても、もう一度やってみましょう。理由を考えることが、記憶に残ります。

## Step 12 · Recap: protect the image, the cluster, the runtime

[calm] リリースするもの、クラスターの構成、そして、実行されるもの。この3つを固めます。Defenderは、その3つすべてを監視します。
[600ms]
[confident] これらは、S C 500で測定されるスキルで、コンテナーによるコンピューティングの保護に含まれます。仕分けの演習で練習してから、公式の学習ガイドを読んでみてください。
[600ms]
[proud] イメージ、クラスター、ランタイムを守れば、Contosoのorders-apiは、ずっと攻撃されにくくなります。
