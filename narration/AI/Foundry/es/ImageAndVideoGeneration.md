# Narrator Script — Foundry · Image and Video Generation

**Source animation:** [ImageAndVideoGeneration.html](../../../../journeys/AI/Foundry/ImageAndVideoGeneration.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/ai-foundry/openai/how-to/dall-e>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/video-generation>
- <https://learn.microsoft.com/azure/ai-foundry/openai/concepts/content-credentials>

---

## Step 1 · Models that read, models that make

[calm] Algunos modelos leen. Un modelo de visión mira una imagen y responde en texto.
[600ms]
[curious] Un modelo de imagen generativa hace lo contrario. Toma tus palabras y crea una imagen completamente nueva.
[600ms]
[confident] Contoso Outdoor es nuestra empresa ficticia aquí, y cada imagen es un simple dibujo que representa el resultado de un modelo.

## Step 2 · Noise in, image out

[curious] Muchos modelos de imagen son modelos de difusión. Parten de ruido aleatorio y lo refinan, paso a paso, hasta que aparece una imagen.
[600ms]
[calm] Tu prompt guía cada uno de esos pasos, y un inicio aleatorio diferente da una imagen distinta.
[600ms]
[reflective] Los modelos difieren en diseño, así que trata esto como la idea, no como la receta.

## Step 3 · Describe what you want

[calm] Un buen prompt indica el tema, el estilo, cómo está enmarcado y qué dejar fuera.
[600ms]
[curious] Prueba las opciones aquí y observa cómo cambia la imagen con cada una.
[600ms]
[serious] Las restricciones van dentro del prompt, como no tener texto. Pero un modelo aún puede añadir cosas que no pediste, así que siempre revisa el resultado.

## Step 4 · Size, quality, how many

[calm] Junto al prompt, configuras algunas opciones: un tamaño, un nivel de calidad y cuántas imágenes pedir.
[600ms]
[curious] Observa cómo cambia la solicitud según elijas. Una llamada puede devolver entre una y diez imágenes.
[600ms]
[reassuring] Las imágenes de menor calidad y cuadradas generan más rápido, y algunos modelos aceptan tamaños personalizados, así que comprueba qué soporta tu despliegue.

## Step 5 · Edit with a mask

[curious] Para cambiar solo una parte de una imagen, envía tres cosas: la imagen, una máscara que marque el área y un prompt.
[600ms]
[calm] Todo lo que está fuera de la máscara sigue exactamente igual. Aquí, el pincel rosa sustituye a la máscara.
[600ms]
[confident] En la APIde edición, la máscara tiene un PNG del mismo tamaño que la imagen, y los píxeles totalmente transparentes marcan el área que va a cambiar.

## Step 6 · Remix with image-to-image

[curious] Dale al modelo una imagen existente más un prompt, y crea una nueva interpretación.
[600ms]
[calm] Puedes enviar varias imágenes de entrada a la vez, hasta dieciséis en una sola llamada de edición.
[600ms]
[reassuring] Una fidelidad de entrada alta conserva más detalles del original, aunque no todos los modelos soportan esa configuración, así que revisa el tuyo.

## Step 7 · From prompt to short clip

[curious] Los modelos de vídeo convierten texto, una imagen o un clip existente en un vídeo corto.
[600ms]
[calm] Se ejecuta como un trabajo. Lo envías, compruebas su estado y luego descargas el resultado.
[600ms]
[serious] La generación de vídeo con Sora 2 es una función de vista previa en Foundry, por lo que los detalles y la disponibilidad pueden cambiar.

## Step 8 · Filters on the way in and out

[serious] Las barandillas de protección revisan el aviso antes de que el modelo se ejecute y revisen la imagen después de hacerlo.
[600ms]
[calm] Las solicitudes o resultados inseguros se bloquean y tu aplicación recibe un error.
[600ms]
[confident] Funcionan con Azure AI Content Safety, que clasifica contenido de odio, sexual, violencia y autolesión, y puedes configurar los niveles para tu despliegue.

## Step 9 · Show it was made by AI

[curious] Las imágenes de Azure OpenAI modelos de imagen llevan Credenciales de Contenido: metadatos firmados que indican que la imagen ha sido generada AI.
[600ms]
[calm] Los modelos compatibles también pueden añadir una marca de agua invisible, que puede sobrevivir incluso cuando se eliminan los metadatos.
[600ms]
[reassuring] Las credenciales de contenido siguen el estándar de C2PA abierto, por lo que cualquiera puede comprobarlas con una herramienta de verificación.

## Step 10 · Deploy it, try it, call it

[calm] En Foundry, despliegas un modelo de imagen, pruebas tus prompts en el parque de juegos de Imágenes y luego copias el código generado.
[600ms]
[confident] Ese código llama al mismo despliegue desde tu app. Aquí no se muestran claves ni endpoints reales.
[600ms]
[serious] Prefiero Microsoft Entra ID inicio de sesión sin tecla antes que API teclas y espera límites de tasa, así que vuelve a intentarlo con el back-off.

## Step 11 · Create, protect, ship

[calm] Apunta y ajusta las opciones. Edita con máscaras y variaciones. Añade barreras de seguridad y procedencia.
[600ms]
[confident] Luego despláchalo todo a través de Foundry, para que tu app pueda llamarlo.
[600ms]
[proud] Las habilidades midieron el cambio, así que abre las guías oficiales de estudio para confirmar qué cubren los exámenes hoy.
