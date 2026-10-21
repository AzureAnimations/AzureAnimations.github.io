# Narrator Script — Cosmos DB: criar e consultar

**Source animation:** [CosmosFoundations.html](../../../journeys/Database/CosmosFoundations.html)
**Language:** pt

Indicações: os estilos entre colchetes orientam a voz; [600ms] marca uma pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ -->

## Step 1 · Why a document database?

[confident] As mensagens de chat e os documentos de produtos da Contoso têm formatos diferentes, embora ambos ajudem o assistente de suporte.
[600ms]
[calm] Azure Cosmos DB for NoSQL os armazena como documentos JSON sem exigir que todos os itens compartilhem um esquema fixo.
[600ms]
[reassuring] Os exemplos mostram por que itens flexíveis atendem a essa carga de trabalho, enquanto ferramentas de desenvolvimento conhecidas oferecem o acesso.

## Step 2 · Account, database, container, item

[confident] Leia a estrutura de fora para dentro: conta, banco de dados, contêiner e itens individuais.
[600ms]
[calm] O banco do catálogo contém contêineres separados para produtos e usuários, cada um com sua própria escolha de chave de partição.
[600ms]
[reassuring] Essa hierarquia também orienta a aplicação, então saber onde um item fica facilita acompanhar as operações do cliente que vêm depois.

## Step 3 · Partition key: where items live

[confident] O valor da categoria encaminha cada produto à sua partição lógica, como mostram os grupos de barracas, fogareiros e mochilas.
[600ms]
[calm] Escolha uma propriedade com muitos valores distintos e distribuição equilibrada, em vez de concentrar a atividade em poucos valores.
[600ms]
[serious] Decida com cuidado antes de criar o contêiner, porque mudar sua chave de partição depois exige mover os dados.

## Step 4 · Connect with the SDK

[confident] A aplicação começa com um cliente, faz a autenticação e obtém os identificadores do banco de dados e do contêiner de produtos.
[600ms]
[calm] Microsoft Entra ID oferece acesso baseado em funções sem colocar um segredo de conta no código, mas é preciso atribuir a função de dados adequada.
[600ms]
[reassuring] Reutilize o cliente na aplicação; obter esses identificadores de recursos, por si só, não faz uma chamada de rede.

## Step 5 · Create, read, replace, upsert, delete

[confident] Acompanhe um produto pelas operações: criar adiciona o item e a leitura direta o recupera pelo identificador e pela chave de partição.
[600ms]
[calm] Substituir altera um item existente, enquanto upsert insere ou substitui conforme a existência do item.
[600ms]
[serious] Excluir remove o item identificado, então escolha a operação que corresponde à sua intenção em vez de tratar todas as gravações como iguais.

## Step 6 · Point read or query?

[curious] Você já sabe o identificador e a chave de partição do item, ou precisa descobrir os itens correspondentes?
[600ms]
[calm] Uma leitura pontual vai direto a um item, enquanto uma consulta filtra, projeta ou ordena conforme seus critérios.
[600ms]
[reassuring] Use o caminho direto quando ele atender e mantenha as consultas em uma partição quando possível, evitando distribuí-las sem necessidade.

## Step 7 · Query: filter and project

[confident] A consulta mantém as barracas que atendem à condição de preço e exclui a mais cara do resultado.
[600ms]
[calm] Ela retorna só identificador, nome e preço, em vez de enviar todas as propriedades ao assistente.
[600ms]
[reassuring] O filtro escolhe quais itens atendem, a projeção escolhe seus campos e a chave de partição concentra este exemplo no grupo relevante.

## Step 8 · All in one: build and query

[confident] Junte as peças: modele os recursos, conecte-se com um cliente reutilizável e depois leia e grave os itens.
[600ms]
[calm] Use uma leitura pontual para um item conhecido ou uma consulta filtrada quando o assistente precisar descobrir dados correspondentes.
[600ms]
[encouraging] Essa base prepara você para adicionar embeddings e recuperação vetorial sem perder de vista os documentos que eles descrevem.
