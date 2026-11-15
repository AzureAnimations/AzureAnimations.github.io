# Narrator Script — GitHub · Security Operations: Prioritise, Remediate and Govern

**Source animation:** [SecurityOperations.html](../../../journeys/GitHub/SecurityOperations.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://docs.github.com/en/code-security/securing-your-organization>
- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A thousand alerts, one team

[calm] Contoso activó todos los escáneres. Y ahora la vista general de seguridad muestra más alertas abiertas de las que cuatro personas pueden leer.
[600ms]
[concerned] Entonces, ¿por dónde empiezas?
[600ms]
[confident] Esta lección sigue cuatro pasos. Ponle nombre a la alerta, priorízala, corrígela a escala y controla quién puede hacer excepciones.

## Step 2 · CVE, CWE and GHSA

[curious] En casi todas las alertas aparecen tres identificadores, y cada uno responde a una pregunta distinta.
[600ms]
[confident] Un CVE es una vulnerabilidad pública concreta. Un CWE es el tipo de debilidad que hay detrás. Y un GHSA es el registro del aviso en GitHub.
[600ms]
[calm] GitHub es una Autoridad de Numeración de CVE, así que puede asignar IDs de CVE. Usa el identificador correcto para buscar, filtrar y reportar.

## Step 3 · Severity, EPSS and exposure

[calm] La severidad dice qué tan grave es un defecto, de baja a crítica. EPSS dice qué tan probable es que lo exploten en los próximos treinta días.
[600ms]
[confident] La exposición dice si tu código realmente puede ser alcanzado. ¿El paquete está en producción o en desarrollo, y se puede llegar al código vulnerable?
[600ms]
[reflective] El análisis de alcance está en vista previa pública, para JavaScript y TypeScript. Lee las tres señales antes de ordenar la cola.

## Step 4 · A remediation workflow

[confident] Toda alerta sigue los mismos cinco pasos. Clasificar, asignar, corregir, verificar y cerrar.
[600ms]
[calm] Las alertas se pueden asignar a personas, equipos o agentes de IA. Una pull request con la corrección dispara un nuevo escaneo, así que el cambio se verifica antes de fusionarse.
[600ms]
[reassuring] Cada cambio queda en la línea de tiempo de la alerta. Y si no vas a corregirla, descártala con un motivo y un comentario.

## Step 5 · Security campaigns

[curious] Una campaña de seguridad agrupa alertas relacionadas, les da a los desarrolladores una fecha límite y un contacto, y le permite al equipo de seguridad ver cómo se achica el pendiente.
[600ms]
[confident] La creas desde la vista general de seguridad. Elige una plantilla o tus propios filtros, y luego define un nombre, una fecha límite y los responsables de la campaña.
[600ms]
[impressed] Sigue las alertas como abiertas, en curso, corregidas o descartadas. En las alertas de escaneo de código, Copilot Autofix se activa automáticamente.

## Step 6 · Bulk actions and auto-dismiss

[calm] Puedes descartar muchas alertas por un mismo motivo en una sola acción. O dejar que lo haga una regla a medida que llegan.
[600ms]
[confident] Las reglas de triaje automático pueden descartar o posponer alertas de Dependabot antes de que salgan las notificaciones. Los presets vienen de GitHub, y las reglas personalizadas requieren Code Security o Advanced Security.
[600ms]
[serious] De todos modos, deja registrado el porqué. Los motivos, los comentarios, la línea de tiempo y el registro de auditoría son tu rastro documental, y alguien te lo va a preguntar después.

## Step 7 · Alert ownership

[calm] Tres roles se reparten cada alerta. Los desarrolladores la corrigen.
[600ms]
[confident] El equipo de seguridad administra toda la cola. El rol de responsable de seguridad da acceso de lectura a todos los repositorios, acceso de escritura a todas las alertas de seguridad y acceso a la vista general de seguridad.
[600ms]
[curious] Los administradores definen las reglas dentro de las que trabaja todo el mundo. Los propietarios de la organización asignan el rol de responsable de seguridad.

## Step 8 · Delegated bypass and exceptions

[calm] A veces un push o una alerta de verdad es una excepción. La delegación permite que decida un revisor designado.
[600ms]
[confident] Con el bypass delegado, un push bloqueado puede pedir un bypass, y un revisor lo aprueba o lo rechaza. El descarte delegado funciona igual para alertas de escaneo de código, escaneo de secretos y Dependabot.
[600ms]
[reassuring] Los bypasses y los descartes quedan registrados, así que cada decisión consta.

## Step 9 · Rulesets that block a merge

[confident] Un conjunto de reglas convierte tu política de severidad en una puerta. Defines un umbral, y ninguna pull request que lo supere se puede fusionar.
[600ms]
[curious] La regla se llama Exigir resultados de escaneo de código. También bloquea cuando el análisis sigue en curso o no está configurado. Prueba los botones y mira cómo cambia la puerta.
[600ms]
[calm] La definen los administradores del repositorio y los propietarios de la organización.

## Step 10 · Tailor detection

[curious] La detección no es igual para todos. Elige un conjunto de consultas de CodeQL que se ajuste a tu riesgo.
[600ms]
[confident] Default y security-extended funcionan con la configuración predeterminada. Security-and-quality y los conjuntos personalizados necesitan la configuración avanzada.
[600ms]
[encouraging] También puedes enseñarle al escaneo de secretos tus propios formatos de token, con patrones personalizados escritos como expresiones regulares.

## Step 11 · Shift left, end to end

[calm] La verificación más temprana es la más barata. Si detectas los problemas a tiempo, nunca llegan al pendiente.
[600ms]
[confident] En el push, la protección de push bloquea un secreto. En la pull request, informan la revisión de dependencias y el escaneo de código. En la fusión, un conjunto de reglas puede bloquearla.
[600ms]
[reassuring] Después de la fusión, las alertas de Dependabot y el escaneo siguen vigilando.

## Step 12 · Recap: a monthly security review

[calm] El equipo de seguridad de Contoso ahora se reúne una vez al mes. Cada punto de la agenda es una idea de esta lección, dicha en palabras sencillas.
[600ms]
[confident] Ponle nombre a la alerta, priorízala, corrígela en bloque y revisa quién puede hacer excepciones. Después, hazlo cumplir y ajusta la detección.
[600ms]
[proud] Esto cubre las habilidades de operaciones de seguridad de la guía de estudio de G H 500. Ahora practica en tu propia organización.
