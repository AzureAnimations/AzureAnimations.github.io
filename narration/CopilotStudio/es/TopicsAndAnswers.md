# Narrator Script — Copilot Studio · Copilot Studio — Topics & Answers

**Source animation:** [TopicsAndAnswers.html](../../../journeys/CopilotStudio/TopicsAndAnswers.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/training/courses/ab-620t00>
- <https://learn.microsoft.com/microsoft-copilot-studio/>

---

## Step 1 · A topic is a path of decisions

[calm] Un cliente dice: quiero devolver mis auriculares. Un tema convierte esa frase en un camino de nodos.
[600ms]
[curious] Hay nodos de disparador, pregunta, herramienta, respuestas generativas y mensajes, y cada uno necesita solo una cosa configurada.
[600ms]
[confident] Contoso Support y sus datos son ficticios. Esta página va dentro de un tema para ver qué poner en cada nodo.

## Step 2 · Variables: a named, typed box

[curious] Cuando un nodo de Pregunta pide el número de orden, guarda la respuesta en una variable. Piénsalo como un cuadro con nombre y tecleando.
[600ms]
[calm] Los nodos posteriores lo leen de nuevo, en un mensaje, una condición o una entrada de herramienta. El tipo viene del primer valor que almacenas, y luego se fija.
[600ms]
[reassuring] También puedes establecer un valor tú mismo con un nodo de valor de variable establecida. Y renombrar el nombre por defecto a algo significativo.

## Step 3 · Scope: who can see the variable

[calm] Una variable tiene un alcance, que decide quién puede verla. Hay cuatro niveles: temático, global, sistema y entorno.
[600ms]
[confident] El tema es el predeterminado, visible solo para el tema que lo hizo. Global dura la sesión, funciona entre temas y recibe un prefijo global.
[600ms]
[serious] Las variables del sistema y del entorno están integradas y solo lectura aquí. Elige el ámbito más limitado que funcione.

## Step 4 · Pass values on, never ask twice

[curious] A nadie le gusta que le hagan la misma pregunta dos veces. Así que cuando redirijas a otro tema, entrega lo que ya sabes.
[600ms]
[confident] En el tema de destino, configura la variable para recibir valores de otros temas. Luego, en el nodo Redirección, elige Añadir entrada.
[600ms]
[reassuring] Las entradas de herramienta y flujo funcionan igual, siempre que el tipo de variable coincida.

## Step 5 · Flows and tools: do the work in a topic

[calm] El trabajo real ocurre en herramientas y flujos de agentes. En un tema eliges Añadir nodo y luego añadir una herramienta.
[600ms]
[confident] Se convierte en un nodo de Acción que se ejecuta exactamente donde lo colocas. Una herramienta a nivel temático solo está disponible allí, mientras que una herramienta a nivel de agente permite al orquestador decidir cuándo llamarla.
[600ms]
[serious] Para ser una herramienta, un flujo necesita el activador del agente, una acción de respuesta, la publicación y una respuesta en cien segundos.

## Step 6 · Generative answers: grounded in your sources

[curious] El nodo de respuestas generativas busca en las fuentes de conocimiento que elijas y escribe una respuesta con citas.
[600ms]
[confident] Las fuentes establecidas en el nodo anulan las a nivel de agente. Activa la búsqueda solo de fuentes seleccionadas y se ignora todo lo demás.
[600ms]
[calm] Se ejecuta cuando la conversación llega a ese tema, y también como respaldo cuando ningún tema coincide. La moderación de contenido por defecto es Alta.

## Step 7 · Custom prompts: your instructions, your output

[curious] A veces quieres tener control total sobre la redacción. Un prompt personalizado te permite escribir las instrucciones tú mismo.
[600ms]
[confident] Añade una herramienta, elige Nuevo prompt y establece el modelo, la temperatura, las entradas y el formato de salida. El texto vuelve en una variable.
[600ms]
[encouraging] Pruébalo con datos de muestra. Sé específico, sé breve y da al prompt una salida cuando no pueda responder.

## Step 8 · Custom knowledge: bring your own data

[calm] ¿Y si tu contenido no está en una fuente de conocimiento soportada? Entonces lo traes tú mismo.
[600ms]
[confident] Obténlo con un flujo o una petición HTTP, moldea una tabla con contenido y, opcionalmente, ContentLocation y título para las citas. Luego pásalo a un nodo de respuestas generativas.
[600ms]
[serious] Ten en cuenta un límite: solo se usan los tres primeros registros para generar la respuesta.

## Step 9 · HTTP request: call any API from a topic

[curious] Para llamar a un REST API directamente desde un tema, añade el nodo Enviar HTTP petición desde el menú Avanzado.
[600ms]
[confident] Configuras el URL, método, cabeceras y cuerpo. Pegas JSON de muestra y la respuesta se convierte en una variable tipada.
[600ms]
[reassuring] Por defecto, un error detiene el tema y activa el tema On Error. Elige Continuar con error para conservar el código de estado y el cuerpo del error.

## Step 10 · Response formatting: shape how it reads

[calm] El nodo Mensaje es un pequeño editor. Puedes formatear texto con negrita, cursiva y listas con viñetas o numeradas.
[600ms]
[curious] Inserta variables, añade variaciones de mensajes para que el agente elija una al azar e incluye imágenes, respuestas rápidas y tarjetas.
[600ms]
[confident] No se permiten respuestas rápidas en todos los canales. En los canales de voz, sobrescribe el texto con un mensaje de voz y SSML.

## Step 11 · Adaptive cards: input and output in one card

[curious] Una tarjeta adaptativa es JSON que el canal renderiza. Coloca una en un nodo Message y simplemente muestra la información.
[600ms]
[confident] Usa Preguntar con la Tarjeta Adaptativa para recoger entradas. Necesita un botón de enviar y crea variables de salida a partir de las entradas de la tarjeta.
[600ms]
[serious] Copilot Studio soporta el esquema uno punto seis y anteriores, pero Teams se detiene en un punto cinco. Elige una versión que soporte cada canal.

## Step 12 · Configure topics: all in one

[calm] Mira todo el camino ahora. Nueve habilidades de la lista de exámenes, todas en una conversación, y cada una vive en un nodo.
[600ms]
[confident] Configurar temas se encuentra en el dominio de soluciones de Planificar y configurar agentes del A B 620 de examen, que es entre el treinta y el treinta y cinco por ciento.
[600ms]
[determined] Verifica la lista de habilidades actual en la guía oficial de estudio y luego sigue practicando con la formación oficial.
