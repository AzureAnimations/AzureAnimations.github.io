# Narrator Script — Architect · Design hybrid identity and on-premises access

**Source animation:** [HybridIdentity.html](../../../journeys/Architect/HybridIdentity.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity/hybrid/whatis-hybrid-identity>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync>
- <https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn>
- <https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso>
- <https://learn.microsoft.com/entra/identity/domain-services/overview>
- <https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy>
- <https://learn.microsoft.com/entra/global-secure-access/concept-private-access>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>

---

## Step 1 · Two directories, one workforce

[calm] Contosoの従業員はすでにオンプレミスのActive Directoryに存在していますが、クラウドアプリケーションはMicrosoft Entra IDを使用しています。
[600ms]
[curious] 2つのディレクトリは同じ労働力を代表し、無関係なアカウントを2つ目に作成してはいけません。
[600ms]
[reassuring] 同期、サインイン、アプリケーションアクセスは別々に選びます。なぜなら、これらはこの問題の異なる部分を解決するからです。

## Step 2 · Sync: Cloud Sync or Connect Sync?

[calm] 両方の同期オプションはユーザーとグループをMicrosoft Entra IDに統合しますが、運用モデルは異なります。
[600ms]
[curious] Cloud Syncは軽量エージェントとクラウド管理の設定を用い、Connect Syncはサーバー上でより完全な同期エンジンを実行します。
[600ms]
[reassuring] 選択前に要件やカスタマイズニーズを比較してください。アイデンティティの同期がそれ自体でサインイン方法を選ぶわけではありません。

## Step 3 · Sign-in: who checks the password?

[calm] 各サインイン経路をたどり、1つだけ質問してください:パスワードは実際にどこでチェックされているのか?
[600ms]
[curious] パスワードハッシュ同期はクラウド上で検証され、パススルー認証はオンプレミスのドメインコントローラーに届き、フェデレーションは認証を別のシステムに渡します。
[600ms]
[reassuring] Contosoの要件を満たす最もシンプルな方法を選び、オンプレミスアカウントの状態を確認する要件も含めて。

## Step 4 · Single sign-on: no repeat prompts

[calm] シングルサインオンは、従業員がクラウドアプリケーションを開くたびに再度認証を求める必要を回避します。
[600ms]
[curious] この図は、加入デバイスで使用される主要なリフレッシュトークンと、企業ドメイン参加デバイス上のシームレスSSOを分離しています。
[600ms]
[reassuring] すべてのSSO形式が同じように動作すると仮定するのではなく、デバイスやサインインデザインに合ったメカニズムを選択してください。

## Step 5 · Legacy apps: managed domain or your own DCs?

[calm] Contosoのレガシーアプリケーションは依然としてLDAP、Kerberos、ドメイン参加などのドメインサービスを期待しています。
[600ms]
[curious] 管理ドメインは管理を軽減し、Azure仮想マシン上でActive Directoryドメインコントローラーを動かすことでよりコントロールが強化されます。
[600ms]
[reassuring] 決定的な問いは、アプリケーションがどの機能を必要とし、依存するドメインコントローラーを誰が操作するかです。

## Step 6 · On-premises apps: reach them without a VPN

[calm] リモートスタッフはContosoのネットワーク内でアプリケーションを必要とし、それらのアプリケーションへのインバウンド接続を開かない必要があります。
[600ms]
[curious] アプリケーションプロキシはウェブアプリケーションを公開し、Private Accessはより広範なプライベートアプリケーションやリソースを対象としています。
[600ms]
[reassuring] アウトバウンドコネクタの経路をたどり、アプリケーションやデバイスの要件に合ったアクセス方式を選択します。

## Step 7 · Conditional Access: one policy layer

[calm] 条件付きアクセスは左側に示された信号をアクセス決定に変換します。
[600ms]
[curious] ユーザー、デバイス、場所、リスク条件がブロックや多要素認証などの追加要件につながることがあります。
[600ms]
[reassuring] 同じポリシーアプローチで、クラウドアプリケーションやContosoが公開したオンプレミスアプリケーションも保護できます。

## Step 8 · All in one: Contoso’s hybrid identity

[calm] これで Contoso の従業員は、両方のディレクトリで同じ一つの集団として表され、同期とサインインの方式も意図的に選ばれています。
[600ms]
[curious] アプリケーションパスは異なりますが、同じアイデンティティベースのアクセス決定の背後にあります。
[600ms]
[reassuring] これで認証と到達可能性が完了します。次のレッスンでは、各人やワークロードが何をし、どのくらいの期間できるかを問います。

