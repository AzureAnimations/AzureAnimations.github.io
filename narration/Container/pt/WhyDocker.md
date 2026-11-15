# Roteiro de narração — Azure Containers · 01 · Why Docker

**Source animation:** `static/v2/Container/WhyDocker.html`

<!-- Review sources: https://learn.microsoft.com/virtualization/windowscontainers/about/containers-vs-vm ; https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/ ; https://buildah.io/ -->

---

**TTS status:** Audio regenerated 2026-09-17 after text review.

## Step 1 · problem

[confident] Conheça a Contoso. A equipe desenvolve um aplicativo em .NET ou Java, compila o código e entrega o arquivo resultante, do tipo JAR ou DLL, à equipe de operações para fazer a implantação.
[600ms]
[calm] Mas esse artefato só carrega o código compilado. Ele não carrega as bibliotecas do sistema operacional nem o runtime com que foi construído.
[700ms]
[concerned] Então, no servidor de produção, ele encontra outro sistema operacional, outro runtime… e quebra.

## Step 2 · drift

[curious] Por que isso acontece? Porque a configuração varia de um ambiente para outro.
[600ms]
[calm] Seu app nunca foi só o seu código. É o seu código mais um runtime específico e um conjunto específico de bibliotecas.
[600ms]
[serious] Cada ambiente — o notebook de desenvolvimento, a VM de testes, a produção — tem versões um pouco diferentes. Mude qualquer uma e a mesma build se comporta de outro jeito.

## Step 3 · wrap

[confident] Aqui está a solução do Docker. Um Dockerfile é uma receita que embrulha o seu código e as dependências junto com um sistema operacional base e um runtime.
[600ms]
[calm] Depois, o comando docker build reúne tudo em uma imagem. Neste exemplo, é a versão um de contoso-orders.
[700ms]
[reassuring] O ambiente de execução e as bibliotecas ficam dentro da imagem, reduzindo as diferenças entre ambientes. O host ainda precisa de um sistema operacional, uma arquitetura de processador e um runtime de contêineres compatíveis.

## Step 4 · layers

[curious] Olhe dentro dessa imagem e ela não é um bloco sólido — é uma pilha de camadas somente leitura.
[600ms]
[calm] A imagem base fornece as primeiras camadas. Instruções que alteram arquivos adicionam camadas para as dependências e o aplicativo; outras configuram como o contêiner será executado.
[600ms]
[impressed] As camadas são imutáveis e compartilhadas, então as idênticas são armazenadas uma só vez. É isso que torna os downloads rápidos e as reconstruções baratas.

## Step 5 · vmvc

[confident] Agora, um contêiner não é só uma máquina virtual leve.
[600ms]
[calm] Cada máquina virtual tem seu próprio sistema operacional convidado e pode executar vários aplicativos. Um contêiner com isolamento de processos compartilha o kernel do host e inclui o aplicativo e suas dependências, sem um kernel convidado separado.
[700ms]
[impressed] Compartilhar o kernel reduz o consumo de recursos. Contêineres costumam iniciar mais rápido e usar menos recursos que uma máquina virtual completa, mas o tamanho da imagem e o tempo de inicialização dependem do aplicativo.

## Step 6 · ports

[confident] Rode essa imagem e você tem um contêiner — e esse contêiner É a Contoso Orders. Por dentro, o app escuta na porta três mil.
[600ms]
[calm] O aplicativo já recebe conexões dentro do contêiner, mas neste exemplo ainda não há uma porta publicada no host. Ao publicá-la, clientes externos podem chegar ao aplicativo por meio do host.
[600ms]
[encouraging] Com docker run e a opção de publicação, ligamos a porta oito mil e oitenta do host à porta três mil do contêiner. O Docker recebe as solicitações na primeira e as encaminha ao aplicativo na segunda.

## Step 7 · oci

[curious] E aqui está algo que muita gente não percebe — Docker não é o único jeito de rodar um contêiner.
[600ms]
[calm] A Open Container Initiative, ou OCI, define especificações para o formato das imagens, a execução dos contêineres e a distribuição das imagens.
[600ms]
[impressed] Cada ferramenta tem uma função: containerd e CRI-O executam contêineres, Podman os gerencia e Buildah cria imagens. Os padrões abertos facilitam a integração, mas a compatibilidade do host continua sendo necessária.

## Step 8 · targets

[confident] Uma imagem compatível pode ser reutilizada em diferentes ambientes, inclusive no Azure. Primeiro, confira quais sistemas operacionais e formatos de imagem cada serviço aceita.
[600ms]
[calm] Aqui temos quatro opções: Azure Container Instances para executar contêineres sob demanda, Azure Container Apps para dimensionamento automático sem administrar servidores, Azure Kubernetes Service para controlar a orquestração e App Service para aplicativos Web gerenciados.
[700ms]
[encouraging] Escolha com base na compatibilidade, no dimensionamento e no controle de que você precisa. Reutilizar a imagem mantém o pacote do aplicativo consistente, mas as configurações de implantação podem variar.

## Step 9 · recap

[proud] Essa é a ideia: empacotar o aplicativo e suas dependências em uma imagem imutável, organizada em camadas. Reutilize essa imagem em hosts compatíveis de desenvolvimento, testes e Azure, sem montar o ambiente manualmente a cada vez.
[700ms]
[optimistic] A imagem é a unidade que você vai armazenar, proteger, escalar e executar pelo resto desta jornada.
[600ms]
[curious] Mas isso levanta uma pergunta — onde essas imagens realmente ficam? Próxima parada: Azure Container Registry.
