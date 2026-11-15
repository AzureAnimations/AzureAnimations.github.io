# Narrator Script — PostgreSQL: optimizar la búsqueda vectorial

**Source animation:** [PostgresOptimize.html](../../../journeys/Database/PostgresOptimize.html)
**Language:** es

Las etiquetas entre corchetes indican la interpretación; [600ms] marca una pausa entre frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Where a vector query spends its time

[curious] Una búsqueda de productos lenta puede gastar tiempo en varios puntos, no solo al comparar vectores.
[600ms]
[calm] Revisa la conexión, la planificación, las comparaciones vectoriales y las lecturas para saber adónde va el tiempo.
[600ms]
[encouraging] Establece primero una referencia, para que cada ajuste atienda una causa de demora observada.

## Step 2 · Tune PostgreSQL for pgvector

[confident] La memoria, el comportamiento del planificador y el esfuerzo de búsqueda vectorial ofrecen distintas formas de ajustar la misma consulta.
[600ms]
[serious] Estos parámetros equilibran memoria, latencia y recall, así que la velocidad de respuesta no es la única medida importante.
[600ms]
[encouraging] Cambia un parámetro a la vez, revisa el plan de ejecución y prueba el resultado con datos representativos.

## Step 3 · Choose and configure the vector index

[confident] Elige el índice vectorial según la memoria, el tiempo de creación, el recall y la frecuencia de cambio de los datos.
[600ms]
[calm] La comparación separa las decisiones de creación del esfuerzo de búsqueda por consulta, con un examen exacto como referencia.
[600ms]
[serious] Haz coincidir la medida de distancia con la consulta y prueba los compromisos, sin elegir solo por el nombre del índice.

## Step 4 · Shape the table for vectors and filters

[confident] Guarda los atributos de producto filtrados con frecuencia en columnas con tipo; los embeddings y el JSON flexible cumplen otras funciones.
[600ms]
[calm] Usa B-tree para categoría y precio, un índice parcial para productos en existencia y GIN para contención JSON.
[600ms]
[serious] Vincula cada índice con su patrón de acceso, sin esperar que el índice vectorial acelere todos los filtros.

## Step 5 · Scale for high-volume workloads

[confident] Escala primero verticalmente si las consultas individuales son lentas o los vectores e índices presionan la memoria disponible.
[600ms]
[calm] Después, usa réplicas de lectura para el volumen de lecturas y Azure Managed Redis para búsquedas repetidas, como muestra el diagrama.
[600ms]
[serious] Mantén las escrituras en el servidor principal y mide dónde ayuda realmente la capacidad adicional.

## Step 6 · Pool connections and manage sessions

[confident] PgBouncer permite que muchos clientes compartan menos conexiones de servidor, reduciendo la preparación repetida y la memoria usada por las conexiones.
[600ms]
[calm] El modo Transacción comparte conexiones entre transacciones; el modo Sesión conserva una hasta que el cliente se desconecta.
[600ms]
[serious] Limita los parámetros específicos a la transacción para no transmitir configuraciones involuntarias al trabajo posterior mediante conexiones compartidas.

## Step 7 · Contoso’s product search, tuned

[confident] La comparación de Contoso reúne los ajustes: parámetros, un índice vectorial, filtros con tipo, capacidad adecuada y conexiones agrupadas.
[600ms]
[calm] Cada cambio atiende una causa distinta de espera, manteniendo la misma tabla y la misma pregunta sobre productos.
[600ms]
[serious] Es una ilustración cualitativa, así que compara con tus datos y registra lo que aporta cada cambio individual.

## Step 8 · All in One: Optimize vector search

[confident] La vista final reúne cinco palancas sobre una carga PostgreSQL: parámetros, índices vectoriales, diseño de tablas, escalado y agrupación de conexiones.
[600ms]
[calm] La mejora proviene de ajustar esas decisiones al comportamiento observado, no de copiar sin cambios todas las configuraciones de ejemplo.
[600ms]
[encouraging] Primero mide, prueba cada cambio con datos similares a producción y documenta su efecto antes del siguiente ajuste.
