# Narrator Script — Security · Secure AI workloads in Azure: gateway, guardrails and Defender for AI

**Source animation:** [SecureAiWorkloads.html](../../../journeys/Security/SecureAiWorkloads.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/api-management/genai-gateway-capabilities>
- <https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-threat-protection>
- <https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding>

---

## Step 1 · A Foundry app goes live

[calm] Contoso Assist está abierto a quienes lo llaman, y el tráfico real está por llegar. Antes de eso, Priya, del equipo de seguridad, quiere tres respuestas.
[600ms]
[curious] ¿Quién puede llamarlo, qué puede salir mal dentro de una conversación y cómo nos daremos cuenta si alguien lo ataca?
[600ms]
[confident] Esta lección cubre la parte de IA de S C 500. Contoso, Priya y la app son ficticios.

## Step 2 · Three layers around one app

[calm] La respuesta son tres capas alrededor de una sola app. Un gateway al frente, barreras de protección por dentro y Defender vigilando todo alrededor.
[600ms]
[confident] Cada capa responde una pregunta, y cada una es una función distinta de Azure, así que las configuras en lugares diferentes.
[600ms]
[curious] El gateway es una capacidad de API Management, las barreras de protección son parte de Microsoft Foundry, y Defender for AI services es un plan de Defender for Cloud.

## Step 3 · AI gateway: one front door

[calm] Primero, la puerta. API Management puede ir delante de tus modelos, agentes y herramientas, así que toda llamada de IA pasa por un solo lugar que tú controlas.
[600ms]
[confident] El AI gateway es un conjunto de capacidades de API Management, no un producto aparte.
[600ms]
[curious] En Foundry es una función en vista previa que activas en Gestionar. Revisa Microsoft Learn para ver qué niveles se admiten hoy.

## Step 4 · Gateway policies on every call

[calm] Las políticas se ejecutan en orden en cada solicitud. Primero verifican quién llama, luego limitan los tokens y después registran lo que pasó.
[600ms]
[confident] El gateway puede acceder al modelo con una identidad administrada, así que la app no necesita una clave de API.
[600ms]
[reassuring] Las métricas de tokens van a monitoreo, y también se pueden registrar los prompts y las respuestas, para que veas el uso y detectes abusos.

## Step 5 · Content filters and guardrails

[calm] Ahora, el guardia. Una barrera de protección es un conjunto de controles con nombre dentro de Foundry. Cada control elige un riesgo, dónde revisarlo y qué hacer cuando hay una coincidencia.
[600ms]
[confident] Para odio, contenido sexual, violencia y autolesión, el nivel de bloqueo decide qué severidades se bloquean. Bajo bloquea solo la gravedad alta, y alto bloquea baja, media y alta.
[600ms]
[serious] Los clasificadores pueden equivocarse, así que pruébalos con tu propio contenido.

## Step 6 · Agent guardrails: four checkpoints

[calm] Los agentes necesitan más que una revisión del prompt. Una barrera de protección puede inspeccionar la entrada del usuario, la llamada a la herramienta, la respuesta de la herramienta y la salida final.
[600ms]
[serious] Esto está en vista previa. Los puntos de control de herramientas solo funcionan con herramientas que admiten moderación, así que las demás no se analizan.
[600ms]
[confident] Las barreras de protección se aplican a los agentes creados en Foundry Agent Service, así que confirma el tipo de tu agente antes de confiar en ellas.

## Step 7 · Try it: guardrail on, prompt replayed

[curious] Ahora pruébalo. Envía dos veces el mismo prompt riesgoso, una con la barrera de protección apagada y otra con ella encendida.
[600ms]
[impressed] Mueve el interruptor y mira qué cambia. Cuando se activa un control, el chat muestra qué riesgo se detectó y en qué punto de control.
[600ms]
[reassuring] Esto es una simulación. En Foundry creas una barrera de protección, la asignas y la pruebas en el playground con un modelo o agente que no sea de producción.

## Step 8 · Defender for AI services

[calm] Ahora, el vigilante. Activa un plan, y Defender for Cloud vigila los prompts y las respuestas para detectar ataques, y genera alertas.
[600ms]
[confident] Funciona con Prompt Shields y con la inteligencia de amenazas de Microsoft, y lo habilitas en los planes de Defender con el rol de Owner o Contributor.
[600ms]
[serious] Solo analiza texto. Y si la evidencia de prompts sospechosos está desactivada, el contenido del prompt se oculta en la alerta.

## Step 9 · An AI alert, end to end

[serious] Aquí se detiene un intento de jailbreak y se genera una alerta. Priya la abre e investiga con la evidencia.
[600ms]
[curious] El nombre, la gravedad y las tácticas de la alerta salen de las alertas de Defender for Cloud para servicios de IA.
[600ms]
[concerned] Si ves una variante detectada, Prompt Shields identificó el intento pero no lo bloqueó. Esa es tu señal para revisar la configuración de la barrera de protección.

## Step 10 · Data and AI security dashboard

[calm] Una sola vista de Defender for Cloud reúne tus recursos de datos y de IA, muestra qué tan protegidos están y te dice qué corregir primero.
[600ms]
[confident] Se habilita por suscripción y refleja los planes que activaste, así que para tener acceso completo necesitas varios de ellos, además del rol de explorador de seguridad.
[600ms]
[reflective] Los números en pantalla son ficticios.

## Step 11 · Which control answers which risk?

[curious] Seis riesgos, tres capas. Mira cómo cada riesgo cae en el control que mejor lo resuelve.
[600ms]
[confident] La identidad de quien llama y los presupuestos de tokens van en el gateway. Los prompts dañinos y las llamadas riesgosas a herramientas van en las barreras de protección. Los ataques en vivo y la postura van en Defender.
[600ms]
[reflective] En los diseños reales las capas se traslapan, así que cada tarjeta muestra el mejor ajuste, no el único.

## Step 12 · Recap: gate it, guard it, watch it

[calm] Ponle puerta, ponle guardia y vigílalo. El gateway se encarga de quién llama y de los presupuestos, las barreras de protección se encargan de los prompts y las herramientas, y Defender se encarga de las alertas y la postura.
[600ms]
[confident] Eso responde las tres preguntas de Priya, y se relaciona con proteger las cargas de trabajo de IA en las habilidades de S C 500.
[600ms]
[proud] Lee la guía de estudio vigente, porque la lista de habilidades cambia con el tiempo.
