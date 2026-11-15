# Roteiro de narração — Azure Storage · Nível avançado · Construir com Storage

**Source animation:** `static/v2/Storage/StorageBuildEvents.html`

---

## Step 1 · goal

[confident] Vamos construir. Você está escrevendo um app que armazena e serve blobs — imagens, documentos, uploads.
[600ms]
[calm] Vamos nos conectar ao armazenamento, ler e gravar, desenvolver localmente e depois reagir às mudanças no instante em que acontecem.
[700ms]
[reassuring] E o melhor — o mesmo código do SDK que você escreve roda no seu notebook e em produção, sem alterações.

## Step 2 · connect

[confident] Comece com a biblioteca de cliente do Azure Storage, e conecte-se sem senhas.
[600ms]
[calm] O DefaultAzureCredential pega o seu login de desenvolvedor na sua máquina, e uma identidade gerenciada no Azure — então não há strings de conexão nem chaves no seu código.
[700ms]
[reassuring] Escreva uma vez, e simplesmente funciona nos dois lugares.

## Step 3 · io

[confident] Agora o trabalho do dia a dia — ler e gravar blobs. Você cria um cliente de blob e chama upload ou download.
[600ms]
[calm] As chamadas são assíncronas, então seu app continua respondendo enquanto os dados se movem.
[700ms]
[encouraging] Para arquivos grandes, apoie-se no streaming e nas transferências em paralelo — a biblioteca cuida do trabalho pesado.

## Step 4 · azurite

[confident] Você não precisa de uma conta na nuvem para construir. O Azurite é o emulador local do Storage.
[600ms]
[calm] Ele roda blob, fila e tabela bem na sua máquina, então você pode desenvolver e testar offline — rápido, e de graça.
[700ms]
[reassuring] Ele até vem com as Azure Tools no Visual Studio Code, então está a um clique de distância.

## Step 5 · events

[confident] É aqui que o armazenamento ganha vida. Quando um blob é criado ou excluído, o Storage gera um evento.
[600ms]
[calm] O Event Grid roteia esse evento para um manipulador — uma Azure Function, um Logic App, um webhook — então seu código reage no instante em que os dados mudam.
[700ms]
[impressed] O gatilho de blob do Event Grid escala para altas taxas de eventos, então aguenta mesmo sob uma avalanche de uploads.

## Step 6 · feed

[confident] Os eventos são ótimos para reagir agora. Mas e se você precisar do histórico completo?
[600ms]
[calm] Esse é o feed de alterações — um log durável, ordenado e somente leitura de cada mudança nos seus blobs.
[700ms]
[reassuring] Veja assim: os eventos são push, o feed de alterações é pull. Um te avisa ao vivo; o outro te deixa ler, agrupar e reproduzir cada mudança depois.

## Step 7 · recap

[proud] Aí está o panorama completo: seu app fala com o Blob Storage através do SDK com uma identidade gerenciada, desenvolve localmente sobre o Azurite, reage às mudanças com o Event Grid, e as audita ou reproduz com o feed de alterações.
[700ms]
[encouraging] SDK mais identidade gerenciada, Azurite para desenvolvimento, eventos para reagir — esse é um app de armazenamento limpo e moderno.

## Step 8 · spec

[confident] Um pouco mais a fundo, para quem constrói. As bibliotecas de cliente do Azure Storage cobrem todas as linguagens principais — .NET, Java, Python, JavaScript, Go.
[600ms]
[calm] Autentique todas com o DefaultAzureCredential, e você está sem senhas em todos os lugares.
[700ms]
[reassuring] E para reagir aos blobs, prefira o gatilho de blob do Event Grid ao clássico gatilho por sondagem — ele dispara mais rápido e escala.
