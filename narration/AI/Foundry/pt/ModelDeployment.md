# Narrator Script · Português (pt) — Journey 03 · Implantação de modelo vs. Agente

**Source animation:** `static/v2/AI/Foundry/ModelDeployment.html`
**Language:** Portuguese (pt). Traduzido do roteiro mestre em inglês. As indicações `[tags]` e as pausas `[NNNms]` permanecem inalteradas. Os títulos das etapas ficam em inglês para o mapeamento 1:1.

Um bloco por etapa da animação.

---

## Step 1 · Why an Agent?

[confident] O Foundry oferece os modelos mais avançados do mundo, mas há um detalhe.
[600ms]
[serious] Um modelo, por si só, é apenas um preditor: ele recebe um prompt e adivinha o próximo token.
[600ms]
[curious] Ele não consegue lembrar, planejar nem agir.
[600ms]
[determined] Para fazer trabalho de verdade —raciocinar, usar ferramentas e levar até o fim— você precisa de um agente.

## Step 2 · Deployment

[confident] Antes de poder chamar um modelo como o GPT, você cria uma implantação.
[600ms]
[calm] Você escolhe duas coisas: onde seus dados são processados —globalmente ou em uma região específica— e como a taxa de transferência é tratada, padrão ou provisionada.
[600ms]
[reassuring] Combine as duas e você tem o seu tipo: Global mais Padrão resulta em uma implantação "Global Standard".

## Step 3 · Tokens

[intrigued] Mas, antes de qualquer modelo ler o seu texto, há uma ideia central: o token.
[600ms]
[confident] O modelo divide tudo o que você envia em tokens: pequenos pedaços de palavras, às vezes de apenas alguns caracteres.
[600ms]
[serious] E os tokens são a moeda dos modelos de linguagem: seu preço, seus limites de taxa e sua janela de contexto são todos medidos neles.
[600ms]
[optimistic] Então, menos tokens significa respostas mais baratas e mais rápidas.

## Step 4 · Inference

[curious] Então, o que realmente acontece quando o modelo é executado?
[600ms]
[confident] No fundo de um data center, milhares de chips especializados pegam seus tokens, transformam-nos em vetores e os fazem passar por camada após camada de cálculo.
[600ms]
[serious] Esse processo se chama inferência — e todos esses cálculos levam a uma só coisa: prever a única palavra seguinte mais provável.
[600ms]
[reflective] Não é tão diferente de como você terminaria uma frase de memória — só que é pura matemática, rodando bilhões de vezes por segundo.

## Step 5 · Chat Flow

[confident] Agora, acompanhe uma única mensagem.
[600ms]
[calm] Seu aplicativo a divide em tokens e os envia a um endpoint do Foundry; o modelo executa a inferência e transmite de volta os tokens da resposta.
[600ms]
[serious] Essa é a ida e volta, e você é cobrado por cada token, tanto de entrada quanto de saída.

## Step 6 · AI Agents

[confident] Chamar uma implantação diretamente é simples, e funciona.
[600ms]
[hesitant] Mas aplicações empresariais reais precisam de muito mais do que respostas cruas.
[600ms]
[determined] Elas precisam de instruções para não sair do tema, de conhecimento delimitado para se manterem precisas, além de contexto do usuário, histórico de conversa, resumo e memória.
[600ms]
[confident] Envolva tudo isso em volta do modelo e você terá construído um agente de IA.
[600ms]
[encouraging] E é exatamente isso que faremos a seguir.
