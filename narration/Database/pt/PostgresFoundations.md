# Narrator Script — PostgreSQL: criar e consultar

**Source animation:** [PostgresFoundations.html](../../../journeys/Database/PostgresFoundations.html)
**Language:** pt

As marcações entre colchetes orientam a interpretação; [600ms] indica uma pausa entre as frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Why PostgreSQL behind the assistant?

[curious] O assistente de suporte da Contoso Outfitters precisa consultar fatos sobre pedidos e produtos, em vez de adivinhar os detalhes.
[600ms]
[confident] O PostgreSQL oferece tabelas relacionais, confiabilidade transacional, dados JSON flexíveis e extensões por trás das ferramentas do assistente.
[600ms]
[reassuring] A chamada de ferramenta conecta a conversa aos registros do negócio, dando ao assistente uma base factual para responder.

## Step 2 · A managed PostgreSQL, compute apart from storage

[confident] O Azure Database for PostgreSQL executa o PostgreSQL da comunidade como serviço gerenciado, com computação e armazenamento em componentes separados.
[600ms]
[calm] As camadas de computação atendem a diferentes cargas, de atividade intermitente a aplicações gerais e tarefas que exigem mais memória.
[600ms]
[serious] Escolha conforme a carga e lembre que mudar a camada de computação envolve uma breve reinicialização.

## Step 3 · Connect with a token, not a password

[confident] O aplicativo solicita um token de curta duração ao Microsoft Entra ID e o apresenta ao conectar ao PostgreSQL.
[600ms]
[calm] O token substitui uma senha armazenada, enquanto a criptografia protege os dados que trafegam pela conexão.
[600ms]
[serious] Configure um administrador do Microsoft Entra no servidor antes de depender desse fluxo de autenticação.

## Step 4 · Model orders and products as tables

[confident] O esquema transforma os fatos do negócio em colunas tipadas, com chaves e restrições definindo quais registros são válidos.
[600ms]
[calm] Uma chave estrangeira liga o pedido ao produto, enquanto valores obrigatórios e status permitidos protegem a estrutura.
[600ms]
[serious] Adicione índices para as consultas reais, lembrando que acelerar leituras também traz custos de armazenamento e gravação.

## Step 5 · Page through orders the efficient way

[curious] Pular linhas para chegar a uma página posterior significa ler e descartar dados que o cliente nunca vê.
[600ms]
[confident] A paginação por keyset continua depois do último pedido retornado, usando juntos o horário e o identificador único.
[600ms]
[reassuring] A mesma combinação na ordenação e no filtro trata horários iguais, evitando o trabalho repetido de pular páginas anteriores.

## Step 6 · Call it from Python with psycopg

[confident] O adaptador de Python conecta o aplicativo ao PostgreSQL, obtém um token de identidade e busca um pedido com uma consulta parametrizada.
[600ms]
[serious] Passe os valores separados do texto da consulta, em vez de montá-la formatando a entrada do cliente.
[600ms]
[reassuring] Gerenciadores de contexto cuidam da limpeza, enquanto a lista destaca tempos limite, novas tentativas, lotes e reutilização de conexões.

## Step 7 · The exercise: an agent tool backend

[confident] Acompanhe a pergunta passando por uma ferramenta em Python até o PostgreSQL e os fatos retornando ao assistente.
[600ms]
[calm] A pergunta sobre pedidos ilustra o fluxo; o exercício armazena memória do agente, como conversas, mensagens e pontos de verificação de tarefas.
[600ms]
[encouraging] Crie e teste esse fluxo de memória com autenticação do Microsoft Entra entre a camada de ferramentas e o banco.

## Step 8 · PostgreSQL: build and query, all in one

[confident] O caminho completo conecta assistente, ferramentas em Python, autenticação por identidade e um banco PostgreSQL gerenciado por trás de uma interação.
[600ms]
[calm] Restrições organizam os registros, índices apoiam as buscas e consultas eficientes recuperam a informação de que o assistente precisa.
[600ms]
[encouraging] Com essa base relacional pronta, adicione a pesquisa vetorial para encontrar conteúdo relevante pelo significado.
