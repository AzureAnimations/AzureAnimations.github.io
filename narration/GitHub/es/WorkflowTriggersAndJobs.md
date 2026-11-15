# Narrator Script — GitHub · Workflow Syntax: Triggers, Jobs, Matrices and Contexts

**Source animation:** [WorkflowTriggersAndJobs.html](../../../journeys/GitHub/WorkflowTriggersAndJobs.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · One workflow file

[calm] Un flujo de trabajo es un solo archivo YAML, guardado en la carpeta workflows dentro de la carpeta dot github. Debe terminar en dot yml o dot yaml.
[600ms]
[confident] Cuatro claves cuentan toda su historia: nombre, on, trabajos y pasos.
[600ms]
[curious] La clave on inicia la ejecución, y los trabajos hacen el trabajo. Si omites el nombre, GitHub muestra en su lugar la ruta del archivo en la pestaña Actions.

## Step 2 · Triggers

[curious] La clave on indica qué inicia una ejecución. Puede ser un evento de código, un evento del repositorio, un horario programado o una llamada desde fuera de GitHub.
[600ms]
[confident] Los filtros por ramas, etiquetas y rutas acotan los disparadores de push y pull request. Un schedule usa la sintaxis cron y se ejecuta en la rama predeterminada.
[600ms]
[calm] Basta con que coincida un evento para iniciar una ejecución. Un webhook de despacho de repositorio lleva un tipo de evento.

## Step 3 · Run it by hand

[confident] El disparador de despacho de flujo de trabajo agrega un botón Ejecutar flujo de trabajo.
[600ms]
[curious] Cada entrada tiene un tipo, un valor por defecto opcional y un indicador de obligatoria. Los tipos son booleano, opción, número, entorno y cadena. Los trabajos las leen desde el contexto de entradas.
[600ms]
[reflective] El botón solo aparece cuando el archivo del flujo de trabajo está en la rama predeterminada.

## Step 4 · Jobs and needs

[calm] Los trabajos se ejecutan en paralelo por defecto.
[600ms]
[confident] Agrega needs, y un trabajo espera a que terminen con éxito los trabajos de los que depende.
[600ms]
[serious] Si un trabajo falla o se omite, también se omiten todos los que dependen de él, salvo que usen una condición como always.

## Step 5 · Conditional logic

[calm] Una clave if decide si se ejecuta un paso o un trabajo. Si no indicas ninguna función de estado, GitHub agrega success por ti.
[600ms]
[confident] La función failure ejecuta un paso después de un fallo, y la función always lo ejecuta pase lo que pase antes.
[600ms]
[serious] Evita always en trabajo que puede fallar feo, como obtener el código fuente. La documentación recomienda not cancelled, para ejecutar un paso hayan pasado o no los pasos anteriores.

## Step 6 · Variables and commands

[confident] La clave env define variables para todo el flujo de trabajo, para un trabajo o para un solo paso. Gana la más específica.
[600ms]
[curious] Los comandos de flujo de trabajo permiten que un paso le hable al runner desde el log. Aviso, advertencia y error crean anotaciones.
[600ms]
[calm] Escribe un nombre y un valor en el archivo de entorno de GitHub, y se vuelve una variable para los pasos siguientes, no para el paso que lo escribió.

## Step 7 · Service containers

[curious] Un bloque de servicios inicia un contenedor, por ejemplo una base de datos, justo al lado de tu trabajo.
[600ms]
[confident] Mapea su puerto y conéctate a él en localhost. Agrega opciones de comprobación de salud para que el trabajo espere hasta que el servicio esté listo.
[600ms]
[reassuring] GitHub crea un contenedor nuevo para cada trabajo y lo destruye cuando el trabajo termina. Los contenedores de servicio necesitan un runner de Linux.

## Step 8 · A matrix

[curious] Una matriz convierte la definición de un trabajo en muchos.
[600ms]
[confident] Aquí hay dos sistemas operativos y tres versiones de Node. Eso da seis trabajos, uno por cada combinación.
[600ms]
[impressed] Cada trabajo lee sus propios valores del contexto de la matriz.

## Step 9 · Shape the matrix

[calm] Excluir quita una combinación de la matriz, e incluir agrega una.
[600ms]
[confident] Fail-fast y max-parallel controlan cómo se ejecutan los trabajos. Fail-fast es true por defecto.
[600ms]
[reflective] Fija la versión del runner si quieres que no cambie. Una etiqueta latest significa la imagen estable más reciente, así que lo que hay detrás puede cambiar con el tiempo.

## Step 10 · Contexts

[curious] Los contextos son objetos que guardan datos de la ejecución.
[600ms]
[confident] Los lees en las expresiones para obtener la rama, el runner, tus variables y los resultados de trabajos y pasos anteriores.
[600ms]
[serious] Dónde funciona un contexto depende de la clave. Un if a nivel de trabajo puede leer github, needs, vars e inputs, pero no secrets.

## Step 11 · Expressions

[calm] GitHub evalúa primero el signo de dólar con las dobles llaves, y reemplaza eso por el texto.
[600ms]
[confident] Eso pasa antes de que el shell del runner vea la línea. Un nombre simple con signo de dólar lo expande después el propio shell.
[600ms]
[serious] Mantén los secretos fuera de los registros. Nunca los imprimas y enmascara los valores generados.

## Step 12 · Anchors and editor help

[calm] Un ancla le pone nombre a un bloque de YAML, y un alias lo repite en otro lugar. Así evitas repetir cosas dentro de un mismo archivo de flujo de trabajo.
[600ms]
[curious] La extensión de GitHub Actions para VS Code te da resaltado, validación y autocompletado mientras escribes.
[600ms]
[determined] Funciona mejor con un clon local del repositorio. Ahora ve y crea tu propio flujo de trabajo.
