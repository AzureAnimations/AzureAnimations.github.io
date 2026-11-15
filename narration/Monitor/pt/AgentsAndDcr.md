# Narrator Script — Monitor · Agents and Data Collection Rules

**Source animation:** [AgentsAndDcr.html](../../../journeys/Monitor/AgentsAndDcr.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview>
- <https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview>
- <https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-transformations>
- <https://learn.microsoft.com/azure/azure-monitor/vm/data-collection>

---

## Step 1 · Azure sees the box, not what’s inside

[calm] Conheça vm-web-01, uma máquina virtual da Contoso. O Azure coleta sozinho as métricas do host dela: CPU, rede e disco.
[600ms]
[concerned] Mas, dentro do sistema operacional convidado, os eventos do Windows, os contadores de desempenho e os logs continuam no escuro.
[600ms]
[confident] Ver a máquina por fora não é o mesmo que ver o que roda dentro dela. Os dados do convidado exigem uma configuração extra.

## Step 2 · An agent reads from the inside

[curious] Um software rodando dentro da máquina consegue ler o que a plataforma não consegue.
[600ms]
[confident] O Azure Monitor Agent coleta dados do sistema operacional convidado de máquinas do Azure e híbridas e os entrega ao Azure Monitor.
[600ms]
[reassuring] Sem um agente, você só consegue coletar dados do host.

## Step 3 · One agent to know: Azure Monitor Agent

[calm] Antes, havia vários agentes. Agora, só existe um para conhecer: o Azure Monitor Agent, ou AMA.
[600ms]
[serious] Ele substitui o agente do Log Analytics, também chamado de MMA ou OMS, que a Microsoft aposentou em 31 de agosto de 2024.
[600ms]
[encouraging] Se você está migrando, o workbook Migration Helper e o DCR Config Generator transformam as configurações antigas de workspace em regras de coleta de dados.

## Step 4 · Getting the agent onto machines

[curious] Há três jeitos de instalar o agente. Instale pelo portal, traga máquinas de fora com o Azure Arc ou deixe o Azure Policy fazer isso em escala.
[600ms]
[confident] Depois de rodando, o agente se autentica com a identidade gerenciada da máquina.
[600ms]
[reassuring] Tanto a identidade atribuída pelo sistema quanto a atribuída pelo usuário funcionam, e a atribuída pelo usuário é a mais indicada para implantações grandes.

## Step 5 · A rule decides: the data collection rule

[curious] Aqui está a ideia principal. O agente não escolhe o que coletar.
[600ms]
[confident] Uma regra de coleta de dados, ou DCR, diz o que coletar, como dar forma aos dados e para onde enviá-los.
[600ms]
[calm] A DCR é configuração, não um pipe. O agente a baixa, e o Azure Monitor a aplica.

## Step 6 · Four parts make up a DCR

[calm] Uma DCR tem quatro partes. As fontes de dados dizem o que coletar.
[600ms]
[confident] Os streams carregam os dados em um formato conhecido, e uma transformação opcional os filtra. Os destinos dizem onde eles vão parar.
[600ms]
[curious] Por exemplo, os eventos do Windows usam o stream Microsoft Event e vão para a tabela Event. Os contadores vão para a tabela Perf.

## Step 7 · Filter before you pay

[curious] Uma transformação é uma instrução KQL que filtra ou remodela os dados antes de eles serem ingeridos no workspace.
[600ms]
[confident] Descarte o que você nunca leria, e há menos para ingerir e menos para armazenar.
[600ms]
[calm] As transformações em tempo de ingestão rodam no Azure Monitor. As de vários estágios, ainda em prévia, também podem rodar no agente e reduzir o tráfego de rede.

## Step 8 · One rule, many machines

[calm] Uma DCR não faz nada até que uma associação a ligue a uma máquina, e essa é a peça que falta aqui.
[600ms]
[confident] Uma DCR pode atender várias máquinas, e uma máquina pode seguir várias DCRs. No geral, é uma relação de muitos para muitos.
[600ms]
[reassuring] Remova uma associação, e essa coleta para.

## Step 9 · Compose your own DCR

[excited] Agora é a sua vez. Ligue e desligue fontes de dados e destinos.
[600ms]
[confident] O fluxo e um resumo simplificado da DCR se atualizam conforme você avança.
[600ms]
[curious] Repare nos limites: o syslog é só do Linux, os eventos do Windows são só do Windows, e os contadores de desempenho também podem ir para métricas, em prévia.

## Step 10 · Platform logs take another road

[calm] Os recursos do Azure enviam dados da plataforma sem nenhum agente. Aqui, um Key Vault faz isso sozinho, e esse é o ponto.
[600ms]
[confident] Uma configuração de diagnóstico escolhe quais dados exportar e para onde eles vão: um workspace, uma conta de armazenamento ou um hub de eventos.
[600ms]
[serious] Os logs de recurso só são coletados depois que você cria uma configuração. Só as métricas da plataforma e o log de atividades chegam sozinhos.

## Step 11 · The quick start: VM insights

[curious] Quer o caminho rápido? Ative o VM insights, e o Azure cuida de toda a ligação.
[600ms]
[confident] Ele instala o agente e cria uma DCR com um conjunto predefinido de dados.
[600ms]
[reassuring] Quer mais? Não modifique essa DCR. Crie as suas próprias DCRs para coletar mais.

## Step 12 · Agents and DCRs in one view

[calm] Dados do convidado precisam de um agente. A regra de coleta de dados decide o quê, como e onde.
[600ms]
[confident] As associações ligam as regras às máquinas, e os dados da plataforma usam configurações de diagnóstico.
[600ms]
[proud] Fique com essas quatro ideias na cabeça, e você consegue explicar exatamente como os dados chegam ao Azure Monitor.
