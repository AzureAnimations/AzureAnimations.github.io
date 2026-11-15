# Narrator Script — Foundry · Secure a Foundry Project: Identity, Network and Guardrails

**Source animation:** [SecureAFoundryProject.html](../../../../journeys/AI/Foundry/SecureAFoundryProject.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry>
- <https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry>
- <https://learn.microsoft.com/azure/foundry/how-to/configure-private-link>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>

---

## Step 1 · Keys in a screenshot: why keyless

[serious] Una clave de API es un secreto estático. Si termina en una captura de pantalla, en un chat o en un repositorio, quien la tenga obtiene acceso total.
[600ms]
[concerned] Y nadie puede saber quién la usó. Esta clave es un marcador de posición, y Contoso es ficticia.
[600ms]
[confident] Microsoft recomienda usar Microsoft Entra ID en su lugar, y es la opción correcta para cargas de trabajo de producción.

## Step 2 · Managed identity: for the project and your app

[calm] Dale a la aplicación web y al proyecto de Foundry sus propias identidades administradas. Azure administra la credencial, así que no hay nada que guardar ni rotar.
[600ms]
[confident] Después, una asignación de rol decide qué puede hacer cada identidad.
[600ms]
[curious] Una identidad puede ser asignada por el sistema o asignada por el usuario. Para iniciar sesión con tokens, el recurso de Foundry necesita un subdominio personalizado.

## Step 3 · Roles: who deploys, who calls, who builds

[calm] Foundry trae roles integrados. Elige el más limitado para cada tarea.
[600ms]
[confident] Luego asígnalo en el ámbito donde ocurre esa tarea, para que las personas y las aplicaciones no tengan más permisos de los que necesitan.
[600ms]
[serious] Los roles se aplican cuando inicias sesión con Microsoft Entra ID. Una clave de API se salta los roles y da acceso total.

## Step 4 · Private endpoints: close the public door

[calm] Configura el acceso a la red pública como Desactivado y agrega un endpoint privado.
[600ms]
[confident] Así, quienes llaman acceden al recurso de Foundry por tu red virtual, no por internet abierto.
[600ms]
[curious] Dentro de la red, el mismo nombre de endpoint se resuelve a una dirección privada, gracias a una zona DNS de private link.

## Step 5 · Data and egress: what leaves the network

[curious] El cliente del agente se inserta en tu propia subred. Desde ahí llega a tu Storage, tu AI Search y tu Cosmos DB mediante endpoints privados.
[600ms]
[confident] Un firewall decide qué puede salir de la red.
[600ms]
[reassuring] En una configuración estándar traes tu propio Storage, AI Search y Cosmos DB, así que los datos del agente se quedan en tu tenant de Azure.

## Step 6 · Content filters: categories, severity, blocking

[calm] Foundry llama a esto barreras de protección. Un control puntúa la gravedad de cada una de las cuatro categorías de daño.
[600ms]
[curious] Luego anota el resultado o lo bloquea, según el nivel de bloqueo que elijas. Prueba los interruptores.
[600ms]
[confident] Los controles analizan la entrada y la salida del usuario. En el caso de los agentes, también pueden analizar las llamadas y respuestas de herramientas, en versión preliminar. Los modelos usan la barrera de protección predeterminada, a menos que la cambies.

## Step 7 · Prompt Shields and groundedness

[serious] Prompt Shields detecta instrucciones hostiles u ocultas antes de que el modelo actúe sobre ellas.
[600ms]
[concerned] La detección de ataques a documentos viene desactivada por defecto, así que actívala.
[600ms]
[calm] La detección de fundamentación verifica la respuesta contra tu texto de origen. Está en versión preliminar, no se aplica a agentes y se retira el treinta de abril de dos mil veintisiete.

## Step 8 · Custom blocklists and risk detection

[calm] Agrega tus propios términos prohibidos. Pueden ser coincidencias exactas o expresiones regulares.
[600ms]
[curious] Luego activa los detectores de material protegido y de datos personales. La detección de datos personales está en versión preliminar.
[600ms]
[confident] Cada uno puede anotar la respuesta o bloquearla. Todos los nombres y números de aquí son ficticios.

## Step 9 · Audit it: logs, traces and approval gates

[calm] Envía los registros de recursos a Azure Monitor y rastrea cada ejecución del agente.
[600ms]
[serious] Haz que las llamadas de herramientas riesgosas esperen la aprobación de una persona. El ejemplo usa una herramienta MCP configurada para exigir siempre aprobación.
[600ms]
[confident] Registra las aprobaciones y las llamadas a herramientas para poder auditarlas después.

## Step 10 · Secure project at a glance

[calm] Cuatro capas trabajan juntas: quién llama, desde qué red, con qué contenido y qué puedes demostrar después.
[600ms]
[reflective] Ninguna capa basta por sí sola.
[600ms]
[proud] Identidad, red, barreras de protección y auditoría se complementan, y juntas forman un proyecto que puedes defender.
