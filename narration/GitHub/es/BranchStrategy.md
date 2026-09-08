# Narrator Script — GitHub · Contoso Delivery · Branch with Intent · ES

**Source animation:** `journeys/GitHub/BranchStrategy.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · Nobody Pushes Straight to main

[confident] El tablero dice que esta tarjeta está In Progress. Toca escribir código, y la primera pregunta es dónde ponerlo.
[500ms]
[serious] En main no. main es lo que se despliega, así que es la única rama en la que nadie escribe directamente. Contoso lo impone con un ruleset: exigir una pull request, exigir las comprobaciones, exigir una revisión y bloquear los force push.
[500ms]
[thoughtful] Una convención que la gente *acuerda* se rompe un viernes malo por la tarde. Un ruleset no, y se aplica también a los mantenedores.

## Step 2 · Three Tiers, Not Two

[confident] La mayoría de los equipos se quedan en dos niveles: main y una rama por cambio. Contoso añade uno en medio.
[500ms]
[calm] main, siempre desplegable. Debajo, una rama de épica, de larga vida, una por épica, que integra sus subtareas. Debajo de esa, una rama de característica, de vida corta, una por subtarea, con el nombre de la incidencia que cierra.
[500ms]
[bright] Ese nivel intermedio es toda la idea: una épica entera se puede montar y probar *como una sola cosa* antes de que nada llegue a producción.

## Step 3 · Clone It — and All You Have Is main

[warm] Todo hasta ahora ha estado en GitHub. Para escribir código lo necesitas en tu máquina.
[500ms]
[calm] Pulsa el botón verde Code, copia la dirección, después `git clone` y pégala. Lo que obtienes no es una descarga: es una copia completa del repositorio, con todo su historial.
[500ms]
[reassuring] Ahora escribe `git branch`. Una línea: un asterisco y la palabra main. Un clon recién hecho tiene exactamente una rama, y es la protegida. Así que lo siguiente es crear la tuya.

## Step 4 · Cut the Epic Branch, Then the Feature Branch

[confident] Dos secuencias de comandos, y el orden importa.
[500ms]
[calm] Primero la rama de épica: sitúate en main, haz pull para partir de lo que está desplegado, créala y súbela para que el equipo vea que existe.
[500ms]
[bright] Después la rama de característica, y fíjate en dónde estás parado. Estás *sobre* la rama de épica, y cortas la de característica desde ahí.
[500ms]
[serious] Corta desde el sitio equivocado y tu pull request se llenará de commits de otras personas, y la revisión será ilegible.

## Step 5 · A Commit Is a Set of Changes

[confident] ¿Y qué es un commit, en realidad? La gente lo dice como si fuera un archivo. No lo es.
[500ms]
[calm] La subtarea uno punto uno es el backend: un servidor, una ruta de salud, una ruta de ciudades, el servicio de Azure Maps, el archivo de paquetes, un archivo de entorno de ejemplo y un cambio en el README.
[500ms]
[bright] Siete archivos. Seis nuevos, uno modificado. Los siete entran juntos, como *un* commit.
[500ms]
[serious] Lo que nos lleva a tres comandos que la gente confunde, porque ocurren en tres sitios. `git add` no guarda nada: elige. `git commit` escribe lo elegido en el historial de tu propia máquina. Y `git push` es el único que toca GitHub.

## Step 6 · Write the Issue Number Into the Commit

[confident] El trabajo está hecho y necesita un mensaje de commit.
[500ms]
[calm] `feat` dice qué tipo de cambio es, después una descripción llana, y al final, entre paréntesis, el número de la incidencia. Esa referencia traza la línea de vuelta: el commit aparece ahora en la incidencia dos.
[500ms]
[thoughtful] Dentro de seis meses, `git log` es el único compañero que todavía recuerda por qué cambió esta línea. El número de incidencia es lo que le permite responder.

## Step 7 · One Number, Three Places

[thoughtful] ¿Y por qué ese mensaje acaba en paréntesis almohadilla dos? Porque GitHub lo lee.
[500ms]
[calm] En cuanto se sube el commit, GitHub añade una línea a la incidencia dos: un commit que hace referencia a esta incidencia. Abre la incidencia y ves el código que la resolvió; abre el commit y ves la tarea que lo pidió. Dentro de seis meses, la anotación de blame sobre esta línea seguirá llevando ese número.
[500ms]
[careful] Una advertencia: una almohadilla dos a secas solo *enlaza*. Para cerrar la incidencia de verdad necesitas una palabra clave — closes almohadilla dos — que es la que lleva la pull request a continuación.

## Step 8 · Open the Pull Request Into the Epic

[confident] Toca abrir la pull request, y este es el paso que la gente hace mal.
[500ms]
[serious] La rama base es la rama de épica. No main. Cada subtarea aterriza primero en su épica.
[500ms]
[bright] En el cuerpo, dos palabras y un número: Closes almohadilla dos. Así, cuando esto se fusione, la incidencia se cierra sola, se marca su casilla en la lista de la épica y su tarjeta pasa a Done. Tres cosas, desde una línea de texto.

## Step 9 · The Checks Decide, Not the Author

[confident] Abrir la pull request pone en marcha la tubería.
[500ms]
[calm] El proyecto se compila. Se ejecutan las pruebas unitarias. CodeQL busca problemas de seguridad. Y un compañero lo lee.
[500ms]
[serious] Hasta que todo eso esté en verde, el botón de fusionar sigue desactivado, para todos, incluida la persona que lo escribió.
[500ms]
[reassuring] Por eso importaba el ruleset del primer paso. Sin él, estas comprobaciones serían consejos. Con él, son una puerta.

## Step 10 · When the Epic Is Whole, Promote It

[confident] La subtarea dos se fusiona. La tres se fusiona. La rama de épica contiene ahora un backend completo e integrado, probado como una unidad y no a trozos.
[500ms]
[calm] Así que una última pull request lleva la rama de épica hasta main.
[500ms]
[bright] Y *esa* es la fusión que despliega. Todo lo anterior era integración. Esta dispara el flujo de despliegue.

## Step 11 · Epic 1, From Cut to Merge

[warm] Pongamos los últimos cinco pasos en una sola imagen y sigamos solo a la épica uno.
[500ms]
[calm] Arriba, main. Un commit, y después nada: se queda quieta toda la historia. Debajo, cortada desde main, la rama de épica. Vacía al principio: es un contenedor, no un espacio de trabajo.
[500ms]
[calm] La subtarea dos recibe su propia rama corta desde la épica. Un commit. La pull request trece la fusiona de vuelta, y como el cuerpo decía "Closes #2", la incidencia se cierra sola.
[500ms]
[bright] Después la subtarea tres hace lo mismo. Su propia rama, su propio commit, la pull request catorce: la que abrió el agente de Copilot.
[500ms]
[confident] Cuenta el carril central: dos commits, uno por subtarea. Y solo ahora, solo cuando la épica está completa, la pull request quince la lleva a main.

## Step 12 · How It Actually Played Out

[confident] Ahora aléjate. La épica uno era una de cuatro, y todas tienen esta misma forma.
[500ms]
[calm] La API del backend. El frontend. Pruebas y tubería. Seguridad y despliegue. Cada una cortada desde main, cada una llenándose con sus subtareas, cada una volviendo por exactamente una pull request revisada: quince, dieciocho, veintiuno, veinticuatro.
[500ms]
[thoughtful] Las ramas de característica no han desaparecido: viven *dentro* de estos carriles. Esta vista está alejada, hasta las fusiones que llegaron a main.
[500ms]
[calm] Fíjate en el orden. Cada épica termina y promociona antes que la siguiente. main solo avanza en piezas completas y probadas.
[500ms]
[reassuring] Una excepción: solo el primer commit aterrizó directamente en main, antes de activar el ruleset.

## Step 13 · One Issue, One Branch, One Safe Merge

[warm] Ese es todo el modelo.
[500ms]
[calm] main protegida por un ruleset. Una rama de épica por épica, que integra sus partes. Una rama de característica corta por incidencia, con el nombre de su número. Y un conjunto de comprobaciones que decide si algo de esto pasa.
[500ms]
[confident] Todo descansa sobre esas comprobaciones en verde. Así que ahora: qué ejecuta realmente la tubería.
