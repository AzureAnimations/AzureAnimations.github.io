# Narrator Script — Foundry · Evaluate and Observe

**Source animation:** [EvaluateAndObserve.html](../../../../journeys/AI/Foundry/EvaluateAndObserve.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/concepts/observability>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/built-in-evaluators>
- <https://learn.microsoft.com/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators>

---

## Step 1 · It looked fine in the demo

[calm] Contoso criei um assistente de suporte chamado Ask Contoso. Ele responde perguntas de pedidos e retornos de documentos de apólice e uma ferramenta de pedidos.
[600ms]
[confident] Na demo, ele acertou em três perguntas, e todos bateram palmas.
[600ms]
[concerned] Então clientes reais chegavam com perguntas que ninguém tinha testado, e foi aí que começaram os problemas.

## Step 2 · One loop: test, ship, trace, watch

[curious] Um bom aplicativo de AI nunca está realmente pronto. Ele vive em um ciclo: teste antes do lançamento, rastreie o que roda, assista à produção, corrige o que aprende e teste novamente.
[600ms]
[calm] Microsoft Foundry nomeia as três partes de avaliação, rastreamento e monitoramento.
[600ms]
[confident] Juntos, eles dão observabilidade para AI apps.

## Step 3 · Write the test cases first

[curious] Comece com um conjunto de dados de avaliação. É um arquivo de perguntas de teste, uma por linha, mais a resposta esperada onde você tenha.
[600ms]
[calm] Foundry mantém tudo versionado, então toda execução usa exatamente os mesmos testes, e os conjuntos de dados são arquivos JSONL ou CSV.
[600ms]
[serious] Coloque casos extremos e ataques no conjunto, não apenas os caminhos felizes.

## Step 4 · A judge model grades the answers

[curious] Muitas verificações de qualidade usam um segundo modelo como juiz. Ele lê a pergunta, o texto fonte e a resposta, os avalia em uma rubrica e explica o motivo.
[600ms]
[calm] Para a firmeza, você traz seu próprio modelo de apresentação como juiz. A pontuação vai de um a cinco, e um limite transforma em aprovação ou reprovação.
[600ms]
[reflective] Alguns avaliadores não usam nenhum modelo. Eles apenas medem sobreposição de palavras, como F1, BLEU e ROUGE.

## Step 5 · Pick the evaluator for the symptom

[calm] Cada avaliador de qualidade embutido verifica uma coisa. Então, o segredo é comparar o sintoma que sua equipe viu com o avaliador que detectou.
[600ms]
[curious] Tente aqui. Escolha uma reclamação, e o avaliador certo se ilumina.
[600ms]
[confident] Se nada encaixar, você pode escrever um avaliador personalizado também, que ainda está em prévia.

## Step 6 · Grade the agent’s steps, not just its words

[curious] Um agente pode soar perfeitamente certo e ainda assim escolher a ferramenta errada, ou pular uma instrução no caminho.
[600ms]
[calm] Os avaliadores de agentes analisam cada etapa da execução: resolução de intenções, adesão à tarefa, precisão das chamadas de ferramenta, utilização da saída da ferramenta e conclusão de tarefas.
[600ms]
[serious] Lembre-se de que a resolução de intenções, a adesão às tarefas e a conclusão das tarefas ainda estão em prévia.

## Step 7 · Safety evaluations: what could go wrong?

[serious] Avaliadores de segurança analisam respostas em busca de conteúdo nocivo, texto copiado e jailbreaks escondidos dentro de documentos. Esse último caso é chamado de ataque indireto, ou XPIA.
[600ms]
[calm] O resultado é uma taxa de defeitos: quantas respostas foram sinalizadas.
[600ms]
[reassuring] O serviço de avaliação Foundry hospeda essas verificações, então você não precisa de um modelo de juiz para elas.

## Step 8 · Red teaming: attack it before others do

[serious] Antes que atacantes reais encontrem seus pontos fracos, um agente da equipe vermelha atua como atacante determinado. Ele envia muitas sondas, algumas delas disfarçadas.
[600ms]
[calm] Depois, ele informa com que frequência eles funcionam. Esse número é a taxa de sucesso dos ataques. Ele é construído sobre o PyRIT, o kit de ferramentas open-source da Microsoft, além dos avaliadores de segurança.
[600ms]
[reflective] Funciona melhor junto com revisão humana, e as varreduras agendadas após o lançamento estão em prévia.

## Step 9 · Read a trace, span by span

[curious] Um traço é a história de um pedido, e cada trecho é um passo dentro dele. Escolha um trecho e veja o que ele te diz.
[600ms]
[calm] O rastreamento é construído sobre OpenTelemetry e armazenado em Application Insights. Geralmente está disponível para prompts e agentes hospedados.
[600ms]
[concerned] Rastreamentos podem conter texto sensível, então oculte esses dados antes de compartilhá-los ou armazená-los.

## Step 10 · Monitor production: usage, speed, drift

[calm] Após o lançamento, os dashboards rastreiam tokens, latência, erros e pontuações de qualidade. Os números na tela aqui são inventados.
[600ms]
[curious] A avaliação contínua avalia uma amostra do tráfego ao vivo, para que você perceba a mudança na qualidade sem esperar reclamações.
[600ms]
[serious] Drift, onde as respostas vão piorando lentamente, deveria disparar um alerta. O painel de monitoramento do agente e esses alertas estão em prévia.

## Step 11 · Close the loop: gate every release

[determined] Quando o monitoramento encontrar um problema, mude uma coisa: o prompt, os dados ou o modelo. Depois, execute os mesmos testes.
[600ms]
[curious] Compare as execuções lado a lado para ver se a mudança ajudou e use análise de cluster para agrupar falhas em padrões.
[600ms]
[confident] Por fim, um gate de CI e CD executa os mesmos avaliadores a cada mudança, e você só libera se as pontuações forem válidas.

## Step 12 · Evaluate, trace, monitor, repeat

[calm] Teste antes do lançamento. Rastreie o que rodou. Assista à produção. Depois conserte e faça um gate para o próximo lançamento.
[600ms]
[reflective] Foi assim que o Ask Contoso passou de uma boa demo para algo em quem os clientes podem confiar.
[600ms]
[proud] Esse ciclo é como um app AI permanece bom, muito depois do lançamento.
