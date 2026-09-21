# Narrator Script - 誰が住んでいるか

**Source animation:** journeys/Identity/UsersAndGroups.html
**Script status:** Authored voiceover.

Delivery cues appear in brackets; pauses are on separate lines.
One block per on-screen step. Interactive choices are examples, not instructions to change real resources.

<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups -->
<!-- Reference: https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups -->

## Step 1 · The family lives here. The register doesn’t know them.

[curious] Noah は家に住んでいますが、まだ名簿に登録されていません。
[600ms]
自分の ID がなければ、共有アカウントを使う別の人と区別できません。
[600ms]
[confident] 隣の Alex にはすでに ID があります。Noah にも Contoso のユーザーを作り、その後でアクセス先を決めましょう。

## Step 2 · Give Noah his own record

[calm] 権限のある管理者が、名前、サインイン名、部署を持つ Noah のユーザーを作ります。
[600ms]
これらは本人を表す属性です。部署を Kids に設定しても、Azure の権限にはなりません。
[600ms]
[confident] ディレクトリの中で誰なのかが決まっただけで、使える家電はまだ決まっていません。

## Step 3 · One group for the children

[calm] 子どもたちをセキュリティ グループにして、Noah と Mia を一つの一覧にまとめます。
[600ms]
所有者は一覧を管理し、メンバーは一覧に所属します。この二つの関係は別です。
[600ms]
[confident] セキュリティ グループにはリソースの権限を割り当てられます。Microsoft 365 グループは共同作業向けなので、目的に合う種類を選びます。

## Step 4 · Write his name, or write a rule

[calm] 名簿の作り方は二つです。人を手動で追加するか、動的メンバーシップのルールを使います。
[600ms]
この例では部署が Kids のユーザーを選びます。属性が変わると、条件に合う人も変わります。
[600ms]
[confident] 動的メンバーシップには適切なライセンスが必要で、処理にも時間がかかります。アクセスに影響する属性を誰が変更できるか、管理しましょう。

## Step 5 · Check who is really on the list

[calm] Noah の属性が条件に合うかだけでなく、実際のメンバー一覧を確認します。
[600ms]
ルールの結果が反映されるには処理が必要です。動的グループのメンバーは、手作業ではなくルールで管理します。
[600ms]
[confident] この例の Alex は対象外ですが、別のルールならゲストも含められます。所有者であることと、メンバーであることは別です。

## Step 6 · Everybody has a key — to the house

[calm] Noah に自分の ID ができ、適切な一覧にも載りました。サインインは、誰の玄関の鍵なのかを示すことだと考えてください。
[600ms]
この例ではリソースのロールを割り当てていないため、家電はまだ使えません。
[600ms]
[confident] グループに既存の権限があれば、所属によって利用できます。割り当てがなければ、名簿だけではリソースのアクセス権は得られません。

## Step 7 · The register, in Microsoft Entra ID

[confident] 上の段では、大人の手動メンバーシップと、子どものルールによるメンバーシップを比べています。
[600ms]
下の段では、Storage Blob Data Reader が大人のグループにストレージ アカウント内のデータの読み取りを許可します。
[600ms]
[confident] 子どもには仮想マシンのロールがありません。所属が誰を含むかを、割り当てが何をどこでできるかを決めます。
