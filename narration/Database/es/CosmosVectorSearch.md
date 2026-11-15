# Narrator Script — Cosmos DB: búsqueda vectorial

**Source animation:** [CosmosVectorSearch.html](../../../journeys/Database/CosmosVectorSearch.html)
**Language:** es

Indicaciones: los estilos entre corchetes orientan la voz; [600ms] marca una pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ -->

## Step 1 · Search by meaning, not keywords

[curious] Un cliente pregunta cómo mantenerse seco, pero el producto de Contoso se describe como una chaqueta impermeable.
[600ms]
[calm] Buscar solo las palabras del cliente pierde esa conexión, mientras los embeddings representan el significado del texto mediante vectores.
[600ms]
[reassuring] Comparar esos vectores permite recuperar un producto relacionado aunque la pregunta y la descripción usen expresiones diferentes.

## Step 2 · Tell the container about its vectors

[confident] Antes de almacenar vectores, indica al contenedor dónde está el embedding y cómo debe comparar sus valores.
[600ms]
[calm] La directiva especifica la ruta de la propiedad, el tipo numérico, la función de distancia y el número de dimensiones.
[600ms]
[serious] Habilita la búsqueda vectorial en la cuenta y establece la directiva al crear el contenedor, para que el almacenamiento y la comparación concuerden con los embeddings.

## Step 3 · Keep the embedding on the item

[confident] El texto del producto pasa por un modelo de embeddings de Azure OpenAI y se convierte en el vector numérico mostrado al lado.
[600ms]
[calm] Guarda ese vector en el mismo elemento que la información del producto, sin separarlo del contenido que representa.
[600ms]
[reassuring] La salida del modelo debe coincidir con las dimensiones de la directiva, para que el elemento almacenado admita consultas de similitud compatibles.

## Step 4 · Rank items by similarity

[confident] Primero genera el embedding de la pregunta del cliente con el mismo modelo usado para los productos.
[600ms]
[calm] La consulta de distancia vectorial compara ese vector con los embeddings almacenados y devuelve un conjunto limitado de coincidencias ordenadas.
[600ms]
[reassuring] Las puntuaciones ilustran el orden, no garantizan la calidad de la respuesta; un resultado acotado ofrece al asistente productos candidatos que considerar.

## Step 5 · Narrow, rank, then match words

[confident] Empieza con filtros de metadatos para limitar la búsqueda a la categoría, el estado de publicación y la fecha pertinentes.
[600ms]
[calm] La clasificación vectorial captura el significado, mientras la de texto completo reconoce las palabras importantes del contenido.
[600ms]
[reassuring] La fusión de clasificación recíproca combina ambas clasificaciones, para que Contoso aproveche señales semánticas y palabras sin depender de una sola señal.

## Step 6 · Keep embeddings fresh

[confident] Cuando cambia el texto del producto, su embedding anterior puede dejar de describir lo que leerá el cliente.
[600ms]
[calm] La fuente de cambios entrega el elemento a Azure Functions, que solicita un embedding nuevo y lo escribe de vuelta.
[600ms]
[reassuring] Comprobar el hash del contenido permite omitir texto sin cambios, así que las actualizaciones solo de metadatos no necesitan otro embedding y se evita repetir trabajo innecesario.

## Step 7 · One semantic search pipeline

[confident] La canalización completa conecta la ingesta y las preguntas con un contenedor que tiene directiva e índice vectoriales.
[600ms]
[calm] El texto de producto y las preguntas usan el mismo modelo de embeddings, mientras la recuperación devuelve coincidencias ordenadas con los filtros pertinentes.
[600ms]
[reassuring] La rama de la fuente de cambios actualiza los elementos editados y mantiene los vectores de búsqueda vinculados al contenido que representan.

## Step 8 · Vector search in Cosmos DB, all in one

[confident] Mantén juntas tres responsabilidades: configurar el almacenamiento vectorial, buscar con embeddings compatibles y refinar y actualizar los resultados.
[600ms]
[calm] La distancia vectorial ordena, los filtros y el texto completo añaden señales de selección, y la fuente de cambios mantiene los embeddings actualizados con el contenido.
[600ms]
[encouraging] Con ese flujo de recuperación listo, la siguiente lección aborda índices, costos de solicitudes y coherencia.
