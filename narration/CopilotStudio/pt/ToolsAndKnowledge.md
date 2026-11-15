# Narrator Script — Copilot Studio · Copilot Studio: Knowledge and Tools

**Source animation:** [ToolsAndKnowledge.html](../../../journeys/CopilotStudio/ToolsAndKnowledge.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/add-knowledge-copilots-online-workshop/>
- <https://learn.microsoft.com/training/modules/copilot-tools-online-workshop/>

---

## Step 1 · The answers live outside the agent

[calm] Contoso Support está no ar, e os clientes começaram a perguntar coisas que seu prompt simplesmente não consegue responder.
[600ms]
[curious] Algumas perguntas precisam de fatos que ficam em wikis, bancos de dados e arquivos. Outras precisam de ações, como iniciar um retorno, que estejam por trás de APIs e aplicativos.
[600ms]
[confident] Contoso e todos os sistemas que você verá aqui são fictícios, e o mesmo agente executa todas as doze etapas.

## Step 2 · Two jobs: know it, or do it

[curious] Toda necessidade externa se resume a um de dois trabalhos. Ou o agente precisa saber algo, ou precisa fazer algo.
[600ms]
[calm] O conhecimento lhe dá conteúdo para ler e citar. Ferramentas permitem que ele chame um serviço e mude coisas. Elas ficam em duas páginas separadas do agente.
[600ms]
[confident] Com orquestração generativa, o agente escolhe entre eles lendo suas descrições, então essas palavras realmente importam.

## Step 3 · Copilot connectors: index first, then answer

[calm] A primeira rota de conhecimento é Copilot conectores, que costumavam ser chamados de conectores Microsoft Graph.
[600ms]
[confident] Um administrador de locatário conecta um sistema não-Microsoft, e seu conteúdo é indexado em Microsoft Graph. Os agentes podem então responder a partir dele, citar e respeitar o acesso de cada pessoa.
[600ms]
[serious] Como o administrador configura isso primeiro, ele só aparece depois na caixa de diálogo Adicionar conhecimento.

## Step 4 · Power Platform connectors: ask the live system

[curious] Essa rota é diferente, porque nada é copiado. É uma prévia, opção em tempo real.
[600ms]
[confident] Copilot Studio indexa apenas os nomes das tabelas e das colunas. Depois, cada pergunta é executada contra o sistema ao vivo, usando o login próprio do usuário.
[600ms]
[calm] Ele reutiliza as mesmas políticas de conexão e dados que as ferramentas de conector, e trabalha com sistemas como Salesforce, ServiceNow, Azure SQL, SAP e Dataverse.

## Step 5 · Azure AI Search: bring your own index

[calm] Aqui você traz seu próprio índice. Você prepara um índice vetorial em Azure e o adiciona por meio de uma conexão de dados.
[600ms]
[confident] Você recebe um índice por fonte de conhecimento, e ele pode devolver citações, desde que o índice tenha um campo URL para apontar.
[600ms]
[reassuring] Use o assistente de importação e vetorização para que o mesmo modelo de incorporação também incorpore a questão. Endpoints privados também são suportados.

## Step 6 · Connector tools: prebuilt or custom

[calm] Agora passamos de leitura para atuação. Um conector envolve um REST API para que o agente possa chamá-lo.
[600ms]
[curious] Mas e se não houver um conector pré-montado para o APIde retorno da Contoso? Aí você simplesmente adiciona o conector personalizado que sua equipe já construiu.
[600ms]
[reassuring] Por padrão, a ferramenta roda com a conexão de cada usuário, então as pessoas só fazem o que podem fazer.

## Step 7 · REST API tool: an OpenAPI file becomes tools

[curious] Talvez você não tenha um conector, só um arquivo OpenAPI. Essa rota de pré-visualização transforma esse arquivo em ferramentas.
[600ms]
[confident] Você envia a especificação, escreve uma descrição clara, não escolhe nenhuma, uma chave API ou OAuth para autenticação, e mantém apenas os endpoints que deseja. Cada um vira uma ferramenta.
[600ms]
[serious] Essa descrição é o que o orquestrador lê para decidir quando chamar a ferramenta, então adicione os sinônimos que as pessoas realmente usam.

## Step 8 · MCP: connect once, choose the tools

[curious] Um servidor MCP publica suas próprias ferramentas e recursos, cada um com um nome, uma descrição e entradas.
[600ms]
[confident] Você adiciona uma vez com o assistente e depois desliga qualquer ferramenta que não queira que o agente use. Quando o servidor muda, o agente vê a atualização.
[600ms]
[calm] A orquestração generativa precisa estar ativada, e prompts ainda não são suportados. Um recurso só se torna utilizável quando uma ferramenta o retorna.

## Step 9 · Computer use: when there is no API

[curious] E se não houver conector, API e servidor MCP ? É aí que entra o uso do computador.
[600ms]
[impressed] O agente olha para uma tela Windows, decide o que fazer, então clica e digita como uma pessoa faria. Um modelo de visão e raciocínio ajuda a lidar quando as telas mudam.
[600ms]
[calm] Precisa de uma máquina Windows e orquestração generativa, e cada etapa usa Copilot Credits. Máquinas hospedadas se adequam a protótipos; use a sua própria em produção.

## Step 10 · Computer use: set guardrails, watch every run

[serious] Um agente que clica pelas telas precisa de proteções. Roda em uma máquina dedicada e limite o que ele pode tocar com uma lista de permissão.
[600ms]
[concerned] Deixe a pessoa intervenir quando estiver incerta, mas não confie só nisso. Supervisão é probabilística, e a lista de permissão não impede o modelo de abrir um site.
[600ms]
[reassuring] Depois, revise cada execução no Activity, com transcrição e replay da sessão. Os registros de execução vão para Dataverse e ficam guardados por sete dias.

## Step 11 · Which route should I pick?

[calm] Comece pelo que o agente precisa, não pela tecnologia. Escolha uma necessidade e você verá o caminho, quando escolhê-lo e o que observar.
[600ms]
[confident] A regra é simples. Use uma fonte de conhecimento para ler.
[600ms]
[determined] Use um conector, um REST API ou um servidor MCP para chamar um serviço. E escolha usar o computador apenas quando nada mais conseguir se conectar.

## Step 12 · Knowledge and tools: all in one

[calm] Vamos nos controlar. Leia com conhecimento, aja com ferramentas.
[600ms]
[confident] Escolha a rota mais leve que funcione e supervisione a mais pesada, que é o uso do computador.
[600ms]
[proud] Para o exame, A B 620, Integrar e estender agentes em Copilot Studio, é de quarenta a quarenta e cinco por cento. Essas rotas abrangem a conexão com fontes de conhecimento e adição de ferramentas.
