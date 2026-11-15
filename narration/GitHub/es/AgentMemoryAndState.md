# Narrator Script — GitHub · Agent Memory and State: Remember, Resume and Avoid Drift

**Source animation:** [AgentMemoryAndState.html](../../../journeys/GitHub/AgentMemoryAndState.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · The agent that forgot

[calm] En la primera sesión, el agente lee el código, decide el límite y escribe pruebas.
[600ms]
[concerned] La segunda sesión arranca con el contexto vacío, sin dónde guardar lo aprendido. Y repite el mismo trabajo.
[600ms]
[serious] El costo es esfuerzo desperdiciado, y una decisión que puede cambiar sin que nadie lo note.

## Step 2 · Short-term, long-term, external

[curious] Elige el estante según cuánto tiene que durar un dato y quién lo necesita.
[600ms]
[confident] La memoria a corto plazo es el contexto de esta sesión. La de largo plazo es Copilot Memory, para datos y preferencias que se guardan para sesiones futuras. La externa son los archivos, issues y pull requests del repositorio.
[600ms]
[reflective] Ningún estante es el mejor. Usa archivos externos para las decisiones que la gente debe leer y revisar.

## Step 3 · Copilot Memory

[calm] Copilot Memory guarda datos de un repositorio, con citas, y también tus propias preferencias.
[600ms]
[confident] Los datos del repositorio se comparten con los colaboradores y solo se usan en ese repositorio. Tus preferencias son solo tuyas, y te acompañan en todos tus repositorios.
[600ms]
[curious] Copilot crea los recuerdos por sí mismo mientras trabaja. Puedes borrar uno en la configuración, pero no editarlo, y un fork no los hereda.

## Step 4 · Keep only what the task needs

[serious] Un contexto saturado empeora la respuesta. Más contexto no significa mejor contexto.
[600ms]
[confident] Conserva los archivos, los criterios y las decisiones de los que depende la tarea. Poda los chats viejos, las preguntas sin relación y las salidas voluminosas, con comandos para revisar, borrar o resumir.
[600ms]
[reassuring] Copilot CLI resume el historial automáticamente a medida que se llena la ventana, y la memoria solo debe guardar lo que sigue siendo cierto.

## Step 5 · Expiry and reset

[calm] Un recuerdo no es verdadero para siempre.
[600ms]
[confident] Caduca después de un periodo sin que se refuerce. Cuando Copilot confirma que sigue siendo válido, el reloj se reinicia. Consultar un recuerdo no lo reinicia.
[600ms]
[encouraging] Los propietarios pueden definir la caducidad, y si la organización y la empresa difieren, gana el valor más bajo. Puedes borrar un recuerdo en cualquier momento desde la configuración.

## Step 6 · Durable artifacts

[calm] Escribe las decisiones donde duren más que el chat.
[600ms]
[confident] Un archivo de plan lista los pasos y cuáles ya están hechos. Un issue contiene la tarea y sus criterios de aceptación. Una pull request registra qué cambió, por qué y las verificaciones.
[600ms]
[reflective] Copilot CLI guarda el plan en la carpeta de la sesión, así que lo que el equipo debe compartir, guárdalo en el repositorio.

## Step 7 · Resume the work

[curious] Una sesión nueva lee los artefactos: el plan, el issue y la pull request.
[600ms]
[confident] Se salta lo que ya está hecho y acordado, encuentra el primer elemento sin marcar y sigue desde ahí.
[600ms]
[calm] En Copilot CLI puedes continuar una sesión anterior, o empezar de cero y apuntar al agente hacia los artefactos. En cualquier caso, revisa primero el plan.

## Step 8 · Drift

[curious] En una ejecución larga, cada paso parece razonable por sí solo.
[600ms]
[concerned] Pero juntos se salen del plan. La ejecución termina en un lugar al que el plan nunca iba, porque nadie comparó las decisiones pequeñas con él.
[600ms]
[serious] La señal es una diferencia entre el trabajo y el plan original. La deriva es un patrón, no una configuración.

## Step 9 · Detect and correct drift

[calm] Compara el trabajo con el plan en puntos de control, no solo al final.
[600ms]
[confident] Marca cada cambio que el plan no cubra. Después corrige el rumbo: dile al agente que revierta y siga.
[600ms]
[encouraging] Puedes enviar un prompt de seguimiento mientras Copilot todavía trabaja, y revisar el diff antes de crear una pull request.

## Step 10 · Share state across tools

[curious] Lo que se aprende en una herramienta puede ayudar a las demás.
[600ms]
[confident] La memoria pertenece a un repositorio, no a una sola herramienta. Las instrucciones, el issue, el plan y la pull request son visibles para todas las herramientas, así que todas tienen la misma imagen.
[600ms]
[calm] Una sesión iniciada en la nube también puede continuar en otro cliente.

## Step 11 · Conflicting and stale context

[concerned] Cuando dos fuentes no coinciden, casi siempre una está desactualizada.
[600ms]
[confident] Compara con el código actual y luego corrige la fuente vieja. Copilot verifica las citas de un recuerdo contra la rama actual, pero eso es un criterio, no una garantía.
[600ms]
[serious] Copilot CLI combina los archivos de instrucciones sin un orden general, así que borra la línea vieja en lugar de esperar que gane la nueva.

## Step 12 · Recap

[calm] Esta es una lista de verificación para el trabajo con agentes. Recuerda: elige el estante, define su alcance y ponle fecha de caducidad.
[600ms]
[confident] Persiste: escribe las decisiones, retoma desde ahí y busca la deriva.
[600ms]
[proud] Mantenlo veraz compartiendo el estado y quitando el contexto obsoleto o contradictorio. Con eso cubrimos el objetivo de G H 600 sobre gestionar la memoria, el estado y la ejecución.
