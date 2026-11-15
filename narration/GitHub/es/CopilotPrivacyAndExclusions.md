# Narrator Script — GitHub · Copilot Privacy, Content Exclusions and Safeguards

**Source animation:** [CopilotPrivacyAndExclusions.html](../../../journeys/GitHub/CopilotPrivacyAndExclusions.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-admin>

---

## Step 1 · Two Worries, One Tool

[calm] Contoso quiere Copilot en todos los editores. Pero su repositorio tiene un archivo de secretos, y Ravi pregunta por el código con licencia.
[600ms]
[concerned] Son dos preocupaciones reales: qué puede leer Copilot y qué puede sugerir.
[600ms]
[reassuring] Copilot tiene una opción para cada una: las exclusiones de contenido y el filtro de código público.

## Step 2 · What Copilot Sends and Keeps

[curious] Copilot envía tu código y su contexto como un prompt, y recibe una sugerencia de vuelta.
[600ms]
[confident] Tres configuraciones deciden qué entra, qué sale y cómo se usan los datos: las exclusiones, el filtro de código público y el uso de datos.
[600ms]
[reflective] Lo que se guarda y se usa para entrenamiento depende de tu plan, así que consulta el Centro de Confianza de GitHub Copilot.

## Step 3 · Content Exclusions: What They Are

[calm] Una exclusión de contenido le dice a Copilot que ignore los archivos o repositorios que elijas.
[600ms]
[confident] Así que no pueden influir en lo que sugiere ni en lo que dice. El contenido excluido no genera sugerencias, ni contexto, ni respuestas, ni revisiones.
[600ms]
[serious] La exclusión funciona con los planes Copilot Business y Copilot Enterprise.

## Step 4 · Write an Exclusion Rule

[curious] Un administrador lista las rutas en la configuración del repositorio, en Copilot, y luego en Exclusión de contenido.
[600ms]
[calm] Cada línea es una ruta o un patrón entre comillas, y todos los archivos que coincidan quedan excluidos. Puedes agregar comentarios con el signo de numeral.
[600ms]
[reassuring] La coincidencia usa patrones fnmatch, y no distingue entre mayúsculas y minúsculas.

## Step 5 · Who Can Set Exclusions

[calm] Se pueden definir reglas para un repositorio, una organización o toda una empresa. El nivel decide a quién cubren.
[600ms]
[confident] Los administradores del repositorio cubren ese repositorio. Los propietarios de la organización cubren a los usuarios a los que la organización les dio una licencia. Los propietarios de la empresa cubren a todos los usuarios de Copilot de la empresa.
[600ms]
[curious] Las reglas heredadas aparecen en recuadros grises que no puedes editar.

## Step 6 · What the Exclusion Does

[curious] Edita un archivo normal y aparece una sugerencia. Haz la misma edición en el archivo excluido y no aparece ninguna.
[600ms]
[confident] En Chat, un archivo excluido no aparece como referencia, así que Chat no puede usarlo.
[600ms]
[serious] La opción del editor para apagar Copilot es personal. No es una regla.

## Step 7 · Matching Public Code

[calm] Copilot compara una sugerencia y el código que la rodea con el código público de GitHub.
[600ms]
[confident] Con el filtro activado, no se muestra la sugerencia que coincide. Con el filtro desactivado, se muestra la coincidencia con su licencia y un enlace.
[600ms]
[reassuring] Si no hay coincidencia, la sugerencia aparece de todos modos.

## Step 8 · Turn the Public Code Filter On

[curious] Quién cambia esta opción depende de tu plan. Prueba los tres botones de plan y mira quién controla el filtro.
[600ms]
[calm] En un plan individual, tú eliges Permitir o Bloquear en la configuración de Copilot.
[600ms]
[confident] Si hay un administrador de empresa o de organización, lo configura para todos. Si tienes una licencia de una organización, se hereda y no puedes cambiarlo.

## Step 9 · Who Owns the Output

[calm] GitHub no es dueño de lo que produce Copilot. Conservas la propiedad que ya tienes.
[600ms]
[serious] También sigues siendo responsable de lo que construyes, y los filtros solo reducen el riesgo.
[600ms]
[reflective] Este es un resumen en lenguaje sencillo, no asesoría legal. Tu propio acuerdo decide todo lo que vaya más allá.

## Step 10 · When It Does Not Work

[curious] Parte del síntoma. Si no aparece una sugerencia, muchas veces es por un archivo excluido, un lenguaje desactivado o una coincidencia con el filtro.
[600ms]
[confident] Si se sigue usando un archivo excluido, piensa en configuraciones desactualizadas, el patrón, un enlace simbólico o contexto indirecto. Recarga la ventana o vuelve a abrir la app para que se actualicen las reglas.
[600ms]
[serious] Y recuerda: la exclusión es una medida de protección, no una frontera de seguridad.

## Step 11 · Recap: Who Owns Which Setting

[calm] Los administradores escriben las reglas de exclusión y la política de código público.
[600ms]
[confident] Los desarrolladores prueban las reglas, definen su propio filtro y revisan lo que entregan.
[600ms]
[proud] Eso cubre cuatro habilidades de la guía de estudio de G H 300. Solo recuerda el límite: la exclusión es una medida de protección, no una frontera de seguridad.
