# Narrator Script — GitHub · Copilot in the Command Line

**Source animation:** [CopilotInTheCli.html](../../../journeys/GitHub/CopilotInTheCli.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · Why the terminal needs a partner

[calm] Ravi no se acuerda del comando exacto de git. Así que sale de la terminal para buscarlo, y pierde el hilo.
[600ms]
[curious] A la mayoría de los desarrolladores esto les cuesta de verdad: pestañas, búsquedas y pérdida de concentración.
[600ms]
[optimistic] La idea es sencilla: pregunta justo donde trabajas.

## Step 2 · What Copilot CLI is

[calm] GitHub Copilot CLI trae Copilot a tu terminal.
[600ms]
[confident] Describes lo que quieres con tus propias palabras, y Copilot responde, escribe código y trabaja con GitHub punto com.
[600ms]
[reflective] La respuesta en pantalla es solo una ilustración. El resultado real varía.

## Step 3 · Install it

[calm] Primero necesitas una suscripción a Copilot, y tu organización no debe haber desactivado el CLI.
[600ms]
[confident] Luego lo instalas con WinGet, Homebrew o npm.
[600ms]
[reassuring] También hay un script de instalación para macOS y Linux.

## Step 4 · Sign in and start a session

[calm] Ejecuta copilot en una carpeta de tu confianza.
[600ms]
[curious] Inicia sesión con el comando slash login. En un escritorio, lo predeterminado es el flujo con el navegador, y el flujo con código de dispositivo te muestra un código de un solo uso para que lo escribas en tu navegador.
[600ms]
[encouraging] Luego escribe tu primer prompt.

## Step 5 · Ask, explain, suggest

[curious] Describe tu objetivo con palabras sencillas. Copilot te sugiere un comando y te explica cada parte.
[600ms]
[confident] Así lo entiendes antes de aprobarlo.
[600ms]
[serious] La respuesta es solo un ejemplo y la redacción varía, así que lee siempre primero el comando real.

## Step 6 · Interactive mode

[calm] Escribe copilot para iniciar una conversación. Cada prompt se apoya en el anterior, así que una frase como ese caso sigue teniendo sentido.
[600ms]
[confident] Copilot CLI gestiona el contexto por ti y comprime el historial a medida que se llena. El comando slash context muestra el uso.
[600ms]
[intrigued] Presiona Shift y Tab para cambiar al modo de plan.

## Step 7 · Slash commands and options

[calm] Los comandos slash sirven para manejar la sesión, como login, model y context.
[600ms]
[confident] Dentro de un prompt, la arroba agrega un archivo, y un signo de exclamación ejecuta un comando de shell.
[600ms]
[encouraging] Para una respuesta puntual, ejecuta copilot con la opción dash p y un prompt. La lista completa es más larga, así que aprende primero estos pocos.

## Step 8 · Generate a script

[curious] Describe el script que quieres. Copilot escribe el archivo.
[600ms]
[confident] Lo revisas como un diff antes de que se ejecute nada.
[600ms]
[serious] Lee siempre primero el código generado, y ejecútalo solo después de aprobarlo.

## Step 9 · Manage files

[calm] Copilot puede crear un archivo nuevo, renombrar uno y editar las líneas directamente.
[600ms]
[confident] Las herramientas que modifican o ejecutan archivos pueden pedirte aprobación antes.
[600ms]
[reassuring] Los archivos fuera de tu carpeta actual necesitan una aprobación adicional. El comando slash add dir agrega una carpeta de confianza.

## Step 10 · Stay in control

[calm] Copilot puede preguntarte antes de usar una herramienta. Lee el comando y luego elige.
[600ms]
[confident] Permítelo una sola vez, permítelo durante la sesión, o responde que no y dile a Copilot qué hacer en su lugar.
[600ms]
[concerned] Cuidado con permitirlo durante la sesión. Si apruebas el comando remove, Copilot puede borrar cualquier archivo de esa carpeta, o de las de abajo, sin volver a preguntarte.

## Step 11 · Organization policy

[calm] Los administradores pueden activar o desactivar Copilot CLI con una política, en Políticas de Copilot dentro de la configuración de la organización.
[600ms]
[serious] Cuando está desactivado, nadie de esa organización puede usarlo.
[600ms]
[reflective] Si ya se definió una política de la empresa, esa es la que manda, así que la organización no puede cambiarla.

## Step 12 · Recap: one Copilot, three places

[calm] Un solo Copilot funciona en tu editor, en tu terminal y en GitHub punto com.
[600ms]
[confident] Usa el editor para escribir y editar código, el CLI para comandos, scripts y archivos, y GitHub punto com para repositorios, issues y pull requests.
[600ms]
[proud] Elige el lugar que mejor se ajuste al trabajo. Lo que puedes usar depende de tu plan, tu cliente y las políticas de tu organización.
