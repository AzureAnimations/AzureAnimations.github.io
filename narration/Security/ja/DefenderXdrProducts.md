# Narrator Script — Security · Defender XDR products one by one: Office 365, Endpoint, Identity, Cloud Apps and Vulnerability Management

**Source animation:** [DefenderXdrProducts.html](../../../journeys/Security/DefenderXdrProducts.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/defender-xdr/microsoft-365-defender>
- <https://learn.microsoft.com/defender-office-365/mdo-about>
- <https://learn.microsoft.com/defender-endpoint/overview-endpoint-detection-response>
- <https://learn.microsoft.com/defender-for-identity/what-is>

---

## Step 1 · One attack, four doors

[curious] 攻撃者が Contoso の Priya に届く経路は、4つの扉です。メール、ノートパソコン、サインイン、そしてクラウドアプリで、どれも侵入口になります。
[600ms]
[calm] 扉ごとに、別々の Defender 製品が守っています。1つずつ見ていきましょう。
[600ms]
[confident] このレッスンでは、S C 900 に出てくる、Microsoft Defender XDR による脅威防御のスキルを扱います。

## Step 2 · Defender for Office 365

[calm] Defender for Office 365 は、メールとコラボレーションを保護します。ここでは、Priya のメッセージをチェックします。
[600ms]
[curious] 送信者、リンク、添付ファイルを確認します。Safe Links はウェブアドレスをスキャンし、Safe Attachments は、配信前に安全な仮想環境でファイルを開きます。
[600ms]
[reassuring] そのため、危険なメッセージは、Priya が開く前の早い段階で見つかります。

## Step 3 · Defender for Endpoint

[calm] Defender for Endpoint は、デバイスを保護します。Priya のノートパソコンに入っているセンサーが、その動作を Defender サービスに報告します。
[600ms]
[serious] ノートパソコンが侵害されたら、隔離できます。ネットワークからは切り離されますが、Defender サービスへの接続は維持されます。
[600ms]
[reassuring] そして、きれいになったら、隔離を解除できます。

## Step 4 · Defender for Identity

[calm] Defender for Identity は、ドメインコントローラーにセンサーを置きます。サインインが起きるたびに、それを監視します。
[600ms]
[serious] ここでは、攻撃者が盗んだアカウントを使って、マシンからマシンへと移動します。これが横移動です。
[600ms]
[confident] 行動分析によって、ID 攻撃の各段階で、それを検出します。

## Step 5 · Defender for Cloud Apps

[curious] IT 部門が把握している以上に、人はクラウドアプリを使っています。Defender for Cloud Apps は、実際に使われているアプリを見つけ出します。
[600ms]
[calm] 見つかったアプリには、それぞれリスクのランクが付くので、どれに注意すべきかがわかります。
[600ms]
[confident] セッション内でのユーザーの操作を制限することもできます。たとえば、監視しながらアクセスを許可し、ダウンロードはブロックする、といった使い方です。

## Step 6 · Defender Vulnerability Management

[calm] Defender Vulnerability Management は、デバイスの弱点を探し続けます。止まることはありません。
[600ms]
[curious] 脅威インテリジェンス、侵害の可能性、ビジネスコンテキストをもとに、リスクの高いものから順に並べます。
[600ms]
[confident] そのうえで、IT 部門による修正を支援します。たとえば Intune のタスクを使ったり、脆弱なアプリをブロックしたりします。

## Step 7 · Microsoft Threat Intelligence

[calm] 製品の裏側には、Microsoft の脅威リサーチがあります。攻撃者が誰で、何をしているのかを解き明かしています。
[600ms]
[curious] その知識は Defender の各製品に取り込まれて、アドレス、ドメイン、ファイルの詳細ページや、Microsoft の研究者によるレポートとして表示されます。
[600ms]
[reflective] この分野には、まだプレビューの機能もあります。

## Step 8 · The Defender portal

[calm] Microsoft Defender ポータルは、唯一のコンソールです。すべての製品のアラートが、ここに届きます。
[600ms]
[impressed] アラートは1つのインシデントにまとまるので、チームは、4つのバラバラな話ではなく、攻撃の全体像を見ることができます。
[600ms]
[confident] 製品をまたいだ、自動攻撃の中断とハンティングも利用できます。

## Step 9 · Which product sees it?

[excited] 次はあなたの番です。攻撃のステージをクリックしてください。
[600ms]
[curious] 反応した Defender 製品が光りますが、どのアラートも、同じポータルに届きます。
[600ms]
[reflective] 実際の攻撃では、複数の製品が同時に関わることが多いので、すべてのステージを試してみてください。

## Step 10 · Four defenders, one portal

[calm] まとめましょう。Office 365、Endpoint、Identity、Cloud Apps が、それぞれ1つの扉を守っています。
[600ms]
[confident] Vulnerability Management と Threat Intelligence がそれを支え、ポータルがすべてをつなぎます。
[600ms]
[proud] これが、S C 900 で出てくる Defender XDR のストーリーです。
