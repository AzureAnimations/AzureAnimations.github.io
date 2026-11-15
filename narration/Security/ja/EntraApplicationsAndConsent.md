# Narrator Script — Security · Microsoft Entra applications: registrations, enterprise apps and consent — Azure Security Journey

**Source animation:** [EntraApplicationsAndConsent.html](../../../journeys/Security/EntraApplicationsAndConsent.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals>
- <https://learn.microsoft.com/entra/identity-platform/permissions-consent-overview>
- <https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview>
- <https://learn.microsoft.com/entra/identity-platform/quickstart-register-app>

---

## Step 1 · An app wants your mailbox

[curious] Ana が、新しいアプリの MailTidy にサインインすると、メールボックスへのアクセスを求められます。
[600ms]
[calm] Priya は、Contoso の ID を担当しています。では、誰かが「はい」と答えてよいのでしょうか。それは、誰が決めるのでしょうか。
[600ms]
[confident] このレッスンでは、1つのアプリを例に、Microsoft Entra ID での登録、同意、割り当て、レビューを順に見ていきます。

## Step 2 · App registration: the app’s identity

[calm] 開発者の Sam が、MailTidy を1回だけ登録します。登録によって、アプリが定義されます。
[600ms]
[curious] アプリの名前、サインイン後に戻る場所、そして、自分が何者かを証明する方法を設定します。
[600ms]
[confident] 登録すると、ホームテナントにアプリケーションオブジェクトが作られ、グローバルに一意のクライアントIDが付きます。

## Step 3 · Enterprise application: the app in your tenant

[calm] MailTidy を使う各テナントには、サービスプリンシパルと呼ばれる、そのテナント専用のコピーが作られます。
[600ms]
[curious] Entra では、エンタープライズアプリケーションの下に表示され、Contoso はそこで管理します。
[600ms]
[confident] アプリケーションオブジェクトはグローバルなテンプレート、サービスプリンシパルはローカルなインスタンスと考えてください。

## Step 4 · Delegated or application permissions

[calm] アクセス許可には、2種類あります。委任されたアクセス許可では、アプリは、サインインしたユーザーとして動きます。
[600ms]
[serious] アプリケーションのアクセス許可では、ユーザーがいない状態で、アプリ自身として動きます。対象になるすべてのデータに及びます。たとえば、すべてのメールボックスです。
[600ms]
[confident] 委任されたアクセスで届くのは、そのユーザーが届く範囲だけです。

## Step 5 · Consent: who can say yes

[calm] 同意は、アクセス許可を付与する手続きです。ユーザーは、自分のデータについて同意できます。
[600ms]
[curious] 管理者は、全員分をまとめて同意できます。リクエストによっては、管理者の同意が必須です。
[600ms]
[serious] アプリケーションのアクセス許可と、影響の大きい委任されたアクセス許可の多くは、管理者しか承認できません。

## Step 6 · User consent settings

[calm] そもそもユーザーが同意してよいかどうかは、Priya が決めます。組み込みの選択肢は3つです。
[600ms]
[curious] ユーザーの同意なし。確認済みの発行元で、影響の低いアクセス許可のみ。または、どのアプリでも。
[600ms]
[confident] 真ん中の選択肢では、どのアクセス許可を影響が低いとみなすかを、分類して指定します。管理者は、カスタムの同意ポリシーを作ることもできます。

## Step 7 · Admin consent and the workflow

[calm] ユーザーが同意できない場合は、管理者の同意ワークフローで、承認を依頼できます。
[600ms]
[curious] レビュー担当者に通知が届き、1人が判断して、ユーザーに結果が返ります。
[600ms]
[serious] レビュー担当者に指名されても、権限が上がるわけではありません。承認するには、その同意を付与できるアクセス許可が必要です。

## Step 8 · Try it: approve or deny

[excited] 同意のリクエストが3件届きました。1件ずつ判断して、そのあとで理由を確認しましょう。
[600ms]
[curious] 確認するのは3つです。誰が操作するのか。発行元は確認済みか。アクセス許可は影響が低いか。
[600ms]
[reassuring] 正解は、Contoso の設定に従います。この設定では、ユーザーが同意できるのは、確認済みの発行元と、影響の低いアクセス許可だけです。

## Step 9 · Review and revoke permissions

[serious] 付与されたアクセス許可は、誰かが削除するまで有効です。だから、各アプリが何を持っているかを確認しましょう。
[600ms]
[confident] そして、余分なものを取り消します。少なくとも Cloud Application Administrator のロールが必要です。
[600ms]
[calm] ポータルでは、管理者が同意したアクセス許可を取り消せます。ユーザーが付与したものは、Microsoft Graph か PowerShell で取り消します。

## Step 10 · Assign users and require assignment

[calm] 同意は、アプリが何をしてよいかを決めます。割り当ては、誰が使えるかを決めます。
[600ms]
[confident] 割り当てを必須にすると、割り当てられたユーザーとグループだけがサインインできます。
[600ms]
[reflective] その場合、ユーザー自身は同意できないので、管理者がテナント全体の同意を付与する必要があります。グループへの割り当てには、Premium ライセンスが必要です。

## Step 11 · Secrets, certificates or federated credentials

[calm] アプリは、資格情報で自分が何者かを証明します。漏れる心配が最も少ないものを選びましょう。
[600ms]
[curious] 何も保存しないのが最善で、証明書はクライアントシークレットより優れています。
[600ms]
[serious] マネージド ID とフェデレーション資格情報なら、保存するシークレットがなくなります。クライアントシークレットは、本番環境では使わないでください。

## Step 12 · Recap: register, consent, assign, review

[calm] 4つの操作で、アプリを管理下に置けます。登録し、誰が同意できるかを設定し、誰が使えるかを割り当て、何を持っているかをレビューします。
[600ms]
[confident] 合わせて、アプリケーション ID と同意に関する S C 500 のスキルをカバーしています。
[600ms]
[proud] これらは、ID、アクセス、ガバナンスを管理する分野に含まれます。
