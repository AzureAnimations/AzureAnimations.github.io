# Narrator Script — GitHub · Reuse Automation: Starter Workflows, Reusable Workflows and Composite Actions

**Source animation:** [ReusableWorkflowsAndTemplates.html](../../../journeys/GitHub/ReusableWorkflowsAndTemplates.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/en-us/azure/developer/github/github-actions>

---

## Step 1 · Twelve repos, twelve copies

[calm] Cada repositorio de Contoso tiene su propia copia del mismo archivo de CI. Son doce copias de una sola idea.
[600ms]
[concerned] Ahora, arreglar algo significa hacer doce ediciones, y tarde o temprano las copias se van desalineando.
[600ms]
[curious] La solución no es tener más copias. GitHub ofrece tres formas distintas de reutilizar automatización, y el examen de G H 200 te pide distinguirlas.

## Step 2 · Starter workflows

[calm] La primera forma es un flujo de trabajo inicial. Es una base de partida: lo eliges, haces commit de una copia y, desde ese momento, el archivo es tuyo.
[600ms]
[confident] Los encuentras en Actions, y luego en New workflow. Después de la copia, puedes editar con libertad, porque es independiente.
[600ms]
[reflective] La documentación de GitHub ahora los llama plantillas de flujo de trabajo, mientras que la guía de estudio todavía dice flujos de trabajo iniciales. Es la misma idea.

## Step 3 · Organization starter workflows

[curious] Las organizaciones pueden ofrecer los suyos. Guárdalos en un repositorio llamado dot github, dentro de una carpeta de plantillas de flujo de trabajo, con un archivo de propiedades para cada uno.
[600ms]
[confident] Cada plantilla lleva al lado un pequeño archivo de propiedades, y el nombre y la descripción son obligatorios.
[600ms]
[serious] La visibilidad importa: un repositorio dot github privado solo sirve a repositorios privados, y quienes usan las plantillas necesitan acceso de lectura.

## Step 4 · Reusable workflows

[confident] La segunda forma es un flujo de trabajo reutilizable. Defines el pipeline una sola vez en un repositorio central.
[600ms]
[curious] Cada llamador lo referencia con una línea de uso y ejecuta exactamente el mismo código. El archivo al que se llama debe escuchar el evento de llamada de flujo de trabajo.
[600ms]
[serious] Recuerda dónde va la llamada: va en un trabajo, nunca en un paso.

## Step 5 · workflow_call: inputs, secrets, outputs

[calm] El flujo de trabajo llamado declara qué entra y qué sale.
[600ms]
[confident] El llamador envía las entradas con la clave with y los secretos con la clave secrets, y luego lee las salidas con needs.
[600ms]
[intrigued] Las entradas deben coincidir con el tipo que declaraste: cadena, número o booleano. Y la salida de un paso primero tiene que mapearse a una salida del trabajo para que el flujo de trabajo pueda devolverla.

## Step 6 · Passing secrets

[calm] Un flujo de trabajo llamado no ve tus secretos automáticamente. Nombra uno por uno los que le pasas.
[600ms]
[confident] O pásalos todos de una vez con secrets inherit, que funciona dentro de la misma organización o empresa.
[600ms]
[serious] Los secretos llegan solo al flujo de trabajo que llamas directamente. En una cadena de A, B y C, el flujo C recibe un secreto solo si B se lo pasa.

## Step 7 · Pin the caller to a version

[calm] El texto después de la arroba elige la versión que se ejecuta: una rama, una etiqueta de release o un SHA de commit.
[600ms]
[curious] Una rama se mueve con cada commit nuevo. Una etiqueta de release es una versión que tú publicas. Si una etiqueta y una rama tienen el mismo nombre, gana la etiqueta.
[600ms]
[confident] Un SHA de commit completo es la opción más segura, tanto por estabilidad como por seguridad.

## Step 8 · Composite actions

[calm] La tercera forma es una acción compuesta. Agrupa varios pasos detrás de una sola línea de uso.
[600ms]
[confident] Se ejecuta como un solo paso dentro del trabajo del llamador, se describe en un archivo de metadatos, y cada paso run dentro de ella necesita un shell.
[600ms]
[serious] Puede vivir en su propio repositorio o en una carpeta dentro del tuyo, pero solo contiene pasos, nunca trabajos.

## Step 9 · Starter vs reusable vs composite

[curious] Mismo objetivo, tres herramientas. ¿Cómo eliges?
[600ms]
[confident] Elige según lo que quieras compartir. Un flujo de trabajo inicial es un archivo copiado que luego es tuyo. Uno reutilizable es todo un pipeline central al que llamas desde un trabajo.
[600ms]
[reassuring] Y una acción compuesta son solo unos cuantos pasos agrupados en uno.

## Step 10 · Who can call what

[calm] Reutilizar tiene reglas de acceso. El llamador necesita acceso al repositorio que contiene el flujo de trabajo, y la configuración de Actions debe permitirlo.
[600ms]
[confident] Un llamador público solo puede usar flujos de trabajo públicos. Uno privado puede usar públicos y privados, y un repositorio privado al que se llama necesita el ajuste Access.
[600ms]
[concerned] Una advertencia de GitHub: si abres un repositorio privado a otros flujos de trabajo, los colaboradores externos de ese repositorio pueden ver los registros de las ejecuciones que lo usan.

## Step 11 · Consume a shared workflow

[calm] Un desarrollador agrega un llamador pequeño en una pull request, solo unas pocas líneas que llaman al archivo compartido.
[600ms]
[impressed] Entonces el flujo de trabajo compartido se ejecuta en la pull request, y sus trabajos aparecen como comprobaciones.
[600ms]
[serious] El llamador sigue siendo código, así que revísalo: mira la referencia después de la arroba y qué secretos pasa.

## Step 12 · Recap: pick the right tool

[calm] Tres ideas que se parecen. Un flujo de trabajo inicial es una copia que es tuya. Uno reutilizable es un flujo central al que llamas.
[600ms]
[confident] Y una acción compuesta es un puñado de pasos agrupados en uno.
[600ms]
[proud] Para G H 200, ya puedes distinguirlos, usarlos de forma segura y manejar plantillas y componentes reutilizables con confianza.
