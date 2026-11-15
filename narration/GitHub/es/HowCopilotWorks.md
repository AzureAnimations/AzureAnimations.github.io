# Narrator Script — GitHub · How a Copilot Suggestion Is Made

**Source animation:** [HowCopilotWorks.html](../../../journeys/GitHub/HowCopilotWorks.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow>
- <https://learn.microsoft.com/agent-framework/journey/llm-fundamentals>

---

## Step 1 · You type, a suggestion appears

[calm] Maya, desarrolladora de Contoso, escribe un comentario y aparece texto en gris.
[600ms]
[curious] Pero en medio se ejecutan siete etapas que nunca ves.
[600ms]
[confident] En esta lección abrimos cada una, para que sepas qué pasa con tu código.

## Step 2 · Gather the context

[calm] Antes de enviar nada, Copilot recoge pistas alrededor de tu cursor: el código, el archivo, las pestañas cercanas y el proyecto.
[600ms]
[confident] En el chat también usa tu selección, los archivos que mencionas con la arroba y el historial del chat.
[600ms]
[encouraging] Así que abre los archivos que importan y cierra los que no.

## Step 3 · Build the prompt

[curious] Las pistas se empaquetan en un solo prompt, junto con las reglas y tu código.
[600ms]
[confident] El código antes del cursor y el código de después enmarcan un hueco, y el modelo rellena ese hueco. Esto se llama relleno en el centro.
[600ms]
[reflective] El formato real del prompt es interno, así que esta imagen solo muestra la idea.

## Step 4 · Pass the proxy

[calm] El prompt terminado sale de tu editor por HTTPS.
[600ms]
[confident] Llega a un servidor proxy dentro del tenant de Microsoft Azure que es propiedad de GitHub, antes de que lo vea cualquier modelo.
[600ms]
[reassuring] Ese proxy es el primer punto de control, entre tu editor y el modelo.

## Step 5 · Filter on the way in

[serious] El proxy bloquea los intentos de manipular el sistema, así que un prompt manipulado no puede cambiar el comportamiento de Copilot.
[600ms]
[confident] Los filtros de contenido dejan fuera el texto ofensivo y los datos personales, antes de que el prompt siga adelante.
[600ms]
[reassuring] Al modelo solo le llega un prompt limpio.

## Step 6 · The model writes

[calm] El modelo escribe la sugerencia un token a la vez. Un token es un fragmento pequeño de texto.
[600ms]
[curious] Cada vez, predice lo que probablemente viene después.
[600ms]
[serious] Probable no es lo mismo que correcto, así que revisa y prueba cada sugerencia.

## Step 7 · Post-process on the way out

[calm] Cada sugerencia se revisa antes de que la veas.
[600ms]
[confident] Las revisiones buscan contenido dañino, errores y fallos de seguridad y, si esa opción está activada, coincidencias con código público.
[600ms]
[reassuring] Si alguna revisión falla, la sugerencia se corta o se descarta.

## Step 8 · Back to the editor

[calm] Solo las sugerencias que pasan todas las revisiones llegan a tu editor, en texto gris.
[600ms]
[confident] Puedes aceptarla completa o en parte, descartarla, o simplemente seguir escribiendo para ignorarla.
[600ms]
[reassuring] Nada cambia en tu archivo hasta que tú decidas.

## Step 9 · Chat is different

[curious] En el chat, cada prompt nuevo también lleva los turnos anteriores.
[600ms]
[concerned] Así que un turno viejo y fuera de tema puede desviar la respuesta.
[600ms]
[encouraging] Cuando empieces una tarea nueva, abre una conversación nueva.

## Step 10 · Where your data goes

[calm] Tu prompt y la sugerencia siguen el mismo camino en todos los planes.
[600ms]
[confident] Si esos datos pueden usarse para entrenar modelos depende del plan. En Business y Enterprise, no se usan para entrenamiento.
[600ms]
[serious] En Free, Pro y Pro Plus sí se usan, a menos que lo desactives, así que revisa la configuración de Copilot para ver el texto vigente.

## Step 11 · Recap: the lifecycle in one picture

[calm] Este es el ciclo completo. El editor recopila el contexto y arma el prompt, y el proxy y los filtros cuidan las dos puertas.
[600ms]
[confident] El modelo escribe y luego decides tú. El chat sigue el mismo ciclo, con el historial de la conversación agregado a cada prompt.
[600ms]
[proud] Ahora ya sabes lo que pasa entre que escribes y aparece el texto gris.
