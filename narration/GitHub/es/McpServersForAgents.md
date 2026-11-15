# Narrator Script — GitHub · MCP Servers for Agents: GitHub Remote, Registries and Allow Lists

**Source animation:** [McpServersForAgents.html](../../../journeys/GitHub/McpServersForAgents.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>
- <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp>

---

## Step 1 · The Agent Cannot Reach Your Tools

[calm] El agente de programación de Contoso solo sabe lo que hay en su chat y en los archivos abiertos.
[600ms]
[concerned] Los logs de compilación, los issues y la documentación están en otras herramientas a las que no llega. Sin una conexión estándar, cada herramienta necesita su propio enlace a medida, o alguien tiene que pegar el contexto a mano.
[600ms]
[curious] Lo que hace falta es una forma estándar de conectar un agente con herramientas.

## Step 2 · What MCP Is: Client, Server, Tools

[curious] Ese estándar es el Model Context Protocol, un estándar abierto para conectar aplicaciones de IA con herramientas.
[600ms]
[confident] El host es la aplicación de IA, por ejemplo un IDE con un agente. Crea un cliente por cada servidor MCP al que se conecta.
[600ms]
[calm] Cada servidor es un programa que enumera las herramientas que ofrece. Los nombres de herramientas que ves aquí son solo ejemplos.

## Step 3 · Add an MCP Server to an Agent

[calm] Agregar un servidor requiere una sola entrada en tu editor, con un nombre y una URL para el servidor.
[600ms]
[confident] En Visual Studio Code, esa entrada va en el archivo de configuración de MCP, y el comando list servers te muestra lo que tienes configurado. Otros editores usan una entrada parecida.
[600ms]
[reassuring] Inicia el servidor y confirma que confías en él, y sus herramientas aparecen para el agente.

## Step 4 · The GitHub Remote MCP Server

[curious] GitHub aloja un servidor MCP por ti, así que no hay nada que instalar. El servidor local, en cambio, corre en tu propia máquina.
[600ms]
[confident] Conéctate a su URL e inicia sesión. OAuth es lo predeterminado, o puedes usar un token de acceso personal.
[600ms]
[encouraging] Luego elige solo los conjuntos de herramientas que el agente necesita, en vez de todos los grupos.

## Step 5 · Read-Only Versus Write

[calm] Algunas herramientas leen y otras escriben. Leer es consultar archivos, issues y pull requests. Escribir es crearlos o modificarlos.
[600ms]
[curious] Mueve el interruptor y mira. En modo de solo lectura, las herramientas que modifican cosas ni siquiera se ofrecen.
[600ms]
[confident] Lo activas con una ruta de solo lectura en la URL o con un encabezado. Un agente solo puede llamar a las herramientas que el servidor ofrece.

## Step 6 · Authentication and Token Scope

[calm] El agente actúa con tu inicio de sesión o con un token.
[600ms]
[serious] Los alcances que tiene el token son lo máximo que puede hacer una llamada equivocada o manipulada, así que concede solo lo que la tarea necesita.
[600ms]
[reassuring] El servidor de GitHub que usa el agente en la nube por defecto emplea un token de solo lectura, con un alcance especial, limitado al repositorio actual. Los nombres de alcances en pantalla son ilustrativos.

## Step 7 · A Registry of Approved Servers

[curious] Ahora, la vista de la organización. Un registro es un catálogo de los servidores MCP que tu organización aprueba.
[600ms]
[confident] Los desarrolladores encuentran ahí los servidores, en vez de buscarlos en internet. Es un conjunto de endpoints HTTPS que siguen la especificación de registro de MCP.
[600ms]
[reflective] Puedes alojar uno tú mismo o usar Azure API Center. Los registros están en vista previa pública, y los nombres de servidores de aquí son ficticios.

## Step 8 · Configure the Registry

[calm] El propietario de la organización activa MCP, le indica a GitHub la dirección del registro y elige la restricción.
[600ms]
[confident] Puedes permitir todos los servidores o solo los del registro. En una organización, estos ajustes están en las políticas de Copilot. Los propietarios de la empresa los encuentran en AI controls.
[600ms]
[serious] Con la opción de solo registro, la coincidencia es por nombre o ID del servidor, así que no es un bloqueo estricto.

## Step 9 · Allow Lists: Only Approved Servers

[calm] Una lista de permisos indica qué servidores pueden ejecutarse, por nombre, URL o comando de inicio.
[600ms]
[serious] Todo lo que no coincida se bloquea, y si hay una entrada de denegación que coincide, esa siempre gana.
[600ms]
[confident] Las listas viven en el archivo de configuración administrada de tu empresa. Cubren la configuración de usuario y de repositorio, pero no los servidores dentro de los perfiles de agente personalizados del repositorio.

## Step 10 · See a Blocked Server

[concerned] Maya agrega un servidor que no está en la lista, así que no arranca.
[600ms]
[confident] La solución está del lado de la política. Un propietario lo agrega al registro o a la lista de permisos, y luego ella recarga.
[600ms]
[encouraging] Para diagnosticar, revisa que estén habilitados los servidores MCP en Copilot, luego el registro o la lista de permisos, y después ejecuta el comando list servers.

## Step 11 · Recap: A Safe-by-Default MCP Checklist

[calm] Agrega los servidores a propósito, con una entrada y una verificación de confianza.
[600ms]
[confident] Límitalos con conjuntos de herramientas, modo de solo lectura y un token acotado. Y luego gobiérnalos con un registro y una lista de permisos.
[600ms]
[proud] Con eso cubres las habilidades de G H 600 para configurar servidores MCP. Recuerda: los registros están en vista previa pública, mientras que las listas de permisos son el control disponible de forma general.
