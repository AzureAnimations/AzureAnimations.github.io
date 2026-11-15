# Narrator Script — GitHub · Review with Copilot: Pull Request Summaries and Review Standards

**Source animation:** [CopilotCodeReview.html](../../../journeys/GitHub/CopilotCodeReview.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>

---

## Step 1 · A Pull Request Nobody Wants to Read

[calm] En Contoso, Maya abre una pull request con cuarenta archivos modificados y la descripción vacía.
[600ms]
[concerned] Ravi tiene que armar la historia solo con el código, adivinando qué cambió y por qué.
[600ms]
[curious] Un revisor necesita la historia antes que los detalles. Así que dejemos que Copilot escriba el resumen, y luego revisamos el código.

## Step 2 · Generate a Summary

[confident] En el cuadro de descripción, Maya abre el menú de Copilot y elige Resumen.
[600ms]
[calm] Copilot ignora cualquier texto que ya esté en el cuadro, así que ella empieza con el cuadro vacío.
[600ms]
[reassuring] Luego lee el borrador, agrega su propio contexto y recién entonces lo publica. El resumen es un punto de partida, no la última palabra.

## Step 3 · Ask Copilot to Review

[calm] En la pull request, Maya abre Revisores en la barra lateral derecha y hace clic en Solicitar junto a Copilot.
[600ms]
[curious] Es el mismo gesto que usaría para pedirle una revisión a un compañero. Copilot lee la pull request y deja sus comentarios.
[600ms]
[confident] Cuando llegan commits nuevos, puede usar el botón de volver a solicitar junto a Copilot para que haga otra revisión.

## Step 4 · Read the Comments

[calm] Cada comentario aparece en una línea específica y trae una gravedad: Alta, Media o Baja.
[600ms]
[confident] Cuando puede, Copilot agrega un cambio sugerido que puedes confirmar con un commit, o sumar a un lote con otros.
[600ms]
[serious] Fíjate en el tipo de revisión. Por defecto es una revisión de comentario, no una aprobación ni una solicitud de cambios. Puedes responder y resolver, pero Copilot no lee tus respuestas.

## Step 5 · Suggestions Versus Your Judgment

[calm] Copilot sugiere y Maya decide, comentario por comentario.
[600ms]
[confident] Puede confirmar una sugerencia tal cual, cambiar el código ella misma y luego confirmar, o resolver la conversación cuando simplemente no aplica.
[600ms]
[serious] Copilot puede señalar problemas que no existen, y una nueva revisión puede repetir un comentario que ya resolviste. Cada comentario necesita a una persona.

## Step 6 · Set the Review Standard

[curious] Repetir a mano los mismos comentarios cansa. Así que el equipo escribe sus reglas de revisión en archivos de instrucciones dentro del repositorio.
[600ms]
[confident] Hay un archivo para todo el repositorio, archivos por ruta que coinciden con ciertas carpetas, y un archivo agents en la raíz.
[600ms]
[reassuring] Copilot los lee desde la rama que se está revisando, así que puedes probar un cambio de regla en la misma pull request. Las reglas cortas y específicas funcionan mejor.

## Step 7 · See the Standard at Work

[curious] Aquí está la misma pull request, revisada antes y después del archivo de instrucciones. Mueve el interruptor para comparar.
[600ms]
[impressed] Antes, los comentarios eran generales y servían para cualquier código. Después, mencionan las reglas propias del equipo.
[600ms]
[serious] Una advertencia. Las instrucciones orientan a Copilot, pero no garantizan nada, y puede saltarse una regla. Sigue leyendo sus comentarios.

## Step 8 · Automatic Review

[calm] Nadie debería tener que acordarse de pedirla. Un conjunto de reglas del repositorio puede solicitar a Copilot en cada pull request.
[600ms]
[confident] Lo encuentras en Configuración, Conjuntos de reglas, luego en un nuevo conjunto de reglas de rama, y seleccionas la opción para solicitar automáticamente la revisión de código de Copilot.
[600ms]
[reassuring] Activa la revisión de los push nuevos; si no, Copilot revisa una pull request solo una vez. Las pull requests en borrador son opcionales. Sin un conjunto de reglas, Copilot revisa solo cuando se lo piden.

## Step 9 · Organization Policy

[calm] Si la gente recibe Copilot a través de una organización, la organización tiene que activar primero la política de revisión de código de Copilot.
[600ms]
[confident] Está en la configuración de políticas de Copilot de la organización, y aplica a las revisiones en GitHub punto com y en GitHub Mobile.
[600ms]
[curious] Los conjuntos de reglas de la organización también pueden solicitar revisiones automáticas en todos los repositorios cuyo nombre coincida con un patrón.

## Step 10 · What It Can Miss

[serious] Copilot deja una revisión de comentario, y por defecto no cuenta como aprobación.
[600ms]
[concerned] Puede equivocarse, pasar por alto problemas reales u omitir tus instrucciones.
[600ms]
[determined] Copilot solo puede dejar revisiones de aprobación si la configuración del repositorio, la organización y la empresa lo permite, y es una decisión deliberada. Copilot complementa la revisión humana. Una persona sigue dando el visto bueno.

## Step 11 · Recap: A Review Loop with Copilot and a Person

[calm] Antes de la revisión, un resumen de Copilot cuenta la historia. Durante la revisión, Copilot comenta y tú decides.
[600ms]
[confident] Alrededor de la revisión, los estándares en archivos de instrucciones, un conjunto de reglas y una política de la organización mantienen el ciclo consistente.
[600ms]
[proud] Una persona sigue tomando la decisión. Para el examen G H 300, estos son los temas de revisión de código dentro de usar las funciones de GitHub Copilot.
