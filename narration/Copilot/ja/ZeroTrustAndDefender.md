# Narrator Script — Microsoft 365 Copilot · Zero Trust and Defender XDR

**Source animation:** [ZeroTrustAndDefender.html](../../../journeys/Copilot/ZeroTrustAndDefender.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/security/zero-trust/zero-trust-overview>
- <https://learn.microsoft.com/entra/identity-platform/authentication-vs-authorization>
- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-xdr/incidents-overview>

---

## Step 1 · One password, every door

[curious] Alex、Mei、ジョー、そして侵入者に出会いContoso。旧モデルでは、ネットワーク内の誰でも信頼されていた。
[600ms]
[serious] 今日の攻撃は身元を狙っています。フィッシングメール1回、盗まれたサインインカード1回で、侵入者はすべてのドアを通り抜けます。
[600ms]
[calm] このレッスンはA B 900試験のMicrosoft 365セキュリティ原理スキルに続きます。

## Step 2 · Three Zero Trust principles

[confident] ゼロトラストは3つの原則に基づいています:明示的に検証すること、最小権限アクセスの使用、そして侵害を想定すること。
[600ms]
[calm] 彼らはMicrosoft 365のあらゆるアクセス決定やセキュリティコントロールを導きます。
[600ms]
[reflective] 大きな変化は、既定で信頼する考え方から、例外としてのみ信頼する考え方への移行です。置かれている場所だけで通されるものは、何もありません。

## Step 3 · Authentication, then authorization

[curious] 似た響きでも役割が違う二つの言葉。認証はあなたが誰であるかを証明します。
[600ms]
[confident] 認可は、本人だと確認された後に何を許可されるかを決めます。リクエストには両方が必要で、どちらか一方がもう一方の代わりになることはありません。
[600ms]
[calm] Microsoft 365では、承認はMicrosoft Entraロール、Exchangeロール、サイト権限などから得られます。

## Step 4 · Password, MFA, passwordless

[calm] サインイン方法の階段を思い浮かべてください。下部にはシンプルなパスワードがあり、攻撃者が盗みやすいものです。
[600ms]
[confident] ステップアップするごとに盗まれたパスワードの有用性は薄れていきます。多要素認証は2つ目の証明を追加し、パスワードレスはパスワード自体を除去します。
[600ms]
[encouraging] Microsoftは、 Windows Hello for Businessやパスキーのようなフィッシング耐性手段を推奨しています。管理者は認証方法ポリシーで許可された方法を選択します。

## Step 5 · Four ways in, four defenders

[curious] 攻撃者はメール、デバイス、アイデンティティ、アプリの4つの経路からMicrosoft 365に到達します。
[600ms]
[confident] 脅威防御は各経路にMicrosoft Defender製品を配置し、それぞれが自分のエリアを監視します。
[600ms]
[calm] Microsoft Defender XDRはそれらをつなぎ合わせ、 Microsoft Entra ID保護も身元を守るのに役立ちます。

## Step 6 · Threat intelligence

[curious] 攻撃者が何をしているかを知ることは、戦いの半分です。脅威インテリジェンスは、それがあなたに影響するかどうかも教えてくれます。
[600ms]
[confident] Microsoft Defenderでは、脅威分析がこれらのレポートを提供します。それらはMicrosoftセキュリティ研究者や厳選されたオープンソースソースから提供されています。
[600ms]
[calm] キャンペーン、回答、そして画面上のレポートは、架空の例です。

## Step 7 · Defender XDR: one incident

[concerned] 各Defender製品は独自のアラートを発生させており、複数の別々のアラートが一つの攻撃として読み取るのは難しいです。
[600ms]
[confident] Microsoft Defender XDR関連するアラートを単一のインシデントに関連付けます。これにより、多くの断片ではなく一つの攻撃ストーリーが得られます。
[600ms]
[impressed] アラートは一つの信号であり、インシデントは全体像であり、それをMicrosoft Defenderポータルで取り組む。

## Step 8 · Automated investigation and response

[curious] Defender XDR分析官を待つ必要はなく、自分で事件を調査できます。
[600ms]
[confident] 証拠ごとに「悪意がある」「疑わしい」「脅威が見つからない」と判断されます。その後、是正措置を取ることができます。
[600ms]
[reassuring] 設定によっては、アクションは自動的に実行されるか、セキュリティチームの承認待ちです。すべてのアクションはアクションセンターに一覧表示されます。

## Step 9 · Advanced hunting

[curious] 時にはチーム自身が疑問を持つこともあります。高度なハンティングは、Defender製品で収集された生データを検索できます。
[600ms]
[confident] これはOffice 365、エンドポイント、アイデンティティ、クラウドアプリ向けのDefenderをカバーし、最大30日間の生データを提供します。
[600ms]
[encouraging] ガイドモードはクエリビルダーであり、上級モードはKustoクエリ言語を使用しています。良いクエリはカスタム検出ルールにもなり得ます。

## Step 10 · Which principle applies?

[encouraging] 次はあなたの番です。シナリオを選び、それに該当するゼロトラスト原則を選びましょう。
[600ms]
[curious] それぞれが明示的に検証するためのMicrosoft 365MFAと条件付きアクセス、最小権限のための役割と権限でどのように表示されているかがわかります。
[600ms]
[confident] Defender XDRにおける検知と対応が侵害を前提としています。

## Step 11 · Zero Trust, then Defender XDR

[calm] まとめてみよう。明示的に検証し、最小権限を使い、違反と仮定する。
[600ms]
[confident] Defender XDRその原理を実行に移します。検出し、相関させ、応答し、狩りを行います。
[600ms]
[proud] 測定されたスキルA B 900と比較して自分を検証し、 Microsoft Learnの最新の学習ガイドも読んでください。スキルは時間とともに変化します。
