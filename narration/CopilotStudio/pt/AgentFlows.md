# Narrator Script — Copilot Studio · Copilot Studio: Agent Flows

**Source animation:** [AgentFlows.html](../../../journeys/CopilotStudio/AgentFlows.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/microsoft-copilot-studio/flows-overview>
- <https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create>
- <https://learn.microsoft.com/microsoft-copilot-studio/flows-request-for-information>
- <https://learn.microsoft.com/microsoft-copilot-studio/flow-manage-monitor>

---

## Step 1 · A refund can’t be improvised

[curious] Contoso Support conversa bem. Mas um reembolso não é só um chat, é um processo com regras.
[600ms]
[serious] Ele precisa seguir os mesmos passos, na mesma ordem, todas as vezes.
[600ms]
[concerned] Se for deixado improvisar, um pedido de reembolso pode seguir vários caminhos diferentes, e isso é um risco.

## Step 2 · Agent flow or topic?

[calm] Ambos são determinísticos, então a mesma entrada sempre dá a mesma saída.
[600ms]
[confident] Um tema é construído para a conversa. Um fluxo de agente é criado para o processo de negócios que ocorre por trás dele.
[600ms]
[reflective] Uma boa regra geral: se o trabalho estiver conversando com o usuário, use um tópico. Se forem etapas, sistemas e pessoas, construa um fluxo de agentes.

## Step 3 · Create the flow

[calm] Você pode descrever um fluxo em linguagem cotidiana, ou construí-lo você mesmo no designer.
[600ms]
[confident] Um fluxo que o agente pode chamar começa com um gatilho e termina respondendo ao agente.
[600ms]
[encouraging] Crie isso na página de Ferramentas do agente, e Copilot Studio adiciona o gatilho e a ação de resposta para você.

## Step 4 · Inputs in, outputs out

[curious] O gatilho carrega parâmetros de entrada, e a ação de resposta carrega parâmetros de saída.
[600ms]
[confident] O agente preenche as entradas e depois lê as saídas quando o fluxo responde.
[600ms]
[serious] Se você mudar um parâmetro depois, atualize o fluxo no agente e republique. Uma incompatibilidade de esquema é uma causa comum de erro de solicitação ruim.

## Step 5 · Configure actions and connectors

[calm] Entre o gatilho e a resposta há uma faixa para suas ações, escolhida entre quatro famílias.
[600ms]
[confident] As ações do conector usam uma conexão para alcançar o serviço com o qual se comunicam.
[600ms]
[encouraging] Fluxos de agente são fluxos premium, então conectores premium também funcionam, seja Microsoft 365, terceiros ou personalizados.

## Step 6 · Hand the flow to the agent

[confident] Quando o fluxo atender aos quatro requisitos, publique-o. Depois adicione na página de Ferramentas do agente.
[600ms]
[curious] A descrição importa porque é assim que o orquestrador sabe quando chamá-lo.
[600ms]
[calm] Você pode adicioná-la no nível do agente para que o orquestrador chame diretamente, ou dentro de um tópico como um nó de Ação.

## Step 7 · Ask a human, then carry on

[curious] Às vezes, a resposta certa é uma pessoa. Uma ação humana no ciclo, uma aprovação ou um pedido de informação, interrompe o fluxo.
[600ms]
[confident] Pergunta a alguém, e então retoma a resposta.
[600ms]
[reflective] O agente só espera pela ação de resposta, então coloque a longa espera humana depois dela. As ações colocadas ali podem continuar funcionando, até o limite de fluxo de trinta dias.

## Step 8 · When a step fails

[concerned] As coisas falham. Há tempos de espera, dados são ruins, e um revisor às vezes nunca responde.
[600ms]
[confident] Selecione um ícone de aviso para ver como o fluxo reage em cada caso.
[600ms]
[reassuring] O padrão é agrupar as etapas principais em um osciloscópio Try e colocar a recuperação em um escopo Catch que roda quando o Try falha.

## Step 9 · Watch every run

[calm] Cada fluxo de agente possui uma visão geral, um histórico de atividades e uma visualização de Analytics.
[600ms]
[confident] Juntos, eles ajudam a corrigir falhas e identificar tendências entre as execuções.
[600ms]
[reflective] Lembre-se de que Analytics pode levar até trinta minutos para mostrar novas runs, e a análise de run é apenas para fluxos de solução.

## Step 10 · Agent flows: All in One

[calm] Vamos recapitular. Passos determinísticos mantêm o processo sempre o mesmo.
[600ms]
[confident] Uma pessoa intervém quando necessário, você planeja o fracasso e pode ver cada tentativa.
[600ms]
[proud] Essas seis habilidades são os objetivos de criar e monitorar fluxos de agentes no guia de estudo A B 620.
