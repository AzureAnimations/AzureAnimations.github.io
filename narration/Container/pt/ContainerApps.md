# Roteiro de narração — Azure Containers · 04 · Azure Container Apps

**Source animation:** `static/v2/Container/ContainerApps.html`

---

## Step 1 · problem

[confident] A Contoso executava o contoso-orders versão um no Azure Container Instances, e funcionava… até deixar de funcionar.
[600ms]
[concerned] O ACI executa um conjunto fixo de contêineres: sem escalonamento automático, sem balanceador de carga, sem atualizações com zero tempo de inatividade.
[700ms]
[optimistic] Quando o tráfego dispara ou você precisa de versões seguras, você avança para o Azure Container Apps: contêineres serverless que escalam por você.

## Step 2 · replica

[confident] No Container Apps, seu aplicativo é executado como réplicas — cada réplica é o seu contêiner com CPU e memória próprias.
[600ms]
[calm] No plano de consumo, uma réplica recebe de um quarto a quatro vCPU, e de meio a oito gibibytes.
[700ms]
[impressed] Defina um mínimo e um máximo, e o Azure adiciona ou remove réplicas conforme a carga: de zero até mil.

## Step 3 · httpscale

[confident] Implante a imagem com o az containerapp create e anexe uma regra de escalonamento HTTP.
[600ms]
[calm] Defina um http concurrency of fifty, e o Container Apps adiciona uma réplica sempre que uma revisão ultrapassa esse limite.
[700ms]
[impressed] Os clientes chamam um único endereço — o FQDN — e o ingress integrado roteia cada solicitação apenas para réplicas saudáveis.

## Step 4 · revision

[confident] Mude o aplicativo — uma nova imagem, configuração ou variável de ambiente — e você recebe uma nova revisão imutável.
[600ms]
[calm] No modo único, o Container Apps transfere o tráfego da revisão antiga para a nova automaticamente.
[700ms]
[reassuring] No modo múltiplo, você divide o tráfego por peso — blue-green ou canary — assim, uma implantação ruim simplesmente permanece na antiga.

## Step 5 · ingress

[confident] Ative o ingress e seu aplicativo ganha um ponto de extremidade HTTPS: sem balanceador de carga nem IP público para criar.
[600ms]
[calm] O ingress externo fica voltado para a internet; o ingress interno só é acessível dentro do environment.
[700ms]
[intrigued] Dentro desse environment, os aplicativos se encontram pelo nome: chame http://payments, e o tráfego nunca sai.

## Step 6 · serverless

[confident] Aqui, o escalonamento automático é movido pelo KEDA: escala conforme HTTP, CPU e memória, ou eventos, até chegar a zero.
[600ms]
[impressed] Esses gatilhos de evento incluem Service Bus, Event Hubs, Kafka e Redis: você não paga nada enquanto os aplicativos dormem.
[700ms]
[optimistic] Adicione um sidecar Dapr opcional e seus aplicativos ganham invocação de serviço, estado e pub/sub, sem infraestrutura extra.

## Step 7 · control

[confident] O Container Apps é deliberadamente gerenciado e opinativo — você nunca toca nos nós, na Kubernetes API ou nas atualizações do cluster.
[600ms]
[calm] Essa é a ideia: você se concentra no aplicativo e o Azure opera a plataforma.
[700ms]
[curious] Mas quando você precisa de pools de nós, da Kubernetes API completa, de rede personalizada e de operadores, a última parada é o Azure Kubernetes Service.

## Step 8 · recap

[proud] Então traga uma imagem, e o Container Apps a executa como réplicas serverless com escalonamento automático.
[600ms]
[encouraging] Revisões para implantações seguras, ingress para o tráfego, KEDA e Dapr integrados: o poder do Kubernetes sem as operações.
[700ms]
[optimistic] E quando você realmente precisa de controle em nível de nó, a parada final desta jornada é o Azure Kubernetes Service: controle total do cluster.
