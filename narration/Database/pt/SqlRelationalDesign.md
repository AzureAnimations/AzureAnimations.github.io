# Narrator Script — Projetar o armazenamento de dados relacionais

**Source animation:** [SqlRelationalDesign.html](../../../journeys/Database/SqlRelationalDesign.html)
**Language:** pt

Legenda: `[confident]`, `[reflective]` e `[serious]` orientam o tom; `[600ms]` indica uma pausa silenciosa entre as frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/azure/azure-sql/database/security-best-practice#data-protection -->

## Step 1 · Three ways to run SQL on Azure

[confident]
O sistema de pedidos da Contoso precisa de tabelas, linhas e chaves, mas isso não define quem administra o banco de dados.
[600ms]
O SQL Database gerencia a plataforma, o Managed Instance mantém recursos de instância e o SQL Server on Azure VMs expõe o sistema operacional.
[600ms]
[reflective]
Esses caminhos representam diferentes limites de controle e manutenção.

## Step 2 · Azure SQL Database

[confident]
Com o Azure SQL Database, a Contoso escolhe recursos sem gerenciar um sistema operacional ou uma instância do SQL Server.
[600ms]
As opções vCore e DTU descrevem como os recursos são comprados, enquanto a opção sem servidor ajusta a computação de um banco único.
[600ms]
[reflective]
Um pool elástico permite que os bancos regionais compartilhem recursos dentro dos limites configurados.

## Step 3 · Azure SQL Managed Instance

[confident]
O aplicativo existente da Contoso depende de mais do que tabelas individuais, por isso a migração precisa considerar a instância.
[600ms]
O Managed Instance oferece recursos como SQL Server Agent e servidores vinculados em uma instância gerenciada do SQL Server.
[600ms]
[reflective]
Pedidos, estoque e devoluções compartilham a computação e o armazenamento dessa instância.

## Step 4 · SQL Server on Azure VMs

[confident]
Às vezes, a Contoso precisa de acesso ao sistema operacional e de recursos do SQL Server que exigem uma máquina virtual.
[600ms]
As camadas mostram o alcance desse controle: o mecanismo do banco, o sistema operacional e a VM do Azure escolhida.
[600ms]
[reflective]
A Contoso também assume a responsabilidade pelas atualizações do SQL Server e do sistema operacional.

## Step 5 · Recommend a scaling approach

[confident]
Problemas diferentes de crescimento pedem respostas diferentes, como mostram as setas desses cenários.
[600ms]
Pools elásticos compartilham recursos, a escala vertical muda o tamanho da computação e a escala horizontal com sharding divide os dados entre bancos.
[600ms]
[reflective]
Quando o financeiro precisa de linhas de vários bancos, a consulta elástica atende à necessidade do relatório, em vez de apenas adicionar computação.

## Step 6 · Recommend an availability tier

[confident]
A camada de serviço muda a arquitetura por trás do banco da Contoso, não apenas o tamanho da computação.
[600ms]
General Purpose separa a computação do armazenamento remoto, enquanto Business Critical usa armazenamento de conexão direta e réplicas.
[600ms]
[reflective]
Hyperscale acrescenta servidores de páginas para armazenamento escalável e expansão de leitura, e faz parte do SQL Database.

## Step 7 · Protect data in every state

[serious]
Acompanhe os dados desde o armazenamento, passando pela conexão, até a coluna confidencial mostrada à direita.
[600ms]
TDE protege os arquivos armazenados do banco, TLS protege os dados em trânsito e Always Encrypted protege colunas selecionadas que o cliente criptografa.
[600ms]
[reflective]
A máscara dinâmica de dados apenas oculta valores nos resultados das consultas; ela não é criptografia.

## Step 8 · When relational is not the answer

[confident]
Nem toda carga de trabalho precisa da abordagem relacional usada pelo sistema de pedidos da Contoso.
[600ms]
Azure Table Storage e Azure Cosmos DB for Table compartilham um modelo de dados de tabela, mas diferem em indexação, distribuição, latência e consistência.
[600ms]
[reflective]
Compare os dois para decidir se esses recursos adicionais atendem às necessidades do aplicativo.

## Step 9 · All in one: pick the right store

[confident]
Comece cada decisão pelo requisito à esquerda e siga a seta até uma opção adequada.
[600ms]
Bancos na nuvem, pools compartilhados, recursos de instância e acesso ao sistema operacional levam a escolhas diferentes.
[600ms]
[reflective]
A arquitetura de disponibilidade, a proteção de dados e o acesso global a tabelas completam o projeto, sem substituir a decisão inicial sobre a carga de trabalho.
