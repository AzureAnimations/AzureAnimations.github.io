# Narrator Script — Security · Microsoft Defender for Cloud — Azure Security Journey

**Source animation:** [DefenderForCloud.html](../../../journeys/Security/DefenderForCloud.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction>
- <https://learn.microsoft.com/azure/defender-for-cloud/secure-score-security-controls>
- <https://learn.microsoft.com/azure/defender-for-cloud/exempt-resource>
- <https://learn.microsoft.com/azure/defender-for-cloud/concept-regulatory-compliance-standards>

---

## Step 1 · Is my Azure estate secure?

[calm] Contoso tiene servidores, contenedores, datos y aplicaciones repartidos en muchas suscripciones, y Priya necesita saber qué está débil y qué está bajo ataque.
[600ms]
[curious] De eso se encarga Microsoft Defender for Cloud, y esta lección lo cubre para los exámenes A Z 305, A Z 104 y A Z 700.
[600ms]
[reassuring] Para Defender XDR en Microsoft 365, mira mejor el recorrido de Zero Trust.

## Step 2 · Two pillars: posture and protection

[confident] Defender for Cloud hace dos trabajos. El primero es la administración de la postura, o CSPM, que encuentra y corrige debilidades.
[600ms]
[calm] El segundo es la protección de cargas de trabajo, o CWPP, que detecta amenazas y responde a ellas.
[600ms]
[reflective] Microsoft Learn también incluye DevSecOps, es decir, la seguridad del código y de los pipelines, como un tercer componente de esta plataforma de protección de aplicaciones nativas de la nube.

## Step 3 · Secure score and recommendations

[calm] Defender for Cloud evalúa tus recursos frente a un benchmark de seguridad, y aplica por defecto el Microsoft cloud security benchmark.
[600ms]
[confident] Genera recomendaciones y resume los resultados en una puntuación de seguridad. Si corriges más, la puntuación sube, y eso significa un menor riesgo identificado.
[600ms]
[encouraging] Foundational CSPM, con la puntuación y las recomendaciones, es gratis. Los números en pantalla son solo un ejemplo.

## Step 4 · Four ways to act on a recommendation

[calm] Cada recomendación indica el problema, su gravedad, los recursos afectados y los pasos para corregirlo.
[600ms]
[confident] Puedes corregirlo, bloquearlo con Denegar o Aplicar mediante Azure Policy, aceptarlo con una exención o asignarle un responsable.
[600ms]
[serious] Denegar y Aplicar solo funcionan con recursos de Azure y con un subconjunto de recomendaciones, y las reglas de gobernanza requieren el plan Defender CSPM.

## Step 5 · Regulatory compliance dashboard

[curious] Un estándar es un conjunto de controles, y cada control es un grupo de recomendaciones.
[600ms]
[calm] El panel muestra qué controles cumplen tus recursos. Un control que no se puede evaluar automáticamente aparece como no disponible, en gris.
[600ms]
[confident] El Microsoft cloud security benchmark viene activado por defecto, y las evaluaciones regulatorias adicionales requieren Defender CSPM.

## Step 6 · Attack paths and cloud security explorer

[curious] Defender CSPM mapea tu nube como un grafo y encuentra las rutas que un atacante podría seguir para llegar a tus activos críticos.
[600ms]
[impressed] Luego te sugiere la corrección que corta esa ruta, para que arregles lo que más importa.
[600ms]
[serious] El análisis de rutas de ataque y el Cloud Security Explorer forman parte del plan de pago Defender CSPM, y requieren análisis sin agente o la evaluación de vulnerabilidades de Defender for Servers.

## Step 7 · One Defender plan per workload

[calm] La protección de cargas de trabajo se activa plan por plan, y cada plan agrega detección de amenazas para un tipo de recurso.
[600ms]
[confident] Servidores, almacenamiento, bases de datos, contenedores, servicios de IA y más tienen cada uno su propio plan. Defender for Servers viene en Plan 1 y Plan 2.
[600ms]
[reassuring] Activa un plan en una suscripción y cubre ese tipo de recurso en toda la suscripción.

## Step 8 · Alerts, incidents and your SOC

[calm] Los planes habilitados generan alertas ordenadas por gravedad, con los recursos afectados y los pasos de corrección.
[600ms]
[confident] Defender for Cloud agrupa las alertas relacionadas en un solo incidente, para que el equipo vea una historia y no un montón de alertas sueltas.
[600ms]
[impressed] Las alertas se pueden enviar a un SIEM como Microsoft Sentinel, o a herramientas SOAR e ITSM, y también aparecen en el portal de Defender.

## Step 9 · Enable once, cover everything

[confident] Activa los planes a nivel de suscripción y eso protege sus recursos.
[600ms]
[curious] Para cubrir todo un grupo de administración, asigna la Azure Policy integrada que habilita Defender for Cloud, con una tarea de corrección.
[600ms]
[reassuring] El escaneo sin agente no necesita instalar nada en cada máquina. Forma parte de Defender CSPM y de Defender for Servers Plan 2.

## Step 10 · One view across clouds

[calm] Seguramente tu entorno no es solo Azure. Conecta cuentas de AWS y proyectos de GCP, y agrega servidores locales con Azure Arc.
[600ms]
[confident] Defender for Cloud usa conectores sin agente para AWS y GCP, así que tienes visibilidad de la postura y protección de cargas de trabajo más allá de Azure.
[600ms]
[impressed] Todo aparece en un solo lugar.

## Step 11 · What you pay for

[calm] Lo básico de la postura es gratis. La postura avanzada y cada plan de cargas de trabajo son de pago, y los cargos dependen de los planes y recursos que actives.
[600ms]
[reflective] Aquí no hay precios, a propósito, porque cambian. Usa la página de precios y la calculadora de costos.
[600ms]
[encouraging] Una suscripción nueva puede probar Defender for Cloud gratis durante treinta días, pero el análisis de malware de Defender for Storage se cobra desde el primer día.

## Step 12 · Which plan protects it?

[curious] Ahora te toca a ti. Elige un tipo de recurso y mira qué plan de Defender lo protege.
[600ms]
[calm] Verás qué detecta el plan, además de una recomendación de ejemplo para ese recurso.
[600ms]
[confident] Cada plan también tiene su propia recomendación que te pide activarlo, y el hallazgo que se muestra es solo un ejemplo, no la lista completa.

## Step 13 · Posture, protection, response

[calm] Encuentra y corrige debilidades, detecta amenazas y responde a ellas, y actívalo todo a escala.
[600ms]
[confident] Después compárate con las habilidades medidas de tu examen. La guía de A Z 700 menciona la puntuación de seguridad, el análisis de rutas de ataque y el Cloud Security Explorer.
[600ms]
[reassuring] A Z 305 incluye la administración del cumplimiento, y A Z 104 cubre la gobernanza y el monitoreo. Los exámenes cambian, así que lee la guía de estudio vigente.
