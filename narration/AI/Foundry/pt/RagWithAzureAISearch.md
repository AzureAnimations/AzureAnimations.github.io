# Narrator Script — Foundry · RAG with Azure AI Search

**Source animation:** [RagWithAzureAISearch.html](../../../../journeys/AI/Foundry/RagWithAzureAISearch.html)
**Language:** pt

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview>
- <https://learn.microsoft.com/azure/search/search-indexer-overview>
- <https://learn.microsoft.com/azure/search/vector-search-integrated-vectorization>

---

## Step 1 · A model that has never read your files

[curious] Maya faz uma pergunta simples ao assistente da Contoso sobre a política de trabalho remoto.
[600ms]
[concerned] O modelo só conhece seus dados de treinamento, e isso tem uma data de corte. Contosoé privado, os arquivos de RH que mudam não estão lá.
[600ms]
[serious] Então faz o que os modelos fazem quando não sabem: adivinha, e a resposta soa confiante, mas não é fundamentada.

## Step 2 · RAG: retrieve, augment, generate

[calm] Geração aumentada por recuperação, ou RAG, corrige isso em três movimentos.
[600ms]
[confident] Primeiro, procure as passagens corretas. Depois adicione-as ao prompt. Depois, deixe o modelo responder a partir delas.
[600ms]
[reassuring] O modelo não é retreinado. Os fatos chegam no enunciado na hora da pergunta, então seu conteúdo pode mudar todos os dias.

## Step 3 · Ingest: from files to a search index

[curious] Um indexador extrai conteúdo da sua fonte de dados para um índice de busca em Azure AI Search.
[600ms]
[confident] Ele pode rodar novamente em um cronograma, o que mantém o índice atualizado conforme seus arquivos mudam.
[600ms]
[calm] O índice é uma cópia separada e pesquisável no serviço de busca. É isso que torna as consultas rápidas, porque o serviço não retorna à sua fonte na hora da pergunta.

## Step 4 · Enrich: read, chunk, and embed

[curious] Em seguida, um conjunto de habilidades passa AI habilidades em cada documento.
[600ms]
[confident] Uma habilidade lê texto a partir de varreduras, outra divide em trechos, e outra transforma cada passagem em um vetor.
[600ms]
[impressed] Existem habilidades para tabelas e figuras também. Com vetorização integrada, a incorporação acontece na indexação repetidamente na hora da consulta.

## Step 5 · The index: one chunk, one document

[calm] Cada bloco se torna seu próprio documento de busca no índice.
[600ms]
[confident] Os atributos do campo decidem como pode ser buscado, filtrado e retornado para citações. Um campo vetorial contém o embedding, e suas dimensões devem corresponder ao seu modelo de embedding.
[600ms]
[serious] Apenas campos recuperáveis podem ser retornados, então mantenha um campo de link de origem se quiser citações que apontem para trás.

## Step 6 · Four ways to ask the index

[curious] Existem quatro maneiras de fazer uma pergunta ao índice.
[600ms]
[confident] O texto completo corresponde às palavras. O vetor corresponde ao significado. O híbrido faz ambos em um único pedido.
[600ms]
[impressed] E o classificador semântico então reordena os melhores resultados, para que a passagem mais útil suba ao topo.

## Step 7 · Try it: which mode finds the answer?

[encouraging] Agora tente você mesmo. Escolha uma pergunta e depois escolha um modo de busca.
[600ms]
[curious] Observe quais blocos chegam ao modelo e perceba onde o bloco de resposta fica no ranking.
[600ms]
[reflective] O ranking aqui é ilustrativo, em pedaços Contoso inventados. Os resultados reais dependem do seu conteúdo, dos seus campos e do seu modelo de incorporação.

## Step 8 · Ground a Foundry agent on the index

[confident] Para dar base ao agente, adicione uma conexão de projeto ao seu serviço de busca.
[600ms]
[calm] Depois, aponte a ferramenta de Azure AI Search do agente para o índice, e as respostas retornam com citações.
[600ms]
[serious] Prefiro a identidade gerenciada do projeto em vez de chaves. Redes privadas requerem Microsoft Entra, então confira o Learn para as atribuições exatas de funções.

## Step 9 · When one search is not enough

[curious] Às vezes, uma única busca não é suficiente para uma pergunta complicada.
[600ms]
[confident] A recuperação agential coloca uma base de conhecimento na frente das suas fontes. Ela planeja subconsultas, executa-as em paralelo, reclassifica e retorna resultados fundamentados.
[600ms]
[reflective] Em Foundry, Foundry QI dá aos agentes essa base de conhecimento, com Azure AI Search como motor por baixo. Algumas partes ainda são prévias, então confira a versão API que você escolher.

## Step 10 · Only retrieve what the caller may see

[serious] A recuperação traz um risco. Nem todo mundo deveria ver todos os documentos.
[600ms]
[confident] Então filtre os resultados pela identidade do chamador no momento da consulta. Blocos restritos nunca chegam ao prompt, quem pergunta ao modelo.
[600ms]
[calm] Um filtro de segurança corresponde a um valor de usuário ou grupo em um campo filtrável. O controle de acesso embutido em nível de documento está disponível em pré-visualização.

## Step 11 · Measure it, then tune cost and latency

[curious] Agora meça. Recupere a pontuação e as respostas com avaliadores, como recuperação, fundamento e relevância.
[600ms]
[confident] Depois, ajuste as alavancas que trocam qualidade da resposta por custo e tempo de resposta.
[600ms]
[reflective] A avaliação é um tema à parte, então essa etapa mostra apenas onde ela se encaixa. As alturas da barra aqui são ilustrativas.

## Step 12 · RAG with Azure AI Search, all in one

[calm] Consuma e enriqueça seu conteúdo uma vez. Questione conforme cada pergunta precisa.
[600ms]
[confident] Aterrar o agente, ajustar os resultados por identidade, depois medir e ajustar.
[600ms]
[proud] Esse é o pipeline por trás dos objetivos de recuperação A I 103, e combina bem com A I 200, que pratica a mesma ideia RAG em outros armazenamentos vetoriais.
