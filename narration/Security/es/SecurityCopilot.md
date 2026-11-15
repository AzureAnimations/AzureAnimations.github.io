# Narrator Script — Security · Microsoft Security Copilot: workspaces, roles, plugins and agents — Azure Security Journey

**Source animation:** [SecurityCopilot.html](../../../journeys/Security/SecurityCopilot.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/copilot/security/microsoft-security-copilot>
- <https://learn.microsoft.com/copilot/security/plugin-overview>
- <https://learn.microsoft.com/copilot/security/manual-onboarding>
- <https://learn.microsoft.com/copilot/security/authentication>

---

## Step 1 · Forty open incidents and one afternoon

[calm] Priya es analista de seguridad en Contoso, y tiene cuarenta incidentes abiertos y una sola tarde. Cada incidente está en una consola distinta.
[600ms]
[concerned] Cada uno necesita un resumen, una consulta y una decisión antes de que acabe el día.
[600ms]
[determined] Esta lección sigue a un analista y a un administrador en Security Copilot, y cubre las habilidades de S C 500. Todos los personajes son ficticios.

## Step 2 · What Security Copilot is

[calm] Microsoft Security Copilot es una solución de seguridad con IA generativa. Tú preguntas en lenguaje natural.
[600ms]
[curious] Ancla la pregunta en tus propios datos de seguridad mediante plugins, y luego la envía al modelo de lenguaje.
[600ms]
[confident] La respuesta se vuelve a procesar con plugins y después te la devuelve, para que la revises y la evalúes.

## Step 3 · Capacity and workspace

[calm] La capacidad es el cómputo que aprovisionas, y se mide en Security Compute Units. Un espacio de trabajo es el espacio, ligado al inquilino, donde operan usuarios, automatizaciones y agentes.
[600ms]
[confident] Si Security Copilot no viene incluido en tu licencia, tú aprovisionas las unidades con una suscripción de Azure y un grupo de recursos.
[600ms]
[reassuring] Los clientes de Microsoft 365 E5 y E7 pueden tenerlo incluido y aprovisionado automáticamente.

## Step 4 · Configure a workspace

[calm] La configuración inicial guía al administrador por cuatro decisiones: el nombre del espacio de trabajo, la capacidad, el uso compartido de datos y una revisión de los roles.
[600ms]
[serious] Dos requieren cuidado. El lugar donde se almacenan los datos no se puede cambiar una vez creado el espacio de trabajo.
[600ms]
[concerned] Y el uso compartido de datos con Microsoft viene activado por defecto para los clientes sin E5 ni E7. Los propietarios de Copilot pueden cambiarlo cuando quieran.

## Step 5 · Roles: owner and contributor

[calm] Dos roles de Security Copilot abren la plataforma: propietario y colaborador. No son roles de Microsoft Entra.
[600ms]
[serious] Ninguno da acceso por sí solo a los datos de seguridad. Eso sigue dependiendo de tus roles de Entra, de Azure y de cada servicio.
[600ms]
[confident] Asígnalos en la configuración, de preferencia a grupos de seguridad. Copilot mantiene al menos dos propietarios, y algunos roles de administrador heredan el de propietario automáticamente.

## Step 6 · Embedded or standalone

[curious] Usa Security Copilot en su propio portal, o dentro de las herramientas de seguridad de Microsoft con las que ya trabajas.
[600ms]
[confident] Las experiencias integradas aparecen en productos como Defender XDR, Sentinel, Entra, Intune y Purview, muchas veces como un panel lateral.
[600ms]
[reassuring] Es el mismo Security Copilot en los dos lugares, y cada producto indica sus propios requisitos de rol y de licencia.

## Step 7 · Plugins: Microsoft, third-party, custom

[calm] Un plugin es un conjunto de herramientas relacionadas, también llamadas habilidades, que le permite a Copilot acceder a datos o ejecutar acciones. Hay tres tipos: de Microsoft, de terceros y personalizados.
[600ms]
[confident] Los plugins de Microsoft usan autenticación en nombre del usuario, así que solo llegan a lo que tú ya puedes acceder.
[600ms]
[serious] Los propietarios controlan los plugins personalizados. Revisa uno a nivel de usuario antes de ponerlo a disposición de todo el espacio de trabajo.

## Step 8 · Enable a plugin, change the answer

[curious] Con el plugin desactivado, Copilot solo puede hablar en términos generales.
[600ms]
[impressed] Actívalo, y el mismo prompt se basa en los incidentes reales de Contoso. Prueba el interruptor y compara las dos respuestas.
[600ms]
[reassuring] Un plugin con un botón Configurar se configura por usuario, y tus propios roles siguen limitando los datos que puede devolver.

## Step 9 · Agents that work without being asked

[calm] Un agente se encarga de una tarea repetitiva cuando se activa su disparador. Puede ser un horario, un evento o una ejecución manual.
[600ms]
[confident] Para configurar uno, eliges su disparador, su identidad y sus permisos, y los plugins y roles que necesita. Tú pones los límites y mantienes el control.
[600ms]
[reflective] Los agentes consumen Security Compute Units como las demás funciones, y algunos todavía están en vista previa.

## Step 10 · The Security Store

[calm] En el Security Store encuentras un agente, lo obtienes, y la persona indicada aprueba sus permisos antes de que lo configures.
[600ms]
[confident] Los agentes de Microsoft van a Active agents. Los agentes de socios se compran o se contratan por suscripción en la tienda.
[600ms]
[curious] Cuando un agente de un socio necesita datos de Microsoft, lo aprueba un Global Administrator. Las suscripciones viven en la tienda, mientras que ejecutar un agente consume capacidad.

## Step 11 · Try it: pick the right tool for six tasks

[curious] Seis tareas, cinco partes de Security Copilot. Lee la tarea y elige la parte que la resuelve.
[600ms]
[encouraging] Rol, espacio de trabajo, plugin, agente o Security Store. Cada tarea tiene una mejor opción.
[600ms]
[reassuring] Después de cada elección ves el motivo, así que incluso una respuesta equivocada te enseña algo.

## Step 12 · Recap: workspace, role, plugin, agent

[calm] Hay cuatro cosas que configurar, en este orden: el espacio de trabajo, los roles, los plugins y por último los agentes. Cada una responde a una pregunta que le hacen al administrador.
[600ms]
[confident] Esas son las habilidades de Implement Microsoft Security Copilot de la guía de estudio de S C 500, incluidos los agentes de Security Store.
[600ms]
[proud] Los exámenes cambian, así que lee la guía de estudio vigente antes de basarte en esta lista.
