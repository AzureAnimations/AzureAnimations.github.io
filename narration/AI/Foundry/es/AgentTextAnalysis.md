# Narrator Script · Español (es) — Journey 05 · Análisis de texto con Azure AI Language

**Source animation:** `static/v2/AI/Foundry/AgentTextAnalysis.html`
**Language:** Spanish (es). Traducido del guion maestro en inglés. Las indicaciones `[tags]` y las pausas `[NNNms]` se mantienen sin cambios. Los títulos de paso se conservan en inglés para el mapeo 1:1.

Un bloque por paso de la animación.

---

## Step 1 · The Problem

[serious] Reseñas, tickets de soporte, notas médicas, contratos... la mayoría de los datos empresariales son texto no estructurado.
[600ms]
[concerned] Leerlo todo a mano no es escalable.
[600ms]
[curious] Entonces, ¿cómo le damos sentido de forma automática?

## Step 2 · One Service, Many Capabilities

[confident] Ahí entra Azure AI Language: un servicio prediseñado que activas dentro de Foundry.
[600ms]
[impressed] Un recurso, un endpoint y una clave desbloquean toda una suite de capacidades de texto.
[600ms]
[reassuring] Los modelos vienen preentrenados: no hay datos que recopilar ni entrenamiento que ejecutar.

## Step 3 · Language Detection

[confident] Empecemos por lo simple, con la detección de idioma.
[600ms]
[calm] Dale cualquier texto y te devuelve el idioma, un código ISO estándar y una puntuación de confianza que indica qué tan seguro está.
[600ms]
[optimistic] Suena básico, pero es el primer paso esencial en casi cualquier flujo multilingüe: antes de traducir, enrutar o analizar un mensaje, primero tienes que saber en qué idioma está escrito.

## Step 4 · Key Phrases

[intrigued] A continuación, la extracción de frases clave.
[600ms]
[confident] Analiza el texto no estructurado y extrae automáticamente los puntos principales —las palabras y frases que de verdad importan— sin necesidad de entrenamiento.
[600ms]
[optimistic] Es perfecta para etiquetar documentos, crear índices de búsqueda o hacer aflorar rápidamente los temas ocultos en miles de reseñas o tickets.

## Step 5 · Entity Linking

[confident] La vinculación de entidades va un paso más allá.
[600ms]
[impressed] Encuentra las entidades conocidas de tu texto —aquí, Microsoft, Bill Gates y Paul Allen— y vincula cada una a su propia página en una base de conocimiento confiable como Wikipedia.
[600ms]
[reassuring] Ese vínculo es lo que resuelve la ambigüedad: una palabra como "Surface" o "Word" podría ser un objeto cotidiano o un producto de Microsoft, y la vinculación de entidades usa el contexto para asignarla exactamente a la correcta.

## Step 6 · Sentiment

[confident] El análisis de sentimiento lee la emoción del texto y la califica como positiva, negativa o neutral, cada una con una puntuación de confianza.
[600ms]
[intrigued] Pero fíjate bien en esta reseña: "Los auriculares Contoso X2 tienen una calidad de sonido excelente, pero la entrega fue dolorosamente lenta." En realidad dice dos cosas a la vez: la calidad de sonido que adora, y la entrega que detestó.
[600ms]
[calm] Así que una sola etiqueta general no encaja: lo más que podrías decir es "mixta", y eso oculta lo que realmente pasó.
[600ms]
[impressed] Aquí es donde la minería de opiniones profundiza. Divide la reseña por objetivo: "calidad de sonido" —el producto en sí— resulta positiva, mientras que "entrega" —la experiencia de envío— resulta negativa.
[600ms]
[optimistic] Dos aspectos, dos opiniones opuestas, separadas con claridad: así descubres no solo que una reseña es mixta, sino exactamente qué celebrar y qué corregir.

## Step 7 · PII Detection

[serious] Ahora una crítica para la privacidad: la detección de PII.
[600ms]
[confident] Encuentra automáticamente información de identificación personal: nombres, direcciones de correo, números de teléfono, identificadores de cuenta y más.
[600ms]
[reassuring] Y puede redactarla toda antes de que tu texto se almacene, se registre o se comparta con un modelo, de modo que los datos sensibles de los clientes nunca se filtren en tu flujo, ayudándote a cumplir las normas de forma predeterminada.

## Step 8 · Summarization

[confident] El resumen aborda los documentos largos de dos maneras.
[600ms]
[calm] El resumen extractivo extrae las frases más importantes, palabra por palabra.
[600ms]
[impressed] El resumen abstractivo va más allá y redacta un resumen nuevo y conciso con palabras totalmente nuevas, muy parecido a como lo haría una persona.

## Step 9 · In the Real World

[optimistic] Ahora combina estas capacidades y los problemas reales empiezan a desvanecerse.
[600ms]
[confident] Analiza los comentarios de los clientes a gran escala, revisa notas clínicas, procesa documentos financieros o resume largos archivos legales en segundos.
[600ms]
[encouraging] Cada capacidad es una pieza de construcción; juntas, hacen trabajo serio.

## Step 10 · Skills via MCP

[intrigued] Aquí es donde todo se conecta con los agentes.
[600ms]
[confident] Un agente de Foundry puede acceder a Azure AI Language a través de un servidor MCP, que expone cada capacidad que hemos visto como una herramienta invocable.
[600ms]
[impressed] Así, el propio agente decide, en el momento, cuándo detectar un idioma, extraer frases clave, redactar PII o resumir un documento: no hace falta un flujo rígido y codificado, solo la habilidad adecuada en el momento adecuado.

## Step 11 · Get Started

[encouraging] Entonces, ¿listo para probarlo tú mismo?
[800ms]
[confident] Crea un recurso de Language, experimenta con cada función en Language Studio y luego llámalas directamente desde tu aplicación, o conéctalas a un agente mediante MCP para que pueda usarlas como herramientas.
[600ms]
[optimistic] Sin entrenamiento de modelos, sin configuración pesada. Podrías estar extrayendo información real de tu texto hoy mismo.
