# Roteiro de narração — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

---

## Step 1 · problem

[confident] Conheça a Contoso. A equipe escreve um app em .NET ou Java, compila e entrega o artefato — um dot jar ou um dot d-l-l — para o time de Operações implantar.
[600ms]
[calm] Mas esse artefato só carrega o código compilado. Ele não carrega as bibliotecas do sistema operacional nem o runtime com que foi construído.
[700ms]
[concerned] Então, no servidor de produção, ele encontra outro sistema operacional, outro runtime… e quebra.

## Step 2 · drift

[curious] E por que quebra? Numa palavra: desvio.
[600ms]
[calm] Seu app nunca foi só o seu código. É o seu código mais um runtime específico e um conjunto específico de bibliotecas.
[600ms]
[serious] Cada ambiente — o notebook de desenvolvimento, a VM de testes, a produção — tem versões um pouco diferentes. Mude qualquer uma e a mesma build se comporta de outro jeito.

## Step 3 · wrap

[confident] Aqui está a solução do Docker. Um Dockerfile é uma receita que embrulha o seu código e as dependências junto com um sistema operacional base e um runtime.
[600ms]
[calm] Depois o docker build lacra tudo isso em uma única imagem — para a Contoso, é a contoso-orders version one.
[700ms]
[reassuring] Agora o runtime e as bibliotecas viajam dentro da imagem. O host só precisa de um runtime de contêineres, e aquela incompatibilidade de sistema operacional simplesmente não pode acontecer.

## Step 4 · layers

[curious] Olhe dentro dessa imagem e ela não é um bloco sólido — é uma pilha de camadas somente leitura.
[600ms]
[calm] Cada linha do Dockerfile adiciona uma camada: a base, as dependências e, por cima, o seu app.
[600ms]
[impressed] As camadas são imutáveis e compartilhadas, então as idênticas são armazenadas uma só vez. É isso que torna os downloads rápidos e as reconstruções baratas.

## Step 5 · vmvc

[confident] Agora, um contêiner não é só uma máquina virtual leve.
[600ms]
[calm] Uma VM virtualiza o hardware e roda um sistema operacional convidado completo para cada app. Um contêiner compartilha o kernel do host e empacota só o app e suas bibliotecas — um processo isolado, não uma máquina inteira.
[700ms]
[impressed] Esse kernel compartilhado é todo o truque: contêineres iniciam em segundos, pesam megabytes em vez de gigabytes e cabem muito mais em um mesmo host.

## Step 6 · ports

[confident] Rode essa imagem e você tem um contêiner — e esse contêiner É a Contoso Orders. Por dentro, o app escuta na porta três mil.
[600ms]
[calm] Mas uma porta dentro do contêiner fica fechada. Para deixar as requisições entrarem, você a publica ao rodar a imagem.
[600ms]
[encouraging] Então docker run, traço p, porta oitenta-oitenta para três mil: o tráfego externo chega ao host na porta oitenta-oitenta, e o Docker o encaminha para o app na porta três mil.

## Step 7 · oci

[curious] E aqui está algo que muita gente não percebe — Docker não é o único jeito de rodar um contêiner.
[600ms]
[calm] Sua imagem segue o padrão da Open Container Initiative — OCI —, que define três especificações: image, runtime e distribution.
[600ms]
[impressed] Então qualquer runtime compatível com OCI a roda sem mudanças — containerd, o motor dentro do Docker e nos nós do AKS, além de CRI-O, Podman e Buildah. A maioria é código aberto, sob a Linux Foundation e a CNCF.

## Step 8 · targets

[confident] Por ser um padrão aberto, uma imagem roda em qualquer lugar — inclusive por toda a Azure.
[600ms]
[calm] Mesmo artefato, quatro portas de entrada: Azure Container Instances para um único contêiner, Azure Container Apps para autoescala serverless, Azure Kubernetes Service para controle total, e App Service para rodar como um web app gerenciado.
[700ms]
[encouraging] Você só escolhe pela quantidade de orquestração que quer — a imagem nunca muda.

## Step 9 · recap

[proud] Então é essa a ideia toda. Empacote o app e as dependências uma vez como uma imagem imutável em camadas, e rode essa imagem idêntica em qualquer lugar — seu notebook, a CI ou a Azure.
[700ms]
[optimistic] A imagem é a unidade que você vai armazenar, proteger, escalar e executar pelo resto desta jornada.
[600ms]
[curious] Mas isso levanta uma pergunta — onde essas imagens realmente ficam? Próxima parada: Azure Container Registry.
