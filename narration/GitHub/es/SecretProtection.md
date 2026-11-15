# Narrator Script — GitHub · Secret Protection: Stop the Leak, Then Clean It Up

**Source animation:** [SecretProtection.html](../../../journeys/GitHub/SecretProtection.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · A Token in a Commit: Who Finds It

[calm] Maya sube un token en un commit por error. Tres partes pueden encontrarlo: quienes pueden leer el repositorio, el escaneo de secretos de GitHub y, si el repositorio es público, el proveedor del token.
[600ms]
[confident] El escaneo de secretos revisa todo el historial de Git, en todas las ramas.
[600ms]
[serious] Y aquí va la primera regla: un secreto que se subió en un commit es un secreto comprometido. El escaneo te avisa, pero no lo deshace.

## Step 2 · What Secret Scanning Looks For

[curious] Hay cuatro tipos de patrones que deciden qué cuenta como secreto: patrones de proveedores, patrones genéricos, patrones que escribes tú y secretos genéricos detectados con IA.
[600ms]
[confident] Además, no escanea solo código: también revisa issues, pull requests, discusiones, wikis y gists secretos.
[600ms]
[reassuring] Las alertas genéricas y las detectadas con IA tienen su propia lista, porque pueden dar más falsos positivos.

## Step 3 · Turn It On at Three Levels

[calm] Secret Protection se puede activar en un solo repositorio, desde la página de Configuración, por un administrador del repositorio.
[600ms]
[confident] O un propietario puede activarlo en muchos repositorios a la vez, con una configuración de seguridad de la organización o de la empresa.
[600ms]
[reassuring] Los repositorios públicos tienen escaneo de secretos automáticamente y sin costo. En los privados e internos, tú habilitas GitHub Secret Protection.

## Step 4 · Push Protection: Stop the Push

[curious] Activa y desactiva la protección de push, y compara los dos resultados.
[600ms]
[serious] Sin ella, el secreto entra primero y la alerta llega después. Con ella, el push se bloquea antes de llegar al repositorio.
[600ms]
[confident] Viene desactivada por defecto y requiere Secret Protection. La pueden habilitar un administrador del repositorio, un propietario de la organización, un responsable de seguridad o un propietario de la empresa.

## Step 5 · Bypass: Give a Reason or Ask First

[calm] Por defecto, cualquiera con acceso de escritura puede saltarse un bloqueo si da un motivo, como que se usó en pruebas, que es un falso positivo o que lo corregirá después.
[600ms]
[confident] El bypass delegado añade un paso de aprobación: un revisor decide antes de permitir el push. Las solicitudes expiran a los siete días.
[600ms]
[reassuring] De cualquier forma, cada bypass queda en el registro de auditoría y se envía por correo a los propietarios que siguen el repositorio, a los responsables de seguridad y a los administradores del repositorio.

## Step 6 · The Alert: Created, Open, Closed

[calm] Un secreto detectado se convierte en una alerta, que se crea cuando un escaneo encuentra un secreto o cuando alguien se salta la protección de push.
[600ms]
[serious] Sigue abierta hasta que alguien la cierra, con un motivo, un comentario opcional y un registro de quién y cuándo. El cierre es manual, incluso cuando el token ya no está en el código.
[600ms]
[curious] Las alertas de socios van al proveedor y no se muestran en el repositorio.

## Step 7 · Validity Checks: Is It Still Live?

[curious] Una comprobación de validez le pregunta al emisor del token si un secreto detectado todavía funciona.
[600ms]
[serious] Activo significa que aún se podría explotar, así que arréglalos primero. Inactivo ya no funciona, pero conviene confirmar que no se haya usado indebidamente.
[600ms]
[calm] Desconocido significa que no se admite o que no se pudo verificar. Los tokens de GitHub se comprueban por defecto, y los patrones de socios requieren activar las comprobaciones de validez.

## Step 8 · Respond in Order: Revoke, Then Clean Up

[serious] Trata un secreto subido en un commit como comprometido. Primero revócalo y rótalo, para que ya no sirva.
[600ms]
[confident] Luego revisa los registros por si hubo un uso indebido, y cierra la alerta.
[600ms]
[reassuring] Limpiar el historial de Git va al final. Lleva mucho tiempo y, una vez revocado el token, muchas veces ni hace falta.

## Step 9 · Dismiss With Care

[calm] Cerrar una alerta es una decisión que quizá tengas que defender después, así que elige el motivo que sea honesto.
[600ms]
[confident] Los motivos son falso positivo, usado en pruebas, revocado y no se corregirá. Deja siempre una nota, porque queda en la línea de tiempo de la alerta para las auditorías.
[600ms]
[serious] Y comprueba la validez antes de descartar.

## Step 10 · Alert Recipients and Path Exclusions

[curious] Decide a quién se le avisa de una filtración. Son los administradores, los responsables de seguridad, algunos propietarios y el autor del commit.
[600ms]
[calm] El correo solo llega si alguien sigue el repositorio y tiene activados los correos.
[600ms]
[confident] También puedes indicar rutas que el escaneo de secretos debe dejar en paz. Las alertas ahí se cierran como ignoradas por configuración.

## Step 11 · Custom Patterns: Write, Dry Run, Publish

[calm] Cuando ningún patrón integrado reconoce tu secreto, escribe el tuyo. Necesitas un nombre y una expresión regular con el formato del secreto.
[600ms]
[confident] Después, guarda y haz una prueba en seco. Muestra las coincidencias sin generar alertas, así que puedes ajustar el patrón sin riesgo.
[600ms]
[optimistic] Luego publícalo y, si quieres, activa la protección de push. También puedes definir patrones para una organización o una empresa.

## Step 12 · Public vs Private, and What You Can Now Do

[calm] Los repositorios públicos y privados se comportan distinto en el escaneo, las alertas y los tokens. Consulta la documentación de tu plan.
[600ms]
[confident] Ahora ponte a prueba con el objetivo de G H 500: configurar y usar Secret Protection.
[600ms]
[proud] Ya puedes activarlo, frenar fugas con la protección de push, clasificar alertas y responder en el orden correcto.
