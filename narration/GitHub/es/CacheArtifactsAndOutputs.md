# Narrator Script — GitHub · Move Data: Cache, Artifacts, Outputs and Job Summaries

**Source animation:** [CacheArtifactsAndOutputs.html](../../../journeys/GitHub/CacheArtifactsAndOutputs.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200>

---

## Step 1 · Every Job Starts Clean

[calm] En los runners alojados en GitHub, cada trabajo empieza en una instancia nueva de una imagen de runner.
[600ms]
[serious] Los archivos y las variables de un trabajo anterior simplemente no están. El runner se descarta cuando termina el trabajo.
[600ms]
[confident] Así que hay que pasar los datos de forma explícita, con salidas, artefactos o una caché.

## Step 2 · Step Outputs: GITHUB_OUTPUT

[calm] Un paso escribe un nombre y un valor en el archivo de salida de GitHub.
[600ms]
[confident] Un paso posterior del mismo trabajo lo lee desde el contexto steps, usando el id del paso que lo escribió.
[600ms]
[serious] El paso que escribe necesita un id, o nadie podrá leer su salida.

## Step 3 · GITHUB_ENV: Set It for Later Steps

[curious] Escribe un nombre y un valor en el archivo de entorno de GitHub, y se convierte en una variable de entorno para todos los pasos siguientes del trabajo.
[600ms]
[serious] El paso que lo escribió no ve el valor nuevo. Y tampoco puedes sobrescribir así las variables predeterminadas de GitHub y del runner.
[600ms]
[reflective] Además, solo existe en este trabajo. El siguiente trabajo empieza limpio otra vez.

## Step 4 · Job Outputs: Pass a Value On

[calm] Para pasar un valor a otro trabajo, el primer trabajo declara salidas y asigna cada una a la salida de un paso.
[600ms]
[confident] El segundo trabajo nombra al primero en needs, y lee el valor desde el contexto needs.
[600ms]
[serious] Sin needs, el segundo trabajo no puede leer las salidas del primero. Los flujos de trabajo reutilizables también pueden devolver salidas al trabajo que los llama.

## Step 5 · Artifacts: Upload, Then Download

[curious] Para archivos, usa artefactos. Upload artifact guarda archivos de un trabajo en la ejecución.
[600ms]
[confident] Un trabajo posterior espera con needs y luego usa download artifact para traer esos archivos a su propio runner limpio.
[600ms]
[reassuring] Los artefactos también se conservan cuando termina la ejecución, así que desde la página de la ejecución se puede descargar lo que salió de la compilación, los logs o los resultados de pruebas.

## Step 6 · Cache Dependencies With a Key

[curious] La acción de caché busca primero la clave exacta y luego las claves de restauración. Si coincide exactamente, es un cache hit.
[600ms]
[confident] Si no hay coincidencia, se guarda una caché nueva cuando el trabajo termina bien. Normalmente la clave combina el sistema operativo del runner con un hash del archivo de bloqueo, así que si cambian las dependencias, la clave es nueva.
[600ms]
[serious] Una caché no cambia una vez creada. Un trabajo tiene que funcionar también sin ella, y los secretos nunca deben ir ahí.

## Step 7 · Cache or Artifact? Pick the Right One

[calm] Una caché acelera las ejecuciones siguientes, al reutilizar archivos que cuesta mucho volver a crear.
[600ms]
[confident] Un artefacto conserva lo que produjo un trabajo, para que lo entregues o lo descargues. Un valor de texto corto es mejor pasarlo como salida.
[600ms]
[reflective] La caché y los artefactos guardan archivos, pero no son intercambiables. Elige según lo que necesites hacer después.

## Step 8 · Job Summaries: A Markdown Report

[curious] Agrega Markdown de GitHub al archivo de resumen del paso.
[600ms]
[confident] Cuando el trabajo termina, los resúmenes de sus pasos se agrupan y aparecen en la página de resumen de la ejecución.
[600ms]
[encouraging] Es útil para resultados de pruebas, cobertura y enlaces, para que nadie tenga que buscar entre los logs.

## Step 9 · A Status Badge for the README

[calm] Una insignia del flujo de trabajo muestra si el flujo está pasando o fallando.
[600ms]
[confident] Por defecto reporta la rama predeterminada. Agrega un parámetro de rama o de evento para elegir otra.
[600ms]
[curious] La URL de la insignia usa el nombre del archivo del flujo de trabajo, y la pestaña Actions puede generarte el Markdown. Insértala como imagen en tu README.

## Step 10 · Retention: How Long Files Stay

[calm] Por defecto, los artefactos y los logs se conservan durante noventa días.
[600ms]
[confident] Un repositorio o una organización puede cambiarlo, dentro del límite que se fije por encima. Y cada subida también puede definir sus propios días de retención.
[600ms]
[reflective] Una configuración nueva solo se aplica a los artefactos y logs nuevos. Puedes definirla en la configuración de Actions, o con la API REST.

## Step 11 · Cost: Faster Runs, Less Storage

[calm] Los runners limpios descargan las dependencias en cada ejecución. Eso suma uso de red, tiempo de ejecución y costo.
[600ms]
[confident] Una caché reemplaza esa descarga, así que las ejecuciones se aceleran. Menos retención y menos archivos reducen lo que almacenas.
[600ms]
[encouraging] Upload artifact acepta patrones con comodines y exclusiones, así que puedes subir solo lo que necesitas.

## Step 12 · All in One: Pass It On, Don’t Rebuild

[calm] La canalización de Contoso ya usa todas las herramientas de esta lección. Las salidas llevan valores, y una caché guarda las dependencias.
[600ms]
[confident] Un artefacto lleva la compilación. Un resumen del trabajo muestra el reporte, y una insignia le dice al README cómo va el flujo de trabajo.
[600ms]
[proud] Esa es la habilidad de G H 200 para gestionar la ejecución y las salidas de los flujos de trabajo. Pásalo, no lo reconstruyas.
