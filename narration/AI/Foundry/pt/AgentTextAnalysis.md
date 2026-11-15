# Narrator Script · Português (pt) — Journey 05 · Análise de texto com Azure AI Language

**Source animation:** `static/v2/AI/Foundry/AgentTextAnalysis.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações `[tags]` e as pausas `[NNNms]` permanecem inalteradas. Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · The Problem

[serious] Avaliações, tickets de suporte, notas médicas, contratos... a maioria dos dados corporativos é texto não estruturado.
[600ms]
[concerned] Ler tudo isso à mão não escala.
[600ms]
[curious] Então, como damos sentido a isso automaticamente?

## Step 2 · One Service, Many Capabilities

[confident] É aí que entra o Azure AI Language: um serviço pronto que você ativa dentro do Foundry.
[600ms]
[impressed] Um recurso, um endpoint e uma chave desbloqueiam todo um conjunto de capacidades de texto.
[600ms]
[reassuring] Os modelos são pré-treinados: não há dados para coletar nem treinamento para executar.

## Step 3 · Language Detection

[confident] Vamos começar pelo simples, com a detecção de idioma.
[600ms]
[calm] Dê a ele qualquer texto e ele retorna o idioma, um código ISO padrão e uma pontuação de confiança que indica o quão certo ele está.
[600ms]
[optimistic] Parece básico, mas é o primeiro passo essencial em quase qualquer pipeline multilíngue: antes de traduzir, rotear ou analisar uma mensagem, você primeiro precisa saber em que idioma ela está escrita.

## Step 4 · Key Phrases

[intrigued] Em seguida, a extração de frases-chave.
[600ms]
[confident] Ela varre o texto não estruturado e extrai automaticamente os principais pontos —as palavras e frases que realmente importam— sem nenhum treinamento.
[600ms]
[optimistic] É perfeita para marcar documentos, criar índices de pesquisa ou revelar rapidamente os temas escondidos em milhares de avaliações ou tickets.

## Step 5 · Entity Linking

[confident] A vinculação de entidades vai um passo além.
[600ms]
[impressed] Ela encontra as entidades conhecidas no seu texto —aqui, Microsoft, Bill Gates e Paul Allen— e vincula cada uma à sua própria página em uma base de conhecimento confiável como a Wikipédia.
[600ms]
[reassuring] É esse vínculo que resolve a ambiguidade: uma palavra como "Surface" ou "Word" pode ser um objeto do dia a dia ou um produto da Microsoft, e a vinculação de entidades usa o contexto ao redor para associá-la exatamente à correta.

## Step 6 · Sentiment

[confident] A análise de sentimento lê a emoção no texto, classificando-a como positiva, negativa ou neutra, cada uma com uma pontuação de confiança.
[600ms]
[intrigued] Mas repare bem nesta avaliação: "Os fones Contoso X2 têm uma qualidade de som excelente, mas a entrega foi dolorosamente lenta." Na verdade, ela diz duas coisas ao mesmo tempo: a qualidade de som que adorou, e a entrega que detestou.
[600ms]
[calm] Então um único rótulo geral não encaixa: o máximo que daria para dizer é "mista", e isso esconde o que realmente aconteceu.
[600ms]
[impressed] É aqui que a mineração de opiniões vai mais fundo. Ela divide a avaliação por alvo: "qualidade de som" —o produto em si— sai positiva, enquanto "entrega" —a experiência de envio— sai negativa.
[600ms]
[optimistic] Dois aspectos, duas opiniões opostas, separadas com clareza: assim você descobre não só que uma avaliação é mista, mas exatamente o que celebrar e o que corrigir.

## Step 7 · PII Detection

[serious] Agora, uma capacidade crítica para a privacidade: a detecção de PII.
[600ms]
[confident] Ela encontra automaticamente informações de identificação pessoal: nomes, endereços de e-mail, números de telefone, IDs de conta e muito mais.
[600ms]
[reassuring] E pode ocultar tudo isso antes de o seu texto ser armazenado, registrado ou compartilhado com um modelo, para que dados sensíveis dos clientes nunca vazem no seu pipeline, ajudando você a manter a conformidade por padrão.

## Step 8 · Summarization

[confident] O resumo lida com documentos longos de duas maneiras.
[600ms]
[calm] O resumo extrativo seleciona as frases mais importantes, palavra por palavra.
[600ms]
[impressed] O resumo abstrativo vai além e escreve um resumo novo e conciso com palavras totalmente novas, bem parecido com o que uma pessoa faria.

## Step 9 · In the Real World

[optimistic] Agora, combine essas capacidades e os problemas reais começam a se dissolver.
[600ms]
[confident] Analise o feedback dos clientes em escala, leia notas clínicas, processe documentos financeiros ou resuma longos arquivos jurídicos em segundos.
[600ms]
[encouraging] Cada capacidade é um bloco de construção; juntas, elas fazem trabalho sério.

## Step 10 · Skills via MCP

[intrigued] É aqui que tudo se conecta aos agentes.
[600ms]
[confident] Um agente do Foundry pode acessar o Azure AI Language por meio de um servidor MCP, que expõe cada capacidade que vimos como uma ferramenta chamável.
[600ms]
[impressed] Assim, o próprio agente decide, na hora, quando detectar um idioma, extrair frases-chave, ocultar PII ou resumir um documento: sem pipeline rígido e codificado, apenas a habilidade certa no momento certo.

## Step 11 · Get Started

[encouraging] Então, pronto para experimentar você mesmo?
[800ms]
[confident] Crie um recurso do Language, experimente cada recurso no Language Studio e depois chame-os diretamente do seu aplicativo, ou conecte-os a um agente via MCP para que ele possa usá-los como ferramentas.
[600ms]
[optimistic] Sem treinamento de modelo, sem configuração pesada. Você poderia estar extraindo insights reais do seu texto hoje mesmo.
