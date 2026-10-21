# Narrator Script — Architect · Design logging and monitoring

**Source animation:** [DesignMonitoring.html](../../../journeys/Architect/DesignMonitoring.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/overview>
- <https://learn.microsoft.com/azure/azure-monitor/fundamentals/data-sources>
- <https://learn.microsoft.com/azure/azure-monitor/logs/data-platform-logs>
- <https://learn.microsoft.com/azure/azure-monitor/logs/workspace-design>
- <https://learn.microsoft.com/azure/azure-monitor/platform/diagnostic-settings>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types>
- <https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups>
- <https://learn.microsoft.com/azure/sentinel/overview>

---

## Step 1 · An outage, and logs in five places

[calm] As ordens de Contoso falharam da noite para o dia, e as pistas estão espalhadas por vários tipos de telemetria.
[600ms]
[curious] Plataforma, recurso, identidade, sistema operacional convidado e sinais de aplicação não chegam todos pelo mesmo caminho de coleta.
[600ms]
[reassuring] Antes de escolher um painel, identifique o que cada fonte produz e como esses dados chegarão ao projeto de monitoramento.

## Step 2 · Azure Monitor: metrics and logs

[calm] O Azure Monitor trabalha tanto com métricas numéricas quanto com registros de logs detalhados, mostrados como dois caminhos complementares.
[600ms]
[curious] Métricas ajudam Contoso a perceber rapidamente uma mudança; os logs fornecem o contexto necessário para investigá-la.
[600ms]
[reassuring] Use os dois juntos: detectar o sintoma com um alerta apropriado e depois seguir os registros para entender o que aconteceu.

## Step 3 · Log Analytics: one workspace or many?

[calm] Um espaço de trabalho de Log Analytics oferece à Contoso um local para consultar os logs coletados.
[600ms]
[curious] Comece com o menor número possível de espaços de trabalho que os requisitos permitirem, depois examine os motivos apresentados para separá-los.
[600ms]
[reassuring] Residência, propriedade e outros limites podem justificar uma divisão, mas criar um espaço de trabalho para cada fonte também gera sobrecarga de gestão e consultas.

## Step 4 · Table plans: pay for the query you need

[calm] Cada tabela tem um plano, e o plano certo depende de como a Contoso pretende usar os dados.
[600ms]
[curious] Compare Analytics para monitoramento regular, Basic para resolução de problemas e Auxiliary para registros detalhados menos consultados.
[600ms]
[reassuring] Observe as necessidades de ingestão e consulta juntos, em vez de escolher um plano apenas porque a taxa de ingestão parece menor.

## Step 5 · Route logs with diagnostic settings

[calm] Uma configuração de diagnóstico direciona os logs e métricas de um recurso para os destinos mostrados aqui.
[600ms]
[curious] Um espaço de trabalho suporta investigação, armazenamento suporta retenção, e Event Hubs suporta integração de streaming.
[600ms]
[reassuring] Escolha os destinos pelo trabalho que cada cópia deve fazer e lembre-se de que logs de recursos precisam de sua coleta e roteamento configurados.

## Step 6 · Application Insights and VM insights

[calm] A aplicação de loja e a máquina virtual em lote precisam de diferentes tipos de instrumentação.
[600ms]
[curious] Application Insights acompanha o comportamento da aplicação, enquanto VM insights coleta os sinais em nível de máquina necessários para entender o servidor.
[600ms]
[reassuring] Seus dados podem se reunir no mesmo espaço de trabalho, conectando um sintoma de aplicação à infraestrutura da qual ele depende.

## Step 7 · Alerts and action groups

[calm] A regra do alerta decide quando um sinal é importante o suficiente para agir.
[600ms]
[curious] O grupo de ação cuida do próximo passo: notificar as pessoas ou invocar uma resposta automática.
[600ms]
[reassuring] Mantenha essas responsabilidades separadas, para que a Contoso possa reutilizar o caminho de resposta enquanto escolhe o tipo certo de regra para cada sinal.

## Step 8 · Microsoft Sentinel: the SIEM on your workspace

[calm] O Microsoft Sentinel adiciona capacidades de detecção e resposta de segurança em torno dos dados do espaço de trabalho.
[600ms]
[curious] Siga a sequência desde a coleta de sinais até a detecção de ameaças, investigação de incidentes e execução de respostas.
[600ms]
[reassuring] Isso é mais do que mais uma tela de busca em log: o design deve suportar o fluxo de trabalho de detecção e manejo de incidentes da equipe de segurança.

## Step 9 · All in one: from signal to action

[calm] O projeto de monitoramento agora conecta sinais às ações em vez de deixar as evidências em locais separados.
[600ms]
[curious] Contoso escolheu o que coletar, como roteá-lo, onde mantê-lo e o que irá responder.
[600ms]
[reassuring] Essas quatro decisões tornam possível a solução de problemas; em seguida, decida como o negócio vai se recuperar quando um incidente se tornar uma falha.

