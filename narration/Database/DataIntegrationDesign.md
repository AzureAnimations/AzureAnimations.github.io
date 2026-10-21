# Narrator Script — Design Data Integration and Data Lake

**Source animation:** [DataIntegrationDesign.html](../../journeys/Database/DataIntegrationDesign.html)
**Language:** en

Cue legend: `[confident]` and `[reflective]` direct delivery; `[600ms]` marks a silent pause between sentences.

<!-- Source: https://learn.microsoft.com/en-us/training/modules/design-data-integration/ -->

## Step 1 · Contoso’s data journey

[confident]
Contoso’s orders, website clicks and warehouse sensors produce different data, but the journey gives them a common direction.
[600ms]
Ingest collects it, store keeps it, prepare transforms and enriches it, and serve makes it available for analytics.
[600ms]
[reflective]
The same rail stays visible so each service has a recognizable job.

## Step 2 · Azure Data Factory: the orchestrator

[confident]
Azure Data Factory coordinates the work rather than making every source and processing tool operate independently.
[600ms]
Pipelines group activities, datasets describe data, linked services describe connections, and integration runtimes connect those pieces.
[600ms]
[reflective]
The lower flow follows that coordination from collection and transformation through publication and monitoring.

## Step 3 · Azure Data Lake Storage: raw data at scale

[confident]
Contoso can keep raw files in their native formats before deciding how to analyze them.
[600ms]
Data Lake Storage builds on Blob Storage by enabling a hierarchical namespace, giving directories a real role rather than treating folders as name prefixes.
[600ms]
[reflective]
The comparison also highlights file and directory access through POSIX permissions.

## Step 4 · Azure Databricks: Spark for big data

[confident]
Azure Databricks brings SQL, data engineering and machine learning work into a shared Spark platform.
[600ms]
The control plane manages the workspace, while the compute plane runs the processing.
[600ms]
[reflective]
Classic compute runs in Contoso’s Azure subscription; serverless compute runs in the Azure Databricks account, so those boundaries differ.

## Step 5 · Azure Synapse Analytics: one analytics service

[confident]
Azure Synapse Analytics combines data integration, storage and analytics rather than treating them as disconnected tasks.
[600ms]
The control node coordinates a query across compute nodes, illustrating how parallel processing divides the work.
[600ms]
[reflective]
SQL pools, Spark pools, pipelines and links sit alongside Synapse Studio in the shared toolbox.

## Step 6 · Hot, warm and cold data paths

[confident]
Contoso doesn’t need every answer at the same speed, so the flow separates into different data paths.
[600ms]
The hot path supports live alerts, while the warm path analyzes flowing data and keeps a recent subset.
[600ms]
[reflective]
The cold path retains original messages for longer term batch analysis.

## Step 7 · Azure Stream Analytics: insight from streams

[confident]
Azure Stream Analytics turns incoming events into results that other services can use.
[600ms]
Follow the arrows from Event Hubs, IoT Hub or Blob Storage through a SQL based query, where windows organize processing over time.
[600ms]
[reflective]
Outputs carry those results to destinations such as Power BI, Data Lake Storage and Cosmos DB.

## Step 8 · Which service for which job?

[confident]
Read this matrix from the job toward the service, not from a favorite product toward every problem.
[600ms]
Data Factory coordinates movement, Data Lake Storage keeps raw data, and Databricks provides shared Spark processing.
[600ms]
[reflective]
Synapse brings analytics components together, while Stream Analytics handles event streams with SQL based queries.

## Step 9 · All in One: Contoso’s data journey

[confident]
The completed board puts the services back into Contoso’s ingest, store, prepare and serve journey.
[600ms]
Data Factory and Event Hubs feed the flow, storage holds the data, and processing prepares useful results for analytics.
[600ms]
[reflective]
The paths underneath remind us that immediacy and retention shape where each piece belongs.
