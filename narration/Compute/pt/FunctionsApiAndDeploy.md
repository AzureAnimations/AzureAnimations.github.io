# Narrator Script — Compute · Functions: Build an API and Deploy It

**Source animation:** [FunctionsApiAndDeploy.html](../../../journeys/Compute/FunctionsApiAndDeploy.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/azure-functions/functions-triggers-bindings>
- <https://learn.microsoft.com/azure/azure-functions/functions-deployment-technologies>

---

## Step 1 · One function, one HTTP endpoint

[calm] Uma função é o seu código mais exatamente um gatilho. O gatilho é o que faz a função começar.
[600ms]
[confident] Dê a ela um gatilho HTTP, e uma requisição web passa a iniciar o seu código. É isso que transforma a função em um endpoint de API.
[600ms]
[curious] No aplicativo de pedidos da Contoso, o endereço padrão é o caminho da API seguido do nome da função.

## Step 2 · HTTP trigger: route, methods and auth

[calm] O gatilho define três coisas. A rota é a URL que vem depois do caminho da API, e ela pode ter parâmetros, como um ID.
[600ms]
[confident] Os métodos dizem quais verbos HTTP respondem; se você não indicar nenhum, todos respondem. O nível de autorização pode ser anônimo, função ou administrador.
[600ms]
[serious] Quando você roda localmente, a autorização não é exigida. Depois que você publica, o nível passa a valer.

## Step 3 · Return a status code and JSON

[calm] Agora o seu código monta a resposta: um código de status que o cliente consegue interpretar e um corpo JSON que ele consegue ler.
[600ms]
[confident] Devolva duzentos em caso de sucesso, ou quatro zero quatro quando o pedido não for encontrado. Defina o mimetype como application JSON, para os clientes lerem o corpo corretamente.
[600ms]
[reflective] Se a sua função não retornar nada, o padrão do HTTP é dois zero quatro, Sem Conteúdo, com o corpo vazio.

## Step 4 · Bindings: Cosmos DB in, Service Bus out

[curious] Os bindings conectam a função a outros serviços sem código de cliente. Clique em cada etapa para acompanhar o caminho dos dados.
[600ms]
[confident] Aqui, um input binding entrega os dados do Cosmos DB antes de o seu código rodar, e um output binding grava o resultado no Service Bus para você.
[600ms]
[reassuring] Os bindings são opcionais. Você sempre pode usar um cliente do Azure SDK no seu código. Uma configuração de conexão dá o nome da configuração do app que diz como conectar.

## Step 5 · Run it locally with Core Tools

[calm] O Core Tools roda o runtime do Functions na sua própria máquina.
[600ms]
[confident] Inicie o Core Tools, e as suas funções respondem na porta sete zero sete um, por padrão. Chame a API e corrija os erros antes de implantar qualquer coisa.
[600ms]
[reflective] O arquivo de configurações locais vale só para execuções locais, e a autorização não é exigida localmente por padrão.

## Step 6 · Create the function app

[calm] Um function app exige três escolhas. Como ele é hospedado? Qual runtime executa o seu código? E qual conta de armazenamento guarda o estado dele?
[600ms]
[confident] O Flex Consumption é a opção recomendada para novos apps serverless. Escolha a pilha de runtime que combine com a linguagem e a versão do seu código.
[600ms]
[serious] A conta de armazenamento é obrigatória, porque ela guarda as chaves e o estado. Antes de escolher, confira na página de hospedagem do Learn a lista atual de planos.

## Step 7 · Deploy: zip, publish and CI

[calm] Normalmente o seu código viaja como um pacote zip, e a implantação por zip é a tecnologia padrão e recomendada para function apps.
[600ms]
[confident] Escolha o caminho conforme a etapa. Enquanto você desenvolve, use o Core Tools, o Visual Studio Code ou o Azure CLI.
[600ms]
[determined] Quando o projeto ficar sério, passe para CI e CD, usando o Deployment Center, o GitHub Actions ou o Azure Pipelines. No Flex Consumption, a implantação de pacote é o único método.

## Step 8 · App settings and managed identity

[calm] As configurações dizem ao app onde as coisas estão. Uma configuração dá o nome da conta, mas não guarda nenhuma chave.
[600ms]
[confident] Uma identidade gerenciada prova quem é o app, então nenhum segredo precisa ficar nas configurações. Dê preferência a ela, use o Key Vault quando um serviço não aceitar, e deixe o segredo compartilhado como último recurso.
[600ms]
[serious] Conceda só a função de que o binding precisa. O acesso a dados do Cosmos DB tem um sistema de funções próprio.

## Step 9 · Slots and safe release

[curious] Um slot é uma segunda cópia do app, com endereço próprio.
[600ms]
[confident] Implante nele, teste e depois faça o swap para produção. Se der errado, faça o swap de volta. Uma configuração de slot continua com o slot durante o swap.
[600ms]
[serious] O swap aquece primeiro o slot de staging, mas não garante zero de indisponibilidade. Hoje o Flex Consumption não aceita slots e usa atualizações graduais no lugar.

## Step 10 · Check it: logs and a test call

[calm] Chame a API em produção com curl e a chave da função, enviada como valor de consulta code ou no cabeçalho da chave da função.
[600ms]
[impressed] Depois, encontre essa mesma chamada no Application Insights, com os logs, o desempenho e os erros. O Live Metrics é a forma recomendada de transmitir logs.
[600ms]
[proud] Uma boa resposta mais um rastreamento visível significa que a release funciona. Esse é o objetivo: criar APIs serverless e depois configurar e implantar function apps.
