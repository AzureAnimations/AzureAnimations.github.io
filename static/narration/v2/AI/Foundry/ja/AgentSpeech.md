# Narrator Script · 日本語 (ja) — Journey 06 · Azure AI Speech でアプリに声を

**Source animation:** `static/v2/AI/Foundry/AgentSpeech.html`
**Language:** Japanese (ja). 英語のマスター台本から翻訳。デリバリー指示 `[tags]` とポーズ `[NNNms]` はそのまま。ステップ見出しは 1:1 対応のため英語のまま。

アニメーションの 1 ステップにつき 1 ブロック。

---

## Step 1 · Why Give Software a Voice?

[curious] 人は自然に話し、そして聞きます。
[600ms]
[confident] Azure AI Speech は、それをあなたのアプリにもたらします。音声コマンドを受け取り、話しかけられた質問に答え、テキストを読み上げます。
[600ms]
[reassuring] 誰にとっても自然で、アクセシブルに感じられるソフトウェアです。

## Step 2 · Two Core Capabilities

[confident] Speech は 2 つの方向で働きます。
[600ms]
[calm] Speech to Text は音声をテキストに変え、
[600ms]
[impressed] Text to Speech はテキストを自然な声で読み上げます。

## Step 3 · How Speech to Text Works

[intrigued] では、Speech to Text は実際どう動くのでしょうか。
[800ms]
[confident] まず音響モデルが、生の音声を音素、つまり音の基本的な構成要素に分解します。
[600ms]
[calm] 次に言語モデルが、その音素を単語や文に組み立てます。
[600ms]
[optimistic] 2 つのモデルが力を合わせ、私たちと同じように聞き取るのです。

## Step 4 · Speech to Text in the Real World

[optimistic] 音声をテキストに変えると、たくさんのことが広がります。
[600ms]
[confident] ハンズフリーのワークフロー、アクセシビリティのためのライブ字幕、そして通話や会議の検索できる記録。
[600ms]
[encouraging] 話し言葉が、行動につなげられるデータになります。

## Step 5 · How Text to Speech Works

[confident] 逆方向では、Text to Speech はまずテキストをトークン化し、次に音声的・韻律的な単位、つまり個々の音と、話し方のリズムやメロディーへと変換します。
[600ms]
[impressed] そこから、ロボットのような単調さではなく、なめらかで自然に聞こえる音声を生成します。
[600ms]
[reassuring] そして、あなたが完全に主導権を握ります。声、話す速さ、ピッチ、音量を、ブランドに合わせて選べます。

## Step 6 · The TTS API

[confident] Foundry ポータルでは、声を選んで text-to-speech API を呼び出します。
[600ms]
[impressed] 何十もの言語やアクセントの定義済みの声に加えて、リアルなニューラル ボイスがあります。
[600ms]
[intrigued] 独自のブランド ボイスを作ることさえできます。

## Step 7 · Speech-Capable Agents

[excited] この 2 つをつなげると、エージェントは真の音声パートナーになります。
[600ms]
[confident] Speech to Text がユーザーの発話を捉え、エージェントがそれについて推論し、
[600ms]
[impressed] Text to Speech が答えを声に出して伝えます。

## Step 8 · Speech-to-Speech Scenarios

[optimistic] エージェントが聞いて話せるようになると、新しい体験が開けます。
[600ms]
[confident] 運転中のハンズフリーの手助けや、2 つの言語間のリアルタイム翻訳。
[600ms]
[encouraging] 声は、キーボードを完全になくします。

## Step 9 · Voice Live

[serious] 音声エージェントを手作業で作るには、speech-to-text、推論、text-to-speech を、すべて低遅延に保ちながら縫い合わせる必要があります。
[600ms]
[confident] Voice Live は、その 3 つを Azure マネージドのひとつのサービスにまとめます。
[600ms]
[impressed] なめらかでリアルタイムの音声会話が、配線の手間なしで手に入ります。

## Step 10 · How It Fits Together

[calm] すべてが、きれいに層になって重なります。
[600ms]
[confident] Azure AI Speech は耳と口。あなたのエージェントのロジックが判断を下し、
[600ms]
[reassuring] Foundry のツールや MCP サーバーが、音声をエージェントがオンデマンドで呼べる機能として公開します。

## Step 11 · Get Started

[encouraging] では、始め方はこうです。
[600ms]
[confident] Azure AI Speech リソースを作成し、Foundry ポータルでさまざまな声を試し、そのあと自分のアプリから speech to text と text to speech を呼び出します。
[600ms]
[optimistic] あるいは、そのままエージェントにつなぎ、ついに本物の声を与えましょう。聞いて、話し返せるように。
