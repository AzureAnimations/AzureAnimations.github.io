# Narrator Script — GitHub · Access and Admin

**Source animation:** [AccessAndAdmin.html](../../../journeys/GitHub/AccessAndAdmin.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/paths/github-foundations/>
- <https://learn.microsoft.com/training/paths/github-foundations-2/>

---

## Step 1 · Contoso Is Growing

[calm] Contosoは成長しています。 Maya、 Ravi、ヌール、アイビー、 Samに加え、組織、請負業者、そして私的規範があります。
[600ms]
[curious] では、誰が何をでき、設定は誰が管理するのでしょうか?
[600ms]
[confident] 下段の3つの質問は、この旅の3つの部分、すなわち会計、アクセス、管理です。

## Step 2 · Passwords Alone Fall Short

[calm] まずはアカウントから始めましょう。パスワードは推測されたり、再利用されたり、フィッシングされたりします。
[600ms]
[serious] もし唯一のロックなら、それを保持している人がRaviとしてサインインできます。
[600ms]
[reassuring] 二要素認証は、あなただけが知っているか持っている2つ目のロックを加えるため、盗まれたパスワードだけでは不十分です。

## Step 3 · Add a Second Factor

[curious] パスワードの後、 GitHubはあなただけが持っているものを求めます:アプリのコード、テキストメッセージ、セキュリティキー、またはGitHubモバイルです。
[600ms]
[calm] 認証アプリはワンタイムコードを作成し、セキュリティキーはWebAuthnを使用します。リカバリーコードはバックアップとして保管してください。
[600ms]
[confident] 組織のオーナーは、メンバー、請求管理者、外部協力者に対して二要素認証を求めることがあります。

## Step 4 · Passkeys: One Step, No Password

[curious] パスキーは鍵のペアです。秘密鍵はデバイスに残り、 GitHubは公開鍵を保持します。
[600ms]
[impressed] 一つのステップでパスワードと第二の要素の両方をカバーします。PINコード、パスコード、または生体認証でロック解除します。
[600ms]
[serious] パスキーは実際のドメインに紐づいているため、ブラウザは類似サイトを拒否します。それでもロックアウトを避けるためのフォールバック方式は保持してください。

## Step 5 · Organization Roles

[calm] さて、アクセス。組織はContosoの人々とリポジトリを一か所に集めます。
[600ms]
[confident] オーナーは完全な管理アクセス権を持ち、メンバーは既定の、管理者ではないロールです。
[600ms]
[serious] オーナーは少人数に抑えつつ、所有権を失わないよう必ず2人以上にしましょう。モデレーターや請求マネージャーなどの専用ロールもあります。

## Step 6 · Repository Roles: Try It

[curious] リポジトリにはそれぞれの役割があります。一つ選んで、その機能を見てみてください。
[600ms]
[confident] アクセス権が少ない順に、読み取り、トリアージ、書き込み、メンテナンス、管理者です。
[600ms]
[determined] 原則は「最小限の特権」です。つまり、仕事を成し遂げる最小の役割を人々に与えること。

## Step 7 · Teams: Grant Access to Groups

[calm] 個人ごとにアクセス権を付与するのはスケールしにくいので、ここでチームの出番です。
[600ms]
[confident] 一度チームに役割を与えれば、そのチームの全員がその役割を持てます。子チームは親チームのアクセス権を引き継ぎます。
[600ms]
[serious] チームには組織のメンバーしか入れないため、外部コラボレーターは参加できません。

## Step 8 · Least Privilege for a Contractor

[curious] Samは契約社員であって従業員ではありません。
[600ms]
[confident] つまり、 Sam外部の協力者となり、仕事に必要な唯一のリポジトリに追加され、自分で選ぶ役割だけが割り当てられます。
[600ms]
[reassuring] Samはメンバーではなく、チームに参加できません。組織が二要素認証を必要とする場合、 Sam承認する前に有効化しなければなりません。

## Step 9 · Visibility and Branch Protection

[calm] コード自体を守る設定は2つあります。可視性によって、誰がリポジトリを閲覧できるか(公開、プライベート、内部)が決まります。
[600ms]
[confident] ブランチプロテクションルールが、メインに何が許可されるかを決めています。例えば、レビューや統合前のステータスチェックの通過などです。
[600ms]
[serious] リポジトリ管理者権限を持つ人は両方を設定できます。内部リポジトリはエンタープライズGitHubクラウド上のエンタープライズアカウントが必要です。

## Step 10 · Enterprise Managed Users

[curious] 個人アカウントは本人が作成し、所有します。エンタープライズ管理ユーザーは異なる仕組みです。
[600ms]
[confident] Contosoのアイデンティティプロバイダーがアカウントを作成・管理し、利用者はそれを通じてサインインします。
[600ms]
[reflective] 管理されたユーザーは企業外で協力できないため、すべての企業に最適な方法ではありません。 GitHub選択方法を文書化しています。

## Step 11 · Owners Hold the Controls

[calm] オーナーは基地権限、必須の二要素認証、チームなど、組織のデフォルト設定を設定します。
[600ms]
[curious] そして、誰が誰Copilotか、全員か、一部か、あるいは全無か、そしてどの方針が適用されるかを決めます。
[600ms]
[serious] ただし、企業オーナーがすでにポリシーを選択している場合、組織はそれを上書きできません。

## Step 12 · Access and Admin: All in One

[calm] まとめてみよう。アカウントは二要素認証とパスキーで保護する。
[600ms]
[confident] 組織の役割、リポジトリの役割、チームを通じて必要なアクセスのみを共有してください。
[600ms]
[proud] そして、設定はオーナーと管理者が管理するようにしましょう。これはG H 900試験の、プライバシー、セキュリティ、管理のドメインです。
