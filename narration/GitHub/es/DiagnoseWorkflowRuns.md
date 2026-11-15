# Narrator Script — GitHub · Troubleshoot Workflow Runs: Logs, Re-runs and Artifacts

**Source animation:** [DiagnoseWorkflowRuns.html](../../../journeys/GitHub/DiagnoseWorkflowRuns.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · A Red Cross on the Pull Request

[calm] Maya abre su pull request en Contoso y ve que una comprobación muestra una cruz roja. Su colega Ravi está esperando ese resultado.
[600ms]
[curious] Cada trabajo de una ejecución del flujo de trabajo es una comprobación, así que esa cruz te lleva a un trabajo, luego a un paso y por último a su registro.
[600ms]
[confident] Tu meta es simple: encuentra el primer paso que falló y lee a partir de ahí.

## Step 2 · The Actions Tab: Workflows, Runs and History

[calm] Abre la pestaña Actions y elige un flujo de trabajo en la barra lateral izquierda. Sus ejecuciones aparecen en una lista, una fila por ejecución.
[600ms]
[curious] Todas las ejecuciones se quedan en esa lista, así que el historial te muestra justo cuándo empezó a fallar el flujo de trabajo.
[600ms]
[reassuring] Con acceso de lectura al repositorio basta para revisarlas, y la línea de comandos muestra las mismas ejecuciones.

## Step 3 · Read a Run: Jobs, Steps, First Failure

[confident] Haz clic en una ejecución y el resumen te muestra sus trabajos. Abre el que falló y el paso fallido se despliega solo.
[600ms]
[serious] Empieza por el primer paso en rojo, porque los fallos que vienen después muchas veces son consecuencia de ese.
[600ms]
[curious] GitHub agrega a cada trabajo uno de configuración y uno de cierre. La búsqueda en el registro solo revisa los pasos que ya expandiste, y puedes copiar un enlace a cualquier línea del registro.

## Step 4 · What Triggered This Run?

[calm] El encabezado de la ejecución te dice por qué arrancó: el evento, quién la activó y qué commit.
[600ms]
[confident] Son los mismos valores de evento, actor y commit que puedes usar en tu propio flujo de trabajo.
[600ms]
[intrigued] Si es una repetición, el actor sigue siendo quien inició la primera ejecución. Otro valor distinto indica quién la volvió a ejecutar.

## Step 5 · Matrix Runs: Names, Axes and Failures

[curious] Una matriz crea un trabajo por cada combinación de valores. El nombre de cada trabajo incluye esos valores.
[600ms]
[confident] Así, un trabajo en rojo se relaciona directo con sus ejes, y puedes compararlo con los verdes, eje por eje.
[600ms]
[serious] Fíjate en los trabajos grises. Con fail-fast activado, que es lo predeterminado, un fallo cancela los demás; por eso el gris no es la causa.

## Step 6 · Re-run Only What Failed

[calm] Puedes volver a ejecutar todos los trabajos, solo los que fallaron, o uno solo, como una celda de la matriz.
[600ms]
[confident] Al repetir se usa el mismo commit, y los trabajos que no repetiste conservan sus resultados. Los que dependen de un trabajo repetido se ejecutan otra vez.
[600ms]
[serious] Las repeticiones usan los privilegios de quien inició la ejecución original, y no puedes repetir nada mientras el flujo de trabajo esté deshabilitado.

## Step 7 · Debug Logging: Read the Extra Output

[curious] A veces el registro no te basta. Ahí es cuando activas el registro de depuración.
[600ms]
[excited] Prueba el interruptor aquí y mira cómo el mismo paso imprime más detalle.
[600ms]
[reassuring] Cualquiera que pueda ejecutar el flujo de trabajo puede marcar Activar el registro de depuración al repetir la ejecución. O déjalo fijo con un secreto o una variable; si existen los dos, gana el secreto.

## Step 8 · Common Causes of a Failed Run

[calm] Cuatro causas aparecen una y otra vez. Compara lo que ves en tu ejecución con una de estas tarjetas.
[600ms]
[curious] Puede que al token le falte un permiso, que un secreto no esté definido o no se haya pasado, que ningún runner coincida con la etiqueta, o que el token haya expirado.
[600ms]
[serious] Son solo ejemplos, así que confirma siempre la causa en tu propio registro.

## Step 9 · YAML Anchors: What Actually Runs

[calm] Un ancla le pone nombre a un bloque, y un alias lo repite en otra parte del archivo.
[600ms]
[confident] GitHub ejecuta el resultado ya expandido, así que lee un trabajo que falla como si el alias estuviera escrito completo.
[600ms]
[reassuring] La forma expandida se comporta igual que un archivo escrito sin anclas. Expándela en tu cabeza y el fallo cobra sentido.

## Step 10 · Find Artifacts and Logs in the UI

[calm] Los artefactos están al final del resumen de la ejecución. El archivo de registros está en el menú del registro de un trabajo.
[600ms]
[confident] Con acceso de lectura puedes descargar cualquiera de los dos.
[600ms]
[serious] Ambos se conservan durante un periodo de retención que se puede cambiar y después caducan, así que descarga lo que necesites a tiempo.

## Step 11 · The Same Through the API and gh CLI

[curious] Todo lo que acabas de hacer en el navegador tiene su comando en la herramienta de línea de comandos de GitHub y su endpoint REST.
[600ms]
[confident] Puedes listar ejecuciones, verlas, descargar sus artefactos y volver a ejecutarlas, todo desde una terminal.
[600ms]
[impressed] Mismas ejecuciones, mismos registros, mismos artefactos. Así que puedes automatizar toda la rutina con un script.

## Step 12 · Disable vs Delete, and the History

[calm] Deshabilitar un flujo de trabajo lo pone en pausa. El archivo y su historial se quedan exactamente donde están.
[600ms]
[serious] Eliminar una ejecución borra solo esa ejecución, de forma permanente, y requiere acceso de escritura. Deshabilitar no cancela las ejecuciones que ya están en curso.
[600ms]
[proud] Juntas, estas habilidades son lo que G H 200 llama consumir y solucionar problemas de flujos de trabajo.
