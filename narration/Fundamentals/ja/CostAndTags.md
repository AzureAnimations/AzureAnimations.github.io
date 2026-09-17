# ナレーション原稿 - コストとタグ

**Source animation:** journeys/Fundamentals/CostAndTags.html
**Script status:** Authored voiceover.
**Language:** 日本語

角括弧内は読み上げない演出指示です。間を置く位置は独立した行で示します。各ブロックはアニメーションの1ステップに対応します。
<!-- Sources: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets ; https://learn.microsoft.com/azure/well-architected/saas/governance#cost-governance -->

## Step 1 · Where did the money go?

[calm] セールは終わりましたが、Contosoの支出は予想した水準に戻りません。本番ショップのリソースは必要でも、テスト用の能力には、もう使っていないものがあるかもしれません。
[600ms]
[confident] 削減する前に、どのリソースから料金が発生し、誰が使っているかを確かめます。

## Step 2 · What actually drives cost

[calm] 請求額はサーバーの台数だけでは決まりません。処理能力と稼働時間、保存データ、通信量、サービスの利用量、リージョンなどが影響します。
[600ms]
[confident] Contosoは、各サービスの課金項目を確認します。設計の一部を変えると、代表的な価格だけでなく、複数の料金が変わることがあります。

## Step 3 · Estimate before you deploy

[calm] 料金計算ツールに、想定する能力、稼働時間、ストレージ、通信量を入力します。Contosoは通常の月と、セールで仕事が増える月を比較します。
[600ms]
[confident] 結果は前提条件に基づく見積もりで、請求額の保証ではありません。前提を残しておけば、後から実績と比較できます。

## Step 4 · Organize what you deploy

[calm] タグは、対応するリソースに付けるラベルです。仕事の名前や、テストか本番かを示します。Contosoは同じルールで付け、費用を意味のある単位で集計します。
[600ms]
[confident] 担当を理解しやすくなりますが、タグでリソースが移動したり、支出が自動制限されたりはしません。

## Step 5 · Watch the real spending

[calm] Cost Managementの実際の費用を、見積もりと比べましょう。サービスやタグでまとめると、ショップのどの部分が変化したかわかりやすくなります。
[600ms]
[confident] 合計は支出の増加を示し、内訳はその理由を探る助けになります。Contosoは、この情報を見てから調整対象を決めます。

## Step 6 · An alert is not a stop switch

[calm] Contosoは予算のしきい値と通知先を設定します。設定した費用の条件を満たすと、担当者に調査を促す通知が届きます。
[600ms]
[confident] 予算は強制的な支出上限ではありません。ショップも利用量も自動では止まらず、人や別途設定した自動化が対応します。

## Step 7 · Find the cause, then act

[calm] 内訳から、セール後に残った未使用のテスト用リソースが見つかりました。Contosoは依存関係と保存すべきデータを確認してから、不要なものを取り除きます。
[600ms]
[confident] 目的は、本番を止めずに無駄を減らすことです。請求額が減っても、ショップが動かなくなれば成功とはいえません。

## Step 8 · Cost and Tags - All in One

[calm] デプロイ前に見積もり、統一したタグを付け、実際の支出と計画を比べます。予算アラートが変化を知らせ、調査によって適切な対応を決めます。
[600ms]
[confident] Contosoは費用を理解できました。次は、合意した基準をガバナンスのチェックに変え、今後のデプロイでも守れるようにします。