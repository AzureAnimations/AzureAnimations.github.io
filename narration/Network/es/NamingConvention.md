# Naming convention — narración (es)

## Step 1 · Six months later, nobody knows

[calm] Un grupo de recursos lleno de nombres que tenían todo el sentido del mundo el día en que se escribieron.
[500ms]
[concerned] Ahora nadie sabe decir para qué sirven, quién es su responsable, ni si borrar uno va a romper producción.
[400ms]
[confident] Y aquí está la restricción más dura: la mayoría de los nombres de recursos de Azure no se pueden cambiar una vez creados. Un mal nombre no se arregla en cinco minutos más adelante: hay que volver a desplegar.

## Step 2 · Five parts, always in the same order

[confident] El Cloud Adoption Framework divide un nombre en cinco componentes.
[500ms]
[calm] Tipo de recurso, carga de trabajo, entorno, región e instancia. Decide el orden una vez, déjalo por escrito, y todos los nombres de tu entorno se vuelven legibles.
[400ms]
[helpful] Se recomienda el guion por legibilidad, pero no todos los tipos de recurso de Azure lo permiten. Las cuentas de almacenamiento, por ejemplo. Si valoras la coherencia absoluta, quita el separador en todas partes en lugar de solo donde estás obligado.

## Step 3 · The abbreviations are already decided

[calm] No tienes que inventarte los prefijos.
[500ms]
[confident] Microsoft publica una abreviatura recomendada para cada tipo de recurso. Usarla significa que cualquiera que entre en tu equipo ya sabe leer tu entorno.
[400ms]
[helpful] Una que pilla a mucha gente: no existe un lb genérico. El Cloud Adoption Framework separa los balanceadores de carga en lbi para los internos y lbe para los externos.

## Step 4 · What it looks like across the estate

[calm] Los mismos cinco componentes, aplicados recurso a recurso.
[500ms]
[confident] Los seis primeros formatos son ejemplos publicados. Los tres últimos aplican el mismo patrón a recursos que tienen abreviatura pero no un ejemplo publicado.
[400ms]
[helpful] Fíjate en que el formato del NSG se apoya en la directiva y no en la región. La convención se adapta a lo que de verdad distingue a uno de otro.

## Step 5 · Where a name has to be unique

[calm] La unicidad no es global para todo.
[500ms]
[confident] Algunos nombres deben ser únicos en todo Azure, y otros solo dentro de un grupo de recursos. Y los límites de caracteres varían lo suficiente entre tipos de recurso como para que alguno acabe jugándote una mala pasada.
[400ms]
[helpful] El nombre de equipo de una máquina virtual Windows está limitado a quince caracteres. Ese único límite es la razón por la que casi todas las convenciones mantienen las abreviaturas de carga de trabajo en tres o cuatro letras.

## Step 6 · What does not belong in the name

[confident] Un nombre solo debe llevar aquello que se mantenga cierto durante toda la vida del recurso.
[500ms]
[calm] Todo lo demás —responsable, centro de coste, número de ticket, fecha de revisión— va en una etiqueta, donde sí puedes cambiarlo.
[400ms]
[concerned] Y una regla inflexible: nunca pongas información personal, sensible o confidencial en el nombre de un recurso ni en una etiqueta. Ambos son visibles para mucha más gente de lo que se suele pensar.

## Step 7 · A name that answers the question

[confident] Así que, la idea clave. Una buena convención no es burocracia.
[400ms]
[calm] Es lo que permite que un script, una directiva, un informe de costes y un ingeniero agotado a las dos de la madrugada lleguen todos a la misma conclusión sobre un recurso.
[600ms]
[encouraging] Deja la convención por escrito, publica la lista de abreviaturas y aplícala con Azure Policy desde el primer día, porque renombrar más tarde rara vez es una opción.
