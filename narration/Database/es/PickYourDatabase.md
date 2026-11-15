# Narrator Script — Elige tu base de datos para apps de IA

**Source animation:** [PickYourDatabase.html](../../../journeys/Database/PickYourDatabase.html)
**Language:** es

Indicaciones: los estilos entre corchetes orientan la voz; [600ms] marca una pausa entre frases.

<!-- Sources: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-cosmos-db/ ; https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ ; https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview ; https://learn.microsoft.com/training/modules/design-data-integration/ -->

## Step 1 · One assistant, four kinds of data

[curious] El asistente de soporte de Contoso Outfitters necesita historial de chat, pedidos, búsqueda por significado y archivos grandes sin procesar.
[600ms]
[calm] Estas solicitudes convergen en un asistente, pero no requieren el mismo formato de almacenamiento ni patrón de acceso.
[600ms]
[reassuring] Observa los dos colores de la búsqueda: los vectores no pertenecen a un solo motor, así que la carga de trabajo debe orientar la elección.

## Step 2 · Documents and vectors: Cosmos DB

[confident] El mensaje de chat se convierte en un documento de Azure Cosmos DB for NoSQL, con un embedding guardado junto al texto.
[600ms]
[calm] Su clave de partición lo agrupa con datos del mismo cliente, en lugar de tratar cada documento como algo aislado.
[600ms]
[reassuring] Así se combinan almacenamiento documental flexible y recuperación vectorial, para buscar por significado sin separar el vector de su elemento.

## Step 3 · Tables plus vectors: PostgreSQL

[confident] Aquí el catálogo sigue en tablas relacionales, con una columna de embeddings junto a los campos habituales del producto.
[600ms]
[calm] Azure Database for PostgreSQL usa pgvector para combinar clasificación por significado, filtros de categoría y consultas relacionales.
[600ms]
[reassuring] Esto sirve a equipos que necesitan relaciones entre tablas y búsqueda vectorial juntas, pero deben habilitar la extensión en cada base de datos que la use.

## Step 4 · Relational at scale: Azure SQL family

[confident] Los pedidos y clientes de Contoso plantean otra decisión: ¿qué parte del entorno de base de datos quiere administrar el equipo?
[600ms]
[calm] Azure SQL Database y Azure SQL Managed Instance son servicios administrados, mientras SQL Server on Azure VMs permite acceder al sistema operativo.
[600ms]
[reassuring] Ajusta las necesidades de la aplicación a ese límite de administración, especialmente al trasladar una carga existente de SQL Server.

## Step 5 · Raw files and pipelines: the data lake

[confident] Las exportaciones de chat, los registros y las fotos de productos empiezan como archivos sin procesar en Azure Data Lake Storage.
[600ms]
[calm] Azure Data Factory conecta, recopila, transforma, publica y supervisa el flujo hacia el análisis.
[600ms]
[reassuring] Databricks, Synapse y Stream Analytics aparecen después porque esta ruta prepara datos para analizarlos, en lugar de tratar una colección de archivos como la base transaccional del asistente.

## Step 6 · Which one, when?

[curious] Elige una necesidad en la comparación y revisa el motor correspondiente, sus escenarios útiles y su advertencia.
[600ms]
[calm] Documentos, vectores relacionales, pedidos empresariales y canalizaciones de archivos implican distintas ventajas y compromisos.
[600ms]
[encouraging] Contoso puede usar más de una opción, así que decide por carga de trabajo en lugar de imponer un producto a todas las tareas.
