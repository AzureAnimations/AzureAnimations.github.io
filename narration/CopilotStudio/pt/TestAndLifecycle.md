# Narrator Script — Copilot Studio · Copilot Studio — Test and Manage Agents

**Source animation:** [TestAndLifecycle.html](../../../journeys/CopilotStudio/TestAndLifecycle.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro>
- <https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export>

---

## Step 1 · Three good chats aren’t proof

[calm] Maya Contoso Support agente do  foi ótima no chat de teste dela. Ela fica satisfeita, mas clientes de verdade falam diferente dela.
[600ms]
[concerned] E desenvolvedor não é produção. Então, como ela prova que funciona e depois move com segurança?
[600ms]
[confident] Prove com avaliação e mova com soluções, variáveis e pipelines. Esse é o domínio de exame de agentes de Teste e gerenciamento, vinte a vinte e cinco por cento.

## Step 2 · Test chat or evaluation? Use both

[curious] O chat de teste é uma conversa ao vivo, uma pergunta de cada vez. É ótimo para explorar.
[600ms]
[confident] A avaliação do agente realiza um conjunto completo de testes, pontua todas as respostas e pode ser repetida após cada alteração.
[600ms]
[reflective] O Learn recomenda usar ambos. A avaliação roda como o usuário logado, então ele vê apenas o que esse usuário pode ver.

## Step 3 · Create a test set

[calm] Um caso de teste é uma pergunta, geralmente com a resposta que você espera. Um conjunto de teste pode comportar até cem casos.
[600ms]
[confident] Gere-as a partir do agente, capture a partir de chats, importe um arquivo ou escreva você mesmo.
[600ms]
[serious] Um arquivo importado é CSV ou TXT, com dois títulos: Pergunta e Resposta Esperada. Qualquer fabricante com acesso pode ver conjuntos de teste, então mantenha dados sensíveis fora.

## Step 4 · Choose how to grade the answers

[curious] Existem oito métodos de teste, e um conjunto de teste pode usar vários deles.
[600ms]
[confident] Alguns verificam as palavras, outros julgam significado ou qualidade, um verifica as ferramentas usadas e outro verifica a segurança.
[600ms]
[reflective] A qualidade geral está ativada por padrão e não precisa de resposta esperada. Métodos que comparam com uma expectativa retornam Inválido para qualquer caso sem uma.

## Step 5 · Which method fits? Try it

[encouraging] Selecione um cenário, e o método que se encaixa se acende.
[600ms]
[confident] Você vai ver quando usar e o que observar.
[600ms]
[reflective] Conjuntos de teste reais misturam métodos. Quando a formulação precisa importa, combine Compare significado com similaridade de texto.

## Step 6 · Review the results

[calm] Cada caso termina como Pass, Fail, Invalid ou Error, e o conjunto recebe uma taxa de aprovação.
[600ms]
[curious] Abra um caso fracassado para comparar o esperado com o real, leia o raciocínio e veja o que o agente usou.
[600ms]
[reassuring] Reexecute o mesmo conjunto após cada alteração. Os resultados permanecem por oitenta e nove dias, então exporte para CSV para mantê-los por mais tempo.

## Step 7 · Primer: environments and Dataverse

[calm] Os agentes vivem em um ambiente Power Platform, um espaço para agentes, fluxos e aplicativos com seus próprios dados e funções.
[600ms]
[confident] Cada ambiente pode ter um banco de dados Dataverse. Contoso usa dev, test e prod.
[600ms]
[serious] Use um ambiente de produção não padrão para o que você entrega. As soluções carregam componentes, não Dataverse dados de tabelas.

## Step 8 · ALM: a solution carries the agent

[curious] Crie uma solução personalizada, depois escolha Adicionar existente e escolha Agente.
[600ms]
[confident] A solução é o portador que move seu agente entre ambientes. Adicione objetos necessários para que tópicos e fluxos também viajem.
[600ms]
[serious] Novas soluções não são gerenciadas, e você não pode exportar uma gerenciada de Copilot Studio. Alguns componentes, como tópicos personalizados e fontes de conhecimento, podem precisar ser adicionados separadamente.

## Step 9 · Environment variables: same agent, new value

[curious] Alguns valores mudam conforme cada ambiente, como um API endpoint. Não os codifique fixamente.
[600ms]
[confident] Mantenha-os em uma variável de ambiente dentro da solução, e cada ambiente oferece seu próprio valor.
[600ms]
[reassuring] Uma variável tem um nome, um tipo, um padrão opcional e um valor atual, que vence quando está definido. Você fornece valores na importação, ou um pipeline pergunta primeiro.

## Step 10 · Pipelines: dev to test to production

[calm] Um administrador constrói o pipeline uma vez. Depois, Maya aperta Implantar no desenvolvimento.
[600ms]
[confident] A mesma solução gerenciada avança etapa a etapa, e conexões e variáveis são verificadas primeiro.
[600ms]
[impressed] A solução é exportada quando a solicitação é enviada, então nenhuma etapa pode ser contornada. Pipelines movimentam soluções e configurações, não dados de tabelas.

## Step 11 · Extend the pipeline with gates

[curious] Extensões com gate permitem adicionar seus próprios passos ao pipeline.
[600ms]
[confident] Um passo de pré-exportação pode rodar seu conjunto de testes. A implantação delegada adiciona uma aprovação, e seu fluxo de Power Automate completa ou rejeita o passo.
[600ms]
[reflective] Ative a pré-exportação apenas na primeira etapa. Pipelines pessoais não podem ser estendidos.

## Step 12 · Test and manage agents: all in one

[calm] Prove isso com conjuntos de teste, métodos e resultados.
[600ms]
[confident] Mova com soluções, variáveis e pipelines. Juntos, esse é o domínio dos agentes de Teste e gerencie.
[600ms]
[proud] São vinte a vinte e cinco por cento do exame A B 620, então leia o guia de estudos atual antes de fazê-lo.
