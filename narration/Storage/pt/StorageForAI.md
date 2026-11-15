# Roteiro de narração — Azure Storage · Nível avançado · Storage para IA

**Source animation:** `static/v2/Storage/StorageForAI.html`

---

## Step 1 · goal

[confident] Você quer um app de IA que responda a partir do seu próprio conteúdo empresarial — não do que o modelo memorizou por acaso.
[600ms]
[calm] O padrão que faz isso é a geração aumentada por recuperação, ou RAG. Alimenta o modelo com seus dados no momento da pergunta, então a resposta se apoia nos seus documentos.
[700ms]
[curious] E tudo começa no armazenamento. Vamos seguir um documento de um blob até uma resposta fundamentada.

## Step 2 · store

[confident] Primeiro, a fonte da verdade. Seus documentos, PDFs e imagens aterrissam no Blob Storage.
[600ms]
[calm] Para grandes dados analíticos, recorra ao Data Lake Storage Gen 2 — que é o Blob Storage com um namespace hierárquico e permissões no nível de pasta.
[700ms]
[reassuring] Em qualquer caso, o armazenamento guarda o conteúdo bruto do qual todo o resto vai beber.

## Step 3 · index

[confident] Agora fazemos esse conteúdo poder ser encontrado. Um indexador do Azure AI Search se conecta diretamente ao seu contêiner de blobs.
[600ms]
[calm] Ele traz os arquivos e seus metadados, abre cada documento e extrai o texto de dentro dele.
[700ms]
[reassuring] E melhor ainda, ele vigia os carimbos de data e hora dos blobs, então quando o conteúdo muda, só o que é novo é reindexado.

## Step 4 · vectorize

[confident] Aqui está o passo que torna possível a busca com IA. Durante a indexação, a vetorização integrada divide cada documento em fragmentos.
[600ms]
[calm] O fragmentação mantém cada pedaço dentro dos limites de tokens do modelo — e depois um modelo de incorporação converte cada fragmento em um vetor, uma lista de números que captura o seu significado.
[700ms]
[reassuring] Esses vetores vivem bem no índice de busca, prontos para corresponder por significado, não apenas por palavras-chave.

## Step 5 · retrieve

[confident] Momento da pergunta. O app executa uma busca híbrida — vetorial e de palavras-chave ao mesmo tempo — sobre o índice.
[600ms]
[calm] Os vetores encontram o que é semanticamente próximo; as palavras-chave capturam os termos exatos. Juntos trazem à tona os fragmentos mais relevantes.
[700ms]
[impressed] Esses fragmentos são entregues ao modelo para fundamentar sua resposta. Isso é RAG — o modelo responde a partir do seu conteúdo, e pode citá-lo.

## Step 6 · secure

[confident] Agora a parte que as empresas não podem pular — manter a recuperação segura.
[600ms]
[calm] O Azure AI Search pode ingerir as permissões de cada documento — listas de controle de acesso e grupos do Microsoft Entra, até etiquetas de confidencialidade do Purview — diretamente no índice.
[700ms]
[reassuring] Isso te dá uma recuperação consciente de permissões: um agente nunca mostra um documento que quem pergunta não tem permissão de ver.

## Step 7 · recap

[proud] Aí está o panorama completo: armazene conteúdo no Blob ou no Data Lake Storage, deixe um indexador do AI Search trazê-lo, fragmente-o e incorpore-o com a vetorização integrada, recupere-o com busca híbrida, e fundamente a resposta do modelo — tudo respeitando as permissões.
[700ms]
[encouraging] O armazenamento é a fonte da verdade; o índice de busca guarda os vetores; e o RAG os une em uma resposta na qual você pode confiar.

## Step 8 · spec

[confident] Um pouco mais a fundo. Pense nisso como três camadas. O armazenamento é a fonte. O Azure AI Search é a camada de recuperação, onde seus vetores vivem em campos vetoriais.
[600ms]
[calm] E o agente se senta em cima — primeiro busca, depois pede ao modelo que responda a partir do que voltou.
[700ms]
[reassuring] Mantenha as permissões fluindo do armazenamento ao índice, e cada resposta continua fundamentada e segura.
