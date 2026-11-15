# Narrator Script — GitHub · Code Security: Code Scanning with CodeQL

**Source animation:** [CodeScanningWithCodeQL.html](../../../journeys/GitHub/CodeScanningWithCodeQL.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · Tests prove it works; scanning asks if it is safe

[calm] Las pruebas de Ravi están todas en verde. Todo funciona como él esperaba.
[600ms]
[concerned] Aun así, una sola línea de código puede ser atacada, y nadie escribió una prueba para buscar eso.
[600ms]
[confident] El escaneo de código lee el código mismo, busca patrones inseguros y reporta las alertas justo en la línea.

## Step 2 · How CodeQL works: build a database, then query it

[curious] CodeQL trata el código como si fuera datos. Primero construye una base de datos a partir de tu código, una por cada lenguaje.
[600ms]
[confident] Luego ejecuta consultas sobre esa base de datos. Cada consulta busca un tipo de patrón inseguro.
[600ms]
[calm] Los resultados aparecen como alertas de escaneo de código en tu repositorio.

## Step 3 · Default setup: one click, languages detected

[calm] La forma más fácil de empezar es la configuración predeterminada. GitHub elige por ti los lenguajes, el conjunto de consultas y los disparadores.
[600ms]
[confident] Revisas el resumen y lo activas.
[600ms]
[reassuring] Requiere tener GitHub Actions activado, y el repositorio debe ser público o contar con Code Security.

## Step 4 · Advanced setup: workflow, triggers and a matrix

[confident] La configuración avanzada agrega un archivo de flujo de trabajo a tu repositorio, y desde ese momento es tuyo.
[600ms]
[curious] Puedes editar los disparadores, como push, pull request o una programación. También puedes editar la matriz de lenguajes.
[600ms]
[impressed] La matriz ejecuta un trabajo por cada lenguaje, y todos corren en paralelo.

## Step 5 · Compiled languages and build modes

[curious] Los lenguajes compilados pueden necesitar una compilación antes de que CodeQL pueda crear su base de datos a partir de ellos.
[600ms]
[calm] Para cada lenguaje de la matriz, eliges un modo de compilación. Ninguno significa que no se compila nada. Autobuild significa que CodeQL compila por ti.
[600ms]
[confident] Manual significa que tú escribes los comandos de compilación. La documentación indica qué lenguajes admiten cada modo.

## Step 6 · Third-party scanners and SARIF upload

[curious] ¿Ya usas otro escáner? Haz que escriba un archivo SARIF, que es un formato JSON para los resultados.
[600ms]
[confident] Sube ese archivo con una acción, con la API o con la línea de comandos de CodeQL.
[600ms]
[impressed] Entonces sus hallazgos aparecen como alertas de escaneo de código, justo junto a las de CodeQL.

## Step 7 · Reading an alert: severity, rule and data-flow path

[calm] Cada alerta indica la regla que se activó y su gravedad. Una alerta de seguridad también muestra un nivel, de crítico a bajo.
[600ms]
[confident] En una alerta de flujo de datos, elige Mostrar rutas. Te muestra el recorrido de los datos desde la fuente hasta el sumidero.
[600ms]
[encouraging] Haz clic en cada paso de la ruta y verás exactamente en qué punto una entrada no confiable se vuelve peligrosa.

## Step 8 · Fixing with Copilot Autofix, then re-scan

[curious] Copilot Autofix puede sugerir un cambio de código para la alerta que estás viendo.
[600ms]
[confident] Revisas la sugerencia, abres una pull request con la corrección, y el escaneo de código la vuelve a revisar.
[600ms]
[reflective] Hace lo mejor que puede, pero no corrige todas las alertas en todos los casos. Lee siempre el cambio antes de fusionar.

## Step 9 · Dismiss an alert: reasons and the audit trail

[calm] Hay alertas que no vas a corregir. Quizás el código solo se usa en pruebas, o el riesgo es aceptable.
[600ms]
[confident] Descarta la alerta y elige un motivo. También puedes agregar un comentario.
[600ms]
[reassuring] Las dos cosas quedan en la línea de tiempo de la alerta, así que hay un registro de quién decidió qué, y por qué.

## Step 10 · Query suites: from default to security-and-quality

[curious] Un conjunto de consultas es un grupo de consultas con nombre. Te deja elegir qué tanto quieres buscar.
[600ms]
[confident] El predeterminado es muy preciso. Security-extended agrega consultas de menor precisión, así que encuentras más.
[600ms]
[calm] Security-and-quality va todavía más allá y agrega también consultas de calidad de código.

## Step 11 · Custom queries and configuration files

[confident] Un archivo de configuración te permite agregar tus propias consultas y packs. También puede excluir consultas y saltarse carpetas completas.
[600ms]
[calm] El flujo de trabajo apunta a ese archivo con una sola opción.
[600ms]
[serious] Un detalle importante: las consultas definidas en el flujo de trabajo reemplazan a las del archivo, a menos que les pongas un signo más delante para combinarlas.

## Step 12 · When a scan fails or is slow: where to look

[calm] Cuando falla un escaneo, empieza por el paso que falló, el modo de compilación y los logs.
[600ms]
[confident] Si falla la compilación, prueba el modo de compilación manual. Si los logs traen muy poco detalle, activa el registro de depuración.
[600ms]
[determined] Si el escaneo es demasiado lento, reduce el alcance, divide por lenguaje o usa un runner más grande. Lo que puedes cambiar depende de si usas la configuración predeterminada o la avanzada.
