# Narrator Script — Foundry · Prompt Engineering: Instructions a Model Follows

**Source animation:** [PromptEngineering.html](../../../../journeys/AI/Foundry/PromptEngineering.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/openai/concepts/prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/advanced-prompt-engineering>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/system-message>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/safety-system-message-templates>

---

## Step 1 · Same model, very different answers

[curious] Um modelo simplesmente continua a partir das palavras à sua frente.
[600ms]
[calm] Contoso Outfitters tem um bot de ajuda, e alguém dá um prompt vago para ele.
[600ms]
[concerned] Assim, ele preenche as lacunas com palpites, e o mesmo modelo dá respostas bem diferentes.

## Step 2 · Two prompts, two authors

[calm] O desenvolvedor escreve o prompt do sistema uma vez, para definir as regras.
[600ms]
[curious] O cliente digita um prompt do usuário a cada turno, e o modelo lê ambos.
[600ms]
[confident] Modelos de chat recebem uma lista de mensagens, cada uma com um papel. A mensagem do sistema vem primeiro e carrega as instruções de maior prioridade.

## Step 3 · What a good system message contains

[calm] Cinco pequenas partes fazem a maior parte do trabalho: papel e tarefa, público e tom, escopo e limites, formato de saída e regras de segurança.
[600ms]
[confident] Mantenha cada parte específica.
[600ms]
[serious] Certifique-se de que nunca se contradigam e inclua um recurso de reserva para quando o bot estiver em dúvida.

## Step 4 · Show it, don’t just tell it

[curious] Zero-shot dá ao modelo apenas a tarefa. Few-shot adiciona alguns pares de perguntas e respostas de exemplo.
[600ms]
[calm] O modelo copia o padrão nesses exemplos, então o tom e a forma da resposta se tornam muito mais previsíveis.
[600ms]
[reassuring] Exemplos não mudam o modelo. Eles só direcionam esse pedido.

## Step 5 · Give it the facts to use

[serious] Modelos adivinham quando faltam fatos.
[600ms]
[confident] Então coloque a política correta no prompt e diga ao modelo para responder apenas a partir dela. Isso é o aterramento: a resposta vem dos seus dados, não da memória do modelo.
[600ms]
[calm] E diga o que fazer quando as fontes não contêm a resposta.

## Step 6 · Ask for the shape your app needs

[curious] O código não consegue analisar um parágrafo amigável. Então peça um formato fixo, como JSON com campos nomeados, e mantenha pequeno e estável.
[600ms]
[calm] Uma instrução simples pergunta educadamente.
[600ms]
[confident] Para uma garantia firme, Foundry suporta saídas estruturadas. Você fornece um esquema JSON e a resposta vem em seguida.

## Step 7 · Try it: switch the parts on and off

[excited] Agora é sua vez. Mesmo modelo, mesma pergunta. Ligue ou desligue cada parte do prompt e veja a resposta mudar.
[600ms]
[curious] Qual switch resolve qual problema?
[600ms]
[reassuring] Esta é uma demo simplificada, não um modelo ao vivo, mas você pode tentar a versão real no Foundry playground.

## Step 8 · Test it, then tune it

[calm] Mude uma coisa e depois faça os mesmos testes novamente.
[600ms]
[curious] Misture perguntas simples, casos específicos e tentativas de quebrar suas regras. Trate um prompt como código, com um conjunto de testes que você reexecute após cada alteração.
[600ms]
[serious] O Learn diz que essas técnicas não são recomendadas para modelos de raciocínio, então confira as orientações do seu modelo.

## Step 9 · Untrusted text can give orders

[concerned] E-mails, páginas web e arquivos são apenas mais texto para um modelo. Instruções ocultas dentro deles podem tentar sobrescrever as suas.
[600ms]
[serious] Isso é injeção rápida, e é chamado de indireto quando as instruções ficam escondidas em um documento.
[600ms]
[confident] Stack de defesas: rotular texto não confiável como dados, limitar o que o modelo pode fazer e adicionar detecção como Prompt Shields. Ninguém é perfeito.

## Step 10 · A prompt is one layer, not the wall

[serious] Uma mensagem do sistema pode direcionar o bot, mas um usuário determinado ainda pode contorná-la.
[600ms]
[calm] A verdadeira proteção vem de camadas trabalhando juntas.
[600ms]
[reassuring] Isso significa seleção de modelos, aterramento, classificadores de conteúdo e mitigações de experiência do usuário, com o prompt como uma camada entre eles.

## Step 11 · Prompting at a glance

[calm] Escreva instruções claras. Mostre exemplos. Forneça os fatos. Peça o formato que seu aplicativo precisa.
[600ms]
[determined] Teste incansavelmente e nunca dependa apenas do prompt.
[600ms]
[optimistic] Em seguida, veja como instruções, conhecimentos e ferramentas se encaixam em um agente.
