# Narrator Script — Microsoft 365 Copilot · Identity Operations

**Source animation:** [IdentityOperations.html](../../../journeys/Copilot/IdentityOperations.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/fundamentals/what-is-entra>
- <https://learn.microsoft.com/entra/identity/conditional-access/overview>
- <https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins>
- <https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups>

---

## Step 1 · Which Entra tool do I open?

[calm] Priyaのヘルプデスクは一日中サインインやセキュリティチケットを受け付けています。
[600ms]
[curious] 各チケットの裏には異なるMicrosoft Entraツールが置かれているので、どちらを開ければいいのでしょうか?
[600ms]
[confident] このレッスンでは、試験A B 900におけるコアなセキュリティスキルを扱います。 MFAやテナントといった概念はアイデンティティの旅路に関わっているため、ここでは管理者が何をいつ開くかに焦点を当てます。

## Step 2 · Microsoft Entra ID: the front door

[calm] すべてのMicrosoft 365入居者はすでに入居Microsoft Entra入居者です。
[600ms]
[confident] Entra ID正面玄関です。誰がサインインしているかを確認し、ルールを適用し、何が起こったかを記録します。
[600ms]
[curious] ご覧いただくタイルは、今後一つずつ開けていく特徴です。

## Step 3 · Pick the object that fits the job

[curious] ユーザーは一つのアイデンティティであり、グループは複数のアイデンティティを一つに管理します。
[600ms]
[confident] ユーザー設定は個人的に管理し、グループへのアクセス権を与えましょう。
[600ms]
[reassuring] セキュリティグループは共有リソースへのアクセスを管理し、 Microsoft 365グループは協力を支援し、ライセンスや役割、ポリシーは各個人ではなくグループに割り当てられます。

## Step 4 · One sign-in, many apps

[calm] シングルサインオンでは、 Alex仕事用の認証情報で一度サインインし、割り当てられたすべてのアプリを開きます。
[600ms]
[confident] Entra IDがアイデンティティプロバイダーです。アプリはAlexをそこに送り、 Entra ID本人確認し、アプリがアクセスを許可します。
[600ms]
[reassuring] 管理者はそのすべてのアクセスを一か所から管理しています。

## Step 5 · Conditional Access: if, then

[curious] 条件付きアクセスは「もし〜ならば」という考え方で動作します。Entraはサインインに関するシグナルを集め、決定を下し、それを強制します。
[600ms]
[confident] 決定はアクセスをブロックするか、コントロールとポリシーでアクセスを付与するかのどちらかです。
[600ms]
[reassuring] ポリシーをレポートオンリーモードで起動でき、What Ifツールはサインインを模擬してどのポリシーが適用されるかを示します。

## Step 6 · Three logs, three questions

[calm] 三つのログが三つの異なる質問に答えます。
[600ms]
[confident] サインインログには誰がサインインし、何が起こったかがわかります。監査ログには誰が何を変更したかがわかります。
[600ms]
[reassuring] Microsoft Purview監査はサービス全体でユーザーや管理者の活動を追跡します。エントリは変更や削除ができず、必要な役割はログによって異なります。

## Step 7 · When a sign-in looks risky

[concerned] 時にはサインインがリスクがあるように見えます。 Microsoft Entra ID保護はリスクの高いユーザーやリスクの高いサインインをフラグ付けします。
[600ms]
[confident] リスクを確認してから修復します。ユーザー自身が修復するか、管理者が対応します。
[600ms]
[serious] フル機能Entra ID P 2かEntra Suiteライセンスが必要で、リスクレポートを読むには少なくともGlobal Readerの役割が必要です。

## Step 8 · Identity Secure Score

[curious] アイデンティティセキュリティスコアは、テナントがMicrosoftのアイデンティティセキュリティ推奨事項をどれだけ忠実に守っているかを示す割合です。
[600ms]
[confident] スコアが高いほど満たされた数が多く、24時間ごとに再計算されます。
[600ms]
[reflective] 一部の推薦は有料ライセンスが必要で、リスクを受け入れてもポイントは加算されません。ここで示す割合はあくまで一例です。

## Step 9 · Admin power on demand

[curious] なぜ管理権限を一日中オンにしっぱなしにするのですか?特権アイデンティティ管理は、ロールを常にオンではなく有効にします。
[600ms]
[confident] Mei必要な時だけロールを有効化し、そのアクセスは失効します。
[600ms]
[reassuring] MFA、正当な理由の要求、通知送信、アクセスレビューの実行、監査履歴の管理などが求められます。

## Step 10 · Two objects for every app

[calm] すべてのアプリには2つのオブジェクトがあります。アプリの登録は設計図で、アプリのホームテナントに保管されています。
[600ms]
[confident] エンタープライズアプリケーションはテナント内のインスタンスであり、誰が使えるかを管理する場所です。
[600ms]
[reassuring] アプリの登録はアプリケーションオブジェクトとサービスプリンシパルの両方を作成します。

## Step 11 · Which tool do I open?

[curious] 次はあなたの番です。ヘルプデスクのキューから症状を選びましょう。
[600ms]
[confident] それに応答するEntraツールが点灯し、どこを探せばいいかも表示されます。
[600ms]
[reflective] 症状によっては2つの道具が必要で、名前も時間とともに変わるので、 Microsoft Learnの経路を確認してください。

## Step 12 · Know the tool, fix the problem

[calm] 症状をEntraツールに合わせれば、チケットの解決が楽になります。
[600ms]
[confident] そして、測定されたA B 900スキルや公式の訓練と照らし合わせて自分をMicrosoft Learn 。
[600ms]
[proud] 必ず現在の学習ガイドを読んでください。測定されるスキルは時間とともに変化します。
