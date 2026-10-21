# Narrator Script — Contoso lanza el asistente

**Source animation:** [ContosoShips.html](../../../journeys/Database/ContosoShips.html)
**Language:** es

Guía de indicaciones: `[confident]` y `[reflective]` indican el tono; `[600ms]` marca una pausa silenciosa entre oraciones.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/ ; https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · One question, two kinds of answer

[confident]
El cliente de Contoso busca una tienda de campaña que se mantenga seca bajo la lluvia y quiere saber dónde está un pedido.
[600ms]
El asistente divide la solicitud porque el significado del producto y los hechos del pedido necesitan distintas formas de recuperación.
[600ms]
[reflective]
Relacionar la intención ayuda a encontrar tiendas, pero un pedido necesita registros exactos.

## Step 2 · Cosmos DB remembers the conversation

[confident]
La nueva conexión da al asistente un lugar donde recuperar el historial de chat en Azure Cosmos DB.
[600ms]
El elemento de chat conserva juntos el texto y su embedding, mientras que la clave de partición organiza el historial del cliente.
[600ms]
[reflective]
Cuando se conocen el identificador del elemento y la clave de partición, una lectura de punto recupera ese elemento concreto.

## Step 3 · Find the tent by meaning

[confident]
La pregunta se convierte en un embedding con el mismo modelo de los vectores almacenados, para poder comparar sus significados.
[600ms]
El filtro de metadatos de tiendas de campaña mantiene pertinentes los resultados, con la tienda Alpine 2P a la cabeza de estas coincidencias ilustrativas.
[600ms]
[reflective]
La puntuación coseno de Cosmos aumenta con la similitud, mientras que la distancia coseno de pgvector disminuye con la cercanía.

## Step 4 · Look up the order with a tool

[confident]
El estado del pedido viene de una herramienta de Python que consulta PostgreSQL, no de la similitud con la pregunta del cliente.
[600ms]
La conexión usa un token de Microsoft Entra y TLS, y los parámetros separan los valores recibidos del SQL.
[600ms]
[reflective]
Las filas devueltas fundamentan la respuesta; la paginación por conjunto de claves permite recorrer historiales de pedidos más largos.

## Step 5 · Fast and affordable on both engines

[confident]
Estas barras de antes y después ilustran objetivos de ajuste, no promesas medidas para la carga de Contoso.
[600ms]
Las opciones de indexación de Cosmos DB afectan al cargo de RU, mientras que los parámetros, índices vectoriales y la agrupación de conexiones de PostgreSQL influyen en las consultas.
[600ms]
[reflective]
Primero mide el cargo de RU y la latencia, y prueba después un cambio a la vez con datos representativos.

## Step 6 · Optional: zoom out to the architect view

[confident]
El mapa del asistente permanece mientras la vista inferior se amplía a la arquitectura de datos de Contoso.
[600ms]
Los pedidos pueden usar la familia de Azure SQL, mientras que los chats y registros sin procesar pasan por Data Factory hacia Data Lake Storage.
[600ms]
[reflective]
Databricks prepara y analiza esos datos, ampliando la perspectiva más allá de las solicitudes individuales.

## Step 7 · Contoso ships the assistant

[confident]
El mapa completo conecta dividir la pregunta, vectorizarla, buscar, consultar hechos y ajustar los almacenes.
[600ms]
Cosmos DB aporta memoria y significado, mientras que PostgreSQL aporta hechos y también puede buscar por significado.
[600ms]
[reflective]
La arquitectura opcional acompaña a este ejemplo en funcionamiento y muestra que cada almacén tiene una función deliberada.
