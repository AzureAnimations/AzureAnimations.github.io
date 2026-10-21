# Narrator Script — Cosmos DB: optimizar el rendimiento

**Source animation:** [CosmosOptimize.html](../../../journeys/Database/CosmosOptimize.html)
**Language:** es

Las etiquetas entre corchetes indican la interpretación; [600ms] marca una pausa entre frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ -->

## Step 1 · Measure before you tune

[curious] La búsqueda de productos de Contoso va lenta, así que empieza por las métricas, no por adivinar qué configuración cambiar.
[600ms]
[calm] Compara los documentos recuperados con los devueltos, junto con el uso del índice y el costo de la solicitud.
[600ms]
[encouraging] Añade el índice que falta, espera a que termine su transformación y vuelve a medir.

## Step 2 · The indexing policy decides what is indexed

[confident] La directiva de indexación determina qué propiedades de los productos reciben índices, sin considerar todas igual de útiles.
[600ms]
[calm] Compara la directiva predeterminada, más amplia, con una selectiva que cubra los campos consultados por esta carga de trabajo.
[600ms]
[reassuring] Excluir propiedades innecesarias del índice de rango reduce el mantenimiento y conserva los índices de las búsquedas importantes.

## Step 3 · Composite index for filter + sort

[curious] Contoso filtra productos por categoría y los ordena por precio, pero atender solo el filtro deja trabajo de ordenación.
[600ms]
[confident] La consulta revisada incluye la propiedad filtrada en la ordenación y la combina con un índice compuesto correspondiente.
[600ms]
[serious] Haz coincidir tanto el orden de las propiedades como la dirección de ordenación y mide si mejora el costo de la solicitud.

## Step 4 · Pick a vector index by dataset size

[confident] La elección del índice vectorial depende del tamaño de los datos y del equilibrio entre precisión, velocidad y costo de solicitud.
[600ms]
[calm] Las tarjetas comparan un enfoque plano exacto, otro plano comprimido y diskANN para colecciones más grandes.
[600ms]
[encouraging] Prueba las opciones adecuadas con los mismos vectores y consultas, sin asumir que un índice gana en todas las cargas.

## Step 5 · Every index trades read speed for write cost

[serious] Un índice puede abaratar las búsquedas, pero cada índice adicional también añade trabajo al escribir productos.
[600ms]
[calm] Las cargas con muchas escrituras favorecen una directiva más ligera; las centradas en lecturas pueden justificar más índices para sus consultas.
[600ms]
[reassuring] Para sustituir un índice, añade primero el nuevo y espera a que termine la transformación antes de eliminar el anterior.

## Step 6 · Consistency is a latency and RU dial

[confident] La coherencia también depende de la carga de trabajo y equilibra la actualidad de las lecturas, la latencia y el costo de solicitud.
[600ms]
[calm] La tabla compara cinco niveles y destaca Sesión para el chat de Contoso y la lectura de sus propias escrituras.
[600ms]
[serious] Si varios servicios participan en esa interacción, transmite el token de sesión para que conserven el contexto de la sesión.

## Step 7 · Contoso tunes the product container

[confident] Contoso sustituye ahora la configuración predeterminada por decisiones vinculadas a las consultas reales de su contenedor de productos.
[600ms]
[calm] Las rutas selectivas, un índice vectorial separado, un índice compuesto correspondiente y la coherencia de Sesión atienden distintas partes de la carga.
[600ms]
[serious] La comparación es ilustrativa, así que confirma el efecto sobre lecturas y escrituras midiendo el costo de las solicitudes.

## Step 8 · Optimizing Cosmos DB, all in one

[confident] Estas decisiones actúan sobre un mismo contenedor: medir la consulta, ajustar la directiva de indexación y atender su ordenación.
[600ms]
[calm] Elige un índice vectorial y un nivel de coherencia adecuados para la experiencia de búsqueda, en vez de maximizar cada configuración.
[600ms]
[encouraging] Revisa las métricas después de los cambios y aplica ese enfoque basado en evidencia a las tablas y consultas de PostgreSQL.
