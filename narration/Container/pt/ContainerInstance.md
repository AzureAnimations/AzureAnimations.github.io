# Roteiro de narração — Azure Containers · 03 · Azure Container Instances

**Source animation:** `static/v2/Container/ContainerInstance.html`

---

## Step 1 · what

[confident] Imagine que você só quer executar um contêiner — sem cluster, sem máquina virtual, nada para ficar cuidando.
[600ms]
[calm] Isso é o Azure Container Instances. Você entrega uma imagem — digamos, contoso-orders versão um — e ele executa um único contêiner em segundos.
[700ms]
[impressed] É computação sem servidor de contêiner único, isolada por hipervisor e cobrada por segundo — só enquanto está de fato em execução.

## Step 2 · config

[confident] O que você implanta não é apenas uma imagem — é um container group, e essa é a unidade com que o ACI trabalha.
[600ms]
[calm] Você entrega a imagem mais as configurações de execução: CPU e memória, variáveis de ambiente, as portas a expor e uma política de reinício.
[700ms]
[reassuring] Essa política de reinício decide o que acontece quando o processo termina — Always o mantém em execução, OnFailure tenta de novo em caso de erro e Never o executa uma única vez, ideal para uma tarefa em lote.

## Step 3 · pull

[confident] Nossa imagem, contoso-orders versão um, fica em um registro privado — contoso ponto azure-c-r ponto io.
[600ms]
[calm] Então o ACI a extrai do Azure Container Registry. Dê à instância uma managed identity, conceda a ela a função AcrPull, e a extração simplesmente funciona.
[700ms]
[reassuring] O melhor de tudo — nenhuma senha de registro armazenada em lugar algum. É uma identidade, não um segredo.

## Step 4 · run

[confident] Agora, para realmente iniciá-lo — um único comando faz tudo: az container create.
[600ms]
[calm] Prefere clicar? O Azure Portal tem um fluxo de Revisar e criar, ou você pode implantar a mesma configuração como YAML, Bicep ou um modelo ARM.
[700ms]
[serious] Só lembre-se de que o DNS name label precisa ser globalmente único em sua região — é isso que torna seu contêiner acessível pelo nome.

## Step 5 · reach

[confident] Exponha uma porta e o ACI atribui de imediato um IP público ao grupo.
[600ms]
[calm] Adicione esse DNS name label e você ganha um nome amigável e totalmente qualificado — contoso-orders ponto east-us ponto azure-container ponto io, respondendo na porta oitenta-oitenta.
[700ms]
[concerned] Uma ressalva: o IP público pode mudar quando o grupo é reiniciado. Para um endereço estável, coloque o Application Gateway à frente.

## Step 6 · limit

[serious] Aqui está a pegadinha. O ACI executa um conjunto fixo de contêineres — não há autoescala, nem balanceador de carga, nem divisão de tráfego.
[700ms]
[calm] É perfeito para um trabalho único, de curta duração ou fixo. Mas para tráfego web elástico, ele vai ficar pequeno.
[600ms]
[encouraging] Quando isso acontecer, suba de nível: Azure Container Apps para contêineres com autoescala, App Service para um aplicativo web gerenciado, ou AKS para orquestração completa.

## Step 7 · recap

[proud] Então, esse é o Azure Container Instances de ponta a ponta — você entrega uma imagem e um contêiner está no ar em segundos, configurado, extraído do ACR e acessível por DNS.
[700ms]
[optimistic] É a forma mais rápida de colocar um contêiner em execução no Azure. E no momento em que você precisar escalar, nossa próxima parada assume — Azure Container Apps, contêineres sem servidor com autoescala integrada.
