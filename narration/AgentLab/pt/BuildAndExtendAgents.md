# Narrator Script — Build and extend an AI agent

**Source animation:** [BuildAndExtendAgents.html](../../../journeys/lab-guide/AgentLab/BuildAndExtendAgents.html)
**Language:** pt

Delivery cues and pause positions follow the English script; cues are not spoken.
Localized narration prepared for a later localization and recording pass; the animation currently offers English only.

Sources: [Companion lab](https://ivorb.github.io/mslearn-ai-agents/Instructions/Exercises/A-build-and-extend-ai-agents.html), [Foundry agents](https://learn.microsoft.com/azure/ai-foundry/agents/overview), [Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

---
## Step 1 · The problem

[curious] Tailwind Traders já tem um modelo de linguagem. O que não tem é um assistente.

[500ms]

Pergunte sobre a política de devolução de uma barraca e a resposta chega instantaneamente — trinta dias, noventa dias, sem necessidade de recibo. Fluente, confiante e completamente inventado.

[700ms]

[calm] O modelo não está quebrado. Ele simplesmente nunca leu a política da loja da Tailwind, então preenche essa lacuna com algo plausível. Esse é o problema que este laboratório precisa resolver.

## Step 2 · Lab at a glance

[confident] Seis tarefas, um assistente.

[400ms]

Duas tarefas são essenciais. Crie um agente no portal, dê a ele seus documentos como fonte e conecte-o a um servidor MCP remoto. Em cerca de trinta e cinco minutos, você terá um agente que usa ferramentas.

[600ms]

As outras quatro são opcionais: chamar o agente pelo seu aplicativo, acrescentar código Python próprio, hospedar seu servidor de ferramentas e implantar o conjunto como um agente hospedado.

[500ms]

[encouraging] Escolha conforme o tempo disponível: apenas as essenciais, as essenciais e as duas recomendadas, ou todas as tarefas.

## Step 3 · The blueprint

[calm] Antes da primeira tarefa, aqui está o formato do que você está montando.

[400ms]

Um agente, quatro peças. Instruções que dizem quem é. Conhecimento, extraído dos seus próprios documentos. Ferramentas, para que ele possa ir além do que já sabe. E um aplicativo cliente, onde as pessoas realmente conversam com ele.

[700ms]

[confident] Cada tarefa acrescenta ou melhora uma dessas peças. Use este mapa como referência enquanto completa o restante do laboratório.

## Step 4 · How the pieces fit together

[confident] É aqui que tudo realmente vive.

[400ms]

Seu código roda no computador: o chat, o cliente, as funções e seu servidor. O agente, o conhecimento e as definições de ferramentas ficam no Microsoft Foundry. Os documentos e o servidor de documentação do Learn ficam fora dos dois.

[600ms]

[calm] Cada distintivo marca a tarefa que constrói essa peça. Escolha uma tarefa para adicionar o que ela constrói e escolha novamente para tirá-la — assim você pode ver exatamente o que cada uma muda.

## Step 5 · Explore each task

[encouraging] Agora escolha uma tarefa e olhe dentro dela.

[400ms]

Cada painel mostra as mesmas três coisas: o que você constrói, o que pode fazer quando estiver pronto, e o erro que pega a maioria das pessoas.

[600ms]

[calm] As tarefas principais são os botões sólidos, os opcionais são delineados. Cada tarefa é independente e começa na mesma pasta — então comece onde quiser, na ordem que preferir.

## Step 6 · One assistant, six tasks

[confident] Um assistente, seis tarefas, todos os componentes no lugar.

[500ms]

As duas tarefas essenciais criam um agente que responde com base nos seus documentos e chama uma ferramenta externa, com informação fundamentada e capacidade de agir.

[600ms]

As quatro tarefas opcionais acrescentam seu aplicativo, seu código Python e seu servidor MCP, executados em um contêiner que o Foundry gerencia por você.

[700ms]

[warm] O conhecimento é o que torna isso preciso. Ferramentas são o que o torna útil. Agora vá e construa.
