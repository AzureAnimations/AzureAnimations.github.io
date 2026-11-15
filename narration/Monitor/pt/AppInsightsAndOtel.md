# Narrator Script — Monitor · Application Insights and OpenTelemetry

**Source animation:** [AppInsightsAndOtel.html](../../../journeys/Monitor/AppInsightsAndOtel.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-sampling>
- <https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable>
- <https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview>

---

## Step 1 · A slow checkout across five services

[calm] Um cliente da Contoso toca em Pay, e a requisição passa por cinco serviços diferentes.
[600ms]
[concerned] Leva dois vírgula quatro segundos, o que é lento, mas cada serviço parece saudável quando você olha para ele sozinho.
[600ms]
[curious] Então, para onde foi o tempo? Essa é a pergunta que vamos seguir durante toda a lição, usando esta única requisição de checkout.

## Step 2 · Three signals, one trace ID

[calm] A telemetria vem em três tipos. Os traces acompanham uma única requisição, as métricas contam o que acontece ao longo do tempo, e os logs registram o que o código disse.
[600ms]
[curious] Sozinho, cada um é só um monte de dados. Um trace ID compartilhado é o que permite pular de um trace para os logs dele.
[600ms]
[impressed] Essa correlação transforma três montes em uma história só, porque o ID de um span é igual ao ID das linhas de log dele.

## Step 3 · The trace ID travels with the request

[calm] Siga um caminho pelo trace. Cada serviço adiciona o seu próprio span e depois repassa o contexto do trace no cabeçalho traceparent.
[600ms]
[confident] O trace ID continua o mesmo, enquanto o parent ID muda a cada salto. É assim que as peças continuam ligadas.
[600ms]
[reassuring] O cabeçalho vem do padrão W three C Trace Context, e as bibliotecas do OpenTelemetry leem e escrevem por você.

## Step 4 · Spans become a timeline

[calm] Um span é uma operação cronometrada. Ele tem um início, uma duração e um pai.
[600ms]
[curious] Alinhe os spans de um trace em um eixo de tempo, e você tem uma cascata. O aninhamento mostra quem chamou quem.
[600ms]
[confident] Um span pai dura pelo menos o mesmo tempo que os filhos que ele espera, então filhos lentos deixam os pais lentos.

## Step 5 · OpenTelemetry: instrument once, export anywhere

[calm] O OpenTelemetry é um padrão neutro em relação a fornecedores. A instrumentação cria a telemetria, e o SDK a processa.
[600ms]
[confident] Depois, um exporter a envia a um backend, como o Application Insights.
[600ms]
[optimistic] Como o formato é um padrão, trocar o backend significa trocar o exporter. Você não precisa instrumentar o app de novo.

## Step 6 · Auto-instrument first, add manual spans

[calm] Comece pela instrumentação automática. As bibliotecas de HTTP, bancos de dados e mensageria já criam spans para você.
[600ms]
[confident] Adicione spans ou atributos manuais só para as etapas que realmente são suas, como uma regra de preço no código do checkout.
[600ms]
[serious] Uma distro já traz a configuração pronta. Só não inicialize duas distros no mesmo app.

## Step 7 · Connect the app, land the data

[calm] O Application Insights é o recurso do Azure Monitor para monitoramento de desempenho de aplicações.
[600ms]
[confident] Uma connection string diz ao seu app para onde enviar a telemetria. O Application Insights então guarda esses dados em um workspace do Log Analytics.
[600ms]
[curious] Como os dados chegam a um workspace, você pode consultá-los com KQL, que tem a sua própria jornada.

## Step 8 · Application map: where is the trouble?

[curious] O mapa de aplicação desenha cada componente pelo nome do cloud role, com as chamadas entre eles.
[600ms]
[calm] A saúde aparece de relance, então um nó lento ou com falhas se destaca dos outros.
[600ms]
[confident] Comece por aqui para reduzir cinco serviços a um, e depois selecione esse nó para investigar as falhas ou o desempenho dele.

## Step 9 · Read the trace: end-to-end transaction

[calm] A busca encontra a transação que interessa. Abra-a, e a visão de ponta a ponta mostra os spans como um gráfico de Gantt.
[600ms]
[curious] Selecione qualquer barra de span, e você vê o que aquela operação conta: a duração, a chamada de dependência ou a exceção.
[600ms]
[impressed] Agora os dois vírgula quatro segundos têm um culpado, porque dá para ver qual span é o mais longo.

## Step 10 · Probe from outside, watch live

[calm] Um teste de disponibilidade chama o seu endpoint de vários locais. Ele avisa você quando o endpoint falha ou fica lento.
[600ms]
[confident] Os testes standard são a escolha atual e substituem os testes de ping de URL, que foram descontinuados.
[600ms]
[curious] O Live metrics mostra o que está acontecendo agora. Esses dados não ficam guardados, porque só são transmitidos enquanto o painel está aberto.

## Step 11 · Sampling keeps whole traces, not every trace

[calm] A amostragem reduz a quantidade de telemetria que você envia, e assim o custo fica sob controle.
[600ms]
[confident] O sampler do Application Insights mantém ou descarta um trace inteiro de uma vez, então todo trace que você mantém fica completo.
[600ms]
[serious] A amostragem de taxa fixa mantém uma porcentagem, e a amostragem com limite de taxa limita os traces por segundo. As métricas não são amostradas, então crie alertas nelas.

## Step 12 · All in one: follow the request

[calm] De volta ao checkout lento. Instrumente os serviços com o OpenTelemetry e envie a telemetria para o Application Insights.
[600ms]
[confident] Depois, leia o mapa de aplicação para achar o serviço com problema e abra a transação para achar o span lento.
[600ms]
[proud] É assim que você enxerga onde uma requisição lenta gastou o tempo, uma requisição de cada vez.
