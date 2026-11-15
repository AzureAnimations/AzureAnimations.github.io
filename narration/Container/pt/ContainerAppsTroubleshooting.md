# Narrator Script — Containers · Troubleshoot Container Apps: app not responding

**Source animation:** [ContainerAppsTroubleshooting.html](../../../journeys/Container/ContainerAppsTroubleshooting.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/container-apps/troubleshooting>
- <https://learn.microsoft.com/azure/container-apps/revisions>
- <https://learn.microsoft.com/azure/container-apps/log-streaming>
- <https://learn.microsoft.com/azure/container-apps/ingress-overview>

---

## Step 1 · The app is up but the URL fails: where to look first

[calm] O orders-api da Contoso aparece como Running no portal, mas a URL dele não responde.
[600ms]
[concerned] A Mina está de plantão, e um status verde não ajuda quando os clientes não veem nada.
[600ms]
[determined] O que ela precisa é de uma lista curta de lugares para verificar, em uma ordem que faça sentido. Vamos montar essa lista juntos.

## Step 2 · The troubleshooting loop for Container Apps

[confident] São cinco movimentos, sempre na mesma ordem. Leia o status da revisão, leia os logs, confira o ingress e confira as réplicas e as probes.
[600ms]
[calm] O quinto movimento é corrigir uma coisa e olhar de novo. Todo comando do Azure CLI aqui começa com az containerapp.
[600ms]
[reassuring] O portal tem as mesmas paradas, de Revision management até Diagnose and solve problems, então use o que preferir.

## Step 3 · Revision status and provisioning state

[curious] Cada implantação cria uma revisão, e a revisão conta a primeira parte da história.
[600ms]
[calm] O Provisioning status diz se a revisão passou nas verificações de inicialização e de prontidão. O Running status diz como estão as réplicas, como Running, Degraded ou Failed.
[600ms]
[confident] Quando o status parecer errado, abra os detalhes do Running status. Eles dão o motivo exato.

## Step 4 · Console logs versus system logs

[calm] Existem dois tipos de log. Os logs de console são o que o seu app imprime na saída padrão e no erro padrão.
[600ms]
[curious] Os logs de sistema são o que o serviço Container Apps diz sobre o seu app. O de sistema diz o que aconteceu; o de console diz por quê.
[600ms]
[reassuring] No portal, abra o Log stream e escolha Console ou System. Se aparecer que a revisão está escalada para zero, implante uma revisão com pelo menos uma réplica.

## Step 5 · Query ContainerAppConsoleLogs and ContainerAppSystemLogs with KQL

[calm] Com o Log Analytics, os seus logs vão para duas tabelas: uma para os logs de sistema e outra para os logs de console.
[600ms]
[confident] Filtre pelo nome do app e pelo nome da revisão e depois leia a coluna Log. Os logs de console também mostram qual réplica e qual imagem escreveu cada linha.
[600ms]
[encouraging] As mesmas consultas funcionam pela linha de comando, então você pode incluí-las em scripts na sua rotina de plantão.

## Step 6 · Ingress: external, internal, target port, IP restrictions

[calm] O ingress é um conjunto de regras na frente do seu app, então confira essas regras em ordem. Primeiro: ele está ativado?
[600ms]
[curious] Depois: quem pode acessá-lo? External significa de qualquer lugar, e internal significa só de dentro do ambiente do Container Apps. Em seguida: a porta de destino é a mesma porta em que o seu app escuta?
[600ms]
[serious] Por fim, veja se uma restrição de IP está bloqueando o cliente. Qualquer uma dessas coisas pode deixar um app saudável sem resposta.

## Step 7 · Replicas, probes and restarts

[curious] As health probes permitem que o Container Apps verifique cada réplica. Uma réplica que falha nelas não está saudável e pode ser reiniciada.
[600ms]
[concerned] Uma porta de probe errada, ou uma inicialização lenta, pode fazer um app bom parecer quebrado. Apps Java com inicialização demorada costumam precisar de um atraso inicial maior.
[600ms]
[confident] Com o ingress ativado, as probes padrão usam a porta de destino do ingress. Lembre-se: você só pode adicionar uma probe de cada tipo por contêiner.

## Step 8 · Scaling that never starts (min replicas, scale rule credentials)

[concerned] As mensagens esperam na fila, mas nenhuma réplica aparece. Isso é um problema de escala, e não de código.
[600ms]
[calm] Ou o número mínimo de réplicas é zero e nada acorda o app, ou a regra de escala não consegue ler a fonte de eventos.
[600ms]
[reassuring] As regras de escala entram com segredos ou com uma identidade gerenciada. Se você mudar um segredo, reinicie a revisão para ela pegar o valor novo.

## Step 9 · Triage simulator: pick a symptom

[excited] Agora é a sua vez. Escolha um sintoma, e o simulador mostra as evidências que você encontraria.
[600ms]
[curious] Cada sintoma vem com a primeira correção para tentar, e assim você vê o ciclo funcionar de ponta a ponta.
[600ms]
[reflective] Os nomes e a saída são fictícios. A saída real muda nos detalhes, mas o que importa é o padrão.

## Step 10 · Troubleshooting playbook

[confident] Agora você tem um ciclo para seguir, um mapa de cada sintoma até o primeiro suspeito e os lugares onde o Azure guarda as evidências.
[600ms]
[calm] As habilidades da A I 200 incluem monitorar e solucionar problemas de soluções no AKS e no Container Apps. Esta lição é a metade do Container Apps.
[600ms]
[proud] Da próxima vez que um app verde estiver com a URL muda, você vai saber exatamente onde olhar primeiro.
