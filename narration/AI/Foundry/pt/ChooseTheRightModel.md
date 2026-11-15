# Narrator Script — Foundry · Choose the Right Model for the Job

**Source animation:** [ChooseTheRightModel.html](../../../../journeys/AI/Foundry/ChooseTheRightModel.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview>
- <https://learn.microsoft.com/azure/foundry/openai/concepts/model-router>
- <https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/reasoning>

---

## Step 1 · One catalog, many models

[calm] Contoso Outfitters precisa de um modelo para o bot de ajuda. O catálogo Foundry tem milhares, então comece pela tarefa e vá afunilando.
[600ms]
[curious] Os modelos se dividem em dois grupos. Uns são vendidos pelo Azure, com suporte da Microsoft e contratos empresariais. Os outros vêm de parceiros e da comunidade, com suporte dos próprios fornecedores.
[600ms]
[serious] Em qualquer caso, escolher um modelo adequado e ler o cartão do modelo é responsabilidade sua.

## Step 2 · Large, small and reasoning models

[curious] Tamanho, custo e tempo de espera andam juntos. Um modelo pequeno é rápido e barato, e serve para tarefas específicas e bem definidas.
[600ms]
[calm] Um modelo grande dá conta de uma variedade maior de tarefas, e um modelo de raciocínio pensa antes de responder.
[600ms]
[concerned] Esse raciocínio gera tokens de raciocínio que você nunca vê, mas paga como saída, e quanto maior o esforço, maior a espera. Esses medidores são relativos, não medidos.

## Step 3 · Multimodal and code models

[calm] Veja o que entra e o que sai. Se a entrada for foto ou áudio, você precisa de um modelo multimodal.
[600ms]
[confident] Escrever e corrigir código é trabalho para um modelo de código, ajustado para ferramentas de programação. Alguns deles só estão disponíveis pelo Responses API.
[600ms]
[reassuring] Sempre confira os tipos de entrada e saída no cartão do modelo.

## Step 4 · Foundry Tool or a model?

[curious] Alguns trabalhos já têm um serviço pronto. Para faturas digitalizadas, uma Foundry Tool entrega campos tipados na hora.
[600ms]
[calm] Um modelo generativo também poderia ler uma fatura, mas aí você precisaria montar todo o resto em volta dele.
[600ms]
[confident] As Foundry Tools já vêm pré-treinadas, sem treinamento personalizado. O Microsoft Learn recomenda considerá-las antes de usar um modelo de linguagem no lugar de um serviço especializado.

## Step 5 · Leaderboards: read them carefully

[calm] Um ranking classifica os modelos em testes públicos de qualidade, segurança, desempenho e custo. É uma boa forma de montar uma lista de candidatos.
[600ms]
[serious] Mas ele não é um veredito sobre a sua carga de trabalho.
[600ms]
[confident] Monte a lista de candidatos pelo ranking e depois avalie com os seus próprios dados. A tela aqui é só uma ilustração, com modelos inventados.

## Step 6 · Model router and fallback

[curious] Prompts fáceis e difíceis não precisam do mesmo modelo. O model router escolhe um modelo para cada requisição, então você implanta uma coisa só.
[600ms]
[calm] Você escolhe um modo de roteamento, qualidade, balanceado ou custo, e o subconjunto de modelos que ele pode usar.
[600ms]
[reassuring] Se um modelo tiver um problema temporário, o roteador faz failover automaticamente. Escolha pelo menos dois modelos para contar com esse fallback e compare com a sua linha de base atual.

## Step 7 · Match the task

[excited] Agora é a sua vez. Escolha um trabalho da Contoso à esquerda.
[600ms]
[curious] O painel mostra uma boa primeira escolha e o ponto de atenção.
[600ms]
[reassuring] Este é um guia simplificado, não um manual de regras. Quem decide mesmo são os seus testes, com os seus dados.

## Step 8 · Deployment option for the choice

[calm] Com o modelo escolhido, falta decidir como executá-lo. Cada opção equilibra preço, localização e previsibilidade.
[600ms]
[confident] O Global Standard é o ponto de partida padrão. Os tipos Zona de Dados mantêm o processamento na zona US, EU ou APAC, os tipos provisionados reservam throughput, e o batch serve para trabalhos assíncronos.
[600ms]
[serious] Modelos abertos em computação gerenciada são cobrados por hora de máquina virtual, e nem todo modelo aceita todos os tipos de implantação.

## Step 9 · Choosing at a glance

[calm] Escolha o tipo de modelo para o trabalho, confira as evidências e só então decida como executá-lo.
[600ms]
[reflective] Esses três passos cobrem as habilidades de seleção de modelos do guia de estudo A I 103 no Microsoft Learn.
[600ms]
[proud] Consulte o guia para ver o texto atual, e você vai saber escolher com confiança.
