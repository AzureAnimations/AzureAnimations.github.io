# Narrator Script — GitHub · Evaluate and Tune a GitHub Agent

**Source animation:** [EvaluateAndTuneAgents.html](../../../journeys/GitHub/EvaluateAndTuneAgents.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/agent-tooling-mcp-execution-environments/>

---

## Step 1 · It Merged, Then It Broke

[calm] El equipo de la tienda de Contoso le asignó un issue a Copilot. La pull request dos treinta y uno pasó la revisión y se fusionó.
[600ms]
[concerned] El lunes, el build en main falla. Que la fusión salga en verde no significa que el trabajo esté bien.
[600ms]
[curious] La revisión es el momento de evaluar con evidencia, no un trámite. Entonces, ¿cómo evalúas el trabajo de un agente?

## Step 2 · Define Success First

[calm] Antes de que el agente empiece, escribe en el issue el resultado que esperas y las restricciones.
[600ms]
[confident] Piensa en el issue como el prompt. Agrega criterios de aceptación que describan cómo se ve una buena solución, e indicaciones sobre qué archivos hay que cambiar.
[600ms]
[encouraging] Así tienes una vara de medir con la que puedes calificar el trabajo.

## Step 3 · Qualitative and Quantitative Signals

[curious] Los números dicen qué pasó. El criterio dice si está bien. Usa los dos.
[600ms]
[confident] Las señales cuantitativas se miden: resultados de pruebas, tiempos, cantidad de hallazgos de los escaneos y tamaño del cambio. Las cualitativas se juzgan, como los comentarios de la revisión sobre el enfoque, los nombres y la intención.
[600ms]
[reflective] Lee cada una frente a lo que pedía el issue. Los números de aquí son inventados para la historia.

## Step 4 · Automated Scans as Signals

[calm] Copilot cloud agent revisa su propio código con CodeQL, una revisión de dependencias y el escaneo de secretos.
[600ms]
[confident] CodeQL busca problemas de seguridad en el código. Las dependencias se comparan con la GitHub Advisory Database. Y el escaneo de secretos busca claves, tokens y otra información sensible.
[600ms]
[serious] Toma los resultados como señales, no como un veredicto. No te dicen si el cambio hizo lo que pedía el issue.

## Step 5 · Read the Evidence

[curious] Empieza por el síntoma y avanza hacia la causa.
[600ms]
[confident] Mira primero las ejecuciones de los flujos de trabajo y el diff, luego el plan y al final el registro de la sesión. Cada mensaje de commit de Copilot enlaza a ese registro.
[600ms]
[serious] De forma predeterminada, los flujos de trabajo no se ejecutan con un push de Copilot hasta que alguien con acceso de escritura los apruebe, así que revisa primero los cambios.

## Step 6 · Classify the Root Cause

[calm] Clasifica cada fallo según dónde ocurrió el primer paso equivocado. Elige una clase para ver sus pistas.
[600ms]
[confident] Un error de razonamiento significa que el agente resolvió otro problema. Un mal uso de herramientas es un comando equivocado o demasiado acceso. Y contexto o entorno quiere decir que falta configuración, que se bloqueó una solicitud o que el contexto está desactualizado.
[600ms]
[determined] Arregla la clase que realmente encontraste. Si cambias todo a la vez, no sabrás qué fue lo que funcionó.

## Step 7 · Walk Through One Failure

[curious] Aquí el registro de la sesión muestra una llamada equivocada a una herramienta.
[600ms]
[concerned] El agente ejecutó npm install en un repositorio que usa pnpm, y además editó una carpeta generada. El síntoma es un segundo lockfile que rompió el build.
[600ms]
[confident] La causa es una regla que faltaba: las instrucciones nunca decían qué gestor de paquetes usar. Corrige la causa.

## Step 8 · Tune the Instructions

[calm] Pon las reglas que faltan donde el agente las lee: el archivo de instrucciones personalizadas del repositorio.
[600ms]
[confident] Agrega cómo instalar, probar y compilar, y qué carpetas son generadas. También sirven los archivos de instrucciones por ruta y el archivo de instrucciones del agente.
[600ms]
[encouraging] Si Copilot puede compilar y probar en su propio entorno, es más probable que genere una pull request que se fusione rápido.

## Step 9 · Tune the Tools and Access

[calm] Dale al agente solo las herramientas que la tarea necesita.
[600ms]
[confident] Quita una herramienta que la tarea nunca usa, y limita otra a una sola operación en lugar de todo un servidor. En un perfil de agente personalizado, si omites las herramientas, se habilitan todas.
[600ms]
[reassuring] El principio es dar el mínimo acceso con el que aún se haga el trabajo.

## Step 10 · Tune the Memory

[calm] La memoria debe ayudar, no confundir.
[600ms]
[confident] Revisa lo que Copilot recordó sobre el repositorio, junto con sus citas, y borra lo que esté desactualizado. Quienes tienen acceso de escritura pueden hacerlo en la configuración del repositorio.
[600ms]
[reflective] Copilot verifica las citas contra la rama actual, pero eso es solo una apreciación suya. Para lo que siempre debe cumplirse, usa instrucciones personalizadas.

## Step 11 · Re-run and Compare

[curious] Ejecuta de nuevo la misma tarea con la configuración ajustada y califica las dos ejecuciones con la misma vara.
[600ms]
[impressed] La primera ejecución pasó tres de seis comprobaciones. La segunda pasó las seis, después de cambiar instrucciones, herramientas y memoria.
[600ms]
[serious] Una ejecución mejor es una señal, no una prueba. Cambia una palanca a la vez cuando puedas, y prueba con algunas tareas parecidas antes de confiar.

## Step 12 · Recap: Evaluate, Diagnose, Tune

[calm] Evalúa el trabajo contra una vara de medir: el resultado, las restricciones, las señales y los escaneos.
[600ms]
[confident] Diagnostica la causa con los registros, los planes, los diffs y las ejecuciones de flujos de trabajo, y asígnale una clase. Ajusta una sola palanca: instrucciones, herramientas y acceso, o memoria.
[600ms]
[proud] Y vuelve a ejecutar. Con eso cubres el área de G H 600: evaluación, análisis de errores y ajuste.
