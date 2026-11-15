# Escolhendo seu SDK de IA — Narração

Source animation: `journeys/AI/Foundry/ChoosingYourSdk.html`

Um bloco por etapa, pareado 1:1 com `STEPS[]`. Os `[NNNms]` são pausas.

---

## Step 1 · Three SDKs, One Application

Azure OpenAI SDK. Foundry SDK. Microsoft Agent Framework.
[500ms]
Três nomes que parecem fazer a mesma coisa: chamar um modelo e receber uma resposta.
[600ms]
Eles não são concorrentes. São três camadas de uma mesma pilha, e a maioria das aplicações reais acaba usando mais de uma.
[400ms]
Então a pergunta não é qual é o melhor. É atrás de qual endpoint mora o recurso de que você precisa.

---

## Step 2 · One Resource, Two Endpoints

Tudo decorre desta imagem.
[500ms]
Um recurso do Foundry expõe dois endpoints diferentes. O endpoint do projeto, que serve agentes, ferramentas, avaliações e conexões. E o endpoint do Azure OpenAI, que serve modelos diretamente.
[600ms]
O SDK da OpenAI fala com o segundo. O SDK do Foundry fala com o primeiro. E o Agent Framework não fala diretamente com nenhum dos dois: ele depende do SDK do Foundry e se apoia por cima.
[400ms]
Escolha o endpoint primeiro. O SDK vem depois.

---

## Step 3 · Azure OpenAI SDK

A camada de baixo é o cliente OpenAI comum, apontado para o seu recurso do Azure.
[500ms]
Aqui não há abstrações específicas do Azure. É o mesmo formato de código que você escreveria direto contra a OpenAI, e é exatamente por isso que é o caminho mais rápido se você já tem código OpenAI.
[600ms]
Use quando quiser compatibilidade máxima, a menor latência ou embeddings. E repare nos embeddings, porque o endpoint do projeto não os roteia de jeito nenhum.
[400ms]
O que você não ganha: agentes, avaliações, conexões. Nada disso existe neste endpoint.

---

## Step 4 · Foundry SDK

Uma camada acima, o SDK do Foundry é um cliente enxuto sobre todas as APIs do projeto, através de um único endpoint.
[500ms]
Ele entrega dois clientes, e a maioria das aplicações usa os dois. O cliente de projeto para o que é nativo do Foundry: conexões, implantações, rastreamento. E um cliente compatível com OpenAI para tudo que tem formato OpenAI: respostas, agentes, avaliações, ajuste fino.
[600ms]
É nesta camada que aparecem as ferramentas da plataforma: busca em arquivos, interpretador de código, busca na web, memória, servidores MCP.
[400ms]
Um endpoint, uma credencial, o projeto inteiro.

---

## Step 5 · Microsoft Agent Framework

A camada de cima transforma um cliente de modelo em agente, e vários agentes em um fluxo de trabalho.
[500ms]
É open source, roda em .NET e Python, e é o sucessor do Semantic Kernel e do AutoGen. Se você combinava esses dois para orquestrar, é aqui que consolida.
[600ms]
Ele se conecta pelo FoundryChatClient, o que significa que depende do SDK do Foundry por baixo: é uma camada por cima, não uma alternativa.
[400ms]
E quando você estiver pronto, o mesmo código é empacotado como um agente hospedado do Foundry, com endpoint gerenciado.

---

## Step 6 · How They Fit Together

Aqui estão os mesmos três SDKs como um diagrama de componentes.
[500ms]
Sua aplicação depende do Agent Framework. O Agent Framework requer uma interface que o SDK do Foundry fornece. O SDK do Foundry requer a API de projeto do recurso do Foundry.
[600ms]
E repare no segundo caminho: sua aplicação também pode depender do SDK da OpenAI diretamente, alcançando o modelo pela interface OpenAI v1 e ignorando o projeto por completo.
[400ms]
Duas rotas para o mesmo recurso, servindo a dois trabalhos diferentes.

---

## Step 7 · In a Real Application

Agora coloque isso em um sistema implantado.
[500ms]
O navegador não guarda SDK nem segredos. Seu serviço — FastAPI, ASP.NET, o que você rodar — cuida da autenticação, dos limites de uso e das regras de negócio, e é a única camada que segura um cliente de SDK.
[600ms]
Abaixo dele, os três SDKs podem coexistir no mesmo serviço, porque todos apontam para o mesmo projeto do Foundry e todos aceitam a mesma credencial.
[400ms]
Use DefaultAzureCredential, não uma chave de API. Chaves ainda funcionam no endpoint da OpenAI, mas identidade gerenciada é o que você quer em produção.

---

## Step 8 · So Which One Do I Use?

Aqui está a decisão, como uma tabela que você realmente consegue usar.
[500ms]
Comece pela linha — o que você precisa fazer — e leia para o lado.
[400ms]
Embeddings ou a menor latência? SDK da OpenAI. Ferramentas do Foundry, avaliações, rastreamento, conexões? SDK do Foundry. Vários agentes em um fluxo, ou um endpoint hospedado e gerenciado? Agent Framework.
[600ms]
E onde uma linha tiver dois vistos, fique com o mais simples. Um traço não quer dizer impossível: quer dizer endpoint errado, e você estaria brigando com o SDK para chegar lá.

---

## Step 9 · Pick Your Layer

A regra é simples: comece na camada mais baixa que dá conta do trabalho.
[500ms]
Só o modelo? Pare no SDK da OpenAI. Precisa do projeto, das ferramentas, das avaliações, das conexões? Suba para o SDK do Foundry. Coordenando vários agentes? Deixe o Agent Framework segurar o laço.
[600ms]
E subir uma camada depois sai barato, porque o mesmo endpoint de projeto e a mesma credencial continuam valendo.
[400ms]
Escolha a camada mais baixa que funciona. Suba só quando algo obrigar.
