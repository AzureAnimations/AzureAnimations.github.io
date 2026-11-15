# Narrator Script — Security · Secure AI agents with Microsoft Entra Agent ID — Azure Security Journey

**Source animation:** [EntraAgentId.html](../../../journeys/Security/EntraAgentId.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/entra/agent-id/what-is-microsoft-entra-agent-id>
- <https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers>
- <https://learn.microsoft.com/entra/identity/conditional-access/agent-id>
- <https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview>

---

## Step 1 · An agent that acts on its own

[curious] El agente de facturas de Contoso lee correos, archivos y datos financieros de forma programada, sin que nadie haya iniciado sesión.
[600ms]
[serious] Si alguien lo secuestra, el atacante hereda todo a lo que el agente tiene acceso.
[600ms]
[calm] Esta lección sigue a un agente desde su identidad hasta su contención. Las funciones que todavía están en vista previa van marcadas.

## Step 2 · Why agents need identities of their own

[calm] Imagina que el agente usa prestada la cuenta de una persona. Mira el registro: no hay forma de saber quién actuó, si la persona o el agente.
[600ms]
[confident] Una identidad de agente propia separa las acciones del agente de las de las personas, y te permite ajustar su acceso a lo justo.
[600ms]
[curious] También mantiene a los agentes lejos de los roles más críticos, y escala bien, porque los agentes entran y salen todo el tiempo.

## Step 3 · Microsoft Entra Agent ID: identities and blueprints

[calm] Entra Agent ID les da a los agentes de IA identidades diseñadas para ellos en tu directorio.
[600ms]
[curious] Un blueprint de identidad de agente es la plantilla. De él se crea cada identidad de agente, con sus propias credenciales y permisos.
[600ms]
[reflective] Algunas protecciones requieren una licencia de Microsoft Agent 365, así que revisa la página de licencias vigente. Los agentes los encuentras en el centro de administración de Entra.

## Step 4 · Who owns and sponsors an agent

[calm] Cada identidad de agente necesita personas que respondan por ella. Los propietarios la operan a nivel técnico, y son opcionales.
[600ms]
[confident] Los patrocinadores son representantes del negocio, y se requiere al menos uno. Responden por el propósito y el ciclo de vida del agente.
[600ms]
[reassuring] Un patrocinador puede deshabilitar el agente, pero no volver a habilitarlo. Y si un patrocinador se va, el patrocinio pasa a su jefe.

## Step 5 · What an agent may reach

[calm] El acceso llega mediante un paquete de acceso, que tiene tiempo limitado, está aprobado y se ajusta al trabajo.
[600ms]
[curious] Sam lo solicita para el agente, y el agente recibe solo lo que el paquete indica. Eso puede incluir grupos, permisos de API y roles de Entra.
[600ms]
[confident] En los blueprints, empieza solo con los ámbitos delegados esenciales.

## Step 6 · Conditional Access for agents

[curious] Cuando un agente le pide a Entra un token de acceso, primero el Acceso Condicional revisa las señales.
[600ms]
[calm] Luego permite o bloquea. Se ejecuta cada vez que se emite o se renueva un token.
[600ms]
[confident] Una política puede apuntar a un agente, a un blueprint completo o a agentes con atributos que tú asignes. El riesgo del agente todavía está en vista previa.

## Step 7 · Try it: change the risk level

[excited] Te toca. Elige un nivel de riesgo para el agente de facturas.
[600ms]
[curious] La política bloquea solo el nivel que nombra, así que fíjate en qué niveles todavía reciben un token.
[600ms]
[reassuring] En la vida real, empieza en modo de solo informe antes de activar la política.

## Step 8 · Review access and remove what is not needed

[calm] El acceso nunca debe durar más que la necesidad. Los paquetes caducan, y al patrocinador se le avisa cuando se acerca el fin.
[600ms]
[curious] El patrocinador puede pedir una prórroga, que puede iniciar una nueva aprobación, o dejar que venza.
[600ms]
[confident] Con las revisiones de acceso, Sam conserva o quita cada permiso, según un calendario.

## Step 9 · The blast radius

[serious] Si el agente se ve comprometido, el radio de explosión son todos los sistemas a los que puede llegar, de forma directa o en unos pocos saltos.
[600ms]
[calm] Conocerlo te dice qué proteger primero.
[600ms]
[reflective] Estas son rutas posibles, no una promesa de que un atacante las tome. El grafo solo es tan completo como tus datos.

## Step 10 · Defender XDR: an agent in the attack path

[calm] En un incidente, selecciona el agente y elige Ver radio de explosión.
[600ms]
[curious] Defender XDR dibuja las posibles rutas desde él hasta tus objetivos críticos.
[600ms]
[reflective] Esto requiere el Microsoft Sentinel data lake, y amplía y reemplaza el análisis de rutas de ataque.

## Step 11 · Contain it

[determined] Primero detén al agente y luego investiga. Confirmar el compromiso sube el riesgo a Alto, así que la política lo bloquea.
[600ms]
[serious] Al deshabilitarlo se detienen todos los inicios de sesión, y puedes deshabilitar una sola identidad o todo su blueprint. Los registros muestran lo que hizo.
[600ms]
[reassuring] Si fue una falsa alarma, descarta el riesgo y vuelve a habilitarlo. Si fue real, primero rota las credenciales, o da de baja al agente.

## Step 12 · Recap: identity, policy, review, contain

[calm] Dale al agente su propia identidad. Contrólalo con políticas. Mantén su acceso al día.
[600ms]
[confident] Y sabe cómo contenerlo. Las mismas cuatro jugadas sirven para cualquier agente.
[600ms]
[proud] Esto se corresponde con S C 500 y con las habilidades de A B 650. Los exámenes cambian, así que lee las guías de estudio vigentes.
