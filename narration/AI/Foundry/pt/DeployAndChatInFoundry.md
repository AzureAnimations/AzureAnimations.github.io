# Narrator Script — Foundry · Deploy a model and chat with it in Foundry

**Source animation:** [DeployAndChatInFoundry.html](../../../../journeys/AI/Foundry/DeployAndChatInFoundry.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/concepts/concept-playgrounds>
- <https://learn.microsoft.com/azure/foundry/foundry-models/how-to/deploy-foundry-models>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>

---

## Step 1 · Contoso needs a model

[calm] A Mia está criando um assistente de chat para o suporte da Contoso Outdoors. O catálogo de modelos do Foundry tem muitos modelos.
[600ms]
[curious] Tem modelos de raciocínio, multimodais e modelos de linguagem pequenos, entre outros. Qual deles serve para essa função?
[600ms]
[encouraging] Os próximos passos mostram como escolher, implantar e testar o modelo.

## Step 2 · Browse the catalog

[curious] Combine a capacidade do modelo com o cenário. Escolha uma necessidade e você vê o tipo de modelo e onde procurar no catálogo.
[600ms]
[calm] O catálogo filtra por coleção, por recursos compatíveis, como raciocínio e chamada de ferramentas, e por tarefa de inferência.
[600ms]
[reassuring] Seja qual for a sua lista de candidatos, leia o cartão do modelo antes de escolher.

## Step 3 · Compare on the leaderboard

[calm] Os rankings de modelos classificam por qualidade, custo e throughput. Este recurso está em versão prévia.
[600ms]
[curious] Nenhum modelo vence em todas as linhas, então você escolhe o equilíbrio que prefere. Quanto maior o índice de qualidade, melhor, e o custo é uma estimativa que considera três tokens de entrada para cada token de saída.
[600ms]
[reassuring] No catálogo, selecione Ver tabela de líderes ou Comparar modelos. Os números aqui são inventados.

## Step 4 · Deploy it: name and type

[confident] Selecione Implantar e dê um nome à implantação. Depois escolha o tipo de implantação: onde os dados são processados e se você paga por token ou reserva capacidade.
[600ms]
[calm] Comece com Global Standard, a menos que precise de residência de dados, throughput reservado ou lote. Nem todo modelo aceita todos os tipos.
[600ms]
[serious] Anote o nome que você escolheu, porque seu código envia o nome da implantação no parâmetro model.

## Step 5 · You land in the playground

[excited] Quando a implantação termina com sucesso, o Foundry abre o playground do modelo.
[600ms]
[confident] Dá para conversar, configurar o modelo, comparar modelos e ver o código, tudo sem escrever uma linha de código.
[600ms]
[curious] O playground acompanha o modelo. Um modelo de imagem abre o playground de imagens, e um modelo de vídeo abre o playground de vídeo.

## Step 6 · Set a system prompt and chat

[calm] O prompt do sistema define o papel e as regras para todas as respostas. O prompt do usuário é o que o cliente pergunta.
[600ms]
[curious] Envie um e leia a resposta.
[600ms]
[encouraging] O prompt do sistema vale para todos os turnos, enquanto o prompt do usuário é só esta mensagem. Mude um de cada vez, para ver o que alterou a resposta.

## Step 7 · Tune the response

[curious] Temperatura e Top P mudam o quanto as palavras variam. Temperatura mais baixa dá respostas mais estáveis, e mais alta dá respostas mais variadas.
[600ms]
[calm] O máximo de tokens de saída limita o tamanho da resposta. Mude um controle de cada vez e ajuste a temperatura ou o Top P, mas não os dois.
[600ms]
[serious] Muitos modelos de raciocínio não aceitam temperatura nem Top P, então confira antes o cartão do modelo.

## Step 8 · Watch tokens in and out

[calm] O texto é dividido em tokens. Um token equivale a mais ou menos quatro caracteres de um inglês típico.
[600ms]
[confident] Os tokens de entrada são o prompt do sistema, o histórico e a mensagem do usuário. Os tokens de saída são a resposta. Os dois ocupam a janela de contexto, e os dois pesam no custo das implantações pay-per-token.
[600ms]
[concerned] Os tokens de raciocínio também são cobrados como saída. Os números aqui são só exemplos.

## Step 9 · Compare two models

[curious] Comparar modelos envia o mesmo prompt, a mesma mensagem do sistema e as mesmas configurações para cada modelo ao mesmo tempo.
[600ms]
[impressed] Agora dá para avaliar qualidade, velocidade e tokens lado a lado. Você pode comparar até três modelos.
[600ms]
[calm] Selecione Comparar modelos no canto superior direito do playground. Dá para desligar a sincronização no painel de Configuração de um modelo. Os números aqui são inventados.

## Step 10 · View code

[calm] A aba Code mostra a mesma chamada em código. O nome da sua implantação vai no parâmetro model, então o app acessa exatamente essa implantação.
[600ms]
[curious] Escolha a aba da linguagem e use Abrir no VS Code para a Web para levar o exemplo e o endpoint para um editor.
[600ms]
[serious] Mantenha as chaves fora do controle de versão.

## Step 11 · Clean up: delete the deployment

[calm] Quando você não precisar mais de uma implantação, abra e exclua.
[600ms]
[reassuring] Cada implantação ocupa uma parte da sua cota, então remover as que você não usa mantém tudo organizado. No portal, você encontra em Build e depois em Models.
[600ms]
[proud] Olhe o que você já sabe fazer: encontrar um modelo, compará-lo, implantá-lo, conversar com ele e ver o código.
