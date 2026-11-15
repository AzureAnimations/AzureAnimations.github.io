# Narrator Script — Cosmos DB: crear y consultar

**Source animation:** [CosmosFoundations.html](../../../journeys/Database/CosmosFoundations.html)
**Language:** es

Indicaciones: los estilos entre corchetes orientan la voz; [600ms] marca una pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/ -->

## Step 1 · Why a document database?

[confident] Los mensajes de chat y los documentos de producto de Contoso tienen formatos distintos, aunque ambos sirven al asistente de soporte.
[600ms]
[calm] Azure Cosmos DB for NoSQL los almacena como documentos JSON sin exigir que todos los elementos compartan un esquema fijo.
[600ms]
[reassuring] Los ejemplos muestran por qué los elementos flexibles encajan aquí, mientras las herramientas de desarrollo conocidas permiten acceder a ellos.

## Step 2 · Account, database, container, item

[confident] Lee la estructura de afuera hacia adentro: cuenta, base de datos, contenedor y elementos individuales.
[600ms]
[calm] La base del catálogo contiene contenedores separados para productos y usuarios, cada uno con su propia elección de clave de partición.
[600ms]
[reassuring] Esta jerarquía también guía a la aplicación, así que saber dónde vive un elemento facilita seguir las operaciones del cliente que vienen después.

## Step 3 · Partition key: where items live

[confident] El valor de categoría dirige cada producto a su partición lógica, como muestran los grupos de tiendas, estufas y mochilas.
[600ms]
[calm] Elige una propiedad con muchos valores distintos y una distribución equilibrada, en vez de concentrar la actividad en pocos valores.
[600ms]
[serious] Decide con cuidado antes de crear el contenedor, porque cambiar después su clave de partición exige trasladar los datos.

## Step 4 · Connect with the SDK

[confident] La aplicación empieza con un cliente, se autentica y obtiene los identificadores de la base de datos y del contenedor de productos.
[600ms]
[calm] Microsoft Entra ID ofrece acceso basado en roles sin poner un secreto de cuenta en el código, pero debes asignar el rol de datos adecuado.
[600ms]
[reassuring] Reutiliza el cliente en la aplicación; obtener esos identificadores de recursos por sí solo no realiza una llamada de red.

## Step 5 · Create, read, replace, upsert, delete

[confident] Sigue un producto por las operaciones: crear lo añade y una lectura directa lo recupera con su identificador y clave de partición.
[600ms]
[calm] Reemplazar modifica un elemento existente, mientras upsert inserta o reemplaza según si el elemento ya existe.
[600ms]
[serious] Eliminar quita el elemento identificado, así que elige la operación que corresponda a tu intención en lugar de tratar todas las escrituras igual.

## Step 6 · Point read or query?

[curious] ¿Ya conoces el identificador y la clave de partición del elemento, o necesitas descubrir elementos que coincidan?
[600ms]
[calm] Una lectura puntual accede directamente a un elemento, mientras una consulta filtra, proyecta u ordena según tus criterios.
[600ms]
[reassuring] Usa el acceso directo cuando encaje y mantén las consultas dentro de una partición cuando sea posible para evitar distribuirlas innecesariamente.

## Step 7 · Query: filter and project

[confident] La consulta conserva las tiendas que cumplen la condición de precio y excluye del resultado la más cara.
[600ms]
[calm] Devuelve solo el identificador, el nombre y el precio, en lugar de enviar todas las propiedades al asistente.
[600ms]
[reassuring] El filtrado decide qué elementos cumplen, la proyección elige sus campos y la clave de partición concentra este ejemplo en el grupo pertinente.

## Step 8 · All in one: build and query

[confident] Reúne las piezas: modela los recursos, conéctate mediante un cliente reutilizable y después lee y escribe los elementos.
[600ms]
[calm] Usa una lectura puntual para un elemento conocido o una consulta filtrada cuando el asistente deba encontrar datos coincidentes.
[600ms]
[encouraging] Esta base te prepara para añadir embeddings y recuperación vectorial sin perder de vista los documentos que describen.
