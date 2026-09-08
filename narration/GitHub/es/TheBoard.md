# Narrator Script — GitHub · Contoso Delivery · Track It on a Board · ES

**Source animation:** `journeys/GitHub/TheBoard.html`

Los encabezados `## Step N` se mantienen en inglés a propósito (índice del generador y de las leyendas).

---

## Step 1 · An Unorganized List of Issues

[warm] La planificación funcionó. Cada épica y cada subtarea es ya una incidencia real, y esto es lo que obtienes: una lista plana, la más reciente primero.
[500ms]
[serious] Intenta responder a las preguntas que un equipo hace de verdad. ¿Quién trabaja en qué? ¿Qué cojo ahora? ¿Qué está atascado? ¿Cuánto le falta a la épica uno?
[500ms]
[thoughtful] No puedes responder a ninguna desde esta pantalla. Las incidencias están bien: el problema es la *vista*. Una lista no puede mostrar el flujo.

## Step 2 · One Board, Five Columns

[confident] Así que Contoso añade un Project y lo cambia a vista de tablero: cinco columnas — Backlog, Ready for Sprint, In Progress, In Review y Done.
[500ms]
[bright] Cinco, no tres. Ready for Sprint es donde espera el trabajo ya refinado, e In Review es donde el trabajo terminado espera a una persona. Esas dos son justo donde las cosas se acumulan en silencio, así que se les pone nombre.
[500ms]
[reassuring] Y la regla es simple: cada elemento vive exactamente en una columna.

## Step 3 · Status Is a Column, Not a Comment

[confident] Esto es lo que eso te da.
[500ms]
[calm] La subtarea dos empieza en Backlog. Se refina hasta Ready for Sprint. Alguien la coge: In Progress. Abre una pull request: In Review. Se fusiona: Done.
[500ms]
[bright] Mover la tarjeta *es* la actualización de estado. Nadie escribe "empiezo con esto" en un comentario. Nadie manda un mensaje preguntando.
[500ms]
[reassuring] Un elemento, un sitio. Si quieres saber qué está en revisión, miras.

## Step 4 · Tell the Board What Kind of Work This Is

[confident] El tablero todavía no distingue una épica de una tarea de un día. Así que Contoso añade un campo.
[500ms]
[calm] Work Type. Selección única. Opciones: Epic y Sub-Task. Se define una vez y cada tarjeta puede llevarlo.
[500ms]
[thoughtful] Sin él, una épica de tres semanas y un arreglo de tres horas parecen idénticos en una columna. Con él, puedes filtrarlos, agruparlos y contarlos por separado.

## Step 5 · Put the Work in a Timebox

[confident] Un campo más, y este añade tiempo.
[500ms]
[calm] Sprint es un campo de iteración con una cadencia de dos semanas. El sprint uno se lleva el núcleo del backend; el sprint dos coge el panel y la tubería. Ahora el tablero se puede filtrar a *solo esta quincena*.
[500ms]
[reassuring] Eso es lo que convierte un "algún día" en un compromiso, y lo que hace posible una planificación de capacidad honesta.

## Step 6 · Group the Board by Parent

[confident] Último movimiento. Cambia cómo se agrupa el tablero.
[500ms]
[calm] En lugar de columnas por estado, las mismas tarjetas se reorganizan bajo la épica a la que pertenecen. No se ha vuelto a escribir nada ni se ha duplicado nada: son los mismos datos, ordenados para responder a otra pregunta.
[500ms]
[confident] Agrupa por Status para llevar el día. Agrupa por Parent cuando alguien pregunte cómo va la épica uno.

## Step 7 · Your Turn: Create the Board

[warm] Dejaste la explicación anterior con doce incidencias y ninguna forma de trabajarlas. Vamos a arreglarlo en tu repositorio.
[500ms]
[calm] Abre la pestaña Projects, pulsa "Link a project" y después "New project". Elige Kanban si lo ves; si no, elige Board. Las mismas tres columnas: Todo, In Progress y Done.
[500ms]
[reassuring] Llámalo "Contoso Weather App" y créalo. Deberías ver un tablero vacío, sin ninguna tarjeta. Eso es lo esperado, y es justo el asunto del siguiente paso.

## Step 8 · Your Turn: Put the Issues on It

[thoughtful] ¿Y por qué está vacío el tablero? Porque GitHub no mueve tus incidencias hasta él por sí solo.
[500ms]
[calm] En una organización puedes marcar "Import items from repository" al crearlo. Si no, abre el proyecto, menú de tres puntos, Workflows, "Auto-add to project", filtro "is issue, is open", y actívalo.
[500ms]
[reassuring] ¿Aparecen las doce en Todo? Arrastra una a In Progress y recarga: si se queda, tu tablero está vivo.

## Step 9 · Your Turn: Split the Board by Epic

[thoughtful] Doce tarjetas en una única columna Todo muy larga, y nada te dice a qué épica pertenece cada una.
[500ms]
[calm] Abre View options, deja "Column by" en Status, después pulsa Swimlanes y elige Parent issue. La columna se divide en cuatro bandas horizontales, una por épica: estado a lo ancho, épica a lo alto.
[500ms]
[careful] Una advertencia: arrastrar una tarjeta de lado cambia su estado, pero arriba o abajo, y acabas de cambiarle el padre a esa incidencia.

## Step 10 · Now the Team Can See the Work

[warm] Y el tablero está listo.
[500ms]
[calm] Una lista plana se convirtió en cinco columnas. Work Type separa las épicas de las subtareas, Sprint las mete en una quincena, y las swimlanes informan de una épica sin que nadie monte una hoja de cálculo.
[500ms]
[confident] El plan es visible y el estado es honesto. Siguiente: el modelo de ramas que convierte una tarjeta en *In Progress* en código fusionado y desplegado.
