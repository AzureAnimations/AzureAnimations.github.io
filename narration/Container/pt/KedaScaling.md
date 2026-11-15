# Narrator Script — Containers · KEDA scaling in Container Apps — Azure Containers

**Source animation:** [KedaScaling.html](../../../journeys/Container/KedaScaling.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/scale-app>
- <https://learn.microsoft.com/azure/container-apps/jobs>
- <https://learn.microsoft.com/azure/container-apps/metrics>
- <https://learn.microsoft.com/azure/container-apps/log-monitoring>

---

## Step 1 · A burst the CPU can’t see

[calm] O processador de pedidos da Contoso fica parado, até que uma promoção relâmpago joga centenas de mensagens na fila em um único minuto.
[600ms]
[concerned] Uma réplica fica para trás, mas a CPU dela parece tranquila, porque o worker passa a maior parte do tempo esperando uma API de pagamento.
[600ms]
[confident] Então a CPU é o ponto cego. O sinal que importa é o tamanho da fila, e é nele que devemos basear a escala.

## Step 2 · Three kinds of scale rule

[curious] Uma regra de escala diz ao Container Apps quando adicionar réplicas. Existem três tipos: HTTP, TCP e personalizada.
[600ms]
[calm] As regras HTTP e TCP contam o tráfego ao vivo. Uma regra personalizada conecta qualquer escalador do KEDA, como uma fila.
[600ms]
[confident] Com várias regras, a primeira condição atendida inicia a escala. E se você não definir nenhuma, uma regra HTTP padrão escala entre zero e dez réplicas.

## Step 3 · The control loop: queue, KEDA, replicas

[calm] Este é o ciclo. O KEDA consulta a origem dos eventos, calcula de quantas réplicas o backlog precisa, e a plataforma adiciona ou remove réplicas para acompanhar.
[600ms]
[curious] Uma regra personalizada consulta a origem a cada trinta segundos, por padrão. As regras HTTP e TCP não fazem consulta, porque a própria plataforma mede esse tráfego.
[600ms]
[reassuring] O seu código nunca conversa com o escalador. Ele só processa mensagens.

## Step 4 · Limits and the replica math

[curious] Você diz ao KEDA quantas mensagens cada réplica deve tratar. Ele divide o backlog por esse número e arredonda para cima.
[600ms]
[calm] Depois, os seus limites de réplicas mínimas e máximas restringem o resultado. Por padrão, esses limites são zero e dez.
[600ms]
[serious] Lembre-se: o número de réplicas é uma meta, não uma garantia. O scale-out real cresce em etapas, ao longo de várias consultas, até chegar ao seu máximo.

## Step 5 · Scale to zero, and the cold start

[calm] Com o mínimo de réplicas em zero, uma fila vazia termina com zero réplicas e sem cobrança de uso.
[600ms]
[concerned] O preço é o cold start. A primeira mensagem depois de um período parado espera enquanto uma réplica inicia.
[600ms]
[confident] O período de cooldown, de trezentos segundos por padrão, só vale na passagem da última réplica para zero. Com zero réplicas, não há processo para medir, então é a origem dos eventos que acorda o app.

## Step 6 · A Service Bus scale rule, field by field

[calm] Agora vamos ver uma regra de verdade. Uma regra personalizada informa o tipo de escalador do KEDA, aqui o Azure Service Bus, além dos metadados dele.
[600ms]
[curious] Os metadados dizem qual fila monitorar, em qual namespace e quantas mensagens cada réplica deve tratar.
[600ms]
[confident] Uma fila do Storage segue a mesma ideia, com o nome da conta, o nome da fila e o tamanho da fila. Os valores na tela são fictícios.

## Step 7 · How the scaler signs in

[curious] O KEDA precisa ler o tamanho da fila, então a regra precisa de credenciais.
[600ms]
[calm] Você pode passar um segredo, referenciado na regra. Ou deixar uma identidade gerenciada fazer o login, sem nada para guardar nem rotacionar.
[600ms]
[serious] Com uma connection string do Service Bus, a política de acesso compartilhado precisa ser do tipo Manage. Com uma identidade gerenciada, essa identidade precisa ter permissão para ler a fila.

## Step 8 · Cron: scale by the clock

[curious] Às vezes, o pico é previsível. Uma regra cron aumenta as réplicas durante uma janela de tempo e depois as libera.
[600ms]
[calm] Você informa um fuso horário, um início, um fim e o número de réplicas a manter nesse intervalo.
[600ms]
[serious] Início e fim não podem ser iguais, e o mínimo de réplicas deve ficar em zero fora da janela. Combine com uma regra de fila, para que os picos inesperados continuem cobertos.

## Step 9 · Try it: the live scale simulator

[excited] Sua vez. Escolha uma regra, arraste a carga e veja o número de réplicas acompanhar a conta.
[600ms]
[curious] Teste um backlog grande com o máximo em cinco, depois teste carga zero com o mínimo em zero, e depois com o mínimo em um.
[600ms]
[reassuring] Tudo aqui é fictício e calculado na própria página. Ela mostra onde o app se estabiliza, enquanto o scale-out real cresce ao longo de várias consultas.

## Step 10 · Apps scale replicas, jobs run executions

[calm] Um app mantém réplicas rodando, e cada réplica vai consumindo os eventos da origem.
[600ms]
[curious] Um job orientado a eventos é diferente. Ele inicia uma execução por evento, roda até terminar e para.
[600ms]
[confident] Escolha um job quando cada evento precisar do próprio contêiner ou rodar por muito tempo. Os jobs usam os mesmos escaladores do KEDA, mas a regra decide quantas execuções iniciar.

## Step 11 · Verify it scales, and find what’s wrong

[calm] Para verificar, adicione algumas mensagens de teste e depois acompanhe a métrica de número de réplicas e os logs do sistema.
[600ms]
[concerned] Se nada acontecer, percorra o ciclo em ordem: a fila, as credenciais, a regra e os limites.
[600ms]
[serious] Mais uma armadilha. Com o ingress desativado, sem réplicas mínimas e sem regra, o app escala para zero e não tem como iniciar de novo. E editar uma regra de escala cria uma nova revisão.

## Step 12 · Burst out, then back to zero

[calm] Vamos resumir. Você precisa de uma regra, um limite por réplica, limites mínimo e máximo e credenciais.
[600ms]
[proud] O KEDA faz as consultas, e a plataforma faz a escala. A Contoso escala para cima na promoção relâmpago e depois volta a zero.
[600ms]
[reassuring] Essa é uma habilidade avaliada na A I 200. Pratique com o simulador e depois abra o guia de estudo oficial.
