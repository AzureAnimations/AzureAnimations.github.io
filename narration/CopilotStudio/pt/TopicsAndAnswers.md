# Narrator Script — Copilot Studio · Copilot Studio — Topics & Answers

**Source animation:** [TopicsAndAnswers.html](../../../journeys/CopilotStudio/TopicsAndAnswers.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/courses/ab-620t00>
- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · A topic is a path of decisions

[calm] Um cliente diz: Quero devolver meu headset. Um tópico transforma essa frase em um caminho de nós.
[600ms]
[curious] Existem nós de gatilho, pergunta, ferramenta, respostas generativas e mensagens, e cada um precisa de apenas uma coisa configurada.
[600ms]
[confident] Contoso Support e seus dados são fictícios. Esta página entra em um tópico para ver o que definir em cada nó.

## Step 2 · Variables: a named, typed box

[curious] Quando um nó Question pede o número do pedido, ele salva a resposta em uma variável. Pense nisso como uma caixa nomeada e digitada.
[600ms]
[calm] Nós posteriores o leem de volta, em uma mensagem, condição ou entrada de ferramenta. O tipo vem do primeiro valor que você armazena, e então é fixo.
[600ms]
[reassuring] Você também pode definir um valor você mesmo com um nó de valor de variável definida. E renomear o nome padrão para algo significativo.

## Step 3 · Scope: who can see the variable

[calm] Uma variável tem um escopo, que decide quem pode vê-la. Existem quatro níveis: tópico, global, sistema e ambiente.
[600ms]
[confident] O tema é o padrão, visível apenas para o tema que o criou. Global dura a sessão, trabalha entre os tópicos e recebe um prefixo Global.
[600ms]
[serious] Variáveis do sistema e do ambiente estão incorporadas e somente leitura aqui. Escolha o escopo mais restrito que funcione.

## Step 4 · Pass values on, never ask twice

[curious] Ninguém gosta de ser perguntado a mesma coisa duas vezes. Então, quando você redirecionar para outro assunto, entregue o que já sabe.
[600ms]
[confident] No tópico de destino, defina a variável para receber valores de outros tópicos. Depois, no nó Redirecionar, escolha Adicionar entrada.
[600ms]
[reassuring] As entradas de ferramenta e fluxo funcionam da mesma forma, desde que o tipo variável coincida.

## Step 5 · Flows and tools: do the work in a topic

[calm] Trabalho real acontece em ferramentas e fluxos de agentes. Em um tópico, você escolhe Adicionar nó e depois adicionar uma ferramenta.
[600ms]
[confident] Ele se torna um nó Action que roda exatamente onde você o coloca. Uma ferramenta em nível tópico está disponível apenas lá, enquanto uma ferramenta em nível de agente permite que o orquestrador decida quando chamá-la.
[600ms]
[serious] Para ser uma ferramenta, um fluxo precisa do gatilho do agente, uma ação de resposta, publicação e uma resposta em cem segundos.

## Step 6 · Generative answers: grounded in your sources

[curious] O nó de respostas generativas pesquisa as fontes de conhecimento que você escolhe e escreve uma resposta com citações.
[600ms]
[confident] Fontes definidas no nó sobrescrevem as do nível de agente. Ative a busca apenas em fontes selecionadas e ela ignora todo o resto.
[600ms]
[calm] Ele roda quando a conversa chega lá, e também como um plano B quando nenhum tema bate. A moderação de conteúdo é padrão para Alta.

## Step 7 · Custom prompts: your instructions, your output

[curious] Às vezes, você quer controle total sobre a redação. Um prompt personalizado permite que você escreva as instruções por conta própria.
[600ms]
[confident] Adicione uma ferramenta, escolha Novo prompt e defina o modelo, temperatura, entradas e formato de saída. O texto retorna em uma variável.
[600ms]
[encouraging] Teste com dados de exemplo. Seja específico, seja breve e dê ao prompt uma saída quando ele não puder responder.

## Step 8 · Custom knowledge: bring your own data

[calm] E se seu conteúdo não estiver em uma fonte de conhecimento suportada? Então você mesmo traz.
[600ms]
[confident] Busque com um fluxo ou um pedido HTTP, molde-o em uma tabela com Conteúdo e, opcionalmente, ContentLocation e Título para as citações. Depois, passe para um nó de respostas generativas.
[600ms]
[serious] Tenha um limite em mente: apenas os três primeiros registros são usados para gerar a resposta.

## Step 9 · HTTP request: call any API from a topic

[curious] Para chamar um REST API diretamente de um tópico, adicione o nó Enviar HTTP solicitar no menu Avançado.
[600ms]
[confident] Você define o URL, o método, os cabeçalhos e o corpo. Cola o JSON de exemplo e a resposta se torna uma variável tipada.
[600ms]
[reassuring] Por padrão, um erro interrompe o tópico e aciona o tópico Sobre o erro. Escolha Continuar no erro para manter o código de status e o corpo do erro.

## Step 10 · Response formatting: shape how it reads

[calm] O nó Mensagem é um pequeno editor. Você pode formatar texto com negrito, itálico e listas com marcadores ou numeradas.
[600ms]
[curious] Insira variáveis, adicione variações de mensagem para que o agente escolha uma aleatoriamente e inclua imagens, respostas rápidas e cartões.
[600ms]
[confident] Respostas rápidas não são suportadas em todos os canais. Nos canais de voz, substitua o texto com uma mensagem de voz e SSML.

## Step 11 · Adaptive cards: input and output in one card

[curious] Um cartão adaptativo é JSON que o canal renderiza. Coloque um em um nó de Mensagem e ele simplesmente exibe informações.
[600ms]
[confident] Use Perguntar com o Cartão Adaptativo para coletar entradas. Ele precisa de um botão de enviar e cria variáveis de saída a partir das entradas do cartão.
[600ms]
[serious] Copilot Studio suporta o esquema um vírgula seis e antes, mas o Teams para em um ponto cinco. Escolha uma versão que cada canal suporta.

## Step 12 · Configure topics: all in one

[calm] Olhe para o caminho todo agora. Nove habilidades da lista de exames, todas em uma conversa, e cada uma vive em um nó.
[600ms]
[confident] Configurar tópicos está no domínio de soluções de Planejar e configurar agentes do A B 620 de exame, que é de trinta a trinta e cinco por cento.
[600ms]
[determined] Verifique a lista de habilidades atual no guia oficial de estudo e continue praticando com o treinamento oficial.
