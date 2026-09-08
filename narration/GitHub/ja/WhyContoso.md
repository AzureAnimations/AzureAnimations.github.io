# Narrator Script — GitHub · Contoso Delivery · Why Contoso Is Building This · JA

**Source animation:** `journeys/GitHub/WhyContoso.html`

`## Step N` の見出しは意図的に英語のままです（音声生成と字幕の索引）。

---

## Step 1 · When It Rains, Contoso Loses Money

[warm] まずはソフトウェアとまったく関係のない問題から始めましょう。
[500ms]
[calm] Contoso は小売企業です。強い雨が街に居座ると、買い物客は家から出ません。来店客数が落ち、レジの数字もそれに続きます。
[500ms]
[thoughtful] 薄い輪郭は Contoso が見込んでいた一日。塗りつぶされた棒が実際の一日です。商品にも価格にも問題はありませんでした。ただ、雨が降ったのです。

## Step 2 · The Same Rain, Two Different Days

[confident] このプロジェクト全体が乗っている気づきがこれです。雨は信号であり、Contoso はそれに対して二つのうちどちらかができます。
[500ms]
[serious] 何もしなければ、その来店は失われます。在庫は売れ残り、その日は損失として処理されます。
[500ms]
[bright] あるいは動く。顧客がすでにいる場所で出迎える。雨の午後なら、それはオンラインです。店を空にしたのと同じ天気が、今度はその天気が生んだ一日と噛み合います。

## Step 3 · Sell What the Weather Calls For

[calm] それぞれの天候は、突然買う意味が生まれる在庫に対応します。雨ならレインジャケットと傘。嵐なら厚手のアウター、そして宅配。寒波ならニット。
[500ms]
[thoughtful] 右の列に注目してください。*すべてのチャネル*が何を打ち出すべきか。この言葉を覚えておいてください。二つ先のステップで、それがアーキテクチャの問題そのものになります。

## Step 4 · Storm Day Free Shipping

[bright] そして予報が荒れてくれば、Contoso はさらに踏み込めます。
[500ms]
[calm] Azure Maps が接近中の嵐を伝えます。その一つの事実が Storm Day プロモーションを起動し、バナーが変わり、適切な商品が前面に出て、送料無料が待つ理由をなくします。
[500ms]
[confident] 順番に注目してください。先に嵐が育ち、そのあとで初めてオファーが現れます。天気がキャンペーンを引き起こしている。誰も予報を見て手作業で公開していません。

## Step 5 · Three Channels, Three Sets of Problems

[serious] さて、ここがチームの間違えどころです。Contoso にはウェブ、モバイルアプリ、マーケティングの三つのチャネルがあり、素直に考えれば、それぞれが直接 Azure Maps を呼べばよさそうに見えます。
[500ms]
[concerned] その代償を見てください。サブスクリプションキーのコピーが三つ。しかも一つはブラウザーの中、つまりキーが秘密でなくなる場所です。入力検証も三通り。同じ予報を三つのチームが少しずつ違う意味に読みます。
[500ms]
[thoughtful] 三つのチャネル、三組の問題。そして Contoso が四つ目のアプリを作った瞬間に四組目が現れます。

## Step 6 · One API, One Source of Truth

[confident] そこで Contoso は代わりに一つのものを作ります。単一の Node.js サービス、Contoso Weather API が、チャネルと Azure Maps のあいだに立ちます。
[500ms]
[bright] このサービスが四つの仕事をちょうど一度だけ行います。キーをサーバー側に保つ。入力を検証する。応答を一つの形に正規化する。そして、その予報がビジネスにとって何を*意味するか*を決める。
[500ms]
[reassuring] 前のステップと同じ絵です。チャネルは変わっていません。変わったのは、赤い線が一本の青い線になり、キーが消えたことです。

## Step 7 · What We Are Actually Building

[warm] 計画に入る前に、作るもの自体を見ましょう。画面は二つです。
[500ms]
[calm] 「Weather around the world」というダッシュボード。都市が国ごとにまとまっています。都市をクリックすると詳細画面に移り、マーカーの載った地図と、より詳しい数値が出ます。
[500ms]
[confident] 製品はこれで全部です。サインインなし、データベースなし、決済なし。すべて明確に対象外です。
[500ms]
[reassuring] そこが要点です。このあと続くすべては、*この二画面*を安全に届けるために存在します。要件定義書はこのステップからダウンロードできます。

## Step 8 · Weather In, Revenue Out

[warm] 物語全体を一行で。
[500ms]
[calm] Azure Maps が天気を伝える。Contoso の API がそれを読み、意味を決める。すべてのチャネルが同じ答えを受け取る。そして雨の日が、売れる日に変わる。
[500ms]
[confident] これが*なぜ*です。ここから先はすべて*どうやって*の話になります。
