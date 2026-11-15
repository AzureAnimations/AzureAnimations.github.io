# Narrator Script — Copilot Studio · Copilot Studio — Test and Manage Agents

**Source animation:** [TestAndLifecycle.html](../../../journeys/CopilotStudio/TestAndLifecycle.html)
**Language:** ja

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro>
- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export>

---

## Step 1 · Three good chats aren’t proof

[calm] MayaのContoso Supportエージェントはテストチャットで完璧に進んだ。彼女は満足しているが、本物の客は彼女とは違う言い方をする。
[600ms]
[concerned] そして開発は生産部門ではありません。では、どうやって動作を証明し、安全に動かすのでしょうか?
[600ms]
[confident] 評価で証明し、ソリューション、変数、パイプラインで動かしましょう。それがテストと管理エージェントの試験領域で、20〜25パーセントです。

## Step 2 · Test chat or evaluation? Use both

[curious] テストチャットはライブ会話で、一度に一つ質問ずつ進められます。探求するのにとても役立ちます。
[600ms]
[confident] エージェント評価はテストセット全体を実行し、すべての回答をスコアリングし、変更ごとに繰り返し行うことができます。
[600ms]
[reflective] Learnは両方の利用を推奨しています。評価はサインインユーザーとして実行されるため、そのユーザーが見えるものだけを表示します。

## Step 3 · Create a test set

[calm] テストケースとは、通常期待する答えが入った質問のことです。テストセットは最大100件のケースを収録できます。
[600ms]
[confident] エージェントから生成したり、チャットからキャプチャしたり、ファイルをインポートしたり、自分で作成したりできます。
[600ms]
[serious] インポートファイルはCSVまたはTXTで、2つの見出しがあります:質問と期待応答です。アクセス権を持つメーカーはテストセットを見ることができるので、機密データは除外してください。

## Step 4 · Choose how to grade the answers

[curious] テスト方法は8種類あり、1つのテストセットではそのうちいくつかを利用できます。
[600ms]
[confident] 言葉を判断する人もいれば、意味や質を判断する人もいて、使われている道具を判断する人もいて、安全性も判断する人もいます。
[600ms]
[reflective] 一般品質はデフォルトでオンであり、期待される答えは不要です。期待値と比較する方法は、期待値なしのケースでは無効です。

## Step 5 · Which method fits? Try it

[encouraging] シナリオを選ぶと、それに合った方法がハイライトされます。
[600ms]
[confident] いつ使うべきか、何に注意すべきかがわかります。
[600ms]
[reflective] 実際のテストセットでは、複数の方法を組み合わせます。正確な表現が重要な場合は、「意味の比較」と「テキストの類似性」を組み合わせてください。

## Step 6 · Review the results

[calm] 各ケースはPass、Fail、Invalid、またはErrorで終わり、その集合には合格率が割り当てられます。
[600ms]
[curious] 失敗したケースを開き、期待値と実際のケースを比較し、理由を読み、エージェントが何を使ったか確認しましょう。
[600ms]
[reassuring] 変更のたびに同じセットをやり直してください。結果は89日間残るので、 CSVにエクスポートしてより長く保存してください。

## Step 7 · Primer: environments and Dataverse

[calm] エージェントはPower Platform環境に住み、エージェント、フロー、アプリがそれぞれ独自のデータと役割を持つ空間です。
[600ms]
[confident] 各環境は1つのDataverseデータベースを持つことができます。 Contosoは開発、テスト、本番を使います。
[600ms]
[serious] 出荷するものにはデフォルトでない本番環境を使いましょう。ソリューションはコンポーネントを持ち、 Dataverseテーブルデータではありません。

## Step 8 · ALM: a solution carries the agent

[curious] カスタムソリューションを作成し、「既存の追加」を選択し、「エージェント」を選択します。
[600ms]
[confident] 解決策は、エージェントを環境間で移動させるキャリアです。トピックやフローが移動できるように必要なオブジェクトを追加しましょう。
[600ms]
[serious] 新しいソリューションは管理されておらず、管理されたものをエクスポートすることもできませんCopilot Studio。カスタムトピックや知識ソースのような一部のコンポーネントは別途追加する必要があるかもしれません。

## Step 9 · Environment variables: same agent, new value

[curious] 環境ごとに変わる値があります。たとえばAPIエンドポイントです。ハードコードしないでください。
[600ms]
[confident] 解の中の環境変数に保持すれば、それぞれの環境が独自の価値を提供します。
[600ms]
[reassuring] 変数には名前、型、オプションのデフォルト、そして設定された時点で勝つ現在の値があります。インポート時に値を入力するか、パイプラインが先に求めるかです。

## Step 10 · Pipelines: dev to test to production

[calm] 管理者がパイプラインを一度構築します。その後Maya開発でデプロイボタンを押します。
[600ms]
[confident] 同じ管理型解が段階ごとに進み、まず接続や変数がチェックされます。
[600ms]
[impressed] リクエストが提出された際にソリューションはエクスポートされるため、どのステージもバイパスされません。パイプラインはテーブルデータではなく、ソリューションや設定を移動します。

## Step 11 · Extend the pipeline with gates

[curious] ゲート付き拡張機能は、パイプラインに自分のステップを追加できます。
[600ms]
[confident] プリエクスポートステップでテストセットを実行することができます。委任されたデプロイメントは承認を追加し、 Power Automateフローがそのステップを完了または拒否します。
[600ms]
[reflective] 事前エクスポートは最初の段階でのみ有効にしてください。個人パイプラインは拡張できません。

## Step 12 · Test and manage agents: all in one

[calm] テストセット、方法、結果で証明しましょう。
[600ms]
[confident] ソリューション、変数、パイプラインで動かしましょう。これがテストと管理エージェントのドメインです。
[600ms]
[proud] A B 620試験の20〜25%に相当するので、受験前に現在の学習ガイドをよく読んでおきましょう。
