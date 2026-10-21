# Narrator Script — Diseñar el almacenamiento de datos relacionales

**Source animation:** [SqlRelationalDesign.html](../../../journeys/Database/SqlRelationalDesign.html)
**Language:** es

Guía de indicaciones: `[confident]`, `[reflective]` y `[serious]` indican el tono; `[600ms]` marca una pausa silenciosa entre oraciones.

<!-- Sources: https://learn.microsoft.com/en-us/training/modules/design-data-storage-solution-for-relational-data/ ; https://learn.microsoft.com/en-us/azure/azure-sql/database/security-best-practice#data-protection -->

## Step 1 · Three ways to run SQL on Azure

[confident]
El sistema de pedidos de Contoso necesita tablas, filas y claves, pero eso no determina quién administra la base de datos.
[600ms]
SQL Database administra la plataforma, Managed Instance conserva capacidades de instancia y SQL Server on Azure VMs da acceso al sistema operativo.
[600ms]
[reflective]
Estas ramas representan distintos límites de control y mantenimiento.

## Step 2 · Azure SQL Database

[confident]
Con Azure SQL Database, Contoso elige recursos sin administrar un sistema operativo ni una instancia de SQL Server.
[600ms]
Las opciones vCore y DTU describen cómo se compran los recursos, mientras que la opción sin servidor ajusta el proceso de una base de datos única.
[600ms]
[reflective]
Un grupo elástico permite que las bases regionales compartan recursos dentro de los límites configurados.

## Step 3 · Azure SQL Managed Instance

[confident]
La aplicación existente de Contoso depende de algo más que tablas individuales, así que la migración requiere una perspectiva de instancia.
[600ms]
Managed Instance incorpora capacidades como SQL Server Agent y servidores vinculados en una instancia administrada de SQL Server.
[600ms]
[reflective]
Pedidos, inventario y devoluciones comparten el proceso y el almacenamiento de esa instancia.

## Step 4 · SQL Server on Azure VMs

[confident]
A veces Contoso necesita acceso al sistema operativo y capacidades de SQL Server que requieren una máquina virtual.
[600ms]
Las capas muestran lo que abarca ese control: el motor de base de datos, el sistema operativo y la VM de Azure elegida.
[600ms]
[reflective]
Contoso también asume la responsabilidad de actualizar SQL Server y el sistema operativo.

## Step 5 · Recommend a scaling approach

[confident]
Los distintos problemas de crecimiento necesitan respuestas diferentes, como muestran las flechas de estos escenarios.
[600ms]
Los grupos elásticos comparten recursos, el escalado vertical cambia el tamaño del proceso y el escalado horizontal con sharding divide los datos entre bases.
[600ms]
[reflective]
Cuando finanzas necesita filas de varias bases de datos, la consulta elástica atiende esa necesidad de informes en lugar de simplemente añadir más proceso.

## Step 6 · Recommend an availability tier

[confident]
El nivel de servicio cambia la arquitectura que sostiene la base de datos de Contoso, no solo el tamaño del proceso.
[600ms]
General Purpose separa el proceso del almacenamiento remoto, mientras que Business Critical usa almacenamiento de conexión directa y réplicas.
[600ms]
[reflective]
Hyperscale añade servidores de páginas para almacenamiento escalable y escalado de lectura, y pertenece a SQL Database.

## Step 7 · Protect data in every state

[serious]
Sigue los datos desde el almacenamiento, a través de la conexión, hasta la columna confidencial que aparece a la derecha.
[600ms]
TDE protege los archivos almacenados, TLS protege los datos en tránsito y Always Encrypted protege columnas seleccionadas que el cliente cifra.
[600ms]
[reflective]
El enmascaramiento dinámico de datos solo oculta valores en los resultados de las consultas; no es cifrado.

## Step 8 · When relational is not the answer

[confident]
No todas las cargas necesitan el enfoque relacional del sistema de pedidos de Contoso.
[600ms]
Azure Table Storage y Azure Cosmos DB for Table comparten un modelo de datos de tabla, pero difieren en indexación, distribución, latencia y coherencia.
[600ms]
[reflective]
Revisa la comparación para decidir si esas capacidades adicionales se ajustan a las necesidades de la aplicación.

## Step 9 · All in one: pick the right store

[confident]
Comienza cada decisión con el requisito de la izquierda y sigue su flecha hasta una opción adecuada.
[600ms]
Las bases de datos en la nube, los grupos compartidos, las características de instancia y el acceso al sistema operativo conducen a elecciones distintas.
[600ms]
[reflective]
La arquitectura de disponibilidad, la protección de datos y el acceso global a tablas completan el diseño, sin sustituir esa primera decisión sobre la carga.
