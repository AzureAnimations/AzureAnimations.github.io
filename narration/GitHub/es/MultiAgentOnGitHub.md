# Narrator Script — GitHub · Several Agents, One Repository

**Source animation:** [MultiAgentOnGitHub.html](../../../journeys/GitHub/MultiAgentOnGitHub.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-600>

---

## Step 1 · Three Agents, One Repository

[calm] El equipo del clima de Contoso le pasa un backlog a tres agentes, y Maya quiere que todo salga rápido.
[600ms]
[curious] Cada agente recibe su propia tarea, pero comparten el mismo código, las mismas ramas y la misma lista de pull requests.
[600ms]
[serious] Ahí es donde empiezan los problemas. El trabajo puede chocar, duplicarse o fallar sin que nadie se entere.

## Step 2 · Choose a Pattern

[calm] Tres issues, tres agentes. Antes de arrancarlos, elige un patrón que se ajuste a cómo dependen los issues entre sí.
[600ms]
[confident] Un orquestador divide el objetivo en tareas, ejecuta en paralelo las que son independientes y luego revisa y combina los resultados. Un traspaso le pasa cada elemento al siguiente especialista.
[600ms]
[reflective] Si el trabajo es realmente secuencial, los agentes en paralelo aportan muy poco.

## Step 3 · Isolate Parallel Work

[confident] Dale a cada agente su propia rama. Así el trabajo en paralelo no se pisa hasta que una pull request lo junta.
[600ms]
[calm] En GitHub, Copilot cloud agent hace push a una rama por tarea y abre una pull request para ella. En tu propia máquina, un git worktree le da a cada agente su propia carpeta.
[600ms]
[reassuring] En cualquier caso, la fusión final la hace una persona.

## Step 4 · Overlapping Changes

[curious] Aquí dos agentes editan la misma línea del mismo archivo. Cada pull request, por separado, se ve bien.
[600ms]
[calm] Git fusiona solo los archivos distintos o las líneas distintas. Pero si hay ediciones diferentes en la misma línea, necesita ayuda.
[600ms]
[intrigued] La pestaña Archivos modificados de cada pull request es donde ves la superposición.

## Step 5 · Resolve Conflicts

[serious] Un conflicto bloquea la fusión, porque Git no puede elegir con seguridad entre dos ediciones.
[600ms]
[confident] Define el orden de fusión: una pull request entra primero y la siguiente se actualiza. Pregúntale al dueño del archivo mediante CODEOWNERS. Copilot puede ayudarte desde el cuadro de fusión.
[600ms]
[reassuring] Al final, es una persona quien elige el texto definitivo.

## Step 6 · Duplicated and Contradictory Work

[curious] Ahora revisa la lista de pull requests en busca de dos señales de alerta. Dos pull requests que cierran el mismo issue son duplicadas.
[600ms]
[concerned] Dos que se contradicen son contradictorias, como kilómetros por hora en el código y millas por hora en la guía.
[600ms]
[determined] Quédate con una, cierra la otra y anota por qué. Los calificadores de búsqueda ayudan a acotar la lista.

## Step 7 · Leave an Audit Trail

[calm] Las decisiones y las notas de traspaso de cada agente quedan escritas en su pull request, para que cualquiera pueda revisarlas después.
[600ms]
[confident] Los commits de Copilot cloud agent están firmados, incluyen como coautor a quien inició la tarea y enlazan al registro de la sesión. Ese registro muestra su razonamiento y las herramientas que usó.
[600ms]
[serious] Los registros ayudan, pero no reemplazan tu propia revisión.

## Step 8 · Spot a Stalled or Failed Run

[calm] Una ejecución sana sigue produciendo líneas de registro. Compara cada sesión con un umbral que defina tu equipo.
[600ms]
[concerned] Vigila tres tipos de problema. Fallida significa que una comprobación termina en error. Parcial significa que se detuvo antes de tiempo, con algunos commits ya enviados. Estancada significa que pasó demasiado tiempo sin una nueva línea de registro.
[600ms]
[reassuring] Abre una sesión desde el panel de agentes para ver su avance y su registro.

## Step 9 · Recover: Roll Back and Hand On

[serious] Cuando una ejecución sale mal, primero deténla. Al detenerla, la ejecución termina y se conservan los commits ya enviados.
[600ms]
[confident] Después, revierte solo el trabajo de ese agente. Al revertir una pull request fusionada se abre otra que la deshace, así que el historial se mantiene.
[600ms]
[reassuring] Por último, pásale la tarea a otro con notas. Las fusiones las hacen personas, porque Copilot no puede aprobar su propia pull request.

## Step 10 · Add an Agent

[curious] ¿Necesitas un especialista? Agrega un archivo de perfil nuevo y escríbelo en Markdown.
[600ms]
[calm] Los agentes que ya están trabajando conservan sus propios archivos y sus propias ramas. Dale al nuevo un trabajo claro y solo las herramientas que necesita.
[600ms]
[optimistic] Fusiona el archivo y prueba con una tarea antes de depender de él.

## Step 11 · Update, Replace or Retire an Agent

[calm] Para cambiar un agente, modifica su perfil mediante una pull request. Git guarda todas las versiones, y las pull requests y los registros anteriores se quedan donde están.
[600ms]
[confident] Una tarea sigue usando la versión con la que empezó. Para reemplazar un agente, incorpora primero el nuevo y luego retira el anterior.
[600ms]
[reflective] Retirar es borrar el archivo, pero conservando el rastro. Las sesiones se pueden archivar, así que siguen siendo legibles.

## Step 12 · Recap: A Multi-Agent Run, Reviewed After the Fact

[calm] Repasa la ejecución de Contoso con seis preguntas, y todas las respuestas están en el repositorio.
[600ms]
[confident] Planifica con un patrón y una rama para cada agente. Vigila los conflictos, los duplicados y los bloqueos. Conserva las pull requests, los commits y los registros de sesión.
[600ms]
[proud] Esa es el área de orquestación de la coordinación multiagente en la guía de estudio de G H 600.
