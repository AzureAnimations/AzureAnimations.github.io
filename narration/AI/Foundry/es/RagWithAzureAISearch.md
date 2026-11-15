# Narrator Script — Foundry · RAG with Azure AI Search

**Source animation:** [RagWithAzureAISearch.html](../../../../journeys/AI/Foundry/RagWithAzureAISearch.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview>
- <https://learn.microsoft.com/azure/search/search-indexer-overview>
- <https://learn.microsoft.com/azure/search/vector-search-integrated-vectorization>

---

## Step 1 · A model that has never read your files

[curious] Maya le hace una pregunta sencilla a la asistente de Contoso sobre la política de trabajo remoto.
[600ms]
[concerned] El modelo solo conoce sus datos de entrenamiento, y eso tiene una fecha límite. Los archivos privados y cambiantes de RRHH de Contoso no están ahí.
[600ms]
[serious] Así que hace lo que hacen los modelos cuando no lo saben: adivina, y la respuesta suena segura pero no está fundamentada.

## Step 2 · RAG: retrieve, augment, generate

[calm] La generación aumentada por recuperación, o RAG, soluciona esto en tres movimientos.
[600ms]
[confident] Primero busca los pasajes correctos. Luego añádelos al prompt. Después deja que el modelo responda a partir de ellos.
[600ms]
[reassuring] El modelo no está reentrenado. Los hechos llegan en la consigna a la hora de la pregunta, así que tu contenido puede cambiar cada día.

## Step 3 · Ingest: from files to a search index

[curious] Un indexador extrae contenido de tu fuente de datos a un índice de búsqueda en Azure AI Search.
[600ms]
[confident] Puede reejecutarse en un horario, lo que mantiene el índice fresco a medida que tus archivos cambian.
[600ms]
[calm] El índice es una copia separada y buscable en el servicio de búsqueda. Eso es lo que hace que las consultas sean rápidas, porque el servicio no vuelve a tu fuente en el momento de la pregunta.

## Step 4 · Enrich: read, chunk, and embed

[curious] A continuación, un conjunto de habilidades recorre AI habilidades en cada documento.
[600ms]
[confident] Una habilidad lee texto de escaneos, otra lo divide en pasajes y otra convierte cada pasaje en un vector.
[600ms]
[impressed] También hay habilidades para tablas y figuras. Con la vectorización integrada, la incrustación ocurre en el indexado una y otra vez en el momento de la consulta.

## Step 5 · The index: one chunk, one document

[calm] Cada fragmento se convierte en su propio documento de búsqueda en el índice.
[600ms]
[confident] Los atributos del campo deciden cómo puede buscarse, filtrarse y devolver para las citas. Un campo vectorial contiene la incrustación, y sus dimensiones deben coincidir con tu modelo de incrustación.
[600ms]
[serious] Solo se pueden devolver campos recuperables, así que mantén un campo de enlace de fuente si quieres citas que apunten hacia atrás.

## Step 6 · Four ways to ask the index

[curious] Hay cuatro formas de hacerle una pregunta al índice.
[600ms]
[confident] El texto completo coincide con las palabras. El vector coincide con el significado. El híbrido hace ambas cosas en una sola petición.
[600ms]
[impressed] Y el clasificador semántico entonces reordena los mejores resultados, de modo que el pasaje más útil sube a la cima.

## Step 7 · Try it: which mode finds the answer?

[encouraging] Ahora pruébalo tú mismo. Elige una pregunta y luego un modo de búsqueda.
[600ms]
[curious] Observa qué fragmentos llegan al modelo y fíjate en dónde queda el fragmento con la respuesta en la clasificación.
[600ms]
[reflective] La clasificación aquí es ilustrativa, sobre fragmentos Contoso inventados. Los resultados reales dependen de tu contenido, tus campos y tu modelo de incrustación.

## Step 8 · Ground a Foundry agent on the index

[confident] Para dar la base a un agente, añade un enlace de proyecto a tu servicio de búsqueda.
[600ms]
[calm] Luego apunta la herramienta de Azure AI Search del agente al índice y las respuestas vuelven con citas.
[600ms]
[serious] Prefiero la identidad gestionada del proyecto sobre las llaves. La red privada requiere Microsoft Entra, así que consulta Learn para las asignaciones exactas de roles.

## Step 9 · When one search is not enough

[curious] A veces, una sola búsqueda no es suficiente para una pregunta complicada.
[600ms]
[confident] La recuperación por agentes pone una base de conocimiento delante de tus fuentes. Planifica las subconsultas, las ejecuta en paralelo, vuelve a clasificar y devuelve resultados fundamentados.
[600ms]
[reflective] En Foundry, Foundry IQ da a los agentes esa base de conocimiento, con Azure AI Search como motor debajo. Algunas partes siguen siendo vista previa, así que revisa la versión API que te dirijas.

## Step 10 · Only retrieve what the caller may see

[serious] La recuperación conlleva un riesgo. No todo el mundo debería ver todos los documentos.
[600ms]
[confident] Así que filtra los resultados por la identidad del llamante en el momento de la consulta. Los chunks restringidos nunca llegan al prompt, quien pregunte al modelo.
[600ms]
[calm] Un filtro de seguridad coincide con un valor de usuario o grupo en un campo filtrable. El control de acceso integrado a nivel de documento está disponible en vista previa.

## Step 11 · Measure it, then tune cost and latency

[curious] Ahora mide. Recupera la puntuación y responde con evaluadores, como recuperación, fundamento y relevancia.
[600ms]
[confident] Luego ajusta las palancas que intercambian la calidad de la respuesta con el coste y el tiempo de respuesta.
[600ms]
[reflective] La evaluación es un tema aparte, así que este paso solo muestra dónde encaja. Las alturas del guión aquí son ilustrativas.

## Step 12 · RAG with Azure AI Search, all in one

[calm] Absorbe y enriquiera tu contenido una vez. Consulta según lo que necesite cada pregunta.
[600ms]
[confident] Aterrizar el agente, recortar los resultados por identidad, luego medir y ajustar.
[600ms]
[proud] Esa es la línea detrás de los objetivos de recuperación de A I 103, y encaja bien con A I 200, que practica la misma idea de RAG en otros almacenes vectoriales.
