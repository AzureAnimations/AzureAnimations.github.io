# Narrator Script — PostgreSQL: Build and Query

**Source animation:** [PostgresFoundations.html](../../journeys/Database/PostgresFoundations.html)
**Language:** en

Cues in brackets guide delivery; [600ms] marks a pause between spoken sentences.

<!-- Fact source: https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/ · Learning path: https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-database-postgresql/ -->

## Step 1 · Why PostgreSQL behind the assistant?

[curious] Contoso Outfitters’ support assistant needs order and product facts it can retrieve, rather than details it must guess.
[600ms]
[confident] PostgreSQL provides relational tables, transactional reliability, flexible JSON data, and extensions behind the assistant’s tools.
[600ms]
[reassuring] The tool call connects the conversation to stored business records, giving the assistant a factual basis for its response.

## Step 2 · A managed PostgreSQL, compute apart from storage

[confident] Azure Database for PostgreSQL runs community PostgreSQL as a managed service, with compute and storage shown as separate components.
[600ms]
[calm] The compute tiers suit different workloads, from intermittent activity to general applications and more memory-demanding work.
[600ms]
[serious] Choose for the workload, and remember that changing compute tiers involves a brief restart.

## Step 3 · Connect with a token, not a password

[confident] The application requests a short-lived token from Microsoft Entra ID and presents it when connecting to PostgreSQL.
[600ms]
[calm] The token takes the place of a stored password, while encryption protects data traveling over the connection.
[600ms]
[serious] Configure a Microsoft Entra administrator on the server before relying on this authentication flow.

## Step 4 · Model orders and products as tables

[confident] The schema turns business facts into typed columns, with keys and constraints defining which records are valid.
[600ms]
[calm] A foreign key links an order to its product, while required values and allowed statuses protect the structure.
[600ms]
[serious] Add indexes for actual lookup patterns, remembering that faster reads also bring storage and write overhead.

## Step 5 · Page through orders the efficient way

[curious] Skipping rows to reach a later page means reading and discarding data that the customer never sees.
[600ms]
[confident] Keyset pagination instead resumes after the last returned order, using its timestamp and unique identifier together.
[600ms]
[reassuring] That shared ordering and filter handle matching timestamps while avoiding the repeated work of skipping earlier pages.

## Step 6 · Call it from Python with psycopg

[confident] The Python adapter connects the application to PostgreSQL, obtains an identity token, and retrieves an order through a parameterized query.
[600ms]
[serious] Pass values separately from query text, rather than constructing a query by formatting customer input.
[600ms]
[reassuring] Context managers handle cleanup, while the checklist highlights timeouts, retries, batching, and connection reuse.

## Step 7 · The exercise: an agent tool backend

[confident] Follow the question through a Python tool to PostgreSQL, then watch the returned facts reach the assistant.
[600ms]
[calm] The order question illustrates that flow, while the exercise stores agent memory such as conversations, messages, and task checkpoints.
[600ms]
[encouraging] Build and test that memory workflow with Microsoft Entra authentication connecting the tool layer to the database.

## Step 8 · PostgreSQL: build and query, all in one

[confident] The complete path joins the assistant, Python tools, identity authentication, and a managed PostgreSQL database behind one interaction.
[600ms]
[calm] Constraints organize the records, indexes support lookups, and efficient queries retrieve the information the assistant needs.
[600ms]
[encouraging] With that relational foundation in place, add vector search next to find relevant content by meaning.
