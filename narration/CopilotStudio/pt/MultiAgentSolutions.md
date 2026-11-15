# Narrator Script — Copilot Studio · Copilot Studio — Multi-Agent Solutions

**Source animation:** [MultiAgentSolutions.html](../../../journeys/CopilotStudio/MultiAgentSolutions.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents>
- <https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns>
- <https://learn.microsoft.com/training/courses/ab-620t00>

---

## Step 1 · One agent, too many choices

[curious] Contoso Support continua ganhando ferramentas, temas e outros agentes. Cada um parecia uma boa ideia na época.
[600ms]
[concerned] Depois de certo ponto, escolher o certo fica mais difícil, não mais fácil para o orquestrador.
[600ms]
[serious] A regra prática de Microsoft Learné que o roteamento pode se deteriorar além de cerca de trinta a quarenta opções, ou antes quando as descrições se parecem.

## Step 2 · When to split into more agents

[calm] Comece com um agente só. Essa é a coisa mais simples que pode funcionar.
[600ms]
[confident] Divida apenas quando houver uma necessidade clara, porque cada agente extra adiciona hops para correr e governar.
[600ms]
[reflective] O conselho do Learn é revisar nomes e descrições primeiro. A divisão adiciona latência e amplia a superfície de testes, gestão e governança.

## Step 3 · Child agent or connected agent?

[curious] Quando você se separa, você tem duas opções. O pai chama ambos por meio de orquestração generativa.
[600ms]
[confident] Um agente filho é leve e vive dentro do seu representante. Um agente conectado é um agente separado, com sua própria orquestração, ferramentas e conhecimento.
[600ms]
[reassuring] Eles diferem em quão independentes são, e você pode misturar ambos em uma única solução.

## Step 4 · Child agents and existing agents

[calm] Aqui, o pai delega para um agente infantil que mora dentro dela.
[600ms]
[confident] Também pode delegar para um agente de Copilot Studio existente que outra equipe construiu. Esse agente deve estar no mesmo ambiente, publicado e autorizado a se conectar.
[600ms]
[encouraging] Adicione isso na página de Agentes dos pais, depois ajuste a descrição para que o roteamento funcione.

## Step 5 · Integrate a Foundry agent

[curious] Agora um agente incorporado Microsoft Foundry entra na equipe. Este está em prévia.
[600ms]
[confident] Dê Copilot Studio o endpoint do projeto e o ID do Agente, depois descreva quando o pai deve chamá-lo.
[600ms]
[serious] O agente Foundry precisa que seu endpoint do protocolo de Atividade seja ativado, e ele deve ser construído no novo portal Foundry.

## Step 6 · Integrate a Fabric data agent

[curious] Um agente de dados Fabric responde a partir dos seus dados Fabric. Essa conexão também está em prévia.
[600ms]
[confident] Pegue entre os agentes que você possa acessar, depois descreva o que ele sabe, para que o pai possa encaminhar perguntas para ele.
[600ms]
[serious] Algumas coisas ainda não são suportadas, como redirecionar para ele a partir de um tópico ou nomeá-lo em instruções. Orquestração generativa ainda pode chamá-lo.

## Step 7 · A2A: agents talking to agents

[curious] Agent2Agent, ou A2A, é um padrão aberto para entregar uma tarefa a outro agente, mesmo que seja construído em um framework diferente.
[600ms]
[confident] Use-o para agentes que já falam A2A, por exemplo, frameworks externos hospedados fora do Copilot Studio.
[600ms]
[reflective] MCP conectam ferramentas em vez disso. Use servidores MCP para ferramentas e recursos, e conectores personalizados ou ferramentas HTTP para APIs simples.

## Step 8 · Trace one request across the team

[curious] Siga uma mensagem de cliente através da equipe. Dois especialistas trabalham nisso, e uma resposta retorna.
[600ms]
[confident] Selecione cada salto para ver o que acontece lá e o que observar.
[600ms]
[encouraging] É um cenário fictício, e na visão do apresentador o passo de salto para você.

## Step 9 · Ground answers with Azure AI Search

[calm] Indexe seus documentos uma vez a cada Azure AI Search.
[600ms]
[confident] Copilot Studio usa esse índice para respostas generativas, e um agente Foundry pode usar exatamente o mesmo índice.
[600ms]
[reflective] Adicione-o como conhecimento por meio de uma conexão adequada e nomeie um índice vetorial. Para mostrar citações, o índice precisa de um campo contendo o documento URL.

## Step 10 · Custom prompts on Foundry models

[curious] Uma ferramenta de prompt pode rodar em um modelo que você escolher, não apenas no padrão.
[600ms]
[confident] Conecte um modelo implantado em Foundry, e então use esse prompt como ferramenta ou dentro de um tópico.
[600ms]
[serious] Insira o nome da implantação e o nome do modelo base exatamente como Foundry mostra, e use um endpoint de chat-completions.

## Step 11 · Monitor agents with Application Insights

[calm] Quando a equipe estiver em execução, você vai querer assistir. Cole uma string de conexão nas configurações do agente.
[600ms]
[confident] Escolha o que registrar e depois consulte a telemetria com Kusto em Azure.
[600ms]
[encouraging] Os chats de teste canvas também são registrados, então filtre-os com a dimensão personalizada do modo de design. Uma visualização de painel, em prévia, latência de gráficos, uso de ferramentas e exceções.

## Step 12 · Multi-Agent Solutions — All in One

[calm] Projete a equipe, conecte os especialistas, aproprie-os Azuree observe eles correndo.
[600ms]
[confident] Esses são dois dos quatro grupos de habilidades no domínio A B 620, Integrar e estender agentes.
[600ms]
[determined] As habilidades são atualizadas ao longo do tempo, então leia o guia de estudo ao vivo. O exame pode incluir recursos comuns de prévia, e as conexões Foundry e Fabric estão em prévia hoje.
