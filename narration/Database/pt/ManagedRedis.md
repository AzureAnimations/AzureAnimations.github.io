# Narrator Script — Database · Azure Managed Redis for AI Apps

**Source animation:** [ManagedRedis.html](../../../journeys/Database/ManagedRedis.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/redis/overview>
- <https://learn.microsoft.com/azure/redis/tutorial-semantic-cache>
- <https://learn.microsoft.com/azure/redis/overview-vector-similarity>
- <https://learn.microsoft.com/azure/redis/entra-for-authentication>

---

## Step 1 · Why an AI app needs a cache

[calm] O assistente de suporte da Contoso responde às mesmas perguntas o dia todo.
[600ms]
[curious] E cada repetição sai duas vezes mais cara: uma pela chamada ao modelo e outra pela ida ao banco de dados.
[600ms]
[confident] A Contoso e o assistente são fictícios. A ideia é que o Redis guarde, direto na memória, o trabalho que você repetiria.

## Step 2 · Azure Managed Redis

[calm] O Azure Managed Redis é um armazenamento de dados em memória, operado pela Microsoft e baseado no Redis Enterprise.
[600ms]
[confident] Você escolhe o nível conforme o equilíbrio entre memória e computação que a sua carga de trabalho pede.
[600ms]
[reassuring] Tamanhos e preços mudam, então consulte as páginas oficiais de visão geral e de preços em vez de decorar números.

## Step 3 · Cache-aside, one level deeper

[calm] No cache-aside, quem cuida do cache é o aplicativo. Na leitura, ele consulta o Redis primeiro.
[600ms]
[confident] Se não encontra, ele vai ao banco de dados e guarda o resultado. Na escrita, ele altera o banco de dados e depois atualiza o cache.
[600ms]
[curious] Esse padrão apareceu na lição do arquiteto sobre APIs e cache. Aqui vamos ver com mais detalhe os comandos do Redis por trás dele.

## Step 4 · Set it, read it, let it expire

[curious] O valor mais simples do Redis é uma string. Você grava com um prazo de vida e depois lê de volta.
[600ms]
[confident] A opção EX define o TTL em segundos na hora de gravar. O TTL informa quantos segundos restam, e o EXPIRE altera esse prazo depois.
[600ms]
[reassuring] Quando o tempo acaba, a chave se apaga sozinha. Assim, as chaves antigas saem antes de a pressão de memória forçar a situação.

## Step 5 · Three ways to retire stale data

[serious] Uma cópia em cache pode ficar desatualizada, então decida como ela vai sair do cache.
[600ms]
[confident] Ela pode sair quando você grava, quando o tempo acaba ou quando aparece uma nova versão.
[600ms]
[calm] Versionar as chaves, por dados, por modelo ou por versão do prompt, também é o que evita que um cache semântico reaproveite uma resposta ultrapassada.

## Step 6 · More than strings

[curious] O Redis é um servidor de estruturas de dados, não só um lugar para guardar strings.
[600ms]
[confident] Combine o formato dos dados com a tarefa. Aqui estão as seis estruturas clássicas.
[600ms]
[calm] As imagens estão simplificadas. O Redis também tem JSON, bitmaps, séries temporais e mais.

## Step 7 · Expire by clock, evict by memory

[encouraging] Hora de experimentar. Adicione chaves com prazos de vida diferentes e depois encha a memória.
[600ms]
[confident] A expiração remove uma chave quando o TTL dela termina. O despejo remove uma chave quando a memória está cheia.
[600ms]
[reflective] Isto é uma simulação, com chaves fictícias e só oito espaços. O Azure Managed Redis usa, por padrão, a política LRU volátil.

## Step 8 · Vectors in Redis: index first

[curious] Para buscar por significado, guarde cada embedding em um hash, bem ao lado dos metadados dele.
[600ms]
[confident] Depois, indexe o campo de vetor, e o Redis passa a buscar por significado.
[600ms]
[serious] A busca vetorial usa o módulo RediSearch. Ative-o ao criar o cache, porque não dá para adicionar módulos a uma instância que já existe.

## Step 9 · Nearest by meaning, then filtered

[curious] Um vetor de consulta pede os K itens mais próximos, ou seja, os vizinhos mais próximos em significado.
[600ms]
[confident] Adicione um filtro de metadados, e a mesma busca vira híbrida.
[600ms]
[calm] O mapa é uma ilustração simples, com artigos de suporte fictícios. Os embeddings reais têm muito mais dimensões, e essas distâncias são inventadas.

## Step 10 · Semantic caching for LLM answers

[curious] Agora, a vantagem para aplicativos de IA. Quando um prompt novo significa quase o mesmo que um antigo, devolva a resposta guardada.
[600ms]
[impressed] Assim, você pula a chamada ao modelo por completo e economiza tempo e custo.
[600ms]
[calm] Isso é um padrão de aplicativo ou de gateway, não um recurso à parte do Redis. O Redis guarda e pesquisa os prompts, e o Azure API Management pode executar essas etapas como políticas.

## Step 11 · Connect without secrets

[serious] Como o seu aplicativo deve se conectar? Prefira o Microsoft Entra ID às chaves de acesso.
[600ms]
[confident] Mantenha o TLS ativado, porque a autenticação do Entra só funciona em conexões TLS, e limite o caminho de rede até o cache.
[600ms]
[reassuring] As chaves de acesso continuam disponíveis, mas são segredos que você precisa armazenar e rotacionar.

## Step 12 · Is the cache earning its keep?

[calm] Um cache só vale a pena se compensar. Fique de olho em duas coisas: com que frequência as consultas acertam o cache e quanto da memória está cheio.
[600ms]
[concerned] Configure um alerta antes de a memória acabar, e não depois.
[600ms]
[reflective] Os nomes das métricas vêm da referência de monitoramento. O gráfico e os números aqui são só ilustrativos.

## Step 13 · Redis for AI apps, all in one

[calm] Para fechar: mantenha na memória o trabalho repetitivo, dê a ele um prazo de vida e pesquise por significado.
[600ms]
[confident] Isso cobre cache, expiração, vetores, cache semântico, acesso seguro e monitoramento.
[600ms]
[proud] Esta é a habilidade A I 200, Integrar o Azure Managed Redis em soluções de IA. Ela fica no domínio de gerenciamento de dados, que vale de vinte e cinco a trinta por cento do exame.
