# Narrator Script — Diseñar la integración de datos y el lago de datos

**Source animation:** [DataIntegrationDesign.html](../../../journeys/Database/DataIntegrationDesign.html)
**Language:** es

Guía de indicaciones: `[confident]` y `[reflective]` indican el tono; `[600ms]` marca una pausa silenciosa entre oraciones.

<!-- Source: https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · Contoso’s data journey

[confident]
Los pedidos, los clics del sitio web y los sensores del almacén de Contoso generan datos distintos, pero el recorrido les da una dirección común.
[600ms]
Ingesta los recopila, almacenar los conserva, preparar los transforma y enriquece, y servir los pone a disposición del análisis.
[600ms]
[reflective]
La misma línea permanece visible para que cada servicio tenga una función reconocible.

## Step 2 · Azure Data Factory: the orchestrator

[confident]
Azure Data Factory coordina el trabajo para que los orígenes y las herramientas de procesamiento no funcionen por separado.
[600ms]
Las canalizaciones agrupan actividades, los conjuntos de datos describen los datos, los servicios vinculados describen conexiones y los entornos de ejecución de integración unen esas piezas.
[600ms]
[reflective]
El flujo inferior sigue esa coordinación desde la recopilación y la transformación hasta la publicación y la supervisión.

## Step 3 · Azure Data Lake Storage: raw data at scale

[confident]
Contoso puede conservar archivos sin procesar en su formato nativo antes de decidir cómo analizarlos.
[600ms]
Data Lake Storage se basa en Blob Storage y activa un espacio de nombres jerárquico que da a los directorios una función real, en lugar de tratar las carpetas como prefijos de nombre.
[600ms]
[reflective]
La comparación también destaca el acceso a archivos y directorios mediante permisos POSIX.

## Step 4 · Azure Databricks: Spark for big data

[confident]
Azure Databricks reúne SQL, ingeniería de datos y aprendizaje automático en una plataforma de Spark compartida.
[600ms]
El plano de control administra el espacio de trabajo, mientras que el plano de proceso ejecuta el procesamiento.
[600ms]
[reflective]
El proceso clásico se ejecuta en la suscripción de Azure de Contoso y el proceso sin servidor en la cuenta de Azure Databricks, por lo que sus límites difieren.

## Step 5 · Azure Synapse Analytics: one analytics service

[confident]
Azure Synapse Analytics combina integración, almacenamiento y análisis de datos, en lugar de tratarlos como tareas desconectadas.
[600ms]
El nodo de control coordina una consulta entre nodos de proceso y muestra cómo el procesamiento paralelo divide el trabajo.
[600ms]
[reflective]
Los grupos de SQL, los grupos de Spark, las canalizaciones y los vínculos acompañan a Synapse Studio en ese conjunto de herramientas.

## Step 6 · Hot, warm and cold data paths

[confident]
Contoso no necesita todas las respuestas a la misma velocidad, así que el flujo se divide en distintas rutas de datos.
[600ms]
La ruta activa permite alertas en tiempo real, mientras que la ruta templada analiza los datos en movimiento y conserva un subconjunto reciente.
[600ms]
[reflective]
La ruta fría guarda los mensajes originales para análisis por lotes a más largo plazo.

## Step 7 · Azure Stream Analytics: insight from streams

[confident]
Azure Stream Analytics convierte los eventos entrantes en resultados que otros servicios pueden utilizar.
[600ms]
Sigue las flechas desde Event Hubs, IoT Hub o Blob Storage hasta una consulta basada en SQL, donde las ventanas organizan el procesamiento en el tiempo.
[600ms]
[reflective]
Las salidas llevan esos resultados a destinos como Power BI, Data Lake Storage y Cosmos DB.

## Step 8 · Which service for which job?

[confident]
Lee esta matriz desde la tarea hacia el servicio, no desde un producto favorito hacia todos los problemas.
[600ms]
Data Factory coordina el movimiento, Data Lake Storage conserva los datos sin procesar y Databricks ofrece procesamiento compartido con Spark.
[600ms]
[reflective]
Synapse reúne componentes de análisis, mientras que Stream Analytics procesa flujos de eventos con consultas basadas en SQL.

## Step 9 · All in One: Contoso’s data journey

[confident]
El tablero completo vuelve a colocar los servicios en el recorrido de Contoso: ingesta, almacenar, preparar y servir.
[600ms]
Data Factory y Event Hubs alimentan el flujo, el almacenamiento conserva los datos y el procesamiento prepara resultados útiles para el análisis.
[600ms]
[reflective]
Las rutas de abajo recuerdan que la inmediatez y la retención determinan dónde corresponde cada pieza.
