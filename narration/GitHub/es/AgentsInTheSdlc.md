# Narrator Script — GitHub · Agents in the SDLC: Plan, Act, Evaluate

**Source animation:** [AgentsInTheSdlc.html](../../../journeys/GitHub/AgentsInTheSdlc.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent>

---

## Step 1 · Assistant or agent

[calm] Te presento a Maya, de Contoso. Puede usar Copilot de dos maneras, y las dos son útiles.
[600ms]
[curious] Un asistente responde a un prompt con una sugerencia, y tú la aplicas y la revisas por tu cuenta. Un agente investiga, planifica, edita archivos y ejecuta pruebas por sí solo.
[600ms]
[confident] Entonces, con un agente tu papel cambia. En vez de hacer cada paso a mano, revisas el resultado terminado.

## Step 2 · Where agents fit

[curious] ¿En qué parte del ciclo de vida del software debería trabajar un agente? Dale los pasos bien acotados.
[600ms]
[confident] Puede investigar y planificar, corregir errores pequeños, agregar pruebas y documentación, ejecutar verificaciones y abrir una pull request en borrador. Tú te quedas con las prioridades, el diseño, los criterios de éxito, las aprobaciones y el riesgo en producción.
[600ms]
[serious] Esto es un mapa para empezar, no una regla. La seguridad, los datos personales y la respuesta a incidentes normalmente se quedan en manos de una persona.

## Step 3 · GitHub as the system of record

[calm] Todo lo que hace el agente queda en GitHub, así que el equipo siempre puede ver qué pasó.
[600ms]
[confident] El issue contiene la tarea. La rama mantiene el trabajo del agente separado de la rama predeterminada. La pull request es donde una persona decide.
[600ms]
[reassuring] Los commits los crea Copilot con quien lo solicitó como coautor, y cada uno enlaza al registro de la sesión. Los administradores también reciben eventos del registro de auditoría.

## Step 4 · Inputs, outputs and success criteria

[curious] Piensa en el issue como el prompt. ¿Qué entra, qué tiene que salir y cómo se va a saber que funcionó?
[600ms]
[confident] Describe el problema, los archivos involucrados y cualquier límite. Indica qué debe entregar el agente y agrega verificaciones que te digan que el trabajo está terminado.
[600ms]
[encouraging] Unos criterios de aceptación claros y una indicación de los archivos correctos ayudan mucho, aunque Copilot también puede buscar por sí mismo en el código.

## Step 5 · Plan before act

[calm] Antes de cambiar cualquier código, el agente escribe un plan que tú puedes leer.
[600ms]
[confident] Un buen plan está estructurado: el objetivo, los archivos, los pasos, las verificaciones y lo que queda fuera del alcance. Es una propuesta, no un cambio en el código.
[600ms]
[reassuring] El agente no puede actuar hasta que una persona apruebe. Así se acuerda el enfoque antes de que se escriba nada.

## Step 6 · Validate the plan

[curious] Ahora una persona lee el plan y decide. Prueba los dos botones.
[600ms]
[confident] Si lo apruebas, se abre la puerta y el agente puede actuar. Si lo devuelves con un comentario, el agente lo revisa y sigue sin poder actuar.
[600ms]
[reflective] Revisar un plan es barato. Corregir después un cambio equivocado no lo es, así que sigue ajustando hasta que el plan refleje lo que quieres.

## Step 7 · Act inside boundaries

[calm] Una vez aprobado el plan, el agente se pone a trabajar en su propia rama.
[600ms]
[serious] Solo puede hacer push a una rama de Copilot, o a la rama de la pull request que se le pidió actualizar, y a ningún otro lugar. No puede marcar una pull request como lista, aprobarla ni fusionarla.
[600ms]
[reassuring] Las protecciones de rama y las verificaciones obligatorias también aplican al agente, igual que a ti.

## Step 8 · Evaluate the result

[curious] Cuando el trabajo se sube, se ejecutan verificaciones y escaneos en la pull request.
[600ms]
[confident] Por defecto, el agente revisa su propio código con CodeQL, el escaneo de secretos y una verificación de avisos de seguridad en las dependencias nuevas, y Copilot code review da una segunda opinión. Los flujos de trabajo se ejecutan cuando una persona los aprueba.
[600ms]
[serious] Después una persona lee el diff y decide. Los registros de la sesión no reemplazan tu propia revisión y tus propias pruebas.

## Step 9 · Governance by pull request

[calm] Cuatro controles del repositorio convierten el hecho de que el agente abrió una pull request en un cambio revisado y aprobado.
[600ms]
[confident] Antes de la revisión, una plantilla hace las mismas preguntas y los propietarios del código piden a los revisores correctos. Antes de fusionar, un conjunto de reglas exige aprobaciones y verificaciones exitosas. Antes de desplegar, un entorno puede exigir revisores.
[600ms]
[reflective] Una aprobación adicional para las pull requests que Copilot abre sin el nombre de una persona todavía está en versión preliminar pública.

## Step 10 · Anti-patterns and their fixes

[calm] Estas son tres formas comunes en que el trabajo con agentes sale mal. A cada una le corresponde un hábito que la previene.
[600ms]
[concerned] Una tarea vaga se arregla con un issue bien acotado y con criterios de aceptación. La falta de una regla de parada se arregla con un límite y luego pasando el caso a una persona.
[600ms]
[serious] Una fusión sin revisión se arregla exigiendo revisión, propietarios del código y verificaciones. Son ejemplos, no una lista oficial.

## Step 11 · Recap: plan, act, evaluate

[calm] Un solo ciclo, una persona en cada puerta, y GitHub lo registra todo.
[600ms]
[confident] Planifica definiendo entradas, salidas y criterios de éxito, y luego valida el plan. Actúa en su propia rama, sin derecho a fusionar. Evalúa con verificaciones, escaneos, una revisión del diff y la gobernanza de la pull request.
[600ms]
[proud] Con eso cubrimos las habilidades de G H 600 para integrar un agente en el ciclo de vida, desde definir su tarea hasta gobernar su pull request.
