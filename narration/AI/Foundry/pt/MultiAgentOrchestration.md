# Narrator Script — Foundry · Multi-Agent Orchestration

**Source animation:** [MultiAgentOrchestration.html](../../../../journeys/AI/Foundry/MultiAgentOrchestration.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/agent-framework/workflows/orchestrations/>
- <https://learn.microsoft.com/azure/architecture/ai-ml/guide/ai-agent-design-patterns>
- <https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept>
- <https://learn.microsoft.com/agent-framework/workflows/human-in-the-loop>

---

## Step 1 · One agent, too many hats

[calm] Em Contoso Retail, um agente chamado Helper lida sozinho com todas as dúvidas sobre devoluções: pedidos, política, reembolsos e e-mails.
[600ms]
[concerned] Isso significa um prompt, uma pilha de ferramentas e um contexto crescente.
[600ms]
[reflective] Quanto mais chapéus ele usar, mais difícil é mantê-lo confiável.

## Step 2 · Three reasons to split the job

[curious] A solução é dar a cada agente uma tarefa, com um prompt focado, apenas as ferramentas necessárias e apenas o contexto que ele utiliza.
[600ms]
[calm] Você pode até dimensionar o modelo para a tarefa.
[600ms]
[confident] Aprenda três motivos: especialização, otimização e fronteiras de segurança separadas.

## Step 3 · When one agent is enough

[calm] Antes de separar qualquer coisa, comece pela coisa mais simples que funciona.
[600ms]
[serious] Cada degrau na escada adiciona coordenação, latência, custo e novas formas de falhar.
[600ms]
[reassuring] Use o menor nível de complexidade que atenda de forma confiável aos seus requisitos.

## Step 4 · In a line, or side by side

[curious] A orquestração sequencial executa agentes um após o outro, cada um construindo sobre o anterior.
[600ms]
[calm] O concorrente executa agentes na mesma entrada ao mesmo tempo, então uma etapa final combina suas respostas.
[600ms]
[confident] Ambos estão integrados Microsoft Agent Framework. Use sequencialmente quando a ordem importa, e concorrente quando os trabalhos são independentes.

## Step 5 · Who decides who goes next?

[curious] Em uma troca, o agente ativo passa toda a tarefa para um colega mais adequado, sem chefe central.
[600ms]
[calm] No grupo de chat e na Magentic, um gerente escolhe quem atua em seguida, e a Magentic adiciona um gerente de planejamento por cima.
[600ms]
[serious] A clássica ferramenta Connected Agents não está disponível no novo Foundry Agent Service, então use fluxos de trabalho, Agent Framework ou a ferramenta A2A.

## Step 6 · How agents pass context

[curious] Cada agente adiciona seu próprio raciocínio e resultados de ferramentas. Passe tudo adiante, e o contexto cresce.
[600ms]
[calm] Passe apenas um resumo e ele permanece enxuto. Os tamanhos das barras aqui são apenas ilustrativos.
[600ms]
[reflective] Por padrão, cada agente em uma sequência consome toda a conversa do agente anterior, embora você possa passar apenas as respostas dele. Fluxos de trabalho também oferecem estado compartilhado.

## Step 7 · Tools: the agent asks, your code acts

[curious] Com a chamada de função, o agente pede uma função de ordem get com ordem de mil oito, quarenta e dois.
[600ms]
[calm] Seu código executa a função e retorna o resultado.
[600ms]
[confident] O agente então usa esse resultado para finalizar sua resposta. O agente pergunta, mas seu código faz a atuação.

## Step 8 · Sensitive tools pause for a human

[serious] Marque ferramentas arriscadas como aprovação necessária. Quando um agente chama uma, a execução pausa.
[600ms]
[calm] Um pedido mostra a ferramenta e seus argumentos, e uma pessoa decide.
[600ms]
[concerned] O construtor visual de fluxos de trabalho do Foundry está em prévia e será desativado em 1º de dezembro de vinte e vinte e seis, então novos projetos devem usar o Microsoft Agent Framework.

## Step 9 · You are the approver

[curious] Agora é sua vez. O agente de reembolso quer reembolsar duzentos e quarenta dólares no pedido dezoito e quarenta e dois, e a corrida é pausada.
[600ms]
[calm] Escolha Aprovar ou Rejeitar e observe o ramo do fluxo de trabalho.
[600ms]
[encouraging] Depois tente a outra opção, assim você vê os dois caminhos.

## Step 10 · Read the whole run as a trace

[calm] Um traço registra cada etapa de uma execução em ordem: chamadas de modelo, chamadas de ferramenta, tokens e tempo.
[600ms]
[curious] Em uma equipe, mostra qual agente fez o quê e onde as coisas deram errado.
[600ms]
[reassuring] Foundry armazena rastros em Application Insights, e o rastreamento geralmente está disponível para agentes prompts e hospedados.

## Step 11 · Where teams go wrong, and the guardrails

[serious] Mais agentes significam mais formas de falhar. Então, nomeie primeiro a falha, depois adicione o controle que a detecta.
[600ms]
[calm] Defina limites de iteração com um plano B, como um humano, mantenha os grupos de chat com três agentes ou menos, e monitore tokens por agente.
[600ms]
[confident] Atribua modelos por tarefa e valide cada saída antes que o próximo agente a utilize.

## Step 12 · Multi-agent orchestration at a glance

[calm] É um único trabalho, compartilhado por uma pequena equipe de agentes que foca em uma única coisa.
[600ms]
[reassuring] Um humano no loop onde realmente importa, e um traço para mostrar o que aconteceu.
[600ms]
[proud] Foi assim que o Helper se tornou uma equipe em que você realmente pode confiar.
