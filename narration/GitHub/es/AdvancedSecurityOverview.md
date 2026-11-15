# Narrator Script — GitHub · GitHub Advanced Security: Three Suites, One Picture

**Source animation:** [AdvancedSecurityOverview.html](../../../journeys/GitHub/AdvancedSecurityOverview.html)
**Language:** es

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-500>

---

## Step 1 · One repo, three different risks

[calm] El repositorio de Maya en Contoso tiene tres problemas: una clave filtrada, un paquete viejo y código inseguro.
[600ms]
[concerned] Y aquí está el detalle: ninguna revisión por sí sola encuentra los tres, porque cada uno necesita un tipo distinto de verificador.
[600ms]
[curious] Entonces, ¿cómo los cubre GitHub? Eso es lo que vamos a ver en esta lección.

## Step 2 · Three suites, three questions

[calm] GitHub agrupa sus herramientas de seguridad en tres suites, y cada suite responde una pregunta sobre un repositorio.
[600ms]
[confident] Secret Protection pregunta: ¿se filtró un secreto? Supply Chain Security pregunta: ¿son seguros mis paquetes? Code Security pregunta: ¿es seguro mi propio código?
[600ms]
[reassuring] La guía de estudio de G H 500 usa estos tres nombres. Supply Chain Security es el grupo que antes se llamaba Dependabot y revisión de dependencias.

## Step 3 · The Security tab: where alerts live

[calm] Todas las alertas de un repositorio llegan a una sola pestaña. Esta es la pestaña Seguridad, con una barra lateral que lista los tipos de alerta y las herramientas de reportes.
[600ms]
[confident] Las alertas de Dependabot, del escaneo de código y del escaneo de secretos están juntas. La política de seguridad y los avisos se encargan de los reportes.
[600ms]
[curious] En GitHub punto com, la pestaña se llama Seguridad y calidad. En la documentación antigua se llama solo Seguridad.

## Step 4 · Public, private, licensed: what you get

[calm] Lo que obtienes depende del repositorio. Algunas funciones vienen con todos los planes: el grafo de dependencias y las alertas de Dependabot.
[600ms]
[confident] Los repositorios públicos reciben más sin costo, como el escaneo de secretos, la protección contra push, el escaneo de código y Autofix.
[600ms]
[serious] Para el resto, los repositorios privados necesitan una licencia de Secret Protection o de Code Security. Aquí no se muestran los precios.

## Step 5 · How each suite finds problems

[curious] Cada suite encuentra los problemas a su manera.
[600ms]
[confident] Los patrones detectan secretos. La GitHub Advisory Database detecta paquetes vulnerables. Y las consultas de CodeQL detectan código inseguro.
[600ms]
[impressed] El escaneo de secretos revisa todo el historial de Git, y Dependabot te avisa cuando aparece un aviso nuevo o cambia tu grafo de dependencias.

## Step 6 · Stop it early, or check before merge

[calm] Hay dos enfoques. El de prevención detiene el problema desde el origen, como cuando la protección contra push bloquea un push.
[600ms]
[confident] El enfoque de control deja pasar el trabajo y lo revisa en la pull request antes de fusionar, con la protección de fusión del escaneo de código y la revisión de dependencias.
[600ms]
[reassuring] Los buenos equipos usan los dos. El examen G H 500 te pide compararlos.

## Step 7 · Security overview: risk and coverage

[calm] Security overview es la vista de toda la organización.
[600ms]
[curious] La vista de Riesgo muestra dónde se acumulan las alertas de todos los tipos. La vista de Cobertura muestra qué repositorios usan qué funciones.
[600ms]
[confident] Así puedes detectar repositorios que todavía no tienen ninguna protección activada. Los números que ves aquí son inventados.

## Step 8 · Who does what

[calm] Una alerta, tres personas. Maya, en desarrollo, la corrige en el código.
[600ms]
[confident] Noor, responsable de seguridad, ve y da seguimiento a las alertas en todas partes. Ravi, el administrador, activa las funciones y define las reglas.
[600ms]
[reassuring] Responsable de seguridad es un rol real de la organización. Los propietarios y los administradores del repositorio configuran las funciones.

## Step 9 · Who sees alerts, and delegated bypass

[calm] Solo ven las alertas las personas con el acceso adecuado: escritura, mantenimiento, administración y los propietarios de la organización. Puedes agregar a más personas en la configuración.
[600ms]
[curious] Ahora, la protección contra push. Sin bypass delegado, los colaboradores pueden saltarse un bloqueo por su cuenta, sin nadie a quien pedirle permiso.
[600ms]
[confident] Con bypass delegado, para saltarse el bloqueo hace falta que un revisor apruebe o rechace la solicitud.

## Step 10 · Dismissing an alert: reason and note

[calm] A veces cierras una alerta que no vas a corregir. Elige el motivo que realmente sea verdadero.
[600ms]
[confident] Luego agrega una nota. Se queda en la línea de tiempo de la alerta, para que los auditores vean por qué.
[600ms]
[serious] Y recuerda: un secreto que se subió en un commit sigue considerándose comprometido hasta que lo revoques, aunque descartes su alerta.

## Step 11 · A secure SDLC on one page

[calm] La seguridad atraviesa todas las etapas, desde la planeación hasta el monitoreo, y cada etapa tiene una función de las tres suites.
[600ms]
[confident] Antes de que el repositorio exista en serio, bloquea los secretos y mantén los paquetes al día. Antes de fusionar, escanea, revisa y pon puertas de control.
[600ms]
[reassuring] Después de fusionar, vigila las alertas, Security overview y las campañas. Las cinco etapas son solo un marco para enseñar.

## Step 12 · Recap: pick the suite for each risk

[calm] Volvamos al repositorio de Maya. Cada riesgo tiene su suite, y cada suite tiene su propio verificador y su propia alerta.
[600ms]
[confident] La clave filtrada es de Secret Protection. El paquete viejo es de Supply Chain Security. El código inseguro es de Code Security.
[600ms]
[proud] Con eso cubrimos la primera área de habilidades de G H 500: las suites de seguridad de GitHub, sus funciones y su ecosistema.
