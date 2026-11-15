# Narrator Script — PostgreSQL: crear y consultar

**Source animation:** [PostgresFoundations.html](../../../journeys/Database/PostgresFoundations.html)
**Language:** es

Las etiquetas entre corchetes indican la interpretación; [600ms] marca una pausa entre frases.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Why PostgreSQL behind the assistant?

[curious] El asistente de soporte de Contoso Outfitters necesita consultar datos de pedidos y productos, no adivinar sus detalles.
[600ms]
[confident] PostgreSQL ofrece tablas relacionales, fiabilidad transaccional, datos JSON flexibles y extensiones para las herramientas del asistente.
[600ms]
[reassuring] La llamada a una herramienta conecta la conversación con los registros del negocio y aporta una base factual para responder.

## Step 2 · A managed PostgreSQL, compute apart from storage

[confident] Azure Database for PostgreSQL ejecuta PostgreSQL de la comunidad como servicio administrado, con el proceso y el almacenamiento como componentes separados.
[600ms]
[calm] Los niveles de proceso atienden distintas cargas: actividad intermitente, aplicaciones generales y trabajo que exige más memoria.
[600ms]
[serious] Elige según la carga y recuerda que cambiar de nivel de proceso implica un breve reinicio.

## Step 3 · Connect with a token, not a password

[confident] La aplicación solicita un token de corta duración a Microsoft Entra ID y lo presenta al conectarse a PostgreSQL.
[600ms]
[calm] El token sustituye una contraseña almacenada, mientras que el cifrado protege los datos que viajan por la conexión.
[600ms]
[serious] Configura un administrador de Microsoft Entra en el servidor antes de depender de este flujo de autenticación.

## Step 4 · Model orders and products as tables

[confident] El esquema convierte los datos del negocio en columnas con tipo, y las claves y restricciones definen qué registros son válidos.
[600ms]
[calm] Una clave externa vincula el pedido con su producto; los valores obligatorios y los estados permitidos protegen la estructura.
[600ms]
[serious] Añade índices para las búsquedas reales, recordando que acelerar las lecturas también añade almacenamiento y trabajo de escritura.

## Step 5 · Page through orders the efficient way

[curious] Saltar filas para llegar a una página posterior obliga a leer y descartar datos que el cliente nunca ve.
[600ms]
[confident] La paginación por conjunto de claves continúa después del último pedido devuelto, combinando su marca de tiempo y su identificador único.
[600ms]
[reassuring] Usar ese mismo orden y filtro resuelve las marcas de tiempo iguales y evita volver a saltar las páginas anteriores.

## Step 6 · Call it from Python with psycopg

[confident] El adaptador de Python conecta la aplicación con PostgreSQL, obtiene un token de identidad y recupera un pedido mediante una consulta con parámetros.
[600ms]
[serious] Pasa los valores separados del texto de la consulta, en vez de construirla dando formato a la entrada del cliente.
[600ms]
[reassuring] Los administradores de contexto limpian los recursos; la lista recuerda tiempos de espera, reintentos, lotes y reutilización de conexiones.

## Step 7 · The exercise: an agent tool backend

[confident] Sigue la pregunta desde una herramienta de Python hasta PostgreSQL y observa cómo los datos devueltos llegan al asistente.
[600ms]
[calm] La pregunta sobre pedidos ilustra el flujo; el ejercicio almacena memoria del agente, como conversaciones, mensajes y puntos de control de tareas.
[600ms]
[encouraging] Construye y prueba ese flujo de memoria con autenticación de Microsoft Entra entre la capa de herramientas y la base de datos.

## Step 8 · PostgreSQL: build and query, all in one

[confident] El recorrido completo conecta al asistente, las herramientas de Python, la autenticación de identidad y PostgreSQL administrado detrás de una interacción.
[600ms]
[calm] Las restricciones organizan los registros, los índices atienden las búsquedas y las consultas eficientes recuperan la información que necesita el asistente.
[600ms]
[encouraging] Con esa base relacional lista, añade la búsqueda vectorial para encontrar contenido relevante por su significado.
