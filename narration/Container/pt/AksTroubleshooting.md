# Narrator Script — Containers · Troubleshoot AKS: pod not running

**Source animation:** [AksTroubleshooting.html](../../../journeys/Container/AksTroubleshooting.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/aks/monitor-aks>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/welcome-azure-kubernetes>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/create-upgrade-delete/pod-stuck-crashloopbackoff-mode>
- <https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-scheduler-errors>

---

## Step 1 · My pod is not running. Which command shows me why?

[calm] A Contoso Shop está rodando no AKS. Quatro pods deveriam estar no ar, mas um deles não está.
[600ms]
[concerned] A Mina está de plantão e precisa descobrir o motivo, rápido.
[600ms]
[confident] Os nomes e a saída do terminal aqui são todos inventados, mas mostram o padrão que os clusters reais seguem.

## Step 2 · The troubleshooting loop

[calm] É um ciclo de cinco movimentos, sempre na mesma ordem.
[600ms]
[confident] Leia o estado, descreva o pod, confira os eventos, leia os logs e depois corrija e olhe de novo.
[600ms]
[reassuring] O describe já inclui uma seção de Events, então muitos problemas terminam no segundo movimento. Os outros comandos servem para quando você precisa de mais detalhes.

## Step 3 · Move 1 · What state is the pod in?

[calm] O primeiro movimento é o kubectl get pods. Ele lista todos os pods com READY, STATUS e RESTARTS.
[600ms]
[curious] A palavra em STATUS já indica o tipo de problema. E READY zero de um significa que nenhum contêiner do pod está pronto ainda.
[600ms]
[confident] Acrescente traço A maiúsculo para listar os pods de todos os namespaces, ou traço n para listar só os de um.

## Step 4 · Move 2 · Describe it, then read the Events

[calm] O segundo movimento é o kubectl describe pod. Ele mostra o estado de cada contêiner, o último estado, o código de saída e o número de reinicializações.
[600ms]
[curious] No final está a seção Events, que é o diário do próprio pod.
[600ms]
[confident] Leia essa seção primeiro. Ela lista o que o Kubernetes tentou fazer, como agendar, baixar a imagem, iniciar e reiniciar, e o que deu errado.

## Step 5 · Move 3 · Read the events, oldest to newest

[calm] O terceiro movimento é ler os eventos do namespace. O Kubernetes registra o que tentou: agendou, baixou, iniciou, entrou em backoff.
[600ms]
[curious] Ordenados por horário, eles contam a história do que aconteceu com o pod.
[600ms]
[serious] Cada evento é Normal ou Warning. Comece pelos eventos Warning, porque são eles que dão as pistas.

## Step 6 · Move 4 · Read the logs, even from the crashed run

[calm] O quarto movimento é o kubectl logs, que mostra o que o app imprimiu.
[600ms]
[concerned] Mas um contêiner em crash loop tem um log novo, quase vazio, depois de cada reinicialização.
[600ms]
[confident] Acrescente traço traço previous para ler a execução que falhou. As últimas palavras dela estão lá.

## Step 7 · Each failure happens at one stage of a pod’s life

[calm] Toda falha acontece em uma etapa da vida de um pod. Descubra em que etapa o pod para, e você sabe que tipo de causa procurar.
[600ms]
[curious] A etapa aparece no STATUS e nos Events.
[600ms]
[confident] Pending quer dizer que o pod não chegou a um nó. ImagePullBackOff aponta para a imagem. CrashLoopBackOff e OOMKilled acontecem depois da inicialização.

## Step 8 · Triage simulator: pick a symptom

[curious] Hora de praticar. Escolha um sintoma que você possa encontrar.
[600ms]
[confident] O terminal executa os comandos que revelam a causa, e a correção provável aparece ao lado.
[600ms]
[encouraging] Tente os seis. A saída é fictícia, mas segue o formato que os comandos reais do kubectl produzem.

## Step 9 · When the node is the problem

[calm] Às vezes o problema nem é o pod. Um nó NotReady não consegue receber pods, então olhe para o nó.
[600ms]
[confident] O cordon impede que novos pods sejam alocados nele. O drain tira os que já estão rodando.
[600ms]
[reassuring] O AKS monitora a saúde dos nós e pode reparar automaticamente os que estão com problema. Ele também usa cordon e drain durante as atualizações.

## Step 10 · Where logs and events live in Azure

[calm] O kubectl mostra o cluster ao vivo. O Azure Monitor guarda o histórico, e assim você pode pesquisar depois que o pod já tiver sumido.
[600ms]
[serious] Os logs do plano de controle só são coletados depois que você cria uma configuração de diagnóstico.
[600ms]
[curious] O Container insights e o Prometheus gerenciado vêm ativados por padrão no AKS Automatic. No AKS Standard, você precisa ativá-los.

## Step 11 · kubectl debug: a shell on the node

[calm] Quando logs e eventos não bastam, inicie um pod de depuração no nó com o kubectl debug.
[600ms]
[serious] Ele roda um contêiner privilegiado, então use com cuidado. Dentro dele, rode chroot barra host para trabalhar no próprio nó.
[600ms]
[confident] Dê uma olhada e depois exclua o pod. Os nós Windows precisam da solução alternativa de SSH proxy descrita na documentação.

## Step 12 · Your pod-not-running playbook

[calm] Agora você tem um ciclo, um mapa do sintoma até a causa e os lugares onde o Azure guarda as evidências.
[600ms]
[confident] Esse é o roteiro para qualquer pod que não sobe.
[600ms]
[proud] Ele também corresponde a uma habilidade da A I 200: monitorar e solucionar problemas de soluções no AKS e no Container Apps, inspecionando logs, eventos e a conectividade de ponta a ponta.
