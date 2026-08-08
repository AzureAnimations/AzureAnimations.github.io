# Roteiro de narração — Azure Containers · 05 · Azure Kubernetes Service

**Source animation:** `static/v2/Container/Kubernetes.html`

---

## Step 1 · arch

[confident] O Azure Kubernetes Service é Kubernetes gerenciado, e essa divisão é a ideia toda.
[600ms]
[calm] O Azure executa e escala o control plane para você — o API server, o etcd, o scheduler e os controladores — em um tier Free, Standard ou Premium.
[600ms]
[reassuring] Você é dono dos node pools por baixo: as VMs de trabalho onde seus Pods realmente rodam.
[700ms]
[confident] E você comanda tudo isso com uma única ferramenta: o kubectl, conversando com aquele API server gerenciado.

## Step 2 · nodepools

[confident] Esses nós vêm agrupados em node pools, e cada pool nada mais é que um Virtual Machine Scale Set de VMs idênticas.
[600ms]
[calm] Sempre há um system pool — só Linux — que hospeda serviços do cluster como o CoreDNS e o metrics-server.
[600ms]
[calm] Depois você adiciona user pools para os seus próprios apps, e esses podem ser Linux ou Windows.
[700ms]
[impressed] Cada pool escala por conta própria, até mil nós.

## Step 3 · pod

[confident] Agora vamos implantar o app. Cada Deployment declara quantas réplicas quer — frontend com duas, orders com três, backend com duas.
[600ms]
[calm] Nossa imagem de orders é a contoso-orders versão um, e a aplicamos com um único comando kubectl.
[600ms]
[intrigued] A partir daí o kube-scheduler assume, decidindo em qual nó cada Pod vai parar.
[700ms]
[reassuring] Ele espalha cada app pelos dois nós — então perder um nó nunca derruba o app.

## Step 4 · scale

[confident] O AKS escala de três formas diferentes, e vale a pena mantê-las claras.
[600ms]
[calm] O Horizontal Pod Autoscaler — o HPA — adiciona réplicas de Pods quando a CPU, a memória ou um evento do KEDA indicam que a demanda está subindo.
[600ms]
[calm] Quando esses Pods não cabem mais, o Cluster Autoscaler adiciona novos nós VM ao scale set — isso leva minutos.
[700ms]
[impressed] E para um pico repentino, os virtual nodes disparam Pods extras direto para o Azure Container Instances em segundos — serverless, pagamento por segundo.

## Step 5 · service

[confident] Os Pods são efêmeros — surgem e somem, a cada vez com um IP novo.
[600ms]
[calm] Por isso você nunca fala com um Pod diretamente. Um Service é a porta de entrada estável que faz o balanceamento entre os Pods saudáveis por trás dele.
[600ms]
[reassuring] Ele só envia tráfego para os Pods que passam nas sondas de readiness, liveness e startup.
[700ms]
[curious] São três tipos — ClusterIP, NodePort e LoadBalancer — cada um alcançando um pouco mais longe. Vamos vê-los um de cada vez.

## Step 6 · svcCip

[confident] Primeiro, o ClusterIP — e é o tipo padrão.
[600ms]
[calm] Ele dá aos seus Pods um endereço interno estável, para que frontend, orders e backend possam se chamar através dos nós — com segurança.
[700ms]
[serious] Mas repare no cartão vermelho: esse tráfego nunca sai do cluster. Nenhum usuário da internet consegue alcançar esses Pods.
[600ms]
[reassuring] É exatamente o que você quer para a comunicação privada, de Pod para Pod.

## Step 7 · svcNp

[confident] Em seguida, o NodePort — nosso primeiro passo rumo ao mundo externo.
[600ms]
[calm] Ele abre a mesma porta estática — em algum ponto da faixa de trinta mil a trinta e dois mil setecentos e sessenta e sete — no IP de cada nó.
[600ms]
[concerned] Mas aqui está o problema: com dois nós, você tem dois IPs públicos diferentes, e nenhum endereço estável único para distribuir.
[700ms]
[amused] Os nós vão e vêm, e seus IPs mudam junto. Serve para um teste rápido — mas o tráfego real quer uma entrada limpa.

## Step 8 · svcLb

[confident] E essa entrada limpa é um Service do tipo LoadBalancer.
[600ms]
[impressed] Escolha-o para o frontend, e o AKS provisiona automaticamente um IP público do Azure — um endereço único e estável.
[600ms]
[calm] Os usuários acessam esse único IP, e dentro do cluster o LoadBalancer espalha cada requisição pelos Pods saudáveis do frontend — pod um ou pod dois.
[700ms]
[reassuring] Privado, depois público mas bagunçado, agora um IP público com balanceamento. Esse é o percurso.

## Step 9 · ingress

[confident] Para um roteamento mais rico, você sobe para a camada sete.
[600ms]
[calm] O Application Gateway for Containers é um gateway hospedado no Azure — roteamento por host e por caminho, TLS, mTLS — cuidando do tráfego norte-sul que entra no cluster.
[600ms]
[calm] A malha de serviços Istio gerenciada cuida do tráfego leste-oeste, protegendo as chamadas entre seus serviços com mTLS.
[700ms]
[optimistic] Ambos se alinham com a Kubernetes Gateway API — o padrão para o qual o AKS está caminhando.

## Step 10 · why

[confident] Então, por que AKS? Porque o Kubernetes reconcilia constantemente a realidade com o seu estado desejado.
[600ms]
[reassuring] Ele se autorrecupera — reinicia os Pods que falham e os reagenda para fora dos nós mortos, automaticamente.
[600ms]
[impressed] Ele implanta atualizações com zero tempo de inatividade e rollback instantâneo para a última versão boa.
[700ms]
[confident] E no Azure você soma o Microsoft Entra ID com RBAC, integração com VNet via Azure CNI, e upgrades gerenciados.

## Step 11 · monitor

[confident] Por fim, você precisa ver o que está acontecendo — do jeito da CNCF.
[600ms]
[calm] O Prometheus coleta suas métricas, o Grafana as visualiza, o Jaeger rastreia requisições entre serviços, e o Kiali mapeia sua malha de serviços.
[600ms]
[reassuring] No Azure, o Prometheus gerenciado e o Grafana gerenciado significam que não há servidores para você operar.
[700ms]
[proud] Tudo de código aberto — apoiado pela CNCF, pela Linux Foundation e pela Microsoft.

## Step 12 · recap

[proud] E esse é o Azure Kubernetes Service, de ponta a ponta.
[600ms]
[calm] Um control plane gerenciado, node pools de VMs Linux ou Windows, sua imagem rodando como Pods autorrecuperáveis, autoescalonamento, Services e ingress, e observabilidade completa.
[700ms]
[encouraging] Você foi de um Dockerfile até um cluster completo e orquestrado — isso encerra a jornada de contêineres.
[600ms]
[optimistic] Agora vá construir algo, e deixe o Azure fazer o trabalho pesado.
