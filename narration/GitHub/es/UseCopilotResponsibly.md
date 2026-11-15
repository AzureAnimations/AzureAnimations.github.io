# Narrator Script — GitHub · Use Copilot Responsibly: Risks, Validation and Safe Habits

**Source animation:** [UseCopilotResponsibly.html](../../../journeys/GitHub/UseCopilotResponsibly.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-300>
- <https://learn.microsoft.com/ai/playbook/technology-guidance/overreliance-on-ai/overreliance-on-ai>

---

## Step 1 · It Compiled, So It Shipped

[calm] Maya acepta una sugerencia de Copilot para una alerta de calor. El build está en verde y las pruebas pasan.
[600ms]
[concerned] Pero la especificación dice alerta a treinta y cinco grados o más, y la sugerencia comprueba estrictamente mayor que. Hay un valor mal, y nadie lo ha revisado.
[600ms]
[serious] Copilot puede escribir código que parece válido pero no es correcto. Las marcas en verde muestran que se ejecutó, no que esté bien.

## Step 2 · How a Model Goes Wrong

[calm] Un modelo predice código probable. Así funciona, y también así es como se equivoca.
[600ms]
[concerned] Puede inventarse un método que no existe, repetir un patrón viejo que ya quedó obsoleto, o sonar totalmente seguro estando equivocado.
[600ms]
[serious] Eso es una alucinación: una salida que suena plausible pero es incorrecta o inventada. Es una razón clave para revisarlo todo.

## Step 3 · Bias in Suggestions

[curious] El código de entrenamiento refleja a las personas y los hábitos de quienes lo escribieron, así que una sugerencia puede dar por hecho, sin que lo notes, un solo tipo de usuario.
[600ms]
[confident] Indica en el propio prompt a quién debe atender el código. Luego prueba con nombres y entradas variados.
[600ms]
[reflective] Y revisa a quién deja fuera el código. Copilot puede repetir sesgos y errores de sus datos de entrenamiento.

## Step 4 · Insecure Code

[calm] Una sugerencia puede funcionar y aun así no ser segura. Aquí, lo que escribe un usuario se pega directo en una consulta a la base de datos.
[600ms]
[serious] Eso es una inyección de SQL. La solución es una consulta parametrizada, que trata la entrada como datos y nunca como parte del comando.
[600ms]
[confident] Esto se detecta con revisión, pruebas y escaneo de código, sobre todo en trabajo delicado en cuanto a seguridad.

## Step 5 · Licence and Public Code

[calm] Copilot escribe código nuevo, pero de vez en cuando una sugerencia puede coincidir con código público. La probabilidad es baja, pero real.
[600ms]
[confident] Una configuración decide si llegas a verla. Bloquear oculta la sugerencia que coincide. Permitir muestra la licencia y un enlace.
[600ms]
[reassuring] Trata una coincidencia como cualquier código que no escribiste tú: pruébala, escanéala y revisa si tiene vulnerabilidades. Los usuarios con licencia de la organización heredan su configuración.

## Step 6 · Privacy of What You Paste

[calm] Un prompt es tu código más contexto, y se envía al servicio de Copilot.
[600ms]
[serious] Así que no escribas ni pegues claves, contraseñas, tokens ni datos de clientes.
[600ms]
[reassuring] Usa marcadores de posición en su lugar. La protección de push bloquea los push que contienen secretos detectados, y las exclusiones de contenido mantienen ciertos archivos fuera del alcance de Copilot.

## Step 7 · Over-Reliance

[curious] Si aceptas todas las sugerencias, tus propias habilidades se van quedando dormidas, y acabas aceptando lo que no puedes comprobar.
[600ms]
[confident] Mantén el control. Primero piensa qué debería hacer el código y luego compáralo con lo que propone Copilot.
[600ms]
[encouraging] Incluso puedes pedirle a Copilot Chat que te explique el código de vuelta. Copilot no está diseñado para reemplazar tu experiencia.

## Step 8 · Validate Every Output

[calm] Trata una sugerencia como código de un colega nuevo.
[600ms]
[confident] Léela y pregúntate: ¿la entiendo y es lo que pedí? Ejecútala, prueba los casos límite y luego escanéala, antes de fusionar.
[600ms]
[impressed] Una prueba de caso límite justo en esos treinta y cinco grados habría detectado el error de Maya.

## Step 9 · Mitigations: Harm and Control

[curious] Cada daño de esta lección tiene su control. Elige un daño y mira el control que le corresponde, y quién actúa.
[600ms]
[confident] Son seis daños, uno por cada paso anterior. Los controles son hábitos, pruebas, escaneo y ajustes.
[600ms]
[reassuring] Los administradores definen algunos, como el filtro de código público y las exclusiones de contenido. La mayoría son simplemente tus hábitos.

## Step 10 · You Are the Author of Record

[calm] Copilot sugiere código, texto y correcciones. Tú revisas, pruebas, decides y respondes por el resultado.
[600ms]
[serious] Tu nombre va en el cambio, así que la responsabilidad es tuya.
[600ms]
[confident] Y una segunda persona, como Ravi, sigue leyendo la pull request. Son dos pares de ojos, no uno.

## Step 11 · Recap: Responsible-Use Checklist

[calm] Seis hábitos cubren los riesgos de esta lección: revisar, probar, escanear, cuidar la licencia, proteger tu privacidad y mantener el control.
[600ms]
[confident] Úsalos siempre, sea cual sea la función de Copilot que haya generado el resultado.
[600ms]
[proud] Este es el objetivo de usar GitHub Copilot de forma responsable de la guía de estudio de G H 300. La lista es un resumen en palabras sencillas, no una lista oficial.
