# Narrator Script — Monitor · KQL Basics: Ask Your Logs a Question

**Source animation:** [KqlBasics.html](../../../journeys/Monitor/KqlBasics.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/kusto/query/>
- <https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries>
- <https://learn.microsoft.com/kusto/query/datatypes-string-operators>
- <https://learn.microsoft.com/kusto/query/join-operator>

---

## Step 1 · A query is a pipeline

[calm] Una consulta KQL empieza con una tabla. Después pasa las filas por un operador tras otro.
[600ms]
[curious] Cada barra vertical le pasa su resultado al siguiente paso, así que la consulta se lee de arriba hacia abajo.
[600ms]
[reassuring] Una consulta solo lee datos. Nunca modifica una tabla, así que puedes experimentar sin riesgo.

## Step 2 · where: keep only the rows you want

[calm] Filtra primero por tiempo, con ago, between y now.
[600ms]
[confident] Todos los operadores que vienen después trabajan con una tabla mucho más pequeña. Ago de treinta minutos significa treinta minutos antes de ahora, y between incluye los dos extremos.
[600ms]
[serious] El selector de tiempo del portal también limita una consulta. Si además fijas un tiempo en la consulta, se aplica el rango más pequeño.

## Step 3 · project and extend: choose and compute columns

[calm] Project conserva solo las columnas que nombras. Todo lo demás se quita del resultado.
[600ms]
[curious] Extend funciona distinto. Conserva todas las columnas y agrega una nueva que tú calculas.
[600ms]
[confident] Project también puede renombrar columnas, y extend es ideal para cálculos rápidos dentro de una consulta.

## Step 4 · summarize: many rows become one row per group

[calm] Summarize convierte muchas filas en una fila por grupo. Puedes contar las filas o sacar el promedio de un valor.
[600ms]
[confident] Agrupa por una columna como Name, o usa bin para cortar el tiempo en intervalos.
[600ms]
[serious] Si agrupas solo por TimeGenerated, tendrías un grupo por cada marca de tiempo. Bin redondea primero los tiempos en intervalos.

## Step 5 · order by, top, take, distinct: shape the answer

[calm] Order by ordena las filas. Top ordena y se queda solo con las primeras.
[600ms]
[curious] Take toma unas cuantas filas cualesquiera, sin ningún orden en particular, y distinct enumera los valores únicos de una columna.
[600ms]
[confident] Para obtener los registros más recientes, usa top en vez de ordenar toda la tabla.

## Step 6 · Text matching: has, contains, startswith

[curious] Has coincide con una palabra completa. Contains coincide con cualquier fragmento del texto, pero el escaneo es más lento.
[600ms]
[calm] Startswith revisa el comienzo del texto. Los tres ignoran mayúsculas y minúsculas.
[600ms]
[serious] Equals compara de forma exacta, así que ahí sí importan las mayúsculas. Cuando puedas, prefiere has, porque busca términos completos en lugar de escanear cada valor.

## Step 7 · join and union: combine two tables

[calm] Join relaciona filas de dos tablas a través de una columna en común.
[600ms]
[confident] Union simplemente apila las filas de varias tablas, unas sobre otras.
[600ms]
[serious] El tipo de join por defecto quita las filas duplicadas de la izquierda. Escribe kind igual a inner para conservar todas las coincidencias, y pon la tabla más pequeña a la izquierda.

## Step 8 · render timechart: turn rows into a picture

[calm] Para ver una tendencia, haz summarize por bin de TimeGenerated, con intervalos de cinco minutos.
[600ms]
[confident] Luego termina la consulta con render timechart. La primera columna se convierte en el eje de tiempo.
[600ms]
[serious] Render tiene que ser el último operador. No cambia los datos, solo le indica a la herramienta cómo dibujarlos.

## Step 9 · Build a query yourself

[excited] Ahora te toca a ti. Haz clic en los operadores para agregarlos, y en una línea para quitarla.
[600ms]
[curious] El objetivo son las solicitudes fallidas por cada cinco minutos, dibujadas como un gráfico.
[600ms]
[encouraging] Recuerda el orden. Filtra antes de resumir, y render va al final.

## Step 10 · From answer to action

[calm] Cuando una consulta te devuelve lo que necesitas, no la deseches. Reutilízala.
[600ms]
[confident] Puedes crear una regla de alerta a partir de la consulta actual, para que te avisen cuando cambie el resultado.
[600ms]
[optimistic] O guarda la consulta y fíjala como un mosaico en un libro de trabajo o en un panel.

## Step 11 · Three beginner mistakes

[calm] Estos son tres errores que todo principiante comete. Detecta cada uno y corrígelo.
[600ms]
[serious] KQL distingue entre mayúsculas y minúsculas. Los nombres de tablas, los nombres de columnas y equals toman en cuenta las mayúsculas.
[600ms]
[reassuring] Cada error es fácil de cometer y igual de fácil de evitar, una vez que sabes qué buscar.

## Step 12 · KQL at a glance

[calm] Una pregunta por cada barra vertical. Empieza con la tabla y luego filtra por tiempo.
[600ms]
[confident] Da forma a las columnas, resume las filas y renderiza el resultado.
[600ms]
[proud] Ahora practica en un espacio de trabajo real, o en el entorno de demostración enlazado en el artículo de introducción a Log Analytics.
