# Narrator Script — PostgreSQL: búsqueda vectorial con pgvector

**Source animation:** [PostgresVectorSearch.html](../../../journeys/Database/PostgresVectorSearch.html)
**Language:** es

Las etiquetas entre corchetes indican la interpretación; [600ms] marca una pausa entre frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Meaning search, plus relational joins

[curious] El asistente de Contoso necesita productos que coincidan con el significado de la petición, aunque sus descripciones usen otras palabras.
[600ms]
[confident] pgvector añade búsqueda por similitud a PostgreSQL y conserva los embeddings junto a los registros relacionales que ya usa la aplicación.
[600ms]
[reassuring] El resultado combina búsqueda por significado y combinaciones relacionales, sin añadir un almacén vectorial separado que administrar.

## Step 2 · Enable pgvector, add a vector column

[confident] Empieza por permitir pgvector en el servidor, habilitarlo en la base de datos y verificar que esté instalado.
[600ms]
[calm] El contenido del producto pasa por un modelo de embedding y el vector resultante se guarda junto a los metadatos de la fila.
[600ms]
[serious] Haz coincidir las dimensiones de la columna vectorial con la salida del modelo para que admita los embeddings generados.

## Step 3 · Three metrics, three operators

[curious] La cercanía se elige: distancia euclidiana, distancia coseno y producto interno negativo comparan los vectores de formas diferentes.
[600ms]
[calm] El coseno considera la dirección, no la longitud, por lo que es una opción habitual para embeddings de texto.
[600ms]
[serious] Sigue la métrica recomendada por el modelo y recuerda que, en estos ejemplos, una distancia menor indica una coincidencia más cercana.

## Step 4 · Fast search: IVFFlat or HNSW

[confident] Un examen exacto compara todas las filas, mientras que un índice aproximado puede acelerar la búsqueda sacrificando algo de recall.
[600ms]
[calm] IVFFlat agrupa vectores existentes; HNSW construye un grafo por capas y suele necesitar más memoria.
[600ms]
[encouraging] Empieza con HNSW salvo que tus restricciones favorezcan IVFFlat y haz coincidir la medida de distancia del índice con la consulta.

## Step 5 · Keep embeddings and the index fresh

[serious] La calidad de búsqueda puede cambiar si el contenido editado conserva embeddings antiguos o cambia la distribución de los datos.
[600ms]
[confident] Actualiza el contenido modificado por lotes y considera recrear el índice a medida que evolucionan los datos.
[600ms]
[reassuring] Al cambiar de modelo de embedding, completa y valida una columna paralela antes de cambiar, sin mezclar modelos en una columna.

## Step 6 · Semantic retrieval with a filter

[confident] La pregunta se convierte en un embedding y los metadatos limitan los productos elegibles a la categoría que interesa al cliente.
[600ms]
[calm] Un umbral de distancia elimina coincidencias débiles; la clasificación devuelve las restantes más cercanas, no todas las filas elegibles.
[600ms]
[encouraging] Ajusta ese umbral con tus datos para equilibrar la recuperación de coincidencias relevantes y un filtrado demasiado restrictivo.

## Step 7 · RAG: PostgreSQL is the retriever

[confident] Sigue la pregunta por el embedding y la recuperación, hasta un prompt que contiene los fragmentos más cercanos y sus metadatos.
[600ms]
[calm] PostgreSQL recupera el contexto y el modelo de lenguaje lo utiliza para componer la respuesta.
[600ms]
[serious] Vincula los fragmentos con los documentos de origen para permitir citas y evalúa la recuperación antes de atribuir problemas a la generación.

## Step 8 · All in one: vector search in PostgreSQL

[confident] Una base de datos PostgreSQL guarda ahora filas relacionales y embeddings, conectando la pregunta del asistente con el contexto recuperado y la respuesta.
[600ms]
[calm] La extensión, la métrica, el índice, la actualización y los filtros de metadatos contribuyen a esa recuperación.
[600ms]
[encouraging] A continuación, ajusta la base de datos y la carga vectorial juntas para abordar la latencia sin perder de vista la relevancia.
