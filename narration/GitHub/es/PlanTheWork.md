# Narrator Script — GitHub · Contoso Delivery · Plan the Work · ES

**Source animation:** `journeys/GitHub/PlanTheWork.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · One Issue Nobody Can Pick Up

[warm] Los requisitos están acordados. Así que alguien abre una incidencia y pega dentro el documento entero.
[500ms]
[thoughtful] Cada línea es correcta. Y juntas hacen que la incidencia sea inservible.
[500ms]
[serious] Nadie puede hacerse cargo, porque es el trabajo de cuatro personas. No cabe en una sola revisión. Nadie puede trabajar en paralelo. Y hasta el último día no hay forma honesta de decir cuánto se ha avanzado.

## Step 2 · Cut It Into Four Epics

[confident] Así que córtalo en épicas. Una épica es una porción del tamaño de un hito: lo bastante grande para importar, lo bastante pequeña para poder decir cuándo está terminada.
[500ms]
[bright] La API REST de Node.js. El frontend listo para venta. La calidad y seguridad automatizadas. La contenerización y el despliegue en la nube.
[500ms]
[thoughtful] Quédate con esos colores. Cada épica se convierte en una rama de larga vida y en un grupo del tablero, así que el nombre que elijas aquí te acompaña hasta producción.

## Step 3 · Split Each Epic Into Sub-Tasks

[confident] Una épica todavía no es algo que puedas empezar un lunes por la mañana. Así que cada una se divide otra vez.
[500ms]
[calm] Una subtarea es una pieza concreta de trabajo: una rama, una pull request, una revisión. La épica uno se convierte exactamente en dos: el andamiaje del servicio con los endpoints de ciudades y salud, y después el proxy de meteorología de Azure Maps.
[500ms]
[thoughtful] La prueba para saber si has cortado bastante: ¿podría terminarlo una sola persona, y podría un revisor tenerlo todo en la cabeza a la vez?

## Step 4 · What Goes Inside a Sub-Task

[confident] ¿Y qué va dentro de la incidencia? El título dice qué: una frase que empieza por un verbo.
[500ms]
[serious] Después los criterios de aceptación, y esta es la parte que la gente se salta. Salud devuelve doscientos con una carga de estado. Ciudades devuelve las ciudades soportadas en JSON. Ambas cubiertas por pruebas unitarias que se ejecutan en CI.
[500ms]
[thoughtful] Ese es todo el truco. Sin criterios de aceptación, "terminado" es una opinión, y la revisión se convierte en una negociación.

## Step 5 · Make the Hierarchy Real

[confident] Hasta ahora las épicas y las subtareas solo están relacionadas en nuestra cabeza. Dos caracteres arreglan eso.
[500ms]
[calm] En el cuerpo de la épica, escribe una lista de tareas con referencias a incidencias: un guion, un par de corchetes y el número. GitHub la muestra como una lista viva: cierra la número dos y la casilla se marca sola y la barra de progreso avanza.
[500ms]
[thoughtful] Esos números no los eliges tú. GitHub sella cada nueva incidencia con el siguiente del repositorio, y las pull requests salen del mismo contador, por lo que la primera pull request aquí será la número trece.
[500ms]
[reassuring] Fíjate en lo que no pasó: nadie editó la barra de progreso. Por eso se puede confiar en el tablero que vas a construir.

## Step 6 · Say What Blocks What

[serious] Una cosa más que escribir: el orden.
[500ms]
[calm] La incidencia seis es la página de detalle de ciudad, y necesita meteorología para mostrarse. La incidencia tres es el endpoint que devuelve esa meteorología. La seis sencillamente no puede terminar primero.
[500ms]
[confident] Así que en el cuerpo de la seis escribes: bloqueada por la tres. GitHub muestra esa relación en ambas incidencias.
[500ms]
[thoughtful] El orden es información. Una incidencia que *dice* que está bloqueada cuesta mucho menos que una que se descubre a mitad de sprint.

## Step 7 · Your Turn: Generate This Backlog

[warm] Ya has visto la forma. Ahora hazlo real, en tu propio repositorio.
[500ms]
[calm] Si aún no lo has preparado, para aquí y haz primero "Set Up Your Repo": necesitas un repositorio vacío y `gh auth login` hecho.
[500ms]
[bright] Después descarga el importador, PowerShell o Bash, ejecútalo y responde a una pregunta: tu usuario, barra, weather map app.
[500ms]
[serious] Dos cosas hacen tropezar. Tu repositorio necesita un campo Effort con High, Medium y Low, y el tipo de incidencia Feature. Si falta alguno, el script se para y te dice cuál.
[500ms]
[reassuring] Un minuto después: cinco de cinco, correcto. Ve y ejecútalo; te espero.

## Step 8 · Twelve Issues — and No Way to Work Them

[confident] Abre la pestaña Issues. Todo lo que planificamos está ahí: cuatro épicas, ocho subtareas, etiquetas, estimaciones, criterios de aceptación y la cadena de bloqueos.
[500ms]
[thoughtful] Ahora míralo como alguien que tiene que hacer el trabajo. ¿Cuál está empezada? ¿Cuál es la siguiente? ¿Cuál está atascada, y quién la lleva?
[500ms]
[serious] No puedes saberlo. Doce incidencias abiertas, todas del mismo tono de gris. Una lista te dice lo que *existe*. No puede decirte lo que está *pasando*.

## Step 9 · From One Idea to Work You Can Assign

[warm] Mira la distancia recorrida. Una idea demasiado grande para que nadie la cogiera, ahora cuatro épicas, subtareas que valen una rama y una revisión cada una, enlazadas por listas de tareas y ordenadas por lo que bloquea a qué.
[500ms]
[confident] Siguiente parada: poner todo esto en un tablero, para que el estado deje de vivir en la cabeza de alguien.
